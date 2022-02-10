import React from "react";
import SessionContext from './contextAuth'

export function useUser() {
  const {
    state: { user },
  } = React.useContext(SessionContext);

  return user;
}
