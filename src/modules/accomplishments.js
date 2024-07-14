import '../App.css';
import genList from '../library/common_functions';

const accompl = [
    "Have participated in the planning and management of numerous projects involving software system upgrades, patching, new process/workflow " +
    "implementation, new system implementation, etc.; streamlined several processes by providing custom project templates " + 
    "to automate task detail generation and timelines using formulas and building automated scripts using TypeScript.",
    "Promoted to top-level manager following a highly negative audit result due to then-current leadership/management, and proceded" +
    " to successfully reorganize the operations and structure of a large office, satisfying audit requirements and leading to good standings on subsequent audits.",
    "Served as the change manager for a large department to facilitate a major switch to a new ERP, including but not limited " +
    "to becoming a SME, knowledge-sharing, and training others to be proficient in a new system.",
    "Volunteered to take on the role of IT support for a large department following unexpected departure of then-current incumbent. " +
    "Successfully performed IT duties including network management, PC troubleshooting/repair, maintaining software library, etc., all while performing above expected levels " +
    "in formal capacity as a business administrator/manager.",
    "Volunteered and trained to fill role as webmaster/content manager for a large department when position was vacated due to retirement. Fulfilled these duties along with official " +
    "duties as office administrator and IT manager, excelling at all roles."
]

function Accomplishments() {

    return (
        <div>
            <h1>Accomplishments</h1>
            {genList(accompl, 's')}
        </div>
    )
}

export default Accomplishments;
