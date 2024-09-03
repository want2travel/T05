<template>
    <div class="ScrappedNotice-Wrapper">
        <ul  v-if="scrappedNotices.length">
            <li v-for="(notice, index) in notices" :key="index">
                <div>  
                    <div class="scraplist">
                        {{ notice.PAN_NM }}
                        <div style="display: flex;">
                            <div>
                                <div style="color:blue">
                                    D- {{ notice.PAN_NT_ST_DT }}
                                </div>
                                <div style="font-size:20px;font-weight: 500;">
                                    공고일: {{ notice.PAN_NT_ST_DT }}
                                </div>
                            </div>
                            
                            <img class="star" src="@/assets/icons/Star.svg">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name:'ScrappedNoticeComponent',
  data() {
    return {
      scrappedNotices: [], // 공고 목록
      loading: true, // 데이터 로딩 상태
      error: null, // 오류 메시지
    };
  },
  methods: {
    loadScrappedNotices() {
      const savedNotices = JSON.parse(localStorage.getItem('scrappedNotices')) || [];
      this.scrappedNotices = savedNotices;
    },
  },
  created() {
    this.fetchNotices();
  }
};
</script>
<style>
    .ScrappedNotice-Wrapper{
        
        font-size:24px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        gap:20px;
        justify-content: center;
        border: solid lightgray 1px;
        padding:2%;
    }

    .scraplist{
        padding:2%;
        border: solid lightgray 1px;
        display: flex;
        justify-content: space-between;
        margin: 1%;
    }

    .star{
        position:relative;
        right:-10px;
        top:-30px;
    }
</style>