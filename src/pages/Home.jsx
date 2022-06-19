import pic7 from "../assets/pics/7.jpg"

function Home() {
  return (
      <div className="flex flex-col w-full h-full align-center">
        <h1 className="w-full text-center text-4xl mb-10 pt-20 md:pt-40 md:text-6xl">
          Peter & Grace
        </h1>
        <img src={pic7} alt="7.jpg" className="align-middle overflow-hidden object-cover m-5 md:m-20" />
        <h3 className="text-center mt-10 mx-5 px-5 pt-5 text-2xl border-t-2 md:mx-20">"Love is patient, love is kind..."</h3>
        <h4 className="text-center mt-5 mx-5 px-5">- 1 Corinthians 13:4</h4>
      </div>
  );
}

export default Home;
