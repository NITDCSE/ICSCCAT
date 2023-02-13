import hardik from "@/public/profile_images/student_committee/hardik.jpeg"
import devansh from "@/public/profile_images/student_committee/devansh.jpg"
import profile from "@/public/profile.png"

export const organisingCommittee = [
    {
        type: 'Patrons',
        members: [
            {
                name: 'Prof. (Dr.) Ajay K. Sharma',
                designation: 'Director',
                affiliation: 'National Institute of Technology, Delhi',
            },
            {
                name: 'Prof. Yogesh Singh',
                designation: 'Vice Chancellor',
                affiliation: 'University of Delhi'
            },
        ]
    },
    {
        type: 'Chairman',
        members: [
            {
                name: 'Prof. Praveen Garg',
                designation: 'Principal',
                affiliation: 'Swami Shraddhanand College, DU'
            }
        ]
    },
    {
        type: 'Convener',
        members: [
            {
                name: 'Dr. Amit Pratap Singh',
                designation: 'Head, Department of Applied Sciences',
                affiliation: 'Associate Professor, NIT Delhi'
            }
        ]
    },
    {
        type: 'Co-conveners',
        members: [
            {
                name: 'Dr. Anuj K. Sharma',
                designation: 'Associate Professor',
                affiliation: 'National Institute of Technology, Delhi'
            },
            {
                name: 'Dr. Bhupinder Mehta',
                designation: 'Associate Professor',
                affiliation: 'Department of Chemistry, SSNC, DU'
            },
        ]
    },
    {
        type: 'Organising Secretaries',
        members: [
            {
                name: 'Dr. Pratibha',
                designation: 'Assistant Professor',
                affiliation: 'Department of Applied Sciences, NIT Delhi'
            },
            {
                name: 'Dr. Chaggan Lal',
                designation: 'Assistant Professor',
                affiliation: 'Department of Chemistry, SSNC, DU'
            },
            {
                name: 'Dr. Nishant Verma',
                designation: 'Assistant Professor',
                affiliation: 'Department of Chemistry, SSNC, DU'
            },
            {
                name: 'Dr. Gunjan Arora',
                designation: 'Assistant Professor',
                affiliation: 'Department of Chemistry, SSNC, DU'
            },
        ]
    },
    {
        type: 'Treasurer',
        members: [
            {
                name: 'Dr. Manisha Singh',
                designation: 'Assistant Registrar',
                affiliation: 'National Institute of Technology, Delhi'
            }
        ]
    },
]

export const localOrganisingCommittee = {
    nitDelhi: [
            {name: "Dr. V. S. Pandey"},
            {name: "Dr. Gyanendra Sheoran"},
            {name: "Dr. Amit Mahajan"},
            {name: "Dr. Prashant Kumar"},
            {name: "Dr. Saloni Priya"},
            {name: "Dr. Ritu Goel"},
            {name: "Mr. Krishan Pal"},
            {name: "Mr. Jitender Singh Bisht"},
            {name: "Mr. Aadesh Kumar"},
            {name: "Mrs. Aparna Tripathi"},
            {name: "Mr. Shubham Bhardwaj"},
            {name: "Mrs. Navisha Sharma"},
            {name: "Mr. Lov Kumar Dubey"},
            {name: "Mr. Praveen Kumar"},
        ],
    sscdu: [
        {name: "Dr. Chandra Shekhar Jeengar"},
        {name: "Dr. Gajendra Gaur"},
        {name: "Dr. Pradeep Pratap Singh"},
        {name: "Dr. Saraswati Kanodia"},
        {name: "Dr. Suman Yadav"},
        {name: "Dr. Seema Gupta"},
        {name: "Dr. Govind Ji Rai"},
        {name: "Dr. Narbir Singh"},
        {name: "Dr. Aanchal Sethi"},
        {name: "Dr. Bholey Singh"},
        {name: "Dr. Mukesh Kumar Verma"},
        {name: "Dr. Partibha"},
        {name: "Dr. Ramesh Chand"},
        {name: "Mr. Amar Singh Meena"},
    ]
}

