'use strict';

function importItems() { // 아이템들 불러옴
    return fetch('List.json') // List.json을 불러옴 Promise를 리턴함
    .then(response => response.json()) // response를 오브젝트로 변환함
    .then(json => json.cloths); // 변환한 오브젝트에서 cloths만 반환
}

function convertHTML(item) { // 아이템을 HTML로 변환함
    return ` 
    <li>
          <div>
            <img src="${item.image}" alt="${item.cloth}" /><span>${item.size}, ${item.gender}</span>
          </div>
    </li>
    ` 
    // String template을 사용해 리턴
}

function displayItems(items) { // 아이템을 HTML에 옮겨 사용자에게 보여줌
    const scrolls = document.querySelector('#scrolls'); // 쿼리셀렉터로 #scrolls 선택
    scrolls.innerHTML = items.map(item => convertHTML(item)).join('');
    // scrolls에 innerHTML으로 텍스트추가
    // 매개변수로 받아온 items를 map함수를 사용해 새로운 배열로만듬
    // 새로운 배열 : convertHTML 함수를사용해 아이템을 보여주기위해 HTML형식으로 변환함
    // join함수를 사용해 배열을 문자열로 합침. 
}

function eventListener(items) { // 버튼들에 이벤트를 추가함
    const logo = document.querySelector('.logo'); // 쿼리셀렉터로 .logo 선택
    const buttons = document.querySelector('.buttons'); // 쿼리셀렉터로 .buttons 선택
    logo.addEventListener('click', () => displayItems(items));
    // logo를 클릭하면 매개변수로 받아온 items를 사용. displayItems(items)를 실행함.
    buttons.addEventListener('click', event => onButtonClick(event, items));
    // 이벤트 위임을 사용했음. 요소마다 핸들러를 할당하지 않고, 이벤트 핸들러를 부모하나만 할당함.
    // 부모 아래에있는 여러 요소를 한꺼번에 다룰 수 있음.
    // buttons에 있는 버튼을 클릭하면 이벤트 오브젝트가 발생
    // onButtonClick함수에 이벤트 오브젝트와 Items를 매개변수로 전달
}

function onButtonClick(event, items) { // 조건별로 필터링해서 displayItems를 이용해 보여줌
    const dataset = event.target.dataset; // dataset은 HTML에서 -data로 정의했던 변수들임.
    const key = dataset.key; // 간단하게 접근하기위해
    const value = dataset.value; // 간단하게 접근하기위해
    if (key == null || value == null) { // 핸들러 가지고있는 부모는 key, value가 정의되어있지 않음.
        return; // 함수를 종료함
    } 
    displayItems(items.filter(item => item[key] == value));
    // displayItems를 이용해 출력함
    // filter를 사용해서 사용할 아이템들을 필터링함 []를 사용하면 밸류에 접근가능. 배열 리턴함.
}

// main
importItems() // 아이템들 불러옴
.then(items => {
    displayItems(items); // 아이템들을 HTML에 옮겨서 사용자에게 보여줌
    eventListener(items); // 버튼들 이벤트 리스너 추가
})
.catch(alert); // 오류출력