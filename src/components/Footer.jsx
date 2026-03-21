export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Youssef Werrad. Built with React.
        </p>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};
