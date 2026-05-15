export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        تحت الغطاء
      </div>

      <h1 className="text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">كيف يعمل</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-10 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          تم بناء TypeHue فوق <span className="text-text font-bold">React</span> و <span className="text-text font-bold">Vite</span>، لكن السحر الحقيقي يكمن في الطريقة التي نربط بها حالة React بقدرات التنسيق الأصلية للمتصفح.
        </p>

        <h3 className="text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">تدفق البيانات</h3>
        
        <div className="p-8 bg-surface border border-border rounded-2xl mb-12 flex flex-col items-center">
          <div className="max-w-md w-full">
            <svg viewBox="0 0 400 200" className="w-full h-auto">
              {/* Nodes */}
              <rect x="140" y="20" width="120" height="40" rx="8" fill="var(--color-primary)" />
              <text x="200" y="45" textAnchor="middle" fill="var(--color-primary-fg)" fontSize="12" fontWeight="bold">لوحة الإعدادات</text>
              
              <rect x="140" y="80" width="120" height="40" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
              <text x="200" y="105" textAnchor="middle" fill="var(--color-text)" fontSize="12" fontWeight="bold">ThemeProvider</text>
              
              <rect x="40" y="140" width="120" height="40" rx="8" fill="var(--color-bg)" stroke="var(--color-primary)" />
              <text x="100" y="165" textAnchor="middle" fill="var(--color-text)" fontSize="10">متغيرات CSS (:root)</text>
              
              <rect x="240" y="140" width="120" height="40" rx="8" fill="var(--color-bg)" stroke="var(--color-secondary)" />
              <text x="300" y="165" textAnchor="middle" fill="var(--color-text)" fontSize="10">خطاف useThemeColors</text>
              
              {/* Arrows */}
              <path d="M200 60 L200 80" stroke="var(--color-text-muted)" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M160 120 L100 140" stroke="var(--color-text-muted)" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M240 120 L300 140" stroke="var(--color-text-muted)" fill="none" markerEnd="url(#arrowhead)" />
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-text-muted)" />
                </marker>
              </defs>
            </svg>
          </div>
          <p className="text-xs text-text-muted mt-6 text-center italic font-body font-[var(--body-weight,400)]">
            تدفق بيانات مبسط من تفاعل المستخدم إلى التطبيق في DOM.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div>
            <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">1. ThemeProvider ومتغيرات CSS</h4>
            <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
              يعمل <code className="text-primary">ThemeProvider</code> كمصدر وحيد للحقيقة. عندما يقوم المستخدم بتعديل إعداد ما، يقوم المزود بتحديث حالته الداخلية ويدفع تلك القيم فوراً إلى <code className="text-primary">:root</code> كمتغيرات CSS. يضمن هذا أن 99% من تنسيقاتك يتم تحديثها عبر محرك CSS الأصلي للمتصفح، وهو أمر فعال للغاية.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">2. خطاف useThemeColors وتفاعل الرسوم البيانية</h4>
            <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
              لا تعمل متغيرات CSS القياسية للعناصر غير التابعة لـ DOM مثل رسوم SVG البيانية. لهذه الحالات، نستخدم خطاف <code className="text-primary">useThemeColors</code> المخصص. يستخدم <code className="text-text font-bold">MutationObserver</code> على عنصر الجذر لاكتشاف تغييرات التنسيق وتوفير قيم hex المحلولة مباشرة لمكونات React.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">3. تخزين الضبط التلقائي (Memoization)</h4>
            <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
              لمنع حلقات التكرار اللانهائية أثناء تغييرات الألوان السريعة، يتم تخزين (Memoize) منطق الضبط التلقائي. يؤدي تغيير واحد في اللون الأساسي إلى إطلاق دورة عرض واحدة بالضبط حيث يتم إعادة حساب جميع المتغيرات المشتقة وتطبيقها دفعة واحدة.
            </p>
          </div>
        </div>

        <div className="p-6 bg-surface border border-border rounded-2xl">
          <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">تفاصيل تنفيذ RTL</h4>
          <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)] mb-4">
            يتم تحقيق دعم RTL باستخدام مزيج من سمة <code className="text-primary">dir="rtl"</code> وأدوات الخصائص المنطقية في Tailwind (مثل <code className="text-primary">ms-*</code> و <code className="text-primary">pe-*</code>).
          </p>
          <div className="bg-bg p-4 rounded-lg font-mono text-xs text-text-muted border border-border" dir="ltr">
            {`// In App.tsx
<div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
  <ActiveLayout />
</div>`}
          </div>
        </div>
      </div>
    </section>
  );
}
