import { MapPin, Gift, HelpCircle, Globe } from "lucide-react";

const Header=()=>{
    return(
        <>
        {/* <div>
            <p className="text-center text-[14px] text-sm text-black">
                Membership Madness is giving big.March 17-28,only in lululemon iOS app</p>
        </div> */}
        <div className="w-screen   left-0   flex justify-end items-center space-x-6 pt-2 pl-2 pb-2 pr-19  text-sm text-gray-700 bg-gray-50">
      <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
        <MapPin size={16} />
        <span>Store Locator</span>
      </div>
      <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
        <Gift size={16} />
        <span>Gift Cards</span>
      </div>
      <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
        <HelpCircle size={16} />
        <span>Get Help</span>
      </div>
      <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
        <Globe size={16} />
        <span>USA</span>
      </div>
    </div>
    </>
    )
 }
 export default Header