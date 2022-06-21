import pic7 from "../assets/pics/7.jpg";

function Home() {
  return (
    <div className="flex flex-col w-full h-full align-center">
      <h1 className="w-full text-center text-4xl pt-16 md:pt-12 md:text-6xl">
        Peter & Grace
      </h1>
      <div className="flex mx-auto justify-center align-middle overflow-hidden m-5 md:m-12 md:h-2/3 md:w-7/8">
        <img
          src={pic7}
          alt="7.jpg"
          className="p-5 md:w-3/4 md:object-none md:object-[45%_75%]" // -270px_-750px
        />
      </div>
      <h2 className="text-center mt-10 mx-5 px-5 text-2xl md:mx-20 md:mt-0">
        "Love is patient, love is kind..."
      </h2>
      <h4 className="text-center mx-5 px-5">- 1 Corinthians 13:4</h4>

    </div>
  );
}

export default Home;
