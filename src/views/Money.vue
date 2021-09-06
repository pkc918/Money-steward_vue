<template>
  <div>
    <Layout content-class="xxx">
      <Tags/>
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
import {Component} from 'vue-property-decorator';

@Component({
  components: {Tags, FormItem, Types, NumberPad},
})
/*
* 目前为止
* store 里全是引用类型，所以可以直接 store使用，且会变化store里的[]
* 当 store 里有个值类型时，继续通过 store 里 api 改变值，在这个组件里拿不到最新值
* 可以现在 App.vue 里挂载 store 让它被 vue 监听
* 使用 computed 来对值类型复制 count (){return store.count}
* */
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  created() {
    this.$store.commit('fetchRecords');
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }
}
</script>

<style lang="scss" scoped>
</style>
