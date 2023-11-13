function toggleDropdown(serviceId) {
    var dropdown = document.getElementById(serviceId);
    var display = dropdown.style.display;
    // If dropdown is visible, hide it. Else, show it.
    dropdown.style.display = display === 'block' ? 'none' : 'block';
}


