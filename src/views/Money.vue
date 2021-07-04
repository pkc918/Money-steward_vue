<template>
  <div>
    <Layout content-class="xxx">
      <Tags :data-source.sync="tags" />
      <Notes/>
      <Types xxx="+" />
      <NumberPad/>
    </Layout>
  </div>
</template>

<script lang="ts">

import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: 'Money',
  components: {Tags, Notes, Types, NumberPad},
  data(){
    return{
      tags:['衣','食','住','行']
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
