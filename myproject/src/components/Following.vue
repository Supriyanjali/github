<template>
    <div>
         <div>
      <UserCard v-for='user in followingFxn' :key="user.login" :user="user"/>
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
    this.getFollowing(this.$route.params.name)
  },
  computed: {
    ...mapGetters(['following']),
    followingFxn () {
      return this.following
    }
  },
  methods: {
    ...mapActions(['getFollowing'])
  }

}
</script>
