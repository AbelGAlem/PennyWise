export function GridOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="
          absolute inset-0 opacity-50
          [background-image:
            linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)
          ]
          bg-size-[120px_120px]
        "
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.55)_80%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
