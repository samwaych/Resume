import '../App.css';
import Image from 'react-bootstrap/Image';
import genList from '../library/common_functions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const skills = [
    "Learn, analyze, and react quickly in dynamic settings",
    "Attention to detail and creative thinking",
    "Excel at both teamwork and independent tasks",
    "Excellent written and verbal skills",
    "Ability to initiate and complete multiple complex projects simultaneously",
    "Experienced with making difficult and timely decisions",
    "Problem solving, critical thinking",
    "Building desktop PCs, troubleshoot and repair"
]

const other = [
    "Lead-by-example",
    "Conscientious",
    "Personable",
    "Hard-working",
    "Work without complaining",
    "Self-starter",
    "Curious",
    "Visionary",
    "Not afraid to try new approaches",
    "Understand how not to reinvent the wheel",
    "Life-long learner"
]

function Ksaos() {

    // using require.context and map functions, images can be mass imported from a directory
    const images = require.context('../imgs/icons', true);
    const imageList = images.keys().map(image => images(image));


    return (
        <div>
            <h1>KSAOs</h1>
            <section style={{marginBottom:"20px"}}>
                <h4>Skills & Abilities</h4>
                <Row>
                    <Col>
                        {genList(skills, 'a')}
                    </Col>
                </Row>
            </section>
            <section style={{ marginBottom: "20px" }}>
                <h4>Characteristics</h4>
                <Row>
                    <Col>
                        {genList(other, 'a')}
                    </Col>
                </Row>
            </section>
            <section style={{ marginBottom: "20px" }}>
                <h4>Systems, Tools & Frameworks</h4>
                <Row>
                    <Col>
                        {imageList.map((image, index) => (
                            <Image className="ksao-logo" key={index} src={image} alt={`image-${index}`} fluid />))}
                    </Col>
                </Row>
            </section>
        </div>
    )
};

export default Ksaos;
