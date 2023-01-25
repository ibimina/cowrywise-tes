<script setup>
import { defineProps } from "vue";
defineProps({
  image: { type: String, required: true },
  altdesc: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: [String, null], required: true },
});
</script>
<template>
  <li class="photo">
    <img :src="image" :alt="altdesc" />
    <p class="name">{{ name }}</p>
    <p v-if="location" class="location">{{ location }}</p>
  </li>
</template>

<style>
.photo {
  background: yellow;
}
</style>
