import React, { useState, useEffect } from "react";

const MultiRingProgressBar = ({
  values, 
  colors, 
  radius, 
  strokeWidth, 
  gap = 10, 
  centerWhiteSpace = 30, 
  animationDuration = 1, 
  rotations = [], 
}) => {
  const [animatedValues, setAnimatedValues] = useState(values.map(() => 0)); 
  const center = radius + strokeWidth; 
  const circumference = 2 * Math.PI; 

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setAnimatedValues(values);
    }, 0);

    return () => clearTimeout(timeout); 
  }, [values]);

  return (
    <svg
      width={164}
      height={164}
      viewBox={`0 0 ${2 * (radius + strokeWidth)} ${2 * (radius + strokeWidth)}`}
    >
      {animatedValues.map((value, index) => {
        const adjustedRadius =
          radius - index * (strokeWidth + gap) - centerWhiteSpace / 2; 
        const strokeCircumference = circumference * adjustedRadius; 
        const offset = (1 - value / 100) * strokeCircumference; 

        return (
          <g key={index} style={{ transformOrigin: "center" }}>
            
            <circle
              cx={center}
              cy={center}
              r={adjustedRadius}
              fill="none"
              stroke="#D9D9D9" 
              strokeWidth={strokeWidth}
            />
            
            <circle
              cx={center}
              cy={center}
              r={adjustedRadius}
              fill="none"
              stroke={colors[index] || "#ccc"} 
              strokeWidth={strokeWidth}
              strokeDasharray={strokeCircumference}
              strokeDashoffset={strokeCircumference} 
              style={{
                transition: `stroke-dashoffset ${animationDuration}s ease-in-out`, 
                strokeDashoffset: offset,
                transform: `rotate(${rotations[index] || 0}deg)`, 
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
