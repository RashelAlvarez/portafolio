<template>
  <v-container>
         <transition appear enter-active-class="animate__animated animate__fadeIn"
          mode="out-in">
    <div class="d-flex align-center">
      <v-card
        app
        class="mx-auto cardColor "
         color="#1D153A "
        dark
        max-width="600"
        transition="scale-transition"
      >
        <v-card-title>
          <v-icon large left> mdi-account </v-icon>
          <span class="text-h6 font-weight-light">Contact me</span>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-bold">
          <form v-on:submit.prevent="guardarContacto()">
            <v-row>
              <v-col class="col-6">
                <v-text-field v-model="contacto.name" :rules="inputRules" class="" label="Name" outlined></v-text-field>
              </v-col>

              <v-col class="col-6">
                <v-text-field v-model="contacto.email" :rules="inputEmails" label="Email" outlined> </v-text-field>
              </v-col>
            </v-row>

            <v-textarea v-model="contacto.message" :rules="inputRules" label="Message" outlined></v-textarea>

            <v-select :items="listCountry" v-model="contacto.country" @change="onChangeCountry" 
              item-tile="country_name" item-value="country_name" 
            item-text="country_name" label="Country" :rules="inputRules" outlined> </v-select>

            <v-select v-model="contacto.state" @change="onChangeState"
            :items="listState" item-title="state_name" item-value="state_name" item-text="state_name"
            :rules="inputRules" label="State" outlined> </v-select>

            <v-select v-model="contacto.city" :items="listCities" item-title="city_name"
            item-value="city_name" item-text="city_name" :rules="inputRules" label="City" outlined> </v-select>

            <v-card-actions>
              <v-btn color="#8C9EFF" class="mr-4" type="submit">Send</v-btn>
            </v-card-actions>
          </form>
        </v-card-text>
      </v-card>
    </div>
     </transition> 

      <v-snackbar v-model="snackbar" color="success"
      >{{ textsnack }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
      </template>
    </v-snackbar>

  </v-container>
  
</template>

<script>
import axios from "axios";

export default {
  name: "contactApp",
  data(){
    return{
      contacto: {
        name:"",
        email:"",
        message: "",
        country:"",
        state:"",
        city:""
      },
      snackbar:false,
      textsnack:"Se enviaron los datos con exito",
      errors:[],
      inputRules:[
           (v) => !!v || "El campo es Requerido",
        (v) => v.length >= 3 || "Minimo 3 caracteres",
      ],
      inputEmails:[
            (v) => !!v || "El campo es Requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo no es valido",
     
      ],
      listCountry:[],
      listState:[],
      listCities:[],
      authToken:"",

    };
  },
  created(){
    this.generateAccessToken();
  },

  methods:{
    guardarContacto(){
           axios
        .post("https://apirestlaravel-production.up.railway.app/api/contacto", this.contacto)
        .then((response) => {
          console.log("contacto guardado" + response);
          this.snackbar = true;
        })
        .catch(function (error) {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          console.log(error);
        });

    },
      generateAccessToken() {
      axios
        .get("https://www.universal-tutorial.com/api/getaccesstoken", {
          headers: {
            Accept: "application/json",
            "api-token":
              "tymGjEqqzMkRYc2mpH9omYRFZt0sRvn_CLc4Gv_weZ8RciwGFU6b4xo5Hk2OPkm7Lgk",
            "user-email": "rashelalvarez21@gmail.com",
          },
        })
        .then((res) => {
          this.authToken = res.data.auth_token;
          this.loadCountry();
        });
    },

     loadCountry() {
      axios
        .get("https://www.universal-tutorial.com/api/countries", {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.listCountry = res.data;
          console.log(this.listCountry);
        });
    },

       onChangeCountry() {
      axios
        .get(
          `https://www.universal-tutorial.com/api/states/${this.contacto.country}`,
          {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.listState = res.data;
        });
    },

     onChangeState() {
      axios
        .get(
          `https://www.universal-tutorial.com/api/cities/${this.contacto.state}`,
          {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.listCities = res.data;
        });
    },

  }
};
</script>

