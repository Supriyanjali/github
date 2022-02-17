<template>
    <div>
        <Navbar/>
         <div>
      <UserCard v-for='user in following' :key="user.login" :user="user"/>
     </div>
        </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import UserCard from '@/components/UserCard'
export default {
  components: {
    Navbar,
    UserCard
  },
  mounted () {
    this.$store.dispatch('getFollowing', this.$route.params.name)
  },
  computed: {
    following () {
      return this.$store.state.following
    }
  }

}
</script>
