import React from 'react';

import screenshotEmail from 'images/screenshot_email.png';

const ContactView = () => {
    return (
        <div className='content-box'>
            <div>
                <p>Mos podeu escriure al correu electrònic:</p>
                <br />
                <img src={screenshotEmail} alt="Adreça electrònica"/>
            </div>
        </div>
    );
};

export default ContactView;
