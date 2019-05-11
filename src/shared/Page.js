import React, { useContext } from "react";
import { AppContext } from "../app/AppProvider";

export default function({ name, children }) {
  const { page } = useContext(AppContext);
  return <div>{page !== name ? null : <div>{children}</div>}</div>;
}
