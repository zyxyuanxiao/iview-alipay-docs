<template>
    <i-article>
        <article>
            <h1>Switch 开关</h1>
            <Anchor title="概述" h2></Anchor>
            <p>在两种状态间切换时用到的开关选择器。</p>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <br><br>
            <i-code bg lang="js">{{ code.js }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Switch properties" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>i-class</td>
                            <td>自定义 class 类名</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>指定当前是否选中</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>开关的尺寸，可选值为 large、small、default 或者不写。建议开关如果使用了2个汉字的文字，使用 large</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用开关</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>隐藏的 input 的 name 值</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Switch events" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>onChange</td>
                        <td>开关变化时触发，返回当前的状态</td>
                        <td>{ value }</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="Switch slot" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>open</td>
                        <td>自定义显示打开时的内容</td>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>自定义显示关闭时的内容</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/switch';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        }
    }
</script>