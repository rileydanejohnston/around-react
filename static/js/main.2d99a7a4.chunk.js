(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(7),r=n.n(o),s=(n(15),n(10)),i=n(4),u=n(2),l=n(0);function d(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"logo"})})}var p=c.a.createContext();function h(e){var t=e.card,n=e.onCardLike,a=e.onCardClick,o=e.onDeleteClick,r=c.a.useContext(p),s=r._id===t.ownerId,i="cards__close-button ".concat(s?"cards__close-button_visible":"cards__close-button_hidden"),u=t.likes.some((function(e){return e._id===r._id}))?"cards__like-button cards__like-button_active":"cards__like-button";return Object(l.jsxs)("li",{className:"cards__item",children:[Object(l.jsx)("button",{className:i,onClick:function(){o(t)},type:"button"}),Object(l.jsx)("img",{className:"cards__photo",src:t.link,alt:t.name,onClick:function(){a(t)}}),Object(l.jsxs)("div",{className:"cards__label",children:[Object(l.jsx)("h2",{className:"cards__name",children:t.name}),Object(l.jsxs)("div",{className:"cards__like",children:[Object(l.jsx)("button",{className:u,onClick:function(){n(t)},type:"button"}),Object(l.jsx)("p",{className:"cards__like-count",children:t.likes.length})]})]})]})}function b(e){var t=e.onEditProfileClick,n=e.onAddPlaceClick,a=e.onEditAvatarClick,o=e.onCardClick,r=e.onCardLike,s=e.onDeleteClick,i=e.cards,u=c.a.useContext(p);return Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("div",{className:"profile__avatar",onClick:a,style:{backgroundImage:"url(".concat(u.avatar,")")},children:Object(l.jsx)("button",{className:"profile__avatar-btn",type:"button"})}),Object(l.jsxs)("div",{className:"profile__info-container",children:[Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__name-button",children:[Object(l.jsx)("h1",{className:"profile__name",children:u.name}),Object(l.jsx)("button",{className:"profile__edit-button",type:"button",onClick:t})]}),Object(l.jsx)("p",{className:"profile__about",children:u.about})]}),Object(l.jsx)("button",{className:"profile__add-button",type:"button",onClick:n})]})]}),Object(l.jsx)("section",{className:"locations",children:Object(l.jsx)("ul",{className:"cards",children:i.map((function(e){return Object(l.jsx)(h,{card:e,onCardLike:r,onCardClick:o,onDeleteClick:s},"".concat(e.cardId))}))})})]})}function _(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Around The U.S."})})}function m(e){var t=e.name,n=e.title,a=e.children,c=e.isOpen,o=e.onClose,r=e.onSubmit;return Object(l.jsx)("div",{className:c?"popup popup_active popup_type_".concat(t):"popup popup_type_".concat(t),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{className:"popup__close",type:"button",onClick:o}),Object(l.jsxs)("form",{className:"popup__form",id:t,onSubmit:r,method:"POST",name:t,children:[Object(l.jsx)("h3",{className:"popup__title popup__title_confirm",children:n}),a,Object(l.jsx)("button",{className:"popup__submit popup__submit_confirm",type:"submit",name:"submit",children:"Save"})]})]})})}function f(e){var t=e.card,n=e.onClose;return Object(l.jsx)("div",{className:""===t.link?"popup":"popup popup_active",children:Object(l.jsxs)("div",{className:"popup__image-wrap",children:[Object(l.jsx)("button",{className:"popup__close popup__close_type_image",type:"button",onClick:n}),Object(l.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(l.jsx)("p",{className:"popup__caption",children:t.name})]})})}var j=n(8),v=n(9),O=new(function(){function e(t){Object(j.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(v.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject()}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"updateProfile",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._handleResponse(e)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"changeLikeStatus",value:function(e,t){return t?this.addLike(e):this.removeLike(e)}},{key:"updateProfilePic",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._handleResponse(e)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-10",headers:{authorization:"2a32e80d-c23f-4ed9-9cf5-671c417d0702","Content-Type":"application/json"}});var k=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],r=c.a.useState(""),s=Object(u.a)(r,2),i=s[0],d=s[1],h=c.a.useContext(p);return c.a.useEffect((function(){o(h.name),d(h.about)}),[h,e.isOpen]),Object(l.jsxs)(m,{title:"Edit profile",name:"profile",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:i})},isOpen:e.isOpen,onClose:e.onClose,children:[Object(l.jsx)("input",{className:"popup__name popup__input",onChange:function(e){o(e.target.value)},value:a,id:"profile-name",type:"text",placeholder:"Name",name:"name",minLength:"2",maxLength:"40",required:!0}),Object(l.jsx)("span",{className:"popup__error",id:"profile-name-error"}),Object(l.jsx)("input",{className:"popup__about popup__input",onChange:function(e){d(e.target.value)},value:i,id:"profile-about",type:"text",placeholder:"About",name:"about",minLength:"2",maxLength:"200",required:!0}),Object(l.jsx)("span",{className:"popup__error",id:"profile-about-error"})]})};var x=function(e){var t=c.a.useRef("");return Object(l.jsxs)(m,{title:"Change profile picture",name:"avatar",isOpen:e.isOpen,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},onClose:e.onClose,children:[Object(l.jsx)("input",{className:"popup__about popup__about_profile-pic popup__input",ref:t,id:"profile-pic-url",type:"url",placeholder:"Image link",name:"pic",required:!0}),Object(l.jsx)("span",{className:"popup__error",id:"profile-pic-url-error"})]})};function C(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlaceSubmit,o=c.a.useState(""),r=Object(u.a)(o,2),s=r[0],i=r[1],d=c.a.useState(""),p=Object(u.a)(d,2),h=p[0],b=p[1];return Object(l.jsxs)(m,{title:"New place",name:"place",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a(s,h)},children:[Object(l.jsx)("input",{className:"popup__name popup__input",onChange:function(e){i(e.target.value)},value:s,id:"newPlace-name",type:"text",placeholder:"Title",name:"title",minLength:"1",maxLength:"30",required:!0}),Object(l.jsx)("span",{className:"popup__error",id:"newPlace-name-error"}),Object(l.jsx)("input",{className:"popup__about popup__input",onChange:function(e){b(e.target.value)},value:h,id:"newPlace-about",type:"url",placeholder:"Image link",name:"link",required:!0}),Object(l.jsx)("span",{className:"popup__error",id:"newPlace-about-error"})]})}var N=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),r=Object(u.a)(o,2),h=r[0],j=r[1],v=c.a.useState(!1),N=Object(u.a)(v,2),g=N[0],y=N[1],S=c.a.useState({link:"",name:""}),P=Object(u.a)(S,2),L=P[0],U=P[1],I=c.a.useState([]),E=Object(u.a)(I,2),w=E[0],A=E[1],T=c.a.useState({name:"",about:"",avatar:"",_id:""}),D=Object(u.a)(T,2),R=D[0],q=D[1];function J(){y(!1),a(!1),j(!1),U({link:"",name:""})}return c.a.useEffect((function(){O.getUserInfo().then((function(e){var t=e.name,n=e.about,a=e.avatar,c=e._id;q({name:t,about:n,avatar:a,_id:c})})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){O.getCards().then((function(e){var t=e.map((function(e){return{likes:e.likes,name:e.name,link:e.link,cardId:e._id,ownerId:e.owner._id}}));A(t)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){var e=function(e){"Escape"===e.key&&J()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(l.jsx)("div",{className:"root",children:Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)(p.Provider,{value:R,children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{onEditProfileClick:function(){a(!0)},onAddPlaceClick:function(){j(!0)},onEditAvatarClick:function(){y(!0)},onCardClick:function(e){var t=e.link,n=e.name;U({link:t,name:n})},cards:w,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===R._id}));O.changeLikeStatus(e.cardId,!t).then((function(e){var t=w.map((function(t){return t.cardId===e._id?{likes:e.likes,name:e.name,link:e.link,cardId:e._id,ownerId:e.owner._id}:t}));A(t)})).catch((function(e){return console.log(e)}))},onDeleteClick:function(e){O.deleteCard(e.cardId).then((function(t){var n=w.filter((function(t){return t.cardId!==e.cardId}));A(n)})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(_,{}),Object(l.jsx)(f,{card:L,onClose:J}),Object(l.jsx)(m,{title:"Are you sure?",name:"confirm"}),Object(l.jsx)(x,{isOpen:g,onClose:J,onUpdateAvatar:function(e){O.updateProfilePic(e).then((function(e){var t=Object(i.a)(Object(i.a)({},R),{},{avatar:e.avatar});q(t),J()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(k,{isOpen:n,onClose:J,onUpdateUser:function(e){O.updateProfile(e).then((function(e){var t=Object(i.a)(Object(i.a)({},R),{},{name:e.name,about:e.about});q(t),J()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(C,{isOpen:h,onClose:J,onAddPlaceSubmit:function(e,t){O.addCard(e,t).then((function(e){var t={likes:e.likes,name:e.name,link:e.link,cardId:e._id,ownerId:e.owner._id};A([t].concat(Object(s.a)(w))),J()})).catch((function(e){return console.log(e)}))}})]})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.2d99a7a4.chunk.js.map