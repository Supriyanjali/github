<template>
<div>
    <div class="topnav">
  <router-link :to="{ path: '/users'}">Home</router-link>
  <router-link :to="{ path: '/profile/1'}">Profile</router-link>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" v-model="search" placeholder="Search.." >
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      search: ''
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
.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
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
