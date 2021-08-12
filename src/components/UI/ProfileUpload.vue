<template>
  <div class="d-flex flex-column align-items-center">
    <img class="avatar my-3" :src="avatarImg" />

    <div class="avatar-input">
      <label for="avatar" class="form-label">Update photo</label>
      <input
        @change="$emit('selected', $event.target.files)"
        type="file"
        class="form-control"
        id="avatar"
        hidden
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/img/avatar.png'

export default {
  props: ['profileImage'],
  computed: {
    avatarImg() {
      if (this.profileImage) {
        return this.profileImage
      }
      return avatar
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}

.avatar-input {
  .form-label {
    font-size: 0.9rem;
    font-weight: 300;
    border-bottom: 1px solid black;
    cursor: pointer;
  }
}
</style>
