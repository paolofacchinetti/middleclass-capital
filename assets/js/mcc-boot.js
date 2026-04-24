import * as THREE from "./vendor/three/three.module.min.js";
import { gsap } from "./vendor/gsap/index.js";

const home = document.querySelector("[data-mcc-home]");
const canvas = document.querySelector("[data-mcc-canvas]");
const insertButton = document.querySelector("[data-mcc-insert]");
const desktop = document.querySelector("[data-mcc-desktop]");
const desktopWindows = Array.from(document.querySelectorAll("[data-mcc-window]"));
const desktopOpeners = Array.from(document.querySelectorAll("[data-mcc-open]"));
const desktopClosers = Array.from(document.querySelectorAll("[data-mcc-close]"));
const desktopFocusers = Array.from(document.querySelectorAll("[data-mcc-focus]"));
const articleTemplates = Array.from(document.querySelectorAll("[data-mcc-article-template]"));

if (home && canvas) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x070906);
  scene.fog = new THREE.Fog(0x070906, 4.5, 9);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0.03, 1.05, 5.55);
  const cameraTarget = new THREE.Vector3(0.12, 0.25, -0.18);
  const fittedCameraPosition = new THREE.Vector3().copy(camera.position);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const clickable = [];
  let inserted = false;

  function makeTexture(width, height, painter) {
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = width;
    textureCanvas.height = height;
    const ctx = textureCanvas.getContext("2d");
    painter(ctx, width, height);
    const texture = new THREE.CanvasTexture(textureCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 4;
    return texture;
  }

  function speckledTexture(base, fleck, line) {
    return makeTexture(384, 384, (ctx, width, height) => {
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);
      for (let i = 0; i < 7200; i += 1) {
        const alpha = Math.random() * 0.16;
        ctx.fillStyle = `rgba(${fleck}, ${alpha})`;
        ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
      }
      if (line) {
        ctx.globalAlpha = 0.16;
        ctx.strokeStyle = line;
        for (let y = 0; y < height; y += 13) {
          ctx.beginPath();
          ctx.moveTo(0, y + 0.5);
          ctx.lineTo(width, y + 0.5);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    });
  }

  function woodTexture() {
    const texture = makeTexture(512, 512, (ctx, width, height) => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#2b170b");
      gradient.addColorStop(0.35, "#4b2e18");
      gradient.addColorStop(0.7, "#2f1a0d");
      gradient.addColorStop(1, "#57351d");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      for (let y = 0; y < height; y += 9) {
        ctx.strokeStyle = `rgba(255, 210, 140, ${0.06 + Math.random() * 0.08})`;
        ctx.lineWidth = 1 + Math.random() * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + Math.sin(y) * 3);
        for (let x = 0; x <= width; x += 22) {
          ctx.lineTo(x, y + Math.sin((x + y) * 0.035) * 7);
        }
        ctx.stroke();
      }
      for (let i = 0; i < 2400; i += 1) {
        ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
        ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
      }
    });
    texture.repeat.set(3, 2);
    return texture;
  }

  function labelTexture(lines, options = {}) {
    const labelCanvas = document.createElement("canvas");
    labelCanvas.width = options.width || 512;
    labelCanvas.height = options.height || 320;
    const ctx = labelCanvas.getContext("2d");
    ctx.fillStyle = options.background || "#eee4cc";
    ctx.fillRect(0, 0, labelCanvas.width, labelCanvas.height);
    ctx.strokeStyle = options.rule || "#153c78";
    ctx.lineWidth = options.ruleWidth || 8;
    ctx.beginPath();
    ctx.moveTo(72, 66);
    ctx.lineTo(labelCanvas.width - 72, 66);
    ctx.moveTo(72, labelCanvas.height - 94);
    ctx.lineTo(labelCanvas.width - 72, labelCanvas.height - 94);
    ctx.stroke();
    ctx.fillStyle = options.color || "#14120f";
    ctx.font = options.font || "52px Georgia";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const lineHeight = options.lineHeight || 58;
    const start = (labelCanvas.height - (lines.length - 1) * lineHeight) / 2 - 4;
    lines.forEach((line, index) => {
      ctx.fillText(line, labelCanvas.width / 2, start + index * lineHeight);
    });
    if (options.badge) {
      ctx.fillStyle = "#111";
      ctx.fillRect(labelCanvas.width / 2 - 68, labelCanvas.height - 74, 136, 44);
      ctx.fillStyle = "#f3ead6";
      ctx.font = "30px 'Courier New'";
      ctx.fillText(options.badge, labelCanvas.width / 2, labelCanvas.height - 49);
    }
    const texture = new THREE.CanvasTexture(labelCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  const plasticTexture = speckledTexture("#b8ae97", "50, 45, 34", "#7d725c");
  const darkPlasticTexture = speckledTexture("#77705f", "20, 18, 15", "#4d483e");
  const wallTexture = speckledTexture("#11130c", "245, 234, 205", "#202316");
  const deskTexture = woodTexture();

  const mats = {
    desk: new THREE.MeshStandardMaterial({ map: deskTexture, color: 0x6a4525, roughness: 0.68, metalness: 0.04 }),
    wall: new THREE.MeshStandardMaterial({ map: wallTexture, color: 0x232415, roughness: 0.95 }),
    plastic: new THREE.MeshStandardMaterial({ map: plasticTexture, color: 0xc1b69c, roughness: 0.71, metalness: 0.02 }),
    plasticDark: new THREE.MeshStandardMaterial({ map: darkPlasticTexture, color: 0x837b69, roughness: 0.74 }),
    black: new THREE.MeshStandardMaterial({ color: 0x0d0e0c, roughness: 0.86 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x171916, roughness: 0.92 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x8a887d, roughness: 0.36, metalness: 0.45 }),
    slot: new THREE.MeshStandardMaterial({ color: 0x040404, roughness: 0.84 }),
    key: new THREE.MeshStandardMaterial({ color: 0xd0c7ad, roughness: 0.62 }),
    book: new THREE.MeshStandardMaterial({ color: 0x2a2414, roughness: 0.85 }),
    screenOff: new THREE.MeshStandardMaterial({ color: 0x071210, roughness: 0.3, emissive: 0x000000 }),
    screenOn: new THREE.MeshStandardMaterial({ color: 0x0d938d, roughness: 0.22, emissive: 0x07847e, emissiveIntensity: 0 }),
    led: new THREE.MeshStandardMaterial({ color: 0xc9ff52, emissive: 0x98ff1f, emissiveIntensity: 0.7 }),
    amber: new THREE.MeshStandardMaterial({ color: 0xffb000, emissive: 0xff9a00, emissiveIntensity: 0.65 }),
    label: new THREE.MeshStandardMaterial({ color: 0xe8dfc8, roughness: 0.9 }),
  };

  function addEdges(mesh, opacity = 0.28) {
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(mesh.geometry),
      new THREE.LineBasicMaterial({ color: 0x15120e, transparent: true, opacity })
    );
    mesh.add(edges);
  }

  function box(name, size, position, material, parent = scene, edges = true) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.name = name;
    mesh.position.set(...position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    if (edges) addEdges(mesh);
    parent.add(mesh);
    return mesh;
  }

  function plane(name, texture, size, position, parent = scene, rotation = [0, 0, 0]) {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(...size),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide })
    );
    mesh.name = name;
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    parent.add(mesh);
    return mesh;
  }

  const ambient = new THREE.HemisphereLight(0xf4ead0, 0x0d100d, 1.15);
  scene.add(ambient);

  const lamp = new THREE.SpotLight(0xffdfaa, 54, 8.5, Math.PI / 4.3, 0.58, 1.2);
  lamp.position.set(-3.6, 3.9, 3.4);
  lamp.target.position.set(-0.8, -0.24, 0.8);
  lamp.castShadow = true;
  lamp.shadow.mapSize.set(2048, 2048);
  scene.add(lamp, lamp.target);

  const screenLight = new THREE.PointLight(0x0aa49c, 0, 4.2);
  screenLight.position.set(1.42, 0.7, 0.5);
  scene.add(screenLight);

  box("wall", [8.8, 4.8, 0.18], [0, 1.05, -1.62], mats.wall, scene, false);
  box("desk", [9.2, 0.34, 4.8], [0, -0.78, 0.75], mats.desk, scene, false);
  box("desk-lip", [9.2, 0.2, 0.34], [0, -0.64, 2.94], mats.desk, scene, false);

  const lampGroup = new THREE.Group();
  lampGroup.position.set(-3.38, -0.52, 0.85);
  lampGroup.rotation.y = 0.16;
  scene.add(lampGroup);
  const lampPole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.15, 12), mats.black);
  lampPole.position.set(0, 0.55, 0);
  lampPole.castShadow = true;
  lampGroup.add(lampPole);
  const lampShade = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.22, 0.32, 20, 1, true), mats.black);
  lampShade.position.set(-0.16, 1.2, 0.02);
  lampShade.rotation.z = -0.28;
  lampShade.castShadow = true;
  lampGroup.add(lampShade);
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.42, 18), mats.rubber);
  cup.position.set(0.36, 0.18, 0.1);
  cup.castShadow = true;
  cup.receiveShadow = true;
  lampGroup.add(cup);

  const tower = new THREE.Group();
  tower.position.set(-1.12, 0.0, -0.18);
  scene.add(tower);
  box("tower-body", [1.05, 2.85, 0.88], [0, 0.62, 0], mats.plastic, tower);
  box("tower-top-bay", [0.78, 0.34, 0.055], [0, 1.78, 0.47], mats.plasticDark, tower);
  box("tower-mid-bay", [0.78, 0.34, 0.055], [0, 1.33, 0.475], mats.plasticDark, tower);
  box("tower-drive", [0.78, 0.25, 0.065], [0, 0.77, 0.485], mats.plasticDark, tower);
  box("tower-slot", [0.55, 0.1, 0.075], [-0.1, 0.77, 0.53], mats.slot, tower);
  box("tower-eject", [0.16, 0.08, 0.08], [0.31, 0.77, 0.535], mats.plasticDark, tower);
  box("tower-grille", [0.74, 0.52, 0.045], [-0.07, -0.34, 0.49], mats.black, tower);
  for (let i = 0; i < 7; i += 1) {
    box(`tower-grille-line-${i}`, [0.68, 0.015, 0.065], [-0.07, -0.53 + i * 0.07, 0.535], mats.plasticDark, tower, false);
  }
  box("tower-power", [0.2, 0.25, 0.08], [0.42, 0.02, 0.5], mats.plasticDark, tower);
  box("tower-reset", [0.12, 0.12, 0.08], [0.42, -0.56, 0.5], mats.plasticDark, tower);
  box("tower-led", [0.06, 0.06, 0.09], [0.41, 0.98, 0.53], mats.led, tower, false);
  box("tower-turbo", [0.06, 0.06, 0.09], [0.41, -0.88, 0.53], mats.led, tower, false);
  plane(
    "tower-label",
    labelTexture(["486 DX2-66"], { width: 280, height: 120, font: "28px 'Courier New'", ruleWidth: 0, background: "#9f9681" }),
    [0.42, 0.18],
    [-0.25, -0.04, 0.535],
    tower
  );

  const books = new THREE.Group();
  books.position.set(0.02, -0.23, -0.3);
  books.rotation.y = -0.04;
  scene.add(books);
  const bookColors = [0x2b2111, 0x3a2b16, 0x1f2118, 0x41331c];
  for (let i = 0; i < 4; i += 1) {
    const material = new THREE.MeshStandardMaterial({ color: bookColors[i], roughness: 0.82 });
    box(`book-${i}`, [0.18 + i * 0.01, 1.45 - i * 0.05, 0.52], [i * 0.18, 0.55 - i * 0.02, 0], material, books);
  }

  const crt = new THREE.Group();
  crt.position.set(1.47, 0.0, -0.14);
  crt.rotation.y = -0.025;
  scene.add(crt);
  box("crt-shell", [2.9, 2.02, 0.66], [0, 0.7, 0], mats.plastic, crt);
  box("crt-bezel", [2.38, 1.55, 0.075], [0, 0.82, 0.36], mats.black, crt);
  const screen = box("crt-screen", [2.15, 1.32, 0.06], [0, 0.84, 0.41], mats.screenOff, crt, false);
  box("crt-base-neck", [1.02, 0.25, 0.58], [0, -0.35, -0.02], mats.plasticDark, crt);
  box("crt-base", [1.76, 0.3, 0.88], [0, -0.54, 0], mats.plasticDark, crt);
  for (let i = 0; i < 5; i += 1) {
    box(`crt-button-${i}`, [0.08, 0.045, 0.055], [-0.32 + i * 0.16, -0.14, 0.36], mats.plasticDark, crt, false);
  }
  box("crt-power", [0.17, 0.12, 0.07], [0.58, -0.14, 0.36], mats.plasticDark, crt);
  box("crt-led", [0.06, 0.05, 0.06], [0.84, -0.14, 0.36], mats.led, crt, false);

  const keyboard = new THREE.Group();
  keyboard.position.set(1.47, -0.58, 1.08);
  keyboard.rotation.y = -0.035;
  scene.add(keyboard);
  box("keyboard-base", [1.86, 0.14, 0.66], [0, 0, 0], mats.plasticDark, keyboard);
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 12; col += 1) {
      box("key", [0.1, 0.04, 0.08], [-0.66 + col * 0.12, 0.09, -0.19 + row * 0.12], mats.key, keyboard, false);
    }
  }
  box("keyboard-cable-port", [0.18, 0.055, 0.06], [-0.5, 0.04, -0.36], mats.rubber, keyboard, false);

  const keyboardCableCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.99, -0.53, 0.72),
    new THREE.Vector3(0.64, -0.555, 0.53),
    new THREE.Vector3(0.05, -0.55, 0.36),
    new THREE.Vector3(-0.48, -0.54, 0.43),
    new THREE.Vector3(-0.75, -0.5, 0.36),
  ]);
  const keyboardCable = new THREE.Mesh(new THREE.TubeGeometry(keyboardCableCurve, 72, 0.018, 8, false), mats.rubber);
  keyboardCable.castShadow = true;
  keyboardCable.receiveShadow = true;
  scene.add(keyboardCable);
  box("tower-keyboard-port", [0.1, 0.075, 0.055], [-0.75, -0.5, 0.36], mats.rubber, scene, false);

  const floppy = new THREE.Group();
  floppy.name = "floppy";
  floppy.position.set(-0.82, -0.54, 1.43);
  floppy.rotation.set(-0.12, 0.06, -0.08);
  scene.add(floppy);
  const floppyBody = box("floppy-body", [0.88, 0.08, 0.88], [0, 0, 0], mats.black, floppy);
  const shutter = box("floppy-shutter", [0.46, 0.09, 0.23], [0, 0.012, -0.25], mats.metal, floppy);
  box("floppy-label-back", [0.6, 0.014, 0.4], [0, 0.056, 0.16], mats.label, floppy, false);
  const label = plane(
    "floppy-label",
    labelTexture(["Middle Class", "Capital"], { badge: "A:\\" }),
    [0.58, 0.36],
    [0, 0.066, 0.16],
    floppy,
    [-Math.PI / 2, 0, 0]
  );
  clickable.push(floppyBody, shutter, label);

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const aspect = width / height;
    const narrowViewport = clamp((1.48 - aspect) / 0.72, 0, 1);
    const verticalFov = THREE.MathUtils.degToRad(camera.fov);
    const sceneWidth = THREE.MathUtils.lerp(7.25, 8.1, narrowViewport);
    const sceneHeight = 4.45;
    const distanceForWidth = sceneWidth / (2 * Math.tan(verticalFov / 2) * aspect);
    const distanceForHeight = sceneHeight / (2 * Math.tan(verticalFov / 2));
    const fitDistance = Math.max(5.55, distanceForWidth, distanceForHeight);

    cameraTarget.x = THREE.MathUtils.lerp(0.12, -0.18, narrowViewport);
    camera.position.x = THREE.MathUtils.lerp(0.03, -0.26, narrowViewport);
    camera.position.y = THREE.MathUtils.lerp(1.05, 1.12, narrowViewport);
    camera.position.z = cameraTarget.z + fitDistance;
    fittedCameraPosition.copy(camera.position);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);

    const screenBounds = new THREE.Box3().setFromObject(screen);
    const screenCorners = [
      new THREE.Vector3(screenBounds.min.x, screenBounds.min.y, screenBounds.min.z),
      new THREE.Vector3(screenBounds.min.x, screenBounds.min.y, screenBounds.max.z),
      new THREE.Vector3(screenBounds.min.x, screenBounds.max.y, screenBounds.min.z),
      new THREE.Vector3(screenBounds.min.x, screenBounds.max.y, screenBounds.max.z),
      new THREE.Vector3(screenBounds.max.x, screenBounds.min.y, screenBounds.min.z),
      new THREE.Vector3(screenBounds.max.x, screenBounds.min.y, screenBounds.max.z),
      new THREE.Vector3(screenBounds.max.x, screenBounds.max.y, screenBounds.min.z),
      new THREE.Vector3(screenBounds.max.x, screenBounds.max.y, screenBounds.max.z),
    ].map((corner) => corner.project(camera));
    const minX = Math.min(...screenCorners.map((corner) => corner.x));
    const maxX = Math.max(...screenCorners.map((corner) => corner.x));
    const minY = Math.min(...screenCorners.map((corner) => corner.y));
    const maxY = Math.max(...screenCorners.map((corner) => corner.y));
    const screenLeft = ((minX + 1) / 2) * width;
    const screenTop = ((1 - maxY) / 2) * height;
    const screenWidth = ((maxX - minX) / 2) * width;
    const screenHeight = ((maxY - minY) / 2) * height;
    home.style.setProperty("--mcc-monitor-left", `${screenLeft}px`);
    home.style.setProperty("--mcc-monitor-top", `${screenTop}px`);
    home.style.setProperty("--mcc-monitor-width", `${screenWidth}px`);
    home.style.setProperty("--mcc-monitor-height", `${screenHeight}px`);
  }

  function setPointer(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function revealDesktop() {
    home.classList.add("is-booted");
    desktop?.setAttribute("aria-hidden", "false");
  }

  function beginScreenZoom() {
    home.classList.add("is-zooming");
  }

  function zoomToScreen() {
    home.classList.remove("is-zooming");
    home.classList.add("is-screen-mode");
    window.setTimeout(() => home.classList.add("is-screen-ready"), reducedMotion ? 0 : 420);
  }

  let desktopZIndex = 20;

  function getDesktopWindow(name) {
    return desktopWindows.find((windowEl) => windowEl.dataset.mccWindow === name);
  }

  function bringWindowToFront(windowEl) {
    if (!windowEl) return;
    desktopZIndex += 1;
    windowEl.style.zIndex = String(desktopZIndex);
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function enableWindowDrag(windowEl) {
    const titlebar = windowEl?.querySelector("header");
    if (!titlebar || !desktop || windowEl.dataset.mccDragReady === "true") return;
    windowEl.dataset.mccDragReady = "true";

    titlebar.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target.closest("button, a, [data-mcc-dynamic-action]")) return;

      event.preventDefault();
      bringWindowToFront(windowEl);

      const desktopRect = desktop.getBoundingClientRect();
      const windowRect = windowEl.getBoundingClientRect();
      const pointerOffsetX = event.clientX - windowRect.left;
      const pointerOffsetY = event.clientY - windowRect.top;
      const maxLeft = Math.max(0, desktopRect.width - windowRect.width);
      const maxTop = Math.max(0, desktopRect.height - windowRect.height);

      windowEl.classList.add("is-dragging");
      windowEl.style.left = `${clamp(windowRect.left - desktopRect.left, 0, maxLeft)}px`;
      windowEl.style.top = `${clamp(windowRect.top - desktopRect.top, 0, maxTop)}px`;
      windowEl.style.right = "auto";
      windowEl.style.bottom = "auto";
      try {
        titlebar.setPointerCapture?.(event.pointerId);
      } catch {
        // Window-level listeners keep dragging reliable even if capture is unavailable.
      }

      const moveWindow = (moveEvent) => {
        const nextLeft = clamp(moveEvent.clientX - desktopRect.left - pointerOffsetX, 0, maxLeft);
        const nextTop = clamp(moveEvent.clientY - desktopRect.top - pointerOffsetY, 0, maxTop);
        windowEl.style.left = `${nextLeft}px`;
        windowEl.style.top = `${nextTop}px`;
      };

      const stopDrag = () => {
        windowEl.classList.remove("is-dragging");
        try {
          titlebar.releasePointerCapture?.(event.pointerId);
        } catch {
          // Ignore capture cleanup when the browser did not grant capture.
        }
        window.removeEventListener("pointermove", moveWindow);
        window.removeEventListener("pointerup", stopDrag);
        window.removeEventListener("pointercancel", stopDrag);
      };

      window.addEventListener("pointermove", moveWindow);
      window.addEventListener("pointerup", stopDrag);
      window.addEventListener("pointercancel", stopDrag);
    });
  }

  function setWindowOpen(name, open) {
    const windowEl = getDesktopWindow(name);
    if (!windowEl) return;
    windowEl.classList.toggle("is-closed", !open);
    windowEl.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) bringWindowToFront(windowEl);
  }

  function makeWindowButton(modifier, label, action) {
    const button = document.createElement("button");
    button.className = `mcc-window-button mcc-window-button--${modifier}`;
    button.type = "button";
    button.setAttribute("aria-label", label);
    if (action) button.dataset.mccDynamicAction = action;
    return button;
  }

  let articleWindowCount = 0;

  function getArticleTemplate(articleID) {
    return articleTemplates.find((template) => template.dataset.mccArticleTemplate === articleID);
  }

  function openArticleWindow(articleID) {
    const template = getArticleTemplate(articleID);
    if (!template || !desktop) return;

    articleWindowCount += 1;
    const title = template.dataset.mccArticleTitle || template.dataset.mccArticleFile || "Article";
    const windowEl = document.createElement("section");
    windowEl.className = "mcc-preview-window mcc-article-window";
    windowEl.setAttribute("role", "dialog");
    windowEl.setAttribute("aria-label", title);
    windowEl.dataset.mccArticleWindow = articleID;

    const offset = (articleWindowCount - 1) % 5;
    windowEl.style.setProperty("--mcc-doc-window-x", `${260 + offset * 26}px`);
    windowEl.style.setProperty("--mcc-doc-window-y", `${110 + offset * 24}px`);

    const header = document.createElement("header");
    const label = document.createElement("span");
    label.textContent = title;
    const controls = document.createElement("span");
    controls.className = "mcc-window-buttons";
    controls.append(
      makeWindowButton("min", `Minimize ${title}`, "remove"),
      makeWindowButton("max", `Focus ${title}`, "focus"),
      makeWindowButton("close", `Close ${title}`, "remove")
    );
    header.append(label, controls);

    const body = document.createElement("div");
    body.className = "mcc-article-window__body";
    body.append(template.content.cloneNode(true));
    body.querySelectorAll("a").forEach((link) => {
      link.setAttribute("rel", "noopener");
    });

    windowEl.append(header, body);
    desktop.append(windowEl);
    bringWindowToFront(windowEl);
    enableWindowDrag(windowEl);
    windowEl.addEventListener("pointerdown", () => bringWindowToFront(windowEl));
  }

  desktopWindows.forEach((windowEl, index) => {
    windowEl.style.zIndex = String(desktopZIndex + index);
    enableWindowDrag(windowEl);
    windowEl.addEventListener("pointerdown", () => bringWindowToFront(windowEl));
  });

  desktopOpeners.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      setWindowOpen(button.dataset.mccOpen, true);
    });
  });

  desktopClosers.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setWindowOpen(button.dataset.mccClose, false);
    });
  });

  desktopFocusers.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      bringWindowToFront(getDesktopWindow(button.dataset.mccFocus));
    });
  });

  desktop?.addEventListener("click", (event) => {
    const articleButton = event.target.closest("[data-mcc-article-open]");
    if (articleButton) {
      event.preventDefault();
      openArticleWindow(articleButton.dataset.mccArticleOpen);
      return;
    }

    const dynamicButton = event.target.closest("[data-mcc-dynamic-action]");
    if (!dynamicButton) return;
    event.preventDefault();
    event.stopPropagation();
    const windowEl = dynamicButton.closest(".mcc-article-window");
    if (!windowEl) return;
    if (dynamicButton.dataset.mccDynamicAction === "remove") {
      windowEl.remove();
      return;
    }
    bringWindowToFront(windowEl);
  });

  function insertFloppy() {
    if (inserted) return;
    inserted = true;
    home.classList.remove("is-screen-ready");
    home.classList.add("is-booting");
    insertButton?.setAttribute("disabled", "true");

    if (reducedMotion) {
      mats.screenOn.emissiveIntensity = 1.25;
      screen.material = mats.screenOn;
      screenLight.intensity = 1.2;
      revealDesktop();
      zoomToScreen();
      return;
    }

    window.setTimeout(revealDesktop, 1420);
    window.setTimeout(beginScreenZoom, 1780);
    window.setTimeout(zoomToScreen, 4100);

    const timeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
    });

    timeline
      .to(floppy.rotation, { x: 0, y: 0, z: 0.02, duration: 0.46, ease: "back.out(1.2)" }, 0)
      .to(floppy.position, { x: -1.22, y: 0.79, z: 0.72, duration: 0.82 }, 0.08)
      .to(floppy.scale, { x: 0.72, y: 0.72, z: 0.72, duration: 0.62 }, 0.2)
      .to(floppy.position, { z: 0.18, duration: 0.5, ease: "power2.in" }, 0.78)
      .to(floppy.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 0.45, ease: "power2.in" }, 0.84)
      .to(camera.position, {
        x: fittedCameraPosition.x + 0.05,
        y: fittedCameraPosition.y - 0.03,
        z: Math.max(5.1, fittedCameraPosition.z - 0.45),
        duration: 1,
      }, 0.08)
      .to(mats.screenOn, { emissiveIntensity: 1.4, duration: 0.16, onStart: () => { screen.material = mats.screenOn; } }, 0.85)
      .to(screenLight, { intensity: 1.2, duration: 0.16 }, 0.85)
      .to(mats.screenOn, { emissiveIntensity: 0.18, duration: 0.12 }, 1.03)
      .to(screenLight, { intensity: 0.32, duration: 0.12 }, 1.03)
      .to(mats.screenOn, { emissiveIntensity: 1.75, duration: 0.2 }, 1.17)
      .to(screenLight, { intensity: 1.85, duration: 0.26 }, 1.17)
      .to(home, { "--mcc-boot-glow": 1, duration: 0.5 }, 1.16)
      .call(revealDesktop, [], 1.42)
      .call(beginScreenZoom, [], 1.78)
      .call(zoomToScreen, [], 4.1);
  }

  canvas.addEventListener("pointermove", (event) => {
    if (inserted) return;
    setPointer(event);
    raycaster.setFromCamera(pointer, camera);
    canvas.style.cursor = raycaster.intersectObjects(clickable, false).length ? "pointer" : "";
  });

  canvas.addEventListener("pointerdown", (event) => {
    if (inserted) return;
    setPointer(event);
    raycaster.setFromCamera(pointer, camera);
    if (raycaster.intersectObjects(clickable, false).length) insertFloppy();
  });

  insertButton?.addEventListener("click", insertFloppy);

  function render(time) {
    const idle = Math.sin(time * 0.0014) * 0.012;
    if (!inserted) {
      floppy.position.y = -0.54 + idle;
      mats.led.emissiveIntensity = 0.55 + Math.sin(time * 0.004) * 0.25;
    }
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
  }

  window.addEventListener("resize", resize);
  resize();
  render(0);
}
