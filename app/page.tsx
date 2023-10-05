import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import Homepage from "./Homepage";

export default function Home() {
  return (
    <div class=" relative h-full  ">

<div class="w-full flex justify-center">
<div class="... flex justify-center max-w-4xl space-y-4 flex-col text-white absolute z-20">
      <div class="text-3xl font-bold">"It's Funny How You Wake Up Each Day and Never Really Know If It'll Be One That Will Change Your Life Forever."</div>
      
      <div className="... flex justify-center text-3xl mb-10">
                <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-blue-200 to-yellow-200
                    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400
                    font-medium rounded-sm text-lg px-5 py-2.5 text-center mr-2 mb-2">start watching</button>
            </div>
      </div>
    
    </div>

      <div class="z-10 absolute w-full  h-60 bg-gradient-to-b from-black   ">
        <div class="flex  items-center py-4 px-20 w-full justify-between">
          <div class="flex space-x-6 hidden  sm:inline-flex">
            <img
              class="w-40 dark:text-white"
              src="https://upload.wikimedia.org/wikipedia/sco/c/ca/Studio_Ghibli_logo.svg"
              alt="STUDIO-GHIBLI"
            />
          </div>
        </div>
      </div>

      <div class="z-10 h-60 bg-gradient-to-t absolute from-black text-white bottom-0 w-full">
      </div>

      
      <div class="-z-10 flex w-full object-fit">
        <Homepage />
      </div>
    </div>
  );
}
