import React from "react";

const sidebarMenu=[{
id:0 ,
menue: "Home"
},
{
id:1,
menue: "Driver",
},
{
    id:2, 
    menue: "Payouts",
},
{
    id:3,
    menue: "Marketing",
},
{
    id:4,
    menue: "Referrals",
},
{
    id:5,
    menue: "Accounting"
},
{ 
    id:6,
    menue: "Rider",
},
{
    id: 7,
    menue: "Rider Requests",
},
{
    id: 8,
     menue: "Complaints",
},
{
    id: 9,
    menue: "Management",
},
]
export default function Sidebar(){
return(
<div className="py-8 w-[210px] shadow-lg shadow-[#D3D3D3] h-screen">
<ul className="font-semibold text-lg  text-gray-900">
    {sidebarMenu.map((item)=>
    <li className="shadow-sm shadow-[#D3D3D3] hover:shadow-md hover:text-[#6693F5]"><button className="py-4 hover:py-6 px-6">
        {item.menue}
    </button>
    </li>
    )}
</ul>
</div>
)
}
