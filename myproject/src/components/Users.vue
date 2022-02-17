<template>
    <div v-if="this.users1.length > 0">
      <UserCard v-for="user in users1" :key="user.id" :user="user" />
    </div>
    <div v-else class="serachbar"><h1>Search for anyone..</h1></div>
</template>
<script>
import UserCard from '@/components/UserCard'
export default {
  components: {
    UserCard
  },
  computed: {
    users1 () {
      return this.$store.state.users
    }
  }
}
</script>
<style scoped>
h1 {
  margin-left: 550px;
  color: rgb(94, 33, 145);
  font-family: "Times New Roman", Times, serif;
}
</style>
