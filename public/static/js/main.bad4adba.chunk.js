(this["webpackJsonpdub-donesi"]=this["webpackJsonpdub-donesi"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),s=n.n(c),i=(n(38),n(14)),o=n(4),u=n(3),l=n.n(u),d=n(5),p=n(2),h=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(p.a)(c,2),i=s[0],o=s[1],u=Object(a.useRef)([]),h=Object(a.useCallback)(function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c,s,i,d,p=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:"GET",a=p.length>2&&void 0!==p[2]?p[2]:null,c=p.length>3&&void 0!==p[3]?p[3]:{},r(!0),s=new AbortController,u.current.push(s),e.prev=6,e.next=9,fetch(t,{method:n,body:a,headers:c,signal:s.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(d=e.sent,u.current=u.current.filter((function(e){return e!==s})),i.ok){e.next=16;break}throw new Error(d.message);case 16:return r(!1),e.abrupt("return",d);case 20:throw e.prev=20,e.t0=e.catch(6),o(e.t0.message),r(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){return function(){u.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:i,sendRequest:h,clearError:function(){o(null)}}},j=(n(40),n(41),n(42),n(0)),b=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"logo",src:"/images/logo.png"}),Object(j.jsx)("img",{className:"bg-image",src:"/images/pexel.jpg"})]})},O=function(){var e,t=h(),n=(t.isLoading,t.error,t.sendRequest),r=(t.clearError,Object(a.useState)()),c=Object(p.a)(r,2),s=c[0],i=c[1],u=Object(o.f)();function O(e){u.push(e.id)}return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("https://dub-donesi-react.herokuapp.com/api/restaurants");case 3:t=e.sent,i(t.restaurants),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),s&&(e=s.map((function(e){return Object(j.jsx)("button",{onClick:O.bind(undefined,e),children:Object(j.jsx)("p",{children:e.name})},e.id)}))),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"restaurant-list",children:e}),Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"title-container",children:Object(j.jsx)("div",{className:"home-box",children:Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("span",{className:"block"}),Object(j.jsxs)("h1",{className:"title-text",children:["Naru\u010di hranu i u\u017eivaj!",Object(j.jsx)("span",{})]})]})})})]})},m=n(15),f=n(18),v=n(19),x=n(21),g=n(20);n(49);var S=function(){var e=h().sendRequest,t=Object(o.f)(),n=Object(a.useState)(""),r=Object(p.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),u=Object(p.a)(i,2),b=u[0],O=u[1],m=Object(a.useState)(""),f=Object(p.a)(m,2),v=f[0],x=f[1],g=Object(a.useState)([]),S=Object(p.a)(g,2),k=S[0],y=S[1],C=Object(a.useState)(""),w=Object(p.a)(C,2),N=w[0],I=w[1],T=Object(a.useState)(""),E=Object(p.a)(T,2),z=E[0],D=E[1];Object(a.useEffect)((function(){var e=localStorage.getItem("orderTotal");I(e);var t=localStorage.getItem("restaurantId");D(t);var n=localStorage.getItem("list"),a=JSON.parse(n);y(a)}),[c]);var q=function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(c.length>3&&v.length>3&&b.length>3)){t.next=13;break}return t.prev=2,t.next=5,e("https://dub-donesi-react.herokuapp.com/api/orders/","POST",JSON.stringify({name:c,phone:v,address:b,foodOrder:k,total:N,restaurantId:z}),{"Content-Type":"application/json"});case 5:alert("Uspjesno ste narucili"),M(),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=14;break;case 13:alert("Provjerite vase podatke");case 14:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),M=function(){var n=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e("https://dub-donesi-react.herokuapp.com/api/restaurants/counter","PATCH",JSON.stringify({restaurantId:z}),{"Content-Type":"application/json"});case 3:window.localStorage.clear(),t.push("/"),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return Object(j.jsxs)("form",{className:"order-form",onSubmit:q,children:[Object(j.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},placeholder:"Ime i prezime",type:"text",name:"name",required:!0}),Object(j.jsx)("input",{value:b,onChange:function(e){return O(e.target.value)},placeholder:"Adresa",type:"text",name:"address",required:!0}),Object(j.jsx)("input",{value:v,onChange:function(e){return x(e.target.value)},placeholder:"Telefon",type:"text",name:"phone",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Naruci"})]})},k=(n(50),function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).handleClickBack=function(e){a.props.history.goBack()},a.state={list:[],chosenSize:[],orderTotal:""},a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.hydrateStateWithLocalStorage()}},{key:"hydrateStateWithLocalStorage",value:function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{t=JSON.parse(t),this.setState(Object(m.a)({},e,t))}catch(n){this.setState(Object(m.a)({},e,t))}}}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(S,{}),Object(j.jsxs)("div",{className:"order-container",children:[Object(j.jsx)("div",{className:"korpa-div",children:Object(j.jsx)("p",{children:"KORPA"})}),this.state.list.map((function(e){return Object(j.jsx)("div",{className:"item-div",children:e.name+" "+e.chosenSize+" "},e.id)})),Object(j.jsx)("div",{className:"total-div",children:Object(j.jsxs)("p",{children:["Total ",this.state.orderTotal," KM"]})}),Object(j.jsx)("button",{className:"back-button",onClick:this.handleClickBack,children:"Nazad"})]})]})}}]),n}(a.Component)),y=n(13),C=n(10),w=(n(51),function(e){return Object(j.jsxs)("div",{className:"food-list",children:[Object(j.jsx)("button",{className:"food-button",onClick:e.handleOpenModal,id:e.id,children:e.name}),Object(j.jsx)("img",{className:"food-img",src:e.image})]})}),N=n(28),I=n.n(N);n(61);I.a.setAppElement("#root");var T=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).handleClickPush=function(e){0!==a.state.list.length?a.props.history.push("/checkout"):alert("Izaberite hranu koju zelite naruciti")},a.handleClickBack=function(e){a.props.history.push("/")},a.handleCheckbox=function(e){var t=e.target.checked,n=e.target.value;1==t&&a.setState({chosenTopping:[].concat(Object(y.a)(a.state.chosenTopping),[n])}),0==t&&a.setState({chosenTopping:a.state.chosenTopping.filter((function(e){return e!==n}))})},a.state={newItem:"",list:[],clicks:1,showModal:!1,chosenSize:"Izaberite",chosenTopping:"",orderTotal:0,restaurantId:a.props.restaurantId},a.handleOpenModal=a.handleOpenModal.bind(Object(C.a)(a)),a.handleCloseModal=a.handleCloseModal.bind(Object(C.a)(a)),a.handleAddModal=a.handleAddModal.bind(Object(C.a)(a)),a.handleChangeSize=a.handleChangeSize.bind(Object(C.a)(a)),a.handleCheckbox=a.handleCheckbox.bind(Object(C.a)(a)),a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.hydrateStateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),this.saveStateToLocalStorage()}},{key:"hydrateStateWithLocalStorage",value:function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{t=JSON.parse(t),this.setState(Object(m.a)({},e,t))}catch(n){this.setState(Object(m.a)({},e,t))}}}},{key:"saveStateToLocalStorage",value:function(){for(var e in this.state)localStorage.setItem(e,JSON.stringify(this.state[e]))}},{key:"handleOpenModal",value:function(e){var t=this;this.setState({showModal:!0}),this.setState({newItem:{id:e.target.id}},(function(){return t.handleItemState()})),this.setState({chosenTopping:""})}},{key:"handleItemState",value:function(){var e=this.state.newItem.id,t=this.props.items.find((function(t){return t.id===e}));this.setState({newItem:{id:t.id,size:t.size.map((function(e){return[e.name,e.price]})),topping:t.topping.map((function(e){return[e.name,e.price]}))}})}},{key:"handleAddModal",value:function(){var e=this;if("Izaberite"!=this.state.chosenSize){var t=this.state.newItem.id,n=this.props.items.find((function(e){return e.id===t}));this.setState({showModal:!1}),this.setState({clicks:this.state.clicks+1});var a=parseInt(this.state.chosenSize.match(/\d+/g)),r=parseInt(this.state.orderTotal);this.setState({orderTotal:r+=a}),this.setState({newItem:{name:n.name,image:n.image,id:n.id+this.state.clicks,size:n.size.map((function(e){return[e.name,e.price]})),chosenSize:this.state.chosenSize,chosenTopping:[this.state.chosenTopping]}},(function(){return e.handleItemList()}))}else alert("Izaberite velicinu")}},{key:"handleItemList",value:function(){var e=Object(y.a)(this.state.list);e.push(this.state.newItem),this.setState({list:e,newItem:""}),this.setState({chosenSize:"Izaberite"})}},{key:"handleChangeSize",value:function(e){this.setState({chosenSize:e.target.value})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"deleteItem",value:function(e){var t=Object(y.a)(this.state.list),n=t.filter((function(t){return t.id!==e}));this.setState({list:n});var a=t.filter((function(t){return t.id===e})),r=parseInt(a[0].chosenSize.match(/\d+/g)),c=parseInt(this.state.orderTotal);this.setState({orderTotal:c-=r})}},{key:"render",value:function(){var e,t=this,n=this.state.newItem.size;n&&(e=n.map((function(e){return Object(j.jsxs)("option",{children:[e[0]," ",e[1]+" KM"]},e)})));var a,r=this.state.newItem.topping;return r&&(a=r.map((function(e){return Object(j.jsxs)("label",{className:"topping",children:[Object(j.jsx)("p",{children:e[0]}),Object(j.jsx)("input",{onChange:t.handleCheckbox,type:"checkbox",id:e[0],name:e,value:e[0]})]},e)}))),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{children:[Object(j.jsxs)(I.a,{isOpen:this.state.showModal,contentLabel:"onRequestClose Example",onRequestClose:this.handleCloseModal,className:"food-modal",children:[Object(j.jsx)("div",{className:"modal-select",children:Object(j.jsxs)("select",{onChange:this.handleChangeSize,children:[Object(j.jsx)("option",{children:"Izaberite"}),e]})}),Object(j.jsxs)("div",{className:"modal-button",children:[Object(j.jsx)("button",{onClick:this.handleCloseModal,children:"Nazad"}),Object(j.jsx)("button",{onClick:this.handleAddModal,children:"Dodaj u korpu"})]}),Object(j.jsx)("div",{className:"topping-container",children:a})]}),Object(j.jsx)("div",{className:"food-item-container",children:this.props.items.map((function(e){return Object(j.jsx)(w,{id:e.id,name:e.name,image:e.image,handleOpenModal:t.handleOpenModal},e.id)}))}),Object(j.jsxs)("div",{className:"order-container",children:[Object(j.jsx)("div",{className:"korpa-div",children:Object(j.jsx)("p",{children:"KORPA"})}),this.state.list.map((function(e){return Object(j.jsxs)("div",{className:"item-div",children:[e.name+" "+e.chosenSize+" ",Object(j.jsx)("button",{onClick:function(){return t.deleteItem(e.id)},children:"X"})]},e.id)})),Object(j.jsx)("div",{className:"total-div",children:Object(j.jsxs)("p",{children:["Total ",this.state.orderTotal," KM"]})}),Object(j.jsx)("div",{className:"order-button",children:Object(j.jsx)("button",{onClick:this.handleClickPush,children:"Naruci"})}),Object(j.jsx)("button",{className:"back-button",onClick:this.handleClickBack,children:"Nazad"})]})]})]})}}]),n}(a.Component),E=Object(o.h)(T),z=(n(62),function(e){return Object(j.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(j.jsx)("div",{className:"lds-dual-ring"})})}),D=function(){var e=h(),t=e.isLoading,n=e.sendRequest,c=Object(a.useState)(),s=Object(p.a)(c,2),i=s[0],u=s[1],b=Object(o.g)().restaurantId;return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("https://dub-donesi-react.herokuapp.com/api"+"/foods/".concat(b));case 3:t=e.sent,u(t.food),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()(),window.onload=window.localStorage.clear()}),[n,b]),Object(j.jsxs)(r.a.Fragment,{children:[t&&Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(z,{})}),!t&&i&&Object(j.jsx)(E,{restaurantId:b,items:i})]})},q=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"order-form",onSubmit:e.loginHandler,children:[Object(j.jsx)("input",{value:e.email,onChange:function(t){return e.setEmail(t.target.value)},placeholder:"Email",type:"text",name:"email",required:!0}),Object(j.jsx)("input",{value:e.password,onChange:function(t){return e.setPassword(t.target.value)},placeholder:"Password",type:"password",name:"password",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Login"})]})})},M=function(){var e,t,n=h().sendRequest,r=Object(a.useState)(),c=Object(p.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(),u=Object(p.a)(o,2),b=u[0],O=u[1],m=Object(a.useState)(""),f=Object(p.a)(m,2),v=f[0],x=f[1],g=Object(a.useState)(""),S=Object(p.a)(g,2),k=S[0],C=S[1],w=Object(a.useState)(""),N=Object(p.a)(w,2),I=N[0],T=N[1],E=Object(a.useState)(""),z=Object(p.a)(E,2),D=z[0],q=z[1],M=Object(a.useState)(""),A=Object(p.a)(M,2),R=A[0],L=A[1],P=Object(a.useState)(""),F=Object(p.a)(P,2),_=F[0],J=F[1],U=Object(a.useState)(""),K=Object(p.a)(U,2),B=K[0],W=K[1],H=Object(a.useState)(""),G=Object(p.a)(H,2),X=G[0],Q=G[1],V=Object(a.useState)(""),Y=Object(p.a)(V,2),Z=Y[0],$=Y[1],ee=Object(a.useState)(""),te=Object(p.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)(""),ce=Object(p.a)(re,2),se=ce[0],ie=ce[1],oe=Object(a.useState)(""),ue=Object(p.a)(oe,2),le=ue[0],de=ue[1],pe=Object(a.useState)([]),he=Object(p.a)(pe,2),je=he[0],be=he[1],Oe=Object(a.useState)(""),me=Object(p.a)(Oe,2),fe=me[0],ve=me[1],xe=Object(a.useState)(""),ge=Object(p.a)(xe,2),Se=ge[0],ke=ge[1],ye=Object(a.useState)([]),Ce=Object(p.a)(ye,2),we=Ce[0],Ne=Ce[1],Ie=Object(a.useState)(""),Te=Object(p.a)(Ie,2),Ee=Te[0],ze=Te[1],De=Object(a.useState)(""),qe=Object(p.a)(De,2),Me=qe[0],Ae=qe[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("https://dub-donesi-react.herokuapp.com/api/api/foods");case 3:t=e.sent,O(t.foods),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),b&&(e=b.map((function(e){return Object(j.jsxs)("p",{children:[e.name," | = | Food Creator: ",e.creator,"| = | Food ID: ",e.id]},e.id)}))),Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("https://dub-donesi-react.herokuapp.com/api/restaurants");case 3:t=e.sent,i(t.restaurants),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),s&&(t=s.map((function(e){return Object(j.jsxs)("p",{children:[e.name,"_______",e.id,"______",e.image]},e.id)})));var Re=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n("https://dub-donesi-react.herokuapp.com/api/restaurants/","POST",JSON.stringify({name:v,email:k,image:I}),{"Content-Type":"application/json"});case 4:alert("Restaurant Added"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n("https://dub-donesi-react.herokuapp.com/api/restaurants/delete","DELETE",JSON.stringify({restaurantId:D}),{"Content-Type":"application/json"});case 4:alert("Restaurant Deleted"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n("https://dub-donesi-react.herokuapp.com/api/restaurants/update","PATCH",JSON.stringify({updateRestaurantId:Z,updateName:_,updateEmail:B,updateImage:X}),{"Content-Type":"application/json"});case 4:alert("Restaurant Updated"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n("https://dub-donesi-react.herokuapp.com/api/foods/create","POST",JSON.stringify({name:ne,size:je,topping:we,image:se,creator:le}),{"Content-Type":"application/json"});case 4:alert("Food Added"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n("https://dub-donesi-react.herokuapp.com/api/foods/delete","DELETE",JSON.stringify({foodId:R}),{"Content-Type":"application/json"});case 4:alert("Food Deleted"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:Re,children:[Object(j.jsx)("h1",{children:"ADD RESTAURANTS"}),Object(j.jsx)("input",{value:v,onChange:function(e){return x(e.target.value)},placeholder:"name",type:"text",name:"name",required:!0}),Object(j.jsx)("input",{value:k,onChange:function(e){return C(e.target.value)},placeholder:"Email",type:"text",name:"email",required:!0}),Object(j.jsx)("input",{value:I,onChange:function(e){return T(e.target.value)},placeholder:"Image",type:"text",name:"image",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Apply"})]}),Object(j.jsxs)("form",{onSubmit:Le,children:[Object(j.jsx)("h1",{children:"DELETE RESTAURANTS"}),Object(j.jsx)("input",{value:D,onChange:function(e){return q(e.target.value)},placeholder:"restaurantId",type:"text",name:"restaurantId",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Delete"})]}),Object(j.jsxs)("form",{onSubmit:Pe,children:[Object(j.jsx)("h1",{children:"UPDATE RESTAURANTS"}),Object(j.jsx)("input",{value:_,onChange:function(e){return J(e.target.value)},placeholder:"name",type:"text",name:"updatename",required:!0}),Object(j.jsx)("input",{value:B,onChange:function(e){return W(e.target.value)},placeholder:"Email",type:"text",name:"updateEmail",required:!0}),Object(j.jsx)("input",{value:X,onChange:function(e){return Q(e.target.value)},placeholder:"Image",type:"text",name:"updateimage",required:!0}),Object(j.jsx)("input",{value:Z,onChange:function(e){return $(e.target.value)},placeholder:"RestaurantId",type:"text",name:"updaterestaurantId",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Update"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"size and toppings"}),Object(j.jsx)("input",{value:fe,onChange:function(e){return ve(e.target.value)},placeholder:"size name",type:"text",name:"size",required:!0}),Object(j.jsx)("input",{value:Se,onChange:function(e){return ke(e.target.value)},placeholder:"size price",type:"text",name:"size",required:!0}),Object(j.jsx)("input",{value:Ee,onChange:function(e){return ze(e.target.value)},placeholder:"topping name",type:"text",name:"topping",required:!0}),Object(j.jsx)("input",{value:Me,onChange:function(e){return Ae(e.target.value)},placeholder:"topping price",type:"text",name:"price",required:!0}),Object(j.jsx)("button",{onClick:function(){be([].concat(Object(y.a)(je),[{name:fe,price:Se}]))},children:"ADD"}),Object(j.jsx)("button",{onClick:function(){Ne([].concat(Object(y.a)(we),[{name:Ee,price:Me}]))},children:"ADD"}),Object(j.jsx)("button",{onClick:function(){Ne([]),be([])},children:"CLEAR"})]}),Object(j.jsxs)("form",{onSubmit:Fe,children:[Object(j.jsx)("h1",{children:"ADD FOOD"}),Object(j.jsx)("input",{value:ne,onChange:function(e){return ae(e.target.value)},placeholder:"name",type:"text",name:"addFood",required:!0}),Object(j.jsx)("input",{value:se,onChange:function(e){return ie(e.target.value)},placeholder:"image",type:"text",name:"image",required:!0}),Object(j.jsx)("input",{value:le,onChange:function(e){return de(e.target.value)},placeholder:"creator",type:"text",name:"creator",required:!0}),Object(j.jsx)("button",{type:"submit",children:"ADD FOOD"})]}),Object(j.jsxs)("form",{onSubmit:_e,children:[Object(j.jsx)("h1",{children:"DELETE FOOD"}),Object(j.jsx)("input",{value:R,onChange:function(e){return L(e.target.value)},placeholder:"food Id",type:"text",name:"foodid",required:!0}),Object(j.jsx)("button",{children:"Delete"})]}),Object(j.jsxs)("div",{children:[we.map((function(e){return Object(j.jsxs)("div",{className:"station",children:[e.name," - ",e.price," KM"]},e.name)})),je.map((function(e){return Object(j.jsxs)("div",{className:"station",children:[e.name," - ",e.price," KM"]},e.name)})),e,Object(j.jsx)("br",{}),t]})]})},A=function(e){var t=h().sendRequest,n=Object(a.useState)(!1),r=Object(p.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),o=Object(p.a)(i,2),u=o[0],b=o[1],O=Object(a.useState)(""),m=Object(p.a)(O,2),f=m[0],v=m[1],x=function(){var e=Object(d.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,t("https://dub-donesi-react.herokuapp.com/api/admin/login","POST",JSON.stringify({email:u,password:f}),{"Content-Type":"application/json"});case 4:a=e.sent,s(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:c?Object(j.jsx)(M,{}):Object(j.jsx)(q,{loginHandler:x,setEmail:b,setPassword:v,email:u,password:f})})};var R=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/admin",exact:!0,component:A}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:O}),Object(j.jsx)(o.a,{path:"/checkout",exact:!0,component:k}),Object(j.jsx)(o.a,{path:"/:restaurantId",component:D})]})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.bad4adba.chunk.js.map