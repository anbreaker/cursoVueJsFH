<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">September</span>
      <span class="mx-2 fs-4 fw-light">21</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Update Image
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="what happened today?"></textarea>
  </div>

  <FloatingActionButton icon="fa-save"></FloatingActionButton>

  <img
    src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
    alt="Entry Picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters } from "vuex";

export default {
  name: "EntryView",
  props: {
    id: {
      type: String,
      required: true
    }
  },

  components: {
    FloatingActionButton: defineAsyncComponent(() =>
      import("../components/FloatingActionButton.vue")
    )
  },
  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id);
      console.log(entry);
    }
  },

  computed: {
    ...mapGetters("journal", ["getEntryById"])
  },
  created() {
    // console.log(this.$route.params.id)
    console.log(this.loadEntry(), "<--");
  }
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>