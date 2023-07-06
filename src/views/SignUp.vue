<template>
  <!-- Row -->
  <el-row>
    <el-col
      class="xl"
      style="
        background-image: url('https://i.pinimg.com/736x/b4/71/fc/b471fc0c96695ff2bef5c7b85d4fb765.jpg');
        background-size: cover;
        background-position: center;
      " :span="12">
    </el-col>
    <el-col class="container-center" :span="12">
      <el-form class="content">
        <el-form-item class="parent-center">
          <h3 class="title">Registro</h3>
        </el-form-item>
        <el-form-item align-center>
          <button class="google-btn"
            @click="signInWithGoogle">Crear cuenta con Google</button>
        </el-form-item>
        <el-form-item class="sign-message">
          <p>¿Ya tienes cuenta? Ingresa como&nbsp;</p>
          <router-link to="/login"><a>
              paciente&nbsp;
            </a>
          </router-link>
          o
          <router-link to="/login"><a>
              &nbsp;especialista
            </a>
          </router-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
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