import { useState,useEffect,useMemo, use } from "react"
import axios from "axios"

function App() {
  const [patients,setPatients] = useState([])
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
    <div className="App">
      <h1>Patients</h1>
      {patients.map((patient)=>(
        <div key={patient._id}>
          <h2>{patient.name}</h2>
          <p>{patient.age} years old</p>
          <p>{patient.gender}</p>
          <p>{patient.diagnosis}</p>
        </div>
      ))}
    </div>
  )
}