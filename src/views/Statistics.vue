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
  </Layout>
</template>


<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Money/Types.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import intervalList from '@/constants/intervalList';

@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day'
  recordTypeList = recordTypeList
  intervalList = intervalList
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

</style>
