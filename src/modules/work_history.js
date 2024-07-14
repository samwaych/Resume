import '../App.css';
import genList from '../library/common_functions';

const appAnalyst = [
    "Manage recurring and special projects among multiple functional and technical teams, defining and coordinating tasks to meet stringent criteria and often challenging deadlines.",
    "Build and maintain an automated testing library for PeopleSoft ERP utilizing typescript, Playwright testing framework, git, and Jenkins CI/CD pipeline to provide robust, comprehensive, and consistent testing for software upgrades, new environments, changes to business processes, etc.",
    "Coordinate and lead resources across a large institution in support of application system development and operation.",
    "Cultivate effective working relationships between IT and client community to maintain ongoing awareness of information needs and uses. Recommend technologies and propose solutions to meet customer requirements.",
    "Implement new and streamline existing workflows to improve efficiency and effectiveness of business processes leveraging available technologies.",
    "Interview and consult with clients to determine their obstacles, timelines, resources, and support required for testing.",
    "Define, develop, and implement testing and release management plans and procedures meeting enterprise-wide needs.",
    "Document testing and release management procedures and create testing training materials; work with functional and technical team members to ensure testing procedures are well-understood and easy to follow.",
    "Monitor, support, and review regularly scheduled maintenance tasks on assigned systems and programs to ensure minimal interruption to functionality.",
    "Review/approve change requests entered into change management system, verifying that all related information is documented, and documented change management processes are followed."
];

const busProf = [
    "Continued to manage IT support for 100+ clients, tier 1 network support, and Webmaster/content manager",
    "Managed the main office of a large department located across three separate campuses.",
    "Oversaw and managed budgets and accounting operations for instruction, state research, and grant funds including fund allocation (budget transfers/budget journals), balancing personal and non-personal budgets, managing expenses (GL Journals/AP Vouchers), providing timely account/project status reports using spreadsheets and pivot tables (Budget/Project Cubes), and performing year-end operations meeting tight deadlines.",
    "Supervised full-time office staff and student employees and evaluated performance.",
    "Coordinated with Department Head on matters concerning administrative operations, personnel, and financial decisions.",
    "Initiated and approved purchase orders, conducted and reviewed P-card transactions, submitted/approved travel authorities, expense reports and payment requests.",
    "Processed payroll for 50+ benefited and non-benefited positions as well as managed the department Federal Work Study program.",
    "Prepared and submitted credit card deposits and check/cash deposits as well as setting up and managing new eStores in Touchnet Marketplace.",
    "Created and managed new positions (Faculty, Staff, GRST) via company jobs system, hiring new personnel as well as submitting, modifying, and evaluating actions for current positions when position details changed, or position was reclassified.",
    "Prepared business office for internal audits by ensuring BOR and University policies are correctly implemented and followed.",
    "Trained office staff to become proficient in business systems and served as a knowledge base for systems and a leader in departmental transition to new technology."
]

const adminMan = [
    "Oversaw department-wide IT support for large department which included but was not limited to troubleshooting computer hardware/software issues (PC and Mac), computer repair/replacement, first tier network support and management, and providing expertise on programs in the Microsoft Office Suite, Adobe programs, and various other software.",
    "Webmaster for department which entailed development and content management for the main departmental website and for new departmental programs and initiatives.",
    "Implemented and gauged the effectiveness of office policies and procedures to increase the overall effectiveness and efficiency of the department and main office.",
    "Supported accounting procedures by completing budget amendments, tracking end-of-year spending, and approving purchases.",
    "Provided direct support to the Department Head such as overseeing renovation projects for departmental space, providing timely and accurate data and reports, fulfilling budgetary planning requests from the college, as well as many other supporting roles.",
    "Managed departmental curriculum for the Entomology and Applied Biotechnology programs such as scheduling, room assignments, student access and permissions, course change submissions, and the compilation of evaluation data for course instructors.",
    "Served as primary knowledge base for curricular, administrative, and managerial operations."
]

const adminAssoc = [
    "Managed course loading and modification as well as access for faculty and students.",
    "Served as primary contact for majority of departmental inquiries and requests.",
    "Graphics designer for departmental promotional material.",
    "Performed varied clerical functions from filing documents and writing letters and email announcements to answering phone calls and data entry."
]

function WorkHistory() {
    function workSection(title, locDate, list) {
        return (
            <section>
                <div className="p-bold">{title}</div>
                <div><b><i>{locDate}</i></b></div>
                <div>
                    {genList(list, 'a')}
                </div>
            </section>
        )
    }

    return (
        <div>
            <h1>WorkHistory</h1>
            {workSection("Application Analyst - The University of Georgia", "Athens, Georgia, May 2022 - Present", appAnalyst)}
            {workSection("Business Operations Professional (Business Manager II) - The University of Georgia", "Athens, Georgia, December 2012 - August 2020", busProf)}
            {workSection("Administrative Manager - The University of Georgia", "Athens, Georgia, January 2011 - December 2012", adminMan)}
            {workSection("Administrative Associate - The University of Georgia", "Athens, Georgia, August 2007 - December 2010", adminAssoc)}
        </div>
    )
}

export default WorkHistory;