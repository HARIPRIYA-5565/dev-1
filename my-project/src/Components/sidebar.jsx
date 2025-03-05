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
<div className="py-8 w-[210px] border-r border-[#D3D3D3]">
<ul className="space-y-6 font-semibold text-lg">
    {sidebarMenu.map((item)=>
    <li className="border-b border-[#D3D3D3] py-1"> <button className="px-6">
        {item.menue}
    </button>
    </li>
    )}
</ul>
</div>

)
}