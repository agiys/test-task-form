<template>
  <div>
    <div>
      <PriceInput />
      <QuantityInput />
      <AmountField />
      <SubmitButton />
    </div>
    <div>
      <label>Текущая цена:</label>
      <span>{{ price }}</span>
    </div>
    <div>
      <label>Текущее количество:</label>
      <span>{{ qty }}</span>
    </div>
    <div>
      <label>Текущая сумма:</label>
      <span>{{ amount }}</span>
    </div>
    <div>
      <label>Текущее состояние localStorage:</label>
      <pre>{{ localStorageData }}</pre>
    </div>
    <div>
      <label>Журнал событий:</label>
      <ul>
        <li v-for="(event, index) in eventsLog" :key="index">{{ event }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useMainStore } from './store';
import PriceInput from './components/PriceInput.vue';
import QuantityInput from './components/QuantityInput.vue';
import AmountField from './components/AmountField.vue';
import SubmitButton from './components/SubmitButton.vue';

export default defineComponent({
  components: {
    PriceInput,
    QuantityInput,
    AmountField,
    SubmitButton,
  },
  setup() {
    const store = useMainStore();

    return {
      price: computed(() => store.price),
      qty: computed(() => store.qty),
      amount: computed(() => store.amount),
      localStorageData: computed(() => JSON.stringify(store.localStorageData, null, 2)),
      eventsLog: computed(() => store.eventsLog),
    };
  },
});
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  margin-right: 10px;
}
input {
  margin-right: 20px;
}
button {
  margin-top: 20px;
}
pre {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: #f9f9f9;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
}
</style>
