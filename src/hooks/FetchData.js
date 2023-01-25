import { ref } from "vue";
export default function getData(url) {
  const photos = ref([]);
  const fetchData = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network error");
    }
    const data = await res.json();

    photos.value = data.results;
  };
  return { fetchData, photos };
}
