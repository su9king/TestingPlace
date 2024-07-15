Kakao.API.request({
    url: '/v2/user/me',
    success: function(response) {
      console.log(response);
      // 사용자 정보 처리 로직
    },
    fail: function(error) {
      console.error(error);
      // 사용자 정보 요청 실패 처리 로직
    }
  });
  