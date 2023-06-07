import React from "react";
import { Button } from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

export const App = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal!
        </Button>
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
