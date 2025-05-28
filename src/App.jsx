import './App.css'
import EditSection from './components/EditSection'
import PreviewSection from './components/PreviewSection'
import { useState } from 'react'

function App() {
  const [name, setName] = useState("John")
  const [lastName, setLastName] = useState("Doe")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [educationList, setEducationList] = useState([])
  const [experienceList, setExperienceList] = useState([])

  let setInfo = {
    sName: setName,
    sLastName: setLastName,
    sEmail: setEmail,
    sPhone: setPhone
  }

  let readInfo = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone
  }

  return (
    <div className="App">
      <EditSection setInfo={setInfo} educationList={setEducationList} experienceList={setExperienceList} />
      <PreviewSection readInfo={readInfo} educationList={educationList} experienceList={experienceList} />
    </div>
  )
}

export default App
