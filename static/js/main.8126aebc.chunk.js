(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(18),s=n.n(a),o=n(6),i=n(2),u=n.n(i),d=n(5),b=n(3),l=n(21),j=["cards"],h=Object({NODE_ENV:"production",PUBLIC_URL:"/Flashcard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:5000",O=new Headers;function f(e){e.cards;return Object(l.a)(e,j)}function x(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(u.a.mark((function e(t,n,c){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(c));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function p(){return(p=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(h,"/decks?_embed=cards"),e.next=3,x(n,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(u.a.mark((function e(t,n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"/decks"),r={method:"POST",headers:O,body:JSON.stringify(f(t)),signal:n},e.next=4,x(c,r,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(u.a.mark((function e(t,n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"/decks/").concat(t,"?_embed=cards"),e.next=3,x(c,{signal:n},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(u.a.mark((function e(t,n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:O,body:JSON.stringify(f(t)),signal:n},e.next=4,x(c,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(u.a.mark((function e(t,n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"/decks/").concat(t),r={method:"DELETE",signal:n},e.next=4,x(c,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t,n){return D.apply(this,arguments)}function D(){return(D=Object(d.a)(u.a.mark((function e(t,n,c){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(h,"/cards"),n.deckId=Number(t),a={method:"POST",headers:O,body:JSON.stringify(n),signal:c},e.next=5,x(r,a,n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return A.apply(this,arguments)}function A(){return(A=Object(d.a)(u.a.mark((function e(t,n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"/cards/").concat(t),e.next=3,x(c,{signal:n},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return F.apply(this,arguments)}function F(){return(F=Object(d.a)(u.a.mark((function e(t,n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"/cards/").concat(t.id),r={method:"PUT",headers:O,body:JSON.stringify(t)},e.next=4,x(c,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){return _.apply(this,arguments)}function _(){return(_=Object(d.a)(u.a.mark((function e(t,n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"/cards/").concat(t),r={method:"DELETE",signal:n},e.next=4,x(c,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O.append("Content-Type","application/json");var P=n(4),q=n(0),J=function(e){var t=e.crumbs,n=t.map((function(e,n){return n===t.length-1?Object(q.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:e},e+n):Object(q.jsx)("li",{className:"breadcrumb-item",children:Object(q.jsx)(P.b,{to:"#",children:e})},e+n)}));return Object(q.jsx)("nav",{"aria-label":"breadcrumb",children:Object(q.jsxs)("ol",{className:"breadcrumb",children:[Object(q.jsx)("li",{className:"breadcrumb-item",children:Object(q.jsx)(P.b,{to:"/",children:"Home"})}),n]})})},R=function(e){var t=e.handleSubmit,n=e.handleExit,c=e.front,r=e.setFront,a=e.back,s=e.setBack,o=e.buttonTextOne,i=e.buttonTextTwo;return Object(q.jsx)("form",{onSubmit:t,children:Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Front"}),Object(q.jsx)("textarea",{className:"form-control",type:"textarea",name:"front",value:c,placeholder:"Front side of card",onChange:function(e){r(e.target.value)},required:!0}),Object(q.jsx)("label",{className:"mx-1 my-1",children:"Back"}),Object(q.jsx)("textarea",{className:"form-control",name:"back",value:a,placeholder:"Back side of card",type:"textarea",onChange:function(e){s(e.target.value)},required:!0}),Object(q.jsxs)("div",{className:"buttons my-2",children:[Object(q.jsx)("button",{type:"button",className:"btn btn-secondary mx-1",onClick:n,children:o}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary",children:i})]})]})})},H=function(){var e=Object(c.useState)({name:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(b.a)(a,2),i=s[0],l=s[1],j=Object(c.useState)(""),h=Object(b.a)(j,2),O=h[0],f=h[1],x=Object(o.g)().deckId,m=Object(o.f)();Object(c.useEffect)((function(){var e=new AbortController;return y(x).then(r).catch((function(e){return console.log(e)})),e.abort()}),[x,r]);var p=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new AbortController,c=n.signal,e.next=5,E(x,{front:i,back:O},c);case 5:l(""),f("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{children:[Object(q.jsx)(J,{crumbs:[n.name,"Add Card"]}),Object(q.jsxs)("h2",{children:[n.name,": Add Card"]}),Object(q.jsx)(R,{handleSubmit:p,handleExit:function(){m.goBack()},front:i,setFront:l,back:O,setBack:f,buttonTextOne:"Done",buttonTextTwo:"Save"})]})},L=n(13),U=n(16),K=function(){var e=function(e){var t=Object(c.useState)(e),n=Object(b.a)(t,2),r=n[0],a=n[1];return[r,function(e){a(Object(U.a)(Object(U.a)({},r),{},Object(L.a)({},e.target.name,e.target.value)))}]}({name:"",description:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(o.f)(),s=function(){var e=Object(d.a)(u.a.mark((function e(t){var c,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=new AbortController,r=c.signal,e.next=5,v(n,r);case 5:s=e.sent,console.log({here:"here"}),a.push("/decks/".concat(s.id));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{children:[Object(q.jsx)(J,{crumbs:["Create Deck"]}),Object(q.jsx)("h2",{children:"Create Deck"}),Object(q.jsx)("form",{onSubmit:s,children:Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Name"}),Object(q.jsx)("input",{className:"form-control",type:"text",name:"name",value:n.name,placeholder:"Enter Deck Name",onChange:r,required:!0}),Object(q.jsx)("label",{className:"mx-1 my-1",children:"Description"}),Object(q.jsx)("textarea",{className:"form-control",name:"description",value:n.description,placeholder:"Brief Description of the deck",type:"textarea",onChange:r,required:!0}),Object(q.jsxs)("div",{className:"buttons my-2",children:[Object(q.jsx)("button",{type:"button",className:"btn btn-secondary mx-1",onClick:function(){a.push("/")},children:"Cancel"}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})]})},W=function(e){var t=e.deck,n=e.handleDelete;return Object(q.jsx)("div",{className:"card mb-1",children:Object(q.jsxs)("div",{className:"card-body",children:[Object(q.jsx)("h5",{className:"d-inline-block card-title",children:t.name}),Object(q.jsxs)("h6",{className:"d-inline-block card-subtitle text-muted float-right margin-top",children:[t.cards.length," cards"]}),Object(q.jsx)("p",{className:"card-text",children:t.description}),Object(q.jsx)(P.b,{to:"/decks/".concat(t.id),children:Object(q.jsx)("button",{type:"button",className:"btn btn-secondary mr-2",children:"View"})}),Object(q.jsx)(P.b,{to:"/decks/".concat(t.id,"/study"),children:Object(q.jsx)("button",{type:"button",className:"btn btn-primary mr-2",children:"Study"})}),Object(q.jsx)("button",{className:"btn btn-danger float-right margin-bottom",onClick:function(){return n(t.id)},children:"Delete"})]})},t.id)},V=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(o.g)().deckId,s=Object(o.f)(),i=function(e){window.confirm("Are you sure you want to delete?")?S(e)&&window.location.reload():s.push("/")};Object(c.useEffect)((function(){var e=new AbortController,t=e.signal;return function(e){return p.apply(this,arguments)}(a,t).then(r).catch((function(e){return console.log(e)})),e.abort()}),[a,r]);var u=n.map((function(e){return Object(q.jsx)(W,{deck:e,handleDelete:i},e.id)}));return Object(q.jsxs)("div",{children:[Object(q.jsx)(P.b,{to:"/decks/new",children:Object(q.jsx)("button",{type:"button",className:"btn btn-secondary btn mb-2",children:"+ Create Deck"})}),Object(q.jsx)("div",{children:u})]})},M=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(b.a)(a,2),i=s[0],l=s[1],j=Object(c.useState)(""),h=Object(b.a)(j,2),O=h[0],f=h[1],x=Object(o.g)(),m=x.deckId,p=x.cardId,v=Object(o.f)();Object(c.useEffect)((function(){var e=new AbortController;return y(m).then(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(t.name),e.next=3,T(p);case 3:n=e.sent,c=n.back,a=n.front,l(a),f(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)})),function(){return e.abort()}}),[m,p]);var k=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new AbortController,c=n.signal,e.next=5,I({id:p,front:i,back:O,deckId:parseInt(m)},c);case 5:v.goBack();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{children:[Object(q.jsx)(J,{crumbs:[n,"Edit Card ".concat(p)]}),Object(q.jsx)("h2",{children:"Edit Card"}),Object(q.jsx)(R,{handleSubmit:k,handleExit:function(){v.goBack()},front:i,setFront:l,back:O,setBack:f,buttonTextOne:"Cancel",buttonTextTwo:"Submit"})]})},Y=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(b.a)(a,2),i=s[0],l=s[1],j=Object(o.g)().deckId,h=Object(o.f)();Object(c.useEffect)((function(){var e=new AbortController;return y(j).then((function(e){r(e.name),l(e.description)})).catch((function(e){return console.log(e)})),e.abort()}),[j]);var O=function(){var e=Object(d.a)(u.a.mark((function e(t){var c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=new AbortController,r=c.signal,e.next=5,g({id:j,name:n,description:i},r);case 5:a=e.sent,h.push("/decks/".concat(a.id));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{children:[Object(q.jsx)(J,{crumbs:[n,"Edit Deck"]}),Object(q.jsx)("h2",{children:"Edit Deck"}),Object(q.jsx)("form",{onSubmit:O,children:Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Name"}),Object(q.jsx)("input",{className:"form-control",type:"text",name:"name",value:n,placeholder:"Enter Deck Name",onChange:function(e){return r(e.target.value)},required:!0}),Object(q.jsx)("label",{className:"mx-1 my-1",children:"Description"}),Object(q.jsx)("textarea",{className:"form-control",name:"description",value:i,placeholder:"Brief Description of the deck",type:"textarea",onChange:function(e){return l(e.target.value)},required:!0}),Object(q.jsxs)("div",{className:"buttons my-2",children:[Object(q.jsx)("button",{type:"button",className:"btn btn-secondary mx-1",onClick:function(){h.goBack()},children:"Cancel"}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})]})};var z=function(){return Object(q.jsx)("header",{className:"jumbotron bg-dark",children:Object(q.jsxs)("div",{className:"container text-white",children:[Object(q.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(q.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var G=function(){return Object(q.jsx)("div",{className:"NotFound",children:Object(q.jsx)("h1",{children:"Not Found"})})},Q=function(){var e=Object(c.useState)({name:"",cards:[]}),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({front:"",back:""}),s=Object(b.a)(a,2),i=s[0],u=s[1],d=Object(c.useState)(!1),l=Object(b.a)(d,2),j=l[0],h=l[1],O=Object(c.useState)(0),f=Object(b.a)(O,2),x=f[0],m=f[1],p=Object(o.g)().deckId,v=Object(o.f)();if(Object(c.useEffect)((function(){var e=new AbortController;return y(p).then(r).catch((function(e){return console.log(e)})),e.abort()}),[p,r]),Object(c.useEffect)((function(){n.cards.length>0&&u(n.cards[x])}),[n,x]),n.cards.length<=2)return Object(q.jsxs)("div",{children:[Object(q.jsx)(J,{crumbs:[n.name,"Study"]}),Object(q.jsxs)("h2",{children:[n.name," : Study"]}),Object(q.jsx)("h4",{children:"Not enough cards"}),Object(q.jsxs)("p",{children:["You need at least 3 cards to study. There are ",n.cards.length," ","cards in this deck."]}),Object(q.jsx)(P.b,{to:"/decks/".concat(p,"/cards/new"),children:Object(q.jsx)("button",{className:"btn btn-primary mr-2",children:"+ add cards"})})]});var k=Object(q.jsxs)("div",{className:"card-body",children:[Object(q.jsxs)("h5",{className:"card-title",children:["card ",x+1," of ",n.cards.length]}),Object(q.jsx)("p",{className:"card-text",children:i.front}),Object(q.jsx)("button",{type:"button",className:"btn btn-secondary mr-2",onClick:function(e){h(!0)},children:"Flip"})]}),N=Object(q.jsxs)("div",{className:"card-body",children:[Object(q.jsxs)("h5",{className:"card-title",children:["card ",x+1," of ",n.cards.length]}),Object(q.jsx)("p",{className:"card-text",children:i.back}),Object(q.jsx)("button",{type:"button",className:"btn btn-secondary mr-2",onClick:function(e){x+1!==n.cards.length?(m(x+1),u(n.cards[x+1]),h(!1)):window.confirm("Restart cards? \n Click 'cancel' to return to the home page.")?(m(0),h(!1)):v.push("/")},children:"Next"})]});return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(J,{crumbs:[n.name,"Study"]}),Object(q.jsxs)("h2",{children:["Study: ",n.name]}),Object(q.jsx)("div",{className:"card w-60",children:j?N:k})]})},X=function(e){var t=e.card,n=e.deckId,c=Object(o.f)(),r=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Are you sure you want to delete?",!0!==window.confirm("Are you sure you want to delete?")){e.next=10;break}return e.next=5,B(t.id);case 5:if(e.t0=e.sent,!e.t0){e.next=8;break}window.location.reload();case 8:e.next=11;break;case 10:c.push("/");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(q.jsx)("div",{children:Object(q.jsx)("div",{className:"card",children:Object(q.jsxs)("div",{className:"card-body container d-flex justify-content-between",children:[Object(q.jsx)("div",{className:"left-text col-6",children:Object(q.jsx)("p",{className:"card-text",children:t.front})}),Object(q.jsxs)("div",{className:"right-text col-6",children:[Object(q.jsx)("p",{className:"card-text",children:t.back}),Object(q.jsxs)("div",{className:"buttons",children:[Object(q.jsx)(P.b,{to:"".concat(n,"/cards/").concat(t.id,"/edit"),children:Object(q.jsx)("button",{type:"button",className:"btn btn-secondary float-right mr-2",children:"Edit"})}),Object(q.jsx)("button",{className:"btn btn-danger float-right mr-2",onClick:r,children:"Delete"})]})]})]})})})},Z=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({id:"",name:"",description:""}),s=Object(b.a)(a,2),i=s[0],u=s[1],d=(i.id,i.name),l=i.description,j=Object(o.g)().deckId,h=Object(o.f)(),O=function(e){window.confirm("Are you sure you want to delete?")&&(S(j),h.push("/"))};return Object(c.useEffect)((function(){var e=new AbortController;return y(j).then(u).catch((function(e){return console.log(e)})),e.abort()}),[j,u]),Object(c.useEffect)((function(){var e=new AbortController;return i.cards&&r(i.cards),e.abort()}),[j,r,i]),Object(q.jsxs)("div",{className:"mb-2",children:[Object(q.jsx)(J,{crumbs:[d]}),Object(q.jsx)("h3",{children:d}),Object(q.jsx)("p",{children:l}),Object(q.jsx)(P.b,{to:"/decks/".concat(j,"/edit"),children:Object(q.jsx)("button",{className:"btn btn-secondary mr-2",children:"Edit"})}),Object(q.jsx)(P.b,{to:"/decks/".concat(j,"/study"),children:Object(q.jsx)("button",{className:"btn btn-secondary mr-2",children:"Study"})}),Object(q.jsx)(P.b,{to:"/decks/".concat(j,"/cards/new"),children:Object(q.jsx)("button",{className:"btn btn-secondary mr-2",children:"Add Cards"})}),Object(q.jsx)("button",{className:"btn btn-danger float-right margin-bottom",onClick:function(e){e.preventDefault(),O()},children:"Delete"}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{}),Object(q.jsx)("h4",{children:"Cards"}),Object(q.jsx)("ul",{className:"list-group",children:n.length&&n.map((function(e){return Object(q.jsx)(X,{card:e,deckId:j,handleDelete:O},e.id)}))})]})},$=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(z,{}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)(o.c,{children:[Object(q.jsx)(o.a,{exact:!0,path:"/",children:Object(q.jsx)(V,{})}),Object(q.jsx)(o.a,{exact:!0,path:"/decks/new",children:Object(q.jsx)(K,{})}),Object(q.jsx)(o.a,{exact:!0,path:"/decks/:deckId",children:Object(q.jsx)(Z,{})}),Object(q.jsx)(o.a,{path:"/decks/:deckId/edit",children:Object(q.jsx)(Y,{})}),Object(q.jsx)(o.a,{path:"/decks/:deckId/study",children:Object(q.jsx)(Q,{})}),Object(q.jsx)(o.a,{path:"/decks/:deckId/cards/new",children:Object(q.jsx)(H,{})}),Object(q.jsx)(o.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(q.jsx)(M,{})}),Object(q.jsx)(o.a,{children:Object(q.jsx)(G,{})})]})})]})};s.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(P.a,{basename:"Flashcard",children:Object(q.jsx)($,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8126aebc.chunk.js.map