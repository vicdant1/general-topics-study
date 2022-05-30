import { NextPage } from "next/types";
import Link from "next/link";

const ErrorPage: NextPage = () => {
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <h1 className="text-center display-1">Se perdeu ai? <hr/></h1>
      <p className="lead text-center">
        Não encontramos a página que você está procurando :'(
      </p>
      <a>
        <Link href="/">Voltar à terra firme</Link>
      </a>
    </div>
  );
};

export default ErrorPage;
