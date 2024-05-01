import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <>
      <div className='edu'><h1>Education</h1></div>
      <div className='bio'><span>Mr.Teja Reddy Raju</span><p>During my academic years, I pursued education passionately, embracing a journey filled with growth, challenges, and accomplishments. I dedicated myself to learning and expanding my knowledge across various subjects, fostering critical thinking, creativity, and problem-solving skills. Through engaging lectures, interactive discussions, and hands-on projects, I gained valuable insights, perspectives, and experiences that shaped my academic journey. I actively participated in extracurricular activities, collaborated with peers, and sought opportunities for personal and academic development. These formative years not only equipped me with academic excellence but also instilled a lifelong love for learning and a resilient mindset to face future endeavors with confidence and determination.</p>
    
      </div>
      <div className='eductaion'>
        <table>
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Passing Year</th>
              <th>Institution</th>
              <th>University Board</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.E-Computer Science and Engineering</td>
              <td>2023</td>
              <td><a href='https://saveetha.ac.in/' target='_blank' rel="noopener noreferrer">Saveetha Engineering College</a></td>
              <td>Anna University</td>
              <td>8.5</td>
            </tr>
            <tr>
              <td>MPC</td>
              <td>2019</td>
              <td><a href='https://viswasai.com/' target='_blank' rel="noopener noreferrer">Viswasai Junior College</a></td>
              <td>Board of Intermediate Education of A.P</td>
              <td>9.4</td>
            </tr>
            <tr>
              <td>10Th std</td>
              <td>2017</td>
              <td>Bhashyam English Medium High School</td>
              <td>Board of Secondary Education of A.P</td>
              <td>9.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Education