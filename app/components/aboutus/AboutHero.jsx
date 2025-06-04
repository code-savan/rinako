import React from "react";

const AboutHero = () => (
  <>
    <section className="relative w-full md:h-[500px] flex items-center justify-center">
      <img
        src="/abouthero.jpg"
        alt="About Rinako Foundation"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 max-w-7xl w-full px-4 py-24 md:py-36">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-left mb-8 drop-shadow-xl">About Rinako Foundation</h1>
        <p className="max-w-2xl text-white text-left text-base md:text-lg font-normal drop-shadow-md">
          Rinako Foundation was established by a group of a mixture of enthusiastic and
          optimistic young and aged dedicated people who were highly motivated and moved by the unbearable state of difficulty that women, children and the indigent people in our various societies are subjected to as a result of poverty and the fundamentalists' insurgencies. The people behind Rinako are aiming at realizing development and empowerment of the socially disadvantaged and vulnerable communities in Nigeria.
        </p>
      </div>
    </section>
    
  </>
);

export default AboutHero;
