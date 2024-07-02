<template>
  <div>
    <label>Цена:</label>
    <input type="number" v-model.number="price" @input="debouncedUpdatePrice" />
    <label>Текущая цена:</label>
    <span>{{ price }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useMainStore } from '../store';
import { debounce } from 'lodash';

export default defineComponent({
  setup() {
    const store = useMainStore();
    const price = ref(store.price);

    const updatePrice = () => {
      store.updatePrice(price.value);
    };

    const debouncedUpdatePrice = debounce(updatePrice, 300);

    return {
      price,
      debouncedUpdatePrice,
    };
  },
});
</script>
