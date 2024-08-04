document.addEventListener('DOMContentLoaded', function() {
    const ageForm = document.getElementById('age-form');
    const resultDiv = document.getElementById('result');

    ageForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const day = document.getElementById('day').value;
        const month = document.getElementById('month').value;
        const year = document.getElementById('year').value;

        if (day && month && year) {
            const birthDate = new Date(year, month - 1, day);
            const age = calculateAge(birthDate);
            resultDiv.textContent = `You are ${age} years old.`;
        } else {
            resultDiv.textContent = 'Please enter a valid date of birth.';
        }
    });

    function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
});
