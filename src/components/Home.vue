
<template >
  <v-container
    class=" flex flex-col justify-center "
    fluid
    fill-height
  >
    <transition
      appear
      enter-active-class="animate__animated animate__zoomInDown"
      mode="out-in"
    >
      <div class="col-lg-7">
       <!-- <v-list-item class="grow">
          <v-row>
            <v-col>
              <v-icon large left color="blue"> mdi-twitter </v-icon>
              <span class="text-h5 font-weight-light colortext">Twitter</span>
            </v-col>
          </v-row>
        </v-list-item>-->
        <v-list-item class="grow">
        <v-row>
          <v-col class="text-center mt-4 mb-4">
            <h1 class="text-size colortext">
              "Hi i'm Rashel
              <v-icon large left color="blue"> mdi-hand-wave-outline </v-icon>,
              a computer engineer."
            </h1>
            
          </v-col>
        </v-row>
           </v-list-item>
              <v-list-item class="grow">
        <v-row>
          <v-col class="text-center"
            ><h4>
              <span class="colortext subheading mr-2">
                "I'm 25 years old. " 
                </span
              >
            </h4></v-col
          >
        </v-row>
           </v-list-item>

        <v-list-item class="grow mt-5">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="colortext"
              >Rashel Álvarez</v-list-item-title
            >
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1" color="#D50000"> mdi-heart </v-icon>
            <span class="colortext subheading mr-2">256</span>
            <span class="mr-1 colortext">·</span>
            <v-icon class="mr-1 colortext"> mdi-share-variant </v-icon>
            <span class="subheading colortext">45</span>
          </v-row>
        </v-list-item>
      </div>
    </transition>
  </v-container>
</template>

<script>
export default {
  name: "homeApp",
  data() {
    return {};
  },
};
</script>

<style>
/*.cardColorr {
 
  margin: 0;
  padding: 0;
  opacity: .8;
}*/
.colortext {
  color: white !important;
}


/*.animate__bounceIn {
  
  animation-duration: 2s; 
}*/

.text-size{
    font-size: 60px;
}
</style>
