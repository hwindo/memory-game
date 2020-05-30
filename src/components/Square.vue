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
  @Prop() canSelectSquare!: boolean;
  squareClass = "";
  mounted() {
    if (this.isHighlighted && this.drawInitialActive) {
      this.squareClass = "active";
    }
  }
  handleClicked() {
    if (this.drawInitialActive) {
      return;
    }
    if (this.canSelectSquare || this.squareClass === "active") {
      this.squareClass = this.squareClass === "active" ? "" : "active";
      this.$emit("square-clicked");
    }
  }
}
</script>

<style lang="scss">
.square {
  display: block;
  min-width: 50px;
  min-height: 12.5vw;
  border: 1px solid black;
  padding: 0 !important;

  &__link {
    display: block;
    width: 100%;
    height: 100%;

    .active & {
      background-color: lightgreen;
    }
    .active &:hover {
      background-color: lightseagreen;
    }

    &:hover {
      background-color: lightblue;
    }
  }
}
</style>
