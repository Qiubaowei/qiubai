<template>
    <div class="joke-content">
        <div class="joke-title">内涵图片</div>
        <div class='content-img' v-for='item in data'>
            <div class="img-title">{{item.content}}</div>
            <img v-bind:src='item.url'/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'joke-img',
    data () {
        return {
            data: 'asde'
        }
    },
    mounted() {
        let that = this;
        that.$ajax.get('api', {
            params:{
                key: '12175aade3931810fcd18dd2c0cf9474',
                type: 'pic'
            }
        })
        .then(function (response) {
            console.log(response.data.result);
            that.data = response.data.result
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
</script>

<style scoped>
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
    .content-img {
        padding:10px 10px;
        border-bottom: 1px solid #cdcdcd;
        text-align: center;
    }
    .img-title{
      text-align: left;
      line-height:30px;
    }
    img {
        width:250px;
        height:auto;
    }
</style>