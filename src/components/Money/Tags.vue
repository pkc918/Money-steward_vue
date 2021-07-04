<template>
  <div class="tags">
    <ul class="current">
      <li
          v-for="tag in dataSource"
          :key="tag"
          :class="{selected: selectedTags.includes(tag)}"
          @click="select(tag)"
      >{{tag}}</li>
    </ul>
    <div class="new">
      <button @click="addTagName">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue{
  @Prop(Array) readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];
  select(tag: string){
    const index = this.selectedTags.findIndex(item => item === tag)
    index >= 0 ? this.selectedTags.splice(index,1) : this.selectedTags.push(tag)
    console.log(this.selectedTags);
  }
  addTagName(){
    const tagName = window.prompt('请输入新增标签名！！！')!;
    tagName.trim() === '' && window.alert('标签名不能位空');
    if (this.dataSource){
      this.$emit('update:dataSource',[...this.dataSource,tagName])
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  background: #e4e9ef;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      min-width: 46px;
      height: 24px;
      line-height: 24px;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
      margin-bottom: 12px;
      white-space: normal;

      &.selected{
        background-color: #fd6174;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
    }
  }
}
</style>
