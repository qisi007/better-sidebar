<template>
  <div id="app" style="height: 2000px">
    <better-sidebar :topButton=topButton>
      <better-sidebar-item
        class="cell-box"
        icon="icon-gonggao iconfont"
        title="公告"
        popver="true"
        >插槽</better-sidebar-item
      >
      <better-sidebar-item
        class="cell-box"
        icon="icon-biaoge iconfont"
        title="统计"
        link="https://www.liuguisheng.vip"
      />
      <better-sidebar-item
        class="cell-box"
        icon="icon-huodong iconfont"
        title="活动"
      />
    </better-sidebar>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private topButton: boolean = true;
}
</script>

