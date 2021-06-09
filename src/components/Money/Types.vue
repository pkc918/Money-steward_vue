<template>
  <div>
    <ul class="types">
      <li
          :class="type === '-' && 'selected'"
          @click="selectType('-')"
      >支出
      </li>
      <li
          :class="type === '+' && 'selected'"
          @click="selectType('+')"
      >收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  // 装饰器
  @Prop(String) xxx: string | undefined;
  /*
  * String 运行时类型
  * string | undefined 编译时类型
  */
  type = '-';

  selectType(type: string) {
    /* '-': 支出，'+': 收入 */
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }

  mounted() {
    // this.xxx 可能为 undefined，不做判断就会报错
    if (this.xxx === undefined){
      console.log(this.xxx);
    }else {
      console.log(this.xxx);
    }
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
