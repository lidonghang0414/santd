(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{536:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),d={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="tree-props"><span>Tree props</span><a href="#tree-props" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>allowClear</td><td>显示清除按钮</td><td>boolean</td><td>false</td></tr><tr><td>autoClearSearchValue</td><td>当多选模式下值被选择，自动清空搜索框</td><td>boolean</td><td>true</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td>string/string[]</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>dropdownClassName</td><td>下拉菜单的 className 属性</td><td>string</td><td>-</td></tr><tr><td>dropdownMatchSelectWidth</td><td>下拉菜单和选择器同宽</td><td>boolean</td><td>true</td></tr><tr><td>dropdownStyle</td><td>下拉菜单的样式</td><td>object</td><td>-</td></tr><tr><td>getPopupContainer</td><td>菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td></tr><tr><td>loadData</td><td>异步加载数据</td><td>Function(node)</td><td>-</td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag</td><td>number</td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>隐藏 tag 时显示的内容</td><td>string</td><td></td></tr><tr><td>multiple</td><td>支持多选（当设置 treeCheckable 时自动变为true）</td><td>boolean</td><td>false</td></tr><tr><td>placeholder</td><td>选择框默认文字</td><td>string</td><td>-</td></tr><tr><td>searchValue</td><td>搜索框的值，可以通过 <code>onSearch</code> 获取用户输入</td><td>string</td><td>-</td></tr><tr><td>treeIcon</td><td>是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式</td><td>boolean</td><td>false</td></tr><tr><td>showCheckedStrategy</td><td>定义选中项回填的方式。<code>TreeSelect.SHOW_ALL</code>: 显示所有选中节点(包括父节点). <code>TreeSelect.SHOW_PARENT</code>: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.</td><td>enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }</td><td>TreeSelect.SHOW_CHILD</td></tr><tr><td>showSearch</td><td>是否支持搜索框</td><td>boolean</td><td>单选：false | 多选：true</td></tr><tr><td>size</td><td>选择框大小，可选 <code>large</code> <code>small</code></td><td>string</td><td>&#39;default&#39;</td></tr><tr><td>suffixIcon</td><td>自定义的选择框后缀图标</td><td>slot</td><td>-</td></tr><tr><td>treeCheckable</td><td>显示 checkbox</td><td>boolean</td><td>false</td></tr><tr><td>treeCheckStrictly</td><td>checkable 状态下节点选择完全受控（父子节点选中状态不再关联）</td><td>boolean</td><td>false</td></tr><tr><td>treeData</td><td>treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）</td><td>array&lt;{value, label, children, [disabled, disableCheckbox, selectable]}&gt;</td><td>[]</td></tr><tr><td>treeDefaultExpandAll</td><td>默认展开所有树节点</td><td>boolean</td><td>false</td></tr><tr><td>treeDefaultExpandedKeys</td><td>默认展开的树节点</td><td>string[]</td><td>-</td></tr><tr><td>treeExpandedKeys</td><td>设置展开的树节点</td><td>string[]</td><td>-</td></tr><tr><td>treeNodeLabelProp</td><td>作为显示的 prop 设置</td><td>string</td><td>&#39;title&#39;</td></tr><tr><td>value</td><td>指定当前选中的条目</td><td>string/string[]</td><td>-</td></tr><tr><td>on-change</td><td>选中树节点时调用此函数</td><td>function(value, node, info)</td><td>-</td></tr><tr><td>on-search</td><td>文本框值变化时回调</td><td>function(value)</td><td>-</td></tr><tr><td>on-select</td><td>被选中时调用</td><td>function(value, node, info)</td><td>-</td></tr><tr><td>on-treeExpand</td><td>展示节点时调用</td><td>function(expandedKeys)</td><td>-</td></tr></tbody></table><h3 id="tree-方法"><span>Tree 方法</span><a href="#tree-方法" class="anchor">#</a></h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>blur()</td><td>移除焦点</td></tr><tr><td>foucs()</td><td>获取焦点</td></tr></tbody></table><h3 id="treenode-props"><span>TreeNode props</span><a href="#treenode-props" class="anchor">#</a></h3><blockquote><p>建议使用 treeData 来代替 TreeNode，免去手工构造麻烦</p></blockquote><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>selectable</td><td>是否可选</td><td>boolean</td><td>true</td></tr><tr><td>disableCheckbox</td><td>禁掉 checkbox</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>isLeaf</td><td>设置为叶子节点</td><td>boolean</td><td>false</td></tr><tr><td>key</td><td>此项必须设置（其值在整个树范围内唯一）</td><td>string</td><td>-</td></tr><tr><td>title</td><td>树节点显示的内容，默认根据此属性值进行筛选</td><td>string|slot</td><td>-</td></tr><tr><td>value</td><td>其值在整个树范围内唯一</td><td>string</td><td>-</td></tr></tbody></table></section>'},o=n(8),s={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree-select\n        style="width: 100%;"\n        dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}"\n        treeDefaultExpandAll="{{true}}"\n        allowClear="{{true}}"\n        placeholder="Please select"\n        on-change="onChange"\n    >\n        &lt;s-tree-select-node value="parent 1" title="parent 1" key="0-1">\n            &lt;s-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">\n                &lt;s-tree-select-node value="leaf1" title="my leaf" key="random" />\n                &lt;s-tree-select-node value="leaf2" title="your leaf" key="random1" />\n            &lt;/s-tree-select-node>\n            &lt;s-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">\n                &lt;s-tree-select-node value="sss" key="random3">\n                    &lt;b style="color: #08c;" slot="title">sss&lt;/b>\n                &lt;/s-tree-select-node>\n            &lt;/s-tree-select-node>\n        &lt;/s-tree-select-node>\n    &lt;/s-tree-select>\n  &lt;/div>\n&lt;/template>\n&lt;script>\n\nimport san from \'san\'\nimport {TreeSelect} from \'santd\';\n\nexport default {\n    components: {\n        \'s-tree-select\': TreeSelect,\n        \'s-tree-select-node\': TreeSelect.TreeNode\n    },\n    onChange(value) {\n        console.log(\'选择的单一值是: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="tree-select基本"><span>tree-select基本</span><a href="#tree-select基本" class="anchor">#</a></h4><p>树选择组件,最简单的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree-select":o.ib,"s-tree-select-node":o.ib.TreeNode},onChange(e){console.log("选择的单一值是: ",e)},template:'<div><s-tree-select style="width: 100%;" dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}" treeDefaultExpandAll="{{true}}" allowClear="{{true}}" placeholder="Please select" on-change="onChange"><s-tree-select-node value="parent 1" title="parent 1" key="0-1"><s-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1"><s-tree-select-node value="leaf1" title="my leaf" key="random"></s-tree-select-node><s-tree-select-node value="leaf2" title="your leaf" key="random1"></s-tree-select-node></s-tree-select-node><s-tree-select-node value="parent 1-1" title="parent 1-1" key="random2"><s-tree-select-node value="sss" key="random3"><b style="color: #08c;" slot="title">sss</b></s-tree-select-node></s-tree-select-node></s-tree-select-node></s-tree-select></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311453184"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={template:'<section class="markdown"><h1 id="treeselect-树选择"><span>TreeSelect 树选择</span><a href="#treeselect-树选择" class="anchor">#</a></h1><p>树型选择控件。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree-select\n        style="width: 100%;"\n        dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}"\n        treeDefaultExpandAll="{{true}}"\n        allowClear="{{true}}"\n        multiple="{{true}}"\n        placeholder="Please select"\n        on-change="onChange"\n        on-search="onSearch"\n    >\n        &lt;s-tree-select-node value="parent 1" title="parent 1" key="0-1">\n            &lt;s-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">\n                &lt;s-tree-select-node value="leaf1" title="my leaf" key="random" />\n                &lt;s-tree-select-node value="leaf2" title="your leaf" key="random1" />\n            &lt;/s-tree-select-node>\n            &lt;s-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">\n                &lt;s-tree-select-node value="sss" key="random3">\n                    &lt;b style="color: #08c;" slot="title">sss&lt;/b>\n                &lt;/s-tree-select-node>\n            &lt;/s-tree-select-node>\n        &lt;/s-tree-select-node>\n    &lt;/s-tree-select>\n  &lt;/div>\n&lt;/template>\n&lt;script>\n\nimport {TreeSelect} from \'santd\';\n\nexport default {\n    components: {\n        \'s-tree-select\': TreeSelect,\n        \'s-tree-select-node\': TreeSelect.TreeNode\n    },\n    onChange(value) {\n        console.log(\'选择的单一值是: \', value);\n    },\n    onSearch(search) {\n        console.log(\'search is.....\', search);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="多选"><span>多选</span><a href="#多选" class="anchor">#</a></h4><p>多选的树选择。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree-select":o.ib,"s-tree-select-node":o.ib.TreeNode},onChange(e){console.log("选择的单一值是: ",e)},onSearch(e){console.log("search is.....",e)},template:'<div><s-tree-select style="width: 100%;" dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}" treeDefaultExpandAll="{{true}}" allowClear="{{true}}" multiple="{{true}}" placeholder="Please select" on-change="onChange" on-search="onSearch"><s-tree-select-node value="parent 1" title="parent 1" key="0-1"><s-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1"><s-tree-select-node value="leaf1" title="my leaf" key="random"></s-tree-select-node><s-tree-select-node value="leaf2" title="your leaf" key="random1"></s-tree-select-node></s-tree-select-node><s-tree-select-node value="parent 1-1" title="parent 1-1" key="random2"><s-tree-select-node value="sss" key="random3"><b style="color: #08c;" slot="title">sss</b></s-tree-select-node></s-tree-select-node></s-tree-select-node></s-tree-select></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311453172"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const i=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0"},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}];var p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n      &lt;s-tree-select\n          style=\"width: 100%;\"\n          treeCheckable=\"{{true}}\"\n          dropdownStyle=\"{{ {'max-height': '200px', overflow: 'auto'} }}\"\n          treeData=\"{{treeData}}\"\n          treeDefaultExpandAll=\"{{true}}\"\n          showCheckedStrategy=\"{{SHOW_PARENT}}\"\n          placeholder=\"Please select\"\n          allowClear=\"{{true}}\"\n          treeCheckStrictly=\"{{false}}\"\n          value=\"{{value}}\"\n          on-change=\"onChange\"\n      >\n      &lt;/s-tree-select>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TreeSelect} from 'santd';\n\nconst treeData = [{\n  title: 'Node1',\n  value: '0-0',\n  key: '0-0',\n  children: [{\n    title: 'Child Node1',\n    value: '0-0-0',\n    key: '0-0-0',\n  }],\n}, {\n  title: 'Node2',\n  value: '0-1',\n  key: '0-1',\n  children: [{\n    title: 'Child Node3',\n    value: '0-1-0',\n    key: '0-1-0',\n  }, {\n    title: 'Child Node4',\n    value: '0-1-1',\n    key: '0-1-1',\n  }, {\n    title: 'Child Node5',\n    value: '0-1-2',\n    key: '0-1-2',\n  }],\n}];\n\nexport default {\n    components: {\n        's-tree-select': TreeSelect\n    },\n    initData() {\n        return {\n            value: ['0-1'],\n            treeData: treeData,\n            SHOW_PARENT: TreeSelect.SHOW_PARENT\n        }\n    },\n    onChange(values) {\n        console.log('value is: ', values);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="可勾选"><span>可勾选</span><a href="#可勾选" class="anchor">#</a></h4><p>使用勾选框实现多选功能。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree-select":o.ib},initData:()=>({value:["0-1"],treeData:i,SHOW_PARENT:o.ib.SHOW_PARENT}),onChange(e){console.log("value is: ",e)},template:'<div><s-tree-select style="width: 100%;" treeCheckable="{{true}}" dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}" treeData="{{treeData}}" treeDefaultExpandAll="{{true}}" showCheckedStrategy="{{SHOW_PARENT}}" placeholder="Please select" allowClear="{{true}}" treeCheckStrictly="{{false}}" value="{{value}}" on-change="onChange"></s-tree-select></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311453176"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const h=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-1",key:"0-0-1"},{title:"Child Node2",value:"0-0-2",key:"0-0-2"}]},{title:"Node2",value:"0-1",key:"0-1"}];var u={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-tree-select\n        style=\"width: 100%;\"\n        dropdownStyle=\"{{ {'max-height': '200px', overflow: 'auto'} }}\"\n        treeData=\"{{treeData}}\"\n        treeDefaultExpandAll=\"{{true}}\"\n        placeholder=\"Please select\"\n        on-change=\"onChange\"\n    >\n    &lt;/s-tree-select>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TreeSelect} from 'santd';\n\nconst treeData = [{\n  title: 'Node1',\n  value: '0-0',\n  key: '0-0',\n  children: [{\n    title: 'Child Node1',\n    value: '0-0-1',\n    key: '0-0-1',\n  }, {\n    title: 'Child Node2',\n    value: '0-0-2',\n    key: '0-0-2',\n  }],\n}, {\n  title: 'Node2',\n  value: '0-1',\n  key: '0-1',\n}];\n\n\nexport default {\n    components: {\n        's-tree-select': TreeSelect\n    },\n    initData() {\n        return {\n            treeData: treeData\n        }\n    },\n    onChange(value) {\n        console.log('选择的单一值是: ', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="从数据直接生成"><span>从数据直接生成</span><a href="#从数据直接生成" class="anchor">#</a></h4><p>使用 <code>treeData</code> 把 JSON 数据直接生成树结构。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree-select":o.ib},initData:()=>({treeData:h}),onChange(e){console.log("选择的单一值是: ",e)},template:'<div><s-tree-select style="width: 100%;" dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}" treeData="{{treeData}}" treeDefaultExpandAll="{{true}}" placeholder="Please select" on-change="onChange"></s-tree-select></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311453167"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const m=[{value:"1",title:"Expand to load",key:"0"},{value:"2",title:"Expand to load",key:"1"},{value:"3",title:"Tree Node",isLeaf:!0,key:"2"}];var x={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-tree-select\n        style=\"width: 100%;\"\n        dropdownStyle=\"{{ {'max-height': '200px', overflow: 'auto'} }}\"\n        treeData=\"{{treeData}}\"\n        treeDefaultExpandAll=\"{{true}}\"\n        placeholder=\"Please select\"\n        loadData=\"{{loadData}}\"\n        on-change=\"onChange\"\n    >\n    &lt;/s-tree-select>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TreeSelect} from 'santd';\n\nconst treeData = [\n    {value: '1', title: 'Expand to load', key: '0'},\n    {value: '2', title: 'Expand to load', key: '1'},\n    {value: '3', title: 'Tree Node', isLeaf: true, key: '2'}\n];\n\nconst genTreeNode = (parentId, isLeaf = false) => {\n    const random = Math.random()\n        .toString(36)\n        .substring(2, 6);\n    return {\n        id: random,\n        pId: parentId,\n        value: random,\n        title: isLeaf ? 'Tree Node' : 'Expand to load',\n        isLeaf\n    };\n};\n\n\nexport default {\n    components: {\n        's-tree-select': TreeSelect\n    },\n    initData() {\n        return {\n            treeData: treeData,\n            loadData(treenode) {\n\n        new Promise(resolve => {\n            if (treenode.data.get('treeData')) {\n                resolve();\n                return;\n            }\n            setTimeout(() => {\n                treenode.data.set('treeData', [{title: 'Child Node', key: Math.floor(Math.random() * 10) + 'node'}]);\n                resolve();\n            }, 1000)\n        });\n            }\n        }\n    },\n    onChange(value) {\n        console.log('选择的单一值是: ', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="异步加载"><span>异步加载</span><a href="#异步加载" class="anchor">#</a></h4><p>异步加载树节点。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree-select":o.ib},initData:()=>({treeData:m,loadData(e){new Promise(t=>{e.data.get("treeData")?t():setTimeout(()=>{e.data.set("treeData",[{title:"Child Node",key:Math.floor(10*Math.random())+"node"}]),t()},1e3)})}}),onChange(e){console.log("选择的单一值是: ",e)},template:'<div><s-tree-select style="width: 100%;" dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}" treeData="{{treeData}}" treeDefaultExpandAll="{{true}}" placeholder="Please select" loadData="{{loadData}}" on-change="onChange"></s-tree-select></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311453180"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree-select\n        style="width: 100%;"\n        dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}"\n        treeDefaultExpandAll="{{true}}"\n        allowClear="{{true}}"\n        treeIcon="{{true}}"\n        placeholder="Please select"\n        on-change="onChange"\n    >\n        &lt;s-tree-select-node value="parent 1" title="parent 1" key="0-1">\n            &lt;s-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">\n             &lt;s-icon slot="icon" type="smile-o" />\n                &lt;s-tree-select-node value="leaf1" title="my leaf" key="random" > &lt;s-icon slot="icon" type="smile-o" />&lt;/s-tree-select-node>\n                &lt;s-tree-select-node value="leaf2" title="your leaf" key="random1" />\n            &lt;/s-tree-select-node>\n            &lt;s-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">\n                &lt;s-tree-select-node value="sss" key="random3">\n                    &lt;b style="color: #08c;" slot="title">sss&lt;/b>\n                &lt;/s-tree-select-node>\n            &lt;/s-tree-select-node>\n        &lt;/s-tree-select-node>\n    &lt;/s-tree-select>\n  &lt;/div>\n&lt;/template>\n&lt;script>\n\nimport san from \'san\'\nimport {TreeSelect, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-tree-select\': TreeSelect,\n        \'s-tree-select-node\': TreeSelect.TreeNode,\n        \'s-icon\': Icon\n    },\n    onChange(value) {\n        console.log(\'选择的单一值是: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自行定义图标相关样式"><span>自行定义图标相关样式</span><a href="#自行定义图标相关样式" class="anchor">#</a></h4><p>展示 TreeNode title 前的图标</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree-select":o.ib,"s-tree-select-node":o.ib.TreeNode,"s-icon":o.z},onChange(e){console.log("选择的单一值是: ",e)},template:'<div><s-tree-select style="width: 100%;" dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}" treeDefaultExpandAll="{{true}}" allowClear="{{true}}" treeIcon="{{true}}" placeholder="Please select" on-change="onChange"><s-tree-select-node value="parent 1" title="parent 1" key="0-1"><s-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1"><s-icon slot="icon" type="smile-o"></s-icon><s-tree-select-node value="leaf1" title="my leaf" key="random"> <s-icon slot="icon" type="smile-o"></s-icon></s-tree-select-node><s-tree-select-node value="leaf2" title="your leaf" key="random1"></s-tree-select-node></s-tree-select-node><s-tree-select-node value="parent 1-1" title="parent 1-1" key="random2"><s-tree-select-node value="sss" key="random3"><b style="color: #08c;" slot="title">sss</b></s-tree-select-node></s-tree-select-node></s-tree-select-node></s-tree-select></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311453155"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const v=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-1",key:"0-0-1",children:[{title:"Child3",value:"0-0-2",key:"0-0-2"},{title:"Child4",value:"0-0-2",key:"0-0-2"}]},{title:"Child Node2",value:"0-0-2",key:"0-0-2"}]},{title:"Node2",value:"0-1",key:"0-1"}];var y={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-tree-select\n        style=\"width: 100%;\"\n        dropdownStyle=\"{{ {'max-height': '200px', overflow: 'auto'} }}\"\n        treeData=\"{{treeData}}\"\n        treeDefaultExpandAll=\"{{true}}\"\n        placeholder=\"Please select\"\n        on-change=\"onChange\"\n        replaceFields=\"{{replaceFields}}\"\n    >\n    &lt;/s-tree-select>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TreeSelect} from 'santd';\n\nconst treeData = [{\n  title: 'Node1',\n  value: '0-0',\n  key: '0-0',\n  children: [{\n    title: 'Child Node1',\n    value: '0-0-1',\n    key: '0-0-1',\n    children: [\n        {\n        title: 'Child3',\n        value: '0-0-2',\n        key: '0-0-2',\n      },\n      {\n        title: 'Child4',\n        value: '0-0-2',\n        key: '0-0-2',\n      }\n    ]\n\n  }, {\n    title: 'Child Node2',\n    value: '0-0-2',\n    key: '0-0-2',\n  }],\n}, {\n  title: 'Node2',\n  value: '0-1',\n  key: '0-1',\n}];\n\n\nexport default {\n    components: {\n        's-tree-select': TreeSelect\n    },\n    initData() {\n        return {\n            treeData: treeData,\n            replaceFields: {\n              children:'children',\n              title:'title',\n              key:'key',\n              value: 'value',\n              label: 'label'\n            }\n        }\n    },\n    onChange(value) {\n        console.log('选择的单一值是: ', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="替换字段"><span>替换字段</span><a href="#替换字段" class="anchor">#</a></h4><p>替换 treeNode 中 title、value、key、children、label 字段为 treeData 中对应的字段。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree-select":o.ib},initData:()=>({treeData:v,replaceFields:{children:"children",title:"title",key:"key",value:"value",label:"label"}}),onChange(e){console.log("选择的单一值是: ",e)},template:'<div><s-tree-select style="width: 100%;" dropdownStyle="{{ {\'max-height\': \'200px\', overflow: \'auto\'} }}" treeData="{{treeData}}" treeDefaultExpandAll="{{true}}" placeholder="Please select" on-change="onChange" replaceFields="{{replaceFields}}"></s-tree-select></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1620311453158"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};t.default=l.a.defineComponent({components:{readme:d,desc:r,basic:s,multiple:c,checkable:p,treedata:u,loaddata:x,showicon:g,replacefields:y},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <treeData/>\n            <loaddata/>\n            <multiple/>\n            <checkable/>\n            <showicon/>\n            <replacefields/>\n            <readme/>\n        </div>\n    "})}}]);