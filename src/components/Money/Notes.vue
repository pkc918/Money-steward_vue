<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input
          type="text"
          placeholder="备注信息"
          v-model="notes"
      >
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop({default: ''}) readonly value!: string
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
  background: #bea39c;
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
