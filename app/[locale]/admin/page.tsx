import StatsPanel from '@/components/admin/StatsPanel';
import UploadForm from '@/components/admin/UploadForm';
import { loadAllProjects } from '@/lib/unifiedDataService';

export default async function AdminPage(){
  // 🚀 DYNAMIC LOADING: Read projects directly from individual JSON files
  const all = await loadAllProjects();
  const map = new Map<string, number>();
  for (const p of all) {
    const dev = (p.developer || 'Unknown') as string;
    map.set(dev, (map.get(dev) || 0) + 1);
  }
  const counts = Array.from(map.entries()).map(([developer, count]) => ({ developer, count }));
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-gold-grad">لوحة الإدارة</h1>
      <StatsPanel total={(all || []).length} counts={counts || []} />
      <UploadForm />
    </div>
  );
}
