<template>
  <v-app>
    
    <v-app-bar collapse :elevation="24" app color="transparent">
      <v-toolbar color="transparent" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Click here</v-toolbar-title>

       
      </v-toolbar>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" dark temporary>
      <v-layout mt-4 column>
        <v-flex>
          <v-list color="dark">
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Dashboard"
              :to="{ path: '/' }">
              <v-icon>mdi-home</v-icon> Home</v-list-item>
            <v-list-item
              prepend-icon="mdi-account-box"
              title="Account"
              :to="{ path: '/portfolio' }"    >
              <v-icon>mdi-open-in-new</v-icon> Portfolio</v-list-item>
            <v-list-item
              prepend-icon="mdi-gavel"
              title="Admin"
              :to="{ path: '/about' }"  >
              <v-icon>mdi-account</v-icon> About</v-list-item >
                 <v-list-item
              prepend-icon="mdi-gavel"
              title="Admin"
              :to="{ path: '/contact' }"  >
              <v-icon>mdi-account</v-icon> Contact</v-list-item >
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

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
              value: '#1D153A',
            },
          },
          /*   fullScreen:{
            enable:true,
            zIndex: -1,
          },*/
          fpsLimit: 120,
          interactivity: {
            events: {
            /*  onClick: {
                enable: true,
                mode: 'push',
              },*/
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
              value: '#E040FB',
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



<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

