(this["webpackJsonptravel-frontend"]=this["webpackJsonptravel-frontend"]||[]).push([[0],{183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(57),c=a.n(s),r=a(0),i=a.n(r),o=a(4),l=a(13),j=a(241),d=a(227),h=a(228),b=a(130),u=a(33),x=a(245),m=a(244),p=a(237),O=a(236),f=a(24),g=a(58),v=a.n(g),w=Object(n.createContext)(null),k=a(2);var y=function(e){return Object(k.jsxs)("div",{className:"error-notice",children:[Object(k.jsx)("span",{children:e.message}),Object(k.jsx)("button",{onClick:e.clearError,children:"X"})]})},S={textDecoration:"none",color:"white"};var C=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),r=Object(l.a)(c,2),g=r[0],C=r[1],P=Object(n.useState)(),N=Object(l.a)(P,2),A=N[0],D=N[1],I=Object(n.useState)(),L=Object(l.a)(I,2),z=L[0],F=L[1],E=Object(n.useState)(),_=Object(l.a)(E,2),T=_[0],G=_[1],W=Object(n.useContext)(w).setUserData,M=Object(f.g)(),U=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:g,name:A,username:z},e.next=5,v.a.post("https://travelgram-app-heroku.herokuapp.com/users/signup",n);case 5:return e.next=7,v.a.post("https://travelgram-app-heroku.herokuapp.com/users/login",{email:a,password:g});case 7:s=e.sent,W({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),M("/feed"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data.msg&&G(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(d.a,{component:"main",children:Object(k.jsx)(h.a,{className:"justify-content-md-center",children:Object(k.jsxs)(b.a,{sm:6,children:[Object(k.jsx)(m.a,{className:"w-responsive text-center mx-auto p-3 mt-2",elevation:3,children:Object(k.jsxs)(b.a,{sm:12,children:[Object(k.jsx)(x.a,{fontFamily:"'Poppins', sans-serif",children:Object(k.jsx)("h2",{children:"Create an Account"})}),T&&Object(k.jsx)(y,{message:T,clearError:function(){return G(void 0)}}),Object(k.jsxs)(p.a,{onSubmit:U,children:[Object(k.jsxs)(p.a.Group,{as:h.a,className:"mb-3",controlId:"formPlaintextEmail",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:"4",md:"12"}),Object(k.jsx)(b.a,{sm:"12",children:Object(k.jsx)(O.a,{fullWidth:!0,required:!0,onChange:function(e){return s(e.target.value)},name:"email",label:"Email Address"})})]}),Object(k.jsx)(p.a.Group,{as:h.a,className:"mb-3",controlId:"formPlaintextEmail",children:Object(k.jsx)(b.a,{sm:"12",children:Object(k.jsx)(O.a,{required:!0,fullWidth:!0,onChange:function(e){return D(e.target.value)},name:"name",label:"Full Name"})})}),Object(k.jsx)(b.a,{sm:"12",children:Object(k.jsx)(O.a,{required:!0,fullWidth:!0,onChange:function(e){return F(e.target.value)},name:"username",label:"Username"})}),Object(k.jsxs)(p.a.Group,{as:h.a,className:"mb-3",controlId:"formPlaintextPassword",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:"12"}),Object(k.jsx)(b.a,{sm:"12",children:Object(k.jsx)(O.a,{required:!0,fullWidth:!0,onChange:function(e){return C(e.target.value)},name:"password",type:"password",label:"Password"})})]}),Object(k.jsx)(j.a,{style:{backgroundColor:"#1A76D2"},variant:"contained",size:"large",type:"submit",children:"Create Account"})]})]})}),Object(k.jsxs)(m.a,{className:"w-responsive text-center mx-auto p-3 mt-4",elevation:3,children:[Object(k.jsx)("p",{children:"Already have an account?"}),Object(k.jsx)(u.b,{style:S,to:"/signup",children:Object(k.jsx)(j.a,{style:{backgroundColor:"#1A76D2"},variant:"contained",size:"medium",children:Object(k.jsx)(u.b,{style:S,to:"/login",children:"Sign In"})})})]})]})})})})},P=a(72);a(191),a(181);P.a.initializeApp({apiKey:"AIzaSyBoskVvAiozd4oJOx5436HHs2vB7gYIBQI",authDomain:"travelgram-42aac.firebaseapp.com",projectId:"travelgram-42aac",storageBucket:"travelgram-42aac.appspot.com",messagingSenderId:"33301693325",appId:"1:33301693325:web:ec8972efd4a7325fe333c4"});P.a.auth(),P.a.firestore();var N=new P.a.auth.GoogleAuthProvider;N.setCustomParameters({prompt:"select_account"});P.a,a(183);var A={textDecoration:"none",color:"white"};var D=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),r=Object(l.a)(c,2),g=r[0],S=r[1],C=Object(n.useState)(),P=Object(l.a)(C,2),N=P[0],D=P[1],I=Object(n.useContext)(w).setUserData,L=Object(f.g)(),z=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:g},e.next=5,v.a.post("https://travelgram-app-heroku.herokuapp.com/users/login",n);case 5:s=e.sent,I({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),L("/feed"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&D(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(d.a,{component:"main",children:Object(k.jsx)(h.a,{className:"justify-content-md-center",children:Object(k.jsxs)(b.a,{sm:6,children:[Object(k.jsx)(m.a,{className:"w-responsive text-center mx-auto p-5 mt-2",elevation:3,children:Object(k.jsx)(h.a,{className:"justify-content-md-center",children:Object(k.jsxs)(b.a,{sm:12,children:[Object(k.jsx)(x.a,{fontFamily:"'Poppins', sans-serif",children:Object(k.jsx)("h2",{children:"Sign in to Travelgram"})}),N&&Object(k.jsx)(y,{message:N,clearError:function(){return D(void 0)}}),Object(k.jsxs)(p.a,{onSubmit:z,children:[Object(k.jsxs)(p.a.Group,{as:h.a,className:"mb-3",controlId:"formPlaintextEmail",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:"4",md:"12"}),Object(k.jsx)(b.a,{sm:"12",children:Object(k.jsx)(O.a,{fullWidth:!0,name:"email",type:"email",onChange:function(e){return s(e.target.value)},label:"Email",required:!0})})]}),Object(k.jsx)(p.a.Group,{as:h.a,className:"mb-3",controlId:"formPlaintextPassword",children:Object(k.jsx)(b.a,{sm:"12",children:Object(k.jsx)(O.a,{fullWidth:!0,name:"password",type:"password",onChange:function(e){return S(e.target.value)},label:"Password",required:!0})})}),Object(k.jsx)(j.a,{style:{backgroundColor:"#1A76D2"},variant:"contained",size:"large",type:"submit",children:"Sign In"})]})]})})}),Object(k.jsxs)(m.a,{className:"w-responsive text-center mx-auto p-3 mt-4",elevation:3,children:[Object(k.jsx)("p",{children:"New to Travelgram?"}),Object(k.jsx)(u.b,{style:A,to:"/signup",children:Object(k.jsx)(j.a,{style:{backgroundColor:"#1A76D2"},variant:"contained",size:"medium",children:Object(k.jsx)(u.b,{style:A,to:"/signup",children:"Create an Account"})})})]})]})})})})};a(184);var I=function(){var e=Object(n.useContext)(w).userData,t=Object(n.useState)({username:"",img:"",location:"",price:"",caption:""}),a=Object(l.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),o=i[0],d=i[1],h=function(e){var t=e.target.value,a=e.target.name,n=Object.assign({},s);n[a]=t,c(n)};return o?Object(k.jsx)(f.a,{to:"/feed"}):Object(k.jsx)("div",{className:"CreatePost",children:Object(k.jsxs)("div",{className:"newPostContainer",children:[Object(k.jsx)("div",{className:"newPostHeader",children:" Create New Post"}),Object(k.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(t),console.log("Travel data submitted!"),fetch("https://travelgram-app-heroku.herokuapp.com/users/newpost/"+e.user.username,{method:"POST",headers:{"Content-Type":"Application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){c({username:"",img:"",location:"",price:"",caption:""}),d(!0)}))},children:[Object(k.jsxs)("div",{children:[" ",Object(k.jsx)(O.a,{className:"outlined-textarea",label:"Username",placeholder:"Username",onChange:h,name:"username",value:s.username})]}),Object(k.jsxs)("div",{children:[" ",Object(k.jsx)(O.a,{className:"outlined-textarea",label:"Image URL",placeholder:"ImageURL",onChange:h,name:"img",value:s.img})]}),Object(k.jsxs)("div",{children:[" ",Object(k.jsx)(O.a,{className:"outlined-textarea",label:"Location",placeholder:"Location",onChange:h,name:"location",value:s.location})]}),Object(k.jsxs)("div",{children:[" ",Object(k.jsx)(O.a,{className:"outlined-textarea",label:"Price",placeholder:"Price",onChange:h,name:"price",value:s.price})]}),Object(k.jsxs)("div",{children:[" ",Object(k.jsx)(O.a,{className:"outlined-textarea",label:"Caption",placeholder:"Caption",onChange:h,name:"caption",value:s.caption})]}),Object(k.jsx)(j.a,{style:{backgroundColor:"#05668d"},type:"submit",variant:"contained",size:"large",children:"Post"})]})]})})},L=a(239),z=(a(185),a(132)),F=a.n(z);var E=function(e){var t=Object(n.useContext)(w).userData,a=Object(n.useState)([]),s=Object(l.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=(o[0],o[1],function(){t.user&&fetch("https://travelgram-app-heroku.herokuapp.com/users/"+t.user.username).then((function(e){return e.json()})).then((function(e){r(e.user.posts)}))});Object(n.useEffect)((function(){j()}),[]);var d=c&&c.map((function(e){return Object(k.jsx)("div",{className:"postCard",children:Object(k.jsxs)(L.a,{children:[Object(k.jsx)(L.a.Img,{className:"postImg",variant:"top",src:e.img}),Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:e.username}),Object(k.jsxs)(L.a.Text,{children:[Object(k.jsx)("i",{class:"fas fa-map-marker-alt"})," ",e.location," ",Object(k.jsx)("br",{}),"Price: ",e.price," ",Object(k.jsx)("br",{}),Object(k.jsxs)("div",{className:"flexRow",children:[e.caption,Object(k.jsx)(L.a.Link,{onClick:function(){return a=e._id,console.log("deleted"),void fetch("https://travelgram-app-heroku.herokuapp.com/users/"+t.user.username+"/"+a,{method:"DELETE"}).then((function(e){return j()}));var a},children:Object(k.jsx)(F.a,{color:"primary"})},e._id)]})]})]})]})})}));return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"loginMessage",children:t.user?Object(k.jsxs)("h1",{children:["Welcome ",t.user.name]}):Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"invitationToLogin",children:[Object(k.jsx)("h2",{children:"Error"}),Object(k.jsxs)("div",{children:["Uh oh!  Looks like you are not logged in ",Object(k.jsx)("i",{class:"far fa-frown"}),". ",Object(k.jsx)(u.b,{to:"/",children:"Login"})," to view your feed, or check out our ",Object(k.jsx)(u.b,{to:"/explore",children:"Explore"})," Page!"]})]})})}),Object(k.jsx)("div",{className:"Feed",children:d})]})},_=a(246),T=a(247),G=a(248),W=a(134),M=a.n(W),U=a(133),R=a.n(U),B=a(135),H=a.n(B),q=a(136),J=a.n(q);var K=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(k.jsx)(_.a,{sx:{textAlign:"center"},children:Object(k.jsxs)(T.a,{sx:{backgroundColor:"#00bbf9",position:"fixed",bottom:"0",width:"100%"},showLabels:!0,value:a,onChange:function(e,t){s(t)},children:[Object(k.jsx)(G.a,{component:u.b,to:"/feed",sx:{color:"white"},label:"Home",icon:Object(k.jsx)(R.a,{})}),Object(k.jsx)(G.a,{component:u.b,to:"/createPost",sx:{color:"white"},label:"Create Post",icon:Object(k.jsx)(M.a,{})}),Object(k.jsx)(G.a,{component:u.b,to:"/explore",sx:{color:"white"},label:"Explore",icon:Object(k.jsx)(H.a,{})}),Object(k.jsx)(G.a,{component:u.b,to:"/teampage",sx:{color:"white"},label:"About",icon:Object(k.jsx)(J.a,{})})]})})},V=a(5),Q=a(14),X=a(232),Y=a(249),Z=a(250),$=a(39),ee=a(106),te=a.n(ee),ae=a(137),ne=a.n(ae),se=a(138),ce=a.n(se),re=a(139),ie=a.n(re),oe=a(140),le=a.n(oe),je=(a(186),a(141)),de=a.n(je),he=Object(Q.a)("div")((function(e){var t=e.theme;return Object(V.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(X.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.a)(t.palette.common.white,.25)},marginLeft:0,width:"50%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),be=Object(Q.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),ue=Object(Q.a)($.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(V.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),xe={textDecoration:"none",color:"white",marginLeft:8,fontFamily:"'Poppins', sans-serif",fontSize:15},me={textDecoration:"none",color:"white",marginLeft:8,fontFamily:"'Abril Fatface', cursive",fontSize:21};var pe=function(e){console.log(e);var t=Object(n.useContext)(w),a=t.userData,s=t.setUserData,c=Object(f.g)(),r=function(){e.searchKeyword(i.current.value)},i=Object(n.useRef)("");return Object(k.jsx)(_.a,{sx:{flexGrow:1},children:Object(k.jsx)(Y.a,{position:"static",children:Object(k.jsxs)(Z.a,{sx:{backgroundColor:"#00bbf9",color:"white"},children:[Object(k.jsxs)(x.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,color:"white",display:{xs:"block",sm:"block"},fontSize:{xs:"20px",sm:"20px"}},children:[Object(k.jsxs)(u.b,{className:"logo",to:"/feed",style:me,children:[Object(k.jsx)(ne.a,{}),"TravelGram"]})," ",Object(k.jsxs)(u.b,{to:"/createPost",style:xe,children:[Object(k.jsx)(ce.a,{sx:{display:{xs:"none",sm:"inline"}}})," ",Object(k.jsx)("span",{class:"navLinks",children:"Create Post"})]}),Object(k.jsxs)(u.b,{to:"/teamPage",style:xe,children:[Object(k.jsx)(ie.a,{sx:{display:{xs:"none",sm:"inline"}}})," ",Object(k.jsx)("span",{class:"navLinks",children:"About"})]}),Object(k.jsxs)(u.b,{to:"/",style:xe,children:[Object(k.jsx)(le.a,{sx:{display:{xs:"none",sm:"inline"}}})," ",a.user?Object(k.jsx)("span",{onClick:function(){s({token:void 0,user:void 0}),localStorage.setItem("auth-token","")},children:"Logout"}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{onClick:function(){return c("/login")},children:"Login"})})]})]}),Object(k.jsxs)(he,{id:"Search",children:[Object(k.jsx)(be,{children:Object(k.jsx)(te.a,{})}),Object(k.jsx)(ue,{onChange:r,value:e.term,inputRef:i,type:"text",placeholder:"Search",inputProps:{"aria-label":"search"}})]}),Object(k.jsx)(de.a,{onClick:function(){e.handleClearClick({getSearchTerm:r})}})]})})})};a(187);var Oe=function(e){var t=e.feedData&&e.feedData.map((function(e){return Object(k.jsx)("div",{className:"postCard",children:Object(k.jsxs)(L.a,{children:[Object(k.jsx)(L.a.Img,{className:"postImg",variant:"top",src:e.img}),Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:e.username}),Object(k.jsxs)(L.a.Text,{children:[Object(k.jsx)("i",{class:"fas fa-map-marker-alt"})," ",e.location," ",Object(k.jsx)("br",{}),"Price: ",e.price," ",Object(k.jsx)("br",{}),e.caption]})]})]})})}));return Object(k.jsxs)("div",{className:"Explore",children:[Object(k.jsx)("h1",{style:{textAlign:"center"},children:"Discover your next destination"}),t]})},fe=a(242),ge=a(243),ve=(a(188),Object(Q.a)("div")((function(e){var t=e.theme;return Object(V.a)({padding:t.spacing(1)},t.breakpoints.up("md"),{margin:"1%"})}))),we={margin:"auto"};function ke(){return Object(k.jsx)("div",{className:"teamPage",children:Object(k.jsx)(ve,{children:Object(k.jsxs)(_.a,{fontFamily:"'Poppins', sans-serif",sx:{flexGrow:1,overflow:"hidden",px:3},children:[Object(k.jsx)(x.a,{fontSize:"5%",fontFamily:"'Abril Fatface', cursive",textAlign:"center",children:"About Travelgram"}),Object(k.jsx)(m.a,{sx:{width:{xs:320,sm:500,md:700},my:1,mx:"auto",p:2},children:Object(k.jsx)(fe.a,{justifyContent:"center",container:!0,wrap:"wrap",spacing:2,children:Object(k.jsx)(fe.a,{item:!0,zeroMinWidth:!0,children:Object(k.jsx)(x.a,{fontSize:"15px",fontFamily:"'Poppins', sans-serif",margin:"20px",children:"Travelgram invites all travelers to share their adventures. Share your recent travels and keep in touch with old friends and find new ones as you all share your memories in one place."})})})}),Object(k.jsx)(x.a,{fontSize:"40px",fontFamily:"'Abril Fatface', cursive",textAlign:"center",children:"Meet The Team"}),Object(k.jsx)(m.a,{sx:{width:{xs:320,sm:400,md:600},my:1,mx:"auto",p:2},children:Object(k.jsxs)(fe.a,{justifyContent:"center",container:!0,wrap:"wrap",spacing:2,children:[Object(k.jsxs)(fe.a,{item:!0,children:[Object(k.jsx)(x.a,{fontSize:"30px",fontFamily:"'Poppins', sans-serif",textAlign:"center",padding:"5px",margin:"5px",children:"Orawee Chantravutikorn"}),Object(k.jsx)(ge.a,{style:we,sx:{width:{xs:180,sm:250},height:{xs:180,sm:250}},alt:"Orawee Chantravutikorn",src:"https://res.cloudinary.com/orawee/image/upload/v1634152166/LRG_DSC04871_o04xck.jpg"})]}),Object(k.jsx)(fe.a,{item:!0,zeroMinWidth:!0,children:Object(k.jsxs)(x.a,{textAlign:"center",children:[Object(k.jsx)("div",{children:"Orawee is responsible for the functionality of the Login/Signup Component, as well as the functionality of the Search bar in the Nav to provide a full stack experience for the user. She designed the initial setup of the team page, as well as contributed to vital CSS aspects of the app. She also collaborated with the team with the initial builds on the front-end, and back-end."}),Object(k.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/orawee-chantravutikorn/",children:Object(k.jsx)("i",{class:"fab fa-linkedin icon"})})]})})]})}),Object(k.jsx)(m.a,{sx:{width:{xs:320,sm:400,md:600},my:1,mx:"auto",p:2},children:Object(k.jsxs)(fe.a,{justifyContent:"center",container:!0,wrap:"wrap",spacing:2,children:[Object(k.jsxs)(fe.a,{item:!0,children:[Object(k.jsx)(x.a,{textAlign:"center",padding:"5px",margin:"5px",fontSize:"30px",fontFamily:"'Poppins', sans-serif",children:"Alex Delaney"}),Object(k.jsx)(ge.a,{style:we,sx:{width:{xs:180,sm:250},height:{xs:180,sm:250}},alt:"Alex Delaney",src:"https://res.cloudinary.com/orawee/image/upload/v1637696028/Screen_Shot_2021-11-23_at_11.33.09_AM_edtp5x.png"})]}),Object(k.jsx)(fe.a,{item:!0,zeroMinWidth:!0,children:Object(k.jsxs)(x.a,{textAlign:"center",children:[Object(k.jsx)("div",{children:"Alex is responsible for the functionality, design, and responsiveness of the Feed and Explore components. She implemented CRUD functionality on both pages to create for a better user experience. She played a key role in the functionality of the backend, which allowed each post to be associated with its username data. She also collaborated with the team with the initial builds on the front-end and back end."}),Object(k.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/adelaney923/",children:Object(k.jsx)("i",{class:"fab fa-linkedin icon"})})]})})]})}),Object(k.jsx)(m.a,{sx:{width:{xs:320,sm:400,md:600},my:1,mx:"auto",p:2},children:Object(k.jsxs)(fe.a,{justifyContent:"center",container:!0,wrap:"wrap",spacing:2,children:[Object(k.jsxs)(fe.a,{item:!0,children:[Object(k.jsx)(x.a,{textAlign:"center",padding:"5px",margin:"5px",fontSize:"30px",fontFamily:"'Poppins', sans-serif",children:"Shinhee Park"}),Object(k.jsx)(ge.a,{style:we,sx:{width:{xs:180,sm:250},height:{xs:180,sm:250}},alt:"",src:"https://res.cloudinary.com/orawee/image/upload/v1637695723/StudioGhibli/Screen_Shot_2021-11-23_at_11.28.05_AM_v7tfra.png"})]}),Object(k.jsx)(fe.a,{item:!0,zeroMinWidth:!0,children:Object(k.jsxs)(x.a,{textAlign:"center",children:[Object(k.jsx)("div",{children:"Shinhee is responsible for the CRUD functionality of the Create Post component. She also worked on the responsiveness on the Nav Bar to optimize its functionality for mobile, and desktop view. She assisted in some of the vital CSS aspects throughout the app, and collaborated with the team with the initial builds on the front-end, and back-end. She also contributed in the administrative tasks such as, the ReadMe updates, and the bios of each team member."}),Object(k.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/shinhee-park/",children:Object(k.jsx)("i",{class:"fab fa-linkedin icon"})})]})})]})}),Object(k.jsx)(m.a,{sx:{width:{xs:320,sm:400,md:600},my:1,mx:"auto",p:2},children:Object(k.jsxs)(fe.a,{justifyContent:"center",container:!0,wrap:"wrap",spacing:2,children:[Object(k.jsxs)(fe.a,{item:!0,children:[Object(k.jsx)(x.a,{textAlign:"center",padding:"5px",margin:"5px",fontSize:"30px",fontFamily:"'Poppins', sans-serif",children:"Daniel Lee"}),Object(k.jsx)(ge.a,{style:we,sx:{width:{xs:180,sm:250},height:{xs:180,sm:250}},alt:"Daniel Lee",src:"https://res.cloudinary.com/orawee/image/upload/v1637704503/IMG_4291_so3m4j.jpg"})]}),Object(k.jsx)(fe.a,{item:!0,zeroMinWidth:!0,children:Object(k.jsxs)(x.a,{textAlign:"center",children:[Object(k.jsx)("div",{children:"Daniel is responsible for the initial set up, design, and functionality of both the Header and Footer Navs. He contributed much of the CSS seen on our page, and fixed the nitty gritty details within certain components. He also collaborated with the team with the initial builds on the front-end, and back-end."}),Object(k.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/daniel-m-lee-j062192/",children:Object(k.jsx)("i",{class:"fab fa-linkedin icon"})})]})})]})})]})})})}var ye=function(){var e=Object(n.useState)({token:void 0,user:void 0}),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),r=Object(l.a)(c,2),j=r[0],d=r[1],h=Object(n.useState)(""),b=Object(l.a)(h,2),u=b[0],x=b[1],m=Object(n.useState)([]),p=Object(l.a)(m,2),O=p[0],g=p[1],y=Object(n.useState)(!1),S=Object(l.a)(y,2),P=S[0],N=S[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,v.a.post("https://travelgram-app-heroku.herokuapp.com/tokenIsValid",null,{headers:{"x-auth-token":t}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,v.a.get("https://travelgram-app-heroku.herokuapp.com/users/",{headers:{"x-auth-token":t}});case 8:a=e.sent,s({token:t,user:a.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(n.useEffect)((function(){fetch("https://travelgram-app-heroku.herokuapp.com/users/daniel123").then((function(e){return e.json()})).then((function(e){d(e.user.posts)}))}),[P]),Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(w.Provider,{value:{userData:a,setUserData:s},children:[Object(k.jsx)(pe,{handleClearClick:function(){N(!0),x(""),g(j)},term:u,searchKeyword:function(e){if(x(e),""!==e){var t=j.filter((function(t){return Object.values(t.location).join("").toLowerCase().includes(e.toLowerCase())}));g(t)}else g(j)}}),Object(k.jsxs)(f.d,{children:[Object(k.jsx)(f.b,{exact:!0,path:"/Signup",element:Object(k.jsx)(C,{})}),Object(k.jsx)(f.b,{exact:!0,path:"/feed",element:Object(k.jsx)(E,{})}),Object(k.jsx)(f.b,{exact:!0,path:"/createPost",element:Object(k.jsx)(I,{})}),Object(k.jsx)(f.b,{exact:!0,path:"/",element:Object(k.jsx)(D,{})}),Object(k.jsx)(f.b,{exact:!0,path:"/teamPage",element:Object(k.jsx)(ke,{})}),Object(k.jsx)(f.b,{exact:!0,path:"/explore",element:Object(k.jsx)(Oe,{feedData:u.length<1?j:O})})]}),Object(k.jsx)(K,{})]})})};a(189);c.a.render(Object(k.jsx)(u.a,{children:Object(k.jsx)(ye,{})}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.5746a8fe.chunk.js.map