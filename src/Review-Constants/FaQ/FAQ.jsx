import React from 'react'
import './FAQ.scss'

const FAQ = () => {
  return (
         <div className="faq">
        
        <div className="faq__logo__holder">
        <div className="faq__logo">
          <img src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-woman-online-mobile.svg" alt="woman at a computer" className="faq__logo__image hidden-lg" />
          <img src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-box-desktop.svg" alt="" className="faq__logo__image visible-lg" />
        </div>
        </div>
        
        <div className="faq__holder">
        <h1 className="faq__heading">FAQ</h1>
       
        <details className="faq__detail">
            <summary  className="faq__summary"><span className="faq__question">How Long does it take to get a feedback?</span></summary>
            <p className="faq__text">Feedback will typically take between one to two working days.</p>
        </details>
      
        <details className="faq__detail">
          <summary  className="faq__summary"><span className="faq__question">What is the maximum file upload size?</span></summary>
          <p className="faq__text">No more than 5mb. All files uploaded must be within this size limit.</p>
        </details>  
      
        {/* <details className="faq__detail">
          <summary  className="faq__summary"><span className="faq__question">How do I reset my password?</span></summary>
          <p className="faq__text">Click “Forgot password” from the login page or “Change password” from your profile page.</p>
          <p className="faq__text">A reset link will be emailed to you.</p>
        </details>  
         */}
        <details className="faq__detail">
          <summary  className="faq__summary"><span className="faq__question">Can I cancel my subscription?</span></summary>
          <p className="faq__text">Yes! Send us a message and we’ll process your request no questions asked.</p>
        </details> 
        
        <details className="faq__detail">
          <summary  className="faq__summary"><span className="faq__question">Do you provide additional support?</span></summary>
          <p className="faq__text">Social media and email support is available 24/7. Phone lines are open during normal business hours.</p>
        </details>   
      
      </div>
      </div> 


  )
}

export default FAQ