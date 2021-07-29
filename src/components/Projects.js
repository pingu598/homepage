import {Row, Col} from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'
import { useSelector } from 'react-redux'

const Projects = () => {
    return (
    <ReactCardFlip isFlipped={useSelector(state => state)} flipDirection="horizontal">
        <>
        <h1 className="font" style={{fontSize: "30px", fontWeight: "900", marginTop: "60px"}}>Projektit</h1>
        <Row className="font" style={{marginTop: "40px", marginBottom: "40px"}}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>simple-chat</p>
                <p>Simple-chat tein käyttämällä Reactia, Reduxia, Redux-Sagaa ja Web Socketteja. Simple-chat generoi satunnaisen nimen käyttäjälle ja antaa käyttäjän kirjoittaa julkisessa chättihuoneessa. Projektin on tarkoitus olla pohja vastaavanlaisille tuleville projekteille. Projektissa open paljon uutta Redux-Sagasta ja Web Socketeista.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>android-apps</p>
                <p>
                Android-appsin tein Android-sovelluskurssilla. Projektit tehtiin käyttämällä Android Studiota IDE:nä ja Kotlinia ohjelmointikielenä. Tein 19 sovellusta ja yksi niistä tehtiin vapaasti. Sovellukset vaihtelivat tavallisesta laskimesta sääsovelluksiin. Jotkut sovellukset jopa käyttivät tietokantoja. Omaa sovellustani kutsuttiin nimellä REITTIsuffleri. Sovelluksen idea on auttaa lenkkeilijöitä löytämään lisää reittejä, jotka sopivat heidän lenkkien pituuksiinsa. Reitti generoidaan satunnaisesti käyttäjän sovellukselle antamalla numerosyötöllä (kilometreinä). Opin kurssilla yleisesti paljon enemmän Android-kehityksestä.
                </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>online-store-wip</p>
                <p>Online-store-wip on keskeneräinen nettikauppa, jossa on backend ja frontend. Sivuston tein käyttämällä Reactia, Node.js:ää, REST:iä, MongoDB:tä sekä React Bootstrappiä. Projekti on osa Full Stack -verkkokurssia Helsingin yliopistossa (Full Stack Open). Projektin oli tarkoitus olla malli nopeampaan verkkokauppakehitykseen. Tämä on ollut haastavin projektini, sillä sen mittakaava on huomattavasti muita suurempi.</p>
            </Col>
        </Row>  
        <Row className="font" style={{marginTop: "40px", marginBottom: "40px"}}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>nand2tetris</p>
                <p>Nand2Tetrisin on oltava yksi varhaisimmista projekteistani. Projekti on yksinkertaisen tietokoneen luominen alusta loppuun. Projektini sisältää 6/12 lukua kurssikirjasta. Projekti alkaa logiikan perusporttien tekemisestä ja päättyy toimivaan suorittimeen. Tämä kurssi oli yksi vaikeimmista kursseista missä olen ollut. Kurssin opiskelijat vaihtelevat yliopistolaisista Googlen insinööreihin. Kirja on hyvä, mikäli haluat oppia perinpohjaisesti tietokoneiden toiminnan.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>full-stack-open-2020</p>
                <p>Full Stack Open 2020 oli kurssi, joka herätti kiinnostukseni verkkokehitykseen. Kurssi pidettiin Helsingin yliopistossa ja sen suorittaminen kesti noin 6 kuukautta. Kurssi sisälsi kaiken mitä tulee tietää full-stack verkkokehityksestä. Painopiste oli lähinnä yhden sivun sovelluksissa. Kurssi keskittyi lähinnä Reactiin ja sen ohjelmointirajapintoihin. Aiheet olivat hyvin edistyneitä ja vaativat ohjelmointikielien tuntemusta.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "900", fontStyle: "italic"}}>Lisää on tulossa</p>
                <p>Ei spoilereita</p>
            </Col>
        </Row>  
        </>

        <>
        <h1 className="font" style={{fontSize: "30px", fontWeight: "900", marginTop: "60px"}}>Projects</h1>
        <Row className="font" style={{marginTop: "40px", marginBottom: "40px"}}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>simple-chat</p>
                <p>Simple-chat was made by using React, Redux, Redux-Saga and Web Sockets. Simple-chat generates random name for user and lets the user to type in public chatroom. The project was meant to be a template for future projects. In the project I learned a lot more about Redux-Saga, Web Sockets and the basic principles of a chatroom. </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>android-apps</p>
                <p>Android-apps were done on an Android application course. The projects were made using Android Studio as IDE and Kotlin as programming language. I made 19 apps and one of them was freely made. The apps vary from basic calculator to weather apps. Some apps even used databases. 
                My own app was called rEITTIsuffleri. The idea of the project is to help joggers to find more routes that suit their deeds. The route is randomly generated by the number input (kilometers) a user gives to the application. I learned generally a lot more about Android development on the course.
                </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>online-store-wip</p>
                <p>Online-store-wip is a work in progress store with frontend and backend. The website was made using React, Node.js, REST, MongoDB and React Bootstrap. Part of Full Stack web development project in University of Helsinki (Full Stack Open). The project was meant to be a template for faster online store development. This has been my most challenging project due to the scale. I learned alot more about REST and dealing with backend.</p>
            </Col>
        </Row>  
        <Row className="font" style={{marginTop: "40px", marginBottom: "40px"}}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>nand2tetris</p>
                <p>Nand2Tetris must be one of my earliest projects. The project is a simple computer built from scratch. It includes 6/12 chapters of the book. The project starts from making basic logic gates and ends to a functioning CPU. This course was one the hardest I’ve been in. The students who take the course range from high school students to Ph.D. students to Google engineers. This book is great if you want to learn more about how computers work.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "300"}}>full-stack-open-2020</p>
                <p>Full Stack Open 2020 was the course that sparked my interest in web development. The course took place in the University of Helsinki and took about 6 months to complete. The course includes everything you need to know about full-stack web development. The focus was mainly on single-page applications. The course focused mostly on React and its programming interfaces. The topics were very advanced and required knowledge of programming languages. </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "900", fontStyle: "italic"}}>And much more to come</p>
                <p>No spoilers</p>
            </Col>
        </Row> 
        </>
    </ReactCardFlip>
    )
}

export default Projects 