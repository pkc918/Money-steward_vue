// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class TagHelper extends Vue {
  createTag() {
    const tagName = window.prompt('请输入新增标签名！！！')!;
    !tagName.trim() && window.alert('标签名不能位空');
    this.$store.commit('createTag', tagName);
  }
}
