<template>
    <div class="page pg-account pg-account-signup">
        <HeaderView pageName="signup" pageTitle="内部登录入口" iconName="close" />
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="create">
                <div class="signup-form">
                    <div class="row">
                        <input type="tel" id="" name="" value="" maxlength="11" placeholder="">
                    </div>
                </div>
            </section>
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import HeaderView from '../../components/HeaderView'
    export default{
        components:{
            HeaderView
        },
        methods:{
            gotoLogin(){
                this.$router.replace({name:'login'})
            }
        }
    }
</script>
