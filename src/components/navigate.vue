<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<template>
    <div class="navigate">
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'component'">
            <Menu-item v-for="item in navigate.beforeComponents" :key="item.path" :name="item.path">
                <template v-if="item.title !== '更新日志'">
                    {{ item.title }}
                </template>
                <template v-if="item.title === '更新日志'">
                    <Badge :dot="showDot">
                        {{ item.title }}
                    </Badge>
                </template>
            </Menu-item>
            <div class="navigate-group">组件</div>
            <Menu-group v-for="item in navigate.components" :key="item.type" :title="item.title">
                <Menu-item v-for="component in item.list" :key="component.path" :name="component.path">
                    <template>
                        {{ component.title.split(' ')[0] }}
                        <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                    </template>
                </Menu-item>
            </Menu-group>
        </Menu>
    </div>
</template>
<script>
    import navigate from '../config/navigate';
    import version from '../config/config';
    import bus from './bus';
    import adSend from './ad-send.vue';
    export default {
        components: { adSend },
        props: {
            type: {
                type: [String, Number]
            }
        },
        data () {
            return {
                navigate: navigate,
                showDot: false,
                activeKey: this.$route.path,
                showAd: false
            }
        },
        methods: {
            handleDonate () {
                bus.$emit('on-donate-show');
            },
            handleSelect (path) {
                this.$nextTick(() => {
                    this.$router.push(path);
                });
            },
            handleAd () {
            },
            handleBuy (type) {
                if (type === 'taobao') {
                    window.open('https://detail.tmall.com/item.htm?id=559480603657');
                } else if (type === 'jd') {
                    window.open('https://item.jd.com/12215519.html');
                } else if (type === 'video') {
                    window.open('https://segmentfault.com/ls/1650000011074057');
                } else if (type === 'dangdang') {
                    window.open('http://product.dangdang.com/25180286.html');
                }
            }
        },
        created () {
            this.activeKey = this.$route.path;
        },
        mounted () {
            // 判断是否已阅读更新日志
            const dotVersion = window.localStorage.getItem('version');
            if (dotVersion) {
                this.showDot = dotVersion < version.version;
            } else {
                this.showDot = true;
            }
            console.log(this.navigate)
        }
    }
</script>