import ReviewsAtas, { ReviewsBawah } from "../Fragments/Reviews";

export default function ImageAboutUs(){
    return(
        <>
        <div className="md:w-2/3 w-full  md:h-[70vh] h-[50vh] bg-no-repeat bg-[url(../../public/Assets/benefit_img.png)] bg-center bg-cover relative">
            <ReviewsAtas/>
            <ReviewsBawah/>
        </div>
        </>
    )
}