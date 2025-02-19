import { faker } from "@faker-js/faker";
import { posts, postsData, users } from "./schema";
import { db } from "./db";

async function seed() {
  try {
    // Create 50 users
    const userInserts = Array.from({ length: 50 }, () => ({
      fcmToken: faker.string.alphanumeric({ length: 32 }),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }));

    await db.insert(users).values(userInserts);
    console.log("✓ Inserted users");

    // Create 100 job posts
    const departments = [
      "Engineering",
      "Healthcare",
      "Education",
      "Government",
      "Finance",
      "IT",
      "Administration",
    ];

    const postInserts = Array.from({ length: 100 }, () => {
      const createdAt = faker.date.past();
      return {
        createdAt,
        updatedAt: faker.date.between({ from: createdAt, to: new Date() }),
        title: faker.person.jobTitle(),
        department: faker.helpers.arrayElement(departments),
        salary: `${faker.number.int({ min: 30000, max: 150000 })} per annum`,
        lastDate: faker.date.future(),
        vacancy: faker.number.int({ min: 10, max: 1000 }),
        officialDate: faker.date.future(),
        examName: `${faker.helpers.arrayElement([
          "Written",
          "Online",
          "Interview",
        ])} Test for ${faker.company.name()}`,
        location: faker.location.city(),
        ageLimit: `${faker.number.int({ min: 21, max: 35 })} years`,
        image: faker.image.url(),
      };
    });

    const insertedPosts = await db
      .insert(posts)
      .values(postInserts)
      .returning({ id: posts.id });
    console.log("✓ Inserted posts");

    // Create post data (markdown content) for each post
    const postDataInserts = insertedPosts.map((post) => ({
      postId: post.id,
      body: generateMarkdownBody(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }));

    await db.insert(postsData).values(postDataInserts);
    console.log("✓ Inserted posts data");

    console.log("✓ Seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

function generateMarkdownBody(): string {
  // Helper function to generate a table row
  const generateTableRow = () => {
    return `| ${faker.person.firstName()} | ${faker.person.jobTitle()} | ${faker.number.int(
      { min: 1, max: 10 }
    )} years |`;
  };

  return `
# ${faker.person.jobTitle()}

> ${faker.company.catchPhrase()}

## About Us
${faker.lorem.paragraphs(2)}

## Job Description
${faker.lorem.paragraphs(2)}

### Key Highlights
1. First highlight with **bold text**
2. Second highlight with *italic text*
3. Third highlight with ***bold and italic text***
4. Fourth highlight with ~~strikethrough text~~

## Technical Requirements
\`\`\`json
{
  "required_skills": [
    "${faker.hacker.noun()}",
    "${faker.hacker.verb()}",
    "${faker.hacker.adjective()}"
  ],
  "experience_level": "${faker.number.int({ min: 1, max: 10 })} years",
  "location": "${faker.location.city()}"
}
\`\`\`

## Team Structure

| Team Member | Role | Experience |
|------------|------|------------|
${Array.from({ length: 4 }, generateTableRow).join("\n")}

## Requirements

- [x] ${faker.lorem.sentence()}
- [ ] ${faker.lorem.sentence()}
- [x] ${faker.lorem.sentence()}
- [ ] ${faker.lorem.sentence()}

## Responsibilities

### Primary Duties
${Array.from({ length: 3 }, () => `* ${faker.lorem.sentence()}`).join("\n")}

### Secondary Duties
${Array.from({ length: 3 }, () => `+ ${faker.lorem.sentence()}`).join("\n")}

## Benefits

> ### Healthcare
> - Comprehensive medical coverage
> - Dental and vision plans
> - Mental health support

> ### Work-Life Balance
> - Flexible hours
> - Remote work options
> - Unlimited PTO

## Professional Development
This role offers extensive learning opportunities:

\`\`\`mermaid
graph TD
    A[New Hire] --> B[Onboarding]
    B --> C[Technical Training]
    C --> D[Project Assignment]
    D --> E[Leadership Track]
    D --> F[Technical Track]
\`\`\`

## Code Sample Requirements
Example of code quality we expect:

\`\`\`typescript
interface Developer {
  name: string;
  skills: string[];
  experience: number;
}

const validateCandidate = (dev: Developer): boolean => {
  return dev.skills.length >= 3 && dev.experience >= 2;
};
\`\`\`

## Location
Our office is located at:
<details>
<summary>Click to expand</summary>

- Address: ${faker.location.streetAddress()}
- City: ${faker.location.city()}
- State: ${faker.location.state()}
- ZIP: ${faker.location.zipCode()}
</details>

## How to Apply

1. Send your resume to <${faker.internet.email()}>
2. Include your GitHub profile
3. Complete our [coding challenge][1]

---

**Contact Information:**
- Email: ${faker.internet.email()}
- Phone: ${faker.phone.number()}
- LinkedIn: [Company Profile][2]

[1]: https://example.com/coding-challenge
[2]: https://linkedin.com/company/example

---

<sub>Posted on ${faker.date.recent().toISOString().split("T")[0]}</sub>

> **Note:** All applications will be reviewed within 5 business days.

<!-- Hidden comment: Internal job ID ${faker.number.int({
    min: 1000,
    max: 9999,
  })} -->
`;
}

// Run the seed function
seed().catch(console.error);
