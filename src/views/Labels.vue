<template>
  <Layout>
    <ol>
      <li v-for="tag in tags" :key="tag" @click="editTag">
        <span>{{ tag }}</span>
        <Icon name="edit"/>
      </li>
    </ol>
    <div class="btn">
      <button @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();

@Component
export default class Labels extends Vue {
  tags = tagListModel.data;
  messageObj = {
    duplicated: () => {window.alert('标签已经存在');},
    success: () => {window.alert('添加成功');}
  };

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name?.trim()) {
      const message = tagListModel.create(name);
      this.messageObj[message]?.();
    }
  }

  editTag() {
    console.log('edit');
  }
}

</script>

<style lang="scss" scoped>
ol {
  padding: 5px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px;
    line-height: 20px;
    border-radius: 10px;
    background: rgb(251, 238, 131);
    margin-bottom: 5px;
  }
}

.btn {
  text-align: center;

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
  }
}


</style>
