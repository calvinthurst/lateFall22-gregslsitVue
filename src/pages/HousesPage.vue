<template>
  <div class="container-fluid">
    <h1 class="text-center text-primary"> House</h1>
    <section class="row justify-content-center">
      <div class="col-8 bg-white">
        <HouseForm />
      </div>
    </section>
    <div class="row">
      <div v-for="h in houses" class="col-md-4 p-2">
        <HouseCard :house="h" />
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { houseService } from "../services/HouseService.js"
import { api } from "../services/AxiosService.js";
export default {

  setup() {
    async function getHouses() {
      try {
        await houseService.getHouses()
      } catch (error) {
        logger.log(error)
        Pop.error(error)
      }
    }
    onMounted(() => {
      getHouses()
    })
    return {
      cars: computed(() => AppState.houses)
    };
  },
};
</script>


<style lang="scss" scoped>

</style>
