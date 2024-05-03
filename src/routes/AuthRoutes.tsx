import { Outlet } from "react-router-dom";

import { useAppSelector } from "../hooks/hooks";

type AllowListedRoles = string[];

function AuthRoutes({ allowListedRoles}: { allowListedRoles: AllowListedRoles } ) {
  const { role } = useAppSelector((state) => state.auth); 
  return (
    <>
      {allowListedRoles.find((givenRole) => givenRole == role) ? (
        <Outlet />
      ) : (
        <div>denied</div>
      )}
    </>
  );
}

export default AuthRoutes;
