<template>
    <!--导航按钮-->
    <header class="gb-header">
        <div class="header-left">
            <a href="javascript:void (0);" class="icon back" @click="goBack"></a>
        </div>
        <h1 class="has-icon">{{pageTitle}}</h1>
        <slot />
    </header>
</template>
<script>
    import {
        saveFrom,
        getBack
    } from '../model/store'
    export default{
        props: {
            beforeBack: {
                type: Function,
                default: null
            },
            pageName: {
                type: String,
                default:'index'
            },
            pageTitle: {
                type: String,
                default:'index'
            }
        },
        mounted(){
            saveFrom(this.pageName,this.$router.history.current)
        },
        methods:{
            goBack(){
                if(this.beforeBack){
                    this.beforeBack(this.backToLastPage)
                }else{
                    this.backToLastPage()
                }

            },
            backToLastPage(){
                let qhfrom = getBack(this.pageName);
                this.$router.push({'name':qhfrom.name,query:qhfrom.para})
            }
        }
    }
</script>