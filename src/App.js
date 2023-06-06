import React from "react";
import { Button } from "./Button";

export const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See deal!</Button>
      </div>
      <div>
        <Button secondary>Hide ads!</Button>
      </div>
      <div>
        <Button primary rounded>
          Something...
        </Button>
      </div>
    </div>
  );
};
