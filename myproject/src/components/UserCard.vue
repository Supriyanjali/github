<template>
<div class="userdetail">
    <div><img :src="user.avatar_url" class="image"></div>
  <div class="alignment">
      <p><i>ID : {{user.login}}</i></p>
  </div>
  <div class="divlast"><button class="btnlast" @click="details(user.login)" > <i>Details </i></button></div>
  </div>
</template>

<script>
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

</script>

<style>
.userdetail{
  margin-top:50px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
    border-radius: 10px;
    box-shadow: 5px 5px #888888;
}
.userdetail .alignment{
  align-self: center;
  font-size: 20px;
}
.userdetail .image{
    height: 150px;
    width: 150px;
    margin: 35px 0px 35px 35px;
    border-radius: 100px;
}
.userdetail .divlast{
  align-self: center;
  margin-right: 20px;
}

.userdetail .divlast .btnlast{
  padding:10px;
  background:rgb(57, 160, 230);
  color: white;
  border-radius: 5px;
  box-shadow:  2px #0e78db;
}
.userdetail .btnlast:hover{
  background-color: rgb(43, 134, 170);
  color: #000;
}
</style>
