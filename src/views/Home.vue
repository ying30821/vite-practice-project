<template>
  <h2>svg plugin</h2>
  <SVGIcon name="test"></SVGIcon>
</template>

<script>
  import { defineComponent } from 'vue';
  
  import SVGIcon from '@/components/SVGIcon.vue';
  export default defineComponent({
    name: 'App',
    components: { SVGIcon },
  });
  </script>