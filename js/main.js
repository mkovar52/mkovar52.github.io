(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const contactForm = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".form-message.success");
  const errorMessage = document.querySelector(".form-message.error");
  const submitButton = contactForm?.querySelector("button[type='submit']");

  const toggleMessages = (type) => {
    if (successMessage) successMessage.style.display = type === "success" ? "block" : "none";
    if (errorMessage) errorMessage.style.display = type === "error" ? "block" : "none";
  };

  // if (contactForm) {
  //   contactForm.addEventListener("submit", async (event) => {
  //     event.preventDefault();
  //     toggleMessages();

  //     const formData = new FormData(contactForm);
  //     const encodedData = new URLSearchParams(formData).toString();

  //     if (submitButton) {
  //       submitButton.disabled = true;
  //       submitButton.textContent = "Sending...";
  //     }

  //     try {
  //       const response = await fetch("/", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //         body: encodedData,
  //       });

  //       if (response.ok) {
  //         contactForm.reset();
  //         toggleMessages("success");
  //       } else {
  //         toggleMessages("error");
  //       }
  //     } catch (error) {
  //       toggleMessages("error");
  //     } finally {
  //       if (submitButton) {
  //         submitButton.disabled = false;
  //         submitButton.textContent = "Send message";
  //       }
  //     }
  //   });
  // }
})();