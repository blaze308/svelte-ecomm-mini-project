<script lang="ts">
  import { onMount } from "svelte";
  import ProductCard from "../../lib/productCard.svelte";

  let products: Product[] = [];
  onMount(async () => {
    products = await getProducts();
  });

  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    console.log(data);

    return data;
  };
</script>

{#each products as product}
  <li class="inline ">
    <ProductCard {product} />
  </li>
{/each}
