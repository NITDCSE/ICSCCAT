import bhupendirmehta from '@/public/profile_photos/Dr. BhupenderMehta SSNC DU.png'
import chaganlal from '@/public/profile_photos/Dr. ChhaganLal SSNC.png'
import gunjanarora from '@/public/profile_photos/Dr. Gunjan-Arora SSNC DU.jpg'
import manishasingh from '@/public/profile_photos/Dr. Manisha Singh.jpeg'
import pratibha from '@/public/profile_photos/Dr. Pratibha NIT delhi.png'
import apsingh from '@/public/Committe pics/Dr. A. P. Singh.jpg'
import nishantverma from '@/public/Committe pics/Dr. Nishant Verma.jpg'
import ajaysharma from '@/public/Committe pics/Dr. Ajay K. Sharma Director of NIT Delhi.jpg'
import yogeshsingh from '@/public/Committe pics/Prof.-Yogesh-Singh-DU.jpg'
import praveen from '@/public/Committe pics/prof.-Praveen-Garg-SSCDU.jpeg'
import anujsharma from '@/public/Committe pics/anujsharma.jpg'
import profile from "@/public/profile.png"
import devansh from "@/public/profile_images/student_committee/devansh.jpg"
import hardik from "@/public/profile_images/student_committee/hardik.jpeg"
import shivansh from '@/public/Committe pics/Shivansh.jpg'
import risabh from '@/public/Committe pics/risabh.jpg'
import richa from '@/public/Committe pics/richa.png'
import madhviraj from '@/public/Committe pics/madhviraj.jpg'
import vishal from '@/public/Committe pics/vishal.jpg'
import devesh from '@/public/Committe pics/devesh.jpg'
import bhavnajoshi from '@/public/Committe pics/bhavanajoshi.png'
import manu from '@/public/Committe pics/manu.png'
import dhruv from '@/public/Committe pics/dhruv tyagi.jpeg'


export const organisingCommittee = [
    {
        type: 'Patrons',
        members: [
            {
                name: 'Prof. (Dr.) Ajay K. Sharma',
                designation: 'Director',
                affiliation: 'National Institute of Technology Delhi',
                photo:ajaysharma
                
            },
            {
                name: 'Prof. Yogesh Singh',
                designation: 'Vice Chancellor',
                affiliation: 'University of Delhi',
                photo:yogeshsingh
            },
        ]
    },
    {
        type: 'Chairman',
        members: [
            {
                name: 'Prof. Praveen Garg',
                designation: 'Principal',
                affiliation: 'Swami Shraddhanand College,University of Delhi',
                photo:praveen
            }
        ]
    },
    {
        type: 'Convener',
        members: [
            {
                name: 'Dr. Amit Pratap Singh',
                designation: 'Head, Department of Applied Sciences',
                affiliation: 'Associate Professor, NIT Delhi',
                photo:apsingh
            }
        ]
    },
    {
        type: 'Co-Conveners',
        members: [
            {
                name: 'Dr. Anuj K. Sharma',
                designation: 'Associate Professor',
                affiliation: 'Department of Applied Sciences, NIT Delhi',
                photo:anujsharma
                
            },
            {
                name: 'Dr. Bhupinder Mehta',
                designation: 'Associate Professor',
                affiliation: 'Department of Chemistry, SSNC, DU',
                photo:bhupendirmehta
            },
        ]
    },
    {
        type: 'Organising Secretaries',
        members: [
            {
                name: 'Dr. Pratibha',
                designation: 'Assistant Professor',
                affiliation: 'Department of Applied Sciences, NIT Delhi',
                photo:pratibha
            },
            {
                name: 'Dr. Chaggan Lal',
                designation: 'Assistant Professor',
                affiliation: 'Department of Chemistry, SSNC, DU',
                photo:chaganlal
            },
            {
                name: 'Dr. Nishant Verma',
                designation: 'Assistant Professor',
                affiliation: 'Department of Chemistry, SSNC, DU',
                photo: nishantverma 
            },
            {
                name: 'Dr. Gunjan Arora',
                designation: 'Assistant Professor',
                affiliation: 'Department of Chemistry, SSNC, DU',
                photo:gunjanarora
            },
        ]
    },
    {
        type: 'Treasurer',
        members: [
            {
                name: 'Dr. Manisha Singh',
                designation: 'Assistant Registrar',
                affiliation: 'National Institute of Technology, Delhi',
                photo:manishasingh
            }
        ]
    },
]

