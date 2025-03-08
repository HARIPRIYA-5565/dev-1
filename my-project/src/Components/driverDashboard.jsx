import React from "react";

const driverList=[{
    id: 0,
    name: "Krishanku Borah",
    idNo: "256512",
    subscription: "Active Subscription",
    regDate: "25/6/12",
    totalRides: "111",
    titleTR:"Total Rides",
    clientCancellations:"11",
    titleCC: "Client Cancellations",
    driverCancellation: "1",
    titleDC: "Driver Cancellation",
},
{
    id: 1,
    name: "Krishanku Borah",
    idNo: "256512",
    subscription: "Expired Cancellation",
    regDate: "25/6/12",
    totalRides: "111",
    titleTR:"Total Rides",
    clientCancellations:"11",
    titleCC: "Client Cancellations",
    driverCancellation: "1",
    titleDC: "Driver Cancellation",
},
{
    id: 2,
    name: "Krishanku Borah",
    idNo: "256512",
    subscription: "Active Subscription",
    regDate: "25/6/12",
    totalRides: "111",
    titleTR:"Total Rides",
    clientCancellations:"11",
    titleCC: "Client Cancellations",
    driverCancellation: "1",
    titleDC: "Driver Cancellation",
},
{
    id: 3,
    name: "Krishanku Borah",
    idNo: "256512",
    subscription: "Active Subscription",
    regDate: "25/6/12",
    totalRides: "111",
    titleTR:"Total Rides",
    clientCancellations:"11",
    titleCC: "Client Cancellations",
    driverCancellation: "1",
    titleDC: "Driver Cancellation",
},
{
    id: 4,
    name: "Krishanku Borah",
    idNo: "256512",
    subscription: "Active Subscription",
    regDate: "25/6/12",
    totalRides: "111",
    titleTR:"Total Rides",
    clientCancellations:"11",
    titleCC: "Client Cancellations",
    driverCancellation: "1",
    titleDC: "Driver Cancellation",
},
]

export default function Driverdashboard(){
return(
  <div className="px-6">
    <div className="pt-6 flex justify-end "><button className="border border-gray-300 text-md py-2 px-6 bg-[#6693F5] text-white rounded-md hover:text-lg">Add</button></div>
    <div className="space-y-8 mt-6">
    {driverList.map((item) => (
      <div className="shadow-md py-4 bg-white">
        <div className="flex flex-wrap justify-around space-x-4">
          <div className="">
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p><span className="text-gray-400">ID No-</span><span className="text-gray-800">{item.idNo}</span></p>
          </div>
          <div className="">
            <p className="text-center text-gray-800 font-medium">{item.subscription}</p>
            <p><span className="text-gray-400">Registration Date-</span><span className="text-gray-800">{item.regDate}</span></p>
          </div>
          <div className="">
            <p className="text-center text-gray-800 font-medium">{item.totalRides}</p>
            <p className="text-gray-400">{item.titleTR}</p>
          </div> 
          <div className="">
            <p className="text-center text-gray-800 font-medium">{item.clientCancellations}</p>
            <p className="text-gray-400">{item.titleCC}</p>
          </div>
          <div className="">
            <p className="text-center text-gray-800 font-medium">{item.driverCancellation}</p>
            <p className="text-gray-400">{item.titleDC}</p>
          </div>
        </div>
      </div>
    ))}
  </div> 
  </div>
)
}