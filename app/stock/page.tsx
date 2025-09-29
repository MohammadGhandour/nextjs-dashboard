import { Metadata, ResolvingMetadata } from "next";
import React from "react";

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  const stock = await fetch(`https://b197dbcc2041.ngrok-free.app/info`).then(res => res.json());
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: stock.name,
    description: `Current stock price for ${stock.name} is $${stock.price}`,
    openGraph: {
      images: [stock.logo],
    },
  }
};

export default function page() {

  return (
    <div>page</div>
  )
};