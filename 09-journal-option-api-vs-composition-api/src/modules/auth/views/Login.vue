<template>
  <span class="login100-form-title p-b-41">Enter App</span>
  <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="onSubmit">
    <div class="wrap-input100 validate-input" data-validate="Enter email">
      <input v-model="userForm.email" class="input100" type="email" placeholder="Email" required />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input
        v-model="userForm.password"
        class="input100"
        type="password"
        placeholder="Password"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn">Login</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'register' }">Don't have an account?</router-link>
    </div>
  </form>
</template>

<script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Swal from 'sweetalert2';

  import { useAuth } from '../composables/useAuth';

  export default {
    setup() {
      const router = useRouter();

      const { loginUser } = useAuth();

      const userForm = ref({
        // email: 'test@test.com',
        // password: '123456',
        email: '',
        password: '',
      });

      return {
        userForm,

        onSubmit: async () => {
          try {
            const { ok, message } = await loginUser(userForm.value);

            console.log({ ok, message });

            if (!ok) return Swal.fire('Error', message, 'error');

            router.push({ name: 'no-entry' });
          } catch (error) {
            console.log(error);
          }
        },
      };
    },
  };
</script>

<style lang="scss" scoped></style>
