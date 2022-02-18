<template>
<div>
    <div class="topnav">
      <div>
  <router-link :to="{ path: '/'} " :class="{ 'active': isHome }" >Home</router-link>
  <router-link :to="{ path: `/profile/${name}` }" :class="{ 'active': isProfile } " v-if="!isHome">Profile</router-link>
  </div>
  <div class="search-container" v-if="isHome">
      <input type="text" v-model="search" placeholder="Search.." @input="userDetails">
      <button type="submit"><i class="fa fa-search"></i></button>
  </div>
  <div>
  <i @click="me" class="fa fa-github" id='git' s></i>
  </div>
</div>
</div>
</template>
<script>
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
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");
.topnav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(68, 138, 204);
}

.topnav a {
  float: left;
  font-family:'Times New Roman', Times, serif;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}
.topnav a:hover {
  background-color: rgb(191, 197, 204);
  color: #000;
}
.topnav .search-container{
  margin-right:300px;
  align-self: center;
}

.topnav input[type=text] {
  padding: 6px;
  font-size: 17px;
  margin-left:300px;
  width: 400px;
}
.topnav .search-container button {
  padding: 6px 10px;
  margin-left:-3px;
  font-size: 17px;
  cursor: pointer;
  border:none;
  box-shadow: 2px 2px #0f3555;
  color: white;
  background-color: rgb(68, 138, 204)
}
.active
{
  background-color: rgb(10, 85, 170);
}
#git{
  float: right;
  color:white;
  margin-right: 20px;
  margin-top: 4px;
  font-size: 50px;
}

</style>
