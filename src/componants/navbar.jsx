import Nav from "./nav";
import logo from "../img/ms-navber-logo.png"


export default function Navber() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" style={{width:"20vh"}} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Nav />
      </div>
    </nav>
  );
}
