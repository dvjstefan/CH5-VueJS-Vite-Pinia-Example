<template>
  <div id="nav">
    <img alt="logo" src="../assets/vue.svg" />
    <router-link to="/" class="btn-nav">Home</router-link>
    <router-link to="/displays" class="btn-nav">Displays</router-link>
    <router-link to="/audio" class="btn-nav">Audio</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  flex-basis: 200px;
  height: 100%;
  background: $color-primary;

  display: flex;
  flex-direction: column;

  img {
    padding: 25px 15px;
    width: 100%;
  }
  .btn-nav {
    display: flex;
    align-items: center;
    background: transparent;
    color: #fff;
    height: 46px;
    margin: 0px 5px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
  }
  .btn-nav {
    margin-left: 1rem;
    padding: 1rem;
    border-radius: 5px 0 0 5px;

    font-weight: bold;
    font-size: 1.2rem;
    text-align: right;
    color: $color-white;

    &.router-link-exact-active {
      background-color: $color-white;
      color: $color-primary;
    }
  }
}
</style>
