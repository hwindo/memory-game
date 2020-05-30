<template>
  <div class="row square-container m-0 w-100">
    <template v-if="mode === squareState.revealActives">
      <template v-for="(n, index) in game.numberOfSquares">
        <Square
          :key="index"
          :class="squareClass"
          :is-highlighted="isHighlighted(index)"
          :draw-initial-active="drawInitialActive"
          @square-clicked="squareClicked(index)"
        ></Square>
      </template>
    </template>

    <template v-else-if="mode === squareState.showWord">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1>{{ game.word.toUpperCase() }}</h1>
      </div>
    </template>

    <template v-else-if="mode === squareState.answeringSquare">
      <template v-for="(n, index) in game.numberOfSquares">
        <Square
          :key="index"
          :class="squareClass"
          :is-highlighted="isHighlighted(index)"
          :draw-initial-active="drawInitialActive"
          @square-clicked="squareClicked(index)"
        ></Square>
      </template>
    </template>

    <template v-else-if="mode === squareState.answeringWord">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1>Which word was presented ?</h1>
      </div>
    </template>

    <template v-else-if="mode === squareState.rightAnswer">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1>Great!, you are scored {{ score }}</h1>
      </div>
    </template>

    <template v-else-if="mode === squareState.wrongAnswer">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1>You scored: {{ score }}</h1>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mode } from "../Konstants";
import { default as GameBrain, Game } from "../models/GameBrain";
import Square from "./Square.vue";

@Component({
  components: {
    Square,
  },
})
export default class Squares extends Vue {
  squareState = Mode;
  @Prop() game!: Game;
  @Prop() mode!: Mode;
  @Prop() score!: number;

  get column() {
    switch (this.game.numberOfSquares) {
      case 9:
        return 4;
      case 16:
        return 3;
      case 25:
        return 2;
      case 36:
        return 2;
      case 144:
        return 1;
      default:
        return 3;
    }
  }

  isHighlighted(index: number): boolean {
    return this.game.highlightedSquares.includes(index);
  }
  get drawInitialActive(): boolean {
    return this.mode === Mode.revealActives;
  }
  get squareClass(): string {
    return `col-${this.column} square`;
  }
  squareClicked(index: number) {
    console.log(`squareClicked ${index}`);
    GameBrain.addSquare(index);
  }
}
</script>

<style lang="scss">
.square-container {
  flex-grow: 4;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid;
}

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

    &:hover {
      background-color: #42b983;
    }
  }
}
</style>
