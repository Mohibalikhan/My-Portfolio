import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-6xl md:text-6xl'>Technologies Work With!</h2>
          <p className='text-blue-300 pt-2'data-aos="flip-up"><b>
            I am a versatile web developer with expertise in HTML, CSS, JavaScript, React, Next.js, and Node.js. I have experience working with various technologies and frameworks, and I am always eager to learn new skills and technologies As a beginner Data Science student with excellent computer skills, proficiency in tools like PowerBI, R, Excel, Google Sheets, Java Script,C++ and Phython.</b>
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2' data-aos="fade-down-right">
              <h2><i>1. Phython</i></h2>
              <h2><i>2. JavaScript</i></h2>
              <h2><i>3. C++</i></h2>

            </div>
            <div className='space-y-2' data-aos="fade-down-left">
              <h2><i>4. HTML/CS</i>S</h2>
              <h2><i>5. REACT</i></h2>
              <h2><i>6. NEXT.JS</i></h2>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
