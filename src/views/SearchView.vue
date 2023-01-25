<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ImageCollection from "../components/ImageCollection.vue";
import PageHeader from "../components/PageHeader.vue";
import LoadingPlaceHolder from "../components/LoadingPlaceHolder.vue";
import getData from "../hooks/FetchData";

const rout = useRoute();
let query = rout.query.q;
const router = useRouter();
let url = `https://api.unsplash.com/search/photos/?client_id=Oydq01Zm1WrrZnJDq2PJBb-POJQD_IIsNje-jWBNC94&query=${query}`;
const { fetchData, photos, loading } = getData(url);
const handleGoHome = () => {
  router.push("/");
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <PageHeader>
    <h1 class="title">Search Results for "{{ query }}"</h1>
    <button @click="handleGoHome" class="back" aria-label="go back"></button>
  </PageHeader>
  <div v-if="photos.length === 0 && !loading" class="center">
    <h1>No photos found</h1>
  </div>
  <ul>
    <LoadingPlaceHolder v-if="loading" />
    <ImageCollection
      v-for="photo in photos"
      :key="photo.id"
      :image="photo.urls.small_s3"
      :altdesc="photo.alt_description"
      :name="photo.user.name"
      :location="photo.user.location"
    />
  </ul>
</template>

<style>
.title {
  font-size: 24px;
}
.back {
  background-color: rgba(90, 79, 79, 0.6);
  cursor: pointer;
  background-image: url("./icon-back.png");
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 18px;
  height: 20px;
  left: 2em;
  top: 1.5em;
  border: 1px solid;
  padding: 1em;
  border-radius: 50%;
}
.back:hover {
  background-color: rgba(255, 252, 252, 0.8);
}
.back::after {
  content: "go back";
  position: absolute;
  bottom: -2.5em;
  left: 0;
  width: max-content;
  background-color: rgba(255, 252, 252, 0.8);
  padding: 0.5em;
  display: none;
}
.back:hover.back::after {
  display: block;
}
</style>
