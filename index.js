!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).DearImage=e()}(this,(function(){"use strict";class t{constructor(t){this.context=t}get canvas(){return this.context.canvas}get sizeX(){return this.canvas.width}get sizeY(){return this.canvas.height}}function e(){try{return document.createElement("canvas")}catch{}throw new Error("HTMLCanvasElement is not supported.")}function n(t){return eval("require")(t)}function r(){try{let{Canvas:t}=n("canvas");return new t}catch{}throw new Error("Canvas is not supported.")}function i(){try{return new OffscreenCanvas}catch{}throw new Error("OffscreenCanvas is not supported.")}function s(){try{return e()}catch{}try{return i()}catch{}return r()}function a(t){return t<0}function o(t){return!a(t)}function c(t){return Number.isFinite(t)&&o(t)}function u(t,e){return c(t)?Math.round(t):e}function l(t){return u(t,0)}function f(t){let{Blob:e}=globalThis;return!!e&&t instanceof e}function h(t){return!t.size}function m(t){let{Buffer:e}=globalThis;return!!e&&t instanceof e}function p(t){return!t.length}function w(t){let{HTMLCanvasElement:e}=globalThis;return!!e&&t instanceof e}function y(t){try{let{Canvas:e}=n("canvas");return t instanceof e}catch{}return!1}function g(t){let{OffscreenCanvas:e}=globalThis;return!!e&&t instanceof e}function d(t){return w(t)||g(t)||y(t)}t.blank=function(t,e){t=l(t),e=l(e);let n=s();return n.width=t,n.height=e,new this(n.getContext("2d"))},t.is=function(t){return t instanceof this};class z{}function v(t){return t instanceof this}function b(t){try{return this.parse(t),!0}catch{return!1}}function x(t){return"string"==typeof t}var X=/^data:(.*?)(;base64)?,(.*)$/;function Y(t){if(x(t)){let e=X.exec(t);if(e){let n=e[1],r=e[3];return Object.assign(new this,{type:n,data:r,toString:()=>t})}}throw new Error("Invalid data URL.")}var I={is:v,isString:b,parse:Y};function E(){return!this.data}var M={isEmpty:E};let{prototype:k}=z;function L(){try{return new Image}catch{}throw new Error("HTMLImageElement is not supported.")}function C(){try{let{Image:t}=n("canvas");return new t}catch{}throw new Error("Image is not supported.")}function O(){try{return L()}catch{}return C()}function j(t){let{HTMLImageElement:e}=globalThis;return!!e&&t instanceof e}function T(t){try{let{Image:e}=n("canvas");return t instanceof e}catch{}return!1}function U(t){return j(t)||T(t)}async function R(t){if(!t.complete)try{await new Promise((e,n)=>{t.onload=e,t.onerror=n})}finally{t.onload=null,t.onerror=null}}function S(t){try{let{ImageData:e}=n("canvas");return t instanceof e}catch{}return!1}function D(t){let{ImageData:e}=globalThis;return!!e&&t instanceof e||S(t)}function F(t){let{URL:e}=globalThis;return!!e&&t instanceof e}Object.assign(z,I),Object.assign(k,M);let B=function(t){let e=this.blank(t.width,t.height);return e.sizeX&&e.sizeY&&e.context.putImageData(t,0,0),e},H=function(t,e,n){let r=this.blank(e,n);return r.sizeX&&r.sizeY&&r.context.drawImage(t,0,0),r},N=function(t){return H.call(this,t,t.width,t.height)},A=function(t){return H.call(this,t,t.naturalWidth,t.naturalHeight)},P=function(t){return N.call(this,t.canvas)},q=function(e){if(t.is(e))return P.call(this,e);if(D(e))return B.call(this,e);if(d(e))return N.call(this,e);if(U(e))return A.call(this,e);throw new Error},W=async function(t){return await R(t),A.call(this,t)},$=async function(t){let e=O();return e.src=t,W.call(this,e)},G=async function(t){return p(t)?this.blank():$.call(this,t)},J=async function(t){if(h(t))return this.blank();let e=URL.createObjectURL(t);try{return $.call(this,e)}finally{URL.revokeObjectURL(e)}},K=async function(t){return t.isEmpty()?this.blank():$.call(this,""+t)},Q=async function(t){try{let e=z.parse(t);return K.call(this,e)}catch{return $.call(this,t)}},V=async function(t){return $.call(this,""+t)},Z=async function(t){return x(t)?Q.call(this,t):F(t)?V.call(this,t):m(t)?G.call(this,t):f(t)?J.call(this,t):U(t)?W.call(this,t):q.call(this,t)};Object.assign(t,{from:q,loadFrom:Z}),t.fromExcept=function(t){return this.is(t)?t:this.from(t)},t.isDearImage=t.is.bind(t),t.flexX=function(t,{alignItems:e="center",gap:n=0}={}){let r=t.map(({sizeX:t})=>t).reduce((t,e)=>t+e+n),i=t.map(({sizeY:t})=>t).reduce((t,e)=>Math.max(t,e)),s=this.blank(r,i),{context:a}=s,o=0;return t.forEach(t=>{let r;switch(e){case"start":r=0;break;case"center":r=Math.round((i-t.sizeY)/2);break;case"end":r=i-t.sizeY}a.drawImage(t.canvas,o,r),o+=t.sizeX+n}),s},t.flexY=function(t,{alignItems:e="center",gap:n=0}={}){let r=t.map(({sizeY:t})=>t).reduce((t,e)=>t+e+n),i=t.map(({sizeX:t})=>t).reduce((t,e)=>Math.max(t,e)),s=this.blank(i,r),{context:a}=s,o=0;return t.forEach(t=>{let r;switch(e){case"start":r=0;break;case"center":r=Math.round((i-t.sizeX)/2);break;case"end":r=i-t.sizeX}a.drawImage(t.canvas,r,o),o+=t.sizeY+n}),s},t.lineLayout=function(t,...e){switch(t){case"x":return this.flexX(...e);case"y":return this.flexY(...e)}};class _{}var tt="sans-serif",et="normal",nt=Object.assign(new _,{family:tt,style:et,variant:et,weight:et});function rt(t){if(t){let e=typeof t;return"object"===e||"function"===e}return!1}function it(t){return void 0===t}function st(t){return!t}function at(t){return!st(t)}function ot(t){return x(t)&&at(t)}function ct(t){if(it(t))return tt;if(ot(t))return t;throw 0}var ut=new Set([et,"italic","oblique"]);function lt(t){if(it(t))return et;if(x(t)&&(t=t.trim().toLowerCase(),ut.has(t)))return t;throw 0}var ft=new Set([et,"small-caps"]);function ht(t){if(it(t))return et;if(x(t)&&(t=t.trim().toLowerCase(),ft.has(t)))return t;throw 0}function mt(t){return"number"==typeof t&&!Number.isNaN(t)}function pt(t,e,n,r,i){return(r?t>=e:t>e)&&(i?t<=n:t<n)}function wt(t,...e){return mt(t)&&pt(t,...e)}var yt=new Set([et,"bold"]);function gt(t){if(it(t))return et;if(x(t)){if(t=t.trim().toLowerCase(),yt.has(t))return t;t=Number(t)}if(wt(t,1,1e3,!0,!0))return Math.round(t);throw 0}function dt(t){let e,n,r,i;if(x(t))e=ct(t),n=et,r=et,i=et;else{if(!rt(t))throw 0;({family:e,style:n,variant:r,weight:i}=t),e=ct(e),n=lt(n),r=ht(r),i=gt(i)}return[e,n,r,i]}function zt(t){try{let[e,n,r,i]=dt(t);return Object.assign(new this,{family:e,style:n,variant:r,weight:i})}catch{throw new Error("Invalid font face.")}}function vt(t){return this.is(t)?t:this.from(t)}function bt(t){return t instanceof this}var xt={default:nt,from:zt,fromExcept:vt,is:bt};function Xt(t,e,n,r,i){return[n,r,i,e+"px",t].join(" ")}function Yt(t){return null===t}function It(t){return it(t)||Yt(t)}async function Et(t){let{family:e,style:r,variant:i,weight:s}=this;if(It(t))try{await document.fonts.load(Xt(e,10,r,i,s))}catch{}else{try{await new FontFace(e,t,{style:r,variant:i,weight:s}).load()}catch{}try{let{registerFont:a}=n("canvas");await a(t,{family:e,style:r,variant:i,weight:s})}catch{}}}var Mt={load:Et};let{prototype:kt}=_;Object.assign(_,xt),Object.assign(kt,Mt),t.loadFontFace=async function(t,e){return _.fromExcept(t).load(e)},t.loadFromExcept=async function(t){return this.is(t)?t:this.loadFrom(t)};class Lt{}var Ct=10;function Ot(t){if(it(t))return Ct;if(c(t))return Math.round(t);throw 0}function jt(t){let e,n;if(!rt(t))throw 0;({size:n,...e}=t),n=Ot(n),e=_.from(e);let{family:r,style:i,variant:s,weight:a}=e;return[r,n,i,s,a]}function Tt(t){try{let[e,n,r,i,s]=jt(t);return Object.assign(new this,{family:e,size:n,style:r,variant:i,weight:s})}catch{throw new Error("Invalid font.")}}function Ut(t){return this.is(t)?t:this.from(t)}function Rt(t){return t instanceof this}var St={from:Tt,fromExcept:Ut,is:Rt};function Dt(){let{family:t,size:e,style:n,variant:r,weight:i}=this;return Xt(t,e,n,r,i)}var Ft={toCSS:Dt};let{prototype:Bt}=Lt;function Ht(t){return It(t)?"":""+t}function Nt(t,e){return ot(t)?t:e}Object.assign(Lt,St),Object.assign(Bt,Ft),t.measureText=function(t,e){t=Ht(t);let{context:n}=this.blank();return n.font=Lt.fromExcept(e).toCSS(),n.measureText(t)};var At="rgba(0,0,0,0)";function Pt(t){return Nt(t,At)}t.solid=function(t,e,n){t=Pt(t);let r=this.blank(e,n),{context:i}=r;return i.save(),i.fillStyle=t,i.fillRect(0,0,r.sizeX,r.sizeY),i.restore(),r};var qt="#000",Wt=Lt.default,$t=.28;function Gt(t){try{return Lt.fromExcept(t)}catch{}}function Jt(t){if(c(t))return t}function Kt(t){let e,n,r;return rt(t)&&(({fill:e,font:n,padding:r}=t),e=Nt(e),n=Gt(n),r=Jt(r)),[e,n,r]}function Qt(t){if(Number.isFinite(t))return Math.round(t)}function Vt(t,e,n){return it(t=Qt(t))?t=0:t<0&&(t+=n),it(e=Qt(e))?e=n:e<0&&(t+=e,e*=-1),[t,e]}function Zt(t,...e){return function(...n){return t.call(this,...e,...n)}}t.text=function(t,e){t=Ht(t);let[n=qt,r=Wt,i=$t]=Kt(e);i=Math.ceil(i*r.size);let s=this.blank(this.measureText(t,r).width+2*i,r.size+2*i),{context:a}=s;return a.save(),a.font=r.toCSS(),a.textBaseline="top",a.textAlign="left",a.fillStyle=n,a.fillText(t,i,i),a.restore(),s},t.prototype.crop=function(t,e,n,r){if([t,n]=Vt(t,n,this.sizeX),[e,r]=Vt(e,r,this.sizeY),t||e||n!==this.sizeX||r!==this.sizeY){let i=this.constructor.blank(n,r);return n&&r&&this.sizeX&&this.sizeY&&i.context.drawImage(this.canvas,-t,-e),i}return this};let _t=function(t,e,n,r){if(e=this.constructor.fromExcept(e),this.sizeX&&this.sizeY&&e.sizeX&&e.sizeY){let{canvas:i}=e.reframe(this.sizeX,this.sizeY,n,r),s=this.constructor.blank(this.sizeX,this.sizeY),{context:a}=s;return t?(a.drawImage(this.canvas,0,0),a.drawImage(i,0,0)):(a.drawImage(i,0,0),a.drawImage(this.canvas,0,0)),s}return this};Object.assign(t.prototype,{drawBackground:Zt(_t,!1),drawForeground:Zt(_t,!0)});let te=function(t,e){let{sizeX:n,sizeY:r}=this;if(n&&r){let i=this.constructor.blank(n,r),{context:s}=i;return s.save(),s.translate(t?n:0,e?r:0),s.scale(t?-1:1,e?-1:1),s.drawImage(this.canvas,0,0),s.restore(),i}return this};function ee(t,e,n){switch(t){case"start":return 0;case"end":return-e}return(n+e)/-2}function ne(t){if(x(t))return t.trim().toLowerCase()}function re(t,e,n){return[ee(t=ne(t),e=u(e,n),n),e]}function ie(t,e){return c(t)&&(e*=t),e}function se(t,e){return(t=u(t,e))/e}Object.assign(t.prototype,{flipX:Zt(te,!0,!1),flipY:Zt(te,!1,!0)}),t.prototype.reframe=function(t,e,n,r){let i,s;return[i,t]=re(n,t,this.sizeX),[s,e]=re(r,e,this.sizeY),this.crop(i,s,t,e)},t.prototype.resize=function(t,e){if(t=u(t,this.sizeX),e=u(e,this.sizeY),t!==this.sizeX||e!==this.sizeY){let n=this.constructor.blank(t,e);if(t&&e&&this.sizeX&&this.sizeY){let r=t/this.sizeX,i=e/this.sizeY,{context:s}=n;s.save(),s.scale(r,i),s.drawImage(this.canvas,0,0),s.restore()}return n}return this},t.prototype.rescale=function(t,e){let{sizeX:n,sizeY:r}=this;return n=ie(t,n),r=ie(e,r),this.resize(n,r)},t.prototype.scale=function(t){return this.rescale(t,t)},t.prototype.resizeX=function(t,e){if(e){let e=se(t,this.sizeX);return this.scale(e)}return this.resize(t,this.sizeY)},t.prototype.resizeY=function(t,e){if(e){let e=se(t,this.sizeY);return this.scale(e)}return this.resize(this.sizeX,t)};let ae=function(t){if(this.sizeX||this.sizeY){let e=this.constructor.blank(this.sizeY,this.sizeX);if(this.sizeX&&this.sizeY){let{context:n}=e;n.save(),n.translate(this.sizeY/2,this.sizeX/2),n.rotate(Math.PI/(t?2:-2)),n.drawImage(this.canvas,this.sizeX/-2,this.sizeY/-2),n.restore()}return e}return this};Object.assign(t.prototype,{rotateClockwise:Zt(ae,!0),rotateCounterClockwise:Zt(ae,!1)}),t.prototype.toBuffer=function(...t){return this.sizeX&&this.sizeY?this.canvas.toBuffer(...t):Buffer.alloc(0)},t.prototype.saveToFileSystem=function(t,...e){return new Promise((r,i)=>{let s=n("fs"),a=n("path"),o=this.toBuffer(...e);s.mkdir(a.dirname(t),{recursive:!0},e=>{e?i(e):s.writeFile(t,o,t=>{t?i(t):r()})})})};let oe=function(t,e,n){e=u(e,this.sizeX),n=u(n,this.sizeY);let r=[];if(e&&this.sizeX){let t=e/this.sizeX;r.push(t)}if(n&&this.sizeY){let t=n/this.sizeY;r.push(t)}if(r.length){let e=t(r);return this.scale(e)}return this};function ce(t){let{length:e}=t,n=new Uint8Array(e);for(let r=0;r<e;r++)n[r]=t.charCodeAt(r);return n}function ue(t){if(x(t)){let{URL:e}=globalThis;if(e){let{document:n}=globalThis,r=n&&n.location&&n.location.origin;try{return new e(t,r)}catch{}}}throw new Error("Invalid URL.")}function le(t){try{return ue(t),!0}catch{return!1}}return Object.assign(t.prototype,{scaleDownIn:Zt(oe,t=>Math.min(Math.min(...t),1)),scaleDownOut:Zt(oe,t=>Math.min(Math.max(...t),1)),scaleIn:Zt(oe,t=>Math.min(...t)),scaleOut:Zt(oe,t=>Math.max(...t)),scaleUpIn:Zt(oe,t=>Math.max(Math.min(...t),1)),scaleUpOut:Zt(oe,t=>Math.max(Math.max(...t),1))}),t.prototype.toDataURL=function(...t){return this.canvas.toDataURL(...t)},t.prototype.toBlob=function(...t){let{data:e,type:n}=z.parse(this.toDataURL(...t)),r=ce(atob(e));return new Blob([r],{type:n})},t.prototype.toHTMLCanvasElement=function(){let t=e(),{sizeX:n,sizeY:r}=this;return t.width=n,t.height=r,n&&r&&t.getContext("2d").drawImage(this.canvas,0,0),t},t.prototype.toHTMLImageElement=function(...t){let e=L();return e.src=this.toDataURL(...t),e},t.prototype.toImageData=function(){return this.context.getImageData(0,0,this.sizeX,this.sizeY)},t.prototype.toOffscreenCanvas=function(){let t=i(),{sizeX:e,sizeY:n}=this;return t.width=e,t.height=n,e&&n&&t.getContext("2d").drawImage(this.canvas,0,0),t},t.utils={},t.utils.isDataURL=function(t){return z.is(t)||z.isString(t)},t.utils.isURL=function(t){return F(t)||le(t)},t}));
