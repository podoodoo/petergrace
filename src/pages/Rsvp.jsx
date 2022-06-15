import { useForm } from "react-hook-form";
// import { createRsvp } from "../graphql/mutations";
import { API } from "aws-amplify";
import { useState } from "react";

const initialFormData = { name: "", going: "", food: "" };

function Rsvp() {
  const [ formData, setFormData ] = useState(initialFormData);
  const { register, handleSubmit } = useForm();
  const { isSubmitting } = handleSubmit;

  async function onSubmit(data) {
    console.log(data);
    
    await API.graphql({
      query: () => {}, //createRsvp,
      variables: { input: formData },
    });
  }

  return (
    <>
      <section className="flex container m-auto h-screen justify-center items-center">
        <div className="pt-20 px-10 md:pt-14 md:px-20 md:max-w-screen-md md:max-h-[500px] h-full w-full justify-center items-center bg-[url('./assets/card.png')] bg-[rgba(252,242,239,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <h1 className="text-4xl tracking-widest mb-5">RSVP</h1>
          <div className="w-full md:w-1/2 justify-center">
            <div className="border-black border-t w-full mb-12 md:mb-4"></div>
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-10 md:mb-4">
                  <input
                    className="w-full p-2 focus:outline-none"
                    type="text"
                    placeholder="Name"
                    {...register("Name", { required: true, maxLength: 80 })}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <h2 className="mb-2">will be there</h2>
                <div className="mb-5">
                  <label className="block cursor-pointer ml-16 mb-3">
                    <input
                      {...register("going", { required: true })}
                      type="radio"
                      value="yes"
                      className="sr-only peer ml-10 mb-2"
                      onChange={(e) =>
                        setFormData({ ...formData, going: e.target.value })
                      }
                    />
                    <span className="-mx-5 absolute hidden peer-checked:block peer-hover:block">
                      ✔️
                    </span>
                    in person
                  </label>
                  <label className="block cursor-pointer ml-16">
                    <input
                      {...register("going", { required: true })}
                      type="radio"
                      value="no"
                      className="sr-only peer ml-10 mb-2"
                      onChange={(e) =>
                        setFormData({ ...formData, going: e.target.value })
                      }
                    />
                    <span className="-mx-5 absolute hidden peer-checked:block peer-hover:block">
                      ✔️
                    </span>
                    in spirit
                  </label>
                </div>

                <h2 className="mb-2">food selection</h2>
                <div className="mb-10 md:mb-4">
                  <label className="block cursor-pointer ml-16 mb-3">
                    <input
                      {...register("food")}
                      type="radio"
                      value="land"
                      className="sr-only peer ml-10 mb-2"
                      onChange={(e) =>
                        setFormData({ ...formData, food: e.target.value })
                      }
                    />
                    <span className="-mx-5 absolute hidden peer-checked:block peer-hover:block">
                      ✔️
                    </span>
                    land
                  </label>
                  <label className="block cursor-pointer ml-16">
                    <input
                      {...register("food")}
                      type="radio"
                      value="sea"
                      className="sr-only peer ml-10 mb-2"
                      onChange={(e) =>
                        setFormData({ ...formData, food: e.target.value })
                      }
                    />
                    <span className="-mx-5 absolute hidden peer-checked:block peer-hover:block">
                      ✔️
                    </span>
                    sea
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 font-medium text-xs text-white leading-tight bg-black hover:bg-gray-700 hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <span className="spinner-border spinner-border-sm mr-1"></span> : "Submit" }
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rsvp;
