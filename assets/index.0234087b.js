import{S as B,i as j,s as E,a as F,b as o,c as L,d as l,n as T,e as M,f as u,g as _,h as R,j as K,m as V,l as z,t as D,k as G,o as U,r as J,p as Q,q as W,u as X,v as A,w as O}from"./vendor.a68ea8e1.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};Y();function Z(i){let e,t;return{c(){e=F("svg"),t=F("path"),o(t,"fill-rule","evenodd"),o(t,"d","M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"),o(t,"clip-rule","evenodd"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","h-5 w-5"),o(e,"viewBox","0 0 20 20"),o(e,"fill","currentColor")},m(s,r){L(s,e,r),l(e,t)},p:T,i:T,o:T,d(s){s&&M(e)}}}class $ extends B{constructor(e){super();j(this,e,null,Z,E,{})}}function ee(i){let e,t,s;return{c(){e=u("p"),e.textContent="Nh\u1EADp \u0111\u01A1n h\xE0ng \u0111\u1EC3 ki\u1EC3m tra",o(e,"class","text-center cursor-default")},m(r,n){L(r,e,n),t||(s=z(e,"click",i[6]),t=!0)},p:T,d(r){r&&M(e),t=!1,s()}}}function te(i){let e,t,s,r;return{c(){e=u("p"),e.textContent="C\xF3 l\u1ED7i, h\xE3y th\u1EED l\u1EA1i!",t=_(),s=u("pre"),r=A(i[2]),o(e,"class","text-center text-red-500"),o(s,"class","text-xs")},m(n,c){L(n,e,c),L(n,t,c),L(n,s,c),l(s,r)},p(n,c){c&4&&O(r,n[2])},d(n){n&&M(e),n&&M(t),n&&M(s)}}}function ne(i){let e,t,s,r,n,c=(i[3].info.orderNo||"N/A")+"",f,h,b,m=(i[3].info.complete?"\u0110\xE3 tr\u1EA3":"Ch\u01B0a tr\u1EA3 h\xE0ng")+"",C,p,g,w,v=i[3].info["H\u1ECD t\xEAn"]+"",N,S,I,y=i[3].item.name+"",d,a,k,P=i[3].item.color+"",q;return{c(){e=u("div"),t=u("div"),s=u("p"),s.textContent="Th\u1EE9 t\u1EF1",r=_(),n=u("p"),f=A(c),h=_(),b=u("p"),C=A(m),p=_(),g=u("div"),w=u("p"),N=A(v),S=_(),I=u("p"),d=A(y),a=_(),k=u("p"),q=A(P),o(s,"class","label"),o(n,"class","order-nox"),o(b,"class","text-xs"),o(t,"class","order-no"),o(g,"class","order-more-info"),o(e,"class","order-info")},m(H,x){L(H,e,x),l(e,t),l(t,s),l(t,r),l(t,n),l(n,f),l(t,h),l(t,b),l(b,C),l(e,p),l(e,g),l(g,w),l(w,N),l(g,S),l(g,I),l(I,d),l(g,a),l(g,k),l(k,q)},p(H,x){x&8&&c!==(c=(H[3].info.orderNo||"N/A")+"")&&O(f,c),x&8&&m!==(m=(H[3].info.complete?"\u0110\xE3 tr\u1EA3":"Ch\u01B0a tr\u1EA3 h\xE0ng")+"")&&O(C,m),x&8&&v!==(v=H[3].info["H\u1ECD t\xEAn"]+"")&&O(N,v),x&8&&y!==(y=H[3].item.name+"")&&O(d,y),x&8&&P!==(P=H[3].item.color+"")&&O(q,P)},d(H){H&&M(e)}}}function re(i){let e;return{c(){e=u("p"),e.textContent="\u0110ang ki\u1EC3m tra...",o(e,"class","text-center")},m(t,s){L(t,e,s)},p:T,d(t){t&&M(e)}}}function se(i){let e,t,s,r,n,c,f,h,b,m,C,p,g,w,v,N,S;h=new $({});function I(a,k){return a[1]?re:a[1]===!1&&a[3]?ne:a[2]&&a[1]===!1?te:ee}let y=I(i),d=y(i);return{c(){e=u("main"),t=u("div"),t.innerHTML='<h1 class="text-primary">Ho\xE0ng H\xE0 Ki\u1EC3m tra \u0111\u01A1n!</h1>',s=_(),r=u("div"),n=u("input"),c=_(),f=u("button"),R(h.$$.fragment),b=_(),m=u("div"),m.innerHTML=`<p class="text-sm">V\xED d\u1EE5: <strong>161776IMBVT</strong></p> 
    <p class="text-sm">Ch\u1EC9 h\u1ED7 tr\u1EE3 ki\u1EC3m tra iPhone 13 \u0111\u1EB7t tr\u01B0\u1EDBc!</p>`,C=_(),p=u("div"),d.c(),g=_(),w=u("div"),w.innerHTML=`<p class="note"><span class="text-sm">S\u1ED1 th\u1EE9 t\u1EF1 \u0111\u01B0\u1EE3c t\xEDnh theo \u0111\u1EB7t h\xE0ng s\u1EA3n ph\u1EA9m iPhone, ch\u1EC9 ph\xE2n bi\u1EC7t dung l\u01B0\u1EE3ng, kh\xF4ng ph\xE2n bi\u1EC7t m\xE0u s\u1EAFc.
        M\u1ED9t s\u1ED1 b\u1EA1n s\u1EBD th\u1EA5y ng\u01B0\u1EDDi \u0111\u1EB7t sau nh\u1EADn \u0111\u01B0\u1EE3c h\xE0ng. C\xF3 th\u1EC3 do kh\xE1c m\xE0u!
      </span><br/> 
      <span>N\u1EBFu s\u1ED1 th\u1EE9 t\u1EF1 l\u1EDBn h\u01A1n <strong>1000</strong> th\xEC c\xF3 th\u1EC3 thu\u1ED9c \u0111\u1EE3t sau</span> 
      <br/><br/> 
      <span class="text-sm">\u0110\xE2y kh\xF4ng ph\u1EA3i l\xE0 trang ch\xEDnh th\u1EE9c c\u1EE7a Ho\xE0ng H\xE0 Mobile.
      </span><br/> 
      <span class="text-sm">Chia s\u1EBB trang n\xE0y v\u1EDBi b\u1EA1n b\xE8 \u0111\u1EC3 c\xF9ng xem S\u1ED1 th\u1EE9 t\u1EF1 \u0111\u01A1n h\xE0ng nh\xE9!
      </span><br/><br/>
      G\u1EEDi t\u1EDBi Ho\xE0ng H\xE0, <br/>
      C\xE1c b\u1EA1n tr\u1EA3 h\xE0ng nhanh gi\xFAp v\u1EDBi!<br/></p>`,o(t,"class","header"),o(n,"class","order-input"),o(n,"placeholder","Nh\u1EADp \u0111\u01A1n h\xE0ng"),o(f,"class","order-submit"),o(r,"class","order-id"),o(m,"class","order-tips"),o(p,"class","order-detail"),o(w,"class","support")},m(a,k){L(a,e,k),l(e,t),l(e,s),l(e,r),l(r,n),K(n,i[0]),i[8](n),l(r,c),l(r,f),V(h,f,null),l(e,b),l(e,m),l(e,C),l(e,p),d.m(p,null),l(e,g),l(e,w),v=!0,N||(S=[z(n,"input",i[7]),z(f,"click",i[5])],N=!0)},p(a,[k]){k&1&&n.value!==a[0]&&K(n,a[0]),y===(y=I(a))&&d?d.p(a,k):(d.d(1),d=y(a),d&&(d.c(),d.m(p,null)))},i(a){v||(D(h.$$.fragment,a),v=!0)},o(a){G(h.$$.fragment,a),v=!1},d(a){a&&M(e),i[8](null),U(h),d.d(),N=!1,J(S)}}}function le(i,e,t){let s="",r=!1,n="",c=null,f;Q(()=>{let p=document.location.pathname;t(0,s=p.replace("/",""))});async function h(){if(!s&&f&&f.focus(),!(r||!s)){t(1,r=!0),t(3,c=null);try{const p=await W({baseURL:"https://hh-order-infox.azurewebsites.net",method:"get",url:"/api/HttpH2Order",params:{order:s}});p.status===200&&p.data&&p.data.error===!1?(t(2,n=""),t(3,c=p.data.detail)):t(2,n="L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh. H\xE3y th\u1EED l\u1EA1i!")}catch(p){t(2,n=p.message)}finally{t(1,r=!1)}}}function b(){f&&f.focus()}function m(){s=this.value,t(0,s)}function C(p){X[p?"unshift":"push"](()=>{f=p,t(4,f)})}return[s,r,n,c,f,h,b,m,C]}class oe extends B{constructor(e){super();j(this,e,le,se,E,{})}}new oe({target:document.getElementById("app")});
