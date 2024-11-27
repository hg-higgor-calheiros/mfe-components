<template>
  <div class="products">
    <div class="tags">
      <div class="arrival selected" @click="() => tabNavigation('arrival')">
        <div class="new-arrival">New Arrival</div>
        <svg
          class="line"
          width="91"
          height="2"
          viewBox="0 0 91 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H90"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="bestseller" @click="() => tabNavigation('bestseller')">
        Bestseller
      </div>
      <div
        class="featured-products"
        @click="() => tabNavigation('featured-products')"
      >
        Featured Products
      </div>
    </div>
    <div class="products-grid">
      <div class="grid">
        <div class="product-card" v-for="product of PRODUCT_LIST">
          <div class="top-section">
            <div class="icon-32-px-like">
              <svg
                class="favorite-duotone"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z"
                  stroke="#919191"
                  stroke-opacity="0.77"
                  stroke-width="1.4"
                />
              </svg>
            </div>
          </div>
          <img class="iphone-14-pro-1" :src="product.image" />
          <div class="text-icon">
            <div class="info">
              <div
                class="apple-i-phone-14-pro-max-128-gb-deep-purple-mq-9-t-3-rx-a"
              >
                {{ product.text }}
              </div>
              <div class="_1399">${{ product.price }}</div>
            </div>
            <div class="button">
              <div class="label">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function tabNavigation(event) {
  const tags = document.getElementsByClassName("tags")[0];
  Array.from(tags.children).map((el) => {
    if (el.classList.value.includes(event)) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });

  PRODUCT_LIST.sort(product => product.price)
}

const PRODUCT_LIST = [
  {
    image: "http://localhost:4202/src/assets/iphone-14-pro-10.png",
    text: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 900,
  },
  {
    image: "http://localhost:4202/src/assets/iphone-14-pro-11.png",
    text: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
  },
  {
    image: "http://localhost:4202/src/assets/iphone-14-pro-12.png",
    text: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
  },
  {
    image: "http://localhost:4202/src/assets/iphone-14-pro-13.png",
    text: "AirPods Max Silver",
    price: 549,
  },
  {
    image: "http://localhost:4202/src/assets/iphone-14-pro-14.png",
    text: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
  },
  {
    image: "http://localhost:4202/src/assets/iphone-14-pro-15.png",
    text: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: 1799,
  },
  {
    image: "http://localhost:4202/src/assets/iphone-14-pro-16.png",
    text: "Galaxy Buds FE Graphite",
    price: 99.99,
  },
  {
    image: "http://localhost:4202/src/assets/iphone-14-pro-17.png",
    text: "Apple iPad 9 10.2' 64GB Wi-Fi Silver (MK2L3) 2021",
    price: 398,
  },
];

</script>

<style scoped>
.products,
.products * {
  box-sizing: border-box;
}
.products {
  background: #ffffff;
  padding: 56px 160px 56px 160px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 1440px;
  position: relative;
}
.tags {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.selected,
.tags div:hover {
  color: var(--main-black, #000000);
  border-bottom: #000000 1px solid;
  cursor: pointer;
}

.tags > :not(.selected) {
  color: #8b8b8b;
}

.selected {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.new-arrival {
  text-align: center;
  font: 500 18px/32px "SfProDisplay-Medium", sans-serif;
  /* position: relative; */
}
.line {
  align-self: stretch;
  flex-shrink: 0;
  height: 0px;
  position: relative;
  overflow: visible;
}
.bestseller {
  text-align: center;
  font: 500 18px/32px "SfProDisplay-Medium", sans-serif;
  position: relative;
}
.featured-products {
  text-align: left;
  font: 500 18px/32px "SfProDisplay-Medium", sans-serif;
  position: relative;
}
.products-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}
.pair {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 1;
  min-width: 200px;
  position: relative;
}
.product-card {
  background: #f6f6f6;
  border-radius: 9px;
  padding: 24px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  min-width: 200px;
  position: relative;
}
.top-section {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.icon-32-px-like {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  position: relative;
}
.favorite-duotone {
  height: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  overflow: visible;
}
.iphone-14-pro-1 {
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  position: relative;
}
.text-icon {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.apple-i-phone-14-pro-max-128-gb-deep-purple-mq-9-t-3-rx-a {
  color: var(--main-black, #000000);
  text-align: center;
  font: 500 16px/24px "SfProDisplay-Medium", sans-serif;
  position: relative;
  align-self: stretch;
}
._1399 {
  color: var(--main-black, #000000);
  text-align: center;
  font: 600 24px/24px "SfProDisplay-Semibold", sans-serif;
  position: relative;
  align-self: stretch;
}
.button {
  background: var(--main-black, #000000);
  border-radius: 8px;
  padding: 12px 64px 12px 64px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
.label {
  color: var(--main-white, #ffffff);
  text-align: center;
  font: 500 14px/24px "SfProDisplay-Medium", sans-serif;
  position: relative;
}
.favorite-duotone2 {
  height: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  overflow: visible;
}
.favorite-duotone3 {
  height: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  overflow: visible;
}
.favorite-duotone4 {
  height: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  overflow: visible;
}
.favorite-duotone5 {
  height: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  overflow: visible;
}
.favorite-duotone6 {
  height: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  overflow: visible;
}
.favorite-duotone7 {
  height: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  overflow: visible;
}
.favorite-duotone8 {
  height: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  width: 100%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  overflow: visible;
}
</style>
