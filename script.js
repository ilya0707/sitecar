const cars = document.querySelectorAll('.car');

let index = 0;

function showCar(index) {
    cars.forEach((car, idx) => {
        car.style.display = idx === index ? 'block' : 'none';
    });
}

showCar(index);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        index = index === cars.length - 1 ? 0 : index + 1;
        showCar(index);
    } else if (e.key === 'ArrowLeft') {
        index = index === 0 ? cars.length - 1 : index - 1;
        showCar(index);
    }
});
