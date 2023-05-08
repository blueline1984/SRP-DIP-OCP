// 횡단 관심사 1. header에 authorization 추가 2.base_url 추가

//httpClient interface
//http 요청에 대한 횡단 관심사를 처리하는 모듈!
//어떻게 쓰일지 사용하는 입장에서 생각해보기 -> fetch 형식과 같은 형태로 사용하면 어떨까?
//fetch랑 똑같은 형태로 사용할 수 있어야 한다.
//fetch랑 똑같은 형태로 약속을 해줘야 한다.
// 약속 -> interface

//추상
// interface
// fetch(endPoint, options):Response 객체를 Promise 형태로 리턴해줌

//구체
export class HttpClient {
  constructor(base_url, tokenRepository) {
    this.base_url = base_url;
    this.tokenRepository = tokenRepository;
  }
  //method
  fetch(endPoint, options = {}) {
    return window.fetch(`${this.base_url}${endPoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: this.tokenRepository.get(),
        ...options.headers,
      },
    });
  }
}
