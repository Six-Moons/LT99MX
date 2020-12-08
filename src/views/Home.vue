<template>
  <div class="home">
    <div class="row">
      <div class="col col-8">
        <!-- Most important news -->
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          label-prev=""
          label-next=""
          no-animation="true"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>
        <!-- News feed -->
        <news-card class="news-card"></news-card>
        <news-card class="news-card"></news-card>
        <news-card class="news-card"></news-card>
        <news-card class="news-card"></news-card>
        <news-card class="news-card"></news-card>
      </div>
      <right-panel class="col col-4"></right-panel>
    </div>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'
import RightPanel from '../components/RightPanel.vue'
// @ is an alias to /src
// import CenterPanel from '@/components/CenterPanel.vue'
// import RightPanel from '@/components/RightPanel.vue'

export default {
  name: 'Home',
  components: {
    RightPanel,
    NewsCard
  }
}
</script>

<style scoped>
  .news-card {
    margin: 1rem;
  }
</style>
