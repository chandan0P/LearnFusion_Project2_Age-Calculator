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
            const ageDetails = calculateAge(birthDate);
            resultDiv.innerHTML = `You are ${ageDetails.years} years, ${ageDetails.months} months, and ${ageDetails.days} days old.`;
        } else {
            resultDiv.textContent = 'Please enter a valid date of birth.';
        }
    });

    function calculateAge(birthDate) {
        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }
});
