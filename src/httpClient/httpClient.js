// 횡단 관심사 1. header에 authorization 추가 2.base_url 추가

//httpClient interface
//http 요청에 대한 횡단 관심사를 처리하는 모듈!
//어떻게 쓰일지 사용하는 입장에서 생각해보기 -> fetch 형식과 같은 형태로 사용하면 어떨까?
//fetch랑 똑같은 형태로 사용할 수 있어야 한다.
//fetch랑 똑같은 형태로 약속을 해줘야 한다.
// 약속 -> interface

//추상
// interface
// fetch(url, options):Response 객체를 Promise 형태로 리턴해줌

//구현
class HttpClient {
  constructor(base_url) {
    this.base_url = base_url;
  }
  //method
  fetch(endPoint, options) {
    return window.fetch(`${this.base_url}${endPoint}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: "ACCESS_TOKEN",
      },
    });
  }
}

const httpClient = new HttpClient("https://jsonplaceholder.typicode.com/");
const localClient = new HttpClient("https://localhost:8000/");

export { httpClient, localClient };
