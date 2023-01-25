<script setup>
import { ref } from "vue";
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
    <div class="modal" :data-visible="controlModal">
      <button
        class="close"
        :aria-expanded="controlModal"
        @click="closeModal"
      ></button>
      <div class="con-modal">
        <img :src="regular" :alt="altdesc" />
        <div class="modal-text">
          <p class="">{{ name }}</p>
          <p class="">{{ location }}</p>
        </div>
      </div>
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
.modal {
  display: none;
}

.modal[data-visible="true"] {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100000000;
}

.close {
  background-color: transparent;
  background-image: url("./icon-close.svg");
  right: 1em;
  top: 1em;
  border: none;
  padding: 1em;
  border: 1px solid black;
  border-radius: 50%;
  background-color: grey;
}

.close:hover {
  background-color: rgb(235, 235, 235);
  border: 1px solid;
  border-radius: 50%;
}

.con-modal {
  max-width: 480px;
  width: 90%;
  margin: auto;
  border-radius: 8px;
}
.modal img {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.modal-text {
  background-color: #fff;
  padding: 1em;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
@media (min-width: 40rem) {
  /* .photo:nth-child(2n) {
    grid-row: span 4;
  } */
  /* .photo:nth-child(2n-1) {
    grid-row: span 2;
  } */
}
</style>
