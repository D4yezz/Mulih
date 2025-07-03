
import Navbar from "../Components/Elements/Navbar";
import RealEstate from "../Components/Layout/RealEstate";

export default function Home() {
  return (
    <>
      <div className="bg-slate-100  md:h-dvh md:px-20 px-6 overflow-hidden " id="home">
        <Navbar />
        <RealEstate></RealEstate>
      </div>
    </>
  );
}
