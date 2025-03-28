// بيانات الجدول المستخرجة
const data = [
  [],
  [],
  [],
  [],
  [],
  [
    "رقم الطالب",
    "الرقم الجامعي",
    "الاسم",
    "نصفي ",
    "تكليف ",
    "حضور",
    "المجموع "
  ],
  [
    1,
    "2024_3_5_0002",
    "جاد سيف احمد المنتصر",
    17,
    10,
    10,
    37
  ],
  [
    2,
    "2024_3_5_0003",
    "جميلة جمال صالح مسعدالجشوبي",
    16,
    10,
    10,
    36
  ],
  [
    3,
    "2024_3_5_0004",
    "حنان عبده مسعد احمد العمري",
    15,
    10,
    10,
    35
  ],
  [
    4,
    "2024_3_5_0005",
    "خديجة ناصر عبدالله صالح النجار",
    15,
    10,
    10,
    35
  ],
  [
    5,
    "2024_3_5_0006",
    "ذكريات محسن عبدالله الجرموزي",
    15,
    10,
    10,
    35
  ],
  [
    6,
    "2024_3_5_0007",
    "سميحة احمد قايد الجشوبي",
    16,
    10,
    10,
    36
  ],
  [
    7,
    "2024_3_5_0008",
    "عبده صالح مثنى عبدالقوي الحقب",
    17,
    10,
    10,
    37
  ],
  [
    8,
    "2024_3_5_0009",
    "علي عبدالحميد عبدالله احمد الزخمي",
    14,
    10,
    10,
    34
  ],
  [
    9,
    "2024_3_5_0010",
    "محسن علي صالح علي الحقب",
    0,
    0,
    0,
    0
  ],
  [
    10,
    "2024_3_5_0011",
    "هلا ناجي احمد صهبان",
    15,
    10,
    10,
    35
  ],
  [
    11,
    "2024_3_5_0012",
    "هنادي ناجي  احمد صهبان",
    0,
    0,
    0,
    0
  ],
  [
    12
  ],
  [
    1
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

// دالة البحث داخل البيانات
function search(keyword) {
    return data.filter(row => {
        return row.some(cell =>
            cell && cell.toString().toUpperCase().includes(keyword.toUpperCase())
        );
    });
};