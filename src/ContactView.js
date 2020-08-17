import React from 'react';

import screenshotEmail from 'images/screenshot_email.png';

class ContactView extends React.Component {

    render = () => {
        return (
            <div className='content-box'>
                <div>
                    <p>Mos podeu escriure al correu electrònic:</p>
                    <br />
                    <img src={screenshotEmail} />
                </div>
            </div>
        )
    };
};

export default ContactView;
