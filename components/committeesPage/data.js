import bhupendirmehta from '@/public/profile_photos/Dr. BhupenderMehta SSNC DU.png'
import chaganlal from '@/public/profile_photos/Dr. ChhaganLal SSNC.png'
import gunjanarora from '@/public/profile_photos/Dr. Gunjan-Arora SSNC DU.jpg'
import manishasingh from '@/public/profile_photos/Dr. Manisha Singh.jpg'
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
import anil from '@/public/Committe pics/Anil Gurjar.jpg'
import samyantak from '@/public/Committe pics/Syamantak Gupta.jpg'
import manjot from '@/public/Committe pics/Manjot Kaur Channi.jpg'
import sajal from'@/public/Committe pics/Sajal Sahu.jpg'
import chitransh from '@/public/Committe pics/Chitransh Chaturvedi.jpg'
import ayush from '@/public/Committe pics/Ayush Biyani.jpg'

import satyam from '@/public/Committe pics/Satyam Kumar.jpg'

import priya from '@/public/Committe pics/Priya Malik.jpg'
import mansi from '@/public/Committe pics/Mansi Arya.jpg'
import supra from '@/public/Committe pics/suprashita.jpg'
import tanishq from '@/public/Committe pics/Tanishq Ranjan.jpg'


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
        {name: "Devesh Kumar Mishra", image: devesh},
        {name: "Bhavna Joshi", image:bhavnajoshi},
        {name: "Devansh Gahlawat", image: devansh},
        {name: "Manu Agarwal", image:manu},
        {name: "Syamantak Gupta", image: samyantak},
        {name: "Anil Gurjar", image: anil},
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
        {name: "Manjot Kaur Channi", image: manjot},
        {name: "Chitransh Chaturvedi", image:chitransh},
        {name: "Subodh Kumar", image: profile},
        {name: "Satyam Kumar", image: satyam},
        {name: "Leelanand Sah", image: profile},
        {name: "Ayush Biyani", image: ayush},
        {name: "Mansi Arya", image: mansi},
        {name: "Abhinav Thakur", image: profile},
        {name: "Suprashita Diamari", image: supra},
        {name: "Tanishq Ranjan", image:tanishq},
        {name: "Sajal Sahu", image: sajal},
    ]
}
