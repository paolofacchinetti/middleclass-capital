(()=>{var Ao="184";var op=0,ih=1,lp=2;var ba=1,vl=2,gs=3,_s=0,zt=1,li=2,Xi=0,Ta=1,nh=2,rh=3,sh=4,cp=5;var vs=100,hp=101,up=102,dp=103,pp=104,fp=200,mp=201,gp=202,_p=203,vp=204,yp=205,xp=206,Mp=207,Sp=208,bp=209,Tp=210,Ep=211,wp=212,Ap=213,Cp=214,ah=0,oh=1,lh=2,yl=3,ch=4,hh=5,uh=6,dh=7,Rp=0,Pp=1,Ip=2,Ii=0,ph=1,fh=2,mh=3,Ea=4,gh=5,_h=6,vh=7;var yh=300,ys=301,cr=302,xl=303,Ml=304,wa=306,sr=1e3,Un=1001,Co=1002,vi=1003,Lp=1004;var Aa=1005;var Bt=1006,Sl=1007;var hr=1008;var ci=1009,xh=1010,Mh=1011,xs=1012,bl=1013,vn=1014,Li=1015,ji=1016,Tl=1017,El=1018,Ms=1020,Sh=35902,bh=35899,Dp=1021,Np=1022,Di=1023,Gn=1026,ur=1027,Th=1028,wl=1029,dr=1030,Eh=1031;var wh=1033,Al=33776,Cl=33777,Rl=33778,Pl=33779,Ah=35840,Ch=35841,Rh=35842,Ph=35843,Ih=36196,Lh=37492,Dh=37496,Nh=37488,Uh=37489,Il=37490,Oh=37491,Fh=37808,Bh=37809,zh=37810,kh=37811,Gh=37812,Vh=37813,Hh=37814,Wh=37815,Xh=37816,jh=37817,qh=37818,Yh=37819,Zh=37820,Jh=37821,Kh=36492,$h=36494,Qh=36495,eu=36283,tu=36284,Ll=36285,iu=36286;var Ks=2300,Ro=2301,wo=2302,Gc=2303,Vc=2400,Hc=2401,Wc=2402;var nu=0,Up=1,pr="",Lt="srgb",$s="srgb-linear",Qs="linear",Ke="srgb";var rr=7680;var Op=512,Fp=513,Bp=514,Dl=515,zp=516,kp=517,Nl=518,Gp=519,Xc=35044;var ru="300 es",hn=2e3,Kr=2001;function km(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vp(){let r=ea("canvas");return r.style.display="block",r}var wd={},$r=null;function su(...r){let e="THREE."+r.shift();$r?$r("log",e,...r):console.log(e,...r)}function Hp(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ae(...r){let e="THREE."+(r=Hp(r)).shift();if($r)$r("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Pe(...r){let e="THREE."+(r=Hp(r)).shift();if($r)$r("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Po(...r){let e=r.join(" ");e in wd||(wd[e]=!0,Ae(...r))}function Wp(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Xp={[ah]:1,[lh]:6,[ch]:7,[yl]:5,[oh]:0,[uh]:2,[dh]:4,[hh]:3},Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=1234567,Zr=Math.PI/180,ar=180/Math.PI;function fr(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ot[255&r]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[255&e]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[63&t|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[255&i]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function He(r,e,t){return Math.max(e,Math.min(t,r))}function jc(r,e){return(r%e+e)%e}function Ys(r,e,t){return(1-t)*r+t*e}function Yr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Ni={DEG2RAD:Zr,RAD2DEG:ar,generateUUID:fr,clamp:He,euclideanModulo:jc,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Ys,damp:function(r,e,t,i){return Ys(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(jc(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Ad=r);let e=Ad+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Zr},radToDeg:function(r){return r*ar},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":r.set(o*h,c*d,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*p,o*h,o*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Wt,denormalize:Yr},hu=class hu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hu.prototype.isVector2=!0;var le=hu,yi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3],f=s[a+0],p=s[a+1],m=s[a+2],u=s[a+3];if(d!==u||c!==f||l!==p||h!==m){let v=c*f+l*p+h*m+d*u;v<0&&(f=-f,p=-p,m=-m,u=-u,v=-v);let g=1-o;if(v<.9995){let _=Math.acos(v),y=Math.sin(_);g=Math.sin(g*_)/y,c=c*g+f*(o=Math.sin(o*_)/y),l=l*g+p*o,h=h*g+m*o,d=d*g+u*o}else{c=c*g+f*o,l=l*g+p*o,h=h*g+m*o,d=d*g+u*o;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=s[a],f=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*d+c*p-l*f,e[t+1]=c*m+h*f+l*d-o*p,e[t+2]=l*m+h*p+o*f-c*d,e[t+3]=h*m-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(s/2),f=c(i/2),p=c(n/2),m=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"YZX":this._x=f*h*d+l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d-f*p*m;break;case"XZY":this._x=f*h*d-l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d+f*p*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uu=class uu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=n+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uu.prototype.isVector3=!0;var P=uu,pc=new P,Cd=new yi,du=class du{constructor(e,t,i,n,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],p=i[5],m=i[8],u=n[0],v=n[3],g=n[6],_=n[1],y=n[4],S=n[7],x=n[2],M=n[5],C=n[8];return s[0]=a*u+o*_+c*x,s[3]=a*v+o*y+c*M,s[6]=a*g+o*S+c*C,s[1]=l*u+h*_+d*x,s[4]=l*v+h*y+d*M,s[7]=l*g+h*S+d*C,s[2]=f*u+p*_+m*x,s[5]=f*v+p*y+m*M,s[8]=f*g+p*S+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*s,p=l*s-a*c,m=t*d+i*f+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let u=1/m;return e[0]=d*u,e[1]=(n*l-h*i)*u,e[2]=(o*i-n*a)*u,e[3]=f*u,e[4]=(h*t-n*c)*u,e[5]=(n*s-o*t)*u,e[6]=p*u,e[7]=(i*c-l*t)*u,e[8]=(a*t-i*s)*u,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};du.prototype.isMatrix3=!0;var Oe=du,fc=new Oe,Rd=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gm(){let r={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ke&&(n.r=cn(n.r),n.g=cn(n.g),n.b=cn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(n.r=Jr(n.r),n.g=Jr(n.g),n.b=Jr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?Qs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[$s]:{primaries:e,whitePoint:i,transfer:Qs,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:i,transfer:Ke,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),r}var je=Gm();function cn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Jr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Fr,Io=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=ea("canvas")),Fr.width=e.width,Fr.height=e.height;let n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ea("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*cn(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*cn(t[i]/255)):t[i]=cn(t[i]);return{data:t,width:e.width,height:e.height}}return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vm=0,Qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(mc(n[a].image)):s.push(mc(n[a]))}else s=mc(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function mc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Io.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Hm=0,gc=new P,jt=class r extends Wi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=fr(),this.name="",this.source=new Qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:Ae(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null,jt.DEFAULT_MAPPING=yh,jt.DEFAULT_ANISOTROPY=1;var pu=class pu{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],m=c[9],u=c[2],v=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-u)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+u)<.1&&Math.abs(m+v)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,S=(p+1)/2,x=(g+1)/2,M=(h+f)/4,C=(d+u)/4,U=(m+v)/4;return y>S&&y>x?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=M/i,s=C/i):S>x?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=M/n,s=U/n):x<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(x),i=C/s,n=U/s),this.set(i,n,s,t),this}let _=Math.sqrt((v-m)*(v-m)+(d-u)*(d-u)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(v-m)/_,this.y=(d-u)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pu.prototype.isVector4=!0;var et=pu,Lo=class extends Wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new jt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Qr(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Lo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ta=class extends jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=vi,this.minFilter=vi,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Do=class extends jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=vi,this.minFilter=vi,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _l=class _l{constructor(e,t,i,n,s,a,o,c,l,h,d,f,p,m,u,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,d,f,p,m,u,v)}set(e,t,i,n,s,a,o,c,l,h,d,f,p,m,u,v){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=f,g[3]=p,g[7]=m,g[11]=u,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _l().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=a*h,p=a*d,m=o*h,u=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+m*l,t[5]=f-u*l,t[9]=-o*c,t[2]=u-f*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,p=c*d,m=l*h,u=l*d;t[0]=f+u*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=u+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,p=c*d,m=l*h,u=l*d;t[0]=f-u*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=u-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,p=a*d,m=o*h,u=o*d;t[0]=c*h,t[4]=m*l-p,t[8]=f*l+u,t[1]=c*d,t[5]=u*l+f,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,m=o*c,u=o*l;t[0]=c*h,t[4]=u-f*d,t[8]=m*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+m,t[10]=f-u*d}else if(e.order==="XZY"){let f=a*c,p=a*l,m=o*c,u=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+u,t[5]=a*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=u*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,i){let n=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),An.crossVectors(i,ei),An.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),An.crossVectors(i,ei)),An.normalize(),$a.crossVectors(ei,An),n[0]=An.x,n[4]=$a.x,n[8]=ei.x,n[1]=An.y,n[5]=$a.y,n[9]=ei.y,n[2]=An.z,n[6]=$a.z,n[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],p=i[13],m=i[2],u=i[6],v=i[10],g=i[14],_=i[3],y=i[7],S=i[11],x=i[15],M=n[0],C=n[4],U=n[8],A=n[12],N=n[1],j=n[5],G=n[9],Y=n[13],W=n[2],V=n[6],k=n[10],q=n[14],ie=n[3],de=n[7],Me=n[11],Se=n[15];return s[0]=a*M+o*N+c*W+l*ie,s[4]=a*C+o*j+c*V+l*de,s[8]=a*U+o*G+c*k+l*Me,s[12]=a*A+o*Y+c*q+l*Se,s[1]=h*M+d*N+f*W+p*ie,s[5]=h*C+d*j+f*V+p*de,s[9]=h*U+d*G+f*k+p*Me,s[13]=h*A+d*Y+f*q+p*Se,s[2]=m*M+u*N+v*W+g*ie,s[6]=m*C+u*j+v*V+g*de,s[10]=m*U+u*G+v*k+g*Me,s[14]=m*A+u*Y+v*q+g*Se,s[3]=_*M+y*N+S*W+x*ie,s[7]=_*C+y*j+S*V+x*de,s[11]=_*U+y*G+S*k+x*Me,s[15]=_*A+y*Y+S*q+x*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],m=e[3],u=e[7],v=e[11],g=e[15],_=c*p-l*f,y=o*p-l*d,S=o*f-c*d,x=a*p-l*h,M=a*f-c*h,C=a*d-o*h;return t*(u*_-v*y+g*S)-i*(m*_-v*x+g*M)+n*(m*y-u*x+g*C)-s*(m*S-u*M+v*C)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],m=e[12],u=e[13],v=e[14],g=e[15],_=t*o-i*a,y=t*c-n*a,S=t*l-s*a,x=i*c-n*o,M=i*l-s*o,C=n*l-s*c,U=h*u-d*m,A=h*v-f*m,N=h*g-p*m,j=d*v-f*u,G=d*g-p*u,Y=f*g-p*v,W=_*Y-y*G+S*j+x*N-M*A+C*U;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/W;return e[0]=(o*Y-c*G+l*j)*V,e[1]=(n*G-i*Y-s*j)*V,e[2]=(u*C-v*M+g*x)*V,e[3]=(f*M-d*C-p*x)*V,e[4]=(c*N-a*Y-l*A)*V,e[5]=(t*Y-n*N+s*A)*V,e[6]=(v*S-m*C-g*y)*V,e[7]=(h*C-f*S+p*y)*V,e[8]=(a*G-o*N+l*U)*V,e[9]=(i*N-t*G-s*U)*V,e[10]=(m*M-u*S+g*_)*V,e[11]=(d*S-h*M-p*_)*V,e[12]=(o*A-a*j-c*U)*V,e[13]=(t*j-i*A+n*U)*V,e[14]=(u*y-m*x-v*_)*V,e[15]=(h*x-d*y+f*_)*V,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,f=s*l,p=s*h,m=s*d,u=a*h,v=a*d,g=o*d,_=c*l,y=c*h,S=c*d,x=i.x,M=i.y,C=i.z;return n[0]=(1-(u+g))*x,n[1]=(p+S)*x,n[2]=(m-y)*x,n[3]=0,n[4]=(p-S)*M,n[5]=(1-(f+g))*M,n[6]=(v+_)*M,n[7]=0,n[8]=(m+y)*C,n[9]=(v-_)*C,n[10]=(1-(f+u))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Br.set(n[0],n[1],n[2]).length(),o=Br.set(n[4],n[5],n[6]).length(),c=Br.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Ai.copy(this);let l=1/a,h=1/o,d=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,t.setFromRotationMatrix(Ai),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(i-n),f=(t+e)/(t-e),p=(i+n)/(i-n),m,u;if(c)m=s/(a-s),u=a*s/(a-s);else if(o===hn)m=-(a+s)/(a-s),u=-2*a*s/(a-s);else{if(o!==Kr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),u=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=u,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-n),f=-(t+e)/(t-e),p=-(i+n)/(i-n),m,u;if(c)m=1/(a-s),u=a/(a-s);else if(o===hn)m=-2/(a-s),u=-(a+s)/(a-s);else{if(o!==Kr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(a-s),u=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=u,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};_l.prototype.isMatrix4=!0;var Ge=_l,Br=new P,Ai=new Ge,Wm=new P(0,0,0),Xm=new P(1,1,1),An=new P,$a=new P,ei=new P,Id=new Ge,Ld=new yi,un=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],f=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var es=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},jm=0,Dd=new P,zr=new yi,nn=new Ge,Qa=new P,Vs=new P,qm=new P,Ym=new yi,Nd=new P(1,0,0),Ud=new P(0,1,0),Od=new P(0,0,1),Fd={type:"added"},Zm={type:"removed"},kr={type:"childadded",child:null},_c={type:"childremoved",child:null},Tt=class r extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new P,t=new un,i=new yi,n=new P(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Oe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Ud,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Ud,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Vs,Qa,this.up):nn.lookAt(Qa,Vs,this.up),this.quaternion.setFromRotationMatrix(nn),n&&(nn.extractRotation(n.matrixWorld),zr.setFromRotationMatrix(nn),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fd),kr.child=e,this.dispatchEvent(kr),kr.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fd),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Tt.DEFAULT_UP=new P(0,1,0),Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jm={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let u of e.hand.values()){let v=t.getJointPose(u,i),g=this._getHandJoint(l,u);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},eo={h:0,s:0,l:0};function vc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=je.workingColorSpace){if(e=jc(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=vc(a,s,e+1/3),this.g=vc(a,s,e),this.b=vc(a,s,e-1/3)}return je.colorSpaceToWorking(this,n),this}setStyle(e,t=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return je.workingToColorSpace(Ft.copy(this),e),65536*Math.round(He(255*Ft.r,0,255))+256*Math.round(He(255*Ft.g,0,255))+Math.round(He(255*Ft.b,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ft.copy(this),t);let i=Ft.r,n=Ft.g,s=Ft.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-s)/d+(n<s?6:0);break;case n:c=(s-i)/d+2;break;case s:c=(i-n)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Lt){je.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,n=Ft.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(eo);let i=Ys(Cn.h,eo.h,t),n=Ys(Cn.s,eo.s,t),s=Ys(Cn.l,eo.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new ze;ze.NAMES=jp;var ia=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},na=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ci=new P,rn=new P,yc=new P,sn=new P,Gr=new P,Vr=new P,Bd=new P,xc=new P,Mc=new P,Sc=new P,bc=new et,Tc=new et,Ec=new et,ln=class r{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ci.subVectors(e,t),n.cross(Ci);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ci.subVectors(n,t),rn.subVectors(i,t),yc.subVectors(e,t);let a=Ci.dot(Ci),o=Ci.dot(rn),c=Ci.dot(yc),l=rn.dot(rn),h=rn.dot(yc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(l*c-o*h)*f,m=(a*h-o*c)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,sn)!==null&&sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,sn.x),c.addScaledVector(a,sn.y),c.addScaledVector(o,sn.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return bc.setScalar(0),Tc.setScalar(0),Ec.setScalar(0),bc.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,i),Ec.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(bc,s.x),a.addScaledVector(Tc,s.y),a.addScaledVector(Ec,s.z),a}static isFrontFacing(e,t,i,n){return Ci.subVectors(i,t),rn.subVectors(e,t),Ci.cross(rn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),.5*Ci.cross(rn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Gr.subVectors(n,i),Vr.subVectors(s,i),xc.subVectors(e,i);let c=Gr.dot(xc),l=Vr.dot(xc);if(c<=0&&l<=0)return t.copy(i);Mc.subVectors(e,n);let h=Gr.dot(Mc),d=Vr.dot(Mc);if(h>=0&&d<=h)return t.copy(n);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Gr,a);Sc.subVectors(e,s);let p=Gr.dot(Sc),m=Vr.dot(Sc);if(m>=0&&p<=m)return t.copy(s);let u=p*l-c*m;if(u<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(Vr,o);let v=h*m-p*d;if(v<=0&&d-h>=0&&p-m>=0)return Bd.subVectors(s,n),o=(d-h)/(d-h+(p-m)),t.copy(n).addScaledVector(Bd,o);let g=1/(v+u+f);return a=u*g,o=f*g,t.copy(i).addScaledVector(Gr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),io.subVectors(this.max,Hs),Hr.subVectors(e.a,Hs),Wr.subVectors(e.b,Hs),Xr.subVectors(e.c,Hs),Rn.subVectors(Wr,Hr),Pn.subVectors(Xr,Wr),er.subVectors(Hr,Xr);let t=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-er.z,er.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,er.z,0,-er.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-er.y,er.x,0];return!!wc(t,Hr,Wr,Xr,io)&&(t=[1,0,0,0,1,0,0,0,1],!!wc(t,Hr,Wr,Xr,io)&&(no.crossVectors(Rn,Pn),t=[no.x,no.y,no.z],wc(t,Hr,Wr,Xr,io)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ri).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},an=[new P,new P,new P,new P,new P,new P,new P,new P],Ri=new P,to=new si,Hr=new P,Wr=new P,Xr=new P,Rn=new P,Pn=new P,er=new P,Hs=new P,io=new P,no=new P,tr=new P;function wc(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){tr.fromArray(r,s);let o=n.x*Math.abs(tr.x)+n.y*Math.abs(tr.y)+n.z*Math.abs(tr.z),c=e.dot(tr),l=t.dot(tr),h=i.dot(tr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Wv=Km();function Km(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var bt=new P,ro=new le,$m=0,ni=class extends Wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xc,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ra=class extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sa=class extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ie=class extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qm=new si,Ws=new P,Ac=new P,Pi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qm.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Ws,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Ac)),this.expandByPoint(Ws.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},eg=0,_i=new Ge,Cc=new Tt,jr=new P,ti=new si,Xs=new si,Ct=new P,at=class r extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1}(e)?sa:ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,i){return _i.makeTranslation(e,t,i),this.applyMatrix4(_i),this}scale(e,t,i){return _i.makeScale(e,t,i),this.applyMatrix4(_i),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new P,1/0);if(e){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(ti.min,Xs.min),ti.expandByPoint(Ct),Ct.addVectors(ti.max,Xs.max),ti.expandByPoint(Ct)):(ti.expandByPoint(Xs.min),ti.expandByPoint(Xs.max))}ti.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(jr.fromBufferAttribute(e,l),Ct.add(jr)),n=Math.max(n,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new P,c[U]=new P;let l=new P,h=new P,d=new P,f=new le,p=new le,m=new le,u=new P,v=new P;function g(U,A,N){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,N),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,N),h.sub(l),d.sub(l),p.sub(f),m.sub(f);let j=1/(p.x*m.y-m.x*p.y);isFinite(j)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(j),v.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(j),o[U].add(u),o[A].add(u),o[N].add(u),c[U].add(v),c[A].add(v),c[N].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let U=0,A=_.length;U<A;++U){let N=_[U],j=N.start;for(let G=j,Y=j+N.count;G<Y;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let y=new P,S=new P,x=new P,M=new P;function C(U){x.fromBufferAttribute(n,U),M.copy(x);let A=o[U];y.copy(A),y.sub(x.multiplyScalar(x.dot(A))).normalize(),S.crossVectors(M,A);let N=S.dot(c[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,N)}for(let U=0,A=_.length;U<A;++U){let N=_[U],j=N.start;for(let G=j,Y=j+N.count;G<Y;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let n=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),u=e.getX(f+1),v=e.getX(f+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,u),a.fromBufferAttribute(t,v),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,u),l.fromBufferAttribute(i,v),o.add(h),c.add(h),l.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(u,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)n.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let u=0,v=c.length;u<v;u++){p=o.isInterleavedBufferAttribute?c[u]*o.data.stride+o.offset:c[u]*h;for(let g=0;g<h;g++)f[m++]=l[p++]}return new ni(f,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let f=e(l[h],i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Xv=new P;var tg=0,dn=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:Ae(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var jv=new P,qv=new P,Yv=new P,Zv=new le,Jv=new le,Kv=new Ge,$v=new P,Qv=new P,ey=new P,ty=new le,iy=new le,ny=new le;var ry=new P,sy=new P;var on=new P,Rc=new P,so=new P,In=new P,Pc=new P,ao=new P,Ic=new P,On=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Rc.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Rc);let s=.5*e.distanceTo(t),a=-this.direction.dot(so),o=In.dot(this.direction),c=-In.dot(so),l=In.lengthSq(),h=Math.abs(1-a*a),d,f,p,m;if(h>0)if(d=a*c-o,f=a*o-c,m=s*h,d>=0)if(f>=-m)if(f<=m){let u=1/h;d*=u,f*=u,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Rc).addScaledVector(so,f),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);let i=on.dot(this.direction),n=on.dot(on)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,i,n,s){Pc.subVectors(t,e),ao.subVectors(i,e),Ic.crossVectors(Pc,ao);let a,o=this.direction.dot(Ic);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}In.subVectors(this.origin,e);let c=a*this.direction.dot(ao.crossVectors(In,ao));if(c<0)return null;let l=a*this.direction.dot(Pc.cross(In));if(l<0||c+l>o)return null;let h=-a*In.dot(Ic);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zd=new Ge,ir=new On,oo=new Pi,kd=new P,lo=new P,co=new P,ho=new P,Lc=new P,uo=new P,Gd=new P,po=new P,Ze=class extends Tt{constructor(e=new at,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){uo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Lc.fromBufferAttribute(d,e),a?uo.addScaledVector(Lc,h):uo.addScaledVector(Lc.sub(t),h))}t.add(uo)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),oo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(oo,kd)===null||ir.origin.distanceToSquared(kd)>(e.far-e.near)**2))return;zd.copy(s).invert(),ir.copy(e.ray).applyMatrix4(zd),i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,ir)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,u=f.length;m<u;m++){let v=f[m],g=a[v.materialIndex];for(let _=Math.max(v.start,p.start),y=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));_<y;_+=3)n=fo(this,g,e,i,l,h,d,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),u=Math.min(o.count,p.start+p.count);m<u;m+=3)n=fo(this,a,e,i,l,h,d,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let m=0,u=f.length;m<u;m++){let v=f[m],g=a[v.materialIndex];for(let _=Math.max(v.start,p.start),y=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));_<y;_+=3)n=fo(this,g,e,i,l,h,d,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),u=Math.min(c.count,p.start+p.count);m<u;m+=3)n=fo(this,a,e,i,l,h,d,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}};function fo(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,lo),r.getVertexPosition(c,co),r.getVertexPosition(l,ho);let h=function(d,f,p,m,u,v,g,_){let y;if(y=f.side===1?m.intersectTriangle(g,v,u,!0,_):m.intersectTriangle(u,v,g,f.side===0,_),y===null)return null;po.copy(_),po.applyMatrix4(d.matrixWorld);let S=p.ray.origin.distanceTo(po);return S<p.near||S>p.far?null:{distance:S,point:po.clone(),object:d}}(r,e,t,i,lo,co,ho,Gd);if(h){let d=new P;ln.getBarycoord(Gd,lo,co,ho,d),n&&(h.uv=ln.getInterpolatedAttribute(n,o,c,l,d,new le)),s&&(h.uv1=ln.getInterpolatedAttribute(s,o,c,l,d,new le)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,c,l,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new P,materialIndex:0};ln.getNormal(lo,co,ho,f.normal),h.face=f,h.barycoord=d}return h}var ay=new et,oy=new et,ly=new et,cy=new et,hy=new Ge,uy=new P,dy=new Pi,py=new Ge,fy=new On;var No=class extends jt{constructor(e=null,t=1,i=1,n,s,a,o,c,l=1003,h=1003,d,f){super(null,a,o,c,l,h,n,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},my=new Ge,gy=new Ge;var _y=new Ge,vy=new Ge;var yy=new si,xy=new Ge,My=new Ze,Sy=new Pi;var Dc=new P,ig=new P,ng=new Oe,Vi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Dc.subVectors(i,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Dc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ng.getNormalMatrix(e),n=this.coplanarPoint(Dc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},nr=new Pi,rg=new le(.5,.5),mo=new P,Fn=class{constructor(e=new Vi,t=new Vi,i=new Vi,n=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],f=s[6],p=s[7],m=s[8],u=s[9],v=s[10],g=s[11],_=s[12],y=s[13],S=s[14],x=s[15];if(n[0].setComponents(l-a,p-h,g-m,x-_).normalize(),n[1].setComponents(l+a,p+h,g+m,x+_).normalize(),n[2].setComponents(l+o,p+d,g+u,x+y).normalize(),n[3].setComponents(l-o,p-d,g-u,x-y).normalize(),i)n[4].setComponents(c,f,v,S).normalize(),n[5].setComponents(l-c,p-f,g-v,x-S).normalize();else if(n[4].setComponents(l-c,p-f,g-v,x-S).normalize(),t===hn)n[5].setComponents(l+c,p+f,g+v,x+S).normalize();else{if(t!==Kr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,f,v,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);let t=rg.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(mo.x=n.normal.x>0?e.max.x:e.min.x,mo.y=n.normal.y>0?e.max.y:e.min.y,mo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zi=new Ge,ki=new Fn,Uo=class r{constructor(){this.coordinateSystem=hn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(zi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ki.setFromProjectionMatrix(zi,n.coordinateSystem,n.reversedDepth),ki.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(zi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ki.setFromProjectionMatrix(zi,n.coordinateSystem,n.reversedDepth),ki.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(zi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ki.setFromProjectionMatrix(zi,n.coordinateSystem,n.reversedDepth),ki.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(zi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ki.setFromProjectionMatrix(zi,n.coordinateSystem,n.reversedDepth),ki.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(zi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ki.setFromProjectionMatrix(zi,n.coordinateSystem,n.reversedDepth),ki.containsPoint(e))return!0}return!1}clone(){return new r}};var qc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},by=new Ge,Ty=new ze(1,1,1),Ey=new Fn,wy=new Uo,Ay=new si,Cy=new Pi,Ry=new P,Py=new P,Iy=new P,Ly=new qc,Dy=new Ze;var is=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oo=new P,Fo=new P,Vd=new Ge,js=new On,go=new Pi,Nc=new P,Hd=new P,Bo=class extends Tt{constructor(e=new at,t=new is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Oo.fromBufferAttribute(t,n-1),Fo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Oo.distanceTo(Fo);e.setAttribute("lineDistance",new Ie(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(n),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Vd.copy(n).invert(),js.copy(e.ray).applyMatrix4(Vd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=f,u=p-1;m<u;m+=l){let v=h.getX(m),g=h.getX(m+1),_=_o(this,e,js,c,v,g,m);_&&t.push(_)}if(this.isLineLoop){let m=h.getX(p-1),u=h.getX(f),v=_o(this,e,js,c,m,u,p-1);v&&t.push(v)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=f,u=p-1;m<u;m+=l){let v=_o(this,e,js,c,m,m+1,m);v&&t.push(v)}if(this.isLineLoop){let m=_o(this,e,js,c,p-1,f,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function _o(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(Oo.fromBufferAttribute(o,n),Fo.fromBufferAttribute(o,s),t.distanceSqToSegment(Oo,Fo,Nc,Hd)>i)return;Nc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Nc);return c<e.near||c>e.far?void 0:{distance:c,point:Hd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Wd=new P,Xd=new P,aa=class extends Bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Wd.fromBufferAttribute(t,n),Xd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Wd.distanceTo(Xd);e.setAttribute("lineDistance",new Ie(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ny=new Ge,Uy=new On,Oy=new Pi,Fy=new P;var oa=class extends jt{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ns=class extends jt{constructor(e,t,i,n,s,a,o,c,l){super(e,t,i,n,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fn=class extends jt{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,d=1){if(h!==Gn&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:d},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zo=class extends fn{constructor(e,t=1014,i=301,n,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},la=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mn=class r extends at{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,p=0;function m(u,v,g,_,y,S,x,M,C,U,A){let N=S/C,j=x/U,G=S/2,Y=x/2,W=M/2,V=C+1,k=U+1,q=0,ie=0,de=new P;for(let Me=0;Me<k;Me++){let Se=Me*j-Y;for(let _e=0;_e<V;_e++){let se=_e*N-G;de[u]=se*_,de[v]=Se*y,de[g]=W,l.push(de.x,de.y,de.z),de[u]=0,de[v]=0,de[g]=M>0?1:-1,h.push(de.x,de.y,de.z),d.push(_e/C),d.push(1-Me/U),q+=1}}for(let Me=0;Me<U;Me++)for(let Se=0;Se<C;Se++){let _e=f+Se+V*Me,se=f+Se+V*(Me+1),ce=f+(Se+1)+V*(Me+1),oe=f+(Se+1)+V*Me;c.push(_e,se,oe),c.push(se,ce,oe),ie+=6}o.addGroup(p,ie,A),p+=ie,f+=q}m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ko=class r extends at{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,f=t,p=2*d+f,m=2*i+s,u=n+1,v=new P,g=new P;for(let _=0;_<=m;_++){let y=0,S=0,x=0,M=0;if(_<=i){let A=_/i,N=A*Math.PI/2;S=-h-e*Math.cos(N),x=e*Math.sin(N),M=-e*Math.cos(N),y=A*d}else if(_<=i+s){let A=(_-i)/s;S=A*t-h,x=e,M=0,y=d+A*f}else{let A=(_-i-s)/i,N=A*Math.PI/2;S=h+e*Math.sin(N),x=e*Math.cos(N),M=e*Math.sin(N),y=d+f+A*d}let C=Math.max(0,Math.min(1,y/p)),U=0;_===0?U=.5/n:_===m&&(U=-.5/n);for(let A=0;A<=n;A++){let N=A/n,j=N*Math.PI*2,G=Math.sin(j),Y=Math.cos(j);g.x=-x*Y,g.y=S,g.z=x*G,o.push(g.x,g.y,g.z),v.set(-x*Y,M,x*G),v.normalize(),c.push(v.x,v.y,v.z),l.push(N+U,C)}if(_>0){let A=(_-1)*u;for(let N=0;N<n;N++){let j=A+N,G=A+N+1,Y=_*u+N,W=_*u+N+1;a.push(j,G,Y),a.push(G,W,Y)}}}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},rs=class r extends at{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new P,h=new le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=i+d/t*n;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xi=class r extends at{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],f=[],p=[],m=0,u=[],v=i/2,g=0;function _(y){let S=m,x=new le,M=new P,C=0,U=y===!0?e:t,A=y===!0?1:-1;for(let j=1;j<=n;j++)d.push(0,v*A,0),f.push(0,A,0),p.push(.5,.5),m++;let N=m;for(let j=0;j<=n;j++){let G=j/n*c+o,Y=Math.cos(G),W=Math.sin(G);M.x=U*W,M.y=v*A,M.z=U*Y,d.push(M.x,M.y,M.z),f.push(0,A,0),x.x=.5*Y+.5,x.y=.5*W*A+.5,p.push(x.x,x.y),m++}for(let j=0;j<n;j++){let G=S+j,Y=N+j;y===!0?h.push(Y,Y+1,G):h.push(Y+1,Y,G),C+=3}l.addGroup(g,C,y===!0?1:2),g+=C}(function(){let y=new P,S=new P,x=0,M=(t-e)/i;for(let C=0;C<=s;C++){let U=[],A=C/s,N=A*(t-e)+e;for(let j=0;j<=n;j++){let G=j/n,Y=G*c+o,W=Math.sin(Y),V=Math.cos(Y);S.x=N*W,S.y=-A*i+v,S.z=N*V,d.push(S.x,S.y,S.z),y.set(W,M,V).normalize(),f.push(y.x,y.y,y.z),p.push(G,1-A),U.push(m++)}u.push(U)}for(let C=0;C<n;C++)for(let U=0;U<s;U++){let A=u[U][C],N=u[U+1][C],j=u[U+1][C+1],G=u[U][C+1];(e>0||U!==0)&&(h.push(A,N,G),x+=3),(t>0||U!==s-1)&&(h.push(N,j,G),x+=3)}l.addGroup(g,x,0),g+=x})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Go=class r extends xi{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bn=class r extends at{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(p,m,u,v){let g=v+1,_=[];for(let y=0;y<=g;y++){_[y]=[];let S=p.clone().lerp(u,y/g),x=m.clone().lerp(u,y/g),M=g-y;for(let C=0;C<=M;C++)_[y][C]=C===0&&y===g?S:S.clone().lerp(x,C/M)}for(let y=0;y<g;y++)for(let S=0;S<2*(g-y)-1;S++){let x=Math.floor(S/2);S%2==0?(c(_[y][x+1]),c(_[y+1][x]),c(_[y][x])):(c(_[y][x+1]),c(_[y+1][x+1]),c(_[y+1][x]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,m){let u=3*p;m.x=e[u+0],m.y=e[u+1],m.z=e[u+2]}function h(p,m,u,v){v<0&&p.x===1&&(a[m]=p.x-1),u.x===0&&u.z===0&&(a[m]=v/2/Math.PI+.5)}function d(p){return Math.atan2(p.z,-p.x)}function f(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new P,u=new P,v=new P;for(let g=0;g<t.length;g+=3)l(t[g+0],m),l(t[g+1],u),l(t[g+2],v),o(m,u,v,p)})(n),function(p){let m=new P;for(let u=0;u<s.length;u+=3)m.x=s[u+0],m.y=s[u+1],m.z=s[u+2],m.normalize().multiplyScalar(p),s[u+0]=m.x,s[u+1]=m.y,s[u+2]=m.z}(i),function(){let p=new P;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let u=d(p)/2/Math.PI+.5,v=f(p)/Math.PI+.5;a.push(u,1-v)}(function(){let m=new P,u=new P,v=new P,g=new P,_=new le,y=new le,S=new le;for(let x=0,M=0;x<s.length;x+=9,M+=6){m.set(s[x+0],s[x+1],s[x+2]),u.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),_.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),S.set(a[M+4],a[M+5]),g.copy(m).add(u).add(v).divideScalar(3);let C=d(g);h(_,M+0,m,C),h(y,M+2,u,C),h(S,M+4,v,C)}})(),function(){for(let m=0;m<a.length;m+=6){let u=a[m+0],v=a[m+2],g=a[m+4],_=Math.max(u,v,g),y=Math.min(u,v,g);_>.9&&y<.1&&(u<.2&&(a[m+0]+=1),v<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},Vo=class r extends Bn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},vo=new P,yo=new P,Uc=new P,xo=new ln,ss=class extends at{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Zr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),f={},p=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:u,b:v,c:g}=xo;if(u.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),xo.getNormal(Uc),d[0]=`${Math.round(u.x*n)},${Math.round(u.y*n)},${Math.round(u.z*n)}`,d[1]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,d[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let _=0;_<3;_++){let y=(_+1)%3,S=d[_],x=d[y],M=xo[h[_]],C=xo[h[y]],U=`${S}_${x}`,A=`${x}_${S}`;A in f&&f[A]?(Uc.dot(f[A].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(C.x,C.y,C.z)),f[A]=null):U in f||(f[U]={index0:l[_],index1:l[y],normal:Uc.clone()})}}for(let m in f)if(f[m]){let{index0:u,index1:v}=f[m];vo.fromBufferAttribute(o,u),yo.fromBufferAttribute(o,v),p.push(vo.x,vo.y,vo.z),p.push(yo.x,yo.y,yo.z)}this.setAttribute("position",new Ie(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new le:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,n=[],s=[],a=[],o=new P,c=new Ge;for(let p=0;p<=e;p++){let m=p/e;n[p]=this.getTangentAt(m,new P)}s[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(He(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,m))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(He(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(n[m],p*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},as=class extends ai{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new le){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ho=class extends as{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function au(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,p*=h,n(a,o,f,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var jd=new P,qd=new P,Oc=new au,Fc=new au,Bc=new au,os=class extends ai{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new P){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(qd.subVectors(n[0],n[1]).add(n[0]),o=qd);let d=n[l%s],f=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(jd.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=jd),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(d),p),u=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(c),p);u<1e-4&&(u=1),m<1e-4&&(m=u),v<1e-4&&(v=u),Oc.initNonuniformCatmullRom(o.x,d.x,f.x,c.x,m,u,v),Fc.initNonuniformCatmullRom(o.y,d.y,f.y,c.y,m,u,v),Bc.initNonuniformCatmullRom(o.z,d.z,f.z,c.z,m,u,v)}else this.curveType==="catmullrom"&&(Oc.initCatmullRom(o.x,d.x,f.x,c.x,this.tension),Fc.initCatmullRom(o.y,d.y,f.y,c.y,this.tension),Bc.initCatmullRom(o.z,d.z,f.z,c.z,this.tension));return i.set(Oc.calc(h),Fc.calc(h),Bc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yd(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Zs(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function Js(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}var ca=class extends ai{constructor(e=new le,t=new le,i=new le,n=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new le){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Js(e,n.x,s.x,a.x,o.x),Js(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends ai{constructor(e=new P,t=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new P){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Js(e,n.x,s.x,a.x,o.x),Js(e,n.y,s.y,a.y,o.y),Js(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends ai{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends ai{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends ai{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Zs(e,n.x,s.x,a.x),Zs(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends ai{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Zs(e,n.x,s.x,a.x),Zs(e,n.y,s.y,a.y),Zs(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Yd(o,c.x,l.x,h.x,d.x),Yd(o,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new le().fromArray(n))}return this}},jo=Object.freeze({__proto__:null,ArcCurve:Ho,CatmullRomCurve3:os,CubicBezierCurve:ca,CubicBezierCurve3:Wo,EllipseCurve:as,LineCurve:ha,LineCurve3:Xo,QuadraticBezierCurve:ua,QuadraticBezierCurve3:da,SplineCurve:pa}),qo=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new jo[n.type]().fromJSON(n))}return this}},fa=class extends qo{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ha(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new ua(this.currentPoint.clone(),new le(e,t),new le(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new ca(this.currentPoint.clone(),new le(e,t),new le(i,n),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new pa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new as(e,t,i,n,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ma=class extends fa{constructor(e){super(e),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new fa().fromJSON(n))}return this}};function sg(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Zd(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=function(h,d,f,p){let m=[];for(let u=0,v=d.length;u<v;u++){let g=Zd(h,d[u]*p,u<v-1?d[u+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),m.push(pg(g))}m.sort(hg);for(let u=0;u<m.length;u++)f=ug(m[u],f);return f}(r,e,s,t)),r.length>80*t){o=r[0],c=r[1];let h=o,d=c;for(let f=t;f<n;f+=t){let p=r[f],m=r[f+1];p<o&&(o=p),m<c&&(c=m),p>h&&(h=p),m>d&&(d=m)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return ga(s,a,t,o,c,l,0),a}function Zd(r,e,t,i,n){let s;if(n===function(a,o,c,l){let h=0;for(let d=o,f=c-l;d<c;d+=l)h+=(a[f]-a[d])*(a[d+1]+a[f+1]),f=d;return h}(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=Jd(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Jd(a/i|0,r[a],r[a+1],s);return s&&ls(s,s.next)&&(va(s),s=s.next),s}function or(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!ls(i,i.next)&&pt(i.prev,i,i.next)!==0)i=i.next;else{if(va(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ga(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(c,l,h,d){let f=c;do f.z===0&&(f.z=Yc(f.x,f.y,l,h,d)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==c);f.prevZ.nextZ=null,f.prevZ=null,function(p){let m,u=1;do{let v,g=p;p=null;let _=null;for(m=0;g;){m++;let y=g,S=0;for(let M=0;M<u&&(S++,y=y.nextZ,y);M++);let x=u;for(;S>0||x>0&&y;)S!==0&&(x===0||!y||g.z<=y.z)?(v=g,g=g.nextZ,S--):(v=y,y=y.nextZ,x--),_?_.nextZ=v:p=v,v.prevZ=_,_=v;g=y}_.nextZ=null,u*=2}while(m>1)}(f)}(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?og(r,i,n,s):ag(r))e.push(c.i,r.i,l.i),va(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?ga(r=lg(or(r),e),e,t,i,n,s,2):a===2&&cg(r,e,t,i,n,s):ga(or(r),e,t,i,n,s,1);break}}}function ag(r){let e=r.prev,t=r,i=r.next;if(pt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),d=Math.min(o,c,l),f=Math.max(n,s,a),p=Math.max(o,c,l),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=p&&qs(n,o,s,c,a,l,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function og(r,e,t,i){let n=r.prev,s=r,a=r.next;if(pt(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,d=s.y,f=a.y,p=Math.min(o,c,l),m=Math.min(h,d,f),u=Math.max(o,c,l),v=Math.max(h,d,f),g=Yc(p,m,e,t,i),_=Yc(u,v,e,t,i),y=r.prevZ,S=r.nextZ;for(;y&&y.z>=g&&S&&S.z<=_;){if(y.x>=p&&y.x<=u&&y.y>=m&&y.y<=v&&y!==n&&y!==a&&qs(o,h,c,d,l,f,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=p&&S.x<=u&&S.y>=m&&S.y<=v&&S!==n&&S!==a&&qs(o,h,c,d,l,f,S.x,S.y)&&pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=u&&y.y>=m&&y.y<=v&&y!==n&&y!==a&&qs(o,h,c,d,l,f,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=_;){if(S.x>=p&&S.x<=u&&S.y>=m&&S.y<=v&&S!==n&&S!==a&&qs(o,h,c,d,l,f,S.x,S.y)&&pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function lg(r,e){let t=r;do{let i=t.prev,n=t.next.next;!ls(i,n)&&Yp(i,t,t.next,n)&&_a(i,n)&&_a(n,i)&&(e.push(i.i,t.i,n.i),va(t),va(t.next),t=r=n),t=t.next}while(t!==r);return or(t)}function cg(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fg(a,o)){let c=Zp(a,o);return a=or(a,a.next),c=or(c,c.next),ga(a,e,t,i,n,s,0),void ga(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function hg(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function ug(r,e){let t=function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(ls(n,a))return a;do{if(ls(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let u=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(u<=o&&u>h&&(h=u,l=a.x<a.next.x?a:a.next,u===o))return l}a=a.next}while(a!==s);if(!l)return null;let d=l,f=l.x,p=l.y,m=1/0;a=l;do{if(o>=a.x&&a.x>=f&&o!==a.x&&qp(c<p?o:h,c,f,p,c<p?h:o,c,a.x,a.y)){let u=Math.abs(c-a.y)/(o-a.x);_a(a,n)&&(u<m||u===m&&(a.x>l.x||a.x===l.x&&dg(l,a)))&&(l=a,m=u)}a=a.next}while(a!==d);return l}(r,e);if(!t)return e;let i=Zp(t,r);return or(i,i.next),or(t,t.next)}function dg(r,e){return pt(r.prev,r,e.prev)<0&&pt(e.next,r,r.next)<0}function Yc(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function pg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function qp(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function qs(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&qp(r,e,t,i,n,s,a,o)}function fg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Yp(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(_a(r,e)&&_a(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(pt(r.prev,r,e.prev)||pt(r,e.prev,e))||ls(r,e)&&pt(r.prev,r,r.next)>0&&pt(e.prev,e,e.next)>0)}function pt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ls(r,e){return r.x===e.x&&r.y===e.y}function Yp(r,e,t,i){let n=So(pt(r,e,t)),s=So(pt(r,e,i)),a=So(pt(t,i,r)),o=So(pt(t,i,e));return n!==s&&a!==o||!(n!==0||!Mo(r,t,e))||!(s!==0||!Mo(r,i,e))||!(a!==0||!Mo(t,r,i))||!(o!==0||!Mo(t,e,i))}function Mo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function So(r){return r>0?1:r<0?-1:0}function _a(r,e){return pt(r.prev,r,r.next)<0?pt(r,e,r.next)>=0&&pt(r,r.prev,e)>=0:pt(r,e,r.prev)<0||pt(r,r.next,e)<0}function Zp(r,e){let t=Zc(r.i,r.x,r.y),i=Zc(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Jd(r,e,t,i){let n=Zc(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function va(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Zc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Jc=class{static triangulate(e,t,i=2){return sg(e,t,i)}},Hi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Kd(e),$d(i,e);let a=e.length;t.forEach(Kd);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,$d(i,t[c]);let o=Jc.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Kd(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function $d(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Yo=class r extends at{constructor(e=new ma([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,u=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:mg,y,S,x,M,C,U=!1;if(g){y=g.getSpacedPoints(h),U=!0,f=!1;let L=!!g.isCatmullRomCurve3&&g.closed;S=g.computeFrenetFrames(h,L),x=new P,M=new P,C=new P}f||(v=0,p=0,m=0,u=0);let A=o.extractPoints(l),N=A.shape,j=A.holes;if(!Hi.isClockWise(N)){N=N.reverse();for(let L=0,z=j.length;L<z;L++){let b=j[L];Hi.isClockWise(b)&&(j[L]=b.reverse())}}function G(L){let z=10000000000000001e-36,b=L[0];for(let F=1;F<=L.length;F++){let B=F%L.length,I=L[B],Z=I.x-b.x,K=I.y-b.y,te=Z*Z+K*K,ae=Math.max(Math.abs(I.x),Math.abs(I.y),Math.abs(b.x),Math.abs(b.y));te<=z*ae*ae?(L.splice(B,1),F--):b=I}}G(N),j.forEach(G);let Y=j.length,W=N;for(let L=0;L<Y;L++){let z=j[L];N=N.concat(z)}function V(L,z,b){return z||Pe("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(z,b)}let k=N.length;function q(L,z,b){let F,B,I,Z=L.x-z.x,K=L.y-z.y,te=b.x-L.x,ae=b.y-L.y,ge=Z*Z+K*K,ee=Z*ae-K*te;if(Math.abs(ee)>Number.EPSILON){let ve=Math.sqrt(ge),ue=Math.sqrt(te*te+ae*ae),fe=z.x-K/ve,he=z.y+Z/ve,be=((b.x-ae/ue-fe)*ae-(b.y+te/ue-he)*te)/(Z*ae-K*te);F=fe+Z*be-L.x,B=he+K*be-L.y;let ke=F*F+B*B;if(ke<=2)return new le(F,B);I=Math.sqrt(ke/2)}else{let ve=!1;Z>Number.EPSILON?te>Number.EPSILON&&(ve=!0):Z<-Number.EPSILON?te<-Number.EPSILON&&(ve=!0):Math.sign(K)===Math.sign(ae)&&(ve=!0),ve?(F=-K,B=Z,I=Math.sqrt(ge)):(F=Z,B=K,I=Math.sqrt(ge/2))}return new le(F/I,B/I)}let ie=[];for(let L=0,z=W.length,b=z-1,F=L+1;L<z;L++,b++,F++)b===z&&(b=0),F===z&&(F=0),ie[L]=q(W[L],W[b],W[F]);let de=[],Me,Se,_e=ie.concat();for(let L=0,z=Y;L<z;L++){let b=j[L];Me=[];for(let F=0,B=b.length,I=B-1,Z=F+1;F<B;F++,I++,Z++)I===B&&(I=0),Z===B&&(Z=0),Me[F]=q(b[F],b[I],b[Z]);de.push(Me),_e=_e.concat(Me)}if(v===0)Se=Hi.triangulateShape(W,j);else{let L=[],z=[];for(let b=0;b<v;b++){let F=b/v,B=p*Math.cos(F*Math.PI/2),I=m*Math.sin(F*Math.PI/2)+u;for(let Z=0,K=W.length;Z<K;Z++){let te=V(W[Z],ie[Z],I);xe(te.x,te.y,-B),F===0&&L.push(te)}for(let Z=0,K=Y;Z<K;Z++){let te=j[Z];Me=de[Z];let ae=[];for(let ge=0,ee=te.length;ge<ee;ge++){let ve=V(te[ge],Me[ge],I);xe(ve.x,ve.y,-B),F===0&&ae.push(ve)}F===0&&z.push(ae)}}Se=Hi.triangulateShape(L,z)}let se=Se.length,ce=m+u;for(let L=0;L<k;L++){let z=f?V(N[L],_e[L],ce):N[L];U?(M.copy(S.normals[0]).multiplyScalar(z.x),x.copy(S.binormals[0]).multiplyScalar(z.y),C.copy(y[0]).add(M).add(x),xe(C.x,C.y,C.z)):xe(z.x,z.y,0)}for(let L=1;L<=h;L++)for(let z=0;z<k;z++){let b=f?V(N[z],_e[z],ce):N[z];U?(M.copy(S.normals[L]).multiplyScalar(b.x),x.copy(S.binormals[L]).multiplyScalar(b.y),C.copy(y[L]).add(M).add(x),xe(C.x,C.y,C.z)):xe(b.x,b.y,d/h*L)}for(let L=v-1;L>=0;L--){let z=L/v,b=p*Math.cos(z*Math.PI/2),F=m*Math.sin(z*Math.PI/2)+u;for(let B=0,I=W.length;B<I;B++){let Z=V(W[B],ie[B],F);xe(Z.x,Z.y,d+b)}for(let B=0,I=j.length;B<I;B++){let Z=j[B];Me=de[B];for(let K=0,te=Z.length;K<te;K++){let ae=V(Z[K],Me[K],F);U?xe(ae.x,ae.y+y[h-1].y,y[h-1].x+b):xe(ae.x,ae.y,d+b)}}}function oe(L,z){let b=L.length;for(;--b>=0;){let F=b,B=b-1;B<0&&(B=L.length-1);for(let I=0,Z=h+2*v;I<Z;I++){let K=k*I,te=k*(I+1);re(z+F+K,z+B+K,z+B+te,z+F+te)}}}function xe(L,z,b){c.push(L),c.push(z),c.push(b)}function Ne(L,z,b){D(L),D(z),D(b);let F=n.length/3,B=_.generateTopUV(i,n,F-3,F-2,F-1);T(B[0]),T(B[1]),T(B[2])}function re(L,z,b,F){D(L),D(z),D(F),D(z),D(b),D(F);let B=n.length/3,I=_.generateSideWallUV(i,n,B-6,B-3,B-2,B-1);T(I[0]),T(I[1]),T(I[3]),T(I[1]),T(I[2]),T(I[3])}function D(L){n.push(c[3*L+0]),n.push(c[3*L+1]),n.push(c[3*L+2])}function T(L){s.push(L.x),s.push(L.y)}(function(){let L=n.length/3;if(f){let z=0,b=k*z;for(let F=0;F<se;F++){let B=Se[F];Ne(B[2]+b,B[1]+b,B[0]+b)}z=h+2*v,b=k*z;for(let F=0;F<se;F++){let B=Se[F];Ne(B[0]+b,B[1]+b,B[2]+b)}}else{for(let z=0;z<se;z++){let b=Se[z];Ne(b[2],b[1],b[0])}for(let z=0;z<se;z++){let b=Se[z];Ne(b[0]+k*h,b[1]+k*h,b[2]+k*h)}}i.addGroup(L,n.length/3-L,0)})(),function(){let L=n.length/3,z=0;oe(W,z),z+=W.length;for(let b=0,F=j.length;b<F;b++){let B=j[b];oe(B,z),z+=B.length}i.addGroup(L,n.length/3-L,1)}()}this.setAttribute("position",new Ie(n,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new jo[n.type]().fromJSON(n)),new r(i,e.options)}},mg={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new le(s,a),new le(o,c),new le(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],d=e[3*i+2],f=e[3*n],p=e[3*n+1],m=e[3*n+2],u=e[3*s],v=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new le(a,1-c),new le(l,1-d),new le(f,1-m),new le(u,1-g)]:[new le(o,1-c),new le(h,1-d),new le(p,1-m),new le(v,1-g)]}},Zo=class r extends Bn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},cs=class r extends at{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=He(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new P,f=new le,p=new P,m=new P,u=new P,v=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-v,p.z=0*g,u.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(u.x,u.y,u.z);break;default:v=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-v,p.z=0*g,m.copy(p),p.x+=u.x,p.y+=u.y,p.z+=u.z,p.normalize(),c.push(p.x,p.y,p.z),u.copy(m)}for(let _=0;_<=t;_++){let y=i+_*h*n,S=Math.sin(y),x=Math.cos(y);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*S,d.y=e[M].y,d.z=e[M].x*x,a.push(d.x,d.y,d.z),f.x=_/t,f.y=M/(e.length-1),o.push(f.x,f.y);let C=c[3*M+0]*S,U=c[3*M+1],A=c[3*M+0]*x;l.push(C,U,A)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let S=y+_*e.length,x=S,M=S+e.length,C=S+e.length+1,U=S+1;s.push(x,M,U),s.push(C,U,M)}this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Jo=class r extends Bn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},gn=class r extends at{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=e/o,f=t/c,p=[],m=[],u=[],v=[];for(let g=0;g<h;g++){let _=g*f-a;for(let y=0;y<l;y++){let S=y*d-s;m.push(S,-_,0),u.push(0,0,1),v.push(y/o),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<o;_++){let y=_+l*g,S=_+l*(g+1),x=_+1+l*(g+1),M=_+1+l*g;p.push(y,S,M),p.push(S,x,M)}this.setIndex(p),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ko=class r extends at{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],d=e,f=(t-e)/(n=Math.max(1,n)),p=new P,m=new le;for(let u=0;u<=n;u++){for(let v=0;v<=i;v++){let g=s+v/i*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}d+=f}for(let u=0;u<n;u++){let v=u*(i+1);for(let g=0;g<i;g++){let _=g+v,y=_,S=_+i+1,x=_+i+2,M=_+1;o.push(y,S,M),o.push(S,x,M)}}this.setIndex(o),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},$o=class r extends at{constructor(e=new ma([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=n.length/3,f=h.extractPoints(t),p=f.shape,m=f.holes;Hi.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,g=m.length;v<g;v++){let _=m[v];Hi.isClockWise(_)===!0&&(m[v]=_.reverse())}let u=Hi.triangulateShape(p,m);for(let v=0,g=m.length;v<g;v++){let _=m[v];p=p.concat(_)}for(let v=0,g=p.length;v<g;v++){let _=p[v];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,g=u.length;v<g;v++){let _=u[v],y=_[0]+d,S=_[1]+d,x=_[2]+d;i.push(y,S,x),c+=3}}this.setIndex(i),this.setAttribute("position",new Ie(n,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},hs=class r extends at{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new P,f=new P,p=[],m=[],u=[],v=[];for(let g=0;g<=i;g++){let _=[],y=g/i,S=0;g===0&&a===0?S=.5/t:g===i&&c===Math.PI&&(S=-.5/t);for(let x=0;x<=t;x++){let M=x/t;d.x=-e*Math.cos(n+M*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(n+M*s)*Math.sin(a+y*o),m.push(d.x,d.y,d.z),f.copy(d).normalize(),u.push(f.x,f.y,f.z),v.push(M+S,1-y),_.push(l++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let y=h[g][_+1],S=h[g][_],x=h[g+1][_],M=h[g+1][_+1];(g!==0||a>0)&&p.push(y,S,M),(g!==i-1||c<Math.PI)&&p.push(S,x,M)}this.setIndex(p),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Qo=class r extends Bn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},_n=class r extends at{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let c=[],l=[],h=[],d=[],f=new P,p=new P,m=new P;for(let u=0;u<=i;u++){let v=a+u/i*o;for(let g=0;g<=n;g++){let _=g/n*s;p.x=(e+t*Math.cos(v))*Math.cos(_),p.y=(e+t*Math.cos(v))*Math.sin(_),p.z=t*Math.sin(v),l.push(p.x,p.y,p.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),m.subVectors(p,f).normalize(),h.push(m.x,m.y,m.z),d.push(g/n),d.push(u/i)}}for(let u=1;u<=i;u++)for(let v=1;v<=n;v++){let g=(n+1)*u+v-1,_=(n+1)*(u-1)+v-1,y=(n+1)*(u-1)+v,S=(n+1)*u+v;c.push(g,_,S),c.push(_,y,S)}this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},el=class r extends at{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],d=new P,f=new P,p=new P,m=new P,u=new P,v=new P,g=new P;for(let y=0;y<=i;++y){let S=y/i*s*Math.PI*2;_(S,s,a,e,p),_(S+.01,s,a,e,m),v.subVectors(m,p),g.addVectors(m,p),u.crossVectors(v,g),g.crossVectors(u,v),u.normalize(),g.normalize();for(let x=0;x<=n;++x){let M=x/n*Math.PI*2,C=-t*Math.cos(M),U=t*Math.sin(M);d.x=p.x+(C*g.x+U*u.x),d.y=p.y+(C*g.y+U*u.y),d.z=p.z+(C*g.z+U*u.z),c.push(d.x,d.y,d.z),f.subVectors(d,p).normalize(),l.push(f.x,f.y,f.z),h.push(y/i),h.push(x/n)}}for(let y=1;y<=i;y++)for(let S=1;S<=n;S++){let x=(n+1)*(y-1)+(S-1),M=(n+1)*y+(S-1),C=(n+1)*y+S,U=(n+1)*(y-1)+S;o.push(x,M,U),o.push(M,C,U)}function _(y,S,x,M,C){let U=Math.cos(y),A=Math.sin(y),N=x/S*y,j=Math.cos(N);C.x=M*(2+j)*.5*U,C.y=M*(2+j)*A*.5,C.z=M*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},us=class r extends at{constructor(e=new da(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,c=new P,l=new le,h=new P,d=[],f=[],p=[],m=[];function u(v){h=e.getPointAt(v/t,h);let g=a.normals[v],_=a.binormals[v];for(let y=0;y<=n;y++){let S=y/n*Math.PI*2,x=Math.sin(S),M=-Math.cos(S);c.x=M*g.x+x*_.x,c.y=M*g.y+x*_.y,c.z=M*g.z+x*_.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)u(v);u(s===!1?t:0),function(){for(let v=0;v<=t;v++)for(let g=0;g<=n;g++)l.x=v/t,l.y=g/n,p.push(l.x,l.y)}(),function(){for(let v=1;v<=t;v++)for(let g=1;g<=n;g++){let _=(n+1)*(v-1)+(g-1),y=(n+1)*v+(g-1),S=(n+1)*v+g,x=(n+1)*(v-1)+g;m.push(_,y,x),m.push(y,S,x)}}()})(),this.setIndex(m),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new jo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},tl=class extends at{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new P,s=new P;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],f=d.start;for(let p=f,m=f+d.count;p<m;p+=3)for(let u=0;u<3;u++){let v=o.getX(p+u),g=o.getX(p+(u+1)%3);n.fromBufferAttribute(a,v),s.fromBufferAttribute(a,g),Qd(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Qd(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ie(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Qd(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var By=Object.freeze({__proto__:null,BoxGeometry:mn,CapsuleGeometry:ko,CircleGeometry:rs,ConeGeometry:Go,CylinderGeometry:xi,DodecahedronGeometry:Vo,EdgesGeometry:ss,ExtrudeGeometry:Yo,IcosahedronGeometry:Zo,LatheGeometry:cs,OctahedronGeometry:Jo,PlaneGeometry:gn,PolyhedronGeometry:Bn,RingGeometry:Ko,ShapeGeometry:$o,SphereGeometry:hs,TetrahedronGeometry:Qo,TorusGeometry:_n,TorusKnotGeometry:el,TubeGeometry:us,WireframeGeometry:tl});function mr(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(ep(n))n.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(ep(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function kt(r){let e={};for(let t=0;t<r.length;t++){let i=mr(r[t]);for(let n in i)e[n]=i[n]}return e}function ep(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ou(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Jp={clone:mr,merge:kt},oi=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},il=class extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_t=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var nl=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bo(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}var zn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sl=class extends zn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hc:s=e,o=2*t-i;break;case Wc:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Hc:a=e,c=2*i-t;break;case Wc:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-t)/(n-t),u=m*m,v=u*m,g=-f*v+2*f*u-f*m,_=(1+f)*v+(-1.5-2*f)*u+(-.5+f)*m+1,y=(-1-p)*v+(1.5+p)*u+.5*m,S=p*v-p*u;for(let x=0;x!==o;++x)s[x]=g*a[h+x]+_*a[l+x]+y*a[c+x]+S*a[d+x];return s}},al=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),d=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*d+a[c+f]*h;return s}},ol=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ll=class extends zn{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,f=h.outTangents;if(!d||!f){let u=(i-t)/(n-t),v=1-u;for(let g=0;g!==o;++g)s[g]=a[l+g]*v+a[c+g]*u;return s}let p=2*o,m=e-1;for(let u=0;u!==o;++u){let v=a[l+u],g=a[c+u],_=m*p+2*u,y=f[_],S=f[_+1],x=e*p+2*u,M=d[x],C=d[x+1],U,A,N,j,G,Y=(i-t)/(n-t);for(let W=0;W<8;W++){U=Y*Y,A=U*Y,N=1-Y,j=N*N,G=j*N;let V=G*t+3*j*Y*y+3*N*U*M+A*n-i;if(Math.abs(V)<1e-10)break;let k=3*j*(y-t)+6*N*Y*(M-y)+3*U*(n-M);if(Math.abs(k)<1e-10)break;Y-=V/k,Y=Math.max(0,Math.min(1,Y))}s[u]=G*v+3*j*Y*S+3*N*U*C+A*g}return s}},ii=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case wo:t=this.InterpolantFactoryMethodSmooth;break;case Gc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return wo;case this.InterpolantFactoryMethodBezier:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Pe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Pe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&km(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===wo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let m=t[h+p];if(m!==t[d+p]||m!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ii.prototype.ValueTypeName="",ii.prototype.TimeBufferType=Float32Array,ii.prototype.ValueBufferType=Float32Array,ii.prototype.DefaultInterpolation=Ro;var Dn=class extends ii{constructor(e,t,i){super(e,t,i)}};Dn.prototype.ValueTypeName="bool",Dn.prototype.ValueBufferType=Array,Dn.prototype.DefaultInterpolation=Ks,Dn.prototype.InterpolantFactoryMethodLinear=void 0,Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends ii{constructor(e,t,i,n){super(e,t,i,n)}};cl.prototype.ValueTypeName="color";var hl=class extends ii{constructor(e,t,i,n){super(e,t,i,n)}};hl.prototype.ValueTypeName="number";var ul=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)yi.slerpFlat(s,0,a,l-o,a,l,c);return s}},ya=class extends ii{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};ya.prototype.ValueTypeName="quaternion",ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Nn=class extends ii{constructor(e,t,i){super(e,t,i)}};Nn.prototype.ValueTypeName="string",Nn.prototype.ValueBufferType=Array,Nn.prototype.DefaultInterpolation=Ks,Nn.prototype.InterpolantFactoryMethodLinear=void 0,Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends ii{constructor(e,t,i,n){super(e,t,i,n)}};dl.prototype.ValueTypeName="vector";var pl=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kp=new pl,fl=class{constructor(e){this.manager=e!==void 0?e:Kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xa=class extends lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zc=new Ge,tp=new P,ip=new P,Ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fn,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(tp),ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ip),t.updateMatrixWorld(),zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Kr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},To=new P,Eo=new yi,Gi=new P,ds=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(To,Eo,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(To,Eo,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ln=new P,np=new le,rp=new le,Rt=class extends ds{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ar*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Zr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ar*Math.atan(Math.tan(.5*Zr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,np,rp),t.subVectors(rp,np)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Zr*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kc=class extends Ma{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=2*ar*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;i===t.fov&&n===t.aspect&&s===t.far||(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ps=class extends lr{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},$c=class extends Ma{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},kn=class extends lr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new $c}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fs=class extends ds{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qc=class extends Ma{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Qc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var zy=new Ge,ky=new Ge,Gy=new Ge;var qr=-90,ml=class extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Rt(qr,1,e,t);n.layers=this.layers,this.add(n);let s=new Rt(qr,1,e,t);s.layers=this.layers,this.add(s);let a=new Rt(qr,1,e,t);a.layers=this.layers,this.add(a);let o=new Rt(qr,1,e,t);o.layers=this.layers,this.add(o);let c=new Rt(qr,1,e,t);c.layers=this.layers,this.add(c);let l=new Rt(qr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Kr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let u=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=u,e.setRenderTarget(i,5,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},gl=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vy=new P,Hy=new yi,Wy=new P,Xy=new P,jy=new P;var qy=new P,Yy=new yi,Zy=new P,Jy=new P;var lu="\\[\\]\\.:\\/",gg=new RegExp("["+lu+"]","g"),kc="[^"+lu+"]",_g="[^"+lu.replace("\\.","")+"]",vg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",kc)+/(WCOD+)?/.source.replace("WCOD",_g)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc)+"$"),yg=["material","materials","bones","map"],st=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gg,"")}static parseTrackName(e){let t=vg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);yg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Ae("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0)return void Pe("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=class{constructor(r,e,t){let i=t||st.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray],st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ky=new Float32Array(1);var sp=new Ge,Sa=class{constructor(e,t,i=0,n=1/0){this.ray=new On(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sp),this}intersectObject(e,t=!0,i=[]){return eh(e,this,i,t),i.sort(ap),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)eh(e[n],this,i,t);return i.sort(ap),i}};function ap(r,e){return r.distance-e.distance}function eh(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)eh(s[a],e,t,!0)}}var fu=class fu{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};fu.prototype.isMatrix2=!0;var th=fu,$y=new le;var Qy=new P,ex=new P,tx=new P,ix=new P,nx=new P,rx=new P,sx=new P;var ax=new P;var ox=new P,lx=new Ge,cx=new Ge;var hx=new P,ux=new ze,dx=new ze;var px=new P,fx=new P,mx=new P;var gx=new P,_x=new ds;var vx=new si;var yx=new P;function cu(r,e,t,i){let n=function(s){switch(s){case ci:case xh:return{byteLength:1,components:1};case xs:case Mh:case ji:return{byteLength:2,components:1};case Tl:case El:return{byteLength:2,components:4};case vn:case bl:case Li:return{byteLength:4,components:1};case Sh:case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}(i);switch(t){case 1021:return r*e;case Th:case wl:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case Di:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}})),typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);function Mf(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function xg(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),d;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=r.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=r.SHORT;else if(o instanceof Uint32Array)d=r.UNSIGNED_INT;else if(o instanceof Int32Array)d=r.INT;else if(o instanceof Int8Array)d=r.BYTE;else if(o instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=r.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}}(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((d,f)=>d.start-f.start);let h=0;for(let d=1;d<l.length;d++){let f=l[h],p=l[d];p.start<=f.start+f.count+1?f.count=Math.max(f.count,p.start+p.count-f.start):(++h,l[h]=p)}l.length=h+1;for(let d=0,f=l.length;d<f;d++){let p=l[d];r.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var Ve={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},pe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yi={basic:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:kt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:kt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:kt([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:kt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:kt([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:kt([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:kt([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:kt([pe.lights,pe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Yi.physical={uniforms:kt([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ul={r:0,b:0,g:0},Mg=new Ge,Sf=new Oe;function Sg(r,e,t,i,n,s){let a=new ze(0),o,c,l=n===!0?0:1,h=null,d=0,f=null;function p(u){let v=u.isScene===!0?u.background:null;if(v&&v.isTexture){let g=u.backgroundBlurriness>0;v=e.get(v,g)}return v}function m(u,v){u.getRGB(Ul,ou(r)),t.buffers.color.setClear(Ul.r,Ul.g,Ul.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(u,v=1){a.set(u),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,m(a,l)},render:function(u){let v=!1,g=p(u);g===null?m(a,l):g&&g.isColor&&(m(g,1),v=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(u,v){let g=p(v);g&&(g.isCubeTexture||g.mapping===wa)?(c===void 0&&(c=new Ze(new mn(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:mr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(v.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sf),c.material.toneMapped=je.getTransfer(g.colorSpace)!==Ke,h===g&&d===g.version&&f===r.toneMapping||(c.material.needsUpdate=!0,h=g,d=g.version,f=r.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new Ze(new gn(2,2),new oi({name:"BackgroundMaterial",uniforms:mr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=je.getTransfer(g.colorSpace)!==Ke,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&d===g.version&&f===r.toneMapping||(o.material.needsUpdate=!0,h=g,d=g.version,f=r.toneMapping),o.layers.enableAll(),u.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function bg(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(g){return r.bindVertexArray(g)}function c(g){return r.deleteVertexArray(g)}function l(g){let _=[],y=[],S=[];for(let x=0;x<t;x++)_[x]=0,y[x]=0,S[x]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:y,attributeDivisors:S,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let _=0,y=g.length;_<y;_++)g[_]=0}function d(g){f(g,0)}function f(g,_){let y=s.newAttributes,S=s.enabledAttributes,x=s.attributeDivisors;y[g]=1,S[g]===0&&(r.enableVertexAttribArray(g),S[g]=1),x[g]!==_&&(r.vertexAttribDivisor(g,_),x[g]=_)}function p(){let g=s.newAttributes,_=s.enabledAttributes;for(let y=0,S=_.length;y<S;y++)_[y]!==g[y]&&(r.disableVertexAttribArray(y),_[y]=0)}function m(g,_,y,S,x,M,C){C===!0?r.vertexAttribIPointer(g,_,y,x,M):r.vertexAttribPointer(g,_,y,S,x,M)}function u(){v(),a=!0,s!==n&&(s=n,o(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(g,_,y,S,x){let M=!1,C=function(U,A,N,j){let G=j.wireframe===!0,Y=i[A.id];Y===void 0&&(Y={},i[A.id]=Y);let W=U.isInstancedMesh===!0?U.id:0,V=Y[W];V===void 0&&(V={},Y[W]=V);let k=V[N.id];k===void 0&&(k={},V[N.id]=k);let q=k[G];return q===void 0&&(q=l(r.createVertexArray()),k[G]=q),q}(g,S,y,_);s!==C&&(s=C,o(s.object)),M=function(U,A,N,j){let G=s.attributes,Y=A.attributes,W=0,V=N.getAttributes();for(let k in V)if(V[k].location>=0){let q=G[k],ie=Y[k];if(ie===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;W++}return s.attributesNum!==W||s.index!==j}(g,S,y,x),M&&function(U,A,N,j){let G={},Y=A.attributes,W=0,V=N.getAttributes();for(let k in V)if(V[k].location>=0){let q=Y[k];q===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));let ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),G[k]=ie,W++}s.attributes=G,s.attributesNum=W,s.index=j}(g,S,y,x),x!==null&&e.update(x,r.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,function(U,A,N,j){h();let G=j.attributes,Y=N.getAttributes(),W=A.defaultAttributeValues;for(let V in Y){let k=Y[V];if(k.location>=0){let q=G[V];if(q===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(q=U.instanceColor)),q!==void 0){let ie=q.normalized,de=q.itemSize,Me=e.get(q);if(Me===void 0)continue;let Se=Me.buffer,_e=Me.type,se=Me.bytesPerElement,ce=_e===r.INT||_e===r.UNSIGNED_INT||q.gpuType===bl;if(q.isInterleavedBufferAttribute){let oe=q.data,xe=oe.stride,Ne=q.offset;if(oe.isInstancedInterleavedBuffer){for(let re=0;re<k.locationSize;re++)f(k.location+re,oe.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let re=0;re<k.locationSize;re++)d(k.location+re);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let re=0;re<k.locationSize;re++)m(k.location+re,de/k.locationSize,_e,ie,xe*se,(Ne+de/k.locationSize*re)*se,ce)}else{if(q.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)f(k.location+oe,q.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let oe=0;oe<k.locationSize;oe++)d(k.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let oe=0;oe<k.locationSize;oe++)m(k.location+oe,de/k.locationSize,_e,ie,de*se,de/k.locationSize*oe*se,ce)}}else if(W!==void 0){let ie=W[V];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(k.location,ie);break;case 3:r.vertexAttrib3fv(k.location,ie);break;case 4:r.vertexAttrib4fv(k.location,ie);break;default:r.vertexAttrib1fv(k.location,ie)}}}}p()}(g,_,y,S),x!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(x).buffer))},reset:u,resetDefaultState:v,dispose:function(){u();for(let g in i){let _=i[g];for(let y in _){let S=_[y];for(let x in S){let M=S[x];for(let C in M)c(M[C].object),delete M[C];delete S[x]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let _=i[g.id];for(let y in _){let S=_[y];for(let x in S){let M=S[x];for(let C in M)c(M[C].object),delete M[C];delete S[x]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let _ in i){let y=i[_],S=g.isInstancedMesh===!0?g.id:0,x=y[S];if(x!==void 0){for(let M in x){let C=x[M];for(let U in C)c(C[U].object),delete C[U];delete x[M]}delete y[S],Object.keys(y).length===0&&delete i[_]}}},releaseStatesOfProgram:function(g){for(let _ in i){let y=i[_];for(let S in y){let x=y[S];if(x[g.id]===void 0)continue;let M=x[g.id];for(let C in M)c(M[C].object),delete M[C];delete x[g.id]}}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function Tg(r,e,t){let i;this.setMode=function(n){i=n},this.render=function(n,s){r.drawArrays(i,n,s),t.update(s,i,1)},this.renderInstances=function(n,s,a){a!==0&&(r.drawArraysInstanced(i,n,s,a),t.update(s,i,a))},this.renderMultiDraw=function(n,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,n,0,s,0,a);let o=0;for(let c=0;c<a;c++)o+=s[c];t.update(o,i,1)}}function Eg(r,e,t,i){let n;function s(h){if(h==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Ae("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&l===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(h){return h===Di||i.convert(h)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let d=h===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==ci&&i.convert(h)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==Li&&!d)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function wg(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Vi,o=new Oe,c={value:null,needsUpdate:!1};function l(h,d,f,p){let m=h!==null?h.length:0,u=null;if(m!==0){if(u=c.value,p!==!0||u===null){let v=f+4*m,g=d.matrixWorldInverse;o.getNormalMatrix(g),(u===null||u.length<v)&&(u=new Float32Array(v));for(let _=0,y=f;_!==m;++_,y+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(u,y),u[y+3]=a.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,u}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||n;return n=d,i=h.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,m=h.clipIntersection,u=h.clipShadows,v=r.get(h);if(!n||p===null||p.length===0||s&&!u)s?l(null):function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let g=s?0:i,_=4*g,y=v.clippingState||null;c.value=y,y=l(p,d,_,f);for(let S=0;S!==_;++S)y[S]=t[S];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}Sf.set(-1,0,0,0,1,0,0,0,1);var $p=[.125,.215,.35,.446,.526,.582],Ca=20,Ra=new fs,Qp=new ze,mu=null,gu=0,_u=0,vu=!1,Ag=new P,Fl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=Ag}=s;mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,_u),this._renderer.xr.enabled=vu,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ji,format:Di,colorSpace:$s,depthBuffer:!1},n=ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=function(a){let o=[],c=[],l=[],h=a,d=a-4+1+$p.length;for(let f=0;f<d;f++){let p=Math.pow(2,h);o.push(p);let m=1/p;f>a-4?m=$p[f-a+4-1]:f===0&&(m=0),c.push(m);let u=1/(p-2),v=-u,g=1+u,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,S=6,x=3,M=2,C=1,U=new Float32Array(x*S*y),A=new Float32Array(M*S*y),N=new Float32Array(C*S*y);for(let G=0;G<y;G++){let Y=G%3*2/3-1,W=G>2?0:-1,V=[Y,W,0,Y+2/3,W,0,Y+2/3,W+1,0,Y,W,0,Y+2/3,W+1,0,Y,W+1,0];U.set(V,x*S*G),A.set(_,M*S*G);let k=[G,G,G,G,G,G];N.set(k,C*S*G)}let j=new at;j.setAttribute("position",new ni(U,x)),j.setAttribute("uv",new ni(A,M)),j.setAttribute("faceIndex",new ni(N,C)),l.push(new Ze(j,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}}(s)),this._blurMaterial=function(a,o,c){let l=new Float32Array(Ca),h=new P(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Ca,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}(s,e,t),this._ggxMaterial=function(a,o,c){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new Ze(new at,e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,i,n,s){let a=new Rt(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(Qp),l.toneMapping=Ii,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new mn,new pn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,u=e.background;u?u.isColor&&(p.color.copy(u),e.background=null,m=!0):(p.color.copy(Qp),m=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[v],s.y,s.z)):g===1?(a.up.set(0,0,o[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[v],s.z)):(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[v]));let _=this._cubeSize;Ss(n,g*_,v>2?_:0,_,_),l.setRenderTarget(n),m&&l.render(f,a),l.render(e,a)}l.toneMapping=d,l.autoClear=h,e.background=u}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===ys||e.mapping===cr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Ss(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Ra)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:f}=this,p=this._sizeLods[i],m=3*p*(i>f-4?i-f+4:0),u=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=f-t,Ss(s,m,u,3*p,2*p),n.setRenderTarget(s),n.render(o,Ra),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=f-i,Ss(e,m,u,3*p,2*p),n.setRenderTarget(e),n.render(o,Ra)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[n];h.material=l;let d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/39,m=s/p,u=isFinite(s)?1+Math.floor(3*m):Ca;u>Ca&&Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to 20`);let v=[],g=0;for(let S=0;S<Ca;++S){let x=S/m,M=Math.exp(-x*x/2);v.push(M),S===0?g+=M:S<u&&(g+=2*M)}for(let S=0;S<v.length;S++)v[S]=v[S]/g;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=v,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;let y=this._sizeLods[n];Ss(t,3*y*(n>_-4?n-_+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,Ra)}};function ef(r,e,t){let i=new ri(r,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function tf(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function nf(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var zl=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new oa(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new mn(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Xi});s.uniforms.tEquirect.value=t;let a=new Ze(n,s),o=t.minFilter;return t.minFilter===hr&&(t.minFilter=Bt),new ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}};function Cg(r){let e=new WeakMap,t=new WeakMap,i=null;function n(o,c){return c===xl?o.mapping=ys:c===Ml&&(o.mapping=cr),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?function(l){if(l&&l.isTexture){let h=l.mapping,d=h===xl||h===Ml,f=h===ys||h===cr;if(d||f){let p=t.get(l),m=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return i===null&&(i=new Fl(r)),p=d?i.fromEquirectangular(l,p):i.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),p.texture;if(p!==void 0)return p.texture;{let u=l.image;return d&&u&&u.height>0||f&&u&&function(v){let g=0,_=6;for(let y=0;y<_;y++)v[y]!==void 0&&g++;return g===_}(u)?(i===null&&(i=new Fl(r)),p=d?i.fromEquirectangular(l):i.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),l.addEventListener("dispose",a),p.texture):null}}}return l}(o):function(l){if(l&&l.isTexture){let h=l.mapping;if(h===xl||h===Ml){if(e.has(l))return n(e.get(l).texture,l.mapping);{let d=l.image;if(d&&d.height>0){let f=new zl(d.height);return f.fromEquirectangularTexture(r,l),e.set(l,f),l.addEventListener("dispose",s),n(f.texture,l.mapping)}return null}}}return l}(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Rg(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Po("WebGLRenderer: "+i+" extension not supported."),n}}}function Pg(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,f=0;if(d===void 0)return;if(h!==null){let u=h.array;f=h.version;for(let v=0,g=u.length;v<g;v+=3){let _=u[v+0],y=u[v+1],S=u[v+2];l.push(_,y,y,S,S,_)}}else{let u=d.array;f=d.version;for(let v=0,g=u.length/3-1;v<g;v+=3){let _=v+0,y=v+1,S=v+2;l.push(_,y,y,S,S,_)}}let p=new(d.count>=65535?sa:ra)(l,1);p.version=f;let m=s.get(c);m&&e.remove(m),s.set(c,p)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Ig(r,e,t){let i,n,s;this.setMode=function(a){i=a},this.setIndex=function(a){n=a.type,s=a.bytesPerElement},this.render=function(a,o){r.drawElements(i,o,n,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,c){c!==0&&(r.drawElementsInstanced(i,o,n,a*s,c),t.update(o,i,c))},this.renderMultiDraw=function(a,o,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,n,a,0,c);let l=0;for(let h=0;h<c;h++)l+=o[h];t.update(l,i,1)}}function Lg(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:Pe("WebGLInfo: Unknown draw mode:",i)}}}}function Dg(r,e,t){let i=new WeakMap,n=new et;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,d=i.get(a);if(d===void 0||d.count!==h){let U=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),m===!0&&(_=3);let y=a.attributes.position.count*_,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let x=new Float32Array(y*S*4*h),M=new ta(x,y,S,h);M.type=Li,M.needsUpdate=!0;let C=4*_;for(let A=0;A<h;A++){let N=u[A],j=v[A],G=g[A],Y=y*S*4*A;for(let W=0;W<N.count;W++){let V=W*C;f===!0&&(n.fromBufferAttribute(N,W),x[Y+V+0]=n.x,x[Y+V+1]=n.y,x[Y+V+2]=n.z,x[Y+V+3]=0),p===!0&&(n.fromBufferAttribute(j,W),x[Y+V+4]=n.x,x[Y+V+5]=n.y,x[Y+V+6]=n.z,x[Y+V+7]=0),m===!0&&(n.fromBufferAttribute(G,W),x[Y+V+8]=n.x,x[Y+V+9]=n.y,x[Y+V+10]=n.z,x[Y+V+11]=G.itemSize===4?n.w:1)}}d={count:h,texture:M,size:new le(y,S)},i.set(a,d),a.addEventListener("dispose",U)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];let p=a.morphTargetsRelative?1:1-f;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}}}function Ng(r,e,t,i,n){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=n.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let d=o.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h},dispose:function(){s=new WeakMap}}}var Ug={[ph]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[Ea]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};function Og(r,e,t,i,n){let s=new ri(e,t,{type:r,depthBuffer:i,stencilBuffer:n,depthTexture:i?new fn(e,t):void 0}),a=new ri(e,t,{type:ji,depthBuffer:!1,stencilBuffer:!1}),o=new at;o.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let c=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Ze(o,c),h=new fs(-1,1,1,-1,0,1),d,f=null,p=null,m=!1,u=null,v=[],g=!1;this.setSize=function(_,y){s.setSize(_,y),a.setSize(_,y);for(let S=0;S<v.length;S++){let x=v[S];x.setSize&&x.setSize(_,y)}},this.setEffects=function(_){v=_,g=v.length>0&&v[0].isRenderPass===!0;let y=s.width,S=s.height;for(let x=0;x<v.length;x++){let M=v[x];M.setSize&&M.setSize(y,S)}},this.begin=function(_,y){if(m||_.toneMapping===Ii&&v.length===0)return!1;if(u=y,y!==null){let S=y.width,x=y.height;s.width===S&&s.height===x||this.setSize(S,x)}return g===!1&&_.setRenderTarget(s),d=_.toneMapping,_.toneMapping=Ii,!0},this.hasRenderPass=function(){return g},this.end=function(_,y){_.toneMapping=d,m=!0;let S=s,x=a;for(let M=0;M<v.length;M++){let C=v[M];if(C.enabled!==!1&&(C.render(_,x,S,y),C.needsSwap!==!1)){let U=S;S=x,x=U}}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,c.defines={},je.getTransfer(f)===Ke&&(c.defines.SRGB_TRANSFER="");let M=Ug[p];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(u),_.render(l,h),u=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),c.dispose()}}var bf=new jt,Mu=new fn(1,1),Tf=new ta,Ef=new Do,wf=new oa,rf=[],sf=[],af=new Float32Array(16),of=new Float32Array(9),lf=new Float32Array(4);function Ts(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=rf[n];if(s===void 0&&(s=new Float32Array(n),rf[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Gl(r,e){let t=sf[e];t===void 0&&(t=new Int32Array(e),sf[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Fg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function zg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function kg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function Gg(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;lf.set(i),r.uniformMatrix2fv(this.addr,!1,lf),wt(t,i)}}function Vg(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;of.set(i),r.uniformMatrix3fv(this.addr,!1,of),wt(t,i)}}function Hg(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;af.set(i),r.uniformMatrix4fv(this.addr,!1,af),wt(t,i)}}function Wg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function jg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function qg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function Yg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Zg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function Jg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function Kg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function $g(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Mu.compareFunction=t.isReversedDepthBuffer()?Nl:Dl,s=Mu):s=bf,t.setTexture2D(e||s,n)}function Qg(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ef,n)}function e0(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||wf,n)}function t0(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Tf,n)}function i0(r,e){r.uniform1fv(this.addr,e)}function n0(r,e){let t=Ts(e,this.size,2);r.uniform2fv(this.addr,t)}function r0(r,e){let t=Ts(e,this.size,3);r.uniform3fv(this.addr,t)}function s0(r,e){let t=Ts(e,this.size,4);r.uniform4fv(this.addr,t)}function a0(r,e){let t=Ts(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function o0(r,e){let t=Ts(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function l0(r,e){let t=Ts(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function c0(r,e){r.uniform1iv(this.addr,e)}function h0(r,e){r.uniform2iv(this.addr,e)}function u0(r,e){r.uniform3iv(this.addr,e)}function d0(r,e){r.uniform4iv(this.addr,e)}function p0(r,e){r.uniform1uiv(this.addr,e)}function f0(r,e){r.uniform2uiv(this.addr,e)}function m0(r,e){r.uniform3uiv(this.addr,e)}function g0(r,e){r.uniform4uiv(this.addr,e)}function _0(r,e,t){let i=this.cache,n=e.length,s=Gl(t,n),a;Et(i,s)||(r.uniform1iv(this.addr,s),wt(i,s)),a=this.type===r.SAMPLER_2D_SHADOW?Mu:bf;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function v0(r,e,t){let i=this.cache,n=e.length,s=Gl(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ef,s[a])}function y0(r,e,t){let i=this.cache,n=e.length,s=Gl(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||wf,s[a])}function x0(r,e,t){let i=this.cache,n=e.length,s=Gl(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Tf,s[a])}var Su=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return Fg;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Gg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return jg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Zg;case 36295:return Jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}(t.type)}},bu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return i0;case 35664:return n0;case 35665:return r0;case 35666:return s0;case 35674:return a0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return f0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return x0}}(t.type)}},Tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},yu=/(\w+)(\])?(\[|\.)?/g;function cf(r,e){r.seq.push(e),r.map[e.id]=e}function M0(r,e,t){let i=r.name,n=i.length;for(yu.lastIndex=0;;){let s=yu.exec(i),a=yu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){cf(t,l===void 0?new Su(o,r,e):new bu(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Tu(o),cf(t,h)),t=h}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);M0(o,e.getUniformLocation(t,o.name),this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function hf(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var S0=0,uf=new Oe;function df(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),f=Math.min(c+6,l.length);for(let p=d;p<f;p++){let m=p+1;h.push(`${m===c?">":" "} ${m}: ${l[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return n}function b0(r,e){let t=function(i){je._getMatrix(uf,je.workingColorSpace,i);let n=`mat3( ${uf.elements.map(s=>s.toFixed(4))} )`;switch(je.getTransfer(i)){case Qs:return[n,"LinearTransferOETF"];case Ke:return[n,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}}(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var T0={[ph]:"Linear",[fh]:"Reinhard",[mh]:"Cineon",[Ea]:"ACESFilmic",[_h]:"AgX",[vh]:"Neutral",[gh]:"Custom"};function E0(r,e){let t=T0[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new P;function w0(){return je.getLuminanceCoefficients(Ol),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ol.x.toFixed(4)}, ${Ol.y.toFixed(4)}, ${Ol.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pa(r){return r!==""}function pf(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ff(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(r){return r.replace(A0,R0)}var C0=new Map;function R0(r,e){let t=Ve[e];if(t===void 0){let i=C0.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ve[i],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Eu(t)}var P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(r){return r.replace(P0,I0)}function I0(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function gf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var L0={[ba]:"SHADOWMAP_TYPE_PCF",[gs]:"SHADOWMAP_TYPE_VSM"},D0={[ys]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE_UV"},N0={[cr]:"ENVMAP_MODE_REFRACTION"},U0={[Rp]:"ENVMAP_BLENDING_MULTIPLY",[Pp]:"ENVMAP_BLENDING_MIX",[Ip]:"ENVMAP_BLENDING_ADD"};function O0(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=function(j){return L0[j.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}(t),l=function(j){return j.envMap===!1?"ENVMAP_TYPE_CUBE":D0[j.envMapMode]||"ENVMAP_TYPE_CUBE"}(t),h=function(j){return j.envMap===!1?"ENVMAP_MODE_REFLECTION":N0[j.envMapMode]||"ENVMAP_MODE_REFLECTION"}(t),d=function(j){return j.envMap===!1?"ENVMAP_BLENDING_NONE":U0[j.combine]||"ENVMAP_BLENDING_NONE"}(t),f=function(j){let G=j.envMapCubeUVHeight;if(G===null)return null;let Y=Math.log2(G)-2,W=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:W,maxMip:Y}}(t),p=function(j){return[j.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",j.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}(t),m=function(j){let G=[];for(let Y in j){let W=j[Y];W!==!1&&G.push("#define "+Y+" "+W)}return G.join(`
`)}(s),u=n.createProgram(),v,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pa).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pa).join(`
`),g.length>0&&(g+=`
`)):(v=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),g=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ii?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,b0("linearToOutputTexel",t.outputColorSpace),w0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),a=Eu(a),a=pf(a,t),a=ff(a,t),o=Eu(o),o=pf(o,t),o=ff(o,t),a=mf(a),o=mf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=_+v+a,S=_+g+o,x=hf(n,n.VERTEX_SHADER,y),M=hf(n,n.FRAGMENT_SHADER,S);function C(j){if(r.debug.checkShaderErrors){let G=n.getProgramInfoLog(u)||"",Y=n.getShaderInfoLog(x)||"",W=n.getShaderInfoLog(M)||"",V=G.trim(),k=Y.trim(),q=W.trim(),ie=!0,de=!0;if(n.getProgramParameter(u,n.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,u,x,M);else{let Me=df(n,x,"vertex"),Se=df(n,M,"fragment");Pe("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(u,n.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+V+`
`+Me+`
`+Se)}else V!==""?Ae("WebGLProgram: Program Info Log:",V):k!==""&&q!==""||(de=!1);de&&(j.diagnostics={runnable:ie,programLog:V,vertexShader:{log:k,prefix:v},fragmentShader:{log:q,prefix:g}})}n.deleteShader(x),n.deleteShader(M),U=new bs(n,u),A=function(G,Y){let W={},V=G.getProgramParameter(Y,G.ACTIVE_ATTRIBUTES);for(let k=0;k<V;k++){let q=G.getActiveAttrib(Y,k),ie=q.name,de=1;q.type===G.FLOAT_MAT2&&(de=2),q.type===G.FLOAT_MAT3&&(de=3),q.type===G.FLOAT_MAT4&&(de=4),W[ie]={type:q.type,location:G.getAttribLocation(Y,ie),locationSize:de}}return W}(n,u)}let U,A;n.attachShader(u,x),n.attachShader(u,M),t.index0AttributeName!==void 0?n.bindAttribLocation(u,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(u,0,"position"),n.linkProgram(u),this.getUniforms=function(){return U===void 0&&C(this),U},this.getAttributes=function(){return A===void 0&&C(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(u,37297)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S0++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=x,this.fragmentShader=M,this}var F0=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Au(e),t.set(e,i)),i}},Au=class{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}};function B0(r,e,t,i,n,s){let a=new es,o=new wu,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(u){return c.add(u),u===0?"uv":`uv${u}`}return{getParameters:function(u,v,g,_,y,S){let x=_.fog,M=y.geometry,C=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?_.environment:null,U=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap,A=e.get(u.envMap||C,U),N=A&&A.mapping===wa?A.image.height:null,j=p[u.type];u.precision!==null&&(f=i.getMaxPrecision(u.precision),f!==u.precision&&Ae("WebGLProgram.getParameters:",u.precision,"not supported, using",f,"instead."));let G=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Y=G!==void 0?G.length:0,W,V,k,q,ie=0;if(M.morphAttributes.position!==void 0&&(ie=1),M.morphAttributes.normal!==void 0&&(ie=2),M.morphAttributes.color!==void 0&&(ie=3),j){let Pt=Yi[j];W=Pt.vertexShader,V=Pt.fragmentShader}else W=u.vertexShader,V=u.fragmentShader,o.update(u),k=o.getVertexShaderID(u),q=o.getFragmentShaderID(u);let de=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Se=y.isInstancedMesh===!0,_e=y.isBatchedMesh===!0,se=!!u.map,ce=!!u.matcap,oe=!!A,xe=!!u.aoMap,Ne=!!u.lightMap,re=!!u.bumpMap,D=!!u.normalMap,T=!!u.displacementMap,L=!!u.emissiveMap,z=!!u.metalnessMap,b=!!u.roughnessMap,F=u.anisotropy>0,B=u.clearcoat>0,I=u.dispersion>0,Z=u.iridescence>0,K=u.sheen>0,te=u.transmission>0,ae=F&&!!u.anisotropyMap,ge=B&&!!u.clearcoatMap,ee=B&&!!u.clearcoatNormalMap,ve=B&&!!u.clearcoatRoughnessMap,ue=Z&&!!u.iridescenceMap,fe=Z&&!!u.iridescenceThicknessMap,he=K&&!!u.sheenColorMap,be=K&&!!u.sheenRoughnessMap,ke=!!u.specularMap,$e=!!u.specularColorMap,We=!!u.specularIntensityMap,Fe=te&&!!u.transmissionMap,Mt=te&&!!u.thicknessMap,Te=!!u.gradientMap,Ce=!!u.alphaMap,Re=u.alphaTest>0,Je=!!u.alphaHash,ct=!!u.extensions,fi=Ii;u.toneMapped&&(de!==null&&de.isXRRenderTarget!==!0||(fi=r.toneMapping));let Ut={shaderID:j,shaderType:u.type,shaderName:u.name,vertexShader:W,fragmentShader:V,defines:u.defines,customVertexShaderID:k,customFragmentShaderID:q,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:f,batching:_e,batchingColor:_e&&y._colorsTexture!==null,instancing:Se,instancingColor:Se&&y.instanceColor!==null,instancingMorph:Se&&y.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!u.alphaToCoverage,map:se,matcap:ce,envMap:oe,envMapMode:oe&&A.mapping,envMapCubeUVHeight:N,aoMap:xe,lightMap:Ne,bumpMap:re,normalMap:D,displacementMap:T,emissiveMap:L,normalMapObjectSpace:D&&u.normalMapType===Up,normalMapTangentSpace:D&&u.normalMapType===nu,packedNormalMap:D&&u.normalMapType===nu&&(qe=u.normalMap.format,qe===dr||qe===Il||qe===Ll),metalnessMap:z,roughnessMap:b,anisotropy:F,anisotropyMap:ae,clearcoat:B,clearcoatMap:ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:ve,dispersion:I,iridescence:Z,iridescenceMap:ue,iridescenceThicknessMap:fe,sheen:K,sheenColorMap:he,sheenRoughnessMap:be,specularMap:ke,specularColorMap:$e,specularIntensityMap:We,transmission:te,transmissionMap:Fe,thicknessMap:Mt,gradientMap:Te,opaque:u.transparent===!1&&u.blending===Ta&&u.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Re,alphaHash:Je,combine:u.combine,mapUv:se&&m(u.map.channel),aoMapUv:xe&&m(u.aoMap.channel),lightMapUv:Ne&&m(u.lightMap.channel),bumpMapUv:re&&m(u.bumpMap.channel),normalMapUv:D&&m(u.normalMap.channel),displacementMapUv:T&&m(u.displacementMap.channel),emissiveMapUv:L&&m(u.emissiveMap.channel),metalnessMapUv:z&&m(u.metalnessMap.channel),roughnessMapUv:b&&m(u.roughnessMap.channel),anisotropyMapUv:ae&&m(u.anisotropyMap.channel),clearcoatMapUv:ge&&m(u.clearcoatMap.channel),clearcoatNormalMapUv:ee&&m(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(u.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(u.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(u.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(u.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(u.sheenRoughnessMap.channel),specularMapUv:ke&&m(u.specularMap.channel),specularColorMapUv:$e&&m(u.specularColorMap.channel),specularIntensityMapUv:We&&m(u.specularIntensityMap.channel),transmissionMapUv:Fe&&m(u.transmissionMap.channel),thicknessMapUv:Mt&&m(u.thicknessMap.channel),alphaMapUv:Ce&&m(u.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(D||F),vertexNormals:!!M.attributes.normal,vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!M.attributes.uv&&(se||Ce),fog:!!x,useFog:u.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:u.wireframe===!1&&(u.flatShading===!0||M.attributes.normal===void 0&&D===!1&&(u.isMeshLambertMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isMeshPhysicalMaterial)),sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:y.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:S.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:u.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:fi,decodeVideoTexture:se&&u.map.isVideoTexture===!0&&je.getTransfer(u.map.colorSpace)===Ke,decodeVideoTextureEmissive:L&&u.emissiveMap.isVideoTexture===!0&&je.getTransfer(u.emissiveMap.colorSpace)===Ke,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===li,flipSided:u.side===zt,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionClipCullDistance:ct&&u.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&u.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:u.customProgramCacheKey()};var qe;return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut},getProgramCacheKey:function(u){let v=[];if(u.shaderID?v.push(u.shaderID):(v.push(u.customVertexShaderID),v.push(u.customFragmentShaderID)),u.defines!==void 0)for(let g in u.defines)v.push(g),v.push(u.defines[g]);return u.isRawShaderMaterial===!1&&(function(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}(v,u),function(g,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),g.push(a.mask)}(v,u),v.push(r.outputColorSpace)),v.push(u.customProgramCacheKey),v.join()},getUniforms:function(u){let v=p[u.type],g;if(v){let _=Yi[v];g=Jp.clone(_.uniforms)}else g=u.uniforms;return g},acquireProgram:function(u,v){let g=h.get(v);return g!==void 0?++g.usedTimes:(g=new O0(r,v,u,n),l.push(g),h.set(v,g)),g},releaseProgram:function(u){if(--u.usedTimes===0){let v=l.indexOf(u);l[v]=l[l.length-1],l.pop(),h.delete(u.cacheKey),u.destroy()}},releaseShaderCache:function(u){o.remove(u)},programs:l,dispose:function(){o.dispose()}}}function z0(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function k0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function _f(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vf(){let r=[],e=0,t=[],i=[],n=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,d,f){let p=r[e];return p===void 0?(p={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:d,group:f},r[e]=p):(p.id=o.id,p.object=o,p.geometry=c,p.material=l,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=d,p.group=f),e++,p}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,c,l,h,d,f){let p=a(o,c,l,h,d,f);l.transmission>0?i.push(p):l.transparent===!0?n.push(p):t.push(p)},unshift:function(o,c,l,h,d,f){let p=a(o,c,l,h,d,f);l.transmission>0?i.unshift(p):l.transparent===!0?n.unshift(p):t.unshift(p)},finish:function(){for(let o=e,c=r.length;o<c;o++){let l=r[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c){t.length>1&&t.sort(o||k0),i.length>1&&i.sort(c||_f),n.length>1&&n.sort(c||_f)}}}function G0(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new vf,r.set(e,[n])):t>=i.length?(n=new vf,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function V0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P}}return r[e.id]=t,t}}}var H0=0;function W0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function X0(r){let e=new V0,t=function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new P);let n=new P,s=new Ge,a=new Ge;return{setup:function(o){let c=0,l=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,f=0,p=0,m=0,u=0,v=0,g=0,_=0,y=0,S=0,x=0;o.sort(W0);for(let C=0,U=o.length;C<U;C++){let A=o[C],N=A.color,j=A.intensity,G=A.distance,Y=null;if(A.shadow&&A.shadow.map&&(Y=A.shadow.map.texture.format===dr?A.shadow.map.texture:A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)c+=N.r*j,l+=N.g*j,h+=N.b*j;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],j);x++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=A.shadow.matrix,v++}i.directional[d]=W,d++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(N).multiplyScalar(j),W.distance=G,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[p]=W;let V=A.shadow;if(A.map&&(i.spotLightMap[y]=A.map,y++,V.updateMatrices(A),A.castShadow&&S++),i.spotLightMatrix[p]=V.matrix,A.castShadow){let k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.spotShadow[p]=k,i.spotShadowMap[p]=Y,_++}p++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(N).multiplyScalar(j),W.halfWidth.set(.5*A.width,0,0),W.halfHeight.set(0,.5*A.height,0),i.rectArea[m]=W,m++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let V=A.shadow,k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,i.pointShadow[f]=k,i.pointShadowMap[f]=Y,i.pointShadowMatrix[f]=A.shadow.matrix,g++}i.point[f]=W,f++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(j),W.groundColor.copy(A.groundColor).multiplyScalar(j),i.hemi[u]=W,u++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let M=i.hash;M.directionalLength===d&&M.pointLength===f&&M.spotLength===p&&M.rectAreaLength===m&&M.hemiLength===u&&M.numDirectionalShadows===v&&M.numPointShadows===g&&M.numSpotShadows===_&&M.numSpotMaps===y&&M.numLightProbes===x||(i.directional.length=d,i.spot.length=p,i.rectArea.length=m,i.point.length=f,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+y-S,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=x,M.directionalLength=d,M.pointLength=f,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=u,M.numDirectionalShadows=v,M.numPointShadows=g,M.numSpotShadows=_,M.numSpotMaps=y,M.numLightProbes=x,i.version=H0++)},setupView:function(o,c){let l=0,h=0,d=0,f=0,p=0,m=c.matrixWorldInverse;for(let u=0,v=o.length;u<v;u++){let g=o[u];if(g.isDirectionalLight){let _=i.directional[l];_.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),l++}else if(g.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),d++}else if(g.isRectAreaLight){let _=i.rectArea[f];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),f++}else if(g.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(m),p++}}},state:i}}function yf(r){let e=new X0(r),t=[],i=[],n=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,n.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){n.push(a)}}}function j0(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new yf(r),e.set(t,[s])):i>=n.length?(s=new yf(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var q0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Y0=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],xf=new Ge,Ia=new P,xu=new P;function Z0(r,e,t){let i=new Fn,n=new le,s=new le,a=new et,o=new nl,c=new rl,l={},h=t.maxTextureSize,d={[_s]:zt,[zt]:_s,[li]:li},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new at;m.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let u=new Ze(m,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let g=this.type;function _(M,C){let U=e.update(u);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ri(n.x,n.y,{format:dr,type:ji})),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(C,null,U,f,u,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(C,null,U,p,u,null)}function y(M,C,U,A){let N=null,j=U.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(j!==void 0)N=j;else if(N=U.isPointLight===!0?c:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let G=N.uuid,Y=C.uuid,W=l[G];W===void 0&&(W={},l[G]=W);let V=W[Y];V===void 0&&(V=N.clone(),W[Y]=V,C.addEventListener("dispose",x)),N=V}return N.visible=C.visible,N.wireframe=C.wireframe,N.side=A===gs?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:d[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,U.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(r.properties.get(N).light=U),N}function S(M,C,U,A,N){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===gs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld);let G=e.update(M),Y=M.material;if(Array.isArray(Y)){let W=G.groups;for(let V=0,k=W.length;V<k;V++){let q=W[V],ie=Y[q.materialIndex];if(ie&&ie.visible){let de=y(M,ie,A,N);M.onBeforeShadow(r,M,C,U,G,de,q),r.renderBufferDirect(U,null,G,de,M,q),M.onAfterShadow(r,M,C,U,G,de,q)}}}else if(Y.visible){let W=y(M,Y,A,N);M.onBeforeShadow(r,M,C,U,G,W,null),r.renderBufferDirect(U,null,G,W,M,null),M.onAfterShadow(r,M,C,U,G,W,null)}}let j=M.children;for(let G=0,Y=j.length;G<Y;G++)S(j[G],C,U,A,N)}function x(M){M.target.removeEventListener("dispose",x);for(let C in l){let U=l[C],A=M.target.uuid;A in U&&(U[A].dispose(),delete U[A])}}this.render=function(M,C,U){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;this.type===vl&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ba);let A=r.getRenderTarget(),N=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Xi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Y=g!==this.type;Y&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(V=>V.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,V=M.length;W<V;W++){let k=M[W],q=k.shadow;if(q===void 0){Ae("WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let ie=q.getFrameExtents();n.multiply(ie),s.copy(q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ie.x),n.x=s.x*ie.x,q.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ie.y),n.y=s.y*ie.y,q.mapSize.y=s.y));let de=r.state.buffers.depth.getReversed();if(q.camera._reversedDepth=de,q.map===null||Y===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===gs){if(k.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ri(n.x,n.y,{format:dr,type:ji,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),q.map.texture.name=k.name+".shadowMap",q.map.depthTexture=new fn(n.x,n.y,Li),q.map.depthTexture.name=k.name+".shadowMapDepth",q.map.depthTexture.format=Gn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=vi,q.map.depthTexture.magFilter=vi}else k.isPointLight?(q.map=new zl(n.x),q.map.depthTexture=new zo(n.x,vn)):(q.map=new ri(n.x,n.y),q.map.depthTexture=new fn(n.x,n.y,vn)),q.map.depthTexture.name=k.name+".shadowMap",q.map.depthTexture.format=Gn,this.type===ba?(q.map.depthTexture.compareFunction=de?Nl:Dl,q.map.depthTexture.minFilter=Bt,q.map.depthTexture.magFilter=Bt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=vi,q.map.depthTexture.magFilter=vi);q.camera.updateProjectionMatrix()}let Me=q.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(q.map.isWebGLCubeRenderTarget)r.setRenderTarget(q.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(q.map),r.clear());let _e=q.getViewport(Se);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),G.viewport(a)}if(k.isPointLight){let _e=q.camera,se=q.matrix,ce=k.distance||_e.far;ce!==_e.far&&(_e.far=ce,_e.updateProjectionMatrix()),Ia.setFromMatrixPosition(k.matrixWorld),_e.position.copy(Ia),xu.copy(_e.position),xu.add(q0[Se]),_e.up.copy(Y0[Se]),_e.lookAt(xu),_e.updateMatrixWorld(),se.makeTranslation(-Ia.x,-Ia.y,-Ia.z),xf.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),q._frustum.setFromProjectionMatrix(xf,_e.coordinateSystem,_e.reversedDepth)}else q.updateMatrices(k);i=q.getFrustum(),S(C,U,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===gs&&_(q,U),q.needsUpdate=!1}g=this.type,v.needsUpdate=!1,r.setRenderTarget(A,N,j)}}function J0(r,e){let t=new function(){let b=!1,F=new et,B=null,I=new et(0,0,0,0);return{setMask:function(Z){B===Z||b||(r.colorMask(Z,Z,Z,Z),B=Z)},setLocked:function(Z){b=Z},setClear:function(Z,K,te,ae,ge){ge===!0&&(Z*=ae,K*=ae,te*=ae),F.set(Z,K,te,ae),I.equals(F)===!1&&(r.clearColor(Z,K,te,ae),I.copy(F))},reset:function(){b=!1,B=null,I.set(-1,0,0,0)}}},i=new function(){let b=!1,F=!1,B=null,I=null,Z=null;return{setReversed:function(K){if(F!==K){let te=e.get("EXT_clip_control");K?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),F=K;let ae=Z;Z=null,this.setClear(ae)}},getReversed:function(){return F},setTest:function(K){K?oe(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(K){B===K||b||(r.depthMask(K),B=K)},setFunc:function(K){if(F&&(K=Xp[K]),I!==K){switch(K){case ah:r.depthFunc(r.NEVER);break;case oh:r.depthFunc(r.ALWAYS);break;case lh:r.depthFunc(r.LESS);break;case yl:r.depthFunc(r.LEQUAL);break;case ch:r.depthFunc(r.EQUAL);break;case hh:r.depthFunc(r.GEQUAL);break;case uh:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}I=K}},setLocked:function(K){b=K},setClear:function(K){Z!==K&&(Z=K,F&&(K=1-K),r.clearDepth(K))},reset:function(){b=!1,B=null,I=null,Z=null,F=!1}}},n=new function(){let b=!1,F=null,B=null,I=null,Z=null,K=null,te=null,ae=null,ge=null;return{setTest:function(ee){b||(ee?oe(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(ee){F===ee||b||(r.stencilMask(ee),F=ee)},setFunc:function(ee,ve,ue){B===ee&&I===ve&&Z===ue||(r.stencilFunc(ee,ve,ue),B=ee,I=ve,Z=ue)},setOp:function(ee,ve,ue){K===ee&&te===ve&&ae===ue||(r.stencilOp(ee,ve,ue),K=ee,te=ve,ae=ue)},setLocked:function(ee){b=ee},setClear:function(ee){ge!==ee&&(r.clearStencil(ee),ge=ee)},reset:function(){b=!1,F=null,B=null,I=null,Z=null,K=null,te=null,ae=null,ge=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l={},h=new WeakMap,d=[],f=null,p=!1,m=null,u=null,v=null,g=null,_=null,y=null,S=null,x=new ze(0,0,0),M=0,C=!1,U=null,A=null,N=null,j=null,G=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,V=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=V>=2);let q=null,ie={},de=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Se=new et().fromArray(de),_e=new et().fromArray(Me);function se(b,F,B,I){let Z=new Uint8Array(4),K=r.createTexture();r.bindTexture(b,K),r.texParameteri(b,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(b,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<B;te++)b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY?r.texImage3D(F,0,r.RGBA,1,1,I,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(F+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return K}let ce={};function oe(b){o[b]!==!0&&(r.enable(b),o[b]=!0)}function xe(b){o[b]!==!1&&(r.disable(b),o[b]=!1)}ce[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),oe(r.DEPTH_TEST),i.setFunc(yl),T(!1),L(ih),oe(r.CULL_FACE),D(Xi);let Ne={[vs]:r.FUNC_ADD,[hp]:r.FUNC_SUBTRACT,[up]:r.FUNC_REVERSE_SUBTRACT};Ne[dp]=r.MIN,Ne[pp]=r.MAX;let re={[fp]:r.ZERO,[mp]:r.ONE,[gp]:r.SRC_COLOR,[vp]:r.SRC_ALPHA,[Tp]:r.SRC_ALPHA_SATURATE,[Sp]:r.DST_COLOR,[xp]:r.DST_ALPHA,[_p]:r.ONE_MINUS_SRC_COLOR,[yp]:r.ONE_MINUS_SRC_ALPHA,[bp]:r.ONE_MINUS_DST_COLOR,[Mp]:r.ONE_MINUS_DST_ALPHA,[Ep]:r.CONSTANT_COLOR,[wp]:r.ONE_MINUS_CONSTANT_COLOR,[Ap]:r.CONSTANT_ALPHA,[Cp]:r.ONE_MINUS_CONSTANT_ALPHA};function D(b,F,B,I,Z,K,te,ae,ge,ee){if(b!==Xi){if(p===!1&&(oe(r.BLEND),p=!0),b===cp)Z=Z||F,K=K||B,te=te||I,F===u&&Z===_||(r.blendEquationSeparate(Ne[F],Ne[Z]),u=F,_=Z),B===v&&I===g&&K===y&&te===S||(r.blendFuncSeparate(re[B],re[I],re[K],re[te]),v=B,g=I,y=K,S=te),ae.equals(x)!==!1&&ge===M||(r.blendColor(ae.r,ae.g,ae.b,ge),x.copy(ae),M=ge),m=b,C=!1;else if(b!==m||ee!==C){if(u===vs&&_===vs||(r.blendEquation(r.FUNC_ADD),u=vs,_=vs),ee)switch(b){case Ta:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nh:r.blendFunc(r.ONE,r.ONE);break;case rh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pe("WebGLState: Invalid blending: ",b)}else switch(b){case Ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rh:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",b)}v=null,g=null,y=null,S=null,x.set(0,0,0),M=0,m=b,C=ee}}else p===!0&&(xe(r.BLEND),p=!1)}function T(b){U!==b&&(b?r.frontFace(r.CW):r.frontFace(r.CCW),U=b)}function L(b){b!==op?(oe(r.CULL_FACE),b!==A&&(b===ih?r.cullFace(r.BACK):b===lp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),A=b}function z(b,F,B){b?(oe(r.POLYGON_OFFSET_FILL),j===F&&G===B||(j=F,G=B,i.getReversed()&&(F=-F),r.polygonOffset(F,B))):xe(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:oe,disable:xe,bindFramebuffer:function(b,F){return l[b]!==F&&(r.bindFramebuffer(b,F),l[b]=F,b===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=F),b===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=F),!0)},drawBuffers:function(b,F){let B=d,I=!1;if(b){B=h.get(F),B===void 0&&(B=[],h.set(F,B));let Z=b.textures;if(B.length!==Z.length||B[0]!==r.COLOR_ATTACHMENT0){for(let K=0,te=Z.length;K<te;K++)B[K]=r.COLOR_ATTACHMENT0+K;B.length=Z.length,I=!0}}else B[0]!==r.BACK&&(B[0]=r.BACK,I=!0);I&&r.drawBuffers(B)},useProgram:function(b){return f!==b&&(r.useProgram(b),f=b,!0)},setBlending:D,setMaterial:function(b,F){b.side===li?xe(r.CULL_FACE):oe(r.CULL_FACE);let B=b.side===zt;F&&(B=!B),T(B),b.blending===Ta&&b.transparent===!1?D(Xi):D(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),i.setFunc(b.depthFunc),i.setTest(b.depthTest),i.setMask(b.depthWrite),t.setMask(b.colorWrite);let I=b.stencilWrite;n.setTest(I),I&&(n.setMask(b.stencilWriteMask),n.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),n.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),z(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:T,setCullFace:L,setLineWidth:function(b){b!==N&&(W&&r.lineWidth(b),N=b)},setPolygonOffset:z,setScissorTest:function(b){b?oe(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=r.TEXTURE0+Y-1),q!==b&&(r.activeTexture(b),q=b)},bindTexture:function(b,F,B){B===void 0&&(B=q===null?r.TEXTURE0+Y-1:q);let I=ie[B];I===void 0&&(I={type:void 0,texture:void 0},ie[B]=I),I.type===b&&I.texture===F||(q!==B&&(r.activeTexture(B),q=B),r.bindTexture(b,F||ce[b]),I.type=b,I.texture=F)},unbindTexture:function(){let b=ie[q];b!==void 0&&b.type!==void 0&&(r.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(b){Pe("WebGLState:",b)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(b){Pe("WebGLState:",b)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(b){Pe("WebGLState:",b)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(b){Pe("WebGLState:",b)}},pixelStorei:function(b,F){c[b]!==F&&(r.pixelStorei(b,F),c[b]=F)},getParameter:function(b){return c[b]!==void 0?c[b]:r.getParameter(b)},updateUBOMapping:function(b,F){let B=a.get(F);B===void 0&&(B=new WeakMap,a.set(F,B));let I=B.get(b);I===void 0&&(I=r.getUniformBlockIndex(F,b.name),B.set(b,I))},uniformBlockBinding:function(b,F){let B=a.get(F).get(b);s.get(F)!==B&&(r.uniformBlockBinding(F,B,b.__bindingPointIndex),s.set(F,B))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(b){Pe("WebGLState:",b)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(b){Pe("WebGLState:",b)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(b){Pe("WebGLState:",b)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(b){Pe("WebGLState:",b)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(b){Pe("WebGLState:",b)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(b){Pe("WebGLState:",b)}},scissor:function(b){Se.equals(b)===!1&&(r.scissor(b.x,b.y,b.z,b.w),Se.copy(b))},viewport:function(b){_e.equals(b)===!1&&(r.viewport(b.x,b.y,b.z,b.w),_e.copy(b))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),o={},c={},q=null,ie={},l={},h=new WeakMap,d=[],f=null,p=!1,m=null,u=null,v=null,g=null,_=null,y=null,S=null,x=new ze(0,0,0),M=0,C=!1,U=null,A=null,N=null,j=null,G=null,Se.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function K0(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(D,T){return m?new OffscreenCanvas(D,T):ea("canvas")}function v(D,T,L){let z=1,b=re(D);if((b.width>L||b.height>L)&&(z=L/Math.max(b.width,b.height)),z<1){if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let F=Math.floor(z*b.width),B=Math.floor(z*b.height);f===void 0&&(f=u(F,B));let I=T?u(F,B):f;return I.width=F,I.height=B,I.getContext("2d").drawImage(D,0,0,F,B),Ae("WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+F+"x"+B+")."),I}return"data"in D&&Ae("WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),D}return D}function g(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(D,T,L,z,b,F=!1){if(D!==null){if(r[D]!==void 0)return r[D];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let B;z&&(B=e.get("EXT_texture_norm16"),B||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=T;if(T===r.RED&&(L===r.FLOAT&&(I=r.R32F),L===r.HALF_FLOAT&&(I=r.R16F),L===r.UNSIGNED_BYTE&&(I=r.R8),L===r.UNSIGNED_SHORT&&B&&(I=B.R16_EXT),L===r.SHORT&&B&&(I=B.R16_SNORM_EXT)),T===r.RED_INTEGER&&(L===r.UNSIGNED_BYTE&&(I=r.R8UI),L===r.UNSIGNED_SHORT&&(I=r.R16UI),L===r.UNSIGNED_INT&&(I=r.R32UI),L===r.BYTE&&(I=r.R8I),L===r.SHORT&&(I=r.R16I),L===r.INT&&(I=r.R32I)),T===r.RG&&(L===r.FLOAT&&(I=r.RG32F),L===r.HALF_FLOAT&&(I=r.RG16F),L===r.UNSIGNED_BYTE&&(I=r.RG8),L===r.UNSIGNED_SHORT&&B&&(I=B.RG16_EXT),L===r.SHORT&&B&&(I=B.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(L===r.UNSIGNED_BYTE&&(I=r.RG8UI),L===r.UNSIGNED_SHORT&&(I=r.RG16UI),L===r.UNSIGNED_INT&&(I=r.RG32UI),L===r.BYTE&&(I=r.RG8I),L===r.SHORT&&(I=r.RG16I),L===r.INT&&(I=r.RG32I)),T===r.RGB_INTEGER&&(L===r.UNSIGNED_BYTE&&(I=r.RGB8UI),L===r.UNSIGNED_SHORT&&(I=r.RGB16UI),L===r.UNSIGNED_INT&&(I=r.RGB32UI),L===r.BYTE&&(I=r.RGB8I),L===r.SHORT&&(I=r.RGB16I),L===r.INT&&(I=r.RGB32I)),T===r.RGBA_INTEGER&&(L===r.UNSIGNED_BYTE&&(I=r.RGBA8UI),L===r.UNSIGNED_SHORT&&(I=r.RGBA16UI),L===r.UNSIGNED_INT&&(I=r.RGBA32UI),L===r.BYTE&&(I=r.RGBA8I),L===r.SHORT&&(I=r.RGBA16I),L===r.INT&&(I=r.RGBA32I)),T===r.RGB&&(L===r.UNSIGNED_SHORT&&B&&(I=B.RGB16_EXT),L===r.SHORT&&B&&(I=B.RGB16_SNORM_EXT),L===r.UNSIGNED_INT_5_9_9_9_REV&&(I=r.RGB9_E5),L===r.UNSIGNED_INT_10F_11F_11F_REV&&(I=r.R11F_G11F_B10F)),T===r.RGBA){let Z=F?Qs:je.getTransfer(b);L===r.FLOAT&&(I=r.RGBA32F),L===r.HALF_FLOAT&&(I=r.RGBA16F),L===r.UNSIGNED_BYTE&&(I=Z===Ke?r.SRGB8_ALPHA8:r.RGBA8),L===r.UNSIGNED_SHORT&&B&&(I=B.RGBA16_EXT),L===r.SHORT&&B&&(I=B.RGBA16_SNORM_EXT),L===r.UNSIGNED_SHORT_4_4_4_4&&(I=r.RGBA4),L===r.UNSIGNED_SHORT_5_5_5_1&&(I=r.RGB5_A1)}return I!==r.R16F&&I!==r.R32F&&I!==r.RG16F&&I!==r.RG32F&&I!==r.RGBA16F&&I!==r.RGBA32F||e.get("EXT_color_buffer_float"),I}function x(D,T){let L;return D?T===null||T===vn||T===Ms?L=r.DEPTH24_STENCIL8:T===Li?L=r.DEPTH32F_STENCIL8:T===xs&&(L=r.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vn||T===Ms?L=r.DEPTH_COMPONENT24:T===Li?L=r.DEPTH_COMPONENT32F:T===xs&&(L=r.DEPTH_COMPONENT16),L}function M(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==vi&&D.minFilter!==Bt?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function C(D){let T=D.target;T.removeEventListener("dispose",C),function(L){let z=i.get(L);if(z.__webglInit===void 0)return;let b=L.source,F=p.get(b);if(F){let B=F[z.__cacheKey];B.usedTimes--,B.usedTimes===0&&A(L),Object.keys(F).length===0&&p.delete(b)}i.remove(L)}(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function U(D){let T=D.target;T.removeEventListener("dispose",U),function(L){let z=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(z.__webglFramebuffer[F]))for(let B=0;B<z.__webglFramebuffer[F].length;B++)r.deleteFramebuffer(z.__webglFramebuffer[F][B]);else r.deleteFramebuffer(z.__webglFramebuffer[F]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[F])}else{if(Array.isArray(z.__webglFramebuffer))for(let F=0;F<z.__webglFramebuffer.length;F++)r.deleteFramebuffer(z.__webglFramebuffer[F]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let F=0;F<z.__webglColorRenderbuffer.length;F++)z.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[F]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}let b=L.textures;for(let F=0,B=b.length;F<B;F++){let I=i.get(b[F]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),i.remove(b[F])}i.remove(L)}(T)}function A(D){let T=i.get(D);r.deleteTexture(T.__webglTexture);let L=D.source;delete p.get(L)[T.__cacheKey],a.memory.textures--}let N=0;function j(D,T){let L=i.get(D);if(D.isVideoTexture&&function(z){let b=a.render.frame;h.get(z)!==b&&(h.set(z,b),z.update())}(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&L.__version!==D.version){let z=D.image;if(z===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else{if(z.complete!==!1)return void ie(L,D,T);Ae("WebGLRenderer: Texture marked for update but image is incomplete")}}else D.isExternalTexture&&(L.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,L.__webglTexture,r.TEXTURE0+T)}let G={[sr]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[Co]:r.MIRRORED_REPEAT},Y={[vi]:r.NEAREST,[Lp]:r.NEAREST_MIPMAP_NEAREST,[Aa]:r.NEAREST_MIPMAP_LINEAR,[Bt]:r.LINEAR,[Sl]:r.LINEAR_MIPMAP_NEAREST,[hr]:r.LINEAR_MIPMAP_LINEAR},W={[Op]:r.NEVER,[Gp]:r.ALWAYS,[Fp]:r.LESS,[Dl]:r.LEQUAL,[Bp]:r.EQUAL,[Nl]:r.GEQUAL,[zp]:r.GREATER,[kp]:r.NOTEQUAL};function V(D,T){if(T.type!==Li||e.has("OES_texture_float_linear")!==!1||T.magFilter!==Bt&&T.magFilter!==Sl&&T.magFilter!==Aa&&T.magFilter!==hr&&T.minFilter!==Bt&&T.minFilter!==Sl&&T.minFilter!==Aa&&T.minFilter!==hr||Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,G[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,G[T.wrapT]),D!==r.TEXTURE_3D&&D!==r.TEXTURE_2D_ARRAY||r.texParameteri(D,r.TEXTURE_WRAP_R,G[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Y[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Y[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,W[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vi||T.minFilter!==Aa&&T.minFilter!==hr||T.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function k(D,T){let L=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",C));let z=T.source,b=p.get(z);b===void 0&&(b={},p.set(z,b));let F=function(B){let I=[];return I.push(B.wrapS),I.push(B.wrapT),I.push(B.wrapR||0),I.push(B.magFilter),I.push(B.minFilter),I.push(B.anisotropy),I.push(B.internalFormat),I.push(B.format),I.push(B.type),I.push(B.generateMipmaps),I.push(B.premultiplyAlpha),I.push(B.flipY),I.push(B.unpackAlignment),I.push(B.colorSpace),I.join()}(T);if(F!==D.__cacheKey){b[F]===void 0&&(b[F]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,L=!0),b[F].usedTimes++;let B=b[D.__cacheKey];B!==void 0&&(b[D.__cacheKey].usedTimes--,B.usedTimes===0&&A(T)),D.__cacheKey=F,D.__webglTexture=b[F].texture}return L}function q(D,T,L){return Math.floor(Math.floor(D/L)/T)}function ie(D,T,L){let z=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(z=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(z=r.TEXTURE_3D);let b=k(D,T),F=T.source;t.bindTexture(z,D.__webglTexture,r.TEXTURE0+L);let B=i.get(F);if(F.version!==B.__version||b===!0){if(t.activeTexture(r.TEXTURE0+L),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let he=je.getPrimaries(je.workingColorSpace),be=T.colorSpace===pr?null:je.getPrimaries(T.colorSpace),ke=T.colorSpace===pr||he===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let I=v(T.image,!1,n.maxTextureSize);I=Ne(T,I);let Z=s.convert(T.format,T.colorSpace),K=s.convert(T.type),te,ae=S(T.internalFormat,Z,K,T.normalized,T.colorSpace,T.isVideoTexture);V(z,T);let ge=T.mipmaps,ee=T.isVideoTexture!==!0,ve=B.__version===void 0||b===!0,ue=F.dataReady,fe=M(T,I);if(T.isDepthTexture)ae=x(T.format===ur,T.type),ve&&(ee?t.texStorage2D(r.TEXTURE_2D,1,ae,I.width,I.height):t.texImage2D(r.TEXTURE_2D,0,ae,I.width,I.height,0,Z,K,null));else if(T.isDataTexture)if(ge.length>0){ee&&ve&&t.texStorage2D(r.TEXTURE_2D,fe,ae,ge[0].width,ge[0].height);for(let he=0,be=ge.length;he<be;he++)te=ge[he],ee?ue&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,te.width,te.height,Z,K,te.data):t.texImage2D(r.TEXTURE_2D,he,ae,te.width,te.height,0,Z,K,te.data);T.generateMipmaps=!1}else ee?(ve&&t.texStorage2D(r.TEXTURE_2D,fe,ae,I.width,I.height),ue&&function(he,be,ke,$e){let We=he.updateRanges;if(We.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,be.width,be.height,ke,$e,be.data);else{We.sort((Re,Je)=>Re.start-Je.start);let Fe=0;for(let Re=1;Re<We.length;Re++){let Je=We[Fe],ct=We[Re],fi=Je.start+Je.count,Ut=q(ct.start,be.width,4),qe=q(Je.start,be.width,4);ct.start<=fi+1&&Ut===qe&&q(ct.start+ct.count-1,be.width,4)===Ut?Je.count=Math.max(Je.count,ct.start+ct.count-Je.start):(++Fe,We[Fe]=ct)}We.length=Fe+1;let Mt=t.getParameter(r.UNPACK_ROW_LENGTH),Te=t.getParameter(r.UNPACK_SKIP_PIXELS),Ce=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,be.width);for(let Re=0,Je=We.length;Re<Je;Re++){let ct=We[Re],fi=Math.floor(ct.start/4),Ut=Math.ceil(ct.count/4),qe=fi%be.width,Pt=Math.floor(fi/be.width),Tn=Ut;t.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Pt),t.texSubImage2D(r.TEXTURE_2D,0,qe,Pt,Tn,1,ke,$e,be.data)}he.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Mt),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}(T,I,Z,K)):t.texImage2D(r.TEXTURE_2D,0,ae,I.width,I.height,0,Z,K,I.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ae,ge[0].width,ge[0].height,I.depth);for(let he=0,be=ge.length;he<be;he++)if(te=ge[he],T.format!==Di)if(Z!==null)if(ee){if(ue)if(T.layerUpdates.size>0){let ke=cu(te.width,te.height,T.format,T.type);for(let $e of T.layerUpdates){let We=te.data.subarray($e*ke/te.data.BYTES_PER_ELEMENT,($e+1)*ke/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,$e,te.width,te.height,1,Z,We)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,te.width,te.height,I.depth,Z,te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,ae,te.width,te.height,I.depth,0,te.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?ue&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,te.width,te.height,I.depth,Z,K,te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,ae,te.width,te.height,I.depth,0,Z,K,te.data)}else{ee&&ve&&t.texStorage2D(r.TEXTURE_2D,fe,ae,ge[0].width,ge[0].height);for(let he=0,be=ge.length;he<be;he++)te=ge[he],T.format!==Di?Z!==null?ee?ue&&t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,te.width,te.height,Z,te.data):t.compressedTexImage2D(r.TEXTURE_2D,he,ae,te.width,te.height,0,te.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?ue&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,te.width,te.height,Z,K,te.data):t.texImage2D(r.TEXTURE_2D,he,ae,te.width,te.height,0,Z,K,te.data)}else if(T.isDataArrayTexture)if(ee){if(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ae,I.width,I.height,I.depth),ue)if(T.layerUpdates.size>0){let he=cu(I.width,I.height,T.format,T.type);for(let be of T.layerUpdates){let ke=I.data.subarray(be*he/I.data.BYTES_PER_ELEMENT,(be+1)*he/I.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,I.width,I.height,1,Z,K,ke)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,Z,K,I.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ae,I.width,I.height,I.depth,0,Z,K,I.data);else if(T.isData3DTexture)ee?(ve&&t.texStorage3D(r.TEXTURE_3D,fe,ae,I.width,I.height,I.depth),ue&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,Z,K,I.data)):t.texImage3D(r.TEXTURE_3D,0,ae,I.width,I.height,I.depth,0,Z,K,I.data);else if(T.isFramebufferTexture){if(ve)if(ee)t.texStorage2D(r.TEXTURE_2D,fe,ae,I.width,I.height);else{let he=I.width,be=I.height;for(let ke=0;ke<fe;ke++)t.texImage2D(r.TEXTURE_2D,ke,ae,he,be,0,Z,K,null),he>>=1,be>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let he=r.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),I.parentNode!==he)return he.appendChild(I),d.add(T),he.onpaint=Fe=>{let Mt=Fe.changedElements;for(let Te of d)Mt.includes(Te.image)&&(Te.needsUpdate=!0)},void he.requestPaint();let be=0,ke=r.RGBA,$e=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,be,ke,$e,We,I),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ge.length>0){if(ee&&ve){let he=re(ge[0]);t.texStorage2D(r.TEXTURE_2D,fe,ae,he.width,he.height)}for(let he=0,be=ge.length;he<be;he++)te=ge[he],ee?ue&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Z,K,te):t.texImage2D(r.TEXTURE_2D,he,ae,Z,K,te);T.generateMipmaps=!1}else if(ee){if(ve){let he=re(I);t.texStorage2D(r.TEXTURE_2D,fe,ae,he.width,he.height)}ue&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z,K,I)}else t.texImage2D(r.TEXTURE_2D,0,ae,Z,K,I);g(T)&&_(z),B.__version=F.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function de(D,T,L,z,b,F){let B=s.convert(L.format,L.colorSpace),I=s.convert(L.type),Z=S(L.internalFormat,B,I,L.normalized,L.colorSpace),K=i.get(T),te=i.get(L);if(te.__renderTarget=T,!K.__hasExternalTextures){let ae=Math.max(1,T.width>>F),ge=Math.max(1,T.height>>F);b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY?t.texImage3D(b,F,Z,ae,ge,T.depth,0,B,I,null):t.texImage2D(b,F,Z,ae,ge,0,B,I,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,z,b,te.__webglTexture,0,oe(T)):(b===r.TEXTURE_2D||b>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,z,b,te.__webglTexture,F),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(D,T,L){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){let z=T.depthTexture,b=z&&z.isDepthTexture?z.type:null,F=x(T.stencilBuffer,b),B=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe(T),F,T.width,T.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe(T),F,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,F,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,B,r.RENDERBUFFER,D)}else{let z=T.textures;for(let b=0;b<z.length;b++){let F=z[b],B=s.convert(F.format,F.colorSpace),I=s.convert(F.type),Z=S(F.internalFormat,B,I,F.normalized,F.colorSpace);xe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe(T),Z,T.width,T.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe(T),Z,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Z,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(D,T,L){let z=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!T.depthTexture||!T.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let b=i.get(T.depthTexture);if(b.__renderTarget=T,b.__webglTexture&&T.depthTexture.image.width===T.width&&T.depthTexture.image.height===T.height||(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z){if(b.__webglInit===void 0&&(b.__webglInit=!0,T.depthTexture.addEventListener("dispose",C)),b.__webglTexture===void 0){b.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture),V(r.TEXTURE_CUBE_MAP,T.depthTexture);let K=s.convert(T.depthTexture.format),te=s.convert(T.depthTexture.type),ae;T.depthTexture.format===Gn?ae=r.DEPTH_COMPONENT24:T.depthTexture.format===ur&&(ae=r.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,T.width,T.height,0,K,te,null)}}else j(T.depthTexture,0);let F=b.__webglTexture,B=oe(T),I=z?r.TEXTURE_CUBE_MAP_POSITIVE_X+L:r.TEXTURE_2D,Z=T.depthTexture.format===ur?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Gn)xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,I,F,0,B):r.framebufferTexture2D(r.FRAMEBUFFER,Z,I,F,0);else{if(T.depthTexture.format!==ur)throw new Error("Unknown depthTexture format");xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,I,F,0,B):r.framebufferTexture2D(r.FRAMEBUFFER,Z,I,F,0)}}function _e(D){let T=i.get(D),L=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let z=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),z){let b=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,z.removeEventListener("dispose",b)};z.addEventListener("dispose",b),T.__depthDisposeCallback=b}T.__boundDepthTexture=z}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(L)for(let z=0;z<6;z++)Se(T.__webglFramebuffer[z],D,z);else{let z=D.texture.mipmaps;z&&z.length>0?Se(T.__webglFramebuffer[0],D,0):Se(T.__webglFramebuffer,D,0)}else if(L){T.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[z]),T.__webglDepthbuffer[z]===void 0)T.__webglDepthbuffer[z]=r.createRenderbuffer(),Me(T.__webglDepthbuffer[z],D,!1);else{let b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=T.__webglDepthbuffer[z];r.bindRenderbuffer(r.RENDERBUFFER,F),r.framebufferRenderbuffer(r.FRAMEBUFFER,b,r.RENDERBUFFER,F)}}else{let z=D.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Me(T.__webglDepthbuffer,D,!1);else{let b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,F),r.framebufferRenderbuffer(r.FRAMEBUFFER,b,r.RENDERBUFFER,F)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let se=[],ce=[];function oe(D){return Math.min(n.maxSamples,D.samples)}function xe(D){let T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ne(D,T){let L=D.colorSpace,z=D.format,b=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||L!==$s&&L!==pr&&(je.getTransfer(L)===Ke?z===Di&&b===ci||Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",L)),T}function re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=function(){let D=N;return D>=n.maxTextures&&Ae("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+n.maxTextures),N+=1,D},this.resetTextureUnits=function(){N=0},this.getTextureUnits=function(){return N},this.setTextureUnits=function(D){N=D},this.setTexture2D=j,this.setTexture2DArray=function(D,T){let L=i.get(D);D.isRenderTargetTexture===!1&&D.version>0&&L.__version!==D.version?ie(L,D,T):(D.isExternalTexture&&(L.__webglTexture=D.sourceTexture?D.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,L.__webglTexture,r.TEXTURE0+T))},this.setTexture3D=function(D,T){let L=i.get(D);D.isRenderTargetTexture===!1&&D.version>0&&L.__version!==D.version?ie(L,D,T):t.bindTexture(r.TEXTURE_3D,L.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(D,T){let L=i.get(D);D.isCubeDepthTexture!==!0&&D.version>0&&L.__version!==D.version?function(z,b,F){if(b.image.length!==6)return;let B=k(z,b),I=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+F);let Z=i.get(I);if(I.version!==Z.__version||B===!0){t.activeTexture(r.TEXTURE0+F);let K=je.getPrimaries(je.workingColorSpace),te=b.colorSpace===pr?null:je.getPrimaries(b.colorSpace),ae=b.colorSpace===pr||K===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ge=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let Te=0;Te<6;Te++)ve[Te]=ge||ee?ee?b.image[Te].image:b.image[Te]:v(b.image[Te],!0,n.maxCubemapSize),ve[Te]=Ne(b,ve[Te]);let ue=ve[0],fe=s.convert(b.format,b.colorSpace),he=s.convert(b.type),be=S(b.internalFormat,fe,he,b.normalized,b.colorSpace),ke=b.isVideoTexture!==!0,$e=Z.__version===void 0||B===!0,We=I.dataReady,Fe,Mt=M(b,ue);if(V(r.TEXTURE_CUBE_MAP,b),ge){ke&&$e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,be,ue.width,ue.height);for(let Te=0;Te<6;Te++){Fe=ve[Te].mipmaps;for(let Ce=0;Ce<Fe.length;Ce++){let Re=Fe[Ce];b.format!==Di?fe!==null?ke?We&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce,0,0,Re.width,Re.height,fe,Re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce,be,Re.width,Re.height,0,Re.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce,0,0,Re.width,Re.height,fe,he,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce,be,Re.width,Re.height,0,fe,he,Re.data)}}}else{if(Fe=b.mipmaps,ke&&$e){Fe.length>0&&Mt++;let Te=re(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,be,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ee){ke?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ve[Te].width,ve[Te].height,fe,he,ve[Te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,be,ve[Te].width,ve[Te].height,0,fe,he,ve[Te].data);for(let Ce=0;Ce<Fe.length;Ce++){let Re=Fe[Ce].image[Te].image;ke?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce+1,0,0,Re.width,Re.height,fe,he,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce+1,be,Re.width,Re.height,0,fe,he,Re.data)}}else{ke?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,fe,he,ve[Te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,be,fe,he,ve[Te]);for(let Ce=0;Ce<Fe.length;Ce++){let Re=Fe[Ce];ke?We&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce+1,0,0,fe,he,Re.image[Te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ce+1,be,fe,he,Re.image[Te])}}}g(b)&&_(r.TEXTURE_CUBE_MAP),Z.__version=I.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}(L,D,T):t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(D,T,L){let z=i.get(D);T!==void 0&&de(z.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),L!==void 0&&_e(D)},this.setupRenderTarget=function(D){let T=D.texture,L=i.get(D),z=i.get(T);D.addEventListener("dispose",U);let b=D.textures,F=D.isWebGLCubeRenderTarget===!0,B=b.length>1;if(B||(z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture()),z.__version=T.version,a.memory.textures++),F){L.__webglFramebuffer=[];for(let I=0;I<6;I++)if(T.mipmaps&&T.mipmaps.length>0){L.__webglFramebuffer[I]=[];for(let Z=0;Z<T.mipmaps.length;Z++)L.__webglFramebuffer[I][Z]=r.createFramebuffer()}else L.__webglFramebuffer[I]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){L.__webglFramebuffer=[];for(let I=0;I<T.mipmaps.length;I++)L.__webglFramebuffer[I]=r.createFramebuffer()}else L.__webglFramebuffer=r.createFramebuffer();if(B)for(let I=0,Z=b.length;I<Z;I++){let K=i.get(b[I]);K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&xe(D)===!1){L.__webglMultisampledFramebuffer=r.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let I=0;I<b.length;I++){let Z=b[I];L.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,L.__webglColorRenderbuffer[I]);let K=s.convert(Z.format,Z.colorSpace),te=s.convert(Z.type),ae=S(Z.internalFormat,K,te,Z.normalized,Z.colorSpace,D.isXRRenderTarget===!0),ge=oe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,ae,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+I,r.RENDERBUFFER,L.__webglColorRenderbuffer[I])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(L.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(L.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(F){t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture),V(r.TEXTURE_CUBE_MAP,T);for(let I=0;I<6;I++)if(T.mipmaps&&T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)de(L.__webglFramebuffer[I][Z],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,Z);else de(L.__webglFramebuffer[I],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);g(T)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){for(let I=0,Z=b.length;I<Z;I++){let K=b[I],te=i.get(K),ae=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ae=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,te.__webglTexture),V(ae,K),de(L.__webglFramebuffer,D,K,r.COLOR_ATTACHMENT0+I,ae,0),g(K)&&_(ae)}t.unbindTexture()}else{let I=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(I=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(I,z.__webglTexture),V(I,T),T.mipmaps&&T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)de(L.__webglFramebuffer[Z],D,T,r.COLOR_ATTACHMENT0,I,Z);else de(L.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,I,0);g(T)&&_(I),t.unbindTexture()}D.depthBuffer&&_e(D)},this.updateRenderTargetMipmap=function(D){let T=D.textures;for(let L=0,z=T.length;L<z;L++){let b=T[L];if(g(b)){let F=y(D),B=i.get(b).__webglTexture;t.bindTexture(F,B),_(F),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(D){if(D.samples>0){if(xe(D)===!1){let T=D.textures,L=D.width,z=D.height,b=r.COLOR_BUFFER_BIT,F=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,B=i.get(D),I=T.length>1;if(I)for(let K=0;K<T.length;K++)t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);let Z=D.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let K=0;K<T.length;K++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(b|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(b|=r.STENCIL_BUFFER_BIT)),I){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let te=i.get(T[K]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,L,z,0,0,L,z,b,r.NEAREST),c===!0&&(se.length=0,ce.length=0,se.push(r.COLOR_ATTACHMENT0+K),D.depthBuffer&&D.resolveDepthBuffer===!1&&(se.push(F),ce.push(F),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),I)for(let K=0;K<T.length;K++){t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let te=i.get(T[K]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $0(r,e){return{convert:function(t,i=pr){let n,s=je.getTransfer(i);if(t===ci)return r.UNSIGNED_BYTE;if(t===Tl)return r.UNSIGNED_SHORT_4_4_4_4;if(t===El)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Sh)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===bh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===xh)return r.BYTE;if(t===Mh)return r.SHORT;if(t===xs)return r.UNSIGNED_SHORT;if(t===bl)return r.INT;if(t===vn)return r.UNSIGNED_INT;if(t===Li)return r.FLOAT;if(t===ji)return r.HALF_FLOAT;if(t===Dp)return r.ALPHA;if(t===Np)return r.RGB;if(t===Di)return r.RGBA;if(t===Gn)return r.DEPTH_COMPONENT;if(t===ur)return r.DEPTH_STENCIL;if(t===Th)return r.RED;if(t===wl)return r.RED_INTEGER;if(t===dr)return r.RG;if(t===Eh)return r.RG_INTEGER;if(t===wh)return r.RGBA_INTEGER;if(t===Al||t===Cl||t===Rl||t===Pl)if(s===Ke){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===Al)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Cl)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Rl)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Pl)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===Al)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Cl)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Rl)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Pl)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ah||t===Ch||t===Rh||t===Ph){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Ah)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Ch)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Rh)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ph)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Ih||t===Lh||t===Dh||t===Nh||t===Uh||t===Il||t===Oh){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===Ih||t===Lh)return s===Ke?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===Dh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(t===Nh)return n.COMPRESSED_R11_EAC;if(t===Uh)return n.COMPRESSED_SIGNED_R11_EAC;if(t===Il)return n.COMPRESSED_RG11_EAC;if(t===Oh)return n.COMPRESSED_SIGNED_RG11_EAC}if(t===Fh||t===Bh||t===zh||t===kh||t===Gh||t===Vh||t===Hh||t===Wh||t===Xh||t===jh||t===qh||t===Yh||t===Zh||t===Jh){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===Fh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Bh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===zh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===kh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Gh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Vh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Hh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Wh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Xh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===jh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===qh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Yh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Zh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Jh)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Kh||t===$h||t===Qh){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Kh)return s===Ke?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===$h)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Qh)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===eu||t===tu||t===Ll||t===iu){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===eu)return n.COMPRESSED_RED_RGTC1_EXT;if(t===tu)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Ll)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===iu)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Ms?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new la(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new oi({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends Wi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,m=null,u=typeof XRWebGLBinding<"u",v=new Cu,g={},_=t.getContextAttributes(),y=null,S=null,x=[],M=[],C=new le,U=null,A=new Rt;A.viewport=new et;let N=new Rt;N.viewport=new et;let j=[A,N],G=new gl,Y=null,W=null;function V(se){let ce=M.indexOf(se.inputSource);if(ce===-1)return;let oe=x[ce];oe!==void 0&&(oe.update(se.inputSource,se.frame,l||a),oe.dispatchEvent({type:se.type,data:se.inputSource}))}function k(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",q);for(let se=0;se<x.length;se++){let ce=M[se];ce!==null&&(M[se]=null,x[se].disconnect(ce))}Y=null,W=null,v.reset();for(let se in g)delete g[se];e.setRenderTarget(y),p=null,f=null,d=null,n=null,S=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}function q(se){for(let ce=0;ce<se.removed.length;ce++){let oe=se.removed[ce],xe=M.indexOf(oe);xe>=0&&(M[xe]=null,x[xe].disconnect(oe))}for(let ce=0;ce<se.added.length;ce++){let oe=se.added[ce],xe=M.indexOf(oe);if(xe===-1){for(let re=0;re<x.length;re++){if(re>=M.length){M.push(oe),xe=re;break}if(M[re]===null){M[re]=oe,xe=re;break}}if(xe===-1)break}let Ne=x[xe];Ne&&Ne.connect(oe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ce=x[se];return ce===void 0&&(ce=new ts,x[se]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(se){let ce=x[se];return ce===void 0&&(ce=new ts,x[se]=ce),ce.getGripSpace()},this.getHand=function(se){let ce=x[se];return ce===void 0&&(ce=new ts,x[se]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&u&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(se){if(n=se,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",k),n.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),u&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,oe=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?ur:Gn,oe=_.stencil?Ms:vn);let Ne={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ne),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ri(f.textureWidth,f.textureHeight,{format:Di,type:ci,depthTexture:new fn(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,ce),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ri(p.framebufferWidth,p.framebufferHeight,{format:Di,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),_e.setContext(n),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let ie=new P,de=new P;function Me(se,ce){ce===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ce.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(n===null)return;let ce=se.near,oe=se.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),G.near=N.near=A.near=ce,G.far=N.far=A.far=oe,Y===G.near&&W===G.far||(n.updateRenderState({depthNear:G.near,depthFar:G.far}),Y=G.near,W=G.far),G.layers.mask=6|se.layers.mask,A.layers.mask=-5&G.layers.mask,N.layers.mask=-3&G.layers.mask;let xe=se.parent,Ne=G.cameras;Me(G,xe);for(let re=0;re<Ne.length;re++)Me(Ne[re],xe);Ne.length===2?function(re,D,T){ie.setFromMatrixPosition(D.matrixWorld),de.setFromMatrixPosition(T.matrixWorld);let L=ie.distanceTo(de),z=D.projectionMatrix.elements,b=T.projectionMatrix.elements,F=z[14]/(z[10]-1),B=z[14]/(z[10]+1),I=(z[9]+1)/z[5],Z=(z[9]-1)/z[5],K=(z[8]-1)/z[0],te=(b[8]+1)/b[0],ae=F*K,ge=F*te,ee=L/(-K+te),ve=ee*-K;if(D.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ve),re.translateZ(ee),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),z[10]===-1)re.projectionMatrix.copy(D.projectionMatrix),re.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{let ue=F+ee,fe=B+ee,he=ae-ve,be=ge+(L-ve),ke=I*B/fe*ue,$e=Z*B/fe*ue;re.projectionMatrix.makePerspective(he,be,ke,$e,ue,fe),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}(G,A,N):G.projectionMatrix.copy(A.projectionMatrix),function(re,D,T){T===null?re.matrix.copy(D.matrixWorld):(re.matrix.copy(T.matrixWorld),re.matrix.invert(),re.matrix.multiply(D.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(D.projectionMatrix),re.projectionMatrixInverse.copy(D.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=2*ar*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}(se,G,xe)},this.getCamera=function(){return G},this.getFoveation=function(){if(f!==null||p!==null)return c},this.setFoveation=function(se){c=se,f!==null&&(f.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(G)},this.getCameraTexture=function(se){return g[se]};let Se=null,_e=new Mf;_e.setAnimationLoop(function(se,ce){if(h=ce.getViewerPose(l||a),m=ce,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let xe=!1;oe.length!==G.cameras.length&&(G.cameras.length=0,xe=!0);for(let re=0;re<oe.length;re++){let D=oe[re],T=null;if(p!==null)T=p.getViewport(D);else{let z=d.getViewSubImage(f,D);T=z.viewport,re===0&&(e.setRenderTargetTextures(S,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(S))}let L=j[re];L===void 0&&(L=new Rt,L.layers.enable(re),L.viewport=new et,j[re]=L),L.matrix.fromArray(D.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(D.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(T.x,T.y,T.width,T.height),re===0&&(G.matrix.copy(L.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),xe===!0&&G.cameras.push(L)}let Ne=n.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){d=i.getBinding();let re=d.getDepthInformation(oe[0]);re&&re.isValid&&re.texture&&v.init(re,n.renderState)}if(Ne&&Ne.includes("camera-access")&&u){e.state.unbindTexture(),d=i.getBinding();for(let re=0;re<oe.length;re++){let D=oe[re].camera;if(D){let T=g[D];T||(T=new la,g[D]=T);let L=d.getCameraImage(D);T.sourceTexture=L}}}}for(let oe=0;oe<x.length;oe++){let xe=M[oe],Ne=x[oe];xe!==null&&Ne!==void 0&&Ne.update(xe,ce,l||a)}Se&&Se(se,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),m=null}),this.setAnimationLoop=function(se){Se=se},this.dispose=function(){}}},Q0=new Ge,Af=new Oe;function e_(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===zt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===zt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,n.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(c)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&n.envMapRotation.value.premultiply(Af),n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,ou(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(n,s):s.isMeshLambertMaterial?(i(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(n,s),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(n,s),function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===zt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}(n,s),s.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(n,s)):s.isPointsMaterial?function(l,h,d,f){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*f,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function t_(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,f,p,m){let u=d.value,v=f+"_"+p;if(m[v]===void 0)return typeof u=="number"||typeof u=="boolean"?m[v]=u:ArrayBuffer.isView(u)?m[v]=u.slice():m[v]=u.clone(),!0;{let g=m[v];if(typeof u=="number"||typeof u=="boolean"){if(g!==u)return m[v]=u,!0}else{if(ArrayBuffer.isView(u))return!0;if(g.equals(u)===!1)return g.copy(u),!0}}return!1}function l(d){let f={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(f.boundary=4,f.storage=4):d.isVector2?(f.boundary=8,f.storage=8):d.isVector3||d.isColor?(f.boundary=16,f.storage=12):d.isVector4?(f.boundary=16,f.storage=16):d.isMatrix3?(f.boundary=48,f.storage=48):d.isMatrix4?(f.boundary=64,f.storage=64):d.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(f.boundary=16,f.storage=d.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",d),f}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=a.indexOf(f.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[f.id]),delete n[f.id],delete s[f.id]}return{bind:function(d,f){let p=f.program;i.uniformBlockBinding(d,p)},update:function(d,f){let p=n[d.id];p===void 0&&(function(v){let g=v.uniforms,_=0,y=16;for(let x=0,M=g.length;x<M;x++){let C=Array.isArray(g[x])?g[x]:[g[x]];for(let U=0,A=C.length;U<A;U++){let N=C[U],j=Array.isArray(N.value)?N.value:[N.value];for(let G=0,Y=j.length;G<Y;G++){let W=l(j[G]),V=_%y,k=V%W.boundary,q=V+k;_+=k,q!==0&&y-q<W.storage&&(_+=y-q),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=W.storage}}}let S=_%y;S>0&&(_+=y-S),v.__size=_,v.__cache={}}(d),p=function(v){let g=function(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();v.__bindingPointIndex=g;let _=r.createBuffer(),y=v.__size,S=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,y,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,_),_}(d),n[d.id]=p,d.addEventListener("dispose",h));let m=f.program;i.updateUBOMapping(d,m);let u=e.render.frame;s[d.id]!==u&&(function(v){let g=n[v.id],_=v.uniforms,y=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let S=0,x=_.length;S<x;S++){let M=Array.isArray(_[S])?_[S]:[_[S]];for(let C=0,U=M.length;C<U;C++){let A=M[C];if(c(A,S,C,y)===!0){let N=A.__offset,j=Array.isArray(A.value)?A.value:[A.value],G=0;for(let Y=0;Y<j.length;Y++){let W=j[Y],V=l(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,N+G,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):ArrayBuffer.isView(W)?A.__data.set(new W.constructor(W.buffer,W.byteOffset,A.__data.length)):(W.toArray(A.__data,G),G+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=u)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}Af.set(-1,0,0,0,1,0,0,0,1);var i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null,kl=class{constructor(e={}){let{canvas:t=Vp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ci}=e,m;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let u=p,v=new Set([wh,Eh,wl]),g=new Set([ci,vn,xs,Ms,Tl,El]),_=new Uint32Array(4),y=new Int32Array(4),S=new P,x=null,M=null,C=[],U=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,j=!1,G=null;this._outputColorSpace=Lt;let Y=0,W=0,V=null,k=-1,q=null,ie=new et,de=new et,Me=null,Se=new ze(0),_e=0,se=t.width,ce=t.height,oe=1,xe=null,Ne=null,re=new et(0,0,se,ce),D=new et(0,0,se,ce),T=!1,L=new Fn,z=!1,b=!1,F=new Ge,B=new P,I=new et,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function te(){return V===null?oe:1}let ae,ge,ee,ve,ue,fe,he,be,ke,$e,We,Fe,Mt,Te,Ce,Re,Je,ct,fi,Ut,qe,Pt,Tn,X=i;function qa(E,J){return t.getContext(E,J)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",Us,!1),t.addEventListener("webglcontextrestored",Ya,!1),t.addEventListener("webglcontextcreationerror",Za,!1),X===null){let J="webgl2";if(X=qa(J,E),X===null)throw qa(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pe("WebGLRenderer: "+E.message),E}function En(){ae=new Rg(X),ae.init(),qe=new $0(X,ae),ge=new Eg(X,ae,e,qe),ee=new J0(X,ae),ge.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),ve=new Lg(X),ue=new z0,fe=new K0(X,ae,ee,ue,ge,qe,ve),he=new Cg(N),be=new xg(X),Pt=new bg(X,be),ke=new Pg(X,be,ve,Pt),$e=new Ng(X,ke,be,Pt,ve),ct=new Dg(X,ge,fe),Ce=new wg(ue),We=new B0(N,he,ae,ge,Pt,Ce),Fe=new e_(N,ue),Mt=new G0,Te=new j0(ae),Je=new Sg(N,he,ee,$e,m,c),Re=new Z0(N,$e,ge),Tn=new t_(X,ve,ge,ee),fi=new Tg(X,ae,ve),Ut=new Ig(X,ae,ve),ve.programs=We.programs,N.capabilities=ge,N.extensions=ae,N.properties=ue,N.renderLists=Mt,N.shadowMap=Re,N.state=ee,N.info=ve}En(),u!==ci&&(A=new Og(u,t.width,t.height,n,s));let nt=new Ru(N,X);function Us(E){E.preventDefault(),su("WebGLRenderer: Context Lost."),j=!0}function Ya(){su("WebGLRenderer: Context Restored."),j=!1;let E=ve.autoReset,J=Re.enabled,w=Re.autoUpdate,R=Re.needsUpdate,O=Re.type;En(),ve.autoReset=E,Re.enabled=J,Re.autoUpdate=w,Re.needsUpdate=R,Re.type=O}function Za(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Os(E){let J=E.target;J.removeEventListener("dispose",Os),function(w){(function(R){let O=ue.get(R).programs;O!==void 0&&(O.forEach(function(H){We.releaseProgram(H)}),R.isShaderMaterial&&We.releaseShaderCache(R))})(w),ue.remove(w)}(J)}function Fs(E,J,w){E.transparent===!0&&E.side===li&&E.forceSinglePass===!1?(E.side=zt,E.needsUpdate=!0,$n(E,J,w),E.side=_s,E.needsUpdate=!0,$n(E,J,w),E.side=li):$n(E,J,w)}this.xr=nt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(E){E!==void 0&&(oe=E,this.setSize(se,ce,!1))},this.getSize=function(E){return E.set(se,ce)},this.setSize=function(E,J,w=!0){nt.isPresenting?Ae("WebGLRenderer: Can't change size while VR device is presenting."):(se=E,ce=J,t.width=Math.floor(E*oe),t.height=Math.floor(J*oe),w===!0&&(t.style.width=E+"px",t.style.height=J+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,J))},this.getDrawingBufferSize=function(E){return E.set(se*oe,ce*oe).floor()},this.setDrawingBufferSize=function(E,J,w){se=E,ce=J,oe=w,t.width=Math.floor(E*w),t.height=Math.floor(J*w),this.setViewport(0,0,E,J)},this.setEffects=function(E){if(u!==ci){if(E){for(let J=0;J<E.length;J++)if(E[J].isOutputPass===!0){Ae("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])}else Pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(ie)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,J,w,R){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,J,w,R),ee.viewport(ie.copy(re).multiplyScalar(oe).round())},this.getScissor=function(E){return E.copy(D)},this.setScissor=function(E,J,w,R){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,J,w,R),ee.scissor(de.copy(D).multiplyScalar(oe).round())},this.getScissorTest=function(){return T},this.setScissorTest=function(E){ee.setScissorTest(T=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(E=!0,J=!0,w=!0){let R=0;if(E){let O=!1;if(V!==null){let H=V.texture.format;O=v.has(H)}if(O){let H=V.texture.type,$=g.has(H),ne=Je.getClearColor(),Q=Je.getClearAlpha(),me=ne.r,Ee=ne.g,we=ne.b;$?(_[0]=me,_[1]=Ee,_[2]=we,_[3]=Q,X.clearBufferuiv(X.COLOR,0,_)):(y[0]=me,y[1]=Ee,y[2]=we,y[3]=Q,X.clearBufferiv(X.COLOR,0,y))}else R|=X.COLOR_BUFFER_BIT}J&&(R|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),w&&(R|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R!==0&&X.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),G=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Us,!1),t.removeEventListener("webglcontextrestored",Ya,!1),t.removeEventListener("webglcontextcreationerror",Za,!1),Je.dispose(),Mt.dispose(),Te.dispose(),ue.dispose(),he.dispose(),$e.dispose(),Pt.dispose(),Tn.dispose(),We.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Bs),nt.removeEventListener("sessionend",Pr),Ui.stop()},this.renderBufferDirect=function(E,J,w,R,O,H){J===null&&(J=Z);let $=O.isMesh&&O.matrixWorld.determinant()<0,ne=function(Xe,ut,It,Le,Ue){ut.isScene!==!0&&(ut=Z),fe.resetTextureUnits();let Ti=ut.fog,oc=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial?ut.environment:null,Ka=V===null?N.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:je.workingColorSpace,Gs=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial&&!Le.envMap||Le.isMeshPhongMaterial&&!Le.envMap,Oi=he.get(Le.envMap||oc,Gs),Dr=Le.vertexColors===!0&&!!It.attributes.color&&It.attributes.color.itemSize===4,tn=!!It.attributes.tangent&&(!!Le.normalMap||Le.anisotropy>0),lc=!!It.morphAttributes.position,Nr=!!It.morphAttributes.normal,Fm=!!It.morphAttributes.color,bd=Ii;Le.toneMapped&&(V!==null&&V.isXRRenderTarget!==!0||(bd=N.toneMapping));let Td=It.morphAttributes.position||It.morphAttributes.normal||It.morphAttributes.color,Bm=Td!==void 0?Td.length:0,De=ue.get(Le),Qn=M.state.lights;if(z===!0&&(b===!0||Xe!==q)){let St=Xe===q&&Le.id===k;Ce.setState(Le,Xe,St)}let Ei=!1;Le.version===De.__version?De.needsLights&&De.lightsStateVersion!==Qn.state.version||De.outputColorSpace!==Ka||Ue.isBatchedMesh&&De.batching===!1?Ei=!0:Ue.isBatchedMesh||De.batching!==!0?Ue.isBatchedMesh&&De.batchingColor===!0&&Ue.colorTexture===null||Ue.isBatchedMesh&&De.batchingColor===!1&&Ue.colorTexture!==null||Ue.isInstancedMesh&&De.instancing===!1?Ei=!0:Ue.isInstancedMesh||De.instancing!==!0?Ue.isSkinnedMesh&&De.skinning===!1?Ei=!0:Ue.isSkinnedMesh||De.skinning!==!0?Ue.isInstancedMesh&&De.instancingColor===!0&&Ue.instanceColor===null||Ue.isInstancedMesh&&De.instancingColor===!1&&Ue.instanceColor!==null||Ue.isInstancedMesh&&De.instancingMorph===!0&&Ue.morphTexture===null||Ue.isInstancedMesh&&De.instancingMorph===!1&&Ue.morphTexture!==null||De.envMap!==Oi||Le.fog===!0&&De.fog!==Ti?Ei=!0:De.numClippingPlanes===void 0||De.numClippingPlanes===Ce.numPlanes&&De.numIntersection===Ce.numIntersection?(De.vertexAlphas!==Dr||De.vertexTangents!==tn||De.morphTargets!==lc||De.morphNormals!==Nr||De.morphColors!==Fm||De.toneMapping!==bd||De.morphTargetsCount!==Bm||!!De.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ei=!0):Ei=!0:Ei=!0:Ei=!0:Ei=!0:(Ei=!0,De.__version=Le.version);let wn=De.currentProgram;Ei===!0&&(wn=$n(Le,ut,Ue),G&&Le.isNodeMaterial&&G.onUpdateProgram(Le,wn,De));let Ed=!1,Ur=!1,cc=!1,dt=wn.getUniforms(),gi=De.uniforms;if(ee.useProgram(wn.program)&&(Ed=!0,Ur=!0,cc=!0),Le.id!==k&&(k=Le.id,Ur=!0),De.needsLights){let St=function(Bi,uc){if(Bi.length===0)return null;if(Bi.length===1)return Bi[0].texture!==null?Bi[0]:null;S.setFromMatrixPosition(uc.matrixWorld);for(let Or=0,zm=Bi.length;Or<zm;Or++){let dc=Bi[Or];if(dc.texture!==null&&dc.boundingBox.containsPoint(S))return dc}return null}(M.state.lightProbeGridArray,Ue);De.lightProbeGrid!==St&&(De.lightProbeGrid=St,Ur=!0)}if(Ed||q!==Xe){ee.buffers.depth.getReversed()&&Xe.reversedDepth!==!0&&(Xe._reversedDepth=!0,Xe.updateProjectionMatrix()),dt.setValue(X,"projectionMatrix",Xe.projectionMatrix),dt.setValue(X,"viewMatrix",Xe.matrixWorldInverse);let St=dt.map.cameraPosition;St!==void 0&&St.setValue(X,B.setFromMatrixPosition(Xe.matrixWorld)),ge.logarithmicDepthBuffer&&dt.setValue(X,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Le.isMeshPhongMaterial||Le.isMeshToonMaterial||Le.isMeshLambertMaterial||Le.isMeshBasicMaterial||Le.isMeshStandardMaterial||Le.isShaderMaterial)&&dt.setValue(X,"isOrthographic",Xe.isOrthographicCamera===!0),q!==Xe&&(q=Xe,Ur=!0,cc=!0)}if(De.needsLights&&(Qn.state.directionalShadowMap.length>0&&dt.setValue(X,"directionalShadowMap",Qn.state.directionalShadowMap,fe),Qn.state.spotShadowMap.length>0&&dt.setValue(X,"spotShadowMap",Qn.state.spotShadowMap,fe),Qn.state.pointShadowMap.length>0&&dt.setValue(X,"pointShadowMap",Qn.state.pointShadowMap,fe)),Ue.isSkinnedMesh){dt.setOptional(X,Ue,"bindMatrix"),dt.setOptional(X,Ue,"bindMatrixInverse");let St=Ue.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),dt.setValue(X,"boneTexture",St.boneTexture,fe))}Ue.isBatchedMesh&&(dt.setOptional(X,Ue,"batchingTexture"),dt.setValue(X,"batchingTexture",Ue._matricesTexture,fe),dt.setOptional(X,Ue,"batchingIdTexture"),dt.setValue(X,"batchingIdTexture",Ue._indirectTexture,fe),dt.setOptional(X,Ue,"batchingColorTexture"),Ue._colorsTexture!==null&&dt.setValue(X,"batchingColorTexture",Ue._colorsTexture,fe));let hc=It.morphAttributes;if(hc.position===void 0&&hc.normal===void 0&&hc.color===void 0||ct.update(Ue,It,wn),(Ur||De.receiveShadow!==Ue.receiveShadow)&&(De.receiveShadow=Ue.receiveShadow,dt.setValue(X,"receiveShadow",Ue.receiveShadow)),(Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial)&&Le.envMap===null&&ut.environment!==null&&(gi.envMapIntensity.value=ut.environmentIntensity),gi.dfgLUT!==void 0&&(gi.dfgLUT.value=(qi===null&&(qi=new No(i_,16,16,dr,ji),qi.name="DFG_LUT",qi.minFilter=Bt,qi.magFilter=Bt,qi.wrapS=Un,qi.wrapT=Un,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi)),Ur){if(dt.setValue(X,"toneMappingExposure",N.toneMappingExposure),De.needsLights&&(wi=cc,(Fi=gi).ambientLightColor.needsUpdate=wi,Fi.lightProbe.needsUpdate=wi,Fi.directionalLights.needsUpdate=wi,Fi.directionalLightShadows.needsUpdate=wi,Fi.pointLights.needsUpdate=wi,Fi.pointLightShadows.needsUpdate=wi,Fi.spotLights.needsUpdate=wi,Fi.spotLightShadows.needsUpdate=wi,Fi.rectAreaLights.needsUpdate=wi,Fi.hemisphereLights.needsUpdate=wi),Ti&&Le.fog===!0&&Fe.refreshFogUniforms(gi,Ti),Fe.refreshMaterialUniforms(gi,Le,oe,ce,M.state.transmissionRenderTarget[Xe.id]),De.needsLights&&De.lightProbeGrid){let St=De.lightProbeGrid;gi.probesSH.value=St.texture,gi.probesMin.value.copy(St.boundingBox.min),gi.probesMax.value.copy(St.boundingBox.max),gi.probesResolution.value.copy(St.resolution)}bs.upload(X,ks(De),gi,fe)}var Fi,wi;if(Le.isShaderMaterial&&Le.uniformsNeedUpdate===!0&&(bs.upload(X,ks(De),gi,fe),Le.uniformsNeedUpdate=!1),Le.isSpriteMaterial&&dt.setValue(X,"center",Ue.center),dt.setValue(X,"modelViewMatrix",Ue.modelViewMatrix),dt.setValue(X,"normalMatrix",Ue.normalMatrix),dt.setValue(X,"modelMatrix",Ue.matrixWorld),Le.uniformsGroups!==void 0){let St=Le.uniformsGroups;for(let Bi=0,uc=St.length;Bi<uc;Bi++){let Or=St[Bi];Tn.update(Or,wn),Tn.bind(Or,wn)}}return wn}(E,J,w,R,O);ee.setMaterial(R,$);let Q=w.index,me=1;if(R.wireframe===!0){if(Q=ke.getWireframeAttribute(w),Q===void 0)return;me=2}let Ee=w.drawRange,we=w.attributes.position,ye=Ee.start*me,Be=(Ee.start+Ee.count)*me;H!==null&&(ye=Math.max(ye,H.start*me),Be=Math.min(Be,(H.start+H.count)*me)),Q!==null?(ye=Math.max(ye,0),Be=Math.min(Be,Q.count)):we!=null&&(ye=Math.max(ye,0),Be=Math.min(Be,we.count));let Qe=Be-ye;if(Qe<0||Qe===1/0)return;let rt;Pt.setup(O,R,ne,w,Q);let ht=fi;if(Q!==null&&(rt=be.get(Q),ht=Ut,ht.setIndex(rt)),O.isMesh)R.wireframe===!0?(ee.setLineWidth(R.wireframeLinewidth*te()),ht.setMode(X.LINES)):ht.setMode(X.TRIANGLES);else if(O.isLine){let Xe=R.linewidth;Xe===void 0&&(Xe=1),ee.setLineWidth(Xe*te()),O.isLineSegments?ht.setMode(X.LINES):O.isLineLoop?ht.setMode(X.LINE_LOOP):ht.setMode(X.LINE_STRIP)}else O.isPoints?ht.setMode(X.POINTS):O.isSprite&&ht.setMode(X.TRIANGLES);if(O.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Xe=O._multiDrawStarts,ut=O._multiDrawCounts,It=O._multiDrawCount,Le=Q?be.get(Q).bytesPerElement:1,Ue=ue.get(R).currentProgram.getUniforms();for(let Ti=0;Ti<It;Ti++)Ue.setValue(X,"_gl_DrawID",Ti),ht.render(Xe[Ti]/Le,ut[Ti])}else if(O.isInstancedMesh)ht.renderInstances(ye,Qe,O.count);else if(w.isInstancedBufferGeometry){let Xe=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,ut=Math.min(w.instanceCount,Xe);ht.renderInstances(ye,Qe,ut)}else ht.render(ye,Qe)},this.compile=function(E,J,w=null){w===null&&(w=E),M=Te.get(w),M.init(J),U.push(M),w.traverseVisible(function(O){O.isLight&&O.layers.test(J.layers)&&(M.pushLight(O),O.castShadow&&M.pushShadow(O))}),E!==w&&E.traverseVisible(function(O){O.isLight&&O.layers.test(J.layers)&&(M.pushLight(O),O.castShadow&&M.pushShadow(O))}),M.setupLights();let R=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let H=O.material;if(H)if(Array.isArray(H))for(let $=0;$<H.length;$++){let ne=H[$];Fs(ne,w,O),R.add(ne)}else Fs(H,w,O),R.add(H)}),M=U.pop(),R},this.compileAsync=function(E,J,w=null){let R=this.compile(E,J,w);return new Promise(O=>{function H(){R.forEach(function($){ue.get($).currentProgram.isReady()&&R.delete($)}),R.size!==0?setTimeout(H,10):O(E)}ae.get("KHR_parallel_shader_compile")!==null?H():setTimeout(H,10)})};let Rr=null;function Bs(){Ui.stop()}function Pr(){Ui.start()}let Ui=new Mf;function Kn(E,J,w,R){if(E.visible===!1)return;if(E.layers.test(J.layers)){if(E.isGroup)w=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(J);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||L.intersectsSprite(E)){R&&I.setFromMatrixPosition(E.matrixWorld).applyMatrix4(F);let H=$e.update(E),$=E.material;$.visible&&x.push(E,H,$,w,I.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||L.intersectsObject(E))){let H=$e.update(E),$=E.material;if(R&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),I.copy(E.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),I.copy(H.boundingSphere.center)),I.applyMatrix4(E.matrixWorld).applyMatrix4(F)),Array.isArray($)){let ne=H.groups;for(let Q=0,me=ne.length;Q<me;Q++){let Ee=ne[Q],we=$[Ee.materialIndex];we&&we.visible&&x.push(E,H,we,w,I.z,Ee)}}else $.visible&&x.push(E,H,$,w,I.z,null)}}let O=E.children;for(let H=0,$=O.length;H<$;H++)Kn(O[H],J,w,R)}function Ir(E,J,w,R){let{opaque:O,transmissive:H,transparent:$}=E;M.setupLightsView(w),z===!0&&Ce.setGlobalState(N.clippingPlanes,w),R&&ee.viewport(ie.copy(R)),O.length>0&&mi(O,J,w),H.length>0&&mi(H,J,w),$.length>0&&mi($,J,w),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function zs(E,J,w,R){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[R.id]===void 0){let we=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[R.id]=new ri(1,1,{generateMipmaps:!0,type:we?ji:ci,minFilter:hr,samples:Math.max(4,ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}let O=M.state.transmissionRenderTarget[R.id],H=R.viewport||ie;O.setSize(H.z*N.transmissionResolutionScale,H.w*N.transmissionResolutionScale);let $=N.getRenderTarget(),ne=N.getActiveCubeFace(),Q=N.getActiveMipmapLevel();N.setRenderTarget(O),N.getClearColor(Se),_e=N.getClearAlpha(),_e<1&&N.setClearColor(16777215,.5),N.clear(),K&&Je.render(w);let me=N.toneMapping;N.toneMapping=Ii;let Ee=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),M.setupLightsView(R),z===!0&&Ce.setGlobalState(N.clippingPlanes,R),mi(E,w,R),fe.updateMultisampleRenderTarget(O),fe.updateRenderTargetMipmap(O),ae.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ye=0,Be=J.length;ye<Be;ye++){let Qe=J[ye],{object:rt,geometry:ht,material:Xe,group:ut}=Qe;if(Xe.side===li&&rt.layers.test(R.layers)){let It=Xe.side;Xe.side=zt,Xe.needsUpdate=!0,en(rt,w,R,ht,Xe,ut),Xe.side=It,Xe.needsUpdate=!0,we=!0}}we===!0&&(fe.updateMultisampleRenderTarget(O),fe.updateRenderTargetMipmap(O))}N.setRenderTarget($,ne,Q),N.setClearColor(Se,_e),Ee!==void 0&&(R.viewport=Ee),N.toneMapping=me}function mi(E,J,w){let R=J.isScene===!0?J.overrideMaterial:null;for(let O=0,H=E.length;O<H;O++){let $=E[O],{object:ne,geometry:Q,group:me}=$,Ee=$.material;Ee.allowOverride===!0&&R!==null&&(Ee=R),ne.layers.test(w.layers)&&en(ne,J,w,Q,Ee,me)}}function en(E,J,w,R,O,H){E.onBeforeRender(N,J,w,R,O,H),E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(N,J,w,R,E,H),O.transparent===!0&&O.side===li&&O.forceSinglePass===!1?(O.side=zt,O.needsUpdate=!0,N.renderBufferDirect(w,J,R,O,E,H),O.side=_s,O.needsUpdate=!0,N.renderBufferDirect(w,J,R,O,E,H),O.side=li):N.renderBufferDirect(w,J,R,O,E,H),E.onAfterRender(N,J,w,R,O,H)}function $n(E,J,w){J.isScene!==!0&&(J=Z);let R=ue.get(E),O=M.state.lights,H=M.state.shadowsArray,$=O.state.version,ne=We.getParameters(E,O.state,H,J,w,M.state.lightProbeGridArray),Q=We.getProgramCacheKey(ne),me=R.programs;R.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?J.environment:null,R.fog=J.fog;let Ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;R.envMap=he.get(E.envMap||R.environment,Ee),R.envMapRotation=R.environment!==null&&E.envMap===null?J.environmentRotation:E.envMapRotation,me===void 0&&(E.addEventListener("dispose",Os),me=new Map,R.programs=me);let we=me.get(Q);if(we!==void 0){if(R.currentProgram===we&&R.lightsStateVersion===$)return Lr(E,ne),we}else ne.uniforms=We.getUniforms(E),G!==null&&E.isNodeMaterial&&G.build(E,w,ne),E.onBeforeCompile(ne,N),we=We.acquireProgram(ne,Q),me.set(Q,we),R.uniforms=ne.uniforms;let ye=R.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(ye.clippingPlanes=Ce.uniform),Lr(E,ne),R.needsLights=function(Be){return Be.isMeshLambertMaterial||Be.isMeshToonMaterial||Be.isMeshPhongMaterial||Be.isMeshStandardMaterial||Be.isShadowMaterial||Be.isShaderMaterial&&Be.lights===!0}(E),R.lightsStateVersion=$,R.needsLights&&(ye.ambientLightColor.value=O.state.ambient,ye.lightProbe.value=O.state.probe,ye.directionalLights.value=O.state.directional,ye.directionalLightShadows.value=O.state.directionalShadow,ye.spotLights.value=O.state.spot,ye.spotLightShadows.value=O.state.spotShadow,ye.rectAreaLights.value=O.state.rectArea,ye.ltc_1.value=O.state.rectAreaLTC1,ye.ltc_2.value=O.state.rectAreaLTC2,ye.pointLights.value=O.state.point,ye.pointLightShadows.value=O.state.pointShadow,ye.hemisphereLights.value=O.state.hemi,ye.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ye.spotLightMatrix.value=O.state.spotLightMatrix,ye.spotLightMap.value=O.state.spotLightMap,ye.pointShadowMatrix.value=O.state.pointShadowMatrix),R.lightProbeGrid=M.state.lightProbeGridArray.length>0,R.currentProgram=we,R.uniformsList=null,we}function ks(E){if(E.uniformsList===null){let J=E.currentProgram.getUniforms();E.uniformsList=bs.seqWithValue(J.seq,E.uniforms)}return E.uniformsList}function Lr(E,J){let w=ue.get(E);w.outputColorSpace=J.outputColorSpace,w.batching=J.batching,w.batchingColor=J.batchingColor,w.instancing=J.instancing,w.instancingColor=J.instancingColor,w.instancingMorph=J.instancingMorph,w.skinning=J.skinning,w.morphTargets=J.morphTargets,w.morphNormals=J.morphNormals,w.morphColors=J.morphColors,w.morphTargetsCount=J.morphTargetsCount,w.numClippingPlanes=J.numClippingPlanes,w.numIntersection=J.numClipIntersection,w.vertexAlphas=J.vertexAlphas,w.vertexTangents=J.vertexTangents,w.toneMapping=J.toneMapping}Ui.setAnimationLoop(function(E){Rr&&Rr(E)}),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(E){Rr=E,nt.setAnimationLoop(E),E===null?Ui.stop():Ui.start()},nt.addEventListener("sessionstart",Bs),nt.addEventListener("sessionend",Pr),this.render=function(E,J){if(J!==void 0&&J.isCamera!==!0)return void Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(j===!0)return;G!==null&&G.renderStart(E,J);let w=nt.enabled===!0&&nt.isPresenting===!0,R=A!==null&&(V===null||w)&&A.begin(N,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),nt.enabled!==!0||nt.isPresenting!==!0||A!==null&&A.isCompositing()!==!1||(nt.cameraAutoUpdate===!0&&nt.updateCamera(J),J=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,J,V),M=Te.get(E,U.length),M.init(J),M.state.textureUnits=fe.getTextureUnits(),U.push(M),F.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),L.setFromProjectionMatrix(F,hn,J.reversedDepth),b=this.localClippingEnabled,z=Ce.init(this.clippingPlanes,b),x=Mt.get(E,C.length),x.init(),C.push(x),nt.enabled===!0&&nt.isPresenting===!0){let H=N.xr.getDepthSensingMesh();H!==null&&Kn(H,J,-1/0,N.sortObjects)}Kn(E,J,0,N.sortObjects),x.finish(),N.sortObjects===!0&&x.sort(xe,Ne),K=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,K&&Je.addToRenderList(x,E),this.info.render.frame++,z===!0&&Ce.beginShadows();let O=M.state.shadowsArray;if(Re.render(O,E,J),z===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R&&A.hasRenderPass())===!1){let H=x.opaque,$=x.transmissive;if(M.setupLights(),J.isArrayCamera){let ne=J.cameras;if($.length>0)for(let Q=0,me=ne.length;Q<me;Q++)zs(H,$,E,ne[Q]);K&&Je.render(E);for(let Q=0,me=ne.length;Q<me;Q++){let Ee=ne[Q];Ir(x,E,Ee,Ee.viewport)}}else $.length>0&&zs(H,$,E,J),K&&Je.render(E),Ir(x,E,J)}V!==null&&W===0&&(fe.updateMultisampleRenderTarget(V),fe.updateRenderTargetMipmap(V)),R&&A.end(N),E.isScene===!0&&E.onAfterRender(N,E,J),Pt.resetDefaultState(),k=-1,q=null,U.pop(),U.length>0?(M=U[U.length-1],fe.setTextureUnits(M.state.textureUnits),z===!0&&Ce.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,C.pop(),x=C.length>0?C[C.length-1]:null,G!==null&&G.renderEnd()},this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,J,w){let R=ue.get(E);R.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),ue.get(E.texture).__webglTexture=J,ue.get(E.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:w,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,J){let w=ue.get(E);w.__webglFramebuffer=J,w.__useDefaultFramebuffer=J===void 0};let Ja=X.createFramebuffer();this.setRenderTarget=function(E,J=0,w=0){V=E,Y=J,W=w;let R=null,O=!1,H=!1;if(E){let $=ue.get(E);if($.__useDefaultFramebuffer!==void 0)return ee.bindFramebuffer(X.FRAMEBUFFER,$.__webglFramebuffer),ie.copy(E.viewport),de.copy(E.scissor),Me=E.scissorTest,ee.viewport(ie),ee.scissor(de),ee.setScissorTest(Me),void(k=-1);if($.__webglFramebuffer===void 0)fe.setupRenderTarget(E);else if($.__hasExternalTextures)fe.rebindTextures(E,ue.get(E.texture).__webglTexture,ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let me=E.depthTexture;if($.__boundDepthTexture!==me){if(me!==null&&ue.has(me)&&(E.width!==me.image.width||E.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(E)}}let ne=E.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(H=!0);let Q=ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(R=Array.isArray(Q[J])?Q[J][w]:Q[J],O=!0):R=E.samples>0&&fe.useMultisampledRTT(E)===!1?ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Q)?Q[w]:Q,ie.copy(E.viewport),de.copy(E.scissor),Me=E.scissorTest}else ie.copy(re).multiplyScalar(oe).floor(),de.copy(D).multiplyScalar(oe).floor(),Me=T;if(w!==0&&(R=Ja),ee.bindFramebuffer(X.FRAMEBUFFER,R)&&ee.drawBuffers(E,R),ee.viewport(ie),ee.scissor(de),ee.setScissorTest(Me),O){let $=ue.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,$.__webglTexture,w)}else if(H){let $=J;for(let ne=0;ne<E.textures.length;ne++){let Q=ue.get(E.textures[ne]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ne,Q.__webglTexture,w,$)}}else if(E!==null&&w!==0){let $=ue.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$.__webglTexture,w)}k=-1},this.readRenderTargetPixels=function(E,J,w,R,O,H,$,ne=0){if(!E||!E.isWebGLRenderTarget)return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$!==void 0&&(Q=Q[$]),Q){ee.bindFramebuffer(X.FRAMEBUFFER,Q);try{let me=E.textures[ne],Ee=me.format,we=me.type;if(E.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ne),!ge.textureFormatReadable(Ee))return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(we))return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");J>=0&&J<=E.width-R&&w>=0&&w<=E.height-O&&X.readPixels(J,w,R,O,qe.convert(Ee),qe.convert(we),H)}finally{let me=V!==null?ue.get(V).__webglFramebuffer:null;ee.bindFramebuffer(X.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(E,J,w,R,O,H,$,ne=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$!==void 0&&(Q=Q[$]),Q){if(J>=0&&J<=E.width-R&&w>=0&&w<=E.height-O){ee.bindFramebuffer(X.FRAMEBUFFER,Q);let me=E.textures[ne],Ee=me.format,we=me.type;if(E.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ne),!ge.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ye),X.bufferData(X.PIXEL_PACK_BUFFER,H.byteLength,X.STREAM_READ),X.readPixels(J,w,R,O,qe.convert(Ee),qe.convert(we),0);let Be=V!==null?ue.get(V).__webglFramebuffer:null;ee.bindFramebuffer(X.FRAMEBUFFER,Be);let Qe=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Wp(X,Qe,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ye),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,H),X.deleteBuffer(ye),X.deleteSync(Qe),H}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,J=null,w=0){let R=Math.pow(2,-w),O=Math.floor(E.image.width*R),H=Math.floor(E.image.height*R),$=J!==null?J.x:0,ne=J!==null?J.y:0;fe.setTexture2D(E,0),X.copyTexSubImage2D(X.TEXTURE_2D,w,0,0,$,ne,O,H),ee.unbindTexture()};let sc=X.createFramebuffer(),ac=X.createFramebuffer();this.copyTextureToTexture=function(E,J,w=null,R=null,O=0,H=0){let $,ne,Q,me,Ee,we,ye,Be,Qe,rt=E.isCompressedTexture?E.mipmaps[H]:E.image;if(w!==null)$=w.max.x-w.min.x,ne=w.max.y-w.min.y,Q=w.isBox3?w.max.z-w.min.z:1,me=w.min.x,Ee=w.min.y,we=w.isBox3?w.min.z:0;else{let Oi=Math.pow(2,-O);$=Math.floor(rt.width*Oi),ne=Math.floor(rt.height*Oi),Q=E.isDataArrayTexture?rt.depth:E.isData3DTexture?Math.floor(rt.depth*Oi):1,me=0,Ee=0,we=0}R!==null?(ye=R.x,Be=R.y,Qe=R.z):(ye=0,Be=0,Qe=0);let ht=qe.convert(J.format),Xe=qe.convert(J.type),ut;J.isData3DTexture?(fe.setTexture3D(J,0),ut=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(fe.setTexture2DArray(J,0),ut=X.TEXTURE_2D_ARRAY):(fe.setTexture2D(J,0),ut=X.TEXTURE_2D),ee.activeTexture(X.TEXTURE0),ee.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),ee.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),ee.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);let It=ee.getParameter(X.UNPACK_ROW_LENGTH),Le=ee.getParameter(X.UNPACK_IMAGE_HEIGHT),Ue=ee.getParameter(X.UNPACK_SKIP_PIXELS),Ti=ee.getParameter(X.UNPACK_SKIP_ROWS),oc=ee.getParameter(X.UNPACK_SKIP_IMAGES);ee.pixelStorei(X.UNPACK_ROW_LENGTH,rt.width),ee.pixelStorei(X.UNPACK_IMAGE_HEIGHT,rt.height),ee.pixelStorei(X.UNPACK_SKIP_PIXELS,me),ee.pixelStorei(X.UNPACK_SKIP_ROWS,Ee),ee.pixelStorei(X.UNPACK_SKIP_IMAGES,we);let Ka=E.isDataArrayTexture||E.isData3DTexture,Gs=J.isDataArrayTexture||J.isData3DTexture;if(E.isDepthTexture){let Oi=ue.get(E),Dr=ue.get(J),tn=ue.get(Oi.__renderTarget),lc=ue.get(Dr.__renderTarget);ee.bindFramebuffer(X.READ_FRAMEBUFFER,tn.__webglFramebuffer),ee.bindFramebuffer(X.DRAW_FRAMEBUFFER,lc.__webglFramebuffer);for(let Nr=0;Nr<Q;Nr++)Ka&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ue.get(E).__webglTexture,O,we+Nr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ue.get(J).__webglTexture,H,Qe+Nr)),X.blitFramebuffer(me,Ee,$,ne,ye,Be,$,ne,X.DEPTH_BUFFER_BIT,X.NEAREST);ee.bindFramebuffer(X.READ_FRAMEBUFFER,null),ee.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||ue.has(E)){let Oi=ue.get(E),Dr=ue.get(J);ee.bindFramebuffer(X.READ_FRAMEBUFFER,sc),ee.bindFramebuffer(X.DRAW_FRAMEBUFFER,ac);for(let tn=0;tn<Q;tn++)Ka?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Oi.__webglTexture,O,we+tn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oi.__webglTexture,O),Gs?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Dr.__webglTexture,H,Qe+tn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Dr.__webglTexture,H),O!==0?X.blitFramebuffer(me,Ee,$,ne,ye,Be,$,ne,X.COLOR_BUFFER_BIT,X.NEAREST):Gs?X.copyTexSubImage3D(ut,H,ye,Be,Qe+tn,me,Ee,$,ne):X.copyTexSubImage2D(ut,H,ye,Be,me,Ee,$,ne);ee.bindFramebuffer(X.READ_FRAMEBUFFER,null),ee.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Gs?E.isDataTexture||E.isData3DTexture?X.texSubImage3D(ut,H,ye,Be,Qe,$,ne,Q,ht,Xe,rt.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(ut,H,ye,Be,Qe,$,ne,Q,ht,rt.data):X.texSubImage3D(ut,H,ye,Be,Qe,$,ne,Q,ht,Xe,rt):E.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,H,ye,Be,$,ne,ht,Xe,rt.data):E.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,H,ye,Be,rt.width,rt.height,ht,rt.data):X.texSubImage2D(X.TEXTURE_2D,H,ye,Be,$,ne,ht,Xe,rt);ee.pixelStorei(X.UNPACK_ROW_LENGTH,It),ee.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Le),ee.pixelStorei(X.UNPACK_SKIP_PIXELS,Ue),ee.pixelStorei(X.UNPACK_SKIP_ROWS,Ti),ee.pixelStorei(X.UNPACK_SKIP_IMAGES,oc),H===0&&J.generateMipmaps&&X.generateMipmap(ut),ee.unbindTexture()},this.initRenderTarget=function(E){ue.get(E).__webglFramebuffer===void 0&&fe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?fe.setTextureCube(E,0):E.isData3DTexture?fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?fe.setTexture2DArray(E,0):fe.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){Y=0,W=0,V=null,ee.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};function yn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Of(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var $t={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fa={duration:.5,overwrite:!1,delay:0},qu,Dt,ot,Si=1e8,it=1/Si,Fu=Math.PI*2,r_=Fu/4,s_=0,Ff=Math.sqrt,a_=Math.cos,o_=Math.sin,At=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},Mn=function(e){return typeof e=="number"},Kl=function(e){return typeof e>"u"},Ki=function(e){return typeof e=="object"},Kt=function(e){return e!==!1},Yu=function(){return typeof window<"u"},Vl=function(e){return vt(e)||At(e)},Bf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,l_=/random\([^)]+\)/g,c_=/,\s*/g,Cf=/(?:-?\.?\d|\.)+/gi,Zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ju=/[+-]=-?[.\d]+/,h_=/[^,'"\[\]\s]+/gi,u_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Zi,Bu,Ku,ui={},jl={},zf,kf=function(e){return(jl=ws(e,ui))&&Ht},$l=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ba=function(e,t){return!t&&console.warn(e)},Gf=function(e,t){return e&&(ui[e]=t)&&jl&&(jl[e]=t)||ui},za=function(){return 0},d_={suppressEvents:!0,isStart:!0,kill:!1},Hl={suppressEvents:!0,kill:!1},p_={suppressEvents:!0},$u={},Hn=[],zu={},Vf,Zt={},Iu={},Rf=30,Wl=[],Qu="",ed=function(e){var t=e[0],i,n;if(Ki(t)||vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Wl.length;n--&&!Wl[n].targetTest(t););i=Wl[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new rd(e[n],i)))||e.splice(n,1);return e},Wn=function(e){return e._gsap||ed(bi(e))[0]._gsap},td=function(e,t,i){return(i=e[t])&&vt(i)?e[t]():Kl(i)&&e.getAttribute&&e.getAttribute(t)||i},qt=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},xr=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},f_=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},ql=function(){var e=Hn.length,t=Hn.slice(0),i,n;for(zu={},Hn.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},id=function(e){return!!(e._initted||e._startAt||e.add)},Hf=function(e,t,i,n){Hn.length&&!Dt&&ql(),e.render(t,i,n||!!(Dt&&t<0&&id(e))),Hn.length&&!Dt&&ql()},Wf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(h_).length<2?t:At(e)?e.trim():e},Xf=function(e){return e},di=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},m_=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},ws=function(e,t){for(var i in t)e[i]=t[i];return e},Pf=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ki(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Yl=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Na=function(e){var t=e.parent||mt,i=e.keyframes?m_(Vt(e.keyframes)):di;if(Kt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},g_=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},jf=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Ql=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Xn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},gr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},__=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ku=function(e,t,i,n){return e._startAt&&(Dt?e._startAt.revert(Hl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},v_=function r(e){return!e||e._ts&&r(e.parent)},If=function(e){return e._repeat?As(e._tTime,e=e.duration()+e._rDelay)*e:0},As=function(e,t){var i=Math.floor(e=ft(e/t));return e&&i===e?i-1:i},Zl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ec=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},tc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ft(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ec(e),i._dirty||gr(i,e)),e},qf=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Zl(e.rawTime(),t),(!t._dur||Va(0,t.totalDuration(),i)-t._tTime>it)&&t.render(i,!0)),gr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-it}},Ji=function(e,t,i,n){return t.parent&&Xn(t),t._start=ft((Mn(i)?i:i||e!==mt?Mi(e,i,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jf(e,t,"_first","_last",e._sort?"_start":0),Gu(t)||(e._recent=t),n||qf(e,t),e._ts<0&&tc(e,e._tTime),e},Yf=function(e,t){return(ui.ScrollTrigger||$l("scrollTrigger",t))&&ui.ScrollTrigger.create(t,e)},Zf=function(e,t,i,n,s){if(od(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vf!==Jt.frame)return Hn.push(e),e._lazy=[s,n],1},y_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Gu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},x_=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&y_(e)&&!(!e._initted&&Gu(e))||(e._ts<0||e._dp._ts<0)&&!Gu(e))?0:1,o=e._rDelay,c=0,l,h,d;if(o&&e._repeat&&(c=Va(0,e._tDur,t),h=As(c,o),e._yoyo&&h&1&&(a=1-a),h!==As(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Dt||n||e._zTime===it||!t&&e._zTime){if(!e._initted&&Zf(e,t,n,i,c))return;for(d=e._zTime,e._zTime=t||(i?it:0),i||(i=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&ku(e,t,i,!0),e._onUpdate&&!i&&hi(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Xn(e,1),!i&&!Dt&&(hi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},M_=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Cs=function(e,t,i,n){var s=e._repeat,a=ft(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ft(a*(s+1)+e._rDelay*s):a,o>0&&!n&&tc(e,e._tTime=e._tDur*o),e.parent&&ec(e),i||gr(e.parent,e),e},Lf=function(e){return e instanceof Gt?gr(e):Cs(e,e._dur)},S_={_start:0,endTime:za,totalDuration:za},Mi=function r(e,t,i){var n=e.labels,s=e._recent||S_,a=e.duration()>=Si?s.endTime(!1):e._dur,o,c,l;return At(t)&&(isNaN(t)||t in n)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&i&&(c=c/100*(Vt(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+c:a+c)):t==null?a:+t},Ua=function(e,t,i){var n=Mn(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,c;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Kt(c.vars.inherit)&&c.parent;a.immediateRender=Kt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new xt(t[0],a,t[s+1])},jn=function(e,t){return e||e===0?t(e):t},Va=function(e,t,i){return i<e?e:i>t?t:i},Nt=function(e,t){return!At(e)||!(t=u_.exec(e))?"":t[1]},b_=function(e,t,i){return jn(i,function(n){return Va(e,t,n)})},Vu=[].slice,Jf=function(e,t){return e&&Ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ki(e[0]))&&!e.nodeType&&e!==Zi},T_=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return At(n)&&!t||Jf(n,1)?(s=i).push.apply(s,bi(n)):i.push(n)})||i},bi=function(e,t,i){return ot&&!t&&ot.selector?ot.selector(e):At(e)&&!i&&(Bu||!Rs())?Vu.call((t||Ku).querySelectorAll(e),0):Vt(e)?T_(e,i):Jf(e)?Vu.call(e,0):e?[e]:[]},Hu=function(e){return e=bi(e)[0]||Ba("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return bi(t,i.querySelectorAll?i:i===e?Ba("Invalid scope")||Ku.createElement("div"):e)}},Kf=function(e){return e.sort(function(){return .5-Math.random()})},$f=function(e){if(vt(e))return e;var t=Ki(e)?e:{each:e},i=_r(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,c=isNaN(n)||o,l=t.axis,h=n,d=n;return At(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!o&&c&&(h=n[0],d=n[1]),function(f,p,m){var u=(m||t).length,v=a[u],g,_,y,S,x,M,C,U,A;if(!v){if(A=t.grid==="auto"?0:(t.grid||[1,Si])[1],!A){for(C=-Si;C<(C=m[A++].getBoundingClientRect().left)&&A<u;);A<u&&A--}for(v=a[u]=[],g=c?Math.min(A,u)*h-.5:n%A,_=A===Si?0:c?u*d/A-.5:n/A|0,C=0,U=Si,M=0;M<u;M++)y=M%A-g,S=_-(M/A|0),v[M]=x=l?Math.abs(l==="y"?S:y):Ff(y*y+S*S),x>C&&(C=x),x<U&&(U=x);n==="random"&&Kf(v),v.max=C-U,v.min=U,v.v=u=(parseFloat(t.amount)||parseFloat(t.each)*(A>u?u-1:l?l==="y"?u/A:A:Math.max(A,u/A))||0)*(n==="edges"?-1:1),v.b=u<0?s-u:s,v.u=Nt(t.amount||t.each)||0,i=i&&u<0?F_(i):i}return u=(v[f]-v.min)/v.max||0,ft(v.b+(i?i(u):u)*v.v)+v.u}},Wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=ft(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Mn(i)?0:Nt(i))}},Qf=function(e,t){var i=Vt(e),n,s;return!i&&Ki(e)&&(n=i=e.radius||Si,e.values?(e=bi(e.values),(s=!Mn(e[0]))&&(n*=n)):e=Wu(e.increment)),jn(t,i?vt(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Si,h=0,d=e.length,f,p;d--;)s?(f=e[d].x-o,p=e[d].y-c,f=f*f+p*p):f=Math.abs(e[d]-o),f<l&&(l=f,h=d);return h=!n||l<=n?e[h]:a,s||h===a||Mn(a)?h:h+Nt(a)}:Wu(e))},em=function(e,t,i,n){return jn(Vt(e)?!t:i===!0?!!(i=0):!n,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},E_=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},w_=function(e,t){return function(i){return e(parseFloat(i))+(t||Nt(i))}},A_=function(e,t,i){return im(e,t,0,1,i)},tm=function(e,t,i){return jn(i,function(n){return e[~~t(n)]})},C_=function r(e,t,i){var n=t-e;return Vt(e)?tm(e,r(0,e.length),t):jn(i,function(s){return(n+(s-e)%n)%n+e})},R_=function r(e,t,i){var n=t-e,s=n*2;return Vt(e)?tm(e,r(0,e.length-1),t):jn(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},Ps=function(e){return e.replace(l_,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(c_);return em(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},im=function(e,t,i,n,s){var a=t-e,o=n-i;return jn(s,function(c){return i+((c-e)/a*o||0)})},P_=function r(e,t,i,n){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=At(e),o={},c,l,h,d,f;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(h=[],d=e.length,f=d-2,l=1;l<d;l++)h.push(r(e[l-1],e[l]));d--,s=function(m){m*=d;var u=Math.min(f,~~m);return h[u](m-u)},i=t}else n||(e=ws(Vt(e)?[]:{},e));if(!h){for(c in t)sd.call(o,e,c,"get",t[c]);s=function(m){return hd(m,o)||(a?e.p:e)}}}return jn(i,s)},Df=function(e,t,i){var n=e.labels,s=Si,a,o,c;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},hi=function(e,t,i){var n=e.vars,s=n[t],a=ot,o=e._ctx,c,l,h;if(s)return c=n[t+"Params"],l=n.callbackScope||e,i&&Hn.length&&ql(),o&&(ot=o),h=c?s.apply(l,c):s.call(l),ot=a,h},La=function(e){return Xn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dt),e.progress()<1&&hi(e,"onInterrupt"),e},Es,nm=[],rm=function(e){if(e)if(e=!e.name&&e.default||e,Yu()||e.headless){var t=e.name,i=vt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:za,render:hd,add:sd,kill:q_,modifier:j_,rawVars:0},a={targetTest:0,get:0,getSetter:ic,aliases:{},register:0};if(Rs(),e!==n){if(Zt[t])return;di(n,di(Yl(e,s),a)),ws(n.prototype,ws(s,Yl(e,a))),Zt[n.prop=t]=n,e.targetTest&&(Wl.push(n),$u[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gf(t,n),e.register&&e.register(Ht,n,Yt)}else nm.push(e)},tt=255,Da={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},Lu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*tt+.5|0},sm=function(e,t,i){var n=e?Mn(e)?[e>>16,e>>8&tt,e&tt]:0:Da.black,s,a,o,c,l,h,d,f,p,m;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Da[e])n=Da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&tt,n&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(n=m=e.match(Cf),!t)c=+n[0]%360/360,l=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=Lu(c+1/3,s,a),n[1]=Lu(c,s,a),n[2]=Lu(c-1/3,s,a);else if(~e.indexOf("="))return n=e.match(Zu),i&&n.length<4&&(n[3]=1),n}else n=e.match(Cf)||Da.transparent;n=n.map(Number)}return t&&!m&&(s=n[0]/tt,a=n[1]/tt,o=n[2]/tt,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?c=l=0:(p=d-f,l=h>.5?p/(2-d-f):p/(d+f),c=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,c*=60),n[0]=~~(c+.5),n[1]=~~(l*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},am=function(e){var t=[],i=[],n=-1;return e.split(xn).forEach(function(s){var a=s.match(yr)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},Nf=function(e,t,i){var n="",s=(e+n).match(xn),a=t?"hsla(":"rgba(",o=0,c,l,h,d;if(!s)return e;if(s=s.map(function(f){return(f=sm(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=am(e),c=i.c,c.join(n)!==h.c.join(n)))for(l=e.replace(xn,"1").split(yr),d=l.length-1;o<d;o++)n+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!l)for(l=e.split(xn),d=l.length-1;o<d;o++)n+=l[o]+s[o];return n+l[d]},xn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Da)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),I_=/hsl[a]?\(/,nd=function(e){var t=e.join(" "),i;if(xn.lastIndex=0,xn.test(t))return i=I_.test(t),e[1]=Nf(e[1],i),e[0]=Nf(e[0],i,am(e[1])),!0},ka,Jt=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],c,l,h,d,f,p,m=function u(v){var g=r()-n,_=v===!0,y,S,x,M;if((g>e||g<0)&&(i+=g-t),n+=g,x=n-i,y=x-a,(y>0||_)&&(M=++d.frame,f=x-d.time*1e3,d.time=x=x/1e3,a+=y+(y>=s?4:s-y),S=1),_||(c=l(u)),S)for(p=0;p<o.length;p++)o[p](x,f,M,v)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(v){return f/(1e3/(v||60))},wake:function(){zf&&(!Bu&&Yu()&&(Zi=Bu=window,Ku=Zi.document||{},ui.gsap=Ht,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(Ht.version),kf(jl||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),nm.forEach(rm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=h||function(v){return setTimeout(v,a-d.time*1e3+1|0)},ka=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),ka=0,l=za},lagSmoothing:function(v,g){e=v||1/0,t=Math.min(g||33,e)},fps:function(v){s=1e3/(v||240),a=d.time*1e3+s},add:function(v,g,_){var y=g?function(S,x,M,C){v(S,x,M,C),d.remove(y)}:v;return d.remove(v),o[_?"unshift":"push"](y),Rs(),y},remove:function(v,g){~(g=o.indexOf(v))&&o.splice(g,1)&&p>=g&&p--},_listeners:o},d}(),Rs=function(){return!ka&&Jt.wake()},Ye={},L_=/^[\d.\-M][\d.\-,\s]/,D_=/["']/g,N_=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,c,l;s<a;s++)c=i[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[n]=isNaN(l)?l.replace(D_,"").trim():+l,n=c.substr(o+1).trim();return t},U_=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},O_=function(e){var t=(e+"").split("("),i=Ye[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[N_(t[1])]:U_(e).split(",").map(Wf)):Ye._CE&&L_.test(e)?Ye._CE("",e):i},F_=function(e){return function(t){return 1-e(1-t)}},_r=function(e,t){return e&&(vt(e)?e:Ye[e]||O_(e))||t},Mr=function(e,t,i,n){i===void 0&&(i=function(c){return 1-t(1-c)}),n===void 0&&(n=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return qt(e,function(o){Ye[o]=ui[o]=s,Ye[a=o.toLowerCase()]=i;for(var c in s)Ye[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ye[o+"."+c]=s[c]}),s},om=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Du=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Fu*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*o_((h-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:om(o);return s=Fu/s,c.config=function(l,h){return r(e,l,h)},c},Nu=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:om(i);return n.config=function(s){return r(e,s)},n};qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Mr(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;Mr("Elastic",Du("in"),Du("out"),Du());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Mr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Mr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Mr("Circ",function(r){return-(Ff(1-r*r)-1)});Mr("Sine",function(r){return r===1?1:-a_(r*r_)+1});Mr("Back",Nu("in"),Nu("out"),Nu());Ye.SteppedEase=Ye.steps=ui.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-it;return function(o){return((n*Va(0,a,o)|0)+s)*i}}};Fa.ease=Ye["quad.out"];qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qu+=r+","+r+"Params,"});var rd=function(e,t){this.id=s_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:td,this.set=t?t.getSetter:ic},Ga=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cs(this,+t.duration,1,1),this.data=t.data,ot&&(this._ctx=ot,ot.data.push(this)),ka||Jt.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Cs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Rs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tc(this,i),!s._dp||s.parent||qf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===it||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Hf(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+If(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+If(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?As(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Zl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-it?0:this._rts,this.totalTime(Va(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),ec(this),__(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ft(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Ji(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Kt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zl(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=p_);var n=Dt;return Dt=i,id(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Dt=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Lf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Mi(this,i),Kt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Kt(n)),this._dur||(this._zTime=-it),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-it)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,s=n._prom;return new Promise(function(a){var o=vt(i)?i:Xf,c=function(){var h=n.then;n.then=null,s&&s(),vt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?c():n._prom=c})},e.kill=function(){La(this)},r}();di(Ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var Gt=function(r){Of(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Kt(i.sortChildren),mt&&Ji(i.parent||mt,yn(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Yf(yn(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return Ua(0,arguments,this),this},t.from=function(n,s,a){return Ua(1,arguments,this),this},t.fromTo=function(n,s,a,o){return Ua(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,Na(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xt(n,s,Mi(this,a),1),this},t.call=function(n,s,a){return Ji(this,xt.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new xt(n,a,Mi(this,c)),this},t.staggerFrom=function(n,s,a,o,c,l,h){return a.runBackwards=1,Na(a).immediateRender=Kt(a.immediateRender),this.staggerTo(n,s,a,o,c,l,h)},t.staggerFromTo=function(n,s,a,o,c,l,h,d){return o.startAt=a,Na(o).immediateRender=Kt(o.immediateRender),this.staggerTo(n,s,o,c,l,h,d)},t.render=function(n,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=n<=0?0:ft(n),d=this._zTime<0!=n<0&&(this._initted||!l),f,p,m,u,v,g,_,y,S,x,M,C;if(this!==mt&&h>c&&n>=0&&(h=c),h!==this._tTime||a||d){if(o!==this._time&&l&&(h+=this._time-o,n+=this._time-o),f=h,S=this._start,y=this._ts,g=!y,d&&(l||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(M=this._yoyo,v=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,s,a);if(f=ft(h%v),h===c?(u=this._repeat,f=l):(x=ft(h/v),u=~~x,u&&u===x&&(f=l,u--),f>l&&(f=l)),x=As(this._tTime,v),!o&&this._tTime&&x!==u&&this._tTime-x*v-this._dur<=0&&(x=u),M&&u&1&&(f=l-f,C=1),u!==x&&!this._lock){var U=M&&x&1,A=U===(M&&u&1);if(u<x&&(U=!U),o=U?0:h%l?l:h,this._lock=1,this.render(o||(C?0:ft(u*v)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,x=u),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,A&&(this._lock=2,o=U?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=M_(this,ft(o),ft(f)),_&&(h-=f-(f=_._start))),this._tTime=h,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&l&&!s&&!x&&(hi(this,"onStart"),this._tTime!==h))return this;if(f>=o&&n>=0)for(p=this._first;p;){if(m=p._next,(p._act||f>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(n,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!g){_=0,m&&(h+=this._zTime=-it);break}}p=m}else{p=this._last;for(var N=n<0?n:f;p;){if(m=p._prev,(p._act||N<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(n,s,a);if(p.render(p._ts>0?(N-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(N-p._start)*p._ts,s,a||Dt&&id(p)),f!==this._time||!this._ts&&!g){_=0,m&&(h+=this._zTime=N?-it:it);break}}p=m}}if(_&&!s&&(this.pause(),_.render(f>=o?0:-it)._zTime=f>=o?1:-1,this._ts))return this._start=S,ec(this),this.render(n,s,a);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Xn(this,1),!s&&!(n<0&&!o)&&(h||o||!c)&&(hi(this,h===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(Mn(s)||(s=Mi(this,s,n)),!(n instanceof Ga)){if(Vt(n))return n.forEach(function(o){return a.add(o,s)}),this;if(At(n))return this.addLabel(n,s);if(vt(n))n=xt.delayedCall(0,n);else return this}return this!==n?Ji(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Si);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof xt?s&&c.push(l):(a&&c.push(l),n&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return At(n)?this.removeLabel(n):vt(n)?this.killTweensOf(n):(n.parent===this&&Ql(this,n),n===this._recent&&(this._recent=this._last),gr(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Jt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=Mi(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=xt.delayedCall(0,s||za,a);return o.data="isPause",this._hasPause=1,Ji(this,o,Mi(this,n))},t.removePause=function(n){var s=this._first;for(n=Mi(this,n);s;)s._start===n&&s.data==="isPause"&&Xn(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),c=o.length;c--;)Vn!==o[c]&&o[c].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=bi(n),c=this._first,l=Mn(s),h;c;)c instanceof xt?f_(c._targets,o)&&(l?(!Vn||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=Mi(a,n),c=s,l=c.startAt,h=c.onStart,d=c.onStartParams,f=c.immediateRender,p,m=xt.to(a,di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||it,onStart:function(){if(a.pause(),!p){var v=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());m._dur!==v&&Cs(m,v,0,1).render(m._time,!0,!0),p=1}h&&h.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,di({startAt:{time:Mi(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Df(this,Mi(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Df(this,Mi(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(n=ft(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=n);return gr(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),gr(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,c=Si,l,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ji(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ft(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Cs(a,a===mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(mt._ts&&(Hf(mt,Zl(n,mt)),Vf=Jt.frame),Jt.frame>=Rf){Rf+=$t.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&$t.autoSleep&&Jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jt.sleep()}}},e}(Ga);di(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var B_=function(e,t,i,n,s,a,o){var c=new Yt(this._pt,e,t,0,1,cd,null,s),l=0,h=0,d,f,p,m,u,v,g,_;for(c.b=i,c.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=Ps(n)),a&&(_=[i,n],a(_,e,t),i=_[0],n=_[1]),f=i.match(Pu)||[];d=Pu.exec(n);)m=d[0],u=n.substring(l,d.index),p?p=(p+1)%5:u.substr(-5)==="rgba("&&(p=1),m!==f[h++]&&(v=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:u||h===1?u:",",s:v,c:m.charAt(1)==="="?xr(v,m)-v:parseFloat(m)-v,m:p&&p<4?Math.round:0},l=Pu.lastIndex);return c.c=l<n.length?n.substring(l,n.length):"",c.fp=o,(Ju.test(n)||g)&&(c.e=0),this._pt=c,c},sd=function(e,t,i,n,s,a,o,c,l,h){vt(n)&&(n=n(s||0,e,a));var d=e[t],f=i!=="get"?i:vt(d)?l?e[t.indexOf("set")||!vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,p=vt(d)?l?H_:hm:ld,m;if(At(n)&&(~n.indexOf("random(")&&(n=Ps(n)),n.charAt(1)==="="&&(m=xr(f,n)+(Nt(f)||0),(m||m===0)&&(n=m))),!h||f!==n||Xu)return!isNaN(f*n)&&n!==""?(m=new Yt(this._pt,e,t,+f||0,n-(f||0),typeof d=="boolean"?X_:um,0,p),l&&(m.fp=l),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&$l(t,n),B_.call(this,e,t,f,n,p,c||$t.stringFilter,l))},z_=function(e,t,i,n,s){if(vt(e)&&(e=Oa(e,s,t,i,n)),!Ki(e)||e.style&&e.nodeType||Vt(e)||Bf(e))return At(e)?Oa(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=Oa(e[o],s,t,i,n);return a},ad=function(e,t,i,n,s,a){var o,c,l,h;if(Zt[e]&&(o=new Zt[e]).init(s,o.rawVars?t[e]:z_(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=c=new Yt(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Es))for(l=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Vn,Xu,od=function r(e,t,i){var n=e.vars,s=n.ease,a=n.startAt,o=n.immediateRender,c=n.lazy,l=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,f=n.keyframes,p=n.autoRevert,m=e._dur,u=e._startAt,v=e._targets,g=e.parent,_=g&&g.data==="nested"?g.vars.targets:v,y=e._overwrite==="auto"&&!qu,S=e.timeline,x=n.easeReverse||d,M,C,U,A,N,j,G,Y,W,V,k,q,ie;if(S&&(!f||!s)&&(s="none"),e._ease=_r(s,Fa.ease),e._rEase=x&&(_r(x)||e._ease),e._from=!S&&!!n.runBackwards,e._from&&(e.ratio=1),!S||f&&!n.stagger){if(Y=v[0]?Wn(v[0]).harness:0,q=Y&&n[Y.prop],M=Yl(n,$u),u&&(u._zTime<0&&u.progress(1),t<0&&h&&o&&!p?u.render(-1,!0):u.revert(h&&m?Hl:d_),u._lazy=0),a){if(Xn(e._startAt=xt.set(v,di({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!u&&Kt(c),startAt:null,delay:0,onUpdate:l&&function(){return hi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt||!o&&!p)&&e._startAt.revert(Hl),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!u){if(t&&(o=!1),U=di({overwrite:!1,data:"isFromStart",lazy:o&&!u&&Kt(c),immediateRender:o,stagger:0,parent:g},M),q&&(U[Y.prop]=q),Xn(e._startAt=xt.set(v,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt?e._startAt.revert(Hl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&Kt(c)||c&&!m,C=0;C<v.length;C++){if(N=v[C],G=N._gsap||ed(v)[C]._gsap,e._ptLookup[C]=V={},zu[G.id]&&Hn.length&&ql(),k=_===v?C:_.indexOf(N),Y&&(W=new Y).init(N,q||M,e,k,_)!==!1&&(e._pt=A=new Yt(e._pt,N,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(de){V[de]=A}),W.priority&&(j=1)),!Y||q)for(U in M)Zt[U]&&(W=ad(U,M,e,k,N,_))?W.priority&&(j=1):V[U]=A=sd.call(e,N,U,"get",M[U],k,_,0,n.stringFilter);e._op&&e._op[C]&&e.kill(N,e._op[C]),y&&e._pt&&(Vn=e,mt.killTweensOf(N,V,e.globalTime(t)),ie=!e.parent,Vn=0),e._pt&&c&&(zu[G.id]=1)}j&&ud(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ie,f&&t<=0&&S.render(Si,!0,!0)},k_=function(e,t,i,n,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,p;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(h=f[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Xu=1,e.vars[t]="+=0",od(e,o),Xu=0,c?Ba(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(p=l.length;p--;)d=l[p],h=d._pt||d,h.s=(n||n===0)&&!s?n:h.s+(n||0)+a*h.c,h.c=i-h.s,d.e&&(d.e=yt(i)+Nt(d.e)),d.b&&(d.b=h.s+Nt(d.b))},G_=function(e,t){var i=e[0]?Wn(e[0]).harness:0,n=i&&i.aliases,s,a,o,c;if(!n)return t;s=ws({},t);for(a in n)if(a in s)for(c=n[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},V_=function(e,t,i,n){var s=t.ease||n||"power1.inOut",a,o;if(Vt(t))o=i[e]||(i[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Oa=function(e,t,i,n,s){return vt(e)?e.call(t,i,n,s):At(e)&&~e.indexOf("random(")?Ps(e):e},lm=Qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",cm={};qt(lm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return cm[r]=1});var xt=function(r){Of(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:Na(n))||this;var c=o.vars,l=c.duration,h=c.delay,d=c.immediateRender,f=c.stagger,p=c.overwrite,m=c.keyframes,u=c.defaults,v=c.scrollTrigger,g=n.parent||mt,_=(Vt(i)||Bf(i)?Mn(i[0]):"length"in n)?[i]:bi(i),y,S,x,M,C,U,A,N;if(o._targets=_.length?ed(_):Ba("GSAP target "+i+" not found. https://gsap.com",!$t.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,m||f||Vl(l)||Vl(h)){n=o.vars;var j=n.easeReverse||n.yoyoEase;if(y=o.timeline=new Gt({data:"nested",defaults:u||{},targets:g&&g.data==="nested"?g.vars.targets:_}),y.kill(),y.parent=y._dp=yn(o),y._start=0,f||Vl(l)||Vl(h)){if(M=_.length,A=f&&$f(f),Ki(f))for(C in f)~lm.indexOf(C)&&(N||(N={}),N[C]=f[C]);for(S=0;S<M;S++)x=Yl(n,cm),x.stagger=0,j&&(x.easeReverse=j),N&&ws(x,N),U=_[S],x.duration=+Oa(l,yn(o),S,U,_),x.delay=(+Oa(h,yn(o),S,U,_)||0)-o._delay,!f&&M===1&&x.delay&&(o._delay=h=x.delay,o._start+=h,x.delay=0),y.to(U,x,A?A(S,U,_):0),y._ease=Ye.none;y.duration()?l=h=0:o.timeline=0}else if(m){Na(di(y.vars.defaults,{ease:"none"})),y._ease=_r(m.ease||n.ease||"none");var G=0,Y,W,V;if(Vt(m))m.forEach(function(k){return y.to(_,k,">")}),y.duration();else{x={};for(C in m)C==="ease"||C==="easeEach"||V_(C,m[C],x,m.easeEach);for(C in x)for(Y=x[C].sort(function(k,q){return k.t-q.t}),G=0,S=0;S<Y.length;S++)W=Y[S],V={ease:W.e,duration:(W.t-(S?Y[S-1].t:0))/100*l},V[C]=W.v,y.to(_,V,G),G+=V.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return p===!0&&!qu&&(Vn=yn(o),mt.killTweensOf(_),Vn=0),Ji(g,yn(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!l&&!m&&o._start===ft(g._time)&&Kt(d)&&v_(yn(o))&&g.data!=="nested")&&(o._tTime=-it,o.render(Math.max(0,-h)||0)),v&&Yf(yn(o),v),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,c=this._tDur,l=this._dur,h=n<0,d=n>c-it&&!h?c:n<it?0:n,f,p,m,u,v,g,_,y;if(!l)x_(this,n,s,a);else if(d!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,y=this.timeline,this._repeat){if(u=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(u*100+n,s,a);if(f=ft(d%u),d===c?(m=this._repeat,f=l):(v=ft(d/u),m=~~v,m&&m===v?(f=l,m--):f>l&&(f=l)),g=this._yoyo&&m&1,g&&(f=l-f),v=As(this._tTime,u),f===o&&!a&&this._initted&&m===v)return this._tTime=d,this;m!==v&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==u&&this._initted&&(this._lock=a=1,this.render(ft(u*m),!0).invalidate()._lock=0)}if(!this._initted){if(Zf(this,h?n:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==v))return this;if(l!==this._dur)return this.render(n,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var x=S?o:l-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=x?(S?-1:1)/x:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=_=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=_=this._ease(f/l);if(this._from&&(this.ratio=_=1-_),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!v&&(hi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;y&&y.render(n<0?n:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&ku(this,n,s,a),hi(this,"onUpdate")),this._repeat&&m!==v&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ku(this,n,!0,!0),(n||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Xn(this,1),!s&&!(h&&!o)&&(d||o||g)&&(hi(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,a,o,c){ka||Jt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||od(this,l),h=this._ease(l/this._dur),k_(this,n,s,a,o,h,l,c)?this.resetTo(n,s,a,o,1):(tc(this,0),this.parent||jf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?La(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Vn&&Vn.vars.overwrite!==!0)._first||La(this),this.parent&&a!==this.timeline.totalDuration()&&Cs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=n?bi(n):o,l=this._ptLookup,h=this._pt,d,f,p,m,u,v,g;if((!s||s==="all")&&g_(o,c))return s==="all"&&(this._pt=0),La(this);for(d=this._op=this._op||[],s!=="all"&&(At(s)&&(u={},qt(s,function(_){return u[_]=1}),s=u),s=G_(o,s)),g=o.length;g--;)if(~c.indexOf(o[g])){f=l[g],s==="all"?(d[g]=s,m=f,p={}):(p=d[g]=d[g]||{},m=s);for(u in m)v=f&&f[u],v&&((!("kill"in v.d)||v.d.kill(u)===!0)&&Ql(this,v,"_pt"),delete f[u]),p!=="all"&&(p[u]=1)}return this._initted&&!this._pt&&h&&La(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return Ua(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return Ua(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return mt.killTweensOf(n,s,a)},e}(Ga);di(xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qt("staggerTo,staggerFrom,staggerFromTo",function(r){xt[r]=function(){var e=new Gt,t=Vu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ld=function(e,t,i){return e[t]=i},hm=function(e,t,i){return e[t](i)},H_=function(e,t,i,n){return e[t](n.fp,i)},W_=function(e,t,i){return e.setAttribute(t,i)},ic=function(e,t){return vt(e[t])?hm:Kl(e[t])&&e.setAttribute?W_:ld},um=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},X_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cd=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},hd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},j_=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},q_=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Ql(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Y_=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},ud=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},Yt=function(){function r(t,i,n,s,a,o,c,l,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||um,this.d=c||this,this.set=l||ld,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=Y_,this.m=i,this.mt=s,this.tween=n},r}();qt(Qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return $u[r]=1});ui.TweenMax=ui.TweenLite=xt;ui.TimelineLite=ui.TimelineMax=Gt;mt=new Gt({sortChildren:!1,defaults:Fa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$t.stringFilter=nd;var vr=[],Xl={},Z_=[],Uf=0,J_=0,Uu=function(e){return(Xl[e]||Z_).map(function(t){return t()})},ju=function(){var e=Date.now(),t=[];e-Uf>2&&(Uu("matchMediaInit"),vr.forEach(function(i){var n=i.queries,s=i.conditions,a,o,c,l;for(o in n)a=Zi.matchMedia(n[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(i.revert(),c&&t.push(i))}),Uu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Uf=e,Uu("matchMedia"))},dm=function(){function r(t,i){this.selector=i&&Hu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=J_++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){vt(i)&&(s=n,n=i,i=vt);var a=this,o=function(){var l=ot,h=a.selector,d;return l&&l!==a&&l.data.push(a),s&&(a.selector=Hu(s)),ot=a,d=n.apply(a,arguments),vt(d)&&a._r.push(d),ot=l,a.selector=h,a.isReverted=!1,d};return a.last=o,i===vt?o(a,function(c){return a.add(null,c)}):i?a[i]=o:o},e.ignore=function(i){var n=ot;ot=null,i(this),ot=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof xt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),c=s.data.length;c--;)l=s.data[c],l instanceof Gt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof xt)&&l.revert&&l.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=vr.length;a--;)vr[a].id===this.id&&vr.splice(a,1)},e.revert=function(i){this.kill(i||{})},r}(),K_=function(){function r(t){this.contexts=[],this.scope=t,ot&&ot.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){Ki(i)||(i={matches:i});var a=new dm(0,s||this.scope),o=a.conditions={},c,l,h;ot&&!a.selector&&(a.selector=ot.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(l in i)l==="all"?h=1:(c=Zi.matchMedia(i[l]),c&&(vr.indexOf(a)<0&&vr.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(ju):c.addEventListener("change",ju)));return h&&n(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),Jl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return rm(n)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,i,n){At(e)&&(e=bi(e)[0]);var s=Wn(e||{}).get,a=i?Xf:Wf;return i==="native"&&(i=""),e&&(t?a((Zt[t]&&Zt[t].get||s)(e,t,i,n)):function(o,c,l){return a((Zt[o]&&Zt[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,i){if(e=bi(e),e.length>1){var n=e.map(function(h){return Ht.quickSetter(h,t,i)}),s=n.length;return function(h){for(var d=s;d--;)n[d](h)}}e=e[0]||{};var a=Zt[t],o=Wn(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(h){var d=new a;Es._pt=0,d.init(e,i?h+i:h,Es,0,[e]),d.render(1,d),Es._pt&&hd(1,Es)}:o.set(e,c);return a?l:function(h){return l(e,c,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,s=Ht.to(e,di((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(c,l,h){return s.resetTo(t,c,l,h)};return a.tween=s,a},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_r(e.ease,Fa.ease)),Pf(Fa,e||{})},config:function(e){return Pf($t,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Zt[o]&&!ui[o]&&Ba(t+" effect requires "+o+" plugin.")}),Iu[t]=function(o,c,l){return i(bi(o),di(c||{},s),l)},a&&(Gt.prototype[t]=function(o,c,l){return this.add(Iu[t](o,Ki(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ye[e]=_r(t)},parseEase:function(e,t){return arguments.length?_r(e,t):Ye},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Gt(e),n,s;for(i.smoothChildTiming=Kt(e.smoothChildTiming),mt.remove(i),i._dp=0,i._time=i._tTime=mt._time,n=mt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof xt&&n.vars.onComplete===n._targets[0]))&&Ji(i,n,n._start-n._delay),n=s;return Ji(mt,i,0),i},context:function(e,t){return e?new dm(e,t):ot},matchMedia:function(e){return new K_(e)},matchMediaRefresh:function(){return vr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||ju()},addEventListener:function(e,t){var i=Xl[e]||(Xl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Xl[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:C_,wrapYoyo:R_,distribute:$f,random:em,snap:Qf,normalize:A_,getUnit:Nt,clamp:b_,splitColor:sm,toArray:bi,selector:Hu,mapRange:im,pipe:E_,unitize:w_,interpolate:P_,shuffle:Kf},install:kf,effects:Iu,ticker:Jt,updateRoot:Gt.updateRoot,plugins:Zt,globalTimeline:mt,core:{PropTween:Yt,globals:Gf,Tween:xt,Timeline:Gt,Animation:Ga,getCache:Wn,_removeLinkedListItem:Ql,reverting:function(){return Dt},context:function(e){return e&&ot&&(ot.data.push(e),e._ctx=ot),ot},suppressOverwrites:function(e){return qu=e}}};qt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Jl[r]=xt[r]});Jt.add(Gt.updateRoot);Es=Jl.to({},{duration:0});var $_=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Q_=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=$_(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},Ou=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var c,l;if(At(s)&&(c={},qt(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Q_(o,s)}}}},Ht=Jl.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o,c;this.tween=i;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],n,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Dt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ou("roundProps",Wu),Ou("modifiers"),Ou("snap",Qf))||Jl;xt.version=Gt.version=Ht.version="3.15.0";zf=1;Yu()&&Rs();var ev=Ye.Power0,tv=Ye.Power1,iv=Ye.Power2,nv=Ye.Power3,rv=Ye.Power4,sv=Ye.Linear,av=Ye.Quad,ov=Ye.Cubic,lv=Ye.Quart,cv=Ye.Quint,hv=Ye.Strong,uv=Ye.Elastic,dv=Ye.Back,pv=Ye.SteppedEase,fv=Ye.Bounce,mv=Ye.Sine,gv=Ye.Expo,_v=Ye.Circ;var pm,qn,Ls,_d,Er,vv,fm,vd,yv=function(){return typeof window<"u"},bn={},Tr=180/Math.PI,Ds=Math.PI/180,Is=Math.atan2,mm=1e8,yd=/([A-Z])/g,xv=/(left|right|width|margin|padding|x)/i,Mv=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Tv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ev=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},bm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Tm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wv=function(e,t,i){return e.style[t]=i},Av=function(e,t,i){return e.style.setProperty(t,i)},Cv=function(e,t,i){return e._gsap[t]=i},Rv=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Pv=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Iv=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},gt="transform",Qt=gt+"Origin",Lv=function r(e,t){var i=this,n=this.target,s=n.style,a=n._gsap;if(e in bn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=$i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Sn(n,o)}):this.tfm[e]=a.x?a[e]:Sn(n,e),e===Qt&&(this.tfm.zOrigin=a.zOrigin);else return $i.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(gt)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Qt,t,"")),e=gt}(s||t)&&this.props.push(e,t,s[e])},Em=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Dv=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vd(),(!s||!s.isStart)&&!i[gt]&&(Em(i),n.zOrigin&&i[Qt]&&(i[Qt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},wm=function(e,t){var i={target:e,props:[],revert:Dv,save:Lv};return e._gsap||Ht.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Am,fd=function(e,t){var i=qn.createElementNS?qn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qn.createElement(e);return i&&i.style?i:qn.createElement(e)},pi=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(yd,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,Ns(t)||t,1)||""},gm="O,Moz,ms,Ms,Webkit".split(","),Ns=function(e,t,i){var n=t||Er,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(gm[a]+e in s););return a<0?null:(a===3?"ms":a>=0?gm[a]:"")+e},md=function(){yv()&&window.document&&(pm=window,qn=pm.document,Ls=qn.documentElement,Er=fd("div")||{style:{}},vv=fd("div"),gt=Ns(gt),Qt=gt+"Origin",Er.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Am=!!Ns("perspective"),vd=Ht.core.reverting,_d=1)},_m=function(e){var t=e.ownerSVGElement,i=fd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),Ls.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),Ls.removeChild(i),s},vm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Cm=function(e){var t,i;try{t=e.getBBox()}catch{t=_m(e),i=1}return t&&(t.width||t.height)||i||(t=_m(e)),t&&!t.width&&!t.x&&!t.y?{x:+vm(e,["x","cx","x1"])||0,y:+vm(e,["y","cy","y1"])||0,width:0,height:0}:t},Rm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cm(e))},Zn=function(e,t){if(t){var i=e.style,n;t in bn&&t!==Qt&&(t=gt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(yd,"-$1").toLowerCase())):i.removeAttribute(t)}},Yn=function(e,t,i,n,s,a){var o=new Yt(e._pt,t,i,0,1,a?Tm:bm);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},ym={deg:1,rad:1,turn:1},Nv={grid:1,flex:1},Jn=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Er.style,c=xv.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),d=100,f=n==="px",p=n==="%",m,u,v,g;if(n===a||!s||ym[n]||ym[a])return s;if(a!=="px"&&!f&&(s=r(e,t,i,"px")),g=e.getCTM&&Rm(e),(p||a==="%")&&(bn[t]||~t.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[h],yt(p?s/m*d:s/100*m);if(o[c?"width":"height"]=d+(f?a:n),u=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(u=(e.ownerSVGElement||{}).parentNode),(!u||u===qn||!u.appendChild)&&(u=qn.body),v=u._gsap,v&&p&&v.width&&c&&v.time===Jt.time&&!v.uncache)return yt(s/v.width*d);if(p&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=d+n,m=e[h],_?e.style[t]=_:Zn(e,t)}else(p||a==="%")&&!Nv[pi(u,"display")]&&(o.position=pi(e,"position")),u===e&&(o.position="static"),u.appendChild(Er),m=Er[h],u.removeChild(Er),o.position="absolute";return c&&p&&(v=Wn(u),v.time=Jt.time,v.width=u[h]),yt(f?m*s/d:m&&s?d/m*s:0)},Sn=function(e,t,i,n){var s;return _d||md(),t in $i&&t!=="transform"&&(t=$i[t],~t.indexOf(",")&&(t=t.split(",")[0])),bn[t]&&t!=="transform"?(s=Xa(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rc(pi(e,Qt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=nc[t]&&nc[t](e,t,i)||pi(e,t)||td(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Jn(e,t,s,i)+i:s},Uv=function(e,t,i,n){if(!i||i==="none"){var s=Ns(t,e,1),a=s&&pi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=pi(e,"borderTopColor"))}var o=new Yt(this._pt,e.style,t,0,1,cd),c=0,l=0,h,d,f,p,m,u,v,g,_,y,S,x;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=pi(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(u=e.style[t],e.style[t]=n,n=pi(e,t)||n,u?e.style[t]=u:Zn(e,t)),h=[i,n],nd(h),i=h[0],n=h[1],f=i.match(yr)||[],x=n.match(yr)||[],x.length){for(;d=yr.exec(n);)v=d[0],_=n.substring(c,d.index),m?m=(m+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(m=1),v!==(u=f[l++]||"")&&(p=parseFloat(u)||0,S=u.substr((p+"").length),v.charAt(1)==="="&&(v=xr(p,v)+S),g=parseFloat(v),y=v.substr((g+"").length),c=yr.lastIndex-y.length,y||(y=y||$t.units[t]||S,c===n.length&&(n+=y,o.e+=y)),S!==y&&(p=Jn(e,t,u,y)||0),o._pt={_next:o._pt,p:_||l===1?_:",",s:p,c:g-p,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=c<n.length?n.substring(c,n.length):""}else o.r=t==="display"&&n==="none"?Tm:bm;return Ju.test(n)&&(o.e=0),this._pt=o,o},xm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ov=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=xm[i]||i,t[1]=xm[n]||n,t.join(" ")},Fv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,c,l;if(s==="all"||s===!0)n.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],bn[o]&&(c=1,o=o==="transformOrigin"?Qt:gt),Zn(i,o);c&&(Zn(i,gt),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Xa(i,1),a.uncache=1,Em(n)))}},nc={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new Yt(e._pt,t,i,0,0,Fv);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},Wa=[1,0,0,1,0,0],Pm={},Im=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mm=function(e){var t=pi(e,gt);return Im(t)?Wa:t.substr(7).match(Zu).map(yt)},xd=function(e,t){var i=e._gsap||Wn(e),n=e.style,s=Mm(e),a,o,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Wa:s):(s===Wa&&!e.offsetParent&&e!==Ls&&!i.svg&&(c=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Ls.appendChild(e)),s=Mm(e),c?n.display=c:Zn(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ls.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gd=function(e,t,i,n,s,a){var o=e._gsap,c=s||xd(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,p=c[0],m=c[1],u=c[2],v=c[3],g=c[4],_=c[5],y=t.split(" "),S=parseFloat(y[0])||0,x=parseFloat(y[1])||0,M,C,U,A;i?c!==Wa&&(C=p*v-m*u)&&(U=S*(v/C)+x*(-u/C)+(u*_-v*g)/C,A=S*(-m/C)+x*(p/C)-(p*_-m*g)/C,S=U,x=A):(M=Cm(e),S=M.x+(~y[0].indexOf("%")?S/100*M.width:S),x=M.y+(~(y[1]||y[0]).indexOf("%")?x/100*M.height:x)),n||n!==!1&&o.smooth?(g=S-l,_=x-h,o.xOffset=d+(g*p+_*u)-g,o.yOffset=f+(g*m+_*v)-_):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=x,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[Qt]="0px 0px",a&&(Yn(a,o,"xOrigin",l,S),Yn(a,o,"yOrigin",h,x),Yn(a,o,"xOffset",d,o.xOffset),Yn(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+x)},Xa=function(e,t){var i=e._gsap||new rd(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=pi(e,Qt)||"0",h,d,f,p,m,u,v,g,_,y,S,x,M,C,U,A,N,j,G,Y,W,V,k,q,ie,de,Me,Se,_e,se,ce,oe;return h=d=f=u=v=g=_=y=S=0,p=m=1,i.svg=!!(e.getCTM&&Rm(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[gt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[gt]!=="none"?c[gt]:"")),n.scale=n.rotate=n.translate="none"),C=xd(e,i.svg),i.svg&&(i.uncache?(ie=e.getBBox(),l=i.xOrigin-ie.x+"px "+(i.yOrigin-ie.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),gd(e,q||l,!!q||i.originIsAbsolute,i.smooth!==!1,C)),x=i.xOrigin||0,M=i.yOrigin||0,C!==Wa&&(j=C[0],G=C[1],Y=C[2],W=C[3],h=V=C[4],d=k=C[5],C.length===6?(p=Math.sqrt(j*j+G*G),m=Math.sqrt(W*W+Y*Y),u=j||G?Is(G,j)*Tr:0,_=Y||W?Is(Y,W)*Tr+u:0,_&&(m*=Math.abs(Math.cos(_*Ds))),i.svg&&(h-=x-(x*j+M*Y),d-=M-(x*G+M*W))):(oe=C[6],se=C[7],Me=C[8],Se=C[9],_e=C[10],ce=C[11],h=C[12],d=C[13],f=C[14],U=Is(oe,_e),v=U*Tr,U&&(A=Math.cos(-U),N=Math.sin(-U),q=V*A+Me*N,ie=k*A+Se*N,de=oe*A+_e*N,Me=V*-N+Me*A,Se=k*-N+Se*A,_e=oe*-N+_e*A,ce=se*-N+ce*A,V=q,k=ie,oe=de),U=Is(-Y,_e),g=U*Tr,U&&(A=Math.cos(-U),N=Math.sin(-U),q=j*A-Me*N,ie=G*A-Se*N,de=Y*A-_e*N,ce=W*N+ce*A,j=q,G=ie,Y=de),U=Is(G,j),u=U*Tr,U&&(A=Math.cos(U),N=Math.sin(U),q=j*A+G*N,ie=V*A+k*N,G=G*A-j*N,k=k*A-V*N,j=q,V=ie),v&&Math.abs(v)+Math.abs(u)>359.9&&(v=u=0,g=180-g),p=yt(Math.sqrt(j*j+G*G+Y*Y)),m=yt(Math.sqrt(k*k+oe*oe)),U=Is(V,k),_=Math.abs(U)>2e-4?U*Tr:0,S=ce?1/(ce<0?-ce:ce):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Im(pi(e,gt)),q&&e.setAttribute("transform",q))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=u<=0?180:-180,u+=u<=0?180:-180):(m*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=yt(p),i.scaleY=yt(m),i.rotation=yt(u)+o,i.rotationX=yt(v)+o,i.rotationY=yt(g)+o,i.skewX=_+o,i.skewY=y+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Qt]=rc(l)),i.xOffset=i.yOffset=0,i.force3D=$t.force3D,i.renderTransform=i.svg?zv:Am?Lm:Bv,i.uncache=0,i},rc=function(e){return(e=e.split(" "))[0]+" "+e[1]},dd=function(e,t,i){var n=Nt(t);return yt(parseFloat(t)+parseFloat(Jn(e,"x",i+"px",n)))+n},Bv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Lm(e,t)},Sr="0deg",Ha="0px",br=") ",Lm=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.z,l=i.rotation,h=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,m=i.scaleX,u=i.scaleY,v=i.transformPerspective,g=i.force3D,_=i.target,y=i.zOrigin,S="",x=g==="auto"&&e&&e!==1||g===!0;if(y&&(d!==Sr||h!==Sr)){var M=parseFloat(h)*Ds,C=Math.sin(M),U=Math.cos(M),A;M=parseFloat(d)*Ds,A=Math.cos(M),a=dd(_,a,C*A*-y),o=dd(_,o,-Math.sin(M)*-y),c=dd(_,c,U*A*-y+y)}v!==Ha&&(S+="perspective("+v+br),(n||s)&&(S+="translate("+n+"%, "+s+"%) "),(x||a!==Ha||o!==Ha||c!==Ha)&&(S+=c!==Ha||x?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+br),l!==Sr&&(S+="rotate("+l+br),h!==Sr&&(S+="rotateY("+h+br),d!==Sr&&(S+="rotateX("+d+br),(f!==Sr||p!==Sr)&&(S+="skew("+f+", "+p+br),(m!==1||u!==1)&&(S+="scale("+m+", "+u+br),_.style[gt]=S||"translate(0, 0)"},zv=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.rotation,l=i.skewX,h=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,m=i.xOrigin,u=i.yOrigin,v=i.xOffset,g=i.yOffset,_=i.forceCSS,y=parseFloat(a),S=parseFloat(o),x,M,C,U,A;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Ds,l*=Ds,x=Math.cos(c)*d,M=Math.sin(c)*d,C=Math.sin(c-l)*-f,U=Math.cos(c-l)*f,l&&(h*=Ds,A=Math.tan(l-h),A=Math.sqrt(1+A*A),C*=A,U*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),x*=A,M*=A)),x=yt(x),M=yt(M),C=yt(C),U=yt(U)):(x=d,U=f,M=C=0),(y&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(y=Jn(p,"x",a,"px"),S=Jn(p,"y",o,"px")),(m||u||v||g)&&(y=yt(y+m-(m*x+u*C)+v),S=yt(S+u-(m*M+u*U)+g)),(n||s)&&(A=p.getBBox(),y=yt(y+n/100*A.width),S=yt(S+s/100*A.height)),A="matrix("+x+","+M+","+C+","+U+","+y+","+S+")",p.setAttribute("transform",A),_&&(p.style[gt]=A)},kv=function(e,t,i,n,s){var a=360,o=At(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Tr:1),l=c-n,h=n+l+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*mm)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*mm)%a-~~(l/a)*a)),e._pt=f=new Yt(e._pt,t,i,n,l,Sv),f.e=h,f.u="deg",e._props.push(i),f},Sm=function(e,t){for(var i in t)e[i]=t[i];return e},Gv=function(e,t,i){var n=Sm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,c,l,h,d,f,p,m;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[gt]=t,o=Xa(i,1),Zn(i,gt),i.setAttribute("transform",l)):(l=getComputedStyle(i)[gt],a[gt]=t,o=Xa(i,1),a[gt]=l);for(c in bn)l=n[c],h=o[c],l!==h&&s.indexOf(c)<0&&(p=Nt(l),m=Nt(h),d=p!==m?Jn(i,c,l,m):parseFloat(l),f=parseFloat(h),e._pt=new Yt(e._pt,o,c,d,f-d,pd),e._pt.u=m||0,e._props.push(c));Sm(o,n)};qt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});nc[e>1?"border"+r:r]=function(o,c,l,h,d){var f,p;if(arguments.length<4)return f=a.map(function(m){return Sn(o,m,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},a.forEach(function(m,u){return p[m]=f[u]=f[u]||f[(u-1)/2|0]}),o.init(c,p,d)}});var Md={name:"css",register:md,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,c=i.vars.startAt,l,h,d,f,p,m,u,v,g,_,y,S,x,M,C,U,A;_d||md(),this.styles=this.styles||wm(e),U=this.styles.props,this.tween=i;for(u in t)if(u!=="autoRound"&&(h=t[u],!(Zt[u]&&ad(u,t,i,n,e,s)))){if(p=typeof h,m=nc[u],p==="function"&&(h=h.call(i,n,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Ps(h)),m)m(this,e,u,h,i)&&(C=1);else if(u.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(u)+"").trim(),h+="",xn.lastIndex=0,xn.test(l)||(v=Nt(l),g=Nt(h),g?v!==g&&(l=Jn(e,u,l,g)+g):v&&(h+=v)),this.add(o,"setProperty",l,h,n,s,0,0,u),a.push(u),U.push(u,0,o[u]);else if(p!=="undefined"){if(c&&u in c?(l=typeof c[u]=="function"?c[u].call(i,n,e,s):c[u],At(l)&&~l.indexOf("random(")&&(l=Ps(l)),Nt(l+"")||l==="auto"||(l+=$t.units[u]||Nt(Sn(e,u))||""),(l+"").charAt(1)==="="&&(l=Sn(e,u))):l=Sn(e,u),f=parseFloat(l),_=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),_&&(h=h.substr(2)),d=parseFloat(h),u in $i&&(u==="autoAlpha"&&(f===1&&Sn(e,"visibility")==="hidden"&&d&&(f=0),U.push("visibility",0,o.visibility),Yn(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),u!=="scale"&&u!=="transform"&&(u=$i[u],~u.indexOf(",")&&(u=u.split(",")[0]))),y=u in bn,y){if(this.styles.save(u),A=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=pi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=h,h=pi(e,"perspective"),N?e.style.perspective=N:Zn(e,"perspective")}d=parseFloat(h)}if(S||(x=e._gsap,x.renderTransform&&!t.parseTransform||Xa(e,t.parseTransform),M=t.smoothOrigin!==!1&&x.smooth,S=this._pt=new Yt(this._pt,o,gt,0,1,x.renderTransform,x,0,-1),S.dep=1),u==="scale")this._pt=new Yt(this._pt,x,"scaleY",x.scaleY,(_?xr(x.scaleY,_+d):d)-x.scaleY||0,pd),this._pt.u=0,a.push("scaleY",u),u+="X";else if(u==="transformOrigin"){U.push(Qt,0,o[Qt]),h=Ov(h),x.svg?gd(e,h,0,M,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==x.zOrigin&&Yn(this,x,"zOrigin",x.zOrigin,g),Yn(this,o,u,rc(l),rc(h)));continue}else if(u==="svgOrigin"){gd(e,h,1,M,0,this);continue}else if(u in Pm){kv(this,x,u,f,_?xr(f,_+h):h);continue}else if(u==="smoothOrigin"){Yn(this,x,"smooth",x.smooth,h);continue}else if(u==="force3D"){x[u]=h;continue}else if(u==="transform"){Gv(this,h,e);continue}}else u in o||(u=Ns(u)||u);if(y||(d||d===0)&&(f||f===0)&&!Mv.test(h)&&u in o)v=(l+"").substr((f+"").length),d||(d=0),g=Nt(h)||(u in $t.units?$t.units[u]:v),v!==g&&(f=Jn(e,u,l,g)),this._pt=new Yt(this._pt,y?x:o,u,f,(_?xr(f,_+d):d)-f,!y&&(g==="px"||u==="zIndex")&&t.autoRound!==!1?Ev:pd),this._pt.u=g||0,y&&A!==h?(this._pt.b=l,this._pt.e=A,this._pt.r=Tv):v!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=bv);else if(u in o)Uv.call(this,e,u,l,_?_+h:h);else if(u in e)this.add(e,u,l||e[u],_?_+h:h,n,s);else if(u!=="parseTransform"){$l(u,h);continue}y||(u in o?U.push(u,0,o[u]):typeof e[u]=="function"?U.push(u,2,e[u]()):U.push(u,1,l||e[u])),a.push(u)}}C&&ud(this)},render:function(e,t){if(t.tween._time||!vd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Sn,aliases:$i,getSetter:function(e,t,i){var n=$i[t];return n&&n.indexOf(",")<0&&(t=n),t in bn&&t!==Qt&&(e._gsap.x||Sn(e,"x"))?i&&fm===i?t==="scale"?Rv:Cv:(fm=i||{})&&(t==="scale"?Pv:Iv):e.style&&!Kl(e.style[t])?wv:~t.indexOf("-")?Av:ic(e,t)},core:{_removeProperty:Zn,_getMatrix:xd}};Ht.utils.checkPrefix=Ns;Ht.core.getStyleSaver=wm;(function(r,e,t,i){var n=qt(r+","+e+","+t,function(s){bn[s]=1});qt(e,function(s){$t.units[s]="deg",Pm[s]=1}),$i[n[13]]=r+","+e,qt(i,function(s){var a=s.split(":");$i[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$t.units[r]="px"});Ht.registerPlugin(Md);var Sd=Ht.registerPlugin(Md)||Ht,bS=Sd.core.Tween;var lt=document.querySelector("[data-mcc-home]"),wr=document.querySelector("[data-mcc-canvas]"),Qi=document.querySelector("[data-mcc-insert]"),Ar=document.querySelector("[data-mcc-desktop]"),ja=Array.from(document.querySelectorAll("[data-mcc-window]")),Dm=Array.from(document.querySelectorAll("[data-mcc-open]")),Nm=Array.from(document.querySelectorAll("[data-mcc-close]")),Um=Array.from(document.querySelectorAll("[data-mcc-focus]")),Vv=Array.from(document.querySelectorAll("[data-mcc-article-template]")),Cr=window.matchMedia("(max-width: 760px), (max-aspect-ratio: 3/4)"),Hv=new Set(["members","twitter"]);function Om(){if(!lt||!Cr.matches)return;let r=20;lt.dataset.mccPhoneBooted="true",lt.style.setProperty("--mcc-boot-glow","1"),lt.classList.add("is-phone-mode","is-booted","is-screen-mode","is-screen-ready"),Ar?.setAttribute("aria-hidden","false"),Qi?.setAttribute("disabled","true"),Qi?.setAttribute("aria-hidden","true");let e=i=>{i&&(r+=1,i.style.zIndex=String(r))},t=(i,n)=>{let s=ja.find(a=>a.dataset.mccWindow===i);s&&(s.classList.toggle("is-closed",!n),s.setAttribute("aria-hidden",n?"false":"true"),n&&e(s))};ja.forEach(i=>{t(i.dataset.mccWindow,Hv.has(i.dataset.mccWindow)),i.dataset.mccPhoneFocusReady!=="true"&&(i.dataset.mccPhoneFocusReady="true",i.addEventListener("pointerdown",()=>{Cr.matches&&e(i)}))}),Dm.forEach(i=>{i.dataset.mccPhoneReady!=="true"&&(i.dataset.mccPhoneReady="true",i.addEventListener("click",n=>{Cr.matches&&(n.preventDefault(),t(i.dataset.mccOpen,!0))}))}),Nm.forEach(i=>{i.dataset.mccPhoneReady!=="true"&&(i.dataset.mccPhoneReady="true",i.addEventListener("click",n=>{Cr.matches&&(n.preventDefault(),n.stopPropagation(),t(i.dataset.mccClose,!1))}))}),Um.forEach(i=>{i.dataset.mccPhoneReady!=="true"&&(i.dataset.mccPhoneReady="true",i.addEventListener("click",n=>{Cr.matches&&(n.preventDefault(),n.stopPropagation(),e(ja.find(s=>s.dataset.mccWindow===i.dataset.mccFocus)))}))}),lt.classList.add("is-phone-window-setup")}Om();Cr.addEventListener?.("change",Om);if(lt&&wr&&!Cr.matches){let h=function(w,R,O){let H=document.createElement("canvas");H.width=w,H.height=R;let $=H.getContext("2d");O($,w,R);let ne=new ns(H);return ne.colorSpace=Lt,ne.wrapS=sr,ne.wrapT=sr,ne.anisotropy=4,ne},d=function(w,R,O){return h(384,384,(H,$,ne)=>{H.fillStyle=w,H.fillRect(0,0,$,ne);for(let Q=0;Q<7200;Q+=1){let me=Math.random()*.16;H.fillStyle=`rgba(${R}, ${me})`,H.fillRect(Math.random()*$,Math.random()*ne,1,1)}if(O){H.globalAlpha=.16,H.strokeStyle=O;for(let Q=0;Q<ne;Q+=13)H.beginPath(),H.moveTo(0,Q+.5),H.lineTo($,Q+.5),H.stroke()}H.globalAlpha=1})},f=function(){let w=h(512,512,(R,O,H)=>{let $=R.createLinearGradient(0,0,O,H);$.addColorStop(0,"#2b170b"),$.addColorStop(.35,"#4b2e18"),$.addColorStop(.7,"#2f1a0d"),$.addColorStop(1,"#57351d"),R.fillStyle=$,R.fillRect(0,0,O,H);for(let ne=0;ne<H;ne+=9){R.strokeStyle=`rgba(255, 210, 140, ${.06+Math.random()*.08})`,R.lineWidth=1+Math.random()*2,R.beginPath(),R.moveTo(0,ne+Math.sin(ne)*3);for(let Q=0;Q<=O;Q+=22)R.lineTo(Q,ne+Math.sin((Q+ne)*.035)*7);R.stroke()}for(let ne=0;ne<2400;ne+=1)R.fillStyle=`rgba(0,0,0,${Math.random()*.1})`,R.fillRect(Math.random()*O,Math.random()*H,1,1)});return w.repeat.set(3,2),w},p=function(w=384,R=384,O=[1,1],H=34){let $=h(w,R,(ne,Q,me)=>{ne.fillStyle="#7f7f7f",ne.fillRect(0,0,Q,me);for(let Ee=0;Ee<Q*me*.18;Ee+=1){let we=112+Math.random()*H;ne.fillStyle=`rgb(${we}, ${we}, ${we})`,ne.fillRect(Math.random()*Q,Math.random()*me,1,1)}});return $.repeat.set(...O),$},m=function(){let w=h(512,512,(R,O,H)=>{R.fillStyle="#777",R.fillRect(0,0,O,H);for(let $=0;$<H;$+=7){let ne=94+Math.random()*72;R.strokeStyle=`rgb(${ne}, ${ne}, ${ne})`,R.lineWidth=1+Math.random()*2,R.beginPath(),R.moveTo(0,$);for(let Q=0;Q<=O;Q+=14)R.lineTo(Q,$+Math.sin((Q+$)*.035)*8+Math.sin(Q*.012)*3);R.stroke()}for(let $=0;$<24;$+=1){let ne=Math.random()*O,Q=Math.random()*H;R.strokeStyle=`rgba(30,30,30,${.12+Math.random()*.12})`,R.lineWidth=1,R.beginPath(),R.ellipse(ne,Q,18+Math.random()*32,4+Math.random()*8,Math.random()*Math.PI,0,Math.PI*2),R.stroke()}});return w.repeat.set(3,2),w},u=function(w=768,R=512,O={}){return h(w,R,($,ne,Q)=>{$.clearRect(0,0,ne,Q);let me=O.scratch||"255, 237, 192",Ee=O.smudge||"0, 0, 0";for(let we=0;we<(O.smudges||70);we+=1){let ye=14+Math.random()*86,Be=Math.random()*ne,Qe=Math.random()*Q,rt=$.createRadialGradient(Be,Qe,0,Be,Qe,ye);rt.addColorStop(0,`rgba(${Ee}, ${.035+Math.random()*.075})`),rt.addColorStop(1,`rgba(${Ee}, 0)`),$.fillStyle=rt,$.fillRect(Be-ye,Qe-ye,ye*2,ye*2)}for(let we=0;we<(O.scratches||120);we+=1){let ye=Math.random()*ne,Be=Math.random()*Q,Qe=12+Math.random()*120;$.strokeStyle=`rgba(${me}, ${.025+Math.random()*.12})`,$.lineWidth=Math.random()>.82?2:1,$.beginPath(),$.moveTo(ye,Be),$.lineTo(ye+Qe,Be+(Math.random()-.5)*16),$.stroke()}for(let we=0;we<(O.speckles||1600);we+=1){let ye=Math.random()*.08;$.fillStyle=`rgba(${Ee}, ${ye})`,$.fillRect(Math.random()*ne,Math.random()*Q,1,1)}})},v=function(){return h(512,320,(w,R,O)=>{w.clearRect(0,0,R,O);let H=w.createRadialGradient(R*.5,O*.5,20,R*.5,O*.5,R*.62);H.addColorStop(0,"rgba(218, 255, 245, 0.12)"),H.addColorStop(1,"rgba(218, 255, 245, 0)"),w.fillStyle=H,w.fillRect(0,0,R,O);let $=w.createLinearGradient(0,0,R,O*.55);$.addColorStop(0,"rgba(255,255,255,0)"),$.addColorStop(.36,"rgba(255,255,255,0.18)"),$.addColorStop(.46,"rgba(255,255,255,0.05)"),$.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=$,w.beginPath(),w.moveTo(R*.1,0),w.lineTo(R*.5,0),w.lineTo(R*.25,O),w.lineTo(0,O),w.closePath(),w.fill();for(let ne=0;ne<O;ne+=4)w.fillStyle="rgba(0, 0, 0, 0.06)",w.fillRect(0,ne,R,1)})},g=function(){return h(256,128,(w,R,O)=>{w.clearRect(0,0,R,O);let H=w.createRadialGradient(R/2,O/2,0,R/2,O/2,R*.48);H.addColorStop(0,"rgba(0, 0, 0, 0.34)"),H.addColorStop(.58,"rgba(0, 0, 0, 0.16)"),H.addColorStop(1,"rgba(0, 0, 0, 0)"),w.fillStyle=H,w.fillRect(0,0,R,O)})},_=function(w,R={}){let O=document.createElement("canvas");O.width=R.width||512,O.height=R.height||320;let H=O.getContext("2d");H.fillStyle=R.background||"#eee4cc",H.fillRect(0,0,O.width,O.height),H.strokeStyle=R.rule||"#153c78",H.lineWidth=R.ruleWidth||8,H.beginPath(),H.moveTo(72,66),H.lineTo(O.width-72,66),H.moveTo(72,O.height-94),H.lineTo(O.width-72,O.height-94),H.stroke(),H.fillStyle=R.color||"#14120f",H.font=R.font||"52px Georgia",H.textAlign="center",H.textBaseline="middle";let $=R.lineHeight||58,ne=(O.height-(w.length-1)*$)/2-4;w.forEach((me,Ee)=>{H.fillText(me,O.width/2,ne+Ee*$)}),R.badge&&(H.fillStyle="#111",H.fillRect(O.width/2-68,O.height-74,136,44),H.fillStyle="#f3ead6",H.font="30px 'Courier New'",H.fillText(R.badge,O.width/2,O.height-49));let Q=new ns(O);return Q.colorSpace=Lt,Q},q=function(w,R=.15){let O=new aa(new ss(w.geometry),new is({color:2827547,transparent:!0,opacity:R}));w.add(O)},ie=function(w,R,O,H,$=e,ne=!0){let Q=new Ze(new mn(...R),H);return Q.name=w,Q.position.set(...O),Q.castShadow=!0,Q.receiveShadow=!0,ne&&q(Q),$.add(Q),Q},de=function(w,R,O,H,$=e,ne=[0,0,0]){let Q=new Ze(new gn(...O),new pn({map:R,transparent:!0,side:li}));return Q.name=w,Q.position.set(...H),Q.rotation.set(...ne),$.add(Q),Q},Me=function(w,R,O,H,$=e,ne=[0,0,0],Q=1){let me=new Ze(new gn(...O),new pn({map:R,transparent:!0,depthWrite:!1,opacity:Q,side:li}));return me.name=w,me.position.set(...H),me.rotation.set(...ne),me.renderOrder=3,$.add(me),me},he=function(){re.localToWorld(fe.copy(ge)),ue.position.set(fe.x,-.595,fe.z)},We=function(w){let R=en(w,0,1);ae.intensity=Ni.lerp(.08,.62,R),ee.intensity=Ni.lerp(.18,2.15,R),k.lampBulb.emissiveIntensity=Ni.lerp(.1,1.75,R),ve.opacity=Ni.lerp(.025,.3,R)},Us=function(w){let R=w.map(Q=>Q.project(t)),O=Math.min(...R.map(Q=>Q.x)),H=Math.max(...R.map(Q=>Q.x)),$=Math.min(...R.map(Q=>Q.y)),ne=Math.max(...R.map(Q=>Q.y));return{left:(O+1)/2*En,top:(1-ne)/2*nt,width:(H-O)/2*En,height:(ne-$)/2*nt}},Ya=function(w){w.updateWorldMatrix(!0,!0);let R=new si().setFromObject(w);return R.isEmpty()?null:Us([new P(R.min.x,R.min.y,R.min.z),new P(R.min.x,R.min.y,R.max.z),new P(R.min.x,R.max.y,R.min.z),new P(R.min.x,R.max.y,R.max.z),new P(R.max.x,R.min.y,R.min.z),new P(R.max.x,R.min.y,R.max.z),new P(R.max.x,R.max.y,R.min.z),new P(R.max.x,R.max.y,R.max.z)])},Za=function(){Re.updateWorldMatrix(!0,!0);let w=Je.width/2,R=Je.height/2;return Us([new P(-w,-R,Je.z),new P(w,-R,Je.z),new P(-w,R,Je.z),new P(w,R,Je.z)].map(O=>O.applyMatrix4(Re.matrixWorld)))},Os=function(){let w=Za();if(!w)return;let R=Math.max(2,w.width*.018),O=Math.max(2,w.height*.024),H={left:w.left+R,top:w.top+O,width:Math.max(1,w.width-R*2),height:Math.max(1,w.height-O*2)},$=H.left+H.width/2,ne=H.top+H.height/2,Q=Math.max(En/H.width,nt/H.height)*1.035;lt.style.setProperty("--mcc-monitor-left",`${H.left}px`),lt.style.setProperty("--mcc-monitor-top",`${H.top}px`),lt.style.setProperty("--mcc-monitor-width",`${H.width}px`),lt.style.setProperty("--mcc-monitor-height",`${H.height}px`),lt.style.setProperty("--mcc-screen-origin-x",`${$}px`),lt.style.setProperty("--mcc-screen-origin-y",`${ne}px`),lt.style.setProperty("--mcc-screen-zoom-active",`${Q.toFixed(3)}`),lt.style.setProperty("--mcc-screen-x-active",`${(En/2-$).toFixed(2)}px`),lt.style.setProperty("--mcc-screen-y-active",`${(nt/2-ne).toFixed(2)}px`)},Fs=function(){if(!Qi||l)return;let w=Ya(qe);if(!w)return;let R=12,O=8;Qi.style.setProperty("--mcc-floppy-hotspot-left",`${w.left-R}px`),Qi.style.setProperty("--mcc-floppy-hotspot-top",`${w.top-O}px`),Qi.style.setProperty("--mcc-floppy-hotspot-bottom","auto"),Qi.style.setProperty("--mcc-floppy-hotspot-width",`${w.width+R*2}px`),Qi.style.setProperty("--mcc-floppy-hotspot-height",`${w.height+O*2}px`)},Rr=function(){let w=wr.getBoundingClientRect(),R=Math.max(1,w.width),O=Math.max(1,w.height);En=R,nt=O;let H=R/O,$=en((1.48-H)/.72,0,1),ne=Ni.degToRad(t.fov),Q=Ni.lerp(7.25,8.1,$),me=4.45,Ee=Q/(2*Math.tan(ne/2)*H),we=me/(2*Math.tan(ne/2)),ye=Math.max(5.55,Ee,we);i.x=Ni.lerp(.12,-.18,$),t.position.x=Ni.lerp(.03,-.26,$),t.position.y=Ni.lerp(1.05,1.12,$),t.position.z=i.z+ye,n.copy(t.position),t.aspect=H,t.updateProjectionMatrix(),s.setSize(R,O,!1),t.lookAt(i),t.updateMatrixWorld(),Os(),Fs()},Bs=function(w){let R=wr.getBoundingClientRect();o.x=(w.clientX-R.left)/R.width*2-1,o.y=-((w.clientY-R.top)/R.height)*2+1},Pr=function(){lt.classList.add("is-booted"),Ar?.setAttribute("aria-hidden","false")},Ui=function(){lt.classList.add("is-zooming")},Kn=function(w=r?0:420){lt.classList.remove("is-zooming"),lt.classList.add("is-screen-mode"),window.setTimeout(()=>lt.classList.add("is-screen-ready"),w)},zs=function(w){return ja.find(R=>R.dataset.mccWindow===w)},mi=function(w){w&&(Ir+=1,w.style.zIndex=String(Ir))},en=function(w,R,O){return Math.min(Math.max(w,R),O)},$n=function(w){let R=w?.querySelector("header");!R||!Ar||w.dataset.mccDragReady==="true"||(w.dataset.mccDragReady="true",R.addEventListener("pointerdown",O=>{if(O.button!==0||O.target.closest("button, a, [data-mcc-dynamic-action]"))return;O.preventDefault(),mi(w);let H=Ar.getBoundingClientRect(),$=w.getBoundingClientRect(),ne=O.clientX-$.left,Q=O.clientY-$.top,me=Math.max(0,H.width-$.width),Ee=Math.max(0,H.height-$.height);w.classList.add("is-dragging"),w.style.left=`${en($.left-H.left,0,me)}px`,w.style.top=`${en($.top-H.top,0,Ee)}px`,w.style.right="auto",w.style.bottom="auto";try{R.setPointerCapture?.(O.pointerId)}catch{}let we=Be=>{let Qe=en(Be.clientX-H.left-ne,0,me),rt=en(Be.clientY-H.top-Q,0,Ee);w.style.left=`${Qe}px`,w.style.top=`${rt}px`},ye=()=>{w.classList.remove("is-dragging");try{R.releasePointerCapture?.(O.pointerId)}catch{}window.removeEventListener("pointermove",we),window.removeEventListener("pointerup",ye),window.removeEventListener("pointercancel",ye)};window.addEventListener("pointermove",we),window.addEventListener("pointerup",ye),window.addEventListener("pointercancel",ye)}))},ks=function(w,R){let O=zs(w);O&&(O.classList.toggle("is-closed",!R),O.setAttribute("aria-hidden",R?"false":"true"),R&&mi(O))},Lr=function(w,R,O){let H=document.createElement("button");return H.className=`mcc-window-button mcc-window-button--${w}`,H.type="button",H.setAttribute("aria-label",R),O&&(H.dataset.mccDynamicAction=O),H},sc=function(w){return Vv.find(R=>R.dataset.mccArticleTemplate===w)},ac=function(w){let R=sc(w);if(!R||!Ar)return;Ja+=1;let O=R.dataset.mccArticleTitle||R.dataset.mccArticleFile||"Article",H=document.createElement("section");H.className="mcc-preview-window mcc-article-window",H.setAttribute("role","dialog"),H.setAttribute("aria-label",O),H.dataset.mccArticleWindow=w;let $=(Ja-1)%5;H.style.setProperty("--mcc-doc-window-x",`${260+$*26}px`),H.style.setProperty("--mcc-doc-window-y",`${110+$*24}px`);let ne=document.createElement("header"),Q=document.createElement("span");Q.textContent=O;let me=document.createElement("span");me.className="mcc-window-buttons",me.append(Lr("min",`Minimize ${O}`,"remove"),Lr("max",`Focus ${O}`,"focus"),Lr("close",`Close ${O}`,"remove")),ne.append(Q,me);let Ee=document.createElement("div");Ee.className="mcc-article-window__body",Ee.append(R.content.cloneNode(!0)),Ee.querySelectorAll("a").forEach(we=>{we.setAttribute("rel","noopener")}),H.append(ne,Ee),Ar.append(H),mi(H),$n(H),H.addEventListener("pointerdown",()=>mi(H))},E=function(){if(l)return;if(l=!0,We(1),lt.classList.remove("is-screen-ready"),lt.classList.add("is-booting"),Qi?.setAttribute("disabled","true"),r){k.screenOn.emissiveIntensity=1.25,Re.material=k.screenOn,Ne.intensity=1.2,Pr(),Kn();return}window.setTimeout(Pr,1420),window.setTimeout(Ui,1780),window.setTimeout(Kn,4100),Sd.timeline({defaults:{ease:"power2.inOut"}}).to(qe.rotation,{x:0,y:0,z:.02,duration:.46,ease:"back.out(1.2)"},0).to(qe.position,{x:-1.22,y:.79,z:.72,duration:.82},.08).to(qe.scale,{x:.72,y:.72,z:.72,duration:.62},.2).to(qe.position,{z:.18,duration:.5,ease:"power2.in"},.78).to(qe.scale,{x:.5,y:.5,z:.5,duration:.45,ease:"power2.in"},.84).to(t.position,{x:n.x+.05,y:n.y-.03,z:Math.max(5.1,n.z-.45),duration:1},.08).to(k.screenOn,{emissiveIntensity:1.4,duration:.16,onStart:()=>{Re.material=k.screenOn}},.85).to(Ne,{intensity:1.2,duration:.16},.85).to(k.screenOn,{emissiveIntensity:.18,duration:.12},1.03).to(Ne,{intensity:.32,duration:.12},1.03).to(k.screenOn,{emissiveIntensity:1.75,duration:.2},1.17).to(Ne,{intensity:1.85,duration:.26},1.17).to(lt,{"--mcc-boot-glow":1,duration:.5},1.16).call(Pr,[],1.42).call(Ui,[],1.78).call(Kn,[],4.1)},J=function(w){let R=Math.sin(w*.0014)*.012;if(!l){qe.position.y=Pt+R,k.led.emissiveIntensity=.55+Math.sin(w*.004)*.25;let O=.36+Math.sin(w*.01)*.12+Math.sin(w*.034)*.06-(Math.sin(w*.078)>.94?.18:0);We(O)}t.lookAt(i),t.updateMatrixWorld(),lt.classList.contains("is-screen-mode")||Os(),he(),Fs(),s.render(e,t),window.requestAnimationFrame(J)},r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=new na;e.background=new ze(527111),e.fog=new ia(527111,4.7,9.4);let t=new Rt(42,1,.1,100);t.position.set(.03,1.05,5.55);let i=new P(.12,.25,-.18),n=new P().copy(t.position),s=new kl({canvas:wr,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.outputColorSpace=Lt,s.toneMapping=Ea,s.toneMappingExposure=.98,s.shadowMap.enabled=!0,s.shadowMap.type=vl;let a=new Sa,o=new le,c=[],l=!1,y=d("#b8ae97","50, 45, 34","#7d725c"),S=d("#77705f","20, 18, 15","#4d483e"),x=d("#11130c","245, 234, 205","#202316"),M=f(),C=m(),U=p(384,384,[2.4,2.4],62),A=p(512,512,[2,1.2],88),N=p(256,256,[2,2],48),j=u(1024,512,{scratch:"255, 222, 158",smudge:"0, 0, 0",smudges:120,scratches:230,speckles:2400}),G=u(512,768,{scratch:"255, 244, 210",smudge:"38, 31, 20",smudges:52,scratches:90,speckles:900}),Y=u(768,256,{scratch:"255, 244, 210",smudge:"26, 22, 16",smudges:34,scratches:80,speckles:600}),W=v(),V=g(),k={desk:new _t({map:M,bumpMap:C,bumpScale:.034,color:7357733,roughness:.58,metalness:.03}),wall:new _t({map:x,bumpMap:A,bumpScale:.024,color:2368534,roughness:.98}),plastic:new _t({map:y,bumpMap:U,bumpScale:.014,color:12760990,roughness:.78,metalness:.015}),plasticDark:new _t({map:S,bumpMap:U,bumpScale:.01,color:8485223,roughness:.82}),black:new _t({color:855564,roughness:.9,bumpMap:N,bumpScale:.006}),rubber:new _t({color:1513750,roughness:.94,bumpMap:N,bumpScale:.013}),metal:new _t({color:9078909,roughness:.36,metalness:.45}),slot:new _t({color:263172,roughness:.84}),key:new _t({map:y,bumpMap:U,bumpScale:.006,color:13682605,roughness:.68}),book:new _t({color:2761748,roughness:.85}),screenOff:new _t({color:463376,roughness:.18,metalness:.05,emissive:0}),screenOn:new _t({color:889741,roughness:.22,emissive:492670,emissiveIntensity:0}),led:new _t({color:13238098,emissive:10026783,emissiveIntensity:.7}),amber:new _t({color:16756736,emissive:16751104,emissiveIntensity:.65}),lampBulb:new _t({color:16762477,emissive:16751402,emissiveIntensity:.18,roughness:.22}),lampShadeInner:new _t({color:1052685,roughness:.78,metalness:.02,side:zt}),label:new _t({color:15261640,roughness:.9})},Se=new xa(16314328,1053711,1.42);e.add(Se);let _e=new ms(7978160,.85);_e.position.set(3.1,2.4,2.1),e.add(_e);let se=new ms(16773078,.44);se.position.set(.18,1.7,4.8),se.target.position.set(.12,.08,.62),e.add(se,se.target);let ce=new kn(16769212,.86,5.4,1.55);ce.position.set(2.9,.96,2.6),e.add(ce);let oe=new kn(16757104,.4,5.2,1.85);oe.position.set(-2.65,.08,2.02),e.add(oe);let xe=new ps(16768938,60,8.8,Math.PI/4.3,.58,1.2);xe.position.set(-2.34,3.18,2.76),xe.target.position.set(-1.84,-.56,.96),xe.castShadow=!0,xe.shadow.mapSize.set(2048,2048),e.add(xe,xe.target);let Ne=new kn(697500,0,4.2);Ne.position.set(1.42,.7,.5),e.add(Ne),ie("wall",[8.8,4.8,.18],[0,1.05,-1.62],k.wall,e,!1),ie("desk",[9.2,.34,4.8],[0,-.78,.75],k.desk,e,!1),ie("desk-lip",[9.2,.2,.34],[0,-.64,2.94],k.desk,e,!1),ie("desk-back-shadow",[9.2,.08,.08],[0,-.53,-1.18],k.book,e,!1),Me("desk-contact-grain",j,[8.7,4.25],[0,-.586,.82],e,[-Math.PI/2,0,0],.74),Me("tower-contact-shadow",V,[1.75,.7],[-1.1,-.582,.12],e,[-Math.PI/2,0,0],.72),Me("crt-contact-shadow",V,[3.35,.86],[1.48,-.581,.58],e,[-Math.PI/2,0,0],.58),Me("keyboard-contact-shadow",V,[2.1,.52],[1.46,-.58,1.15],e,[-Math.PI/2,0,0],.52);let re=new Xt;re.position.set(-2.22,-.52,.85),re.rotation.y=.18,e.add(re);let D=new Ze(new xi(.42,.36,.075,36),k.rubber);D.position.set(0,.02,0),D.castShadow=!0,D.receiveShadow=!0,re.add(D);let T=new Ze(new _n(.32,.012,8,38),k.metal);T.position.set(0,.065,0),T.rotation.x=Math.PI/2,T.castShadow=!0,re.add(T);let L=new Ze(new xi(.025,.025,1.15,12),k.black);L.position.set(0,.55,0),L.castShadow=!0,re.add(L);let z=new Xt;z.position.set(-.14,1.18,.02),z.rotation.z=-.38,re.add(z);let b=[new le(.085,.135),new le(.15,.11),new le(.25,.035),new le(.34,-.095),new le(.39,-.19)],F=new cs(b,32);F.computeVertexNormals();let B=new Ze(F,k.black);B.castShadow=!0,B.receiveShadow=!0,z.add(B);let I=new Ze(F.clone(),k.lampShadeInner);z.add(I);let Z=new Ze(new _n(.39,.014,8,36),k.black);Z.position.y=-.19,Z.rotation.x=Math.PI/2,Z.castShadow=!0,z.add(Z);let K=new Ze(new xi(.062,.095,.105,20),k.black);K.position.y=.16,K.castShadow=!0,z.add(K);let te=new Ze(new hs(.058,18,12),k.lampBulb);te.position.set(-.2,1.02,.035),te.castShadow=!1,re.add(te);let ae=new kn(16757335,.22,2.3,1.55);ae.position.copy(te.position),re.add(ae);let ge=new P(-.36,.04,.12),ee=new ps(16757335,.5,3.5,Math.PI/6,.66,1.1);ee.position.copy(te.position),ee.target.position.copy(ge),re.add(ee,ee.target);let ve=new pn({color:16757335,transparent:!0,opacity:.08,depthWrite:!1}),ue=new Ze(new rs(.58,36),ve);ue.rotation.x=-Math.PI/2,ue.scale.set(1.15,.62,1),ue.renderOrder=4,e.add(ue);let fe=new P;he();let be=new Ze(new xi(.18,.16,.42,18),k.rubber);be.position.set(.36,.18,.1),be.castShadow=!0,be.receiveShadow=!0,re.add(be);let ke=new Ze(new _n(.17,.012,8,28),k.metal);ke.position.set(.36,.4,.1),ke.rotation.x=Math.PI/2,ke.castShadow=!0,re.add(ke);let $e=new Ze(new _n(.125,.015,8,24,Math.PI*1.42),k.rubber);$e.position.set(.53,.22,.1),$e.rotation.z=Math.PI/2,$e.castShadow=!0,re.add($e);let Fe=new Xt;Fe.position.set(-1.12,0,-.18),e.add(Fe),ie("tower-body",[1.05,2.85,.88],[0,.62,0],k.plastic,Fe),ie("tower-top-bay",[.78,.34,.055],[0,1.78,.47],k.plasticDark,Fe),ie("tower-mid-bay",[.78,.34,.055],[0,1.33,.475],k.plasticDark,Fe),ie("tower-drive",[.78,.25,.065],[0,.77,.485],k.plasticDark,Fe),ie("tower-slot",[.55,.1,.075],[-.1,.77,.53],k.slot,Fe),ie("tower-eject",[.16,.08,.08],[.31,.77,.535],k.plasticDark,Fe),ie("tower-grille",[.74,.52,.045],[-.07,-.34,.49],k.black,Fe);for(let w=0;w<7;w+=1)ie(`tower-grille-line-${w}`,[.68,.015,.065],[-.07,-.53+w*.07,.535],k.plasticDark,Fe,!1);ie("tower-power",[.2,.25,.08],[.42,.02,.5],k.plasticDark,Fe),ie("tower-reset",[.12,.12,.08],[.42,-.56,.5],k.plasticDark,Fe),ie("tower-led",[.06,.06,.09],[.41,.98,.53],k.led,Fe,!1),ie("tower-turbo",[.06,.06,.09],[.41,-.88,.53],k.led,Fe,!1),Me("tower-front-grime",G,[.98,2.56],[0,.55,.542],Fe,[0,0,0],.48),[[-.43,1.9,.545],[.43,1.9,.545],[-.43,-.86,.545],[.43,-.86,.545]].forEach((w,R)=>{let O=new Ze(new xi(.026,.026,.012,16),k.metal);O.name=`tower-screw-${R}`,O.position.set(...w),O.rotation.x=Math.PI/2,O.castShadow=!0,Fe.add(O)}),ie("tower-side-shadow",[.055,2.72,.78],[-.55,.58,.04],k.plasticDark,Fe,!1),de("tower-label",_(["486 DX2-66"],{width:280,height:120,font:"28px 'Courier New'",ruleWidth:0,background:"#9f9681"}),[.42,.18],[-.25,-.04,.535],Fe);let Mt=new Xt;Mt.position.set(.02,-.23,-.3),Mt.rotation.y=-.04,e.add(Mt);let Te=[2826513,3812118,2040088,4272924];for(let w=0;w<4;w+=1){let R=new _t({color:Te[w],roughness:.82});ie(`book-${w}`,[.18+w*.01,1.45-w*.05,.52],[w*.18,.55-w*.02,0],R,Mt)}let Ce=new Xt;Ce.position.set(1.47,0,-.14),Ce.rotation.y=-.025,e.add(Ce),ie("crt-shell",[2.9,2.02,.66],[0,.7,0],k.plastic,Ce),ie("crt-bezel",[2.38,1.55,.075],[0,.82,.36],k.black,Ce);let Re=ie("crt-screen",[2.15,1.32,.06],[0,.84,.41],k.screenOff,Ce,!1);Me("crt-screen-glass-reflection",W,[2.11,1.28],[0,.84,.446],Ce,[0,0,0],.96);let Je={width:2.15,height:1.32,z:.034};ie("crt-base-neck",[1.02,.25,.58],[0,-.35,-.02],k.plasticDark,Ce),ie("crt-base",[1.76,.3,.88],[0,-.54,0],k.plasticDark,Ce);for(let w=0;w<5;w+=1)ie(`crt-button-${w}`,[.08,.045,.055],[-.32+w*.16,-.14,.36],k.plasticDark,Ce,!1);ie("crt-power",[.17,.12,.07],[.58,-.14,.36],k.plasticDark,Ce),ie("crt-led",[.06,.05,.06],[.84,-.14,.36],k.led,Ce,!1),Me("crt-lower-shell-grime",Y,[2.72,.44],[0,-.22,.365],Ce,[0,0,0],.46),[[-1.22,1.55,.37],[1.22,1.55,.37],[-1.22,-.12,.37],[1.18,-.12,.37]].forEach((w,R)=>{let O=new Ze(new xi(.024,.024,.01,16),k.metal);O.name=`crt-screw-${R}`,O.position.set(...w),O.rotation.x=Math.PI/2,O.castShadow=!0,Ce.add(O)});let ct=new Xt;ct.position.set(1.47,-.58,1.08),ct.rotation.y=-.035,e.add(ct),ie("keyboard-base",[1.86,.14,.66],[0,0,0],k.plasticDark,ct);for(let w=0;w<3;w+=1)for(let R=0;R<12;R+=1)ie("key",[.1,.04,.08],[-.66+R*.12,.09,-.19+w*.12],k.key,ct,!1);ie("keyboard-cable-port",[.18,.055,.06],[-.5,.04,-.36],k.rubber,ct,!1);let fi=new os([new P(.99,-.53,.72),new P(.64,-.555,.53),new P(.05,-.55,.36),new P(-.48,-.54,.43),new P(-.75,-.5,.36)]),Ut=new Ze(new us(fi,72,.018,8,!1),k.rubber);Ut.castShadow=!0,Ut.receiveShadow=!0,e.add(Ut),ie("tower-keyboard-port",[.1,.075,.055],[-.75,-.5,.36],k.rubber,e,!1);let qe=new Xt;qe.name="floppy";let Pt=-.39;qe.position.set(-.82,Pt,1.43),qe.rotation.set(.34,.06,-.08),e.add(qe);let Tn=ie("floppy-body",[.88,.08,.88],[0,0,0],k.black,qe),X=ie("floppy-shutter",[.46,.09,.23],[0,.012,-.25],k.metal,qe);ie("floppy-label-back",[.6,.014,.4],[0,.056,.16],k.label,qe,!1);let qa=de("floppy-label",_(["Middle Class","Capital"],{badge:"A:\\"}),[.58,.36],[0,.066,.16],qe,[-Math.PI/2,0,0]);c.push(Tn,X,qa);let En=1,nt=1,Ir=20,Ja=0;ja.forEach((w,R)=>{w.style.zIndex=String(Ir+R),$n(w),w.addEventListener("pointerdown",()=>mi(w))}),Dm.forEach(w=>{w.addEventListener("click",R=>{R.preventDefault(),ks(w.dataset.mccOpen,!0)})}),Nm.forEach(w=>{w.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation(),ks(w.dataset.mccClose,!1)})}),Um.forEach(w=>{w.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation(),mi(zs(w.dataset.mccFocus))})}),Ar?.addEventListener("click",w=>{let R=w.target.closest("[data-mcc-article-open]");if(R){w.preventDefault(),ac(R.dataset.mccArticleOpen);return}let O=w.target.closest("[data-mcc-dynamic-action]");if(!O)return;w.preventDefault(),w.stopPropagation();let H=O.closest(".mcc-article-window");if(H){if(O.dataset.mccDynamicAction==="remove"){H.remove();return}mi(H)}}),wr.addEventListener("pointermove",w=>{l||(Bs(w),a.setFromCamera(o,t),wr.style.cursor=a.intersectObjects(c,!1).length?"pointer":"")}),wr.addEventListener("pointerdown",w=>{l||(Bs(w),a.setFromCamera(o,t),a.intersectObjects(c,!1).length&&E())}),Qi?.addEventListener("click",E),window.addEventListener("resize",Rr),Rr(),J(0)}})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
