<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
  import LoginLayout from './views/Login'
  import RegistrationLayout from './views/Registration'
  import HomeLayout from './views/Home'

  export default {
    computed:{
      layout(){
        return (this.$route.meta.layout)
      }
    },
    components:{
      LoginLayout, RegistrationLayout, HomeLayout
    }
  }
</script>


<style lang="scss">

</style>
