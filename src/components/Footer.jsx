export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
          © {new Date().getFullYear()} Youssef Werrad. All rights reserved.
        </p>
        <a
          href="#"
          className="text-xs sm:text-sm text-muted-foreground hover:text-neon transition-colors order-1 sm:order-2"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};
