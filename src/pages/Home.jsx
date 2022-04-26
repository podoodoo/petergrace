import Youtubelive from "../components/Youtubelive";

function Home() {
  return (
    <section className="flex container mx-auto align-center justify-center max-w-7xl h-screen drop-shadow-[0_0px_35px_rgba(0,0,0,0.15)] bg-[rgb(254,254,254,0.60)]">
      <div className="flex flex-col w-full h-full align-center">
        <h1 className="w-full text-center text-7xl pt-20 md:pt-40">
          Peter & Grace
        </h1>
        <Youtubelive />
      </div>
    </section>
  );
}

export default Home;
