import "./Header.css";

function Header() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  return (
    <div>
      <img
        src={`${URL}/public/assets/images/menu-burger.png`}
        alt="menu burger"
      />
    </div>
  );
}

export default Header;
