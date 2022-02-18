<template>
    <div  >
         <div class="allusers">
      <UserCard v-for='user in followersFxn' :key="user.login" :user="user"/>
     </div>
        </div>
</template>
<script src = './js/Followers.js'>

</script>
<style scoped>
.allusers
{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
