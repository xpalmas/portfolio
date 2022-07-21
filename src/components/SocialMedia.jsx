import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'
import { FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://twitter.com/FarhanAlmas4'> <BsTwitter/> </a>
    </div>
    <div>
      <a href='https://www.facebook.com/black.sight/'> <FaFacebookF/> </a> 
    </div>
    <div>
    <a href="https://www.linkedin.com/in/farhan-almas/"> <BsLinkedin/> </a>
    </div>
    <div>
    <a href="https://github.com/xpalmas"> <BsGithub/> </a>
    </div>
  </div>
);

export default SocialMedia;