<template>
    <header>
        <p class="left">
            <span>Blog</span>
            <span>Entries</span>
        </p>
        <p class="right">
            Curabitur hendrerit mauris mollis ipsum vulputate rutrum.
            Phasellus luctus odio eget dui imperdiet.
        </p>
    </header>
</template>
<style>
    header{
        display: flex;
        position: absolute;
        left:60px;
        top:60px;
        text-align: left;
    }
    .left{
        font-size: 30px;
        font-weight:bold;
        flex:20%;
    }
    .left span{
        display: block;
    }
    .left span:last-child{
        color:#4b3e99;
        margin-top:-20px;
    }
    .right{
        flex:80%;
        padding-top:22px;
        box-sizing: border-box;
    }
</style>
