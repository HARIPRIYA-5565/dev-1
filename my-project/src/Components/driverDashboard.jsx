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
    <div>
    {driverList.map((item) => (
      <div className="border-2 py-4 border-[#D3D3D3]">
        <div className="flex flex-wrap justify-around space-x-4">
          <div className="">
            <p className="font-semibold">{item.name}</p>
            <p><span>ID No.</span>{item.idNo}</p>
          </div>
          <div className="">
            <p>{item.subscription}</p>
            <p>{item.regDate}</p>
          </div>
          <div className="">
            <p className="text-center">{item.totalRides}</p>
            <p>{item.titleTR}</p>
          </div>
          <div className="">
            <p className="text-center">{item.clientCancellations}</p>
            <p>{item.titleCC}</p>
          </div>
          <div className="">
            <p className="text-center">{item.driverCancellation}</p>
            <p>{item.titleDC}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
)
}