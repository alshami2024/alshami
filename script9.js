const accessCodes = {
    "5A2HVQ04": "ذكريات محسن عبدالله الجرموزي",
    "9ZVZSONQ": "حنان عبده مسعد احمد العمري",
    "4YUES3VE": "جميلة جمال صالح مسعدالجشوبي",
    "W7KSVVEX": "سميحة احمد قايد الجشوبي",
    "NUROQKCX": "علي عبدالحميد عبدالله احمد الزخمي",
};


        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('loginForm');
            const errorMessage = document.getElementById('errorMessage');

            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const inputCode = document.getElementById('accessCode').value.trim();

                if (accessCodes[inputCode]) {
    const studentName = accessCodes[inputCode];
    errorMessage.textContent = '';
    localStorage.setItem('studentName', studentName); // تخزين اسم الطالب
    alert(`مرحبًا ${studentName}! تم التحقق بنجاح.`);
    window.location.href = 'HistoryPhilosophyLaw.html'; // الانتقال إلى صفحة الامتحان
} else {
    errorMessage.textContent = 'رمز الدخول غير صحيح. حاول مرة أخرى.';
}

            });
        });
