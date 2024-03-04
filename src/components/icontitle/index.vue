<template>
    <div class="title-con">
        <div class="has-icon-title" :class="{lg:isLarge}" v-if="!titleType">
            <div class="title-icon-con icon">
                <slot>
                    <i class="icon title-aside-icon" :class="'icon-'+iconName"></i>
                </slot>
            </div>
            <div class="title-line icon">
                <div class="title-line-main">
                    <span>{{ title }}</span>
                </div>
            </div>
        </div>
        <div class="no-icon-title" v-else>
            <div class="title-con">
                <div class="title-con-main">
                    <router-link :to="link" class="link-btn">
                        <span class="link-btn-text">
                            {{ title }}
                        </span>
                        <span class="arrow-right"></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "IconTitle",
        props: {
            title: String,
            // icon的名称
            iconName: String,
            isLarge: Boolean,
            titleType: {
                type: Number,
                default: 0
            },
            link: String
        },
        data() {
            return {}
        },
        created(){

        }

    }
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/mixins/_variables";

    $iconNameList: "yemiankuangjia",
    "yemianliu",
    "renwuzhongxin",
    "sandengfen",
    "wenben",
    "xinzengdaohangliebiao",
    "people",
    "yinzi",
    "yinyong",
    "gnwyzb",
    "lunwen",
    "zhishu",
    "wenjian",
    "fenbu",
    "jigoushuliang",
    "gdpbizhong",
    "zuanshi",
    "jingfeiyongtu",
    "jingfeibizhong",
    "youxiaozhuanli",
    "huiyuanshenqingliang",
    "geleihuiyuan",
    "huiyuandiyu",
    "huiyichuangban",
    "lingyuhuiyi",
    "kjtchenglishijian",
    "kejituanzb",
    "kjtzbxueke",
    "sjkejituan",
    "zuzhili",
    "ningjuli1",
    "ningjuli2",
    "yixiangli1",
    "yixiangli2",
    "jishiben",
    "time",
    "jinxianshibutong",
    "fenjianguocheng",
    "cangku_kucunxiangqing",
    "cangku_cangneishicao",
    "duanxin1",
    "daoru",
    "quanqiu";

    .icon {
        background: no-repeat center/cover;
    }

    .has-icon-title {
        width: 100%;
        height: 0.4rem;

        .title-icon-con,
        .title-line {
            display: inline-block;
            vertical-align: top;
            margin-right: -4px;
        }

        .title-icon-con {
            width: 0.4rem;
            height: 0.4rem;

            background-image: url("~@/assets/images/title-icons/title-icon-corner.png");

            .title-aside-icon {
                display: block;
                width: 0.6rem;
                height: 0.6rem;
                margin-left: -0.1rem;
                margin-top: -0.1rem;

                @each $name in $iconNameList {
                    &.icon-#{$name} {
                        background-image: url("~@/assets/images/title-icons/#{$name}.png");
                    }
                }
            }
        }

        .title-line {
            width: calc(100% - 0.4rem);
            margin-right: -0.4rem;
            height: 100%;
            position: relative;

            .title-line-main {
                margin-right: 0.4rem;
                color: $primary-text-color;
                font-size: 0.2rem;
                background: url("~@/assets/images/title-icons/title-line.png") no-repeat left bottom/contain;
                height: 100%;
                padding-bottom: 4px;
                box-sizing: content-box;

                span {
                    display: block;
                    line-height: 1;
                    /*max-width: 3.4rem;*/
                    max-width: 100%;
                    margin-left: 0.2rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

        }
    }

    .lg .has-icon-title .title-line{
        .title-line-main {
            background: url("~@/assets/images/title-icons/title-line-lg.png") no-repeat left bottom/contain;
        }
    }

    .no-icon-title {
        width: 100%;
        height: 0.55rem;
        line-height: 0.55rem;

        &:before {
            content: "";
            display: inline-block;
            vertical-align: top;
            width: 0.55rem;
            height: 100%;

            background-image: repeating-linear-gradient(45deg,
                    transparent,
                    #1F2972 2%,
                    #1F2972 3%,
                    transparent 3%,
                    transparent 8%);

        }

        .title-con {
            display: inline-block;
            width: 100%;
            margin-right: -0.55rem;
            height: 100%;
            vertical-align: top;

            &-main {
                margin-right: 0.55rem;
                height: 100%;

                position: relative;

                &:before,
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    height: 100%;
                    top: 0;

                }

                &:before {

                    width: 0.5rem;
                    left: -0.22rem;
                    // top:0.085rem;
                    background: url("~@/assets/images/link-title-icon.png") no-repeat center/cover;
                }

                &:after {
                    width: 0.189rem;
                    right: 0;

                    background: url("~@/assets/images/link-title-right.png") no-repeat center/cover;
                }

                .link-btn {
                    display: block;
                    margin-right: 0.17rem;
                    height: 100%;
                    border: 1px solid;
                    border-right: none;
                    overflow: hidden;
                    border-image: linear-gradient(90deg, rgba(52, 78, 213, 1), rgba(20, 26, 75, 1)) 1 1;
                    background-image: linear-gradient(90deg, #181f54, #141b4d);

                    &-text {
                        color: $primary-text-color;
                        padding-left: 0.32rem;
                        display: block;
                        /*max-width: 3.4rem;*/
                        max-width: 90%;
                        margin-left: 0.1rem;
                        max-width: 80%;
                        font-size: 0.22rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    &:before {
                        content: "";
                        position: absolute;
                        right: 0;
                        top: 50%;
                        width: 0.51rem;
                        height: 0.57rem;
                        z-index: 1;
                        margin-top: -0.275rem;
                        background: url("~@/assets/images/arrow-right.png") no-repeat center/100% 100%;
                    }
                }
            }
        }
    }
</style>