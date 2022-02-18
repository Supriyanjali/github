import axios from 'axios'
export default {
  name: 'Navbar',
  data () {
    return {
      users: [],
      search: '',
      name: localStorage.getItem('name')
    }
  },
  methods: {
    async userDetails () {
      console.log('Hii')
      await axios.get(`https://api.github.com/search/users?q=${this.search}`).then((response) => {
        this.users = response.data.items
        console.log(this.users)
        this.$store.state.users = this.users
      })
    },
    me () {
      this.$router.push('/profile/Supriyanjali')
    }
  },
  computed: {
    isProfile () {
      return this.$route.name === 'Profile'
    },
    isHome () {
      return this.$route.name === 'Users'
    }
  }
}
