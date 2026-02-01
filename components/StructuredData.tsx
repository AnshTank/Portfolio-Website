import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ansh Tank',
    jobTitle: 'Full-Stack Developer & DevOps Engineer',
    description: 'Passionate Full-Stack Developer and aspiring DevOps Engineer specializing in React, Node.js, MongoDB, Docker, and Kubernetes.',
    url: 'https://anshtank.me',
    image: 'https://anshtank.me/Ansh-model.png',
    sameAs: [
      'https://github.com/AnshTank',
      'https://linkedin.com/in/anshtank9',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript', 
      'React',
      'Node.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Next.js',
      'Full-Stack Development',
      'DevOps'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Parul University'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    }
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ansh Tank Portfolio',
    url: 'https://anshtank.me',
    description: 'Portfolio website of Ansh Tank - Full-Stack Developer & DevOps Engineer',
    author: {
      '@type': 'Person',
      name: 'Ansh Tank'
    }
  }

  return (
    <>
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  )
}