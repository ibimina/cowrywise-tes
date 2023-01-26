<script setup>
import { ref } from "vue";
import ImageModal from "./ImageModal.vue";
defineProps({
  image: { type: String, required: true },
  altdesc: { type: [String, null], required: true },
  name: { type: String, required: true },
  location: { type: [String, null], required: true },
  regular: { type: String, required: true },
});
const controlModal = ref("false");
const closeModal = () => {
  controlModal.value = "false";
};
const openModal = () => {
  controlModal.value = "true";
};
</script>
<template>
  <li class="photo">
    <img :src="image" :alt="altdesc" @click="openModal" />
    <div class="details">
      <p class="name">{{ name }}</p>
      <p v-if="location" class="location">{{ location }}</p>
    </div>
    <ImageModal
      v-if="controlModal === 'true'"
      :controlModal="controlModal"
      :image="regular"
      :name="name"
      :altdesc="altdesc"
      :location="location"
      @close="closeModal"
    />
  </li>
</template>

<style>
.photo {
  height: 100%;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
}
img {
  position: relative;
  object-fit: cover;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.photo:hover img {
  filter: brightness(90%);
  transition: all 0.5s ease-in-out;
}
.photo img {
  filter: brightness(70%);
}
.photo:hover .details {
  transform: translateX(5px);
  color: rgb(208, 209, 255);
  transition: all 0.5s ease-in-out;
}
.details {
  position: absolute;
  bottom: 1em;
  left: 1em;
  color: rgb(255, 245, 245);
}
.name {
  font-size: 14px;
  text-shadow: 1px 1px rgb(80, 76, 76);
}
.location {
  font-size: 12px;
}
</style>
