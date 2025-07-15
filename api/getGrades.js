// /api/getGrades.js

// هذه الدالة ستعمل على خوادم Vercel
export default async function handler(request, response) {
    // استخراج الرقم الجامعي من الرابط الذي طلبه المتصفح
    // مثلاً: /api/getGrades?studentId=12345
    const { studentId } = request.query;

    if (!studentId) {
        return response.status(400).json({ error: 'الرقم الجامعي مطلوب' });
    }

    // --- معلومات الاتصال - التوكين سيتم جلبه من متغيرات البيئة الآمنة ---
    const GITHUB_USERNAME = 'alshami2024';
    const GITHUB_REPO = 'alshami';
    const GITHUB_FILE_PATH = 'grades.json';
    // هذا هو الجزء الآمن: Vercel سيزودنا بالتوكين من متغيرات البيئة
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; 
    
    if (!GITHUB_TOKEN) {
         return response.status(500).json({ error: 'خطأ في إعدادات الخادم.' });
    }

    const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;

    try {
        const githubResponse = await fetch(url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!githubResponse.ok) {
            throw new Error('فشل الوصول إلى قاعدة البيانات.');
        }

        const fileData = await githubResponse.json();
        const decodedContent = Buffer.from(fileData.content, 'base64').toString('utf-8');
        const allData = JSON.parse(decodedContent);
        
        const students = JSON.parse(allData.myapp_students || '[]');
        const foundStudent = students.find(student => student.id === studentId);

        if (foundStudent) {
            // أرسل بيانات الطالب الذي تم العثور عليه فقط
            return response.status(200).json(foundStudent);
        } else {
            // أرسل رسالة خطأ إذا لم يتم العثور على الطالب
            return response.status(404).json({ error: 'لم يتم العثور على طالب بهذا الرقم.' });
        }

    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'حدث خطأ أثناء جلب البيانات.' });
    }
}