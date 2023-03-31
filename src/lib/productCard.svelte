<script lang="ts">
  import { get } from "svelte/store";
  import { cartItems, addtoCart, removeFromCart } from "../cart";

  // cart code
  let cart = get(cartItems);
  let cartItemIndex = cart.findIndex((item) => {
    return item.id === product.id;
  });

  let cartProduct = cart[cartItemIndex];

  cartItems.subscribe((newCartValue) => {
    cart = newCartValue;
    cartItemIndex = cart.findIndex((item) => {
      return item.id === product.id;
    });
    cartProduct = cart[cartItemIndex];
  });

  //prop
  export let product: Product = { id: "", name: "", thumbnail: "", price: 0 };
</script>

<!--  Grid Section - Starts Here 👇 -->
<section class="m-5 inline-block">
  <!--    Product card 1 - Starts Here 👇 -->
  <div
    class="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
  >
    <a href="/products/{product.id}">
      <img
        src={product.thumbnail}
        alt="Product"
        class="h-80 w-72 object-cover rounded-t-xl"
      />
    </a>
    <div class="px-2 py-4 w-72">
      <p
        class="text-lg font-semibold w-56 text-black truncate block capitalize"
      >
        {product.name}
      </p>

      {#if cartProduct !== undefined}
        <span class="text-gray-900 mr-3 text-md"
          >Quantity: <strong>{cartProduct.quantity}</strong></span
        >
      {/if}
      <div class="flex items-center">
        <p
          class="text-md font-semibold text-black cursor-auto my-3 overflow-ellipsis"
        >
          Price : c{product.price}
        </p>

        <div class="m-5 ml-12 flex flex-row">
          <!-- plus -->
          <button on:click={() => addtoCart(product.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-plus "
              viewBox="0 0 16 16"
              stroke-width="2"
              stroke="green"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </button>

          <!-- minus  -->
          <button on:click={() => removeFromCart(product.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-dash ml-2"
              viewBox="0 0 16 16"
              stroke-width="2"
              stroke="green"
            >
              <path
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>

          <!-- cart  -->
          <!-- <a href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="green"
              class="bi bi-bag-plus ml-4 hover:stroke-green-600 cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
              />
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              />
            </svg>
          </a> -->
        </div>
      </div>
    </div>
  </div>
</section>
