<template>
    <!--导航按钮-->
    <div class="header-left">
        <a href="javascript:;" class="menu" @click="changeOpenTap"></a>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default{
        methods: mapActions([
            'changeOpenTap'
        ]),
    }
</script>