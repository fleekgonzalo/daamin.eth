import{s as U,e as A,i as k,d as h,u as B,J as he,v as C,w as T,E as y,z as F,f as N,a as O,g as S,h as E,c as q,K as J,H as z,L as be,A as M,B as j,C as D,l as P,m as w,j as v,n as ce,M as ee,N as te,O as pe,P as ke,F as ve,G as ye,x as Ce}from"../chunks/scheduler.5632aa68.js";import{S as V,i as Q,g as H,t as b,c as I,a as d,b as R,d as W,m as X,e as Y}from"../chunks/index.6896c0d1.js";import{p as ze}from"../chunks/stores.12d78f6b.js";import{b as K,g as Z,a as _e,F as Ee}from"../chunks/Indicator.svelte_svelte_type_style_lang.0e66ac86.js";import{f as Le}from"../chunks/index.caaabdd8.js";const Ne=n=>({svgSize:n&4}),le=n=>({svgSize:n[5][n[2]]}),Se=n=>({svgSize:n&4}),oe=n=>({svgSize:n[5][n[2]]});function Pe(n){let e,s,l,t,o,i,a=n[0]&&se(n);const f=n[9].default,u=F(f,n,n[8],le);let c=[{type:"button"},n[6],{class:n[4]},{"aria-label":l=n[1]??n[0]}],_={};for(let r=0;r<c.length;r+=1)_=C(_,c[r]);return{c(){e=N("button"),a&&a.c(),s=O(),u&&u.c(),this.h()},l(r){e=S(r,"BUTTON",{type:!0,class:!0,"aria-label":!0});var m=E(e);a&&a.l(m),s=q(m),u&&u.l(m),m.forEach(h),this.h()},h(){J(e,_)},m(r,m){k(r,e,m),a&&a.m(e,null),z(e,s),u&&u.m(e,null),e.autofocus&&e.focus(),t=!0,o||(i=be(e,"click",n[10]),o=!0)},p(r,m){r[0]?a?a.p(r,m):(a=se(r),a.c(),a.m(e,s)):a&&(a.d(1),a=null),u&&u.p&&(!t||m&260)&&M(u,f,r,r[8],t?D(f,r[8],m,Ne):j(r[8]),le),J(e,_=Z(c,[{type:"button"},m&64&&r[6],(!t||m&16)&&{class:r[4]},(!t||m&3&&l!==(l=r[1]??r[0]))&&{"aria-label":l}]))},i(r){t||(d(u,r),t=!0)},o(r){b(u,r),t=!1},d(r){r&&h(e),a&&a.d(),u&&u.d(r),o=!1,i()}}}function we(n){let e,s,l,t,o=n[0]&&ne(n);const i=n[9].default,a=F(i,n,n[8],oe);let f=[{href:n[3]},n[6],{class:n[4]},{"aria-label":l=n[1]??n[0]}],u={};for(let c=0;c<f.length;c+=1)u=C(u,f[c]);return{c(){e=N("a"),o&&o.c(),s=O(),a&&a.c(),this.h()},l(c){e=S(c,"A",{href:!0,class:!0,"aria-label":!0});var _=E(e);o&&o.l(_),s=q(_),a&&a.l(_),_.forEach(h),this.h()},h(){J(e,u)},m(c,_){k(c,e,_),o&&o.m(e,null),z(e,s),a&&a.m(e,null),t=!0},p(c,_){c[0]?o?o.p(c,_):(o=ne(c),o.c(),o.m(e,s)):o&&(o.d(1),o=null),a&&a.p&&(!t||_&260)&&M(a,i,c,c[8],t?D(i,c[8],_,Se):j(c[8]),oe),J(e,u=Z(f,[(!t||_&8)&&{href:c[3]},_&64&&c[6],(!t||_&16)&&{class:c[4]},(!t||_&3&&l!==(l=c[1]??c[0]))&&{"aria-label":l}]))},i(c){t||(d(a,c),t=!0)},o(c){b(a,c),t=!1},d(c){c&&h(e),o&&o.d(),a&&a.d(c)}}}function se(n){let e,s;return{c(){e=N("span"),s=P(n[0]),this.h()},l(l){e=S(l,"SPAN",{class:!0});var t=E(e);s=w(t,n[0]),t.forEach(h),this.h()},h(){v(e,"class","sr-only")},m(l,t){k(l,e,t),z(e,s)},p(l,t){t&1&&ce(s,l[0])},d(l){l&&h(e)}}}function ne(n){let e,s;return{c(){e=N("span"),s=P(n[0]),this.h()},l(l){e=S(l,"SPAN",{class:!0});var t=E(e);s=w(t,n[0]),t.forEach(h),this.h()},h(){v(e,"class","sr-only")},m(l,t){k(l,e,t),z(e,s)},p(l,t){t&1&&ce(s,l[0])},d(l){l&&h(e)}}}function Ae(n){let e,s,l,t;const o=[we,Pe],i=[];function a(f,u){return f[3]?0:1}return e=a(n),s=i[e]=o[e](n),{c(){s.c(),l=A()},l(f){s.l(f),l=A()},m(f,u){i[e].m(f,u),k(f,l,u),t=!0},p(f,[u]){let c=e;e=a(f),e===c?i[e].p(f,u):(H(),b(i[c],1,1,()=>{i[c]=null}),I(),s=i[e],s?s.p(f,u):(s=i[e]=o[e](f),s.c()),d(s,1),s.m(l.parentNode,l))},i(f){t||(d(s),t=!0)},o(f){b(s),t=!1},d(f){f&&h(l),i[e].d(f)}}}function Be(n,e,s){const l=["color","name","ariaLabel","size","href"];let t=B(e,l),{$$slots:o={},$$scope:i}=e;const a=he("background");let{color:f="default"}=e,{name:u=void 0}=e,{ariaLabel:c=void 0}=e,{size:_="md"}=e,{href:r=void 0}=e;const m={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",primary:"text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",default:"focus:ring-gray-400"},L={xs:"m-0.5 rounded-sm focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let G;const $={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};function x(p){y.call(this,n,p)}return n.$$set=p=>{s(14,e=C(C({},e),T(p))),s(6,t=B(e,l)),"color"in p&&s(7,f=p.color),"name"in p&&s(0,u=p.name),"ariaLabel"in p&&s(1,c=p.ariaLabel),"size"in p&&s(2,_=p.size),"href"in p&&s(3,r=p.href),"$$scope"in p&&s(8,i=p.$$scope)},n.$$.update=()=>{s(4,G=K("focus:outline-none whitespace-normal",L[_],m[f],f==="default"&&(a?"hover:bg-gray-100 dark:hover:bg-gray-600":"hover:bg-gray-100 dark:hover:bg-gray-700"),e.class))},e=T(e),[u,c,_,r,G,$,t,f,i,o,x]}class Te extends V{constructor(e){super(),Q(this,e,Be,Ae,U,{color:7,name:0,ariaLabel:1,size:2,href:3})}}function Fe(n){let e,s,l;return{c(){e=ee("svg"),s=ee("path"),this.h()},l(t){e=te(t,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var o=E(e);s=te(o,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),E(s).forEach(h),o.forEach(h),this.h()},h(){v(s,"fill-rule","evenodd"),v(s,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),v(s,"clip-rule","evenodd"),v(e,"class",l=n[4]),v(e,"fill","currentColor"),v(e,"viewBox","0 0 20 20"),v(e,"xmlns","http://www.w3.org/2000/svg")},m(t,o){k(t,e,o),z(e,s)},p(t,o){o&16&&l!==(l=t[4])&&v(e,"class",l)},d(t){t&&h(e)}}}function Me(n){let e,s;const l=[{name:n[0]},n[1],{class:K("ml-auto",n[2].class)}];let t={$$slots:{default:[Fe,({svgSize:o})=>({4:o}),({svgSize:o})=>o?16:0]},$$scope:{ctx:n}};for(let o=0;o<l.length;o+=1)t=C(t,l[o]);return e=new Te({props:t}),e.$on("click",n[3]),{c(){R(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,i){X(e,o,i),s=!0},p(o,[i]){const a=i&7?Z(l,[i&1&&{name:o[0]},i&2&&_e(o[1]),i&4&&{class:K("ml-auto",o[2].class)}]):{};i&48&&(a.$$scope={dirty:i,ctx:o}),e.$set(a)},i(o){s||(d(e.$$.fragment,o),s=!0)},o(o){b(e.$$.fragment,o),s=!1},d(o){Y(e,o)}}}function je(n,e,s){const l=["name"];let t=B(e,l),{name:o="Close"}=e;function i(a){y.call(this,n,a)}return n.$$set=a=>{s(2,e=C(C({},e),T(a))),s(1,t=B(e,l)),"name"in a&&s(0,o=a.name)},e=T(e),[o,t,e,i]}class De extends V{constructor(e){super(),Q(this,e,je,Me,U,{name:0})}}const He=n=>({}),ae=n=>({close:n[3]}),Ie=n=>({}),re=n=>({});function ie(n){let e,s;const l=[n[4],{class:n[2]},{role:"alert"}];let t={$$slots:{default:[Je]},$$scope:{ctx:n}};for(let o=0;o<l.length;o+=1)t=C(t,l[o]);return e=new Ee({props:t}),{c(){R(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,i){X(e,o,i),s=!0},p(o,i){const a=i&20?Z(l,[i&16&&_e(o[4]),i&4&&{class:o[2]},l[2]]):{};i&65585&&(a.$$scope={dirty:i,ctx:o}),e.$set(a)},i(o){s||(d(e.$$.fragment,o),s=!0)},o(o){b(e.$$.fragment,o),s=!1},d(o){Y(e,o)}}}function fe(n){let e;const s=n[7].icon,l=F(s,n,n[16],re);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&65536)&&M(l,s,t,t[16],e?D(s,t[16],o,Ie):j(t[16]),re)},i(t){e||(d(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function Oe(n){let e;const s=n[7].default,l=F(s,n,n[16],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&65536)&&M(l,s,t,t[16],e?D(s,t[16],o,null):j(t[16]),null)},i(t){e||(d(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function qe(n){let e,s;const l=n[7].default,t=F(l,n,n[16],null);return{c(){e=N("div"),t&&t.c()},l(o){e=S(o,"DIV",{});var i=E(e);t&&t.l(i),i.forEach(h)},m(o,i){k(o,e,i),t&&t.m(e,null),s=!0},p(o,i){t&&t.p&&(!s||i&65536)&&M(t,l,o,o[16],s?D(l,o[16],i,null):j(o[16]),null)},i(o){s||(d(t,o),s=!0)},o(o){b(t,o),s=!1},d(o){o&&h(e),t&&t.d(o)}}}function ue(n){let e;const s=n[7]["close-button"],l=F(s,n,n[16],ae),t=l||Ge(n);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,i){t&&t.m(o,i),e=!0},p(o,i){l?l.p&&(!e||i&65536)&&M(l,s,o,o[16],e?D(s,o[16],i,He):j(o[16]),ae):t&&t.p&&(!e||i&16)&&t.p(o,e?i:-1)},i(o){e||(d(t,o),e=!0)},o(o){b(t,o),e=!1},d(o){t&&t.d(o)}}}function Ge(n){let e,s;return e=new De({props:{class:"-my-1.5 dark:hover:bg-gray-700",color:n[4].color}}),e.$on("click",n[3]),e.$on("click",n[8]),e.$on("change",n[9]),e.$on("keydown",n[10]),e.$on("keyup",n[11]),e.$on("focus",n[12]),e.$on("blur",n[13]),e.$on("mouseenter",n[14]),e.$on("mouseleave",n[15]),{c(){R(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,t){X(e,l,t),s=!0},p(l,t){const o={};t&16&&(o.color=l[4].color),e.$set(o)},i(l){s||(d(e.$$.fragment,l),s=!0)},o(l){b(e.$$.fragment,l),s=!1},d(l){Y(e,l)}}}function Je(n){let e,s,l,t,o,i,a=n[5].icon&&fe(n);const f=[qe,Oe],u=[];function c(r,m){return r[5].icon||r[0]?0:1}s=c(n),l=u[s]=f[s](n);let _=n[0]&&ue(n);return{c(){a&&a.c(),e=O(),l.c(),t=O(),_&&_.c(),o=A()},l(r){a&&a.l(r),e=q(r),l.l(r),t=q(r),_&&_.l(r),o=A()},m(r,m){a&&a.m(r,m),k(r,e,m),u[s].m(r,m),k(r,t,m),_&&_.m(r,m),k(r,o,m),i=!0},p(r,m){r[5].icon?a?(a.p(r,m),m&32&&d(a,1)):(a=fe(r),a.c(),d(a,1),a.m(e.parentNode,e)):a&&(H(),b(a,1,1,()=>{a=null}),I());let L=s;s=c(r),s===L?u[s].p(r,m):(H(),b(u[L],1,1,()=>{u[L]=null}),I(),l=u[s],l?l.p(r,m):(l=u[s]=f[s](r),l.c()),d(l,1),l.m(t.parentNode,t)),r[0]?_?(_.p(r,m),m&1&&d(_,1)):(_=ue(r),_.c(),d(_,1),_.m(o.parentNode,o)):_&&(H(),b(_,1,1,()=>{_=null}),I())},i(r){i||(d(a),d(l),d(_),i=!0)},o(r){b(a),b(l),b(_),i=!1},d(r){r&&(h(e),h(t),h(o)),a&&a.d(r),u[s].d(r),_&&_.d(r)}}}function Ke(n){let e,s,l=n[1]&&ie(n);return{c(){l&&l.c(),e=A()},l(t){l&&l.l(t),e=A()},m(t,o){l&&l.m(t,o),k(t,e,o),s=!0},p(t,[o]){t[1]?l?(l.p(t,o),o&2&&d(l,1)):(l=ie(t),l.c(),d(l,1),l.m(e.parentNode,e)):l&&(H(),b(l,1,1,()=>{l=null}),I())},i(t){s||(d(l),s=!0)},o(t){b(l),s=!1},d(t){t&&h(e),l&&l.d(t)}}}function Ue(n,e,s){const l=["dismissable","defaultClass"];let t=B(e,l),{$$slots:o={},$$scope:i}=e;const a=pe(o);let{dismissable:f=!1}=e,{defaultClass:u="p-4 gap-3 text-sm"}=e,c=!0;const _=ke();function r(g){g.stopPropagation(),s(1,c=!1)}let m;function L(g){y.call(this,n,g)}function G(g){y.call(this,n,g)}function $(g){y.call(this,n,g)}function x(g){y.call(this,n,g)}function p(g){y.call(this,n,g)}function me(g){y.call(this,n,g)}function ge(g){y.call(this,n,g)}function de(g){y.call(this,n,g)}return n.$$set=g=>{s(18,e=C(C({},e),T(g))),s(4,t=B(e,l)),"dismissable"in g&&s(0,f=g.dismissable),"defaultClass"in g&&s(6,u=g.defaultClass),"$$scope"in g&&s(16,i=g.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&_(c?"open":"close"),s(2,m=K(u,(a.icon||f)&&"flex items-center",e.class)),s(4,t.color=t.color??"primary",t),s(4,t.rounded=t.rounded??!0,t),f&&s(4,t.transition=t.transition??Le,t)},e=T(e),[f,c,m,r,t,a,u,o,L,G,$,x,p,me,ge,de,i]}class Ve extends V{constructor(e){super(),Q(this,e,Ue,Ke,U,{dismissable:0,defaultClass:6})}}function Qe(n){let e,s="Info alert!",l;return{c(){e=N("span"),e.textContent=s,l=P(`
	Change a few things up and try submitting again.`),this.h()},l(t){e=S(t,"SPAN",{class:!0,"data-svelte-h":!0}),ye(e)!=="svelte-1ffo80p"&&(e.textContent=s),l=w(t,`
	Change a few things up and try submitting again.`),this.h()},h(){v(e,"class","font-medium")},m(t,o){k(t,e,o),k(t,l,o)},p:Ce,d(t){t&&(h(e),h(l))}}}function Re(n){let e,s,l,t,o,i,a;return e=new Ve({props:{$$slots:{default:[Qe]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),s=O(),l=N("h1"),t=P("The page "),o=P(n[0]),i=P(" doesn't exist")},l(f){W(e.$$.fragment,f),s=q(f),l=S(f,"H1",{});var u=E(l);t=w(u,"The page "),o=w(u,n[0]),i=w(u," doesn't exist"),u.forEach(h)},m(f,u){X(e,f,u),k(f,s,u),k(f,l,u),z(l,t),z(l,o),z(l,i),a=!0},p(f,[u]){const c={};u&4&&(c.$$scope={dirty:u,ctx:f}),e.$set(c)},i(f){a||(d(e.$$.fragment,f),a=!0)},o(f){b(e.$$.fragment,f),a=!1},d(f){f&&(h(s),h(l)),Y(e,f)}}}function We(n,e,s){let l;return ve(n,ze,o=>s(1,l=o)),[l.params.pagenotfound]}class et extends V{constructor(e){super(),Q(this,e,We,Re,U,{})}}export{et as component};