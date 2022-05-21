import { useRouter } from "next/router";
import React from "react";

export default function index() {
  const router = useRouter();
  const { category } = router.query;
  return <div>{category}</div>;
}
