<template>
  <div
    class="better-sidebar"
    :style="{
      top: top + 'px',
    }"
    :class="position"
  >
    <slot></slot>
    <div class="top-box" 
         @click="onGoToTop"
         v-if="topButton">
      <i>^</i>
      <p class="words">TOP</p>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class BetterSidebar extends Vue {
  @Prop({ default: 100 })
  top!: number;

  @Prop({ default: "right" })
  position!: string;

  @Prop({default: true})
  topButton!: boolean;

  private onGoToTop() {
    let timer: any;
    clearInterval(timer);
    timer = setInterval(function () {
      let scrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      let speed = -(scrollHeight / 14);
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (scrollHeight === 0) clearInterval(timer);
      document.documentElement.scrollTop = scrollHeight + speed;
      document.body.scrollTop = scrollHeight + speed;
    }, 14);
    window.onmousewheel = function () {
      clearInterval(timer);
    };
  }
}
</script>