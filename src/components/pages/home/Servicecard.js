import React from "react";
import { Icon } from "@iconify/react";

export default function Servicecard(props) {
  return (
    <div className="card">
      <div className="icon">
        <Icon className="service-icon" icon={props.icon} width="2.5rem" />
      </div>
      <div className="title">{props.title}</div>
    </div>
  );
}
