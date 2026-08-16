"use client";

import { useSyncExternalStore } from "react";

function getGreeting() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes() >= 18 * 60 + 30
    ? "Evening"
    : "Greetings";
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 60_000);
  return () => clearInterval(interval);
}

export function Greeting() {
  const greeting = useSyncExternalStore(subscribe, getGreeting, () => "Greetings");

  return <>{greeting}</>;
}
