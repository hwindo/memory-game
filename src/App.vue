<template>
  <div id="app">
    <div class="app-container container">
      <div class="row w-100 text-left">
        <div class="col">
          <div class="score">
            Score: <span class="score__number">{{ score }}</span>
          </div>
        </div>
      </div>
      <Squares
        :score="score"
        :mode="mode"
        v-on:answer-right="handleAnswerRight"
        v-on:answer-wrong="handleAnswerWrong"
      ></Squares>
      <Actions
        :mode="mode"
        v-on:next="handleNext"
        v-on:answer-right="handleAnswerRight"
        v-on:answer-wrong="handleAnswerWrong"
      ></Actions>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Squares from "./components/Squares.vue";
import Actions from "./components/Actions.vue";
import { Mode } from "./models/mode";

@Component({
  components: {
    Squares,
    Actions
  }
})
export default class App extends Vue {
  mode = Mode.revealActives;
  appState = Mode;
  score = 0;

  handleNext(): void {
    switch (this.mode) {
      case this.appState.revealActives:
        this.mode = this.appState.showWord;
        break;
      case this.appState.showWord:
        this.mode = this.appState.answeringSquare;
        break;
      case this.appState.answeringSquare:
        this.mode = this.appState.answeringWord;
        break;
      case this.appState.answeringWord:
        this.mode = this.appState.rightAnswer;
        break;
      default:
        this.mode = this.appState.revealActives;
        break;
    }
    console.log(this.mode);
  }

  addScore() {
    this.score += 100;
  }

  handleAnswerRight() {
    this.addScore();
    this.handleNext();
    console.log("Right Answer!");
  }

  handleAnswerWrong() {
    this.handleNext();
    console.log("Wrong answer!");
  }
}
</script>

<style lang="scss">
body * {
  box-sizing: border-box;
}

.app-container {
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.score {
  font-size: 2rem;
}
</style>
