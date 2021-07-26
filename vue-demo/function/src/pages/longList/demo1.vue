<template>
    <div id="app">
<!--        1. 设置容器元素，view-list-->
        <div class="view-list">
<!--            2. 循环一个列表,新数据进行追加,下面增加一个loading条-->
            <div class="item" v-for="(item,index) in itemData" :key="index">账号ID：{{index}}</div>
            <div class="item" id="loading">加载中</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        data(){
            return {
                itemData:[]
            }
        },
        methods:{
            // 获取随机数
            getRange(){
                let id = new Date().getTime();
                return Math.random()*id;
            },
            // 触发监听回调
            loadList(status){
                status = status[0];
                let isShow = status.isIntersecting;
                if(isShow){
                    console.log("加载中 ---- ");
                    for(let i = 4;i>=0;i--){
                        this.itemData.push({id:this.getRange()})
                    }
                }else {
                    console.log('不加载');
                    if (this.itemData.length > 30) {
                      // this.itemData.splice(0, 4)
                      // this.$delete()
                    }
                }
            }
        },
        created() {
            // 3. 初始化循环渲染的列表
            for(let i = 4;i>=0;i--){
                this.itemData.push({id:this.getRange()})
            }
        },
        mounted() {
            //    4. 挂载时，获取列表的容器元素，然后设置监听
            //  使用官方提供的新接口：https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
            /**
             * callback : 回调函数，可见时 和 不可见时，都触发
             * options ：配置参数，
             *      root ：根元素，默认是视图
             *      threshold ： 交叉比例。也就是在跟元素出现的比例
             */
            // 5. 初始化观察对象
            let io = new IntersectionObserver(this.loadList, {});
            // 6. 获取被监听元素
            let viewList = document.getElementById('loading');
            // 7. 在观察对象上，监听 6 中获取的对象
            io.observe(viewList);
        },
    }
</script>

<style>
    .view-list{
        width: 100%;
        height: 500px;
        margin:20px 0;
        overflow-x: scroll;
        background-color: rgba(0, 0, 255, 0.25);
    }
    .item{
        height: 50px;
        border:1px gray solid;
        margin-bottom: 10px;
    }
</style>