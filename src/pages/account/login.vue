<template>
    <div class="page pg-account pg-account-login">
        <!-- HEADER -->
        <header class="gb-header">
            <div class="header-left"><a href="Index.jsp" class="icon close"></a></div>
            <h1 class="has-icon">登录</h1>
            <div class="header-right"><a href="SignUp.jsp">还不是会员？注册</a></div>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="login">
                <h2><img src="<%=basePath%>Webapp/Assets/Images/ledge_logo.png"></h2>
                <div class="login-form">
                    <div class="row"><input type="tel" id="" name="" value="" maxlength="11" placeholder="手机号码"></div>
                    <div class="row"><input type="text" id="" name="" value="" maxlength="6" placeholder="短信验证码"></div>
                    <div class="row"><a href="" class="get-sms-code">获取验证码</a></div>
                    <div class="row"><a href="" class="button primary-button">登录</a></div>
                </div>
            </section>
        </div>
        <!-- //MAINVIEW -->
    </div>  
</template>
