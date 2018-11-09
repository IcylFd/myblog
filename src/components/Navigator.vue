<template>
    <div class="container">
        <div class="start">
            <div><span>Icy</span>lFd</div>
        </div>
        <ul class="nav">
            <li v-for="(item,index) in navList" :key="index+'nl'" @click="toPage(item.id)">
                <b :class="{showPoint:item.isSelect}"></b>
                <span>{{item.pageName}}</span>
            </li>
        </ul>
        <ul class="context">
            <!--<li><i class="iconfont icon-csdnlogo" style="font-size:10px"></i></li>-->
            <li>
                <i class="iconfont icon-github"></i>
                <div class="github">
                    <span>IcylFd</span>
                    <!--<a ref="copy"  data-clipboard-action="copy" data-clipboard-target="#copy_text"-->
                       <!--@click="copy"-->
                       <!--:class="{copied:copied}"-->
                    <!--&gt;-->
                        <!--复制</a>-->
                </div>
            </li>
            <li>
                <i class="iconfont icon-weibo"></i>
                <div class="weibo">
                    <img src="@/assets/img/weibo.jpg" alt="">
                </div>
            </li>
            <li>
                <i class="iconfont icon-yingdaicon04"></i>
                <div class="wechat">
                    <p>wechat ID: lifangdi1103</p>
                    <img src="@/assets/img/wechat.jpg" alt="">
                </div>
            </li>
            <li>
                <i class="iconfont icon-QQ"></i>
                <div class="qq">
                    <p>qq: 772167928</p>
                    <img src="@/assets/img/qq.jpg" alt="">
                </div>
            </li>
        </ul>



    </div>
</template>

<style scoped>
    template{
        height:100%;
        z-index: 999;
    }
    .container{
        width:25%;
        height:100%;
        background: rgba(0,0,0,.85);
        position: fixed;
        top:0;
        left:0;
        color:#fff;
    }
    .start{
        height:140px;
        width:100%;
        background: #4b3e99;
        margin:0 auto;
        line-height: 120px;
        position: relative;
    }
    .start div{
        height: 80%;
        width:90%;
        background: none;
        border:1px solid rgba(255,255,255,.8);
        position: absolute;
        left:50%;
        top:50%;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        font-size: 24px;
    }
    .start div span{
        font-weight: bold;
    }
    .nav li b{
        display: inline-block;
        height:9px;
        width:9px;
        background: none;
        border:2px solid #fff;
        border-radius: 50%;
        line-height: 5px;
        margin-right: 10px;
    }
    .nav li:hover b{
        background: #fff;
        transition: all 0.7s ease;
    }
    .nav li:hover{
        font-weight: bold;
    }
    .nav li .showPoint{
        display: inline-block;
        height:9px;
        width:9px;
        background: #fff;
        border-radius: 50%;
        line-height: 5px;
        margin-right: 10px;
    }
    .nav li{
        margin: 10px;
        transition: all 0.7s ease;
    }
    .nav{
        font-size: 16px;
        text-align: left;
        position: absolute;
        left:20%;
        top:200px;
    }
    .context{
        position: absolute;
        bottom:10px;
        display: flex;
        left:50%;
        transform:translateX(-50%);
    }
    .context{
        flex:1;
    }
    .context li{
        width:35px;
        transition:all 0.6s ease;
    }
    .context li:hover{
        color:#4b3e99;
    }

    .weibo,.github,.wechat,.qq{
        position: absolute;
        background: #fff;
        border-radius: 6px;
        display: none;
        color:#333;
    }
    .github{
        width:100px;
        height:40px;
        line-height:40px;
        background: #fff;
        bottom:40px;
        left:-20px;
        display: none;
        transition:all 0.6s ease;
    }
    .github a{
        margin-left: 10px;
        color:#4b3e99;
    }

    .weibo{
        width:220px;
        height:320px;
        bottom:60px;
        left:-40px;
    }
    .weibo img{
        width:200px;
        height:300px;
    }

    .wechat{
        width:220px;
        height:240px;
        bottom:50px;
        left:-30px;
        line-height: 30px;
    }

    .wechat img{
        width:200px;
        height:200px;
    }

    .qq{
        width:230px;
        height:250px;
        bottom:50px;
        left:0;
    }
    .qq img{
        width:160px;
        height:220px;
    }
    .context li:first-child:hover .github, .context li:nth-child(2):hover .weibo, .context li:nth-child(3):hover .wechat, .context li:nth-child(4):hover .qq{
        display: block;
    }

    .github:hover{
        display: block;
    }

    /*.github .copied{*/
        /*color: #995381;*/
    /*}*/
</style>

<script>
    import VueClipboard from 'vue-clipboard2';
    export default {
        data(){
            return {
                navList:[
                    {
                        id:'0',
                        pageName:'Home',
                        path:'/',
                        isSelect:true,
                    },
                    {
                        id:'1',
                        pageName:'Blog',
                        path:'/blog',
                        isSelect:false,

                    },
                    {
                        id:'2',
                        pageName:'Resume',
                        path:'/resume',
                        isSelect:false,

                    },
                ],
//                gitID:'IcylFd',
//                copied:false
            }
        },
        methods:{
            toPage(id){
                for(let i = 0; i < this.navList.length; i++){
                    if(this.navList[i].isSelect){
                        this.navList[i].isSelect = false;
                    }
                }
                this.navList[id].isSelect = true;

                this.$router.push(this.navList[id].path);
            },
//            doCopy(val){
//                this.copied = true;
//                var clipboard = new VueClipboard('.copy');
////                clipboard.$copyText(val).then(function (e) {
////                    console.log(e);
////                }, function (e) {
////                    alert('Can not copy')
////                    console.log(e)
////                })
//                clipboard.on('success', e => {
//                    console.log('复制成功')
//                    // 释放内存
//                    clipboard.destroy()
//                })
//                clipboard.on('error', e => {
//                    // 不支持复制
//                    console.log('该浏览器不支持自动复制')
//                    // 释放内存
//                    clipboard.destroy()
//                })
//            }
        }
    }
</script>
