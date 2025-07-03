import { IoIosArrowDown } from "react-icons/io";
import { logonegro } from "../assets/images";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";


export default function Navbar() {
    return (
        <div className="h-15 bg-[#D9D7CE] flex items-center justify-between sticky p-3">
            <div className="flex justify-baseline items-center gap-10">
                <div className="flex gap-1.5 items-center">
                    <div className="flex gap-1">
                        <div className="w-5 h-5 bg-[#FF0084] rounded-2xl"></div>
                        <div className="w-5 h-5 bg-[#0967E7] rounded-2xl"></div>
                    </div>
                    <div>
                        <img src={logonegro} className="w-40" />
                    </div>
                </div>
                <div className="flex gap-6 items-center text-[#232323]">
                    <p>FEATURES</p>
                    <p><span className="font-bold">FLICKR</span>PRO</p>
                    <p>THE APPS</p>
                    <div className="flex items-center gap-2">
                        <p>COMMUNITY</p>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex items-center gap-2">
                        <p>COMPANY </p>
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <IoSearch />
                <div className="text-bold text-3xl">
                    |
                </div>
                <p>LOGIN</p>
                <Link to="/auth/register" className="font-bold text-white bg-[#FF0084] py-2 px-5.5 rounded-xl">SIGN IN</Link>
            </div>
        </div>
    )
}