import React from 'react'
import Card from './Card'

function Dashboard() {
  let data=[
    { tittle:"Earning(Monthly)",
    value:"$40,000",
    color:"primary",
    icon:"calendar",
    isProgress:false
     },
   { tittle:"Earning(Annual)",
    value:"$60,000",
    color:"success",
    icon:"dollar-sign",
    isProgress:false
   },
   { tittle:"Task",
    value:"50%",
    color:"info",
    icon:"clipboard-list",
    isProgress:true
   },
   { tittle:"Pending Request",
    value:"18",
    color:"warning",
    icon:"comments",
    isProgress:false
   }
     ]
  return <>
  <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
<div id="content">

   

    {/* <!-- Begin Page Content --> */}
    <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">

        {
           data.map((e,i)=>{
            return <Card key={i}
            input={e}/>
           })
            
           }
           
        </div>
    

</div>



</div>
</div>
  </>  
  
}

export default Dashboard