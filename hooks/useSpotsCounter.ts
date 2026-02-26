"use client";

import { useState, useEffect } from "react";

/**
 * Simulates a decreasing spots counter for FOMO effect.
 * Uses a deterministic base derived from the current date,
 * with small random-looking decrements over time.
 */
export const useSpotsCounter = (total = 5000) => {
  const getSpots = () => {
    const now = Date.now();
    // Base: lose ~50 spots/day since a fixed launch date
    const launchDate = new Date("2025-06-01").getTime();
    const daysSinceLaunch = Math.floor((now - launchDate) / (1000 * 60 * 60 * 24));
    const hourOfDay = new Date().getHours();
    const minuteOfDay = new Date().getMinutes();

    // Deterministic daily loss + intra-day variation
    const dailyLoss = daysSinceLaunch * 7;
    const hourlyVariation = Math.floor(hourOfDay * 1.3 + minuteOfDay * 0.05);
    const remaining = total - dailyLoss - hourlyVariation;

    return Math.max(127, Math.min(total - 100, remaining));
  };

  const [spots, setSpots] = useState(getSpots);

  useEffect(() => {
    // Update every 30-90 seconds with a small decrement for "live" feel
    const schedule = () => {
      const delay = 30000 + Math.random() * 60000;
      return setTimeout(() => {
        setSpots((prev) => Math.max(127, prev - Math.floor(Math.random() * 3 + 1)));
        timerId = schedule();
      }, delay);
    };
    let timerId = schedule();
    return () => clearTimeout(timerId);
  }, []);

  return spots;
};
