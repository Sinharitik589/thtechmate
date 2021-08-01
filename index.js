function openAnswer(index) {
    let answer_element = document.getElementById("answer_" + index);
    let question_element = document.getElementById("question_button_" + index);
    if (answer_element.style.display === "none" || answer_element.style.display === "") {
        console.log("hello")
        answer_element.style.display = "block";
        question_element.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
        </svg>`
    }
    else {
        answer_element.style.display = "none";
        question_element.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>`
    }

}

const toggleHeader = () => {
    const element = document.getElementById("header_toggle");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block"
    }
    else {
        element.style.display = "none"
    }
}