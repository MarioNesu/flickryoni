import { camara, camaramuchacha } from "../assets/images";

export default function Sesion1() {
    return (
        <div className="h-160 flex justify-between bg-[#D9D7CE]">
            <div className="w-[60%]">
                <p className="font-bold text-9xl text-[#232323]">
                    THE BEST PLACE TO BE A PHOTOGRAPHER ONLINE.
                </p>
            </div>
            <div className="mt-5 flex flex-col">
                <div className="flex justify-end">
                    <img className="w-[65%] flex justify-end" src={camara} alt="" />
                </div>
                <div className="flex justify-end">
                    <img className="w-[75%] flex justify-end" src={camaramuchacha} alt="" />
                </div>
            </div>
        </div>
    )
}