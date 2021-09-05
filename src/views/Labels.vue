<template>
  <Layout>
    <div class="tags">
      <router-link
          class="tag"
          v-for="tag in tags"
          :to="`/labels/edit/${tag.id}`"
          :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="edit"/>
      </router-link>
    </div>
    <div class="btn">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {store} from '@/store/index2';

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = store.tagList;
  created(){
    console.log(this.tags,'222');
  }

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name?.trim()) {
      store.createTag(name);
    }
  }
}

</script>

<style lang="scss" scoped>
.tags {
  padding: 5px;

  .tag {
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
}


</style>
