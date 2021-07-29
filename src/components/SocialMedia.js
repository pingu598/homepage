import {Github, Linkedin } from 'react-bootstrap-icons'

const SocialMedia = () => {
    return (
      <li>
        <ul style={{textAlign: "center"}}>
          <a href="https://www.linkedin.com/in/samuel-jumppanen-7961a020b/">
                <Linkedin className="iconStyle"/>
          </a>
        </ul>
        <ul style={{textAlign: "center"}}>
            <a href="https://github.com/pingu598">
              <Github className="iconStyle"/>
            </a>
        </ul>
        <ul style={{textAlign: "center", marginBottom: "40px", fontSize: "25px"}}>
          <a href="mailto:samuel.t.jumppanen@gmail.com">
            samuel.t.jumppanen@gmail.com
          </a>
        </ul>
      </li>
    )
}

export default SocialMedia