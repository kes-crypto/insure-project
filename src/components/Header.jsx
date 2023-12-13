function Header() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <img
          className="dropbtn"
          src="./images/icon-hamburger.svg"
          alt="hamburger-icon"
        />
        <div className="dropdown-content">
          <a href="#">How we work</a>
          <a href="#">Blog</a>
          <a href="#">Account</a>
          <a href="#" id="viewplansBtn">
            View plans{" "}
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
