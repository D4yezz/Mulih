import ListFooter, {ListSocial} from "@/Components/Fragments/ListFooter";
import Contact from "@/Components/Layout/Contact";

export default function Footer(){
    return(
        <div className="md:px-20 px-8 py-12 bg-slate-100 flex md:flex-row flex-col" id="contact">
            <Contact/>
            <ListFooter judul="Service" satu="About Us" dua="Careers" tiga="Terms & Conditions" empat="Privacy & Policy" />
            <ListFooter judul="Community" satu="Find agents" dua="Lifestyle" tiga="Legal notic" empat="p" visible="opacity-0" />
            <ListSocial/>
        </div>
    )
}