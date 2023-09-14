"use client";

const characteristics = [
  "Characteristic ",
  "Characteristic ",
  "Characteristic ",
  "Characteristic ",
  "Characteristic ",
  "Characteristic ",
  "Characteristic ",
];

function ProductQuality() {
  const circleRadius = 150; // Half of the circle's width/height
  const bulletPointDistance = 100; // Adjust this value to control the distance from the circle

  // Calculate the angle between each bullet point
  const angleIncrement = (2 * Math.PI) / characteristics.length;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-72 h-72 rounded-full flex items-center justify-center bg-slate-300">
        <img
          src="./assets/Home/shampoo__img1.jpg"
          alt="Product"
          className="w-60 h-60 rounded-full object-cover"
        />

        {/* Map through characteristics and position them around the circle */}
        {characteristics.map((char, index) => {
          const angle = index * angleIncrement;
          const bulletPointX = circleRadius * Math.cos(angle) + circleRadius;
          const bulletPointY = circleRadius * Math.sin(angle) + circleRadius;

          // Calculate adjusted position for the bullet points
          const adjustedX =
            bulletPointX + bulletPointDistance * Math.cos(angle);
          const adjustedY =
            bulletPointY + bulletPointDistance * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute rounded-full text-white flex justify-center items-center"
              style={{
                left: adjustedX - 70,
                top: adjustedY,
              }}
            >
              <p> {char}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductQuality;
