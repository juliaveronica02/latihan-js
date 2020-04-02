const DATA = {
    "employess" :[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"},
        {"firstName":"Doni", "lastName":"Wong"},
        {"firstName":"Slamet", "lastName":"Jordan"},
        {"firstName":"Carlo", "lastName":"Wee"},
        {"firstName":"Philips", "lastName":"Morris"},
        {"firstName":"Angga", "lastName":"Dwi"},
        {"firstName":"Vicky", "lastName":"Sasongko"},
        {"firstName":"Nadya", "lastName":"Lembayung"}
    ],
    "jobs":[
        {"departmen":"QC","title":"QA"},
        {"departmen":"IT","title":['IT Support','Software Engineer','UI/UX', 'DevOps','Tester']},
        {"departmen":"Human Resource Development", "title":"SPV"},
        {"departmen":"Marketing and Custumer Service","title":"Marketing"},
        {"departmen":"Maintenance and Facility","title":"Maintenance"},
        {"departmen":"QC","title":"QA"},
        {"departmen":"IT","title":['IT Support','Software Engineer','UI/UX', 'DevOps','Tester']},
        {"departmen":"Human Resource Development", "title":"SPV"},
        {"departmen":"Marketing and Custumer Service","title":"Marketing"},
        {"departmen":"Maintenance and Facility","title":"Maintenance"},
    ],
    "details":[
        {"age":['umur: 22 Tahun','umur: 23 Tahun','umur: 24 tahun','umur: 29 Tahun','umur: 30 Tahun','umur: 32 Tahun']},
        {"experience":['experience: 2 Tahun','experience: 3 Tahun', 'experience: 4 Tahun', 'experience: 5 tahun']}
    ],
    // name :jhon doe, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
    //name :anna smith, jobs: department: Human Resources Development, title: SPV, age: 29, experience: 4 Tahun
    //name :Peter jhon, jobs: department: IT, title: DevOps, age: 24, experience: 3 Tahun
    //name :doni wong, jobs: department: IT, title: Tester, age: 22, experience: 2 Tahun
    //name :slamet jordan, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
    //name :carlo wee, jobs: department: Finance and Accounting, title: Finance, age: 32, experience: 4 Tahun
    //name :philips morris, jobs: department: Maintenance and Facility, title: maintenance, age: 29, experience: 2 Tahun
    //name :angga dwi, jobs: department: IT, title: IT Support, age: 23, experience: 2 Tahun
    //name :vicky sasongko, jobs: department: QC, title: QA, age: 24, experience: 2 Tahun
    //name :nadya lembayung, jobs: department: IT, title: Software engineer, age: 23, experience: 2 Tahun

    // //percobaan ke -1 stuck
    // printBiodata: (id)=>{
    //     const fn = DATA.employess[id].firstName
    //     const ln = DATA.employess[id].lastName
    //     const job = DATA.jobs[id].departmen
    //     const jb = DATA.jobs[id].title
    //     // const jb2 = DATA.jobs[0].title[id]
    //     const umur = DATA.details[0].age[id]
    //     const ex = DATA.details[1].experience[id]
    //     console.log(`firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb}, age: ${umur}, experience:${ex}`);
    // }
}
        //cobaan ke 3
        console.log(DATA.employess[0], DATA.jobs[0].departmen, DATA.jobs[0].title, DATA.details[0].age[0], DATA.details[1].experience[0] )
        console.log(DATA.employess[1], DATA.jobs[1].departmen, DATA.jobs[1].title, DATA.details[0].age[0], DATA.details[1].experience[0] )
    //percobaan ke-2
    // const DATA = {
    //     "employess" :[
    //         {"firstName":"John", "lastName":"Doe"},
    //         {"firstName":"Anna", "lastName":"Smith"},
    //         {"firstName":"Peter", "lastName":"Jones"},
    //         {"firstName":"Doni", "lastName":"Wong"},
    //         {"firstName":"Slamet", "lastName":"Jordan"},
    //         {"firstName":"Carlo", "lastName":"Wee"},
    //         {"firstName":"Philips", "lastName":"Morris"},
    //         {"firstName":"Angga", "lastName":"Dwi"},
    //         {"firstName":"Vicky", "lastName":"Sasongko"},
    //         {"firstName":"Nadya", "lastName":"Lembayung"}
    //     ],
    //     "jobs":[
    //         {"departmen":"QC","title":"QA"},
    //         {"departmen":"IT","title":['IT Support','Software Engineer','UI/UX', 'DevOps','Tester']},
    //         {"departmen":"Human Resource Development", "title":"SPV"},
    //         {"departmen":"Marketing and Custumer Service","title":"Marketing"},
    //         {"departmen":"Maintenance and Facility","title":"Maintenance"},
    //         {"departmen":"QC","title":"QA"},
    //         {"departmen":"IT","title":['IT Support','Software Engineer','UI/UX', 'DevOps','Tester']},
    //         {"departmen":"Human Resource Development", "title":"SPV"},
    //         {"departmen":"Marketing and Custumer Service","title":"Marketing"},
    //         {"departmen":"Maintenance and Facility","title":"Maintenance"},
    //     ],
    //     "details":[
    //         {"age":[22,23,24,29,30,32,19,18,20,21]},
    //         {"experience":['2 Tahun','3 Tahun', '4 Tahun', '5 tahun', '1 tahun','6 Tahun','5 bulan','4 bulan','3 bulan','2 bulan']}
    //     ],
    // name :jhon doe, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
    //name :anna smith, jobs: department: Human Resources Development, title: SPV, age: 29, experience: 4 Tahun
    //name :Peter jhon, jobs: department: IT, title: DevOps, age: 24, experience: 3 Tahun
    //name :doni wong, jobs: department: IT, title: Tester, age: 22, experience: 2 Tahun
    //name :slamet jordan, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
    //name :carlo wee, jobs: department: Finance and Accounting, title: Finance, age: 32, experience: 4 Tahun
    //name :philips morris, jobs: department: Maintenance and Facility, title: maintenance, age: 29, experience: 2 Tahun
    //name :angga dwi, jobs: department: IT, title: IT Support, age: 23, experience: 2 Tahun
    //name :vicky sasongko, jobs: department: QC, title: QA, age: 24, experience: 2 Tahun
    //name :nadya lembayung, jobs: department: IT, title: Software engineer, age: 23, experience: 2 Tahun

