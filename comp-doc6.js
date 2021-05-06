(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{526:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>自定义小圆点的颜色</td><td>string</td><td></td></tr><tr><td>count</td><td>展示的数字，大于 overflowCount 时显示为 <code>${overflowCount}+</code>，为 0 时隐藏</td><td>number</td><td></td></tr><tr><td>dot</td><td>不展示数字，只有一个小红点</td><td>boolean</td><td><code>false</code></td></tr><tr><td>offset</td><td>设置状态点的位置偏移，格式为 <code>[x, y]</code></td><td>[number, number]</td><td>-</td></tr><tr><td>overflowCount</td><td>展示封顶的数字值</td><td>number</td><td>99</td></tr><tr><td>showZero</td><td>当数值为 0 时，是否展示 Badge</td><td>boolean</td><td><code>false</code></td></tr><tr><td>status</td><td>设置 Badge 为状态点</td><td>Enum{ &#39;success&#39;, &#39;processing, &#39;default&#39;, &#39;error&#39;, &#39;warning&#39; }</td><td>&#39;&#39;</td></tr><tr><td>text</td><td>在设置了 <code>status</code> 的前提下有效，设置状态点的文本</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>title</td><td>设置鼠标放在状态点上时显示的文字</td><td>string</td><td><code>count</code></td></tr></tbody></table></section>'},d={template:'<section class="markdown"><h1 id="badge-徽标数"><span>Badge 徽标数</span><a href="#badge-徽标数" class="anchor">#</a></h1><p>图标右上角的圆形徽标数字。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=a(8),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-badge count="{{5}}">&lt;a href="#" class="head-example">&lt;/a>&lt;/s-badge>\n        &lt;s-badge showZero="{{true}}" count="{{0}}">&lt;a href="#" class="head-example">&lt;/a>&lt;/s-badge>\n        &lt;s-badge>\n            &lt;s-icon slot="count" type="clock-circle" style="color: #f5222d;">&lt;/s-icon>\n            &lt;a href="#" class="head-example">&lt;/a>\n        &lt;/s-badge>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Badge, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-badge\': Badge,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>简单的徽章展示，当<code>count</code>为<code>0</code>时，默认不显示，但是可以使用<code>showZero</code>修改为显示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-badge":c.g,"s-icon":c.z},template:'<div><s-badge count="{{5}}"><a href="#" class="head-example"></a></s-badge><s-badge showZero="{{true}}" count="{{0}}"><a href="#" class="head-example"></a></s-badge><s-badge><s-icon slot="count" type="clock-circle" style="color: #f5222d;"></s-icon><a href="#" class="head-example"></a></s-badge></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462884"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-badge count="{{99}}">\n            &lt;a href="#" class="head-example">&lt;/a>\n        &lt;/s-badge>\n        &lt;s-badge count="{{100}}">\n            &lt;a href="#" class="head-example">&lt;/a>\n        &lt;/s-badge>\n        &lt;s-badge count="{{99}}" overflowCount="{{10}}">\n            &lt;a href="#" class="head-example">&lt;/a>\n        &lt;/s-badge>\n        &lt;s-badge count="{{1000}}" overflowCount="{{999}}">\n            &lt;a href="#" class="head-example">&lt;/a>\n        &lt;/s-badge>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Badge} from \'santd\';\n\nexport default {\n    components: {\n        \'s-badge\': Badge\n    },\n}\n&lt;/script></code></pre>',text:'\n<h4 id="封顶数字"><span>封顶数字</span><a href="#封顶数字" class="anchor">#</a></h4><p>超过 <code>overflowCount</code> 的会显示为 <code>${overflowCount}+</code>，默认的 <code>overflowCount</code> 为 <code>99</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-badge":c.g},template:'<div><s-badge count="{{99}}"><a href="#" class="head-example"></a></s-badge><s-badge count="{{100}}"><a href="#" class="head-example"></a></s-badge><s-badge count="{{99}}" overflowCount="{{10}}"><a href="#" class="head-example"></a></s-badge><s-badge count="{{1000}}" overflowCount="{{999}}"><a href="#" class="head-example"></a></s-badge></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462874"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;a href="#">\n            &lt;s-badge showZero={{true}} count="{{5}}">\n                &lt;span class="head-example">&lt;/span>\n            &lt;/s-badge>\n        &lt;/a>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Badge} from \'santd\';\n\nexport default {\n    components: {\n        \'s-badge\': Badge\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="可点击"><span>可点击</span><a href="#可点击" class="anchor">#</a></h4><p>用 a 标签进行包裹即可。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-badge":c.g},template:'<div><a href="#"><s-badge showZero="{{true}}" count="{{5}}"><span class="head-example"></span></s-badge></a></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462878"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-badge status="success">&lt;/s-badge>\n        &lt;s-badge status="error">&lt;/s-badge>\n        &lt;s-badge status="default">&lt;/s-badge>\n        &lt;s-badge status="processing">&lt;/s-badge>\n        &lt;s-badge status="warning">&lt;/s-badge>\n        &lt;br />\n        &lt;s-badge status="success" text="Success" />\n        &lt;br />\n        &lt;s-badge status="error" text="Error" />\n        &lt;br />\n        &lt;s-badge status="default" text="Default" />\n        &lt;br />\n        &lt;s-badge status="processing" text="Processing" />\n        &lt;br />\n        &lt;s-badge status="warning" text="Warning" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Badge} from \'santd\';\n\nexport default {\n    components: {\n        \'s-badge\': Badge\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="状态点"><span>状态点</span><a href="#状态点" class="anchor">#</a></h4><p>用于表示状态的小圆点。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-badge":c.g},template:'<div><s-badge status="success"></s-badge><s-badge status="error"></s-badge><s-badge status="default"></s-badge><s-badge status="processing"></s-badge><s-badge status="warning"></s-badge><br><s-badge status="success" text="Success"></s-badge><br><s-badge status="error" text="Error"></s-badge><br><s-badge status="default" text="Default"></s-badge><br><s-badge status="processing" text="Processing"></s-badge><br><s-badge status="warning" text="Warning"></s-badge></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462860"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-badge count=\"{{25}}\"/>\n        &lt;s-badge count=\"{{4}}\" style=\"{{{'background-color': '#fff', 'color': '#999', 'box-shadow': '0 0 0 1px #d9d9d9 inset'}}}\"/>\n        &lt;s-badge count=\"{{109}}\" style=\"{{{'background-color': '#52c41a'}}}\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Badge} from 'santd';\n\nexport default {\n    components: {\n        's-badge': Badge\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="独立使用"><span>独立使用</span><a href="#独立使用" class="anchor">#</a></h4><p>不包裹任何元素即是独立使用，可自定样式展现。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-badge":c.g},template:"<div><s-badge count=\"{{25}}\"></s-badge><s-badge count=\"{{4}}\" style=\"{{{'background-color': '#fff', 'color': '#999', 'box-shadow': '0 0 0 1px #d9d9d9 inset'}}}\"></s-badge><s-badge count=\"{{109}}\" style=\"{{{'background-color': '#52c41a'}}}\"></s-badge></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462866"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-badge dot="{{true}}">\n          &lt;s-icon type="notification" />\n      &lt;/s-badge>\n        &lt;s-badge count={{0}} dot="{{true}}">\n          &lt;s-icon type="notification" />\n      &lt;/s-badge>\n        &lt;s-badge dot="{{true}}">\n          &lt;a href="#">Link something&lt;/a>\n      &lt;/s-badge>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Badge, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-badge\': Badge,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="讨嫌的小红点"><span>讨嫌的小红点</span><a href="#讨嫌的小红点" class="anchor">#</a></h4><p>没有具体的数字。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-badge":c.g,"s-icon":c.z},template:'<div><s-badge dot="{{true}}"><s-icon type="notification"></s-icon></s-badge><s-badge count="{{0}}" dot="{{true}}"><s-icon type="notification"></s-icon></s-badge><s-badge dot="{{true}}"><a href="#">Link something</a></s-badge></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462870"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h=(a(591),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;style>\n.head-example {\n    width: 42px;\n    height: 42px;\n    border-radius: 4px;\n    background: #eee;\n    display: inline-block;\n}\n&lt;/style>\n&lt;template>\n    &lt;div>\n        &lt;s-badge\n            count=\"{{count}}\">\n            &lt;a href=\"#\" class=\"head-example\">&lt;/a>\n        &lt;/s-badge>\n        &lt;s-button on-click=\"sub\">-&lt;/s-button>\n        &lt;s-button on-click=\"add\">+&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Badge, Button} from 'santd';\n\nexport default {\n    components: {\n        's-badge': Badge,\n        's-button': Button\n    },\n    initData() {\n        return {\n            count: 23\n        }\n    },\n    sub() {\n        let count = +this.data.get('count');\n        this.data.set('count', --count);\n    },\n    add() {\n        let count = +this.data.get('count');\n        this.data.set('count', ++count);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="badge"><span>badge</span><a href="#badge" class="anchor">#</a></h4><p>badge</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-badge":c.g,"s-button":c.i},initData:()=>({count:23}),sub(){let e=+this.data.get("count");this.data.set("count",--e)},add(){let e=+this.data.get("count");this.data.set("count",++e)},template:'<div><s-badge count="{{count}}"><a href="#" class="head-example"></a></s-badge><s-button on-click="sub">-</s-button><s-button on-click="add">+</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462852"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'});const b=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];var m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;h4 style=\"margin-bottom: 16px\">Presets:&lt;/h4>\n        &lt;div>\n            &lt;div s-for=\"color in colors\" key=\"{{color}}\">\n                &lt;s-badge color=\"{{color}}\" text=\"{{color}}\" />\n            &lt;/div>\n        &lt;/div>\n        &lt;h4 style=\"margin: 16px 0;\">Custom:&lt;/h4>\n        &lt;div>\n            &lt;s-badge color=\"#f50\" text=\"#f50\" />\n            &lt;br />\n            &lt;s-badge color=\"#2db7f5\" text=\"#2db7f5\" />\n            &lt;br />\n            &lt;s-badge color=\"#87d068\" text=\"#87d068\" />\n            &lt;br />\n            &lt;s-badge color=\"#108ee9\" text=\"#108ee9\" />\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Badge} from 'santd';\n\nconst colors = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'];\nexport default {\n    components: {\n        's-badge': Badge\n    },\n    initData() {\n        return {\n            colors: colors\n        };\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="多彩徽标"><span>多彩徽标</span><a href="#多彩徽标" class="anchor">#</a></h4><p>我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-badge":c.g},initData:()=>({colors:b}),template:'<div><h4 style="margin-bottom: 16px">Presets:</h4><div><div s-for="color in colors" key="{{color}}"><s-badge color="{{color}}" text="{{color}}"></s-badge></div></div><h4 style="margin: 16px 0;">Custom:</h4><div><s-badge color="#f50" text="#f50"></s-badge><br><s-badge color="#2db7f5" text="#2db7f5"></s-badge><br><s-badge color="#87d068" text="#87d068"></s-badge><br><s-badge color="#108ee9" text="#108ee9"></s-badge></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462846"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};a(593),t.default=n.a.defineComponent({components:{readme:o,desc:d,basic:l,overflow:i,link:p,status:r,independent:g,dot:x,dynamic:h,colors:m},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <overflow/>\n            <link/>\n            <status/>\n            <independent/>\n            <dot/>\n            <dynamic/>\n            <customtitle/>\n            <colors/>\n            <readme/>\n        </div>\n    "})},591:function(e,t,a){var s=a(4),n=a(592);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};s(n,o);e.exports=n.locals||{}},592:function(e,t,a){(t=a(5)(!1)).push([e.i,"\n.head-example {\n    width: 42px;\n    height: 42px;\n    border-radius: 4px;\n    background: #eee;\n    display: inline-block;\n}\n",""]),e.exports=t},593:function(e,t,a){}}]);