import React from 'react'
import { envelopeIcon } from '../Icons/Fontawesome'
import { lockIcon } from '../Icons/Fontawesome'
import { phoneIcon } from '../Icons/Fontawesome'
import { locationIcon } from '../Icons/Fontawesome'
import './Contact.css'

const Contact = () => {

    return (
        <div className=' contact'>
            <div className="contact-head">
                <div className="p-4 contact-message">
                    <h1 className='text-danger'>Send us a message</h1>
                    <p>Feel free to reach out through contact form or find our contact
                        information below. Your feedback, questions, and suggestions are
                        important to us as we strive to provide exceptional service to
                        our university community.
                    </p>

                    <div className='contact-info'>
                        <h1><span className='text-primary'>{envelopeIcon}</span> tntirand@oberlin.edu</h1>
                        <h1> <span className='text-primary'>{phoneIcon}</span> +1 440 456 7890</h1>
                        <h1><span className='text-primary'>{locationIcon}</span>Oberlin College</h1>
                    </div>

                </div>
                <div className="contact-form">
                    <form className="contact-form-form" action="">
                        <input type="text" placeholder="Enter your name" />
                        <input type="email" placeholder="Enter Your email" />
                        <textarea name="" id="" cols={50} rows={4} placeholder="Enter your message"></textarea>
                        <div className='contact-form-captcha'>
                            <div className='contact-form-captcha-confirm'>
                                <input className="checkbox" type="checkbox" />
                                <h1>I am a human <span className="text-danger p-4">{lockIcon}</span></h1>
                            </div>

                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact