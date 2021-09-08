<template>
  <div>
    <ul class="types">
      <!--  使用变量要使用 [变量，语句]: boolean    -->
      <li
          :class="{[classPrefix +'-item']: classPrefix,selected: value === '-'}"
          @click="selectType('-')"
      >支出
      </li>
      <li
          :class="{[classPrefix + '-item']: classPrefix, selected: value === '+'}"
          @click="selectType('+')"
      >收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  /*
  * String 运行时类型
  * string | undefined 编译时类型
  */
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  selectType(type: string) {
    /* '-': 支出，'+': 收入 */
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', type);
  }

  @Watch('type')
  onTypeChanged(value: string) {
    this.$emit('update:value', value);
  }
}
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
      background-color: #707175;
    }
  }
}

</style>
