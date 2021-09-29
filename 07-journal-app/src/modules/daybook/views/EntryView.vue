<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ dayMonthYear.day }}</span>
        <span class="mx-1 fs-3">{{ dayMonthYear.month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ dayMonthYear.yearDay }}</span>
      </div>

      <input
        type="file"
        @change="onSelectedImage"
        accept="image/png, image/jpeg, image/jpg"
        v-show="false"
        ref="imageSelector"
      />

      <div>
        <button
          v-if="entry.id"
          class="btn btn-danger mx-2"
          @click="onDeleteEntry"
        >
          Delete
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary" @click="onSelectImage">
          Update Image
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="what happened today?" v-model="entry.text">
      </textarea>
    </div>
  </template>

  <FloatingActionButton icon="fa-save" @on:click="saveEntry" />

  <img
    v-if="entry.picture && !localImage"
    :src="entry.picture"
    alt="Entry Picture"
    class="img-thumbnail"
  />

  <img
    v-if="localImage"
    :src="localImage"
    alt="Entry Picture"
    class="img-thumbnail"
  />
</template>

<script>
import Swal from "sweetalert2";

import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapGetters } from "vuex";

import getDayMonthYear from "../helpers/getDayMonthYear";
import uploadImage from "../helpers/uploadImage";

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

  data() {
    return {
      entry: null,
      localImage: null,
      file: null
    };
  },

  methods: {
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),

    loadEntry() {
      this.localImage = null;
      this.file = null;

      let entry;
      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime()
        };
      } else {
        entry = this.getEntryById(this.id);

        if (!entry) return this.$router.push({ name: "no-entry" });
      }

      this.entry = entry;
    },

    async saveEntry() {
      new Swal({
        title: "Please Wait...",
        allowOutsideClick: false
      });

      Swal.showLoading();

      const picture = await uploadImage(this.file);

      this.entry.picture = picture;

      if (this.entry.id) {
        // Updated Action Journal Module
        await this.updateEntry(this.entry);
      } else {
        const id = await this.createEntry(this.entry);

        this.$router.push({ name: "entry", params: { id } });
      }

      this.file = null;

      Swal.fire("Saved", "Successfully saved entry", "success");
    },

    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "Are you sure?",
        text: "Once deleted you will not be able to recover it.",
        showDenyButton: true,
        confirmButtonText: "Yes, I am sure"
      });

      if (isConfirmed) {
        new Swal({
          title: "Please Wait...",
          allowOutsideClick: false
        });

        Swal.showLoading();

        this.deleteEntry(this.entry.id);

        this.$router.push({ name: "no-entry" });

        Swal.fire("Deleted", "", "success");
      }
    },

    onSelectedImage(event) {
      const file = event.target.files[0];

      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }

      this.file = file;

      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },

    onSelectImage() {
      this.$refs.imageSelector.click();
    }
  },

  computed: {
    ...mapGetters("journal", ["getEntryById"]),

    dayMonthYear() {
      const { day, month, yearDay } = getDayMonthYear(this.entry.date);

      return { day, month, yearDay };
    }
  },

  watch: {
    id() {
      this.loadEntry();
    }
  },

  created() {
    // console.log(this.$route.params.id)
    this.loadEntry();
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