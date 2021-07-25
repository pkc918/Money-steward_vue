<template>
  <Layout>
    <div class="editLabel">
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

@Component
export default class EditLable extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(item => item.id === id)[0];
    !tag && this.$router.replace('/404');
  }
}
</script>

<style lang="scss" scoped>
.editLabel {
  width: 100%;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9e1bb;
}
</style>
