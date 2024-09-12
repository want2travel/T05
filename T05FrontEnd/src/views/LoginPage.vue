<template>
  <div class="div">
    <div class="div3">
      아이디
      <br />
      <br />
      <br />
      비밀번호
    </div>
    <div class="rectangle-33">
      <input id="id" v-model="username" type="text" placeholder="아이디를 입력하세요" />
    </div>
    <div class="rectangle-34">
      <input id="password" v-model="password" type="password" placeholder="비밀번호를 입력하세요" />
    </div>
    <div class="frame-25">
    <img @click="goToLogin" class="login-button" alt= 'login'/>
  </div>
    <div class="div5">
      <div class="div6">회원가입
        <img @click="goToSignup"/>
      </div>
      <div class="div7">아이디 찾기 | 비밀번호 찾기 |</div>
    </div>
    <img class="rectangle-52" src="../assets/icons/rectangle-520.svg" />
    <div class="div8">카카오 로그인</div>
    <img class="_1" src="../assets/poster/_10.png" />
    <div class="div9">
      <div class="div10">이사소통</div>
      <img class="div11" src="../assets/icons/div12.svg" />
    </div>
    <img class="div12" src="../assets/icons/div13.svg" />
    <div class="div13">
      <div class="frame-1">
        <div class="div14">로그인</div>
      </div>
      <img class="account-circle" src="../assets/icons/account-circle0.svg" />
    </div>
    <div class="div15">
      <div class="div16">
        자주 묻는 질문
        <br />
      </div>
      <div class="div17">
        복지 비교하기
        <br />
      </div>
      <div class="div18">
        주거복지 공고
        <br />
      </div>
      <div class="line-6"></div>
      <div class="line-7"></div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'loginComponent',
  data() {
    return { username: '', password: '' };
  },
  methods: {
    async goToLogin() {
      try {
        const res = await fetch('/loginPage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            username: this.username,
            password: this.password
          }),
        });
        if (res.ok) {
          // 인증 성공 시 프로필 페이지로 이동
          this.$router.push('/');
        } else {
          // 인증 실패 시 로그인 페이지로 이동 및 에러 메시지 표시
          alert('로그인 정보가 틀렸습니다.');
          this.$router.push('/loginPage');
        }
      } catch (error) {
        console.error('로그인 오류:', error);
        this.$router.push('/loginPage'); // 오류 발생 시 로그인 페이지로 리다이렉트
      }
    },
    async goToSignup() {
      const res = await fetch('/loginPage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
      })
      
      res.redirect('/api/SignupPage')
    }
  }
};
</script>


<style scoped>
.div,
.div * {
  box-sizing: border-box;
}
.div {
  background: #ffffff;
  height: 1024px;
  position: relative;
  overflow: hidden;
}
.div2 {
  position: absolute;
  inset: 0;
}
.div3 {
  color: #000000;
  text-align: left;
  font-family: "Inter-Regular", sans-serif;
  font-size: 32px;
  font-weight: 400;
  position: absolute;
  left: 361px;
  top: 314px;
  width: 720px;
  height: 205px;
}
.rectangle-33 {
  background: rgba(31, 114, 211, 0);
  border-radius: 8px;
  border-style: solid;
  border-color: #b3b2b3;
  border-width: 1px;
  width: 495.13px;
  height: 56.07px;
  position: absolute;
  left: 517px;
  top: 310px;
}
.rectangle-34 {
  background: rgba(31, 114, 211, 0);
  border-radius: 8px;
  border-style: solid;
  border-color: #b3b2b3;
  border-width: 1px;
  width: 495.13px;
  height: 56.07px;
  position: absolute;
  left: 517px;
  top: 425px;
}
.frame-25 {
  background: #1f72d3;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 651px;
  height: 70px;
  position: absolute;
  left: 361px;
  top: 536px;
  z-index: 10;
  pointer-events: auto;
}
.div4 {
  color: #ffffff;
  text-align: center;
  font-family: "Inter-Bold", sans-serif;
  font-size: 32px;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.div5 {
  width: 340px;
  height: 51px;
  position: static;
}
.div6 {
  color: #000000;
  text-align: center;
  font-family: "Inter-Thin", sans-serif;
  font-size: 20px;
  font-weight: 100;
  position: absolute;
  left: 780px;
  top: 633px;
  width: 77px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.div7 {
  color: #000000;
  text-align: center;
  font-family: "Inter-Thin", sans-serif;
  font-size: 20px;
  font-weight: 100;
  position: absolute;
  left: 517px;
  top: 628px;
  width: 265px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rectangle-52 {
  border-radius: 0px;
  width: 651px;
  height: 70px;
  position: absolute;
  left: 358px;
  top: 767px;
  overflow: visible;
}
.div8 {
  color: #000000;
  text-align: center;
  font-family: "Inter-Bold", sans-serif;
  font-size: 32px;
  font-weight: 700;
  position: absolute;
  left: 642px;
  top: 783px;
  display: flex;
  align-items: center;
  justify-content: center;
}
._1 {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 587px;
  top: 782px;
  object-fit: cover;
}
.div9 {
  width: 239.18px;
  height: 54.94px;
  position: static;
}
.div10 {
  color: #000000;
  text-align: left;
  font-family: "Inter-Bold", sans-serif;
  font-size: 40px;
  letter-spacing: 0.05em;
  font-weight: 700;
  position: absolute;
  left: 158.18px;
  top: 66.94px;
}
.div11 {
  width: 70px;
  height: 50px;
  position: absolute;
  left: 73px;
  top: 60px;
  overflow: visible;
}
.div12 {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 1317px;
  top: 64px;
  overflow: visible;
}
.div13 {
  width: 142px;
  height: 55px;
  position: static;
}
.frame-1 {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 1202px;
  top: 65px;
}
.div14 {
  color: #49454f;
  text-align: left;
  font-family: "Inter-Thin", sans-serif;
  font-size: 24px;
  font-weight: 100;
  position: relative;
}
.account-circle {
  width: 55px;
  height: 55px;
  position: absolute;
  left: 1147px;
  top: 64px;
  overflow: visible;
}
.div15 {
  width: 568.98px;
  height: 44px;
  position: static;
}
.div16 {
  color: #707d87;
  text-align: justified;
  font-family: "Inter-Light", sans-serif;
  font-size: 24px;
  font-weight: 300;
  position: absolute;
  left: 822px;
  top: 77px;
  width: 191.98px;
  height: 38px;
}
.div17 {
  color: #707d87;
  text-align: justified;
  font-family: "Inter-Light", sans-serif;
  font-size: 24px;
  font-weight: 300;
  position: absolute;
  left: 445px;
  top: 76px;
  width: 153px;
  height: 38px;
}
.div18 {
  color: #707d87;
  text-align: justified;
  font-family: "Inter-Regular", sans-serif;
  font-size: 24px;
  font-weight: 400;
  position: absolute;
  left: 621px;
  top: 77px;
  width: 167px;
  height: 38px;
}
.line-6 {
  margin-top: -1px;
  border-style: solid;
  border-color: #828d96;
  border-width: 1px 0 0 0;
  width: 36px;
  height: 0px;
  position: absolute;
  left: 612px;
  top: 71px;
  transform-origin: 0 0;
  transform: rotate(90deg) scale(1, 1);
}
.line-7 {
  margin-top: -1px;
  border-style: solid;
  border-color: #828d96;
  border-width: 1px 0 0 0;
  width: 36px;
  height: 0px;
  position: absolute;
  left: 797px;
  top: 73px;
  transform-origin: 0 0;
  transform: rotate(90deg) scale(1, 1);
}

</style>
