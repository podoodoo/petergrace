import ringjpg from "../assets/pics/ring.jpg";
//import * as images from "../assets/pics/landing/*.jpg";

function Home() {
  const weddingDate = new Date(1659182400000);
  const nowDate = new Date().getTime();

  const live = nowDate - weddingDate > 0;

  return (
    <div className="flex flex-col w-full h-full align-center">
      <h1 className="w-full text-center text-4xl pt-16 md:pt-12 md:text-5xl">
        Peter & Grace
      </h1>
      <div className="flex mx-auto justify-center align-middle overflow-hidden m-5 md:m-12 md:h-2/3 md:w-7/8">
        {live ? (
          <div className="w-full h-full m-auto">
            <iframe
              src="https://www.youtube.com/embed/8M_DRzAHsuM"
              title="Peter & Grace's Wedding"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowfullscreen
              className="w-full h-full"
            ></iframe>
          </div>
        ) : (
          <img
            src={ringjpg}
            alt="ring"
            className="p-5 md:w-3/4 md:object-none md:object-[45%_75%]" // -270px_-750px
          />
        )}
      </div>
      <h2 className="text-center mt-10 mx-5 px-5 text-2xl md:mx-20 md:mt-0">
        "Love is patient, love is kind..."
      </h2>
      <h4 className="text-center mx-5 px-5">- 1 Corinthians 13:4</h4>
    </div>
  );
}

export default Home;
