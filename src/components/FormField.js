import React from "react";

export default function FormField(props) {
  return <input name={props.name} placeholder={props.placeholder} type={props.type} id={props.id}></input>;
}
