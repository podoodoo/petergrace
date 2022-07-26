function Pictures() {

  return (
    <section className="flex justify-center w-full mx-auto mb-28 mt-10">
      <div className="container grid md:grid-rows-2 md:grid-cols-2 gap-5 mx-5 md:mx-10 h-screen">
        <div className="relative">
          <img
            src={require("../assets/pics/landing/top1.webp")}
            alt="top1.jpg"
            className="w-full h-full absolute inset-0 object-cover object-[0%_67%]"
          />
        </div>
        <div className="relative">
          <img
            src={require("../assets/pics/landing/top3.webp")}
            alt="top3.jpg"
            className="w-full h-full absolute inset-0 object-cover object-bottom"
          />
        </div>
        <div className="relative">
          <img
            src={require("../assets/pics/landing/top4.webp")}
            alt="top4.jpg"
            className="w-full h-full absolute inset-0 object-cover object-[0%_65%]"
            loading="lazy"
          />
        </div>
        <div className="relative">
          <img
            src={require("../assets/pics/landing/top5.webp")}
            alt="top5.jpg"
            className="w-full h-full absolute inset-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Pictures;
