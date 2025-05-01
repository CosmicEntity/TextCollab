export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "<p></p>",
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <p><strong>Prepared for:</strong> [Client Name]</p>
      <p><strong>Prepared by:</strong> [Your Company Name]</p>
      <h2>Project Overview</h2>
      <p>[Brief summary of the project]</p>
      <h2>Scope of Work</h2>
      <p>[Details about what the project entails]</p>
      <h2>Timeline</h2>
      <p>[Estimated timeline for delivery]</p>
      <h2>Cost Estimate</h2>
      <p>[Estimated budget or cost breakdown]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p><strong>Project Title:</strong> [Title]</p>
      <h2>Introduction</h2>
      <p>[Introduction or background of the project]</p>
      <h2>Objectives</h2>
      <ul><li>[Objective 1]</li><li>[Objective 2]</li></ul>
      <h2>Methodology</h2>
      <p>[How you plan to carry out the project]</p>
      <h2>Deliverables</h2>
      <p>[Expected outcomes]</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Company Name]</p>
      <p>[Address]</p>
      <p>[Date]</p>
      <p>[Recipient Name]</p>
      <p>[Recipient Company Name]</p>
      <p>Dear [Recipient Name],</p>
      <p>[Body of the business letter]</p>
      <p>Sincerely,<br>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p><strong>Email:</strong> [Your Email] | <strong>Phone:</strong> [Your Phone]</p>
      <h2>Summary</h2>
      <p>[Brief professional summary]</p>
      <h2>Experience</h2>
      <p><strong>[Job Title]</strong> – [Company Name]</p>
      <p>[Job description and achievements]</p>
      <h2>Education</h2>
      <p><strong>[Degree]</strong> – [Institution]</p>
      <p>[Graduation Year]</p>
      <h2>Skills</h2>
      <ul><li>[Skill 1]</li><li>[Skill 2]</li></ul>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State ZIP]</p>
      <p>[Email Address]</p>
      <p>[Phone Number]</p>
      <p>[Date]</p>
      <p>[Recipient Name]</p>
      <p>[Company Name]</p>
      <p>Dear [Recipient Name],</p>
      <p>I am writing to express my interest in the [Job Title] position at [Company Name].</p>
      <p>[Paragraph describing your interest and qualifications]</p>
      <p>Thank you for considering my application. I look forward to the opportunity to speak with you further.</p>
      <p>Sincerely,<br>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[Date]</p>
      <p>[Recipient Name]</p>
      <p>[Recipient Address]</p>
      <p>Dear [Recipient Name],</p>
      <p>[Body of your letter]</p>
      <p>Best regards,<br>[Your Name]</p>
    `,
  },
];
