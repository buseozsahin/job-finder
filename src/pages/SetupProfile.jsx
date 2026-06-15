import { useNavigate } from "react-router-dom"; 
function SetupProfile({ setIsNewUser }) {
  const navigate = useNavigate();

  function handleFinish() {
    setIsNewUser(false);
    navigate("/today");
  }
  return(
    <h1>Profile</h1>
  );
}
export default SetupProfile;