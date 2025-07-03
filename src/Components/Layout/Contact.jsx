import Button from "../Elements/Button";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col md:w-2/5 gap-4 font-poppins md:mb-0 mb-4">
        <img
          src="/public/assets/logo_text.png"
          alt="Logo Text"
          className="w-24"
        />
        <p className="text-sm md:max-w-[300px] max-w-[250px]">
          We have built our reputation as true local area experts.
        </p>
        <h4 className="text-xl font-medium">Newsletter</h4>
        <div className="flex">
          <input
            type="text"
            placeholder="Input your email"
            className="px-4 py-2 md:text-sm text-xs"
          />
          <Button text="Send" variant="bg-mulih text-white w-fit shadow-[0px_0px_50px] shadow-mulih md:text-sm text-xs" />
        </div>
      </div>
    </>
  );
}
