import{S as T,i as $,s as J,e as y,k as L,c as N,a as A,m as q,d,b as _,g as b,J as M,q as v,w as z,x as F,y as G,o as x,B as H,p as U,L as V,P as K,U as w,v as O,n as R}from"../../chunks/index-cf172771.js";import Q from"./lotto-number.svelte-fce61bec.js";import{r as I,i as W,e as X,l as Y}from"../../chunks/store-7ee32c10.js";import{C as Z}from"../../chunks/clipboard-6d22df92.js";import{v as E,s as j}from"../../chunks/common-c877baa1.js";import"../../chunks/index-d6a33c38.js";import"../../chunks/_commonjsHelpers-7d66b65f.js";function B(m,l,u){const s=m.slice();return s[7]=l[u],s}function C(m,l,u){const s=m.slice();return s[10]=l[u],s}function D(m){let l,u,s;return u=new Q({props:{lottoNumber:m[10],"}":!0}}),{c(){l=y("div"),z(u.$$.fragment),this.h()},l(n){l=N(n,"DIV",{class:!0});var t=A(l);F(u.$$.fragment,t),t.forEach(d),this.h()},h(){_(l,"class","cell svelte-1q1l83w")},m(n,t){b(n,l,t),G(u,l,null),s=!0},p(n,t){const p={};t&2&&(p.lottoNumber=n[10]),u.$set(p)},i(n){s||(v(u.$$.fragment,n),s=!0)},o(n){x(u.$$.fragment,n),s=!1},d(n){n&&d(l),H(u)}}}function P(m){let l,u,s,n=m[1][m[7]],t=[];for(let r=0;r<n.length;r+=1)t[r]=D(C(m,n,r));const p=r=>x(t[r],1,1,()=>{t[r]=null});return{c(){l=y("div");for(let r=0;r<t.length;r+=1)t[r].c();u=L(),this.h()},l(r){l=N(r,"DIV",{class:!0});var f=A(l);for(let i=0;i<t.length;i+=1)t[i].l(f);u=q(f),f.forEach(d),this.h()},h(){_(l,"class","row")},m(r,f){b(r,l,f);for(let i=0;i<t.length;i+=1)t[i].m(l,null);M(l,u),s=!0},p(r,f){if(f&2){n=r[1][r[7]];let i;for(i=0;i<n.length;i+=1){const h=C(r,n,i);t[i]?(t[i].p(h,f),v(t[i],1)):(t[i]=D(h),t[i].c(),v(t[i],1),t[i].m(l,u))}for(R(),i=n.length;i<t.length;i+=1)p(i);U()}},i(r){if(!s){for(let f=0;f<n.length;f+=1)v(t[f]);s=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)x(t[f]);s=!1},d(r){r&&d(l),V(t,r)}}}function ee(m){let l,u,s,n,t,p,r,f,i,h=I(0,4),a=[];for(let e=0;e<h.length;e+=1)a[e]=P(B(m,h,e));const g=e=>x(a[e],1,1,()=>{a[e]=null});return{c(){l=y("input"),u=L(),s=y("input"),t=L(),p=y("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){l=N(e,"INPUT",{type:!0,id:!0}),u=q(e),s=N(e,"INPUT",{type:!0,id:!0,"data-clipboard-text":!0,class:!0}),t=q(e),p=N(e,"DIV",{class:!0});var o=A(p);for(let c=0;c<a.length;c+=1)a[c].l(o);o.forEach(d),this.h()},h(){_(l,"type","button"),l.value="\uC7AC\uC0DD\uC131",_(l,"id","refresh"),_(s,"type","button"),s.value="\uBCF5\uC0AC",_(s,"id","copy"),_(s,"data-clipboard-text",n=m[1].map(S).join(`\r
`)),_(s,"class","svelte-1q1l83w"),_(p,"class","table svelte-1q1l83w")},m(e,o){b(e,l,o),b(e,u,o),b(e,s,o),b(e,t,o),b(e,p,o);for(let c=0;c<a.length;c+=1)a[c].m(p,null);r=!0,f||(i=K(l,"click",m[5]),f=!0)},p(e,[o]){if((!r||o&2&&n!==(n=e[1].map(S).join(`\r
`)))&&_(s,"data-clipboard-text",n),o&2){h=I(0,4);let c;for(c=0;c<h.length;c+=1){const k=B(e,h,c);a[c]?(a[c].p(k,o),v(a[c],1)):(a[c]=P(k),a[c].c(),v(a[c],1),a[c].m(p,null))}for(R(),c=h.length;c<a.length;c+=1)g(c);U()}},i(e){if(!r){for(let o=0;o<h.length;o+=1)v(a[o]);r=!0}},o(e){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)x(a[o]);r=!1},d(e){e&&d(l),e&&d(u),e&&d(s),e&&d(t),e&&d(p),V(a,e),f=!1,i()}}}const S=m=>m.map(l=>l.number).join(",");function te(m,l,u){let s,n,t,p;w(m,W,h=>u(2,n=h)),w(m,X,h=>u(3,t=h)),w(m,Y,h=>u(4,p=h)),O(()=>{new Z("#copy").on("success",function(h){E()})});let r=!0;const f=(h,a,g)=>{let e=Array();return e.push(...j(a).slice(0,6)),a.length<6&&e.push(...j(g.filter(o=>!h.has(o))).slice(0,6-a.length)),e.sort((o,c)=>o.number-c.number)},i=()=>{u(0,r=!r),E(300)};return m.$$.update=()=>{m.$$.dirty&29&&u(1,s=(()=>{let h=Array.from(n),a=p.filter(o=>!t.has(o)).filter(o=>!n.has(o)),g=Array(),e=new Set;for(let o=0;o<5;o++){let c=f(e,h,a);c.forEach(k=>e.add(k)),g.push(c)}return g})())},[r,s,n,t,p,i]}class ie extends T{constructor(l){super(),$(this,l,te,ee,J,{})}}export{ie as default};
