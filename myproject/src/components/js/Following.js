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
