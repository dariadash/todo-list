import React from "react";

type Props = {
  text: string
}

export const Alert = ({text}:Props) => (
  <div className="alert alert-danger" role="alert">
    {text}
  </div>
);