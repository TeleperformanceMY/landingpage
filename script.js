// Translation functionality
const translateButton = document.querySelector('.translate-button');
const languageSelect = document.getElementById('language-select');

translateButton.addEventListener('click', () => {
    const selectedLanguage = languageSelect.value;
    alert(`Translate to ${selectedLanguage} will be implemented here.`);
});
