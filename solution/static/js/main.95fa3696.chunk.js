(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{160:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),i=n(8),o=n.n(i),s=n(14),u=n(20),l=n(21),d=n(10),j=n(7),b=n(5),O=n(22),p=n.n(O),h=n(30),m=(n(162),n(75),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTHDOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DATABASEURL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGEBUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGINGSENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APPID});h.a.initializeApp(m);var f=h.a.firestore(),_=new h.a.auth.GoogleAuthProvider,v=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dthaljq5k/upload",(n=new FormData).append("upload_preset","journal-app"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dthaljq5k/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="[Auth] Login",S="[Auth] Logout",y="[UI] Set Error",E="[UI] Remove Error",N="[UI] Start loading",w="[UI] Start Finish",T="[Notes] New note",C="[Notes] Set active note",A="[Notes] Load notes",P="[Notes] Update note save",R="[Notes] Delete note",D="[Notes] Logout Cleaning",k=function(e,t){return{type:C,payload:Object(b.a)({id:e},t)}},I=function(e,t){return{type:T,payload:Object(b.a)({id:e},t)}},L=function(e){return function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:a=t.sent,n(U(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return{type:A,payload:e}},W=function(e){return function(){var t=Object(s.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(b.a)({},e)).id,t.next=6,f.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(K(e.id,r)),p.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},K=function(e,t){return{type:P,payload:{id:e,note:Object(b.a)({id:e},t)}}},H=function(e){return{type:R,payload:e}},F=n(34),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(u.a)(t,2),c=n[0],r=n[1],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},o=function(e){var t=e.target;r(Object(b.a)(Object(b.a)({},c),{},Object(F.a)({},t.name,t.value)))};return[c,o,i]},V=n(1),G=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.notes})).active;return Object(V.jsxs)("div",{className:"notes__appbar",children:[Object(V.jsx)("span",{children:"28 de Agosto 2020"}),Object(V.jsx)("input",{id:"file-selector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(s.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,p.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){p.a.showLoading()}}),t.next=4,v(e);case 4:r=t.sent,c.url=r,n(W(c)),p.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(V.jsxs)("div",{children:[Object(V.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#file-selector").click()},children:"Picture"}),Object(V.jsx)("button",{className:"btn",onClick:function(){e(W(t))},children:"Save"})]})]})},q=function(){var e=Object(j.c)((function(e){return e.notes})).active,t=B(e),n=Object(u.a)(t,3),c=n[0],r=n[1],i=n[2],l=c.body,d=c.title,O=c.id,p=Object(a.useRef)(e.id),h=Object(j.b)();Object(a.useEffect)((function(){e.id!==p.current&&(i(e),p.current=e.id)}),[e,i]),Object(a.useEffect)((function(){h(k(c.id,Object(b.a)({},c)))}),[c,h]);return Object(V.jsxs)("div",{className:"notes__main-content",children:[Object(V.jsx)(G,{}),Object(V.jsxs)("div",{className:"notes__content",children:[Object(V.jsx)("input",{type:"text",placeholder:"Some Awesome title",className:"notes__title-input",autoComplete:"off",value:d,onChange:r,name:"title"}),Object(V.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",value:l,onChange:r,name:"body"}),e.url&&Object(V.jsx)("div",{className:"notes__image",children:Object(V.jsx)("img",{src:e.url,alt:"Paisaje"})})]}),Object(V.jsx)("button",{className:"btn btn-danger",onClick:function(){h(function(e){return function(){var t=Object(s.a)(o.a.mark((function t(n,a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,f.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(H(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(O))},children:"Delete"})]})},M=function(){return Object(V.jsxs)("div",{className:"nothing__main-content",children:[Object(V.jsxs)("p",{children:["Select something",Object(V.jsx)("br",{}),"Or create an entry"]}),Object(V.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},J=function(e){return{type:y,payload:e}},z=function(){return{type:w}},X=function(e,t){return function(n){n({type:N}),h.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(Y(t.uid,t.displayName)),n(z())})).catch((function(e){n(z()),p.a.fire("Error",e.message,"error")}))}},Y=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},Q=function(){return{type:S}},Z=n(60),$=n.n(Z),ee=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,i=$()(n),o=Object(j.b)();return Object(V.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){o(k(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(V.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(V.jsxs)("div",{className:"journal__entry-body",children:[Object(V.jsx)("p",{className:"journal__entry-title",children:a}),Object(V.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(V.jsxs)("div",{className:"journal__entry-date-box",children:[Object(V.jsx)("span",{children:i.format("dddd")}),Object(V.jsx)("h4",{children:i.format("Do")})]})]})},te=function(){var e=Object(j.c)((function(e){return e.notes})).notes;return Object(V.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(V.jsx)(ee,Object(b.a)({},e),e.id)}))})},ne=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.auth})).name;return Object(V.jsxs)("aside",{className:"journal__sidebar",children:[Object(V.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(V.jsxs)("h3",{className:"mt-5",children:[Object(V.jsx)("i",{className:"far fa-moon"}),Object(V.jsxs)("span",{children:[" ",t]})]}),Object(V.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.auth().signOut();case 2:t(Q()),t({type:D});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(V.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(s.a)(o.a.mark((function e(t,n){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,f.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(k(r.id,c)),t(I(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(V.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(V.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(V.jsx)(te,{})]})},ae=function(){var e=Object(j.c)((function(e){return e.notes})).active;return Object(V.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(V.jsx)(ne,{}),Object(V.jsx)("main",{children:e?Object(V.jsx)(q,{}):Object(V.jsx)(M,{})})]})},ce=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.ui})).loading,n=B({email:"mauriciog87@gmail.com",password:"123456"}),a=Object(u.a)(n,2),c=a[0],r=a[1],i=c.email,o=c.password;return Object(V.jsxs)("div",{children:[Object(V.jsx)("h3",{className:"auth__title",children:"Login"}),Object(V.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(X(i,o))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(V.jsx)("input",{type:"text",placeholder:"email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(V.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:o,onChange:r}),Object(V.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(V.jsxs)("div",{className:"auth__social-networks",children:[Object(V.jsx)("p",{children:"Login with Social Networks"}),Object(V.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){h.a.auth().signInWithPopup(_).then((function(t){var n=t.user;e(Y(n.uid,n.displayName))}))}))},children:[Object(V.jsx)("div",{className:"google-icon-wrapper",children:Object(V.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(V.jsx)("p",{className:"btn-text",children:Object(V.jsx)("b",{children:"Sign in with google"})})]})]}),Object(V.jsx)(l.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},re=n(61),ie=n.n(re),oe=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.ui})).msgError,n=B({name:"Mauricio",email:"mauriciog87@gmail.com",password:"123456",password2:"123456"}),a=Object(u.a)(n,2),c=a[0],r=a[1],i=c.name,d=c.email,b=c.password,O=c.password2,m=function(){return 0===i.trim().length?(e(J("Name is required")),!1):ie.a.isEmail(d)?b!==O||b.length<5?(e(J("Password should be at least 6 characters and match each other")),!1):(e({type:E}),!0):(e(J("Email is not valid")),!1)};return Object(V.jsxs)("div",{children:[Object(V.jsx)("h3",{className:"auth__title",children:"Register"}),Object(V.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()&&e(function(e,t,n){return function(a){h.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(s.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(Y(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){p.a.fire("Error",e.message,"error")}))}}(d,b,i))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(V.jsx)("div",{className:"auth__alert-error",children:t}),Object(V.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(V.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:r}),Object(V.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:b,onChange:r}),Object(V.jsx)("input",{type:"password",placeholder:"Confirm",name:"password2",className:"auth__input",value:O,onChange:r}),Object(V.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(V.jsx)(l.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},se=function(){return Object(V.jsx)("div",{className:"auth__main",children:Object(V.jsx)("div",{className:"auth__box-container",children:Object(V.jsxs)(d.d,{children:[Object(V.jsx)(d.b,{exact:!0,path:"/auth/login",component:ce}),Object(V.jsx)(d.b,{exact:!0,path:"/auth/register",component:oe}),Object(V.jsx)(d.a,{to:"/auth/register"})]})})})},ue=n(35),le=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,["isAuthenticated","component"]);return Object(V.jsx)(d.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return t?Object(V.jsx)(n,Object(b.a)({},e)):Object(V.jsx)(d.a,{to:"/auth/login"})}}))},de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,["isAuthenticated","component"]);return Object(V.jsx)(d.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return t?Object(V.jsx)(d.a,{to:"/"}):Object(V.jsx)(n,Object(b.a)({},e))}}))},je=function(){var e=Object(j.b)(),t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),b=Object(u.a)(i,2),O=b[0],p=b[1];return Object(a.useEffect)((function(){h.a.auth().onAuthStateChanged(function(){var t=Object(s.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(Y(n.uid,n.displayName)),e(L(n.uid)),p(!0)):p(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,p]),c?Object(V.jsx)("h1",{children:"Wait..."}):Object(V.jsx)(l.a,{children:Object(V.jsx)("div",{children:Object(V.jsxs)(d.d,{children:[Object(V.jsx)(de,{path:"/auth",component:se,isAuthenticated:O}),Object(V.jsx)(le,{exact:!0,isAuthenticated:O,path:"/",component:ae})]})})})},be=n(23),Oe=n(62),pe={loading:!1,msgError:null},he=n(44),me={notes:[],active:null},fe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,_e=Object(be.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case S:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case E:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case N:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case w:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case T:return Object(b.a)(Object(b.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case A:return Object(b.a)(Object(b.a)({},e),{},{notes:Object(he.a)(t.payload)});case P:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case R:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case D:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:[]});default:return e}}}),ve=Object(be.e)(_e,fe(Object(be.a)(Oe.a))),xe=function(){return Object(V.jsx)(j.a,{store:ve,children:Object(V.jsx)(je,{})})};n(160);r.a.render(Object(V.jsx)(xe,{}),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.95fa3696.chunk.js.map