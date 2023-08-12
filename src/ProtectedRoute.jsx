import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    // const { user } = useSelector((state) => state.auth)
    
    let location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />;
    }
 return children

};

export default ProtectedRoute;