<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input
          type="text"
          :placeholder="this.placeholder"
          v-model="notes"
      >
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string
  @Prop() placeholder?: string
  @Prop({required: true}) fieldName!: string
  notes = this.value;

  @Watch('notes')
  onValueChanged(notes: string) {
    this.$emit('update:value',notes)
  }
}
</script>

<style lang="scss" scoped>
.notes {
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
