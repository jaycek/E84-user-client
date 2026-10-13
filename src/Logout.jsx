
import { redirect } from "react-router-dom";
import { logout } from "./services/userApi"; 


const Logout = () => {
  return (
    <div></div>
  )
}

export default Logout
export async function logoutAction() {
  try {
     console.log("logout action called");
    await logout(); // server clears the cookie
    alert("Token cleared")
  } catch (err) {
    alert(err)
  }
  return redirect("/login");
}