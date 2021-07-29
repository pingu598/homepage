import { Card } from "react-bootstrap"
import ReactCardFlip from 'react-card-flip';
import { useSelector } from "react-redux";


const ContactHere = () => {
    return (
    <ReactCardFlip isFlipped={useSelector(state => state)} flipDirection="horizontal">
        <Card className="contactCard" >
            <Card.Img style={{height: "600px"}} src="greenback.jpg" alt=""/>
                <Card.ImgOverlay>
                    <Card.Body className="contactText">
                    <h1 style={{color: "white", fontWeight: "bold", fontSize: "60px"}}>Kiva että pääsit tänne asti.</h1>
                    <h1 style={{color: "white"}}>             
                    Olethan minuun yhteydessä mikäli sinulla on mitään kysyttäävää. <p style={{fontSize: "20px"}}>(Tai oikeastaan mitä tahansa asiaa)</p>
                    </h1>
                    <h1 style={{color: "white"}}>             
                    Löydät minut näistä paikoista
                    </h1>
                    <p style={{color: "black", marginTop: "60px", marginBottom: "20px", fontSize: "40px"}}>↓</p>
                    </Card.Body>
                </Card.ImgOverlay>           
            </Card>
            <Card className="contactCard" >
            <Card.Img style={{height: "600px"}} src="greenback.jpg" alt=""/>
            <Card.ImgOverlay>
                <Card.Body className="contactText">
                    <h1 style={{color: "white", fontWeight: "bold", fontSize: "60px"}}>Glad you made it down here.</h1>
                    <h1 style={{color: "white"}}>             
                    If you have any questions then please feel free to contact me. <p style={{fontSize: "20px"}}>(Or anything really)</p>
                    </h1>
                    <h1 style={{color: "white"}}>             
                    Check me out on these places
                    </h1>
                    <h1 style={{color: "black", marginTop: "60px", marginBottom: "20px", fontSize: "40px"}}>↓</h1>
                </Card.Body>
            </Card.ImgOverlay>           
        </Card>
       </ReactCardFlip>
    )
}

export default ContactHere