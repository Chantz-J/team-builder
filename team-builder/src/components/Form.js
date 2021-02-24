import React, { useState } from 'react'
import styled from 'styled-components'

const FormSection = styled.section`

`

export default function TeamForm(props) {

    const {values, update, submit} = props

    const onChange = e => {
        const {name, value} = e.target
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <FormSection>
            <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                <label>Name
                    <input 
                    name='name' 
                    type='text'
                    value={values.name} 
                    onChange={onChange} 
                    placeholder='name'
                    />
                </label>
                <label>Email
                    <input 
                    name='email' 
                    type='text' 
                    value={values.email} 
                    onChange={onChange}  
                    placeholder='name@email.com'
                    />
                </label>
                <select value={values.role} name='role' onChange={onChange}>
                    <option value='Designer'>Designer</option>
                    <option value='Front-End-Developer'>Front End Developer</option>
                    <option value='Back-End-Developer'>Back End Developer</option>
                </select>
                <button>Submit</button>
            </form>
        </FormSection>
    )
}