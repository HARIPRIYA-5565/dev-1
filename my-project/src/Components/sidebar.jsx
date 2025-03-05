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
<div>
<ul>
    {sidebarMenu.map((item)=>
    <li> <button>
        {item.menue}
    </button>

    </li>
    )}
</ul>

</div>

)
}