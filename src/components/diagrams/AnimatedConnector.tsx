type AnimatedConnectorProps = {
  active: boolean;
  reducedMotion: boolean;
};

export function AnimatedConnector({
  active,
  reducedMotion,
}: AnimatedConnectorProps) {
  const filled = reducedMotion || active;

  return (
    <div className="relative mx-auto flex h-4 w-6 items-center justify-center" aria-hidden>
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line-strong" />
      <span
        className="absolute top-0 left-1/2 w-px origin-top -translate-x-1/2 bg-accent transition-[height] duration-500 ease-out motion-reduce:transition-none"
        style={{ height: filled ? "100%" : "0%" }}
      />
      <span
        className={`size-1.5 rounded-full bg-accent transition-opacity duration-300 ${
          filled ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
