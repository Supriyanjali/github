<template>
    <div>
    <!-- <Navbar/> -->
    <Navbar :search1=search></Navbar>
         <div v-if="this.users1.length > 0">
      <UserCard v-for='user in this.users1' :key="user.id" :user="user"/>
         </div>
      <div v-else class="serachbar"><h1>Search for anyone..</h1></div>
        </div>
</template>
<script>
import UserCard from '@/components/UserCard'
import Navbar from '@/components/Navbar'
export default {
  components: {
    UserCard,
    Navbar
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    users1 () {
      return this.$store.state.users
    }
  }

}
</script>
<style scoped>
h1{
  margin-left: 550px;
  color: rgb(94, 33, 145);
  font-family: 'Times New Roman', Times, serif;
}
</style>
