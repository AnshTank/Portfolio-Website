const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground font-source-sans leading-relaxed">
              Hi! I'm Ansh Tank, a passionate full-stack developer and tech enthusiast. I love creating web applications that not only work seamlessly but also look great. I've built projects ranging from financial literacy platforms to consultancy bridges, combining problem-solving skills with creative design.
            </p>
            <p className="text-lg text-muted-foreground font-source-sans leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, learning about DevOps, or improving my communication and collaboration skills. I enjoy turning ideas into real products, and I'm always excited to take on new challenges that push me to grow.
            </p>
            <p className="text-lg text-primary font-source-sans leading-relaxed font-medium">
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
