<template>
  <form @submit.prevent="createHouse" class="row justify-content-between">
    <div class="mb-3 col-2">
      <label for="" class="form-label">Price</label>
      <input type="number" class="form-control" name="" id="" v-model="editable.price" aria-describedby="helpId"
        placeholder="">
      <small id="helpId" class="form-text text-muted"></small>
    </div>
    <div class="mb-3 col-2">
      <label for="" class="form-label">Bedrooms</label>
      <input type="number" class="form-control" name="" id="" v-model="editable.bedrooms" aria-describedby="helpId"
        placeholder="">
      <small id="helpId" class="form-text text-muted"></small>
    </div>
    <div class="mb-3 col-2">
      <label for="" class="form-label">Bathrooms</label>
      <input type="number" class="form-control" name="" id="" v-model="editable.bathrooms" aria-describedby="helpId"
        placeholder="">
      <small id="helpId" class="form-text text-muted"></small>
    </div>
    <div class="mb-3 col-2">
      <label for="" class="form-label">levels</label>
      <input type="number" class="form-control" name="" id="" v-model="editable.levels" aria-describedby="helpId"
        placeholder="">
      <small id="helpId" class="form-text text-muted">Help text</small>
    </div>
    <div class="mb-3 col-2">
      <label for="" class="form-label">Year</label>
      <input type="number" class="form-control" name="" id="" v-model="editable.year" aria-describedby="helpId"
        placeholder="">
      <small id="helpId" class="form-text text-muted">Help text</small>
    </div>
    <div class="mb-3 col-12">
      <label for="" class="form-label">House Image</label>
      <input type="url" class="form-control" name="" id="" v-model="editable.imgUrl" aria-describedby="helpId"
        placeholder="">
      <img class="img-fluid" alt="">
    </div>
    <div class="mb-3 col-12">
      <label for="" class="form-label">Description</label>
      <textarea name="" id="" class="form-control" v-model="editable.description" rows="3"></textarea>
      <small id="helpId" class="form-text text-muted">Help text</small>
    </div>
    <div class="mb-3 col-4">
      <button class="btn  w-100 rounded-pill selectable text-danger darken-20" type="button">Cancel</button>
    </div>
    <div class="mb-3 col-4">
      <button class="btn btn-primary w-100 rounded-pill">Create</button>
    </div>
  </form>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, handleError } from 'vue';
import { houseService } from "../services/HouseService.js";
import Pop from "../utils/Pop.js";

export default {
  props: { houseData: { type: Object, default: {} } },
  setup() {
    onMounted(() => {
      editable = props.houseData
    })
    const editable = reactive({})
    async function createHouse() {
      try {
        await houseService.createHouse(editable)
        Pop.toast('create house', 'success')
      } catch (error) {
        logger.log(error)
        Pop.error(error)
      }
    }
    return {
      editable,
    }
  }
};

</script>


<style lang="scss" scoped>

</style>