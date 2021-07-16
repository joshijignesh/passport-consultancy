(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),l=a(1),i=(a(4),a(3)),c=a(5),s=o.a.createContext(),p=o.a.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,p=void 0===c?"table":c,d=e.padding,u=void 0===d?"default":d,m=e.size,f=void 0===m?"medium":m,b=e.stickyHeader,g=void 0!==b&&b,h=Object(r.a)(e,["classes","className","component","padding","size","stickyHeader"]),y=o.a.useMemo((function(){return{padding:u,size:f,stickyHeader:g}}),[u,f,g]);return o.a.createElement(s.Provider,{value:y},o.a.createElement(p,Object(l.a)({ref:t,className:Object(i.a)(a.root,n,g&&a.stickyHeader)},h)))})),d=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(p),u=o.a.createContext(),m={variant:"body"},f=o.a.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,s=void 0===c?"tbody":c,p=Object(r.a)(e,["classes","className","component"]);return o.a.createElement(u.Provider,{value:m},o.a.createElement(s,Object(l.a)({className:Object(i.a)(a.root,n),ref:t},p)))})),b=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(f),g=a(6),h=a(12),y=o.a.forwardRef((function(e,t){var a,n=e.align,c=void 0===n?"inherit":n,p=e.classes,d=e.className,m=e.component,f=e.padding,b=e.scope,h=e.size,y=e.sortDirection,E=e.variant,v=Object(r.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=o.a.useContext(s),O=o.a.useContext(u);a=m||(O&&"head"===O.variant?"th":"td");var j=b;!j&&O&&"head"===O.variant&&(j="col");var k=f||(x&&x.padding?x.padding:"default"),w=h||(x&&x.size?x.size:"medium"),C=E||O&&O.variant,S=null;return y&&(S="asc"===y?"ascending":"descending"),o.a.createElement(a,Object(l.a)({ref:t,className:Object(i.a)(p.root,d,"inherit"!==c&&p["align".concat(Object(g.a)(c))],"default"!==k&&p["padding".concat(Object(g.a)(k))],"medium"!==w&&p["size".concat(Object(g.a)(w))],{head:[p.head,x&&x.stickyHeader&&p.stickyHeader],body:p.body,footer:p.footer}[C]),"aria-sort":S,scope:j},v))})),E=Object(c.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(h.d)(Object(h.b)(e.palette.divider,1),.88):Object(h.a)(Object(h.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:1,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(y),v={variant:"head"},x=o.a.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,s=void 0===c?"thead":c,p=Object(r.a)(e,["classes","className","component"]);return o.a.createElement(u.Provider,{value:v},o.a.createElement(s,Object(l.a)({className:Object(i.a)(a.root,n),ref:t},p)))})),O=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(x),j=o.a.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,s=void 0===c?"tr":c,p=e.hover,d=void 0!==p&&p,m=e.selected,f=void 0!==m&&m,b=Object(r.a)(e,["classes","className","component","hover","selected"]),g=o.a.useContext(u);return o.a.createElement(s,Object(l.a)({ref:t,className:Object(i.a)(a.root,n,g&&{head:a.head,footer:a.footer}[g.variant],d&&a.hover,f&&a.selected)},b))})),k=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$selected":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.08)"},"&$hover:hover":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.07)":"rgba(255, 255, 255, 0.14)"}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(j),w=a(198),C=a(210),S=a(212),A=a(216);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e){return(P="function"==typeof Symbol&&"symbol"===N(Symbol.iterator)?function(e){return N(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":N(e)})(e)}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?T(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var z=function(e){function t(){var e,a;W(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return D(T(a=_(this,(e=B(t)).call.apply(e,[this].concat(o)))),"state",{feesdata:null}),a}var a,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){var e=this;S.a.get("/settings").then((function(t){e.setState({feesdata:t.data})})).catch((function(e){}))}},{key:"render",value:function(){return this.props.classes,o.a.createElement(n.Fragment,null,o.a.createElement(C.a,null,"Fees Structure for New / Fresh Passport Application"),this.state.feesdata?o.a.createElement(n.Fragment,null,o.a.createElement(d,{size:"small",style:{margin:"50px 0"}},o.a.createElement(O,null,o.a.createElement(k,null,o.a.createElement(E,null,"Age of Applicant"),o.a.createElement(E,null,"Fees for Normal Application"),o.a.createElement(E,null,"Additional Fees for Tatkal Application"),o.a.createElement(E,null,"Fees Upto 36 Pages"),o.a.createElement(E,null,"Additional Fees for Extra Pages (36+24=60)"),o.a.createElement(E,null,"Consultancy Fees"))),o.a.createElement(b,null,o.a.createElement(k,{hover:!0},o.a.createElement(E,null,"Below 18"),o.a.createElement(E,null,this.state.feesdata.basic_fees),o.a.createElement(E,null,"2000"),o.a.createElement(E,null,"No Fees"),o.a.createElement(E,null,"Not Applicable"),o.a.createElement(E,null,this.state.feesdata.consultancy_fees)),o.a.createElement(k,{hover:!0},o.a.createElement(E,null,"Above 18"),o.a.createElement(E,null,this.state.feesdata.basic_fees),o.a.createElement(E,null,"2000"),o.a.createElement(E,null,"No Fees"),o.a.createElement(E,null,this.state.feesdata.additional_page_fees),o.a.createElement(E,null,this.state.feesdata.consultancy_fees)))),o.a.createElement(w.a,{style:{width:"80%",margin:"50px auto"},light:!0}),o.a.createElement(C.a,null,"Fees Structure for Reissues Passport Application"),o.a.createElement(d,{size:"small",style:{margin:"20px 0"}},o.a.createElement(O,null,o.a.createElement(k,null,o.a.createElement(E,null,"Age of Applicant"),o.a.createElement(E,null,"Fees for Normal Application"),o.a.createElement(E,null,"Additional Fees for Tatkal Application"),o.a.createElement(E,null,"Fees Upto 36 Pages"),o.a.createElement(E,null,"Additional Fees for Extra Pages (36+24=60)"),o.a.createElement(E,null,"Lost / Damaged but Not Expired"),o.a.createElement(E,null,"Consultancy Fees"))),o.a.createElement(b,null,o.a.createElement(k,{hover:!0},o.a.createElement(E,null,"Below 18"),o.a.createElement(E,null,this.state.feesdata.basic_fees),o.a.createElement(E,null,"2000"),o.a.createElement(E,null,"No Fees"),o.a.createElement(E,null,"Not Applicable"),o.a.createElement(E,null,this.state.feesdata.lost_damaged_fees),o.a.createElement(E,null,this.state.feesdata.consultancy_fees)),o.a.createElement(k,{hover:!0},o.a.createElement(E,null,"Above 18"),o.a.createElement(E,null,this.state.feesdata.basic_fees),o.a.createElement(E,null,"2000"),o.a.createElement(E,null,"No Fees"),o.a.createElement(E,null,this.state.feesdata.additional_page_fees),o.a.createElement(E,null,this.state.feesdata.lost_damaged_fees),o.a.createElement(E,null,this.state.feesdata.consultancy_fees))))):o.a.createElement(A.a,{isOpen:!this.state.feesdata,loadingText:"Getting data..."}))}}])&&F(a.prototype,r),l&&F(a,l),t}(n.Component);t.default=z},210:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(20),l=a(47),i=a(151);t.a=function(e){var t=Object(r.a)();return o.a.createElement(n.Fragment,null,o.a.createElement(l.a,{align:"center",variant:"h5"},e.children),o.a.createElement(l.a,{align:"center"},o.a.createElement(i.a,{style:{width:"200px",backgroundColor:t.palette.primary.main,height:"2px",display:"inline-block"},component:"span"})))}},212:function(e,t,a){"use strict";var n=a(56),o=a.n(n),r=window.location.origin,l=o.a.create({baseURL:r+"/api/"});t.a=l},216:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(256),l=a(149),i=a(47),c=a(151);t.a=function(e){var t=e.isOpen,a=e.loadingText;return o.a.createElement(r.a,{open:t},o.a.createElement(c.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"auto",height:"200px",padding:"50px"}},o.a.createElement(l.a,{color:"secondary",size:60}),o.a.createElement(i.a,{variant:"h6",align:"center",style:{marginTop:"20px"}},a)))}},256:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(10),l=a(0),i=a.n(l),c=(a(4),a(3)),s=a(5),p=a(6),d=a(204),u=a(197),m=a(147),f=a(15),b=a(146),g={enter:f.b.enteringScreen,exit:f.b.leavingScreen},h=i.a.forwardRef((function(e,t){var a=e.BackdropProps,r=e.children,l=e.classes,s=e.className,f=e.disableBackdropClick,h=void 0!==f&&f,y=e.disableEscapeKeyDown,E=void 0!==y&&y,v=e.fullScreen,x=void 0!==v&&v,O=e.fullWidth,j=void 0!==O&&O,k=e.maxWidth,w=void 0===k?"sm":k,C=e.onBackdropClick,S=e.onClose,A=e.onEnter,N=e.onEntered,P=e.onEntering,W=e.onEscapeKeyDown,F=e.onExit,_=e.onExited,B=e.onExiting,T=e.open,R=e.PaperComponent,D=void 0===R?b.a:R,z=e.PaperProps,H=void 0===z?{}:z,M=e.scroll,$=void 0===M?"paper":M,K=e.TransitionComponent,L=void 0===K?m.a:K,I=e.transitionDuration,J=void 0===I?g:I,U=e.TransitionProps,X=Object(o.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),Y=i.a.useRef();return i.a.createElement(d.a,Object(n.a)({className:Object(c.a)(l.root,s),BackdropComponent:u.a,BackdropProps:Object(n.a)({transitionDuration:J},a),closeAfterTransition:!0,disableBackdropClick:h,disableEscapeKeyDown:E,onEscapeKeyDown:W,onClose:S,open:T,ref:t},X),i.a.createElement(L,Object(n.a)({appear:!0,in:T,timeout:J,onEnter:A,onEntering:P,onEntered:N,onExit:F,onExiting:B,onExited:_,role:"none presentation"},U),i.a.createElement("div",{className:Object(c.a)(l.container,l["scroll".concat(Object(p.a)($))]),onClick:function(e){e.target===e.currentTarget&&e.target===Y.current&&(Y.current=null,C&&C(e),!h&&S&&S(e,"backdropClick"))},onMouseDown:function(e){Y.current=e.target}},i.a.createElement(D,Object(n.a)({elevation:24,role:"dialog"},H,{className:Object(c.a)(l.paper,l["paperScroll".concat(Object(p.a)($))],l["paperWidth".concat(Object(p.a)(String(w)))],H.className,x&&l.paperFullScreen,j&&l.paperFullWidth)}),r))))}));t.a=Object(s.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:48,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 96px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 96px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+96),{maxWidth:"calc(100% - 96px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.sm+96),{maxWidth:"calc(100% - 96px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.md+96),{maxWidth:"calc(100% - 96px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.lg+96),{maxWidth:"calc(100% - 96px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.xl+96),{maxWidth:"calc(100% - 96px)"})},paperFullWidth:{width:"calc(100% - 96px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(h)}}]);
//# sourceMappingURL=11.js.map