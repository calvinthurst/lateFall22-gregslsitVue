<template>
  <div class="component">
    <div class=" bg-light elevation-2 text-center">
      <img :src="house.imgUrl" alt="">

    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  props: { house: { type: Object, required: true } },
  setup() {
    return {
      house: computed(() => AppState.houses)

    }
  }
};
</script>


<style lang="scss" scoped>

</style>