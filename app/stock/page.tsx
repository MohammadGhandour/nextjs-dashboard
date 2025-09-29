import { Metadata, ResolvingMetadata } from "next";
import React from "react";

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  const stock = await fetch(`https://b197dbcc2041.ngrok-free.app/info`).then(res => res.json());

  const title = `${stock.name} (${stock.symbol.toUpperCase()})`;
  const description = `Current stock price for ${stock.name} is $${stock.price}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: stock.logoUrl,
          width: 600,
          height: 600,
          alt: `${stock.name} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [stock.logoUrl],
    },
  }
};

export default function page() {

  return (
    <div>page</div>
  )
};