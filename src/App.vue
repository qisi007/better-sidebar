<template>
  <div id="app" style="height: 2000px;">
    <div style="height: 800px;background: pink"></div>
    <div style="height: 800px;background: yellow"></div>
    <div style="height: 800px;background: #ccc"></div>
    <better-sidebar :topButton=topButton>
      <better-sidebar-item
        class="cell-box"
        icon="icon-gonggao iconfont"
        title="公告"
        popver="true"
        ><img src="https://img-blog.csdnimg.cn/20191201090129350.jpg" alt=""></better-sidebar-item
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
      <better-sidebar-item
        class="cell-box"
        icon="icon-fuli iconfont"
        title="来源"
        link="https://www.allqj.com"
      />
      <better-sidebar-item
        class="cell-box"
        icon="icon-yijianfankui iconfont"
        title="意见反馈"
        link="https://www.allqj.com"
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

