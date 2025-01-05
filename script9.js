const accessCodes = {
    "5A2HVQ04": "إبراهيم عارف احمد ناجي الهادي",
    "9ZVZSONQ": "احمد علي احمد إسماعيل",
    "4YUES3VE": "احمد ناجي احمد الرباحي",
    "W7KSVVEX": "اسماعيل عبدالله احمد سعيد",
    "NUROQKCX": "بدر جبر سعيد احمد الجماعي",
    "U2OH6PHJ": "جبر صالح احمد حسين الثللاثي",
    "8C1GALRS": "حافظ حسين محسن ناجي المدحجي",
    "KGVGM1EG": "زامل فارس علي مسعد الصيادي",
    "5TQHHEJN": "صدام عبده ناجي احمد الحمري",
    "EEO957TM": "طارق زياد مسعد الصيادي",
    "IPSO469H": "عبدالرحيم سعيد محمد مثنى الجماعي",
    "B37UTP62": "عبدالسلام عارف عبدالخالق سعد المعرشي",
    "U08YNZ22": "عبدالحميد وضاح ناجي محمد الحيدري",
    "1VE2W5L6": "عرفات قايد محمد الصيادي",
    "2ZG05M07": "عزالدين محمد ناجي الحمري",
    "GYFVKUFU": "عمرو عبدالغني عباد احمد الورد",
    "W953D97A": "ماجد حسين مقبل صلاح",
    "O57FFIT1": "ماجد صالح منصر هادي المنتصر",
    "86XHMD1K": "ماهر ناجي محمد الحيدري",
    "V0D303NC": "مبارك محمد احمد الغرباني",
    "QPAO8B9C": "محمد سعيد مثنى منصر الحميدي",
    "P4R4OWEH": "محمد علي محمد سعيد",
    "JJZ7DAWV": "محمد مختار حسين صالح السريحي",
    "BI3G8RM1": "محمد منصور علي منصر المنتصر",
    "P9YUUC1W": "محمد ياسر محمد برقوق",
    "P28O75XP": "محمود احمد محمد احمد الكنديش",
    "2CBFTD79": "مختار نصر صالح صالح الفاردي",
    "36FC1LQF": "مشعل عبده طاهر صالح القحيف",
    "JYFIJJ7B": "ناديه إسماعيل علي مقبل عبيد",
    "44GJAM0R": "نباء محمد احمد سعيد الرياشي",
    "9WF383E6": "نعيم صدام احمد عبدالله المقبلي",
    "6LAQMX87": "نوالدين عبده طاهر ناجي الطاهش",
    "V4K5ZITR": "يزيد عبداللطيف ناصر مسعد الصوفي",
    "MEF7PQ7X": "يونس ناجي حسين الجميل",
    "JLT2TQIL": "عدنان أنور مسعد علي العودي",
    "RCW0N9OJ": "برهان شايف علي محمد الجنيد"
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
