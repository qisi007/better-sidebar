<template>
  <div class="better-sidebar_item"
        @mouseover="onShowPopver"
        @mouseleave="onClosePopver"
        @click="onClickItem">
      <i :class="icon"></i>
      <p class="title">{{title}}</p>

      <div class="popver"
           :class="countPopverPostion"
           v-if="popverShow">
        <slot></slot>
      </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop  } from 'vue-property-decorator';
@Component
export default class BetterSidebarItem extends Vue {

  @Prop()
  icon!: string;

  @Prop()
  title!: string;

  @Prop({default: false})
  popver!: boolean;

  @Prop()
  link!: string;

  get countPopverPostion (): string {
    let parentPosition: string = (this.$parent as any).position;
    return parentPosition === 'left' ? 'popver-right' : 'popver-left';
  }

  private popverShow: boolean = false;

  private onShowPopver () {
    let { popver } = this;
    popver && (this.popverShow = true);
  }

  private onClosePopver () {
    let { popver } = this;
    popver && (this.popverShow = false);
  }

  private onClickItem () {
    let { link } = this;
    link && window.open(this.link)
  }

}
</script>