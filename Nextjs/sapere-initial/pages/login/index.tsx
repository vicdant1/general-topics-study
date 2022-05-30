import type { NextPage } from "next";
import style from "./login.module.css";
import Head from "next/head";
import Image from "next/image";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sapere - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className={`col-md-7 ${style.imgContainer} p-0 d-none d-md-block`}>
          {/* <img src="/images/Avalon.png" alt="login-image" /> */}
        </div>
        <div className="col-md-5 m-0 p-0">
          <div className="d-flex justify-content-center align-items-center flex-column" style={{height: "100vh"}}>
            <h3 className="text-center">Bem vindo ao Sapere</h3>
            <p className="font-weight-light text-muted">
              Faça login em sua conta
            </p>

            <form className={style.formLogin}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Usuário"
                />

                <input
                  type="password"
                  className="form-control mt-2"
                  id="password"
                  aria-describedby="passwordHelp"
                  placeholder="Senha"
                />

                <div className="d-flex justify-content-end mt-2">
                  <a href="http://google.com">Esqueci minha senha</a>
                </div>
              </div>
              <button className="btn btn-primary mt-2 w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
