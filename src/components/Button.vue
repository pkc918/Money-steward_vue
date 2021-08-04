<template>
  <button class="button" @click="$emit('click', $event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
}
</style>
