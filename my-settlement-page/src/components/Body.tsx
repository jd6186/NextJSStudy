"use client";

import React, { useState, useEffect } from 'react';

export default function Body() {
  const [time, setTime] = useState(new Date().toLocaleString("ko-KR", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
  }));

  useEffect(() => {
    const timerID = setInterval(() => updateTime(), 1000);

    function updateTime() {
      setTime(new Date().toLocaleString("ko-KR", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
      }));
    }

    return () => clearInterval(timerID);
  }, []);

  return <div>{time}</div>;
}
