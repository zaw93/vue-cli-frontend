<template>
  <div id="dashboard">
    <b-navbar type="dark" variant="dark">
      <div class="container">
        <b-navbar-nav class="mx-auto">
          <b-nav-item to="/dashboard/my-profile" class="me-5">Profile</b-nav-item>
          <b-nav-item to="/dashboard/my-account" class="me-5">Account</b-nav-item>
          <b-nav-item href="#" class="me-5">Inbox</b-nav-item>
          <b-nav-item to="/dashboard/my-trips" class="me-5">Your Trips</b-nav-item>
          <b-nav-item to="/dashboard/reservations" class="me-5">Reservations</b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown class="me-5" text="Listings" right>
            <b-dropdown-item to="/dashboard/my-listings">Your Listings</b-dropdown-item>
            <b-dropdown-item to="/dashboard/create-new-listing">Create a new listing</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#dashboard {
  background-color: #f8f8f8;

  a:hover,
  a:focus,
  a:active,
  a.router-link-active,
  a.router-link-exact-active {
    color: #fff;
  }

  .wizard-header {
    margin-bottom: 1rem;

    .wizard-title {
      font-size: 1.3rem;
      font-weight: 300;
    }
  }

  .stepTitle {
    margin-top: 1rem;
  }
}
</style>
