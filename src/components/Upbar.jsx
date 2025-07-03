import { circlesicon } from "../assets/images";

export default function Upbar() {
    return(
       <div>
         <div className="h-15 bg-[#232323] flex justify-center text-center items-center sticky text-white gap-7">
            <h1 className="font-bold">Upgrade everything you do with Flickr Pro</h1>
              <div className="flex gap-0.5">
                <div className="w-2.5 h-2.5 bg-[#FF0084] rounded-2xl"></div>
              <div className="w-2.5 h-2.5 bg-blue-800 rounded-2xl"></div>
              </div>
           <h1>
              Unlock unlimited storage, ad-free browsing, advanced stats.
           </h1>
        </div>
       </div>
    )
}

