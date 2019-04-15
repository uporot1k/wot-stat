<template lang="pug">
  #app
    transition(
      name="slide-fade"
    )
      router-view
</template>
<script>
  import Search from './components/Search'
  export default {
    components: {
      'ui-search': Search
    }
  }
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width: 100%
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  background-color: #f5f6fa
.slide-fade-enter-active
  transition: all .3s ease;

.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);

.slide-fade-enter, .slide-fade-leave-to

  transform: translateX(10px);
  opacity: 0;

</style>
