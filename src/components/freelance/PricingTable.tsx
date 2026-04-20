import type { FreelancePricingRow } from "../../types/freelance";

type Props = {
  title: string;
  rows: FreelancePricingRow[];
};

export default function PricingTable({ title, rows }: Props) {
  return (
    <div className="rounded-3xl bg-slate-950/45 ring-1 ring-white/10 overflow-hidden shadow-[0_20px_80px_-50px_rgba(15,23,42,0.95)]">
      <div className="px-5 py-4 text-white font-semibold border-b border-white/10 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-sky-300/90" />
        {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.8fr_1.2fr] gap-2 px-5 py-2 border-b border-white/10 bg-white/[0.03] text-[11px] tracking-wide uppercase text-slate-400">
        <div>Item</div>
        <div>Price</div>
        <div>Details</div>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div
            key={`${title}-${row.item}`}
            className="grid grid-cols-1 md:grid-cols-[1.1fr_0.8fr_1.2fr] gap-2 px-5 py-3 md:items-center"
          >
            <div className="text-sm text-slate-100 font-medium">{row.item}</div>
            <div className="text-sm text-slate-200/90">{row.price}</div>
            <div className="text-sm text-slate-300 leading-relaxed">{row.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
