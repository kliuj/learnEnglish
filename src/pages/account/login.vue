<template>
    <div>
    </div>
</template>
<script>
    import HeaderView from '../../components/HeaderView'
    import {
        setStore,
        getStore,
        delStore
    }from '../../model/store'
    import {
        jumpUrl,
        routerUrl
    }from '../../model/fun'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        data(){
            return{
                backurl:''
            }
        },
        components:{
            HeaderView
        },
        beforeRouteEnter(to, from, next){
            next(vm=>{
                // vm.backurl = to.query.returnUrl
            })
        },
        created(){
            this.getUserInfo()
        },
        methods:{
            goBack(data){
                let loginBack = getStore('loginBack');
                //强制更新用户信息
                this.$store.dispatch('getNewUserInfo')
                if(this.backurl && this.backurl != 'undefined'){
                    location.replace(this.backurl)
                }else{
                    if(loginBack){
                        delStore('loginBack')
                        location.replace(loginBack)
                    }else{
                        routerUrl('index',this.$router)
                    }
                }
            },
            getUserInfo(){
                Models.send({
                    url:'getWechatUser',
                    type:'get',
                    params:{},
                    success:({item = {}})=>{
                        setStore('userInfo',item);
                        this.goBack(item)
                    },
                    error:(d)=>{
                        console.log('获取用户信息失败')
                        if(d.errorCode === -7){
                            routerUrl('signUp',this.$router)
                        }
                    }
                })
            }
        }
    }
</script>
