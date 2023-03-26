<template>
  <v-app>
    <v-app-bar app color="transparent" dark>
    <!--  <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>-->

      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'homeApp' }">
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn text :to="{name:'portfolioApp'}">
        <span class="mr-2">Portfolio</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

       <v-btn text :to="{ name: 'aboutApp' }">
        <span class="mr-2">About</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn text :to="{ name: 'contactApp' }">
        <span class="mr-2">Contact</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      
    </v-app-bar>

    <v-main>
      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
      />

      <!-- or -->

      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="{
          background: {
            color: {
              /*value: '#02051E',*/
              /*value: '#3949AB'*/
              value:'#1D153A'
            },
          },
       /*   fullScreen:{
            enable:true,
            zIndex: -1,
          },*/
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              /* onHover: {
              enable: true,
              mode: 'repulse',
            },*/
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 6,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              /*value: '#8C9EFF',*/
           /*value: '#8C9EFF',*/
           value: '#E040FB'
            },
            links: {
              color: '',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }"
      />

      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>




<script setup>
import { loadFull } from "tsparticles";
const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>



