<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-left align-items-baseline p-2">
      <span class="text-success fs-3 fw-bold">{{ dayMonthYear.day }}</span>
      <span class="mx-1 fs-3">{{ dayMonthYear.month }}</span>
      <span class="mx-2 fs-4 fw-light">{{ dayMonthYear.yearDay }}</span>
    </div>
    <div class="">
      <button v-if="entry.id" class="btn btn-danger mx-2" @click="onDeleteEntry">
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
        v-model="entry.text"
      ></textarea>
    </div>

    <Fab icon="fa-save" @on:click="saveEntry" />

    <img
      class="img-thumbnail img-position"
      src="https://img.myloview.es/fotomurales/encinas-en-el-cerro-mingamorena-pelahustan-toledo-espana-europa-700-212590059.jpg"
      alt="entry picture"
    />
  </template>
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import Swal from 'sweetalert2';

  import { getDayMonthYear } from '../helpers/getDayMonthYear';

  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },

    components: {
      Fab: defineAsyncComponent(() => import('../components/Fab')),
    },

    data() {
      return {
        entry: null,
      };
    },

    computed: {
      ...mapGetters('journal', ['getEntryById']),

      dayMonthYear() {
        const { day, month, yearDay } = getDayMonthYear(this.entry.date);

        return {
          day,
          month,
          yearDay,
        };
      },
    },

    methods: {
      ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),

      loadEntry() {
        let entry;

        if (this.id === 'new') {
          entry = {
            text: '',
            date: new Date().getTime(),
          };
        } else {
          entry = this.getEntryById(this.id);

          if (!entry) return this.$router.push({ name: 'no-entry' });
        }

        this.entry = entry;
      },

      async saveEntry() {
        new Swal({
          title: 'Waiting please...',
          allowOutsideClick: false,
        });

        Swal.showLoading();

        if (this.entry.id) {
          await this.updateEntry(this.entry);
        } else {
          const idNewEntry = await this.createEntry(this.entry);

          this.$router.push({ name: 'entry', params: { id: idNewEntry } });
        }

        Swal.fire('Save', 'Entry saved', 'success');
      },

      async onDeleteEntry() {
        const { isConfirmed } = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showDenyButton: true,
          confirmButtonText: 'Yes, delete it!',
        });

        if (isConfirmed) {
          new Swal({
            title: 'Waiting please...',
            allowOutsideClick: false,
          });

          Swal.showLoading();

          await this.deleteEntry(this.entry.id);

          this.$router.push({ name: 'no-entry' });

          Swal.fire('Delete', '', 'success');
        }
      },
    },

    created() {
      this.loadEntry();
    },

    watch: {
      id() {
        this.loadEntry();
      },
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
