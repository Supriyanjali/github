<template>
<div>
    <div class="profileStyle">
    <div>
        <img :src="profile.avatar_url"/></div>
        <div class="details">
            <div class="text">
              <div class="heads">
        <p><i>Name</i> </p>
        <p><i>Id</i></p>
        <p v-if = "profile.location !== null"><i>Location</i></p>
        <p v-if = "profile.company !== null"><i>Company</i></p>
        <p><i>Repos</i></p>
        <p v-if = "profile.bio !== null"><i>Bio</i></p>

              </div>
               <div class="heads">
        <p>:</p>
        <p>:</p>
        <p v-if = "profile.location !== null">:</p>
        <p v-if = "profile.company !== null">:</p>
        <p>:</p>
        <p v-if = "profile.bio !== null">:</p>
              </div>
        <div class="tails">
        <p><i>{{profile.login}}</i></p>
        <p><i>{{profile.id}}</i></p>
        <p><i>{{profile.location}}</i></p>
        <p><i>{{profile.company}}</i></p>
        <p><i>{{profile.public_repos}}</i></p>
        <p><i>{{profile.bio}}</i></p>
        </div>
          </div>
          <div class="follow">
            <div class="number">
        <p ><i>{{profile.followers}}</i></p>
        <router-link :to="{ path: `/${profile.login}/followers`}"><button class="button" :disabled="profile.followers === 0">FOLLOWERS</button></router-link></div>
          <div class="number">
        <p><i>{{profile.following}}</i></p>
        <router-link :to="{ path: `/${profile.login}/following`}"><button class="button"  :disabled="profile.following === 0">FOLLOWING</button></router-link></div>
        </div>
        </div>
    </div>
</div>
</template>
<script  src = './js/Profile.js'>
</script>
<style scoped>
.profileStyle{
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
}
.profileStyle img{
    height: 200px;
    width: 200px;
    border-radius: 200px;
}
.profileStyle .details{
  display: flex;
  flex-direction: column;
  justify-content: center;
     margin-top: 40px;
     padding: 20px 100px ;
     border: 2px solid gray;
     border-radius: 20px;
     box-shadow: 5px 5px #888888;
}
.profileStyle .details .text{
  display: flex;
}
.profileStyle .details .text .heads{
  margin-right: 20px;
  font-size: 150%;
   font-family: "Times New Roman", Times, serif

}
.profileStyle .details .text .tails{
  font-size: 150%;
   font-family: "Times New Roman", Times, serif
}
.profileStyle .details .follow{
  display: flex;
  justify-content: space-evenly;
}
.profileStyle .details .follow .number{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button{
  box-sizing: border-box;
  align-items:center;
  padding:10px;
  margin-left: 20px;
  background:rgb(57, 160, 230);
  color: white;
  border-radius: 5px;
  box-shadow:  2px #0e78db;
}
.button:hover
{
   background:rgb(86, 115, 134);
  color:#000;
}
</style>
