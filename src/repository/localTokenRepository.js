//추상
/**
TokenRepositoryInterface
  save(token:string):void
  get():string
  delete():void 
 */

// 구체

export class LocalTokenRepository {
  #TOKEN_KEY = "ACCECC_TOKEN";

  save(token) {
    localStorage.setItem(this.#TOKEN_KEY, token);
  }

  get() {
    return localStorage.get(this.#TOKEN_KEY);
  }

  delete() {
    localStorage.removeItem(this.#TOKEN_KEY);
  }
}
