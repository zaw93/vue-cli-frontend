<template>
  <div class="property-box d-flex">
    <div class="property-thumbnail">
      <router-link :to="`/places/${place.id}`">
        <img :src="place.photos[0]" alt="property-box" />
      </router-link>
    </div>

    <div class="detail fw-light ps-3 d-flex flex-column justify-content-between">
      <div class="detail-info">
        <router-link :to="`/places/${place.id}`" class="title">
          <div class="mb-1 fw-normal">{{ place.title }}</div>
        </router-link>
        <div class="location mb-2">{{ place.address }}</div>
        <div class="divider"></div>
        <div class="fw-light pt-2">
          <span class="me-1">{{ place.guest_count }} guests</span>
          <span class="me-1">.</span>
          <span class="me-1">{{ place.bedroom }} bedrooms</span>
          <span class="me-1">.</span>
          <span class="me-1">{{ place.bed }} beds</span>
          <span class="me-1">.</span>
          <span class="me-1">{{ place.bath }} baths</span>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <div class="rating my-2 d-flex align-items-center fw-light">
          <svg height="14" width="14" fill="#e15a5f" viewBox="0 0 1000 1000">
            <path
              d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
            ></path>
          </svg>
          <span class="ms-1">5.0</span>
          <span class="ms-1">(28 reviews)</span>
        </div>

        <div class="price">
          <span class="fw-bold">{{ place.price.toLocaleString() }} Ks</span>
          <span> / night</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceCardHorizontal',
  props: ['place']
}
</script>

<style lang="scss">
.property-box {
  .property-thumbnail {
    flex: 1;
    width: 300px;
    height: 200px;

    img {
      border-radius: 5px;
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .detail {
    flex: 1;

    .title {
      text-decoration: none;
      color: inherit;
    }

    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .divider {
      width: 50px;
      height: 1px;
      background-color: #cccccc;
    }
  }
}
</style>
