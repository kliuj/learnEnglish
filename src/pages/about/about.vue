/**
 * Created by kerwinliu on 2017/12/19.
 */
<template>
    <div class="page pg-about">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">关于 LEDGE</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="about-ledge">
                <div><img src="../../../Assets/Images/pic_hd.jpg" width="100%"></div>
            </section>
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import NavTab from '../../components/NavTab'
    export default{
        components:{
            NavTab
        }
    }
</script>