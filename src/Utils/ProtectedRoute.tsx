import { ReactNode } from 'react';
import { useAppSelector } from '../redux/hooks';
import { Navigate} from 'react-router-dom';
import Loading from '../Components/Loading';

const ProtectedRoute = ({children}:{children:ReactNode}) => {    
  const { user,isLoading } = useAppSelector((state) => state.user);
  if (isLoading) {
    <Loading/>
  }
  
    if (!user&&!isLoading) {
        return <Navigate to='/login'/>
    }else{
      return children
    }
};

export default ProtectedRoute;