<template>
  <div class="row actions text-center">
    <template v-if="mode === actionState.revealActives">
      <div class="actions__instruction-text mb-2">
        Remember highlighted squares
      </div>
      <a href="#" @click="$emit('next')" class="btn btn-lg btn-outline-primary"
        >I'm Ready</a
      >
    </template>
    <template v-else-if="mode === actionState.showWord">
      <div class="actions__instruction-text mb-2">Remember word</div>
      <a href="#" @click="$emit('next')" class="btn btn-lg btn-outline-primary"
        >I Remember, Next</a
      >
    </template>
    <template v-else-if="mode === actionState.answeringSquare">
      <div class="actions__instruction-text mb-2">
        Click on the {{ countHighlightedSquare }} square you remember
        <br />
        <small>hint: click again to toggle highlight</small>
      </div>
      <button
        href="#"
        :disabled="disableNext"
        @click="handleSquareCommit"
        class="btn btn-lg btn-success"
      >
        Finish
      </button>
    </template>
    <template v-else-if="mode === actionState.answeringWord">
      <div class="actions__instruction-text mb-2"></div>
      <template v-for="(word, index) in game.words">
        <a
          href="#"
          :key="index"
          @click="handleWordSelect(word)"
          :class="buttonClass(index)"
          >{{ word }}</a
        >
      </template>
    </template>
    <template v-else-if="mode === actionState.rightAnswer">
      <div class="actions__instruction-text mb-2">Next Level</div>
      <a href="#" @click="$emit('next')" class="btn btn-lg btn-primary"
        >Let's Go</a
      >
    </template>

    <template v-else-if="mode === actionState.finalScore">
      <div class="actions__instruction-text mb-2">Let's Play Again</div>
      <a href="#" @click="$emit('next')" class="btn btn-lg btn-primary"
        >Play Again</a
      >
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mode } from "../Konstants";
import { default as GameBrain, Game } from "../models/GameBrain";

@Component
export default class Actions extends Vue {
  actionState = Mode;
  gameBrain = GameBrain.getInstance();
  @Prop() mode!: Mode;
  @Prop() game!: Game;

  get countHighlightedSquare(): number {
    return this.game.highlightedSquares.length;
  }

  get disableNext(): boolean {
    return this.gameBrain.canSelectSquare();
  }
  handleSquareCommit() {
    this.gameBrain.calculateSquare();
    this.$emit("next");
  }
  buttonClass(index: number) {
    let color: string;
    switch (index) {
      case 0:
        color = "warning";
        break;
      case 1:
        color = "info";
        break;
      case 2:
        color = "success";
        break;
      default:
        color = "primary";
    }
    return `btn btn-lg font-lg mt-4 mb-3 btn-block btn-${color}`;
  }
  handleWordSelect(word: string) {
    // code
    this.$emit('word-select', word);
  }
}
</script>

<style lang="scss">
.actions {
  flex: 2;
  display: flex;
  width: 61.8%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 33%;
  font-size: 1rem;
  &__instruction-text {
    font-size: 1.618rem;
  }
}
.btn-lg {
  font-size: 3.618rem;
}
</style>
