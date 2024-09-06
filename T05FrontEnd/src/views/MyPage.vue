<template>
    <Top/>
        <div class="wrapper" style="display: flex;">
          <div class="rectangle myPageMenu">
            <div class="menu-text">
              마이페이지
              <br/>
              <span>정예빈</span><span style="font-size: 20px; font-weight: 200;"> 님</span>
            </div>
          
            <div class="rectangle myPageMenu-2">
              <ul class="myPageMenu-navbar">
                <li :class="{ selected: selectedMenu === 0 }" @click="selectMenu(0)">회원정보</li>
                <li :class="{ selected: selectedMenu === 1 }" @click="selectMenu(1)">비밀번호 변경</li>
                <li :class="{ selected: selectedMenu === 2 }" @click="selectMenu(2)">나의 자가진단</li>
                <li :class="{ selected: selectedMenu === 3 }" @click="selectMenu(3)">공고문 스크랩</li>
              </ul>
            </div>
            
          </div>

          <div class="myPageMain">
            <div>메뉴 > 마이페이지 > {{ currentMenuText }}</div>
            <hr style="position: relative; margin: 25px 0px; border: 1px solid lightgray;"/>
            <div style="width: 100%;"></div>
            <component :is="currentView" 
                       :currentMenuText="currentMenuText"
                       :selectedMenu="selectedMenu"
                       @update-menu="handleMenuUpdate" />
          </div>
        </div>
    <Footer/>
</template>
<script>
import Top from '@/components/Top.vue';
import Footer from '@/components/Footer.vue';
import MyInfo from '@/components/MyPage/MyInfo.vue';
import ChangePassword from '@/components/MyPage/ChangePassword.vue';
import MySelfTest from '@/components/MyPage/MySelfTest.vue';
import ScrappedNotice from '@/components/MyPage/ScrappedNotice.vue';
import SelfTest1 from '@/components/SelfTest/SelfTest1.vue';
export default {
  name: 'MyPage',
  components:{
    Top,
    Footer,
    MyInfo,
    ChangePassword,
    MySelfTest,
    ScrappedNotice,
    SelfTest1
  },

  data() {
    return {
      currentMenuText:'회원정보',
      selectedMenu:0,
      currentView: 'MyInfo',
      pages: {
        MyInfo: MyInfo,
        ChangePassword: ChangePassword,
        MySelfTest: MySelfTest,
        ScrappedNotice: ScrappedNotice,
        SelfTest1: SelfTest1
      },
      menuTexts: {
        MyInfo: '회원정보',
        ChangePassword: '비밀번호 변경',
        MySelfTest: '나의 자가진단',
        ScrappedNotice: '공고문 스크랩',
        SelfTest1: '나의 자가진단 > 자가진단 수정하기'
      }
    };
  },
  methods:{
    selectMenu(index){
      const keys = Object.keys(this.pages);
      this.selectedMenu = index;
      this.currentView = keys[index];
      this.currentMenuText = this.menuTexts[keys[index]];
    },
    handleMenuUpdate({ view }) {
      if (this.pages[view]) {  // 유효한 페이지인지 확인
        this.currentView = view;
        this.currentMenuText = this.menuTexts[view] || '알 수 없는 메뉴';
      } else {
        console.warn(`메뉴에 없는 컴포넌트로 변경하려 했습니다: ${view}`);
      }
    }
  }
};
</script>
<style>
  .myPageMenu{
    width: 250px;
    height: 334px;
    background-color: #1264af;
    
    margin:5%;
    margin-top:15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:white;
  }

  .myPageMenu-2{
    width: 95%;
    height: 60%;
    background-color: white;
    margin: 2.5%;
    color:black;
    padding:2% 7%;
    font-size: 20px;
    font-weight: 600;
    color:navy;
  }

  .menu-text{
    margin: 10%;
    font-family: "Inter-Bold", sans-serif;
    font-size: 24px;
    font-weight: 700; 
  }

  .myPageMenu-navbar{
    color: black;
    font-weight: 500;
    margin:10% 0%;
  }
  .myPageMenu-navbar li {
    margin-bottom:6%;
    cursor:pointer;
  }

  .myPageMain{
    margin-top: 12%;
    width: 70%;
  }

  .selected{
    border-bottom: solid navy;
    font-weight: 700;
    color:navy
  }
</style>