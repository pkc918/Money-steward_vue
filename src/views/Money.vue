<template>
  <div>
    <Layout content-class="xxx">
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
      <FormItem
          placeholder="请输如备注信息"
          field-name="备注"
          :value.sync="record.notes"/>
      <Types :value.sync="record.type"/>
      <NumberPad :value.sync="record.amount" @update:record="saveRecord"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const recordList: RecordItem[] = model.fetch();
tagListModel.fetch();

@Component({
  components: {Tags, FormItem, Types, NumberPad}
})
export default class Money extends Vue {
  tags = tagListModel.data;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
  recordList: RecordItem[] = recordList;

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  saveRecord() {
    const deepClone: RecordItem = model.clone(this.record);
    deepClone.createdAt = new Date();
    this.recordList.push(deepClone);
  }

  @Watch('recordList')
  addRecordListChange() {
    model.save(this.recordList);
  }
}
</script>

<style lang="scss" scoped>
</style>
