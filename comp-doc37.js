(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{523:function(t,a,n){"use strict";n.r(a);var e=n(0),o=n.n(e),s={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td>number</td><td>-</td></tr><tr><td>defaultCurrent</td><td>默认的当前页数</td><td>number</td><td>1</td></tr><tr><td>defaultPageSize</td><td>默认的每页条数</td><td>number</td><td>10</td></tr><tr><td>disabled</td><td>禁用分页</td><td>boolean</td><td>-</td></tr><tr><td>hideOnSinglePage</td><td>只有一页时是否隐藏分页器</td><td>boolean</td><td>false</td></tr><tr><td>itemRender</td><td>用于自定义页码的结构，可用于优化 SEO</td><td>slot {type: &#39;page&#39; | &#39;prev&#39; | &#39;next&#39;, page: number}</td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td>number</td><td>-</td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td>string[]</td><td>[10, 20, 30, 40]</td></tr><tr><td>showLessItems</td><td>展示较少的分页数</td><td>boolean</td><td>false</td></tr><tr><td>showQuickJumper</td><td>显示快速跳转至某页</td><td>boolean</td><td>false</td></tr><tr><td>showSizeChanger</td><td>是否可以改变 pageSize</td><td>boolean</td><td>false</td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td>Function(total, range)</td><td>-</td></tr><tr><td>simple</td><td>当添加该属性时，显示为简单分页</td><td>boolean</td><td>-</td></tr><tr><td>size</td><td>当为「small」时，是小尺寸分页</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>total</td><td>数据总数</td><td>number</td><td>0</td></tr><tr><td>hasNext</td><td>是否还有下一页，与<code>simple</code>同时用</td><td>boolean</td><td>-</td></tr></tbody></table><h3 id="事件"><span>事件</span><a href="#事件" class="anchor">#</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>on-change</td><td>页码改变的回调，参数是改变后的页码及每页条数</td><td>Function({page, pageSize})</td><td>noop</td></tr><tr><td>on-showSizeChange</td><td>pageSize 变化的回调</td><td>Function({current, size})</td><td>noop</td></tr></tbody></table></section>'},i=n(8),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-pagination total="{{50}}" defaultCurrent="{{1}}">&lt;/s-pagination>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination} from \'santd\';\n\nexport default {\n    components: {\n        \'s-pagination\': Pagination\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>基础分页</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pagination":i.K},template:'<div><s-pagination total="{{50}}" defaultCurrent="{{1}}"></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361283"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-pagination total="{{500}}" current="{{6}}">&lt;/s-pagination>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination} from \'santd\';\n\nexport default {\n    components: {\n        \'s-pagination\': Pagination\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="更多"><span>更多</span><a href="#更多" class="anchor">#</a></h4><p>更多分页</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pagination":i.K},template:'<div><s-pagination total="{{500}}" current="{{6}}"></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361266"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-pagination total="{{500}}" showSizeChanger="{{true}}" defaultCurrent="{{3}}" on-showSizeChange="handleShowSizeChange">&lt;/s-pagination>\n        &lt;br/>\n        &lt;s-pagination total="{{500}}" showSizeChanger="{{true}}" defaultCurrent="{{3}}" on-showSizeChange="handleShowSizeChange" disabled="{{true}}">&lt;/s-pagination>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination} from \'santd\';\n\nexport default {\n    components: {\n        \'s-pagination\': Pagination\n    },\n    handleShowSizeChange(payload) {\n        console.log(payload.current, payload.pageSize);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="改变"><span>改变</span><a href="#改变" class="anchor">#</a></h4><p>改变每页显示条目数</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pagination":i.K},handleShowSizeChange(t){console.log(t.current,t.pageSize)},template:'<div><s-pagination total="{{500}}" showSizeChanger="{{true}}" defaultCurrent="{{3}}" on-showSizeChange="handleShowSizeChange"></s-pagination><br><s-pagination total="{{500}}" showSizeChanger="{{true}}" defaultCurrent="{{3}}" on-showSizeChange="handleShowSizeChange" disabled="{{true}}"></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361257"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-pagination total="{{500}}" showQuickJumper="{{true}}" defaultCurrent="{{2}}" on-change="handleChange">&lt;/s-pagination>\n        &lt;br/>\n        &lt;s-pagination total="{{500}}" showQuickJumper="{{true}}" defaultCurrent="{{2}}" on-change="handleChange" disabled="{{true}}">&lt;/s-pagination>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination} from \'santd\';\n\nexport default {\n    components: {\n        \'s-pagination\': Pagination\n    },\n    handleChange(payload) {\n        console.log(\'Page: \' + payload.page);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="跳转"><span>跳转</span><a href="#跳转" class="anchor">#</a></h4><p>快速跳转到某一页</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pagination":i.K},handleChange(t){console.log("Page: "+t.page)},template:'<div><s-pagination total="{{500}}" showQuickJumper="{{true}}" defaultCurrent="{{2}}" on-change="handleChange"></s-pagination><br><s-pagination total="{{500}}" showQuickJumper="{{true}}" defaultCurrent="{{2}}" on-change="handleChange" disabled="{{true}}"></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361252"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const r=function(t){return`Total ${t} items`};var g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-pagination size="small" total="{{50}}">&lt;/s-pagination>\n        &lt;s-pagination size="small" total="{{50}}" showSizeChanger="{{true}}" showQuickJumper="{{true}}">&lt;/s-pagination>\n        &lt;s-pagination size="small" total="{{50}}" showTotal="{{showTotal}}">&lt;/s-pagination>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination} from \'santd\';\n\nconst showTotal = function (total) {\n    return &#96;Total &#36;&#123;total} items&#96;;\n};\nexport default {\n    initData() {\n        return {\n            showTotal: showTotal\n        };\n    },\n    components: {\n        \'s-pagination\': Pagination\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="迷你"><span>迷你</span><a href="#迷你" class="anchor">#</a></h4><p>迷你版本。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({showTotal:r}),components:{"s-pagination":i.K},template:'<div><s-pagination size="small" total="{{50}}"></s-pagination><s-pagination size="small" total="{{50}}" showSizeChanger="{{true}}" showQuickJumper="{{true}}"></s-pagination><s-pagination size="small" total="{{50}}" showTotal="{{showTotal}}"></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361234"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const h=function(t){return`Total ${t} items`},m=function(t,a){return`${a[0]}-${a[1]} of ${t} items`};var x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-pagination total="{{85}}" pageSize="{{20}}" defaultCurrent="{{1}}" showTotal="{{showTotal}}">&lt;/s-pagination>\n    &lt;s-pagination total="{{85}}" pageSize="{{20}}" defaultCurrent="{{1}}" showTotal="{{showTotal1}}">&lt;/s-pagination>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination} from \'santd\';\n\nconst showTotal = function (total) {\n    return &#96;Total &#36;&#123;total} items&#96;;\n};\n\nconst showTotal1 = function (total, range) {\n    return &#96;&#36;&#123;range[0]}-&#36;&#123;range[1]} of &#36;&#123;total} items&#96;;\n}\n\nexport default {\n    initData() {\n        return {\n            showTotal: showTotal,\n            showTotal1: showTotal1\n        }\n    },\n    components: {\n        \'s-pagination\': Pagination\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="总数"><span>总数</span><a href="#总数" class="anchor">#</a></h4><p>通过设置 <code>showTotal</code> 展示总共有多少数据。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({showTotal:h,showTotal1:m}),components:{"s-pagination":i.K},template:'<div><s-pagination total="{{85}}" pageSize="{{20}}" defaultCurrent="{{1}}" showTotal="{{showTotal}}"></s-pagination><s-pagination total="{{85}}" pageSize="{{20}}" defaultCurrent="{{1}}" showTotal="{{showTotal1}}"></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361247"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-pagination simple="{{true}}" total="{{50}}" defaultCurrent="{{2}}">&lt;/s-pagination>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination} from \'santd\';\n\nexport default {\n    components: {\n        \'s-pagination\': Pagination\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="简洁"><span>简洁</span><a href="#简洁" class="anchor">#</a></h4><p>简单的翻页。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pagination":i.K},template:'<div><s-pagination simple="{{true}}" total="{{50}}" defaultCurrent="{{2}}"></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361261"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-pagination total="{{50}}" current="{{current}}" on-change="handleChange">&lt;/s-pagination>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination} from \'santd\';\n\nexport default {\n    initData() {\n        return {\n            current: 3\n        };\n    },\n    handleChange(payload) {\n        console.log(payload.page);\n        this.data.set(\'current\', payload.page);\n    },\n    components: {\n        \'s-pagination\': Pagination\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="受控"><span>受控</span><a href="#受控" class="anchor">#</a></h4><p>受控制的页码。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({current:3}),handleChange(t){console.log(t.page),this.data.set("current",t.page)},components:{"s-pagination":i.K},template:'<div><s-pagination total="{{50}}" current="{{current}}" on-change="handleChange"></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361240"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},v={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-pagination total=\"{{500}}\">\n        &lt;template slot=\"itemRender\">\n            &lt;a s-if=\"{{type === 'prev'}}\">Previous&lt;/a>\n            &lt;a s-else-if=\"{{type === 'next'}}\">Next&lt;/a>\n            &lt;a s-else-if=\"{{type === 'page'}}\">{{page}}&lt;/a>\n        &lt;/template>\n    &lt;/s-pagination>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from 'san';\nimport {Pagination} from 'santd';\n\nexport default {\n    components: {\n        's-pagination': Pagination\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="上一步和下一步"><span>上一步和下一步</span><a href="#上一步和下一步" class="anchor">#</a></h4><p>修改上一步和下一步为文字链接。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pagination":i.K},template:'<div><s-pagination total="{{500}}"><template slot="itemRender"><a s-if="{{type === \'prev\'}}">Previous</a><a s-else-if="{{type === \'next\'}}">Next</a><a s-else-if="{{type === \'page\'}}">{{page}}</a></template></s-pagination></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620919361229"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},b={template:'<section class="markdown"><h1 id="pagination-分页"><span>Pagination 分页</span><a href="#pagination-分页" class="anchor">#</a></h1><p>采用分页的形式分隔长列表，每次只加载一个页面。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>当加载/渲染所有数据将花费很多时间时；</li><li>可切换页码浏览数据。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'};a.default=o.a.defineComponent({components:{readme:s,basic:d,many:p,change:c,jumper:l,mini:g,controlled:u,totalnum:x,simple:w,itemrender:v,desc:b},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <many/>\n            <change/>\n            <jumper/>\n            <mini/>\n            <simple/>\n            <controlled/>\n            <totalnum/>\n            <itemrender/>\n            <readme/>\n        </div>\n    "})}}]);