<template>
  <div>
    <Top/>
    <div class="HouseNoticePage-Wrapper">
      <div style="text-align: center; font-size: 36px; margin-bottom: 3%; font-weight: 700;">주거복지 임대 공고문</div>
      <div style="display:flex; justify-content: space-evenly">
        <button class="pan-button"><span style="font-weight: 600;">LH 주거복지 임대</span> 확인</button>
        <button class="pan-button" style="background-color: #9a999a;"><span style="font-weight: 600;">SH 주거복지 임대</span> 확인</button>
      </div>
      <ul  v-if="notices.length">
        <li v-for="(notice, index) in notices" :key="index">
          <div @click="goToDetail(notice.PAN_NM)">  
            <div class="HouseNoticelist" v-if="notice.PAN_SS != '공고중'">
              {{ notice.PAN_NM }}
              <div style="display: flex;">
                <div style="width: 200px;">
                  <div style="color:blue; font-size: 28px; font-weight: 700;">
                      D- {{ notice.PAN_NT_ST_DT }}
                  </div>
                  <div style="font-size:20px;font-weight: 500;">
                      공고일: {{ notice.PAN_NT_ST_DT }}
                  </div>
                </div> 
                <img @click="scrapNotice(notice)" class="star" src="@/assets/icons/Star.svg">
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div style="width: 100%; display: flex; justify-content: center; ">
        <HouseNoticePagination v-if="totalPages>1" :page="page" :totalPages="totalPages" @changePage="changePage"></HouseNoticePagination>
      </div>
     
    </div>
    <Footer/>
  </div>
</template>
<script>
import axios from 'axios';
import Top from '@/components/Top.vue';
import Footer from '@/components/Footer.vue';
import HouseNoticePagination from '@/components/HouseNoticePage/HouseNoticePagination.vue';
export default {
  name: 'HouseNoticePage',
  components:{
    Top,
    Footer,
    HouseNoticePagination
  },
  data() {
    return {
      notices: [], // 공고 목록
      loading: true, // 데이터 로딩 상태
      error: null, // 오류 메시지
      totalPages:'50',
      page:1,
      pageSize: 10
    };
  },
  computed: {
    // 페이지 버튼을 생성하기 위한 페이지 번호 배열
    pageNumbers() {
      const numbers = [];
      const maxPagesToShow = 5; // 표시할 최대 페이지 수
      const startPage = Math.max(1, this.page - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1);
      for (let i = startPage; i <= endPage; i++) {
        numbers.push(i);
      }
      return numbers;
    }
  },
  methods: {
    async fetchNotices() {
      const url = 'http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1'; // 실제 API 엔드포인트로 교체
      try {
        const response = await axios.get(url, {
          params: {
            serviceKey: '0khvXNpZtCdvzH1Dw76HNtpDP/XhiNIzhKRU43Dnphe7oXSziRtpdtaP4FORD5VYkOYFt2vqQQO1VklahVTOsA==', // 실제 서비스 키로 교체
            PG_SZ: 10,
            PAGE: this.page,
          }
        });

        console.log(response.data); // 응답 데이터 로그 출력

        let responseData = response.data[1];

        if (responseData.dsList && Array.isArray(responseData.dsList)) {
          this.notices = responseData.dsList || [];
        } else if (responseData.dsList){
          this.error = 'dslist 없음';
        } 

      } catch (error) {
        this.error = error.message;
      } finally {        
        this.loading = false;
      }
    },
    changePage(newPage) {
      if (newPage < 1 || newPage > this.totalPages) return; // 페이지 범위 체크
      this.page = newPage;
      this.fetchNotices(); // 새로운 페이지의 데이터를 가져옵니다
    },
    goToDetail(id) {
      // 상세 페이지로 이동
      console.log('Navigating to NoticeDetail with id:', id);
      this.$router.push({ name: 'HouseNoticeDetailPage', params: { id } });
    }, 
    scrapNotice(notice) {
      let scrappedNotices = JSON.parse(localStorage.getItem('scrappedNotices')) || [];
      if (!scrappedNotices.some(n => n.PAN_NM === notice.PAN_NM)) {
        scrappedNotices.push(notice);
        localStorage.setItem('scrappedNotices', JSON.stringify(scrappedNotices));
        alert('스크랩');
      } else {
        alert('스크랩 취소');
      }
    },
  },
  created() {
    this.fetchNotices();
  }
};

</script>
<style>
    .HouseNoticePage-Wrapper{
      margin-top: 7%;
        font-size:24px;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        gap:20px;
        justify-content: center;
        padding:2%;
    }

    .HouseNoticelist{
        padding:2%;
        border: solid lightgray 1px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin: 1%;
    }

    .star{
        position:relative;
        right:-10px;
        top:-30px;
        filter: saturate(0);
    }

    .scrapped{
        filter: saturate(100);
    }

    .pan-button{
      font-size: 24px;
      border-radius: 35ch;
      background-color: #1F72D3;
      color: white;
      padding:1.5% 5%;  
    }

  .pagination{

    position: absolute;
    top: 1400px;
    left: 40%;
  }
  .pagination button {
    font-size: 20px;
    padding: 20px;
    margin: 0px 20px;
  }
</style>