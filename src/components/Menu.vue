<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo main-menu"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-row>
      <el-col class="logo" :span="24">
        <img :src="urlVetmeLogo" alt="vetme" />
      </el-col>
    </el-row>

    <div>
      <el-row>
        <el-col :span="10">
          <div class="perfil-redondo">
            <img :src="urlProfile" alt="Perfil" />
          </div>
        </el-col>
        <el-col class="profile-data" style="margin: auto" :span="14">
          <h2 style="font-family: Poppins; margin: 5px 0">
            <strong>{{ user.name }}</strong>
          </h2>
          <h6 style="font-family: Poppins; margin: 5px 0">
            {{ user.email }}
          </h6>
        </el-col>
      </el-row>
      <el-row sytle="margin-bottom:10px;">
        <el-col>
          <hr />
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          Actividades
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-menu-item index="1">
            <el-icon><fold /></el-icon>
            <template #title>Mis Mascotas</template>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><Calendar /></el-icon>
            <template #title>Calendario</template>
          </el-menu-item>

          <div v-if="user.type === 'paciente'">
            <el-menu-item index="3">
              <el-icon><FirstAidKit /></el-icon>
              <template #title>Especialistas guardados</template>
            </el-menu-item>
          </div>
          
          <div v-if="user.type === 'especialista'">
            <el-menu-item index="3">
            <el-icon><Reading /></el-icon>
              <template #title>Servicios</template>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><Wallet /></el-icon>
              <template #title>Pagos</template>
            </el-menu-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          Historial
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-menu-item index="4">
            <el-icon><DocumentCopy /></el-icon>
            <template #title>Historial de citas</template>
          </el-menu-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          Configuración
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-menu-item index="5">
          <el-icon><Setting /></el-icon>
            <template #title>Configuración de la cuenta</template>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon><QuestionFilled /></el-icon>
            <template #title>Ayuda</template>
          </el-menu-item>
        </el-col>
      </el-row>
    </div>
  </el-menu>
</template>

<script>
import { defineComponent } from "vue";
import profileDefault from "../assets/profile.png";
import vetmeLogo from "../assets/icons/vetme-logo.png";
import {
  Calendar,
  DocumentCopy,
  FirstAidKit,
  Fold,
  QuestionFilled,
  Setting,
  Reading,
  Wallet
} from "@element-plus/icons-vue";

export default defineComponent({
  name: "MainMenu",
  components: {
    Calendar,
    DocumentCopy,
    FirstAidKit,
    Fold,
    QuestionFilled,
    Setting,
    Reading,
    Wallet
  },
  data: () => ({
    isCollapse: false,
    urlProfile: profileDefault,
    urlVetmeLogo: vetmeLogo,
    user: {
      name: "Jesús Barraza",
      email: "barrazajesusarmando@gmail.com",
      type: "especialista"
    },
  }),
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return { handleOpen, handleClose };
  },
});
</script>
