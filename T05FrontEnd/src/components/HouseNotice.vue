<template>
    <div class="rectangle house-notice">
      <!--배경-->
      <div style="display:flex; flex-direction: column; grid-area: 1/1; z-index: 1; width: 100%; height:100%; flex-direction: column;
    justify-content: space-between;">
        <div class="house-logo" style="margin-top:5%;">
          <img class="sh-logo" src="../assets/image2.svg" />
          <img class="lh-logo" src="../assets/image1.svg" />
        </div>
        <div @click="goToHouseNotice" class="div-22-span2">
            주거복지 공고
            <br />
            한눈에 보기
            
        </div>
        <div class="rectangle total-count">
          <span>
            <span class="total-text">
              전체
              <br />
            </span>
            <span class="total-text" style="font-size: 48px;">113</span>
            <span class="total-text" style="font-size: 24px;">건</span>
          </span>
        </div>
      </div>

      <!--슬라이드-->
      <div style="z-index: 2; grid-area: 1/1;">
        <div class="slider">
          <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div class="slide" v-for="(slide, index) in slides" :key="index" @click="handleClick(index)">
                  <img style="" :src=slide.image :alt="slide.alt" />
              </div>
          </div>
        </div>
        
      </div>
      <!--페이지네이션-->
      <div class="pagination">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>

    
</template>
<script>

export default {
  name:'HouseNoticeComponent',
  components:{
    
  },
  methods: {
    handleClick(index) {
      if (index === 0) {
        // 0번 슬라이드 클릭 시 실행할 함수
        this.$router.push('/HouseNoticePage');
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, 3000); // 3초마다 슬라이드 전환
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.stopAutoSlide(); // 클릭 시 자동 전환 일시 중지
      this.startAutoSlide(); // 클릭 후 자동 전환 재시작
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  data(){
    return{
      currentSlide: 0,
      slides: [
        { image: require('../assets/poster/투명.png'), alt: '' },
        { image: require('../assets/poster/poster1.png'), alt: 'Slide 2' },
        { image: require('../assets/poster/poster2.png'), alt: 'Slide 3' },
        { image: require('../assets/poster/poster3.png'), alt: 'Slide 4' }
      ],
    }
  }
}
</script>
<style>
  .house-notice{
    background: #3795ed;
    width: 250px;
    height: 334px;
    text-align: center;
    display: grid;
    
    position: relative;
  }

  .sh-logo {
    width: 84.26px;
    height: 55px;
    position: static;
    object-fit: cover;
  }
  .lh-logo {
    width: 87.17px;
    height: 45px;
    position: static;
    object-fit: cover;
  }

  .total-count {
    color: #ffffff;
    text-align: center;

    background: #1264af;
    width: 100%;
    height: 126.73px;
    position: static;
    bottom: 0px;
    padding-top: 5%;
  }
  .total-text {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
  
  .div-22-span2 {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 32px;
    font-weight: 700;
  }

  .slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%; 
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.slide img {
    width: 100%;
  height: 334px;
  object-fit: fill;
}

.pagination {
  position: relative;
  transform: translate(-450px, -3550px);
  display: flex;
  scale: 30%;
  gap: 5px;
}

.pagination button {
  width: 10px;
  height: 10px;
  background-color: #ddd;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.pagination button.active {
  background-color: #1264af;
}
</style>