<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import ImageCollection from "../components/ImageCollection.vue";
import PageHeader from "../components/PageHeader.vue";
import getData from "../hooks/FetchData";

const rout = useRoute();
let query = rout.query.q;
let url = `https://api.unsplash.com/search/photos/?client_id=Oydq01Zm1WrrZnJDq2PJBb-POJQD_IIsNje-jWBNC94&query=${query}`;
const { fetchData, photos } = getData(url);

onMounted(() => {
  fetchData();
});
</script>

<template>
  <PageHeader>
    <h1>Search Results for "{{ query }}"</h1>
  </PageHeader>
  <ul>
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

<style></style>
