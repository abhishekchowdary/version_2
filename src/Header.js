import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img2 from "./images/imggg.jpg";
import "./Header.css";


function Header() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className="header_logo" src={img2} alt="DBS"></img>
          <Navbar.Brand className="navbar-brand mb-0 h1 fs-2">Live More Bank Less</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Transaction</Nav.Link>
            <Nav.Link href="/Logger">Logger</Nav.Link>
            <button onClick={handleClick}>Logout</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
