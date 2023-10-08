import React from 'react'
import profilePhoto from 'src/assets/profile-photo.png'
import GithubIcon from 'src/assets/github.svg'
import LinkedinIcon from 'src/assets/linkedin.svg'
import PhoneIcon from 'src/assets/phone.svg'
import EmailIcon from 'src/assets/email.svg'
import './Profile.css'

function Profile() {
    return (
        <>
            <div id="profile-container">
                <div id="profile-image-container">
                    <img id="profile-image" src={profilePhoto} />
                </div>
                <div id="profile-info-container">
                    <div className="profile-info" id="profile-info-name">
                        <div>
                            <span className="item-prefix">&gt;</span> Luke
                            Harrison
                        </div>
                    </div>
                    <div className="profile-info">
                        <div>
                            <span className="item-prefix">&gt;</span> IBM -
                            Node.js Application Developer
                        </div>
                    </div>
                    <div className="profile-info">
                        <div>
                            <span className="item-prefix">&gt;</span> NYIT -
                            B.S. Computer Science
                        </div>
                    </div>
                </div>
                <div id="social-container">
                    <div className="social-icon-container">
                        <a
                            href="https://github.com/lharrison1313"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="social-icon" src={GithubIcon} />
                        </a>
                    </div>
                    <div className="social-icon-container">
                        <a
                            href="https://www.linkedin.com/in/luke-harrison-76808a173/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="social-icon" src={LinkedinIcon} />
                        </a>
                    </div>
                    <div className="social-icon-container">
                        <a href="mailto:luke.harrison1313@protonmail.com">
                            <img className="social-icon" src={EmailIcon} />
                        </a>
                    </div>
                    <div className="social-icon-container">
                        <a href="tel:8455317632">
                            <img className="social-icon" src={PhoneIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
