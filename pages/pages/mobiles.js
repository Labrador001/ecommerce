import React from "react";
import Head from "next/head";

import { useSelector } from "react-redux";

import CompanyProducts from "../../components/CompanyProducts";

export default function Apple() {
  const mobileProducts = useSelector((state) => state.mobile.value);

  return (
    <>
      <CompanyProducts title={"Mobiles"} products={mobileProducts} />
    </>
  );
}
