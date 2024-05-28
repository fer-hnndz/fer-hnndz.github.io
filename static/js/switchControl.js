document.getElementById('toggle-switch').addEventListener('change', function () {
    const iconLeft = document.getElementById('icon-left');
    const iconRight = document.getElementById('icon-right');

    let educationDiv = document.getElementById("education")
    let projectsDiv = document.getElementById("projects")
    if (this.checked) {
        projectsDiv.classList.add("hidden")
        educationDiv.classList.remove("hidden")
        iconLeft.classList.add('text-green-500');
        iconLeft.classList.remove('text-gray-500');
        iconRight.classList.add('text-gray-500');
        iconRight.classList.remove('text-green-500');
    } else {
        projectsDiv.classList.remove("hidden")
        educationDiv.classList.add("hidden")
        iconLeft.classList.add('text-gray-500');
        iconLeft.classList.remove('text-green-500');
        iconRight.classList.add('text-green-500');
        iconRight.classList.remove('text-gray-500');
    }
});