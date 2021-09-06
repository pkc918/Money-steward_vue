<template>
  <div class="tags">
    <ul class="current">
      <li
          v-for="tag in tagList"
          :key="tag.id"
          :class="{selected: selectedTags.includes(tag)}"
          @click="select(tag)"
      >{{ tag.name }}
      </li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {TagHelper} from '@/mixins/TagHelper';
import {mixins} from 'vue-class-component';

@Component
export default class Tags extends mixins(TagHelper) {
  get tagList() {
    return this.$store.state.tagList;
  }

  // dataSource!: string[]  只能为 string[]，不可能为空
  // @Prop({required: true}) readonly dataSource!: string[];
  selectedTags: string[] = [];

  created() {
    this.$store.commit('fetchTags');
  }

  select(tag: string) {
    const index = this.selectedTags.findIndex(item => item === tag);
    index >= 0 ? this.selectedTags.splice(index, 1) : this.selectedTags.push(tag);
    // this.$emit('update:value', this.selectedTags);
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

      &.selected {
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
