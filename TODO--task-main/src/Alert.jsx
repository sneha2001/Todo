// Alert.js
import React, { useEffect } from "react";

function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [removeAlert, list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}

export default Alert;

