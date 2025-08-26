const Footer = () => {
  return (
    <footer className="border-t py-12 px-4 bg-muted/20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p className="font-source-sans text-muted-foreground">
              © 2025 Ansh Tank. Built with passion and precision.
            </p>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-1000"></div>
          </div>
          <p className="text-xs text-muted-foreground">
            Crafted with React, Next.js, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
