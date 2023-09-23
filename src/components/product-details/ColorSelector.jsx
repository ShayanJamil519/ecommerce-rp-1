const ColorSelector = ({ selectedColor, updateColor }) => {
  const colors = [
    { color: "#ff1900", colorValue: "red" },
    { color: "#0022ef", colorValue: "blue" },
    { color: "#00d700", colorValue: "green" },
    { color: "#fff", colorValue: "white" },
    { color: "#ffbd00", colorValue: "yellow" },
  ];

  return (
    <div className="flex justify-start items-center gap-5">
      <h1 className="text-2xl font-semibold uppercase">Color:</h1>
      <div className="flex justify-start items-center gap-3 bg-[#1f1f1e] py-1 px-2 rounded-full">
        {colors.map((item, index) => (
          <div
            onClick={() => {
              updateColor(item.colorValue);
            }}
            style={{ backgroundColor: item.color }}
            key={index}
            className={`h-6 w-6 rounded-full cursor-pointer ${
              selectedColor === item.colorValue ? "border-2 border-white" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
