import React from "react";
import "./Notification.component.css";

const Notification = (props) => {
  const { message } = props;

  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

export default Notification;
