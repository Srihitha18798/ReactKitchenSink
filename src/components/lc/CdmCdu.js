import React,{useEffect,useState} from 'react'

const CdmCdu = () => {

    const [empname,setName]=useState("Srihitha");
    const [empSalary,setSalary]=useState(10000);

    useEffect(()=>{
        console.log("UseEffect called after mount and after each state changes");
    })

  return (
    <>
    <h3>Useeffect demo -CDM+CDU</h3>
    <p className="lead">
        <span>Name: {empname}</span><br/>
        <span>Salary: {empSalary}</span>
    </p>
    <button type="button" className="m-1 btn btn-outline-secondary" onClick={()=>setName("Tadiparthi")}>Change Name</button>
    <button type="button" className="m-1 btn btn-outline-secondary" onClick={()=>setSalary(empSalary+1000)}>Change Salary</button>

    </>
  )
}

export default CdmCdu