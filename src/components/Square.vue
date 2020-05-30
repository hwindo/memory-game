<template>
  <div :class="squareClass">
    <a href="#" class="square__link" @click="handleClicked"></a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Square extends Vue {
  @Prop() isHighlighted!: boolean;
  @Prop() drawInitialActive!: boolean;
  squareClass = "";
  mounted() {
    if (this.isHighlighted && this.drawInitialActive) {
      this.squareClass = "active";
    }
  }
  handleClicked() {
    if (!this.drawInitialActive) {
      this.squareClass = this.squareClass === "active" ? "" : "active";
      this.$emit("square-clicked");
    }
  }
}
</script>
