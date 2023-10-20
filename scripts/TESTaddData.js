// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
// import {
//     getFirestore,
//     collection,
//     addDoc,
//     serverTimestamp,
// } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

// const firebaseConfig = {
//     apiKey: 'AIzaSyCA7aaXgARdDjMXAjCzxBGkmVKxwXKuBZA',
//     authDomain: 'hrm-app-71d9a.firebaseapp.com',
//     projectId: 'hrm-app-71d9a',
//     storageBucket: 'hrm-app-71d9a.appspot.com',
//     messagingSenderId: '836421250909',
//     appId: '1:836421250909:web:b3cbd3491c5bcf0f2dc2b4',
// };

// initializeApp(firebaseConfig);
// const db = getFirestore();

// const colRef = collection(db, 'employees');

// const employees = [
//     {
//         name: 'Walter White',
//         email: 'walter.white@qburst.com',
//         dob: '1973-07-10',
//         gender: 'male',
//         address: '789 Elm Avenue, Sometown',
//         role: 'CFO',
//         department: 'Finance and Accounts',
//         doj: '2007-02-15',
//         location: 'USA',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         empId: 1001,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fbb2401e0-25ff-4c4e-85e0-d8b36a0a1270?alt=media&token=21c81064-6ff1-480a-9bfa-ec3d7bbb70a6',
//     },
//     {
//         name: 'Skylar White',
//         email: 'skylar.white@qburst.com',
//         dob: '1978-07-10',
//         gender: 'female',
//         address: '789 Elm Avenue, Sometown',
//         role: 'Director',
//         department: 'Finance and Accounts',
//         doj: '2009-02-15',
//         location: 'USA',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         empId: 1002,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2F93244b0f-e684-4bab-8319-d907f763cb49?alt=media&token=76590745-e58d-4aa1-9f6e-d60d931f2c4d',
//     },
//     {
//         name: 'David Wilson',
//         email: 'david.wilson@qburst.com',
//         dob: '1987-12-05',
//         gender: 'male',
//         address: '456 Oak Street, Anycity',
//         role: 'Engineer',
//         department: 'Development',
//         doj: '2020-10-25',
//         location: 'Thiruvananthapuram',
//         skills: ['Project Management', 'JavaScript', 'Figma'],
//         empId: 1005,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
//     {
//         name: 'Sarah Johnson',
//         email: 'sarah.johnson@qburst.com',
//         dob: '1992-08-18',
//         gender: 'female',
//         address: '123 Cedar Lane, Othertown',
//         role: 'CEO',
//         department: 'Executive',
//         doj: '2021-07-15',
//         location: 'USA',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         empId: 1006,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
//     {
//         name: 'Oliver Smith',
//         email: 'oliver.smith@qburst.com',
//         dob: '1995-09-28',
//         gender: 'male',
//         address: '567 Pine Street, Hometown',
//         role: 'Intern',
//         department: 'QA',
//         doj: '2022-03-15',
//         location: 'Thiruvananthapuram',
//         skills: ['Python'],
//         empId: 1007,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
//     {
//         name: 'Emma Davis',
//         email: 'emma.davis@qburst.com',
//         dob: '1998-04-12',
//         gender: 'female',
//         address: '333 Cedar Road, Smalltown',
//         role: 'Architect',
//         department: 'Development',
//         doj: '2021-08-20',
//         location: 'Kochi',
//         skills: ['ReactJS', 'JavaScript', 'AngularJS'],
//         empId: 1008,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
//     {
//         name: 'Liam Johnson',
//         email: 'liam.johnson@qburst.com',
//         dob: '1991-11-25',
//         gender: 'male',
//         address: '123 Elm Avenue, Othertown',
//         role: 'Director',
//         department: 'Executive',
//         doj: '2020-05-10',
//         location: 'USA',
//         skills: ['Client Presentations', 'Management', 'Business Analysis'],
//         empId: 1009,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
//     {
//         name: 'Olivia Smith',
//         email: 'olivia.smith@qburst.com',
//         dob: '1994-02-20',
//         gender: 'female',
//         address: '444 Oak Street, Anycity',
//         role: 'Engineer',
//         department: 'Development',
//         doj: '2022-06-15',
//         location: 'Noida',
//         skills: ['JavaScript', 'CSS', 'HTML'],
//         empId: 1010,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
//     {
//         name: 'Noah Davis',
//         email: 'noah.davis@qburst.com',
//         dob: '1989-08-10',
//         gender: 'male',
//         address: '555 Pine Avenue, Cityville',
//         role: 'Engineer',
//         department: 'Development',
//         doj: '2021-12-25',
//         location: 'Kochi',
//         skills: ['ReactJS', 'JavaScript', 'CSS'],
//         empId: 1011,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
//     {
//         name: 'Sophia Wilson',
//         email: 'sophia.wilson@qburst.com',
//         dob: '1996-05-22',
//         gender: 'female',
//         address: '222 Cedar Lane, Countryside',
//         role: 'Senior Engineer',
//         department: 'Development',
//         doj: '2021-03-20',
//         location: 'Canada',
//         skills: ['ReactJS', 'JavaScript', 'AngularJS'],
//         empId: 1012,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
//     {
//         name: 'Mia Johnson',
//         email: 'mia.johnson@qburst.com',
//         dob: '1997-09-15',
//         gender: 'female',
//         address: '777 Elm Road, Newcity',
//         role: 'Engineer',
//         department: 'Development',
//         doj: '2022-05-10',
//         location: 'USA',
//         skills: ['JavaScript', 'CSS', 'HTML'],
//         empId: 1013,
//         profilePhoto:
//             'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fc8c7339d-284c-414b-b661-f884e5c1d33d?alt=media&token=7c5d3d7c-bd78-4fe4-9ffe-e329fa7cab09',
//     },
// ];

// // for (const obj of employees) {
// //     const docRef = addDoc(collection(db, 'employees'), {
// //         ...obj,
// //         updatedAt: serverTimestamp(),
// //     });
// //     console.log('Document written with ID: ', docRef.id);
// // }

// for (const obj of employees) {
//     const docRef = addDoc(collection(db, 'employees'), obj);
//     console.log('Document written with ID: ', docRef.id);
// }
