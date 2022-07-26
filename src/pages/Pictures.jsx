function Pictures() {

  return (
    <section className="flex justify-center w-full mx-auto mb-28 mt-10">
      <div className="container grid md:grid-rows-2 md:grid-cols-2 gap-5 mx-5 md:mx-10 h-screen">
        <div className="relative">
          <img
            src={require("../assets/pics/landing/top1.png")}
            alt="top1"
            className="w-full h-full absolute inset-0 object-cover object-[0%_67%]"
          />
        </div>
        <div className="relative">
          <img
            src={require("../assets/pics/landing/top3.png")}
            alt="top3"
            className="w-full h-full absolute inset-0 object-cover object-bottom"
          />
        </div>
        <div className="relative">
          <img
            src={require("../assets/pics/landing/top4.png")}
            alt="top4"
            className="w-full h-full absolute inset-0 object-cover object-[0%_65%]"
            loading="lazy"
          />
        </div>
        <div className="relative">
          <img
            src={require("../assets/pics/landing/top5.png")}
            alt="top5"
            className="w-full h-full absolute inset-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Pictures;
