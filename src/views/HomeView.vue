<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import ImageCollection from "../components/ImageCollection.vue";
import getData from "../hooks/FetchData";
import LoadingPlaceHolder from "../components/LoadingPlaceHolder.vue";
const search = ref("");
const rout = useRouter();

let url = `https://api.unsplash.com/search/photos/?client_id=Oydq01Zm1WrrZnJDq2PJBb-POJQD_IIsNje-jWBNC94&query=african&orientation=squarish`;
const { fetchData, photos, loading } = getData(url);

onMounted(() => {
  fetchData();
});

const getSearchValue = (e) => {
  e.preventDefault();
  if (search.value.trim() !== "") {
    rout.push(`/search?q=${search.value}`);
  }
};
</script>

<template>
  <PageHeader>
    <form @submit="getSearchValue">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for photo"
        v-model="search"
      />
    </form>
  </PageHeader>
  <div v-if="photos.length === 0 && !loading" class="center">
    <h1>No pictures found</h1>
  </div>
  <ul>
    <LoadingPlaceHolder v-if="loading" />
    <ImageCollection
      v-else
      v-for="photo in photos"
      :key="photo.id"
      :image="photo.urls.small_s3"
      :altdesc="photo.alt_description"
      :name="photo.user.name"
      :location="photo.user.location"
      :regular="photo.urls.regular"
    />
  </ul>
</template>

<style>
form {
  width: 65%;
  height: 50px;
}
input {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 1em 2.5em;
  outline: 0;
  background-image: url("./find.svg");
  background-repeat: no-repeat;
  background-position: 1%;
  background-size: 20px;
  border: 1px solid gray;
}
input:focus {
  border: 2px solid purple;
}
</style>
