import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Redirect } from "wouter";

const LogoutPage = () => {
  signOut(auth);
  return <Redirect to="/" />;
};

export default LogoutPage;
