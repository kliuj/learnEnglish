<template>
    <div>
        <nav class="sidenav" data-sidenav data-sidenav-toggle="#sidenav-toggle">
            <div class="sidenav-brand"><img src="../../Assets/Images/ledge_logo.png" class="logo"></div>
            <div class="sidenav-header">
                <div class="user-profile-photo"><img src="../../Assets/Images/temp_user.png"></div>
                <span class="nickname">微信昵称</span>
                <span class="join-in">2017年12月加入</span>
            </div>
            <ul class="sidenav-menu">
                <li>
                    <a href="../../Views/Timeline/Index.jsp">
                        <span class="sidenav-link-title">学习时间轴</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Courses/Index.jsp">
                        <span class="sidenav-link-title">优选课程</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Activities/Index.jsp">
                        <span class="sidenav-link-title">实战活动</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Account/Upgrade.jsp">
                        <span class="sidenav-link-title">升级帐户</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Account/Credits.jsp">
                        <span class="sidenav-link-title">我的积分</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Invite/Index.jsp">
                        <span class="sidenav-link-title">邀请同学</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/About/Index.jsp">
                        <span class="sidenav-link-title">关于 LEDGE</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div>
            <router-view>

            </router-view>
        </div>
    </div>
</template>
<script>
    export default{
    }

</script>
<style>
  .containPage{
    z-index:999;
    background-color:#efeff8
  }
</style>
