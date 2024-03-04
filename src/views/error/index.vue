<template>
    <div class="wrapper">
        <div class="page404">
            <h1>404 - <strong>{{ count }}</strong>秒后返回首页</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cxcy',
        data() {
            return {
                count: 3
            };
        },
        mounted() {
            this.goIndex();
        },
        methods: {
            goIndex() {
                let timer = null;

                timer = setInterval(() => {
                    this.count--;

                    if (this.count <= 0) {
                        clearInterval(timer);
                        location.href = location.origin + '/xsdt';
                    }
                }, 1000);
            }
        }
    };
</script>

<style lang="scss">
.header {
    display: none;
}
.page404 {
    height: 100%;
    text-align: center;
    h1 {
        line-height: 500px;
    }
    strong {
        padding-right: 5px;
        color: red;
    }
}
</style>

