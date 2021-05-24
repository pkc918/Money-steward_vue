<template>
  <div>
    <Layout>
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
      <div>
        <label>
          <span class="name">备注</span>
          <input type="text">
        </label>
      </div>
      <div>
        <ul class="a">

        </ul>
      </div>
      <div>number pad</div>
    </Layout>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>
</style>
