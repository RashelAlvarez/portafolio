<template>
  <v-container>
    <v-row>
      <v-col class="col-lg-4 col-sm-12">
        <v-list-item class="grow">
          <transition
            appear
            enter-active-class="animate__animated animate__slideInLeft "
            mode="out-in"
          >
            <div>
              <span class="text-h4 text-left colortext">
                I can develop applications with these amazing programming languages.
              </span>

              <p class="text-body-1 text-left font-weight-light colortext mt-5">
                I like to say that I am a full-stack developer, but I have most
                experience with backend development.
              </p>
            </div>
          </transition>
        </v-list-item>
      </v-col>
      <v-col>
        <v-row class="m-5 p-5" align="center" justify="center">
          <v-col
            class="d-flex flex-nowrap mr-5 mb-5 flipInY"
            sm="2"
            md="6"
            lg="2"
            xs="12"
          >
            <v-img class="bounce" src="@/assets/js.png" width="100"></v-img>
          </v-col>
          <v-col class="d-flex mr-5 mb-5 flipInY2" sm="2" md="2" lg="2" xs="12">
            <v-img class="bounce" src="@/assets/html-5.png" width="100"></v-img
          ></v-col>
          <v-col class="d-flex mr-5 mb-5 flipInY3" sm="2" md="2" lg="2" xs="6">
            <v-img
              class="bounce"
              src="@/assets/1200px-Laravel.svg.png"
              width="100"
            ></v-img
          ></v-col>
          <v-col class="d-flex mr-5 mb-5 flipInY4" sm="2" md="2" lg="2" xs="6">
            <v-img class="bounce" src="@/assets/git.png" width="100"></v-img
          ></v-col>
        </v-row>

        <v-row class="m-5 p-5" align="center" justify="center">
          <v-col class="d-flex mr-5 mt-5 flipInY5" sm="2" md="2" lg="2" xs="12">
            <v-img class="bounce" src="@/assets/logo.png" width="100"></v-img
          ></v-col>
          <v-col class="d-flex mr-5 mt-5 flipInY5" sm="2" md="2" lg="2" xs="12">
            <v-img class="bounce" src="@/assets/css-3.png" width="100"></v-img
          ></v-col>
            <v-col class="d-flex mr-5 mt-5 flipInY5" sm="2" md="2" lg="2" xs="12">
            <v-img class="bounce" src="@/assets/java.png" width="100"></v-img
          ></v-col>
           <v-col class="d-flex mr-5 mt-5 flipInY5" sm="2" md="2" lg="2" xs="12">
            <v-img class="bounce" src="@/assets/php.png" width="100"></v-img
          ></v-col>
        </v-row >

        <v-row class="m-5 p-5" align="center" justify="center">
     <v-col class="d-flex mr-5 mt-5 flipInY5" sm="2" md="2" lg="2" xs="12">
            <v-img class="bounce" src="@/assets/mysql.png" width="100"></v-img
          ></v-col>
             <v-col class="d-flex mr-5 mt-5 flipInY5" sm="2" md="2" lg="2" xs="12">
            <v-img class="bounce" src="@/assets/postgreSql.png" width="100"></v-img
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "aboutApp",
};
</script>

<style>
.flipInY {
  animation: flipInY; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 0.5s;
}

.flipInY2 {
  animation: flipInY; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s;
}

.flipInY3 {
  animation: flipInY; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.5s;
}

.flipInY4 {
  animation: flipInY; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}

.flipInY5 {
  animation: flipInY; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2.5s;
}
</style>