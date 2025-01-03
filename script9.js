const accessCodes = {
    "5A2HVQ04": "إبراهيم عارف احمد ناجي الهادي",
    "5ZFPVVKC": "ابتهال نصر احمد الحمري",
    "2DDMZ2JP": "احمد جمال احمد صالح الظاهري",
    "U160PZLE": "احمد صلاح مسعد النامس",
    "9ZVZSONQ": "احمد علي احمد إسماعيل",
    "TQMX2W8A": "احمد مانع صالح محمد الغبيري",
    "4YUES3VE": "احمد ناجي احمد الرباحي",
    "W7KSVVEX": "اسماعيل عبدالله احمد سعيد",
    "WNFL3L5L": "انور احمد حسين عمود",
    "NUROQKCX": "بدر جبر سعيد احمد الجماعي",
    "GP3AM3BG": "بسام احمد محمد الجحدري",
    "G9825N7C": "بكيل ناجي محسن الشامي",
    "U2OH6PHJ": "جبر صالح احمد حسين الثللاثي",
    "8C1GALRS": "حافظ حسين محسن ناجي المدحجي",
    "1N380L8L": "حربي عامر حسين محمد راشد",
    "XISX7RSB": "خلود عبدالرحمن قاسم مثنى الخلقي",
    "KGVGM1EG": "زامل فارس علي مسعد الصيادي",
    "985B46QZ": "زياد مسعد محمد الذلحاسي",
    "2LQPHVW7": "ساره بلال يحيى الغرباني",
    "B7B3SI1K": "سام مصطفى احمد صالح حمرن",
    "51NQEB6X": "سمر خالد احمد علي معقب",
    "5TQHHEJN": "صدام عبده ناجي احمد الحمري",
    "2VZ06IWR": "صدام محمد حسن العولقي",
    "0IOEWANE": "صدام مسعد حسن احمد جابر",
    "EYDTQH8H": "صلاح مصلح محسن محمد فاضل",
    "EEO957TM": "طارق زياد مسعد الصيادي",
    "648QR3WF": "طارق محمد يحيى علي الفقية",
    "DT7EMSD2": "عبد الحميد موسى عبد الحميد العمري",
    "N2CLZ0UP": "عبدالحكيم محسن صالح المحقني",
    "TJSYSIVO": "عبدالرحمن احمد صالح محمد الأسد",
    "IPSO469H": "عبدالرحيم سعيد محمد مثنى الجماعي",
    "B37UTP62": "عبدالسلام عارف عبدالخالق سعد المعرشي",
    "U58YNZ22": "عبدالعزيز مسعد عباد الورد",
    "3J2NF722": "عبدالغني عبده صالح مسعد الحيقي",
    "I41UNZSH": "عبدالكريم مسعد عبدالله مسعد الظاهري",
    "1VE2W5L6": "عرفات قايد محمد الصيادي",
    "2ZG05M07": "عزالدين محمد ناجي الحمري",
    "Y83A81VU": "علي ثابت حسن الاهدل",
    "2MKTTO03": "علي عبده قايد سعيد",
    "GYFVKUFU": "عمرو عبدالغني عباد احمد الورد",
    "U3X7QOX3": "غيداء صادق علي محمد السالمي",
    "W953D97A": "ماجد حسين مقبل صلاح",
    "O57FFIT1": "ماجد صالح منصر هادي المنتصر",
    "86XHMD1K": "ماهر ناجي محمد الحيدري",
    "V0D303NC": "مبارك محمد احمد الغرباني",
    "QPAO8B9C": "محمد سعيد مثنى منصر الحميدي",
    "LQBP47F1": "محمد صالح مثنى الحجاجي",
    "P4R4OWEH": "محمد علي محمد سعيد",
    "0WFO859Y": "محمد لطف محمد محسن وجيةالدين",
    "2KY1O2EZ": "محمد محمود سعيد الطارق",
    "JJZ7DAWV": "محمد مختار حسين صالح السريحي",
    "BI3G8RM1": "محمد منصور علي منصر المنتصر",
    "XGH79S26": "محمد ناصر سعيد محمد محسن",
    "7Z2O6F01": "محمد نبيل محسن عبدالله الصيادي",
    "P9YUUC1W": "محمد ياسر محمد برقوق",
    "P28O75XP": "محمود احمد محمد احمد الكنديش",
    "2CBFTD79": "مختار نصر صالح صالح الفاردي",
    "ZL7Q4WPS": "مشايخ وليد مسعد ناصر العامري",
    "36FC1LQF": "مشعل عبده طاهر صالح القحيف",
    "9VHM26QF": "ناجي نصر مسعد عبدالله",
    "JYFIJJ7B": "ناديه إسماعيل علي مقبل عبيد",
    "44GJAM0R": "نباء محمد احمد سعيد الرياشي",
    "UI2GMY1W": "نجوى منصور صالح عبدالله حيدرة",
    "9WF383E6": "نعيم صدام احمد عبدالله المقبلي",
    "6LAQMX87": "نوالدين عبده طاهر ناجي الطاهش",
    "AWJJB51Z": "هديل توفيق احمد محمد الجماعي",
    "W8AKWB85": "هشام مسعد عبدالله مسعد الظاهري",
    "2PX5WC9F": "هلا سعيد ناجي مصلح ياسين",
    "N5193Y8Q": "هناوي اكرم صالح احمد الشعيبي",
    "WO93YPOB": "يحيى حمود عبدالله الطير",
    "V4K5ZITR": "يزيد عبداللطيف ناصر مسعد الصوفي",
    "O1212OFV": "يونس احمد علي الشلبي",
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
