import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { useTranslation } from '@/i18n';
import { useThemeColors } from '@/hooks/useThemeColors';

// Mock Data
const BAR_DATA = [
  { month: 'Jan', analogous: 400, triadic: 240, split: 200 },
  { month: 'Feb', analogous: 300, triadic: 139, split: 221 },
  { month: 'Mar', analogous: 200, triadic: 540, split: 229 },
  { month: 'Apr', analogous: 278, triadic: 390, split: 200 },
  { month: 'May', analogous: 189, triadic: 480, split: 218 },
  { month: 'Jun', analogous: 239, triadic: 380, split: 250 },
];

const LINE_DATA = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  users: Math.floor(Math.random() * 500) + 1000,
  exports: Math.floor(Math.random() * 200) + 300,
}));
const AREA_DATA = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  lightMode: Math.floor(Math.random() * 100) + 100,
  darkMode: Math.floor(Math.random() * 150) + 250,
}));

const PIE_DATA = [
  { name: 'Primary', value: 400 },
  { name: 'Secondary', value: 300 },
  { name: 'Tertiary', value: 300 },
];



export function Charts() {
  const { t, locale } = useTranslation();
  const isRtl = locale === 'ar';
  const colors = useThemeColors();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-bg border border-border p-6 rounded-[2rem] shadow-sm">
        <h3 className="text-lg font-bold text-text mb-6">{t('dashboard.charts.generations_by_type')}</h3>
        <div className="h-[300px] w-full" dir='ltr'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={BAR_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={colors.border} opacity={0.5} />
              <XAxis reversed={isRtl} dataKey="month" stroke={colors.muted} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis orientation={isRtl ? 'right' : 'left'} stroke={colors.muted} fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: colors.primary, borderRadius: '12px', border: 'none', color: colors.primaryFg }}
                itemStyle={{ color: colors.primaryFg }}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '20px' }} />
              <Bar name={t('dashboard.charts.analogous')} dataKey="analogous" fill={colors.primary} radius={[4, 4, 0, 0]} />
              <Bar name={t('dashboard.charts.triadic')} dataKey="triadic" fill={colors.secondary} radius={[4, 4, 0, 0]} />
              <Bar name={t('dashboard.charts.split_complementary')} dataKey="split" fill={colors.tertiary} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-bg border border-border p-6 rounded-[2rem] shadow-sm">
        <h3 className="text-lg font-bold text-text mb-6">{t('dashboard.charts.daily_active_users')}</h3>
        <div className="h-[300px] w-full" dir='ltr'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={LINE_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={colors.border} opacity={0.5} />
              <XAxis reversed={isRtl} dataKey="day" stroke={colors.muted} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis orientation={isRtl ? 'right' : 'left'} stroke={colors.muted} fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '20px' }} />
              <Line name={t('dashboard.charts.active_users')} type="monotone" dataKey="users" stroke={colors.primary} strokeWidth={3} dot={false} />
              <Line name={t('dashboard.charts.exports')} type="monotone" dataKey="exports" stroke={colors.secondary} strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-bg border border-border p-6 rounded-[2rem] shadow-sm">
        <h3 className="text-lg font-bold text-text mb-6">{t('dashboard.charts.palette_distribution')}</h3>
        <div className="h-[300px] w-full flex flex-col md:flex-row items-center justify-around">
          <div className="h-full w-full md:w-1/2" dir='ltr'>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  <Cell fill={colors.primary} stroke={colors.border} />
                  <Cell fill={colors.secondary} stroke={colors.border} />
                  <Cell fill={colors.tertiary} stroke={colors.border} />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            {[
              { name: t('dashboard.charts.primary'), color: colors.primary, val: '40%' },
              { name: t('dashboard.charts.secondary'), color: colors.secondary, val: '30%' },
              { name: t('dashboard.charts.tertiary'), color: colors.tertiary, val: '30%' }
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-bold text-text">{item.name}</span>
                </div>
                <span className="text-sm font-black text-text-muted">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Area Chart */}

      <div className="bg-bg border border-border p-6 rounded-[2rem] shadow-sm">
        <h3 className="text-lg font-bold text-text mb-6">{t('dashboard.charts.light_vs_dark')}</h3>
        <div className="h-[300px] w-full" dir='ltr'>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={AREA_DATA}>
              <defs>
                <linearGradient id="colorLightMode" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.primary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={colors.primary} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDarkMode" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.secondary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={colors.secondary} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={colors.border} opacity={0.5} />
              <XAxis reversed={isRtl} dataKey="day" stroke={colors.muted} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis orientation={isRtl ? 'right' : 'left'} stroke={colors.muted} fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '20px' }} />
              <Area type="monotone" name={t('dashboard.charts.light_mode')} dataKey="lightMode" stroke={colors.primary} fillOpacity={1} fill="url(#colorLightMode)" />
              <Area type="monotone" name={t('dashboard.charts.dark_mode')} dataKey="darkMode" stroke={colors.secondary} fillOpacity={1} fill="url(#colorDarkMode)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
