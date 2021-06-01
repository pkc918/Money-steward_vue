<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"></Icon>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">

export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: rgb(0 0 0 / 25%) 0 0 3px;
  background: rgb(249, 225, 187);
  > .item{
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2px 0;
    color: rgb(51, 51, 51);
    > .icon{
      width: 28px;
      height: 28px;
    }
  }
  > .selected{
    color: $color-highlight;
  }
}
</style>
