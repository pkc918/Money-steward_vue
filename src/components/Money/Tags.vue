<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  background: #e4e9ef;

  > .current {
    display: flex;

    > li {
      background: #d9d9d9;
      height: 24px;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
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
