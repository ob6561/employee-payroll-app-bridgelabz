window.addEventListener("DOMContentLoaded", () => {
    const salarySlider = document.querySelector("#salary");
    const salaryOutput = document.querySelector("#salaryOutput");

    
    salaryOutput.textContent = salarySlider.value;

    
    salarySlider.addEventListener("input", () => {
        salaryOutput.textContent = salarySlider.value;
    });
});

class EmployeePayrollData{
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else{
            throw 'Name is Incorrect!';
        }
    }
    get name(){
        return this._name;
    }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }
    get profilePic(){
        return this._profilePic;
    }
    set gender(gender){this._gender = gender;}
    get gender() { return this._gender; }
    set department(department){this._department = department;}
    get department() { return this._department; }
    set salary(salary) {
        if (salary > 0) {
            this._salary = salary;
        } else {
            throw 'Salary must be positive';
        }
    }
    get salary() { return this._salary; }

    
    set startDate(startDate) {
        this._startDate = startDate;
    }
    get startDate() { return this._startDate; }
    set notes(notes) {
        this._notes = notes;
    }
    get notes() { return this._notes; }

    toString() {
        return `Name=${this.name}, Gender=${this.gender}, Department=${this.department},
        Salary=${this.salary}, StartDate=${this.startDate}, Notes=${this.notes}`;
    }
}
function saveEmployeePayrollData(event) {
    event.preventDefault();

    try {
        let employeePayrollData = new EmployeePayrollData();

        employeePayrollData.name = document.querySelector('#name').value;
        employeePayrollData.profilePic =
            document.querySelector('input[name="profile"]:checked').value;
        employeePayrollData.gender =
            document.querySelector('input[name="gender"]:checked').value;

        employeePayrollData.department = getSelectedDepartments();
        employeePayrollData.salary = document.querySelector('#salary').value;

        let day = document.querySelector('#day').value;
        let month = document.querySelector('#month').value;
        let year = document.querySelector('#year').value;
        employeePayrollData.startDate = `${day} ${month} ${year}`;

        employeePayrollData.notes = document.querySelector('#notes').value;

        console.log(employeePayrollData.toString());
        alert("Employee Payroll Data Saved Successfully");

    } catch (error) {
        alert(error);
    }
}
function getSelectedDepartments() {
    let departmentArray = [];
    let checkboxes = document.querySelectorAll('input[name="department"]:checked');

    checkboxes.forEach(cb => departmentArray.push(cb.value));
    return departmentArray;
}
