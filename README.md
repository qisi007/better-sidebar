# better-sidebar(侧边栏工具)

### 下载依赖

```
npm i better-sidebar --save
```
<br/>

### 引用

```
import Vue from "vue";
import BetterSidebar from "better-sidebar";
import "better-sidebar/dist/lib/better-sidebar.css";

Vue.use(BetterSidebar);
```
<br/>

### better-sidebar 组件介绍

属性 | 类型 | 可选值 | 默认值 | 描述
-- | -- | -- | -- | --
top | number | - | 100 | 侧边栏距离浏览器顶部的位置
position | string | left/right | right |侧边栏的位置
topButton | boolean | true/false | true | 是否显示返回顶部按钮

<br/>

### better-sidebar-item 组件介绍

属性 | 类型 | 可选值 | 默认值 | 描述
-- | -- | -- | -- | --
icon | string | - | - | 图标字体(该依赖不提供,需要自行下载,引入项目中)
title | string | - | - | 文字
popver | boolean | true/false | false | 是否显示弹出层
link | string | - | - | 点击跳转到新的页面地址

<br/>


### 使用

```
<template>
    <better-sidebar>
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
</template>

```
<br/>

### 开源协议
[MIT License](https://github.com/qisi007/better-sidebar/blob/main/LICENSE)

<br/>

### github地址
[地址](https://github.com/qisi007/better-sidebar)
