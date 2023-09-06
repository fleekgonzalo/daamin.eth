import{s as F,f as b,a as q,g,h as E,c as w,d as s,j as H,i as d,H as L,o as J,G as V,I as j}from"../chunks/scheduler.5632aa68.js";import{S as K,i as N,a as D,t as $,c as P,f as u,g as A}from"../chunks/index.6896c0d1.js";import{c as Q}from"../chunks/stores.0fab4300.js";import{q as o,f as B,b as v}from"../chunks/index.caaabdd8.js";const U=!0,it=Object.freeze(Object.defineProperty({__proto__:null,prerender:U},Symbol.toStringTag,{value:"Module"}));function G(k){let i,f='<img id="logo" src="/logo.svg" alt="Rocket"/>',r,n;return{c(){i=b("a"),i.innerHTML=f,this.h()},l(t){i=g(t,"A",{href:!0,"data-svelte-h":!0}),V(i)!=="svelte-qt8qja"&&(i.innerHTML=f),this.h()},h(){H(i,"href","/")},m(t,l){d(t,i,l),n=!0},i(t){n||(t&&j(()=>{n&&(r||(r=u(i,B,{delay:0,duration:1e3,easing:o},!0)),r.run(1))}),n=!0)},o(t){t&&(r||(r=u(i,B,{delay:0,duration:1e3,easing:o},!1)),r.run(0)),n=!1},d(t){t&&s(i),t&&r&&r.end()}}}function R(k){let i,f="Building",r,n,t,l="an",a,I,_,O="immutable world",C,M,c,T="for",h,S,m,z="limitless freedom",y,p;return{c(){i=b("div"),i.textContent=f,n=q(),t=b("div"),t.textContent=l,I=q(),_=b("div"),_.textContent=O,M=q(),c=b("div"),c.textContent=T,S=q(),m=b("div"),m.textContent=z},l(e){i=g(e,"DIV",{"data-svelte-h":!0}),V(i)!=="svelte-xzw5ow"&&(i.textContent=f),n=w(e),t=g(e,"DIV",{"data-svelte-h":!0}),V(t)!=="svelte-6rvg8h"&&(t.textContent=l),I=w(e),_=g(e,"DIV",{"data-svelte-h":!0}),V(_)!=="svelte-m0ow43"&&(_.textContent=O),M=w(e),c=g(e,"DIV",{"data-svelte-h":!0}),V(c)!=="svelte-17j7ap4"&&(c.textContent=T),S=w(e),m=g(e,"DIV",{"data-svelte-h":!0}),V(m)!=="svelte-1r808dj"&&(m.textContent=z)},m(e,x){d(e,i,x),d(e,n,x),d(e,t,x),d(e,I,x),d(e,_,x),d(e,M,x),d(e,c,x),d(e,S,x),d(e,m,x),p=!0},i(e){p||(e&&j(()=>{p&&(r||(r=u(i,v,{delay:500,duration:1e3,easing:o},!0)),r.run(1))}),e&&j(()=>{p&&(a||(a=u(t,v,{delay:1e3,duration:1e3,easing:o},!0)),a.run(1))}),e&&j(()=>{p&&(C||(C=u(_,v,{delay:1500,duration:1e3,easing:o},!0)),C.run(1))}),e&&j(()=>{p&&(h||(h=u(c,v,{delay:2e3,duration:1e3,easing:o},!0)),h.run(1))}),e&&j(()=>{p&&(y||(y=u(m,v,{delay:2500,duration:1e3,easing:o},!0)),y.run(1))}),p=!0)},o(e){e&&(r||(r=u(i,v,{delay:500,duration:1e3,easing:o},!1)),r.run(0)),e&&(a||(a=u(t,v,{delay:1e3,duration:1e3,easing:o},!1)),a.run(0)),e&&(C||(C=u(_,v,{delay:1500,duration:1e3,easing:o},!1)),C.run(0)),e&&(h||(h=u(c,v,{delay:2e3,duration:1e3,easing:o},!1)),h.run(0)),e&&(y||(y=u(m,v,{delay:2500,duration:1e3,easing:o},!1)),y.run(0)),p=!1},d(e){e&&(s(i),s(n),s(t),s(I),s(_),s(M),s(c),s(S),s(m)),e&&r&&r.end(),e&&a&&a.end(),e&&C&&C.end(),e&&h&&h.end(),e&&y&&y.end()}}}function W(k){let i,f,r,n=k[0]&&G(),t=k[0]&&R();return{c(){i=b("div"),n&&n.c(),f=q(),r=b("div"),t&&t.c(),this.h()},l(l){i=g(l,"DIV",{class:!0});var a=E(i);n&&n.l(a),f=w(a),r=g(a,"DIV",{class:!0});var I=E(r);t&&t.l(I),I.forEach(s),a.forEach(s),this.h()},h(){H(r,"class","mottotext"),H(i,"class","container aboutme")},m(l,a){d(l,i,a),n&&n.m(i,null),L(i,f),L(i,r),t&&t.m(r,null)},p(l,[a]){l[0]?n?a&1&&D(n,1):(n=G(),n.c(),D(n,1),n.m(i,f)):n&&(A(),$(n,1,1,()=>{n=null}),P()),l[0]?t?a&1&&D(t,1):(t=R(),t.c(),D(t,1),t.m(r,null)):t&&(A(),$(t,1,1,()=>{t=null}),P())},i(l){D(n),D(t)},o(l){$(n),$(t)},d(l){l&&s(i),n&&n.d(),t&&t.d()}}}function X(k,i,f){let r=!1;return J(()=>{Q.set("aboutme"),f(0,r=!0)}),[r]}class nt extends K{constructor(i){super(),N(this,i,X,W,F,{})}}export{nt as component,it as universal};
