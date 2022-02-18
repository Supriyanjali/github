import UserCard from '@/components/UserCard'
export default {
  components: {
    UserCard
  },
  computed: {
    usersList () {
      return this.$store.state.users
    }
  }
}
