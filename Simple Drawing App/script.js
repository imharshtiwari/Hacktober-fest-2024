const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Default brush settings
let painting = false;
let brushColor = '#000000';
let brushSize = 5;

function startPosition(e) {
    painting = true;
    draw(e);  // Draw at initial click
}

function endPosition() {
    painting = false;
    ctx.beginPath();  // Stop drawing
}

function draw(e) {
    if (!painting) return;
    
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';  // Smooth edges of lines
    ctx.strokeStyle = brushColor;

    // Get mouse position relative to canvas
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);  // Draw line to new position
    ctx.stroke();
    ctx.beginPath();  // Start a new path
    ctx.moveTo(x, y);  // Move to the new position without drawing
}

// Event listeners for mouse actions
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

// Update brush color
document.getElementById('color').addEventListener('input', (e) => {
    brushColor = e.target.value;
});

// Update brush size
document.getElementById('brushSize').addEventListener('input', (e) => {
    brushSize = e.target.value;
});

// Clear the canvas
document.getElementById('clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
