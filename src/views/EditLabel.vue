<template>
  <Layout>
    <div class="editLabel">
      <Icon class="leftIcon" name="left"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem
          placeholder="请输如标签名"
          field-name="标签名"
      />
    </div>
    <div class="deleteBtn" >
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, FormItem}
})
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9e1bb;

  .leftIcon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }
}
.form-wrapper{
  margin-top: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #fbee83;
}
.deleteBtn{
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>
