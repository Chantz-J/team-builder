import React, { useState } from 'react'

import TeamForm from './components/Form'

export default function App(){

  //Shape of default input state
  const formValues = {
    name: '',
    email: '',
    role: ''
  }

  //State slices: "Team" and "Form" that adds to it.
  const [team, setTeam] = useState([])
  const [form, setForm] = useState(formValues)


  //Handle form changes
  const updateForm = (inputName, inputValue) => {
    setForm({
      ...form,
      [inputName]: inputValue
    })
  }

   const submitForm = () => {
     const newMember = {
       name: form.name.trim(),
       email: form.email.trim(),
       role: form.role.trim()
     }
     if (!newMember.name || !newMember.email || !newMember.role) {
      return
    }
   }


  return (
    <div className="App">
      <h1>Build your team!</h1>
      <TeamForm values={form} update={updateForm} submit={submitForm} />
    </div>
  )
}