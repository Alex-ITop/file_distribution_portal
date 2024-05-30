import {Navigate, Outlet} from 'react-router-dom';
import { useLoginStore } from '../pages/Login/store';
import { isAdmin, isAdminScopes, isRoot, isUser } from './constants';

export const PrivateRouteGuestPage = () => {

    const { roles } = useLoginStore(state => state);
    if(JSON.stringify(roles) == JSON.stringify(isUser) || JSON.stringify(isAdmin) || JSON.stringify(isAdminScopes) || JSON.stringify(isRoot) ){
        return <Outlet/>;
    }
    return <Navigate to = '/'/>
}

export const PrivateRouteScopesPages = () => {
    const { roles } = useLoginStore(state => state);
    console.log(roles);
    if(JSON.stringify(roles) == JSON.stringify(isAdminScopes) || JSON.stringify(isAdmin) || JSON.stringify(isRoot)){
        return <Outlet/>;
    }
    return <Navigate to = '/'/>
}

export const PrivateRouteAdminPage = () => {
    const { roles } = useLoginStore(state => state);
    if(JSON.stringify(roles) == JSON.stringify(isAdmin) || JSON.stringify(isRoot)){
        return <Outlet/>;
    }
    return <Navigate to = '/'/>
}

export const PrivateRouteRoot = () => {
    const { roles } = useLoginStore(state => state);
    if(JSON.stringify(roles) == JSON.stringify(isRoot)){
        return <Outlet/>;
    }
    return <Navigate to = '/'/>
}



