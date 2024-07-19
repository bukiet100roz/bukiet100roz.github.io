document.addEventListener('DOMContentLoaded', () => {
    const points = document.querySelectorAll('#pointsList li');
    let currentPoint = 0;


    document.getElementById('nextPointBtn').addEventListener('click', () => {
        if (currentPoint < points.length) {
            points[currentPoint].style.display = 'block';
            currentPoint++;
        } else {
            alert('Dobranoc kochanie!');
        }
    });
});
