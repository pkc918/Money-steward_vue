<template>
  <Layout>
    <Tabs class-prefix="type"
          :data-source="recordTypeList"
          :value.sync="type"
    />
    <Tabs class-prefix="interval"
          :data-source="intervalList"
          :value.sync="interval"
    />
    <ol>
      <li v-for="group in result" :key="group.title" >
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li
              class="record"
              v-for="item in group.items"
              :key="item.id">
            <span>{{ item.tags.length === 0 ? '无' : item.tags.join(',')}}</span>
            <span class="note">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>


<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import intervalList from '@/constants/intervalList';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordItem[] }
    const hashTable: {[key: string]: HashTableValue} = {}
    for (let i = 0; i < recordList.length; i ++) {
      const [date] = recordList[i].createdAt!.split('T');
      // 没有值，就给空数组，一定要有时间
      hashTable[date] = hashTable[date] || {title: date, items:[]};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }
  type = '-';
  interval = 'day';
  recordTypeList = recordTypeList;
  intervalList = intervalList;

  created() {
    this.$store.commit('fetchRecords');
  }
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background-color: #fbee83;

  &.selected {
    background-color: #bdd067;

    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item {
  height: 42px;
}
%item{
  height: 40px;
  padding: 0 16px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: #fbee83;
  @extend %item;
}
.note{
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  overflow: hidden; // 多余不显示
  text-overflow: ellipsis; // 省略号
  white-space: nowrap; // 不换行
}
</style>
