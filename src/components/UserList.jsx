import { useEffect, useState } from "react";
import { useFetchData } from "./hooks/useFetchData";

export default function UserList({ endPoint }) {
  const { data, isLoading } = useFetchData(endPoint);

  return (
    <>
      <ul>
        {isLoading 
          ? <p>Cargando...</p> 
          : endPoint == "users"
            ? data.map((item) => <li key={item.id}>{item.name}</li>)
            : data.map((item) => <li key={item.id}>{item.body}</li>)
        }
      </ul>
    </>
  );
}
