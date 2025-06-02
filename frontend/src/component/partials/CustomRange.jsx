import { useState, useEffect } from "react";

function CustomRange({ color, label, register }) {
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e) => {
    console.log(color);
    setValue(e.target.value);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Effets secondaires si nécessaire
    return () => {
      // Nettoyage
    };
  }, [value, isDragging]);

  return (
    <div class="relative z-0 w-full mb-15 group">
      <label
        for="rating"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="range"
        min="0"
        max="5"
        value={value}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`w-full h-2 bg-gray-300 rounded-full appearance-none outline-none
          ${isDragging ? "cursor-grabbing" : "cursor-pointer"}
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:${color}
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:transition
          [&::-webkit-slider-thumb]:duration-150`}
          register
      />
      <div className="flex justify-between mt-2">
        <span>0</span>
        <span className="font-medium">Valeur: {value}</span>
        <span>5</span>
      </div>
    </div>
  );
}

export default CustomRange;
