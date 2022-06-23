<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-md"
      >
        <q-input
          filled
          v-model="userForm.email"
          label="Your email *"
          hint="email"
          type="email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type something',
            isValidEmail,
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password"
          label="Your password *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your password',
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Repeat your password *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your password',
            isSamePassword,
          ]"
        />

        <q-checkbox
          v-model="userForm.conditions"
          label="Acept Conditions"
          :style="
            userForm.errorConditions && !userForm.conditions && 'color:red'
          "
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            unelevated
            class="q-ml-sm"
          />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "Forms",

  setup() {
    const $q = useQuasar();

    const userForm = ref({
      email: "test@test.com",
      password: "123",
      password2: "12",
      conditions: false,
      errorConditions: false,
    });

    return {
      userForm,

      onSubmit() {
        userForm.value.errorConditions = false;

        if (!userForm.value.conditions) {
          $q.notify({
            message: "Accept terms & conditions",
            icon: "las la-exclamation-circle",
          });

          userForm.value.errorConditions = true;

          return;
        }
        console.log(userForm.value);
      },

      onReset() {
        userForm.value = {
          email: "",
          password: "",
          password2: "",
          conditions: false,
          errorConditions: false,
        };
      },

      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "Email not valid";
      },

      isSamePassword(val) {
        return (
          val === userForm.value.password || "Please, confirm your password"
        );
      },
    };
  },
});
</script>
