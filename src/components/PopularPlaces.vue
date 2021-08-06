<template>
  <div class="container-fluid py-5">
    <div class="text-center mb-5">
      <h2>Most Popular Places</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="overview">
            <img src="../assets/img/img-1.jpg" alt="popular-places" class="big-img" />
            <a href="#" class="mask">
              <div class="info d-flex flex-column justify-content-center align-items-center">
                <h5>Yangon</h5>
                <p>55 Places</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="overview">
            <img src="../assets/img/img-2.jpg" alt="popular-places" class="big-img" />
            <a href="#" class="mask">
              <div class="info d-flex flex-column justify-content-center align-items-center">
                <h5>Mandalay</h5>
                <p>30 Places</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="overview">
            <img src="../assets/img/img-4.jpg" alt="popular-places" class="big-img" />
            <a href="#" class="mask">
              <div class="info d-flex flex-column justify-content-center align-items-center">
                <h5>Bago</h5>
                <p>23 Places</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="overview">
            <img src="../assets/img/img-5.jpg" alt="popular-places" class="big-img" />
            <a href="#" class="mask">
              <div class="info d-flex flex-column justify-content-center align-items-center">
                <h5>Taunggyi</h5>
                <p>12 Places</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.overview {
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .mask {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    padding: 10px 40px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;

    h5,
    p {
      margin: 0;
    }

    h5 {
      color: #e15a5f;
    }

    p {
      color: #212529;
    }
  }

  &:hover {
    img {
      transform: scale(1.2);
    }

    .mask {
      opacity: 1;
      visibility: visible;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
