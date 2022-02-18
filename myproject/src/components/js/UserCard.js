export default {
  name: 'UserCard',
  props: ['user'],
  methods: {
    details (name) {
      localStorage.setItem('name', name)
      this.$router.push(`/profile/${name}`)
    }
  }
}
