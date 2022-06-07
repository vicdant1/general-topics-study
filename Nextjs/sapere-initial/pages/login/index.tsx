import type { NextPage } from "next";
import style from "./login.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Avalon - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row p-relative">
        <div className={style.floatingBrand}>
          <Image
            src="/images/AvalonShortLogo.svg"
            width={40}
            height={40}
          />
        </div>

        <div
          className={`col-md-7 d-none d-md-block ${style.sideImageContainer}`}
        ></div>

        <div className={`col-md-5 bg-white d-flex flex-column justify-content-center align-items-center ${style.loginContainer}`}>
          <div className={`d-flex flex-column align-items-center justify-content-center ${style.loginFormContainer}`}>
            <h3 className="text-center display-6">Bem vindo à Avalon</h3>
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
                <Link href="/">
                  <button className="btn btn-dark mt-2 w-100">Login</button>
                </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
