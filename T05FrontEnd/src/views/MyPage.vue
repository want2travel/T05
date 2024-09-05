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
            <component :is="currentView" />
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

export default {
  name: 'MyPage',
  components:{
    Top,
    Footer,
    MyInfo,
    ChangePassword,
    MySelfTest,
    ScrappedNotice,
  },

  data() {
    return {
      currentMenuText:'회원정보',
      selectedMenu:0,
      currentView: 'MyInfo',
      pages:[
        MyInfo,
        ChangePassword,
        MySelfTest,
        ScrappedNotice
      ],
      menuTexts: [
        '회원정보',
        '비밀번호 변경',
        '나의 자가진단',
        '공고문 스크랩'
      ]
    };
  },
  methods:{
    selectMenu(divNumber){
      this.selectedMenu=divNumber;
      this.currentView=this.pages[divNumber];
      this.currentMenuText=this.menuTexts[divNumber];
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