import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/login">Go to Login</Link>
      <br></br>
      <Link to="/register">Go to Register</Link>
    </>
  );

}