document.getElementById('rateButton').addEventListener('click', function() {
    var rating = prompt("You are an exquisite masterpiece, a true embodiment of beauty and grace!");
    if (rating != null && rating >= 1 && rating <= 101) {
        alert(
            "Your beauty shines from within and radiates out to captivate the world. Remember, true beauty is a reflection of your confidence, kindness, and unique spirit.   YOUR 10 OUT OF 10!!!");
    } else {
        alert("BE CONFIDENT!!!");
    }
});