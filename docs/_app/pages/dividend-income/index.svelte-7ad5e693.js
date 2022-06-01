import{S as jt,i as kt,s as Vt,e as r,t as p,k as f,c as d,a as u,h as v,d as i,m as _,b as o,g as fe,G as e,j as ve,F as Gt,V as wt,R as W,W as qe,O as ae,T as X,E as Ft,X as zt,P as Mt,Y as Ht}from"../../chunks/index-24e30b88.js";import{b as Wt}from"../../chunks/env-6d58f0dd.js";import{l as V}from"../../chunks/common-191ff718.js";import{f as q}from"../../chunks/pureFunctionsAny.generated-2c69d3e9.js";import"../../chunks/_commonjsHelpers-7d66b65f.js";var Xt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,G=(a,n,h,t)=>{for(var P=t>1?void 0:t?Jt(n,h):n,D=a.length-1,R;D>=0;D--)(R=a[D])&&(P=(t?R(n,h,P):R(P))||P);return t&&P&&Xt(n,h,P),P};class Kt{constructor(){this.initAmount=6e4,this.round=36,this.roundType="monthly",this.roundAmount=300,this.rateOfReturn=6,this.dividendYield=3,this.dividendPeriod="month",this.dividendReinvestment=!0}getResults(){let n=Array();for(let h=0;h<this.round*(this.roundType=="yearly"?12:1);h++){let t=new j;t.round=h+1,t.principal=this.roundAmount,t.initAmount=this.initAmount,t.roundType=this.roundType,t.yearlyRateOfReturn=this.rateOfReturn/100,t.dividendYield=this.dividendYield/100,t.dividendPeriod=this.dividendPeriod,t.dividendReinvestment=this.dividendReinvestment,t.results=n,n.push(t)}return n}}class j{constructor(){this.round=0,this.principal=0,this.initAmount=0,this.roundType="",this.yearlyRateOfReturn=0,this.dividendYield=0,this.dividendPeriod="",this.dividendReinvestment=!1,this.results=[]}get index(){return this.round-1}get preResult(){return this.index==0?null:this.results[this.index-1]}get accumulatedPrincipal(){if(this.preResult==null)return this.initAmount+this.principal;if(this.roundType=="monthly")return this.preResult.accumulatedPrincipal+this.principal;if(this.roundType=="yearly")return this.round%12-1==0?this.preResult.accumulatedPrincipal+this.principal:this.preResult.accumulatedPrincipal;throw`\uC798\uBABB\uB41C \uD22C\uC790\uC8FC\uAE30, ${this.dividendPeriod}`}get balance(){if(this.preResult==null)return this.accumulatedPrincipal*(this.rateOfReturn+1);let n=this.dividendReinvestment?this.preResult.dividend:0;if(this.roundType=="monthly")return(this.preResult.balance+this.principal)*(this.rateOfReturn+1)+n;if(this.roundType=="yearly")return this.round%12-1==0?(console.log(1),(this.preResult.balance+this.principal)*(this.rateOfReturn+1)+n):this.preResult.balance*(this.rateOfReturn+1)+n;throw`\uC798\uBABB\uB41C \uD22C\uC790\uC8FC\uAE30, ${this.dividendPeriod}`}get rateOfReturn(){return(1+this.yearlyRateOfReturn)**(1/12)-1}get investmentRateOfReturn(){return this.balance/this.accumulatedPrincipal-1}get totalRateOfReturn(){return this.dividendReinvestment?this.investmentRateOfReturn:(this.balance+this.dividend)/this.accumulatedPrincipal-1}get periodDividendYield(){if(this.dividendPeriod=="month")return this.dividendYield/12;if(this.dividendPeriod=="quarter")return this.dividendYield/4;if(this.dividendPeriod=="half")return this.dividendYield/2;if(this.dividendPeriod=="year")return this.dividendYield;throw`\uC798\uBABB\uB41C \uBC30\uB2F9\uC8FC\uAE30, ${this.dividendPeriod}`}get yearlyDividendYield(){let n=this.dividend/this.accumulatedPrincipal*100;if(this.dividendPeriod=="month")return n*12;if(this.dividendPeriod=="quarter")return n*4;if(this.dividendPeriod=="half")return n*2;if(this.dividendPeriod=="year")return n;throw`\uC798\uBABB\uB41C \uBC30\uB2F9\uC8FC\uAE30, ${this.dividendPeriod}`}get dividend(){if(this.dividendPeriod=="month")return this.balance*this.periodDividendYield;if(this.dividendPeriod=="quarter")return this.round%3==0?this.balance*this.periodDividendYield:0;if(this.dividendPeriod=="half")return this.round%6==0?this.balance*this.periodDividendYield:0;if(this.dividendPeriod=="year")return this.round%12==0?this.balance*this.periodDividendYield:0;throw`\uC798\uBABB\uB41C \uBC30\uB2F9\uC8FC\uAE30, ${this.dividendPeriod}`}get accumulatedDividend(){return this.preResult==null?this.dividend:this.preResult.accumulatedDividend+this.dividend}}G([V],j.prototype,"index",1);G([V],j.prototype,"preResult",1);G([V],j.prototype,"accumulatedPrincipal",1);G([V],j.prototype,"balance",1);G([V],j.prototype,"rateOfReturn",1);G([V],j.prototype,"investmentRateOfReturn",1);G([V],j.prototype,"totalRateOfReturn",1);G([V],j.prototype,"periodDividendYield",1);G([V],j.prototype,"yearlyDividendYield",1);G([V],j.prototype,"dividend",1);G([V],j.prototype,"accumulatedDividend",1);function Ut(a,n,h){const t=a.slice();return t[9]=n[h],t}function qt(a){let n,h,t=a[9].round+"",P,D,R,c=q(a[9].accumulatedPrincipal,2).toLocaleString()+"",L,J,k,b=q(a[9].balance,2).toLocaleString()+"",te,z,K,Q=q(a[9].dividend,2).toLocaleString()+"",C,se,F,Z=q(a[9].accumulatedDividend,2).toLocaleString()+"",ie,H,T,Y=q(a[9].yearlyDividendYield,2).toLocaleString()+"",ne,U,$,x=q(a[9].totalRateOfReturn*100,2).toLocaleString()+"",B,he;return{c(){n=r("tr"),h=r("th"),P=p(t),D=f(),R=r("td"),L=p(c),J=f(),k=r("td"),te=p(b),z=f(),K=r("td"),C=p(Q),se=f(),F=r("td"),ie=p(Z),H=f(),T=r("td"),ne=p(Y),U=f(),$=r("td"),B=p(x),he=f(),this.h()},l(m){n=d(m,"TR",{});var s=u(n);h=d(s,"TH",{scope:!0});var _e=u(h);P=v(_e,t),_e.forEach(i),D=_(s),R=d(s,"TD",{});var I=u(R);L=v(I,c),I.forEach(i),J=_(s),k=d(s,"TD",{});var me=u(k);te=v(me,b),me.forEach(i),z=_(s),K=d(s,"TD",{});var M=u(K);C=v(M,Q),M.forEach(i),se=_(s),F=d(s,"TD",{});var Re=u(F);ie=v(Re,Z),Re.forEach(i),H=_(s),T=d(s,"TD",{});var S=u(T);ne=v(S,Y),S.forEach(i),U=_(s),$=d(s,"TD",{});var Ee=u($);B=v(Ee,x),Ee.forEach(i),he=_(s),s.forEach(i),this.h()},h(){o(h,"scope","row")},m(m,s){fe(m,n,s),e(n,h),e(h,P),e(n,D),e(n,R),e(R,L),e(n,J),e(n,k),e(k,te),e(n,z),e(n,K),e(K,C),e(n,se),e(n,F),e(F,ie),e(n,H),e(n,T),e(T,ne),e(n,U),e(n,$),e($,B),e(n,he)},p(m,s){s&1&&t!==(t=m[9].round+"")&&ve(P,t),s&1&&c!==(c=q(m[9].accumulatedPrincipal,2).toLocaleString()+"")&&ve(L,c),s&1&&b!==(b=q(m[9].balance,2).toLocaleString()+"")&&ve(te,b),s&1&&Q!==(Q=q(m[9].dividend,2).toLocaleString()+"")&&ve(C,Q),s&1&&Z!==(Z=q(m[9].accumulatedDividend,2).toLocaleString()+"")&&ve(ie,Z),s&1&&Y!==(Y=q(m[9].yearlyDividendYield,2).toLocaleString()+"")&&ve(ne,Y),s&1&&x!==(x=q(m[9].totalRateOfReturn*100,2).toLocaleString()+"")&&ve(B,x)},d(m){m&&i(n)}}}function Qt(a){let n,h,t,P,D,R,c,L,J,k,b,te,z,K,Q,C,se,F,Z,ie,H,T,Y,ne,U,$,x,B,he,m,s,_e,I,me,M,Re,S,Ee,re,ke,ee,ye,Ve,Ge,N,de,ze,le,Me,oe,We,ue,Xe,Ne,ce,Le,pe,Ye,A,Pe,Je,Ke,be,Qe,Ze,Te,$e,xe,Oe,et,tt,Ae,it,nt,ge,rt,dt,Ce,lt,ot,Be,ut,pt;document.title=n=je;let De=a[0].getResults(),g=[];for(let l=0;l<De.length;l+=1)g[l]=qt(Ut(a,De,l));return{c(){h=f(),t=r("h1"),P=p(je),D=f(),R=r("section"),c=r("form"),L=r("label"),J=p("\uCD08\uAE30 \uD22C\uC790\uAE08(\uB9CC\uC6D0)"),k=f(),b=r("input"),te=f(),z=r("label"),K=p("\uD22C\uC790 \uD69F\uC218(\uD68C)"),Q=f(),C=r("input"),se=f(),F=r("label"),Z=p("\uB9E4\uD68C \uD22C\uC790\uAE08(\uB9CC\uC6D0)"),ie=f(),H=r("div"),T=r("select"),Y=r("option"),ne=p("\uB9E4\uB144"),U=r("option"),$=p("\uB9E4\uC6D4"),x=f(),B=r("input"),he=f(),m=r("div"),s=r("label"),_e=p("\uD22C\uC790 \uC218\uC775\uB960(%) "),I=r("input"),me=f(),M=r("label"),Re=p("\uBC30\uB2F9 \uC218\uC775\uB960(%) "),S=r("input"),Ee=f(),re=r("label"),ke=p(`\uBC30\uB2F9\uC8FC\uAE30
            (`),ee=r("input"),ye=r("label"),Ve=p("\uC7AC\uD22C\uC790)"),Ge=f(),N=r("select"),de=r("option"),ze=p("\uC5F0\uBC30\uB2F9"),le=r("option"),Me=p("\uBC18\uAE30\uBC30\uB2F9"),oe=r("option"),We=p("\uBD84\uAE30\uBC30\uB2F9"),ue=r("option"),Xe=p("\uC6D4\uBC30\uB2F9"),Ne=f(),ce=r("section"),Le=r("figure"),pe=r("table"),Ye=r("thead"),A=r("tr"),Pe=r("th"),Je=p("\uAC1C\uC6D4"),Ke=f(),be=r("th"),Qe=p("\uC6D0\uAE08"),Ze=f(),Te=r("th"),$e=p("\uD22C\uC790 \uC790\uC0B0"),xe=f(),Oe=r("th"),et=p("\uBC30\uB2F9\uAE08"),tt=f(),Ae=r("th"),it=p("\uB204\uC801 \uBC30\uB2F9\uAE08"),nt=f(),ge=r("th"),rt=p("\uBC30\uB2F9 \uC5F0\uC218\uC775\uB960"),dt=f(),Ce=r("th"),lt=p("\uCD1D \uC218\uC775\uB960"),ot=f(),Be=r("tbody");for(let l=0;l<g.length;l+=1)g[l].c();this.h()},l(l){Gt('[data-svelte="svelte-1uo06u1"]',document.head).forEach(i),h=_(l),t=d(l,"H1",{});var y=u(t);P=v(y,je),y.forEach(i),D=_(l),R=d(l,"SECTION",{id:!0});var Ie=u(R);c=d(Ie,"FORM",{});var O=u(c);L=d(O,"LABEL",{for:!0,class:!0});var vt=u(L);J=v(vt,"\uCD08\uAE30 \uD22C\uC790\uAE08(\uB9CC\uC6D0)"),vt.forEach(i),k=_(O),b=d(O,"INPUT",{type:!0,name:!0,id:!0}),te=_(O),z=d(O,"LABEL",{for:!0});var ft=u(z);K=v(ft,"\uD22C\uC790 \uD69F\uC218(\uD68C)"),ft.forEach(i),Q=_(O),C=d(O,"INPUT",{type:!0,name:!0,id:!0}),se=_(O),F=d(O,"LABEL",{for:!0});var _t=u(F);Z=v(_t,"\uB9E4\uD68C \uD22C\uC790\uAE08(\uB9CC\uC6D0)"),_t.forEach(i),ie=_(O),H=d(O,"DIV",{class:!0});var we=u(H);T=d(we,"SELECT",{name:!0,id:!0});var at=u(T);Y=d(at,"OPTION",{});var mt=u(Y);ne=v(mt,"\uB9E4\uB144"),mt.forEach(i),U=d(at,"OPTION",{});var Rt=u(U);$=v(Rt,"\uB9E4\uC6D4"),Rt.forEach(i),at.forEach(i),x=_(we),B=d(we,"INPUT",{type:!0,name:!0,id:!0}),we.forEach(i),he=_(O),m=d(O,"DIV",{class:!0});var Fe=u(m);s=d(Fe,"LABEL",{for:!0});var st=u(s);_e=v(st,"\uD22C\uC790 \uC218\uC775\uB960(%) "),I=d(st,"INPUT",{type:!0,name:!0,id:!0,step:!0}),st.forEach(i),me=_(Fe),M=d(Fe,"LABEL",{for:!0});var ht=u(M);Re=v(ht,"\uBC30\uB2F9 \uC218\uC775\uB960(%) "),S=d(ht,"INPUT",{type:!0,name:!0,id:!0,step:!0}),ht.forEach(i),Fe.forEach(i),Ee=_(O),re=d(O,"LABEL",{for:!0});var He=u(re);ke=v(He,`\uBC30\uB2F9\uC8FC\uAE30
            (`),ee=d(He,"INPUT",{type:!0,id:!0,name:!0}),ye=d(He,"LABEL",{for:!0});var Et=u(ye);Ve=v(Et,"\uC7AC\uD22C\uC790)"),Et.forEach(i),He.forEach(i),Ge=_(O),N=d(O,"SELECT",{name:!0,id:!0});var Se=u(N);de=d(Se,"OPTION",{});var yt=u(de);ze=v(yt,"\uC5F0\uBC30\uB2F9"),yt.forEach(i),le=d(Se,"OPTION",{});var Pt=u(le);Me=v(Pt,"\uBC18\uAE30\uBC30\uB2F9"),Pt.forEach(i),oe=d(Se,"OPTION",{});var bt=u(oe);We=v(bt,"\uBD84\uAE30\uBC30\uB2F9"),bt.forEach(i),ue=d(Se,"OPTION",{});var Tt=u(ue);Xe=v(Tt,"\uC6D4\uBC30\uB2F9"),Tt.forEach(i),Se.forEach(i),O.forEach(i),Ie.forEach(i),Ne=_(l),ce=d(l,"SECTION",{id:!0});var Ot=u(ce);Le=d(Ot,"FIGURE",{});var At=u(Le);pe=d(At,"TABLE",{});var Ue=u(pe);Ye=d(Ue,"THEAD",{});var gt=u(Ye);A=d(gt,"TR",{});var w=u(A);Pe=d(w,"TH",{scope:!0});var Ct=u(Pe);Je=v(Ct,"\uAC1C\uC6D4"),Ct.forEach(i),Ke=_(w),be=d(w,"TH",{scope:!0});var Bt=u(be);Qe=v(Bt,"\uC6D0\uAE08"),Bt.forEach(i),Ze=_(w),Te=d(w,"TH",{scope:!0});var Dt=u(Te);$e=v(Dt,"\uD22C\uC790 \uC790\uC0B0"),Dt.forEach(i),xe=_(w),Oe=d(w,"TH",{scope:!0});var Lt=u(Oe);et=v(Lt,"\uBC30\uB2F9\uAE08"),Lt.forEach(i),tt=_(w),Ae=d(w,"TH",{scope:!0});var Yt=u(Ae);it=v(Yt,"\uB204\uC801 \uBC30\uB2F9\uAE08"),Yt.forEach(i),nt=_(w),ge=d(w,"TH",{scope:!0});var It=u(ge);rt=v(It,"\uBC30\uB2F9 \uC5F0\uC218\uC775\uB960"),It.forEach(i),dt=_(w),Ce=d(w,"TH",{scope:!0});var St=u(Ce);lt=v(St,"\uCD1D \uC218\uC775\uB960"),St.forEach(i),w.forEach(i),gt.forEach(i),ot=_(Ue),Be=d(Ue,"TBODY",{});var Nt=u(Be);for(let ct=0;ct<g.length;ct+=1)g[ct].l(Nt);Nt.forEach(i),Ue.forEach(i),At.forEach(i),Ot.forEach(i),this.h()},h(){o(L,"for","initAmount"),o(L,"class","amount"),o(b,"type","number"),o(b,"name","initAmount"),o(b,"id","initAmount"),o(z,"for","roundAmount"),o(C,"type","number"),o(C,"name","round"),o(C,"id","round"),o(F,"for","roundAmount"),Y.__value="yearly",Y.value=Y.__value,U.__value="monthly",U.value=U.__value,o(T,"name","roundType"),o(T,"id","roundType"),a[0].roundType===void 0&&wt(()=>a[3].call(T)),o(B,"type","number"),o(B,"name","roundAmount"),o(B,"id","roundAmount"),o(H,"class","two-input"),o(I,"type","number"),o(I,"name","rateOfReturn"),o(I,"id","rateOfReturn"),o(I,"step","0.1"),o(s,"for","rateOfReturn"),o(S,"type","number"),o(S,"name","dividendYield"),o(S,"id","dividendYield"),o(S,"step","0.1"),o(M,"for","dividendYield"),o(m,"class","two-input"),o(ee,"type","checkbox"),o(ee,"id","dividendReinvestment"),o(ee,"name","dividendReinvestment"),o(ye,"for","dividendReinvestment"),o(re,"for","dividendPeriod"),de.__value="year",de.value=de.__value,le.__value="half",le.value=le.__value,oe.__value="quarter",oe.value=oe.__value,ue.__value="month",ue.value=ue.__value,o(N,"name","dividendPeriod"),o(N,"id","dividendPeriod"),a[0].dividendPeriod===void 0&&wt(()=>a[8].call(N)),o(R,"id","form"),o(Pe,"scope","col"),o(be,"scope","col"),o(Te,"scope","col"),o(Oe,"scope","col"),o(Ae,"scope","col"),o(ge,"scope","col"),o(Ce,"scope","col"),o(ce,"id","results")},m(l,E){fe(l,h,E),fe(l,t,E),e(t,P),fe(l,D,E),fe(l,R,E),e(R,c),e(c,L),e(L,J),e(c,k),e(c,b),W(b,a[0].initAmount),e(c,te),e(c,z),e(z,K),e(c,Q),e(c,C),W(C,a[0].round),e(c,se),e(c,F),e(F,Z),e(c,ie),e(c,H),e(H,T),e(T,Y),e(Y,ne),e(T,U),e(U,$),qe(T,a[0].roundType),e(H,x),e(H,B),W(B,a[0].roundAmount),e(c,he),e(c,m),e(m,s),e(s,_e),e(s,I),W(I,a[0].rateOfReturn),e(m,me),e(m,M),e(M,Re),e(M,S),W(S,a[0].dividendYield),e(c,Ee),e(c,re),e(re,ke),e(re,ee),ee.checked=a[0].dividendReinvestment,e(re,ye),e(ye,Ve),e(c,Ge),e(c,N),e(N,de),e(de,ze),e(N,le),e(le,Me),e(N,oe),e(oe,We),e(N,ue),e(ue,Xe),qe(N,a[0].dividendPeriod),fe(l,Ne,E),fe(l,ce,E),e(ce,Le),e(Le,pe),e(pe,Ye),e(Ye,A),e(A,Pe),e(Pe,Je),e(A,Ke),e(A,be),e(be,Qe),e(A,Ze),e(A,Te),e(Te,$e),e(A,xe),e(A,Oe),e(Oe,et),e(A,tt),e(A,Ae),e(Ae,it),e(A,nt),e(A,ge),e(ge,rt),e(A,dt),e(A,Ce),e(Ce,lt),e(pe,ot),e(pe,Be);for(let y=0;y<g.length;y+=1)g[y].m(Be,null);ut||(pt=[ae(b,"input",a[1]),ae(C,"input",a[2]),ae(T,"change",a[3]),ae(B,"input",a[4]),ae(I,"input",a[5]),ae(S,"input",a[6]),ae(ee,"change",a[7]),ae(N,"change",a[8])],ut=!0)},p(l,[E]){if(E&0&&n!==(n=je)&&(document.title=n),E&1&&X(b.value)!==l[0].initAmount&&W(b,l[0].initAmount),E&1&&X(C.value)!==l[0].round&&W(C,l[0].round),E&1&&qe(T,l[0].roundType),E&1&&X(B.value)!==l[0].roundAmount&&W(B,l[0].roundAmount),E&1&&X(I.value)!==l[0].rateOfReturn&&W(I,l[0].rateOfReturn),E&1&&X(S.value)!==l[0].dividendYield&&W(S,l[0].dividendYield),E&1&&(ee.checked=l[0].dividendReinvestment),E&1&&qe(N,l[0].dividendPeriod),E&1){De=l[0].getResults();let y;for(y=0;y<De.length;y+=1){const Ie=Ut(l,De,y);g[y]?g[y].p(Ie,E):(g[y]=qt(Ie),g[y].c(),g[y].m(Be,null))}for(;y<g.length;y+=1)g[y].d(1);g.length=De.length}},i:Ft,o:Ft,d(l){l&&i(h),l&&i(t),l&&i(D),l&&i(R),l&&i(Ne),l&&i(ce),zt(g,l),ut=!1,Mt(pt)}}}const ni=Wt,ri=!0;let je="\uBC30\uB2F9 \uC218\uC775 \uACC4\uC0B0\uAE30";function Zt(a,n,h){let t=new Kt;function P(){t.initAmount=X(this.value),h(0,t)}function D(){t.round=X(this.value),h(0,t)}function R(){t.roundType=Ht(this),h(0,t)}function c(){t.roundAmount=X(this.value),h(0,t)}function L(){t.rateOfReturn=X(this.value),h(0,t)}function J(){t.dividendYield=X(this.value),h(0,t)}function k(){t.dividendReinvestment=this.checked,h(0,t)}function b(){t.dividendPeriod=Ht(this),h(0,t)}return[t,P,D,R,c,L,J,k,b]}class di extends jt{constructor(n){super(),kt(this,n,Zt,Qt,Vt,{})}}export{di as default,ri as prerender,ni as router};
