import { useForm } from "react-hook-form";
import { createRsvp } from "../graphql/mutations";
import { API } from "aws-amplify";
import { useState } from "react";

const initialFormData = { name: "", going: "", food: "", notes: "" };

function Rsvp() {
  const [formData, setFormData] = useState(initialFormData);
  const { register, handleSubmit, reset, formState } = useForm(formData);

  async function onSubmit(data) {
    await API.graphql({
      query: createRsvp,
      variables: { input: formData },
    });
  }

  return (
    <>
      <section className="flex container m-auto justify-center items-center">
        <div className="flex flex-col md:flex-row py-14 px-10 md:py-8 md:px-14 md:max-w-screen-md md:max-h-[600px] w-full justify-center items-center bg-[url('./assets/card.png')] bg-[rgba(252,242,239,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col w-full md:w-1/2 justify-center">
            <div className="inline-block mb-5">
              <h1 className="text-4xl tracking-widest inline">RSVP</h1>
              <p className="text-sm ml-4 align-bottom inline">(one at a time, please)</p>
            </div>
            <div className="">
              <div className="border-black border-t w-full mb-12 md:mb-4"></div>
              <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4 md:mb-4">
                    <input
                      className="w-full p-2 focus:outline-none"
                      type="text"
                      placeholder="Name"
                      {...register("name", { required: true, maxLength: 80 })}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-10 md:mb-4">
                    <input
                      className="w-full p-2 focus:outline-none"
                      type="text"
                      placeholder="Additional Notes"
                      {...register("notes", { required: false, maxLength: 80 })}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>

                  <h2 className="mb-2 text-bold">will be there</h2>
                  <div className="mb-5">
                    <label className="block cursor-pointer ml-16 mb-3">
                      <input
                        {...register("going", { required: true })}
                        type="radio"
                        value="yes"
                        className="sr-only peer ml-10 mb-1"
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
                        className="sr-only peer ml-10 mb-1"
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

                  <h2 className="mb-2 text-bold">food selection</h2>
                  <div className="mb-10 md:mb-4">
                    <label className="block cursor-pointer ml-16 mb-3">
                      <input
                        {...register("food")}
                        type="radio"
                        value="land"
                        className="sr-only peer ml-10 mb-1"
                        onChange={(e) =>
                          setFormData({ ...formData, food: e.target.value })
                        }
                      />
                      <span className="-mx-5 absolute hidden peer-checked:block peer-hover:block">
                        ✔️
                      </span>
                      land
                    </label>
                    <label className="block cursor-pointer ml-16 mb-3">
                      <input
                        {...register("food")}
                        type="radio"
                        value="sea"
                        className="sr-only peer ml-10 mb-1"
                        onChange={(e) =>
                          setFormData({ ...formData, food: e.target.value })
                        }
                      />
                      <span className="-mx-5 absolute hidden peer-checked:block peer-hover:block">
                        ✔️
                      </span>
                      sea
                    </label>
                    <label className="block cursor-pointer ml-16 mb-3">
                      <input
                        {...register("food")}
                        type="radio"
                        value="kids"
                        className="sr-only peer ml-10 mb-1"
                        onChange={(e) =>
                          setFormData({ ...formData, food: e.target.value })
                        }
                      />
                      <span className="-mx-5 absolute hidden peer-checked:block peer-hover:block">
                        ✔️
                      </span>
                      kids
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 font-medium text-xs text-white leading-tight bg-black hover:bg-gray-700 hover:shadow-lg"
                    disabled={formState.isSubmitting || formState.isSubmitted}
                  >
                    {formState.isSubmitted ? (
                      "👍🏿"
                    ) : (
                      <>{formState.isSubmitting ? "Submitting..." : "Submit"}</>
                    )}
                  </button>
                  {formState.isSubmitted && (
                    <div
                      className="cursor-pointer underline text-sm ml-4 inline-block"
                      onClick={() => {
                        reset();
                      }}
                    >
                      RSVP another?
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="mt-10 md:ml-10 p-5 border-spacing-2 border-2 md:w-1/3">
            <h5 className="text-sm text-bold mb-2 underline underline-offset-1">Menu</h5>
            <p className="mb-2 text-xs">
              All dishes come with Smoked Salmon & Coconut Clam Chowder
            </p>
            <p className="mb-2 text-xs">
              <span className="mr-2 underline underline-offset-1">land:</span> Herb Breaded
              Berkshire Pork Chop, Creamed Kale & Cabbage, Potato Roesti,
              Calvados Apple Demi
            </p>
            <p className="mb-4 text-xs">
              <span className="mr-2 underline underline-offset-1">sea:</span> Orange Chipotle
              Pacific Cod, Soft Polenta, Green Asparagus, Mango Corn Salsa
            </p>
            <p className="text-sm text-bold underline underline-offset-1">
              Please indicate any dietary restrictions in Additional Notes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rsvp;
