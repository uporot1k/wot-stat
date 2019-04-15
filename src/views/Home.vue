<template lang="pug">
  .home
    ui-search
</template>

<script>
// @ is an alias to /src
import Search from './../components/Search'
export default {
  components: {
    'ui-search': Search
  }
}
</script>
