import React, { useState, useEffect } from "react";

const MultiRingProgressBar = ({
  values, // Percentages for each ring
  colors, // Colors for each ring
  radius, // Outer radius
  strokeWidth, // Thickness of the rings
  gap = 10, // Gap between rings
  centerWhiteSpace = 30, // White space in the middle
  animationDuration = 1, // Duration of the animation in seconds
  rotations = [], // Rotations for each ring
}) => {
  const [animatedValues, setAnimatedValues] = useState(values.map(() => 0)); // Animation starts at 0%
  const center = radius + strokeWidth; // Center point of the SVG container
  const circumference = 2 * Math.PI; // Factor for calculating the stroke's circumference

  useEffect(() => {
    // Trigger animation for the progress values
    const timeout = setTimeout(() => {
      setAnimatedValues(values);
    }, 0);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [values]);

  return (
    <svg
      width={164}
      height={164}
      viewBox={`0 0 ${2 * (radius + strokeWidth)} ${2 * (radius + strokeWidth)}`}
    >
      {animatedValues.map((value, index) => {
        const adjustedRadius =
          radius - index * (strokeWidth + gap) - centerWhiteSpace / 2; // Adjust radius for white space and gap
        const strokeCircumference = circumference * adjustedRadius; // Calculate circumference for each circle
        const offset = (1 - value / 100) * strokeCircumference; // Calculate offset for the progress

        return (
          <g key={index} style={{ transformOrigin: "center" }}>
            {/* Background Circle */}
            <circle
              cx={center}
              cy={center}
              r={adjustedRadius}
              fill="none"
              stroke="#D9D9D9" // Background color
              strokeWidth={strokeWidth}
            />
            {/* Progress Circle with Rotation */}
            <circle
              cx={center}
              cy={center}
              r={adjustedRadius}
              fill="none"
              stroke={colors[index] || "#ccc"} // Progress color
              strokeWidth={strokeWidth}
              strokeDasharray={strokeCircumference}
              strokeDashoffset={strokeCircumference} // Start full (no progress)
              style={{
                transition: `stroke-dashoffset ${animationDuration}s ease-in-out`, // Animate the offset
                strokeDashoffset: offset,
                transform: `rotate(${rotations[index] || 0}deg)`, // Individual rotation
                transformOrigin: "center",
              }}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default MultiRingProgressBar;
