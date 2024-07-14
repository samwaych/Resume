import '../App.css';
import Image from 'react-bootstrap/Image';
import UGA_logo from '../imgs/UGA_logo.png'
import MGC_logo from '../imgs/MGC_logo.png'

// destructuring arrays allows items to be referenced by assigned key/variable
const [first_logo, second_logo] = [UGA_logo, MGC_logo]

const liLearning = [
    "Advanced Python",
    "Intermediate Python for Non-Programmers",
    "Using Python for Automation",
    "Learning Functional Programming with JavaScript ES6+",
    "Intelligent Automation for Project Managers",
    "TypeScript Essential Training",
    "Scrum: Advanced",
    "Project Management Foundations",
    "Deep Learning: Face Recognition",
    "Machine Learning with Python: Foundations",
    "Advanced NLP with Python for Machine Learning",
    "UX Design: 3 Creating Personas"    
]

function Elogo (props) {
    return (
        <>
            <Image className="logo" src={props.pic} fluid />
        </>
    )
}

function LiLearningDetails(courses) {
    let learningSection = []
    for (let item of courses) {
        learningSection.push(
            <p>
                <i>{item}</i> - LinkedIn Learning
            </p>
    )
    }
    return learningSection
}

function Education() {
    return (
        <div>
            <h1>Education</h1>
            <p>
                <Elogo pic={first_logo}/>
                <div class="p-bold">Master of Business & Technology - May 2022</div>
                <div> The University of Georgia</div>
            </p>
            <p>
                <Elogo pic={first_logo} />
                <div class="p-bold">Bachelor of Business Administration (Management) - May 2007</div>
                <div>The University of Georgia</div>
            </p>
            <p>
                <Elogo pic={second_logo} />
                <div class="p-bold">Associate of Science in Business Administration - May 2005</div>
                <div>Middle Georgia College</div>
            </p>
            <p>---------------------</p>
            <section>
                <h4>Additional Learning</h4>
                {LiLearningDetails(liLearning)}
            </section>
        </div>
    )
}

export default Education;
