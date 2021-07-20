<template>
  <div class="layout-wrapper" :class="contentClass && `${contentClass}-wrapper`">
    <div class="content" :class="contentClass && `${contentClass}-content`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Layout',
  props: ['contentClass']
};
</script>

<style lang="scss" scoped>
.xxx-content{
  display: flex;
  flex-direction: column;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #e3a297;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>
