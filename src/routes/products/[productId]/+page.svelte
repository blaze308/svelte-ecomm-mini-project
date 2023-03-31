<script>
  export let data;

  const { product } = data;
</script>

<section class="text-gray-700 overflow-hidden bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        src={product.thumbnail}
        alt="productImage"
        class="lg:w-96 w-96 object-cover object-center rounded-xl border-2 border-gray-900"
      />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 class="text-2xl font-semibold tracking-widest">{product.name}</h1>
        <p class="w-full">{product.description}</p>
      </div>

      <div class="flex flex-row ml-10">
        <a href="/products/review/{product.id}" class="text-blue-400 mt-6"
          >4 Reviews</a
        >
        <a href="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="green"
            class="bi bi-bag-plus mt-6 ml-10 hover:stroke-green-600 cursor-pointer"
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
        </a>
      </div>
    </div>
  </div>
</section>
