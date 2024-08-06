document.addEventListener("DOMContentLoaded", function() {
    const inputGender = document.getElementById('inputGender');
    const sendGender = document.getElementById('sendGender');
    const cardsContainer = document.getElementById('cardsContainer');

    sendGender.addEventListener('click', () => {
        let gender = inputGender.value.trim();
        if (gender) {
            $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/babynames?gender=' + gender,
                headers: { 'X-Api-Key': 'CXeKaOnUZR8vsQ7u5+rfxA==4PHm8Lyf544VomE1' },
                contentType: 'application/json',
                success: function(result) {
                    console.log(result);
                    cardsContainer.innerHTML = ''; // Clear previous results
                    result.forEach(name => {
                        const card = document.createElement('div');
                        card.className = 'card';

                        const img = document.createElement('img');
                        img.src = './img/baby_logo.jpg'; // Placeholder image URL
                        img.alt = name;

                        const nameText = document.createElement('p');
                        nameText.textContent = name;

                        card.appendChild(img);
                        card.appendChild(nameText);
                        cardsContainer.appendChild(card);
                    });
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }
            });
        } else {
            alert('Please enter a gender');
        }
    });
});
