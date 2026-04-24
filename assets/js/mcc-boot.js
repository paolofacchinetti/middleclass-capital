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
const phoneViewport = window.matchMedia("(max-width: 760px), (max-aspect-ratio: 3/4)");
const phoneDefaultWindows = new Set(["members", "twitter"]);

function applyPhoneViewport() {
  if (!home || !phoneViewport.matches) return;
  let zIndex = 20;
  home.dataset.mccPhoneBooted = "true";
  home.style.setProperty("--mcc-boot-glow", "1");
  home.classList.add("is-phone-mode", "is-booted", "is-screen-mode", "is-screen-ready");
  desktop?.setAttribute("aria-hidden", "false");
  insertButton?.setAttribute("disabled", "true");
  insertButton?.setAttribute("aria-hidden", "true");

  const bringToFront = (windowEl) => {
    if (!windowEl) return;
    zIndex += 1;
    windowEl.style.zIndex = String(zIndex);
  };

  const setOpen = (name, open) => {
    const windowEl = desktopWindows.find((candidate) => candidate.dataset.mccWindow === name);
    if (!windowEl) return;
    windowEl.classList.toggle("is-closed", !open);
    windowEl.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) bringToFront(windowEl);
  };

  desktopWindows.forEach((windowEl) => {
    setOpen(windowEl.dataset.mccWindow, phoneDefaultWindows.has(windowEl.dataset.mccWindow));
    if (windowEl.dataset.mccPhoneFocusReady === "true") return;
    windowEl.dataset.mccPhoneFocusReady = "true";
    windowEl.addEventListener("pointerdown", () => {
      if (phoneViewport.matches) bringToFront(windowEl);
    });
  });

  desktopOpeners.forEach((button) => {
    if (button.dataset.mccPhoneReady === "true") return;
    button.dataset.mccPhoneReady = "true";
    button.addEventListener("click", (event) => {
      if (!phoneViewport.matches) return;
      event.preventDefault();
      setOpen(button.dataset.mccOpen, true);
    });
  });

  desktopClosers.forEach((button) => {
    if (button.dataset.mccPhoneReady === "true") return;
    button.dataset.mccPhoneReady = "true";
    button.addEventListener("click", (event) => {
      if (!phoneViewport.matches) return;
      event.preventDefault();
      event.stopPropagation();
      setOpen(button.dataset.mccClose, false);
    });
  });

  desktopFocusers.forEach((button) => {
    if (button.dataset.mccPhoneReady === "true") return;
    button.dataset.mccPhoneReady = "true";
    button.addEventListener("click", (event) => {
      if (!phoneViewport.matches) return;
      event.preventDefault();
      event.stopPropagation();
      bringToFront(desktopWindows.find((windowEl) => windowEl.dataset.mccWindow === button.dataset.mccFocus));
    });
  });

  home.classList.add("is-phone-window-setup");
}

applyPhoneViewport();
phoneViewport.addEventListener?.("change", applyPhoneViewport);

