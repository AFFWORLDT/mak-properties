"use client";
import DetailPage from "@/src/view/buy/detailPage";
import { useParams } from "next/navigation";
import React from "react";

function BuyDetails() {
  const { buyId } = useParams();

  return (
    <div>
        <DetailPage id={buyId} />
    </div>
  );
}

export default BuyDetails;
