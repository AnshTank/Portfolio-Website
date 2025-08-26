"use client"

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      {/* Subtle floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/10 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}
      
      {/* Very subtle geometric shapes */}
      <div className="absolute top-1/4 left-1/12 w-20 h-20 border border-primary/5 rotate-45 animate-spin" style={{ animationDuration: '30s' }} />
      <div className="absolute bottom-1/4 right-1/12 w-16 h-16 bg-primary/3 rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
      
      {/* Large subtle gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/2 left-1/6 w-80 h-80 bg-gradient-to-tr from-accent/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }} />
    </div>
  )
}

export default GlobalBackground