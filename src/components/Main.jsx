import React from "react";
import profilePic from '../images/antonProfile.JPG';
import frontEndPic from '../images/frontend_technologies.png';

const User = () => (
    <div className='image-container'>
      <img src={profilePic} alt='anton profile' />
    </div>
  )

const FrontEndTechPic = () => (
    <div className='frontend-tech-image-con'>
      <img src={frontEndPic} alt='frontend tech' />
    </div>
  )
  const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript', 'Python'];
  const formatedTechs = techs.map((tech) => <li key={tech}>{tech}</li>);
  return formatedTechs;
  }
  
  const SubscribeUser= () => (
    <div className='subscribe-form-container'>
      <h2>subscribe</h2>
      <p>Sign up with your email address to get updates.</p>
      <div className='subscribe-input-container'>
        <input type='text' placeholder='Firstname'/>
        <input type='text' placeholder='Lastname'/>
        <input type='text' placeholder='Email'/>
      </div>
      <button>Subscribe</button>
    </div>
  )
  
  const ProfileSkills = () => {
  const profileSkills = ['HTML', 'CSS', 'Python', 'JavaScript', 'React', 'Bootstrap', 'Django', 'Git', 'C++', 'Figma'];
  const profileSkillsFormatted = profileSkills.map((skill) => <p key={skill}>{skill}</p>)
  return profileSkillsFormatted;
  }
  
  const UserProfile= () => (
    <div className='user-profile'>
      <div className='user-profile-image'>
        <img src={profilePic} alt='profile pic'/>
      </div>
      <h3>anton yusupov</h3>
      <p>Beginner Web Developer</p>
      <h4>skills</h4>
      <div className='skills-container'>
        <ProfileSkills />
      </div>
      <small>Started on Sep 4 2018</small>
    </div>
  )




const Main= () => (
    <main >
      <div className='main-wrapper'>
      <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul><TechList /></ul>
        <User/>
        <FrontEndTechPic />
        <SubscribeUser />
        <UserProfile />
      </div>
    </main>
  )

export default Main;