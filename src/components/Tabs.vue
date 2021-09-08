<template>
  <ul class="tabs">
    <!--  使用变量要使用 [变量，语句]: boolean    -->
    <li
        class="tabs-item"
        :class="liClass(item)"
        v-for="item in dataSource"
        :key="item.value"
        @click="select(item)"
    >{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = {
  text: string;
  value: string;
}

@Component
export default class Tabs extends Vue {
  // 强制传属性，!: 不需要初始化
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem) {
    return {[this.classPrefix + '-tabs-item']: this.classPrefix, selected: item.value === this.value};
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #bdd067;
  display: flex;
  text-align: center;

  &-item {
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
      background-color: #707175;
    }
  }
}

</style>
