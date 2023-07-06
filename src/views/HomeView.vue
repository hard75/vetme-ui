<template>
  <el-row>
    <el-col :span="7">
      <main-menu />
    </el-col>
    <el-col :span="17">
      <h1 class="secundary-title">Mis Mascotas</h1>

      <a class="add-button" @click="addPet">+ Agregar otra mascota</a>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue";
import MainMenu from "../components/Menu.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainMenu
  },
  data: () => ({  }),
  setup() {
    const addPet = () => {
      console.log('add pet');
    };

    return { addPet };
  },
});
</script>
