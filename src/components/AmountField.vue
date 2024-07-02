<template>
    <div>
      <label>Сумма:</label>
      <span>{{ amount }}</span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useMainStore } from '../store';
  
  export default defineComponent({
    setup() {
      const store = useMainStore();
      const amount = computed(() => store.amount);
  
      return {
        amount,
      };
    },
  });
  </script>
  