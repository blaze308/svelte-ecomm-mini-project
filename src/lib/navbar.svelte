<header>
  <!-- Navbar -->
  <nav
    class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div class="px-6">
      <button
        class="border-0 bg-transparent py-3 px-2 text-xl leading-none md:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContentO"
        aria-controls="navbarSupportedContentO"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </button>
      <div
        class="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
        id="navbarSupportedContentO"
        data-te-collapse-item
      >
        <ul class="mr-auto flex flex-col md:flex-row" data-te-navbar-nav-ref>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="/"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light">Home</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="/products"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light">Products</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="/pricing"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light">Pricing</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary "
              href="/about"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light">About</a
            >
          </li>
        </ul>
      </div>
    </div>
    <a
      href="/checkout"
      class="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-2 rounded-lg"
      >proceed to checkout</a
    >
  </nav>
  <!-- Navbar -->
</header>
