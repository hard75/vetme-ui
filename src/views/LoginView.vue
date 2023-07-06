<template>
  <!-- Row -->
  <el-row>
    <el-col
      class="xl"
      style="
        background-image: url('https://i.pinimg.com/736x/c3/4d/7a/c34d7aa9aa7e91ecae90ab9fa3c267f1.jpg');
        background-size: cover;
        background-position: center;
      " :span="12">
    </el-col>
    <el-col class="container-center" :span="12">
      <el-form class="content">
        <el-form-item class="parent-center">
          <h3 class="title">Iniciar sesión</h3>
        </el-form-item>
        <el-form-item align-center>
          <button class="google-btn"
            @click="signInWithGoogle">Ingresar con google</button>
        </el-form-item>
        <el-form-item class="sign-message">
          <p>¿No tienes una cuenta? Regístrate como&nbsp;</p>
          <router-link to="/signup"><a>
              Create an Account!
            </a>
          </router-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { reactive, toRefs } from "vue"
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: "LoginView",
  setup() {
    const state = reactive({
      email: null,
      password: null,
      isLoading: false,
    });
    const router = useRouter();
    const store = useStore();

    const Login = async () => {
      try {
       // await store.dispatch('login', { email: state.email, password: state.password });
       router.replace('/authorize')
     } catch (error) {
       console.error('Login error:', error);
     }
    }

    const signInWithGoogle = async () => {
     await store.dispatch('signInWithGoogle');
    };

    return { ...toRefs(state), Login, signInWithGoogle };
  },
};
</script>