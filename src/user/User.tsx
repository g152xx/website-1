import * as React from "react";
import { RouteComponentProps } from "@reach/router";

export const User = (
  props: RouteComponentProps & { children?: React.ReactNode; userId?: string }
) => {
  return (
    <>
      <p>This is the user page for:</p>
      <h2>{props.userId}</h2>
    </>
  );
};
