<template>
    <div>
        <div class="list-item">
            <div>
                <span style="font-weight: 600;">1. 기준 중위소득 </span>
                <span style="font-size: 24px; color: gray;">전체 가구소득의 중간값</span>
            </div>
            <div class="list-box">
                중위소득 <input type="number">%이며, 이는 <input type="number">원입니다.
            </div>
        </div>
        <div class="list-item">
            <div>
                <span style="font-weight: 600;">2. 부양의무자, 가구원 수 </span>
            </div>
            <div class="list-box">
                부양의무자가 <input type="number">명 있습니다. 가구원 수는 <input type="number">명입니다.
            </div>
        </div>
        <div class="list-item">
            <div>
                <span style="font-weight: 600;">3. 나이와 건강 </span>
            </div>
            <div class="list-box">
                현재 만 <input type="number">세이며, 주요 병력 사항이 없습니다
            </div>
        </div>
        <div class="list-item">
            <div>
                <span style="font-weight: 600;">4. 거주지 </span>
            </div>
            <div class="list-box">
                대한민국 국민이며, 서울특별시 중구에서 2년 8개월째 거주중입니다.
            </div>
        </div>
        
        <div style="display: flex; justify-content: center;">
            <button class="self-test-button" >
                자가진단 수정하기
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name:'SelfTest1'
}
</script>
<style>
    .list-item{
        font-size: 30px;
        margin-bottom: 50px;
    }

    .list-box{
        border: 1px solid black;
        margin-top: 20px;
        padding: 30px;
    }

    .self-test-button{
        background-color: #1F72D3;
        color: white;
        font-weight: 600;
        border-radius: 0px;
        padding: 10px 80px;
        font-size: 30px;
    }
</style>