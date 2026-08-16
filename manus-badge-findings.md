# Manus badge findings

- في النسخة المنشورة يظهر عنصر `Made with Manus` أسفل يمين الصفحة.
- الشارة ليست داخل React root ولا تظهر في ملفات الواجهة.
- DOM المنشور يحتوي على عنصر `MANUS-CONTENT-ROOT` مع `shadowRoot`، وتظهر الشارة من طبقة الاستضافة داخل هذا الجذر.
- صفحة الاستضافة تضيف كود إعداد باسم `__manus_space_editor_info` وقيمته الحالية تتضمن `hideBadge: false`.
- لذلك إزالة النص من Home.tsx أو index.css لن تزيل الشارة؛ المطلوب تفعيل إعداد الاستضافة `hideBadge` أو تغيير إعداد النشر المقابل.
