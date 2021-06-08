<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Types'
};
</script>

<style lang="scss" scoped>
.types {
  background: #bdd067;
  display: flex;
  text-align: center;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}

</style>
