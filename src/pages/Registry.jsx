function Registry() {
  return (
    <section>
      <div className="flex flex-col w-3/4 justify-center mx-auto border-y border-black md:w-1/3 md:mb-10">
        <h2 className="w-full text-center text-2xl mb-4 mt-8 md:text-4xl">
          Registry
        </h2>
        <div className="flex w-full justify-center mx-auto">
          <div className="grid grid-rows-2 grid-cols-2 gap-5 justify-center align-middle items-center h-60 w-60 md:h-80 md:w-80">
            <a href="https://www.amazon.com/wedding/peter-bae-grace-kim--july-2022/registry/1CQ4YQLGT9T6A">
              <img
                src={require("../assets/pics/logos/amazonus.png")}
                alt="amazonus"
                className=""
              />
            </a>
            <a
              href="https://www.amazon.ca/wedding/share/petergrace2022"
            >
              <img
                src={require("../assets/pics/logos/amazonca.png")}
                alt="amazonca"
              />
            </a>
            <a
              href="https://www.crateandbarrel.com/gift-registry/peter-bae-and-grace-kim/r6519905"
            >
              <img
                src={require("../assets/pics/logos/crate-barrel.png")}
                alt="crate-barrel"
              />
            </a>
            <a
              href="https://www.honeyfund.com/wedding/bae-kim-07-30-2022"
            >
              <img
                src={require("../assets/pics/logos/honeyfund.png")}
                alt="honeyfund"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registry;
