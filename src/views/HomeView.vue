<template>
  <el-row>
    <el-col :span="7">
      <main-menu />
    </el-col>
    <el-col :span="17" style="padding:20px;">
      <h1 class="secundary-title">Mis Mascotas</h1>

      <el-card class="box-card pet-card">
        <el-row>
          <el-col :span="6"
          :style="`background-image: url('${urlFotoPet}'); background-size: cover; background-position: center; height:250px;`">
          </el-col>
          <el-col class="pet-data" :span="18">
            <h1>Lala</h1> <!-- nombre de la mascota -->
            <h3>Perro</h3> <!-- raza de la mascota -->

            <el-row class="pet-description">
              <el-col :span="6">
                <h5>Edad</h5>
                <h2><strong>5 meses</strong></h2>
              </el-col>
              <el-col :span="6">
                <h5>Género</h5>
                <h2><strong>Hembra</strong></h2>
              </el-col>
              <el-col :span="6">
                <h5>Raza</h5>
                <h2><strong>Bull Dog Francés</strong></h2>
              </el-col>
              <el-col :span="6">
                <h5>Peso</h5>
                <h2><strong>5 Kg</strong></h2>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <a class="add-button" @click="openDialog">+ Agregar otra mascota</a>
      <AddPet :showDialog="showDialog" @closeDialog="closeDialog" />
      <el-dialog
        v-model="showDialog"
        title="Datos de la mascota"
        @close="closeDialog"
      >
        <el-form>
          <el-form-item label="Nombre de la mascota">
            <el-input v-model="pet.name" />
          </el-form-item>
          <el-form-item label="Raza">
            <el-input v-model="pet.race" />
          </el-form-item>
          <el-form-item label="Tipo de mascota">
            <el-select
              v-model="pet.type"
              placeholder=""
            >
              <el-option label="Ave" value="shanghai" />
              <el-option label="Perro" value="beijing" />
              <el-option label="Gato" value="beijing" />
            </el-select>
          </el-form-item>
          
          <el-row>
            <el-col :span="12">
              <el-form-item label="Edad">
                <el-input v-model="pet.time" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Años/meses">
                <el-select
                  v-model="pet.timeType"
                >
                  <el-option label="Año" value="year" />
                  <el-option label="Mes" value="month" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          
          <el-row>
            <el-col :span="12">
              <el-form-item label="Peso">
                <el-input v-model="pet.weight" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Kg/Gr">
                <el-select
                  v-model="pet.typeWeight"
                >
                  <el-option label="Kg" value="kg" />
                  <el-option label="Gr" value="gr" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item>
            <el-button type="primary" @click="closeDialog">Create</el-button>
            <el-button @click="closeDialog">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue";
import MainMenu from "../components/Menu.vue";
import AddPet from "../components/AddPet.vue";
import fotoPet from "../assets/foto-pet.png";

export default defineComponent({
  name: "HomeView",
  components: {
    MainMenu,
    AddPet,
  },
  data: () => ({
    showDialog: false,
    urlFotoPet: fotoPet,
    pet: {
      name: '',
      type: '',
      race: '',
      time: 0,
      typeTime: 'year',
      weight: 0,
      typeWeight: 'kg'
    },
    pets: []
  }),
  methods: {
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    addNewPet() {
      this.pets.push(this.pet);
      this.pet = {
        name: '',
        type: '',
        race: '',
        time: 0,
        typeTime: 'year',
        weight: 0,
        typeWeight: 'kg'
      };
      this.showDialog = false;
    }
  },
  /*setup() {
    const openDialog = () => {
      this.showDialog = true;
    };

    const closeDialog = () => {
      this.showDialog = false;
    };

    return { openDialog, closeDialog };
  },*/
});
</script>

<style>
  .pet-card .el-card__body {
    padding: 0px !important;
  }

  .pet-data {
    padding: 10px;
  }

  .pet-data h3 {
    color: gray;
  }

  .pet-data h1, h3 {
    font-size: Poppins;
    margin: 0px;
  }

  .pet-description {
    margin: 20px 0px;
  }

  .pet-description .el-col {
    padding: 0px 5px;
  }

  .pet-description .el-col h5 {
    color: gray;
  }

  .pet-description .el-col h5, h2 {
    margin: 0px;
  }
</style>