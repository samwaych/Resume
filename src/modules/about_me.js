import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../App.css';
import profilePic from '../imgs/profile2.jpg';



function AboutMe() {

    function ProfileImg({ pic1 }) {
        return (
            <div>
                <Image className="image-main" src={pic1} alt="profile picture" fluid />
            </div>
        )
    };

    const about_me = [
        "(BIO)",

        "I'm a naturally curious and analytical person. As a result, when I was introduced to information technology after my early college years, I became deeply inteterested " +
        "in understanding it better. During much of my early education and career, I pursued skills in business management and administration all while developing a passion and " +
        "desire to explore how technology could improve the workplace and help realize organizational missions. After taking on several opportunities to become involved in IT " +
        "support and web development while continuing to perform business operations, I realized I wanted to pursue both fields. I became committed to bridging these domains to drive " +  
        "meaningful improvements through better communication, automation, and user experience.",

        "With this realization, I pursued a Master's degree in Business & Technology at UGA's Terry College. It was a perfect fit for my career goals and gave me the supplemental knowledge and training I " +
        "needed to launch a new trajectory. Since then, I have not stopped learning. As an application analyst, I continually seek opportunities to enhance my programming skills and deepen my " + 
        "understanding of business systems. I believe effective communication, smart automation, and user-centric design are essential for optimizing processes and delivering value.",

        "Outside of work, I spend most of my time with my wife and three kids ranging from toddler to preteen. They are my biggest supporters and fans, and I greatly enjoy making new memories with them."
    ];

    return (
        <div>
            <Row style={{ alignItems:'center' }}>
                <Col width="100%">
                <div className='profile_section' id='prof_pic'>
                    <div className='figure'>
                    <ProfileImg pic1={ profilePic } />
                    </div>
                </div>
                </Col>
                <Col>
                <div className='profile_section' id='about_me'>
                    <div className="title-1 shadows-into-light-regular" id='about_title'>
                    About Me <span style={{ fontWeight: "lighter" }}>{ about_me[0] }</span>
                    </div>
                <p>
                    {about_me[1]}
                </p>
                </div>
                </Col>
            </Row>
            <Row>
                <p>
                    {about_me[2]}
                </p>
            </Row>
            <Row>
                <p>
                    {about_me[3]}
                </p>
            </Row>
        </div>  
    )
};

export default AboutMe;