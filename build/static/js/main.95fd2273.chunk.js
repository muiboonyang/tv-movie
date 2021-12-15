(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{103:function(e,t,r){},104:function(e,t,r){"use strict";r.r(t);var a=r(26),c=r.n(a),s=r(6),n=r(0),i=r.n(n),o=r(12),l=r(76),j=r(46),b=r(78),d=r(57),h=r(1),u=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b.a,{bg:"dark",variant:"dark",children:Object(h.jsxs)(d.a,{children:[Object(h.jsxs)(b.a.Brand,{href:"/my-show-app/",children:[Object(h.jsx)("img",{alt:"",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ClapperboardColor.svg/1024px-ClapperboardColor.svg.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","My Show App"]}),Object(h.jsxs)(j.a,{className:"me-auto",children:[Object(h.jsx)(j.a.Link,{href:"/my-show-app/search",children:"Search"}),Object(h.jsx)(j.a.Link,{href:"/my-show-app/contact",children:"Contact"})]})]})})})},m=r(107),O=i.a.createContext(),p=r(32),x=r(34),f=r(63),v=function(){var e=Object(n.useContext)(O),t=e.favourites.map((function(t,r){return Object(h.jsxs)(p.a,{className:"card border-dark mb-3 mx-1",style:{width:"16rem"},id:r,children:[Object(h.jsx)(p.a.Img,{variant:"top",src:t}),Object(h.jsx)(x.a,{variant:"danger",onClick:e.removeFavourite,children:"X"})]},Object(m.a)())}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"results",children:[Object(h.jsxs)("h2",{children:["Favourites ",Object(h.jsx)(f.a,{bg:"primary",children:t.length})]}),Object(h.jsx)("p",{children:"Click on 'X' to remove shows from your favourites"})]}),Object(h.jsx)("div",{className:"row",children:t})]})},g=function(){return Object(h.jsx)(v,{})},w=r(7),y=r(39),N=r(16),k=function(){return Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("h4",{children:"Fill up the form below to get in touch!"}),Object(h.jsx)("br",{}),Object(h.jsxs)(w.a,{className:"form",children:[Object(h.jsxs)(y.a,{className:"mb-3",children:[Object(h.jsxs)(w.a.Group,{as:N.a,controlId:"formGridEmail",children:[Object(h.jsx)(w.a.Label,{children:"First Name"}),Object(h.jsx)(w.a.Control,{type:"input",placeholder:"Enter first name"})]}),Object(h.jsxs)(w.a.Group,{as:N.a,controlId:"formGridPassword",children:[Object(h.jsx)(w.a.Label,{children:"Last Name"}),Object(h.jsx)(w.a.Control,{type:"input",placeholder:"Enter last name"})]})]}),Object(h.jsxs)(y.a,{children:[Object(h.jsxs)(w.a.Group,{as:N.a,className:"mb-3",controlId:"formEmail",children:[Object(h.jsx)(w.a.Label,{children:"Email address"}),Object(h.jsx)(w.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(h.jsxs)(w.a.Group,{as:N.a,className:"mb-3",controlId:"formNumber",children:[Object(h.jsx)(w.a.Label,{children:"Contact number"}),Object(h.jsx)(w.a.Control,{type:"number",placeholder:"Enter contact number"})]})]}),Object(h.jsxs)(w.a.Group,{className:"mb-3",controlId:"formGridAddress1",children:[Object(h.jsx)(w.a.Label,{children:"Address"}),Object(h.jsx)(w.a.Control,{placeholder:"Enter block and street name"})]}),Object(h.jsxs)(w.a.Group,{className:"mb-3",controlId:"formGridAddress2",children:[Object(h.jsx)(w.a.Label,{children:"Address 2"}),Object(h.jsx)(w.a.Control,{placeholder:"Enter apartment or floor"})]}),Object(h.jsxs)(y.a,{className:"mb-3",children:[Object(h.jsxs)(w.a.Group,{as:N.a,controlId:"formGridCity",children:[Object(h.jsx)(w.a.Label,{children:"Country"}),Object(h.jsx)(w.a.Control,{placeholder:"Enter country"})]}),Object(h.jsxs)(w.a.Group,{as:N.a,controlId:"formGridState",children:[Object(h.jsx)(w.a.Label,{children:"State"}),Object(h.jsx)(w.a.Control,{placeholder:"Enter state"})]}),Object(h.jsxs)(w.a.Group,{as:N.a,controlId:"formGridZip",children:[Object(h.jsx)(w.a.Label,{children:"Zip Code"}),Object(h.jsx)(w.a.Control,{placeholder:"Enter zip code"})]})]}),Object(h.jsxs)(y.a,{className:"mb-3",children:[Object(h.jsxs)(w.a.Group,{as:N.a,controlId:"formIssueType",children:[Object(h.jsx)(w.a.Label,{children:"Type of Feedback"}),Object(h.jsxs)(w.a.Select,{defaultValue:"Select issue type...",children:[Object(h.jsx)("option",{children:"Select feedback type..."}),Object(h.jsx)("option",{children:"Excellent"}),Object(h.jsx)("option",{children:"Very Good"}),Object(h.jsx)("option",{children:"Good"})]})]}),Object(h.jsxs)(w.a.Group,{as:N.a,className:"mb-3",controlId:"formDate",children:[Object(h.jsx)(w.a.Label,{children:"Date"}),Object(h.jsx)(w.a.Control,{type:"date",placeholder:"Enter date"})]})]}),Object(h.jsxs)(w.a.Group,{className:"mb-3",controlId:"formText",children:[Object(h.jsx)(w.a.Label,{children:"Comments"}),Object(h.jsx)(w.a.Control,{as:"textarea",rows:3}),Object(h.jsx)(w.a.Text,{className:"text-muted",children:"Your feedback will not be shared with anyone else."})]}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},C=r(28),S=r.n(C),G=r(45),I=r(38),F=function(e){var t=e.shows.map((function(e){return Object(h.jsxs)(I.a.Item,{interval:3e3,children:[Object(h.jsx)("a",{href:"https://www.themoviedb.org/movie/".concat(e.id),target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{className:"d-block w-100",src:e.image,alt:e.title})}),Object(h.jsx)(I.a.Caption,{children:Object(h.jsx)("p",{className:"carousel-title",children:Object(h.jsxs)("a",{href:"https://www.themoviedb.org/movie/".concat(e.id),target:"_blank",rel:"noreferrer",className:"showtitle",children:[e.title,Object(h.jsx)("br",{}),e.info]})})})]},Object(m.a)())}));return Object(h.jsx)(I.a,{children:t})},E=function(e){var t=e.shows.map((function(e){return Object(h.jsxs)(I.a.Item,{interval:3e3,children:[Object(h.jsx)("a",{href:"https://www.themoviedb.org/tv/".concat(e.id),target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{className:"d-block w-100",src:e.image,alt:e.title})}),Object(h.jsx)(I.a.Caption,{children:Object(h.jsx)("p",{className:"carousel-title",children:Object(h.jsxs)("a",{href:"https://www.themoviedb.org/tv/".concat(e.id),target:"_blank",rel:"noreferrer",className:"showtitle",children:[e.title,Object(h.jsx)("br",{}),e.info]})})})]},Object(m.a)())}));return Object(h.jsx)(I.a,{children:t})},_=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(n.useState)([]),b=Object(s.a)(j,2),u=b[0],m=b[1],O=function(){var e=Object(G.a)(S.a.mark((function e(){var t,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=03c16b8a9560a4ea683a37f203c3e79f&language=en-US&page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,console.log(r.items),c=r.results.map((function(e){var t=e.original_title,r=e.poster_path,a=e.id,c=e.release_date;return{title:t,image:"https://image.tmdb.org/t/p/w500"+r,id:a,info:"(".concat(c,")")}})),a(c),console.log(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(G.a)(S.a.mark((function e(){var t,r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=03c16b8a9560a4ea683a37f203c3e79f");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a=r.results.map((function(e){var t=e.original_title,r=e.poster_path,a=e.id,c=e.vote_average;return{title:t,image:"https://image.tmdb.org/t/p/w500"+r,id:a,info:"(".concat(c," / 10)")}})),l(a),console.log(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(G.a)(S.a.mark((function e(){var t,r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=03c16b8a9560a4ea683a37f203c3e79f");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a=r.results.map((function(e){var t=e.original_name,r=e.poster_path,a=e.id,c=e.vote_average;return{title:t,image:"https://image.tmdb.org/t/p/w500"+r,id:a,info:"(".concat(c," / 10)")}})),m(a),console.log(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O(),x(),p()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d.a,{className:"carousel-container",children:Object(h.jsxs)(y.a,{children:[Object(h.jsxs)(N.a,{children:[Object(h.jsx)("h1",{children:"Upcoming Movies"}),Object(h.jsx)("br",{}),Object(h.jsx)(F,{shows:r})]}),Object(h.jsxs)(N.a,{children:[Object(h.jsx)("h1",{children:"Popular Movies"}),Object(h.jsx)("br",{}),Object(h.jsx)(F,{shows:o})]}),Object(h.jsxs)(N.a,{children:[Object(h.jsx)("h1",{children:"Popular TV Shows"}),Object(h.jsx)("br",{}),Object(h.jsx)(E,{shows:u})]})]})})})},L=r(87),A=r(64),T=function(e){return Object(h.jsx)("div",{className:"Search",children:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(L.a,{size:"lg",children:[Object(h.jsx)(A.a,{placeholder:"Enter a show name",value:e.query,onChange:e.handleSearchInput,"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm"}),Object(h.jsx)(x.a,{variant:"primary",onClick:e.onSubmitQuery,children:"Search"})]})})})},B=r(51),q=function(e){var t=Object(n.useContext)(O),r=e.shows.map((function(e){return Object(h.jsxs)(p.a,{className:"card border-dark mb-3 mx-2",style:{width:"19rem"},children:[Object(h.jsx)(p.a.Img,{variant:"top",className:"cards",id:Object(m.a)(),src:e.image,alt:e.title,onClick:t.addFavourite}),Object(h.jsxs)(p.a.Body,{children:[Object(h.jsx)(p.a.Title,{children:e.title}),Object(h.jsx)(B.a,{children:Object(h.jsxs)(B.a.Item,{eventKey:"0",children:[Object(h.jsx)(B.a.Header,{children:"Synopsis"}),Object(h.jsx)(B.a.Body,{className:"summary",children:e.synopsis})]})})]}),Object(h.jsx)(p.a.Footer,{className:"footer",children:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.a,{variant:"danger",onClick:function(t){t.preventDefault(),window.open(e.site)},children:"Watch here"})})})]},Object(m.a)())}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"results",children:[Object(h.jsxs)("h2",{children:["Search Results ",Object(h.jsx)(f.a,{bg:"primary",children:r.length})]}),Object(h.jsx)("p",{children:"Click on a poster to add to your favourites. Click on the 'Favourites' tab to view them."})]}),Object(h.jsx)("div",{className:"row",children:r})]})},z=r(83),D=r.n(z),K=function(){return Object(h.jsx)("div",{className:D.a.spinner})},P=r(84),V=r(79),M=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(n.useState)(!1),b=Object(s.a)(j,2),d=b[0],u=b[1],m=Object(n.useState)(!1),O=Object(s.a)(m,2),p=O[0],x=O[1],f=Object(n.useState)(null),g=Object(s.a)(f,2),w=g[0],y=g[1],N=function(){var e=Object(G.a)(S.a.mark((function e(){var t,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),y(null),e.prev=2,e.next=5,fetch("https://api.tvmaze.com/search/shows?q="+r);case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,console.log(a),c=a.map((function(e){var t=e.show,r=t.name,a=t.image,c=t.officialSite,s=t.url,n=t.summary;return{title:r,image:a&&a.medium||"https://i.imgur.com/V8olf7q.png",site:c||s,synopsis:(n||"Coming soon!").replace(/<\/?[^>]+>/gi,"")}})),l(c),console.log(o),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),y(e.t0.message);case 18:x(!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),k="";return o&&(k=Object(h.jsx)(q,{shows:o})),w&&(k=Object(h.jsx)("p",{children:w})),p&&(k=Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(K,{})})),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"SearchContainer",children:[Object(h.jsx)(T,{handleSearchInput:function(e){a(e.target.value)},onSubmitQuery:function(e){e.preventDefault(),r.length>0&&(N(),u(!0))},query:r}),Object(h.jsx)("br",{}),d?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(P.a,{defaultActiveKey:"results",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(h.jsx)(V.a,{eventKey:"results",title:"Results",children:k}),Object(h.jsx)(V.a,{eventKey:"favourites",title:"Favourites",children:Object(h.jsx)(v,{})})]}),Object(h.jsx)("br",{})]}):Object(h.jsx)(h.Fragment,{})]})})},J=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],a=t[1];return Object(h.jsx)(O.Provider,{value:{favourites:r,addFavourite:function(e){a((function(t){var r=document.getElementById(e.target.id);t.push(r.src);var a=Array.from(new Set(t)).filter((function(e){return void 0!==e}));return console.log(a),a}))},removeFavourite:function(e){a((function(t){var r=e.target.parentElement.id;t.splice(r,1);var a=t.map((function(e){return e}));return console.log(a),a}))}},children:Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(u,{}),Object(h.jsx)("br",{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/my-show-app/",children:Object(h.jsx)(_,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/my-show-app/search",children:Object(h.jsx)(M,{})}),Object(h.jsx)(o.a,{path:"/my-show-app/favourites",children:Object(h.jsx)(g,{})}),Object(h.jsx)(o.a,{path:"/my-show-app/contact",children:Object(h.jsx)(k,{})})]})]})})})};r(103);c.a.render(Object(h.jsx)(J,{}),document.getElementById("root"))},83:function(e,t,r){e.exports={spinner:"LoadingSpinner_spinner__3O4-6"}}},[[104,1,2]]]);
//# sourceMappingURL=main.95fd2273.chunk.js.map