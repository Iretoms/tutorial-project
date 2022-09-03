import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  return user ? <h2>Welcome {user.displayName}</h2> : <h2>not logged in</h2>;
};

export default Profile;
