import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
    price: 0,
    qty: 0,
    amount: 0,
    localStorageData: {},
    eventsLog: [] as string[],
  }),
  actions: {
    updateCounter() {
      this.counter++;
    },
    updatePrice(price: number) {
      this.price = price;
      this.calculateAmount();
      this.addEventLog(`Price updated to ${price}`);
    },
    updateQuantity(qty: number) {
      this.qty = qty;
      this.calculateAmount();
      this.addEventLog(`Quantity updated to ${qty}`);
    },
    calculateAmount() {
      this.amount = this.price * this.qty;
      this.addEventLog(`Amount calculated as ${this.amount}`);
    },
    updateLocalStorage() {
      const dataToSave = {
        counter: this.counter,
        price: this.price,
        qty: this.qty,
        amount: this.amount,
      };
      localStorage.setItem('savedData', JSON.stringify(dataToSave));
      this.localStorageData = dataToSave;
    },
    addEventLog(log: string) {
      this.eventsLog.unshift(log);
    },
    async submitData() {
      this.addEventLog('Submit button clicked');
      this.updateLocalStorage();

      // Имитация задержки на бекенде
      await new Promise(resolve => setTimeout(resolve, 1000));
      const success = this.amount % 2 === 0;
      const response = { success };

      if (response.success) {
        this.addEventLog(`Data successfully saved: ${JSON.stringify(this.localStorageData)}`);
      } else {
        this.addEventLog(`Data save failed: ${JSON.stringify(this.localStorageData)}`);
      }

      this.updateCounter();
    },
  },
});
