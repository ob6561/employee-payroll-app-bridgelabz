window.addEventListener("DOMContentLoaded", () => {
    const salarySlider = document.querySelector("#salary");
    const salaryOutput = document.querySelector("#salaryOutput");

    // Set initial value
    salaryOutput.textContent = salarySlider.value;

    // Event listener for salary change
    salarySlider.addEventListener("input", () => {
        salaryOutput.textContent = salarySlider.value;
    });
});