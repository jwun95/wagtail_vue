<template>
    <section class="section">
        <b-button @click="loginWithGoogle()" icon-left="google">
            Sign in with Google
        </b-button>
        <div>
            <a @click="loginWithNaver">
                <img src="https://static.nid.naver.com/oauth/big_g.PNG" width="222">
            </a>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        loginWithGoogle() {
            this.$auth.loginWith("google");
        },
/*         loginWithNaver() {
            const naverLogin = new naver.LoginWithNaverId({
                clientId: 'Q_OaN5zpEpmlzSmRJf3D', // Naver client key
                callbackUrl: 'http://localhost:8000/social-login/fefe/',
                callbackHandle: true
            })
            naverLogin.init()
            naverLogin.reprompt()
        } */
        loginWithNaver() {
            this.$auth.loginWith("naver");
        },
    },
};
</script>