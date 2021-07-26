<template>
    <!-- 显示的数据源 -->
    <div>{{ index }} - {{ item.value }}</div>
</template>

<script>
    export default {
        name: "item-component",
        props: {
            index: {
                // index of current item
                type: Number,
            },
            item: {
                // here is: {id: '1', name: 'abc'}
                type: Object,
                default() {
                    return {};
                },
            },
        },
        mounted() {
            // console.log('item', this.item)
        },
    };
</script>