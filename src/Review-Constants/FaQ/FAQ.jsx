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
            <summary  className="faq__summary"><span className="faq__question">How many team members can I invite?</span></summary>
            <p className="faq__text">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
        </details>
      
        <details className="faq__detail">
          <summary  className="faq__summary"><span className="faq__question">What is the maximum file upload size?</span></summary>
          <p className="faq__text">No more than 2GB. All files in your account must fit your allotted storage space.</p>
        </details>  
      
        <details className="faq__detail">
          <summary  className="faq__summary"><span className="faq__question">How do I reset my password?</span></summary>
          <p className="faq__text">Click “Forgot password” from the login page or “Change password” from your profile page.</p>
          <p className="faq__text">A reset link will be emailed to you.</p>
        </details>  
        
        <details className="faq__detail">
          <summary  className="faq__summary"><span className="faq__question">Can I cancel my subscription?</span></summary>
          <p className="faq__text">Yes! Send us a message and we’ll process your request no questions asked.</p>
        </details> 
        
        <details className="faq__detail">
          <summary  className="faq__summary"><span className="faq__question">Do you provide additional support?</span></summary>
          <p className="faq__text">Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
        </details>   
      
      </div>
      </div> 


  )
}

export default FAQ