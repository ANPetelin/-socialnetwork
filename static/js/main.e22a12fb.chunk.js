(this.webpackJsonpsocalnetwork=this.webpackJsonpsocalnetwork||[]).push([[0],{125:function(e,t,a){e.exports=a(193)},134:function(e,t,a){},136:function(e,t,a){},168:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(41),s=a(29),u=a(26),i={users:[]},p={fetchedPost:[]},m={loading:!1},E=a(66),d={comments:[]},O=Object(o.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.payload});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST/FETCH_POSTS":return Object(u.a)(Object(u.a)({},e),{},{fetchedPost:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SHOW_LOADER":return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case"APP/HIDE_LOADER":return Object(u.a)(Object(u.a)({},e),{},{loading:!1});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST/FETCH_COMMENTS":var a=e.comments.filter((function(e){return e.postId!==t.payload[0].postId}));return Object(u.a)(Object(u.a)({},e),{},{comments:[].concat(Object(E.a)(a),Object(E.a)(t.payload))});default:return e}}}),b=(a(134),a(56)),f=a(18),h=a(200),S=a(196);var j=a(71),v=a(198),y=a(120),T=a(195),k=a(199),w=a(201),P=a(202),_=a(203),x=a(204),g=a(105),R=a.n(g),U=(a(136),v.a.Panel),N=function(e){var t=Object(s.b)(),a=Object(s.c)((function(t){return t.users.users.filter((function(t){return t.id===e.post.userId}))}))[0],c=Object(s.c)((function(t){return t.comments.comments.filter((function(t){return t.postId===e.post.id}))})),l=Object(n.useState)(0),o=Object(j.a)(l,2),u=o[0],i=o[1],p=Object(n.useState)(0),m=Object(j.a)(p,2),E=m[0],d=m[1],O=Object(n.useState)(null),f=Object(j.a)(O,2),h=f[0],S=f[1],g=[r.a.createElement(y.a,{key:"comment-basic-like",title:"Like"},r.a.createElement("span",{onClick:function(){i(1),d(0),S("liked")}},Object(n.createElement)("liked"===h?w.a:P.a),r.a.createElement("span",{className:"comment-action"},u))),r.a.createElement(y.a,{key:"comment-basic-dislike",title:"Dislike"},r.a.createElement("span",{onClick:function(){i(0),d(1),S("disliked")}},r.a.createElement("disliked"===h?_.a:x.a),r.a.createElement("span",{className:"comment-action"},E))),r.a.createElement("span",{key:"comment-basic-reply-to"},"Reply to")];return r.a.createElement("div",{className:"user__field"},r.a.createElement(T.a,{actions:g,author:r.a.createElement(b.b,{to:"/socalnetwork/user/"+a.id},r.a.createElement("p",null,a.username)),avatar:r.a.createElement(b.b,{to:"/socalnetwork/user/"+a.id},r.a.createElement(k.a,{src:"./avatar.jpg",alt:a.username})),content:r.a.createElement("p",null,e.post.body)}),r.a.createElement(v.a,{className:"comments",accordion:!0,expandIconPosition:"right",onChange:function(){return t({type:"POST/REQUEST_COMMENTS",id:e.post.id})}},r.a.createElement(U,{header:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",key:a.id},c.map((function(e){return r.a.createElement(T.a,{key:e.id,author:e.email,avatar:"./avatar.jpg",content:e.name,datetime:R()().subtract(1,"days").fromNow()})})))))},C=(a(92),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.posts.fetchedPost})),a=Object(s.c)((function(e){return e.users.users}));Object(n.useEffect)((function(){t.length||(e({type:"POST/REQUEST_POSTS"}),e({type:"REQUEST_USERS"}))}));for(var c=[],l=0;l<10;l++){var o=Math.floor(10*Math.random())+10*l;c=[].concat(Object(E.a)(c),[t[o]])}return t.length&&a.length?r.a.createElement("div",null,c.map((function(e){return r.a.createElement(N,{key:e.id,post:e})}))):r.a.createElement(S.a,{className:"spin",tip:"Loading...",size:"large"})}),D=a(197),H=v.a.Panel,I=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.users.users})),a=Object(f.f)().id,c=t.filter((function(e){return e.id===+a}))[0];return Object(n.useEffect)((function(){t.length||(e({type:"POST/REQUEST_POSTS"}),e({type:"REQUEST_USERS"}))})),r.a.createElement("div",null,t.length?r.a.createElement(D.a,{title:c.name},r.a.createElement("p",null,"\u041f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c: ",c.username),r.a.createElement("p",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",c.phone),r.a.createElement("p",null,"Email: ",r.a.createElement("a",{href:"mailto:"+c.email},c.email)),r.a.createElement("p",null,"Website: ",r.a.createElement("a",{href:"http://".concat(c.website)},c.website)),r.a.createElement(v.a,{accordion:!0,expandIconPosition:"right"},r.a.createElement(H,{header:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",key:"1"},r.a.createElement("p",null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f:"),r.a.createElement("p",null,"\u0413\u043e\u0440\u043e\u0434: ",c.address.city),r.a.createElement("p",null,"\u0423\u0434\u0438\u0446\u0430: ",c.address.street),r.a.createElement("p",null,"\u0414\u043e\u043c: ",c.address.suite),r.a.createElement("p",null,"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441: ",c.address.zipcode),r.a.createElement("hr",null),r.a.createElement("p",null,"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b:"),r.a.createElement("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: ",c.company.name),r.a.createElement("p",null,"\u0421\u0444\u0435\u0440\u0430 \u0434\u0435\u0439\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438: ",c.company.catchPhrase),r.a.createElement("p",null,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c: ",c.company.bs)))):r.a.createElement(S.a,null))},A=(a(168),h.a.Header),M=h.a.Footer,Q=h.a.Content;var L=function(){return r.a.createElement(h.a,null,r.a.createElement(A,null,r.a.createElement("p",null,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c")),r.a.createElement(Q,{className:"content"},r.a.createElement(b.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/socalnetwork/"},r.a.createElement(C,null)),r.a.createElement(f.a,{path:"/socalnetwork/user/:id"},r.a.createElement(I,null))))),r.a.createElement(M,null,"\u043e\u0434\u043d\u043e\u043a\u0430\u0448\u043d\u0438\u043a\u0438"))},F=a(122),W=a(23),X=a.n(W),z=a(19),B=a(118),J=a(119),V=a.n(J),$=function(e){return q.apply(this,arguments)};function q(){return(q=Object(B.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V.a.get(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=X.a.mark(K);function K(e){var t;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(z.a)($,"https://jsonplaceholder.typicode.com/comments?postId=".concat(e.id));case 3:return t=a.sent,a.next=6,Object(z.c)({type:"POST/FETCH_COMMENTS",payload:t.data});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),alert("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 11:case"end":return a.stop()}}),G,null,[[0,8]])}var Y=X.a.mark(Z);function Z(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(z.c)({type:"APP/SHOW_LOADER"});case 3:return t.next=5,Object(z.a)($,"https://jsonplaceholder.typicode.com/posts");case 5:return e=t.sent,t.next=8,Object(z.c)({type:"POST/FETCH_POSTS",payload:e.data});case 8:return t.next=10,Object(z.c)({type:"APP/HIDE_LOADER"});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 15:case"end":return t.stop()}}),Y,null,[[0,12]])}var ee=X.a.mark(te);function te(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(z.c)({type:"APP/SHOW_LOADER"});case 3:return t.next=5,Object(z.a)($,"https://jsonplaceholder.typicode.com/users");case 5:return e=t.sent,t.next=8,Object(z.c)({type:"FETCH_USERS",payload:e.data});case 8:return t.next=10,Object(z.c)({type:"APP/HIDE_LOADER"});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 15:case"end":return t.stop()}}),ee,null,[[0,12]])}var ae=X.a.mark(ne);function ne(e){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.type,t.next="POST/REQUEST_POSTS"===t.t0?3:"POST/REQUEST_COMMENTS"===t.t0?6:"REQUEST_USERS"===t.t0?9:12;break;case 3:return t.next=5,Object(z.b)(Z);case 5:return t.abrupt("return",t.sent);case 6:return t.next=8,Object(z.b)(K,e);case 8:return t.abrupt("return",t.sent);case 9:return t.next=11,Object(z.b)(te);case 11:return t.abrupt("return",t.sent);case 12:return t.abrupt("return");case 13:case"end":return t.stop()}}),ae)}var re=X.a.mark(ce);function ce(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)("POST/REQUEST_POSTS",ne);case 2:return e.next=4,Object(z.d)("REQUEST_USERS",ne);case 4:return e.next=6,Object(z.d)("POST/REQUEST_COMMENTS",ne);case 6:case"end":return e.stop()}}),re)}var le=Object(F.a)(),oe=Object(o.a)(le),se=Object(o.e)(O,window.__REDUX_DEVTOOLS_EXTENSION__?Object(o.d)(oe,window.__REDUX_DEVTOOLS_EXTENSION__()):oe);le.run(ce),l.a.render(r.a.createElement(s.a,{store:se},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.e22a12fb.chunk.js.map