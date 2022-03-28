import React from "react";
import Card from "./Card";

export default function EventList({option}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
      <Card />
      <Card />
      <Card />
      <Card />
      {option}
    </div>
  );
}
