import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LocalTokenRepository } from "./repository/localTokenRepository";
import { HttpClient } from "./httpClient/httpClient";
import { AuthService } from "./service/AuthService";
import AuthProvider from "./components/context/AuthProvider";

const localTokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(
  process.env.REACT_APP_BASE_URL,
  localTokenRepository
);
const authService = new AuthService(httpClient, localTokenRepository);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider authService={authService}>
    <App />
  </AuthProvider>
);

// index.js
// bootstrapping

// application 실행에 필요한 것
// make token repository
// make httpClient
// make authService

// 제일 낮은 의존성 부터 인스턴스를 생성한다.
// 클래스 인스턴스 생성 후 각 컴포넌트에 해당 주입해야한다.(context API 활용)