//     printBiodata:()=>{
//         let fn = DATA.employess[0].firstName
//         let ln = DATA.employess[0].lastName
//         let job = DATA.jobs[1].departmen
//         let jb2 = DATA.jobs[1].title[0]
//         let umur = DATA.details[0].age[0]
//         let ex = DATA.details[1].experience[0]
//         console.log(`1. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printBiodata2:()=>{
//         let fn = DATA.employess[1].firstName
//         let ln = DATA.employess[1].lastName
//         let job = DATA.jobs[1].departmen
//         let jb2 = DATA.jobs[1].title[1]
//         let umur = DATA.details[0].age[1]
//         let ex = DATA.details[1].experience[0]
//         console.log(`2. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printBiodata3:()=>{
//         let fn = DATA.employess[2].firstName
//         let ln = DATA.employess[2].lastName
//         let job = DATA.jobs[1].departmen
//         let jb2 = DATA.jobs[1].title[2]
//         let umur = DATA.details[0].age[2]
//         let ex = DATA.details[1].experience[2]
//         console.log(`3. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printBiodata4:()=>{
//         let fn = DATA.employess[3].firstName
//         let ln = DATA.employess[3].lastName
//         let job = DATA.jobs[1].departmen
//         let jb2 = DATA.jobs[1].title[3]
//         let umur = DATA.details[0].age[3]
//         let ex = DATA.details[1].experience[3]
//         console.log(`4. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printBiodata5:()=>{
//         let fn = DATA.employess[4].firstName
//         let ln = DATA.employess[4].lastName
//         let job = DATA.jobs[2].departmen
//         let jb2 = DATA.jobs[2].title
//         let umur = DATA.details[0].age[4]
//         let ex = DATA.details[1].experience[4]
//         console.log(`5. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printBiodata6:()=>{
//         let fn = DATA.employess[5].firstName
//         let ln = DATA.employess[5].lastName
//         let job = DATA.jobs[3].departmen
//         let jb2 = DATA.jobs[3].title
//         let umur = DATA.details[0].age[5]
//         let ex = DATA.details[1].experience[5]
//         console.log(`6. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printBiodata7:()=>{
//         let fn = DATA.employess[6].firstName
//         let ln = DATA.employess[6].lastName
//         let job = DATA.jobs[4].departmen
//         let jb2 = DATA.jobs[4].title
//         let umur = DATA.details[0].age[6]
//         let ex = DATA.details[1].experience[6]
//         console.log(`7. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printBiodata8:()=>{
//         let fn = DATA.employess[7].firstName
//         let ln = DATA.employess[7].lastName
//         let job = DATA.jobs[5].departmen
//         let jb2 = DATA.jobs[5].title
//         let umur = DATA.details[0].age[7]
//         let ex = DATA.details[1].experience[7]
//         console.log(`8. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//         // console.log(job);
//     },
//     printBiodata9:()=>{
//         let fn = DATA.employess[8].firstName
//         let ln = DATA.employess[8].lastName
//         let job = DATA.jobs[0].departmen
//         let jb2 = DATA.jobs[1].title[0]
//         let umur = DATA.details[0].age[8]
//         let ex = DATA.details[1].experience[8]
//         console.log(`9. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printBiodata10:()=>{
//         let fn = DATA.employess[9].firstName
//         let ln = DATA.employess[9].lastName
//         let job = DATA.jobs[0].departmen
//         let jb2 = DATA.jobs[1].title[0]
//         let umur = DATA.details[0].age[9]
//         let ex = DATA.details[1].experience[9]
//         console.log(`10. firstname : ${fn}, lastname : ${ln}, job: ${job}, title ${jb2}, age: ${umur}, experience:${ex}`);
//     },
//     printAll: ()=>{
//        DATA.printBiodata()
//        DATA.printBiodata2()
//        DATA.printBiodata3()
//        DATA.printBiodata4()
//        DATA.printBiodata5()
//        DATA.printBiodata6()
//        DATA.printBiodata7()
//        DATA.printBiodata8()
//        DATA.printBiodata9()
//        DATA.printBiodata10()
//     }
//}
