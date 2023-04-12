import DetailPage from "../components/DetailPage";
import Profile from "../components/Profile";
import React, { useState } from "react";

export default function Detail() {
  const [data, setData] = useState();

  return (
    <>
      <Profile />
      <DetailPage />
    </>
  );
}
