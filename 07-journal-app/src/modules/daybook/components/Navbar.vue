<template>
  <nav class="nav-flex nav bg-primary">
    <div class="nav-flex__right">
      <a class="navbar-brand text-white pointer">
        <img
          src="@/assets/logo.png"
          alt="Vue logo"
          class="d-inline-block align-text-top mx-2"
          height="24"
          @click="$router.push({ name: 'Home' })"
        />
        <span class="pointer" @click="$router.push({ name: 'no-entry' })"
          >Daybook</span
        >
      </a>
    </div>

    <div>
      <button class="btn btn-outline-info mx-2">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav-flex {
  display: flex;
  flex-direction: row;
}

.nav-flex__right {
  flex-grow: 1;
}

.pointer {
  cursor: pointer;
}
</style>
