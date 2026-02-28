import { useState,useEffect,useMemo, use } from "react"
import axios from "axios"
import PatientCard from "./PatientCard"

function App() {
  const [patients,setPatients] = useState([])
  const [search,setSearch] = useState("")
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    axios.get("https://doc-back.onrender.com/patients").then((res)=>{
console.log(res.data)
      setPatients(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className="container">
      <h2>Patients Dashboard</h2>
      <input type="text" className='form-control mb-4' placeholder="Search patient by name..." />
{
  loading && <div className='alert alert-info'>Loading...</div>
}
{
  !loading && (
    <div>Patients loaded</div>
  )
}
</div>
  )
}

export default App