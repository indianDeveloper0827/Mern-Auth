import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from "../store";

const PrivateRoute = () => {
    const { userInfo } = useSelector((state:RootState) => state.auth);
console.log("my",userInfo);

  return userInfo ? <Outlet /> : <Navigate to='/login' replace/>;
}

export default PrivateRoute