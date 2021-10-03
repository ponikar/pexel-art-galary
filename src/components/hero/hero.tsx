import React from "react";

export const Hero = () => {
  return (
    <section
      className="bg-black w-full bg-cover flex justify-center items-center"
      style={{
        height: "60vh",
        backgroundImage: 'url("/public/imgs/hero-background.jpeg")',
      }}
    >
      <div className="w-5/12 text-white mx-auto">
        <h2 className="text-4xl font-semibold" style={{ lineHeight: "1.3" }}>
          The best free stock photos & videos shared by talented creators.
        </h2>
      </div>
    </section>
  );
};
