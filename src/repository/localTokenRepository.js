//추상
/**
TokenRepositoryInterface
  save(token:string):void
  get():string
  remove():void 
 */

// 구체

class LocalTokenRepository {
  #TOKEN_KEY = "ACCECC_TOKEN";

  save(token) {
    localStorage.setItem(this.#TOKEN_KEY, token);
  }

  get() {
    return localStorage.get(this.#TOKEN_KEY);
  }

  remove() {
    localStorage.removeItem(this.#TOKEN_KEY);
  }
}
