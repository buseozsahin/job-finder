function Slider({ value, setValue, min, max, step }) {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-[#1a2e2a]"
      />
    </div>
  );
}

export default Slider;