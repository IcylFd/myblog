<template>
    <div class="content">
        <div class="content">

            <transition-group
                    name="slider"
                    tag="ul"
            >
                <li v-for="(item, index) in imgs" :key="index+'pl'" class="pic-list" v-if="item.isShow">
                    <img :src="showImg" alt="" >
                    <div class="intro">
                        <span>{{item.title}}</span>
                        <p>{{item.intro}}</p>
                    </div>
                </li>

            </transition-group>
            <button class="dis-btn" @mouseenter="stopAnimate" @mouseleave="startAnimate">Discover More</button>
        </div>
        <div class="panel"></div>
    </div>
</template>
<style scoped>
    .pic-list{
        position: absolute;
        top:-60px;
        z-index:-2;
        width:100%;
    }
    .panel{
        background: rgba(0,0,0,.2);
        position: fixed;
        top:0px;
        left:25%;
        height:100%;
        width:75%;
        z-index:-1;
    }
    .pic-list img{
        width:100%;
        height:100%;
    }
    .pic-list .intro{
        position: absolute;
        top:400px;
        right:100px;
        transform: translateZ(100px);
        color:#fff;
        text-align: right;
    }
    .intro span{
        font-weight: bold;
        font-size: 50px;
        width:300px;
    }
    .dis-btn{
        width:200px;
        height:80px;
        background: #fff;
        color:#4b3e99;
        position: absolute;
        top:60%;
        right:100px;
        z-index:50;
        font-size:20px;

    }
    .dis-btn:hover{
        background: #4b3e99;
        color:#fff;
    }

    .slider-enter-active, .slider-leave-active {
        transition: all 2s;
    }
    .slider-enter, .slider-leave-active {
        opacity: 0;
    }

</style>
<script>
    import axios from 'axios';
    export default {
        created(){
//            this.bg_data();
        },
        data(){
            return{
                imgs:[

//                    {
//                        "imgName":"b.jpg",
//                        "imgURL":"../img/b.jpg",
//                        "isShow":false
//                    },
//                    {
//                        "imgName":"c.jpg",
//                        "imgURL":"../img/c.jpg",
//                        "isShow":false
//                    },
//                    {
//                        "imgName":"d.jpg",
//                        "imgURL":"../img/d.jpg",
//                        "isShow":false
//                    },
//                    {
//                        "imgName":"e.jpg",
//                        "imgURL":"../img/e.jpg",
//                        "isShow":false
//                    },
                    {
                        "imgName":"p7.jpg",
                        "imgURL":"../img/p7.jpg",
                        "isShow":true,
                        "title":'dsfsd fsd',
                        "intro":'aaaaa fsjnk nkjergklf gkfdn gkjnfgd. kjfng rgnkngd gffw'
                    },
                    {
                        "imgName":"p6.jpg",
                        "imgURL":"../img/p6.jpg",
                        "isShow":false,
                        "title":'gterte',
                        "intro":'aaaaa'
                    },
                    {
                        "imgName":"p5.jpg",
                        "imgURL":"../img/p5.jpg",
                        "isShow":false,
                        "title":'dsfsfsdfd fsd',
                        "intro":'aaaaa'
                    },
                    {
                        "imgName":"p2.jpg",
                        "imgURL":"../img/p2.jpg",
                        "isShow":false,
                        "title":'dsfsd fsfsd ferw',
                        "intro":'aaaaa'
                    },

                    {
                        "imgName":"a.jpg",
                        "imgURL":"../img/a.jpg",
                        "isShow":false,
                        "title":'dsfvrrd fsd fe rewfv',
                        "intro":'aaaaa'
                    },

                ],
                showImg:'../img/p7.jpg',
                showIndex:0,
                isReady:false,
                timer:null,
            }
        },
        methods:{
            bg_data(){
//                var _this = this;
                axios.get('./data/backimgdata.json')
                    .then((res) => {
//                        console.log(res);
                        this.imgs = res.data.picData;
//                        console.log(this.imgs[0].imgURL);
                        this.isReady = true;
                })
                    .catch((e)=>{
//                        console.log(e);
                    });
            },
            startAnimate(){
                var _this = this;
                this.timer = setInterval(function () {
                        if (_this.showIndex < _this.imgs.length - 1) {
                            _this.showIndex++;

                        } else {
                            _this.showIndex = 0;
                        }
                        for(var i = 0; i < _this.imgs.length; i++){
                            if(_this.showIndex == i){
                                _this.imgs[i].isShow = true;
                            }else{
                                _this.imgs[i].isShow = false;
                            }
                        }
                    _this.showImg = _this.imgs[_this.showIndex].imgURL;
                }
                ,2000)
            },
            stopAnimate(){
                clearInterval(this.timer);
            }

        },
        mounted(){
            this.startAnimate();
        }
    }
</script>
