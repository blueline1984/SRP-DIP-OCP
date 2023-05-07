// 추상

// signin(email, password):Promise<Response>
// signup(email, password):Promise<Response>
// logout(): void

// 구현

class AuthService {
  constructor(httpClient, tokenRepository) {
    this.httpClient = httpClient;
    this.tokenRepository = tokenRepository;
  }

  async signin(email, password) {
    // 1. api call
    const response = await this.httpClient.fetch("auth/signin", {
      method: "POST",
      body: {
        email,
        password,
      },
    });

    const { access_token } = response.json();

    // 2. save token
    this.tokenRepository.save(access_token);
  }

  signup(email, password) {
    return this.httpClient.fetch("auth/signup", {
      method: "POST",
      body: {
        email,
        password,
      },
    });
  }

  logout() {
    this.tokenRepository.delete();
  }
}
