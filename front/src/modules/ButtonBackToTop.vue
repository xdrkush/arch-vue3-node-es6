<template>
  <div>
    <q-page-sticky
      position="bottom-right"
      style="z-index: 1"
      :offset="[18, 18]"
    >
      <q-btn tag="a" href="#" fab icon="keyboard_arrow_up" color="accent" />
    </q-page-sticky>
  </div>
</template>

<script>
export default {
  name: "ButtonBackToTop",
};
</script>