<template>
    <button @click="submitData">Отправить данные</button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useMainStore } from '../store';
  
  export default defineComponent({
    setup() {
      const store = useMainStore();
  
      const submitData = () => {
        store.submitData();
      };
  
      return {
        submitData,
      };
    },
  });
  </script>
  