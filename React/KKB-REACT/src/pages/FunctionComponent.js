import React, { useState, useEffect } from "react";

export default function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
  },[]);
  return (
    <div>
      <h3>lallal</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
