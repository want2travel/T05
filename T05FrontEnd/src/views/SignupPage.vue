<template>
  <div class="div">
    <img class="div3" src="../assets/icons/div1.svg" />
    <div class="div4">
      <div class="frame-1">
        <div class="div5">로그인</div>
      </div>
      <img class="account-circle" src="../assets/icons/account-circle0.svg" />
    </div>
    <div class="div6">
      <div class="div7">
        자주 묻는 질문
        <br />
      </div>
      <div class="div8">
        복지 비교하기
        <br />
      </div>
      <div class="div9">
        주거복지 공고
        <br />
      </div>
      <div class="line-6"></div>
      <div class="line-7"></div>
    </div>
    <div class="div10">
      <div class="div11">이사소통</div>
      <img class="div12" src="../assets/icons/div10.svg" />
    </div>
    <div class="div13">회원가입</div>
    <div class="div14">회원정보</div>
    <div class="div15">아이디(이메일)
      <input id="id" v-model="username" type="text" placeholder="아이디를 입력하세요" />
    </div>
    <div class="div16">비밀번호
    <input id="password" v-model="password" type="text" placeholder="비밀번호를 입력하세요" />
    </div>
    <div class="div17">비밀번호 확인
      <input id="password" v-model="password" type="text" placeholder="비밀번호를 다시 입력해주세요" />
    </div>
    <div class="div18">중위소득
      <input id="income" v-model.number="largeNumber" type="number" placeholder="중위소득을 입력하세요" />
    </div>
    <div class="div19">휴대폰번호 본인인증</div>
    <div class="div20">아래 약관에 모두 동의합니다.
      <input id="agreement" v-model="isChecked" type="checkbox" placeholder="중위소득을 입력하세요" />
    </div>
    <div class="div21">
      <span>
        <span class="div-21-span">이용약관 동의</span>
        <span class="div-21-span2">자세히보기</span>
      </span>
    </div>
    <div class="div22">
      <span>
        <span class="div-22-span">개인정보 처리방침 동의</span>
        <span class="div-22-span2">자세히보기</span>
      </span>
    </div>
    <div class="div23">
      <span>
        <span class="div-23-span">마케팅 정보 수신 동의</span>
        <span class="div-23-span2">자세히보기</span>
      </span>
    </div>
    <div class="div24">
      <span>
        <span class="div-24-span">공고 알림 서비스 동의</span>
        <span class="div-24-span2">자세히보기</span>
      </span>
    </div>
    <div class="div25">출생년도</div>
    <div class="div26">거주지</div>
    <div class="div27">성별</div>
    <div class="div28">남자</div>
    <div class="div29">여자</div>
    <div class="div30">필수 입력사항입니다.</div>
    <div class="_9-12">
      숫자, 영문, 특수문자(~!@#$%^&amp;*()_+)를 조합해서 입력하세요.(9~12자리)
    </div>
    <div class="div31">*</div>
    <div class="div32">*</div>
    <div class="div33">*</div>
    <div class="div34">*</div>
    <div class="div35">*</div>
    <div class="div36">*</div>
    <div class="div37">*</div>
    <div class="div38">*</div>
    <div class="div39">*</div>
    <div class="div40">*</div>
    <div class="div41">*</div>
    <div class="div42">@</div>
    <div class="line-12"></div>
    <div class="rectangle-62"></div>
    <div class="rectangle-66"></div>
    <div class="rectangle-67"></div>
    <div class="rectangle-80"></div>
    <div class="rectangle-74"></div>
    <div class="rectangle-71"></div>
    <div class="rectangle-72"></div>
    <div class="rectangle-73"></div>
    <div class="rectangle-64"></div>
    <div class="rectangle-63"></div>
    <div class="naver-com">naver.com</div>
    <div class="_2000">2000</div>
    <div class="_100">100%</div>
    <div class="div43">광역시/도</div>
    <div class="div44">시/군/구</div>
    <img class="vector" src="../assets/icons/vector0.svg" />
    <img class="vector2" src="../assets/icons/vector1.svg" />
    <img class="vector3" src="../assets/icons/vector2.svg" />
    <img class="vector4" src="../assets/icons/vector3.svg" />
    <img class="vector5" src="../assets/icons/vector4.svg" />
    <div class="rectangle-65"></div>
    <div class="div45">이메일 중복 확인</div>
    <div class="div46">인증하기</div>
    <div class="ellipse-18">
      <div class="ellipse-15"></div>
      <div class="ellipse-182"></div>
    </div>
    <div class="ellipse-152">
      <div class="ellipse-15"></div>
    </div>
    <div class="frame-25">
      <div class="div47">회원가입</div>
    </div>
    <div class="frame-26">
      <div class="div48">취소</div>
    </div>
    <div class="rectangle-75">
      <div class="rectangle-752"></div>
    </div>
    <div class="rectangle-76">
      <div class="rectangle-752"></div>
    </div>
    <div class="rectangle-77">
      <div class="rectangle-752"></div>
    </div>
    <div class="rectangle-78">
      <div class="rectangle-752"></div>
    </div>
    <div class="rectangle-79">
      <div class="rectangle-752"></div>
    </div>
    <div class="rectangle-20"></div>
    <div class="div49">
      <div class="div50">개인정보처리방침</div>
      <div class="div51">홈페이지 이용약관</div>
      <div class="div52">
        품질오류신고 및 확인
        <br />
      </div>
    </div>
    <div class="div53">
      <div class="rectangle-16"></div>
      <img class="formkit-up" src="../assets/icons/formkit-up0.svg" />
      <div class="line-1"></div>
      <div class="div54">지역별 복지</div>
    </div>
    <div class="div55">
      <div class="rectangle-21"></div>
      <img class="formkit-up2" src="../assets/icons/formkit-up1.svg" />
      <div class="line-2"></div>
      <div class="div56">정부 기관</div>
    </div>
    <div class="div57">기관별 연락처</div>
    <div class="div58">
      <span>
        <span class="div-58-span">국민건강보험</span>
        <span class="div-58-span2"></span>
        <span class="div-58-span3">에서 건강보험료 확인 &gt;</span>
        <span class="div-58-span4">중위소득표</span>
        <span class="div-58-span5"></span>
        <span class="div-58-span6">통해 중위소득 확인</span>
      </span>
    </div>
    <div class="rectangle-83"></div>
    <div class="rectangle-82"></div>
    <img class="gridicons-notice-outline" src="../assets/icons/gridicons-notice-outline0.svg" />
  </div>
  
</template>

<script>
export default {
  name: 'SignupComponent', 
  data() {
    return { username: '', password: '', income: 0, agreement: true };
  },
  methods: {
    async goToLogin() {
      try {
        const res = await fetch('/api/SignupPage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            username: this.username,
            password: this.password,
            income: this.income,
            agreement: this.agreement
          }),
        });
        if (res.ok) {
          // 회원가입 성공 시 로그인 페이지로 이동
          this.$router.push('/loginPage');
        } else {
          // 인증 실패 시 로그인 페이지로 이동 및 에러 메시지 표시
          alert('다시 회원가입을 시도해 주십시오.');
          this.$router.push('/api/SignupPage');
        }
      } catch (error) {
        alert('이미 존재하는 아이디입니다.');
        this.$router.push('/loginPage'); // 오류 발생 시 로그인 페이지로 리다이렉트
      }
    }
  }
}
</script>

  
<style>
  .div,
  .div * {
    box-sizing: border-box;
  }
  .div {
    background: #ffffff;
    height: 3042px;
    position: relative;
  }
  .div2 {
    position: absolute;
    inset: 0;
  }
  .div3 {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 1317px;
    top: 64px;
    overflow: visible;
  }
  .div4 {
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
  .div5 {
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
  .div6 {
    width: 568.98px;
    height: 44px;
    position: static;
  }
  .div7 {
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
  .div8 {
    color: #707d87;
    text-align: justified;
    font-family: "Inter-Regular", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    left: 445px;
    top: 76px;
    width: 153px;
    height: 38px;
  }
  .div9 {
    color: #707d87;
    text-align: justified;
    font-family: "Inter-Light", sans-serif;
    font-size: 24px;
    font-weight: 300;
    position: absolute;
    left: 621px;
    top: 77px;
    width: 204.2px;
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
  .div10 {
    width: 239.18px;
    height: 54.94px;
    position: static;
  }
  .div11 {
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
  .div12 {
    width: 70px;
    height: 50px;
    position: absolute;
    left: 73px;
    top: 60px;
    overflow: visible;
  }
  .div13 {
    color: #000000;
    text-align: center;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 36px;
    font-weight: 600;
    position: absolute;
    left: 622px;
    top: 190px;
    width: 195px;
    height: 44px;
  }
  .div14 {
    color: #000000;
    text-align: center;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 32px;
    font-weight: 600;
    position: absolute;
    left: 215px;
    top: 281px;
    width: 195px;
    height: 44px;
  }
  .div15 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 260px;
    top: 382px;
    width: 191px;
    height: 44px;
  }
  .div16 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 253px;
    top: 705px;
    width: 113px;
    height: 44px;
  }
  .div17 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 253px;
    top: 979px;
    width: 192px;
    height: 44px;
  }
  .div18 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 253px;
    top: 1827px;
    width: 116px;
    height: 44px;
  }
  .div19 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 260px;
    top: 2050px;
    width: 264px;
    height: 44px;
  }
  .div20 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 314px;
    top: 2266px;
    width: 376px;
    height: 44px;
  }
  .div21 {
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
    position: absolute;
    left: 316px;
    top: 2331px;
    width: 311px;
    height: 44px;
  }
  .div-21-span {
    color: #000000;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
  }
  .div-21-span2 {
    color: #49454f;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
    text-decoration: underline;
  }
  .div22 {
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
    position: absolute;
    left: 314px;
    top: 2380px;
    width: 422px;
    height: 44px;
  }
  .div-22-span {
    color: #000000;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
  }
  .div-22-span2 {
    color: #49454f;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
    text-decoration: underline;
  }
  .div23 {
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
    position: absolute;
    left: 314px;
    top: 2428px;
    width: 415px;
    height: 44px;
  }
  .div-23-span {
    color: #000000;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
  }
  .div-23-span2 {
    color: #49454f;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
    text-decoration: underline;
  }
  .div24 {
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
    position: absolute;
    left: 314px;
    top: 2475px;
    width: 415px;
    height: 44px;
  }
  .div-24-span {
    color: #000000;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
  }
  .div-24-span2 {
    color: #49454f;
    font-family: "Inter-Medium", sans-serif;
    font-size: 27px;
    font-weight: 500;
    text-decoration: underline;
  }
  .div25 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 255px;
    top: 1378px;
    width: 118px;
    height: 44px;
  }
  .div26 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 253px;
    top: 1601px;
    width: 88px;
    height: 44px;
  }
  .div27 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 255px;
    top: 1195px;
    width: 57px;
    height: 44px;
  }
  .div28 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Thin", sans-serif;
    font-size: 30px;
    font-weight: 100;
    position: absolute;
    left: 297px;
    top: 1252px;
    width: 69px;
    height: 44px;
  }
  .div29 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Thin", sans-serif;
    font-size: 30px;
    font-weight: 100;
    position: absolute;
    left: 453px;
    top: 1252px;
    width: 69px;
    height: 44px;
  }
  .div30 {
    color: #76737b;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 908px;
    top: 291px;
    width: 289px;
    height: 42px;
  }
  ._9-12 {
    color: #4389dc;
    text-align: left;
    font-family: "Inter-Medium", sans-serif;
    font-size: 24px;
    font-weight: 500;
    position: absolute;
    left: 258px;
    top: 863px;
    width: 808px;
    height: 42px;
  }
  .div31 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 436px;
    top: 375px;
    width: 46px;
    height: 44px;
  }
  .div32 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 354px;
    top: 698px;
    width: 46px;
    height: 44px;
  }
  .div33 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 427px;
    top: 972px;
    width: 46px;
    height: 44px;
  }
  .div34 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 360px;
    top: 1820px;
    width: 46px;
    height: 44px;
  }
  .div35 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 518px;
    top: 2043px;
    width: 46px;
    height: 44px;
  }
  .div36 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 364px;
    top: 1374px;
    width: 46px;
    height: 44px;
  }
  .div37 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 333px;
    top: 1597px;
    width: 46px;
    height: 44px;
  }
  .div38 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 461px;
    top: 2320px;
    width: 46px;
    height: 44px;
  }
  .div39 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 567px;
    top: 2369px;
    width: 46px;
    height: 44px;
  }
  .div40 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 310px;
    top: 1188px;
    width: 46px;
    height: 44px;
  }
  .div41 {
    color: #ff1414;
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 884px;
    top: 293px;
    width: 46px;
    height: 44px;
  }
  .div42 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Light", sans-serif;
    font-size: 32px;
    font-weight: 300;
    position: absolute;
    left: 702px;
    top: 457px;
    width: 50px;
    height: 44px;
  }
  .line-12 {
    margin-top: -1px;
    border-style: solid;
    border-color: #6e6e6e;
    border-width: 1px 0 0 0;
    width: 950px;
    height: 0px;
    position: absolute;
    left: 245px;
    top: 341px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(1, 1);
  }
  .rectangle-62 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 430px;
    height: 81px;
    position: absolute;
    left: 264px;
    top: 439px;
  }
  .rectangle-66 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 928px;
    height: 81px;
    position: absolute;
    left: 258px;
    top: 762px;
  }
  .rectangle-67 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 928px;
    height: 81px;
    position: absolute;
    left: 258px;
    top: 1036px;
  }
  .rectangle-80 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 928px;
    height: 81px;
    position: absolute;
    left: 258px;
    top: 1884px;
  }
  .rectangle-74 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #4391df;
    border-width: 1px;
    width: 928px;
    height: 81px;
    position: absolute;
    left: 265px;
    top: 2107px;
  }
  .rectangle-71 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 928px;
    height: 81px;
    position: absolute;
    left: 258px;
    top: 1438px;
  }
  .rectangle-72 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 450px;
    height: 81px;
    position: absolute;
    left: 256px;
    top: 1661px;
  }
  .rectangle-73 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 450px;
    height: 81px;
    position: absolute;
    left: 736px;
    top: 1661px;
  }
  .rectangle-64 {
    background: rgba(154, 153, 154, 0.35);
    border-radius: 8px;
    width: 540px;
    height: 81px;
    position: absolute;
    left: 266px;
    top: 553px;
  }
  .rectangle-63 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 430px;
    height: 81px;
    position: absolute;
    left: 762px;
    top: 439px;
  }
  .naver-com {
    color: #000000;
    text-align: center;
    font-family: "Inter-Light", sans-serif;
    font-size: 32px;
    font-weight: 300;
    position: absolute;
    left: 776px;
    top: 457px;
    width: 190px;
    height: 44px;
  }
  ._2000 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Light", sans-serif;
    font-size: 32px;
    font-weight: 300;
    position: absolute;
    left: 288px;
    top: 1458px;
    width: 90px;
    height: 44px;
  }
  ._100 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Light", sans-serif;
    font-size: 32px;
    font-weight: 300;
    position: absolute;
    left: 288px;
    top: 1903px;
    width: 90px;
    height: 44px;
  }
  .div43 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Light", sans-serif;
    font-size: 32px;
    font-weight: 300;
    position: absolute;
    left: 285px;
    top: 1682px;
    width: 138px;
    height: 44px;
  }
  .div44 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Light", sans-serif;
    font-size: 32px;
    font-weight: 300;
    position: absolute;
    left: 765px;
    top: 1682px;
    width: 116px;
    height: 44px;
  }
  .vector {
    width: 30px;
    height: 15px;
    position: absolute;
    left: 1132px;
    top: 473px;
    overflow: visible;
  }
  .vector2 {
    width: 30px;
    height: 15px;
    position: absolute;
    left: 1126px;
    top: 1487px;
    overflow: visible;
  }
  .vector3 {
    width: 30px;
    height: 15px;
    position: absolute;
    left: 1126px;
    top: 1930px;
    overflow: visible;
  }
  .vector4 {
    width: 30px;
    height: 15px;
    position: absolute;
    left: 650px;
    top: 1694px;
    overflow: visible;
  }
  .vector5 {
    width: 30px;
    height: 15px;
    position: absolute;
    left: 1126px;
    top: 1707px;
    overflow: visible;
  }
  .rectangle-65 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #4391df;
    border-width: 1px;
    width: 365px;
    height: 81px;
    position: absolute;
    left: 827px;
    top: 553px;
  }
  .div45 {
    color: #4391df;
    text-align: center;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 32px;
    font-weight: 600;
    position: absolute;
    left: 894px;
    top: 573px;
    width: 231px;
    height: 44px;
  }
  .div46 {
    color: #4391df;
    text-align: center;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 32px;
    font-weight: 600;
    position: absolute;
    left: 589px;
    top: 2125px;
    width: 231px;
    height: 44px;
  }
  .ellipse-18 {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 266px;
    top: 1258px;
  }
  .ellipse-15 {
    background: #ffffff;
    border-radius: 50%;
    border-style: solid;
    border-color: #9a999a;
    border-width: 1px;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
  }
  .ellipse-182 {
    background: #cbe342;
    border-radius: 50%;
    width: 91.67%;
    height: 91.67%;
    position: absolute;
    right: 4.17%;
    left: 4.17%;
    bottom: 4.17%;
    top: 4.17%;
  }
  .ellipse-152 {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 424px;
    top: 1259px;
  }
  .frame-25 {
    background: #1f72d3;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 444px;
    height: 81px;
    position: absolute;
    left: 736px;
    top: 2597px;
  }
  .div47 {
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
  .frame-26 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #9a999a;
    border-width: 1px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 444px;
    height: 81px;
    position: absolute;
    left: 256px;
    top: 2597px;
  }
  .div48 {
    color: #49454f;
    text-align: center;
    font-family: "Inter-Bold", sans-serif;
    font-size: 32px;
    font-weight: 700;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rectangle-75 {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 265px;
    top: 2275px;
  }
  .rectangle-752 {
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #b3abab;
    border-width: 1px;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
  }
  .rectangle-76 {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 265px;
    top: 2333px;
  }
  .rectangle-77 {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 265px;
    top: 2380px;
  }
  .rectangle-78 {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 265px;
    top: 2427px;
  }
  .rectangle-79 {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 265px;
    top: 2474px;
  }
  .rectangle-20 {
    background: #dfdee0;
    width: 1440px;
    height: 273px;
    position: absolute;
    left: 2px;
    top: 2769px;
  }
  .div49 {
    width: 670px;
    height: 38.54px;
    position: static;
  }
  .div50 {
    color: #000000;
    text-align: left;
    font-family: "Inter-Regular", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    left: 83px;
    top: 2965px;
    width: 195px;
    height: 34.16px;
  }
  .div51 {
    color: #000000;
    text-align: left;
    font-family: "Inter-Regular", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    left: 293px;
    top: 2966.75px;
    width: 200px;
    height: 35.91px;
  }
  .div52 {
    color: #000000;
    text-align: left;
    font-family: "Inter-Regular", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    left: 508px;
    top: 2966.75px;
    width: 245px;
    height: 36.79px;
  }
  .div53 {
    width: 409px;
    height: 58.7px;
    position: static;
  }
  .rectangle-16 {
    background: #dfdee0;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.62);
    border-width: 1px;
    width: 409px;
    height: 55px;
    position: absolute;
    left: 84px;
    top: 2869px;
  }
  .formkit-up {
    width: 50px;
    height: 17.52px;
    position: absolute;
    left: 432px;
    top: 2888.27px;
    overflow: visible;
  }
  .line-1 {
    margin-top: -1px;
    border-style: solid;
    border-color: #9a999a;
    border-width: 1px 0 0 0;
    width: 54.04px;
    height: 0px;
    position: absolute;
    left: 419px;
    top: 2868.98px;
    transform-origin: 0 0;
    transform: rotate(90deg) scale(1, 1);
  }
  .div54 {
    color: rgba(0, 0, 0, 0.91);
    text-align: left;
    font-family: "Inter-Thin", sans-serif;
    font-size: 24px;
    font-weight: 100;
    position: absolute;
    left: 106px;
    top: 2882.14px;
    width: 133px;
    height: 45.54px;
  }
  .div55 {
    width: 409px;
    height: 59.06px;
    position: static;
  }
  .rectangle-21 {
    background: #dfdee0;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.62);
    border-width: 1px;
    width: 409px;
    height: 58.7px;
    position: absolute;
    left: 581px;
    top: 2869px;
  }
  .formkit-up2 {
    width: 50px;
    height: 17.26px;
    position: absolute;
    left: 929px;
    top: 2887.98px;
    overflow: visible;
  }
  .line-2 {
    margin-top: -1px;
    border-style: solid;
    border-color: #9a999a;
    border-width: 1px 0 0 0;
    width: 59.06px;
    height: 0px;
    position: absolute;
    left: 919.25px;
    top: 2868.95px;
    transform-origin: 0 0;
    transform: rotate(90deg) scale(1, 1);
  }
  .div56 {
    color: rgba(0, 0, 0, 0.91);
    text-align: left;
    font-family: "Inter-Thin", sans-serif;
    font-size: 24px;
    font-weight: 100;
    position: absolute;
    left: 611px;
    top: 2882.81px;
    width: 133px;
    height: 44.87px;
  }
  .div57 {
    color: #000000;
    text-align: center;
    font-family: "Inter-ExtraBold", sans-serif;
    font-size: 28px;
    font-weight: 800;
    position: absolute;
    left: 83px;
    top: 2809px;
    width: 170px;
    height: 29px;
  }
  .div58 {
    text-align: left;
    font-family: "-", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    left: 460px;
    top: 1833px;
    width: 750px;
    height: 39px;
  }
  .div-58-span {
    color: #4391df;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-decoration: underline;
  }
  .div-58-span2 {
    color: #4391df;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 24px;
    font-weight: 600;
  }
  .div-58-span3 {
    color: #49454f;
    font-family: "Inter-Medium", sans-serif;
    font-size: 24px;
    font-weight: 500;
  }
  .div-58-span4 {
    color: #4391df;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-decoration: underline;
  }
  .div-58-span5 {
    color: #4391df;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 24px;
    font-weight: 600;
  }
  .div-58-span6 {
    color: #49454f;
    font-family: "Inter-Medium", sans-serif;
    font-size: 24px;
    font-weight: 500;
  }
  .rectangle-83 {
    background: rgba(217, 217, 217, 0);
    border-radius: 8px;
    border-style: solid;
    border-color: #4391df;
    border-width: 1px;
    width: 126px;
    height: 45px;
    position: absolute;
    left: 856px;
    top: 1825px;
  }
  .rectangle-82 {
    background: rgba(217, 217, 217, 0);
    border-radius: 8px;
    border-style: solid;
    border-color: #4391df;
    border-width: 1px;
    width: 151px;
    height: 45px;
    position: absolute;
    left: 451px;
    top: 1825px;
  }
  .gridicons-notice-outline {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 403px;
    top: 1826px;
    overflow: visible;
  }
  
 </style>