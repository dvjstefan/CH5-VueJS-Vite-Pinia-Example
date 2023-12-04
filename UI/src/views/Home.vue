<template>
  <div id="counter">
    <h1>{{ systemName }}</h1>
    <div id="value">{{ counterValue }}</div>
    <div id="buttons">
      <button class="btn-default primary" @click="decrementCounter">-</button>
      <button class="btn-default primary" @click="incrementCounter">+</button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"; // Importing the computed ref from Vue, which is used to create reactive computed references
import { useCounterStore } from "@/store/modules/counter"; // Importing the useCounterStore function from the counter store module
import { useGlobalSettingStore } from "@/store/modules/globalSetting";

export default {
  setup() {
    const counterStore = useCounterStore(); // Accessing the counter store using the useCounterStore hook
    const globalSettingStore = useGlobalSettingStore();

    // Creating computed references for systemName and counterValue,
    // which will automatically update when the underlying state changes
    const systemName = computed(() => globalSettingStore.systemName);
    const counterValue = computed(() => counterStore.value);

    // Methods to increment and decrement the counter by dispatching actions
    const incrementCounter = () => {
      counterStore.incrementCounter();
    };
    const decrementCounter = () => {
      if (counterStore.value > 0) {
        counterStore.decrementCounter();
      }
    };

    // Exposing state and methods to the template
    return {
      systemName,
      counterValue,
      incrementCounter,
      decrementCounter,
    };
  },
};
</script>

<style lang="scss">
#counter {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #value {
    font-size: 8rem;
  }

  .btn-default {
    font-size: 40px;
  }
}
</style>
