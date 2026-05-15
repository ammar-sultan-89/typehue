export default function Introduction() {
  return (
    <section id="getting-started" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        مقدمة
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-[var(--display-weight,900)] mb-8 leading-[var(--display-line-height,1.1)] tracking-[var(--display-letter-spacing,-0.02em)] text-text">
        البداية
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-text-muted mb-8 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          TypeHue هي أداة مجانية ومفتوحة المصدر لاختبار ثيمات الخطوط والألوان في الوقت الفعلي، مصممة خصيصاً للمطورين والمصممين الذين يحتاجون لرؤية خياراتهم في سياق يحاكي بيئة العمل الحقيقية (Production context).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-surface border border-border rounded-2xl">
            <h3 className="font-display font-bold text-lg mb-2 text-text font-[var(--display-weight,700)]">لماذا TypeHue؟</h3>
            <p className="text-text-muted text-sm leading-relaxed font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
              يجب اختبار الخطوط في سياقات تحاكي الواقع مع تخطيطات حقيقية، ولوحات ألوان فعلية. تم بناء TypeHue نتيجة الإحباط من الأدوات التي لا تراعي الطباعة العربية وتنسيقات RTL.
            </p>
          </div>
          <div className="p-6 bg-surface border border-border rounded-2xl">
            <h3 className="font-display font-bold text-lg mb-2 text-text font-[var(--display-weight,700)]">مفتوح ومجاني</h3>
            <p className="text-text-muted text-sm leading-relaxed font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
              TypeHue هو مشروع مفتوح المصدر يهدف إلى جعل الجسر بين التصميم والكود سلساً قدر الإمكان.
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 text-text font-[var(--display-weight,700)] tracking-[var(--display-letter-spacing,-0.01em)]">التثبيت</h2>
        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          لتشغيل TypeHue محلياً وبدء التجربة، اتبع هذه الخطوات:
        </p>

        <div className="bg-surface border border-border rounded-xl overflow-hidden mb-10">
          <div className="bg-bg/50 px-4 py-2 border-b border-border flex justify-between items-center">
            <span className="text-[10px] font-mono text-text-muted">Terminal</span>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto text-text" dir="ltr">
            <code>{`# Clone the repository
git clone https://github.com/ammar-sultan-89/typehue.git

# Navigate to the project
cd typehue

# Install dependencies
npm install

# Start the development server
npm run dev`}</code>
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 text-text font-[var(--display-weight,700)] tracking-[var(--display-letter-spacing,-0.01em)]">لوحة الإعدادات</h2>
        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          الشريط الجانبي هو مركز التحكم الخاص بك. كل تغيير تجريه هناك ينعكس فوراً في منطقة المعاينة عبر متغيرات CSS. يتيح لك هذا اختبار:
        </p>
        <ul className="space-y-3 mb-10 list-disc list-inside text-text-muted font-body font-[var(--body-weight,400)]">
          <li>مطابقة الخطوط المباشرة (Display + Body)</li>
          <li>التباين وسهولة القراءة عبر لوحات ألوان مختلفة</li>
          <li>سلامة تخطيط RTL للغة العربية وغيرها من اللغات</li>
          <li>تعديلات التباعد والتسلسل الهرمي للطباعة</li>
        </ul>

        <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl flex gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <h4 className="font-display font-bold text-primary mb-1 text-sm font-[var(--display-weight,700)]">نصيحة سريعة</h4>
            <p className="text-text-muted text-sm leading-relaxed font-body font-[var(--body-weight,400)]">
              استخدم زر التبديل العشوائي (Randomize) في اللوحة لاكتشاف مجموعات غير متوقعة ولكنها متناغمة من الخطوط والألوان بسرعة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
