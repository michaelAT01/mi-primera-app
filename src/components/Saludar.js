import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  console.log(props);
  console.log(userInfo);
  return (
    <div>
      <button onClick={() => props.saludarFn(userInfo.nombre)}>Saludar</button>
    </div>
  );
}
