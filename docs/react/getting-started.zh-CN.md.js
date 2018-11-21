webpackJsonp([63],{1823:function(n,s){n.exports={content:["article",{},["h2","\u5728\u7ebf\u6f14\u793a"],["p","\u6700\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u5f0f\u53c2\u7167\u4ee5\u4e0b CodeSandbox \u6f14\u793a\uff0c\u4e5f\u63a8\u8350 Fork \u672c\u4f8b\u6765\u8fdb\u884c ",["code","Bug Report"],"\u3002"],["ul",["li",["p",["a",{title:null,href:"https://u.ant.design/codesandbox-repro"},"antd CodeSandbox"]]]],["h2","\u7b2c\u4e00\u4e2a\u672c\u5730\u5b9e\u4f8b"],["p","\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u4f60\u4f1a\u9700\u8981\u5bf9 ES2015 \u548c JSX \u4ee3\u7801\u7684\u6784\u5efa\u3001\u8c03\u8bd5\u3001\u4ee3\u7406\u3001\u6253\u5305\u90e8\u7f72\u7b49\u4e00\u7cfb\u5217\u5de5\u7a0b\u5316\u7684\u9700\u6c42\u3002\n\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957 ",["code","npm"]," + ",["code","webpack"]," \u7684\u5f00\u53d1\u5de5\u5177\u94fe\u6765\u8f85\u52a9\u5f00\u53d1\uff0c\u4e0b\u9762\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u6765\u8bf4\u660e\u3002"],["h3","1. \u5b89\u88c5\u811a\u624b\u67b6\u5de5\u5177"],["p",["a",{title:null,href:"https://github.com/ant-design/antd-init/"},"antd-init"]," \u662f\u4e00\u4e2a\u7528\u4e8e\u6f14\u793a antd \u5982\u4f55\u4f7f\u7528\u7684\u811a\u624b\u67b6\u5de5\u5177\uff0c\u5b9e\u9645\u4e1a\u52a1\u9879\u76ee\u5efa\u8bae\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"]," \u548c ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," \u8fdb\u884c\u642d\u5efa\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antd-init -g'},["code","$ npm install antd-init -g"]],["p","\u66f4\u591a\u529f\u80fd\u8bf7\u53c2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/antd-init/"},"\u811a\u624b\u67b6\u5de5\u5177"]," \u548c ",["a",{title:null,href:"http://ant-tool.github.io/"},"\u5f00\u53d1\u5de5\u5177\u6587\u6863"],"\u3002"],["blockquote",["p","\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u811a\u624b\u67b6\u548c\u8303\u4f8b\uff1a"],["ul",["li",["p",["a",{title:null,href:"http://pro.ant.design/"},"Ant Design Pro"]]],["li",["p",["a",{title:null,href:"https://github.com/zuiidea/antd-admin"},"antd-admin"]]],["li",["p",["a",{title:null,href:"https://github.com/JasonBai007/reactSPA"},"reactSPA"]]],["li",["p",["a",{title:null,href:"https://github.com/Justin-lu/react-redux-antd"},"react-redux-antd by Justin-lu"]]],["li",["p",["a",{title:null,href:"https://github.com/okoala/react-redux-antd"},"react-redux-antd by okoala"]]],["li",["p",["a",{title:null,href:"https://github.com/fireyy/react-antd-admin"},"react-antd-admin"]]],["li",["p",["a",{title:null,href:"https://github.com/yuzhouisme/react-antd-redux-router-starter"},"react-antd-redux-router-starter"]]],["li",["p",["a",{title:null,href:"https://github.com/BetaRabbit/react-redux-antd-starter"},"react-redux-antd-starter"]]],["li",["p","\u66f4\u591a\u811a\u624b\u67b6\u53ef\u4ee5\u67e5\u770b ",["a",{title:null,href:"http://scaffold.ant.design/"},"\u811a\u624b\u67b6\u5e02\u573a"]]]]],["h3","2. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee"],["p","\u4f7f\u7528\u547d\u4ee4\u884c\u8fdb\u884c\u521d\u59cb\u5316\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">mkdir</span> antd-demo <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> antd-demo\n$ antd-init'},["code","$ mkdir antd-demo && cd antd-demo\n$ antd-init"]],["p","antd-init \u4f1a\u81ea\u52a8\u5b89\u88c5 npm \u4f9d\u8d56\uff0c\u82e5\u6709\u95ee\u9898\u5219\u53ef\u81ea\u884c\u5b89\u88c5\u3002"],["p","\u82e5\u5b89\u88c5\u7f13\u6162\u62a5\u9519\uff0c\u53ef\u5c1d\u8bd5\u7528 ",["code","cnpm"]," \u6216\u522b\u7684\u955c\u50cf\u6e90\u81ea\u884c\u5b89\u88c5\uff1a",["code","rm -rf node_modules && cnpm install"],"\u3002"],["h3","3. \u4f7f\u7528\u7ec4\u4ef6"],["p","\u811a\u624b\u67b6\u4f1a\u751f\u6210\u4e00\u4e2a Todo \u5e94\u7528\u5b9e\u4f8b\uff08\u4e00\u4e2a\u5f88\u6709\u53c2\u8003\u4ef7\u503c\u7684 React \u4e0a\u624b\u793a\u4f8b\uff09\uff0c\u5148\u4e0d\u7ba1\u5b83\uff0c\u6211\u4eec\u7528\u6765\u6d4b\u8bd5\u7ec4\u4ef6\u3002"],["p","\u76f4\u63a5\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u66ff\u6362 ",["code","index.js"]," \u7684\u5185\u5bb9\uff0c\u7528 React \u7684\u65b9\u5f0f\u76f4\u63a5\u4f7f\u7528 antd \u7ec4\u4ef6\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> LocaleProvider<span class="token punctuation">,</span> DatePicker<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// \u7531\u4e8e antd \u7ec4\u4ef6\u7684\u9ed8\u8ba4\u6587\u6848\u662f\u82f1\u6587\uff0c\u6240\u4ee5\u9700\u8981\u4fee\u6539\u4e3a\u4e2d\u6587</span>\n<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/lib/locale-provider/zh_CN\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\n\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      date<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleChange</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'\u60a8\u9009\u62e9\u7684\u65e5\u671f\u662f: \'</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> date <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> margin<span class="token punctuation">:</span> <span class="token string">\'100px auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5f53\u524d\u65e5\u671f\uff1a<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { LocaleProvider, DatePicker, message } from 'choerodon-ui';\n// \u7531\u4e8e antd \u7ec4\u4ef6\u7684\u9ed8\u8ba4\u6587\u6848\u662f\u82f1\u6587\uff0c\u6240\u4ee5\u9700\u8981\u4fee\u6539\u4e3a\u4e2d\u6587\nimport zhCN from 'choerodon-ui/lib/locale-provider/zh_CN';\nimport moment from 'moment';\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      date: '',\n    };\n  }\n\n  handleChange(date) {\n    message.info('\u60a8\u9009\u62e9\u7684\u65e5\u671f\u662f: ' + date.toString());\n    this.setState({ date });\n  }\n\n  render() {\n    return (\n      <LocaleProvider locale={zhCN}>\n        <div style={{ width: 400, margin: '100px auto' }}>\n          <DatePicker onChange={value => this.handleChange(value)} />\n          <div style={{ marginTop: 20 }}>\u5f53\u524d\u65e5\u671f\uff1a{this.state.date.toString()}</div>\n        </div>\n      </LocaleProvider>\n    );\n  }\n}\n\nReactDOM.render(<App />, document.getElementById('root'));"]],["blockquote",["p","\u4f60\u53ef\u4ee5\u5728\u5de6\u4fa7\u83dc\u5355\u9009\u7528\u66f4\u591a\u7ec4\u4ef6\u3002"]],["h3","4. \u5f00\u53d1\u8c03\u8bd5"],["p","\u4e00\u952e\u542f\u52a8\u8c03\u8bd5\uff0c\u8bbf\u95ee ",["a",{title:null,href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000"]," \u67e5\u770b\u6548\u679c\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> start'},["code","$ npm start"]],["h3","5. \u6784\u5efa\u548c\u90e8\u7f72"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p","\u5165\u53e3\u6587\u4ef6\u4f1a\u6784\u5efa\u5230 ",["code","dist"]," \u76ee\u5f55\u4e2d\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u90e8\u7f72\u5230\u4e0d\u540c\u73af\u5883\u4e2d\u8fdb\u884c\u5f15\u7528\u3002"],["blockquote",["p","\u4e0a\u8ff0\u4f8b\u5b50\u7528\u4e8e\u5e2e\u52a9\u4f60\u7406\u89e3 Ant Design React \u7684\u4f7f\u7528\u6d41\u7a0b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u5f00\u53d1\u8fc7\u7a0b\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9879\u76ee\u5f00\u53d1\u6d41\u7a0b\u8fdb\u884c\u63a5\u5165\u3002"]],["h2","\u517c\u5bb9\u6027"],["p","Ant Design React \u652f\u6301\u6240\u6709\u7684\u73b0\u4ee3\u6d4f\u89c8\u5668\u548c IE9+\u3002"],["p","\u5bf9\u4e8e IE \u7cfb\u5217\u6d4f\u89c8\u5668\uff0c\u9700\u8981\u63d0\u4f9b ",["a",{title:null,href:"https://github.com/es-shims/es5-shim"},"es5-shim"]," \u548c ",["a",{title:null,href:"https://github.com/paulmillr/es6-shim"},"es6-shim"]," \u7b49 Polyfills \u7684\u652f\u6301\u3002"],["p","\u5982\u679c\u4f60\u4f7f\u7528\u4e86 babel\uff0c\u5f3a\u70c8\u63a8\u8350\u4f7f\u7528 ",["a",{title:null,href:"https://babeljs.io/docs/usage/polyfill/"},"babel-polyfill"]," \u548c ",["a",{title:null,href:"https://babeljs.io/docs/plugins/transform-runtime/"},"babel-plugin-transform-runtime"]," \u6765\u66ff\u4ee3\u4ee5\u4e0a\u4e24\u4e2a shim\u3002"],["blockquote",["p","\u907f\u514d\u540c\u65f6\u4f7f\u7528 babel \u548c shim \u4e24\u79cd\u517c\u5bb9\u65b9\u6cd5\uff0c\u4ee5\u89c4\u907f ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/6512"},"#6512"]," \u4e2d\u6240\u9047\u95ee\u9898"],["p","\u5982\u679c\u5728 IE \u6d4f\u89c8\u5668\u4e2d\u9047\u5230 ",["code","startsWith"]," \u7684",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3400#issuecomment-253181445"},"\u95ee\u9898"],"\uff0c\u8bf7\u5f15\u5165 ",["a",{title:null,href:"https://github.com/paulmillr/es6-shim"},"es6-shim"]," \u6216 ",["a",{title:null,href:"https://babeljs.io/docs/usage/polyfill/"},"babel-polyfill"],"\u3002"]],["pre",{lang:"html",highlighted:'<span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment" spellcheck="true">&lt;!-- \u5f15\u5165\u6837\u5f0f --\x3e</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/index.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment" spellcheck="true">&lt;!-- Polyfills --\x3e</span>\n    <span class="token comment" spellcheck="true">&lt;!--[if lt IE 10]>\n    &lt;script src="https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js">&lt;/script>\n    &lt;![endif]--\x3e</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n  <span class="token comment" spellcheck="true">&lt;!-- \u5f15\u5165\u516c\u7528\u6587\u4ef6 --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/common.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token comment" spellcheck="true">&lt;!-- \u5f15\u5165\u5165\u53e3\u6587\u4ef6 --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>'},["code",'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    \x3c!-- \u5f15\u5165\u6837\u5f0f --\x3e\n    <link rel="stylesheet" href="/index.css">\n    \x3c!-- Polyfills --\x3e\n    \x3c!--[if lt IE 10]>\n    <script src="https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js"><\/script>\n    <![endif]--\x3e\n    <script src="https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js"><\/script>\n  </head>\n  <body>\n  </body>\n  \x3c!-- \u5f15\u5165\u516c\u7528\u6587\u4ef6 --\x3e\n  <script src="/common.js"><\/script>\n  \x3c!-- \u5f15\u5165\u5165\u53e3\u6587\u4ef6 --\x3e\n  <script src="/index.js"><\/script>\n</html>']],["h4","IE8 note"],["blockquote",["p",["code","antd@2.0"]," \u4e4b\u540e\u5c06\u4e0d\u518d\u652f\u6301 IE8\u3002"]],["p","IE8 \u9700\u8981\u914d\u5408\u4f7f\u7528 ",["a",{title:null,href:"https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html"},"react@0.14.x"]," \u7248\u672c\u3002"],["p","\u53e6\u5916\uff0c\u7531\u4e8e ",["code","babel@6.x"]," \u5bf9 IE8 \u7684\u652f\u6301\u4e0d\u4f73\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u7c7b\u4f3c ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/issues/28"},"#28"]," \u548c ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/858"},"#858"]," \u7684 default \u62a5\u9519\u7684\u95ee\u9898\uff0c\u4f60\u4e5f\u53ef\u4ee5\u53c2\u7167\u8fd9\u4e2a ",["a",{title:null,href:"https://github.com/ant-design/antd-init/blob/f5fb9479ca973fade51fd6754e50f8b3fafbb1df/boilerplate/webpack.config.js#L4-L8"},"webpack \u914d\u7f6e"]," \u6765\u89e3\u51b3\u3002"],["blockquote",["p","\u66f4\u591a IE8 \u4e0b\u4f7f\u7528 React \u7684\u76f8\u5173\u95ee\u9898\u53ef\u4ee5\u53c2\u8003\uff1a",["a",{title:null,href:"https://github.com/xcatliu/react-ie8"},"https://github.com/xcatliu/react-ie8"]]],["h2","\u81ea\u884c\u6784\u5efa"],["p","\u5982\u679c\u60f3\u81ea\u5df1\u7ef4\u62a4\u5de5\u4f5c\u6d41\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",["a",{title:null,href:"http://webpack.github.io/"},"webpack"]," \u8fdb\u884c\u6784\u5efa\u548c\u8c03\u8bd5\u3002\u7406\u8bba\u4e0a\u4f60\u53ef\u4ee5\u5229\u7528 React \u751f\u6001\u5708\u4e2d\u7684 ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"\u5404\u79cd\u811a\u624b\u67b6"]," \u8fdb\u884c\u5f00\u53d1\uff0c\u5982\u679c\u9047\u5230\u95ee\u9898\u53ef\u53c2\u8003\u6211\u4eec\u6240\u4f7f\u7528\u7684 ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"},"webpack \u914d\u7f6e"]," \u8fdb\u884c ",["a",{title:null,href:"http://ant-tool.github.io/webpack-config.html"},"\u5b9a\u5236"],"\u3002"],["p","\u5982\u679c\u4f60\u4f7f\u7528 ",["a",{title:null,href:"https://parceljs.org"},"parcel"],"\uff0c\u8fd9\u91cc\u4e5f\u6709 ",["a",{title:null,href:"https://github.com/ant-design/parcel-antd"},"\u4e00\u4e2a\u4f8b\u5b50"]," \u53ef\u4ee5\u53c2\u8003\u3002"],["p","\u76ee\u524d\u793e\u533a\u4e5f\u6709\u5f88\u591a\u57fa\u4e8e antd \u5b9a\u5236\u7684 ",["a",{title:null,href:"http://scaffold.ant.design/"},"\u811a\u624b\u67b6"],"\uff0c\u6b22\u8fce\u8fdb\u884c\u8bd5\u7528\u548c\u8d21\u732e\u3002"],["h2","\u6309\u9700\u52a0\u8f7d"],["p","\u5982\u679c\u4f60\u5728\u5f00\u53d1\u73af\u5883\u7684\u63a7\u5236\u53f0\u770b\u5230\u4e0b\u9762\u7684\u63d0\u793a\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u4f7f\u7528\u4e86 ",["code","import { Button } from 'choerodon-ui';"]," \u7684\u5199\u6cd5\u5f15\u5165\u4e86 antd \u4e0b\u6240\u6709\u7684\u6a21\u5757\uff0c\u8fd9\u4f1a\u5f71\u54cd\u5e94\u7528\u7684\u7f51\u7edc\u6027\u80fd\u3002"],["pre",{lang:null,highlighted:'You are using a whole package of antd<span class="token punctuation">,</span> please use https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>package<span class="token operator">/</span>babel<span class="token operator">-</span>plugin<span class="token operator">-</span>import <span class="token keyword">to</span> reduce app bundle size<span class="token punctuation">.</span>'},["code","You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size."]],["blockquote",["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:null}]]],["p","\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7684\u5199\u6cd5\u6765\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/lib/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/lib/button/style\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u6216\u8005 antd/lib/button/style/css \u52a0\u8f7d css \u6587\u4ef6</span>'},["code","import Button from 'choerodon-ui/lib/button';\nimport 'antd/lib/button/style'; // \u6216\u8005 antd/lib/button/style/css \u52a0\u8f7d css \u6587\u4ef6"]],["p","\u5982\u679c\u4f60\u4f7f\u7528\u4e86 babel\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," \u6765\u8fdb\u884c\u6309\u9700\u52a0\u8f7d\uff0c\u52a0\u5165\u8fd9\u4e2a\u63d2\u4ef6\u540e\u3002\u4f60\u53ef\u4ee5\u4ecd\u7136\u8fd9\u4e48\u5199\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>'},["code","import { Button } from 'choerodon-ui';"]],["p","\u63d2\u4ef6\u4f1a\u5e2e\u4f60\u8f6c\u6362\u6210 ",["code","antd/lib/xxx"]," \u7684\u5199\u6cd5\u3002\u53e6\u5916\u6b64\u63d2\u4ef6\u914d\u5408 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import#usage"},"style"]," \u5c5e\u6027\u53ef\u4ee5\u505a\u5230\u6a21\u5757\u6837\u5f0f\u7684\u6309\u9700\u81ea\u52a8\u52a0\u8f7d\u3002"],["blockquote",["p","\u6ce8\u610f\uff0cbabel-plugin-import \u7684 ",["code","style"]," \u5c5e\u6027\u9664\u4e86\u5f15\u5165\u5bf9\u5e94\u7ec4\u4ef6\u7684\u6837\u5f0f\uff0c\u4e5f\u4f1a\u5f15\u5165\u4e00\u4e9b\u5fc5\u8981\u7684\u5168\u5c40\u6837\u5f0f\u3002\u5982\u679c\u4f60\u4e0d\u9700\u8981\u5b83\u4eec\uff0c\u5efa\u8bae\u4e0d\u8981\u4f7f\u7528\u6b64\u5c5e\u6027\u3002\u4f60\u53ef\u4ee5 ",["code","import 'antd/dist/antd.css"]," \u624b\u52a8\u5f15\u5165\uff0c\u5e76\u8986\u76d6\u5168\u5c40\u6837\u5f0f\u3002"]],["h2","\u914d\u7f6e\u4e3b\u9898\u548c\u5b57\u4f53"],["ul",["li",["p",["a",{title:null,href:"/docs/react/customize-theme"},"\u6539\u53d8\u4e3b\u9898"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"},"\u4f7f\u7528\u672c\u5730\u5b57\u4f53"]]]],["h2","\u5c0f\u8d34\u58eb"],["ul",["li",["p","\u4f60\u53ef\u4ee5\u4eab\u7528 ",["code","npm"]," \u751f\u6001\u5708\u91cc\u7684\u6240\u6709\u6a21\u5757\u3002"]],["li",["p","\u6211\u4eec\u4f7f\u7528\u4e86 ",["code","babel"],"\uff0c\u8bd5\u8bd5\u7528 ",["a",{title:null,href:"http://babeljs.io/blog/2015/06/07/react-on-es6-plus"},"ES2015+"]," \u7684\u5199\u6cd5\u6765\u63d0\u5347\u7f16\u7801\u7684\u6109\u60a6\u611f\u3002"]]]],meta:{order:1,title:"\u5feb\u901f\u4e0a\u624b",filename:"docs/react/getting-started.zh-CN.md"},description:["section",["p","Ant Design React \u81f4\u529b\u4e8e\u63d0\u4f9b\u7ed9\u7a0b\u5e8f\u5458",["strong","\u6109\u60a6"],"\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"],["blockquote",["p","\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u63a8\u8350\u5148\u5b66\u4e60 ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"]," \u548c ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"],"\uff0c\u5e76\u6b63\u786e\u5b89\u88c5\u548c\u914d\u7f6e\u4e86 ",["a",{title:null,href:"https://nodejs.org/"},"Node.js"]," v6.5 \u6216\u4ee5\u4e0a\u3002\n\u5b98\u65b9\u6307\u5357\u5047\u8bbe\u4f60\u5df2\u4e86\u89e3\u5173\u4e8e HTML\u3001CSS \u548c JavaScript \u7684\u4e2d\u7ea7\u77e5\u8bc6\uff0c\u5e76\u4e14\u5df2\u7ecf\u5b8c\u5168\u638c\u63e1\u4e86 React \u5168\u5bb6\u6876\u7684\u6b63\u786e\u5f00\u53d1\u65b9\u5f0f\u3002\u5982\u679c\u4f60\u521a\u5f00\u59cb\u5b66\u4e60\u524d\u7aef\u6216\u8005 React\uff0c\u5c06 UI \u6846\u67b6\u4f5c\u4e3a\u4f60\u7684\u7b2c\u4e00\u6b65\u53ef\u80fd\u4e0d\u662f\u6700\u597d\u7684\u4e3b\u610f\u3002"]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5728\u7ebf\u6f14\u793a",title:"\u5728\u7ebf\u6f14\u793a"},"\u5728\u7ebf\u6f14\u793a"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7b2c\u4e00\u4e2a\u672c\u5730\u5b9e\u4f8b",title:"\u7b2c\u4e00\u4e2a\u672c\u5730\u5b9e\u4f8b"},"\u7b2c\u4e00\u4e2a\u672c\u5730\u5b9e\u4f8b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u517c\u5bb9\u6027",title:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u81ea\u884c\u6784\u5efa",title:"\u81ea\u884c\u6784\u5efa"},"\u81ea\u884c\u6784\u5efa"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6309\u9700\u52a0\u8f7d",title:"\u6309\u9700\u52a0\u8f7d"},"\u6309\u9700\u52a0\u8f7d"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u914d\u7f6e\u4e3b\u9898\u548c\u5b57\u4f53",title:"\u914d\u7f6e\u4e3b\u9898\u548c\u5b57\u4f53"},"\u914d\u7f6e\u4e3b\u9898\u548c\u5b57\u4f53"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5c0f\u8d34\u58eb",title:"\u5c0f\u8d34\u58eb"},"\u5c0f\u8d34\u58eb"]]]}}});