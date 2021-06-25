<template>
  <div class="main">
    <div class="container">
      <div class="content">
        <p>Aa</p>
      </div>
      <div class="content_text">
        <div class="paragraph">
          <p>Paragraph</p>
        </div>
        <div class="information">
          <p>Arcu iaculis quam in lectus ultrices nisl nunc, eu.<br> Ultrices elementum.</p>
        </div>
        <div class="buttons">
          <div class="login">
            <a href="/login"><p class="login_text">Log in</p></a>
          </div>
          <div class="registration">
            <a href="/registration"><p class="register_text">Registeration</p></a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>

<style lang="scss">

  *{padding:0;margin:0;border:0;}
  *,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}
  :focus,:active{outline:none;}
  a:focus,a:active{outline:none;}
  nav,footer,header,aside{display:block;}
  html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display:none;}
  button{cursor:pointer;}
  button::-moz-focus-inner{padding:0;border:0;}
  a,a:visited{text-decoration:none;}
  a:hover{text-decoration:none;}
  ul li{list-style:none;}
  img{vertical-align:top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}

  $color_background: #131313;
  $color_Aa: #262626;
  $color_paragraph: #23EC8C;
  $color_info: #898989;
  $color_registration: #FFFFFF;


  .main {
    min-width: 60%;
    position: fixed;
    width: 100%;
    height: 100%;
    background: $color_background;
  }
    .container{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
   }

   .content{
     font-family: DM Serif Text,serif;;
     font-size: 304px;
     color: $color_Aa;
     margin: 0 60px;
   }
    .content_text{
      margin: 0 60px;
      font-family: DM Sans,serif;
    }
    .paragraph{
      font-size: 55px;
      color: $color_paragraph;
      margin:5px 0;
    }
    .information{
      margin:5px 0;
      font-size: 16px;
      line-height: 21px;
      color: $color_info;
    }
    .buttons{
      height: 33px;
      display: flex;
      justify-content: space-between;
      margin:25px 0;
    }
    .registration{
      margin: 0 0 0 15px;
      height: 100%;
      width: 60%;
      background: $color_paragraph;
      border-radius: 8px;
    }
    .login{
      margin: 0 15px 0 0;
      height:100%;
      width: 40%;
      border: 2px solid $color_info;
      border-radius: 8px;
    }
    .login_text{
      font-size: 16px;
      color: $color_info;
      text-align: center;
      padding: 8px 0;
    }
    .register_text{
      font-weight: bold;
      color: $color_registration;
      border-radius: 8px ;
      text-align: center;
      padding: 10px 0;
    }

</style>
