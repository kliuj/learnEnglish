<template>
    <div class="page pg-account pg-account-upgrade">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">升级帐户</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section>
                <div class="upgrade-banner"><img src="../../../Assets/Images/upgrade_banner.png" width="100%"></div>
                <div class="pay-vip-fee"><a href="javascript:void(0);">年费￥1500 成为VIP会员</a></div>
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