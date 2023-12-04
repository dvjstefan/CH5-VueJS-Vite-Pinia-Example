<template>
  <NavSidebar />
  <div id="router-container">
    <router-view />
  </div>
</template>

<script>
import NavSidebar from "@/components/NavSidebar.vue"; // Import the NavSidebar component from the components directory

// Register the NavSidebar component so it can be used in the template
export default {
  components: {
    NavSidebar,
  },
};
</script>

<style lang="scss">
@import "./styles/style.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
  width: 100%;
  max-width: 1920px;

  display: flex;
  flex-direction: row;

  #router-container {
    flex: 1;
  }
}
</style>
