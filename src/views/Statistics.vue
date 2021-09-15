<template>
  <Layout>
    <Tabs class-prefix="type"
          :data-source="recordTypeList"
          :value.sync="type"
    />
    <!--    <Tabs class-prefix="interval"-->
    <!--          :data-source="intervalList"-->
    <!--          :value.sync="interval"-->
    <!--    />-->
    <ol>
      <li v-for="group in groupList" :key="group.title">
        <h3 class="title">{{ beautify(group.title) }}<span>￥{{ group.total }}</span></h3>
        <ol>
          <li
              class="record"
              v-for="item in group.items"
              :key="item.id">
            <span>{{ item.tags.length === 0 ? '无' : item.tags.join(',') }}</span>
            <span class="note">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
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
// import intervalList from '@/constants/intervalList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }


  get groupList() {
    type sourceItem = {
      title: string;
      total?: number;
      items: [RecordItem];
    }
    const {recordList} = this;
    const newList = clone(recordList).filter(v => v.type === this.type).sort(({createdAt: a}, {createdAt: b}) => dayjs(b).valueOf() - dayjs(a).valueOf());
    return newList.reduce((prev: sourceItem[], next: RecordItem) => {
      const {createdAt} = next || {};
      const date = dayjs(createdAt).format('YYYY-MM-DD');
      const source: sourceItem | undefined = prev.find(({title}) => title === date);
      if (source) {
        source.items.push({...next});
        source.total = source.items.reduce((sum, item) => sum + item.amount, 0);
      } else {
        prev.push({'title': date, total: next.amount, items: [{...next}]});
      }
      return prev;
    }, []);
  }

  type = '-';
  // interval = 'day';
  // intervalList = intervalList;
  recordTypeList = recordTypeList;

  created() {
    this.$store.commit('fetchRecords');
  }

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
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

%item {
  height: 40px;
  padding: 0 16px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
  background: #99c5e8;
  border-bottom: 1px solid rgba(255, 255, 255, .3);
}

.record {
  background: #bdd067;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  @extend %item;
}

.note {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  overflow: hidden; // 多余不显示
  text-overflow: ellipsis; // 省略号
  white-space: nowrap; // 不换行
}
</style>
