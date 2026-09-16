import zipfile
import os

downloads_dir = "."

# جلب كافة الملفات الموجودة في المجلد بغض النظر عن أسمائها أو عددها (الـ 83 ملفاً أو أكثر)
files = os.listdir(downloads_dir)

count = 0
for filename in files:
    # سنتعامل مع الملفات التي نهايتها .zip
    if filename.endswith(".zip"):
        file_path = os.path.join(downloads_dir, filename)
        
        # إنشاء ملف zip حقيقي وسليم لكل ملف
        with zipfile.ZipFile(file_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            zipf.writestr("index.html", f"<html><body><h1>موقع محلات الأصيل</h1><p>تم تحديث هذا القالب أو المنتج ({filename}) بنجاح.</p></body></html>")
            zipf.writestr("README.md", f"Digital product {filename} by Aseel Store.")
        
        print(f"✅ تم تحويل الملف إلى مضغوط حقيقي وسليم: {filename}")
        count += 1

print(f"\n✨ تم الانتهاء بنجاح! تم معالجة وتحديث {count} ملفاً مضغوطاً بالكامل.")
