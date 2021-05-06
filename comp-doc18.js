(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{539:function(e,s,t){"use strict";t.r(s);var i=t(0),n=t.n(i),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="descriptions"><span>Descriptions</span><a href="#descriptions" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>描述列表的标题，显示在最顶部</td><td>string</td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td>boolean</td><td>false</td></tr><tr><td>column</td><td>一行的 <code>DescriptionItems</code> 数量，可以写成像素值或支持响应式的对象写法 <code>{ xs: 8, sm: 16, md: 24}</code></td><td>number</td><td>3</td></tr><tr><td>size</td><td>设置列表的大小。可以设置为 <code>middle</code> 、<code>small</code>, 或不填（只有设置 <code>bordered=&quot;&#123;&#123;true}}&quot;</code> 生效）</td><td>default|middle|small</td><td>false</td></tr><tr><td>layout</td><td>描述布局</td><td>horizontal|vertical</td><td>horizontal</td></tr></tbody></table><h3 id="descriptionitems"><span>DescriptionItems</span><a href="#descriptionitems" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>内容的描述</td><td>string</td><td>-</td></tr><tr><td>span</td><td>包含列的数量</td><td>number</td><td>1</td></tr></tbody></table><blockquote><p>由于san框架机制及组件实现的问题，<code>DescriptionItems</code> 的属性值不支持插值语法写入，只支持如下写法：</p></blockquote><pre><code>&lt;s-descriptionsitems label=&quot;Price&quot; span=&quot;3&quot;&gt;$80.00&lt;/s-descriptionsitems&gt;</code></pre></section>'},a={template:'<section class="markdown"><h1 id="descriptions-描述列表"><span>Descriptions 描述列表</span><a href="#descriptions-描述列表" class="anchor">#</a></h1><p>成组展示多个只读字段。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>常见于详情页的信息展示。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},d=t(8),c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-descriptions title="User Info">\n            &lt;s-descriptionsitem label="UserName">Zhou Maomao&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Telephone">18100000000&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Live">Hangzhou, Zhejiang&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Remark">empty&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Address">\n                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\n            &lt;/s-descriptionsitem>\n        &lt;/s-descriptions>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Descriptions} from \'santd\';\n\nexport default {\n    components: {\n        \'s-descriptions\': Descriptions,\n        \'s-descriptionsitem\': Descriptions.Item\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>简单的展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-descriptions":d.s,"s-descriptionsitem":d.s.Item},template:'<div><s-descriptions title="User Info"><s-descriptionsitem label="UserName">Zhou Maomao</s-descriptionsitem><s-descriptionsitem label="Telephone">18100000000</s-descriptionsitem><s-descriptionsitem label="Live">Hangzhou, Zhejiang</s-descriptionsitem><s-descriptionsitem label="Remark">empty</s-descriptionsitem><s-descriptionsitem label="Address">No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</s-descriptionsitem></s-descriptions></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462046"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-descriptions title="User Info" bordered="{{true}}">\n            &lt;s-descriptionsitem label="Product">Cloud Database&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Billing Mode">Prepaid&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Automatic Renewal">YES&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Order time">2018-04-24 18:00:00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Usage Time" span="3">2019-04-24 18:00:00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Status" span="3">\n                &lt;s-badge status="processing" text="Running" />\n            &lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Negotiated Amount">$80.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Discount">$20.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Official Receipts">$60.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Config Info">\n                Data disk type: MongoDB\n                &lt;br />\n                Database version: 3.4\n                &lt;br />\n                Package: dds.mongo.mid\n                &lt;br />\n                Storage space: 10 GB\n                &lt;br />\n                Replication_factor:3\n                &lt;br />\n                Region: East China 1&lt;br />\n            &lt;/s-descriptionsitem>\n        &lt;/s-descriptions>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Descriptions, Badge} from \'santd\';\n\nexport default {\n    components: {\n        \'s-descriptions\': Descriptions,\n        \'s-descriptionsitem\': Descriptions.Item,\n        \'s-badge\': Badge\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带边框的"><span>带边框的</span><a href="#带边框的" class="anchor">#</a></h4><p>带边框和背景颜色列表。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-descriptions":d.s,"s-descriptionsitem":d.s.Item,"s-badge":d.g},template:'<div><s-descriptions title="User Info" bordered="{{true}}"><s-descriptionsitem label="Product">Cloud Database</s-descriptionsitem><s-descriptionsitem label="Billing Mode">Prepaid</s-descriptionsitem><s-descriptionsitem label="Automatic Renewal">YES</s-descriptionsitem><s-descriptionsitem label="Order time">2018-04-24 18:00:00</s-descriptionsitem><s-descriptionsitem label="Usage Time" span="3">2019-04-24 18:00:00</s-descriptionsitem><s-descriptionsitem label="Status" span="3"><s-badge status="processing" text="Running"></s-badge></s-descriptionsitem><s-descriptionsitem label="Negotiated Amount">$80.00</s-descriptionsitem><s-descriptionsitem label="Discount">$20.00</s-descriptionsitem><s-descriptionsitem label="Official Receipts">$60.00</s-descriptionsitem><s-descriptionsitem label="Config Info">Data disk type: MongoDB<br>Database version: 3.4<br>Package: dds.mongo.mid<br>Storage space: 10 GB<br>Replication_factor:3<br>Region: East China 1<br></s-descriptionsitem></s-descriptions></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462033"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-radiogroup on-change="handleChange" value="{{size}}" name="size">\n            &lt;s-radio value="default">default&lt;/s-radio>\n            &lt;s-radio value="middle">middle&lt;/s-radio>\n            &lt;s-radio value="small">small&lt;/s-radio>\n        &lt;/s-radiogroup>\n        &lt;br />\n        &lt;br />\n        &lt;s-descriptions title="Custom Size" bordered="{{true}}" size="{{size}}">\n            &lt;s-descriptionsitem label="Product">Cloud Database&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Billing Mode">Prepaid&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="time">18:00:00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Amount">$80.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Discount">$20.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Official Receipts">$60.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Config Info">\n                Data disk type: MongoDB\n                &lt;br />\n                Database version: 3.4\n                &lt;br />\n                Package: dds.mongo.mid\n                &lt;br />\n                Storage space: 10 GB\n                &lt;br />\n                Replication_factor:3\n                &lt;br />\n                Region: East China 1&lt;br />\n            &lt;/s-descriptionsitem>\n        &lt;/s-descriptions>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Descriptions, Radio} from \'santd\';\n\nexport default {\n    initData() {\n        return {\n            size: \'default\'\n        };\n    },\n    components: {\n        \'s-descriptions\': Descriptions,\n        \'s-descriptionsitem\': Descriptions.Item,\n        \'s-radio\': Radio,\n        \'s-radiogroup\': Radio.Group\n    },\n    handleChange(e) {\n        this.data.set(\'size\', e.target.value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义尺寸"><span>自定义尺寸</span><a href="#自定义尺寸" class="anchor">#</a></h4><p>自定义尺寸，适应在各种容器中展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({size:"default"}),components:{"s-descriptions":d.s,"s-descriptionsitem":d.s.Item,"s-radio":d.O,"s-radiogroup":d.O.Group},handleChange(e){this.data.set("size",e.target.value)},template:'<div><s-radiogroup on-change="handleChange" value="{{size}}" name="size"><s-radio value="default">default</s-radio><s-radio value="middle">middle</s-radio><s-radio value="small">small</s-radio></s-radiogroup><br><br><s-descriptions title="Custom Size" bordered="{{true}}" size="{{size}}"><s-descriptionsitem label="Product">Cloud Database</s-descriptionsitem><s-descriptionsitem label="Billing Mode">Prepaid</s-descriptionsitem><s-descriptionsitem label="time">18:00:00</s-descriptionsitem><s-descriptionsitem label="Amount">$80.00</s-descriptionsitem><s-descriptionsitem label="Discount">$20.00</s-descriptionsitem><s-descriptionsitem label="Official Receipts">$60.00</s-descriptionsitem><s-descriptionsitem label="Config Info">Data disk type: MongoDB<br>Database version: 3.4<br>Package: dds.mongo.mid<br>Storage space: 10 GB<br>Replication_factor:3<br>Region: East China 1<br></s-descriptionsitem></s-descriptions></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462038"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-descriptions\n            title="Responsive Descriptions"\n            bordered="{{true}}"\n            column="{{{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}}"\n        >\n            &lt;s-descriptionsitem label="Product">Cloud Database&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Billing Mode">Prepaid&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="time">18:00:00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Amount">$80.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Discount">$20.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Official Receipts">$60.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Config Info">\n                Data disk type: MongoDB\n                &lt;br />\n                Database version: 3.4\n                &lt;br />\n                Package: dds.mongo.mid\n                &lt;br />\n                Storage space: 10 GB\n                &lt;br />\n                Replication_factor:3\n                &lt;br />\n                Region: East China 1&lt;br />\n            &lt;/s-descriptionsitem>\n        &lt;/s-descriptions>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Descriptions, Radio} from \'santd\';\n\nexport default {\n    initData() {\n        return {\n            size: \'default\'\n        };\n    },\n    components: {\n        \'s-descriptions\': Descriptions,\n        \'s-descriptionsitem\': Descriptions.Item,\n        \'s-radio\': Radio,\n        \'s-radiogroup\': Radio.Group\n    },\n    handleChange(e) {\n        this.data.set(\'size\', e.target.value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="响应式"><span>响应式</span><a href="#响应式" class="anchor">#</a></h4><p>通过响应式的配置可以实现在小屏幕设备上的完美呈现。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({size:"default"}),components:{"s-descriptions":d.s,"s-descriptionsitem":d.s.Item,"s-radio":d.O,"s-radiogroup":d.O.Group},handleChange(e){this.data.set("size",e.target.value)},template:'<div><s-descriptions title="Responsive Descriptions" bordered="{{true}}" column="{{{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}}"><s-descriptionsitem label="Product">Cloud Database</s-descriptionsitem><s-descriptionsitem label="Billing Mode">Prepaid</s-descriptionsitem><s-descriptionsitem label="time">18:00:00</s-descriptionsitem><s-descriptionsitem label="Amount">$80.00</s-descriptionsitem><s-descriptionsitem label="Discount">$20.00</s-descriptionsitem><s-descriptionsitem label="Official Receipts">$60.00</s-descriptionsitem><s-descriptionsitem label="Config Info">Data disk type: MongoDB<br>Database version: 3.4<br>Package: dds.mongo.mid<br>Storage space: 10 GB<br>Replication_factor:3<br>Region: East China 1<br></s-descriptionsitem></s-descriptions></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462027"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-descriptions title="User Info" layout="vertical">\n            &lt;s-descriptionsitem label="UserName">Zhou Maomao&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Telephone">18100000000&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Live">Hangzhou, Zhejiang&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Remark">empty&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Address">\n                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\n            &lt;/s-descriptionsitem>\n        &lt;/s-descriptions>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Descriptions} from \'santd\';\n\nexport default {\n    components: {\n        \'s-descriptions\': Descriptions,\n        \'s-descriptionsitem\': Descriptions.Item\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="垂直"><span>垂直</span><a href="#垂直" class="anchor">#</a></h4><p>垂直的列表。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-descriptions":d.s,"s-descriptionsitem":d.s.Item},template:'<div><s-descriptions title="User Info" layout="vertical"><s-descriptionsitem label="UserName">Zhou Maomao</s-descriptionsitem><s-descriptionsitem label="Telephone">18100000000</s-descriptionsitem><s-descriptionsitem label="Live">Hangzhou, Zhejiang</s-descriptionsitem><s-descriptionsitem label="Remark">empty</s-descriptionsitem><s-descriptionsitem label="Address">No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</s-descriptionsitem></s-descriptions></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311462011"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-descriptions title="User Info" bordered="{{true}}" layout="vertical">\n            &lt;s-descriptionsitem label="Product">Cloud Database&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Billing Mode">Prepaid&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Automatic Renewal">YES&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Order time">2018-04-24 18:00:00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Usage Time" span="3">2019-04-24 18:00:00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Status" span="3">\n                &lt;s-badge status="processing" text="Running" />\n            &lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Negotiated Amount">$80.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Discount">$20.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Official Receipts">$60.00&lt;/s-descriptionsitem>\n            &lt;s-descriptionsitem label="Config Info">\n                Data disk type: MongoDB\n                &lt;br />\n                Database version: 3.4\n                &lt;br />\n                Package: dds.mongo.mid\n                &lt;br />\n                Storage space: 10 GB\n                &lt;br />\n                Replication_factor:3\n                &lt;br />\n                Region: East China 1&lt;br />\n            &lt;/s-descriptionsitem>\n        &lt;/s-descriptions>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Descriptions, Badge} from \'santd\';\n\nexport default {\n    components: {\n        \'s-descriptions\': Descriptions,\n        \'s-descriptionsitem\': Descriptions.Item,\n        \'s-badge\': Badge\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="垂直带边框的"><span>垂直带边框的</span><a href="#垂直带边框的" class="anchor">#</a></h4><p>垂直带边框和背景颜色列表。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-descriptions":d.s,"s-descriptionsitem":d.s.Item,"s-badge":d.g},template:'<div><s-descriptions title="User Info" bordered="{{true}}" layout="vertical"><s-descriptionsitem label="Product">Cloud Database</s-descriptionsitem><s-descriptionsitem label="Billing Mode">Prepaid</s-descriptionsitem><s-descriptionsitem label="Automatic Renewal">YES</s-descriptionsitem><s-descriptionsitem label="Order time">2018-04-24 18:00:00</s-descriptionsitem><s-descriptionsitem label="Usage Time" span="3">2019-04-24 18:00:00</s-descriptionsitem><s-descriptionsitem label="Status" span="3"><s-badge status="processing" text="Running"></s-badge></s-descriptionsitem><s-descriptionsitem label="Negotiated Amount">$80.00</s-descriptionsitem><s-descriptionsitem label="Discount">$20.00</s-descriptionsitem><s-descriptionsitem label="Official Receipts">$60.00</s-descriptionsitem><s-descriptionsitem label="Config Info">Data disk type: MongoDB<br>Database version: 3.4<br>Package: dds.mongo.mid<br>Storage space: 10 GB<br>Replication_factor:3<br>Region: East China 1<br></s-descriptionsitem></s-descriptions></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311461998"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};s.default=n.a.defineComponent({components:{desc:a,readme:o,basic:c,bordered:p,size:r,responsive:l,vertical:m,verticalbordered:g},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <bordered/>\n            <size/>\n            <responsive/>\n            <vertical/>\n            <verticalbordered/>\n            <readme/>\n        </div>\n    "})}}]);