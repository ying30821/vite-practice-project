<template>
  <div class="container mx-auto">
    <h1 class="text-4xl text-white text-center tracking-widest my-24">MY LOGO</h1>
    <div class="login-card">
      <h2 class="text-2xl text-center text-white tracking-widest mb-4">LOGIN</h2>
      <p class="text-center text-white tracking-wide mb-10">Please enter your account and password .</p>
      <div class="flex mb-6">
        <span class="input-group-text">
          <span class="material-icons">person</span>
        </span>
        <input type="text" class="form-control" placeholder="Account"/>
      </div>
      <div class="flex mb-8">
        <span class="input-group-text">
          <span class="material-icons">lock</span>
        </span>
        <input type="text" class="form-control" placeholder="Password"/>
      </div>

      <button type="button" class="btn btn-cyan w-full mb-4">Login</button>
      <button type="button" class="btn text-white w-full">Forgot Password ?</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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