(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{419:function(t,n,a){"use strict";a.r(n);var o=a(0),e=a.n(o),s={template:'<section class="markdown"><h1 id="affix-固钉"><span>Affix 固钉</span><a href="#affix-固钉" class="anchor">#</a></h1><p>将页面元素钉在可视范围。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p><p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>offsetBottom</td><td>距离窗口底部达到指定偏移量后触发</td><td>number</td><td>-</td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td>number</td><td>-</td></tr><tr><td>target</td><td>设置 <code>Affix</code> 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td><td>() =&gt; HTMLElement</td><td>() =&gt; window</td></tr></tbody></table><blockquote><p>注意：Affix 内的元素不要使用绝对定位.如需要绝对定位的效果，可以直接设置 Affix 为绝对定位：</p></blockquote><pre><code class="language-html">&lt;s-affix style=&quot;position: &#39;absolute&#39;; top: y; left: x&quot;&gt;...&lt;/s-affix&gt;</code></pre><h2 id="faq"><span>FAQ</span><a href="#faq" class="anchor">#</a></h2><h3 id="affix-使用-target-绑定容器时，元素会跑到容器外。"><span>Affix 使用 <code>target</code> 绑定容器时，元素会跑到容器外。</span><a href="#affix-使用-target-绑定容器时，元素会跑到容器外。" class="anchor">#</a></h3><p>从性能角度考虑，我们只监听容器滚动事件。</p><p>相关 issue：<a href="https://github.com/ant-design/ant-design/issues/3938">#3938</a> <a href="https://github.com/ant-design/ant-design/issues/5642">#5642</a> <a href="https://github.com/ant-design/ant-design/issues/16120">#16120</a></p></section>'},p=a(8),d={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-affix offsetTop=\"{{top}}\">\n            &lt;s-button type=\"primary\" on-click=\"handleTopClick\">Affix Top&lt;/s-button>\n        &lt;/s-affix>\n        &lt;br />&lt;br />\n        &lt;s-affix offsetBottom=\"{{bottom}}\">\n            &lt;s-button type=\"primary\" on-click=\"handleBottomClick\">Affix Bottom&lt;/s-button>\n        &lt;/s-affix>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Affix, Button} from 'santd';\n\nexport default {\n    components: {\n        's-affix': Affix,\n        's-button': Button\n    },\n    initData() {\n        return {\n            top: 10,\n            bottom: 10\n        }\n    },\n    handleTopClick() {\n        this.data.set('top', this.data.get('top') + 10);\n    },\n    handleBottomClick() {\n        this.data.set('bottom', this.data.get('bottom') + 10);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-affix":p.a,"s-button":p.i},initData:()=>({top:10,bottom:10}),handleTopClick(){this.data.set("top",this.data.get("top")+10)},handleBottomClick(){this.data.set("bottom",this.data.get("bottom")+10)},template:'<div><s-affix offsetTop="{{top}}"><s-button type="primary" on-click="handleTopClick">Affix Top</s-button></s-affix><br><br><s-affix offsetBottom="{{bottom}}"><s-button type="primary" on-click="handleBottomClick">Affix Bottom</s-button></s-affix></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616494069764"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-affix offsetTop=\"{{120}}\" on-change=\"handleChange\">\n            &lt;s-button>120px to affix top&lt;/s-button>\n        &lt;/s-affix>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Affix, Button} from 'santd';\n\nexport default {\n    components: {\n        's-affix': Affix,\n        's-button': Button\n    },\n    handleChange(affix) {\n        console.log('affix: ', affix);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="固定状态改变的回调"><span>固定状态改变的回调</span><a href="#固定状态改变的回调" class="anchor">#</a></h4><p>可以获得是否固定的状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-affix":p.a,"s-button":p.i},handleChange(t){console.log("affix: ",t)},template:'<div><s-affix offsetTop="{{120}}" on-change="handleChange"><s-button>120px to affix top</s-button></s-affix></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616494069776"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l=(a(438),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="scrollable-container">\n      &lt;div class="background">\n        &lt;s-affix target="{{target}}">\n          &lt;s-button type="primary">Fixed at the top of container&lt;/s-button>\n        &lt;/s-affix>\n      &lt;/div>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Affix, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-affix\': Affix,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            // this.el用于获取组件根元素，这个例子里即class为scrollable-container的元素\n            // 如果要获取根元素以外的元素，使用ref，详见：https://baidu.github.io/san/doc/api/#ref\n            target: () => this.el\n        }\n    },\n}\n&lt;/script>\n\n&lt;style>\n.scrollable-container {\n  height: 100px;\n  overflow-y: scroll;\n}\n.background {\n  padding-top: 60px;\n  height: 300px;\n  background-image: url(\'https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg\');\n}\n&lt;/style></code></pre>',text:'\n<h4 id="滚动容器"><span>滚动容器</span><a href="#滚动容器" class="anchor">#</a></h4><p>用 <code>target</code> 设置 <code>Affix</code> 需要监听其滚动事件的元素，默认为 <code>window</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-affix":p.a,"s-button":p.i},initData(){return{target:()=>this.el}},template:'<div class="scrollable-container"><div class="background"><s-affix target="{{target}}"><s-button type="primary">Fixed at the top of container</s-button></s-affix></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616494069788"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'});n.default=e.a.defineComponent({components:{head:s,basic:d,readme:i,offset:c,target:l},template:"\n        <div>\n            <head/>\n            <basic/>\n            <offset/>\n            <target/>\n            <readme/>\n        </div>\n    "})},438:function(t,n,a){var o=a(3),e=a(439);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[t.i,e,""]]);var s={insert:"head",singleton:!1};o(e,s);t.exports=e.locals||{}},439:function(t,n,a){(n=a(4)(!1)).push([t.i,"\n.scrollable-container {\n  height: 100px;\n  overflow-y: scroll;\n}\n.background {\n  padding-top: 60px;\n  height: 300px;\n  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');\n}\n",""]),t.exports=n}}]);