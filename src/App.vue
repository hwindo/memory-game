<template>
    <div id="app">
        <div class="app-container container">
            <div class="row w-100 text-left">
                <div class="col">
                    <div class="score">Score: <span class="score__number">0</span></div>
                </div>
            </div>
            <div class="row square-container m-0">
                <div class="col-4 square active"><a href="#" class="square__link"></a></div>
                <div class="col-4 square"><a href="#" class="square__link"></a></div>
                <div class="col-4 square"><a href="#" class="square__link"></a></div>
                <div class="col-4 square"><a href="#" class="square__link"></a></div>
                <div class="col-4 square active"><a href="#" class="square__link"></a></div>
                <div class="col-4 square"><a href="#" class="square__link"></a></div>
                <div class="col-4 square active"><a href="#" class="square__link"></a></div>
                <div class="col-4 square"><a href="#" class="square__link"></a></div>
                <div class="col-4 square"><a href="#" class="square__link"></a></div>
            </div>
            <div class="row actions text-center">
                <div class="mb-2">Remember highlighted squares</div>
                <a href="#" @click="handleNextFor('revealActives')" class="btn btn-outline-primary">I'm Ready</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld from "./components/HelloWorld.vue";

    @Component({
        components: {
            HelloWorld
        }
    })
    export default class App extends Vue {
        mode = "revealActives";
        handleNextFor(mode: string): void {
            this.mode = "showWord";
            console.log(this.mode);
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
    .actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 33%;
        font-size: 1rem;
    }
</style>
