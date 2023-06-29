<template>
  <!-- Row -->
  <v-row class="h-screen" align="center" justify="center">
    <!-- Col -->
    <v-col cols="5"
      class="h-screen"
      style="
        background-image: url('https://i.pinimg.com/736x/b4/71/fc/b471fc0c96695ff2bef5c7b85d4fb765.jpg');
      "
    ></v-col>
    <!-- Col -->
    <v-col cols="7">
      <div class="p-5">
        <h3 class="pt-4 text-2xl text-center">Register</h3>
      </div>
      <v-form
        @submit.prevent="Register"
        class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
      >
        <v-text-field
          v-model="name"
          label="Name"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
        ></v-text-field>
         <v-text-field
          v-model="confirmPassword"
          type="password"
          label="Confirmar password"
        ></v-text-field>
        <v-btn type="submit" color="primary" block class="mt-2">Crear Cuenta</v-btn>
        <v-btn @click="signInWithGoogle" block class="mt-2">Crear Cuenta con google</v-btn>
        <hr class="mb-6 border-t" />
        <div class="text-center">
          <router-link to="/login"
            ><a
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            >
              Already have an account? Login
            </a></router-link>
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: "SignUp",
  setup() {
   const state = reactive({
      email: null,
      name: '',
      password: null,
      confirmPassword: null,
      isLoading : false
    });

    const router = useRouter();
    const store = useStore();

    const Register = async () => {
      await store.dispatch('signUp', { email: state.email, password: state.password });
      router.replace('/authorize')
    }

    const signInWithGoogle = async () => {
      await store.dispatch('signInWithGoogle');
      router.replace('/authorize')
    };

    return { ...toRefs(state), Register, signInWithGoogle };
  }
};
</script>

<style>
</style>