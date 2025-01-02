import { useContext } from "react";
import { ClockLoader } from "react-spinners";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { isLoading, userAvailability } = useContext(AuthContext);

  if (isLoading) {
    return <div className="w-full h-[70vh] mt-20 flex items-center justify-center">
      <ClockLoader size={100} color="gold" />
    </div>
  }
  if(userAvailability){
    return children;
  }
  else{
    return <Navigate to='/login'/>;
  }
};

export default PrivateRoute;
