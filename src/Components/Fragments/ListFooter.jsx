export default function ListFooter({ judul, satu, dua, tiga, empat, visible }) {
  return (
    <>
      <ul className="flex flex-col md:w-1/5 justify-around md:gap-0 gap-4 md:my-0 my-4 font-poppins font-normal text-slate-500 text-sm">
        <li className="font-medium text-black text-[1.1rem] md:my-0 my-2">{judul}</li>
        <li>
          <a href={`#${(satu).toLowerCase().split(" ").join("-")}`}>{satu}</a>
        </li>
        <li>
          <a href={`#${(dua).toLowerCase().split(" ").join("-")}`}>{dua}</a>
        </li>
        <li>
          <a href={`#${(tiga).toLowerCase().split(" ").join("-")}`}>{tiga}</a>
        </li>
        <li className={visible}>
          <a href={`#${(empat).toLowerCase().split(" ").join("-")}`}>{empat}</a>
        </li>
      </ul>
    </>
  );
}
export function ListSocial() {
  return (
    <>
    <div className="flex flex-col justify-start">
    <h3 className="font-medium text-black text-[1.1rem] font-poppins">Follow us on</h3>
      <div className="flex gap-4 mt-4">
        <div className="p-2 w-10 bg-white rounded-full">
          <img src="public/assets/Instagram.png" alt="Instagram" />
        </div>
        <div className="px-2 py-3  w-10 bg-white rounded-full">
          <img src="public/assets/youtube.png" alt="Youtube" />
        </div>
        <div className="p-2 w-10 bg-white rounded-full">
          <img src="public/assets/facebook.png" alt="Facebook" />
        </div>
      </div>
      </div>
    </>
  );
}
