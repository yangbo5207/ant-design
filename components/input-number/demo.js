webpackJsonp([35,197],{157:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(8),u=t(o),c=s(21),l=t(c),i=s(4),r=t(i),k=s(6),d=t(k),m=s(5),f=t(m),h=s(1),g=t(h),v=s(3),b=t(v),y=s(306),C=t(y),N=s(24),x=t(N),w=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=(0,x["default"])(this.props,["size","className"]),s=(0,l["default"])(a,2),t=s[0],e=t.className,o=t.size,c=s[1],i=(0,b["default"])((n={},(0,u["default"])(n,this.props.prefixCls+"-lg","large"===o),(0,u["default"])(n,this.props.prefixCls+"-sm","small"===o),(0,u["default"])(n,e,!!e),n));return g["default"].createElement(C["default"],(0,p["default"])({className:i},c))},a}(g["default"].Component);a["default"]=w,w.defaultProps={prefixCls:"ant-input-number",step:1},n.exports=a["default"]},158:function(n,a,s){"use strict";s(11),s(273)},273:function(n,a){},306:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}function p(n){n.preventDefault()}Object.defineProperty(a,"__esModule",{value:!0});var o=s(8),u=t(o),c=s(7),l=t(c),i=s(1),r=t(i),k=s(3),d=t(k),m=s(307),f=t(m),h=r["default"].createClass({displayName:"InputNumber",propTypes:{onChange:i.PropTypes.func,onKeyDown:i.PropTypes.func,onFocus:i.PropTypes.func,onBlur:i.PropTypes.func,readOnly:i.PropTypes.bool,max:i.PropTypes.number,min:i.PropTypes.number,step:i.PropTypes.oneOfType([i.PropTypes.number,i.PropTypes.string])},mixins:[f["default"]],getDefaultProps:function(){return{prefixCls:"rc-input-number"}},componentDidMount:function(){this.componentDidUpdate()},componentDidUpdate:function(){this.state.focused&&document.activeElement!==this.refs.input&&this.refs.input.focus()},onKeyDown:function(n){var a;38===n.keyCode?this.up(n):40===n.keyCode&&this.down(n);for(var s=arguments.length,t=Array(s>1?s-1:0),e=1;e<s;e++)t[e-1]=arguments[e];(a=this.props).onKeyDown.apply(a,[n].concat(t))},getValueFromEvent:function(n){return n.target.value},focus:function(){this.refs.input.focus()},render:function(){var n,a=(0,l["default"])({},this.props),s=a.prefixCls,t=(0,d["default"])((n={},(0,u["default"])(n,s,!0),(0,u["default"])(n,a.className,!!a.className),(0,u["default"])(n,s+"-disabled",a.disabled),(0,u["default"])(n,s+"-focused",this.state.focused),n)),o="",c="",i=this.state.value;if(isNaN(i))o=s+"-handler-up-disabled",c=s+"-handler-down-disabled";else{var k=Number(i);k>=a.max&&(o=s+"-handler-up-disabled"),k<=a.min&&(c=s+"-handler-down-disabled")}var m=!a.readOnly&&!a.disabled,f=void 0;return f=this.state.focused?this.state.inputValue:this.state.value,void 0===f&&(f=""),delete a.defaultValue,delete a.prefixCls,r["default"].createElement("div",{className:t,style:a.style},r["default"].createElement("div",{className:s+"-handler-wrap"},r["default"].createElement("a",{unselectable:"unselectable",ref:"up",onTouchStart:m&&!o?this.up:e,onTouchEnd:this.stop,onMouseDown:m&&!o?this.up:e,onMouseUp:this.stop,onMouseLeave:this.stop,className:s+"-handler "+s+"-handler-up "+o},r["default"].createElement("span",{unselectable:"unselectable",className:s+"-handler-up-inner",onClick:p})),r["default"].createElement("a",{unselectable:"unselectable",ref:"down",onTouchStart:m&&!c?this.down:e,onTouchEnd:this.stop,onMouseDown:m&&!c?this.down:e,onMouseUp:this.stop,onMouseLeave:this.stop,className:s+"-handler "+s+"-handler-down "+c},r["default"].createElement("span",{unselectable:"unselectable",className:s+"-handler-down-inner",onClick:p}))),r["default"].createElement("div",{className:s+"-input-wrap"},r["default"].createElement("input",(0,l["default"])({},a,{style:null,className:s+"-input",autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,autoFocus:a.autoFocus,readOnly:a.readOnly,disabled:a.disabled,max:a.max,min:a.min,name:a.name,onChange:this.onChange,ref:"input",value:f}))))}});a["default"]=h,n.exports=a["default"]},307:function(n,a){"use strict";function s(){}Object.defineProperty(a,"__esModule",{value:!0});var t=50,e=600;a["default"]={getDefaultProps:function(){return{max:1/0,min:-(1/0),step:1,style:{},defaultValue:null,onChange:s,onKeyDown:s,onFocus:s,onBlur:s}},getInitialState:function(){var n=void 0,a=this.props;return n="value"in a?a.value:a.defaultValue,n=this.toPrecisionAsStep(n),{inputValue:n,value:n,focused:a.autoFocus}},componentWillReceiveProps:function(n){if("value"in n){var a=this.toPrecisionAsStep(n.value);this.setState({inputValue:a,value:a})}},componentWillUnmount:function(){this.stop()},onChange:function(n){this.setInputValue(this.getValueFromEvent(n).trim())},onFocus:function(){var n;this.setState({focused:!0}),(n=this.props).onFocus.apply(n,arguments)},onBlur:function(n){var a;this.setState({focused:!1});var s=this.getCurrentValidValue(this.getValueFromEvent(n).trim());this.setValue(s);for(var t=arguments.length,e=Array(t>1?t-1:0),p=1;p<t;p++)e[p-1]=arguments[p];(a=this.props).onBlur.apply(a,[n].concat(e))},getCurrentValidValue:function(n){var a=n,s=this.props;return""===a?a="":isNaN(a)?a=this.state.value:(a=Number(a),a<s.min&&(a=s.min),a>s.max&&(a=s.max)),this.toPrecisionAsStep(a)},setValue:function(n){"value"in this.props||this.setState({value:n,inputValue:n});var a=isNaN(n)||""===n?void 0:n;a!==this.state.value?this.props.onChange(a):this.setState({inputValue:this.state.value})},setInputValue:function(n){this.setState({inputValue:n})},getPrecision:function(){var n=this.props,a=n.step.toString();if(a.indexOf("e-")>=0)return parseInt(a.slice(a.indexOf("e-")+1),10);var s=0;return a.indexOf(".")>=0&&(s=a.length-a.indexOf(".")-1),s},getPrecisionFactor:function(){var n=this.getPrecision();return Math.pow(10,n)},toPrecisionAsStep:function(n){if(isNaN(n)||""===n)return n;var a=this.getPrecision();return Number(Number(n).toFixed(Math.abs(a)))},upStep:function(n){var a=this.props,s=a.step,t=a.min,e=this.getPrecisionFactor(),p=void 0;return p="number"==typeof n?(e*n+e*s)/e:t===-(1/0)?s:t,this.toPrecisionAsStep(p)},downStep:function(n){var a=this.props,s=a.step,t=a.min,e=this.getPrecisionFactor(),p=void 0;return p="number"==typeof n?(e*n-e*s)/e:t===-(1/0)?-s:t,this.toPrecisionAsStep(p)},step:function(n,a){a&&a.preventDefault();var s=this.props;if(!s.disabled){var t=this.getCurrentValidValue(this.state.value);if(this.setState({value:t}),!isNaN(t)){var e=this[n+"Step"](t);e>s.max||e<s.min||(this.setValue(e),this.setState({focused:!0}))}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(n,a){var s=this;n.persist&&n.persist(),this.stop(),this.step("down",n),this.autoStepTimer=setTimeout(function(){s.down(n,!0)},a?t:e)},up:function(n,a){var s=this;n.persist&&n.persist(),this.stop(),this.step("up",n),this.autoStepTimer=setTimeout(function(){s.up(n,!0)},a?t:e)}},n.exports=a["default"]},759:function(n,a,s){n.exports={basic:s(1527),digit:s(1528),disabled:s(1529),size:s(1530)}},1527:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(158),s(157)),p=t(e),o=s(1),u=t(o),c=s(2);t(c);n.exports={content:{"zh-CN":[["p","\u6570\u5b57\u8f93\u5165\u6846\u3002"]],"en-US":[["p","Numeric-only input box."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/input-number/demo/basic.md",id:"components-input-number-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> InputNumber <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'changed\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputNumber</span> <span class="token attr-name" >min</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >max</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("changed",n)}return u["default"].createElement(p["default"],{min:1,max:10,defaultValue:3,onChange:n})}}},1528:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(158),s(157)),p=t(e),o=s(1),u=t(o),c=s(2);t(c);n.exports={content:{"zh-CN":[["p","\u548c\u539f\u751f\u7684\u6570\u5b57\u8f93\u5165\u6846\u4e00\u6837\uff0cvalue \u7684\u7cbe\u5ea6\u7531 step \u7684\u5c0f\u6570\u4f4d\u6570\u51b3\u5b9a\u3002"]],"en-US":[["p","A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop."]]},meta:{order:3,title:{"zh-CN":"\u5c0f\u6570","en-US":"Decimals"},filename:"components/input-number/demo/digit.md",id:"components-input-number-demo-digit"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> InputNumber <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'changed\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputNumber</span> <span class="token attr-name" >min</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >max</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >step</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >0.1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("changed",n)}return u["default"].createElement(p["default"],{min:1,max:10,step:.1,onChange:n})}}},1529:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(14),s(13)),p=t(e),o=(s(158),s(157)),u=t(o),c=s(1),l=t(c),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u70b9\u51fb\u6309\u94ae\u5207\u6362\u53ef\u7528\u72b6\u6001\u3002"]],"en-US":[["p","Click the button to toggle between available and disabled states."]]},meta:{order:2,title:{"zh-CN":"\u4e0d\u53ef\u7528","en-US":"Disabled"},filename:"components/input-number/demo/disabled.md",id:"components-input-number-demo-disabled"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> InputNumber<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputNumber</span> <span class="token attr-name" >min</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >max</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >20</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Toggle disabled<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"Test",getInitialState:function(){return{disabled:!0}},toggle:function(){this.setState({disabled:!this.state.disabled})},render:function(){return l["default"].createElement("div",null,l["default"].createElement(u["default"],{min:1,max:10,disabled:this.state.disabled,defaultValue:3}),l["default"].createElement("div",{style:{marginTop:20}},l["default"].createElement(p["default"],{onClick:this.toggle,type:"primary"},"Toggle disabled")))}});return l["default"].createElement(n,null)}}},1530:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(158),s(157)),p=t(e),o=s(1),u=t(o),c=s(2);t(c);n.exports={content:{"zh-CN":[["p","\u4e09\u79cd\u5927\u5c0f\u7684\u6570\u5b57\u8f93\u5165\u6846\uff0c\u5f53 size \u5206\u522b\u4e3a ",["code","large"]," \u548c ",["code","small"]," \u65f6\uff0c\u8f93\u5165\u6846\u9ad8\u5ea6\u4e3a ",["code","32px"]," \u548c ",["code","22px"]," \uff0c\u9ed8\u8ba4\u9ad8\u5ea6\u4e3a ",["code","28px"]]],"en-US":[["p","There are three sizes available to a numeric input box. By default, the size is ",["code","28px"],". The two additional sizes are ",["code","large"]," and ",["code","small"]," which means ",["code","32px"]," and ",["code","22px"],", respectively."]]},meta:{order:1,title:{"zh-CN":"\u4e09\u79cd\u5927\u5c0f","en-US":"Sizes"},filename:"components/input-number/demo/size.md",id:"components-input-number-demo-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> InputNumber <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'changed\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputNumber</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token attr-name" >min</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >max</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >100000</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputNumber</span> <span class="token attr-name" >min</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >max</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >100000</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputNumber</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >min</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >max</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >100000</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("changed",n)}return u["default"].createElement("div",null,u["default"].createElement(p["default"],{size:"large",min:1,max:1e5,defaultValue:3,onChange:n}),u["default"].createElement(p["default"],{min:1,max:1e5,defaultValue:3,onChange:n}),u["default"].createElement(p["default"],{size:"small",min:1,max:1e5,defaultValue:3,onChange:n}))},style:".ant-input-number {\n  margin-right: 10px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.ant-input-number</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >10</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});