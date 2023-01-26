<script setup>
defineProps({
  altdesc: { type: [String, null], required: true },
  name: { type: String, required: true },
  location: { type: [String, null], required: true },
  image: { type: String, required: true },
  controlModal: { type: String, required: true },
});
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="modal" :data-visible="controlModal">
    <button
      class="close"
      :aria-expanded="controlModal"
      @click="emit('close')"
    ></button>
    <div class="con-modal">
      <img :src="image" :alt="altdesc" />
      <div class="modal-text">
        <p class="modal-name">{{ name }}</p>
        <p class="modal-location">{{ location }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  transform: translateX(10000px);
  transition: transform 5s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100000000;
  transition: all 1s ease-in-out;
}

.modal[data-visible="true"] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100000000;
  transform: translateX(0px);
}

.close {
  background-color: transparent;
  background-image: url("../../icon-close.svg");
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

.modal-name {
  font-weight: 700;
  color: rgb(31, 31, 95);
}

.modal-location {
  font-size: 12px;
  color: rgb(117, 117, 173);
}
</style>
