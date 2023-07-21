<template>
  <div>
    <el-dialog
        v-if="showDialog"
        title="Shipping address"
        @close="closeDialog"
        >
        hola
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['showDialog', 'closeDialog'],
  setup() {

  }
};
</script>
