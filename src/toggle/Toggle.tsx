import { useState } from "react";
import { Card } from "@/components/ui/Card";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/theme-provider";

function Toggle() {
  const [switchedOn, setSwitch] = useState(true);
  const { setTheme } = useTheme("light");

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-3 min-h-screen flex-wrap">
        <h1 className="text-2xl">Toggle</h1>
        <Card className="p-5">
          <div className="flex flex-col gap-2 py-1">
            <p
              className={`${switchedOn ? "" : "rotate-180 scale-x-[-1]"}`}
              onClick={() => {
                setSwitch(!switchedOn);
                setTheme(switchedOn ? "light" : "dark");
              }}
            >
              📍
            </p>
            <p>{!switchedOn ? "🌞" : "🌝"}</p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Toggle;

/*
What I learned:
- Ternary operator for ensuring count cannot go below 0
- You can pass setState as an argument to a child
- Centering a div 🤣

*/
