import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import ReactCardFlip from 'react-card-flip';

const Text1 = () => {
    return (  
        <div style={{marginTop: "40px"}} className="font">  
            <Row className="justify-content-md-center">
                <Col>
                    <ReactCardFlip isFlipped={useSelector(state => state)} flipDirection="horizontal">  
                        <p style={{fontSize: "20px"}}>          
                        On aina vaikea puhua itsestäsi, eikö? Olen Samuel Jumppanen. Rakastan <span style={{fontStyle: "italic"}}>musiikkia, koiria, urheilua</span> ja <span style={{fontStyle: "italic"}}>kahvia</span>. Tällä hetkellä opiskelen toista vuotta tietotekniikkaa Turun ammattikorkeakoulussa. Erikoistun sovelluskehitykseen. Olen jo vuosia ollut kiinnostunut uusista teknologioista kuten VR ja AR. Uskon, että jokaiselle uudelle keksinnölle on oma paikkansa. Pyrin löytämään tuon paikan keksiessäni uusia ideoita. Nettisivujen suunnittelu ja luominen ovat intohimoni, mutta en silti määrittelisi itseäni vain nettisivujen kehittäjäksi. Olen valmis oppimaan uutta, mikäli sen paikka on tarpeellista. Toinen intohimoni on musiikki. Olen tehnyt/soittanut musiikkia jo vuosia. Juuri nyt soitan koskettimia ja teen videopelimusiikkia.    
                        </p>  
                        <p style={{fontSize: "20px"}}>          
                        It’s always hard to talk about yourself, huh? I’m Samuel Jumppanen. I love <span style={{fontStyle: "italic"}}>music, dogs, exercising</span> and <span style={{fontStyle: "italic"}}>coffee</span>. Right now, I’m studying computer science for second year in Turku University of Applied Sciences. I specialize in application development. For years have I been interested in new technologies like VR and AR. I think that every 
                        invention has their own place. I try to find that place in every new idea I come with. Designing and making websites is passion of mine but I don’t think I would define me as only a web developer. I’m willing to explore new grounds if the time is right. Another passion of mine is music. I have been playing/doing music for years. Right now, I’m playing keyboard and making video game music. 
                        </p>  
                    </ReactCardFlip>
                </Col>
                <Col>
                <img src="Photo1.jpg" style={{float: "right", borderRadius: "1%"}} alt=""></img>
                </Col>
            </Row>
        </div> 
    )
}

export default Text1