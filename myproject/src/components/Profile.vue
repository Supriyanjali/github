<template>
<div>
    <div class="profileStyle">
        <img :src="profile.avatar_url"/>
        <div class="details">
            <div class="text">
              <div class="heads">
        <p><i>Name</i> </p>
        <p><i>Id</i></p>
        <p ><i>Location</i></p>
              </div>
               <div class="heads">
        <p>:</p>
        <p>:</p>
        <p >:</p>
              </div>
        <div class="tails">
        <p><i>{{profile.login}}</i></p>
        <p><i>{{profile.id}}</i></p>
        <p><i>{{profile.location}}</i></p>
        </div>
          </div>
          <div class="follow">
            <div class="followers">
        <p ><i>{{profile.followers}}</i></p>
        <router-link :to="{ path: `/${profile.login}/followers`}"><button :disabled="profile.followers === 0">FOLLOWERS</button></router-link></div>
          <div class="following">
        <p><i>{{profile.following}}</i></p>
        <router-link :to="{ path: `/${profile.login}/following`}"><button :disabled="profile.following === 0">FOLLOWING</button></router-link></div>
        </div>
        </div>
    </div>
</div>
</template>
<script>
import {mapGetters, mapActions} from 'Vuex'
export default {
  mounted () {
    this.getProfile(this.$route.params.name)
  },
  computed: {
    ...mapGetters({profile: 'profile'}),
    followingNumber (no) {
      if (no === 0) { return true } else { return false }
    },
    followersNumber (no) {
      if (no === 0) { return true } else { return false }
    }
  },
  methods: {
    ...mapActions({getProfile: 'getProfile'})
  }
}

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
     margin-top: 40px;
     padding: 20px 100px ;
     border: 2px solid gray;
     border-radius: 20px;
     box-shadow: 5px 10px #888888;
}
.profileStyle .follow{
  display: flex;
}
.profileStyle .follow .followers{
  margin-right: 20px;
}
.follow{
  align-items: center;
  margin-left: 40px;
}
.followers p{
  margin-left:40px;
  font-size:150%
}
.following p{
  margin-left:40px;
  font-size:150%
}
.profileStyle .details .text{
  display: flex;
  justify-content: space-evenly;
}
.profileStyle .details .text .heads{
  margin-right: 60px;
  margin-left: -30px;
  font-size: 150%;
   font-family: "Times New Roman", Times, serif

}
.profileStyle .details .text .tails{
  font-size: 150%;
   font-family: "Times New Roman", Times, serif

}
button{
  box-sizing: border-box;
  align-items:center;
  padding:10px;
  background:rgb(57, 160, 230);
  color: white;
  border-radius: 5px;
  box-shadow:  2px #0e78db;
}
</style>