if (home && canvas && !phoneViewport.matches) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x080b07);
  scene.fog = new THREE.Fog(0x080b07, 4.7, 9.4);

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
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.98;
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

  function bumpNoiseTexture(width = 384, height = 384, repeat = [1, 1], contrast = 34) {
    const texture = makeTexture(width, height, (ctx, textureWidth, textureHeight) => {
      ctx.fillStyle = "#7f7f7f";
      ctx.fillRect(0, 0, textureWidth, textureHeight);
      for (let i = 0; i < textureWidth * textureHeight * 0.18; i += 1) {
        const value = 112 + Math.random() * contrast;
        ctx.fillStyle = `rgb(${value}, ${value}, ${value})`;
        ctx.fillRect(Math.random() * textureWidth, Math.random() * textureHeight, 1, 1);
      }
    });
    texture.repeat.set(...repeat);
    return texture;
  }

  function woodBumpTexture() {
    const texture = makeTexture(512, 512, (ctx, width, height) => {
      ctx.fillStyle = "#777";
      ctx.fillRect(0, 0, width, height);
      for (let y = 0; y < height; y += 7) {
        const value = 94 + Math.random() * 72;
        ctx.strokeStyle = `rgb(${value}, ${value}, ${value})`;
        ctx.lineWidth = 1 + Math.random() * 2;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x <= width; x += 14) {
          ctx.lineTo(x, y + Math.sin((x + y) * 0.035) * 8 + Math.sin(x * 0.012) * 3);
        }
        ctx.stroke();
      }
      for (let i = 0; i < 24; i += 1) {
        const cx = Math.random() * width;
        const cy = Math.random() * height;
        ctx.strokeStyle = `rgba(30,30,30,${0.12 + Math.random() * 0.12})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 18 + Math.random() * 32, 4 + Math.random() * 8, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
    texture.repeat.set(3, 2);
    return texture;
  }

  function grungeTexture(width = 768, height = 512, options = {}) {
    const texture = makeTexture(width, height, (ctx, textureWidth, textureHeight) => {
      ctx.clearRect(0, 0, textureWidth, textureHeight);
      const scratch = options.scratch || "255, 237, 192";
      const smudge = options.smudge || "0, 0, 0";
      for (let i = 0; i < (options.smudges || 70); i += 1) {
        const radius = 14 + Math.random() * 86;
        const x = Math.random() * textureWidth;
        const y = Math.random() * textureHeight;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${smudge}, ${0.035 + Math.random() * 0.075})`);
        gradient.addColorStop(1, `rgba(${smudge}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      }
      for (let i = 0; i < (options.scratches || 120); i += 1) {
        const x = Math.random() * textureWidth;
        const y = Math.random() * textureHeight;
        const length = 12 + Math.random() * 120;
        ctx.strokeStyle = `rgba(${scratch}, ${0.025 + Math.random() * 0.12})`;
        ctx.lineWidth = Math.random() > 0.82 ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + length, y + (Math.random() - 0.5) * 16);
        ctx.stroke();
      }
      for (let i = 0; i < (options.speckles || 1600); i += 1) {
        const alpha = Math.random() * 0.08;
        ctx.fillStyle = `rgba(${smudge}, ${alpha})`;
        ctx.fillRect(Math.random() * textureWidth, Math.random() * textureHeight, 1, 1);
      }
    });
    return texture;
  }

  function screenGlassTexture() {
    return makeTexture(512, 320, (ctx, width, height) => {
      ctx.clearRect(0, 0, width, height);
      const glow = ctx.createRadialGradient(width * 0.5, height * 0.5, 20, width * 0.5, height * 0.5, width * 0.62);
      glow.addColorStop(0, "rgba(218, 255, 245, 0.12)");
      glow.addColorStop(1, "rgba(218, 255, 245, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      const streak = ctx.createLinearGradient(0, 0, width, height * 0.55);
      streak.addColorStop(0, "rgba(255,255,255,0)");
      streak.addColorStop(0.36, "rgba(255,255,255,0.18)");
      streak.addColorStop(0.46, "rgba(255,255,255,0.05)");
      streak.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = streak;
      ctx.beginPath();
      ctx.moveTo(width * 0.1, 0);
      ctx.lineTo(width * 0.5, 0);
      ctx.lineTo(width * 0.25, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
      for (let y = 0; y < height; y += 4) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
        ctx.fillRect(0, y, width, 1);
      }
    });
  }

  function softShadowTexture() {
    return makeTexture(256, 128, (ctx, width, height) => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.48);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.34)");
      gradient.addColorStop(0.58, "rgba(0, 0, 0, 0.16)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    });
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
  const deskBumpTexture = woodBumpTexture();
  const plasticBumpTexture = bumpNoiseTexture(384, 384, [2.4, 2.4], 62);
  const wallBumpTexture = bumpNoiseTexture(512, 512, [2, 1.2], 88);
  const rubberBumpTexture = bumpNoiseTexture(256, 256, [2, 2], 48);
  const deskWearTexture = grungeTexture(1024, 512, {
    scratch: "255, 222, 158",
    smudge: "0, 0, 0",
    smudges: 120,
    scratches: 230,
    speckles: 2400,
  });
  const towerGrimeTexture = grungeTexture(512, 768, {
    scratch: "255, 244, 210",
    smudge: "38, 31, 20",
    smudges: 52,
    scratches: 90,
    speckles: 900,
  });
  const crtGrimeTexture = grungeTexture(768, 256, {
    scratch: "255, 244, 210",
    smudge: "26, 22, 16",
    smudges: 34,
    scratches: 80,
    speckles: 600,
  });
  const screenReflectionTexture = screenGlassTexture();
  const contactShadowTexture = softShadowTexture();

  const mats = {
    desk: new THREE.MeshStandardMaterial({
      map: deskTexture,
      bumpMap: deskBumpTexture,
      bumpScale: 0.034,
      color: 0x704525,
      roughness: 0.58,
      metalness: 0.03,
    }),
    wall: new THREE.MeshStandardMaterial({
      map: wallTexture,
      bumpMap: wallBumpTexture,
      bumpScale: 0.024,
      color: 0x242416,
      roughness: 0.98,
    }),
    plastic: new THREE.MeshStandardMaterial({
      map: plasticTexture,
      bumpMap: plasticBumpTexture,
      bumpScale: 0.014,
      color: 0xc2b79e,
      roughness: 0.78,
      metalness: 0.015,
    }),
    plasticDark: new THREE.MeshStandardMaterial({
      map: darkPlasticTexture,
      bumpMap: plasticBumpTexture,
      bumpScale: 0.01,
      color: 0x817967,
      roughness: 0.82,
    }),
    black: new THREE.MeshStandardMaterial({ color: 0x0d0e0c, roughness: 0.9, bumpMap: rubberBumpTexture, bumpScale: 0.006 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x171916, roughness: 0.94, bumpMap: rubberBumpTexture, bumpScale: 0.013 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x8a887d, roughness: 0.36, metalness: 0.45 }),
    slot: new THREE.MeshStandardMaterial({ color: 0x040404, roughness: 0.84 }),
    key: new THREE.MeshStandardMaterial({ map: plasticTexture, bumpMap: plasticBumpTexture, bumpScale: 0.006, color: 0xd0c7ad, roughness: 0.68 }),
    book: new THREE.MeshStandardMaterial({ color: 0x2a2414, roughness: 0.85 }),
    screenOff: new THREE.MeshStandardMaterial({ color: 0x071210, roughness: 0.18, metalness: 0.05, emissive: 0x000000 }),
    screenOn: new THREE.MeshStandardMaterial({ color: 0x0d938d, roughness: 0.22, emissive: 0x07847e, emissiveIntensity: 0 }),
    led: new THREE.MeshStandardMaterial({ color: 0xc9ff52, emissive: 0x98ff1f, emissiveIntensity: 0.7 }),
    amber: new THREE.MeshStandardMaterial({ color: 0xffb000, emissive: 0xff9a00, emissiveIntensity: 0.65 }),
    lampBulb: new THREE.MeshStandardMaterial({ color: 0xffc66d, emissive: 0xff9b2a, emissiveIntensity: 0.18, roughness: 0.22 }),
    lampShadeInner: new THREE.MeshStandardMaterial({ color: 0x10100d, roughness: 0.78, metalness: 0.02, side: THREE.BackSide }),
    label: new THREE.MeshStandardMaterial({ color: 0xe8dfc8, roughness: 0.9 }),
  };

  function addEdges(mesh, opacity = 0.15) {
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(mesh.geometry),
      new THREE.LineBasicMaterial({ color: 0x2b251b, transparent: true, opacity })
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

  function decalPlane(name, texture, size, position, parent = scene, rotation = [0, 0, 0], opacity = 1) {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(...size),
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        opacity,
        side: THREE.DoubleSide,
      })
    );
    mesh.name = name;
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    mesh.renderOrder = 3;
    parent.add(mesh);
    return mesh;
  }

  const ambient = new THREE.HemisphereLight(0xf8efd8, 0x10140f, 1.42);
  scene.add(ambient);

  const coolRim = new THREE.DirectionalLight(0x79bcb0, 0.85);
  coolRim.position.set(3.1, 2.4, 2.1);
  scene.add(coolRim);

  const frontFill = new THREE.DirectionalLight(0xffefd6, 0.44);
  frontFill.position.set(0.18, 1.7, 4.8);
  frontFill.target.position.set(0.12, 0.08, 0.62);
  scene.add(frontFill, frontFill.target);

  const rightFaceFill = new THREE.PointLight(0xffe0bc, 0.86, 5.4, 1.55);
  rightFaceFill.position.set(2.9, 0.96, 2.6);
  scene.add(rightFaceFill);

  const lowWarmFill = new THREE.PointLight(0xffb170, 0.4, 5.2, 1.85);
  lowWarmFill.position.set(-2.65, 0.08, 2.02);
  scene.add(lowWarmFill);

  const lamp = new THREE.SpotLight(0xffdfaa, 60, 8.8, Math.PI / 4.3, 0.58, 1.2);
  lamp.position.set(-2.34, 3.18, 2.76);
  lamp.target.position.set(-1.84, -0.56, 0.96);
  lamp.castShadow = true;
  lamp.shadow.mapSize.set(2048, 2048);
  scene.add(lamp, lamp.target);

  const screenLight = new THREE.PointLight(0x0aa49c, 0, 4.2);
  screenLight.position.set(1.42, 0.7, 0.5);
  scene.add(screenLight);

  box("wall", [8.8, 4.8, 0.18], [0, 1.05, -1.62], mats.wall, scene, false);
  box("desk", [9.2, 0.34, 4.8], [0, -0.78, 0.75], mats.desk, scene, false);
  box("desk-lip", [9.2, 0.2, 0.34], [0, -0.64, 2.94], mats.desk, scene, false);
  box("desk-back-shadow", [9.2, 0.08, 0.08], [0, -0.53, -1.18], mats.book, scene, false);
  decalPlane("desk-contact-grain", deskWearTexture, [8.7, 4.25], [0, -0.586, 0.82], scene, [-Math.PI / 2, 0, 0], 0.74);
  decalPlane("tower-contact-shadow", contactShadowTexture, [1.75, 0.7], [-1.1, -0.582, 0.12], scene, [-Math.PI / 2, 0, 0], 0.72);
  decalPlane("crt-contact-shadow", contactShadowTexture, [3.35, 0.86], [1.48, -0.581, 0.58], scene, [-Math.PI / 2, 0, 0], 0.58);
  decalPlane("keyboard-contact-shadow", contactShadowTexture, [2.1, 0.52], [1.46, -0.58, 1.15], scene, [-Math.PI / 2, 0, 0], 0.52);

  const lampGroup = new THREE.Group();
  lampGroup.position.set(-2.22, -0.52, 0.85);
  lampGroup.rotation.y = 0.18;
  scene.add(lampGroup);
  const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.36, 0.075, 36), mats.rubber);
  lampBase.position.set(0, 0.02, 0);
  lampBase.castShadow = true;
  lampBase.receiveShadow = true;
  lampGroup.add(lampBase);
  const lampBaseRim = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.012, 8, 38), mats.metal);
  lampBaseRim.position.set(0, 0.065, 0);
  lampBaseRim.rotation.x = Math.PI / 2;
  lampBaseRim.castShadow = true;
  lampGroup.add(lampBaseRim);
  const lampPole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.15, 12), mats.black);
  lampPole.position.set(0, 0.55, 0);
  lampPole.castShadow = true;
  lampGroup.add(lampPole);

  const lampShadeGroup = new THREE.Group();
  lampShadeGroup.position.set(-0.14, 1.18, 0.02);
  lampShadeGroup.rotation.z = -0.38;
  lampGroup.add(lampShadeGroup);
  const lampShadeProfile = [
    new THREE.Vector2(0.085, 0.135),
    new THREE.Vector2(0.15, 0.11),
    new THREE.Vector2(0.25, 0.035),
    new THREE.Vector2(0.34, -0.095),
    new THREE.Vector2(0.39, -0.19),
  ];
  const lampShadeGeometry = new THREE.LatheGeometry(lampShadeProfile, 32);
  lampShadeGeometry.computeVertexNormals();
  const lampShade = new THREE.Mesh(lampShadeGeometry, mats.black);
  lampShade.castShadow = true;
  lampShade.receiveShadow = true;
  lampShadeGroup.add(lampShade);
  const lampShadeLining = new THREE.Mesh(lampShadeGeometry.clone(), mats.lampShadeInner);
  lampShadeGroup.add(lampShadeLining);
  const lampShadeRim = new THREE.Mesh(new THREE.TorusGeometry(0.39, 0.014, 8, 36), mats.black);
  lampShadeRim.position.y = -0.19;
  lampShadeRim.rotation.x = Math.PI / 2;
  lampShadeRim.castShadow = true;
  lampShadeGroup.add(lampShadeRim);
  const lampShadeNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.095, 0.105, 20), mats.black);
  lampShadeNeck.position.y = 0.16;
  lampShadeNeck.castShadow = true;
  lampShadeGroup.add(lampShadeNeck);
  const lampBulb = new THREE.Mesh(new THREE.SphereGeometry(0.058, 18, 12), mats.lampBulb);
  lampBulb.position.set(-0.2, 1.02, 0.035);
  lampBulb.castShadow = false;
  lampGroup.add(lampBulb);
  const deskLampLight = new THREE.PointLight(0xffb257, 0.22, 2.3, 1.55);
  deskLampLight.position.copy(lampBulb.position);
  lampGroup.add(deskLampLight);
  const lampConeTargetLocal = new THREE.Vector3(-0.36, 0.04, 0.12);
  const deskLampSpot = new THREE.SpotLight(0xffb257, 0.5, 3.5, Math.PI / 6, 0.66, 1.1);
  deskLampSpot.position.copy(lampBulb.position);
  deskLampSpot.target.position.copy(lampConeTargetLocal);
  lampGroup.add(deskLampSpot, deskLampSpot.target);
  const lampPoolMaterial = new THREE.MeshBasicMaterial({
    color: 0xffb257,
    transparent: true,
    opacity: 0.08,
    depthWrite: false,
  });
  const lampPool = new THREE.Mesh(new THREE.CircleGeometry(0.58, 36), lampPoolMaterial);
  lampPool.rotation.x = -Math.PI / 2;
  lampPool.scale.set(1.15, 0.62, 1);
  lampPool.renderOrder = 4;
  scene.add(lampPool);
  const lampConeWorld = new THREE.Vector3();
  function syncLampCone() {
    lampGroup.localToWorld(lampConeWorld.copy(lampConeTargetLocal));
    lampPool.position.set(lampConeWorld.x, -0.595, lampConeWorld.z);
  }
  syncLampCone();
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.42, 18), mats.rubber);
  cup.position.set(0.36, 0.18, 0.1);
  cup.castShadow = true;
  cup.receiveShadow = true;
  lampGroup.add(cup);
  const cupRim = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.012, 8, 28), mats.metal);
  cupRim.position.set(0.36, 0.4, 0.1);
  cupRim.rotation.x = Math.PI / 2;
  cupRim.castShadow = true;
  lampGroup.add(cupRim);
  const cupHandle = new THREE.Mesh(new THREE.TorusGeometry(0.125, 0.015, 8, 24, Math.PI * 1.42), mats.rubber);
  cupHandle.position.set(0.53, 0.22, 0.1);
  cupHandle.rotation.z = Math.PI / 2;
  cupHandle.castShadow = true;
  lampGroup.add(cupHandle);

  function setDeskLamp(power) {
    const nextPower = clamp(power, 0, 1);
    deskLampLight.intensity = THREE.MathUtils.lerp(0.08, 0.62, nextPower);
    deskLampSpot.intensity = THREE.MathUtils.lerp(0.18, 2.15, nextPower);
    mats.lampBulb.emissiveIntensity = THREE.MathUtils.lerp(0.1, 1.75, nextPower);
    lampPoolMaterial.opacity = THREE.MathUtils.lerp(0.025, 0.3, nextPower);
  }

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
  decalPlane("tower-front-grime", towerGrimeTexture, [0.98, 2.56], [0, 0.55, 0.542], tower, [0, 0, 0], 0.48);
  [
    [-0.43, 1.9, 0.545],
    [0.43, 1.9, 0.545],
    [-0.43, -0.86, 0.545],
    [0.43, -0.86, 0.545],
  ].forEach((position, index) => {
    const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.012, 16), mats.metal);
    screw.name = `tower-screw-${index}`;
    screw.position.set(...position);
    screw.rotation.x = Math.PI / 2;
    screw.castShadow = true;
    tower.add(screw);
  });
  box("tower-side-shadow", [0.055, 2.72, 0.78], [-0.55, 0.58, 0.04], mats.plasticDark, tower, false);
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
  decalPlane("crt-screen-glass-reflection", screenReflectionTexture, [2.11, 1.28], [0, 0.84, 0.446], crt, [0, 0, 0], 0.96);
  const screenFace = { width: 2.15, height: 1.32, z: 0.034 };
  box("crt-base-neck", [1.02, 0.25, 0.58], [0, -0.35, -0.02], mats.plasticDark, crt);
  box("crt-base", [1.76, 0.3, 0.88], [0, -0.54, 0], mats.plasticDark, crt);
  for (let i = 0; i < 5; i += 1) {
    box(`crt-button-${i}`, [0.08, 0.045, 0.055], [-0.32 + i * 0.16, -0.14, 0.36], mats.plasticDark, crt, false);
  }
  box("crt-power", [0.17, 0.12, 0.07], [0.58, -0.14, 0.36], mats.plasticDark, crt);
  box("crt-led", [0.06, 0.05, 0.06], [0.84, -0.14, 0.36], mats.led, crt, false);
  decalPlane("crt-lower-shell-grime", crtGrimeTexture, [2.72, 0.44], [0, -0.22, 0.365], crt, [0, 0, 0], 0.46);
  [
    [-1.22, 1.55, 0.37],
    [1.22, 1.55, 0.37],
    [-1.22, -0.12, 0.37],
    [1.18, -0.12, 0.37],
  ].forEach((position, index) => {
    const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.01, 16), mats.metal);
    screw.name = `crt-screw-${index}`;
    screw.position.set(...position);
    screw.rotation.x = Math.PI / 2;
    screw.castShadow = true;
    crt.add(screw);
  });

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
  const floppyRestY = -0.39;
  floppy.position.set(-0.82, floppyRestY, 1.43);
  floppy.rotation.set(0.34, 0.06, -0.08);
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

  let projectedCanvasWidth = 1;
  let projectedCanvasHeight = 1;

  function projectWorldPointBounds(points) {
    const corners = points.map((corner) => corner.project(camera));

    const minX = Math.min(...corners.map((corner) => corner.x));
    const maxX = Math.max(...corners.map((corner) => corner.x));
    const minY = Math.min(...corners.map((corner) => corner.y));
    const maxY = Math.max(...corners.map((corner) => corner.y));

    return {
      left: ((minX + 1) / 2) * projectedCanvasWidth,
      top: ((1 - maxY) / 2) * projectedCanvasHeight,
      width: ((maxX - minX) / 2) * projectedCanvasWidth,
      height: ((maxY - minY) / 2) * projectedCanvasHeight,
    };
  }

  function projectObjectBounds(object) {
    object.updateWorldMatrix(true, true);
    const bounds = new THREE.Box3().setFromObject(object);
    if (bounds.isEmpty()) return null;

    return projectWorldPointBounds([
      new THREE.Vector3(bounds.min.x, bounds.min.y, bounds.min.z),
      new THREE.Vector3(bounds.min.x, bounds.min.y, bounds.max.z),
      new THREE.Vector3(bounds.min.x, bounds.max.y, bounds.min.z),
      new THREE.Vector3(bounds.min.x, bounds.max.y, bounds.max.z),
      new THREE.Vector3(bounds.max.x, bounds.min.y, bounds.min.z),
      new THREE.Vector3(bounds.max.x, bounds.min.y, bounds.max.z),
      new THREE.Vector3(bounds.max.x, bounds.max.y, bounds.min.z),
      new THREE.Vector3(bounds.max.x, bounds.max.y, bounds.max.z),
    ]);
  }

  function projectScreenBounds() {
    screen.updateWorldMatrix(true, true);
    const halfWidth = screenFace.width / 2;
    const halfHeight = screenFace.height / 2;

    return projectWorldPointBounds([
      new THREE.Vector3(-halfWidth, -halfHeight, screenFace.z),
      new THREE.Vector3(halfWidth, -halfHeight, screenFace.z),
      new THREE.Vector3(-halfWidth, halfHeight, screenFace.z),
      new THREE.Vector3(halfWidth, halfHeight, screenFace.z),
    ].map((point) => point.applyMatrix4(screen.matrixWorld)));
  }

  function syncScreenFrame() {
    const screenRect = projectScreenBounds();
    if (!screenRect) return;

    const insetX = Math.max(2, screenRect.width * 0.018);
    const insetY = Math.max(2, screenRect.height * 0.024);
    const framedRect = {
      left: screenRect.left + insetX,
      top: screenRect.top + insetY,
      width: Math.max(1, screenRect.width - insetX * 2),
      height: Math.max(1, screenRect.height - insetY * 2),
    };
    const centerX = framedRect.left + framedRect.width / 2;
    const centerY = framedRect.top + framedRect.height / 2;
    const zoom = Math.max(
      projectedCanvasWidth / framedRect.width,
      projectedCanvasHeight / framedRect.height
    ) * 1.035;

    home.style.setProperty("--mcc-monitor-left", `${framedRect.left}px`);
    home.style.setProperty("--mcc-monitor-top", `${framedRect.top}px`);
    home.style.setProperty("--mcc-monitor-width", `${framedRect.width}px`);
    home.style.setProperty("--mcc-monitor-height", `${framedRect.height}px`);
    home.style.setProperty("--mcc-screen-origin-x", `${centerX}px`);
    home.style.setProperty("--mcc-screen-origin-y", `${centerY}px`);
    home.style.setProperty("--mcc-screen-zoom-active", `${zoom.toFixed(3)}`);
    home.style.setProperty("--mcc-screen-x-active", `${(projectedCanvasWidth / 2 - centerX).toFixed(2)}px`);
    home.style.setProperty("--mcc-screen-y-active", `${(projectedCanvasHeight / 2 - centerY).toFixed(2)}px`);
  }

  function syncFloppyHotspot() {
    if (!insertButton || inserted) return;
    const bounds = projectObjectBounds(floppy);
    if (!bounds) return;
    const padX = 12;
    const padY = 8;
    insertButton.style.setProperty("--mcc-floppy-hotspot-left", `${bounds.left - padX}px`);
    insertButton.style.setProperty("--mcc-floppy-hotspot-top", `${bounds.top - padY}px`);
    insertButton.style.setProperty("--mcc-floppy-hotspot-bottom", "auto");
    insertButton.style.setProperty("--mcc-floppy-hotspot-width", `${bounds.width + padX * 2}px`);
    insertButton.style.setProperty("--mcc-floppy-hotspot-height", `${bounds.height + padY * 2}px`);
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    projectedCanvasWidth = width;
    projectedCanvasHeight = height;
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
    camera.lookAt(cameraTarget);
    camera.updateMatrixWorld();

    syncScreenFrame();
    syncFloppyHotspot();
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

  function zoomToScreen(readyDelay = reducedMotion ? 0 : 420) {
    home.classList.remove("is-zooming");
    home.classList.add("is-screen-mode");
    window.setTimeout(() => home.classList.add("is-screen-ready"), readyDelay);
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
    setDeskLamp(1);
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
      floppy.position.y = floppyRestY + idle;
      mats.led.emissiveIntensity = 0.55 + Math.sin(time * 0.004) * 0.25;
      const lampFlicker =
        0.36
        + Math.sin(time * 0.010) * 0.12
        + Math.sin(time * 0.034) * 0.06
        - (Math.sin(time * 0.078) > 0.94 ? 0.18 : 0);
      setDeskLamp(lampFlicker);
    }
    camera.lookAt(cameraTarget);
    camera.updateMatrixWorld();
    if (!home.classList.contains("is-screen-mode")) syncScreenFrame();
    syncLampCone();
    syncFloppyHotspot();
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
  }

  window.addEventListener("resize", resize);
  resize();
  render(0);
}
