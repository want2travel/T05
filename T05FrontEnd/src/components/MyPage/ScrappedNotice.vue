<template>
  <div class="ScrappedNotice-Wrapper">
    <ul v-if="scrappedNotices.length">
      <li v-for="(notice, index) in scrappedNotices" :key="index">
        <div>
          <div class="scraplist">
            {{ notice.PAN_NM }}
            <div style="display: flex;">
              <div>
                <div style="color: blue">
                  D- {{ notice.PAN_NT_ST_DT }}
                </div>
                <div style="font-size: 20px; font-weight: 500;">
                  공고일: {{ notice.PAN_NT_ST_DT }}
                </div>
              </div>
              <img
                class="star"
                :class="{ 'star scrapped': notice.scrapped, 'star not-scrapped': !notice.scrapped }"
                src="@/assets/icons/Star.svg"
                @click="toggleScrap(notice)"
                alt="star"
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>스크랩된 공고가 없습니다</p>
  </div>
</template>

<script>
export default {
  name: 'ScrappedNoticeComponent',
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
    toggleScrap(notice) {
      // Toggle scrapped state
      notice.scrapped = !notice.scrapped; 
      if (notice.scrapped) {
        this.addScrappedNotice(notice);
      } else {
        this.removeScrappedNotice(notice);
      }
    },
    addScrappedNotice(notice) {
      const index = this.scrappedNotices.findIndex(n => n.PAN_NM === notice.PAN_NM);
      if (index === -1) {
        this.scrappedNotices.push(notice);
        localStorage.setItem('scrappedNotices', JSON.stringify(this.scrappedNotices));
      }
    },
    removeScrappedNotice(notice) {
      const index = this.scrappedNotices.findIndex(n => n.PAN_NM === notice.PAN_NM);
      if (index !== -1) {
        this.scrappedNotices.splice(index, 1);
        localStorage.setItem('scrappedNotices', JSON.stringify(this.scrappedNotices));
      }
    }
  },
  created() {
    this.loadScrappedNotices();
  }
};
</script>

<style>
.ScrappedNotice-Wrapper {
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  border: solid lightgray 1px;
  padding: 2%;
}

.scraplist {
  padding: 2%;
  border: solid lightgray 1px;
  display: flex;
  justify-content: space-between;
  margin: 1%;
}

.star {
  position: relative;
  right: -10px;
  top: -30px;
  cursor: pointer; /* Add cursor pointer for better UX */
}

.scrapped {
  filter: saturate(100%); /* Example style for scrapped state */
}

.not-scrapped {
  filter: saturate(0%); /* Example style for not scrapped state */
}
</style>
