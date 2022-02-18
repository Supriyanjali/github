<template>
<div class="userdetail">
    <div class="set">
    <div><img :src="user.avatar_url" class="image"></div>
  <div class="alignment">
      <p><i>ID : {{user.login}}</i></p>
  </div>
  <div class="divlast"><button class="btnlast" @click="details(user.login)" > <i>Details </i></button></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['user'],
  methods: {
    details (name) {
      this.$router.push(`/profile/${name}`)
      localStorage.setItem('name', name)
    }
  }
}

</script>

<style>
.userdetail{
  display: block;
}
.userdetail .set{
  max-width: 50%;
    display: flex;
    margin: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 5px 5px #888888;
    justify-content: space-around;
}
.userdetail .alignment{
  align-self: center;
  font-size: 20px;
}
.userdetail .image{
    height: 150px;
    width: 150px;
    margin: 35px;
    border-radius: 100px;
}

.userdetail .btnlast{
  margin-top:90px;
  padding:10px;
  background:rgb(57, 160, 230);
  color: white;
  border-radius: 5px;
  box-shadow:  2px #0e78db;
}
</style>
