import{S as B,i as E,s as F,a as K,b as o,c as x,d as l,n as S,e as L,f as u,g as b,h as G,j,m as R,l as q,t as V,k as D,o as U,r as W,p as J,q as Q,u as X,v as I,w as A}from"./vendor.a68ea8e1.js";const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}};Y();function Z(a){let t,e;return{c(){t=K("svg"),e=K("path"),o(e,"fill-rule","evenodd"),o(e,"d","M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"),o(e,"clip-rule","evenodd"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"class","h-5 w-5"),o(t,"viewBox","0 0 20 20"),o(t,"fill","currentColor")},m(r,s){x(r,t,s),l(t,e)},p:S,i:S,o:S,d(r){r&&L(t)}}}class $ extends B{constructor(t){super();E(this,t,null,Z,F,{})}}function tt(a){let t,e,r;return{c(){t=u("p"),t.textContent="Nh\u1EADp \u0111\u01A1n h\xE0ng \u0111\u1EC3 ki\u1EC3m tra",o(t,"class","text-center cursor-default")},m(s,n){x(s,t,n),e||(r=q(t,"click",a[6]),e=!0)},p:S,d(s){s&&L(t),e=!1,r()}}}function et(a){let t,e,r,s;return{c(){t=u("p"),t.textContent="C\xF3 l\u1ED7i, h\xE3y th\u1EED l\u1EA1i!",e=b(),r=u("pre"),s=I(a[2]),o(t,"class","text-center text-red-500"),o(r,"class","text-xs")},m(n,c){x(n,t,c),x(n,e,c),x(n,r,c),l(r,s)},p(n,c){c&4&&A(s,n[2])},d(n){n&&L(t),n&&L(e),n&&L(r)}}}function nt(a){let t,e,r,s,n,c=(a[3].info.orderNo||"N/A")+"",f,d,_,m=(a[3].info.complete?"\u0110\xE3 tr\u1EA3":"Ch\u01B0a tr\u1EA3 h\xE0ng")+"",w,p,g,C,v=a[3].info["H\u1ECD t\xEAn"]+"",M,O,T,k=a[3].item.name+"",h,i,y,z=a[3].item.color+"",P;return{c(){t=u("div"),e=u("div"),r=u("p"),r.textContent="Th\u1EE9 t\u1EF1",s=b(),n=u("p"),f=I(c),d=b(),_=u("p"),w=I(m),p=b(),g=u("div"),C=u("p"),M=I(v),O=b(),T=u("p"),h=I(k),i=b(),y=u("p"),P=I(z),o(r,"class","label"),o(n,"class","order-nox"),o(_,"class","text-xs"),o(e,"class","order-no"),o(g,"class","order-more-info"),o(t,"class","order-info")},m(H,N){x(H,t,N),l(t,e),l(e,r),l(e,s),l(e,n),l(n,f),l(e,d),l(e,_),l(_,w),l(t,p),l(t,g),l(g,C),l(C,M),l(g,O),l(g,T),l(T,h),l(g,i),l(g,y),l(y,P)},p(H,N){N&8&&c!==(c=(H[3].info.orderNo||"N/A")+"")&&A(f,c),N&8&&m!==(m=(H[3].info.complete?"\u0110\xE3 tr\u1EA3":"Ch\u01B0a tr\u1EA3 h\xE0ng")+"")&&A(w,m),N&8&&v!==(v=H[3].info["H\u1ECD t\xEAn"]+"")&&A(M,v),N&8&&k!==(k=H[3].item.name+"")&&A(h,k),N&8&&z!==(z=H[3].item.color+"")&&A(P,z)},d(H){H&&L(t)}}}function st(a){let t;return{c(){t=u("p"),t.textContent="\u0110ang ki\u1EC3m tra...",o(t,"class","text-center")},m(e,r){x(e,t,r)},p:S,d(e){e&&L(t)}}}function rt(a){let t,e,r,s,n,c,f,d,_,m,w,p,g,C,v,M,O;d=new $({});function T(i,y){return i[1]?st:i[1]===!1&&i[3]?nt:i[2]&&i[1]===!1?et:tt}let k=T(a),h=k(a);return{c(){t=u("main"),e=u("div"),e.innerHTML='<h1 class="text-primary">Ho\xE0ng H\xE0 Ki\u1EC3m tra \u0111\u01A1n!</h1>',r=b(),s=u("div"),n=u("input"),c=b(),f=u("button"),G(d.$$.fragment),_=b(),m=u("div"),m.innerHTML=`<p class="text-sm">V\xED d\u1EE5: <strong>161776IMBVT</strong></p> 
    <p class="text-sm">Ch\u1EC9 h\u1ED7 tr\u1EE3 ki\u1EC3m tra iPhone 13 \u0111\u1EB7t tr\u01B0\u1EDBc!</p>`,w=b(),p=u("div"),h.c(),g=b(),C=u("div"),C.innerHTML=`<p class="note"><span class="text-sm">10h - 27/10: Trang ki\u1EC3m tra \u0111\u01A1n h\xE0ng c\u1EE7a ho\xE0ng h\xE0 b\u1ECB l\u1ED7i v\u1EDBi nh\u1EEFng \u0111\u01A1n c\u0169. Ch\u1EDD Ho\xE0ng H\xE0 s\u1EEDa \u0111\u1EC3 tra \u0111\u01B0\u1EE3c th\u1EE9 t\u1EF1!
      </span><br/> 
      <span class="text-sm">Th\xF4ng tin c\u1EA3nh b\xE1o gi\u1EA3 m\u1EA1o KH t\u1EEB Ho\xE0ng H\xE0 Fanpage <a href="https://www.facebook.com/hoanghamobilecom/photos/a.642797052425457/4619236774781445" class="underline" target="_blank">t\u1EA1i \u0111\xE2y.</a> 
      </span><br/> 
      <span class="text-sm">S\u1ED1 th\u1EE9 t\u1EF1 \u0111\u01B0\u1EE3c t\xEDnh theo \u0111\u1EB7t h\xE0ng s\u1EA3n ph\u1EA9m iPhone, ch\u1EC9 ph\xE2n bi\u1EC7t dung l\u01B0\u1EE3ng, kh\xF4ng ph\xE2n bi\u1EC7t m\xE0u s\u1EAFc.
        M\u1ED9t s\u1ED1 b\u1EA1n s\u1EBD th\u1EA5y ng\u01B0\u1EDDi \u0111\u1EB7t sau nh\u1EADn \u0111\u01B0\u1EE3c h\xE0ng. C\xF3 th\u1EC3 do kh\xE1c m\xE0u!<br/> 
      </span><br/> 
      <span class="text-sm">N\u1EBFu s\u1ED1 th\u1EE9 t\u1EF1 l\u1EDBn h\u01A1n <strong>1000</strong> th\xEC c\xF3 th\u1EC3 thu\u1ED9c \u0111\u1EE3t sau</span> 
      <br/><br/> 
      <span class="text-sm">\u0110\xE2y kh\xF4ng ph\u1EA3i l\xE0 trang ch\xEDnh th\u1EE9c c\u1EE7a Ho\xE0ng H\xE0 Mobile.
      </span><br/> 
      <span class="text-sm">Chia s\u1EBB trang n\xE0y v\u1EDBi b\u1EA1n b\xE8 \u0111\u1EC3 c\xF9ng xem S\u1ED1 th\u1EE9 t\u1EF1 \u0111\u01A1n h\xE0ng nh\xE9!
      </span><br/><br/>
      G\u1EEDi t\u1EDBi Ho\xE0ng H\xE0,<br/>
      C\xE1c b\u1EA1n tr\u1EA3 h\xE0ng nhanh gi\xFAp v\u1EDBi!<br/>
      Th\xF4ng tin \u0111\u01A1n h\xE0ng \u0111\u01B0\u1EE3c l\u1EA5y t\u1EEB H\u1EC7 th\u1ED1ng c\xF4ng khai c\u1EE7a Ho\xE0ng H\xE0, h\u1EC7 th\u1ED1ng c\xE1c b\u1EA1n v\u1EABn an to\xE0n.<br/>
      C\xE1c th\xF4ng tin tr\xEAn trang n\xE0y \u0111\u1EC1u \u0111\u01B0\u1EE3c b\u1EA3o m\u1EADt.<br/> 
      <a href="https://forms.gle/zHtEWvpGgpvomnM99" target="_blank" class="underline">Li\xEAn h\u1EC7</a></p>`,o(e,"class","header"),o(n,"class","order-input"),o(n,"placeholder","Nh\u1EADp \u0111\u01A1n h\xE0ng"),o(f,"class","order-submit"),o(s,"class","order-id"),o(m,"class","order-tips"),o(p,"class","order-detail"),o(C,"class","support")},m(i,y){x(i,t,y),l(t,e),l(t,r),l(t,s),l(s,n),j(n,a[0]),a[8](n),l(s,c),l(s,f),R(d,f,null),l(t,_),l(t,m),l(t,w),l(t,p),h.m(p,null),l(t,g),l(t,C),v=!0,M||(O=[q(n,"input",a[7]),q(f,"click",a[5])],M=!0)},p(i,[y]){y&1&&n.value!==i[0]&&j(n,i[0]),k===(k=T(i))&&h?h.p(i,y):(h.d(1),h=k(i),h&&(h.c(),h.m(p,null)))},i(i){v||(V(d.$$.fragment,i),v=!0)},o(i){D(d.$$.fragment,i),v=!1},d(i){i&&L(t),a[8](null),U(d),h.d(),M=!1,W(O)}}}function lt(a,t,e){let r="",s=!1,n="",c=null,f;J(()=>{let p=document.location.pathname;e(0,r=p.replace("/",""))});async function d(){if(!r&&f&&f.focus(),!(s||!r)){e(1,s=!0),e(3,c=null);try{const p=await Q({baseURL:"https://hh-order-infox.azurewebsites.net",method:"get",url:"/api/HttpH2Order",params:{order:r}});p.status===200&&p.data&&p.data.error===!1?(e(2,n=""),e(3,c=p.data.detail)):e(2,n="L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh. H\xE3y th\u1EED l\u1EA1i!")}catch(p){e(2,n=p.message)}finally{e(1,s=!1)}}}function _(){f&&f.focus()}function m(){r=this.value,e(0,r)}function w(p){X[p?"unshift":"push"](()=>{f=p,e(4,f)})}return[r,s,n,c,f,d,_,m,w]}class ot extends B{constructor(t){super();E(this,t,lt,rt,F,{})}}new ot({target:document.getElementById("app")});
