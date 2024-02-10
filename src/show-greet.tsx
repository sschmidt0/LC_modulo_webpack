import React from "react";


export interface ShowGreetProps {
  username: string;
  bundlingPackage: string;
}

export const ShowGreet = ({ bundlingPackage, username }: ShowGreetProps) => {
  console.log(`API base: ${process.env.REACT_APP_API_BASE}`);

  return (
    <div>
      Muy bien {username}, veo que estás haciendo ejercicios con {bundlingPackage}
    </div>
  );
};
