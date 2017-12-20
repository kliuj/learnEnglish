<template>
    <!--导航按钮-->
    <div class="header-left">
        <a href="javascript:void(0);" class="icon menu toggle"  @click="changeOpenTap"></a>
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