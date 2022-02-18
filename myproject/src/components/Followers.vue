<template>
    <div  >
         <div class="allusers">
      <UserCard v-for='user in followersFxn' :key="user.login" :user="user"/>
     </div>
        </div>
</template>
<script>
import UserCard from '@/components/UserCard'
import {mapGetters, mapActions} from 'Vuex'
export default {
  components: {
    UserCard
  },
  mounted () {
    this.getFollowers(this.$route.params.name)
  },
  computed: {
    ...mapGetters(['followers']),
    followersFxn () {
      return this.followers
    }
  },
  methods: {
    ...mapActions(['getFollowers'])
  }

}
</script>
<style scoped>
.allusers
{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
