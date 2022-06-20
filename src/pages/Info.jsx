function Info() {
  return (
    <div className="flex flex-col w-full h-full align-center">
      <h2 className="w-full text-center text-4xl mb-8 pt-4 md:text-6xl md:pt-40">
        Wedding Day
      </h2>
      <h3 className="text-sm text-center mb-4 mx-5 py-5 px-8 border-t-2 md:px-48 md:mx-20">
        Each of us alone is incomplete, together with Christ we are as one in
        this there shall be joy. We, Grace Kim & Peter Bae, invite you to share
        in this joy on{" "}
        <span className="text-xl block my-3">July 30th, 2022</span> when we will
        exchange marriage vows and ask God's blessing on our union at 11AM.
      </h3>
      <h3 className="text-sm text-center mb-16 mx-5 py-5 px-8 border-y-2 md:px-44 md:mx-20">
        은혜 안에서 만난 저희 두 사람이 믿음의 가정을 이루는 첫걸음을
        내딛습니다. 하나님의 사랑을 주위에 나누며 살아가는 가정이 되도록 축복과
        격려로 함께하여 주시면 감사하겠습니다.
      </h3>
      <div className="text-center justify-center mx-5 pb-7 mb-7 border-b md:mx-20">
        <h3 className="text-2xl mb-4">Ceremony</h3>
        <h5 className="text-bold">Legacy Church</h5>
        <p className="text-center">9012 160 St, Surrey, BC V4N 3A5, Canada</p>
      </div>
      <div className="text-center justify-center mx-5 md:mx-20">
        <h3 className=" text-2xl mb-4">Reception</h3>
        <h5 className="text-center text-bold">Sheraton Hotel Guildford</h5>
        <p className="text-center">15269 104 Ave, Surrey, BC V3R 1N5, Canada</p>
      </div>
    </div>
  );
}

export default Info;
