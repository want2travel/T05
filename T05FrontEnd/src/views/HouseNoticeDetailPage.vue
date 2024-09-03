<template>
  <Top/>
  <div class="housedetail wrapper">
    
    <div class="innerpage">
      
      <div v-if="notice">
        <div style="display: flex; justify-content: space-between;">
          <div style="display: flex; flex-direction: column; justify-content: center;">
            <p style="font-weight: 700">{{ notice.PAN_NM }}</p>
          </div>
          
          <div style="display: flex; flex-direction: column; justify-content: center;">
            <p style="width: 200px; color:#1F72D3; font-weight: 600;">기한: {{notice.CLSG_DT}}</p>
          </div>
          <button @click="goToLink(notice.DTL_URL)" class="detail-button">
            <div>
              해당기관 공고보기
              <img src="../assets/icons/material-symbols-light_transit-enterexit.svg">
            </div>
          </button>
        </div>
        
        <hr style="border: solid 1px lightgray; margin: 10px;">
        <div style="display: flex;margin-bottom: 30px; ">
          <div style="background-color: #1F72D3; width: 10px; margin: 5px;"></div>
          <p><span style="font-weight: 600; margin-right: 20px;">신청 가능 일자</span> {{ notice.PAN_NT_ST_DT }} ~ {{ notice.CLSG_DT }}</p>
        </div>
        
        <p>지역: {{ notice.CNP_CD_NM }}</p>
        <p>공고 유형: {{ notice.AIS_TP_CD_NM }} </p>

        <p style="color:gray; margin-top: 40px;;" >* 신청하기 전 월평균 소득과 자산 기준에 부합하는지 확인해보세요.</p>
        <div style="margin: 30px 0px">
          
          <div style="margin-bottom: 40px;">
            <p style="font-weight: 600; ">1 &#41; 월평균 소득</p>
            <div style="display: flex;">
              월평균 소득 확인하기 
              <img class="triangle-icon" src="../assets/icons/play_arrow_filled.svg">
              <button @click="goToLink('https://www.nhis.or.kr/nhis/minwon/wbhaba01000m01.do')" class="button-2">
                국민건강보험 직장보험료
              </button>
            </div>
          </div>

          <div>
            <p style="font-weight: 600;">2 &#41; 자산</p>
            <div style="display: flex; gap: 30px;">
              &#10112; 총자산 가액
              <p style="font-size: 18px; color: gray;">총자산가액= 토지 + 건물 + 자동차 + 금융자산 + 일반자산</p>
            </div>
            <div style="display: flex; margin-bottom: 20px;">
                부동산 자산 확인하기 
              <img class="triangle-icon" src="../assets/icons/play_arrow_filled.svg">
              <button @click="goToLink('http://realtyprice.kr/notice/town/searchPastYear.htm')" class="button-2">
                국토교통부
              </button>
            </div>

            <div>
              &#10113; 자동차 가액
              <p>총자산가액= 토지 + 건물 + 자동차 + 금융자산 + 일반자산</p>
            </div>
            <div style="display: flex;">
                자동차 가액 확인하기 
              <img class="triangle-icon" src="../assets/icons/play_arrow_filled.svg">
              <button class="button-2">
                보험개발원
              </button>
            </div>
          </div>
        </div>
      </div>
      <p v-else>로딩 중...</p>
    </div>
    
    
    
  </div>
  <Footer/>
</template>

<script>
import axios from 'axios';
import Top from '@/components/Top.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HouseNoticeDetail',
  components:{
    Top,
    Footer,

  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      notice: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchNoticeDetail() {
      const url = `http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1`; // 실제 API 엔드포인트
      try {
        const response = await axios.get(url, {
          params: {
            serviceKey: '0khvXNpZtCdvzH1Dw76HNtpDP/XhiNIzhKRU43Dnphe7oXSziRtpdtaP4FORD5VYkOYFt2vqQQO1VklahVTOsA==', // 실제 서비스 키로 교체
            PAGE:1,
            PG_SZ:1,
            PAN_NM: this.id 
          }
        });

         let responseData = response.data[1];
        
        if (responseData.dsList && Array.isArray(responseData.dsList)) {
          console.log('detail responseData : '+ responseData);
          this.notice = responseData.dsList[0] || {};
        } else if (responseData.dsList){
          this.error = 'dslist 없음';
        } 

      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    goToLink(link){
      if (link){
        window.open(link, '_blank');
      }else{
        alert('유효한 링크가 없습니다');
      }
    }
  },
  created() {
    this.fetchNoticeDetail();
  }
};
</script>

<style scoped>
.housedetail{
  margin-top: 7%;
  font-size:24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap:20px;
  justify-content: center;
  padding:2%;
}

.detail-button{
  border-radius: 10px;
  background-color: #1F72D3;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  margin: 20px;
  font-weight: 600;
  font-size: 20px;
}

.button-2{
  border-radius: 5px;
  border: 1px solid #1F72D3;
  color: #1F72D3;
  padding: 1px 30px;
  font-size: 20px;
}

.innerpage{
  border: solid 1px lightgray;
  padding: 40px;
}

.triangle-icon{
  margin: 0px 40px;
  width: 30px;
  height: 30px;
}
</style>
  