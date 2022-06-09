<template>
  <div class="entry-title d-flex justify-content-left align-items-baseline p-2">
    <span class="text-success fs-3 fw-bold">09</span>
    <span class="mx-1 fs-3">June</span>
    <span class="mx-2 fs-4 fw-light">2022, Thursday</span>
  </div>
  <div class="">
    <button class="btn btn-danger mx-2">
      <i class="fa fa-trash-alt"></i>
      Delete
    </button>
    <button class="btn btn-secondary text-white mx-2">
      <i class="fa fa-upload"></i>
      Upload Image
    </button>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea
      class="area-color"
      placeholder="What happened?"
      id=""
      cols="30"
      rows="10"
    ></textarea>
  </div>

  <Fab icon="fa-save" />

  <img
    class="img-thumbnail img-position"
    src="https://img.myloview.es/fotomurales/encinas-en-el-cerro-mingamorena-pelahustan-toledo-espana-europa-700-212590059.jpg"
    alt="entry picture"
  />
</template>

<script>
  import { defineAsyncComponent } from 'vue';

  export default {
    components: {
      Fab: defineAsyncComponent(() => import('../components/Fab')),
    },
  };
</script>

<style lang="scss" scoped>
  .area-color {
    background: #343a40;
    border: none;
    color: aliceblue;
    font-size: 1.2rem;
    padding: 0.8rem;
    resize: none;

    &:focus {
      outline: none;
    }
  }

  .img-position {
    bottom: 125px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 20px;
    width: 200px;
  }
</style>
