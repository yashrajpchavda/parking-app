(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(e,t,n){"use strict";n.r(t),function(e){function a(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n\tquery GetParkingSpots {\n\t\tgetParkingSpots {\n\t\t\tid\n\t\t\tisOccupied\n\t\t\tunUsable\n\t\t\tnumber\n\t\t\tcar {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tplate\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tdisplayName\n\t\t\t}\n\t\t}\n\t}\n"]);return a=function(){return e},e}n("hosL");var o=n("QRet"),r=n("Y3FI"),i=n("cLlx"),c=n("qlrW"),l=n.n(c),s=n("4e9g"),u=n("FA6U"),d=n.n(u),f=n("R82R"),p=n("V2/N"),b=n("/ZiB"),m=n("+9tu"),g=n("9GZC"),v=Object(f.a)((function(){return{root:{flexGrow:1,marginTop:16}}})),h=l()(a());t.default=function(){var t=Object(o.useContext)(s.a).user;t||Object(r.route)("/login");var n=Object(i.b)(h),a=n.loading,c=n.data,l=Object(o.useState)({open:!1}),u=l[0],f=l[1],O=v(),j=Object(o.useCallback)((function(e){f({open:!0,spotData:{id:e.id,number:e.number,user:e.user,car:e.car,isOccupied:e.isOccupied}})})),x=[];return c&&(x=c.getParkingSpots),a?e("h1",null,"Loading..."):e("div",{class:d.a.home},e(b.a,{variant:"h5"},"Update parking spot"),e("div",{className:O.root},e(p.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"stretch",spacing:1,className:O.height},x.map((function(n){var a=n.number;return e(m.a,{number:a,isOccupied:n.isOccupied,unUsable:n.unUsable,id:n.id,user:n.user,car:n.car,onCardClick:j,contextUser:t,key:a})}))),e(g.a,{openDialog:u.open,onDialogClose:function(){f({open:!1})},spotData:u.spotData})))}}.call(this,n("hosL").h)},"+9tu":function(e,t,n){"use strict";(function(e){var a=n("hosL"),o=n("QRet"),r=n("PDtE"),i=(n("4e9g"),n("H9+9")),c=n.n(i),l=n("OVKZ"),s=n.n(l),u=n("V2/N"),d=n("bJWG"),f=n("/ZiB"),p=n("R82R"),b=Object(p.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center",color:e.palette.text.secondary,height:140},occupied:{backgroundColor:c.a[50]},unUsable:{backgroundColor:c.a[200]},mySpot:{backgroundColor:s.a[100]},card:{maxHeight:150,cursor:"pointer",position:"relative"},spotNumber:{position:"absolute",left:10,top:5}}})),m=function(e,t){return e&&e.id&&t&&t.id&&e.id===t.id};t.a=function(t){var n,i=t.number,c=t.id,l=t.isOccupied,s=t.unUsable,p=t.user,g=t.contextUser,v=t.car,h=t.onCardClick,O=b(),j=Object(o.useCallback)((function(){s||h({id:c,number:i,user:p,car:v,isOccupied:l})}),[l,c,s]);return n=s?Object(a.h)(f.a,{variant:"body1",component:"p"},"Not usable"):l?Object(a.h)(e,null,Object(a.h)(f.a,{variant:"body2",component:"p"},p.displayName),Object(a.h)(f.a,{variant:"body2",component:"p"},v.plate)):Object(a.h)(f.a,{variant:"body1",component:"p"},"Empty"),Object(a.h)(u.a,{className:O.card,item:!0,xs:3,sm:3,onClick:s?null:j},Object(a.h)(d.a,{className:Object(r.a)(O.paper,l&&O.occupied,m(p,g)&&O.mySpot,s&&O.unUsable)},Object(a.h)(f.a,{className:O.spotNumber,variant:"caption"},!s&&i),n))}}).call(this,n("hosL").Fragment)},"0g17":function(e,t,n){"use strict";var a=n("Fcif"),o=n("dV/x"),r=n("l8WD"),i=(n("W0B4"),n("PDtE")),c=n("gbh0"),l=r.default.forwardRef((function(e,t){var n=e.disableSpacing,c=void 0!==n&&n,l=e.classes,s=e.className,u=Object(o.a)(e,["disableSpacing","classes","className"]);return r.default.createElement("div",Object(a.a)({className:Object(i.a)(l.root,s,!c&&l.spacing),ref:t},u))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiDialogActions"})(l)},"1sEd":function(e,t,n){"use strict";var a=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("l8WD")),r=(0,a(n("c9Um")).default)(o.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=r},"26BU":function(e,t,n){"use strict";var a=n("Fcif"),o=n("dV/x"),r=n("l8WD"),i=(n("W0B4"),n("PDtE")),c=n("gbh0"),l=r.default.forwardRef((function(e,t){var n=e.classes,c=e.className,l=e.dividers,s=void 0!==l&&l,u=Object(o.a)(e,["classes","className","dividers"]);return r.default.createElement("div",Object(a.a)({className:Object(i.a)(n.root,c,s&&n.dividers),ref:t},u))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},"2ikl":function(e,t,n){"use strict";(function(e){function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){var e=l(["\n    mutation OccupyParkingSpot($toggleInput: ToggleParkingSpotInput!){\n        occupyParkingSpot(toggleInput: $toggleInput) {\n            id\n            number\n            isOccupied\n            occupiedAt\n            user {\n                id\n                displayName\n            }\n            car {\n                id\n                plate\n                name\n            }\n        }\n    }\n"]);return i=function(){return e},e}function c(){var e=l(["\n    query GetAllUsers {\n        getAllUsers {\n            id\n            displayName\n            email\n            isAdmin\n            cars {\n                id\n                name\n                plate\n            }\n        }\n    }\n"]);return c=function(){return e},e}function l(e,t){return t||(t=e.slice(0)),e.raw=t,e}var s=n("hosL"),u=n("QRet"),d=n("cLlx"),f=n("qlrW"),p=n.n(f),b=n("R82R"),m=n("0g17"),g=n("26BU"),v=n("MvTK"),h=n("YvUk"),O=n("AeqC"),j=n("3Dqh"),x=n("Fb1o"),y=n("/NZN"),E=n("zfEO"),k=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),C=p()(c()),w=p()(i());t.a=function(t){var n=t.onDialogClose,a=t.spotData,r=a.id,i=a.number,c=Object(u.useState)([]),l=c[0],f=c[1],p=Object(u.useState)({}),b=p[0],W=p[1],D=Object(u.useState)({}),S=D[0],P=D[1],N=Object(d.b)(C),R=N.loading,B=N.data,A=Object(d.a)(w),L=A[0],I=k(),M=Object(u.useCallback)((function(e){W(o({},b,{carId:e.target.value}))}),[b]),z=Object(u.useCallback)((function(e){var t=e.target.value,n=B.getAllUsers.find((function(e){return t===e.id}));W(o({},b,{userId:t,carId:n.cars[0].id})),n&&f(n.cars)}),[b,B]),T=Object(u.useCallback)((function(){L({variables:{toggleInput:{spotId:r,userId:b.userId,carId:b.carId}}}).then((function(){P({}),n()})).catch((function(e){P(o({},e.graphQLErrors[0].extensions.exception.errors))}))}),[b]),U=Object(u.useCallback)((function(){P(o({},S,{operation:null}))}),[S]);return Object(s.h)(e,null,R?Object(s.h)(h.a,{id:"form-dialog-title"},"Loading..."):Object(s.h)(e,null,Object(s.h)(h.a,{id:"form-dialog-title"},"Occupy Spot"),Object(s.h)(g.a,null,Object(s.h)(v.a,null,"Please select the user and car to occupy the parking spot ",Object(s.h)("strong",null,"#",i),"."),Object(s.h)("form",{className:I.root,autoComplete:"off"},Object(s.h)(j.a,{className:I.formControl,error:!!S.user},Object(s.h)(O.a,{htmlFor:"user-native-simple"},"User"),Object(s.h)(x.a,{native:!0,value:b.userId,onChange:z,inputProps:{name:"user",id:"user-native-simple"}},Object(s.h)("option",{value:""}),B.getAllUsers.map((function(e){var t=e.displayName,n=e.id;return Object(s.h)("option",{key:n,value:n},t)})))),Object(s.h)(j.a,{className:I.formControl,error:!!S.car},Object(s.h)(O.a,{htmlFor:"car-native-simple"},"Car"),Object(s.h)(x.a,{native:!0,value:b.carId,onChange:M,inputProps:{name:"car",id:"car-native-simple"}},l.map((function(e){var t=e.id,n=e.name,a=e.plate;return Object(s.h)("option",{key:t,value:t},n," - ",a)})))))),Object(s.h)(m.a,null,Object(s.h)(y.a,{onClick:T,color:"primary"},"Occupy"),Object(s.h)(y.a,{onClick:n},"Cancel")),Object(s.h)(E.a,{open:!!S.operation,message:S.operation,variant:"error",onClose:U})))}}).call(this,n("hosL").Fragment)},"36RS":function(e,t){"use strict";t.a={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"}},"3zFd":function(e,t,n){"use strict";var a=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("l8WD")),r=(0,a(n("c9Um")).default)(o.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=r},"6jVX":function(e,t){"use strict";t.a={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"}},"93ly":function(e,t,n){"use strict";var a=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("l8WD")),r=(0,a(n("c9Um")).default)(o.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");t.default=r},"9GZC":function(e,t,n){"use strict";var a=n("hosL"),o=n("Fcif"),r=n("dV/x"),i=n("mK0O"),c=n("l8WD"),l=(n("W0B4"),n("PDtE")),s=n("gbh0"),u=n("mxPc"),d=n("MdBG"),f=n("m3N6"),p=n("+Gfr"),b=n("lOOT"),m=n("pNlz"),g=n("q3GK"),v={entering:{opacity:1},entered:{opacity:1}},h={enter:p.b.enteringScreen,exit:p.b.leavingScreen},O=c.default.forwardRef((function(e,t){var n=e.children,a=e.in,i=e.onEnter,l=e.onExit,s=e.style,u=e.timeout,d=void 0===u?h:u,p=Object(r.a)(e,["children","in","onEnter","onExit","style","timeout"]),O=Object(b.a)(),j=Object(g.a)(n.ref,t);return c.default.createElement(f.a,Object(o.a)({appear:!0,in:a,onEnter:function(e,t){Object(m.b)(e);var n=Object(m.a)({style:s,timeout:d},{mode:"enter"});e.style.webkitTransition=O.transitions.create("opacity",n),e.style.transition=O.transitions.create("opacity",n),i&&i(e,t)},onExit:function(e){var t=Object(m.a)({style:s,timeout:d},{mode:"exit"});e.style.webkitTransition=O.transitions.create("opacity",t),e.style.transition=O.transitions.create("opacity",t),l&&l(e)},timeout:d},p),(function(e,t){return c.default.cloneElement(n,Object(o.a)({style:Object(o.a)({opacity:0,visibility:"exited"!==e||a?void 0:"hidden"},v[e],{},s,{},n.props.style),ref:j},t))}))})),j=c.default.forwardRef((function(e,t){var n=e.children,a=e.classes,i=e.className,s=e.invisible,u=void 0!==s&&s,d=e.open,f=e.transitionDuration,p=Object(r.a)(e,["children","classes","className","invisible","open","transitionDuration"]);return c.default.createElement(O,Object(o.a)({in:d,timeout:f},p),c.default.createElement("div",{className:Object(l.a)(a.root,i,u&&a.invisible),"aria-hidden":!0,ref:t},n))})),x=Object(s.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",touchAction:"none"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(j),y=n("bJWG"),E={enter:p.b.enteringScreen,exit:p.b.leavingScreen},k=c.default.forwardRef((function(e,t){var n=e.BackdropProps,a=e.children,i=e.classes,s=e.className,f=e.disableBackdropClick,p=void 0!==f&&f,b=e.disableEscapeKeyDown,m=void 0!==b&&b,g=e.fullScreen,v=void 0!==g&&g,h=e.fullWidth,j=void 0!==h&&h,k=e.maxWidth,C=void 0===k?"sm":k,w=e.onBackdropClick,W=e.onClose,D=e.onEnter,S=e.onEntered,P=e.onEntering,N=e.onEscapeKeyDown,R=e.onExit,B=e.onExited,A=e.onExiting,L=e.open,I=e.PaperComponent,M=void 0===I?y.a:I,z=e.PaperProps,T=void 0===z?{}:z,U=e.scroll,F=void 0===U?"paper":U,G=e.TransitionComponent,K=void 0===G?O:G,V=e.transitionDuration,_=void 0===V?E:V,$=e.TransitionProps,H=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),q=c.default.useRef();return c.default.createElement(d.a,Object(o.a)({className:Object(l.a)(i.root,s),BackdropComponent:x,BackdropProps:Object(o.a)({transitionDuration:_},n),closeAfterTransition:!0,disableBackdropClick:p,disableEscapeKeyDown:m,onEscapeKeyDown:N,onClose:W,open:L,ref:t},H),c.default.createElement(K,Object(o.a)({appear:!0,in:L,timeout:_,onEnter:D,onEntering:P,onEntered:S,onExit:R,onExiting:A,onExited:B,role:"none presentation"},$),c.default.createElement("div",{className:Object(l.a)(i.container,i["scroll".concat(Object(u.a)(F))]),onClick:function(e){e.target===e.currentTarget&&e.target===q.current&&(q.current=null,w&&w(e),!p&&W&&W(e,"backdropClick"))},onMouseDown:function(e){q.current=e.target}},c.default.createElement(M,Object(o.a)({elevation:24,role:"dialog"},T,{className:Object(l.a)(i.paper,i["paperScroll".concat(Object(u.a)(F))],i["paperWidth".concat(Object(u.a)(String(C)))],T.className,v&&i.paperFullScreen,j&&i.paperFullWidth)}),a))))})),C=Object(s.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:48,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 96px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 96px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+96),{maxWidth:"calc(100% - 96px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.sm+96),{maxWidth:"calc(100% - 96px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.md+96),{maxWidth:"calc(100% - 96px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.lg+96),{maxWidth:"calc(100% - 96px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.xl+96),{maxWidth:"calc(100% - 96px)"})},paperFullWidth:{width:"calc(100% - 96px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(k),w=n("PPxA"),W=n("2ikl");t.a=function(e){var t,n=e.openDialog,o=e.onDialogClose,r=e.spotData;return t=r&&r.isOccupied?w.a:r?W.a:null,Object(a.h)(C,{open:n,onClose:o,"aria-labelledby":"form-dialog-title"},Object(a.h)(t,{onDialogClose:o,spotData:r}))}},FA6U:function(e){e.exports={home:"home__MseGd"}},"H9+9":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"}},MvTK:function(e,t,n){"use strict";var a=n("Fcif"),o=n("l8WD"),r=(n("W0B4"),n("gbh0")),i=n("/ZiB"),c=o.default.forwardRef((function(e,t){return o.default.createElement(i.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(r.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},OVKZ:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"}},PPxA:function(e,t,n){"use strict";(function(e){function a(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    mutation ReleaseParkingSpot($toggleInput: ToggleParkingSpotInput!) {\n        releaseParkingSpot(toggleInput: $toggleInput) {\n            id\n            number\n            isOccupied\n            occupiedAt\n            user {\n                id\n                displayName\n            }\n            car {\n                id\n                plate\n                name\n            }\n        }\n    }\n"]);return a=function(){return e},e}var o=n("hosL"),r=n("QRet"),i=n("cLlx"),c=n("qlrW"),l=n.n(c),s=n("R82R"),u=n("0g17"),d=n("26BU"),f=n("MvTK"),p=n("YvUk"),b=n("/NZN"),m=l()(a()),g=Object(s.a)((function(){return{}}));t.a=function(t){var n=t.onDialogClose,a=t.spotData,c=(g(),Object(i.a)(m)),l=c[0],s=a.id,v=Object(r.useCallback)((function(){l({variables:{toggleInput:{spotId:s}}}).then((function(){console.log("release successfully"),n()}))}),[s]);return Object(o.h)(e,null,Object(o.h)(p.a,{id:"form-dialog-title"},"Release spot"),Object(o.h)(d.a,null,Object(o.h)(f.a,null,"Would you like to release the occupied spot?")),Object(o.h)(u.a,null,Object(o.h)(b.a,{onClick:v,color:"primary"},"Yes"),Object(o.h)(b.a,{onClick:n},"Cancel")))}}).call(this,n("hosL").Fragment)},PWpK:function(e,t,n){"use strict";function a(e){return e.substring(2).toLowerCase()}var o=n("dV/x"),r=n("mK0O"),i=n("Fcif"),c=n("l8WD"),l=(n("W0B4"),n("PDtE")),s=n("gbh0"),u=n("+Gfr"),d=n("xlJo"),f=n("q3GK"),p=n("Dqgx"),b=n("j26d");var m=c.default.forwardRef((function(e,t){var n=e.children,o=e.mouseEvent,r=void 0===o?"onClick":o,i=e.touchEvent,l=void 0===i?"onTouchEnd":i,s=e.onClickAway,u=c.default.useRef(!1),m=c.default.useRef(null),g=c.default.useRef(!1);c.default.useEffect((function(){return g.current=!0,function(){g.current=!1}}),[]);var v=Object(f.a)(m,t),h=c.default.useCallback((function(e){Object(p.a)(v,c.default.findDOMNode(e))}),[v]),O=Object(f.a)(n.ref,h),j=Object(b.a)((function(e){if(!e.defaultPrevented&&g.current)if(u.current)u.current=!1;else if(m.current){var t=Object(d.a)(m.current);t.documentElement&&t.documentElement.contains(e.target)&&!m.current.contains(e.target)&&s(e)}})),x=c.default.useCallback((function(){u.current=!0}),[]);return c.default.useEffect((function(){if(!1!==l){var e=a(l);return document.addEventListener(e,j),document.addEventListener("touchmove",x),function(){document.removeEventListener(e,j),document.removeEventListener("touchmove",x)}}}),[j,x,l]),c.default.useEffect((function(){if(!1!==r){var e=a(r);return document.addEventListener(e,j),function(){document.removeEventListener(e,j)}}}),[j,r]),c.default.createElement(c.default.Fragment,null,c.default.cloneElement(n,{ref:O}))})),g=n("mxPc"),v=n("Ajhm"),h=n("IVEB"),O=n("wuU5"),j=c.default.forwardRef((function(e,t){var n=e.action,a=e.anchorOrigin,r=(a=void 0===a?{vertical:"bottom",horizontal:"center"}:a).vertical,s=a.horizontal,d=e.autoHideDuration,f=e.children,p=e.classes,b=e.className,j=e.ClickAwayListenerProps,x=e.ContentProps,y=e.disableWindowBlurListener,E=void 0!==y&&y,k=e.message,C=e.onClose,w=e.onEnter,W=e.onEntered,D=e.onEntering,S=e.onExit,P=e.onExited,N=e.onExiting,R=e.onMouseEnter,B=e.onMouseLeave,A=e.open,L=e.resumeHideDuration,I=e.TransitionComponent,M=void 0===I?h.a:I,z=e.transitionDuration,T=void 0===z?{enter:u.b.enteringScreen,exit:u.b.leavingScreen}:z,U=e.TransitionProps,F=Object(o.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),G=c.default.useRef(),K=c.default.useState(!0),V=K[0],_=K[1],$=c.default.useCallback((function(e){var t=null!=e?e:d;C&&null!=t&&(clearTimeout(G.current),G.current=setTimeout((function(){C&&null!=(null!=e?e:d)&&C(null,"timeout")}),t))}),[d,C]);c.default.useEffect((function(){return A&&$(),function(){clearTimeout(G.current)}}),[A,$]);var H=function(){clearTimeout(G.current)},q=c.default.useCallback((function(){if(null!=d){if(null!=L)return void $(L);$(.5*d)}}),[d,L,$]);return c.default.useEffect((function(){if(!E&&A)return window.addEventListener("focus",q),window.addEventListener("blur",H),function(){window.removeEventListener("focus",q),window.removeEventListener("blur",H)}}),[E,q,A]),!A&&V?null:c.default.createElement(m,Object(i.a)({onClickAway:function(e){C&&C(e,"clickaway")}},j),c.default.createElement("div",Object(i.a)({className:Object(l.a)(p.root,p["anchorOrigin".concat(Object(g.a)(r)).concat(Object(g.a)(s))],b),onMouseEnter:function(e){R&&R(e),H()},onMouseLeave:function(e){B&&B(e),q()},ref:t},F),c.default.createElement(M,Object(i.a)({appear:!0,in:A,onEnter:Object(v.a)((function(){_(!1)}),w),onEntered:W,onEntering:D,onExit:S,onExited:Object(v.a)((function(){_(!0)}),P),onExiting:N,timeout:T,direction:"top"===r?"down":"up"},U),f||c.default.createElement(O.a,Object(i.a)({message:k,action:n},x)))))}));t.a=Object(s.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},o={justifyContent:"flex-start"},c={top:24},l={bottom:24},s={right:24},u={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(i.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({},c,{},d))),anchorOriginBottomCenter:Object(i.a)({},n,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({},l,{},d))),anchorOriginTopRight:Object(i.a)({},t,{},a,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({left:"auto"},c,{},s))),anchorOriginBottomRight:Object(i.a)({},n,{},a,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({left:"auto"},l,{},s))),anchorOriginTopLeft:Object(i.a)({},t,{},o,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({right:"auto"},c,{},u))),anchorOriginBottomLeft:Object(i.a)({},n,{},o,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({right:"auto"},l,{},u)))}}),{flip:!1,name:"MuiSnackbar"})(j)},"V2/N":function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var o=n("dV/x"),r=n("Fcif"),i=n("l8WD"),c=(n("W0B4"),n("PDtE")),l=n("gbh0"),s=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],d=i.default.forwardRef((function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,u=e.classes,d=e.className,f=e.component,p=void 0===f?"div":f,b=e.container,m=void 0!==b&&b,g=e.direction,v=void 0===g?"row":g,h=e.item,O=void 0!==h&&h,j=e.justify,x=void 0===j?"flex-start":j,y=e.lg,E=void 0!==y&&y,k=e.md,C=void 0!==k&&k,w=e.sm,W=void 0!==w&&w,D=e.spacing,S=void 0===D?0:D,P=e.wrap,N=void 0===P?"wrap":P,R=e.xl,B=void 0!==R&&R,A=e.xs,L=void 0!==A&&A,I=e.zeroMinWidth,M=void 0!==I&&I,z=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=Object(c.a)(u.root,d,m&&[u.container,0!==S&&u["spacing-xs-".concat(String(S))]],O&&u.item,M&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==N&&u["wrap-xs-".concat(String(N))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==a&&u["align-content-xs-".concat(String(a))],"flex-start"!==x&&u["justify-xs-".concat(String(x))],!1!==L&&u["grid-xs-".concat(String(L))],!1!==W&&u["grid-sm-".concat(String(W))],!1!==C&&u["grid-md-".concat(String(C))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==B&&u["grid-xl-".concat(String(B))]);return i.default.createElement(p,Object(r.a)({className:T,ref:t},z))}));var f=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(o){var r=e.spacing(o);0!==r&&(n["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(a(r,2)),width:"calc(100% + ".concat(a(r),")"),"& > $item":{padding:a(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};u.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=f},YvUk:function(e,t,n){"use strict";var a=n("Fcif"),o=n("dV/x"),r=n("l8WD"),i=(n("W0B4"),n("PDtE")),c=n("gbh0"),l=n("/ZiB"),s=r.default.forwardRef((function(e,t){var n=e.children,c=e.classes,s=e.className,u=e.disableTypography,d=void 0!==u&&u,f=Object(o.a)(e,["children","classes","className","disableTypography"]);return r.default.createElement("div",Object(a.a)({className:Object(i.a)(c.root,s),ref:t},f),d?n:r.default.createElement(l.a,{component:"h2",variant:"h6"},n))}));t.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},eJv8:function(e,t,n){"use strict";var a=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("l8WD")),r=(0,a(n("c9Um")).default)(o.default.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");t.default=r},oQEK:function(e,t,n){"use strict";var a=n("Fcif"),o=n("dV/x"),r=n("l8WD"),i=(n("W0B4"),n("PDtE")),c=n("gbh0"),l=n("Rx6o"),s=n("x+AB"),u=n("mxPc"),d=r.default.forwardRef((function(e,t){var n=e.edge,c=void 0!==n&&n,l=e.children,d=e.classes,f=e.className,p=e.color,b=void 0===p?"default":p,m=e.disabled,g=void 0!==m&&m,v=e.disableFocusRipple,h=void 0!==v&&v,O=e.size,j=void 0===O?"medium":O,x=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.default.createElement(s.a,Object(a.a)({className:Object(i.a)(d.root,f,"default"!==b&&d["color".concat(Object(u.a)(b))],g&&d.disabled,{small:d["size".concat(Object(u.a)(j))]}[j],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!h,disabled:g,ref:t},x),r.default.createElement("span",{className:d.label},l))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},wuU5:function(e,t,n){"use strict";var a=n("Fcif"),o=n("dV/x"),r=n("mK0O"),i=n("l8WD"),c=(n("W0B4"),n("PDtE")),l=n("gbh0"),s=n("bJWG"),u=n("/ZiB"),d=n("Rx6o"),f=i.default.forwardRef((function(e,t){var n=e.action,r=e.classes,l=e.className,d=e.message,f=Object(o.a)(e,["action","classes","className","message"]);return i.default.createElement(s.a,Object(a.a)({component:u.a,variant:"body2",variantMapping:{body1:"div",body2:"div"},role:"alertdialog",square:!0,elevation:6,className:Object(c.a)(r.root,l),ref:t},f),i.default.createElement("div",{className:r.message},d),n?i.default.createElement("div",{className:r.action},n):null)}));t.a=Object(l.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(d.b)(e.palette.background.default,t);return{root:Object(r.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(f)},zewa:function(e,t,n){"use strict";var a=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("l8WD")),r=(0,a(n("c9Um")).default)(o.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=r},zfEO:function(e,t,n){"use strict";(function(e){function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t.indexOf(n=r[a])>=0||(o[n]=e[n]);return o}function r(t){var n=k(),r=t.className,c=t.message,l=t.onClose,s=t.variant,u=o(t,["className","message","onClose","variant"]),d=E[s];return e(O.a,a({className:Object(i.a)(n[s],r),"aria-describedby":"client-snackbar",message:e("span",{id:"client-snackbar",className:n.message},e(d,{className:Object(i.a)(n.icon,n.iconVariant)}),c),action:[e(v.a,{key:"close","aria-label":"close",color:"inherit",onClick:l},e(b.a,{className:n.icon}))]},u))}n("hosL"),n("W0B4");var i=n("PDtE"),c=n("zewa"),l=n.n(c),s=n("93ly"),u=n.n(s),d=n("1sEd"),f=n.n(d),p=n("3zFd"),b=n.n(p),m=n("36RS"),g=n("6jVX"),v=n("oQEK"),h=n("PWpK"),O=n("wuU5"),j=n("eJv8"),x=n.n(j),y=n("R82R"),E={success:l.a,warning:x.a,error:u.a,info:f.a},k=Object(y.a)((function(e){return{success:{backgroundColor:m.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:g.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));t.a=function(t){var n=t.anchorOrigin,i=void 0===n?{vertical:"top",horizontal:"center"}:n,c=t.open,l=void 0!==c&&c,s=t.autoHideDuration,u=void 0===s?6e3:s,d=t.onClose,f=o(t,["anchorOrigin","open","autoHideDuration","onClose"]);return e(h.a,{anchorOrigin:i,open:l,autoHideDuration:u,onClose:d},e(r,a({onClose:d},f)))}}).call(this,n("hosL").h)}}]);
//# sourceMappingURL=route-home.chunk.4bd4d.js.map