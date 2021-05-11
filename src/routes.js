import React, { useEffect, useState } from "react";
import { Routes } from "react-router-dom";

import { AuthProvider, useAuth } from "./auth";

import RouteWrapper from "./RouteWrapper";

// Paths
import Paths from "./paths";
import PathEmpresa from "./pathsEmpresa";
import PathCandidato from "./pathsCandidato";
import PathDefault from "./pathsDefault";

export default function ContainerRoutes() {
  const [user, setUser] = useState({});

  const getUser = useAuth()?.getUser();

  useEffect(() => {
    setUser(getUser || {});
  }, [getUser]);
  function Owner(owner) {
    switch (owner) {
      case "empresa":
        return <Routes>{PathEmpresa.map((route) => makeRoute(route))}</Routes>;

      case "candidato":
        return (
          <Routes>{PathCandidato.map((route) => makeRoute(route))}</Routes>
        );
      default:
        return <Routes>{PathDefault.map((route) => makeRoute(route))}</Routes>;
    }
  }

  return (
    <AuthProvider>
      {/** <Routes>{Paths.map((route) => makeRoute(route))}</Routes> */}
      <Owner owner={user.categoria} />
    </AuthProvider>
  );
}

function makeRoute(route) {
  if (!route.nested) {
    return (
      <RouteWrapper
        path={route.path}
        element={route.element}
        isPrivate={route.isPrivate}
      />
    );
  }

  return (
    <RouteWrapper
      path={route.path}
      element={route.element}
      isPrivate={route.isPrivate}
    >
      {route.outlets.map((outlet) => makeRoute(outlet))}
    </RouteWrapper>
  );
}
