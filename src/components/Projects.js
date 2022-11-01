import {Row, Col} from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'
import { useSelector } from 'react-redux'

const Projects = () => {
    return (
    <ReactCardFlip isFlipped={useSelector(state => state)} flipDirection="horizontal">
        <>
        <h1 className="font" style={{fontSize: "30px", fontWeight: "900", marginTop: "60px"}}>Projektit</h1>
        <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>AddIn for CGI</p>
                <p>Työstin add iniä Outlookkiin Angularilla. Add in tehtiin CGI:lle neljän hengen ryhmissä.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>Cloud servers</p>
                <p>Tein useampia pilvipalvelin servereitä yksityiseen käyttöön videopeleihin. Käytin pääsääntöisesti Oracle Cloudia ja hiukan Google Cloudia.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>Useita kouluprojekteja</p>
                <p>Olen työstänyt kouluvuosieni aikana kymmeniä kouluprojekteja nettisivuihin liityen. Näistä iso osa on jäänyt bittiavaruuteen tai poistettu käytöstä. Projekteissa on käytetty teknologioita laidasta laitaan kuten Docker, Android Studio, VR, Expo, Git ja Proto.io.</p>
            </Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/simple-chat" target="_blank">simple-chat</a>
                <p>Simple-chat tein käyttämällä Reactia, Reduxia, Redux-Sagaa ja Web Socketteja. Simple-chat generoi satunnaisen nimen käyttäjälle ja antaa käyttäjän kirjoittaa julkisessa chättihuoneessa. Projektin on tarkoitus olla pohja vastaavanlaisille tuleville projekteille. Projektissa open paljon uutta Redux-Sagasta ja Web Socketeista.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/android-apps" target="_blank">android-apps</a>
                <p>
                Android-appsin tein Android-sovelluskurssilla. Projektit tehtiin käyttämällä Android Studiota IDE:nä ja Kotlinia ohjelmointikielenä. Tein 19 sovellusta ja yksi niistä tehtiin vapaasti. Sovellukset vaihtelivat tavallisesta laskimesta sääsovelluksiin. Jotkut sovellukset jopa käyttivät tietokantoja. Omaa sovellustani kutsuttiin nimellä REITTIsuffleri. Sovelluksen idea on auttaa lenkkeilijöitä löytämään lisää reittejä, jotka sopivat heidän lenkkien pituuksiinsa. Reitti generoidaan satunnaisesti käyttäjän sovellukselle antamalla numerosyötöllä (kilometreinä). Opin kurssilla yleisesti paljon enemmän Android-kehityksestä.
                </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/online-store-wip" target="_blank">online-store-wip</a>
                <p>Online-store-wip on keskeneräinen nettikauppa, jossa on backend ja frontend. Sivuston tein käyttämällä Reactia, Node.js:ää, REST:iä, MongoDB:tä sekä React Bootstrappiä. Projekti on osa Full Stack -verkkokurssia Helsingin yliopistossa (Full Stack Open). Projektin oli tarkoitus olla malli nopeampaan verkkokauppakehitykseen. Tämä on ollut haastavin projektini, sillä sen mittakaava on huomattavasti muita suurempi.</p>
            </Col>
        </Row>  
        <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/nand2tetris" target="_blank">nand2tetris</a>
                <p>Nand2Tetrisin on oltava yksi varhaisimmista projekteistani. Projekti on yksinkertaisen tietokoneen luominen alusta loppuun. Projektini sisältää 6/12 lukua kurssikirjasta. Projekti alkaa logiikan perusporttien tekemisestä ja päättyy toimivaan suorittimeen. Tämä kurssi oli yksi vaikeimmista kursseista missä olen ollut. Kurssin opiskelijat vaihtelevat yliopistolaisista Googlen insinööreihin. Kirja on hyvä, mikäli haluat oppia perinpohjaisesti tietokoneiden toiminnan.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/Full-Stack-Open-2020" target="_blank">full-stack-open-2020</a>
                <p>Full Stack Open 2020 oli kurssi, joka herätti kiinnostukseni verkkokehitykseen. Kurssi pidettiin Helsingin yliopistossa ja sen suorittaminen kesti noin 6 kuukautta. Kurssi sisälsi kaiken mitä tulee tietää full-stack verkkokehityksestä. Painopiste oli lähinnä yhden sivun sovelluksissa. Kurssi keskittyi lähinnä Reactiin ja sen ohjelmointirajapintoihin. Aiheet olivat hyvin edistyneitä ja vaativat ohjelmointikielien tuntemusta.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "900", fontStyle: "italic"}}>Lisää on tulossa</p>
                <p>Ei spoilereita</p>
            </Col>
        </Row> 
        <h1 className="font" style={{fontSize: "30px", fontWeight: "900", marginTop: "60px"}}>Työt</h1> 
        <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>Paljon Oy - Laravel Full Stack harjoittelija - 01.2022-04.2022</p>
                <p>Työharjottelussani opin tekemään yritykselle nettisivuja alusta loppuun Laravellilla. Työssäni käytin pääsääntöisesti PHP:tä ja SQL:ää. Työstin myös yrityksen nettisivuja, jossa käytin WordPressiä. Yrityksen tuote on markkinointiin suunnattu sovellus.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>Gruppo - harjoittelija - 04.2020-07.2020</p>
                <p>Työharjoittelussani keräsin yhteen dataa ja asiakkaitten tietoja. Työstin myös dokumentaatiota ja uutiskirjepalvelua. Työssäni käytin paljon Exceliä.</p>
            </Col>            
        </Row> 
        </>

        <>
        <h1 className="font" style={{fontSize: "30px", fontWeight: "900", marginTop: "60px"}}>Projects</h1>
        <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>AddIn for CGI</p>
                <p>I worked with Angular to make a add in for Outlook. The add in was done for CGI in a group of 4 people.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>Cloud servers</p>
                <p>Done various cloud servers for private video game hosting. Mainly used Oracle Cloud and some Google Cloud services. </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>Various school projects</p>
                <p>During my school years I have worked on dozens of school projects related to website development. A large part of these remain in bit space or have been deleted. The projects I have been in in have used a wide range of technologies such as Docker, Android Studio, VR, Expo, Git and Proto.io.</p>
            </Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/simple-chat" target="_blank">simple-chat</a>
                <p>Simple-chat was made by using React, Redux, Redux-Saga and Web Sockets. Simple-chat generates random name for user and lets the user to type in public chatroom. The project was meant to be a template for future projects. In the project I learned a lot more about Redux-Saga, Web Sockets and the basic principles of a chatroom. </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/android-apps" target="_blank">android-apps</a>
                <p>Android-apps were done on an Android application course. The projects were made using Android Studio as IDE and Kotlin as programming language. I made 19 apps and one of them was freely made. The apps vary from basic calculator to weather apps. Some apps even used databases. 
                My own app was called rEITTIsuffleri. The idea of the project is to help joggers to find more routes that suit their deeds. The route is randomly generated by the number input (kilometers) a user gives to the application. I learned generally a lot more about Android development on the course.
                </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/online-store-wip" target="_blank">online-store-wip</a>
                <p>Online-store-wip is a work in progress store with frontend and backend. The website was made using React, Node.js, REST, MongoDB and React Bootstrap. Part of Full Stack web development project in University of Helsinki (Full Stack Open). The project was meant to be a template for faster online store development. This has been my most challenging project due to the scale. I learned alot more about REST and dealing with backend.</p>
            </Col>
        </Row>  
        <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/nand2tetris" target="_blank">nand2tetris</a>
                <p>Nand2Tetris must be one of my earliest projects. The project is a simple computer built from scratch. It includes 6/12 chapters of the book. The project starts from making basic logic gates and ends to a functioning CPU. This course was one the hardest I’ve been in. The students who take the course range from high school students to Ph.D. students to Google engineers. This book is great if you want to learn more about how computers work.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <a style={{fontWeight: "700"}} href="https://github.com/pingu598/Full-Stack-Open-2020" target="_blank">full-stack-open-2020</a>
                <p>Full Stack Open 2020 was the course that sparked my interest in web development. The course took place in the University of Helsinki and took about 6 months to complete. The course includes everything you need to know about full-stack web development. The focus was mainly on single-page applications. The course focused mostly on React and its programming interfaces. The topics were very advanced and required knowledge of programming languages. </p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "900", fontStyle: "italic"}}>And much more to come</p>
                <p>No spoilers</p>
            </Col>
        </Row>
        <h1 className="font" style={{fontSize: "30px", fontWeight: "900", marginTop: "60px"}}>Work</h1> 
        <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>Paljon Oy - Laravel Full Stack intern - 01.2022-04.2022</p>
                <p>In my internship I learned to do website from start to finish for a company. I mainly used PHP and SQL in my work. I also worked on the companys website with WordPress. The product of the company was designed for marketing.</p>
            </Col>
            <Col>
                <div className="projectDivider" style={{marginBottom: "20px"}}></div>
                <p style={{fontWeight: "700"}}>Gruppo - intern - 04.2020-07.2020</p>
                <p>In my internship I collected data from the companys clients. I also worked on the documentation and newsletter service. I used lot of Excel.</p>
            </Col>            
        </Row>  
        </>
    </ReactCardFlip>
    )
}

export default Projects 