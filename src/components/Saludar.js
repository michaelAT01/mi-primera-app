import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { nombre = "yo soy" } = userInfo;
  console.log(props);
  console.log(userInfo);
  return (
    <div>
      <button onClick={() => props.saludarFn(nombre)}>Saludar</button>
    </div>
  );
}
