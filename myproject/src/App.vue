<template>
  <div class="nav">
<Navbar></Navbar>
    <router-view/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>
<style scoped>
</style>
