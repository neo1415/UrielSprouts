import React from 'react'
// import Icon from '../../Images/signin2.svg';
import './Section.css';

const Section = () => {
  return (
<div className='signIn-container'>
<div className='app__signup app__bg  flex__center section__padding'>
        <div className='app__aboutus-content flex__center'>
            <div className='app__signup-content_about'>
                <h1 className='headtext__cormorant'>Join Our Community</h1>
                <p className='p__opensans'>
                Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut numquam doloremque et doloremque corporis qui repudiandae autem quo voluptas quos
                </p>
            </div>
        </div>

        <div className='app__aboutus-overlay flex__center'>
            {/* <img src={Icon} alt='icon' /> */}
        </div>

        <div className='app__signup-why flex__center'>
            <div className='app__aboutus-content_about'>
                <h1 className='headtext__cormorant'>Sign up Now</h1>
                <p className='p__opensans'>
                Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut numquam doloremque et doloremque corporis qui repudiandae autem quo voluptas quos
                </p>
            </div>
        </div>
    </div>
    <button type='button' className='custom-button'>Let's Go</button>
</div>
    
  )
}

export default Section