const nitdLabel = {line1: "National Instutite of Technology", line2: "Delhi"}
const ssduLabel = {line1: "Swami Shradhanand College", line2: "University of Delhi"}
export const localOrganisingCommittee = {
    nitDelhi: [
            {name: "Dr. V. S. Pandey", affiliation: nitdLabel},
            {name: "Dr. Gyanendra Sheoran", affiliation: nitdLabel},
            {name: "Dr. Amit Mahajan", affiliation: nitdLabel},
            {name: "Dr. Prashant Kumar", affiliation: nitdLabel},
            {name: "Dr. Saloni Priya", affiliation: nitdLabel},
            {name: "Dr. Ritu Goel", affiliation: nitdLabel},
            {name: "Mr. Krishan Pal", affiliation: nitdLabel},
            {name: "Mr. Jitender Singh Bisht", affiliation: nitdLabel},
            {name: "Mr. Aadesh Kumar", affiliation: nitdLabel},
            {name: "Mrs. Aparna Tripathi", affiliation: nitdLabel},
            {name: "Mr. Shubham Bhardwaj", affiliation: nitdLabel},
            {name: "Mrs. Navisha Sharma", affiliation: nitdLabel},
            {name: "Mr. Lov Kumar Dubey", affiliation: nitdLabel},
            {name: "Mr. Praveen Kumar", affiliation: nitdLabel},
        ],
    sscdu: [
        {name: "Dr. Chandra Shekhar Jeengar", affiliation: ssduLabel},
        {name: "Dr. Gajendra Gaur", affiliation: ssduLabel},
        {name: "Dr. Pradeep Pratap Singh", affiliation: ssduLabel},
        {name: "Dr. Saraswati Kanodia", affiliation: ssduLabel},
        {name: "Dr. Suman Yadav", affiliation: ssduLabel},
        {name: "Dr. Seema Gupta", affiliation: ssduLabel},
        {name: "Dr. Govind Ji Rai", affiliation: ssduLabel},
        {name: "Dr. Narbir Singh", affiliation: ssduLabel},
        {name: "Dr. Aanchal Sethi", affiliation: ssduLabel},
        {name: "Dr. Bholey Singh", affiliation: ssduLabel},
        {name: "Dr. Mukesh Kumar Verma", affiliation: ssduLabel},
        {name: "Dr. Partibha", affiliation: nitdLabel},
        {name: "Dr. Ramesh Chand", affiliation: ssduLabel},
        {name: "Mr. Amar Singh Meena", affiliation: ssduLabel},
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
        {name: "Devesh Kumar Mishra", image: devesh},
        {name: "Bhavna Joshi", image:bhavnajoshi},
        {name: "Devansh Gahlawat", image: devansh},
        {name: "Manu Agarwal", image:manu},
        {name: "Syamantak Gupta", image: profile},
        {name: "Anil Gurjar", image: profile},
    ],
    technical: [
        {name: "Hardik Sachan", image:hardik},
        {name: "Shivansh Asthana", image:shivansh},
        {name: "Vishal Singh", image:vishal},
    ],
    others: [
        {name: "Madhvi Raj", image:madhviraj},
        {name: "Ramakant Prasadh", image: profile},
        {name: "Richa", image:richa},
        {name: "Priya Malik", image: profile},
        {name: "Risabh Kushwaha", image: risabh},
        {name: "Dhruv Tyagi", image: dhruv},
        {name: "Manjot Kaur Channi", image: profile},
        {name: "Chitransh Chaturvedi", image: profile},
        {name: "Subodh Kumar", image: profile},
        {name: "Satyam Kumar", image: profile},
        {name: "Leelanand Sah", image: profile},
        {name: "Ayush Biyani", image: profile},
        {name: "Mansi Arya", image: profile},
        {name: "Abhinav Thakur", image: profile},
        {name: "Suprashita Diamari", image: profile},
        {name: "Tanishq Ranjan", image: profile},
        {name: "Sajal Sahu", image: profile},
    ]
}
