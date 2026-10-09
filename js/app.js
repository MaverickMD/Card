import { Employee } from './Util.js';


const eFname = document.querySelector('#fName');
const eLname = document.querySelector('#lName');
const eBio = document.querySelector('#bio');
const eSubmitBtn = document.querySelector('#submitBtn');
const eForm = document.querySelector('#signupForm');

const eFullName = document.querySelector('#fullName');


const testInput = (e) => {

    e.preventDefault()

    const fName = eFname.value.trim();
const lName = eLname.value.trim();
const bio = eBio.value.trim();
    const newEmployee = new Employee(fName,lName,bio)
const fullName = `${fName} ${lName}`;
eFullName.innerText = fullName;
        // window.location.replace('./index.html')

        window.location.href = './index.html';



}

eSubmitBtn.addEventListener('click', testInput);