export const advisoryCommittee = [
    {name: "Prof. C. N. R. Rao", affiliation: "JNCASR Bangalore"},
    {name: "Prof. R. N. Mukherjee", affiliation: "Former Director, IISER Kolkata"},
    {name: "Prof. N. Sathyamurthy", affiliation: "Former Director, IISER Mohali"},
    {name: "Prof. U. P. Singh", affiliation: "Deputy Director, IIT Roorkee"},
    {name: "Prof. A. K. Paul", affiliation: "Former VC, DAV University Jalandhar"},
    {name: "Prof. P. S. Kalsi", affiliation: "National Forensic Sciences University, Gandhinagar"},
    {name: "Dr. A. K. Tyagi", affiliation: "Director, Chemistry Group, BARC Mumbai"},
    {name: "Prof. P. S. Mukherjee", affiliation: "IISc Bangalore"},
    {name: "Prof. Anil J. Elias", affiliation: "Department of Chemistry, IIT Delhi"},
    {name: "Prof. Ashok K. Ganguli", affiliation: "Department of Chemistry, IIT Delhi"},
    {name: "Prof. Gros Claude", affiliation: "ICMUB, France"},
    {name: "Prof. Minati Baral", affiliation: "Department of Chemistry, NIT Kurukshetra"},
    {name: "Prof. B. S. Kaith", affiliation: "Department of Chemistry, NIT Jalandhar"},
    {name: "Prof. S. K. Awasthi", affiliation: "Department of Chemistry, University of Delhi"},
    {name: "Prof. Rajeev Gupta", affiliation: "Department of Chemistry, University of Delhi"},
    {name: "Prof. D. S. Rawat", affiliation: "Department of Chemistry, University of Delhi"},
    {name: "Prof. R. K. Sharma", affiliation: "Department of Chemistry, University of Delhi"},
    {name: "Prof. D. S. Pandey", affiliation: "Department of Chemistry, BHU"},
    {name: "Prof. Sartaz Tabassum", affiliation: "Department of Chemistry, AMU"},
    {name: "Prof. Benjamin Elias", affiliation: "IMCN, UCLouvain, Belgium"},
    {name: "Prof. N. K. Kaushik", affiliation: "Kwangwoon University, South Korea"},
]

export const studentCommittee = {
    core: [
        {name: "Devesh Kumar Mishara", image: profile},
        {name: "Bhavna Joshi", image: profile},
        {name: "Devansh Gahlawat", image: devansh},
        {name: "Manu Agarwal", image: profile},
        {name: "Syamantak Gupta", image: profile},
        {name: "Anil Gurjar", image: profile},
    ],
    technical: [
        {name: "Hardik Sachan", image: hardik},
        {name: "Shivansh Asthana", image: profile},
        {name: "Vishal Singh", image: profile},
    ],
    others: [
        {name: "MADHVI RAJ", image: profile},
        {name: "RAMAKANT PRASHAD", image: profile},
        {name: "RICHA", image: profile},
        {name: "PRIYA MALIK", image: profile},
        {name: "RISHABH KUSHWAHA", image: profile},
        {name: "DHRUV TYAGI", image: profile},
        {name: "MANJOT KAUR CHANNI", image: profile},
        {name: "CHITRANSH CHATURVEDI", image: profile},
        {name: "SUBODH KUMAR", image: profile},
        {name: "SATYAM KUMAR", image: profile},
        {name: "LEELANAND SAH", image: profile},
        {name: "AYUSH BIYANI", image: profile},
        {name: "MANSI ARYA", image: profile},
        {name: "ABHINAV THAKUR", image: profile},
        {name: "SUPRASHITA DAIMARI", image: profile},
        {name: "TANISHQ RANJAN", image: profile},
        {name: "SAJAL SAHU", image: profile},
    ]
}
