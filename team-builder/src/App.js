import React, { useState } from 'react'

import TeamForm from './components/Form'
import TeamMember from './components/TeamMember'

export default function App(){

  //Empy State for Team Member that will be rendered
  const Teammembers = []

  const idNumber = Math.random()
  //Shape of default input state
  const formValues = {
    name: '',
    email: '',
    role: '',
    id: idNumber
  }

  //State slices: "Team" and "Form" that adds to it.
  const [team, setTeam] = useState(Teammembers)
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
    setTeam(team.concat(newMember))
    setForm(formValues)
   }


  return (
    <div className="App">
      <h1>Build your team!</h1>
      <TeamForm values={form} update={updateForm} submit={submitForm} />
      <section className="team-members">
        <h1>View the team down below: 👇</h1>
        {
          team.map(person => {
            return (
              <TeamMember key={form.id} info={person}/>
            )
          })
        }
      </section>
    </div>
  )
}