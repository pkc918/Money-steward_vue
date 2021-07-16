<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons" @click="inputContent">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop({default: 0}) readonly value!: number;
  output = this.value.toString();

  // 鼠标事件类型，点击才有的 event
  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement); // 强制为 HTMLButtonElement 类型
    const content: string = button.textContent!; // 除去 null，不可能为空

    switch (content) {
      case '.':
        if (this.output.indexOf('.') >= 0) {
          return;
        }
        this.output += content;
        break;
      case '清空':
        this.output = '0';
        break;
      case '删除':
        if (this.output.length === 1) {
          this.output = '0';
          return;
        }
        this.output = this.output.slice(0, -1);
        break;
      case 'OK':
        this.$emit('update:value', this.output);
        break;
      default:
        if (this.output === '0') {
          if ('0123456789'.indexOf(content) >= 0) {
            this.output = content;
            return;
          }
        }
        this.output += content;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  background: $numberPad-color;

  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    background: #fb9a7f;
    box-shadow: inset 0 -6px 6px -5px rgba(0, 0, 0, 0.25),
    inset 0 6px 6px -5px rgba(0, 0, 0, 0.25);
  }

  .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      font-size: 16px;
      font-weight: 600;
      border: 1px solid #fff;

      &.ok {
        height: 64*2px;
        float: right;
      }

      // 颜色函数，使某个颜色变暗 百分比
      // darken('#fff',4%);
      &.zero {
        width: 25*2%;
      }
    }
  }
}
</style>
