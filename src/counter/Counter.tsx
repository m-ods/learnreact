import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Navbar from "@/components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-3 min-h-screen flex-wrap">
        <Card className="p-5">
          <div className="flex flex-col gap-2 py-1">
            <p>This is the count: {count}</p>
            <div className="flex flex-row gap-1">
              <Button onClick={() => setCount(count + 1)}>+</Button>
              <Button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                -
              </Button>
              <Button onClick={() => setCount(0)}>Reset</Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;

/*
What I learned:
- Ternary operator for ensuring count cannot go below 0
- You can pass setState as an argument to a child
- Centering a div 🤣

*/
