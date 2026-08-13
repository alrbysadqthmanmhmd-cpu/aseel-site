export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      {/* الهيدر الرئيسي */}
      <header className="text-center py-6">
        <h1 className="text-2xl font-bold">اصيل العربي</h1>
        <p className="text-slate-400 text-sm">مطور ويب ومصمم واجهات</p>
      </header>

      {/* قسم الخدمات */}
      <section id="services" className="py-8 border-t border-slate-700">
        <h3 className="text-xl font-bold text-center mb-6">خدماتي</h3>
        <div className="space-y-4 max-w-md mx-auto">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <h4 className="text-md font-bold mb-1 text-white">تطوير المواقع الإلكترونية</h4>
            <p className="text-slate-400 text-xs">بناء مواقع سريعة ومتجاوبة باستخدام Next.js و TailWind</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <h4 className="text-md font-bold mb-1 text-white">تصميم الواجهات UI/UX</h4>
            <p className="text-slate-400 text-xs">تصميم واجهات حديثة وسهلة الاستخدام</p>
          </div>
        </div>
      </section>

      {/* زر تواصل معنا */}
      <div className="text-center my-6">
        <a 
          href="https://wa.me/967777069302" 
          target="_blank" 
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full text-sm transition-all"
        >
          تواصل معي عبر واتساب
        </a>
      </div>

      {/* التذييل */}
      <footer id="contact" className="text-center py-6 border-t border-slate-700">
        <p className="text-slate-400 text-xs">جميع الحقوق محفوظة © 2026</p>
      </footer>
    </div>
  );
}
