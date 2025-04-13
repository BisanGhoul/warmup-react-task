import SearchBar from "./SearchBar";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="title">Add members to Front-end team</h1>
      <SearchBar />
    </header>
  );
}

export default Header;
