<template>
    <div>
      <label>Количество:</label>
      <input type="number" v-model.number="qty" @input="debouncedUpdateQuantity" />
      <label>Текущее количество:</label>
      <span>{{ qty }}</span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { useMainStore } from '../store';
  import { debounce } from 'lodash';
  
  export default defineComponent({
    setup() {
      const store = useMainStore();
      const qty = ref(store.qty);
  
      const updateQuantity = () => {
        store.updateQuantity(qty.value);
      };
  
      const debouncedUpdateQuantity = debounce(updateQuantity, 300);
  
      return {
        qty,
        debouncedUpdateQuantity,
      };
    },
  });
  </script>
  