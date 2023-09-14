import React from 'react'
import photoOfMe from './assets/Biz photo.jpg'
import mailIcon from './assets/mail.png'
import linkedInIcon from './assets/linkedInIcon.png'

function Info() {

  return (
    <div>
        <img src={photoOfMe} id="photo"></img>
        <h1 style={{marginBottom: 0}}>Anthony A. Garcia</h1>
        <p id="title" style={{marginBottom: 0}}>Software Developer in training</p>
        <p style={{marginTop: 0}}>Website TBD</p>
        <div className="buttons-container">
            <button className="email">
                <a href="https://www.flaticon.com/free-icons/email" title="email icons"><img src={mailIcon} alt="email icon" id="email-icon"/></a>
                Email
            </button>
            <button className="linkedIn" >
                <img src={linkedInIcon} id="linkedInIcon"/>
                LinkedIn
            </button>
        </div>
    </div>
  )
}

export default Info