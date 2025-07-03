import Button from "../Elements/Button";
import { ComboboxDemo } from "../ui/combobox";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

export default function BuyRent() {
  return (
    <>
      <div className="w-fit mt-5 font-poppins relative z-10">
        <Menubar className="border-none rounded-none bg-transparent shadow-none">
          <MenubarMenu>
            <MenubarTrigger className="text-slate-500">Buy</MenubarTrigger>
            <MenubarContent className="shadow-md border-none rounded-none p-0">
              <Menunya buttonSearch="bg-mulih text-white" />
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu className="bg-yellow-500">
            <MenubarTrigger className="text-slate-500">Rent</MenubarTrigger>
            <MenubarContent
              alignOffset={-62}
              className="shadow-md border-none rounded-none p-0"
            >
              <Menunya buttonSearch="bg-mulih text-white" />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </>
  );
}

const kota = [
  {
    value: "Bandung, Jawa Barat",
    label: "Bandung, Jawa Barat",
  },
  {
    value: "Malang, Jawa Timur",
    label: "Malang, Jawa Timur",
  },
  {
    value: "Surabaya, Jawa Timur",
    label: "Surabaya, Jawa Timur",
  },
  {
    value: "Semarang, Jawa Tengah",
    label: "Semarang, Jawa Tengah",
  },
];
const tipe = [
  {
    value: "Home",
    label: "Home",
  },
  {
    value: "Villa",
    label: "Villa",
  },
  {
    value: "Gubuk",
    label: "Gubuk",
  },
];
const harga = [
  {
    value: "Rp. 100.000.000",
    label: "Rp. 100.000.000",
  },
  {
    value: "Rp. 300.000.000",
    label: "Rp. 300.000.000",
  },
  {
    value: "Rp. 10.000.000",
    label: "Rp. 10.000.000",
  },
];

export function Menunya({ menuHandler, buttonSearch }) {
  return (
    <>
      <div
        className={`flex flex-wrap md:flex-nowrap md:flex-row flex-col shadow-xl md:px-4 md:py-6 px-2 py-2 z-10  md:w-fit  justify-between items-center transition-all duration-500 ease-in-out transform font-poppins ${menuHandler}`}
      >
        <div className=" px-1 py-2 mx-2 text-slate-500">
          <ComboboxDemo menuApa={kota} textPilih="Location" />
        </div>
        <div className=" px-1 py-2 mx-2 text-slate-500">
          <ComboboxDemo menuApa={tipe} textPilih="Type" />
        </div>
        <div className=" px-1 py-2 mx-2 text-slate-500">
          <ComboboxDemo menuApa={harga} textPilih="Price" />
        </div>
        <div className=" px-2  py-1 mx-2 md:my-0 my-2 flex items-center justify-center font-normal text-sm">
          <Button text="Search" variant={buttonSearch} />
        </div>
      </div>
    </>
  );
}
