<template>
    <div class="joke-content">
        <div class="joke-title">内涵段子</div>
        <div> {{data.content}} </div>
    </div>
</template>

<script>
export default {
    name: 'joke',
    data() {
        return {
            data: '从前有一个小孩...'
        }
    },
    mounted() {
        let that = this;
        that.$ajax.get('api', {
            params:{
                key: '12175aade3931810fcd18dd2c0cf9474'
            }
        })
        .then(function (response) {
            console.log(response.data.result[0]);
            that.data = response.data.result[0]
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }
}
</script>

<style>

    .joke-content {
        margin: 0;
        position: relative;
        padding: 40px 0;
    }
    .joke-title {
        text-align: center;
        position: fixed;
        top: 0;
        width: 100%;
        font-size: 20px;
        color: deepskyblue;
        background: #000;
        line-height: 40px;
        font-family: cursive;
    }
</style>
