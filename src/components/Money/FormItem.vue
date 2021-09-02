<template>
  <div>
    <label class="formItem">
      <span class="name">{{ fieldName }}</span>
      <input
          type="text"
          :placeholder="placeholder"
          :value="value"
          @input="onValueChanged($event.target.value)"
      >
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string
  @Prop() placeholder?: string
  @Prop({required: true}) fieldName!: string

  onValueChanged(value: string) {
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    background-color: transparent;
    border: none;
    padding-right: 16px;
    flex: 1;
  }
}

</style>
