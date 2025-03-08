import React from "react";

import Sidebar from "./sidebar";
import Driverdashboard from "./driverDashboard"

export default function Main(){
return(

   <div className="grid grid-cols-12"> 
   <div className="col-span-2"> <Sidebar/></div>
 <div className="col-span-10 bg-gray-200"><Driverdashboard/></div>
    </div>
)
}