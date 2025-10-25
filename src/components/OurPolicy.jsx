import React from "react";
import { assets } from "../assets/frontend_assets/assets"; // ✅ import your assets file

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange Policy" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle-free exchange policy</p>
      </div>
       <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Exchange Policy" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We offer 7 Days Free return policy</p>
      </div>
       <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Exchange Policy" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
