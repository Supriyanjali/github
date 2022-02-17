<template>
<div>
<Navbar/>
    <div class="profileStyle">
        <img :src="profile.avatar_url"/>
        <div class="details">
            <div class="text">
              <div class="heads">
        <p>Name: </p>
        <p>Id: </p>
        <p >Location: </p>
              </div>
        <div class="tails">
        <p>{{profile.login}}</p>
        <p>{{profile.id}}
        <p>{{profile.location}}</p>
        </div>
          </div>
          <div class="follow">
            <div class="followers">
        <p >{{profile.followers}}</p>
        <router-link :to="{ path: `/${profile.login}/followers`}"><button>FOLLOWERS</button></router-link></div>
          <div class="following">
        <p>{{profile.following}}</p>
        <router-link :to="{ path: `/${profile.login}/following`}"><button>FOLLOWING</button></router-link></div>
        </div>
        </div>
    </div>
</div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },

  mounted () {
    this.$store.dispatch('getProfile', this.$route.params.name)
  },
  computed: {
    profile () {
      return this.$store.state.profile
    }
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
  appearance: none;
  border: 1px solid rgb(201, 197, 197);
  border-radius: 0.4em;
  cursor: pointer;
  line-height: 1;
  padding: 5px;
  font-size:15px;
}
</style>
