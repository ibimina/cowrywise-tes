import { ref } from "vue";
export default function getData(url) {
  const photos = ref([]);
  const loading = ref(false);
  const fetchData = async () => {
    loading.value = true;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network error");
    }
    const data = await res.json();
    loading.value = false;
    photos.value = data.results;
  };
  return { fetchData, photos, loading };
}
