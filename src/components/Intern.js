import ReactCardFlip from 'react-card-flip';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap'

const Intern = () => {
 
    return (
        <ReactCardFlip isFlipped={useSelector(state => state)} flipDirection="vertical">
         <Card className="cardIntro">
         <Card.Img style={{height: "180px"}} src="yellowback.png" alt=""/>
            <Card.ImgOverlay>
                <Card.Body>
                    <h1 style={{color: "white"}}>Etsin työharjoittelupaikka. Paina <a href="url">tästä</a> ottaaksesi minuun yhteyttä</h1>                              
                </Card.Body>
            </Card.ImgOverlay>           
        </Card>
          
        <Card className="cardIntro">
         <Card.Img style={{height: "150px"}} src="yellowback.png" alt=""/>
            <Card.ImgOverlay>
                    <Card.Body>
                        <h1 style={{color: "white"}}>I'm looking for an internship. Click <a href="mailto:samuel.t.jumppanen@gmail.com">here</a> to contact me</h1>                                     
                    </Card.Body>
            </Card.ImgOverlay>           
        </Card>
        </ReactCardFlip>
    )
}

export default Intern