document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // --- Stato ---
    let count = parseInt(localStorage.getItem('counterValue')) || 0;

    // --- Creazione Elementi ---
    const container = document.createElement('div');
    container.id = 'counter-container';

    const title = document.createElement('h1');
    title.textContent = 'Counter';

    const display = document.createElement('span');
    display.id = 'display';
    display.textContent = count;

    const btnMinus = document.createElement('button');
    btnMinus.textContent = '−';
    btnMinus.className = 'btn-minus';

    const btnPlus = document.createElement('button');
    btnPlus.textContent = '+';
    btnPlus.className = 'btn-plus';

    const btnReset = document.createElement('button');
    btnReset.textContent = 'Reset';
    btnReset.className = 'btn-reset';

    // --- Logica ---
    const updateUI = () => {
        display.textContent = count;
        localStorage.setItem('counterValue', count);
        // Colore rosso se negativo
        display.style.color = count < 0 ? '#f44336' : '#333';
    };

    btnPlus.addEventListener('click', () => {
        count++;
        updateUI();
    });

    btnMinus.addEventListener('click', () => {
        count--;
        updateUI();
    });

    btnReset.addEventListener('click', () => {
        count = 0;
        updateUI();
    });

    // --- Montaggio DOM ---
    container.append(title, btnMinus, display, btnPlus, btnReset);
    root.appendChild(container);
    
    // Inizializzazione colore iniziale
    updateUI();
});