import React from "react";
import { Route, Navigate } from "react-router-dom";

import PropTypes from "prop-types";

import { isAuth, useAuth } from "./auth";

export default function RouteWrapper({
  element: Element,
  isPrivate,
  owner,
  ...rest
}) {
  const signed = isAuth();
  //
  const { getUser } = useAuth();
  const response = getUser()
  if (!signed && isPrivate) {
    return <Navigate to="/" />;
  }

  if (signed && !isPrivate) {
    if(response.categoria=="candidato")
         return <Navigate to="/principal" />;
    if(response.categoria=="empresa")
          return <Navigate to="/principal-empresa" />;
  }

  return <Route {...rest} element={<Element />} />;
}

/**
 * Default props
 */
RouteWrapper.defaultProps = {
  isPrivate: true,
};

/**
 * Prop Types
 */
RouteWrapper.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool,
};
