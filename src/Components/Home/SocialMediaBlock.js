import React, { Component } from 'react';
import { faFacebookF,faFacebook, faTwitter, faYoutube, faInstagram, faDiscord,faReddit ,faTwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class SocialMediaBlock extends Component {
    render() {
        return (
            <ul className='sm-list'>
                 <li>
                    <div className='icon-container'>
                    <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className='icon-text'>
                        Pubg Esports
                    </div>
                </li>
                <li>
                    <div className='icon-container'>
                    <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className='icon-text'>
                        Pubg
                    </div>
                </li>
                <li>
                    <div className='icon-container'>
                    <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className='icon-text'>
                        @Pubg Esports
                    </div>
                </li>
                <li>
                    <div className='icon-container'>
                    <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className='icon-text'>
                        @Pubg Esports
                    </div>
                </li>
                <li>
                    <div className='icon-container'>
                    <FontAwesomeIcon icon={faTwitch} />
                    </div>
                    <div className='icon-text'>
                        Pubg
                    </div>
                </li>
                <li>
                    <div className='icon-container'>
                    <FontAwesomeIcon icon={faDiscord} />
                    </div>
                    <div className='icon-text'>
                        Pubg
                    </div>
                </li>
                <li>
                    <div className='icon-container'>
                    <FontAwesomeIcon icon={faReddit} />
                    </div>
                    <div className='icon-text'>
                        @Pubg Esports
                    </div>
                </li>
            </ul >
        );
    }
}

export default SocialMediaBlock;