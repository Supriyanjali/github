<template>
    <div>
        <Navbar/>
         <div>
      <UserCard v-for='user in followers' :key="user.login" :user="user"/>
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
    this.$store.dispatch('getFollowers', this.$route.params.name)
  },
  computed: {
    followers () {
      return this.$store.state.followers
    }
  }

}

</script>
