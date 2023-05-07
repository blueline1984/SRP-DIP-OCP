// 추상

// signin(email, password):Promise<void>
// signup(email, password):Promise<void>
// logout(): void

// 구현

class AuthService {
  signin(email, password) {
    // 1. api call
    // 2. save token
  }
  signup(email, password) {}
  logout() {}
}
