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
                backurl:'',
                open:0
            }
        },
        components:{
            HeaderView
        },
        beforeRouteEnter(to, from, next){
            next(vm=>{
                // vm.backurl = to.query.returnUrl
                vm.open = to.query.open
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
                    this.replaceWithOpen(this.backurl)
                }else{
                    if(loginBack){
                        delStore('loginBack')
                        this.replaceWithOpen(loginBack)
                    }else{
                        this.$router.replace({'name':'index',query:{'open':this.open}})
                    }
                }
            },
            getUserInfo(){
                Models.send({
                    url:'getWechatUser',
                    type:'get',
                    params:{},
                    backUrl:'/index.html#/index',
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
            },
            replaceWithOpen(url){
                if(/\?/g.test(url)){
                    url = url + '&open='+this.open
                }else{
                    url = url + '?open='+this.open
                }
                location.replace(url)
            }
        }
    }
</script>
