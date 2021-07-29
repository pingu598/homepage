import ReactCardFlip from 'react-card-flip';
import { Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';


const CardIntro = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type: "turn"}) //add real actions if needed
    }

    return (
        <ReactCardFlip isFlipped={useSelector(state => state)} flipDirection="vertical">
         <Card className="cardIntro">
         <Card.Img style={{height: "600px"}} src="blueback.jpg"/>
            <Card.ImgOverlay>
                <Card.Body>
                    <h1 style={{fontSize: "60px", color: "white"}}>
                        Hei <span className="waver">👋</span> ja tervetuloa sivuilleni.
                    </h1>          
                    <h2 style={{marginTop: "40px", color: "white"}}>Nimeni on Samuel.</h2>
                    <Button className="button" variant="info" onClick={handleClick}>Paina tästä vaihtaaksesi sivun kieleksi Englanti</Button>
                </Card.Body>
            </Card.ImgOverlay>           
        </Card>
          
        <Card className="cardIntro">
         <Card.Img style={{height: "600px"}} src="blueback.jpg"/>
            <Card.ImgOverlay>
                <Card.Body>
                    <h1 style={{fontSize: "60px", color: "white"}}>
                        Hello <span>👋</span> and welcome to my page.
                    </h1>          
                    <h2 style={{marginTop: "40px", color: "white"}}>My name is Samuel.</h2>
                    <Button className="button" variant="info" onClick={handleClick}>Press here to turn the page to Finnish</Button>
                </Card.Body>
            </Card.ImgOverlay>           
        </Card>
        </ReactCardFlip>
      )
}

export default CardIntro

