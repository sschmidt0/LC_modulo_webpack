import { capitalize } from "@helpers/capitalize";
import React from "react";

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ onClick, text }: ButtonProps) => {
  const formattedText = capitalize(text)

  return <button onClick={onClick}>{formattedText}</button>;
};
