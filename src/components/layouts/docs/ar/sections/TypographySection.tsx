export default function TypographySection() {
  return (
    <section id="typography" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,400)]">
        النظام البصري
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">الخطوط والطباعة</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-10 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          يستخدم TypeHue نظاماً <span className="text-text font-bold">مزدوج الخطوط (Dual-Font System)</span>. من خلال فصل خيارات الخطوط الخاصة بك إلى خط <span className="italic">للعرض (Display)</span> للعناوين، وخط <span className="italic">للمتن (Body)</span> لسهولة القراءة، يمكنك إنشاء تسلسلات هرمية بصرية متطورة.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-bg border border-border rounded-2xl shadow-sm">
            <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-4 font-body font-[var(--body-weight,900)]">عينة خط العرض</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-[var(--display-weight,900)] leading-[var(--display-line-height,1.1)] tracking-[var(--display-letter-spacing,-0.02em)] text-text mb-4">
              الطباعة الحديثة ديناميكية
            </h2>
            <p className="text-xs text-text-muted font-mono" dir="ltr">
              Weight: var(--display-weight) <br/>
              Leading: var(--display-line-height)
            </p>
          </div>
          <div className="p-8 bg-bg border border-border rounded-2xl shadow-sm">
            <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-4 font-body font-[var(--body-weight,900)]">عينة خط المتن</span>
            <p className="font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)] text-text">
              خط المتن هو العمود الفقري لتصميمك. يجب أن يكون واضحاً، متباعداً بشكل جيد، ومتوازناً للقراءة الطويلة على أي جهاز.
            </p>
            <p className="text-xs text-text-muted font-mono mt-4" dir="ltr">
              Weight: var(--body-weight) <br/>
              Leading: var(--body-line-height)
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">دعم اللغة العربية وتنسيق RTL</h3>
        <p className="text-text-muted mb-8 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          تم بناء TypeHue من الألف إلى الياء لدعم تخطيطات اليمين إلى اليسار (RTL). نحن لا نقوم فقط بـ "قلب" النص؛ بل نضمن بقاء التخطيط بأكمله سليماً منطقياً باستخدام ممارسات CSS و Tailwind الحديثة.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { 
              title: 'الخصائص المنطقية', 
              desc: 'نستخدم الأدوات المنطقية مثل ms-* (margin-start) و pe-* (padding-end) بدلاً من القيم الثابتة يميناً ويساراً.',
              code: 'ms-4 pe-8'
            },
            { 
              title: 'المحاذاة و Flex', 
              desc: 'محاذاة النص وتحديد المواقع باستخدام Flex تستخدم الكلمات المفتاحية start/end لتستجيب لاتجاه المستند.',
              code: 'text-start items-end'
            },
            { 
              title: 'الإزاحات الاتجاهية', 
              desc: 'تستخدم المواقع المطلقة inset-s-* (start) و inset-e-* (end) للحفاظ على المواقع النسبية.',
              code: 'inset-s-0'
            },
            { 
              title: 'الزوايا المستديرة', 
              desc: 'يتم تقريب الحدود باستخدام زوايا البداية/النهاية المنطقية للحفاظ على شكل التصميم عند قلبه.',
              code: 'rounded-s-2xl'
            },
            { 
              title: 'الأصناف المشروطة', 
              desc: 'يتم تطبيق تجاوزات خاصة باللغة أحياناً باستخدام تعبيرات مشروطة بناءً على اللغة الحالية.',
              code: "locale === 'ar' ? '...' : '...'"
            },
            { 
              title: 'تصفية الخطوط', 
              desc: 'يقوم النظام تلقائياً بتصفية الخطوط التي تدعم النص العربي عند تفعيل وضع RTL.',
              code: 'findFont(family).subsets.includes("arabic")'
            }
          ].map((item) => (
            <div key={item.title} className="p-5 bg-surface border border-border rounded-xl">
              <h4 className="font-display font-bold text-sm text-text mb-2 font-[var(--display-weight,700)]">{item.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed mb-3 font-body font-[var(--body-weight,400)]">{item.desc}</p>
              <code className="text-[10px] font-mono bg-bg px-2 py-1 rounded border border-border text-primary" dir="ltr">{item.code}</code>
            </div>
          ))}
        </div>

        <div className="p-6 bg-surface border border-border rounded-2xl border-s-4 border-s-primary">
          <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">معالجة RTL دقيقة</h4>
          <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
            من خلال الالتزام الصارم بالخصائص المنطقية، تظل تخطيطات TypeHue قوية وقابلة للتنبؤ. هذا النهج يزيل "تكسر التخطيط" الشائع الذي يحدث عند قلب التصميمات يدوياً من LTR إلى RTL.
          </p>
        </div>
      </div>
    </section>
  );
}
