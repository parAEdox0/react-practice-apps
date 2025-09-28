export const H2 = ({ children, className = "" }) => {
  return (
    <div className={`font-semibold text-xl text-pink-400 ${className}`}>
      {children}
    </div>
  );
};

export const H4 = ({ children, className = "" }) => {
  return (
    <div className={`text-[12px] text-zinc-600 ${className}`}>{children}</div>
  );
};
