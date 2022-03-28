import React, { useState } from "react";
import EventList from "./EventList";
export default function Chips() {
  const [selected, setSelected] = useState("Cultural");
  const options = ["Workshop", "Expo", "Cultural", "Competition"];
  console.log(options);
  return (
    <>
      <div class="flex flex-row justify-around mt-4">
        {options.map((option) => (
          <div
            class={`justify-center items-center lg:w-72 w-40 m-1 px-5 py-3 border rounded-2xl ${
              option === selected
                ? "bg-blue-600  text-white"
                : "bg-white  text-blue-600"
            } `}
            onClick={() => {
              setSelected(option);
            }}
          >
            <div class="flex-initial text-center max-w-sm leading-none text-md font-semibold">
              {option}
            </div>
          </div>
        ))}
      </div>

      <EventList option={selected} />
    </>
  );
}
