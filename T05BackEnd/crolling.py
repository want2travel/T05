from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

from selenium.webdriver.common.by import By

# ChromeDriver의 실제 경로 설정
chrome_driver_path = 'C:/Users/user/chromedriver-win64/chromedriver.exe'

# Selenium 드라이버 설정
chrome_options = Options()
chrome_options.add_argument("--headless")  # 브라우저를 띄우지 않고 실행
chrome_service = Service(chrome_driver_path)  # ChromeDriver 경로 설정
driver = webdriver.Chrome(service=chrome_service, options=chrome_options)

# URL 설정
url = 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52005M.do'
driver.get(url)

# 페이지 로딩 대기
time.sleep(5)  # 페이지 로딩 대기 (페이지 로딩에 따라 조절 필요)

# 'class="cl-control cl-output cl-first-row cl-unselectable cl-writingmode-horizontal-tb new-card-tit"'를 가진 div 요소들 찾기
parent_divs = driver.find_elements(By.CLASS_NAME, 'cl-control')

# 파일에 데이터 저장
with open('welfare_services.txt', 'w', encoding='utf-8') as file:
    for parent_div in parent_divs:
        # 자식 div 중 'class="cl-text"'를 가진 요소 찾기
        text_divs = parent_div.find_elements(By.CLASS_NAME, 'cl-text')
        for text_div in text_divs:
            # 텍스트 추출
            service_text = text_div.text.strip()

            # 텍스트 파일에 저장
            file.write(f"서비스명: {service_text}\n")
            file.write("=" * 50 + "\n")

driver.quit()
print("데이터가 welfare_services.txt 파일에 저장되었습니다.")
