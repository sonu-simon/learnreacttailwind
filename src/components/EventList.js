import React from "react";
import Card from "./Card";

export default function EventList(props) {
  var events = [
    { name: "Cultural" },
    { name: "Cultural" },
    { name: "Cultural" },
    { name: "Expo" },
    { name: "Expo" },
    { name: "Expo" },
    { name: "Expo" },
    { name: "Expo" },
    { name: "Competition" },
    { name: "Competition" },
    { name: "Competition" },
    { name: "Competition" },
    { name: "Workshop" },
    { name: "Workshop" },
    { name: "Workshop" },
    { name: "Workshop" },
    { name: "Workshop" },
    { name: "Workshop" },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
      {events.map((event) => {
        console.log(props.option + event.name);
        if (event.name === props.option) {
          console.log("true");
          return <Card name={event.name} />;
        }
        return;
      })}
    </div>
  );
}
