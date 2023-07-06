<template>
  <div class="container-center">
    <el-card class="box-card centered">
      <template #header>
        <div class="card-header">
          <span>Usuario Nuevo</span>
        </div>
      </template>
      <el-form :model="form" form-label>
        <el-form-item label="Tipo de usuario">
          <el-select v-model="form.type" placeholder="Seleccione el tipo de cuenta">
            <el-option label="Paciente" value="paciente" />
            <el-option label="Especialista" value="especialista" />
          </el-select>
        </el-form-item>
        <el-form-item label="Nombre">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Acepta los terminos y condiciones">
          <el-switch v-model="form.legal" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="onSubmit">Create</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "newUserView",

  data: () => ({
    form: {
        name: '',
        email: '',
        type: null,
        legal: false
    }
  }),
  setup() {
     const router = useRouter();

     const onSubmit = () => {
        router.replace('/home');
     }

     return { onSubmit };
  }
};
</script>
