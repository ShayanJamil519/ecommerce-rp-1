const SizeSelector = ({ selectedSize, updateSize }) => {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="flex justify-start items-center gap-12 my-5">
      <h1 className="text-base sm:text-xl md:text-2xl font-semibold uppercase">
        Size:
      </h1>
      <div className="flex justify-start items-center gap-3 bg-[#1f1f1e] py-1 px-2 rounded-full">
        {sizes.map((size, index) => (
          <div
            onClick={() => updateSize(size)}
            key={index}
            className={`grid place-items-center text-[12px] cursor-pointer h-6  w-6 rounded-full ${
              selectedSize === size
                ? "bg-[#fff] text-[#000]"
                : "border-[1px] border-[#fff] text-[#fff]"
            }  `}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
