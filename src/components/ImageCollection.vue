<script setup>
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
    <div class="details">
      <p class="name">{{ name }}</p>
      <p v-if="location" class="location">{{ location }}</p>
    </div>
  </li>
</template>

<style>
.photo {
  margin: 1em;
  width: 90%;
  height: 100%;
  position: relative;
  border-radius: 8px;
}
img {
  position: relative;
  object-fit: cover;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.details {
  position: absolute;
  bottom: 1em;
  right: 1em;
}
@media (min-width: 40rem) {
  .photo:nth-child(2n-1) {
    grid-row: span 3;
  }
  .photo:nth-child(2n) {
    grid-row: span 2;
  }
}
@media (min-width: 60rem) {
  .photo:nth-child(2n) {
 
  }
}
</style>
