<template>
  <div class="property-box">
    <div class="property-thumbnail">
      <router-link :to="`/places/${place.id}`">
        <img :src="place.photos[0]" alt="property-box" class="img-fluid" />
      </router-link>
    </div>
    <div class="rating my-2 d-flex align-items-center fw-light">
      <svg height="14" width="14" fill="#e15a5f" viewBox="0 0 1000 1000">
        <path
          d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
        ></path>
      </svg>
      <span class="ms-1">5.0</span>
      <span class="ms-1">(28)</span>
    </div>
    <div class="detail fw-light">
      <a href="" class="title">
        <div class="mb-1 fw-normal">{{ place.title }}</div>
      </a>
      <div class="location mb-1">{{ place.address }}</div>
      <div class="description mb-1">
        {{ place.description.substring(0, 30) + '...' }}
      </div>
      <div class="price">
        <span class="fw-bold">{{ place.price.toLocaleString() }} Ks</span>
        <span> / night</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceCard',
  props: ['place']
}
</script>

<style lang="scss">
.property-box {
  .property-thumbnail {
    img {
      border-radius: 5px;
    }
  }

  .detail {
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
  }
}
</style>
