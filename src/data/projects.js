export const projects = [
    {
        id: 1,
        title: "SIMGD",
        role: "Fullstack Developer",
        desc: "Web-based Management Information System for container depot operations, featuring multi-role access and real-time notifications to manage container inspection, repair, and operational reporting.",
        stack: ["Laravel", "Tailwind CSS", "MySQL"],
        longDesc: `SIMGD (Sistem Informasi Manajemen PT Garbantara Depo) is a web-based system designed to support and streamline depot operations by digitizing container inspection, repair, and administrative processes. The system implements multi-role access for Inventory, Cashier, Survey In, Repair, Tally, Operational Manager, and Director, allowing each division to manage data according to their responsibilities. 
                   \n**My Contributions:**
                   - Developed core features for Survey In and Repair divisions, including container inspection, damage reporting, and repair documentation
                   - Implemented photo-based documentation to record container conditions after inspection and repair
                   - Built real-time notification workflow between Survey In and Repair divisions to improve cross-team communication
                   - Designed and implemented role-based access control for operational features
                   - Supported automatic report generation (PDF) based on inspection, repair, and transaction data
                   - Contributed to improving data accuracy and reducing manual documentation processes`,
        image: "/NotifikasiSIMGD.png",
        images: ["/NotifikasiSIMGD.png", "/DashboardSurveyIn.jpg", "/AddSurveyIn.jpg"]
    },
    {
        id: 2,
        title: "SIAKAN",
        role: "Backend Developer",
        desc: "Web-based archival management system developed for Dinas Kearsipan dan Perpustakaan Provinsi Jawa Tengah to digitize and manage cartographic archive data with authentication, image upload, and role-based access.",
        stack: ["Laravel", "Bootstrap", "MySQL"],
        longDesc: `SIAKAN (Sistem Informasi Arsip dan Kearsitekturan) is a web-based information system developed during my internship at the Central Java Provincial Archive and Library Office. The system was designed to address challenges in physical archive storage, data deterioration, and time-consuming manual search processes by digitizing archival data, particularly cartographic archives.
                   \nIn this project, I worked as a Backend Developer, responsible for implementing core data management features using Laravel and MySQL. The system supports online archive management, including creating, updating, and deleting archive records, as well as secure user authentication for administrators and staff.
                   \n**My Contributions:**
                   - Developed backend features using Laravel and MySQL for managing cartographic archive data
                   - Implemented CRUD operations with soft delete and hard delete mechanisms
                   - Built user and admin authentication to secure access to archival data
                   - Implemented image upload functionality for archive documentation
                   - Designed and maintained database schemas to support archival data management
                   - Ensured data could be accessed securely through a web-based system`,
        image: "/KartografiUser.png",
        images: ["/LoginSIAKAN.png", "/Kearsitekturan.png", "/KartografiUser.png"]
    },
    {
        id: 3,
        title: "Recruitment Tracker",
        role: "Backend Developer",
        desc: "Recruitment tracking web application developed during a Software Engineering bootcamp at Formulatrix, focusing on role-based access, job management, and collaborative feature development.",
        stack: ["ASP.NET Core", "C#", "SQLite"],
        longDesc: `This project is a recruitment tracking web application developed during a Software Engineering bootcamp at Formulatrix. The application is a continuation of a previous batch’s project and was customized to fit Formulatrix’s internal recruitment workflow, involving roles such as Admin, HR, User, and End User. The system allows users to apply for available job openings, while administrators can manage job postings by creating, opening, closing, and deleting job listings, as well as assigning roles to users. HR and End User roles are responsible for managing interview schedules for applicants, supporting a structured recruitment process.
                   \n**My Contributions:**
                   During this project, I actively contributed as a Software Engineer by implementing multiple features, improvements, and bug fixes through 13 merge requests.
                   - Redesign Configure User UI Page 
                   - Adjust Styling in Configure Page 
                   - Add page transition preloader across all pages 
                   - Add bulk jobs feature in Admin page
                   - Show message when there is no closed job
                   - Fixing location filter 
                   - Fixing create user in configure page 
                   - Handle null HrInterview and EndUserInterview page on Admin and HR role
                   - Add hard delete job 
                   - Add pagination in configure location 
                   - Add search, filter, and sorting feature in configure user page 
                   - Add password validation in configure user page 
                   - Add password suggestion in configure user page`,
        image: "/DashboardAdmin.png",
        images: ["/DashboardAdmin.png", "/BulkDelete.png", "/InterviewPage.png"]
    }
];
