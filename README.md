# 강동자바라 GitHub Pages 견적계산기 업로드 방법

1. GitHub 저장소 `kd` 화면에서 `Upload files` 클릭
2. 이 폴더 안의 파일 4개를 업로드
   - index.html
   - style.css
   - script.js
   - prices.js
3. 아래 `Commit changes` 클릭
4. 저장소 상단 `Settings` 클릭
5. 왼쪽 `Pages` 클릭
6. Source: `Deploy from a branch`
7. Branch: `main`, Folder: `/root` 선택 후 Save
8. 몇 분 후 주소가 생성됩니다.

예상 주소:
https://choi2704.github.io/kd/

카페24 상세페이지나 블로그에는 이 주소를 버튼으로 연결하면 됩니다.

구매페이지 링크 수정:
script.js 파일에서 아래 줄을 실제 카페24 상품 주소로 바꾸세요.

buyBtn.href='https://kdjavara.cafe24.com/';
