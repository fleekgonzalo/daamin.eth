import{s as g,f as p,g as h,h as y,d as o,j as c,i as _,o as I,G as b,I as v}from"../chunks/scheduler.5632aa68.js";import{S as k,i as D,a as r,t as l,c as w,f,g as x}from"../chunks/index.6896c0d1.js";import{q as m,b as u}from"../chunks/index.caaabdd8.js";import{c as $}from"../chunks/stores.0fab4300.js";function d(s){let n,t='<span class="cmd">&gt;</span> <span id="typewriter"></span> <span class="blinking">_</span>',e,i;return{c(){n=p("div"),n.innerHTML=t,this.h()},l(a){n=h(a,"DIV",{class:!0,href:!0,"data-svelte-h":!0}),b(n)!=="svelte-1avts5b"&&(n.innerHTML=t),this.h()},h(){c(n,"class","maintext"),c(n,"href","/")},m(a,H){_(a,n,H),i=!0},i(a){i||(a&&v(()=>{i&&(e||(e=f(n,u,{delay:0,duration:500,easing:m},!0)),e.run(1))}),i=!0)},o(a){a&&(e||(e=f(n,u,{delay:0,duration:500,easing:m},!1)),e.run(0)),i=!1},d(a){a&&o(n),a&&e&&e.end()}}}function q(s){let n,t=s[0]&&d();return{c(){n=p("div"),t&&t.c(),this.h()},l(e){n=h(e,"DIV",{class:!0});var i=y(n);t&&t.l(i),i.forEach(o),this.h()},h(){c(n,"class","container")},m(e,i){_(e,n,i),t&&t.m(n,null)},p(e,[i]){e[0]?t?i&1&&r(t,1):(t=d(),t.c(),r(t,1),t.m(n,null)):t&&(x(),l(t,1,1,()=>{t=null}),w())},i(e){r(t)},o(e){l(t)},d(e){e&&o(n),t&&t.d()}}}function M(s,n,t){let e=!1;return I(()=>{$.set("homepage"),t(0,e=!0)}),[e]}class V extends k{constructor(n){super(),D(this,n,M,q,g,{})}}export{V as component};
