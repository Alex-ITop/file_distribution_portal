import { Routes, Route } from "react-router-dom";
import Guest from "../../pages/Guest";
import { NoMatch } from "../../pages/NoMatch";
import PasswordRecovery from "../../pages/PasswordRecovery"
import SiteLayout from "../Layout";
import { PROJECT_NAME } from "../../constants/main";
import Login from "../../pages/Login";
import { PrivateRouteGuestPage } from "../../hoc/PrivateRoute";

import Footer from "../Footer";
import Admin from "../../pages/Admin";
import SpaceAdmin from "../../pages/SpaceAdmin";


export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout header={<span className="project-place">{PROJECT_NAME}</span>} />}>
        <Route index element={<Login />} />
        <Route path='admin-scopes' element={<SpaceAdmin />}> </Route>
        <Route element={<PrivateRouteGuestPage />}>
          <Route path="guest" element={<><Guest /><Footer /></>} />
          <Route path="user">
            <Route path='admin-scopes' element={<SpaceAdmin />}> </Route>
            <Route path='admin' element={<Admin />}> </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
          <Route path="passrecovery" element={<PasswordRecovery />} />
        </Route>
      </Route>
    </Routes >
  )
}



