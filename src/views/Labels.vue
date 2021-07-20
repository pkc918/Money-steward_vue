<template>
  <Layout>
    <ol>
      <li>
        <span>衣</span>
        <Icon name="edit" />
      </li>
      <li>
        <span>食</span>
        <Icon name="edit" />
      </li>
      <li>
        <span>住</span>
        <Icon name="edit" />
      </li>
      <li>
        <span>行</span>
        <Icon name="edit" />
      </li>
    </ol>
    <div class="btn">
      <button>新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';

@Component
export default class Labels extends Vue {

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
.btn{
  text-align: center;

  button{
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
  }
}


</style>
