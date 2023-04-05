<template>
  <v-container class="m-5 p-5 flex flex-col justify-center">
    <transition
      appear
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      mode="out-in"
    >
      <v-row align="center" justify="center">
        <v-col class="col-lg-7 col-md-7 col-sm-8">
          <v-card class="mx-auto  bounce cardColor" color="#1D153A" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4 colortext"> Web Application in Laravel</div>

                <v-list-item-subtitle class="colortext font-weight-light"
                  >Order Management Web Application with login, user and product management</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-btn class="" target="_blank" href="https://github.com/RashelAlvarez/gestionPedidos" outlined color="#8C9EFF">
                <v-icon class="" color="#8C9EFF"> mdi-github </v-icon>
              </v-btn>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </transition>
    <transition
      appear
      enter-active-class="animate__animated animate__fadeIn animate__slow"
      mode="out-in"
    >
      <v-row align="center" justify="center">
        <v-col class="col-lg-7 col-md-7 col-sm-8">
          <v-card class="mx-auto  bounce cardColor " color="#1D153A" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4 colortext">
                  ApiRest Vuejs , Laravel & Axios
                </div>

                <v-list-item-subtitle class="colortext font-weight-light"
                  >CRUD and contact form with vuejs and Laravel</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-btn class="" target="_blank" href="https://github.com/RashelAlvarez/CRUD_VUE" outlined color="#8C9EFF">
                <v-icon class="" color="#8C9EFF"> mdi-github </v-icon>
              </v-btn>
                 <v-btn class="ml-2" target="_blank" href="https://crud-vue-psi.vercel.app/" outlined color="#8C9EFF">
                <v-icon class="" color="#8C9EFF"> mdi-link </v-icon>
              </v-btn>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </transition>
    <transition
      appear
      enter-active-class="animate__animated animate__fadeIn animate__slower"
      mode="out-in"
    >
      <v-row align="center" justify="center">
        <v-col class="col-lg-7 col-md-7 col-sm-8">
          <v-card class="mx-auto  bounce cardColor" color="#1D153A " outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4 colortext">
                  Portfolio Vuejs , Laravel & Axios
                </div>

                <v-list-item-subtitle class="colortext font-weight-light"
                  >More about me, skills, habilites and contact
                  form</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-btn class="" target="_blank" href="https://github.com/RashelAlvarez/portafolio"  outlined color="#8C9EFF">
                <v-icon class="" color="#8C9EFF"> mdi-github </v-icon>
              </v-btn>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>


<script>
export default {
  name: "portfolioApp",
};
</script>

<style>
.bounce:hover {
  animation: pulse; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 0.5s;
}

.cardColor {
  border: 1px solid #AB47BC !important;
  /*border-radius: 50px;*/
  margin: 0;
  padding: 0;
  opacity: .8;
}
</style>

