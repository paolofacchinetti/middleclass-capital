(()=>{var Qa="184";var Qd=0,Dc=1,ep=2;var ea=1,Jo=2,Jr=3,Kr=0,qt=1,vi=2,Gi=0,ta=1,Nc=2,Uc=3,Oc=4,tp=5;var $r=100,ip=101,np=102,rp=103,sp=104,ap=200,op=201,lp=202,cp=203,hp=204,up=205,dp=206,pp=207,fp=208,mp=209,gp=210,_p=211,vp=212,xp=213,yp=214,Fc=0,Bc=1,zc=2,Ko=3,kc=4,Gc=5,Vc=6,Hc=7,Mp=0,Sp=1,bp=2,Ri=0,Wc=1,Xc=2,jc=3,qc=4,Yc=5,Zc=6,Jc=7;var Kc=300,Qr=301,Qn=302,$o=303,Qo=304,ia=306,Zn=1e3,En=1001,eo=1002,gi=1003,Tp=1004;var na=1005;var Ot=1006,el=1007;var er=1008;var li=1009,$c=1010,Qc=1011,es=1012,tl=1013,hn=1014,Pi=1015,Vi=1016,il=1017,nl=1018,ts=1020,eh=35902,th=35899,wp=1021,Ep=1022,Ii=1023,Ln=1026,tr=1027,ih=1028,rl=1029,ir=1030,nh=1031;var rh=1033,sl=33776,al=33777,ol=33778,ll=33779,sh=35840,ah=35841,oh=35842,lh=35843,ch=36196,hh=37492,uh=37496,dh=37488,ph=37489,cl=37490,fh=37491,mh=37808,gh=37809,_h=37810,vh=37811,xh=37812,yh=37813,Mh=37814,Sh=37815,bh=37816,Th=37817,wh=37818,Eh=37819,Ah=37820,Ch=37821,Rh=36492,Ph=36494,Ih=36495,Lh=36283,Dh=36284,hl=36285,Nh=36286;var Es=2300,to=2301,$a=2302,xc=2303,yc=2400,Mc=2401,Sc=2402;var Uh=0,Ap=1,nr="",Rt="srgb",As="srgb-linear",Cs="linear",Ze="srgb";var Yn=7680;var Cp=512,Rp=513,Pp=514,ul=515,Ip=516,Lp=517,dl=518,Dp=519,bc=35044;var Oh="300 es",rn=2e3,Or=2001;function Dm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Rs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Np(){let r=Rs("canvas");return r.style.display="block",r}var vd={},Fr=null;function Fh(...r){let e="THREE."+r.shift();Fr?Fr("log",e,...r):console.log(e,...r)}function Up(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Te(...r){let e="THREE."+(r=Up(r)).shift();if(Fr)Fr("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ee(...r){let e="THREE."+(r=Up(r)).shift();if(Fr)Fr("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function io(...r){let e=r.join(" ");e in vd||(vd[e]=!0,Te(...r))}function Op(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Fp={[Fc]:1,[zc]:6,[kc]:7,[Ko]:5,[Bc]:0,[Vc]:2,[Hc]:4,[Gc]:3},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=1234567,Nr=Math.PI/180,Jn=180/Math.PI;function rr(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Nt[255&r]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[255&e]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[63&t|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[255&i]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function ke(r,e,t){return Math.max(e,Math.min(t,r))}function Tc(r,e){return(r%e+e)%e}function bs(r,e,t){return(1-t)*r+t*e}function Dr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var sr={DEG2RAD:Nr,RAD2DEG:Jn,generateUUID:rr,clamp:ke,euclideanModulo:Tc,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:bs,damp:function(r,e,t,i){return bs(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(Tc(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(xd=r);let e=xd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Nr},radToDeg:function(r){return r*Jn},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":r.set(o*h,c*d,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*p,o*h,o*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Gt,denormalize:Dr},Vh=class Vh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vh.prototype.isVector2=!0;var le=Vh,_i=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3],f=s[a+0],p=s[a+1],m=s[a+2],u=s[a+3];if(d!==u||c!==f||l!==p||h!==m){let v=c*f+l*p+h*m+d*u;v<0&&(f=-f,p=-p,m=-m,u=-u,v=-v);let _=1-o;if(v<.9995){let g=Math.acos(v),x=Math.sin(g);_=Math.sin(_*g)/x,c=c*_+f*(o=Math.sin(o*g)/x),l=l*_+p*o,h=h*_+m*o,d=d*_+u*o}else{c=c*_+f*o,l=l*_+p*o,h=h*_+m*o,d=d*_+u*o;let g=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=g,l*=g,h*=g,d*=g}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=s[a],f=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*d+c*p-l*f,e[t+1]=c*m+h*f+l*d-o*p,e[t+2]=l*m+h*p+o*f-c*d,e[t+3]=h*m-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(s/2),f=c(i/2),p=c(n/2),m=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"YZX":this._x=f*h*d+l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d-f*p*m;break;case"XZY":this._x=f*h*d-l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d+f*p*m;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hh=class Hh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=n+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hh.prototype.isVector3=!0;var R=Hh,Xl=new R,yd=new _i,Wh=class Wh{constructor(e,t,i,n,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],p=i[5],m=i[8],u=n[0],v=n[3],_=n[6],g=n[1],x=n[4],y=n[7],M=n[2],S=n[5],A=n[8];return s[0]=a*u+o*g+c*M,s[3]=a*v+o*x+c*S,s[6]=a*_+o*y+c*A,s[1]=l*u+h*g+d*M,s[4]=l*v+h*x+d*S,s[7]=l*_+h*y+d*A,s[2]=f*u+p*g+m*M,s[5]=f*v+p*x+m*S,s[8]=f*_+p*y+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*s,p=l*s-a*c,m=t*d+i*f+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let u=1/m;return e[0]=d*u,e[1]=(n*l-h*i)*u,e[2]=(o*i-n*a)*u,e[3]=f*u,e[4]=(h*t-n*c)*u,e[5]=(n*s-o*t)*u,e[6]=p*u,e[7]=(i*c-l*t)*u,e[8]=(a*t-i*s)*u,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wh.prototype.isMatrix3=!0;var Ue=Wh,jl=new Ue,Md=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sd=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nm(){let r={enabled:!0,workingColorSpace:As,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ze&&(n.r=nn(n.r),n.g=nn(n.g),n.b=nn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(n.r=Ur(n.r),n.g=Ur(n.g),n.b=Ur(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?Cs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[As]:{primaries:e,whitePoint:i,transfer:Cs,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:Ze,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),r}var He=Nm();function nn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ur(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Sr,no=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=Rs("canvas")),Sr.width=e.width,Sr.height=e.height;let n=Sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*nn(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*nn(t[i]/255)):t[i]=nn(t[i]);return{data:t,width:e.width,height:e.height}}return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Um=0,Br=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(ql(n[a].image)):s.push(ql(n[a]))}else s=ql(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function ql(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?no.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var Om=0,Yl=new R,Vt=class r extends ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=rr(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:Te(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null,Vt.DEFAULT_MAPPING=Kc,Vt.DEFAULT_ANISOTROPY=1;var Xh=class Xh{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],m=c[9],u=c[2],v=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-u)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+u)<.1&&Math.abs(m+v)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,y=(p+1)/2,M=(_+1)/2,S=(h+f)/4,A=(d+u)/4,D=(m+v)/4;return x>y&&x>M?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=S/i,s=A/i):y>M?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=S/n,s=D/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=A/s,n=D/s),this.set(i,n,s,t),this}let g=Math.sqrt((v-m)*(v-m)+(d-u)*(d-u)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(v-m)/g,this.y=(d-u)/g,this.z=(f-h)/g,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;var Ke=Xh,ro=class extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new Vt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends ro{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ps=class extends Vt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=gi,this.minFilter=gi,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends Vt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=gi,this.minFilter=gi,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zo=class Zo{constructor(e,t,i,n,s,a,o,c,l,h,d,f,p,m,u,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,d,f,p,m,u,v)}set(e,t,i,n,s,a,o,c,l,h,d,f,p,m,u,v){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=n,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=d,_[14]=f,_[3]=p,_[7]=m,_[11]=u,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=a*h,p=a*d,m=o*h,u=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+m*l,t[5]=f-u*l,t[9]=-o*c,t[2]=u-f*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,p=c*d,m=l*h,u=l*d;t[0]=f+u*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=u+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,p=c*d,m=l*h,u=l*d;t[0]=f-u*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=u-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,p=a*d,m=o*h,u=o*d;t[0]=c*h,t[4]=m*l-p,t[8]=f*l+u,t[1]=c*d,t[5]=u*l+f,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,m=o*c,u=o*l;t[0]=c*h,t[4]=u-f*d,t[8]=m*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+m,t[10]=f-u*d}else if(e.order==="XZY"){let f=a*c,p=a*l,m=o*c,u=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+u,t[5]=a*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=u*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fm,e,Bm)}lookAt(e,t,i){let n=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),vn.crossVectors(i,ei),vn.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),vn.crossVectors(i,ei)),vn.normalize(),wa.crossVectors(ei,vn),n[0]=vn.x,n[4]=wa.x,n[8]=ei.x,n[1]=vn.y,n[5]=wa.y,n[9]=ei.y,n[2]=vn.z,n[6]=wa.z,n[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],p=i[13],m=i[2],u=i[6],v=i[10],_=i[14],g=i[3],x=i[7],y=i[11],M=i[15],S=n[0],A=n[4],D=n[8],w=n[12],L=n[1],V=n[5],B=n[9],H=n[13],k=n[2],z=n[6],X=n[10],W=n[14],oe=n[3],pe=n[7],Me=n[11],me=n[15];return s[0]=a*S+o*L+c*k+l*oe,s[4]=a*A+o*V+c*z+l*pe,s[8]=a*D+o*B+c*X+l*Me,s[12]=a*w+o*H+c*W+l*me,s[1]=h*S+d*L+f*k+p*oe,s[5]=h*A+d*V+f*z+p*pe,s[9]=h*D+d*B+f*X+p*Me,s[13]=h*w+d*H+f*W+p*me,s[2]=m*S+u*L+v*k+_*oe,s[6]=m*A+u*V+v*z+_*pe,s[10]=m*D+u*B+v*X+_*Me,s[14]=m*w+u*H+v*W+_*me,s[3]=g*S+x*L+y*k+M*oe,s[7]=g*A+x*V+y*z+M*pe,s[11]=g*D+x*B+y*X+M*Me,s[15]=g*w+x*H+y*W+M*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],m=e[3],u=e[7],v=e[11],_=e[15],g=c*p-l*f,x=o*p-l*d,y=o*f-c*d,M=a*p-l*h,S=a*f-c*h,A=a*d-o*h;return t*(u*g-v*x+_*y)-i*(m*g-v*M+_*S)+n*(m*x-u*M+_*A)-s*(m*y-u*S+v*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],m=e[12],u=e[13],v=e[14],_=e[15],g=t*o-i*a,x=t*c-n*a,y=t*l-s*a,M=i*c-n*o,S=i*l-s*o,A=n*l-s*c,D=h*u-d*m,w=h*v-f*m,L=h*_-p*m,V=d*v-f*u,B=d*_-p*u,H=f*_-p*v,k=g*H-x*B+y*V+M*L-S*w+A*D;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/k;return e[0]=(o*H-c*B+l*V)*z,e[1]=(n*B-i*H-s*V)*z,e[2]=(u*A-v*S+_*M)*z,e[3]=(f*S-d*A-p*M)*z,e[4]=(c*L-a*H-l*w)*z,e[5]=(t*H-n*L+s*w)*z,e[6]=(v*y-m*A-_*x)*z,e[7]=(h*A-f*y+p*x)*z,e[8]=(a*B-o*L+l*D)*z,e[9]=(i*L-t*B-s*D)*z,e[10]=(m*S-u*y+_*g)*z,e[11]=(d*y-h*S-p*g)*z,e[12]=(o*w-a*V-c*D)*z,e[13]=(t*V-i*w+n*D)*z,e[14]=(u*x-m*M-v*g)*z,e[15]=(h*M-d*x+f*g)*z,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,f=s*l,p=s*h,m=s*d,u=a*h,v=a*d,_=o*d,g=c*l,x=c*h,y=c*d,M=i.x,S=i.y,A=i.z;return n[0]=(1-(u+_))*M,n[1]=(p+y)*M,n[2]=(m-x)*M,n[3]=0,n[4]=(p-y)*S,n[5]=(1-(f+_))*S,n[6]=(v+g)*S,n[7]=0,n[8]=(m+x)*A,n[9]=(v-g)*A,n[10]=(1-(f+u))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=br.set(n[0],n[1],n[2]).length(),o=br.set(n[4],n[5],n[6]).length(),c=br.set(n[8],n[9],n[10]).length();s<0&&(a=-a),wi.copy(this);let l=1/a,h=1/o,d=1/c;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,t.setFromRotationMatrix(wi),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(i-n),f=(t+e)/(t-e),p=(i+n)/(i-n),m,u;if(c)m=s/(a-s),u=a*s/(a-s);else if(o===rn)m=-(a+s)/(a-s),u=-2*a*s/(a-s);else{if(o!==Or)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),u=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=u,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-n),f=-(t+e)/(t-e),p=-(i+n)/(i-n),m,u;if(c)m=1/(a-s),u=a/(a-s);else if(o===rn)m=-2/(a-s),u=-(a+s)/(a-s);else{if(o!==Or)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(a-s),u=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=u,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Zo.prototype.isMatrix4=!0;var Be=Zo,br=new R,wi=new Be,Fm=new R(0,0,0),Bm=new R(1,1,1),vn=new R,wa=new R,ei=new R,bd=new Be,Td=new _i,sn=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],f=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},zm=0,wd=new R,Tr=new _i,Ji=new Be,Ea=new R,_s=new R,km=new R,Gm=new _i,Ed=new R(1,0,0),Ad=new R(0,1,0),Cd=new R(0,0,1),Rd={type:"added"},Vm={type:"removed"},wr={type:"childadded",child:null},Zl={type:"childremoved",child:null},Pt=class r extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new R,t=new sn,i=new _i,n=new R(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ue}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Ed,e)}rotateY(e){return this.rotateOnAxis(Ad,e)}rotateZ(e){return this.rotateOnAxis(Cd,e)}translateOnAxis(e,t){return wd.copy(e).applyQuaternion(this.quaternion),this.position.add(wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ed,e)}translateY(e){return this.translateOnAxis(Ad,e)}translateZ(e){return this.translateOnAxis(Cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ea.copy(e):Ea.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(_s,Ea,this.up):Ji.lookAt(Ea,_s,this.up),this.quaternion.setFromRotationMatrix(Ji),n&&(Ji.extractRotation(n.matrixWorld),Tr.setFromRotationMatrix(Ji),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ee("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rd),wr.child=e,this.dispatchEvent(wr),wr.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vm),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rd),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Pt.DEFAULT_UP=new R(0,1,0),Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hm={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let u of e.hand.values()){let v=t.getJointPose(u,i),_=this._getHandJoint(l,u);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Jl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=He.workingColorSpace){if(e=Tc(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Jl(a,s,e+1/3),this.g=Jl(a,s,e),this.b=Jl(a,s,e-1/3)}return He.colorSpaceToWorking(this,n),this}setStyle(e,t=Rt){function i(s){s!==void 0&&parseFloat(s)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=Bp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return He.workingToColorSpace(Ut.copy(this),e),65536*Math.round(ke(255*Ut.r,0,255))+256*Math.round(ke(255*Ut.g,0,255))+Math.round(ke(255*Ut.b,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Ut.copy(this),t);let i=Ut.r,n=Ut.g,s=Ut.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-s)/d+(n<s?6:0);break;case n:c=(s-i)/d+2;break;case s:c=(i-n)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Rt){He.workingToColorSpace(Ut.copy(this),e);let t=Ut.r,i=Ut.g,n=Ut.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(Aa);let i=bs(xn.h,Aa.h,t),n=bs(xn.s,Aa.s,t),s=bs(xn.l,Aa.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new Oe;Oe.NAMES=Bp;var Is=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ls=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new R,Ki=new R,Kl=new R,$i=new R,Er=new R,Ar=new R,Pd=new R,$l=new R,Ql=new R,ec=new R,tc=new Ke,ic=new Ke,nc=new Ke,tn=class r{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ei.subVectors(e,t),n.cross(Ei);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ei.subVectors(n,t),Ki.subVectors(i,t),Kl.subVectors(e,t);let a=Ei.dot(Ei),o=Ei.dot(Ki),c=Ei.dot(Kl),l=Ki.dot(Ki),h=Ki.dot(Kl),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(l*c-o*h)*f,m=(a*h-o*c)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,$i)!==null&&$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,$i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$i.x),c.addScaledVector(a,$i.y),c.addScaledVector(o,$i.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return tc.setScalar(0),ic.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,i),nc.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(tc,s.x),a.addScaledVector(ic,s.y),a.addScaledVector(nc,s.z),a}static isFrontFacing(e,t,i,n){return Ei.subVectors(i,t),Ki.subVectors(e,t),Ei.cross(Ki).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),.5*Ei.cross(Ki).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Er.subVectors(n,i),Ar.subVectors(s,i),$l.subVectors(e,i);let c=Er.dot($l),l=Ar.dot($l);if(c<=0&&l<=0)return t.copy(i);Ql.subVectors(e,n);let h=Er.dot(Ql),d=Ar.dot(Ql);if(h>=0&&d<=h)return t.copy(n);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Er,a);ec.subVectors(e,s);let p=Er.dot(ec),m=Ar.dot(ec);if(m>=0&&p<=m)return t.copy(s);let u=p*l-c*m;if(u<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(Ar,o);let v=h*m-p*d;if(v<=0&&d-h>=0&&p-m>=0)return Pd.subVectors(s,n),o=(d-h)/(d-h+(p-m)),t.copy(n).addScaledVector(Pd,o);let _=1/(v+u+f);return a=u*_,o=f*_,t.copy(i).addScaledVector(Er,a).addScaledVector(Ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ai):Ai.fromBufferAttribute(s,a),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Ra.subVectors(this.max,vs),Cr.subVectors(e.a,vs),Rr.subVectors(e.b,vs),Pr.subVectors(e.c,vs),yn.subVectors(Rr,Cr),Mn.subVectors(Pr,Rr),Wn.subVectors(Cr,Pr);let t=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Wn.z,Wn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Wn.z,0,-Wn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Wn.y,Wn.x,0];return!!rc(t,Cr,Rr,Pr,Ra)&&(t=[1,0,0,0,1,0,0,0,1],!!rc(t,Cr,Rr,Pr,Ra)&&(Pa.crossVectors(yn,Mn),t=[Pa.x,Pa.y,Pa.z],rc(t,Cr,Rr,Pr,Ra)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ai).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qi=[new R,new R,new R,new R,new R,new R,new R,new R],Ai=new R,Ca=new si,Cr=new R,Rr=new R,Pr=new R,yn=new R,Mn=new R,Wn=new R,vs=new R,Ra=new R,Pa=new R,Xn=new R;function rc(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Xn.fromArray(r,s);let o=n.x*Math.abs(Xn.x)+n.y*Math.abs(Xn.y)+n.z*Math.abs(Xn.z),c=e.dot(Xn),l=t.dot(Xn),h=i.dot(Xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zv=Wm();function Wm(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var xt=new R,Ia=new le,Xm=0,ni=class extends ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ds=class extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ns=class extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ae=class extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}},jm=new si,xs=new R,sc=new R,Ci=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jm.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);let t=xs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(xs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(sc)),this.expandByPoint(xs.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qm=0,mi=new Be,ac=new Pt,Ir=new R,ti=new si,ys=new si,Et=new R,tt=class r extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1}(e)?Ns:Ds)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,i){return mi.makeTranslation(e,t,i),this.applyMatrix4(mi),this}scale(e,t,i){return mi.makeScale(e,t,i),this.applyMatrix4(mi),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new R,1/0);if(e){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(ti.min,ys.min),ti.expandByPoint(Et),Et.addVectors(ti.max,ys.max),ti.expandByPoint(Et)):(ti.expandByPoint(ys.min),ti.expandByPoint(ys.max))}ti.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(Ir.fromBufferAttribute(e,l),Et.add(Ir)),n=Math.max(n,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<i.count;D++)o[D]=new R,c[D]=new R;let l=new R,h=new R,d=new R,f=new le,p=new le,m=new le,u=new R,v=new R;function _(D,w,L){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,L),h.sub(l),d.sub(l),p.sub(f),m.sub(f);let V=1/(p.x*m.y-m.x*p.y);isFinite(V)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(V),v.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(V),o[D].add(u),o[w].add(u),o[L].add(u),c[D].add(v),c[w].add(v),c[L].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let D=0,w=g.length;D<w;++D){let L=g[D],V=L.start;for(let B=V,H=V+L.count;B<H;B+=3)_(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let x=new R,y=new R,M=new R,S=new R;function A(D){M.fromBufferAttribute(n,D),S.copy(M);let w=o[D];x.copy(w),x.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(S,w);let L=y.dot(c[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,L)}for(let D=0,w=g.length;D<w;++D){let L=g[D],V=L.start;for(let B=V,H=V+L.count;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let n=new R,s=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),u=e.getX(f+1),v=e.getX(f+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,u),a.fromBufferAttribute(t,v),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,u),l.fromBufferAttribute(i,v),o.add(h),c.add(h),l.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(u,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)n.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let u=0,v=c.length;u<v;u++){p=o.isInterleavedBufferAttribute?c[u]*o.data.stride+o.offset:c[u]*h;for(let _=0;_<h;_++)f[m++]=l[p++]}return new ni(f,h,d)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let f=e(l[h],i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var kv=new R;var Ym=0,an=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:Te(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gv=new R,Vv=new R,Hv=new R,Wv=new le,Xv=new le,jv=new Be,qv=new R,Yv=new R,Zv=new R,Jv=new le,Kv=new le,$v=new le;var Qv=new R,ex=new R;var en=new R,oc=new R,La=new R,Sn=new R,lc=new R,Da=new R,cc=new R,An=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){oc.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(oc);let s=.5*e.distanceTo(t),a=-this.direction.dot(La),o=Sn.dot(this.direction),c=-Sn.dot(La),l=Sn.lengthSq(),h=Math.abs(1-a*a),d,f,p,m;if(h>0)if(d=a*c-o,f=a*o-c,m=s*h,d>=0)if(f>=-m)if(f<=m){let u=1/h;d*=u,f*=u,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(oc).addScaledVector(La,f),p}intersectSphere(e,t){en.subVectors(e.center,this.origin);let i=en.dot(this.direction),n=en.dot(en)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,i,n,s){lc.subVectors(t,e),Da.subVectors(i,e),cc.crossVectors(lc,Da);let a,o=this.direction.dot(cc);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Sn.subVectors(this.origin,e);let c=a*this.direction.dot(Da.crossVectors(Sn,Da));if(c<0)return null;let l=a*this.direction.dot(lc.cross(Sn));if(l<0||c+l>o)return null;let h=-a*Sn.dot(cc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kn=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Id=new Be,jn=new An,Na=new Ci,Ld=new R,Ua=new R,Oa=new R,Fa=new R,hc=new R,Ba=new R,Dd=new R,za=new R,ft=class extends Pt{constructor(e=new tt,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Ba.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(hc.fromBufferAttribute(d,e),a?Ba.addScaledVector(hc,h):Ba.addScaledVector(hc.sub(t),h))}t.add(Ba)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(s),jn.copy(e.ray).recast(e.near),Na.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Na,Ld)===null||jn.origin.distanceToSquared(Ld)>(e.far-e.near)**2))return;Id.copy(s).invert(),jn.copy(e.ray).applyMatrix4(Id),i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,jn)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,u=f.length;m<u;m++){let v=f[m],_=a[v.materialIndex];for(let g=Math.max(v.start,p.start),x=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));g<x;g+=3)n=ka(this,_,e,i,l,h,d,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),u=Math.min(o.count,p.start+p.count);m<u;m+=3)n=ka(this,a,e,i,l,h,d,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let m=0,u=f.length;m<u;m++){let v=f[m],_=a[v.materialIndex];for(let g=Math.max(v.start,p.start),x=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));g<x;g+=3)n=ka(this,_,e,i,l,h,d,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),u=Math.min(c.count,p.start+p.count);m<u;m+=3)n=ka(this,a,e,i,l,h,d,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}};function ka(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,Ua),r.getVertexPosition(c,Oa),r.getVertexPosition(l,Fa);let h=function(d,f,p,m,u,v,_,g){let x;if(x=f.side===1?m.intersectTriangle(_,v,u,!0,g):m.intersectTriangle(u,v,_,f.side===0,g),x===null)return null;za.copy(g),za.applyMatrix4(d.matrixWorld);let y=p.ray.origin.distanceTo(za);return y<p.near||y>p.far?null:{distance:y,point:za.clone(),object:d}}(r,e,t,i,Ua,Oa,Fa,Dd);if(h){let d=new R;tn.getBarycoord(Dd,Ua,Oa,Fa,d),n&&(h.uv=tn.getInterpolatedAttribute(n,o,c,l,d,new le)),s&&(h.uv1=tn.getInterpolatedAttribute(s,o,c,l,d,new le)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,c,l,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new R,materialIndex:0};tn.getNormal(Ua,Oa,Fa,f.normal),h.face=f,h.barycoord=d}return h}var tx=new Ke,ix=new Ke,nx=new Ke,rx=new Ke,sx=new Be,ax=new R,ox=new Ci,lx=new Be,cx=new An;var ao=class extends Vt{constructor(e=null,t=1,i=1,n,s,a,o,c,l=1003,h=1003,d,f){super(null,a,o,c,l,h,n,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hx=new Be,ux=new Be;var dx=new Be,px=new Be;var fx=new si,mx=new Be,gx=new ft,_x=new Ci;var uc=new R,Zm=new R,Jm=new Ue,Bi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=uc.subVectors(i,t).cross(Zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(uc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Jm.getNormalMatrix(e),n=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new Ci,Km=new le(.5,.5),Ga=new R,Cn=class{constructor(e=new Bi,t=new Bi,i=new Bi,n=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],f=s[6],p=s[7],m=s[8],u=s[9],v=s[10],_=s[11],g=s[12],x=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-a,p-h,_-m,M-g).normalize(),n[1].setComponents(l+a,p+h,_+m,M+g).normalize(),n[2].setComponents(l+o,p+d,_+u,M+x).normalize(),n[3].setComponents(l-o,p-d,_-u,M-x).normalize(),i)n[4].setComponents(c,f,v,y).normalize(),n[5].setComponents(l-c,p-f,_-v,M-y).normalize();else if(n[4].setComponents(l-c,p-f,_-v,M-y).normalize(),t===rn)n[5].setComponents(l+c,p+f,_+v,M+y).normalize();else{if(t!==Or)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,f,v,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);let t=Km.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ga.x=n.normal.x>0?e.max.x:e.min.x,Ga.y=n.normal.y>0?e.max.y:e.min.y,Ga.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ui=new Be,Oi=new Cn,oo=class r{constructor(){this.coordinateSystem=rn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Oi.setFromProjectionMatrix(Ui,n.coordinateSystem,n.reversedDepth),Oi.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Oi.setFromProjectionMatrix(Ui,n.coordinateSystem,n.reversedDepth),Oi.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Oi.setFromProjectionMatrix(Ui,n.coordinateSystem,n.reversedDepth),Oi.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Oi.setFromProjectionMatrix(Ui,n.coordinateSystem,n.reversedDepth),Oi.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Oi.setFromProjectionMatrix(Ui,n.coordinateSystem,n.reversedDepth),Oi.containsPoint(e))return!0}return!1}clone(){return new r}};var wc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},vx=new Be,xx=new Oe(1,1,1),yx=new Cn,Mx=new oo,Sx=new si,bx=new Ci,Tx=new R,wx=new R,Ex=new R,Ax=new wc,Cx=new ft;var Gr=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lo=new R,co=new R,Nd=new Be,Ms=new An,Va=new Ci,dc=new R,Ud=new R,ho=class extends Pt{constructor(e=new tt,t=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)lo.fromBufferAttribute(t,n-1),co.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=lo.distanceTo(co);e.setAttribute("lineDistance",new Ae(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(n),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Nd.copy(n).invert(),Ms.copy(e.ray).applyMatrix4(Nd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=f,u=p-1;m<u;m+=l){let v=h.getX(m),_=h.getX(m+1),g=Ha(this,e,Ms,c,v,_,m);g&&t.push(g)}if(this.isLineLoop){let m=h.getX(p-1),u=h.getX(f),v=Ha(this,e,Ms,c,m,u,p-1);v&&t.push(v)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=f,u=p-1;m<u;m+=l){let v=Ha(this,e,Ms,c,m,m+1,m);v&&t.push(v)}if(this.isLineLoop){let m=Ha(this,e,Ms,c,p-1,f,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Ha(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(lo.fromBufferAttribute(o,n),co.fromBufferAttribute(o,s),t.distanceSqToSegment(lo,co,dc,Ud)>i)return;dc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(dc);return c<e.near||c>e.far?void 0:{distance:c,point:Ud.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Od=new R,Fd=new R,Us=class extends ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Od.fromBufferAttribute(t,n),Fd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Od.distanceTo(Fd);e.setAttribute("lineDistance",new Ae(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rx=new Be,Px=new An,Ix=new Ci,Lx=new R;var Os=class extends Vt{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vr=class extends Vt{constructor(e,t,i,n,s,a,o,c,l){super(e,t,i,n,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var on=class extends Vt{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,d=1){if(h!==Ln&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:d},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},uo=class extends on{constructor(e,t=1014,i=301,n,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fs=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ln=class r extends tt{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,p=0;function m(u,v,_,g,x,y,M,S,A,D,w){let L=y/A,V=M/D,B=y/2,H=M/2,k=S/2,z=A+1,X=D+1,W=0,oe=0,pe=new R;for(let Me=0;Me<X;Me++){let me=Me*V-H;for(let xe=0;xe<z;xe++){let re=xe*L-B;pe[u]=re*g,pe[v]=me*x,pe[_]=k,l.push(pe.x,pe.y,pe.z),pe[u]=0,pe[v]=0,pe[_]=S>0?1:-1,h.push(pe.x,pe.y,pe.z),d.push(xe/A),d.push(1-Me/D),W+=1}}for(let Me=0;Me<D;Me++)for(let me=0;me<A;me++){let xe=f+me+z*Me,re=f+me+z*(Me+1),ce=f+(me+1)+z*(Me+1),se=f+(me+1)+z*Me;c.push(xe,re,se),c.push(re,ce,se),oe+=6}o.addGroup(p,oe,w),p+=oe,f+=W}m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},po=class r extends tt{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,f=t,p=2*d+f,m=2*i+s,u=n+1,v=new R,_=new R;for(let g=0;g<=m;g++){let x=0,y=0,M=0,S=0;if(g<=i){let w=g/i,L=w*Math.PI/2;y=-h-e*Math.cos(L),M=e*Math.sin(L),S=-e*Math.cos(L),x=w*d}else if(g<=i+s){let w=(g-i)/s;y=w*t-h,M=e,S=0,x=d+w*f}else{let w=(g-i-s)/i,L=w*Math.PI/2;y=h+e*Math.sin(L),M=e*Math.cos(L),S=e*Math.sin(L),x=d+f+w*d}let A=Math.max(0,Math.min(1,x/p)),D=0;g===0?D=.5/n:g===m&&(D=-.5/n);for(let w=0;w<=n;w++){let L=w/n,V=L*Math.PI*2,B=Math.sin(V),H=Math.cos(V);_.x=-M*H,_.y=y,_.z=M*B,o.push(_.x,_.y,_.z),v.set(-M*H,S,M*B),v.normalize(),c.push(v.x,v.y,v.z),l.push(L+D,A)}if(g>0){let w=(g-1)*u;for(let L=0;L<n;L++){let V=w+L,B=w+L+1,H=g*u+L,k=g*u+L+1;a.push(V,B,H),a.push(B,k,H)}}}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},fo=class r extends tt{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new R,h=new le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=i+d/t*n;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cn=class r extends tt{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],f=[],p=[],m=0,u=[],v=i/2,_=0;function g(x){let y=m,M=new le,S=new R,A=0,D=x===!0?e:t,w=x===!0?1:-1;for(let V=1;V<=n;V++)d.push(0,v*w,0),f.push(0,w,0),p.push(.5,.5),m++;let L=m;for(let V=0;V<=n;V++){let B=V/n*c+o,H=Math.cos(B),k=Math.sin(B);S.x=D*k,S.y=v*w,S.z=D*H,d.push(S.x,S.y,S.z),f.push(0,w,0),M.x=.5*H+.5,M.y=.5*k*w+.5,p.push(M.x,M.y),m++}for(let V=0;V<n;V++){let B=y+V,H=L+V;x===!0?h.push(H,H+1,B):h.push(H+1,H,B),A+=3}l.addGroup(_,A,x===!0?1:2),_+=A}(function(){let x=new R,y=new R,M=0,S=(t-e)/i;for(let A=0;A<=s;A++){let D=[],w=A/s,L=w*(t-e)+e;for(let V=0;V<=n;V++){let B=V/n,H=B*c+o,k=Math.sin(H),z=Math.cos(H);y.x=L*k,y.y=-w*i+v,y.z=L*z,d.push(y.x,y.y,y.z),x.set(k,S,z).normalize(),f.push(x.x,x.y,x.z),p.push(B,1-w),D.push(m++)}u.push(D)}for(let A=0;A<n;A++)for(let D=0;D<s;D++){let w=u[D][A],L=u[D+1][A],V=u[D+1][A+1],B=u[D][A+1];(e>0||D!==0)&&(h.push(w,L,B),M+=3),(t>0||D!==s-1)&&(h.push(L,V,B),M+=3)}l.addGroup(_,M,0),_+=M})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mo=class r extends cn{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class r extends tt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(p,m,u,v){let _=v+1,g=[];for(let x=0;x<=_;x++){g[x]=[];let y=p.clone().lerp(u,x/_),M=m.clone().lerp(u,x/_),S=_-x;for(let A=0;A<=S;A++)g[x][A]=A===0&&x===_?y:y.clone().lerp(M,A/S)}for(let x=0;x<_;x++)for(let y=0;y<2*(_-x)-1;y++){let M=Math.floor(y/2);y%2==0?(c(g[x][M+1]),c(g[x+1][M]),c(g[x][M])):(c(g[x][M+1]),c(g[x+1][M+1]),c(g[x+1][M]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,m){let u=3*p;m.x=e[u+0],m.y=e[u+1],m.z=e[u+2]}function h(p,m,u,v){v<0&&p.x===1&&(a[m]=p.x-1),u.x===0&&u.z===0&&(a[m]=v/2/Math.PI+.5)}function d(p){return Math.atan2(p.z,-p.x)}function f(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new R,u=new R,v=new R;for(let _=0;_<t.length;_+=3)l(t[_+0],m),l(t[_+1],u),l(t[_+2],v),o(m,u,v,p)})(n),function(p){let m=new R;for(let u=0;u<s.length;u+=3)m.x=s[u+0],m.y=s[u+1],m.z=s[u+2],m.normalize().multiplyScalar(p),s[u+0]=m.x,s[u+1]=m.y,s[u+2]=m.z}(i),function(){let p=new R;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let u=d(p)/2/Math.PI+.5,v=f(p)/Math.PI+.5;a.push(u,1-v)}(function(){let m=new R,u=new R,v=new R,_=new R,g=new le,x=new le,y=new le;for(let M=0,S=0;M<s.length;M+=9,S+=6){m.set(s[M+0],s[M+1],s[M+2]),u.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),g.set(a[S+0],a[S+1]),x.set(a[S+2],a[S+3]),y.set(a[S+4],a[S+5]),_.copy(m).add(u).add(v).divideScalar(3);let A=d(_);h(g,S+0,m,A),h(x,S+2,u,A),h(y,S+4,v,A)}})(),function(){for(let m=0;m<a.length;m+=6){let u=a[m+0],v=a[m+2],_=a[m+4],g=Math.max(u,v,_),x=Math.min(u,v,_);g>.9&&x<.1&&(u<.2&&(a[m+0]+=1),v<.2&&(a[m+2]+=1),_<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},go=class r extends Rn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Wa=new R,Xa=new R,pc=new R,ja=new tn,Hr=class extends tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Nr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),f={},p=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:u,b:v,c:_}=ja;if(u.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),ja.getNormal(pc),d[0]=`${Math.round(u.x*n)},${Math.round(u.y*n)},${Math.round(u.z*n)}`,d[1]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,d[2]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let g=0;g<3;g++){let x=(g+1)%3,y=d[g],M=d[x],S=ja[h[g]],A=ja[h[x]],D=`${y}_${M}`,w=`${M}_${y}`;w in f&&f[w]?(pc.dot(f[w].normal)<=s&&(p.push(S.x,S.y,S.z),p.push(A.x,A.y,A.z)),f[w]=null):D in f||(f[D]={index0:l[g],index1:l[x],normal:pc.clone()})}}for(let m in f)if(f[m]){let{index0:u,index1:v}=f[m];Wa.fromBufferAttribute(o,u),Xa.fromBufferAttribute(o,v),p.push(Wa.x,Wa.y,Wa.z),p.push(Xa.x,Xa.y,Xa.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new le:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,n=[],s=[],a=[],o=new R,c=new Be;for(let p=0;p<=e;p++){let m=p/e;n[p]=this.getTangentAt(m,new R)}s[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ke(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,m))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(ke(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(n[m],p*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wr=class extends ai{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new le){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_o=class extends Wr{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bh(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,p*=h,n(a,o,f,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var Bd=new R,zd=new R,fc=new Bh,mc=new Bh,gc=new Bh,Xr=class extends ai{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(zd.subVectors(n[0],n[1]).add(n[0]),o=zd);let d=n[l%s],f=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(Bd.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Bd),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(d),p),u=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(c),p);u<1e-4&&(u=1),m<1e-4&&(m=u),v<1e-4&&(v=u),fc.initNonuniformCatmullRom(o.x,d.x,f.x,c.x,m,u,v),mc.initNonuniformCatmullRom(o.y,d.y,f.y,c.y,m,u,v),gc.initNonuniformCatmullRom(o.z,d.z,f.z,c.z,m,u,v)}else this.curveType==="catmullrom"&&(fc.initCatmullRom(o.x,d.x,f.x,c.x,this.tension),mc.initCatmullRom(o.y,d.y,f.y,c.y,this.tension),gc.initCatmullRom(o.z,d.z,f.z,c.z,this.tension));return i.set(fc.calc(h),mc.calc(h),gc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kd(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Ts(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function ws(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}var Bs=class extends ai{constructor(e=new le,t=new le,i=new le,n=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new le){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ws(e,n.x,s.x,a.x,o.x),ws(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends ai{constructor(e=new R,t=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ws(e,n.x,s.x,a.x,o.x),ws(e,n.y,s.y,a.y,o.y),ws(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zs=class extends ai{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends ai{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ks=class extends ai{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Ts(e,n.x,s.x,a.x),Ts(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gs=class extends ai{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Ts(e,n.x,s.x,a.x),Ts(e,n.y,s.y,a.y),Ts(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vs=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(kd(o,c.x,l.x,h.x,d.x),kd(o,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new le().fromArray(n))}return this}},yo=Object.freeze({__proto__:null,ArcCurve:_o,CatmullRomCurve3:Xr,CubicBezierCurve:Bs,CubicBezierCurve3:vo,EllipseCurve:Wr,LineCurve:zs,LineCurve3:xo,QuadraticBezierCurve:ks,QuadraticBezierCurve3:Gs,SplineCurve:Vs}),Mo=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new yo[n.type]().fromJSON(n))}return this}},Hs=class extends Mo{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new zs(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new ks(this.currentPoint.clone(),new le(e,t),new le(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Bs(this.currentPoint.clone(),new le(e,t),new le(i,n),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Vs(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new Wr(e,t,i,n,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ws=class extends Hs{constructor(e){super(e),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Hs().fromJSON(n))}return this}};function $m(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Gd(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=function(h,d,f,p){let m=[];for(let u=0,v=d.length;u<v;u++){let _=Gd(h,d[u]*p,u<v-1?d[u+1]*p:h.length,p,!1);_===_.next&&(_.steiner=!0),m.push(ag(_))}m.sort(ng);for(let u=0;u<m.length;u++)f=rg(m[u],f);return f}(r,e,s,t)),r.length>80*t){o=r[0],c=r[1];let h=o,d=c;for(let f=t;f<n;f+=t){let p=r[f],m=r[f+1];p<o&&(o=p),m<c&&(c=m),p>h&&(h=p),m>d&&(d=m)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Xs(s,a,t,o,c,l,0),a}function Gd(r,e,t,i,n){let s;if(n===function(a,o,c,l){let h=0;for(let d=o,f=c-l;d<c;d+=l)h+=(a[f]-a[d])*(a[d+1]+a[f+1]),f=d;return h}(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=Vd(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Vd(a/i|0,r[a],r[a+1],s);return s&&jr(s,s.next)&&(qs(s),s=s.next),s}function $n(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!jr(i,i.next)&&at(i.prev,i,i.next)!==0)i=i.next;else{if(qs(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Xs(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(c,l,h,d){let f=c;do f.z===0&&(f.z=Ec(f.x,f.y,l,h,d)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==c);f.prevZ.nextZ=null,f.prevZ=null,function(p){let m,u=1;do{let v,_=p;p=null;let g=null;for(m=0;_;){m++;let x=_,y=0;for(let S=0;S<u&&(y++,x=x.nextZ,x);S++);let M=u;for(;y>0||M>0&&x;)y!==0&&(M===0||!x||_.z<=x.z)?(v=_,_=_.nextZ,y--):(v=x,x=x.nextZ,M--),g?g.nextZ=v:p=v,v.prevZ=g,g=v;_=x}g.nextZ=null,u*=2}while(m>1)}(f)}(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?eg(r,i,n,s):Qm(r))e.push(c.i,r.i,l.i),qs(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?Xs(r=tg($n(r),e),e,t,i,n,s,2):a===2&&ig(r,e,t,i,n,s):Xs($n(r),e,t,i,n,s,1);break}}}function Qm(r){let e=r.prev,t=r,i=r.next;if(at(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),d=Math.min(o,c,l),f=Math.max(n,s,a),p=Math.max(o,c,l),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=p&&Ss(n,o,s,c,a,l,m.x,m.y)&&at(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function eg(r,e,t,i){let n=r.prev,s=r,a=r.next;if(at(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,d=s.y,f=a.y,p=Math.min(o,c,l),m=Math.min(h,d,f),u=Math.max(o,c,l),v=Math.max(h,d,f),_=Ec(p,m,e,t,i),g=Ec(u,v,e,t,i),x=r.prevZ,y=r.nextZ;for(;x&&x.z>=_&&y&&y.z<=g;){if(x.x>=p&&x.x<=u&&x.y>=m&&x.y<=v&&x!==n&&x!==a&&Ss(o,h,c,d,l,f,x.x,x.y)&&at(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=u&&y.y>=m&&y.y<=v&&y!==n&&y!==a&&Ss(o,h,c,d,l,f,y.x,y.y)&&at(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=u&&x.y>=m&&x.y<=v&&x!==n&&x!==a&&Ss(o,h,c,d,l,f,x.x,x.y)&&at(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=g;){if(y.x>=p&&y.x<=u&&y.y>=m&&y.y<=v&&y!==n&&y!==a&&Ss(o,h,c,d,l,f,y.x,y.y)&&at(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function tg(r,e){let t=r;do{let i=t.prev,n=t.next.next;!jr(i,n)&&kp(i,t,t.next,n)&&js(i,n)&&js(n,i)&&(e.push(i.i,t.i,n.i),qs(t),qs(t.next),t=r=n),t=t.next}while(t!==r);return $n(t)}function ig(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&og(a,o)){let c=Gp(a,o);return a=$n(a,a.next),c=$n(c,c.next),Xs(a,e,t,i,n,s,0),void Xs(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function ng(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function rg(r,e){let t=function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(jr(n,a))return a;do{if(jr(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let u=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(u<=o&&u>h&&(h=u,l=a.x<a.next.x?a:a.next,u===o))return l}a=a.next}while(a!==s);if(!l)return null;let d=l,f=l.x,p=l.y,m=1/0;a=l;do{if(o>=a.x&&a.x>=f&&o!==a.x&&zp(c<p?o:h,c,f,p,c<p?h:o,c,a.x,a.y)){let u=Math.abs(c-a.y)/(o-a.x);js(a,n)&&(u<m||u===m&&(a.x>l.x||a.x===l.x&&sg(l,a)))&&(l=a,m=u)}a=a.next}while(a!==d);return l}(r,e);if(!t)return e;let i=Gp(t,r);return $n(i,i.next),$n(t,t.next)}function sg(r,e){return at(r.prev,r,e.prev)<0&&at(e.next,r,r.next)<0}function Ec(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function ag(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function zp(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Ss(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&zp(r,e,t,i,n,s,a,o)}function og(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&kp(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(js(r,e)&&js(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(at(r.prev,r,e.prev)||at(r,e.prev,e))||jr(r,e)&&at(r.prev,r,r.next)>0&&at(e.prev,e,e.next)>0)}function at(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function jr(r,e){return r.x===e.x&&r.y===e.y}function kp(r,e,t,i){let n=Ya(at(r,e,t)),s=Ya(at(r,e,i)),a=Ya(at(t,i,r)),o=Ya(at(t,i,e));return n!==s&&a!==o||!(n!==0||!qa(r,t,e))||!(s!==0||!qa(r,i,e))||!(a!==0||!qa(t,r,i))||!(o!==0||!qa(t,e,i))}function qa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ya(r){return r>0?1:r<0?-1:0}function js(r,e){return at(r.prev,r,r.next)<0?at(r,e,r.next)>=0&&at(r,r.prev,e)>=0:at(r,e,r.prev)<0||at(r,r.next,e)<0}function Gp(r,e){let t=Ac(r.i,r.x,r.y),i=Ac(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Vd(r,e,t,i){let n=Ac(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function qs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ac(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Cc=class{static triangulate(e,t,i=2){return $m(e,t,i)}},zi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Hd(e),Wd(i,e);let a=e.length;t.forEach(Hd);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,Wd(i,t[c]);let o=Cc.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Hd(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Wd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var So=class r extends tt{constructor(e=new Ws([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,u=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:lg,x,y,M,S,A,D=!1;if(_){x=_.getSpacedPoints(h),D=!0,f=!1;let P=!!_.isCatmullRomCurve3&&_.closed;y=_.computeFrenetFrames(h,P),M=new R,S=new R,A=new R}f||(v=0,p=0,m=0,u=0);let w=o.extractPoints(l),L=w.shape,V=w.holes;if(!zi.isClockWise(L)){L=L.reverse();for(let P=0,F=V.length;P<F;P++){let b=V[P];zi.isClockWise(b)&&(V[P]=b.reverse())}}function B(P){let F=10000000000000001e-36,b=P[0];for(let U=1;U<=P.length;U++){let O=U%P.length,C=P[O],j=C.x-b.x,J=C.y-b.y,Q=j*j+J*J,ne=Math.max(Math.abs(C.x),Math.abs(C.y),Math.abs(b.x),Math.abs(b.y));Q<=F*ne*ne?(P.splice(O,1),U--):b=C}}B(L),V.forEach(B);let H=V.length,k=L;for(let P=0;P<H;P++){let F=V[P];L=L.concat(F)}function z(P,F,b){return F||Ee("ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(F,b)}let X=L.length;function W(P,F,b){let U,O,C,j=P.x-F.x,J=P.y-F.y,Q=b.x-P.x,ne=b.y-P.y,_e=j*j+J*J,N=j*ne-J*Q;if(Math.abs(N)>Number.EPSILON){let Y=Math.sqrt(_e),K=Math.sqrt(Q*Q+ne*ne),Z=F.x-J/Y,te=F.y+j/Y,he=((b.x-ne/K-Z)*ne-(b.y+Q/K-te)*Q)/(j*ne-J*Q);U=Z+j*he-P.x,O=te+J*he-P.y;let ge=U*U+O*O;if(ge<=2)return new le(U,O);C=Math.sqrt(ge/2)}else{let Y=!1;j>Number.EPSILON?Q>Number.EPSILON&&(Y=!0):j<-Number.EPSILON?Q<-Number.EPSILON&&(Y=!0):Math.sign(J)===Math.sign(ne)&&(Y=!0),Y?(U=-J,O=j,C=Math.sqrt(_e)):(U=j,O=J,C=Math.sqrt(_e/2))}return new le(U/C,O/C)}let oe=[];for(let P=0,F=k.length,b=F-1,U=P+1;P<F;P++,b++,U++)b===F&&(b=0),U===F&&(U=0),oe[P]=W(k[P],k[b],k[U]);let pe=[],Me,me,xe=oe.concat();for(let P=0,F=H;P<F;P++){let b=V[P];Me=[];for(let U=0,O=b.length,C=O-1,j=U+1;U<O;U++,C++,j++)C===O&&(C=0),j===O&&(j=0),Me[U]=W(b[U],b[C],b[j]);pe.push(Me),xe=xe.concat(Me)}if(v===0)me=zi.triangulateShape(k,V);else{let P=[],F=[];for(let b=0;b<v;b++){let U=b/v,O=p*Math.cos(U*Math.PI/2),C=m*Math.sin(U*Math.PI/2)+u;for(let j=0,J=k.length;j<J;j++){let Q=z(k[j],oe[j],C);ye(Q.x,Q.y,-O),U===0&&P.push(Q)}for(let j=0,J=H;j<J;j++){let Q=V[j];Me=pe[j];let ne=[];for(let _e=0,N=Q.length;_e<N;_e++){let Y=z(Q[_e],Me[_e],C);ye(Y.x,Y.y,-O),U===0&&ne.push(Y)}U===0&&F.push(ne)}}me=zi.triangulateShape(P,F)}let re=me.length,ce=m+u;for(let P=0;P<X;P++){let F=f?z(L[P],xe[P],ce):L[P];D?(S.copy(y.normals[0]).multiplyScalar(F.x),M.copy(y.binormals[0]).multiplyScalar(F.y),A.copy(x[0]).add(S).add(M),ye(A.x,A.y,A.z)):ye(F.x,F.y,0)}for(let P=1;P<=h;P++)for(let F=0;F<X;F++){let b=f?z(L[F],xe[F],ce):L[F];D?(S.copy(y.normals[P]).multiplyScalar(b.x),M.copy(y.binormals[P]).multiplyScalar(b.y),A.copy(x[P]).add(S).add(M),ye(A.x,A.y,A.z)):ye(b.x,b.y,d/h*P)}for(let P=v-1;P>=0;P--){let F=P/v,b=p*Math.cos(F*Math.PI/2),U=m*Math.sin(F*Math.PI/2)+u;for(let O=0,C=k.length;O<C;O++){let j=z(k[O],oe[O],U);ye(j.x,j.y,d+b)}for(let O=0,C=V.length;O<C;O++){let j=V[O];Me=pe[O];for(let J=0,Q=j.length;J<Q;J++){let ne=z(j[J],Me[J],U);D?ye(ne.x,ne.y+x[h-1].y,x[h-1].x+b):ye(ne.x,ne.y,d+b)}}}function se(P,F){let b=P.length;for(;--b>=0;){let U=b,O=b-1;O<0&&(O=P.length-1);for(let C=0,j=h+2*v;C<j;C++){let J=X*C,Q=X*(C+1);ae(F+U+J,F+O+J,F+O+Q,F+U+Q)}}}function ye(P,F,b){c.push(P),c.push(F),c.push(b)}function Fe(P,F,b){I(P),I(F),I(b);let U=n.length/3,O=g.generateTopUV(i,n,U-3,U-2,U-1);T(O[0]),T(O[1]),T(O[2])}function ae(P,F,b,U){I(P),I(F),I(U),I(F),I(b),I(U);let O=n.length/3,C=g.generateSideWallUV(i,n,O-6,O-3,O-2,O-1);T(C[0]),T(C[1]),T(C[3]),T(C[1]),T(C[2]),T(C[3])}function I(P){n.push(c[3*P+0]),n.push(c[3*P+1]),n.push(c[3*P+2])}function T(P){s.push(P.x),s.push(P.y)}(function(){let P=n.length/3;if(f){let F=0,b=X*F;for(let U=0;U<re;U++){let O=me[U];Fe(O[2]+b,O[1]+b,O[0]+b)}F=h+2*v,b=X*F;for(let U=0;U<re;U++){let O=me[U];Fe(O[0]+b,O[1]+b,O[2]+b)}}else{for(let F=0;F<re;F++){let b=me[F];Fe(b[2],b[1],b[0])}for(let F=0;F<re;F++){let b=me[F];Fe(b[0]+X*h,b[1]+X*h,b[2]+X*h)}}i.addGroup(P,n.length/3-P,0)})(),function(){let P=n.length/3,F=0;se(k,F),F+=k.length;for(let b=0,U=V.length;b<U;b++){let O=V[b];se(O,F),F+=O.length}i.addGroup(P,n.length/3-P,1)}()}this.setAttribute("position",new Ae(n,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new yo[n.type]().fromJSON(n)),new r(i,e.options)}},lg={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new le(s,a),new le(o,c),new le(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],d=e[3*i+2],f=e[3*n],p=e[3*n+1],m=e[3*n+2],u=e[3*s],v=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new le(a,1-c),new le(l,1-d),new le(f,1-m),new le(u,1-_)]:[new le(o,1-c),new le(h,1-d),new le(p,1-m),new le(v,1-_)]}},bo=class r extends Rn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},To=class r extends tt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=ke(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new R,f=new le,p=new R,m=new R,u=new R,v=0,_=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:v=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-v,p.z=0*_,u.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(u.x,u.y,u.z);break;default:v=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-v,p.z=0*_,m.copy(p),p.x+=u.x,p.y+=u.y,p.z+=u.z,p.normalize(),c.push(p.x,p.y,p.z),u.copy(m)}for(let g=0;g<=t;g++){let x=i+g*h*n,y=Math.sin(x),M=Math.cos(x);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*y,d.y=e[S].y,d.z=e[S].x*M,a.push(d.x,d.y,d.z),f.x=g/t,f.y=S/(e.length-1),o.push(f.x,f.y);let A=c[3*S+0]*y,D=c[3*S+1],w=c[3*S+0]*M;l.push(A,D,w)}}for(let g=0;g<t;g++)for(let x=0;x<e.length-1;x++){let y=x+g*e.length,M=y,S=y+e.length,A=y+e.length+1,D=y+1;s.push(M,S,D),s.push(A,D,S)}this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},wo=class r extends Rn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Pn=class r extends tt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=e/o,f=t/c,p=[],m=[],u=[],v=[];for(let _=0;_<h;_++){let g=_*f-a;for(let x=0;x<l;x++){let y=x*d-s;m.push(y,-g,0),u.push(0,0,1),v.push(x/o),v.push(1-_/c)}}for(let _=0;_<c;_++)for(let g=0;g<o;g++){let x=g+l*_,y=g+l*(_+1),M=g+1+l*(_+1),S=g+1+l*_;p.push(x,y,S),p.push(y,M,S)}this.setIndex(p),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Eo=class r extends tt{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],d=e,f=(t-e)/(n=Math.max(1,n)),p=new R,m=new le;for(let u=0;u<=n;u++){for(let v=0;v<=i;v++){let _=s+v/i*a;p.x=d*Math.cos(_),p.y=d*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}d+=f}for(let u=0;u<n;u++){let v=u*(i+1);for(let _=0;_<i;_++){let g=_+v,x=g,y=g+i+1,M=g+i+2,S=g+1;o.push(x,y,S),o.push(y,M,S)}}this.setIndex(o),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ao=class r extends tt{constructor(e=new Ws([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=n.length/3,f=h.extractPoints(t),p=f.shape,m=f.holes;zi.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,_=m.length;v<_;v++){let g=m[v];zi.isClockWise(g)===!0&&(m[v]=g.reverse())}let u=zi.triangulateShape(p,m);for(let v=0,_=m.length;v<_;v++){let g=m[v];p=p.concat(g)}for(let v=0,_=p.length;v<_;v++){let g=p[v];n.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let v=0,_=u.length;v<_;v++){let g=u[v],x=g[0]+d,y=g[1]+d,M=g[2]+d;i.push(x,y,M),c+=3}}this.setIndex(i),this.setAttribute("position",new Ae(n,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},Co=class r extends tt{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new R,f=new R,p=[],m=[],u=[],v=[];for(let _=0;_<=i;_++){let g=[],x=_/i,y=0;_===0&&a===0?y=.5/t:_===i&&c===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){let S=M/t;d.x=-e*Math.cos(n+S*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(n+S*s)*Math.sin(a+x*o),m.push(d.x,d.y,d.z),f.copy(d).normalize(),u.push(f.x,f.y,f.z),v.push(S+y,1-x),g.push(l++)}h.push(g)}for(let _=0;_<i;_++)for(let g=0;g<t;g++){let x=h[_][g+1],y=h[_][g],M=h[_+1][g],S=h[_+1][g+1];(_!==0||a>0)&&p.push(x,y,S),(_!==i-1||c<Math.PI)&&p.push(y,M,S)}this.setIndex(p),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ro=class r extends Rn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Po=class r extends tt{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let c=[],l=[],h=[],d=[],f=new R,p=new R,m=new R;for(let u=0;u<=i;u++){let v=a+u/i*o;for(let _=0;_<=n;_++){let g=_/n*s;p.x=(e+t*Math.cos(v))*Math.cos(g),p.y=(e+t*Math.cos(v))*Math.sin(g),p.z=t*Math.sin(v),l.push(p.x,p.y,p.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),m.subVectors(p,f).normalize(),h.push(m.x,m.y,m.z),d.push(_/n),d.push(u/i)}}for(let u=1;u<=i;u++)for(let v=1;v<=n;v++){let _=(n+1)*u+v-1,g=(n+1)*(u-1)+v-1,x=(n+1)*(u-1)+v,y=(n+1)*u+v;c.push(_,g,y),c.push(g,x,y)}this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Io=class r extends tt{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],d=new R,f=new R,p=new R,m=new R,u=new R,v=new R,_=new R;for(let x=0;x<=i;++x){let y=x/i*s*Math.PI*2;g(y,s,a,e,p),g(y+.01,s,a,e,m),v.subVectors(m,p),_.addVectors(m,p),u.crossVectors(v,_),_.crossVectors(u,v),u.normalize(),_.normalize();for(let M=0;M<=n;++M){let S=M/n*Math.PI*2,A=-t*Math.cos(S),D=t*Math.sin(S);d.x=p.x+(A*_.x+D*u.x),d.y=p.y+(A*_.y+D*u.y),d.z=p.z+(A*_.z+D*u.z),c.push(d.x,d.y,d.z),f.subVectors(d,p).normalize(),l.push(f.x,f.y,f.z),h.push(x/i),h.push(M/n)}}for(let x=1;x<=i;x++)for(let y=1;y<=n;y++){let M=(n+1)*(x-1)+(y-1),S=(n+1)*x+(y-1),A=(n+1)*x+y,D=(n+1)*(x-1)+y;o.push(M,S,D),o.push(S,A,D)}function g(x,y,M,S,A){let D=Math.cos(x),w=Math.sin(x),L=M/y*x,V=Math.cos(L);A.x=S*(2+V)*.5*D,A.y=S*(2+V)*w*.5,A.z=S*Math.sin(L)*.5}this.setIndex(o),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},qr=class r extends tt{constructor(e=new Gs(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,c=new R,l=new le,h=new R,d=[],f=[],p=[],m=[];function u(v){h=e.getPointAt(v/t,h);let _=a.normals[v],g=a.binormals[v];for(let x=0;x<=n;x++){let y=x/n*Math.PI*2,M=Math.sin(y),S=-Math.cos(y);c.x=S*_.x+M*g.x,c.y=S*_.y+M*g.y,c.z=S*_.z+M*g.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)u(v);u(s===!1?t:0),function(){for(let v=0;v<=t;v++)for(let _=0;_<=n;_++)l.x=v/t,l.y=_/n,p.push(l.x,l.y)}(),function(){for(let v=1;v<=t;v++)for(let _=1;_<=n;_++){let g=(n+1)*(v-1)+(_-1),x=(n+1)*v+(_-1),y=(n+1)*v+_,M=(n+1)*(v-1)+_;m.push(g,x,M),m.push(x,y,M)}}()})(),this.setIndex(m),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new yo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Lo=class extends tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new R,s=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],f=d.start;for(let p=f,m=f+d.count;p<m;p+=3)for(let u=0;u<3;u++){let v=o.getX(p+u),_=o.getX(p+(u+1)%3);n.fromBufferAttribute(a,v),s.fromBufferAttribute(a,_),Xd(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Xd(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Xd(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Dx=Object.freeze({__proto__:null,BoxGeometry:ln,CapsuleGeometry:po,CircleGeometry:fo,ConeGeometry:mo,CylinderGeometry:cn,DodecahedronGeometry:go,EdgesGeometry:Hr,ExtrudeGeometry:So,IcosahedronGeometry:bo,LatheGeometry:To,OctahedronGeometry:wo,PlaneGeometry:Pn,PolyhedronGeometry:Rn,RingGeometry:Eo,ShapeGeometry:Ao,SphereGeometry:Co,TetrahedronGeometry:Ro,TorusGeometry:Po,TorusKnotGeometry:Io,TubeGeometry:qr,WireframeGeometry:Lo});function ar(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(jd(n))n.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(jd(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Ft(r){let e={};for(let t=0;t<r.length;t++){let i=ar(r[t]);for(let n in i)e[n]=i[n]}return e}function jd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function zh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Vp={clone:ar,merge:Ft},oi=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Do=class extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var No=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uo=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Za(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}var In=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oo=class extends In{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:s=e,o=2*t-i;break;case Sc:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Mc:a=e,c=2*i-t;break;case Sc:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-t)/(n-t),u=m*m,v=u*m,_=-f*v+2*f*u-f*m,g=(1+f)*v+(-1.5-2*f)*u+(-.5+f)*m+1,x=(-1-p)*v+(1.5+p)*u+.5*m,y=p*v-p*u;for(let M=0;M!==o;++M)s[M]=_*a[h+M]+g*a[l+M]+x*a[c+M]+y*a[d+M];return s}},Fo=class extends In{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),d=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*d+a[c+f]*h;return s}},Bo=class extends In{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},zo=class extends In{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,f=h.outTangents;if(!d||!f){let u=(i-t)/(n-t),v=1-u;for(let _=0;_!==o;++_)s[_]=a[l+_]*v+a[c+_]*u;return s}let p=2*o,m=e-1;for(let u=0;u!==o;++u){let v=a[l+u],_=a[c+u],g=m*p+2*u,x=f[g],y=f[g+1],M=e*p+2*u,S=d[M],A=d[M+1],D,w,L,V,B,H=(i-t)/(n-t);for(let k=0;k<8;k++){D=H*H,w=D*H,L=1-H,V=L*L,B=V*L;let z=B*t+3*V*H*x+3*L*D*S+w*n-i;if(Math.abs(z)<1e-10)break;let X=3*V*(x-t)+6*L*H*(S-x)+3*D*(n-S);if(Math.abs(X)<1e-10)break;H-=z/X,H=Math.max(0,Math.min(1,H))}s[u]=B*v+3*V*H*y+3*L*D*A+w*_}return s}},ii=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Za(t,this.TimeBufferType),this.values=Za(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Za(e.times,Array),values:Za(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case to:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break;case xc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ee("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ee("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ee("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ee("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&Dm(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Ee("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===$a,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let m=t[h+p];if(m!==t[d+p]||m!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ii.prototype.ValueTypeName="",ii.prototype.TimeBufferType=Float32Array,ii.prototype.ValueBufferType=Float32Array,ii.prototype.DefaultInterpolation=to;var Tn=class extends ii{constructor(e,t,i){super(e,t,i)}};Tn.prototype.ValueTypeName="bool",Tn.prototype.ValueBufferType=Array,Tn.prototype.DefaultInterpolation=Es,Tn.prototype.InterpolantFactoryMethodLinear=void 0,Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends ii{constructor(e,t,i,n){super(e,t,i,n)}};ko.prototype.ValueTypeName="color";var Go=class extends ii{constructor(e,t,i,n){super(e,t,i,n)}};Go.prototype.ValueTypeName="number";var Vo=class extends In{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)_i.slerpFlat(s,0,a,l-o,a,l,c);return s}},Ys=class extends ii{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Vo(this.times,this.values,this.getValueSize(),e)}};Ys.prototype.ValueTypeName="quaternion",Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var wn=class extends ii{constructor(e,t,i){super(e,t,i)}};wn.prototype.ValueTypeName="string",wn.prototype.ValueBufferType=Array,wn.prototype.DefaultInterpolation=Es,wn.prototype.InterpolantFactoryMethodLinear=void 0,wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends ii{constructor(e,t,i,n){super(e,t,i,n)}};Ho.prototype.ValueTypeName="vector";var Wo=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hp=new Wo,Xo=class{constructor(e){this.manager=e!==void 0?e:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zs=class extends Yr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_c=new Be,qd=new R,Yd=new R,jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cn,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(qd),Yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yd),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Or||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ja=new R,Ka=new _i,Fi=new R,Zr=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ja,Ka,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Ka,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ja,Ka,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Ka,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bn=new R,Zd=new le,Jd=new le,At=class extends Zr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Jn*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Nr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Jn*Math.atan(Math.tan(.5*Nr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,Zd,Jd),t.subVectors(Jd,Zd)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Nr*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rc=class extends jo{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=2*Jn*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;i===t.fov&&n===t.aspect&&s===t.far||(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Js=class extends Yr{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Pc=class extends jo{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0}},Ks=class extends Yr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Pc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$s=class extends Zr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Nx=new Be,Ux=new Be,Ox=new Be;var Lr=-90,qo=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new At(Lr,1,e,t);n.layers=this.layers,this.add(n);let s=new At(Lr,1,e,t);s.layers=this.layers,this.add(s);let a=new At(Lr,1,e,t);a.layers=this.layers,this.add(a);let o=new At(Lr,1,e,t);o.layers=this.layers,this.add(o);let c=new At(Lr,1,e,t);c.layers=this.layers,this.add(c);let l=new At(Lr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===rn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Or)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let u=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=u,e.setRenderTarget(i,5,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Yo=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Fx=new R,Bx=new _i,zx=new R,kx=new R,Gx=new R;var Vx=new R,Hx=new _i,Wx=new R,Xx=new R;var kh="\\[\\]\\.:\\/",cg=new RegExp("["+kh+"]","g"),vc="[^"+kh+"]",hg="[^"+kh.replace("\\.","")+"]",ug=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",vc)+/(WCOD+)?/.source.replace("WCOD",hg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc)+"$"),dg=["material","materials","bones","map"],et=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cg,"")}static parseTrackName(e){let t=ug.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);dg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Te("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Ee("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void Ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0)return void Ee("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=class{constructor(r,e,t){let i=t||et.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray],et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jx=new Float32Array(1);var Kd=new Be,Qs=class{constructor(e,t,i=0,n=1/0){this.ray=new An(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ee("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kd),this}intersectObject(e,t=!0,i=[]){return Ic(e,this,i,t),i.sort($d),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Ic(e[n],this,i,t);return i.sort($d),i}};function $d(r,e){return r.distance-e.distance}function Ic(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Ic(s[a],e,t,!0)}}var jh=class jh{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};jh.prototype.isMatrix2=!0;var Lc=jh,qx=new le;var Yx=new R,Zx=new R,Jx=new R,Kx=new R,$x=new R,Qx=new R,ey=new R;var ty=new R;var iy=new R,ny=new Be,ry=new Be;var sy=new R,ay=new Oe,oy=new Oe;var ly=new R,cy=new R,hy=new R;var uy=new R,dy=new Zr;var py=new si;var fy=new R;function Gh(r,e,t,i){let n=function(s){switch(s){case li:case $c:return{byteLength:1,components:1};case es:case Qc:case Vi:return{byteLength:2,components:1};case il:case nl:return{byteLength:2,components:4};case hn:case tl:case Pi:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}(i);switch(t){case 1021:return r*e;case ih:case rl:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case Ii:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}})),typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function pf(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function pg(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),d;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=r.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=r.SHORT;else if(o instanceof Uint32Array)d=r.UNSIGNED_INT;else if(o instanceof Int32Array)d=r.INT;else if(o instanceof Int8Array)d=r.BYTE;else if(o instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=r.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}}(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((d,f)=>d.start-f.start);let h=0;for(let d=1;d<l.length;d++){let f=l[h],p=l[d];p.start<=f.start+f.count+1?f.count=Math.max(f.count,p.start+p.count-f.start):(++h,l[h]=p)}l.length=h+1;for(let d=0,f=l.length;d<f;d++){let p=l[d];r.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},fe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Wi={basic:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Ft([fe.common,fe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Ft([fe.lights,fe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Wi.physical={uniforms:Ft([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var pl={r:0,b:0,g:0},fg=new Be,ff=new Ue;function mg(r,e,t,i,n,s){let a=new Oe(0),o,c,l=n===!0?0:1,h=null,d=0,f=null;function p(u){let v=u.isScene===!0?u.background:null;if(v&&v.isTexture){let _=u.backgroundBlurriness>0;v=e.get(v,_)}return v}function m(u,v){u.getRGB(pl,zh(r)),t.buffers.color.setClear(pl.r,pl.g,pl.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(u,v=1){a.set(u),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,m(a,l)},render:function(u){let v=!1,_=p(u);_===null?m(a,l):_&&_.isColor&&(m(_,1),v=!0);let g=r.xr.getEnvironmentBlendMode();g==="additive"?t.buffers.color.setClear(0,0,0,1,s):g==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(u,v){let _=p(v);_&&(_.isCubeTexture||_.mapping===ia)?(c===void 0&&(c=new ft(new ln(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:ar(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(g,x,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ff),c.material.toneMapped=He.getTransfer(_.colorSpace)!==Ze,h===_&&d===_.version&&f===r.toneMapping||(c.material.needsUpdate=!0,h=_,d=_.version,f=r.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new ft(new Pn(2,2),new oi({name:"BackgroundMaterial",uniforms:ar(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=He.getTransfer(_.colorSpace)!==Ze,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),h===_&&d===_.version&&f===r.toneMapping||(o.material.needsUpdate=!0,h=_,d=_.version,f=r.toneMapping),o.layers.enableAll(),u.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function gg(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(_){return r.bindVertexArray(_)}function c(_){return r.deleteVertexArray(_)}function l(_){let g=[],x=[],y=[];for(let M=0;M<t;M++)g[M]=0,x[M]=0,y[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:x,attributeDivisors:y,object:_,attributes:{},index:null}}function h(){let _=s.newAttributes;for(let g=0,x=_.length;g<x;g++)_[g]=0}function d(_){f(_,0)}function f(_,g){let x=s.newAttributes,y=s.enabledAttributes,M=s.attributeDivisors;x[_]=1,y[_]===0&&(r.enableVertexAttribArray(_),y[_]=1),M[_]!==g&&(r.vertexAttribDivisor(_,g),M[_]=g)}function p(){let _=s.newAttributes,g=s.enabledAttributes;for(let x=0,y=g.length;x<y;x++)g[x]!==_[x]&&(r.disableVertexAttribArray(x),g[x]=0)}function m(_,g,x,y,M,S,A){A===!0?r.vertexAttribIPointer(_,g,x,M,S):r.vertexAttribPointer(_,g,x,y,M,S)}function u(){v(),a=!0,s!==n&&(s=n,o(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(_,g,x,y,M){let S=!1,A=function(D,w,L,V){let B=V.wireframe===!0,H=i[w.id];H===void 0&&(H={},i[w.id]=H);let k=D.isInstancedMesh===!0?D.id:0,z=H[k];z===void 0&&(z={},H[k]=z);let X=z[L.id];X===void 0&&(X={},z[L.id]=X);let W=X[B];return W===void 0&&(W=l(r.createVertexArray()),X[B]=W),W}(_,y,x,g);s!==A&&(s=A,o(s.object)),S=function(D,w,L,V){let B=s.attributes,H=w.attributes,k=0,z=L.getAttributes();for(let X in z)if(z[X].location>=0){let W=B[X],oe=H[X];if(oe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),W===void 0||W.attribute!==oe||oe&&W.data!==oe.data)return!0;k++}return s.attributesNum!==k||s.index!==V}(_,y,x,M),S&&function(D,w,L,V){let B={},H=w.attributes,k=0,z=L.getAttributes();for(let X in z)if(z[X].location>=0){let W=H[X];W===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));let oe={};oe.attribute=W,W&&W.data&&(oe.data=W.data),B[X]=oe,k++}s.attributes=B,s.attributesNum=k,s.index=V}(_,y,x,M),M!==null&&e.update(M,r.ELEMENT_ARRAY_BUFFER),(S||a)&&(a=!1,function(D,w,L,V){h();let B=V.attributes,H=L.getAttributes(),k=w.defaultAttributeValues;for(let z in H){let X=H[z];if(X.location>=0){let W=B[z];if(W===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){let oe=W.normalized,pe=W.itemSize,Me=e.get(W);if(Me===void 0)continue;let me=Me.buffer,xe=Me.type,re=Me.bytesPerElement,ce=xe===r.INT||xe===r.UNSIGNED_INT||W.gpuType===tl;if(W.isInterleavedBufferAttribute){let se=W.data,ye=se.stride,Fe=W.offset;if(se.isInstancedInterleavedBuffer){for(let ae=0;ae<X.locationSize;ae++)f(X.location+ae,se.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ae=0;ae<X.locationSize;ae++)d(X.location+ae);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ae=0;ae<X.locationSize;ae++)m(X.location+ae,pe/X.locationSize,xe,oe,ye*re,(Fe+pe/X.locationSize*ae)*re,ce)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)f(X.location+se,W.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<X.locationSize;se++)d(X.location+se);r.bindBuffer(r.ARRAY_BUFFER,me);for(let se=0;se<X.locationSize;se++)m(X.location+se,pe/X.locationSize,xe,oe,pe*re,pe/X.locationSize*se*re,ce)}}else if(k!==void 0){let oe=k[z];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(X.location,oe);break;case 3:r.vertexAttrib3fv(X.location,oe);break;case 4:r.vertexAttrib4fv(X.location,oe);break;default:r.vertexAttrib1fv(X.location,oe)}}}}p()}(_,g,x,y),M!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))},reset:u,resetDefaultState:v,dispose:function(){u();for(let _ in i){let g=i[_];for(let x in g){let y=g[x];for(let M in y){let S=y[M];for(let A in S)c(S[A].object),delete S[A];delete y[M]}}delete i[_]}},releaseStatesOfGeometry:function(_){if(i[_.id]===void 0)return;let g=i[_.id];for(let x in g){let y=g[x];for(let M in y){let S=y[M];for(let A in S)c(S[A].object),delete S[A];delete y[M]}}delete i[_.id]},releaseStatesOfObject:function(_){for(let g in i){let x=i[g],y=_.isInstancedMesh===!0?_.id:0,M=x[y];if(M!==void 0){for(let S in M){let A=M[S];for(let D in A)c(A[D].object),delete A[D];delete M[S]}delete x[y],Object.keys(x).length===0&&delete i[g]}}},releaseStatesOfProgram:function(_){for(let g in i){let x=i[g];for(let y in x){let M=x[y];if(M[_.id]===void 0)continue;let S=M[_.id];for(let A in S)c(S[A].object),delete S[A];delete M[_.id]}}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function _g(r,e,t){let i;this.setMode=function(n){i=n},this.render=function(n,s){r.drawArrays(i,n,s),t.update(s,i,1)},this.renderInstances=function(n,s,a){a!==0&&(r.drawArraysInstanced(i,n,s,a),t.update(s,i,a))},this.renderMultiDraw=function(n,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,n,0,s,0,a);let o=0;for(let c=0;c<a;c++)o+=s[c];t.update(o,i,1)}}function vg(r,e,t,i){let n;function s(h){if(h==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Te("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&l===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(h){return h===Ii||i.convert(h)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let d=h===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==li&&i.convert(h)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==Pi&&!d)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function xg(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Bi,o=new Ue,c={value:null,needsUpdate:!1};function l(h,d,f,p){let m=h!==null?h.length:0,u=null;if(m!==0){if(u=c.value,p!==!0||u===null){let v=f+4*m,_=d.matrixWorldInverse;o.getNormalMatrix(_),(u===null||u.length<v)&&(u=new Float32Array(v));for(let g=0,x=f;g!==m;++g,x+=4)a.copy(h[g]).applyMatrix4(_,o),a.normal.toArray(u,x),u[x+3]=a.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,u}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||n;return n=d,i=h.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,m=h.clipIntersection,u=h.clipShadows,v=r.get(h);if(!n||p===null||p.length===0||s&&!u)s?l(null):function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let _=s?0:i,g=4*_,x=v.clippingState||null;c.value=x,x=l(p,d,g,f);for(let y=0;y!==g;++y)x[y]=t[y];v.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}}}ff.set(-1,0,0,0,1,0,0,0,1);var Wp=[.125,.215,.35,.446,.526,.582],ra=20,sa=new $s,Xp=new Oe,qh=null,Yh=0,Zh=0,Jh=!1,yg=new R,ml=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=yg}=s;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Yh,Zh),this._renderer.xr.enabled=Jh,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===Qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Vi,format:Ii,colorSpace:As,depthBuffer:!1},n=jp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=function(a){let o=[],c=[],l=[],h=a,d=a-4+1+Wp.length;for(let f=0;f<d;f++){let p=Math.pow(2,h);o.push(p);let m=1/p;f>a-4?m=Wp[f-a+4-1]:f===0&&(m=0),c.push(m);let u=1/(p-2),v=-u,_=1+u,g=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,y=6,M=3,S=2,A=1,D=new Float32Array(M*y*x),w=new Float32Array(S*y*x),L=new Float32Array(A*y*x);for(let B=0;B<x;B++){let H=B%3*2/3-1,k=B>2?0:-1,z=[H,k,0,H+2/3,k,0,H+2/3,k+1,0,H,k,0,H+2/3,k+1,0,H,k+1,0];D.set(z,M*y*B),w.set(g,S*y*B);let X=[B,B,B,B,B,B];L.set(X,A*y*B)}let V=new tt;V.setAttribute("position",new ni(D,M)),V.setAttribute("uv",new ni(w,S)),V.setAttribute("faceIndex",new ni(L,A)),l.push(new ft(V,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}}(s)),this._blurMaterial=function(a,o,c){let l=new Float32Array(ra),h=new R(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:ra,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}(s,e,t),this._ggxMaterial=function(a,o,c){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new ft(new tt,e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,n,s){let a=new At(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(Xp),l.toneMapping=Ri,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new ln,new Kn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,u=e.background;u?u.isColor&&(p.color.copy(u),e.background=null,m=!0):(p.color.copy(Xp),m=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[v],s.y,s.z)):_===1?(a.up.set(0,0,o[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[v],s.z)):(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[v]));let g=this._cubeSize;is(n,_*g,v>2?g:0,g,g),l.setRenderTarget(n),m&&l.render(f,a),l.render(e,a)}l.toneMapping=d,l.autoClear=h,e.background=u}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Qr||e.mapping===Qn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;is(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,sa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:f}=this,p=this._sizeLods[i],m=3*p*(i>f-4?i-f+4:0),u=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=f-t,is(s,m,u,3*p,2*p),n.setRenderTarget(s),n.render(o,sa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=f-i,is(e,m,u,3*p,2*p),n.setRenderTarget(e),n.render(o,sa)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[n];h.material=l;let d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/39,m=s/p,u=isFinite(s)?1+Math.floor(3*m):ra;u>ra&&Te(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to 20`);let v=[],_=0;for(let y=0;y<ra;++y){let M=y/m,S=Math.exp(-M*M/2);v.push(S),y===0?_+=S:y<u&&(_+=2*S)}for(let y=0;y<v.length;y++)v[y]=v[y]/_;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=v,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:g}=this;d.dTheta.value=p,d.mipInt.value=g-i;let x=this._sizeLods[n];is(t,3*x*(n>g-4?n-g+4:0),4*(this._cubeSize-x),3*x,2*x),c.setRenderTarget(t),c.render(h,sa)}};function jp(r,e,t){let i=new ri(r,e,t);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function qp(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Yp(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}var _l=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Os(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ln(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Gi});s.uniforms.tEquirect.value=t;let a=new ft(n,s),o=t.minFilter;return t.minFilter===er&&(t.minFilter=Ot),new qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}};function Mg(r){let e=new WeakMap,t=new WeakMap,i=null;function n(o,c){return c===$o?o.mapping=Qr:c===Qo&&(o.mapping=Qn),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?function(l){if(l&&l.isTexture){let h=l.mapping,d=h===$o||h===Qo,f=h===Qr||h===Qn;if(d||f){let p=t.get(l),m=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return i===null&&(i=new ml(r)),p=d?i.fromEquirectangular(l,p):i.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),p.texture;if(p!==void 0)return p.texture;{let u=l.image;return d&&u&&u.height>0||f&&u&&function(v){let _=0,g=6;for(let x=0;x<g;x++)v[x]!==void 0&&_++;return _===g}(u)?(i===null&&(i=new ml(r)),p=d?i.fromEquirectangular(l):i.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),l.addEventListener("dispose",a),p.texture):null}}}return l}(o):function(l){if(l&&l.isTexture){let h=l.mapping;if(h===$o||h===Qo){if(e.has(l))return n(e.get(l).texture,l.mapping);{let d=l.image;if(d&&d.height>0){let f=new _l(d.height);return f.fromEquirectangularTexture(r,l),e.set(l,f),l.addEventListener("dispose",s),n(f.texture,l.mapping)}return null}}}return l}(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Sg(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&io("WebGLRenderer: "+i+" extension not supported."),n}}}function bg(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,f=0;if(d===void 0)return;if(h!==null){let u=h.array;f=h.version;for(let v=0,_=u.length;v<_;v+=3){let g=u[v+0],x=u[v+1],y=u[v+2];l.push(g,x,x,y,y,g)}}else{let u=d.array;f=d.version;for(let v=0,_=u.length/3-1;v<_;v+=3){let g=v+0,x=v+1,y=v+2;l.push(g,x,x,y,y,g)}}let p=new(d.count>=65535?Ns:Ds)(l,1);p.version=f;let m=s.get(c);m&&e.remove(m),s.set(c,p)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Tg(r,e,t){let i,n,s;this.setMode=function(a){i=a},this.setIndex=function(a){n=a.type,s=a.bytesPerElement},this.render=function(a,o){r.drawElements(i,o,n,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,c){c!==0&&(r.drawElementsInstanced(i,o,n,a*s,c),t.update(o,i,c))},this.renderMultiDraw=function(a,o,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,n,a,0,c);let l=0;for(let h=0;h<c;h++)l+=o[h];t.update(l,i,1)}}function wg(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:Ee("WebGLInfo: Unknown draw mode:",i)}}}}function Eg(r,e,t){let i=new WeakMap,n=new Ke;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,d=i.get(a);if(d===void 0||d.count!==h){let D=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],g=0;f===!0&&(g=1),p===!0&&(g=2),m===!0&&(g=3);let x=a.attributes.position.count*g,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*y*4*h),S=new Ps(M,x,y,h);S.type=Pi,S.needsUpdate=!0;let A=4*g;for(let w=0;w<h;w++){let L=u[w],V=v[w],B=_[w],H=x*y*4*w;for(let k=0;k<L.count;k++){let z=k*A;f===!0&&(n.fromBufferAttribute(L,k),M[H+z+0]=n.x,M[H+z+1]=n.y,M[H+z+2]=n.z,M[H+z+3]=0),p===!0&&(n.fromBufferAttribute(V,k),M[H+z+4]=n.x,M[H+z+5]=n.y,M[H+z+6]=n.z,M[H+z+7]=0),m===!0&&(n.fromBufferAttribute(B,k),M[H+z+8]=n.x,M[H+z+9]=n.y,M[H+z+10]=n.z,M[H+z+11]=B.itemSize===4?n.w:1)}}d={count:h,texture:S,size:new le(x,y)},i.set(a,d),a.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];let p=a.morphTargetsRelative?1:1-f;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}}}function Ag(r,e,t,i,n){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=n.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let d=o.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h},dispose:function(){s=new WeakMap}}}var Cg={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[jc]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function Rg(r,e,t,i,n){let s=new ri(e,t,{type:r,depthBuffer:i,stencilBuffer:n,depthTexture:i?new on(e,t):void 0}),a=new ri(e,t,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),o=new tt;o.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let c=new Do({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new ft(o,c),h=new $s(-1,1,1,-1,0,1),d,f=null,p=null,m=!1,u=null,v=[],_=!1;this.setSize=function(g,x){s.setSize(g,x),a.setSize(g,x);for(let y=0;y<v.length;y++){let M=v[y];M.setSize&&M.setSize(g,x)}},this.setEffects=function(g){v=g,_=v.length>0&&v[0].isRenderPass===!0;let x=s.width,y=s.height;for(let M=0;M<v.length;M++){let S=v[M];S.setSize&&S.setSize(x,y)}},this.begin=function(g,x){if(m||g.toneMapping===Ri&&v.length===0)return!1;if(u=x,x!==null){let y=x.width,M=x.height;s.width===y&&s.height===M||this.setSize(y,M)}return _===!1&&g.setRenderTarget(s),d=g.toneMapping,g.toneMapping=Ri,!0},this.hasRenderPass=function(){return _},this.end=function(g,x){g.toneMapping=d,m=!0;let y=s,M=a;for(let S=0;S<v.length;S++){let A=v[S];if(A.enabled!==!1&&(A.render(g,M,y,x),A.needsSwap!==!1)){let D=y;y=M,M=D}}if(f!==g.outputColorSpace||p!==g.toneMapping){f=g.outputColorSpace,p=g.toneMapping,c.defines={},He.getTransfer(f)===Ze&&(c.defines.SRGB_TRANSFER="");let S=Cg[p];S&&(c.defines[S]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,g.setRenderTarget(u),g.render(l,h),u=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),c.dispose()}}var mf=new Vt,Qh=new on(1,1),gf=new Ps,_f=new so,vf=new Os,Zp=[],Jp=[],Kp=new Float32Array(16),$p=new Float32Array(9),Qp=new Float32Array(4);function rs(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Zp[n];if(s===void 0&&(s=new Float32Array(n),Zp[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function xl(r,e){let t=Jp[e];t===void 0&&(t=new Int32Array(e),Jp[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Pg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ig(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function Lg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function Dg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function Ng(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Qp.set(i),r.uniformMatrix2fv(this.addr,!1,Qp),bt(t,i)}}function Ug(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;$p.set(i),r.uniformMatrix3fv(this.addr,!1,$p),bt(t,i)}}function Og(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Kp.set(i),r.uniformMatrix4fv(this.addr,!1,Kp),bt(t,i)}}function Fg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Bg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),bt(t,e)}}function zg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),bt(t,e)}}function kg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),bt(t,e)}}function Gg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Vg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),bt(t,e)}}function Hg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),bt(t,e)}}function Wg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),bt(t,e)}}function Xg(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Qh.compareFunction=t.isReversedDepthBuffer()?dl:ul,s=Qh):s=mf,t.setTexture2D(e||s,n)}function jg(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||_f,n)}function qg(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||vf,n)}function Yg(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||gf,n)}function Zg(r,e){r.uniform1fv(this.addr,e)}function Jg(r,e){let t=rs(e,this.size,2);r.uniform2fv(this.addr,t)}function Kg(r,e){let t=rs(e,this.size,3);r.uniform3fv(this.addr,t)}function $g(r,e){let t=rs(e,this.size,4);r.uniform4fv(this.addr,t)}function Qg(r,e){let t=rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function e0(r,e){let t=rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function t0(r,e){let t=rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function i0(r,e){r.uniform1iv(this.addr,e)}function n0(r,e){r.uniform2iv(this.addr,e)}function r0(r,e){r.uniform3iv(this.addr,e)}function s0(r,e){r.uniform4iv(this.addr,e)}function a0(r,e){r.uniform1uiv(this.addr,e)}function o0(r,e){r.uniform2uiv(this.addr,e)}function l0(r,e){r.uniform3uiv(this.addr,e)}function c0(r,e){r.uniform4uiv(this.addr,e)}function h0(r,e,t){let i=this.cache,n=e.length,s=xl(t,n),a;St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s)),a=this.type===r.SAMPLER_2D_SHADOW?Qh:mf;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function u0(r,e,t){let i=this.cache,n=e.length,s=xl(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||_f,s[a])}function d0(r,e,t){let i=this.cache,n=e.length,s=xl(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||vf,s[a])}function p0(r,e,t){let i=this.cache,n=e.length,s=xl(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||gf,s[a])}var eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return kg;case 5125:return Gg;case 36294:return Vg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}(t.type)}},tu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Zg;case 35664:return Jg;case 35665:return Kg;case 35666:return $g;case 35674:return Qg;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return i0;case 35667:case 35671:return n0;case 35668:case 35672:return r0;case 35669:case 35673:return s0;case 5125:return a0;case 36294:return o0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}(t.type)}},iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function ef(r,e){r.seq.push(e),r.map[e.id]=e}function f0(r,e,t){let i=r.name,n=i.length;for(Kh.lastIndex=0;;){let s=Kh.exec(i),a=Kh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){ef(t,l===void 0?new eu(o,r,e):new tu(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new iu(o),ef(t,h)),t=h}}}var ns=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);f0(o,e.getUniformLocation(t,o.name),this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function tf(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var m0=0,nf=new Ue;function rf(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),f=Math.min(c+6,l.length);for(let p=d;p<f;p++){let m=p+1;h.push(`${m===c?">":" "} ${m}: ${l[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return n}function g0(r,e){let t=function(i){He._getMatrix(nf,He.workingColorSpace,i);let n=`mat3( ${nf.elements.map(s=>s.toFixed(4))} )`;switch(He.getTransfer(i)){case Cs:return[n,"LinearTransferOETF"];case Ze:return[n,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}}(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _0={[Wc]:"Linear",[Xc]:"Reinhard",[jc]:"Cineon",[qc]:"ACESFilmic",[Zc]:"AgX",[Jc]:"Neutral",[Yc]:"Custom"};function v0(r,e){let t=_0[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fl=new R;function x0(){return He.getLuminanceCoefficients(fl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${fl.x.toFixed(4)}, ${fl.y.toFixed(4)}, ${fl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aa(r){return r!==""}function sf(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(r){return r.replace(y0,S0)}var M0=new Map;function S0(r,e){let t=ze[e];if(t===void 0){let i=M0.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=ze[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return nu(t)}var b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(r){return r.replace(b0,T0)}function T0(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function lf(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var w0={[ea]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"},E0={[Qr]:"ENVMAP_TYPE_CUBE",[Qn]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE_UV"},A0={[Qn]:"ENVMAP_MODE_REFRACTION"},C0={[Mp]:"ENVMAP_BLENDING_MULTIPLY",[Sp]:"ENVMAP_BLENDING_MIX",[bp]:"ENVMAP_BLENDING_ADD"};function R0(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=function(V){return w0[V.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}(t),l=function(V){return V.envMap===!1?"ENVMAP_TYPE_CUBE":E0[V.envMapMode]||"ENVMAP_TYPE_CUBE"}(t),h=function(V){return V.envMap===!1?"ENVMAP_MODE_REFLECTION":A0[V.envMapMode]||"ENVMAP_MODE_REFLECTION"}(t),d=function(V){return V.envMap===!1?"ENVMAP_BLENDING_NONE":C0[V.combine]||"ENVMAP_BLENDING_NONE"}(t),f=function(V){let B=V.envMapCubeUVHeight;if(B===null)return null;let H=Math.log2(B)-2,k=1/B;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:k,maxMip:H}}(t),p=function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}(t),m=function(V){let B=[];for(let H in V){let k=V[H];k!==!1&&B.push("#define "+H+" "+k)}return B.join(`
`)}(s),u=n.createProgram(),v,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(aa).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(aa).join(`
`),_.length>0&&(_+=`
`)):(v=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),_=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ri?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,g0("linearToOutputTexel",t.outputColorSpace),x0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=nu(a),a=sf(a,t),a=af(a,t),o=nu(o),o=sf(o,t),o=af(o,t),a=of(a),o=of(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let x=g+v+a,y=g+_+o,M=tf(n,n.VERTEX_SHADER,x),S=tf(n,n.FRAGMENT_SHADER,y);function A(V){if(r.debug.checkShaderErrors){let B=n.getProgramInfoLog(u)||"",H=n.getShaderInfoLog(M)||"",k=n.getShaderInfoLog(S)||"",z=B.trim(),X=H.trim(),W=k.trim(),oe=!0,pe=!0;if(n.getProgramParameter(u,n.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,u,M,S);else{let Me=rf(n,M,"vertex"),me=rf(n,S,"fragment");Ee("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(u,n.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+z+`
`+Me+`
`+me)}else z!==""?Te("WebGLProgram: Program Info Log:",z):X!==""&&W!==""||(pe=!1);pe&&(V.diagnostics={runnable:oe,programLog:z,vertexShader:{log:X,prefix:v},fragmentShader:{log:W,prefix:_}})}n.deleteShader(M),n.deleteShader(S),D=new ns(n,u),w=function(B,H){let k={},z=B.getProgramParameter(H,B.ACTIVE_ATTRIBUTES);for(let X=0;X<z;X++){let W=B.getActiveAttrib(H,X),oe=W.name,pe=1;W.type===B.FLOAT_MAT2&&(pe=2),W.type===B.FLOAT_MAT3&&(pe=3),W.type===B.FLOAT_MAT4&&(pe=4),k[oe]={type:W.type,location:B.getAttribLocation(H,oe),locationSize:pe}}return k}(n,u)}let D,w;n.attachShader(u,M),n.attachShader(u,S),t.index0AttributeName!==void 0?n.bindAttribLocation(u,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(u,0,"position"),n.linkProgram(u),this.getUniforms=function(){return D===void 0&&A(this),D},this.getAttributes=function(){return w===void 0&&A(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(u,37297)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=M,this.fragmentShader=S,this}var P0=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new su(e),t.set(e,i)),i}},su=class{constructor(e){this.id=P0++,this.code=e,this.usedTimes=0}};function I0(r,e,t,i,n,s){let a=new zr,o=new ru,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(u){return c.add(u),u===0?"uv":`uv${u}`}return{getParameters:function(u,v,_,g,x,y){let M=g.fog,S=x.geometry,A=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?g.environment:null,D=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap,w=e.get(u.envMap||A,D),L=w&&w.mapping===ia?w.image.height:null,V=p[u.type];u.precision!==null&&(f=i.getMaxPrecision(u.precision),f!==u.precision&&Te("WebGLProgram.getParameters:",u.precision,"not supported, using",f,"instead."));let B=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,H=B!==void 0?B.length:0,k,z,X,W,oe=0;if(S.morphAttributes.position!==void 0&&(oe=1),S.morphAttributes.normal!==void 0&&(oe=2),S.morphAttributes.color!==void 0&&(oe=3),V){let Dt=Wi[V];k=Dt.vertexShader,z=Dt.fragmentShader}else k=u.vertexShader,z=u.fragmentShader,o.update(u),X=o.getVertexShaderID(u),W=o.getFragmentShaderID(u);let pe=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),me=x.isInstancedMesh===!0,xe=x.isBatchedMesh===!0,re=!!u.map,ce=!!u.matcap,se=!!w,ye=!!u.aoMap,Fe=!!u.lightMap,ae=!!u.bumpMap,I=!!u.normalMap,T=!!u.displacementMap,P=!!u.emissiveMap,F=!!u.metalnessMap,b=!!u.roughnessMap,U=u.anisotropy>0,O=u.clearcoat>0,C=u.dispersion>0,j=u.iridescence>0,J=u.sheen>0,Q=u.transmission>0,ne=U&&!!u.anisotropyMap,_e=O&&!!u.clearcoatMap,N=O&&!!u.clearcoatNormalMap,Y=O&&!!u.clearcoatRoughnessMap,K=j&&!!u.iridescenceMap,Z=j&&!!u.iridescenceThicknessMap,te=J&&!!u.sheenColorMap,he=J&&!!u.sheenRoughnessMap,ge=!!u.specularMap,Ge=!!u.specularColorMap,Ie=!!u.specularIntensityMap,Ye=Q&&!!u.transmissionMap,ht=Q&&!!u.thicknessMap,de=!!u.gradientMap,Le=!!u.alphaMap,we=u.alphaTest>0,Je=!!u.alphaHash,wt=!!u.extensions,Qt=Ri;u.toneMapped&&(pe!==null&&pe.isXRRenderTarget!==!0||(Qt=r.toneMapping));let Xt={shaderID:V,shaderType:u.type,shaderName:u.name,vertexShader:k,fragmentShader:z,defines:u.defines,customVertexShaderID:X,customFragmentShaderID:W,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:f,batching:xe,batchingColor:xe&&x._colorsTexture!==null,instancing:me,instancingColor:me&&x.instanceColor!==null,instancingMorph:me&&x.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!u.alphaToCoverage,map:re,matcap:ce,envMap:se,envMapMode:se&&w.mapping,envMapCubeUVHeight:L,aoMap:ye,lightMap:Fe,bumpMap:ae,normalMap:I,displacementMap:T,emissiveMap:P,normalMapObjectSpace:I&&u.normalMapType===Ap,normalMapTangentSpace:I&&u.normalMapType===Uh,packedNormalMap:I&&u.normalMapType===Uh&&(pt=u.normalMap.format,pt===ir||pt===cl||pt===hl),metalnessMap:F,roughnessMap:b,anisotropy:U,anisotropyMap:ne,clearcoat:O,clearcoatMap:_e,clearcoatNormalMap:N,clearcoatRoughnessMap:Y,dispersion:C,iridescence:j,iridescenceMap:K,iridescenceThicknessMap:Z,sheen:J,sheenColorMap:te,sheenRoughnessMap:he,specularMap:ge,specularColorMap:Ge,specularIntensityMap:Ie,transmission:Q,transmissionMap:Ye,thicknessMap:ht,gradientMap:de,opaque:u.transparent===!1&&u.blending===ta&&u.alphaToCoverage===!1,alphaMap:Le,alphaTest:we,alphaHash:Je,combine:u.combine,mapUv:re&&m(u.map.channel),aoMapUv:ye&&m(u.aoMap.channel),lightMapUv:Fe&&m(u.lightMap.channel),bumpMapUv:ae&&m(u.bumpMap.channel),normalMapUv:I&&m(u.normalMap.channel),displacementMapUv:T&&m(u.displacementMap.channel),emissiveMapUv:P&&m(u.emissiveMap.channel),metalnessMapUv:F&&m(u.metalnessMap.channel),roughnessMapUv:b&&m(u.roughnessMap.channel),anisotropyMapUv:ne&&m(u.anisotropyMap.channel),clearcoatMapUv:_e&&m(u.clearcoatMap.channel),clearcoatNormalMapUv:N&&m(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(u.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(u.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&m(u.iridescenceThicknessMap.channel),sheenColorMapUv:te&&m(u.sheenColorMap.channel),sheenRoughnessMapUv:he&&m(u.sheenRoughnessMap.channel),specularMapUv:ge&&m(u.specularMap.channel),specularColorMapUv:Ge&&m(u.specularColorMap.channel),specularIntensityMapUv:Ie&&m(u.specularIntensityMap.channel),transmissionMapUv:Ye&&m(u.transmissionMap.channel),thicknessMapUv:ht&&m(u.thicknessMap.channel),alphaMapUv:Le&&m(u.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(I||U),vertexNormals:!!S.attributes.normal,vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!S.attributes.uv&&(re||Le),fog:!!M,useFog:u.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:u.wireframe===!1&&(u.flatShading===!0||S.attributes.normal===void 0&&I===!1&&(u.isMeshLambertMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isMeshPhysicalMaterial)),sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:x.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:oe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:u.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qt,decodeVideoTexture:re&&u.map.isVideoTexture===!0&&He.getTransfer(u.map.colorSpace)===Ze,decodeVideoTextureEmissive:P&&u.emissiveMap.isVideoTexture===!0&&He.getTransfer(u.emissiveMap.colorSpace)===Ze,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===vi,flipSided:u.side===qt,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionClipCullDistance:wt&&u.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&u.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:u.customProgramCacheKey()};var pt;return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt},getProgramCacheKey:function(u){let v=[];if(u.shaderID?v.push(u.shaderID):(v.push(u.customVertexShaderID),v.push(u.customFragmentShaderID)),u.defines!==void 0)for(let _ in u.defines)v.push(_),v.push(u.defines[_]);return u.isRawShaderMaterial===!1&&(function(_,g){_.push(g.precision),_.push(g.outputColorSpace),_.push(g.envMapMode),_.push(g.envMapCubeUVHeight),_.push(g.mapUv),_.push(g.alphaMapUv),_.push(g.lightMapUv),_.push(g.aoMapUv),_.push(g.bumpMapUv),_.push(g.normalMapUv),_.push(g.displacementMapUv),_.push(g.emissiveMapUv),_.push(g.metalnessMapUv),_.push(g.roughnessMapUv),_.push(g.anisotropyMapUv),_.push(g.clearcoatMapUv),_.push(g.clearcoatNormalMapUv),_.push(g.clearcoatRoughnessMapUv),_.push(g.iridescenceMapUv),_.push(g.iridescenceThicknessMapUv),_.push(g.sheenColorMapUv),_.push(g.sheenRoughnessMapUv),_.push(g.specularMapUv),_.push(g.specularColorMapUv),_.push(g.specularIntensityMapUv),_.push(g.transmissionMapUv),_.push(g.thicknessMapUv),_.push(g.combine),_.push(g.fogExp2),_.push(g.sizeAttenuation),_.push(g.morphTargetsCount),_.push(g.morphAttributeCount),_.push(g.numDirLights),_.push(g.numPointLights),_.push(g.numSpotLights),_.push(g.numSpotLightMaps),_.push(g.numHemiLights),_.push(g.numRectAreaLights),_.push(g.numDirLightShadows),_.push(g.numPointLightShadows),_.push(g.numSpotLightShadows),_.push(g.numSpotLightShadowsWithMaps),_.push(g.numLightProbes),_.push(g.shadowMapType),_.push(g.toneMapping),_.push(g.numClippingPlanes),_.push(g.numClipIntersection),_.push(g.depthPacking)}(v,u),function(_,g){a.disableAll(),g.instancing&&a.enable(0),g.instancingColor&&a.enable(1),g.instancingMorph&&a.enable(2),g.matcap&&a.enable(3),g.envMap&&a.enable(4),g.normalMapObjectSpace&&a.enable(5),g.normalMapTangentSpace&&a.enable(6),g.clearcoat&&a.enable(7),g.iridescence&&a.enable(8),g.alphaTest&&a.enable(9),g.vertexColors&&a.enable(10),g.vertexAlphas&&a.enable(11),g.vertexUv1s&&a.enable(12),g.vertexUv2s&&a.enable(13),g.vertexUv3s&&a.enable(14),g.vertexTangents&&a.enable(15),g.anisotropy&&a.enable(16),g.alphaHash&&a.enable(17),g.batching&&a.enable(18),g.dispersion&&a.enable(19),g.batchingColor&&a.enable(20),g.gradientMap&&a.enable(21),g.packedNormalMap&&a.enable(22),g.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),g.numLightProbeGrids>0&&a.enable(22),_.push(a.mask)}(v,u),v.push(r.outputColorSpace)),v.push(u.customProgramCacheKey),v.join()},getUniforms:function(u){let v=p[u.type],_;if(v){let g=Wi[v];_=Vp.clone(g.uniforms)}else _=u.uniforms;return _},acquireProgram:function(u,v){let _=h.get(v);return _!==void 0?++_.usedTimes:(_=new R0(r,v,u,n),l.push(_),h.set(v,_)),_},releaseProgram:function(u){if(--u.usedTimes===0){let v=l.indexOf(u);l[v]=l[l.length-1],l.pop(),h.delete(u.cacheKey),u.destroy()}},releaseShaderCache:function(u){o.remove(u)},programs:l,dispose:function(){o.dispose()}}}function L0(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function D0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function cf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hf(){let r=[],e=0,t=[],i=[],n=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,d,f){let p=r[e];return p===void 0?(p={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:d,group:f},r[e]=p):(p.id=o.id,p.object=o,p.geometry=c,p.material=l,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=d,p.group=f),e++,p}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,c,l,h,d,f){let p=a(o,c,l,h,d,f);l.transmission>0?i.push(p):l.transparent===!0?n.push(p):t.push(p)},unshift:function(o,c,l,h,d,f){let p=a(o,c,l,h,d,f);l.transmission>0?i.unshift(p):l.transparent===!0?n.unshift(p):t.unshift(p)},finish:function(){for(let o=e,c=r.length;o<c;o++){let l=r[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c){t.length>1&&t.sort(o||D0),i.length>1&&i.sort(c||cf),n.length>1&&n.sort(c||cf)}}}function N0(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new hf,r.set(e,[n])):t>=i.length?(n=new hf,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function U0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Oe};break;case"SpotLight":t={position:new R,direction:new R,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new R,halfWidth:new R,halfHeight:new R}}return r[e.id]=t,t}}}var O0=0;function F0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function B0(r){let e=new U0,t=function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new R);let n=new R,s=new Be,a=new Be;return{setup:function(o){let c=0,l=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,f=0,p=0,m=0,u=0,v=0,_=0,g=0,x=0,y=0,M=0;o.sort(F0);for(let A=0,D=o.length;A<D;A++){let w=o[A],L=w.color,V=w.intensity,B=w.distance,H=null;if(w.shadow&&w.shadow.map&&(H=w.shadow.map.texture.format===ir?w.shadow.map.texture:w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)c+=L.r*V,l+=L.g*V,h+=L.b*V;else if(w.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(w.sh.coefficients[k],V);M++}else if(w.isDirectionalLight){let k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let z=w.shadow,X=t.get(w);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=w.shadow.matrix,v++}i.directional[d]=k,d++}else if(w.isSpotLight){let k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(L).multiplyScalar(V),k.distance=B,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,i.spot[p]=k;let z=w.shadow;if(w.map&&(i.spotLightMap[x]=w.map,x++,z.updateMatrices(w),w.castShadow&&y++),i.spotLightMatrix[p]=z.matrix,w.castShadow){let X=t.get(w);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.spotShadow[p]=X,i.spotShadowMap[p]=H,g++}p++}else if(w.isRectAreaLight){let k=e.get(w);k.color.copy(L).multiplyScalar(V),k.halfWidth.set(.5*w.width,0,0),k.halfHeight.set(0,.5*w.height,0),i.rectArea[m]=k,m++}else if(w.isPointLight){let k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){let z=w.shadow,X=t.get(w);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,i.pointShadow[f]=X,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=w.shadow.matrix,_++}i.point[f]=k,f++}else if(w.isHemisphereLight){let k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(V),k.groundColor.copy(w.groundColor).multiplyScalar(V),i.hemi[u]=k,u++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let S=i.hash;S.directionalLength===d&&S.pointLength===f&&S.spotLength===p&&S.rectAreaLength===m&&S.hemiLength===u&&S.numDirectionalShadows===v&&S.numPointShadows===_&&S.numSpotShadows===g&&S.numSpotMaps===x&&S.numLightProbes===M||(i.directional.length=d,i.spot.length=p,i.rectArea.length=m,i.point.length=f,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=g+x-y,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=M,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=u,S.numDirectionalShadows=v,S.numPointShadows=_,S.numSpotShadows=g,S.numSpotMaps=x,S.numLightProbes=M,i.version=O0++)},setupView:function(o,c){let l=0,h=0,d=0,f=0,p=0,m=c.matrixWorldInverse;for(let u=0,v=o.length;u<v;u++){let _=o[u];if(_.isDirectionalLight){let g=i.directional[l];g.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(n),g.direction.transformDirection(m),l++}else if(_.isSpotLight){let g=i.spot[d];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(n),g.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let g=i.rectArea[f];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),g.halfWidth.set(.5*_.width,0,0),g.halfHeight.set(0,.5*_.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),f++}else if(_.isPointLight){let g=i.point[h];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){let g=i.hemi[p];g.direction.setFromMatrixPosition(_.matrixWorld),g.direction.transformDirection(m),p++}}},state:i}}function uf(r){let e=new B0(r),t=[],i=[],n=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,n.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){n.push(a)}}}function z0(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new uf(r),e.set(t,[s])):i>=n.length?(s=new uf(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var k0=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],G0=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],df=new Be,oa=new R,$h=new R;function V0(r,e,t){let i=new Cn,n=new le,s=new le,a=new Ke,o=new No,c=new Uo,l={},h=t.maxTextureSize,d={[Kr]:qt,[qt]:Kr,[vi]:vi},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new tt;m.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let u=new ft(m,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea;let _=this.type;function g(S,A){let D=e.update(u);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ri(n.x,n.y,{format:ir,type:Vi})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(A,null,D,f,u,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(A,null,D,p,u,null)}function x(S,A,D,w){let L=null,V=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)L=V;else if(L=D.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=L.uuid,H=A.uuid,k=l[B];k===void 0&&(k={},l[B]=k);let z=k[H];z===void 0&&(z=L.clone(),k[H]=z,A.addEventListener("dispose",M)),L=z}return L.visible=A.visible,L.wireframe=A.wireframe,L.side=w===Jr?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:d[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,D.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(r.properties.get(L).light=D),L}function y(S,A,D,w,L){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Jr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let B=e.update(S),H=S.material;if(Array.isArray(H)){let k=B.groups;for(let z=0,X=k.length;z<X;z++){let W=k[z],oe=H[W.materialIndex];if(oe&&oe.visible){let pe=x(S,oe,w,L);S.onBeforeShadow(r,S,A,D,B,pe,W),r.renderBufferDirect(D,null,B,pe,S,W),S.onAfterShadow(r,S,A,D,B,pe,W)}}}else if(H.visible){let k=x(S,H,w,L);S.onBeforeShadow(r,S,A,D,B,k,null),r.renderBufferDirect(D,null,B,k,S,null),S.onAfterShadow(r,S,A,D,B,k,null)}}let V=S.children;for(let B=0,H=V.length;B<H;B++)y(V[B],A,D,w,L)}function M(S){S.target.removeEventListener("dispose",M);for(let A in l){let D=l[A],w=S.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}this.render=function(S,A,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;this.type===Jo&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ea);let w=r.getRenderTarget(),L=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=_!==this.type;H&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(z=>z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,z=S.length;k<z;k++){let X=S[k],W=X.shadow;if(W===void 0){Te("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let oe=W.getFrameExtents();n.multiply(oe),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/oe.x),n.x=s.x*oe.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/oe.y),n.y=s.y*oe.y,W.mapSize.y=s.y));let pe=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=pe,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Jr){if(X.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ri(n.x,n.y,{format:ir,type:Vi,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new on(n.x,n.y,Pi),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Ln,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=gi,W.map.depthTexture.magFilter=gi}else X.isPointLight?(W.map=new _l(n.x),W.map.depthTexture=new uo(n.x,hn)):(W.map=new ri(n.x,n.y),W.map.depthTexture=new on(n.x,n.y,hn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Ln,this.type===ea?(W.map.depthTexture.compareFunction=pe?dl:ul,W.map.depthTexture.minFilter=Ot,W.map.depthTexture.magFilter=Ot):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=gi,W.map.depthTexture.magFilter=gi);W.camera.updateProjectionMatrix()}let Me=W.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<Me;me++){if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,me),r.clear();else{me===0&&(r.setRenderTarget(W.map),r.clear());let xe=W.getViewport(me);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),B.viewport(a)}if(X.isPointLight){let xe=W.camera,re=W.matrix,ce=X.distance||xe.far;ce!==xe.far&&(xe.far=ce,xe.updateProjectionMatrix()),oa.setFromMatrixPosition(X.matrixWorld),xe.position.copy(oa),$h.copy(xe.position),$h.add(k0[me]),xe.up.copy(G0[me]),xe.lookAt($h),xe.updateMatrixWorld(),re.makeTranslation(-oa.x,-oa.y,-oa.z),df.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(df,xe.coordinateSystem,xe.reversedDepth)}else W.updateMatrices(X);i=W.getFrustum(),y(A,D,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Jr&&g(W,D),W.needsUpdate=!1}_=this.type,v.needsUpdate=!1,r.setRenderTarget(w,L,V)}}function H0(r,e){let t=new function(){let b=!1,U=new Ke,O=null,C=new Ke(0,0,0,0);return{setMask:function(j){O===j||b||(r.colorMask(j,j,j,j),O=j)},setLocked:function(j){b=j},setClear:function(j,J,Q,ne,_e){_e===!0&&(j*=ne,J*=ne,Q*=ne),U.set(j,J,Q,ne),C.equals(U)===!1&&(r.clearColor(j,J,Q,ne),C.copy(U))},reset:function(){b=!1,O=null,C.set(-1,0,0,0)}}},i=new function(){let b=!1,U=!1,O=null,C=null,j=null;return{setReversed:function(J){if(U!==J){let Q=e.get("EXT_clip_control");J?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT),U=J;let ne=j;j=null,this.setClear(ne)}},getReversed:function(){return U},setTest:function(J){J?se(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(J){O===J||b||(r.depthMask(J),O=J)},setFunc:function(J){if(U&&(J=Fp[J]),C!==J){switch(J){case Fc:r.depthFunc(r.NEVER);break;case Bc:r.depthFunc(r.ALWAYS);break;case zc:r.depthFunc(r.LESS);break;case Ko:r.depthFunc(r.LEQUAL);break;case kc:r.depthFunc(r.EQUAL);break;case Gc:r.depthFunc(r.GEQUAL);break;case Vc:r.depthFunc(r.GREATER);break;case Hc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}C=J}},setLocked:function(J){b=J},setClear:function(J){j!==J&&(j=J,U&&(J=1-J),r.clearDepth(J))},reset:function(){b=!1,O=null,C=null,j=null,U=!1}}},n=new function(){let b=!1,U=null,O=null,C=null,j=null,J=null,Q=null,ne=null,_e=null;return{setTest:function(N){b||(N?se(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(N){U===N||b||(r.stencilMask(N),U=N)},setFunc:function(N,Y,K){O===N&&C===Y&&j===K||(r.stencilFunc(N,Y,K),O=N,C=Y,j=K)},setOp:function(N,Y,K){J===N&&Q===Y&&ne===K||(r.stencilOp(N,Y,K),J=N,Q=Y,ne=K)},setLocked:function(N){b=N},setClear:function(N){_e!==N&&(r.clearStencil(N),_e=N)},reset:function(){b=!1,U=null,O=null,C=null,j=null,J=null,Q=null,ne=null,_e=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l={},h=new WeakMap,d=[],f=null,p=!1,m=null,u=null,v=null,_=null,g=null,x=null,y=null,M=new Oe(0,0,0),S=0,A=!1,D=null,w=null,L=null,V=null,B=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,z=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=z>=2);let W=null,oe={},pe=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),me=new Ke().fromArray(pe),xe=new Ke().fromArray(Me);function re(b,U,O,C){let j=new Uint8Array(4),J=r.createTexture();r.bindTexture(b,J),r.texParameteri(b,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(b,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Q=0;Q<O;Q++)b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY?r.texImage3D(U,0,r.RGBA,1,1,C,0,r.RGBA,r.UNSIGNED_BYTE,j):r.texImage2D(U+Q,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,j);return J}let ce={};function se(b){o[b]!==!0&&(r.enable(b),o[b]=!0)}function ye(b){o[b]!==!1&&(r.disable(b),o[b]=!1)}ce[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),se(r.DEPTH_TEST),i.setFunc(Ko),T(!1),P(Dc),se(r.CULL_FACE),I(Gi);let Fe={[$r]:r.FUNC_ADD,[ip]:r.FUNC_SUBTRACT,[np]:r.FUNC_REVERSE_SUBTRACT};Fe[rp]=r.MIN,Fe[sp]=r.MAX;let ae={[ap]:r.ZERO,[op]:r.ONE,[lp]:r.SRC_COLOR,[hp]:r.SRC_ALPHA,[gp]:r.SRC_ALPHA_SATURATE,[fp]:r.DST_COLOR,[dp]:r.DST_ALPHA,[cp]:r.ONE_MINUS_SRC_COLOR,[up]:r.ONE_MINUS_SRC_ALPHA,[mp]:r.ONE_MINUS_DST_COLOR,[pp]:r.ONE_MINUS_DST_ALPHA,[_p]:r.CONSTANT_COLOR,[vp]:r.ONE_MINUS_CONSTANT_COLOR,[xp]:r.CONSTANT_ALPHA,[yp]:r.ONE_MINUS_CONSTANT_ALPHA};function I(b,U,O,C,j,J,Q,ne,_e,N){if(b!==Gi){if(p===!1&&(se(r.BLEND),p=!0),b===tp)j=j||U,J=J||O,Q=Q||C,U===u&&j===g||(r.blendEquationSeparate(Fe[U],Fe[j]),u=U,g=j),O===v&&C===_&&J===x&&Q===y||(r.blendFuncSeparate(ae[O],ae[C],ae[J],ae[Q]),v=O,_=C,x=J,y=Q),ne.equals(M)!==!1&&_e===S||(r.blendColor(ne.r,ne.g,ne.b,_e),M.copy(ne),S=_e),m=b,A=!1;else if(b!==m||N!==A){if(u===$r&&g===$r||(r.blendEquation(r.FUNC_ADD),u=$r,g=$r),N)switch(b){case ta:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nc:r.blendFunc(r.ONE,r.ONE);break;case Uc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Oc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ee("WebGLState: Invalid blending: ",b)}else switch(b){case ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uc:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",b)}v=null,_=null,x=null,y=null,M.set(0,0,0),S=0,m=b,A=N}}else p===!0&&(ye(r.BLEND),p=!1)}function T(b){D!==b&&(b?r.frontFace(r.CW):r.frontFace(r.CCW),D=b)}function P(b){b!==Qd?(se(r.CULL_FACE),b!==w&&(b===Dc?r.cullFace(r.BACK):b===ep?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),w=b}function F(b,U,O){b?(se(r.POLYGON_OFFSET_FILL),V===U&&B===O||(V=U,B=O,i.getReversed()&&(U=-U),r.polygonOffset(U,O))):ye(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:se,disable:ye,bindFramebuffer:function(b,U){return l[b]!==U&&(r.bindFramebuffer(b,U),l[b]=U,b===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=U),b===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=U),!0)},drawBuffers:function(b,U){let O=d,C=!1;if(b){O=h.get(U),O===void 0&&(O=[],h.set(U,O));let j=b.textures;if(O.length!==j.length||O[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Q=j.length;J<Q;J++)O[J]=r.COLOR_ATTACHMENT0+J;O.length=j.length,C=!0}}else O[0]!==r.BACK&&(O[0]=r.BACK,C=!0);C&&r.drawBuffers(O)},useProgram:function(b){return f!==b&&(r.useProgram(b),f=b,!0)},setBlending:I,setMaterial:function(b,U){b.side===vi?ye(r.CULL_FACE):se(r.CULL_FACE);let O=b.side===qt;U&&(O=!O),T(O),b.blending===ta&&b.transparent===!1?I(Gi):I(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),i.setFunc(b.depthFunc),i.setTest(b.depthTest),i.setMask(b.depthWrite),t.setMask(b.colorWrite);let C=b.stencilWrite;n.setTest(C),C&&(n.setMask(b.stencilWriteMask),n.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),n.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),F(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:T,setCullFace:P,setLineWidth:function(b){b!==L&&(k&&r.lineWidth(b),L=b)},setPolygonOffset:F,setScissorTest:function(b){b?se(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=r.TEXTURE0+H-1),W!==b&&(r.activeTexture(b),W=b)},bindTexture:function(b,U,O){O===void 0&&(O=W===null?r.TEXTURE0+H-1:W);let C=oe[O];C===void 0&&(C={type:void 0,texture:void 0},oe[O]=C),C.type===b&&C.texture===U||(W!==O&&(r.activeTexture(O),W=O),r.bindTexture(b,U||ce[b]),C.type=b,C.texture=U)},unbindTexture:function(){let b=oe[W];b!==void 0&&b.type!==void 0&&(r.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(b){Ee("WebGLState:",b)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(b){Ee("WebGLState:",b)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(b){Ee("WebGLState:",b)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(b){Ee("WebGLState:",b)}},pixelStorei:function(b,U){c[b]!==U&&(r.pixelStorei(b,U),c[b]=U)},getParameter:function(b){return c[b]!==void 0?c[b]:r.getParameter(b)},updateUBOMapping:function(b,U){let O=a.get(U);O===void 0&&(O=new WeakMap,a.set(U,O));let C=O.get(b);C===void 0&&(C=r.getUniformBlockIndex(U,b.name),O.set(b,C))},uniformBlockBinding:function(b,U){let O=a.get(U).get(b);s.get(U)!==O&&(r.uniformBlockBinding(U,O,b.__bindingPointIndex),s.set(U,O))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(b){Ee("WebGLState:",b)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(b){Ee("WebGLState:",b)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(b){Ee("WebGLState:",b)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(b){Ee("WebGLState:",b)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(b){Ee("WebGLState:",b)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(b){Ee("WebGLState:",b)}},scissor:function(b){me.equals(b)===!1&&(r.scissor(b.x,b.y,b.z,b.w),me.copy(b))},viewport:function(b){xe.equals(b)===!1&&(r.viewport(b.x,b.y,b.z,b.w),xe.copy(b))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),o={},c={},W=null,oe={},l={},h=new WeakMap,d=[],f=null,p=!1,m=null,u=null,v=null,_=null,g=null,x=null,y=null,M=new Oe(0,0,0),S=0,A=!1,D=null,w=null,L=null,V=null,B=null,me.set(0,0,r.canvas.width,r.canvas.height),xe.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function W0(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(I,T){return m?new OffscreenCanvas(I,T):Rs("canvas")}function v(I,T,P){let F=1,b=ae(I);if((b.width>P||b.height>P)&&(F=P/Math.max(b.width,b.height)),F<1){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let U=Math.floor(F*b.width),O=Math.floor(F*b.height);f===void 0&&(f=u(U,O));let C=T?u(U,O):f;return C.width=U,C.height=O,C.getContext("2d").drawImage(I,0,0,U,O),Te("WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+U+"x"+O+")."),C}return"data"in I&&Te("WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),I}return I}function _(I){return I.generateMipmaps}function g(I){r.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,T,P,F,b,U=!1){if(I!==null){if(r[I]!==void 0)return r[I];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let O;F&&(O=e.get("EXT_texture_norm16"),O||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=T;if(T===r.RED&&(P===r.FLOAT&&(C=r.R32F),P===r.HALF_FLOAT&&(C=r.R16F),P===r.UNSIGNED_BYTE&&(C=r.R8),P===r.UNSIGNED_SHORT&&O&&(C=O.R16_EXT),P===r.SHORT&&O&&(C=O.R16_SNORM_EXT)),T===r.RED_INTEGER&&(P===r.UNSIGNED_BYTE&&(C=r.R8UI),P===r.UNSIGNED_SHORT&&(C=r.R16UI),P===r.UNSIGNED_INT&&(C=r.R32UI),P===r.BYTE&&(C=r.R8I),P===r.SHORT&&(C=r.R16I),P===r.INT&&(C=r.R32I)),T===r.RG&&(P===r.FLOAT&&(C=r.RG32F),P===r.HALF_FLOAT&&(C=r.RG16F),P===r.UNSIGNED_BYTE&&(C=r.RG8),P===r.UNSIGNED_SHORT&&O&&(C=O.RG16_EXT),P===r.SHORT&&O&&(C=O.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(P===r.UNSIGNED_BYTE&&(C=r.RG8UI),P===r.UNSIGNED_SHORT&&(C=r.RG16UI),P===r.UNSIGNED_INT&&(C=r.RG32UI),P===r.BYTE&&(C=r.RG8I),P===r.SHORT&&(C=r.RG16I),P===r.INT&&(C=r.RG32I)),T===r.RGB_INTEGER&&(P===r.UNSIGNED_BYTE&&(C=r.RGB8UI),P===r.UNSIGNED_SHORT&&(C=r.RGB16UI),P===r.UNSIGNED_INT&&(C=r.RGB32UI),P===r.BYTE&&(C=r.RGB8I),P===r.SHORT&&(C=r.RGB16I),P===r.INT&&(C=r.RGB32I)),T===r.RGBA_INTEGER&&(P===r.UNSIGNED_BYTE&&(C=r.RGBA8UI),P===r.UNSIGNED_SHORT&&(C=r.RGBA16UI),P===r.UNSIGNED_INT&&(C=r.RGBA32UI),P===r.BYTE&&(C=r.RGBA8I),P===r.SHORT&&(C=r.RGBA16I),P===r.INT&&(C=r.RGBA32I)),T===r.RGB&&(P===r.UNSIGNED_SHORT&&O&&(C=O.RGB16_EXT),P===r.SHORT&&O&&(C=O.RGB16_SNORM_EXT),P===r.UNSIGNED_INT_5_9_9_9_REV&&(C=r.RGB9_E5),P===r.UNSIGNED_INT_10F_11F_11F_REV&&(C=r.R11F_G11F_B10F)),T===r.RGBA){let j=U?Cs:He.getTransfer(b);P===r.FLOAT&&(C=r.RGBA32F),P===r.HALF_FLOAT&&(C=r.RGBA16F),P===r.UNSIGNED_BYTE&&(C=j===Ze?r.SRGB8_ALPHA8:r.RGBA8),P===r.UNSIGNED_SHORT&&O&&(C=O.RGBA16_EXT),P===r.SHORT&&O&&(C=O.RGBA16_SNORM_EXT),P===r.UNSIGNED_SHORT_4_4_4_4&&(C=r.RGBA4),P===r.UNSIGNED_SHORT_5_5_5_1&&(C=r.RGB5_A1)}return C!==r.R16F&&C!==r.R32F&&C!==r.RG16F&&C!==r.RG32F&&C!==r.RGBA16F&&C!==r.RGBA32F||e.get("EXT_color_buffer_float"),C}function M(I,T){let P;return I?T===null||T===hn||T===ts?P=r.DEPTH24_STENCIL8:T===Pi?P=r.DEPTH32F_STENCIL8:T===es&&(P=r.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===hn||T===ts?P=r.DEPTH_COMPONENT24:T===Pi?P=r.DEPTH_COMPONENT32F:T===es&&(P=r.DEPTH_COMPONENT16),P}function S(I,T){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==gi&&I.minFilter!==Ot?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function A(I){let T=I.target;T.removeEventListener("dispose",A),function(P){let F=i.get(P);if(F.__webglInit===void 0)return;let b=P.source,U=p.get(b);if(U){let O=U[F.__cacheKey];O.usedTimes--,O.usedTimes===0&&w(P),Object.keys(U).length===0&&p.delete(b)}i.remove(P)}(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function D(I){let T=I.target;T.removeEventListener("dispose",D),function(P){let F=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(F.__webglFramebuffer[U]))for(let O=0;O<F.__webglFramebuffer[U].length;O++)r.deleteFramebuffer(F.__webglFramebuffer[U][O]);else r.deleteFramebuffer(F.__webglFramebuffer[U]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[U])}else{if(Array.isArray(F.__webglFramebuffer))for(let U=0;U<F.__webglFramebuffer.length;U++)r.deleteFramebuffer(F.__webglFramebuffer[U]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let U=0;U<F.__webglColorRenderbuffer.length;U++)F.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[U]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let b=P.textures;for(let U=0,O=b.length;U<O;U++){let C=i.get(b[U]);C.__webglTexture&&(r.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(b[U])}i.remove(P)}(T)}function w(I){let T=i.get(I);r.deleteTexture(T.__webglTexture);let P=I.source;delete p.get(P)[T.__cacheKey],a.memory.textures--}let L=0;function V(I,T){let P=i.get(I);if(I.isVideoTexture&&function(F){let b=a.render.frame;h.get(F)!==b&&(h.set(F,b),F.update())}(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&P.__version!==I.version){let F=I.image;if(F===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else{if(F.complete!==!1)return void oe(P,I,T);Te("WebGLRenderer: Texture marked for update but image is incomplete")}}else I.isExternalTexture&&(P.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,P.__webglTexture,r.TEXTURE0+T)}let B={[Zn]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[eo]:r.MIRRORED_REPEAT},H={[gi]:r.NEAREST,[Tp]:r.NEAREST_MIPMAP_NEAREST,[na]:r.NEAREST_MIPMAP_LINEAR,[Ot]:r.LINEAR,[el]:r.LINEAR_MIPMAP_NEAREST,[er]:r.LINEAR_MIPMAP_LINEAR},k={[Cp]:r.NEVER,[Dp]:r.ALWAYS,[Rp]:r.LESS,[ul]:r.LEQUAL,[Pp]:r.EQUAL,[dl]:r.GEQUAL,[Ip]:r.GREATER,[Lp]:r.NOTEQUAL};function z(I,T){if(T.type!==Pi||e.has("OES_texture_float_linear")!==!1||T.magFilter!==Ot&&T.magFilter!==el&&T.magFilter!==na&&T.magFilter!==er&&T.minFilter!==Ot&&T.minFilter!==el&&T.minFilter!==na&&T.minFilter!==er||Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,B[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,B[T.wrapT]),I!==r.TEXTURE_3D&&I!==r.TEXTURE_2D_ARRAY||r.texParameteri(I,r.TEXTURE_WRAP_R,B[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,H[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,H[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gi||T.minFilter!==na&&T.minFilter!==er||T.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function X(I,T){let P=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",A));let F=T.source,b=p.get(F);b===void 0&&(b={},p.set(F,b));let U=function(O){let C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}(T);if(U!==I.__cacheKey){b[U]===void 0&&(b[U]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,P=!0),b[U].usedTimes++;let O=b[I.__cacheKey];O!==void 0&&(b[I.__cacheKey].usedTimes--,O.usedTimes===0&&w(T)),I.__cacheKey=U,I.__webglTexture=b[U].texture}return P}function W(I,T,P){return Math.floor(Math.floor(I/P)/T)}function oe(I,T,P){let F=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(F=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(F=r.TEXTURE_3D);let b=X(I,T),U=T.source;t.bindTexture(F,I.__webglTexture,r.TEXTURE0+P);let O=i.get(U);if(U.version!==O.__version||b===!0){if(t.activeTexture(r.TEXTURE0+P),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let te=He.getPrimaries(He.workingColorSpace),he=T.colorSpace===nr?null:He.getPrimaries(T.colorSpace),ge=T.colorSpace===nr||te===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let C=v(T.image,!1,n.maxTextureSize);C=Fe(T,C);let j=s.convert(T.format,T.colorSpace),J=s.convert(T.type),Q,ne=y(T.internalFormat,j,J,T.normalized,T.colorSpace,T.isVideoTexture);z(F,T);let _e=T.mipmaps,N=T.isVideoTexture!==!0,Y=O.__version===void 0||b===!0,K=U.dataReady,Z=S(T,C);if(T.isDepthTexture)ne=M(T.format===tr,T.type),Y&&(N?t.texStorage2D(r.TEXTURE_2D,1,ne,C.width,C.height):t.texImage2D(r.TEXTURE_2D,0,ne,C.width,C.height,0,j,J,null));else if(T.isDataTexture)if(_e.length>0){N&&Y&&t.texStorage2D(r.TEXTURE_2D,Z,ne,_e[0].width,_e[0].height);for(let te=0,he=_e.length;te<he;te++)Q=_e[te],N?K&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,Q.width,Q.height,j,J,Q.data):t.texImage2D(r.TEXTURE_2D,te,ne,Q.width,Q.height,0,j,J,Q.data);T.generateMipmaps=!1}else N?(Y&&t.texStorage2D(r.TEXTURE_2D,Z,ne,C.width,C.height),K&&function(te,he,ge,Ge){let Ie=te.updateRanges;if(Ie.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,he.width,he.height,ge,Ge,he.data);else{Ie.sort((we,Je)=>we.start-Je.start);let Ye=0;for(let we=1;we<Ie.length;we++){let Je=Ie[Ye],wt=Ie[we],Qt=Je.start+Je.count,Xt=W(wt.start,he.width,4),pt=W(Je.start,he.width,4);wt.start<=Qt+1&&Xt===pt&&W(wt.start+wt.count-1,he.width,4)===Xt?Je.count=Math.max(Je.count,wt.start+wt.count-Je.start):(++Ye,Ie[Ye]=wt)}Ie.length=Ye+1;let ht=t.getParameter(r.UNPACK_ROW_LENGTH),de=t.getParameter(r.UNPACK_SKIP_PIXELS),Le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,he.width);for(let we=0,Je=Ie.length;we<Je;we++){let wt=Ie[we],Qt=Math.floor(wt.start/4),Xt=Math.ceil(wt.count/4),pt=Qt%he.width,Dt=Math.floor(Qt/he.width),gn=Xt;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(r.UNPACK_SKIP_ROWS,Dt),t.texSubImage2D(r.TEXTURE_2D,0,pt,Dt,gn,1,ge,Ge,he.data)}te.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ht),t.pixelStorei(r.UNPACK_SKIP_PIXELS,de),t.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}(T,C,j,J)):t.texImage2D(r.TEXTURE_2D,0,ne,C.width,C.height,0,j,J,C.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){N&&Y&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Z,ne,_e[0].width,_e[0].height,C.depth);for(let te=0,he=_e.length;te<he;te++)if(Q=_e[te],T.format!==Ii)if(j!==null)if(N){if(K)if(T.layerUpdates.size>0){let ge=Gh(Q.width,Q.height,T.format,T.type);for(let Ge of T.layerUpdates){let Ie=Q.data.subarray(Ge*ge/Q.data.BYTES_PER_ELEMENT,(Ge+1)*ge/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Ge,Q.width,Q.height,1,j,Ie)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,Q.width,Q.height,C.depth,j,Q.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,ne,Q.width,Q.height,C.depth,0,Q.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?K&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,Q.width,Q.height,C.depth,j,J,Q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,ne,Q.width,Q.height,C.depth,0,j,J,Q.data)}else{N&&Y&&t.texStorage2D(r.TEXTURE_2D,Z,ne,_e[0].width,_e[0].height);for(let te=0,he=_e.length;te<he;te++)Q=_e[te],T.format!==Ii?j!==null?N?K&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,Q.width,Q.height,j,Q.data):t.compressedTexImage2D(r.TEXTURE_2D,te,ne,Q.width,Q.height,0,Q.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?K&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,Q.width,Q.height,j,J,Q.data):t.texImage2D(r.TEXTURE_2D,te,ne,Q.width,Q.height,0,j,J,Q.data)}else if(T.isDataArrayTexture)if(N){if(Y&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Z,ne,C.width,C.height,C.depth),K)if(T.layerUpdates.size>0){let te=Gh(C.width,C.height,T.format,T.type);for(let he of T.layerUpdates){let ge=C.data.subarray(he*te/C.data.BYTES_PER_ELEMENT,(he+1)*te/C.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,C.width,C.height,1,j,J,ge)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,j,J,C.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ne,C.width,C.height,C.depth,0,j,J,C.data);else if(T.isData3DTexture)N?(Y&&t.texStorage3D(r.TEXTURE_3D,Z,ne,C.width,C.height,C.depth),K&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,j,J,C.data)):t.texImage3D(r.TEXTURE_3D,0,ne,C.width,C.height,C.depth,0,j,J,C.data);else if(T.isFramebufferTexture){if(Y)if(N)t.texStorage2D(r.TEXTURE_2D,Z,ne,C.width,C.height);else{let te=C.width,he=C.height;for(let ge=0;ge<Z;ge++)t.texImage2D(r.TEXTURE_2D,ge,ne,te,he,0,j,J,null),te>>=1,he>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let te=r.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),C.parentNode!==te)return te.appendChild(C),d.add(T),te.onpaint=Ye=>{let ht=Ye.changedElements;for(let de of d)ht.includes(de.image)&&(de.needsUpdate=!0)},void te.requestPaint();let he=0,ge=r.RGBA,Ge=r.RGBA,Ie=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,he,ge,Ge,Ie,C),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(_e.length>0){if(N&&Y){let te=ae(_e[0]);t.texStorage2D(r.TEXTURE_2D,Z,ne,te.width,te.height)}for(let te=0,he=_e.length;te<he;te++)Q=_e[te],N?K&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,j,J,Q):t.texImage2D(r.TEXTURE_2D,te,ne,j,J,Q);T.generateMipmaps=!1}else if(N){if(Y){let te=ae(C);t.texStorage2D(r.TEXTURE_2D,Z,ne,te.width,te.height)}K&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,j,J,C)}else t.texImage2D(r.TEXTURE_2D,0,ne,j,J,C);_(T)&&g(F),O.__version=U.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function pe(I,T,P,F,b,U){let O=s.convert(P.format,P.colorSpace),C=s.convert(P.type),j=y(P.internalFormat,O,C,P.normalized,P.colorSpace),J=i.get(T),Q=i.get(P);if(Q.__renderTarget=T,!J.__hasExternalTextures){let ne=Math.max(1,T.width>>U),_e=Math.max(1,T.height>>U);b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY?t.texImage3D(b,U,j,ne,_e,T.depth,0,O,C,null):t.texImage2D(b,U,j,ne,_e,0,O,C,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),ye(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,F,b,Q.__webglTexture,0,se(T)):(b===r.TEXTURE_2D||b>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,F,b,Q.__webglTexture,U),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(I,T,P){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){let F=T.depthTexture,b=F&&F.isDepthTexture?F.type:null,U=M(T.stencilBuffer,b),O=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ye(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se(T),U,T.width,T.height):P?r.renderbufferStorageMultisample(r.RENDERBUFFER,se(T),U,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,U,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,O,r.RENDERBUFFER,I)}else{let F=T.textures;for(let b=0;b<F.length;b++){let U=F[b],O=s.convert(U.format,U.colorSpace),C=s.convert(U.type),j=y(U.internalFormat,O,C,U.normalized,U.colorSpace);ye(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se(T),j,T.width,T.height):P?r.renderbufferStorageMultisample(r.RENDERBUFFER,se(T),j,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,j,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(I,T,P){let F=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!T.depthTexture||!T.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let b=i.get(T.depthTexture);if(b.__renderTarget=T,b.__webglTexture&&T.depthTexture.image.width===T.width&&T.depthTexture.image.height===T.height||(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F){if(b.__webglInit===void 0&&(b.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),b.__webglTexture===void 0){b.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture),z(r.TEXTURE_CUBE_MAP,T.depthTexture);let J=s.convert(T.depthTexture.format),Q=s.convert(T.depthTexture.type),ne;T.depthTexture.format===Ln?ne=r.DEPTH_COMPONENT24:T.depthTexture.format===tr&&(ne=r.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ne,T.width,T.height,0,J,Q,null)}}else V(T.depthTexture,0);let U=b.__webglTexture,O=se(T),C=F?r.TEXTURE_CUBE_MAP_POSITIVE_X+P:r.TEXTURE_2D,j=T.depthTexture.format===tr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ln)ye(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,C,U,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,j,C,U,0);else{if(T.depthTexture.format!==tr)throw new Error("Unknown depthTexture format");ye(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,C,U,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,j,C,U,0)}}function xe(I){let T=i.get(I),P=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let F=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),F){let b=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,F.removeEventListener("dispose",b)};F.addEventListener("dispose",b),T.__depthDisposeCallback=b}T.__boundDepthTexture=F}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(P)for(let F=0;F<6;F++)me(T.__webglFramebuffer[F],I,F);else{let F=I.texture.mipmaps;F&&F.length>0?me(T.__webglFramebuffer[0],I,0):me(T.__webglFramebuffer,I,0)}else if(P){T.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[F]),T.__webglDepthbuffer[F]===void 0)T.__webglDepthbuffer[F]=r.createRenderbuffer(),Me(T.__webglDepthbuffer[F],I,!1);else{let b=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=T.__webglDepthbuffer[F];r.bindRenderbuffer(r.RENDERBUFFER,U),r.framebufferRenderbuffer(r.FRAMEBUFFER,b,r.RENDERBUFFER,U)}}else{let F=I.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Me(T.__webglDepthbuffer,I,!1);else{let b=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,U),r.framebufferRenderbuffer(r.FRAMEBUFFER,b,r.RENDERBUFFER,U)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let re=[],ce=[];function se(I){return Math.min(n.maxSamples,I.samples)}function ye(I){let T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Fe(I,T){let P=I.colorSpace,F=I.format,b=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||P!==As&&P!==nr&&(He.getTransfer(P)===Ze?F===Ii&&b===li||Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",P)),T}function ae(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=function(){let I=L;return I>=n.maxTextures&&Te("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),L+=1,I},this.resetTextureUnits=function(){L=0},this.getTextureUnits=function(){return L},this.setTextureUnits=function(I){L=I},this.setTexture2D=V,this.setTexture2DArray=function(I,T){let P=i.get(I);I.isRenderTargetTexture===!1&&I.version>0&&P.__version!==I.version?oe(P,I,T):(I.isExternalTexture&&(P.__webglTexture=I.sourceTexture?I.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,P.__webglTexture,r.TEXTURE0+T))},this.setTexture3D=function(I,T){let P=i.get(I);I.isRenderTargetTexture===!1&&I.version>0&&P.__version!==I.version?oe(P,I,T):t.bindTexture(r.TEXTURE_3D,P.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(I,T){let P=i.get(I);I.isCubeDepthTexture!==!0&&I.version>0&&P.__version!==I.version?function(F,b,U){if(b.image.length!==6)return;let O=X(F,b),C=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+U);let j=i.get(C);if(C.version!==j.__version||O===!0){t.activeTexture(r.TEXTURE0+U);let J=He.getPrimaries(He.workingColorSpace),Q=b.colorSpace===nr?null:He.getPrimaries(b.colorSpace),ne=b.colorSpace===nr||J===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let _e=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let de=0;de<6;de++)Y[de]=_e||N?N?b.image[de].image:b.image[de]:v(b.image[de],!0,n.maxCubemapSize),Y[de]=Fe(b,Y[de]);let K=Y[0],Z=s.convert(b.format,b.colorSpace),te=s.convert(b.type),he=y(b.internalFormat,Z,te,b.normalized,b.colorSpace),ge=b.isVideoTexture!==!0,Ge=j.__version===void 0||O===!0,Ie=C.dataReady,Ye,ht=S(b,K);if(z(r.TEXTURE_CUBE_MAP,b),_e){ge&&Ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ht,he,K.width,K.height);for(let de=0;de<6;de++){Ye=Y[de].mipmaps;for(let Le=0;Le<Ye.length;Le++){let we=Ye[Le];b.format!==Ii?Z!==null?ge?Ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,we.width,we.height,Z,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,he,we.width,we.height,0,we.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,we.width,we.height,Z,te,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,he,we.width,we.height,0,Z,te,we.data)}}}else{if(Ye=b.mipmaps,ge&&Ge){Ye.length>0&&ht++;let de=ae(Y[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ht,he,de.width,de.height)}for(let de=0;de<6;de++)if(N){ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Y[de].width,Y[de].height,Z,te,Y[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,he,Y[de].width,Y[de].height,0,Z,te,Y[de].data);for(let Le=0;Le<Ye.length;Le++){let we=Ye[Le].image[de].image;ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,we.width,we.height,Z,te,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,he,we.width,we.height,0,Z,te,we.data)}}else{ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Z,te,Y[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,he,Z,te,Y[de]);for(let Le=0;Le<Ye.length;Le++){let we=Ye[Le];ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,Z,te,we.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,he,Z,te,we.image[de])}}}_(b)&&g(r.TEXTURE_CUBE_MAP),j.__version=C.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}(P,I,T):t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(I,T,P){let F=i.get(I);T!==void 0&&pe(F.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),P!==void 0&&xe(I)},this.setupRenderTarget=function(I){let T=I.texture,P=i.get(I),F=i.get(T);I.addEventListener("dispose",D);let b=I.textures,U=I.isWebGLCubeRenderTarget===!0,O=b.length>1;if(O||(F.__webglTexture===void 0&&(F.__webglTexture=r.createTexture()),F.__version=T.version,a.memory.textures++),U){P.__webglFramebuffer=[];for(let C=0;C<6;C++)if(T.mipmaps&&T.mipmaps.length>0){P.__webglFramebuffer[C]=[];for(let j=0;j<T.mipmaps.length;j++)P.__webglFramebuffer[C][j]=r.createFramebuffer()}else P.__webglFramebuffer[C]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){P.__webglFramebuffer=[];for(let C=0;C<T.mipmaps.length;C++)P.__webglFramebuffer[C]=r.createFramebuffer()}else P.__webglFramebuffer=r.createFramebuffer();if(O)for(let C=0,j=b.length;C<j;C++){let J=i.get(b[C]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&ye(I)===!1){P.__webglMultisampledFramebuffer=r.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let C=0;C<b.length;C++){let j=b[C];P.__webglColorRenderbuffer[C]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,P.__webglColorRenderbuffer[C]);let J=s.convert(j.format,j.colorSpace),Q=s.convert(j.type),ne=y(j.internalFormat,J,Q,j.normalized,j.colorSpace,I.isXRRenderTarget===!0),_e=se(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,ne,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+C,r.RENDERBUFFER,P.__webglColorRenderbuffer[C])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(P.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(P.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(U){t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture),z(r.TEXTURE_CUBE_MAP,T);for(let C=0;C<6;C++)if(T.mipmaps&&T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)pe(P.__webglFramebuffer[C][j],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,j);else pe(P.__webglFramebuffer[C],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);_(T)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){for(let C=0,j=b.length;C<j;C++){let J=b[C],Q=i.get(J),ne=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,Q.__webglTexture),z(ne,J),pe(P.__webglFramebuffer,I,J,r.COLOR_ATTACHMENT0+C,ne,0),_(J)&&g(ne)}t.unbindTexture()}else{let C=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(C=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(C,F.__webglTexture),z(C,T),T.mipmaps&&T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)pe(P.__webglFramebuffer[j],I,T,r.COLOR_ATTACHMENT0,C,j);else pe(P.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,C,0);_(T)&&g(C),t.unbindTexture()}I.depthBuffer&&xe(I)},this.updateRenderTargetMipmap=function(I){let T=I.textures;for(let P=0,F=T.length;P<F;P++){let b=T[P];if(_(b)){let U=x(I),O=i.get(b).__webglTexture;t.bindTexture(U,O),g(U),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(I){if(I.samples>0){if(ye(I)===!1){let T=I.textures,P=I.width,F=I.height,b=r.COLOR_BUFFER_BIT,U=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,O=i.get(I),C=T.length>1;if(C)for(let J=0;J<T.length;J++)t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,O.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer);let j=I.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,O.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let J=0;J<T.length;J++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(b|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(b|=r.STENCIL_BUFFER_BIT)),C){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let Q=i.get(T[J]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,P,F,0,0,P,F,b,r.NEAREST),c===!0&&(re.length=0,ce.length=0,re.push(r.COLOR_ATTACHMENT0+J),I.depthBuffer&&I.resolveDepthBuffer===!1&&(re.push(U),ce.push(U),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),C)for(let J=0;J<T.length;J++){t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let Q=i.get(T[J]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,O.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X0(r,e){return{convert:function(t,i=nr){let n,s=He.getTransfer(i);if(t===li)return r.UNSIGNED_BYTE;if(t===il)return r.UNSIGNED_SHORT_4_4_4_4;if(t===nl)return r.UNSIGNED_SHORT_5_5_5_1;if(t===eh)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===th)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===$c)return r.BYTE;if(t===Qc)return r.SHORT;if(t===es)return r.UNSIGNED_SHORT;if(t===tl)return r.INT;if(t===hn)return r.UNSIGNED_INT;if(t===Pi)return r.FLOAT;if(t===Vi)return r.HALF_FLOAT;if(t===wp)return r.ALPHA;if(t===Ep)return r.RGB;if(t===Ii)return r.RGBA;if(t===Ln)return r.DEPTH_COMPONENT;if(t===tr)return r.DEPTH_STENCIL;if(t===ih)return r.RED;if(t===rl)return r.RED_INTEGER;if(t===ir)return r.RG;if(t===nh)return r.RG_INTEGER;if(t===rh)return r.RGBA_INTEGER;if(t===sl||t===al||t===ol||t===ll)if(s===Ze){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===sl)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===al)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ol)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ll)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===sl)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===al)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ol)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ll)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===sh||t===ah||t===oh||t===lh){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===sh)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ah)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===oh)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===lh)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===ch||t===hh||t===uh||t===dh||t===ph||t===cl||t===fh){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===ch||t===hh)return s===Ze?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===uh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(t===dh)return n.COMPRESSED_R11_EAC;if(t===ph)return n.COMPRESSED_SIGNED_R11_EAC;if(t===cl)return n.COMPRESSED_RG11_EAC;if(t===fh)return n.COMPRESSED_SIGNED_RG11_EAC}if(t===mh||t===gh||t===_h||t===vh||t===xh||t===yh||t===Mh||t===Sh||t===bh||t===Th||t===wh||t===Eh||t===Ah||t===Ch){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===mh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===gh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===_h)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===vh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===xh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===yh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Mh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Sh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===bh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Th)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===wh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Eh)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Ah)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Ch)return s===Ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Rh||t===Ph||t===Ih){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Rh)return s===Ze?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Ph)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Ih)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Lh||t===Dh||t===hl||t===Nh){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Lh)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Dh)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===hl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Nh)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ts?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fs(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new oi({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends ki{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,m=null,u=typeof XRWebGLBinding<"u",v=new au,_={},g=t.getContextAttributes(),x=null,y=null,M=[],S=[],A=new le,D=null,w=new At;w.viewport=new Ke;let L=new At;L.viewport=new Ke;let V=[w,L],B=new Yo,H=null,k=null;function z(re){let ce=S.indexOf(re.inputSource);if(ce===-1)return;let se=M[ce];se!==void 0&&(se.update(re.inputSource,re.frame,l||a),se.dispatchEvent({type:re.type,data:re.inputSource}))}function X(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",W);for(let re=0;re<M.length;re++){let ce=S[re];ce!==null&&(S[re]=null,M[re].disconnect(ce))}H=null,k=null,v.reset();for(let re in _)delete _[re];e.setRenderTarget(x),p=null,f=null,d=null,n=null,y=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}function W(re){for(let ce=0;ce<re.removed.length;ce++){let se=re.removed[ce],ye=S.indexOf(se);ye>=0&&(S[ye]=null,M[ye].disconnect(se))}for(let ce=0;ce<re.added.length;ce++){let se=re.added[ce],ye=S.indexOf(se);if(ye===-1){for(let ae=0;ae<M.length;ae++){if(ae>=S.length){S.push(se),ye=ae;break}if(S[ae]===null){S[ae]=se,ye=ae;break}}if(ye===-1)break}let Fe=M[ye];Fe&&Fe.connect(se)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ce=M[re];return ce===void 0&&(ce=new kr,M[re]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(re){let ce=M[re];return ce===void 0&&(ce=new kr,M[re]=ce),ce.getGripSpace()},this.getHand=function(re){let ce=M[re];return ce===void 0&&(ce=new kr,M[re]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&u&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(re){if(n=re,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",X),n.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),u&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,se=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?tr:Ln,se=g.stencil?ts:hn);let Fe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Fe),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ri(f.textureWidth,f.textureHeight,{format:Ii,type:li,depthTexture:new on(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,ce),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ri(p.framebufferWidth,p.framebufferHeight,{format:Ii,type:li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),xe.setContext(n),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let oe=new R,pe=new R;function Me(re,ce){ce===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ce.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(n===null)return;let ce=re.near,se=re.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(se=v.depthFar)),B.near=L.near=w.near=ce,B.far=L.far=w.far=se,H===B.near&&k===B.far||(n.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,k=B.far),B.layers.mask=6|re.layers.mask,w.layers.mask=-5&B.layers.mask,L.layers.mask=-3&B.layers.mask;let ye=re.parent,Fe=B.cameras;Me(B,ye);for(let ae=0;ae<Fe.length;ae++)Me(Fe[ae],ye);Fe.length===2?function(ae,I,T){oe.setFromMatrixPosition(I.matrixWorld),pe.setFromMatrixPosition(T.matrixWorld);let P=oe.distanceTo(pe),F=I.projectionMatrix.elements,b=T.projectionMatrix.elements,U=F[14]/(F[10]-1),O=F[14]/(F[10]+1),C=(F[9]+1)/F[5],j=(F[9]-1)/F[5],J=(F[8]-1)/F[0],Q=(b[8]+1)/b[0],ne=U*J,_e=U*Q,N=P/(-J+Q),Y=N*-J;if(I.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Y),ae.translateZ(N),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),F[10]===-1)ae.projectionMatrix.copy(I.projectionMatrix),ae.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{let K=U+N,Z=O+N,te=ne-Y,he=_e+(P-Y),ge=C*O/Z*K,Ge=j*O/Z*K;ae.projectionMatrix.makePerspective(te,he,ge,Ge,K,Z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}(B,w,L):B.projectionMatrix.copy(w.projectionMatrix),function(ae,I,T){T===null?ae.matrix.copy(I.matrixWorld):(ae.matrix.copy(T.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(I.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(I.projectionMatrix),ae.projectionMatrixInverse.copy(I.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=2*Jn*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}(re,B,ye)},this.getCamera=function(){return B},this.getFoveation=function(){if(f!==null||p!==null)return c},this.setFoveation=function(re){c=re,f!==null&&(f.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(B)},this.getCameraTexture=function(re){return _[re]};let me=null,xe=new pf;xe.setAnimationLoop(function(re,ce){if(h=ce.getViewerPose(l||a),m=ce,h!==null){let se=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ye=!1;se.length!==B.cameras.length&&(B.cameras.length=0,ye=!0);for(let ae=0;ae<se.length;ae++){let I=se[ae],T=null;if(p!==null)T=p.getViewport(I);else{let F=d.getViewSubImage(f,I);T=F.viewport,ae===0&&(e.setRenderTargetTextures(y,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(y))}let P=V[ae];P===void 0&&(P=new At,P.layers.enable(ae),P.viewport=new Ke,V[ae]=P),P.matrix.fromArray(I.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(I.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(T.x,T.y,T.width,T.height),ae===0&&(B.matrix.copy(P.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ye===!0&&B.cameras.push(P)}let Fe=n.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){d=i.getBinding();let ae=d.getDepthInformation(se[0]);ae&&ae.isValid&&ae.texture&&v.init(ae,n.renderState)}if(Fe&&Fe.includes("camera-access")&&u){e.state.unbindTexture(),d=i.getBinding();for(let ae=0;ae<se.length;ae++){let I=se[ae].camera;if(I){let T=_[I];T||(T=new Fs,_[I]=T);let P=d.getCameraImage(I);T.sourceTexture=P}}}}for(let se=0;se<M.length;se++){let ye=S[se],Fe=M[se];ye!==null&&Fe!==void 0&&Fe.update(ye,ce,l||a)}me&&me(re,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),m=null}),this.setAnimationLoop=function(re){me=re},this.dispose=function(){}}},j0=new Be,xf=new Ue;function q0(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===qt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===qt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,n.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(c)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&n.envMapRotation.value.premultiply(xf),n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,zh(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(n,s):s.isMeshLambertMaterial?(i(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(n,s),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(n,s),function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}(n,s),s.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(n,s)):s.isPointsMaterial?function(l,h,d,f){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*f,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Y0(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,f,p,m){let u=d.value,v=f+"_"+p;if(m[v]===void 0)return typeof u=="number"||typeof u=="boolean"?m[v]=u:ArrayBuffer.isView(u)?m[v]=u.slice():m[v]=u.clone(),!0;{let _=m[v];if(typeof u=="number"||typeof u=="boolean"){if(_!==u)return m[v]=u,!0}else{if(ArrayBuffer.isView(u))return!0;if(_.equals(u)===!1)return _.copy(u),!0}}return!1}function l(d){let f={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(f.boundary=4,f.storage=4):d.isVector2?(f.boundary=8,f.storage=8):d.isVector3||d.isColor?(f.boundary=16,f.storage=12):d.isVector4?(f.boundary=16,f.storage=16):d.isMatrix3?(f.boundary=48,f.storage=48):d.isMatrix4?(f.boundary=64,f.storage=64):d.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(f.boundary=16,f.storage=d.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",d),f}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=a.indexOf(f.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[f.id]),delete n[f.id],delete s[f.id]}return{bind:function(d,f){let p=f.program;i.uniformBlockBinding(d,p)},update:function(d,f){let p=n[d.id];p===void 0&&(function(v){let _=v.uniforms,g=0,x=16;for(let M=0,S=_.length;M<S;M++){let A=Array.isArray(_[M])?_[M]:[_[M]];for(let D=0,w=A.length;D<w;D++){let L=A[D],V=Array.isArray(L.value)?L.value:[L.value];for(let B=0,H=V.length;B<H;B++){let k=l(V[B]),z=g%x,X=z%k.boundary,W=z+X;g+=X,W!==0&&x-W<k.storage&&(g+=x-W),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=g,g+=k.storage}}}let y=g%x;y>0&&(g+=x-y),v.__size=g,v.__cache={}}(d),p=function(v){let _=function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();v.__bindingPointIndex=_;let g=r.createBuffer(),x=v.__size,y=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,x,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,g),g}(d),n[d.id]=p,d.addEventListener("dispose",h));let m=f.program;i.updateUBOMapping(d,m);let u=e.render.frame;s[d.id]!==u&&(function(v){let _=n[v.id],g=v.uniforms,x=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let y=0,M=g.length;y<M;y++){let S=Array.isArray(g[y])?g[y]:[g[y]];for(let A=0,D=S.length;A<D;A++){let w=S[A];if(c(w,y,A,x)===!0){let L=w.__offset,V=Array.isArray(w.value)?w.value:[w.value],B=0;for(let H=0;H<V.length;H++){let k=V[H],z=l(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,L+B,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):ArrayBuffer.isView(k)?w.__data.set(new k.constructor(k.buffer,k.byteOffset,w.__data.length)):(k.toArray(w.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=u)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}xf.set(-1,0,0,0,1,0,0,0,1);var Z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null,vl=class{constructor(e={}){let{canvas:t=Np(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=li}=e,m;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let u=p,v=new Set([rh,nh,rl]),_=new Set([li,hn,es,ts,il,nl]),g=new Uint32Array(4),x=new Int32Array(4),y=new R,M=null,S=null,A=[],D=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,V=!1,B=null;this._outputColorSpace=Rt;let H=0,k=0,z=null,X=-1,W=null,oe=new Ke,pe=new Ke,Me=null,me=new Oe(0),xe=0,re=t.width,ce=t.height,se=1,ye=null,Fe=null,ae=new Ke(0,0,re,ce),I=new Ke(0,0,re,ce),T=!1,P=new Cn,F=!1,b=!1,U=new Be,O=new R,C=new Ke,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function Q(){return z===null?se:1}let ne,_e,N,Y,K,Z,te,he,ge,Ge,Ie,Ye,ht,de,Le,we,Je,wt,Qt,Xt,pt,Dt,gn,G=i;function td(E,q){return t.getContext(E,q)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",nd,!1),t.addEventListener("webglcontextrestored",rd,!1),t.addEventListener("webglcontextcreationerror",sd,!1),G===null){let q="webgl2";if(G=td(q,E),G===null)throw td(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ee("WebGLRenderer: "+E.message),E}function id(){ne=new Sg(G),ne.init(),pt=new X0(G,ne),_e=new vg(G,ne,e,pt),N=new H0(G,ne),_e.reversedDepthBuffer&&f&&N.buffers.depth.setReversed(!0),Y=new wg(G),K=new L0,Z=new W0(G,ne,N,K,_e,pt,Y),te=new Mg(L),he=new pg(G),Dt=new gg(G,he),ge=new bg(G,he,Y,Dt),Ge=new Ag(G,ge,he,Dt,Y),wt=new Eg(G,_e,Z),Le=new xg(K),Ie=new I0(L,te,ne,_e,Dt,Le),Ye=new q0(L,K),ht=new N0,de=new z0(ne),Je=new mg(L,te,N,Ge,m,c),we=new V0(L,Ge,_e),gn=new Y0(G,Y,_e,N),Qt=new _g(G,ne,Y),Xt=new Tg(G,ne,Y),Y.programs=Ie.programs,L.capabilities=_e,L.extensions=ne,L.properties=K,L.renderLists=ht,L.shadowMap=we,L.state=N,L.info=Y}id(),u!==li&&(w=new Rg(u,t.width,t.height,n,s));let gt=new ou(L,G);function nd(E){E.preventDefault(),Fh("WebGLRenderer: Context Lost."),V=!0}function rd(){Fh("WebGLRenderer: Context Restored."),V=!1;let E=Y.autoReset,q=we.enabled,$=we.autoUpdate,ie=we.needsUpdate,ee=we.type;id(),Y.autoReset=E,we.enabled=q,we.autoUpdate=$,we.needsUpdate=ie,we.type=ee}function sd(E){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ad(E){let q=E.target;q.removeEventListener("dispose",ad),function($){(function(ie){let ee=K.get(ie).programs;ee!==void 0&&(ee.forEach(function(ue){Ie.releaseProgram(ue)}),ie.isShaderMaterial&&Ie.releaseShaderCache(ie))})($),K.remove($)}(q)}function od(E,q,$){E.transparent===!0&&E.side===vi&&E.forceSinglePass===!1?(E.side=qt,E.needsUpdate=!0,ba(E,q,$),E.side=Kr,E.needsUpdate=!0,ba(E,q,$),E.side=vi):ba(E,q,$)}this.xr=gt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(re,ce,!1))},this.getSize=function(E){return E.set(re,ce)},this.setSize=function(E,q,$=!0){gt.isPresenting?Te("WebGLRenderer: Can't change size while VR device is presenting."):(re=E,ce=q,t.width=Math.floor(E*se),t.height=Math.floor(q*se),$===!0&&(t.style.width=E+"px",t.style.height=q+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,q))},this.getDrawingBufferSize=function(E){return E.set(re*se,ce*se).floor()},this.setDrawingBufferSize=function(E,q,$){re=E,ce=q,se=$,t.width=Math.floor(E*$),t.height=Math.floor(q*$),this.setViewport(0,0,E,q)},this.setEffects=function(E){if(u!==li){if(E){for(let q=0;q<E.length;q++)if(E[q].isOutputPass===!0){Te("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])}else Ee("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(oe)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,q,$,ie){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,q,$,ie),N.viewport(oe.copy(ae).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(I)},this.setScissor=function(E,q,$,ie){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,q,$,ie),N.scissor(pe.copy(I).multiplyScalar(se).round())},this.getScissorTest=function(){return T},this.setScissorTest=function(E){N.setScissorTest(T=E)},this.setOpaqueSort=function(E){ye=E},this.setTransparentSort=function(E){Fe=E},this.getClearColor=function(E){return E.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(E=!0,q=!0,$=!0){let ie=0;if(E){let ee=!1;if(z!==null){let ue=z.texture.format;ee=v.has(ue)}if(ee){let ue=z.texture.type,ve=_.has(ue),Se=Je.getClearColor(),be=Je.getClearAlpha(),Re=Se.r,We=Se.g,je=Se.b;ve?(g[0]=Re,g[1]=We,g[2]=je,g[3]=be,G.clearBufferuiv(G.COLOR,0,g)):(x[0]=Re,x[1]=We,x[2]=je,x[3]=be,G.clearBufferiv(G.COLOR,0,x))}else ie|=G.COLOR_BUFFER_BIT}q&&(ie|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(ie|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&G.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){t.removeEventListener("webglcontextlost",nd,!1),t.removeEventListener("webglcontextrestored",rd,!1),t.removeEventListener("webglcontextcreationerror",sd,!1),Je.dispose(),ht.dispose(),de.dispose(),K.dispose(),te.dispose(),Ge.dispose(),Dt.dispose(),gn.dispose(),Ie.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",ld),gt.removeEventListener("sessionend",cd),Vn.stop()},this.renderBufferDirect=function(E,q,$,ie,ee,ue){q===null&&(q=j);let ve=ee.isMesh&&ee.matrixWorld.determinant()<0,Se=function(Ve,rt,Ct,Pe,Ne){rt.isScene!==!0&&(rt=j),Z.resetTextureUnits();let Si=rt.fog,zl=Pe.isMeshStandardMaterial||Pe.isMeshLambertMaterial||Pe.isMeshPhongMaterial?rt.environment:null,Ta=z===null?L.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:He.workingColorSpace,gs=Pe.isMeshStandardMaterial||Pe.isMeshLambertMaterial&&!Pe.envMap||Pe.isMeshPhongMaterial&&!Pe.envMap,Li=te.get(Pe.envMap||zl,gs),vr=Pe.vertexColors===!0&&!!Ct.attributes.color&&Ct.attributes.color.itemSize===4,Zi=!!Ct.attributes.tangent&&(!!Pe.normalMap||Pe.anisotropy>0),kl=!!Ct.morphAttributes.position,xr=!!Ct.morphAttributes.normal,Pm=!!Ct.morphAttributes.color,md=Ri;Pe.toneMapped&&(z!==null&&z.isXRRenderTarget!==!0||(md=L.toneMapping));let gd=Ct.morphAttributes.position||Ct.morphAttributes.normal||Ct.morphAttributes.color,Im=gd!==void 0?gd.length:0,De=K.get(Pe),Hn=S.state.lights;if(F===!0&&(b===!0||Ve!==W)){let vt=Ve===W&&Pe.id===X;Le.setState(Pe,Ve,vt)}let bi=!1;Pe.version===De.__version?De.needsLights&&De.lightsStateVersion!==Hn.state.version||De.outputColorSpace!==Ta||Ne.isBatchedMesh&&De.batching===!1?bi=!0:Ne.isBatchedMesh||De.batching!==!0?Ne.isBatchedMesh&&De.batchingColor===!0&&Ne.colorTexture===null||Ne.isBatchedMesh&&De.batchingColor===!1&&Ne.colorTexture!==null||Ne.isInstancedMesh&&De.instancing===!1?bi=!0:Ne.isInstancedMesh||De.instancing!==!0?Ne.isSkinnedMesh&&De.skinning===!1?bi=!0:Ne.isSkinnedMesh||De.skinning!==!0?Ne.isInstancedMesh&&De.instancingColor===!0&&Ne.instanceColor===null||Ne.isInstancedMesh&&De.instancingColor===!1&&Ne.instanceColor!==null||Ne.isInstancedMesh&&De.instancingMorph===!0&&Ne.morphTexture===null||Ne.isInstancedMesh&&De.instancingMorph===!1&&Ne.morphTexture!==null||De.envMap!==Li||Pe.fog===!0&&De.fog!==Si?bi=!0:De.numClippingPlanes===void 0||De.numClippingPlanes===Le.numPlanes&&De.numIntersection===Le.numIntersection?(De.vertexAlphas!==vr||De.vertexTangents!==Zi||De.morphTargets!==kl||De.morphNormals!==xr||De.morphColors!==Pm||De.toneMapping!==md||De.morphTargetsCount!==Im||!!De.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(bi=!0):bi=!0:bi=!0:bi=!0:bi=!0:(bi=!0,De.__version=Pe.version);let _n=De.currentProgram;bi===!0&&(_n=ba(Pe,rt,Ne),B&&Pe.isNodeMaterial&&B.onUpdateProgram(Pe,_n,De));let _d=!1,yr=!1,Gl=!1,st=_n.getUniforms(),fi=De.uniforms;if(N.useProgram(_n.program)&&(_d=!0,yr=!0,Gl=!0),Pe.id!==X&&(X=Pe.id,yr=!0),De.needsLights){let vt=function(Ni,Hl){if(Ni.length===0)return null;if(Ni.length===1)return Ni[0].texture!==null?Ni[0]:null;y.setFromMatrixPosition(Hl.matrixWorld);for(let Mr=0,Lm=Ni.length;Mr<Lm;Mr++){let Wl=Ni[Mr];if(Wl.texture!==null&&Wl.boundingBox.containsPoint(y))return Wl}return null}(S.state.lightProbeGridArray,Ne);De.lightProbeGrid!==vt&&(De.lightProbeGrid=vt,yr=!0)}if(_d||W!==Ve){N.buffers.depth.getReversed()&&Ve.reversedDepth!==!0&&(Ve._reversedDepth=!0,Ve.updateProjectionMatrix()),st.setValue(G,"projectionMatrix",Ve.projectionMatrix),st.setValue(G,"viewMatrix",Ve.matrixWorldInverse);let vt=st.map.cameraPosition;vt!==void 0&&vt.setValue(G,O.setFromMatrixPosition(Ve.matrixWorld)),_e.logarithmicDepthBuffer&&st.setValue(G,"logDepthBufFC",2/(Math.log(Ve.far+1)/Math.LN2)),(Pe.isMeshPhongMaterial||Pe.isMeshToonMaterial||Pe.isMeshLambertMaterial||Pe.isMeshBasicMaterial||Pe.isMeshStandardMaterial||Pe.isShaderMaterial)&&st.setValue(G,"isOrthographic",Ve.isOrthographicCamera===!0),W!==Ve&&(W=Ve,yr=!0,Gl=!0)}if(De.needsLights&&(Hn.state.directionalShadowMap.length>0&&st.setValue(G,"directionalShadowMap",Hn.state.directionalShadowMap,Z),Hn.state.spotShadowMap.length>0&&st.setValue(G,"spotShadowMap",Hn.state.spotShadowMap,Z),Hn.state.pointShadowMap.length>0&&st.setValue(G,"pointShadowMap",Hn.state.pointShadowMap,Z)),Ne.isSkinnedMesh){st.setOptional(G,Ne,"bindMatrix"),st.setOptional(G,Ne,"bindMatrixInverse");let vt=Ne.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),st.setValue(G,"boneTexture",vt.boneTexture,Z))}Ne.isBatchedMesh&&(st.setOptional(G,Ne,"batchingTexture"),st.setValue(G,"batchingTexture",Ne._matricesTexture,Z),st.setOptional(G,Ne,"batchingIdTexture"),st.setValue(G,"batchingIdTexture",Ne._indirectTexture,Z),st.setOptional(G,Ne,"batchingColorTexture"),Ne._colorsTexture!==null&&st.setValue(G,"batchingColorTexture",Ne._colorsTexture,Z));let Vl=Ct.morphAttributes;if(Vl.position===void 0&&Vl.normal===void 0&&Vl.color===void 0||wt.update(Ne,Ct,_n),(yr||De.receiveShadow!==Ne.receiveShadow)&&(De.receiveShadow=Ne.receiveShadow,st.setValue(G,"receiveShadow",Ne.receiveShadow)),(Pe.isMeshStandardMaterial||Pe.isMeshLambertMaterial||Pe.isMeshPhongMaterial)&&Pe.envMap===null&&rt.environment!==null&&(fi.envMapIntensity.value=rt.environmentIntensity),fi.dfgLUT!==void 0&&(fi.dfgLUT.value=(Hi===null&&(Hi=new ao(Z0,16,16,ir,Vi),Hi.name="DFG_LUT",Hi.minFilter=Ot,Hi.magFilter=Ot,Hi.wrapS=En,Hi.wrapT=En,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi)),yr){if(st.setValue(G,"toneMappingExposure",L.toneMappingExposure),De.needsLights&&(Ti=Gl,(Di=fi).ambientLightColor.needsUpdate=Ti,Di.lightProbe.needsUpdate=Ti,Di.directionalLights.needsUpdate=Ti,Di.directionalLightShadows.needsUpdate=Ti,Di.pointLights.needsUpdate=Ti,Di.pointLightShadows.needsUpdate=Ti,Di.spotLights.needsUpdate=Ti,Di.spotLightShadows.needsUpdate=Ti,Di.rectAreaLights.needsUpdate=Ti,Di.hemisphereLights.needsUpdate=Ti),Si&&Pe.fog===!0&&Ye.refreshFogUniforms(fi,Si),Ye.refreshMaterialUniforms(fi,Pe,se,ce,S.state.transmissionRenderTarget[Ve.id]),De.needsLights&&De.lightProbeGrid){let vt=De.lightProbeGrid;fi.probesSH.value=vt.texture,fi.probesMin.value.copy(vt.boundingBox.min),fi.probesMax.value.copy(vt.boundingBox.max),fi.probesResolution.value.copy(vt.resolution)}ns.upload(G,pd(De),fi,Z)}var Di,Ti;if(Pe.isShaderMaterial&&Pe.uniformsNeedUpdate===!0&&(ns.upload(G,pd(De),fi,Z),Pe.uniformsNeedUpdate=!1),Pe.isSpriteMaterial&&st.setValue(G,"center",Ne.center),st.setValue(G,"modelViewMatrix",Ne.modelViewMatrix),st.setValue(G,"normalMatrix",Ne.normalMatrix),st.setValue(G,"modelMatrix",Ne.matrixWorld),Pe.uniformsGroups!==void 0){let vt=Pe.uniformsGroups;for(let Ni=0,Hl=vt.length;Ni<Hl;Ni++){let Mr=vt[Ni];gn.update(Mr,_n),gn.bind(Mr,_n)}}return _n}(E,q,$,ie,ee);N.setMaterial(ie,ve);let be=$.index,Re=1;if(ie.wireframe===!0){if(be=ge.getWireframeAttribute($),be===void 0)return;Re=2}let We=$.drawRange,je=$.attributes.position,Ce=We.start*Re,qe=(We.start+We.count)*Re;ue!==null&&(Ce=Math.max(Ce,ue.start*Re),qe=Math.min(qe,(ue.start+ue.count)*Re)),be!==null?(Ce=Math.max(Ce,0),qe=Math.min(qe,be.count)):je!=null&&(Ce=Math.max(Ce,0),qe=Math.min(qe,je.count));let Mt=qe-Ce;if(Mt<0||Mt===1/0)return;let _t;Dt.setup(ee,ie,Se,$,be);let nt=Qt;if(be!==null&&(_t=he.get(be),nt=Xt,nt.setIndex(_t)),ee.isMesh)ie.wireframe===!0?(N.setLineWidth(ie.wireframeLinewidth*Q()),nt.setMode(G.LINES)):nt.setMode(G.TRIANGLES);else if(ee.isLine){let Ve=ie.linewidth;Ve===void 0&&(Ve=1),N.setLineWidth(Ve*Q()),ee.isLineSegments?nt.setMode(G.LINES):ee.isLineLoop?nt.setMode(G.LINE_LOOP):nt.setMode(G.LINE_STRIP)}else ee.isPoints?nt.setMode(G.POINTS):ee.isSprite&&nt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))nt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Ve=ee._multiDrawStarts,rt=ee._multiDrawCounts,Ct=ee._multiDrawCount,Pe=be?he.get(be).bytesPerElement:1,Ne=K.get(ie).currentProgram.getUniforms();for(let Si=0;Si<Ct;Si++)Ne.setValue(G,"_gl_DrawID",Si),nt.render(Ve[Si]/Pe,rt[Si])}else if(ee.isInstancedMesh)nt.renderInstances(Ce,Mt,ee.count);else if($.isInstancedBufferGeometry){let Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,rt=Math.min($.instanceCount,Ve);nt.renderInstances(Ce,Mt,rt)}else nt.render(Ce,Mt)},this.compile=function(E,q,$=null){$===null&&($=E),S=de.get($),S.init(q),D.push(S),$.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),E!==$&&E.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),S.setupLights();let ie=new Set;return E.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let ue=ee.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let Se=ue[ve];od(Se,$,ee),ie.add(Se)}else od(ue,$,ee),ie.add(ue)}),S=D.pop(),ie},this.compileAsync=function(E,q,$=null){let ie=this.compile(E,q,$);return new Promise(ee=>{function ue(){ie.forEach(function(ve){K.get(ve).currentProgram.isReady()&&ie.delete(ve)}),ie.size!==0?setTimeout(ue,10):ee(E)}ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Fl=null;function ld(){Vn.stop()}function cd(){Vn.start()}let Vn=new pf;function Bl(E,q,$,ie){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||P.intersectsSprite(E)){ie&&C.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);let ue=Ge.update(E),ve=E.material;ve.visible&&M.push(E,ue,ve,$,C.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||P.intersectsObject(E))){let ue=Ge.update(E),ve=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),C.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),C.copy(ue.boundingSphere.center)),C.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(ve)){let Se=ue.groups;for(let be=0,Re=Se.length;be<Re;be++){let We=Se[be],je=ve[We.materialIndex];je&&je.visible&&M.push(E,ue,je,$,C.z,We)}}else ve.visible&&M.push(E,ue,ve,$,C.z,null)}}let ee=E.children;for(let ue=0,ve=ee.length;ue<ve;ue++)Bl(ee[ue],q,$,ie)}function hd(E,q,$,ie){let{opaque:ee,transmissive:ue,transparent:ve}=E;S.setupLightsView($),F===!0&&Le.setGlobalState(L.clippingPlanes,$),ie&&N.viewport(oe.copy(ie)),ee.length>0&&Sa(ee,q,$),ue.length>0&&Sa(ue,q,$),ve.length>0&&Sa(ve,q,$),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function ud(E,q,$,ie){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ie.id]===void 0){let je=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ie.id]=new ri(1,1,{generateMipmaps:!0,type:je?Vi:li,minFilter:er,samples:Math.max(4,_e.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let ee=S.state.transmissionRenderTarget[ie.id],ue=ie.viewport||oe;ee.setSize(ue.z*L.transmissionResolutionScale,ue.w*L.transmissionResolutionScale);let ve=L.getRenderTarget(),Se=L.getActiveCubeFace(),be=L.getActiveMipmapLevel();L.setRenderTarget(ee),L.getClearColor(me),xe=L.getClearAlpha(),xe<1&&L.setClearColor(16777215,.5),L.clear(),J&&Je.render($);let Re=L.toneMapping;L.toneMapping=Ri;let We=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),S.setupLightsView(ie),F===!0&&Le.setGlobalState(L.clippingPlanes,ie),Sa(E,$,ie),Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee),ne.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ce=0,qe=q.length;Ce<qe;Ce++){let Mt=q[Ce],{object:_t,geometry:nt,material:Ve,group:rt}=Mt;if(Ve.side===vi&&_t.layers.test(ie.layers)){let Ct=Ve.side;Ve.side=qt,Ve.needsUpdate=!0,dd(_t,$,ie,nt,Ve,rt),Ve.side=Ct,Ve.needsUpdate=!0,je=!0}}je===!0&&(Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee))}L.setRenderTarget(ve,Se,be),L.setClearColor(me,xe),We!==void 0&&(ie.viewport=We),L.toneMapping=Re}function Sa(E,q,$){let ie=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,ue=E.length;ee<ue;ee++){let ve=E[ee],{object:Se,geometry:be,group:Re}=ve,We=ve.material;We.allowOverride===!0&&ie!==null&&(We=ie),Se.layers.test($.layers)&&dd(Se,q,$,be,We,Re)}}function dd(E,q,$,ie,ee,ue){E.onBeforeRender(L,q,$,ie,ee,ue),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(L,q,$,ie,E,ue),ee.transparent===!0&&ee.side===vi&&ee.forceSinglePass===!1?(ee.side=qt,ee.needsUpdate=!0,L.renderBufferDirect($,q,ie,ee,E,ue),ee.side=Kr,ee.needsUpdate=!0,L.renderBufferDirect($,q,ie,ee,E,ue),ee.side=vi):L.renderBufferDirect($,q,ie,ee,E,ue),E.onAfterRender(L,q,$,ie,ee,ue)}function ba(E,q,$){q.isScene!==!0&&(q=j);let ie=K.get(E),ee=S.state.lights,ue=S.state.shadowsArray,ve=ee.state.version,Se=Ie.getParameters(E,ee.state,ue,q,$,S.state.lightProbeGridArray),be=Ie.getProgramCacheKey(Se),Re=ie.programs;ie.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;let We=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;ie.envMap=te.get(E.envMap||ie.environment,We),ie.envMapRotation=ie.environment!==null&&E.envMap===null?q.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",ad),Re=new Map,ie.programs=Re);let je=Re.get(be);if(je!==void 0){if(ie.currentProgram===je&&ie.lightsStateVersion===ve)return fd(E,Se),je}else Se.uniforms=Ie.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,$,Se),E.onBeforeCompile(Se,L),je=Ie.acquireProgram(Se,be),Re.set(be,je),ie.uniforms=Se.uniforms;let Ce=ie.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ce.clippingPlanes=Le.uniform),fd(E,Se),ie.needsLights=function(qe){return qe.isMeshLambertMaterial||qe.isMeshToonMaterial||qe.isMeshPhongMaterial||qe.isMeshStandardMaterial||qe.isShadowMaterial||qe.isShaderMaterial&&qe.lights===!0}(E),ie.lightsStateVersion=ve,ie.needsLights&&(Ce.ambientLightColor.value=ee.state.ambient,Ce.lightProbe.value=ee.state.probe,Ce.directionalLights.value=ee.state.directional,Ce.directionalLightShadows.value=ee.state.directionalShadow,Ce.spotLights.value=ee.state.spot,Ce.spotLightShadows.value=ee.state.spotShadow,Ce.rectAreaLights.value=ee.state.rectArea,Ce.ltc_1.value=ee.state.rectAreaLTC1,Ce.ltc_2.value=ee.state.rectAreaLTC2,Ce.pointLights.value=ee.state.point,Ce.pointLightShadows.value=ee.state.pointShadow,Ce.hemisphereLights.value=ee.state.hemi,Ce.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ce.spotLightMatrix.value=ee.state.spotLightMatrix,Ce.spotLightMap.value=ee.state.spotLightMap,Ce.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.lightProbeGrid=S.state.lightProbeGridArray.length>0,ie.currentProgram=je,ie.uniformsList=null,je}function pd(E){if(E.uniformsList===null){let q=E.currentProgram.getUniforms();E.uniformsList=ns.seqWithValue(q.seq,E.uniforms)}return E.uniformsList}function fd(E,q){let $=K.get(E);$.outputColorSpace=q.outputColorSpace,$.batching=q.batching,$.batchingColor=q.batchingColor,$.instancing=q.instancing,$.instancingColor=q.instancingColor,$.instancingMorph=q.instancingMorph,$.skinning=q.skinning,$.morphTargets=q.morphTargets,$.morphNormals=q.morphNormals,$.morphColors=q.morphColors,$.morphTargetsCount=q.morphTargetsCount,$.numClippingPlanes=q.numClippingPlanes,$.numIntersection=q.numClipIntersection,$.vertexAlphas=q.vertexAlphas,$.vertexTangents=q.vertexTangents,$.toneMapping=q.toneMapping}Vn.setAnimationLoop(function(E){Fl&&Fl(E)}),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(E){Fl=E,gt.setAnimationLoop(E),E===null?Vn.stop():Vn.start()},gt.addEventListener("sessionstart",ld),gt.addEventListener("sessionend",cd),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0)return void Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(V===!0)return;B!==null&&B.renderStart(E,q);let $=gt.enabled===!0&&gt.isPresenting===!0,ie=w!==null&&(z===null||$)&&w.begin(L,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),gt.enabled!==!0||gt.isPresenting!==!0||w!==null&&w.isCompositing()!==!1||(gt.cameraAutoUpdate===!0&&gt.updateCamera(q),q=gt.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,q,z),S=de.get(E,D.length),S.init(q),S.state.textureUnits=Z.getTextureUnits(),D.push(S),U.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),P.setFromProjectionMatrix(U,rn,q.reversedDepth),b=this.localClippingEnabled,F=Le.init(this.clippingPlanes,b),M=ht.get(E,A.length),M.init(),A.push(M),gt.enabled===!0&&gt.isPresenting===!0){let ue=L.xr.getDepthSensingMesh();ue!==null&&Bl(ue,q,-1/0,L.sortObjects)}Bl(E,q,0,L.sortObjects),M.finish(),L.sortObjects===!0&&M.sort(ye,Fe),J=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,J&&Je.addToRenderList(M,E),this.info.render.frame++,F===!0&&Le.beginShadows();let ee=S.state.shadowsArray;if(we.render(ee,E,q),F===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&w.hasRenderPass())===!1){let ue=M.opaque,ve=M.transmissive;if(S.setupLights(),q.isArrayCamera){let Se=q.cameras;if(ve.length>0)for(let be=0,Re=Se.length;be<Re;be++)ud(ue,ve,E,Se[be]);J&&Je.render(E);for(let be=0,Re=Se.length;be<Re;be++){let We=Se[be];hd(M,E,We,We.viewport)}}else ve.length>0&&ud(ue,ve,E,q),J&&Je.render(E),hd(M,E,q)}z!==null&&k===0&&(Z.updateMultisampleRenderTarget(z),Z.updateRenderTargetMipmap(z)),ie&&w.end(L),E.isScene===!0&&E.onAfterRender(L,E,q),Dt.resetDefaultState(),X=-1,W=null,D.pop(),D.length>0?(S=D[D.length-1],Z.setTextureUnits(S.state.textureUnits),F===!0&&Le.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,A.pop(),M=A.length>0?A[A.length-1]:null,B!==null&&B.renderEnd()},this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,q,$){let ie=K.get(E);ie.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),K.get(E.texture).__webglTexture=q,K.get(E.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:$,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,q){let $=K.get(E);$.__webglFramebuffer=q,$.__useDefaultFramebuffer=q===void 0};let Am=G.createFramebuffer();this.setRenderTarget=function(E,q=0,$=0){z=E,H=q,k=$;let ie=null,ee=!1,ue=!1;if(E){let ve=K.get(E);if(ve.__useDefaultFramebuffer!==void 0)return N.bindFramebuffer(G.FRAMEBUFFER,ve.__webglFramebuffer),oe.copy(E.viewport),pe.copy(E.scissor),Me=E.scissorTest,N.viewport(oe),N.scissor(pe),N.setScissorTest(Me),void(X=-1);if(ve.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(ve.__hasExternalTextures)Z.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Re=E.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&K.has(Re)&&(E.width!==Re.image.width||E.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ue=!0);let be=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ie=Array.isArray(be[q])?be[q][$]:be[q],ee=!0):ie=E.samples>0&&Z.useMultisampledRTT(E)===!1?K.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?be[$]:be,oe.copy(E.viewport),pe.copy(E.scissor),Me=E.scissorTest}else oe.copy(ae).multiplyScalar(se).floor(),pe.copy(I).multiplyScalar(se).floor(),Me=T;if($!==0&&(ie=Am),N.bindFramebuffer(G.FRAMEBUFFER,ie)&&N.drawBuffers(E,ie),N.viewport(oe),N.scissor(pe),N.setScissorTest(Me),ee){let ve=K.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve.__webglTexture,$)}else if(ue){let ve=q;for(let Se=0;Se<E.textures.length;Se++){let be=K.get(E.textures[Se]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Se,be.__webglTexture,$,ve)}}else if(E!==null&&$!==0){let ve=K.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ve.__webglTexture,$)}X=-1},this.readRenderTargetPixels=function(E,q,$,ie,ee,ue,ve,Se=0){if(!E||!E.isWebGLRenderTarget)return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){N.bindFramebuffer(G.FRAMEBUFFER,be);try{let Re=E.textures[Se],We=Re.format,je=Re.type;if(E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Se),!_e.textureFormatReadable(We))return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(je))return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=E.width-ie&&$>=0&&$<=E.height-ee&&G.readPixels(q,$,ie,ee,pt.convert(We),pt.convert(je),ue)}finally{let Re=z!==null?K.get(z).__webglFramebuffer:null;N.bindFramebuffer(G.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,q,$,ie,ee,ue,ve,Se=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){if(q>=0&&q<=E.width-ie&&$>=0&&$<=E.height-ee){N.bindFramebuffer(G.FRAMEBUFFER,be);let Re=E.textures[Se],We=Re.format,je=Re.type;if(E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Se),!_e.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ce),G.bufferData(G.PIXEL_PACK_BUFFER,ue.byteLength,G.STREAM_READ),G.readPixels(q,$,ie,ee,pt.convert(We),pt.convert(je),0);let qe=z!==null?K.get(z).__webglFramebuffer:null;N.bindFramebuffer(G.FRAMEBUFFER,qe);let Mt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Op(G,Mt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ce),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ue),G.deleteBuffer(Ce),G.deleteSync(Mt),ue}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,q=null,$=0){let ie=Math.pow(2,-$),ee=Math.floor(E.image.width*ie),ue=Math.floor(E.image.height*ie),ve=q!==null?q.x:0,Se=q!==null?q.y:0;Z.setTexture2D(E,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,ve,Se,ee,ue),N.unbindTexture()};let Cm=G.createFramebuffer(),Rm=G.createFramebuffer();this.copyTextureToTexture=function(E,q,$=null,ie=null,ee=0,ue=0){let ve,Se,be,Re,We,je,Ce,qe,Mt,_t=E.isCompressedTexture?E.mipmaps[ue]:E.image;if($!==null)ve=$.max.x-$.min.x,Se=$.max.y-$.min.y,be=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,We=$.min.y,je=$.isBox3?$.min.z:0;else{let Li=Math.pow(2,-ee);ve=Math.floor(_t.width*Li),Se=Math.floor(_t.height*Li),be=E.isDataArrayTexture?_t.depth:E.isData3DTexture?Math.floor(_t.depth*Li):1,Re=0,We=0,je=0}ie!==null?(Ce=ie.x,qe=ie.y,Mt=ie.z):(Ce=0,qe=0,Mt=0);let nt=pt.convert(q.format),Ve=pt.convert(q.type),rt;q.isData3DTexture?(Z.setTexture3D(q,0),rt=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Z.setTexture2DArray(q,0),rt=G.TEXTURE_2D_ARRAY):(Z.setTexture2D(q,0),rt=G.TEXTURE_2D),N.activeTexture(G.TEXTURE0),N.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);let Ct=N.getParameter(G.UNPACK_ROW_LENGTH),Pe=N.getParameter(G.UNPACK_IMAGE_HEIGHT),Ne=N.getParameter(G.UNPACK_SKIP_PIXELS),Si=N.getParameter(G.UNPACK_SKIP_ROWS),zl=N.getParameter(G.UNPACK_SKIP_IMAGES);N.pixelStorei(G.UNPACK_ROW_LENGTH,_t.width),N.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_t.height),N.pixelStorei(G.UNPACK_SKIP_PIXELS,Re),N.pixelStorei(G.UNPACK_SKIP_ROWS,We),N.pixelStorei(G.UNPACK_SKIP_IMAGES,je);let Ta=E.isDataArrayTexture||E.isData3DTexture,gs=q.isDataArrayTexture||q.isData3DTexture;if(E.isDepthTexture){let Li=K.get(E),vr=K.get(q),Zi=K.get(Li.__renderTarget),kl=K.get(vr.__renderTarget);N.bindFramebuffer(G.READ_FRAMEBUFFER,Zi.__webglFramebuffer),N.bindFramebuffer(G.DRAW_FRAMEBUFFER,kl.__webglFramebuffer);for(let xr=0;xr<be;xr++)Ta&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(E).__webglTexture,ee,je+xr),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(q).__webglTexture,ue,Mt+xr)),G.blitFramebuffer(Re,We,ve,Se,Ce,qe,ve,Se,G.DEPTH_BUFFER_BIT,G.NEAREST);N.bindFramebuffer(G.READ_FRAMEBUFFER,null),N.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||E.isRenderTargetTexture||K.has(E)){let Li=K.get(E),vr=K.get(q);N.bindFramebuffer(G.READ_FRAMEBUFFER,Cm),N.bindFramebuffer(G.DRAW_FRAMEBUFFER,Rm);for(let Zi=0;Zi<be;Zi++)Ta?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Li.__webglTexture,ee,je+Zi):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Li.__webglTexture,ee),gs?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vr.__webglTexture,ue,Mt+Zi):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vr.__webglTexture,ue),ee!==0?G.blitFramebuffer(Re,We,ve,Se,Ce,qe,ve,Se,G.COLOR_BUFFER_BIT,G.NEAREST):gs?G.copyTexSubImage3D(rt,ue,Ce,qe,Mt+Zi,Re,We,ve,Se):G.copyTexSubImage2D(rt,ue,Ce,qe,Re,We,ve,Se);N.bindFramebuffer(G.READ_FRAMEBUFFER,null),N.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else gs?E.isDataTexture||E.isData3DTexture?G.texSubImage3D(rt,ue,Ce,qe,Mt,ve,Se,be,nt,Ve,_t.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(rt,ue,Ce,qe,Mt,ve,Se,be,nt,_t.data):G.texSubImage3D(rt,ue,Ce,qe,Mt,ve,Se,be,nt,Ve,_t):E.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ue,Ce,qe,ve,Se,nt,Ve,_t.data):E.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ue,Ce,qe,_t.width,_t.height,nt,_t.data):G.texSubImage2D(G.TEXTURE_2D,ue,Ce,qe,ve,Se,nt,Ve,_t);N.pixelStorei(G.UNPACK_ROW_LENGTH,Ct),N.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pe),N.pixelStorei(G.UNPACK_SKIP_PIXELS,Ne),N.pixelStorei(G.UNPACK_SKIP_ROWS,Si),N.pixelStorei(G.UNPACK_SKIP_IMAGES,zl),ue===0&&q.generateMipmaps&&G.generateMipmap(rt),N.unbindTexture()},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),N.unbindTexture()},this.resetState=function(){H=0,k=0,z=null,N.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};function un(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Cf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Kt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pa={duration:.5,overwrite:!1,delay:0},wu,It,it,yi=1e8,Qe=1/yi,mu=Math.PI*2,K0=mu/4,$0=0,Rf=Math.sqrt,Q0=Math.cos,e_=Math.sin,Tt=function(e){return typeof e=="string"},ut=function(e){return typeof e=="function"},pn=function(e){return typeof e=="number"},Rl=function(e){return typeof e>"u"},qi=function(e){return typeof e=="object"},Jt=function(e){return e!==!1},Eu=function(){return typeof window<"u"},yl=function(e){return ut(e)||Tt(e)},Pf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,t_=/random\([^)]+\)/g,i_=/,\s*/g,yf=/(?:-?\.?\d|\.)+/gi,Au=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cu=/[+-]=-?[.\d]+/,n_=/[^,'"\[\]\s]+/gi,r_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,Xi,gu,Ru,hi={},Tl={},If,Lf=function(e){return(Tl=as(e,hi))&&kt},Pl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},fa=function(e,t){return!t&&console.warn(e)},Df=function(e,t){return e&&(hi[e]=t)&&Tl&&(Tl[e]=t)||hi},ma=function(){return 0},s_={suppressEvents:!0,isStart:!0,kill:!1},Ml={suppressEvents:!0,kill:!1},a_={suppressEvents:!0},Pu={},Nn=[],_u={},Nf,Yt={},cu={},Mf=30,Sl=[],Iu="",Lu=function(e){var t=e[0],i,n;if(qi(t)||ut(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Sl.length;n--&&!Sl[n].targetTest(t););i=Sl[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Ou(e[n],i)))||e.splice(n,1);return e},Un=function(e){return e._gsap||Lu(Mi(e))[0]._gsap},Du=function(e,t,i){return(i=e[t])&&ut(i)?e[t]():Rl(i)&&e.getAttribute&&e.getAttribute(t)||i},Ht=function(e,t){return(e=e.split(",")).forEach(t)||e},dt=function(e){return Math.round(e*1e5)/1e5||0},ot=function(e){return Math.round(e*1e7)/1e7||0},ur=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},o_=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},wl=function(){var e=Nn.length,t=Nn.slice(0),i,n;for(_u={},Nn.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Nu=function(e){return!!(e._initted||e._startAt||e.add)},Uf=function(e,t,i,n){Nn.length&&!It&&wl(),e.render(t,i,n||!!(It&&t<0&&Nu(e))),Nn.length&&!It&&wl()},Of=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(n_).length<2?t:Tt(e)?e.trim():e},Ff=function(e){return e},ui=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},l_=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},as=function(e,t){for(var i in t)e[i]=t[i];return e},Sf=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=qi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},El=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},ha=function(e){var t=e.parent||lt,i=e.keyframes?l_(zt(e.keyframes)):ui;if(Jt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},c_=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Bf=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Il=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},On=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},or=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},h_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vu=function(e,t,i,n){return e._startAt&&(It?e._startAt.revert(Ml):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},u_=function r(e){return!e||e._ts&&r(e.parent)},bf=function(e){return e._repeat?os(e._tTime,e=e.duration()+e._rDelay)*e:0},os=function(e,t){var i=Math.floor(e=ot(e/t));return e&&i===e?i-1:i},Al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ll=function(e){return e._end=ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Qe)||0))},Dl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ll(e),i._dirty||or(i,e)),e},zf=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Al(e.rawTime(),t),(!t._dur||va(0,t.totalDuration(),i)-t._tTime>Qe)&&t.render(i,!0)),or(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Qe}},ji=function(e,t,i,n){return t.parent&&On(t),t._start=ot((pn(i)?i:i||e!==lt?xi(e,i,t):e._time)+t._delay),t._end=ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bf(e,t,"_first","_last",e._sort?"_start":0),xu(t)||(e._recent=t),n||zf(e,t),e._ts<0&&Dl(e,e._tTime),e},kf=function(e,t){return(hi.ScrollTrigger||Pl("scrollTrigger",t))&&hi.ScrollTrigger.create(t,e)},Gf=function(e,t,i,n,s){if(zu(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nf!==Zt.frame)return Nn.push(e),e._lazy=[s,n],1},d_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},p_=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&d_(e)&&!(!e._initted&&xu(e))||(e._ts<0||e._dp._ts<0)&&!xu(e))?0:1,o=e._rDelay,c=0,l,h,d;if(o&&e._repeat&&(c=va(0,e._tDur,t),h=os(c,o),e._yoyo&&h&1&&(a=1-a),h!==os(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||It||n||e._zTime===Qe||!t&&e._zTime){if(!e._initted&&Gf(e,t,n,i,c))return;for(d=e._zTime,e._zTime=t||(i?Qe:0),i||(i=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&vu(e,t,i,!0),e._onUpdate&&!i&&ci(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&On(e,1),!i&&!It&&(ci(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},f_=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},ls=function(e,t,i,n){var s=e._repeat,a=ot(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ot(a*(s+1)+e._rDelay*s):a,o>0&&!n&&Dl(e,e._tTime=e._tDur*o),e.parent&&Ll(e),i||or(e.parent,e),e},Tf=function(e){return e instanceof Bt?or(e):ls(e,e._dur)},m_={_start:0,endTime:ma,totalDuration:ma},xi=function r(e,t,i){var n=e.labels,s=e._recent||m_,a=e.duration()>=yi?s.endTime(!1):e._dur,o,c,l;return Tt(t)&&(isNaN(t)||t in n)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&i&&(c=c/100*(zt(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+c:a+c)):t==null?a:+t},ua=function(e,t,i){var n=pn(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,c;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Jt(c.vars.inherit)&&c.parent;a.immediateRender=Jt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new mt(t[0],a,t[s+1])},Fn=function(e,t){return e||e===0?t(e):t},va=function(e,t,i){return i<e?e:i>t?t:i},Lt=function(e,t){return!Tt(e)||!(t=r_.exec(e))?"":t[1]},g_=function(e,t,i){return Fn(i,function(n){return va(e,t,n)})},yu=[].slice,Vf=function(e,t){return e&&qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&qi(e[0]))&&!e.nodeType&&e!==Xi},__=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return Tt(n)&&!t||Vf(n,1)?(s=i).push.apply(s,Mi(n)):i.push(n)})||i},Mi=function(e,t,i){return it&&!t&&it.selector?it.selector(e):Tt(e)&&!i&&(gu||!cs())?yu.call((t||Ru).querySelectorAll(e),0):zt(e)?__(e,i):Vf(e)?yu.call(e,0):e?[e]:[]},Mu=function(e){return e=Mi(e)[0]||fa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Mi(t,i.querySelectorAll?i:i===e?fa("Invalid scope")||Ru.createElement("div"):e)}},Hf=function(e){return e.sort(function(){return .5-Math.random()})},Wf=function(e){if(ut(e))return e;var t=qi(e)?e:{each:e},i=lr(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,c=isNaN(n)||o,l=t.axis,h=n,d=n;return Tt(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!o&&c&&(h=n[0],d=n[1]),function(f,p,m){var u=(m||t).length,v=a[u],_,g,x,y,M,S,A,D,w;if(!v){if(w=t.grid==="auto"?0:(t.grid||[1,yi])[1],!w){for(A=-yi;A<(A=m[w++].getBoundingClientRect().left)&&w<u;);w<u&&w--}for(v=a[u]=[],_=c?Math.min(w,u)*h-.5:n%w,g=w===yi?0:c?u*d/w-.5:n/w|0,A=0,D=yi,S=0;S<u;S++)x=S%w-_,y=g-(S/w|0),v[S]=M=l?Math.abs(l==="y"?y:x):Rf(x*x+y*y),M>A&&(A=M),M<D&&(D=M);n==="random"&&Hf(v),v.max=A-D,v.min=D,v.v=u=(parseFloat(t.amount)||parseFloat(t.each)*(w>u?u-1:l?l==="y"?u/w:w:Math.max(w,u/w))||0)*(n==="edges"?-1:1),v.b=u<0?s-u:s,v.u=Lt(t.amount||t.each)||0,i=i&&u<0?P_(i):i}return u=(v[f]-v.min)/v.max||0,ot(v.b+(i?i(u):u)*v.v)+v.u}},Su=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=ot(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(pn(i)?0:Lt(i))}},Xf=function(e,t){var i=zt(e),n,s;return!i&&qi(e)&&(n=i=e.radius||yi,e.values?(e=Mi(e.values),(s=!pn(e[0]))&&(n*=n)):e=Su(e.increment)),Fn(t,i?ut(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=yi,h=0,d=e.length,f,p;d--;)s?(f=e[d].x-o,p=e[d].y-c,f=f*f+p*p):f=Math.abs(e[d]-o),f<l&&(l=f,h=d);return h=!n||l<=n?e[h]:a,s||h===a||pn(a)?h:h+Lt(a)}:Su(e))},jf=function(e,t,i,n){return Fn(zt(e)?!t:i===!0?!!(i=0):!n,function(){return zt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},v_=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},x_=function(e,t){return function(i){return e(parseFloat(i))+(t||Lt(i))}},y_=function(e,t,i){return Yf(e,t,0,1,i)},qf=function(e,t,i){return Fn(i,function(n){return e[~~t(n)]})},M_=function r(e,t,i){var n=t-e;return zt(e)?qf(e,r(0,e.length),t):Fn(i,function(s){return(n+(s-e)%n)%n+e})},S_=function r(e,t,i){var n=t-e,s=n*2;return zt(e)?qf(e,r(0,e.length-1),t):Fn(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},hs=function(e){return e.replace(t_,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(i_);return jf(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Yf=function(e,t,i,n,s){var a=t-e,o=n-i;return Fn(s,function(c){return i+((c-e)/a*o||0)})},b_=function r(e,t,i,n){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Tt(e),o={},c,l,h,d,f;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(zt(e)&&!zt(t)){for(h=[],d=e.length,f=d-2,l=1;l<d;l++)h.push(r(e[l-1],e[l]));d--,s=function(m){m*=d;var u=Math.min(f,~~m);return h[u](m-u)},i=t}else n||(e=as(zt(e)?[]:{},e));if(!h){for(c in t)Fu.call(o,e,c,"get",t[c]);s=function(m){return Vu(m,o)||(a?e.p:e)}}}return Fn(i,s)},wf=function(e,t,i){var n=e.labels,s=yi,a,o,c;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},ci=function(e,t,i){var n=e.vars,s=n[t],a=it,o=e._ctx,c,l,h;if(s)return c=n[t+"Params"],l=n.callbackScope||e,i&&Nn.length&&wl(),o&&(it=o),h=c?s.apply(l,c):s.call(l),it=a,h},la=function(e){return On(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&ci(e,"onInterrupt"),e},ss,Zf=[],Jf=function(e){if(e)if(e=!e.name&&e.default||e,Eu()||e.headless){var t=e.name,i=ut(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ma,render:Vu,add:Fu,kill:k_,modifier:z_,rawVars:0},a={targetTest:0,get:0,getSetter:Nl,aliases:{},register:0};if(cs(),e!==n){if(Yt[t])return;ui(n,ui(El(e,s),a)),as(n.prototype,as(s,El(e,a))),Yt[n.prop=t]=n,e.targetTest&&(Sl.push(n),Pu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Df(t,n),e.register&&e.register(kt,n,Wt)}else Zf.push(e)},$e=255,ca={aqua:[0,$e,$e],lime:[0,$e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$e],navy:[0,0,128],white:[$e,$e,$e],olive:[128,128,0],yellow:[$e,$e,0],orange:[$e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$e,0,0],pink:[$e,192,203],cyan:[0,$e,$e],transparent:[$e,$e,$e,0]},hu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*$e+.5|0},Kf=function(e,t,i){var n=e?pn(e)?[e>>16,e>>8&$e,e&$e]:0:ca.black,s,a,o,c,l,h,d,f,p,m;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ca[e])n=ca[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&$e,n&$e,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&$e,e&$e]}else if(e.substr(0,3)==="hsl"){if(n=m=e.match(yf),!t)c=+n[0]%360/360,l=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=hu(c+1/3,s,a),n[1]=hu(c,s,a),n[2]=hu(c-1/3,s,a);else if(~e.indexOf("="))return n=e.match(Au),i&&n.length<4&&(n[3]=1),n}else n=e.match(yf)||ca.transparent;n=n.map(Number)}return t&&!m&&(s=n[0]/$e,a=n[1]/$e,o=n[2]/$e,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?c=l=0:(p=d-f,l=h>.5?p/(2-d-f):p/(d+f),c=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,c*=60),n[0]=~~(c+.5),n[1]=~~(l*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},$f=function(e){var t=[],i=[],n=-1;return e.split(dn).forEach(function(s){var a=s.match(hr)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},Ef=function(e,t,i){var n="",s=(e+n).match(dn),a=t?"hsla(":"rgba(",o=0,c,l,h,d;if(!s)return e;if(s=s.map(function(f){return(f=Kf(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=$f(e),c=i.c,c.join(n)!==h.c.join(n)))for(l=e.replace(dn,"1").split(hr),d=l.length-1;o<d;o++)n+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!l)for(l=e.split(dn),d=l.length-1;o<d;o++)n+=l[o]+s[o];return n+l[d]},dn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ca)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),T_=/hsl[a]?\(/,Uu=function(e){var t=e.join(" "),i;if(dn.lastIndex=0,dn.test(t))return i=T_.test(t),e[1]=Ef(e[1],i),e[0]=Ef(e[0],i,$f(e[1])),!0},ga,Zt=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],c,l,h,d,f,p,m=function u(v){var _=r()-n,g=v===!0,x,y,M,S;if((_>e||_<0)&&(i+=_-t),n+=_,M=n-i,x=M-a,(x>0||g)&&(S=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,a+=x+(x>=s?4:s-x),y=1),g||(c=l(u)),y)for(p=0;p<o.length;p++)o[p](M,f,S,v)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(v){return f/(1e3/(v||60))},wake:function(){If&&(!gu&&Eu()&&(Xi=gu=window,Ru=Xi.document||{},hi.gsap=kt,(Xi.gsapVersions||(Xi.gsapVersions=[])).push(kt.version),Lf(Tl||Xi.GreenSockGlobals||!Xi.gsap&&Xi||{}),Zf.forEach(Jf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=h||function(v){return setTimeout(v,a-d.time*1e3+1|0)},ga=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),ga=0,l=ma},lagSmoothing:function(v,_){e=v||1/0,t=Math.min(_||33,e)},fps:function(v){s=1e3/(v||240),a=d.time*1e3+s},add:function(v,_,g){var x=_?function(y,M,S,A){v(y,M,S,A),d.remove(x)}:v;return d.remove(v),o[g?"unshift":"push"](x),cs(),x},remove:function(v,_){~(_=o.indexOf(v))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},d}(),cs=function(){return!ga&&Zt.wake()},Xe={},w_=/^[\d.\-M][\d.\-,\s]/,E_=/["']/g,A_=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,c,l;s<a;s++)c=i[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[n]=isNaN(l)?l.replace(E_,"").trim():+l,n=c.substr(o+1).trim();return t},C_=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},R_=function(e){var t=(e+"").split("("),i=Xe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[A_(t[1])]:C_(e).split(",").map(Of)):Xe._CE&&w_.test(e)?Xe._CE("",e):i},P_=function(e){return function(t){return 1-e(1-t)}},lr=function(e,t){return e&&(ut(e)?e:Xe[e]||R_(e))||t},dr=function(e,t,i,n){i===void 0&&(i=function(c){return 1-t(1-c)}),n===void 0&&(n=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return Ht(e,function(o){Xe[o]=hi[o]=s,Xe[a=o.toLowerCase()]=i;for(var c in s)Xe[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Xe[o+"."+c]=s[c]}),s},Qf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},uu=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/mu*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*e_((h-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Qf(o);return s=mu/s,c.config=function(l,h){return r(e,l,h)},c},du=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Qf(i);return n.config=function(s){return r(e,s)},n};Ht("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;dr(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;dr("Elastic",uu("in"),uu("out"),uu());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};dr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);dr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});dr("Circ",function(r){return-(Rf(1-r*r)-1)});dr("Sine",function(r){return r===1?1:-Q0(r*K0)+1});dr("Back",du("in"),du("out"),du());Xe.SteppedEase=Xe.steps=hi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-Qe;return function(o){return((n*va(0,a,o)|0)+s)*i}}};pa.ease=Xe["quad.out"];Ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Iu+=r+","+r+"Params,"});var Ou=function(e,t){this.id=$0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Du,this.set=t?t.getSetter:Nl},_a=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ls(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),ga||Zt.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ls(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Dl(this,i),!s._dp||s.parent||zf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Qe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Uf(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+bf(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+bf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?os(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-Qe?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Al(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Qe?0:this._rts,this.totalTime(va(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),Ll(this),h_(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qe&&(this._tTime-=Qe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ot(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ji(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Jt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Al(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=a_);var n=It;return It=i,Nu(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),It=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Tf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Tf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(xi(this,i),Jt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Jt(n)),this._dur||(this._zTime=-Qe),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qe,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Qe)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,s=n._prom;return new Promise(function(a){var o=ut(i)?i:Ff,c=function(){var h=n.then;n.then=null,s&&s(),ut(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?c():n._prom=c})},e.kill=function(){la(this)},r}();ui(_a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qe,_prom:0,_ps:!1,_rts:1});var Bt=function(r){Cf(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Jt(i.sortChildren),lt&&ji(i.parent||lt,un(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&kf(un(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return ua(0,arguments,this),this},t.from=function(n,s,a){return ua(1,arguments,this),this},t.fromTo=function(n,s,a,o){return ua(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,ha(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new mt(n,s,xi(this,a),1),this},t.call=function(n,s,a){return ji(this,mt.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new mt(n,a,xi(this,c)),this},t.staggerFrom=function(n,s,a,o,c,l,h){return a.runBackwards=1,ha(a).immediateRender=Jt(a.immediateRender),this.staggerTo(n,s,a,o,c,l,h)},t.staggerFromTo=function(n,s,a,o,c,l,h,d){return o.startAt=a,ha(o).immediateRender=Jt(o.immediateRender),this.staggerTo(n,s,o,c,l,h,d)},t.render=function(n,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=n<=0?0:ot(n),d=this._zTime<0!=n<0&&(this._initted||!l),f,p,m,u,v,_,g,x,y,M,S,A;if(this!==lt&&h>c&&n>=0&&(h=c),h!==this._tTime||a||d){if(o!==this._time&&l&&(h+=this._time-o,n+=this._time-o),f=h,y=this._start,x=this._ts,_=!x,d&&(l||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,v=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,s,a);if(f=ot(h%v),h===c?(u=this._repeat,f=l):(M=ot(h/v),u=~~M,u&&u===M&&(f=l,u--),f>l&&(f=l)),M=os(this._tTime,v),!o&&this._tTime&&M!==u&&this._tTime-M*v-this._dur<=0&&(M=u),S&&u&1&&(f=l-f,A=1),u!==M&&!this._lock){var D=S&&M&1,w=D===(S&&u&1);if(u<M&&(D=!D),o=D?0:h%l?l:h,this._lock=1,this.render(o||(A?0:ot(u*v)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=u),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,o=D?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=f_(this,ot(o),ot(f)),g&&(h-=f-(f=g._start))),this._tTime=h,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&l&&!s&&!M&&(ci(this,"onStart"),this._tTime!==h))return this;if(f>=o&&n>=0)for(p=this._first;p;){if(m=p._next,(p._act||f>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(n,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!_){g=0,m&&(h+=this._zTime=-Qe);break}}p=m}else{p=this._last;for(var L=n<0?n:f;p;){if(m=p._prev,(p._act||L<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(n,s,a);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,s,a||It&&Nu(p)),f!==this._time||!this._ts&&!_){g=0,m&&(h+=this._zTime=L?-Qe:Qe);break}}p=m}}if(g&&!s&&(this.pause(),g.render(f>=o?0:-Qe)._zTime=f>=o?1:-1,this._ts))return this._start=y,Ll(this),this.render(n,s,a);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&On(this,1),!s&&!(n<0&&!o)&&(h||o||!c)&&(ci(this,h===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(pn(s)||(s=xi(this,s,n)),!(n instanceof _a)){if(zt(n))return n.forEach(function(o){return a.add(o,s)}),this;if(Tt(n))return this.addLabel(n,s);if(ut(n))n=mt.delayedCall(0,n);else return this}return this!==n?ji(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-yi);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof mt?s&&c.push(l):(a&&c.push(l),n&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return Tt(n)?this.removeLabel(n):ut(n)?this.killTweensOf(n):(n.parent===this&&Il(this,n),n===this._recent&&(this._recent=this._last),or(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ot(Zt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=xi(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=mt.delayedCall(0,s||ma,a);return o.data="isPause",this._hasPause=1,ji(this,o,xi(this,n))},t.removePause=function(n){var s=this._first;for(n=xi(this,n);s;)s._start===n&&s.data==="isPause"&&On(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),c=o.length;c--;)Dn!==o[c]&&o[c].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=Mi(n),c=this._first,l=pn(s),h;c;)c instanceof mt?o_(c._targets,o)&&(l?(!Dn||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=xi(a,n),c=s,l=c.startAt,h=c.onStart,d=c.onStartParams,f=c.immediateRender,p,m=mt.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Qe,onStart:function(){if(a.pause(),!p){var v=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());m._dur!==v&&ls(m,v,0,1).render(m._time,!0,!0),p=1}h&&h.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,ui({startAt:{time:xi(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),wf(this,xi(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),wf(this,xi(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Qe)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(n=ot(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=n);return or(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),or(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,c=yi,l,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,ji(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ot(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;ls(a,a===lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(lt._ts&&(Uf(lt,Al(n,lt)),Nf=Zt.frame),Zt.frame>=Mf){Mf+=Kt.autoSleep||120;var s=lt._first;if((!s||!s._ts)&&Kt.autoSleep&&Zt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zt.sleep()}}},e}(_a);ui(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var I_=function(e,t,i,n,s,a,o){var c=new Wt(this._pt,e,t,0,1,Gu,null,s),l=0,h=0,d,f,p,m,u,v,_,g;for(c.b=i,c.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=hs(n)),a&&(g=[i,n],a(g,e,t),i=g[0],n=g[1]),f=i.match(lu)||[];d=lu.exec(n);)m=d[0],u=n.substring(l,d.index),p?p=(p+1)%5:u.substr(-5)==="rgba("&&(p=1),m!==f[h++]&&(v=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:u||h===1?u:",",s:v,c:m.charAt(1)==="="?ur(v,m)-v:parseFloat(m)-v,m:p&&p<4?Math.round:0},l=lu.lastIndex);return c.c=l<n.length?n.substring(l,n.length):"",c.fp=o,(Cu.test(n)||_)&&(c.e=0),this._pt=c,c},Fu=function(e,t,i,n,s,a,o,c,l,h){ut(n)&&(n=n(s||0,e,a));var d=e[t],f=i!=="get"?i:ut(d)?l?e[t.indexOf("set")||!ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,p=ut(d)?l?O_:im:ku,m;if(Tt(n)&&(~n.indexOf("random(")&&(n=hs(n)),n.charAt(1)==="="&&(m=ur(f,n)+(Lt(f)||0),(m||m===0)&&(n=m))),!h||f!==n||bu)return!isNaN(f*n)&&n!==""?(m=new Wt(this._pt,e,t,+f||0,n-(f||0),typeof d=="boolean"?B_:nm,0,p),l&&(m.fp=l),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&Pl(t,n),I_.call(this,e,t,f,n,p,c||Kt.stringFilter,l))},L_=function(e,t,i,n,s){if(ut(e)&&(e=da(e,s,t,i,n)),!qi(e)||e.style&&e.nodeType||zt(e)||Pf(e))return Tt(e)?da(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=da(e[o],s,t,i,n);return a},Bu=function(e,t,i,n,s,a){var o,c,l,h;if(Yt[e]&&(o=new Yt[e]).init(s,o.rawVars?t[e]:L_(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=c=new Wt(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==ss))for(l=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Dn,bu,zu=function r(e,t,i){var n=e.vars,s=n.ease,a=n.startAt,o=n.immediateRender,c=n.lazy,l=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,f=n.keyframes,p=n.autoRevert,m=e._dur,u=e._startAt,v=e._targets,_=e.parent,g=_&&_.data==="nested"?_.vars.targets:v,x=e._overwrite==="auto"&&!wu,y=e.timeline,M=n.easeReverse||d,S,A,D,w,L,V,B,H,k,z,X,W,oe;if(y&&(!f||!s)&&(s="none"),e._ease=lr(s,pa.ease),e._rEase=M&&(lr(M)||e._ease),e._from=!y&&!!n.runBackwards,e._from&&(e.ratio=1),!y||f&&!n.stagger){if(H=v[0]?Un(v[0]).harness:0,W=H&&n[H.prop],S=El(n,Pu),u&&(u._zTime<0&&u.progress(1),t<0&&h&&o&&!p?u.render(-1,!0):u.revert(h&&m?Ml:s_),u._lazy=0),a){if(On(e._startAt=mt.set(v,ui({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!u&&Jt(c),startAt:null,delay:0,onUpdate:l&&function(){return ci(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!o&&!p)&&e._startAt.revert(Ml),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!u){if(t&&(o=!1),D=ui({overwrite:!1,data:"isFromStart",lazy:o&&!u&&Jt(c),immediateRender:o,stagger:0,parent:_},S),W&&(D[H.prop]=W),On(e._startAt=mt.set(v,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert(Ml):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Qe,Qe);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&Jt(c)||c&&!m,A=0;A<v.length;A++){if(L=v[A],B=L._gsap||Lu(v)[A]._gsap,e._ptLookup[A]=z={},_u[B.id]&&Nn.length&&wl(),X=g===v?A:g.indexOf(L),H&&(k=new H).init(L,W||S,e,X,g)!==!1&&(e._pt=w=new Wt(e._pt,L,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(pe){z[pe]=w}),k.priority&&(V=1)),!H||W)for(D in S)Yt[D]&&(k=Bu(D,S,e,X,L,g))?k.priority&&(V=1):z[D]=w=Fu.call(e,L,D,"get",S[D],X,g,0,n.stringFilter);e._op&&e._op[A]&&e.kill(L,e._op[A]),x&&e._pt&&(Dn=e,lt.killTweensOf(L,z,e.globalTime(t)),oe=!e.parent,Dn=0),e._pt&&c&&(_u[B.id]=1)}V&&Hu(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!oe,f&&t<=0&&y.render(yi,!0,!0)},D_=function(e,t,i,n,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,p;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(h=f[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return bu=1,e.vars[t]="+=0",zu(e,o),bu=0,c?fa(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(p=l.length;p--;)d=l[p],h=d._pt||d,h.s=(n||n===0)&&!s?n:h.s+(n||0)+a*h.c,h.c=i-h.s,d.e&&(d.e=dt(i)+Lt(d.e)),d.b&&(d.b=h.s+Lt(d.b))},N_=function(e,t){var i=e[0]?Un(e[0]).harness:0,n=i&&i.aliases,s,a,o,c;if(!n)return t;s=as({},t);for(a in n)if(a in s)for(c=n[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},U_=function(e,t,i,n){var s=t.ease||n||"power1.inOut",a,o;if(zt(t))o=i[e]||(i[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},da=function(e,t,i,n,s){return ut(e)?e.call(t,i,n,s):Tt(e)&&~e.indexOf("random(")?hs(e):e},em=Iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",tm={};Ht(em+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return tm[r]=1});var mt=function(r){Cf(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:ha(n))||this;var c=o.vars,l=c.duration,h=c.delay,d=c.immediateRender,f=c.stagger,p=c.overwrite,m=c.keyframes,u=c.defaults,v=c.scrollTrigger,_=n.parent||lt,g=(zt(i)||Pf(i)?pn(i[0]):"length"in n)?[i]:Mi(i),x,y,M,S,A,D,w,L;if(o._targets=g.length?Lu(g):fa("GSAP target "+i+" not found. https://gsap.com",!Kt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,m||f||yl(l)||yl(h)){n=o.vars;var V=n.easeReverse||n.yoyoEase;if(x=o.timeline=new Bt({data:"nested",defaults:u||{},targets:_&&_.data==="nested"?_.vars.targets:g}),x.kill(),x.parent=x._dp=un(o),x._start=0,f||yl(l)||yl(h)){if(S=g.length,w=f&&Wf(f),qi(f))for(A in f)~em.indexOf(A)&&(L||(L={}),L[A]=f[A]);for(y=0;y<S;y++)M=El(n,tm),M.stagger=0,V&&(M.easeReverse=V),L&&as(M,L),D=g[y],M.duration=+da(l,un(o),y,D,g),M.delay=(+da(h,un(o),y,D,g)||0)-o._delay,!f&&S===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),x.to(D,M,w?w(y,D,g):0),x._ease=Xe.none;x.duration()?l=h=0:o.timeline=0}else if(m){ha(ui(x.vars.defaults,{ease:"none"})),x._ease=lr(m.ease||n.ease||"none");var B=0,H,k,z;if(zt(m))m.forEach(function(X){return x.to(g,X,">")}),x.duration();else{M={};for(A in m)A==="ease"||A==="easeEach"||U_(A,m[A],M,m.easeEach);for(A in M)for(H=M[A].sort(function(X,W){return X.t-W.t}),B=0,y=0;y<H.length;y++)k=H[y],z={ease:k.e,duration:(k.t-(y?H[y-1].t:0))/100*l},z[A]=k.v,x.to(g,z,B),B+=z.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||o.duration(l=x.duration())}else o.timeline=0;return p===!0&&!wu&&(Dn=un(o),lt.killTweensOf(g),Dn=0),ji(_,un(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!l&&!m&&o._start===ot(_._time)&&Jt(d)&&u_(un(o))&&_.data!=="nested")&&(o._tTime=-Qe,o.render(Math.max(0,-h)||0)),v&&kf(un(o),v),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,c=this._tDur,l=this._dur,h=n<0,d=n>c-Qe&&!h?c:n<Qe?0:n,f,p,m,u,v,_,g,x;if(!l)p_(this,n,s,a);else if(d!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,x=this.timeline,this._repeat){if(u=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(u*100+n,s,a);if(f=ot(d%u),d===c?(m=this._repeat,f=l):(v=ot(d/u),m=~~v,m&&m===v?(f=l,m--):f>l&&(f=l)),_=this._yoyo&&m&1,_&&(f=l-f),v=os(this._tTime,u),f===o&&!a&&this._initted&&m===v)return this._tTime=d,this;m!==v&&this.vars.repeatRefresh&&!_&&!this._lock&&f!==u&&this._initted&&(this._lock=a=1,this.render(ot(u*m),!0).invalidate()._lock=0)}if(!this._initted){if(Gf(this,h?n:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==v))return this;if(l!==this._dur)return this.render(n,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var M=y?o:l-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(f/l);if(this._from&&(this.ratio=g=1-g),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!v&&(ci(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;x&&x.render(n<0?n:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&vu(this,n,s,a),ci(this,"onUpdate")),this._repeat&&m!==v&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&vu(this,n,!0,!0),(n||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&On(this,1),!s&&!(h&&!o)&&(d||o||_)&&(ci(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,a,o,c){ga||Zt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||zu(this,l),h=this._ease(l/this._dur),D_(this,n,s,a,o,h,l,c)?this.resetTo(n,s,a,o,1):(Dl(this,0),this.parent||Bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?la(this):this.scrollTrigger&&this.scrollTrigger.kill(!!It),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Dn&&Dn.vars.overwrite!==!0)._first||la(this),this.parent&&a!==this.timeline.totalDuration()&&ls(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=n?Mi(n):o,l=this._ptLookup,h=this._pt,d,f,p,m,u,v,_;if((!s||s==="all")&&c_(o,c))return s==="all"&&(this._pt=0),la(this);for(d=this._op=this._op||[],s!=="all"&&(Tt(s)&&(u={},Ht(s,function(g){return u[g]=1}),s=u),s=N_(o,s)),_=o.length;_--;)if(~c.indexOf(o[_])){f=l[_],s==="all"?(d[_]=s,m=f,p={}):(p=d[_]=d[_]||{},m=s);for(u in m)v=f&&f[u],v&&((!("kill"in v.d)||v.d.kill(u)===!0)&&Il(this,v,"_pt"),delete f[u]),p!=="all"&&(p[u]=1)}return this._initted&&!this._pt&&h&&la(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return ua(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return ua(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return lt.killTweensOf(n,s,a)},e}(_a);ui(mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ht("staggerTo,staggerFrom,staggerFromTo",function(r){mt[r]=function(){var e=new Bt,t=yu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ku=function(e,t,i){return e[t]=i},im=function(e,t,i){return e[t](i)},O_=function(e,t,i,n){return e[t](n.fp,i)},F_=function(e,t,i){return e.setAttribute(t,i)},Nl=function(e,t){return ut(e[t])?im:Rl(e[t])&&e.setAttribute?F_:ku},nm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},B_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gu=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Vu=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},z_=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},k_=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Il(this,t,"_pt"):t.dep||(i=1),t=n;return!i},G_=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Hu=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},Wt=function(){function r(t,i,n,s,a,o,c,l,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||nm,this.d=c||this,this.set=l||ku,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=G_,this.m=i,this.mt=s,this.tween=n},r}();Ht(Iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Pu[r]=1});hi.TweenMax=hi.TweenLite=mt;hi.TimelineLite=hi.TimelineMax=Bt;lt=new Bt({sortChildren:!1,defaults:pa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kt.stringFilter=Uu;var cr=[],bl={},V_=[],Af=0,H_=0,pu=function(e){return(bl[e]||V_).map(function(t){return t()})},Tu=function(){var e=Date.now(),t=[];e-Af>2&&(pu("matchMediaInit"),cr.forEach(function(i){var n=i.queries,s=i.conditions,a,o,c,l;for(o in n)a=Xi.matchMedia(n[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(i.revert(),c&&t.push(i))}),pu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Af=e,pu("matchMedia"))},rm=function(){function r(t,i){this.selector=i&&Mu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=H_++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){ut(i)&&(s=n,n=i,i=ut);var a=this,o=function(){var l=it,h=a.selector,d;return l&&l!==a&&l.data.push(a),s&&(a.selector=Mu(s)),it=a,d=n.apply(a,arguments),ut(d)&&a._r.push(d),it=l,a.selector=h,a.isReverted=!1,d};return a.last=o,i===ut?o(a,function(c){return a.add(null,c)}):i?a[i]=o:o},e.ignore=function(i){var n=it;it=null,i(this),it=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof mt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),c=s.data.length;c--;)l=s.data[c],l instanceof Bt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof mt)&&l.revert&&l.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=cr.length;a--;)cr[a].id===this.id&&cr.splice(a,1)},e.revert=function(i){this.kill(i||{})},r}(),W_=function(){function r(t){this.contexts=[],this.scope=t,it&&it.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){qi(i)||(i={matches:i});var a=new rm(0,s||this.scope),o=a.conditions={},c,l,h;it&&!a.selector&&(a.selector=it.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(l in i)l==="all"?h=1:(c=Xi.matchMedia(i[l]),c&&(cr.indexOf(a)<0&&cr.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(Tu):c.addEventListener("change",Tu)));return h&&n(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),Cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Jf(n)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,t){return lt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Tt(e)&&(e=Mi(e)[0]);var s=Un(e||{}).get,a=i?Ff:Of;return i==="native"&&(i=""),e&&(t?a((Yt[t]&&Yt[t].get||s)(e,t,i,n)):function(o,c,l){return a((Yt[o]&&Yt[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,i){if(e=Mi(e),e.length>1){var n=e.map(function(h){return kt.quickSetter(h,t,i)}),s=n.length;return function(h){for(var d=s;d--;)n[d](h)}}e=e[0]||{};var a=Yt[t],o=Un(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(h){var d=new a;ss._pt=0,d.init(e,i?h+i:h,ss,0,[e]),d.render(1,d),ss._pt&&Vu(1,ss)}:o.set(e,c);return a?l:function(h){return l(e,c,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,s=kt.to(e,ui((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(c,l,h){return s.resetTo(t,c,l,h)};return a.tween=s,a},isTweening:function(e){return lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=lr(e.ease,pa.ease)),Sf(pa,e||{})},config:function(e){return Sf(Kt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Yt[o]&&!hi[o]&&fa(t+" effect requires "+o+" plugin.")}),cu[t]=function(o,c,l){return i(Mi(o),ui(c||{},s),l)},a&&(Bt.prototype[t]=function(o,c,l){return this.add(cu[t](o,qi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Xe[e]=lr(t)},parseEase:function(e,t){return arguments.length?lr(e,t):Xe},getById:function(e){return lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Bt(e),n,s;for(i.smoothChildTiming=Jt(e.smoothChildTiming),lt.remove(i),i._dp=0,i._time=i._tTime=lt._time,n=lt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof mt&&n.vars.onComplete===n._targets[0]))&&ji(i,n,n._start-n._delay),n=s;return ji(lt,i,0),i},context:function(e,t){return e?new rm(e,t):it},matchMedia:function(e){return new W_(e)},matchMediaRefresh:function(){return cr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Tu()},addEventListener:function(e,t){var i=bl[e]||(bl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=bl[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:M_,wrapYoyo:S_,distribute:Wf,random:jf,snap:Xf,normalize:y_,getUnit:Lt,clamp:g_,splitColor:Kf,toArray:Mi,selector:Mu,mapRange:Yf,pipe:v_,unitize:x_,interpolate:b_,shuffle:Hf},install:Lf,effects:cu,ticker:Zt,updateRoot:Bt.updateRoot,plugins:Yt,globalTimeline:lt,core:{PropTween:Wt,globals:Df,Tween:mt,Timeline:Bt,Animation:_a,getCache:Un,_removeLinkedListItem:Il,reverting:function(){return It},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return wu=e}}};Ht("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Cl[r]=mt[r]});Zt.add(Bt.updateRoot);ss=Cl.to({},{duration:0});var X_=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},j_=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=X_(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},fu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var c,l;if(Tt(s)&&(c={},Ht(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}j_(o,s)}}}},kt=Cl.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o,c;this.tween=i;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],n,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)It?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},fu("roundProps",Su),fu("modifiers"),fu("snap",Xf))||Cl;mt.version=Bt.version=kt.version="3.15.0";If=1;Eu()&&cs();var q_=Xe.Power0,Y_=Xe.Power1,Z_=Xe.Power2,J_=Xe.Power3,K_=Xe.Power4,$_=Xe.Linear,Q_=Xe.Quad,ev=Xe.Cubic,tv=Xe.Quart,iv=Xe.Quint,nv=Xe.Strong,rv=Xe.Elastic,sv=Xe.Back,av=Xe.SteppedEase,ov=Xe.Bounce,lv=Xe.Sine,cv=Xe.Expo,hv=Xe.Circ;var sm,Bn,ds,Zu,gr,uv,am,Ju,dv=function(){return typeof window<"u"},mn={},mr=180/Math.PI,ps=Math.PI/180,us=Math.atan2,om=1e8,Ku=/([A-Z])/g,pv=/(left|right|width|margin|padding|x)/i,fv=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_v=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vv=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},mm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xv=function(e,t,i){return e.style[t]=i},yv=function(e,t,i){return e.style.setProperty(t,i)},Mv=function(e,t,i){return e._gsap[t]=i},Sv=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},bv=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Tv=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},ct="transform",$t=ct+"Origin",wv=function r(e,t){var i=this,n=this.target,s=n.style,a=n._gsap;if(e in mn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=fn(n,o)}):this.tfm[e]=a.x?a[e]:fn(n,e),e===$t&&(this.tfm.zOrigin=a.zOrigin);else return Yi.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(ct)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push($t,t,"")),e=ct}(s||t)&&this.props.push(e,t,s[e])},_m=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ev=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ku,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ju(),(!s||!s.isStart)&&!i[ct]&&(_m(i),n.zOrigin&&i[$t]&&(i[$t]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},vm=function(e,t){var i={target:e,props:[],revert:Ev,save:wv};return e._gsap||kt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},xm,ju=function(e,t){var i=Bn.createElementNS?Bn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bn.createElement(e);return i&&i.style?i:Bn.createElement(e)},di=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ku,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,fs(t)||t,1)||""},lm="O,Moz,ms,Ms,Webkit".split(","),fs=function(e,t,i){var n=t||gr,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(lm[a]+e in s););return a<0?null:(a===3?"ms":a>=0?lm[a]:"")+e},qu=function(){dv()&&window.document&&(sm=window,Bn=sm.document,ds=Bn.documentElement,gr=ju("div")||{style:{}},uv=ju("div"),ct=fs(ct),$t=ct+"Origin",gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xm=!!fs("perspective"),Ju=kt.core.reverting,Zu=1)},cm=function(e){var t=e.ownerSVGElement,i=ju("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),ds.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),ds.removeChild(i),s},hm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ym=function(e){var t,i;try{t=e.getBBox()}catch{t=cm(e),i=1}return t&&(t.width||t.height)||i||(t=cm(e)),t&&!t.width&&!t.x&&!t.y?{x:+hm(e,["x","cx","x1"])||0,y:+hm(e,["y","cy","y1"])||0,width:0,height:0}:t},Mm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ym(e))},kn=function(e,t){if(t){var i=e.style,n;t in mn&&t!==$t&&(t=ct),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Ku,"-$1").toLowerCase())):i.removeAttribute(t)}},zn=function(e,t,i,n,s,a){var o=new Wt(e._pt,t,i,0,1,a?gm:mm);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},um={deg:1,rad:1,turn:1},Av={grid:1,flex:1},Gn=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=gr.style,c=pv.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),d=100,f=n==="px",p=n==="%",m,u,v,_;if(n===a||!s||um[n]||um[a])return s;if(a!=="px"&&!f&&(s=r(e,t,i,"px")),_=e.getCTM&&Mm(e),(p||a==="%")&&(mn[t]||~t.indexOf("adius")))return m=_?e.getBBox()[c?"width":"height"]:e[h],dt(p?s/m*d:s/100*m);if(o[c?"width":"height"]=d+(f?a:n),u=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,_&&(u=(e.ownerSVGElement||{}).parentNode),(!u||u===Bn||!u.appendChild)&&(u=Bn.body),v=u._gsap,v&&p&&v.width&&c&&v.time===Zt.time&&!v.uncache)return dt(s/v.width*d);if(p&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=d+n,m=e[h],g?e.style[t]=g:kn(e,t)}else(p||a==="%")&&!Av[di(u,"display")]&&(o.position=di(e,"position")),u===e&&(o.position="static"),u.appendChild(gr),m=gr[h],u.removeChild(gr),o.position="absolute";return c&&p&&(v=Un(u),v.time=Zt.time,v.width=u[h]),dt(f?m*s/d:m&&s?d/m*s:0)},fn=function(e,t,i,n){var s;return Zu||qu(),t in Yi&&t!=="transform"&&(t=Yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),mn[t]&&t!=="transform"?(s=Ma(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ol(di(e,$t))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Ul[t]&&Ul[t](e,t,i)||di(e,t)||Du(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gn(e,t,s,i)+i:s},Cv=function(e,t,i,n){if(!i||i==="none"){var s=fs(t,e,1),a=s&&di(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=di(e,"borderTopColor"))}var o=new Wt(this._pt,e.style,t,0,1,Gu),c=0,l=0,h,d,f,p,m,u,v,_,g,x,y,M;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=di(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(u=e.style[t],e.style[t]=n,n=di(e,t)||n,u?e.style[t]=u:kn(e,t)),h=[i,n],Uu(h),i=h[0],n=h[1],f=i.match(hr)||[],M=n.match(hr)||[],M.length){for(;d=hr.exec(n);)v=d[0],g=n.substring(c,d.index),m?m=(m+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(m=1),v!==(u=f[l++]||"")&&(p=parseFloat(u)||0,y=u.substr((p+"").length),v.charAt(1)==="="&&(v=ur(p,v)+y),_=parseFloat(v),x=v.substr((_+"").length),c=hr.lastIndex-x.length,x||(x=x||Kt.units[t]||y,c===n.length&&(n+=x,o.e+=x)),y!==x&&(p=Gn(e,t,u,x)||0),o._pt={_next:o._pt,p:g||l===1?g:",",s:p,c:_-p,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=c<n.length?n.substring(c,n.length):""}else o.r=t==="display"&&n==="none"?gm:mm;return Cu.test(n)&&(o.e=0),this._pt=o,o},dm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Rv=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=dm[i]||i,t[1]=dm[n]||n,t.join(" ")},Pv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,c,l;if(s==="all"||s===!0)n.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],mn[o]&&(c=1,o=o==="transformOrigin"?$t:ct),kn(i,o);c&&(kn(i,ct),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ma(i,1),a.uncache=1,_m(n)))}},Ul={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new Wt(e._pt,t,i,0,0,Pv);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},ya=[1,0,0,1,0,0],Sm={},bm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pm=function(e){var t=di(e,ct);return bm(t)?ya:t.substr(7).match(Au).map(dt)},$u=function(e,t){var i=e._gsap||Un(e),n=e.style,s=pm(e),a,o,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ya:s):(s===ya&&!e.offsetParent&&e!==ds&&!i.svg&&(c=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,ds.appendChild(e)),s=pm(e),c?n.display=c:kn(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yu=function(e,t,i,n,s,a){var o=e._gsap,c=s||$u(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,p=c[0],m=c[1],u=c[2],v=c[3],_=c[4],g=c[5],x=t.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,S,A,D,w;i?c!==ya&&(A=p*v-m*u)&&(D=y*(v/A)+M*(-u/A)+(u*g-v*_)/A,w=y*(-m/A)+M*(p/A)-(p*g-m*_)/A,y=D,M=w):(S=ym(e),y=S.x+(~x[0].indexOf("%")?y/100*S.width:y),M=S.y+(~(x[1]||x[0]).indexOf("%")?M/100*S.height:M)),n||n!==!1&&o.smooth?(_=y-l,g=M-h,o.xOffset=d+(_*p+g*u)-_,o.yOffset=f+(_*m+g*v)-g):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[$t]="0px 0px",a&&(zn(a,o,"xOrigin",l,y),zn(a,o,"yOrigin",h,M),zn(a,o,"xOffset",d,o.xOffset),zn(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ma=function(e,t){var i=e._gsap||new Ou(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=di(e,$t)||"0",h,d,f,p,m,u,v,_,g,x,y,M,S,A,D,w,L,V,B,H,k,z,X,W,oe,pe,Me,me,xe,re,ce,se;return h=d=f=u=v=_=g=x=y=0,p=m=1,i.svg=!!(e.getCTM&&Mm(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[ct]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ct]!=="none"?c[ct]:"")),n.scale=n.rotate=n.translate="none"),A=$u(e,i.svg),i.svg&&(i.uncache?(oe=e.getBBox(),l=i.xOrigin-oe.x+"px "+(i.yOrigin-oe.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Yu(e,W||l,!!W||i.originIsAbsolute,i.smooth!==!1,A)),M=i.xOrigin||0,S=i.yOrigin||0,A!==ya&&(V=A[0],B=A[1],H=A[2],k=A[3],h=z=A[4],d=X=A[5],A.length===6?(p=Math.sqrt(V*V+B*B),m=Math.sqrt(k*k+H*H),u=V||B?us(B,V)*mr:0,g=H||k?us(H,k)*mr+u:0,g&&(m*=Math.abs(Math.cos(g*ps))),i.svg&&(h-=M-(M*V+S*H),d-=S-(M*B+S*k))):(se=A[6],re=A[7],Me=A[8],me=A[9],xe=A[10],ce=A[11],h=A[12],d=A[13],f=A[14],D=us(se,xe),v=D*mr,D&&(w=Math.cos(-D),L=Math.sin(-D),W=z*w+Me*L,oe=X*w+me*L,pe=se*w+xe*L,Me=z*-L+Me*w,me=X*-L+me*w,xe=se*-L+xe*w,ce=re*-L+ce*w,z=W,X=oe,se=pe),D=us(-H,xe),_=D*mr,D&&(w=Math.cos(-D),L=Math.sin(-D),W=V*w-Me*L,oe=B*w-me*L,pe=H*w-xe*L,ce=k*L+ce*w,V=W,B=oe,H=pe),D=us(B,V),u=D*mr,D&&(w=Math.cos(D),L=Math.sin(D),W=V*w+B*L,oe=z*w+X*L,B=B*w-V*L,X=X*w-z*L,V=W,z=oe),v&&Math.abs(v)+Math.abs(u)>359.9&&(v=u=0,_=180-_),p=dt(Math.sqrt(V*V+B*B+H*H)),m=dt(Math.sqrt(X*X+se*se)),D=us(z,X),g=Math.abs(D)>2e-4?D*mr:0,y=ce?1/(ce<0?-ce:ce):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!bm(di(e,ct)),W&&e.setAttribute("transform",W))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=u<=0?180:-180,u+=u<=0?180:-180):(m*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=dt(p),i.scaleY=dt(m),i.rotation=dt(u)+o,i.rotationX=dt(v)+o,i.rotationY=dt(_)+o,i.skewX=g+o,i.skewY=x+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(n[$t]=Ol(l)),i.xOffset=i.yOffset=0,i.force3D=Kt.force3D,i.renderTransform=i.svg?Lv:xm?Tm:Iv,i.uncache=0,i},Ol=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wu=function(e,t,i){var n=Lt(t);return dt(parseFloat(t)+parseFloat(Gn(e,"x",i+"px",n)))+n},Iv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tm(e,t)},pr="0deg",xa="0px",fr=") ",Tm=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.z,l=i.rotation,h=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,m=i.scaleX,u=i.scaleY,v=i.transformPerspective,_=i.force3D,g=i.target,x=i.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(x&&(d!==pr||h!==pr)){var S=parseFloat(h)*ps,A=Math.sin(S),D=Math.cos(S),w;S=parseFloat(d)*ps,w=Math.cos(S),a=Wu(g,a,A*w*-x),o=Wu(g,o,-Math.sin(S)*-x),c=Wu(g,c,D*w*-x+x)}v!==xa&&(y+="perspective("+v+fr),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(M||a!==xa||o!==xa||c!==xa)&&(y+=c!==xa||M?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+fr),l!==pr&&(y+="rotate("+l+fr),h!==pr&&(y+="rotateY("+h+fr),d!==pr&&(y+="rotateX("+d+fr),(f!==pr||p!==pr)&&(y+="skew("+f+", "+p+fr),(m!==1||u!==1)&&(y+="scale("+m+", "+u+fr),g.style[ct]=y||"translate(0, 0)"},Lv=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.rotation,l=i.skewX,h=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,m=i.xOrigin,u=i.yOrigin,v=i.xOffset,_=i.yOffset,g=i.forceCSS,x=parseFloat(a),y=parseFloat(o),M,S,A,D,w;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=ps,l*=ps,M=Math.cos(c)*d,S=Math.sin(c)*d,A=Math.sin(c-l)*-f,D=Math.cos(c-l)*f,l&&(h*=ps,w=Math.tan(l-h),w=Math.sqrt(1+w*w),A*=w,D*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),M*=w,S*=w)),M=dt(M),S=dt(S),A=dt(A),D=dt(D)):(M=d,D=f,S=A=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Gn(p,"x",a,"px"),y=Gn(p,"y",o,"px")),(m||u||v||_)&&(x=dt(x+m-(m*M+u*A)+v),y=dt(y+u-(m*S+u*D)+_)),(n||s)&&(w=p.getBBox(),x=dt(x+n/100*w.width),y=dt(y+s/100*w.height)),w="matrix("+M+","+S+","+A+","+D+","+x+","+y+")",p.setAttribute("transform",w),g&&(p.style[ct]=w)},Dv=function(e,t,i,n,s){var a=360,o=Tt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?mr:1),l=c-n,h=n+l+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*om)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*om)%a-~~(l/a)*a)),e._pt=f=new Wt(e._pt,t,i,n,l,mv),f.e=h,f.u="deg",e._props.push(i),f},fm=function(e,t){for(var i in t)e[i]=t[i];return e},Nv=function(e,t,i){var n=fm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,c,l,h,d,f,p,m;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[ct]=t,o=Ma(i,1),kn(i,ct),i.setAttribute("transform",l)):(l=getComputedStyle(i)[ct],a[ct]=t,o=Ma(i,1),a[ct]=l);for(c in mn)l=n[c],h=o[c],l!==h&&s.indexOf(c)<0&&(p=Lt(l),m=Lt(h),d=p!==m?Gn(i,c,l,m):parseFloat(l),f=parseFloat(h),e._pt=new Wt(e._pt,o,c,d,f-d,Xu),e._pt.u=m||0,e._props.push(c));fm(o,n)};Ht("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});Ul[e>1?"border"+r:r]=function(o,c,l,h,d){var f,p;if(arguments.length<4)return f=a.map(function(m){return fn(o,m,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},a.forEach(function(m,u){return p[m]=f[u]=f[u]||f[(u-1)/2|0]}),o.init(c,p,d)}});var Qu={name:"css",register:qu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,c=i.vars.startAt,l,h,d,f,p,m,u,v,_,g,x,y,M,S,A,D,w;Zu||qu(),this.styles=this.styles||vm(e),D=this.styles.props,this.tween=i;for(u in t)if(u!=="autoRound"&&(h=t[u],!(Yt[u]&&Bu(u,t,i,n,e,s)))){if(p=typeof h,m=Ul[u],p==="function"&&(h=h.call(i,n,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=hs(h)),m)m(this,e,u,h,i)&&(A=1);else if(u.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(u)+"").trim(),h+="",dn.lastIndex=0,dn.test(l)||(v=Lt(l),_=Lt(h),_?v!==_&&(l=Gn(e,u,l,_)+_):v&&(h+=v)),this.add(o,"setProperty",l,h,n,s,0,0,u),a.push(u),D.push(u,0,o[u]);else if(p!=="undefined"){if(c&&u in c?(l=typeof c[u]=="function"?c[u].call(i,n,e,s):c[u],Tt(l)&&~l.indexOf("random(")&&(l=hs(l)),Lt(l+"")||l==="auto"||(l+=Kt.units[u]||Lt(fn(e,u))||""),(l+"").charAt(1)==="="&&(l=fn(e,u))):l=fn(e,u),f=parseFloat(l),g=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),g&&(h=h.substr(2)),d=parseFloat(h),u in Yi&&(u==="autoAlpha"&&(f===1&&fn(e,"visibility")==="hidden"&&d&&(f=0),D.push("visibility",0,o.visibility),zn(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),u!=="scale"&&u!=="transform"&&(u=Yi[u],~u.indexOf(",")&&(u=u.split(",")[0]))),x=u in mn,x){if(this.styles.save(u),w=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=di(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=h,h=di(e,"perspective"),L?e.style.perspective=L:kn(e,"perspective")}d=parseFloat(h)}if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ma(e,t.parseTransform),S=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Wt(this._pt,o,ct,0,1,M.renderTransform,M,0,-1),y.dep=1),u==="scale")this._pt=new Wt(this._pt,M,"scaleY",M.scaleY,(g?ur(M.scaleY,g+d):d)-M.scaleY||0,Xu),this._pt.u=0,a.push("scaleY",u),u+="X";else if(u==="transformOrigin"){D.push($t,0,o[$t]),h=Rv(h),M.svg?Yu(e,h,0,S,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==M.zOrigin&&zn(this,M,"zOrigin",M.zOrigin,_),zn(this,o,u,Ol(l),Ol(h)));continue}else if(u==="svgOrigin"){Yu(e,h,1,S,0,this);continue}else if(u in Sm){Dv(this,M,u,f,g?ur(f,g+h):h);continue}else if(u==="smoothOrigin"){zn(this,M,"smooth",M.smooth,h);continue}else if(u==="force3D"){M[u]=h;continue}else if(u==="transform"){Nv(this,h,e);continue}}else u in o||(u=fs(u)||u);if(x||(d||d===0)&&(f||f===0)&&!fv.test(h)&&u in o)v=(l+"").substr((f+"").length),d||(d=0),_=Lt(h)||(u in Kt.units?Kt.units[u]:v),v!==_&&(f=Gn(e,u,l,_)),this._pt=new Wt(this._pt,x?M:o,u,f,(g?ur(f,g+d):d)-f,!x&&(_==="px"||u==="zIndex")&&t.autoRound!==!1?vv:Xu),this._pt.u=_||0,x&&w!==h?(this._pt.b=l,this._pt.e=w,this._pt.r=_v):v!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=gv);else if(u in o)Cv.call(this,e,u,l,g?g+h:h);else if(u in e)this.add(e,u,l||e[u],g?g+h:h,n,s);else if(u!=="parseTransform"){Pl(u,h);continue}x||(u in o?D.push(u,0,o[u]):typeof e[u]=="function"?D.push(u,2,e[u]()):D.push(u,1,l||e[u])),a.push(u)}}A&&Hu(this)},render:function(e,t){if(t.tween._time||!Ju())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:fn,aliases:Yi,getSetter:function(e,t,i){var n=Yi[t];return n&&n.indexOf(",")<0&&(t=n),t in mn&&t!==$t&&(e._gsap.x||fn(e,"x"))?i&&am===i?t==="scale"?Sv:Mv:(am=i||{})&&(t==="scale"?bv:Tv):e.style&&!Rl(e.style[t])?xv:~t.indexOf("-")?yv:Nl(e,t)},core:{_removeProperty:kn,_getMatrix:$u}};kt.utils.checkPrefix=fs;kt.core.getStyleSaver=vm;(function(r,e,t,i){var n=Ht(r+","+e+","+t,function(s){mn[s]=1});Ht(e,function(s){Kt.units[s]="deg",Sm[s]=1}),Yi[n[13]]=r+","+e,Ht(i,function(s){var a=s.split(":");Yi[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kt.units[r]="px"});kt.registerPlugin(Qu);var ed=kt.registerPlugin(Qu)||kt,xS=ed.core.Tween;var pi=document.querySelector("[data-mcc-home]"),_r=document.querySelector("[data-mcc-canvas]"),wm=document.querySelector("[data-mcc-insert]"),ms=document.querySelector("[data-mcc-desktop]"),Em=Array.from(document.querySelectorAll("[data-mcc-window]")),Uv=Array.from(document.querySelectorAll("[data-mcc-open]")),Ov=Array.from(document.querySelectorAll("[data-mcc-close]")),Fv=Array.from(document.querySelectorAll("[data-mcc-focus]")),Bv=Array.from(document.querySelectorAll("[data-mcc-article-template]"));if(pi&&_r){let h=function(N,Y,K){let Z=document.createElement("canvas");Z.width=N,Z.height=Y;let te=Z.getContext("2d");K(te,N,Y);let he=new Vr(Z);return he.colorSpace=Rt,he.wrapS=Zn,he.wrapT=Zn,he.anisotropy=4,he},d=function(N,Y,K){return h(384,384,(Z,te,he)=>{Z.fillStyle=N,Z.fillRect(0,0,te,he);for(let ge=0;ge<7200;ge+=1){let Ge=Math.random()*.16;Z.fillStyle=`rgba(${Y}, ${Ge})`,Z.fillRect(Math.random()*te,Math.random()*he,1,1)}if(K){Z.globalAlpha=.16,Z.strokeStyle=K;for(let ge=0;ge<he;ge+=13)Z.beginPath(),Z.moveTo(0,ge+.5),Z.lineTo(te,ge+.5),Z.stroke()}Z.globalAlpha=1})},f=function(){let N=h(512,512,(Y,K,Z)=>{let te=Y.createLinearGradient(0,0,K,Z);te.addColorStop(0,"#2b170b"),te.addColorStop(.35,"#4b2e18"),te.addColorStop(.7,"#2f1a0d"),te.addColorStop(1,"#57351d"),Y.fillStyle=te,Y.fillRect(0,0,K,Z);for(let he=0;he<Z;he+=9){Y.strokeStyle=`rgba(255, 210, 140, ${.06+Math.random()*.08})`,Y.lineWidth=1+Math.random()*2,Y.beginPath(),Y.moveTo(0,he+Math.sin(he)*3);for(let ge=0;ge<=K;ge+=22)Y.lineTo(ge,he+Math.sin((ge+he)*.035)*7);Y.stroke()}for(let he=0;he<2400;he+=1)Y.fillStyle=`rgba(0,0,0,${Math.random()*.1})`,Y.fillRect(Math.random()*K,Math.random()*Z,1,1)});return N.repeat.set(3,2),N},p=function(N,Y={}){let K=document.createElement("canvas");K.width=Y.width||512,K.height=Y.height||320;let Z=K.getContext("2d");Z.fillStyle=Y.background||"#eee4cc",Z.fillRect(0,0,K.width,K.height),Z.strokeStyle=Y.rule||"#153c78",Z.lineWidth=Y.ruleWidth||8,Z.beginPath(),Z.moveTo(72,66),Z.lineTo(K.width-72,66),Z.moveTo(72,K.height-94),Z.lineTo(K.width-72,K.height-94),Z.stroke(),Z.fillStyle=Y.color||"#14120f",Z.font=Y.font||"52px Georgia",Z.textAlign="center",Z.textBaseline="middle";let te=Y.lineHeight||58,he=(K.height-(N.length-1)*te)/2-4;N.forEach((Ge,Ie)=>{Z.fillText(Ge,K.width/2,he+Ie*te)}),Y.badge&&(Z.fillStyle="#111",Z.fillRect(K.width/2-68,K.height-74,136,44),Z.fillStyle="#f3ead6",Z.font="30px 'Courier New'",Z.fillText(Y.badge,K.width/2,K.height-49));let ge=new Vr(K);return ge.colorSpace=Rt,ge},x=function(N,Y=.28){let K=new Us(new Hr(N.geometry),new Gr({color:1380878,transparent:!0,opacity:Y}));N.add(K)},y=function(N,Y,K,Z,te=e,he=!0){let ge=new ft(new ln(...Y),Z);return ge.name=N,ge.position.set(...K),ge.castShadow=!0,ge.receiveShadow=!0,he&&x(ge),te.add(ge),ge},M=function(N,Y,K,Z,te=e,he=[0,0,0]){let ge=new ft(new Pn(...K),new Kn({map:Y,transparent:!0,side:vi}));return ge.name=N,ge.position.set(...Z),ge.rotation.set(...he),te.add(ge),ge},se=function(){let N=_r.getBoundingClientRect(),Y=Math.max(1,N.width),K=Math.max(1,N.height),Z=Y/K,te=b((1.48-Z)/.72,0,1),he=sr.degToRad(t.fov),ge=sr.lerp(7.25,8.1,te),Ge=4.45,Ie=ge/(2*Math.tan(he/2)*Z),Ye=Ge/(2*Math.tan(he/2)),ht=Math.max(5.55,Ie,Ye);i.x=sr.lerp(.12,-.18,te),t.position.x=sr.lerp(.03,-.26,te),t.position.y=sr.lerp(1.05,1.12,te),t.position.z=i.z+ht,n.copy(t.position),t.aspect=Z,t.updateProjectionMatrix(),s.setSize(Y,K,!1);let de=new si().setFromObject(W),Le=[new R(de.min.x,de.min.y,de.min.z),new R(de.min.x,de.min.y,de.max.z),new R(de.min.x,de.max.y,de.min.z),new R(de.min.x,de.max.y,de.max.z),new R(de.max.x,de.min.y,de.min.z),new R(de.max.x,de.min.y,de.max.z),new R(de.max.x,de.max.y,de.min.z),new R(de.max.x,de.max.y,de.max.z)].map(G=>G.project(t)),we=Math.min(...Le.map(G=>G.x)),Je=Math.max(...Le.map(G=>G.x)),wt=Math.min(...Le.map(G=>G.y)),Qt=Math.max(...Le.map(G=>G.y)),Xt=(we+1)/2*Y,pt=(1-Qt)/2*K,Dt=(Je-we)/2*Y,gn=(Qt-wt)/2*K;pi.style.setProperty("--mcc-monitor-left",`${Xt}px`),pi.style.setProperty("--mcc-monitor-top",`${pt}px`),pi.style.setProperty("--mcc-monitor-width",`${Dt}px`),pi.style.setProperty("--mcc-monitor-height",`${gn}px`)},ye=function(N){let Y=_r.getBoundingClientRect();o.x=(N.clientX-Y.left)/Y.width*2-1,o.y=-((N.clientY-Y.top)/Y.height)*2+1},Fe=function(){pi.classList.add("is-booted"),ms?.setAttribute("aria-hidden","false")},ae=function(){pi.classList.add("is-zooming")},I=function(){pi.classList.remove("is-zooming"),pi.classList.add("is-screen-mode"),window.setTimeout(()=>pi.classList.add("is-screen-ready"),r?0:420)},P=function(N){return Em.find(Y=>Y.dataset.mccWindow===N)},F=function(N){N&&(T+=1,N.style.zIndex=String(T))},b=function(N,Y,K){return Math.min(Math.max(N,Y),K)},U=function(N){let Y=N?.querySelector("header");!Y||!ms||N.dataset.mccDragReady==="true"||(N.dataset.mccDragReady="true",Y.addEventListener("pointerdown",K=>{if(K.button!==0||K.target.closest("button, a, [data-mcc-dynamic-action]"))return;K.preventDefault(),F(N);let Z=ms.getBoundingClientRect(),te=N.getBoundingClientRect(),he=K.clientX-te.left,ge=K.clientY-te.top,Ge=Math.max(0,Z.width-te.width),Ie=Math.max(0,Z.height-te.height);N.classList.add("is-dragging"),N.style.left=`${b(te.left-Z.left,0,Ge)}px`,N.style.top=`${b(te.top-Z.top,0,Ie)}px`,N.style.right="auto",N.style.bottom="auto";try{Y.setPointerCapture?.(K.pointerId)}catch{}let Ye=de=>{let Le=b(de.clientX-Z.left-he,0,Ge),we=b(de.clientY-Z.top-ge,0,Ie);N.style.left=`${Le}px`,N.style.top=`${we}px`},ht=()=>{N.classList.remove("is-dragging");try{Y.releasePointerCapture?.(K.pointerId)}catch{}window.removeEventListener("pointermove",Ye),window.removeEventListener("pointerup",ht),window.removeEventListener("pointercancel",ht)};window.addEventListener("pointermove",Ye),window.addEventListener("pointerup",ht),window.addEventListener("pointercancel",ht)}))},O=function(N,Y){let K=P(N);K&&(K.classList.toggle("is-closed",!Y),K.setAttribute("aria-hidden",Y?"false":"true"),Y&&F(K))},C=function(N,Y,K){let Z=document.createElement("button");return Z.className=`mcc-window-button mcc-window-button--${N}`,Z.type="button",Z.setAttribute("aria-label",Y),K&&(Z.dataset.mccDynamicAction=K),Z},J=function(N){return Bv.find(Y=>Y.dataset.mccArticleTemplate===N)},Q=function(N){let Y=J(N);if(!Y||!ms)return;j+=1;let K=Y.dataset.mccArticleTitle||Y.dataset.mccArticleFile||"Article",Z=document.createElement("section");Z.className="mcc-preview-window mcc-article-window",Z.setAttribute("role","dialog"),Z.setAttribute("aria-label",K),Z.dataset.mccArticleWindow=N;let te=(j-1)%5;Z.style.setProperty("--mcc-doc-window-x",`${260+te*26}px`),Z.style.setProperty("--mcc-doc-window-y",`${110+te*24}px`);let he=document.createElement("header"),ge=document.createElement("span");ge.textContent=K;let Ge=document.createElement("span");Ge.className="mcc-window-buttons",Ge.append(C("min",`Minimize ${K}`,"remove"),C("max",`Focus ${K}`,"focus"),C("close",`Close ${K}`,"remove")),he.append(ge,Ge);let Ie=document.createElement("div");Ie.className="mcc-article-window__body",Ie.append(Y.content.cloneNode(!0)),Ie.querySelectorAll("a").forEach(Ye=>{Ye.setAttribute("rel","noopener")}),Z.append(he,Ie),ms.append(Z),F(Z),U(Z),Z.addEventListener("pointerdown",()=>F(Z))},ne=function(){if(l)return;if(l=!0,pi.classList.remove("is-screen-ready"),pi.classList.add("is-booting"),wm?.setAttribute("disabled","true"),r){g.screenOn.emissiveIntensity=1.25,W.material=g.screenOn,D.intensity=1.2,Fe(),I();return}window.setTimeout(Fe,1420),window.setTimeout(ae,1780),window.setTimeout(I,4100),ed.timeline({defaults:{ease:"power2.inOut"}}).to(me.rotation,{x:0,y:0,z:.02,duration:.46,ease:"back.out(1.2)"},0).to(me.position,{x:-1.22,y:.79,z:.72,duration:.82},.08).to(me.scale,{x:.72,y:.72,z:.72,duration:.62},.2).to(me.position,{z:.18,duration:.5,ease:"power2.in"},.78).to(me.scale,{x:.5,y:.5,z:.5,duration:.45,ease:"power2.in"},.84).to(t.position,{x:n.x+.05,y:n.y-.03,z:Math.max(5.1,n.z-.45),duration:1},.08).to(g.screenOn,{emissiveIntensity:1.4,duration:.16,onStart:()=>{W.material=g.screenOn}},.85).to(D,{intensity:1.2,duration:.16},.85).to(g.screenOn,{emissiveIntensity:.18,duration:.12},1.03).to(D,{intensity:.32,duration:.12},1.03).to(g.screenOn,{emissiveIntensity:1.75,duration:.2},1.17).to(D,{intensity:1.85,duration:.26},1.17).to(pi,{"--mcc-boot-glow":1,duration:.5},1.16).call(Fe,[],1.42).call(ae,[],1.78).call(I,[],4.1)},_e=function(N){let Y=Math.sin(N*.0014)*.012;l||(me.position.y=-.54+Y,g.led.emissiveIntensity=.55+Math.sin(N*.004)*.25),t.lookAt(i),s.render(e,t),window.requestAnimationFrame(_e)},r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=new Ls;e.background=new Oe(461062),e.fog=new Is(461062,4.5,9);let t=new At(42,1,.1,100);t.position.set(.03,1.05,5.55);let i=new R(.12,.25,-.18),n=new R().copy(t.position),s=new vl({canvas:_r,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.outputColorSpace=Rt,s.shadowMap.enabled=!0,s.shadowMap.type=Jo;let a=new Qs,o=new le,c=[],l=!1,m=d("#b8ae97","50, 45, 34","#7d725c"),u=d("#77705f","20, 18, 15","#4d483e"),v=d("#11130c","245, 234, 205","#202316"),_=f(),g={desk:new yt({map:_,color:6964517,roughness:.68,metalness:.04}),wall:new yt({map:v,color:2302997,roughness:.95}),plastic:new yt({map:m,color:12695196,roughness:.71,metalness:.02}),plasticDark:new yt({map:u,color:8616809,roughness:.74}),black:new yt({color:855564,roughness:.86}),rubber:new yt({color:1513750,roughness:.92}),metal:new yt({color:9078909,roughness:.36,metalness:.45}),slot:new yt({color:263172,roughness:.84}),key:new yt({color:13682605,roughness:.62}),book:new yt({color:2761748,roughness:.85}),screenOff:new yt({color:463376,roughness:.3,emissive:0}),screenOn:new yt({color:889741,roughness:.22,emissive:492670,emissiveIntensity:0}),led:new yt({color:13238098,emissive:10026783,emissiveIntensity:.7}),amber:new yt({color:16756736,emissive:16751104,emissiveIntensity:.65}),label:new yt({color:15261640,roughness:.9})},S=new Zs(16050896,856077,1.15);e.add(S);let A=new Js(16768938,54,8.5,Math.PI/4.3,.58,1.2);A.position.set(-3.6,3.9,3.4),A.target.position.set(-.8,-.24,.8),A.castShadow=!0,A.shadow.mapSize.set(2048,2048),e.add(A,A.target);let D=new Ks(697500,0,4.2);D.position.set(1.42,.7,.5),e.add(D),y("wall",[8.8,4.8,.18],[0,1.05,-1.62],g.wall,e,!1),y("desk",[9.2,.34,4.8],[0,-.78,.75],g.desk,e,!1),y("desk-lip",[9.2,.2,.34],[0,-.64,2.94],g.desk,e,!1);let w=new jt;w.position.set(-3.38,-.52,.85),w.rotation.y=.16,e.add(w);let L=new ft(new cn(.025,.025,1.15,12),g.black);L.position.set(0,.55,0),L.castShadow=!0,w.add(L);let V=new ft(new cn(.42,.22,.32,20,1,!0),g.black);V.position.set(-.16,1.2,.02),V.rotation.z=-.28,V.castShadow=!0,w.add(V);let B=new ft(new cn(.18,.16,.42,18),g.rubber);B.position.set(.36,.18,.1),B.castShadow=!0,B.receiveShadow=!0,w.add(B);let H=new jt;H.position.set(-1.12,0,-.18),e.add(H),y("tower-body",[1.05,2.85,.88],[0,.62,0],g.plastic,H),y("tower-top-bay",[.78,.34,.055],[0,1.78,.47],g.plasticDark,H),y("tower-mid-bay",[.78,.34,.055],[0,1.33,.475],g.plasticDark,H),y("tower-drive",[.78,.25,.065],[0,.77,.485],g.plasticDark,H),y("tower-slot",[.55,.1,.075],[-.1,.77,.53],g.slot,H),y("tower-eject",[.16,.08,.08],[.31,.77,.535],g.plasticDark,H),y("tower-grille",[.74,.52,.045],[-.07,-.34,.49],g.black,H);for(let N=0;N<7;N+=1)y(`tower-grille-line-${N}`,[.68,.015,.065],[-.07,-.53+N*.07,.535],g.plasticDark,H,!1);y("tower-power",[.2,.25,.08],[.42,.02,.5],g.plasticDark,H),y("tower-reset",[.12,.12,.08],[.42,-.56,.5],g.plasticDark,H),y("tower-led",[.06,.06,.09],[.41,.98,.53],g.led,H,!1),y("tower-turbo",[.06,.06,.09],[.41,-.88,.53],g.led,H,!1),M("tower-label",p(["486 DX2-66"],{width:280,height:120,font:"28px 'Courier New'",ruleWidth:0,background:"#9f9681"}),[.42,.18],[-.25,-.04,.535],H);let k=new jt;k.position.set(.02,-.23,-.3),k.rotation.y=-.04,e.add(k);let z=[2826513,3812118,2040088,4272924];for(let N=0;N<4;N+=1){let Y=new yt({color:z[N],roughness:.82});y(`book-${N}`,[.18+N*.01,1.45-N*.05,.52],[N*.18,.55-N*.02,0],Y,k)}let X=new jt;X.position.set(1.47,0,-.14),X.rotation.y=-.025,e.add(X),y("crt-shell",[2.9,2.02,.66],[0,.7,0],g.plastic,X),y("crt-bezel",[2.38,1.55,.075],[0,.82,.36],g.black,X);let W=y("crt-screen",[2.15,1.32,.06],[0,.84,.41],g.screenOff,X,!1);y("crt-base-neck",[1.02,.25,.58],[0,-.35,-.02],g.plasticDark,X),y("crt-base",[1.76,.3,.88],[0,-.54,0],g.plasticDark,X);for(let N=0;N<5;N+=1)y(`crt-button-${N}`,[.08,.045,.055],[-.32+N*.16,-.14,.36],g.plasticDark,X,!1);y("crt-power",[.17,.12,.07],[.58,-.14,.36],g.plasticDark,X),y("crt-led",[.06,.05,.06],[.84,-.14,.36],g.led,X,!1);let oe=new jt;oe.position.set(1.47,-.58,1.08),oe.rotation.y=-.035,e.add(oe),y("keyboard-base",[1.86,.14,.66],[0,0,0],g.plasticDark,oe);for(let N=0;N<3;N+=1)for(let Y=0;Y<12;Y+=1)y("key",[.1,.04,.08],[-.66+Y*.12,.09,-.19+N*.12],g.key,oe,!1);y("keyboard-cable-port",[.18,.055,.06],[-.5,.04,-.36],g.rubber,oe,!1);let pe=new Xr([new R(.99,-.53,.72),new R(.64,-.555,.53),new R(.05,-.55,.36),new R(-.48,-.54,.43),new R(-.75,-.5,.36)]),Me=new ft(new qr(pe,72,.018,8,!1),g.rubber);Me.castShadow=!0,Me.receiveShadow=!0,e.add(Me),y("tower-keyboard-port",[.1,.075,.055],[-.75,-.5,.36],g.rubber,e,!1);let me=new jt;me.name="floppy",me.position.set(-.82,-.54,1.43),me.rotation.set(-.12,.06,-.08),e.add(me);let xe=y("floppy-body",[.88,.08,.88],[0,0,0],g.black,me),re=y("floppy-shutter",[.46,.09,.23],[0,.012,-.25],g.metal,me);y("floppy-label-back",[.6,.014,.4],[0,.056,.16],g.label,me,!1);let ce=M("floppy-label",p(["Middle Class","Capital"],{badge:"A:\\"}),[.58,.36],[0,.066,.16],me,[-Math.PI/2,0,0]);c.push(xe,re,ce);let T=20,j=0;Em.forEach((N,Y)=>{N.style.zIndex=String(T+Y),U(N),N.addEventListener("pointerdown",()=>F(N))}),Uv.forEach(N=>{N.addEventListener("click",Y=>{Y.preventDefault(),O(N.dataset.mccOpen,!0)})}),Ov.forEach(N=>{N.addEventListener("click",Y=>{Y.preventDefault(),Y.stopPropagation(),O(N.dataset.mccClose,!1)})}),Fv.forEach(N=>{N.addEventListener("click",Y=>{Y.preventDefault(),Y.stopPropagation(),F(P(N.dataset.mccFocus))})}),ms?.addEventListener("click",N=>{let Y=N.target.closest("[data-mcc-article-open]");if(Y){N.preventDefault(),Q(Y.dataset.mccArticleOpen);return}let K=N.target.closest("[data-mcc-dynamic-action]");if(!K)return;N.preventDefault(),N.stopPropagation();let Z=K.closest(".mcc-article-window");if(Z){if(K.dataset.mccDynamicAction==="remove"){Z.remove();return}F(Z)}}),_r.addEventListener("pointermove",N=>{l||(ye(N),a.setFromCamera(o,t),_r.style.cursor=a.intersectObjects(c,!1).length?"pointer":"")}),_r.addEventListener("pointerdown",N=>{l||(ye(N),a.setFromCamera(o,t),a.intersectObjects(c,!1).length&&ne())}),wm?.addEventListener("click",ne),window.addEventListener("resize",se),se(),_e(0)}})();
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
