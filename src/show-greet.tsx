import React from 'react';

export interface ShowGreetProps {
  username: string;
  bundlingPackage: string;
}

export const ShowGreet = ({ bundlingPackage, username }: ShowGreetProps) => (
  <div>
    Muy bien {username}, veo que estás haciendo ejercicios con {bundlingPackage}
  </div>
);
