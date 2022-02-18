<template>
    <div class="allusers" v-if="this.usersList.length > 0">
      <UserCard v-for="user in usersList" :key="user.id" :user="user" />
    </div>
    <div v-else style="display: flex; flex-direction:column; justify-content:center; ">
      <h1>Search for anyone..</h1>
    <img src="@/assets/sinchan.jpeg" style="height: 600px; ">
    </div>
</template>
<script>
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
</script>
<style scoped>
h1 {
  margin-left: 550px;
  color: rgb(39, 121, 175);
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.allusers
{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
