// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the modal elements
  const modal = document.getElementById("timeModal");
  const showModalBtn = document.getElementById("showTimeModalBtn");
  const closeModalBtn = modal.querySelector(".close-button"); // Get close button inside modal
  const currentTimeSpan = document.getElementById("modalCurrentTime");

  // Function to format time as HH:MM:SS
  function getCurrentTimeFormatted() {
    const now = new Date();
    // 'en-GB' locale is often used for 24-hour format HH:MM:SS
    // Adjust options as needed for exact desired output
    return now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Ensure 24-hour format if 'en-GB' doesn't default to it
    });
  }

  // Function to show the modal
  function showModal() {
    if (modal && currentTimeSpan) {
      currentTimeSpan.textContent = getCurrentTimeFormatted(); // Update time
      modal.style.display = "block"; // Show modal
    }
  }

  // Function to hide the modal
  function hideModal() {
    if (modal) {
      modal.style.display = "none"; // Hide modal
    }
  }

  // Event listener for the button to show the modal
  if (showModalBtn) {
    showModalBtn.addEventListener("click", showModal);
  }

  // Event listener for the close button to hide the modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", hideModal);
  }

  // Optional: Hide modal if user clicks outside of the modal content
  // window.addEventListener('click', (event) => {
  //     if (event.target === modal) { // Check if the click is on the modal backdrop itself
  //         hideModal();
  //     }
  // });
});
