<template>
  <div class="Login">
    <form class="login-form">
      <legend>{{ msg }}</legend>
      <div class="input-con">
        <label for="name">
          <i class="people-icon"></i>
        </label>
        <input type="text" name="name" id="name" placeholder="请输入您的名字" v-model="name">
      </div>
      <div class="button-con">
        <button id="submit" @click.prevent="submit" :disabled="banSubmit">登录</button>
      </div>
    </form>
    <tips :tipMsg="tipMsg" @reSetMaskStatu="reSetMaskStatu"></tips>
  </div>
</template>

<script>
  import tips from './commom/tips'
  export default {
    components: { tips },
    name: 'Login',
    data () {
      return {
        msg: '中学生智能分寝系统',
        name: '',
        banSubmit: false,
        tipMsg: ''
      }
    },
    methods: {
      submit () {
        this.banSubmit = true
        if (this.name.trim() === '') {
          this.tipMsg = '请输入您的名字'
          return
        };
        this.$http.post('/api/login', { id: this.name }).then(response => {
          console.log(response)
          this.banSubmit = false
          this.$router.push('Info')
        }, response => {
          this.banSubmit = false
          console.log(response)
        })
      },
      reSetMaskStatu () {
        this.tipMsg = ''
        this.banSubmit = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- @import url(../sass/commom.scss); -->
<style lang="scss" scoped>
  $green: #49d0a0;
  $borderColor: #c7d4d0;
  .Login{
    width: 100%;
    height: 100%;
    padding: 280px 45px 0;
    background-image: url(../assets/bg.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    form{
      legend{
        display:block;
        width: 100%;
        font-weight: bold;
        color: $green;
        text-align: center;
        font-size: 64px;
        line-height: 75px;
        margin-bottom: 68px;
      }
      .input-con{
        height: 100px;
        line-height: 100px;
        border: 1px solid $borderColor;
        padding-left: 75px;
        position: relative;
        label{
          display: block;
          width: 75px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          i{
            display: block;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 33px 34px;
          }
        }
        input{
          width: 100%;
          height: 40px;
          border: none;
          outline: none;
          font-size: 30px;
        }
      }
      .button-con{
        margin-top: 45px;
        button{
          display: block;
          width: 100%;
          height: 100px;
          border: none;
          outline: none;
          color: #fff;
          background-color: $green;
          font-size: 34px;
          font-weight: bold;
        }
      }
    }
  }
  i.people-icon{
    background-image: url(../assets/account_icon.png);
  }
</style>
