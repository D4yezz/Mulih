
export default function Recomendation() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between py-10">
        <div className="items-center">
          <h1 className="font-rubik md:text-4xl text-3xl font-semibold text-blue-950">
            Best Recomendation
          </h1>
          <p className="max-w-[490px] text-xs md:text-sm font-poppins mt-4 text-slate-500">
            Discover our exclusive selection of the finest one-of-a-kind luxury
            properties architectural masterpieces.
          </p>
        </div>
        <button  className="flex font-poppins text-mulih items-center md:justify-between justify-end md:mt-0 mt-4">
          Learn More
          <img src="/assets/arrow_right_circle.svg" alt="baby"  className="w-6 ml-2 rounded-full shadow-[0px_0px_10px_0px] shadow-mulih"/>
        </button>
      </div>
    </>
  );
}
