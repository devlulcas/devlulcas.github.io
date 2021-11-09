import{S as _e,i as me,s as ge,e as d,t as se,c as p,a as v,g as ae,d as c,b as t,f as ie,E as r,h as ve,k as S,n as L,N as $e,K as je,O as we,B as le,j as W,M as be,m as X,o as Y,p as oe,q as ce,x as Z,u as ee,v as te}from"../chunks/vendor-e7364d2c.js";function Ee(n,a,s){const o=n.slice();return o[1]=a[s],o}function Ie(n){let a,s=n[1]+"",o;return{c(){a=d("li"),o=se(s),this.h()},l(f){a=p(f,"LI",{class:!0});var $=v(a);o=ae($,s),$.forEach(c),this.h()},h(){t(a,"class","svelte-i25wx0")},m(f,$){ie(f,a,$),r(a,o)},p(f,$){$&1&&s!==(s=f[1]+"")&&ve(o,s)},d(f){f&&c(a)}}}function Ue(n){let a,s,o,f,$,A,g,J,m,j,T=n[0].name+"",k,C,U,E,V,K,P=n[0].description+"",D,M,I,G,N,H,B,w,q,R,O,y,e,b,_,x=n[0].techs,h=[];for(let l=0;l<x.length;l+=1)h[l]=Ie(Ee(n,x,l));return{c(){a=d("div"),s=d("div"),o=d("img"),A=S(),g=d("ul");for(let l=0;l<h.length;l+=1)h[l].c();J=S(),m=d("section"),j=d("h2"),k=se(T),C=S(),U=d("div"),E=d("p"),V=d("i"),K=S(),D=se(P),M=S(),I=d("a"),G=d("i"),N=se(`
				Live`),B=S(),w=d("a"),q=d("i"),R=se(`
				Github`),y=S(),e=d("a"),b=d("i"),this.h()},l(l){a=p(l,"DIV",{class:!0});var u=v(a);s=p(u,"DIV",{class:!0});var i=v(s);o=p(i,"IMG",{src:!0,alt:!0,class:!0}),A=L(i),g=p(i,"UL",{class:!0});var z=v(g);for(let pe=0;pe<h.length;pe+=1)h[pe].l(z);z.forEach(c),i.forEach(c),J=L(u),m=p(u,"SECTION",{class:!0});var F=v(m);j=p(F,"H2",{class:!0});var he=v(j);k=ae(he,T),he.forEach(c),C=L(F),U=p(F,"DIV",{class:!0});var Q=v(U);E=p(Q,"P",{class:!0});var ne=v(E);V=p(ne,"I",{class:!0}),v(V).forEach(c),K=L(ne),D=ae(ne,P),ne.forEach(c),M=L(Q),I=p(Q,"A",{href:!0,target:!0,rel:!0,class:!0});var fe=v(I);G=p(fe,"I",{class:!0}),v(G).forEach(c),N=ae(fe,`
				Live`),fe.forEach(c),B=L(Q),w=p(Q,"A",{href:!0,target:!0,rel:!0,class:!0});var de=v(w);q=p(de,"I",{class:!0}),v(q).forEach(c),R=ae(de,`
				Github`),de.forEach(c),Q.forEach(c),y=L(F),e=p(F,"A",{class:!0,href:!0,title:!0});var ue=v(e);b=p(ue,"I",{class:!0}),v(b).forEach(c),ue.forEach(c),F.forEach(c),u.forEach(c),this.h()},h(){$e(o.src,f=n[0].previewImage.src)||t(o,"src",f),t(o,"alt",$=n[0].previewImage.alt),t(o,"class","svelte-i25wx0"),t(g,"class","svelte-i25wx0"),t(s,"class","image-container svelte-i25wx0"),t(j,"class","svelte-i25wx0"),t(V,"class","fa fa-code svelte-i25wx0"),t(E,"class","svelte-i25wx0"),t(G,"class","fa fa-code svelte-i25wx0"),t(I,"href",H=n[0].urls.liveUrl),t(I,"target","_blank"),t(I,"rel","noopener noreferrer"),t(I,"class","svelte-i25wx0"),t(q,"class","fa fa-code svelte-i25wx0"),t(w,"href",O=n[0].urls.codeUrl),t(w,"target","_blank"),t(w,"rel","noopener noreferrer"),t(w,"class","svelte-i25wx0"),t(U,"class","information-container"),t(b,"class","fas fa-ellipsis-h svelte-i25wx0"),t(e,"class","more-info svelte-i25wx0"),t(e,"href",_=n[0].urls.moreInfoUrl),t(e,"title","More information"),t(m,"class","svelte-i25wx0"),t(a,"class","card svelte-i25wx0")},m(l,u){ie(l,a,u),r(a,s),r(s,o),r(s,A),r(s,g);for(let i=0;i<h.length;i+=1)h[i].m(g,null);r(a,J),r(a,m),r(m,j),r(j,k),r(m,C),r(m,U),r(U,E),r(E,V),r(E,K),r(E,D),r(U,M),r(U,I),r(I,G),r(I,N),r(U,B),r(U,w),r(w,q),r(w,R),r(m,y),r(m,e),r(e,b)},p(l,[u]){if(u&1&&!$e(o.src,f=l[0].previewImage.src)&&t(o,"src",f),u&1&&$!==($=l[0].previewImage.alt)&&t(o,"alt",$),u&1){x=l[0].techs;let i;for(i=0;i<x.length;i+=1){const z=Ee(l,x,i);h[i]?h[i].p(z,u):(h[i]=Ie(z),h[i].c(),h[i].m(g,null))}for(;i<h.length;i+=1)h[i].d(1);h.length=x.length}u&1&&T!==(T=l[0].name+"")&&ve(k,T),u&1&&P!==(P=l[0].description+"")&&ve(D,P),u&1&&H!==(H=l[0].urls.liveUrl)&&t(I,"href",H),u&1&&O!==(O=l[0].urls.codeUrl)&&t(w,"href",O),u&1&&_!==(_=l[0].urls.moreInfoUrl)&&t(e,"href",_)},i:je,o:je,d(l){l&&c(a),we(h,l)}}}function Ve(n,a,s){let{project:o={name:"Project",description:"A good one",previewImage:{src:"/images/heroImage.jpg",description:"my cool project"},urls:{liveUrl:"https://amazing.net",codeUrl:"https://amazing/code.net",moreInfoUrl:"/aboutthe"},techs:["magic","love","code"]}}=a;return n.$$set=f=>{"project"in f&&s(0,o=f.project)},[o]}class re extends _e{constructor(a){super();me(this,a,Ve,Ue,ge,{project:0})}}function De(n){let a,s,o,f,$,A,g,J,m,j,T,k,C,U,E,V,K,P,D,M;f=new re({props:{project:n[0].portfolio}});const I=[n[0].portfolio];let G={};for(let e=0;e<I.length;e+=1)G=le(G,I[e]);g=new re({props:G});const N=[n[0].portfolio];let H={};for(let e=0;e<N.length;e+=1)H=le(H,N[e]);j=new re({props:H});const B=[n[0].portfolio];let w={};for(let e=0;e<B.length;e+=1)w=le(w,B[e]);C=new re({props:w});const q=[n[0].portfolio];let R={};for(let e=0;e<q.length;e+=1)R=le(R,q[e]);V=new re({props:R});const O=[n[0].portfolio];let y={};for(let e=0;e<O.length;e+=1)y=le(y,O[e]);return D=new re({props:y}),{c(){a=S(),s=d("div"),o=d("div"),W(f.$$.fragment),$=S(),A=d("div"),W(g.$$.fragment),J=S(),m=d("div"),W(j.$$.fragment),T=S(),k=d("div"),W(C.$$.fragment),U=S(),E=d("div"),W(V.$$.fragment),K=S(),P=d("div"),W(D.$$.fragment),this.h()},l(e){be('[data-svelte="svelte-13ytum0"]',document.head).forEach(c),a=L(e),s=p(e,"DIV",{class:!0});var _=v(s);o=p(_,"DIV",{class:!0});var x=v(o);X(f.$$.fragment,x),x.forEach(c),$=L(_),A=p(_,"DIV",{class:!0});var h=v(A);X(g.$$.fragment,h),h.forEach(c),J=L(_),m=p(_,"DIV",{class:!0});var l=v(m);X(j.$$.fragment,l),l.forEach(c),T=L(_),k=p(_,"DIV",{class:!0});var u=v(k);X(C.$$.fragment,u),u.forEach(c),U=L(_),E=p(_,"DIV",{class:!0});var i=v(E);X(V.$$.fragment,i),i.forEach(c),K=L(_),P=p(_,"DIV",{class:!0});var z=v(P);X(D.$$.fragment,z),z.forEach(c),_.forEach(c),this.h()},h(){document.title="DEVLULCAS - PROJECTS",t(o,"class","card svelte-1dbx7ea"),t(A,"class","card svelte-1dbx7ea"),t(m,"class","card svelte-1dbx7ea"),t(k,"class","card svelte-1dbx7ea"),t(E,"class","card svelte-1dbx7ea"),t(P,"class","card svelte-1dbx7ea"),t(s,"class","container svelte-1dbx7ea")},m(e,b){ie(e,a,b),ie(e,s,b),r(s,o),Y(f,o,null),r(s,$),r(s,A),Y(g,A,null),r(s,J),r(s,m),Y(j,m,null),r(s,T),r(s,k),Y(C,k,null),r(s,U),r(s,E),Y(V,E,null),r(s,K),r(s,P),Y(D,P,null),M=!0},p(e,[b]){const _=b&1?oe(I,[ce(e[0].portfolio)]):{};g.$set(_);const x=b&1?oe(N,[ce(e[0].portfolio)]):{};j.$set(x);const h=b&1?oe(B,[ce(e[0].portfolio)]):{};C.$set(h);const l=b&1?oe(q,[ce(e[0].portfolio)]):{};V.$set(l);const u=b&1?oe(O,[ce(e[0].portfolio)]):{};D.$set(u)},i(e){M||(Z(f.$$.fragment,e),Z(g.$$.fragment,e),Z(j.$$.fragment,e),Z(C.$$.fragment,e),Z(V.$$.fragment,e),Z(D.$$.fragment,e),M=!0)},o(e){ee(f.$$.fragment,e),ee(g.$$.fragment,e),ee(j.$$.fragment,e),ee(C.$$.fragment,e),ee(V.$$.fragment,e),ee(D.$$.fragment,e),M=!1},d(e){e&&c(a),e&&c(s),te(f),te(g),te(j),te(C),te(V),te(D)}}}function Se(n){return[{portfolio:{name:"portfolio",description:"This site",previewImage:{src:"/images/heroImage.jpg",description:"my cool project"},urls:{liveUrl:"https://devlulcas.github.io",codeUrl:"https://github.com/devlulcas/devlulcas.github.io",moreInfoUrl:"https://google.com"},techs:["Svelte","HTML","CSS","JS","SVELTEKIT","GH PAGES"]}}]}class Ce extends _e{constructor(a){super();me(this,a,Se,De,ge,{})}}export{Ce as default};
