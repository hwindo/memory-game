<template>
  <div class="launch d-flex justify-content-center align-items-center">
    <h1>Memory-Game</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LaunchScreen extends Vue {}
</script>

<style lang="scss">
.launch {
  width: 100vw;
  height: 100vh;
  opacity: 0;
  animation: fade-in 1.618s forwards;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
