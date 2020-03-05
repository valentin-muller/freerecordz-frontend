//	components/PrivateRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/Auth";

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={function(props) { 
        console.log("PrivateRoute",isLoggedIn);
        if (isLoggedIn) return <Component {...props} />;
        else if (!isLoggedIn) return <Redirect to="/login" />;
      }}
    />
  );
}

export default withAuth(PrivateRoute);
