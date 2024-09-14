import { Suspense } from "react";
import { Route } from "react-router-dom";
import { RoutesConfig } from "./RouterConfig";
import Loading from "../utils/Loading";

export const ComponentList = () => {
  return RoutesConfig.map(({ Layout, Component, ...rest }) => {
    if (Layout == null) {
      return <Route key={rest.title} path={rest.path} element={<></>} />;
    }

    return (
      <Route
        key={rest.title}
        path={rest.path}
        element={
          <Layout>
            {Component ? (
              <Suspense fallback={<Loading />}>
                <Component />
              </Suspense>
            ) : (
              <h2>Soon!</h2>
            )}
          </Layout>
        }
      />
    );
  });
};
