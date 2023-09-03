import { useEffect, useState } from "react";
import UserList from "./components/UserList";

export const UserApp = () => {
  const [endPoint, setendPoint] = useState("users");

  const handleFetch = () => {
    setendPoint("comments");
  };

  return (
    <>
      <h1>Lista de usuarios:</h1>
      <UserList endPoint={endPoint} />
      <button onClick={handleFetch}>Aquí se llama a la API</button>
    </>
  );
};
