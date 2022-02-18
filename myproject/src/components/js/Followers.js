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
