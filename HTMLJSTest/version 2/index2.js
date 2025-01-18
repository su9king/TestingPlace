function initializeIndex2() {
    document.getElementById('actionButton').addEventListener('click', function() {
        alert('index2.js와 통신');
    });
}
function loadIndex2Content() {
    fetch('index2.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 응답 X');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
            // index2.js의 초기화 함수 호출
            initializeIndex2();
        })
        .catch(error => {
            console.error('문제가 발생했습니다:', error);
        });
}
