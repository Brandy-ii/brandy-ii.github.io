document.addEventListener('DOMContentLoaded', function() {
    function updateDuration() {
        const startDate = new Date('2024-01-01');
        const now = new Date();
        const months = (now.getFullYear() - startDate.getFullYear()) * 12 + now.getMonth() - startDate.getMonth();
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        const yearText = years ? `${years} year${years > 1 ? 's' : ''}` : '';
        const monthText = remainingMonths ? `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : '';
        const durationStr = [yearText, monthText].filter(Boolean).join(', ');

        document.getElementById('duration').textContent = durationStr;
    }

    updateDuration();
    setInterval(updateDuration, 86400000); // 1000 * 60 * 60 * 24
});
