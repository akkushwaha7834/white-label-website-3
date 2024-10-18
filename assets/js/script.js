// mobile dropdown start
let mobile_dropdown = document.getElementById("mobile_dropdown")
let mobile_dropdown_content = document.getElementById("mobile_dropdown_content")
// let mobile_dropdown_icon = document.getElementById("mobile_dropdown_icon")
let check = true

mobile_dropdown.addEventListener("click", () => {
    if (check) {
        console.log(check)
        mobile_dropdown_content.style.height = mobile_dropdown_content.scrollHeight + 'px';

        check = false
    } else {

        mobile_dropdown_content.style.height = 0 + 'px';
        console.log(check)
        check = true
    }
})
// mobile dropdown end


// faq start

document.querySelectorAll('.que').forEach((question) => {
    console.log(question)
    question.addEventListener('click', () => {
        // Close all answers
        document.querySelectorAll('.ans').forEach((answer) => {
            answer.classList.remove('active');
        });
        
        // Open the clicked answer
        question.nextElementSibling.classList.add('active');
       
    });
});



// faq end

