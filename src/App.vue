<template>
  <div id="app">
    <template v-if="launchScreen">
      <LaunchScreen></LaunchScreen>
    </template>
    <template v-else>
      <div class="app-container container">
        <div class="row w-100 text-left">
          <div class="col">
            <div class="score">
              Score: <span class="score__number">{{ score }}</span>
            </div>
          </div>
        </div>
        <Squares :game="game" :mode="mode" :score="score"></Squares>
        <Actions
          :game="game"
          :mode="mode"
          v-on:next="handleNext"
          v-on:word-select="handleWordSelect"
        ></Actions>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { default as GameBrain, Game } from "./models/GameBrain";
import LaunchScreen from "./components/LaunchScreen.vue";
import Squares from "./components/Squares.vue";
import Actions from "./components/Actions.vue";
import { Mode } from "./Konstants";

@Component({
  components: {
    LaunchScreen,
    Squares,
    Actions,
  },
})
export default class App extends Vue {
  mode = Mode.revealActives;
  appState = Mode;
  launchScreen = true;
  gameBrain = GameBrain.getInstance();

  mounted() {
    setTimeout(() => {
      this.launchScreen = false;
    }, 1618);
  }

  get game(): Game {
    return this.gameBrain.currentGame();
  }

  get score(): number {
    return this.gameBrain.getScore();
  }

  get nextLevel(): boolean {
    return this.gameBrain.nextLevel();
  }

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
      case this.appState.rightAnswer:
        if (this.nextLevel) {
          this.mode = this.appState.revealActives;
        } else {
          this.mode = this.appState.finalScore;
        }
        break;
      case this.appState.finalScore:
        this.gameBrain.reset();
        this.mode = this.appState.revealActives;
        break;
      default:
        this.mode = this.appState.revealActives;
    }
  }

  handleWordSelect(word: string) {
    console.log('word-select:', word);
    this.gameBrain.calculateWord(word, (wordIsRight: boolean) => {
      if (wordIsRight && this.nextLevel) {
        console.log(wordIsRight);
        console.log(this.nextLevel);
        this.mode = this.appState.rightAnswer;
      } else {
        console.log("WRONG answer");
        this.mode = this.appState.finalScore;
      }
    });
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
  animation: zoom 0.618s forwards;
}

.score {
  font-size: 2rem;
}
@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(1.618);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
