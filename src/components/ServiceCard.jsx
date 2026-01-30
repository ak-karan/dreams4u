const ServiceCard = ({ Icon, title, desc }) => {
  return (
    <article
      className="
        relative p-0.5 rounded-xl
        animate-borderSpin
        hover:scale-[1.02]
        transition-transform duration-300
        [background:conic-gradient(from_var(--border-angle),#22d3ee,#6366f1,#22d3ee)]
      "
    >
      <div className="rounded-xl bg-slate-900 p-6 h-full text-white">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-8 h-8 text-cyan-400" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
