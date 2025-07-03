import ImageAboutUs from "../Components/Layout/ImageAboutUs";
import AboutUsLayout from "../Components/Layout/AboutUsLayout";
export default function About(){
    return(
        <>
        <div className="md:px-20 px-8 pb-12 md:pt-48 pt-20 flex md:flex-row flex-col justify-center gap-8 overflow-x-hidden" id="about-us">
            <ImageAboutUs/>
            <AboutUsLayout/>
        </div>
        </>
    )
}