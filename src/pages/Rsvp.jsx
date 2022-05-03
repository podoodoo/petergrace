import { useState } from "react";

const initialFormState = {
  name: "",
  food: "",
  attending: false,
};

function Rsvp() {
  const [formData, setFormData] = useState(initialFormState);

  return (
    <>
      <section className="flex container m-auto h-screen justify-center items-center">
        <div className="pt-20 px-20 md:max-w-screen-md md:max-h-[500px] h-full w-full justify-center items-center bg-[url('./assets/card.png')] bg-[rgba(252,242,239,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <h1 className="text-4xl tracking-widest">RSVP</h1>
        </div>
      </section>
    </>
  );
}

export default Rsvp;
