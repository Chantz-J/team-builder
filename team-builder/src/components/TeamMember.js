import React from 'react'

export default function TeamMember(props){
    
    const {info} = props
    console.log(info.id)
    
    return (
        <section className="team-member">
            <div className="icon">👨‍💻</div>
            <h1>{info.name}</h1>
            <h2>{info.email}</h2>
            <h2>{info.role}</h2>
        </section>
    )
}