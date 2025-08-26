const { MongoClient } = require('mongodb');

async function setupDatabase() {
  const uri = 'mongodb+srv://anshtank9:3nxl8lFAlXH7jDO5@contact.qyokp2t.mongodb.net/?retryWrites=true&w=majority';
  
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const db = client.db('portfolio');

    // Create contacts collection with dummy data
    const contactsCollection = db.collection('contacts');
    
    const dummyContacts = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        subject: "Web Development Inquiry",
        message: "Hi Ansh, I'm interested in your web development services for my startup. Could we schedule a call?",
        createdAt: new Date(),
        status: "new"
      },
      {
        name: "Sarah Johnson",
        email: "sarah.j@techcorp.com",
        subject: "DevOps Consultation",
        message: "We need help setting up our CI/CD pipeline. Your DevOps experience looks impressive!",
        createdAt: new Date(Date.now() - 86400000), // 1 day ago
        status: "new"
      },
      {
        name: "Mike Chen",
        email: "mike.chen@startup.io",
        subject: "Full-Stack Project",
        message: "Looking for a full-stack developer for a 3-month project. React + Node.js required.",
        createdAt: new Date(Date.now() - 172800000), // 2 days ago
        status: "read"
      }
    ];

    await contactsCollection.insertMany(dummyContacts);
    console.log('✅ Contacts collection created with dummy data');

    // Create hire_requests collection with dummy data
    const hireCollection = db.collection('hire_requests');
    
    const dummyHireRequests = [
      {
        name: "Alex Rodriguez",
        email: "alex@innovatetech.com",
        phone: "+1 (555) 123-4567",
        company: "InnovateTech Solutions",
        position: "CTO",
        projectType: "full-stack",
        budget: "30k-50k",
        timeline: "3-6-months",
        location: "Remote",
        description: "We need to build a comprehensive e-commerce platform with advanced analytics and real-time inventory management.",
        requirements: "React, Node.js, MongoDB, Redis, Docker deployment, payment integration",
        createdAt: new Date(),
        status: "new",
        priority: "medium"
      },
      {
        name: "Emily Watson",
        email: "emily.watson@financeapp.com",
        phone: "+1 (555) 987-6543",
        company: "FinanceApp Inc",
        position: "Product Manager",
        projectType: "devops",
        budget: "50k-plus",
        timeline: "2-3-months",
        location: "New York, NY",
        description: "Looking for DevOps expertise to modernize our infrastructure and implement microservices architecture.",
        requirements: "Kubernetes, AWS, CI/CD pipelines, monitoring solutions, security best practices",
        createdAt: new Date(Date.now() - 43200000), // 12 hours ago
        status: "new",
        priority: "high"
      },
      {
        name: "David Kim",
        email: "david@healthtech.org",
        phone: "+1 (555) 456-7890",
        company: "HealthTech Innovations",
        position: "CEO",
        projectType: "web-development",
        budget: "15k-30k",
        timeline: "1-month",
        location: "San Francisco, CA",
        description: "Need a responsive healthcare dashboard for patient management with HIPAA compliance.",
        requirements: "HIPAA compliance, secure authentication, data visualization, mobile responsive",
        createdAt: new Date(Date.now() - 86400000), // 1 day ago
        status: "reviewed",
        priority: "medium"
      }
    ];

    await hireCollection.insertMany(dummyHireRequests);
    console.log('✅ Hire requests collection created with dummy data');

    console.log('\n🎉 Database setup complete!');
    console.log('📊 Collections created:');
    console.log('   - portfolio.contacts (3 dummy records)');
    console.log('   - portfolio.hire_requests (3 dummy records)');

  } catch (error) {
    console.error('❌ Error setting up database:', error);
  } finally {
    await client.close();
  }
}

setupDatabase();