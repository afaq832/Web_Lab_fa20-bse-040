document.addEventListener("DOMContentLoaded", function () {
    const addNewQuestionButton = document.getElementById("add-new-question");
    const faqContainer = document.querySelector(".faq-container");

    function toggleActive(event) {
      const question = event.currentTarget;
      question.classList.toggle("active");
    }

    function removeQuestion(event) {
      const crossIcon = event.currentTarget;
      const question = crossIcon.parentElement.parentElement;
      question.remove();
    }

    const questions = document.querySelectorAll(".faq");
    questions.forEach((question) => {
      question.addEventListener("click", toggleActive);

      const crossIcon = question.querySelector(".fa-times");
      crossIcon.addEventListener("click", removeQuestion);
    });
  
    addNewQuestionButton.addEventListener("click", function () {
      const newQuestionTitleInput = document.getElementById("new-question-title");
      const newQuestionAnswerInput = document.getElementById("new-question-answer");
  
      const newQuestionTitle = newQuestionTitleInput.value;
      const newQuestionAnswer = newQuestionAnswerInput.value;
  
      if (newQuestionTitle && newQuestionAnswer) {
        const newFaq = document.createElement("div");
        newFaq.className = "faq";
        newFaq.innerHTML = `
          <h3 class="faq-title">${newQuestionTitle}</h3>
          <p class="faq-text">${newQuestionAnswer}</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        `;
  
        faqContainer.insertBefore(newFaq, document.querySelector(".new-question"));
        newQuestionTitleInput.value = "";
        newQuestionAnswerInput.value = "";
        newFaq.addEventListener("click", toggleActive);
        const crossIcon = newFaq.querySelector(".fa-times");
        crossIcon.addEventListener("click", removeQuestion);
      }
    });
  });
  