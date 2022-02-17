<template>
<div class="userdetail">
    <div class="set">
    <div><img :src="user.avatar_url" class="image"></div>
  <div class="alignment">
      <p>Login_id: {{user.login}}</p>
  </div>
  <div class="divlast"><button class="btnlast" @click="details(user.login)" > Details </button></div>
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
    border: 2px solid black;
    justify-content: space-around;
}
.userdetail .alignment{
  align-self: center;
  font-size: 30px;
}
.userdetail .image{
    height: 150px;
    width: 150px;
    margin: 35px;
    border-radius: 100px;
}

.userdetail .btnlast{
  box-sizing: border-box;
  align-items:center;
  margin-top: 100px;
  appearance: none;
  border: 2px solid black;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  line-height: 1;
  padding: 10px;
  font-size: 20px;
}
</style>
