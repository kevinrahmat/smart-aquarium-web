__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(3014),n=17,s={fontSize:'25px',height:'25px',margin:'8px',width:'25px'},o={right:'53px',bottom:'355px'},p=295,u=t=>{const n=a(d[2]).createElement(i(d[3]),{href:r(d[4]).buildLoginLink(i(d[5]).location.pathname,{source:'post_comment_input'})},r(d[1])(2230));return a(d[2]).createElement("span",null,r(d[1])(405,{loginLink:n}))},h=t=>a(d[2]).createElement("span",null,r(d[1])(1972,{username:t.username})),l=t=>a(d[2]).createElement("div",{className:"up_hg"},a(d[2]).createElement("span",null,r(d[1])(2064,{username:t.username})),a(d[2]).createElement(r(d[6]).Button,{borderless:!0,color:"ig-secondary-button",onClick:t.onClearReply},"✕"));class c extends a(d[2]).Component{constructor(t){super(t),this.focusAndScroll=(()=>{const t=()=>{const t=i(d[7])(this.$PostCommentInput1);t.focus(),r(d[8]).isMobile()&&setTimeout(()=>{'function'==typeof t.scrollIntoView&&(t.scrollIntoView(!0),window.scrollBy(0,-200))},10)};this.setState({hasBeenFocused:!0},()=>{setTimeout(()=>t())})}),this.$PostCommentInput4=(t=>{t.preventDefault(),this.$PostCommentInput3()||(this.props.onCommentChange(this.state.pendingComment),this.setState({needsFlush:!1}),this.props.onCommentSubmit().then(()=>{this.$PostCommentInput1&&this.$PostCommentInput1.blur()}))}),this.$PostCommentInput5=(t=>{'Enter'!==t.key||t.shiftKey||this.$PostCommentInput4(t)}),this.$PostCommentInput6=(t=>{t.stopPropagation()}),this.$PostCommentInput7=((t,n)=>{this.state.commentAttempt||r(d[9]).logAction_DEPRECATED('commentAttempt',{source:this.props.analyticsContext,type:!0===this.props.isVideo?'video':'photo',isLoggedIn:this.props.isLoggedIn}),this.setState({commentAttempt:!0,cursorIndex:n,isEmojiTrayOpen:null!=this.$PostCommentInput2,needsFlush:!0,pendingComment:t})}),this.$PostCommentInput8=(t=>{this.$PostCommentInput1=t}),this.$PostCommentInput9=(t=>{this.setState({hasBeenFocused:!0,hasFocus:!0})}),this.$PostCommentInput10=(t=>{this.setState({hasFocus:!1})}),this.$PostCommentInput11=(()=>{const{id:t,ownerId:n}=this.props;r(d[10]).logInteractionAction({eventName:'instagram_organic_comment_button',mediaId:t,mediaAuthorId:n})}),this.$PostCommentInput12=((t,n)=>{const{updatedCursorIndex:s,updatedText:o}=i(d[11])(t,n,this.state.pendingComment,this.state.cursorIndex);this.$PostCommentInput7(o,s)}),this.$PostCommentInput13=(t=>{var n,s;this.$PostCommentInput2=t;const o=(null===(n=this.$PostCommentInput1)||void 0===n?void 0:n.selectionStart)||0,p=(null===(s=this.$PostCommentInput1)||void 0===s?void 0:s.selectionEnd)||0,u=this.state.pendingComment.substring(0,o)+t+this.state.pendingComment.substring(p),h=o+t.length;this.$PostCommentInput7(u,h)}),this.$PostCommentInput14=(t=>{this.setState({isEmojiTrayOpen:t})}),this.$PostCommentInput15=(()=>r(d[8]).isDesktop()&&!0===i(d[12])._("118","0")),this.state={commentAttempt:!1,hasBeenFocused:!1,needsFlush:!1,pendingComment:t.pendingComment,cursorIndex:t.pendingComment.length,isEmojiTrayOpen:!1}}componentDidMount(){!0===this.props.willFocusAndScrollToInput&&this.focusAndScroll()}componentWillUnmount(){!this.props.commentSaveIsInFlight&&this.state.needsFlush&&this.state.pendingComment.length>0&&this.props.onCommentChange(this.state.pendingComment)}componentDidUpdate(t,n){const{commentSaveIsInFlight:s,pendingComment:o}=this.props;this.$PostCommentInput1&&!n.hasBeenFocused&&this.state.hasBeenFocused&&this.$PostCommentInput1.focus(),t.pendingComment!==o&&(this.setState({pendingComment:o,cursorIndex:o.length}),this.$PostCommentInput1&&this.$PostCommentInput1.focus());const p=n.isEmojiTrayOpen!==this.state.isEmojiTrayOpen;(null!=this.$PostCommentInput2||p)&&(this.$PostCommentInput2=null,this.$PostCommentInput1&&(p&&this.setState({cursorIndex:this.$PostCommentInput1.selectionEnd}),this.$PostCommentInput1.focus())),t.commentSaveIsInFlight&&!s&&''===o&&this.setState({pendingComment:'',needsFlush:!0})}shouldComponentUpdate(t,n){return this.props.className!==t.className||this.props.commentSaveIsInFlight!==t.commentSaveIsInFlight||this.props.pendingComment!==t.pendingComment||this.state.pendingComment!==n.pendingComment||this.state.hasBeenFocused!==n.hasBeenFocused||this.state.hasFocus!==n.hasFocus||this.state.isEmojiTrayOpen!==n.isEmojiTrayOpen}$PostCommentInput3(){return 0===this.state.pendingComment.trim().length||this.props.commentSaveIsInFlight}renderForm(){return a(d[2]).createElement("form",{className:"X7cDz",method:"POST",onSubmit:this.$PostCommentInput4},this.props.commentSaveIsInFlight&&a(d[2]).createElement(r(d[6]).Spinner,{position:"absolute"}),this.$PostCommentInput15()&&a(d[2]).createElement(i(d[13]),{emojiArrowLeftOffset:n,emojiIconStyles:s,emojiTrayPositionStyles:o,emojiTrayWidth:p,isEmojiTrayOpen:this.state.isEmojiTrayOpen,onEmojiClick:this.$PostCommentInput13,setEmojiTrayOpen:this.$PostCommentInput14}),a(d[2]).createElement(i(d[14]),{"aria-label":t,autosize:!0===this.props.forceTextareaAutosize||!0===this.props.willFocusAndScrollToInput||this.state.hasBeenFocused||''!==this.state.pendingComment,className:"Ypffh",cursorIndex:this.state.cursorIndex,disabled:this.props.commentSaveIsInFlight,inputRef:this.$PostCommentInput8,onBlur:this.$PostCommentInput10,onChange:this.$PostCommentInput7,onFocus:this.$PostCommentInput9,onKeyPress:this.$PostCommentInput5,onKeyUp:this.$PostCommentInput6,onTypeaheadResultSelect:this.$PostCommentInput12,placeholder:t,value:this.state.pendingComment}),this.props.hasPostButton&&a(d[2]).createElement(r(d[6]).Button,{borderless:!0,disabled:this.$PostCommentInput3(),onClick:this.$PostCommentInput11,type:"submit"},r(d[1])(2529)))}$PostCommentInput16(){return!this.$PostCommentInput1||this.props.viewportHeight-this.$PostCommentInput1.getBoundingClientRect().bottom>200}render(){const{canViewerProvideFeedback:t,className:n,hasRichCommentInput:s,isLoggedIn:o,onClearReply:p,ownerUsername:c,repliedToUsername:C,viewerProfilePicture:I}=this.props;return a(d[2]).createElement("section",{className:i(d[15])(`sH9wk ${!0===s?"n1LTb":""}`,n)},a(d[2]).createElement("div",{className:"RxpZH"},!0===s&&null!=I&&''!==I&&a(d[2]).createElement(i(d[16]),{className:"_8tZ3C",isLink:!1,profilePictureUrl:I,size:r(d[6]).CORE_CONSTANTS.AVATAR_SIZES.small}),o?t?this.renderForm():a(d[2]).createElement(h,{username:i(d[7])(c)}):a(d[2]).createElement(u,null)),null!=C&&''!==C&&r(d[8]).isMobile()&&a(d[2]).createElement(l,{onClearReply:p,username:C}),o&&t&&!0===this.state.hasFocus&&a(d[2]).createElement(i(d[17]),{className:`${r(d[8]).isMobile()?"q6Mjn":""} ${r(d[8]).isMobile()?"":"Mfkwx"} ${r(d[8]).isMobile()||this.$PostCommentInput16()?"":"wUsz1"}`,cursorIndex:this.state.cursorIndex,inputString:this.state.pendingComment,onResultSelect:this.$PostCommentInput12,showResultsCondensed:!0,useSearchTriggers:!0}))}}c.defaultProps={forceTextareaAutosize:r(d[8]).isMobile(),hasRichCommentInput:!1};var C=r(d[21]).connect(function(t,n){const s=t.pendingComments.get(n.id);return{commentSaveIsInFlight:(null===s||void 0===s?void 0:s.committing)||!1,loading:t.search.loading,ownerUsername:i(d[7])(r(d[18]).getUserById(t,n.ownerId).username),pendingComment:(null===s||void 0===s?void 0:s.text)||'',repliedToCommentAuthorId:null===s||void 0===s?void 0:s.repliedToCommentAuthorId,repliedToCommentId:null===s||void 0===s?void 0:s.repliedToCommentId,repliedToUsername:null===s||void 0===s?void 0:s.repliedToUsername,results:t.search.results,searchedForQuery:t.search.searchedForQuery,selectedIndex:t.search.selectedIndex,viewportHeight:t.displayProperties.viewportHeight}},function(t,n){return{onCommentChange(s,o,p,u){t(r(d[19]).changePendingComment(n.id,s,o,p,u))},onClearReply(){t(r(d[19]).clearPendingComment(n.id))},onCommentSubmit:()=>t(r(d[19]).commitPendingComment(n.id,n.ownerId,n.analyticsContext)),onTypeaheadResultHighlight(n,s){t(r(d[20]).selectResult(n,s))}}},function(t,n,s){return{...t,...n,...s,onCommentChange:s=>n.onCommentChange(s,t.repliedToCommentId,t.repliedToCommentAuthorId,t.repliedToUsername)}},{forwardRef:!0})(c);e.default=C,e.PostCommentInput=c},12124160,[12124161,9633796,3,9633800,9633814,9633797,9633821,9633799,9633829,9633896,9961807,11993098,9633839,12124162,11993107,9633813,9633802,11993104,9633926,12124163,9961766,5]);
__d(function() {},12124161,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(t,u,n,s){let c='';switch(t.type){case r(d[0]).USER_RESULT:c=t.username;break;case r(d[0]).HASHTAG_RESULT:c=t.name;break;default:return{updatedText:n,updatedCursorIndex:s}}const l=n.substring(0,u);return{updatedText:l+c+" "+n.substring(s),updatedCursorIndex:l.length+c.length+" ".length}}},11993098,[9961769]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=26,o=309,n=309,l='bottom',s={right:'53px',bottom:'360px'},c={fontSize:32,height:'32px',margin:'6px',width:'32px'},y=r(d[1])(2129);e.default=function({isEmojiTrayOpen:f,onEmojiClick:j,setEmojiTrayOpen:p,emojiIconStyles:E=c,emojiArrowLeftOffset:h=t,emojiTrayHeight:u=o,emojiTrayCaratPosition:x=l,emojiTrayWidth:T=n,emojiTrayPositionStyles:w=s}){return a(d[2]).createElement(a(d[2]).Fragment,null,a(d[2]).createElement(i(d[3]),{onClick:()=>p(!f)},a(d[2]).createElement(i(d[4]),{alt:y,color:"ig-primary-text"})),a(d[2]).createElement("div",{className:"_5kYZ3",style:w},a(d[2]).createElement(r(d[5]).Popover,{arrowLeftOffset:h,arrowPosition:x,isVisible:f,onClose:()=>p(!1)},a(d[2]).createElement(r(d[5]).Box,{height:u,margin:2,width:T},a(d[2]).createElement(i(d[6]),{emojiIconStyles:E,onClick:j})))))}},12124162,[12124164,9633796,3,9830410,12124165,9633821,12124166]);
__d(function() {},12124164,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=a(d[0]).memo(function(t){return a(d[0]).createElement(i(d[1]),i(d[2])({},t,{viewBox:"0 0 48 48"}),a(d[0]).createElement("path",{d:"M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"}),a(d[0]).createElement("path",{d:"M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"}))});e.default=t},12124165,[3,9961763,9633864]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=({headerText:t})=>a(d[1]).createElement(r(d[2]).Box,{marginBottom:2,marginEnd:2,marginStart:2,marginTop:4,width:"100%"},a(d[1]).createElement(r(d[2]).Text.BodyEmphasized,{color:"ig-secondary-text"},t)),o=({emoji:t,emojiIconStyles:o,onClick:n})=>a(d[1]).createElement(r(d[2]).Button,{borderless:!0,dangerouslySetClassName:r(d[3]).isBrowser('Safari')?{__className:"GzC7j"}:void 0,onClick:()=>n(t)},a(d[1]).createElement("div",{className:"CIwC8",style:{...o}},t));e.default=function({emojiIconStyles:n,onClick:c}){return a(d[1]).createElement(r(d[2]).Box,{direction:"row",wrap:!0},a(d[1]).createElement(r(d[2]).Box,{margin:2,width:"100%"},a(d[1]).createElement(r(d[2]).Text.BodyEmphasized,{color:"ig-secondary-text"},r(d[4]).EMOJI_TRAY_MOST_POPULAR)),r(d[4]).mostPopularEmojis.map(t=>a(d[1]).createElement(o,{emoji:t,emojiIconStyles:n,key:t,onClick:c})),Object.keys(r(d[4]).Emojis).map(l=>{const{emojis:s,label:E}=r(d[4]).Emojis[l];return a(d[1]).createElement(a(d[1]).Fragment,{key:l},a(d[1]).createElement(t,{headerText:E}),s.map(t=>a(d[1]).createElement(o,{emoji:t,emojiIconStyles:n,key:t,onClick:c})))}))}},12124166,[12124167,3,9633821,9633829,12124168]);
__d(function() {},12124167,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[6]).connect(function(t){return{search:t.search}},function(t){return{onTypeaheadResultHighlight(s,h){t(r(d[5]).selectResult(s,h))}}})(class extends a(d[2]).Component{constructor(...t){super(...t),this.state={hasFocus:!1},this.$TypeaheadInput3=(t=>{this.props.onBlur&&this.props.onBlur(t),this.setState({hasFocus:!1})}),this.$TypeaheadInput4=(t=>{this.props.onFocus&&this.props.onFocus(t),this.setState({hasFocus:!0})}),this.$TypeaheadInput5=(t=>{this.props.onChange(t.target.value,t.target.selectionEnd)}),this.$TypeaheadInput2=(()=>{const t=this.$TypeaheadInput1;t&&(t.focus(),t.setSelectionRange(this.props.cursorIndex,this.props.cursorIndex))}),this.$TypeaheadInput6=(t=>{this.$TypeaheadInput1=t,this.props.inputRef&&this.props.inputRef(t)}),this.$TypeaheadInput7=(t=>{const{results:s,selectedIndex:h,loading:p,searchedForQuery:n}=this.props.search;!t.altKey&&(s.length>0||p)&&(t.which===i(d[0]).DOWN?(null==h?this.props.onTypeaheadResultHighlight(0,r(d[1]).SEARCH_SELECTED_METHOD.SELECTED_WITH_KEYBOARD):h<s.length-1&&this.props.onTypeaheadResultHighlight(h+1,r(d[1]).SEARCH_SELECTED_METHOD.SELECTED_WITH_KEYBOARD),t.preventDefault()):t.which===i(d[0]).UP?(null!=h&&h>0&&this.props.onTypeaheadResultHighlight(h-1,r(d[1]).SEARCH_SELECTED_METHOD.SELECTED_WITH_KEYBOARD),t.preventDefault()):t.which===i(d[0]).RETURN&&(null!=s&&s.length>0&&(null!=h?this.props.onTypeaheadResultSelect(s[h],this.props.cursorIndex-n.length):this.props.onTypeaheadResultHighlight(0,r(d[1]).SEARCH_SELECTED_METHOD.SELECTED_WITH_KEYBOARD)),t.preventDefault()))})}shouldComponentUpdate(t,s){return this.props.value!==t.value||this.props.cursorIndex!==t.cursorIndex||this.state.hasFocus!==s.hasFocus}componentDidUpdate(t,s){this.state.hasFocus&&null!=this.$TypeaheadInput1&&this.props.cursorIndex!==this.$TypeaheadInput1.selectionEnd&&this.$TypeaheadInput2()}render(){const{className:t,autosize:s,cursorIndex:h,inputRef:p,search:n,onTypeaheadResultHighlight:o,onTypeaheadResultSelect:u,...l}=this.props,c={className:t,onChange:this.$TypeaheadInput5,onBlur:this.$TypeaheadInput3,onFocus:this.$TypeaheadInput4,onKeyDown:this.$TypeaheadInput7,autoComplete:'off',autoCorrect:'off'};return!0===s?a(d[2]).createElement(i(d[3]),i(d[4])({},l,c,{inputRef:this.$TypeaheadInput6})):a(d[2]).createElement("textarea",i(d[4])({},l,c,{ref:this.$TypeaheadInput6}))}});e.default=t},11993107,[9830430,9961769,3,9961713,9633864,9961766,5]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t,o,s,h,l){void 0===s&&(s=!1),void 0===h&&(h=null),void 0===l&&(l=null),null===u.parentNode&&document.body.appendChild(u);var c=n(t,o,s);if(null===c)return null;var f=c.paddingSize,v=c.borderSize,b=c.boxSizing,w=c.sizingStyle;Object.keys(w).forEach(function(t){u.style[t]=w[t]}),p(u),u.value=t.value||t.placeholder||'x';var x=-1/0,z=1/0,C=u.scrollHeight;'border-box'===b?C+=v:'content-box'===b&&(C-=f),u.value='x';var _=u.scrollHeight-f,y=Math.floor(C/_);null!==h&&(x=_*h,'border-box'===b&&(x=x+f+v),C=Math.max(x,C)),null!==l&&(z=_*l,'border-box'===b&&(z=z+f+v),C=Math.min(z,C));return{height:C,minHeight:x,maxHeight:z,rowCount:Math.floor(C/_),valueRowCount:y}}function n(t,n,s){if(void 0===s&&(s=!1),s&&l[n])return l[n];var u=window.getComputedStyle(t);if(null===u)return null;var p=h.reduce(function(t,n){return t[n]=u.getPropertyValue(n),t},{}),c=p['box-sizing'];if(''===c)return null;o&&'border-box'===c&&(p.width=parseFloat(p.width)+parseFloat(u['border-right-width'])+parseFloat(u['border-left-width'])+parseFloat(u['padding-right'])+parseFloat(u['padding-left'])+'px');var f={sizingStyle:p,paddingSize:parseFloat(p['padding-bottom'])+parseFloat(p['padding-top']),borderSize:parseFloat(p['border-bottom-width'])+parseFloat(p['border-top-width']),boxSizing:c};return s&&(l[n]=f),f}Object.defineProperty(e,'__esModule',{value:!0});var o=!!document.documentElement.currentStyle,s={'min-height':'0','max-height':'none',height:'0',visibility:'hidden',overflow:'hidden',position:'absolute','z-index':'-1000',top:'0',right:'0'},h=['letter-spacing','line-height','font-family','font-weight','font-size','font-style','tab-size','text-rendering','text-transform','width','text-indent','padding-top','padding-right','padding-bottom','padding-left','border-top-width','border-right-width','border-bottom-width','border-left-width','box-sizing'],l={},u=document.createElement('textarea'),p=function(t){Object.keys(s).forEach(function(n){t.style.setProperty(n,s[n],'important')})};p(u);var c=function(t){delete l[t]},f=function(){},v=0,b=(function(n){function o(o){var s;return s=n.call(this,o)||this,s._onRef=function(t){s._ref=t;var n=s.props.inputRef;'function'!=typeof n?n.current=t:n(t)},s._onChange=function(t){s._controlled||s._resizeComponent(),s.props.onChange(t,i(d[1])(i(d[1])(s)))},s._resizeComponent=function(n){void 0===n&&(n=f);var o=t(s._ref,s._uid,s.props.useCacheForDOMMeasurements,s.props.minRows,s.props.maxRows);if(null!==o){var h=o.height,l=o.minHeight,u=o.maxHeight,p=o.rowCount,c=o.valueRowCount;s.rowCount=p,s.valueRowCount=c,s.state.height===h&&s.state.minHeight===l&&s.state.maxHeight===u?n():s.setState({height:h,minHeight:l,maxHeight:u},n)}else n()},s.state={height:o.style&&o.style.height||0,minHeight:-1/0,maxHeight:1/0},s._uid=v++,s._controlled=void 0!==o.value,s._resizeLock=!1,s}i(d[0])(o,n);var s=o.prototype;return s.render=function(){var t=this.props,n=(t.inputRef,t.maxRows,t.minRows,t.onHeightChange,t.useCacheForDOMMeasurements,i(d[2])(t,["inputRef","maxRows","minRows","onHeightChange","useCacheForDOMMeasurements"]));n.style=i(d[3])({},n.style,{height:this.state.height});return Math.max(n.style.maxHeight||1/0,this.state.maxHeight)<this.state.height&&(n.style.overflow='hidden'),i(d[4]).createElement("textarea",i(d[3])({},n,{onChange:this._onChange,ref:this._onRef}))},s.componentDidMount=function(){var t=this;this._resizeComponent(),this._resizeListener=function(){t._resizeLock||(t._resizeLock=!0,t._resizeComponent(function(){t._resizeLock=!1}))},window.addEventListener('resize',this._resizeListener)},s.componentDidUpdate=function(t,n){t!==this.props&&this._resizeComponent(),this.state.height!==n.height&&this.props.onHeightChange(this.state.height,this)},s.componentWillUnmount=function(){window.removeEventListener('resize',this._resizeListener),c(this._uid)},o})(i(d[4]).Component);b.defaultProps={inputRef:f,onChange:f,onHeightChange:f,useCacheForDOMMeasurements:!1};var w=b;e.default=w},9961713,[9961716,9961717,9961718,9961719,3]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}},9961716,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},9961717,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(t,n){if(null==t)return{};var u,f,l={},c=Object.keys(t);for(f=0;f<c.length;f++)u=c[f],n.indexOf(u)>=0||(l[u]=t[u]);return l}},9961718,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(t[u]=o[u])}return t}).apply(this,arguments)}Object.defineProperty(e,'__esModule',{value:!0}),e.default=t},9961719,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var n=r(d[1]).connect(n=>{const{search:t}=n;return{loading:t.loading,rankToken:t.rankToken,results:t.results,selectedIndex:t.selectedIndex}},function(n){return{onClearSearch(){n(r(d[0]).clearSearch())},onSearch(t,c,o){n(r(d[0]).search(t,c,o))},onSearchLocations(t,c,o,s){n(r(d[0]).searchLocations(t,c,o,s))},onResultHighlight(t,c){n(r(d[0]).selectResult(t,c))}}})(i(d[2]));e.default=n},11993104,[9961766,5,11993110]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t){i(d[2])._("86")||r(d[3]).logAction_DEPRECATED(c.typeaheadClickSuccess,{searchContext:t}),i(d[4]).log(()=>({frontend_env:r(d[5]).getFrontendEnv(),search_context:t}))}function s(t){i(d[2])._("86")||r(d[3]).logAction_DEPRECATED(c.typeaheadAttempt,{searchContext:t}),i(d[6]).log(()=>({frontend_env:r(d[5]).getFrontendEnv(),search_context:t}))}Object.defineProperty(e,'__esModule',{value:!0});const n=10,o=new RegExp(r(d[0]).HASH_CHARS),h=new RegExp(r(d[1]).MENTIONS_MARKER),c={typeaheadAttempt:'typeaheadAttempt',typeaheadClickSuccess:'typeaheadClickSuccess'};class p extends a(d[8]).Component{constructor(s){super(s),this.$Typeahead2=(t=>{const{currentLocation:s,rankToken:n}=this.props,{searchContext:o}=this.state;if(o===r(d[7]).SEARCH_CONTEXT.LOCATION){if(s){const o=s.latitude,h=s.longitude;this.props.onSearchLocations(t,n,o,h)}}else this.props.onSearch(this.state.searchContext,t,n);clearTimeout(this.$Typeahead1)}),this.$Typeahead6=(()=>{const t=this.props.useSearchTriggers?null:0;this.setState({pendingQueryStartIndex:t},()=>{this.props.onClearSearch()})}),this.$Typeahead7=((s,n)=>{this.$Typeahead6(),this.props.onResultSelect(s,n),t(this.state.searchContext)});const n=s.useSearchTriggers?null:0;this.state={pendingQueryStartIndex:n,searchContext:s.initialSearchContext}}componentDidMount(){if(this.props.searchOnMount){const{cursorIndex:t,inputString:s,useSearchTriggers:o}=this.props,{pendingQueryStartIndex:h}=this.state;if(null!==h){const c=o?s.slice(h,t):s;return clearTimeout(this.$Typeahead1),void(this.$Typeahead1=setTimeout(()=>this.$Typeahead2(c),n))}}}componentWillUnmount(){this.props.onClearSearch(),clearTimeout(this.$Typeahead1)}$Typeahead3(t){return o.test(t)||h.test(t)}$Typeahead4(t){return/\s/.test(t)}$Typeahead5(t){return o.test(t)?r(d[7]).SEARCH_CONTEXT.HASHTAG:h.test(t)?r(d[7]).SEARCH_CONTEXT.USER:r(d[7]).SEARCH_CONTEXT.BLENDED}componentDidUpdate(t){const o=this.props,{cursorIndex:h,inputString:c,useSearchTriggers:p}=o,{pendingQueryStartIndex:u}=this.state;if(t.inputString!==c||this.props.searchOnMount&&h!==t.cursorIndex){const o=c.slice(h-1,h);if(p&&this.$Typeahead3(o)){t.onClearSearch();const n=this.$Typeahead5(o);return this.setState({pendingQueryStartIndex:h,searchContext:n}),void s(n)}if(null!==u&&(!c||p&&this.$Typeahead4(o)))return void this.$Typeahead6();if(null!==u){const t=p?c.slice(u,h):c;return clearTimeout(this.$Typeahead1),void(this.$Typeahead1=setTimeout(()=>this.$Typeahead2(t),n))}}}render(){const{className:t,loading:s,results:n,showLargeAvatars:o,showResultsCondensed:h}=this.props,{pendingQueryStartIndex:c,searchContext:p}=this.state;return a(d[8]).createElement("div",{className:t},null!=c&&!this.props.searchOnMount&&a(d[8]).createElement(i(d[9]),{loading:s,onResultHighlight:this.props.onResultHighlight,onResultSelect:this.$Typeahead7,pendingQueryStartIndex:c,results:n,searchContext:p,selectedIndex:this.props.selectedIndex,showLargeAvatars:o,showResultsCondensed:h}),null!=c&&this.props.searchOnMount&&a(d[8]).createElement(i(d[10]),{onResultHighlight:this.props.onResultHighlight,onResultSelect:this.$Typeahead7,pendingQueryStartIndex:c,results:n,searchContext:p}))}}p.defaultProps={initialSearchContext:r(d[7]).SEARCH_CONTEXT.BLENDED,inputString:'',showLargeAvatars:!1,showResultsCondensed:!0,searchOnMount:!1};var u=p;e.default=u},11993110,[9895954,9895955,9633918,9633896,11993111,9633805,11993112,9961769,3,11993113,11993114]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t={falco:!0,pigeon:!1};e.default=class{static log(l){r(d[0]).FalcoLogger.log('instagram_web_typeahead_result_select',l(),{},t)}}},11993111,[9961557]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t={falco:!0,pigeon:!1};e.default=class{static log(o){r(d[0]).FalcoLogger.log('instagram_web_typeahead_search_attempt',o(),{},t)}}},11993112,[9961557]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var t=class extends a(d[2]).Component{constructor(...t){super(...t),this.$TypeaheadResultsList3=((t,s)=>{s.preventDefault();const{pendingQueryStartIndex:n}=this.props;this.props.onResultSelect(t,n)})}componentDidUpdate(){const t=this.$TypeaheadResultsList1;if(t&&null!=this.props.selectedIndex){const s=t.clientHeight;t.scrollTop=s*Math.floor(this.props.selectedIndex/4)}}$TypeaheadResultsList2(t){const{searchContext:s}=this.props;switch(s){case r(d[1]).SEARCH_CONTEXT.USER:return t.filter(t=>t.type===r(d[1]).USER_RESULT);case r(d[1]).SEARCH_CONTEXT.HASHTAG:return t.filter(t=>t.type===r(d[1]).HASHTAG_RESULT);case r(d[1]).SEARCH_CONTEXT.LOCATION:return t.filter(t=>t.type===r(d[1]).LOCATION_RESULT);case r(d[1]).SEARCH_CONTEXT.BLENDED:default:return t}}$TypeaheadResultsList4(t){switch(t.type){case r(d[1]).USER_RESULT:return`user_${t.username}`;case r(d[1]).HASHTAG_RESULT:return`hashtag_${t.name}`;case r(d[1]).LOCATION_RESULT:return`location_${t.external_id}`;default:return null}}$TypeaheadResultsList5(t,s){return a(d[2]).createElement(i(d[3]),{index:s,isSelected:s===this.props.selectedIndex,key:this.$TypeaheadResultsList4(t),onClick:this.$TypeaheadResultsList3,onMouseEnter:this.props.onResultHighlight,result:t,showLargeAvatars:this.props.showLargeAvatars})}render(){const{loading:t,showResultsCondensed:s}=this.props;return a(d[2]).createElement("div",{className:"BYCcJ"},t&&a(d[2]).createElement("div",{className:s?"DxLdn":""},a(d[2]).createElement("div",{className:`pvScB ${s?"":"gdj5j"} ${s?"cjQl0":""}`},a(d[2]).createElement(r(d[4]).Spinner,{size:"medium"}))),!t&&a(d[2]).createElement("div",{className:`ZmQHO ${s?"_-7iV1":""}`,ref:t=>this.$TypeaheadResultsList1=t},this.$TypeaheadResultsList2(this.props.results).map(this.$TypeaheadResultsList5,this)))}};e.default=t},11993113,[11993115,9961769,3,11993116,9633821]);
__d(function() {},11993115,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);e.default=class extends a(d[3]).Component{constructor(...s){super(...s),this.$TypeaheadResultsItem2=(s=>{this.props.onClick&&this.props.onClick(this.props.result,s)}),this.$TypeaheadResultsItem3=(()=>{this.props.onMouseEnter&&this.props.onMouseEnter(this.props.index,r(d[2]).SEARCH_SELECTED_METHOD.SELECTED_WITH_MOUSE)})}$TypeaheadResultsItem1(s){s.preventDefault()}$TypeaheadResultsItem4(s){switch(s.type){case r(d[2]).USER_RESULT:return a(d[3]).createElement("div",{className:"oTo4c"},a(d[3]).createElement("img",{className:"KAWZr",src:s.profilePictureUrl,alt:r(d[4])(377,{username:s.username})}),a(d[3]).createElement("div",{className:"vBdNO"},a(d[3]).createElement("div",{className:"IEk8l"},s.username,s.isVerified?a(d[3]).createElement("div",{className:"pBgwx coreSpriteVerifiedBadgeSmall"}):null),a(d[3]).createElement("span",{className:"AfmgG"},s.fullName)));case r(d[2]).HASHTAG_RESULT:return a(d[3]).createElement("div",{className:"vBdNO"},a(d[3]).createElement("span",{className:"IEk8l"},'#'+s.name),a(d[3]).createElement("div",{className:"AfmgG"},a(d[3]).createElement(i(d[5]),{value:s.mediaCount,variant:r(d[6]).SOCIAL_PROOF_STATS_VARIANTS.unstyled})));case r(d[2]).LOCATION_RESULT:return a(d[3]).createElement("div",{className:"vBdNO"},a(d[3]).createElement("span",{className:"IEk8l"},s.name),a(d[3]).createElement("span",{className:"AfmgG"},s.address));default:return null}}render(){const{result:s,isSelected:t,showLargeAvatars:l}=this.props,n=this.$TypeaheadResultsItem4(s);return n?a(d[3]).createElement("button",{className:`${l?"":"Eo_F0"} ${l?"osCPk":""} ${t?"BxMtf":""}`,onMouseDown:this.$TypeaheadResultsItem1,onMouseEnter:this.$TypeaheadResultsItem3,onClick:this.$TypeaheadResultsItem2},n):null}}},11993116,[9633794,11993117,9961769,3,9633796,11993118,11993119]);
__d(function() {},11993117,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t){return t.filter(t=>t.type===r(d[1]).USER_RESULT)}Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const s='touch_mention',n=100,o=6;var u=class extends a(d[2]).Component{constructor(...t){super(...t),this.state={results:[]},this.$StoryTypeaheadResultsList1=((t,s)=>{s.preventDefault();const{pendingQueryStartIndex:n}=this.props;this.props.onResultSelect(t,n)}),this.$StoryTypeaheadResultsList2=(({index:t,isVisible:n})=>{const o=this.state.results[t];return a(d[2]).createElement("div",{className:"qOsKV",id:s},a(d[2]).createElement("img",{className:"oLiQm",src:o.profilePictureUrl,alt:r(d[3])(377,{username:o.username}),id:s}),a(d[2]).createElement("div",{className:"KMpYj"},o.username))}),this.$StoryTypeaheadResultsList3=(t=>{t.stopPropagation()})}componentDidMount(){this.setState({results:t(this.props.results)})}static getDerivedStateFromProps(s,n){return{...n,results:t(s.results)}}render(){return a(d[2]).createElement("div",{className:"imGmP",id:s},a(d[2]).createElement(i(d[4]),{target:document,event:"touchmove",handler:this.$StoryTypeaheadResultsList3,passive:!1}),a(d[2]).createElement(i(d[5]),{itemCount:this.state.results.length,renderer:this.$StoryTypeaheadResultsList2,direction:"horizontal",containerSize:"auto",estimatedItemSize:n,initialRenderCount:o,overscanCount:o}))}};e.default=u,e.TOUCH_MENTION_ID=s},11993114,[11993120,9961769,3,9633796,9830428,9961778]);
__d(function() {},11993120,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(o,n,s){return(c,u)=>{var C;c({type:r(d[0]).COMMIT_PENDING_COMMENT_REQUESTED,postId:o}),r(d[1]).logAction_DEPRECATED('comment',{source:s});const E=u(),{text:I,repliedToCommentId:l,repliedToCommentAuthorId:p}=E.pendingComments.get(o,r(d[2]).EMPTY_PENDING_COMMENT),{hasRankedComments:_}=E.posts.byId.get(o,{hasRankedComments:!1}),T=Boolean(null===(C=r(d[3]).getViewer(E))||void 0===C?void 0:C.isVerified);return i(d[4])(r(d[5]).commentOnPost(o,I,l).then(t=>{const C=i(d[6])(r(d[3]).getViewer(u())).id,M=t.id;c({type:r(d[0]).COMMIT_PENDING_COMMENT_SUCCEEDED,postId:o,commentText:I,hasRankedComments:_,commentAuthorId:C,commentAuthorIsVerified:T,commentId:M,postedAt:Math.round(Date.now()/1e3),repliedToCommentId:l}),r(d[1]).logAction_DEPRECATED('commentSuccess',{source:s}),r(d[7]).logOrganicComment({commentAuthorId:C,commentId:M,mediaId:o,mediaAuthorId:n,mediaType:r(d[8]).getMediaTypeById(E,o),parentCommentId:l,parentCommentAuthorId:p})},u=>{var C;const E=(null===(C=u.responseObject)||void 0===C?void 0:C.spam)||!1;if(E){var I,l,p;const t=null===(I=u.responseObject)||void 0===I?void 0:I.feedback_title,o=null===(l=u.responseObject)||void 0===l?void 0:l.feedback_message,n=null===(p=u.responseObject)||void 0===p?void 0:p.feedback_url;c(r(d[9]).showSentryFeedback({title:t,message:o,url:n}))}c({type:r(d[0]).COMMIT_PENDING_COMMENT_FAILED,postId:o,toast:E?void 0:{text:r(d[10])(1650),actionText:r(d[10])(224),actionHandler:()=>c(t(o,n,s))}}),r(d[1]).logAction_DEPRECATED('commentFailure',{source:s})}))}}Object.defineProperty(e,'__esModule',{value:!0}),e.changePendingComment=function(t,o,n,s,c){return{type:r(d[0]).CHANGE_PENDING_COMMENT,postId:t,text:o,repliedToCommentId:n,repliedToCommentAuthorId:s,repliedToUsername:c}},e.clearPendingComment=function(t){return{type:r(d[0]).CLEAR_PENDING_COMMENT,postId:t}},e.commitPendingComment=t},12124163,[12124169,9633896,12124170,9633926,9633897,9633898,9633799,9961688,9961727,9961671,9633796]);