<template>
  <div class="row square-container m-0 w-100">
    <template v-if="mode === 'revealActives'">
      <div class="col-4 square active">
        <a href="#" class="square__link"></a>
      </div>
      <div class="col-4 square"><a href="#" class="square__link"></a></div>
      <div class="col-4 square"><a href="#" class="square__link"></a></div>
      <div class="col-4 square"><a href="#" class="square__link"></a></div>
      <div class="col-4 square active">
        <a href="#" class="square__link"></a>
      </div>
      <div class="col-4 square"><a href="#" class="square__link"></a></div>
      <div class="col-4 square active">
        <a href="#" class="square__link"></a>
      </div>
      <div class="col-4 square"><a href="#" class="square__link"></a></div>
      <div class="col-4 square"><a href="#" class="square__link"></a></div>
    </template>

    <template v-else-if="mode === 'showWord'">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1>XYZ</h1>
      </div>
    </template>

    <template v-if="mode === 'answeringSquare'">
      <div class="col-4 square">
        <a @click="$emit('answer-right')" href="#" class="square__link"></a>
      </div>
      <div class="col-4 square">
        <a @click="$emit('answer-wrong')" href="#" class="square__link"></a>
      </div>
      <div class="col-4 square">
        <a @click="$emit('answer-wrong')" href="#" class="square__link"></a>
      </div>

      <div class="col-4 square">
        <a @click="$emit('answer-wrong')" href="#" class="square__link"></a>
      </div>
      <div class="col-4 square">
        <a @click="$emit('answer-right')" href="#" class="square__link"></a>
      </div>
      <div class="col-4 square">
        <a @click="$emit('answer-wrong')" href="#" class="square__link"></a>
      </div>

      <div class="col-4 square">
        <a @click="$emit('answer-right')" href="#" class="square__link"></a>
      </div>
      <div class="col-4 square">
        <a @click="$emit('answer-wrong')" href="#" class="square__link"></a>
      </div>
      <div class="col-4 square">
        <a @click="$emit('answer-wrong')" href="#" class="square__link"></a>
      </div>
    </template>

    <template v-else-if="mode === 'answeringWord'">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1>Which word was presented ?</h1>
      </div>
    </template>

    <template v-else-if="mode === 'rightAnswer'">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1>Great!, you are scored {{ score }}</h1>
      </div>
    </template>

    <template v-else-if="mode === 'wrongAnswer'">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1>You scored: {{ score }}</h1>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Squares extends Vue {
  @Prop() mode!: string;
  @Prop() score!: number;
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
