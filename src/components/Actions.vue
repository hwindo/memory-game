<template>
  <div class="row actions text-center">
    <template v-if="mode === 'revealActives'">
      <div class="actions__instruction-text mb-2">
        Remember highlighted squares
      </div>
      <a href="#" @click="$emit('next')" class="btn btn-lg btn-outline-primary"
        >I'm Ready</a
      >
    </template>
    <template v-else-if="mode === 'showWord'">
      <div class="actions__instruction-text mb-2">Remember word</div>
      <a href="#" @click="$emit('next')" class="btn btn-lg btn-outline-primary"
        >I Remember, Next</a
      >
    </template>
    <template v-else-if="mode === 'answeringSquare'">
      <div class="actions__instruction-text mb-2">
        Click on the square you remember
      </div>
    </template>
    <template v-else-if="mode === 'answeringWord'">
      <div class="actions__instruction-text mb-2"></div>
      <a
        href="#"
        @click="$emit('answer-wrong')"
        class="btn btn-lg mt-4 mb-3 btn-block btn-warning"
        >ABC</a
      >
      <a
        href="#"
        @click="$emit('answer-right')"
        class="btn btn-lg mb-3 btn-block btn-info"
        >XYZ</a
      >
      <a
        href="#"
        @click="$emit('answer-wrong')"
        class="btn btn-lg mb-3 btn-block btn-success"
        >GHI</a
      >
      <a
        href="#"
        @click="$emit('answer-wrong')"
        class="btn btn-lg mb-3 btn-block btn-primary"
        >KUM</a
      >
    </template>
    <template v-else-if="mode === 'rightAnswer'">
      <div class="actions__instruction-text mb-2">Let's Play Again</div>
      <a href="#" @click="$emit('next')" class="btn btn-lg btn-outline-primary"
        >Play Again</a
      >
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Actions extends Vue {
  @Prop() mode!: string;
}
</script>

<style lang="scss">
.actions {
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
</style>
