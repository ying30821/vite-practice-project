<template>
  <div class="flex justify-end pr-3">
    <button
      @click="locale = 'en'"
      type="button"
      class="relative p-2 text-sm text-gray-400 after:-translate-y-1/2 after:absolute after:bg-gray-400 after:top-1/2 after:right-0 after:w-px after:h-3"
    >
      EN
    </button>
    <button
      @click="locale = 'tw'"
      type="button"
      class="p-2 text-sm text-gray-400"
    >
      TW
    </button>
  </div>
  <div class="container mx-auto">
    <h1 class="my-24 text-4xl tracking-widest text-center text-white">{{ t(`login.title`) }}</h1>
    <div class="login-card">
      <h2 class="mb-4 text-2xl tracking-widest text-center text-white">{{ t(`login.subTitle`) }}</h2>
      <p class="mb-10 tracking-wide text-center text-white">{{ t(`login.content`) }}</p>
      <div class="flex mb-6">
        <span class="input-group-text">
          <span class="material-icons">person</span>
        </span>
        <input :placeholder="t(`login.account`)" type="text" class="form-control"/>
      </div>
      <div class="flex mb-8">
        <span class="input-group-text">
          <span class="material-icons">lock</span>
        </span>
        <input :placeholder="t(`login.password`)" type="text" class="form-control"/>
      </div>
      <button type="button" class="w-full mb-4 btn btn-cyan">{{ t(`login.loginBtn`) }}</button>
      <button type="button" class="w-full text-white btn">{{ t(`login.forgotBtn`) }}</button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();
</script>

<style lang="scss">
body {
  background: linear-gradient(to right, #005aa7, #fffde4);
}

.login-card {
  width: 500px;
  margin:  0 auto;
  border-radius: 10px;
  backdrop-filter: brightness(80%);
  padding: 36px;
}
</style>