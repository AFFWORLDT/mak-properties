"use client";
import DetailPage from "@/src/view/offPlans/detailPage";
import { useParams } from "next/navigation";
import React from "react";

function OffPlaneDetails() {
  const { offplanId } = useParams();
  return <div>
    <DetailPage id={offplanId} />
  </div>;
}

export default OffPlaneDetails;
