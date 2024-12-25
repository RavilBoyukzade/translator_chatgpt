async function translateText() {
    const text = document.getElementById('text-to-translate').value;
    const targetLanguage = document.getElementById('language').value;

    const response = await fetch('http://localhost:3000/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, targetLanguage }),
    });

    const data = await response.json();
    document.getElementById('translated-text').innerText = data.translatedText || 'Translation failed.';
}
