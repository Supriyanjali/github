<template>
  <div class="nav">
<Navbar :search1=search></Navbar>
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
