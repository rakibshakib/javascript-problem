const employees = [
    {
        "employeeName": "Sophia Miller",
        "department": "Sales",
        "designation": "Sales Manager",
        "grossSalary": 90000
    },
    {
        "employeeName": "William Clark",
        "department": "Sales",
        "designation": "Sales Representative",
        "grossSalary": 75000
    },
    {
        "employeeName": "Avery Martinez",
        "department": "Sales",
        "designation": "Key Account Manager",
        "grossSalary": 85000
    }
    ,
    {
        "employeeName": "John Smith",
        "department": "Human Resources",
        "designation": "HR Manager",
        "grossSalary": 80000
    },
    {
        "employeeName": "Jane Doe",
        "department": "Human Resources",
        "designation": "HR Specialist",
        "grossSalary": 60000
    },
    {
        "employeeName": "Michael Johnson",
        "department": "Human Resources",
        "designation": "Recruiter",
        "grossSalary": 70000
    },
    {
        "employeeName": "Emily Williams",
        "department": "Human Resources",
        "designation": "HR Assistant",
        "grossSalary": 45000
    },
    {
        "employeeName": "David Brown",
        "department": "Engineering",
        "designation": "Software Engineer",
        "grossSalary": 90000
    },
    {
        "employeeName": "Sophia Lee",
        "department": "Engineering",
        "designation": "QA Engineer",
        "grossSalary": 75000
    },
    {
        "employeeName": "Ethan Perez",
        "department": "Engineering",
        "designation": "Hardware Engineer",
        "grossSalary": 85000
    },
    {
        "employeeName": "Isabella Lopez",
        "department": "Engineering",
        "designation": "Embedded Systems Engineer",
        "grossSalary": 80000
    },
    {
        "employeeName": "Daniel Martinez",
        "department": "Engineering",
        "designation": "Engineering Manager",
        "grossSalary": 100000
    },
    {
        "employeeName": "Mia Rodriguez",
        "department": "Design",
        "designation": "UI/UX Designer",
        "grossSalary": 75000
    },
    {
        "employeeName": "Liam Wilson",
        "department": "Design",
        "designation": "Graphic Designer",
        "grossSalary": 70000
    },
    {
        "employeeName": "Ava Anderson",
        "department": "Design",
        "designation": "Art Director",
        "grossSalary": 95000
    },
    {
        "employeeName": "Noah Hall",
        "department": "Design",
        "designation": "Illustrator",
        "grossSalary": 60000
    },
    {
        "employeeName": "James Adams",
        "department": "Marketing",
        "designation": "Marketing Manager",
        "grossSalary": 85000
    },
    {
        "employeeName": "Olivia Taylor",
        "department": "Marketing",
        "designation": "Digital Marketing Specialist",
        "grossSalary": 70000
    },
    {
        "employeeName": "Lily Scott",
        "department": "Marketing",
        "designation": "Content Writer",
        "grossSalary": 60000
    },
    {
        "employeeName": "Jackson Wright",
        "department": "Marketing",
        "designation": "SEO Analyst",
        "grossSalary": 65000
    }
]

const deptList = [
    "Human Resources",
    "Engineering",
    "Design",
    "Marketing",
    "Sales"
]

function modifiedEmpRowDto(empArr, depArr) {
    let rowDto = [];
    depArr.forEach(dept => {
        for (let index = 0; index < empArr.length; index++) {
            if (empArr[index]?.department === dept) {
                rowDto.push({
                    ...empArr[index],
                    index: index
                })
            }

        }
    })
    return rowDto;
}
const groupByDepertment = rowDto => {
    const groupingData = []
    let firstRow = { department: rowDto?.[0]?.department, employeeName: null };
    groupingData.push(firstRow);
    for (let index = 0; index < rowDto.length; index++) {
        const element = rowDto[index];
        if (element?.department === firstRow.department) {
            groupingData.push(element);
        } else {
            firstRow = { department: element?.department, employeeName: null };
            groupingData.push({ department: element?.department, employeeName: null });
        }

    }
    return groupingData;
}
const sortingByDept = modifiedEmpRowDto(employees, deptList);
const groupByDept = groupByDepertment(sortingByDept);
console.log({ groupByDept })