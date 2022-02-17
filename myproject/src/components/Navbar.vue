<template>
<div>
    <div class="topnav">
  <router-link :to="{ path: '/'}">Home</router-link>
  <router-link :to="{ path: '/profile/Supriyanjali'}" v-if="isHome">Profile</router-link>
  <div class="search-container">
    <form>
      <button @click="move"><input type="text" v-model="search" placeholder="Search.." @input="userDetails">
      <button type="submit"><i class="fa fa-search"></i></button></button>
    </form>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Navbar',
  props: ['search1'],
  data () {
    return {
      users: [],
      search: this.search1
    }
  },
  methods: {
    async userDetails (event) {
      // this.serach = event.target.value
      console.log('Hii')
      await axios.get(`https://api.github.com/search/users?q=${this.search}`).then((response) => {
        this.users = response.data.items
        console.log(this.users)
        this.$store.state.users = this.users
      })
    },
    move () {
      this.$router.push('/')
      this.$store.state.users = []
    }
  },
  computed: {
    isHome () {
      return this.$route.name === 'Users'
    }
  }
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  width: 100%;
}
.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
</style>
