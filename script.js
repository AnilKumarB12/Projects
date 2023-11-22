
function openMenu(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        // Using smooth scrolling for a better user experience
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section not found: ' + sectionId);
    }
}