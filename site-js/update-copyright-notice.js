document.addEventListener('DOMContentLoaded', function() {
    function updateCopyRight() {
        const now = new Date();
        const durationStr = [yearText, monthText].filter(Boolean).join(', ');

        document.getElementById('duration').textContent = durationStr;
    }

    updateCopyRight();
    setInterval(updateCopyright, 86400000); // 1000 * 60 * 60 * 24
});