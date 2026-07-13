export interface Project {
  id: string
  name: string
  year: number
  description: string
  tags: string[]
  tagColor: 'blue' | 'green' | 'purple' | 'amber'
  links: {
    repo?: string
    demo?: string
    writeup?: string
  }
}

export const projects: Project[] = [
  {
    id: 'plak',
    name: 'Plak',
    year: 2026,
    description: 'Full-stack activity-ranking app where couples compare options head-to-head. React/TypeScript on serverless AWS, architected to run under $0.30/month.',
    tags: ['React', 'TypeScript', 'AWS CDK', 'S3', 'VPC', 'Cognito'],
    tagColor: 'blue',
    links: {
      repo: 'https://github.com/curtisjaelee/plak',
      demo: 'https://d1f1ffj966e44z.cloudfront.net/',
    }
  },
  {
    id: 'archive',
    name: 'Archive Us',
    year: 2026,
    description: 'Private media archive. Migrated from Supabase to AWS RDS/S3 with CDK.',
    tags: ['PostgreSQL', 'AWS S3', 'CDK'],
    tagColor: 'green',
    links: {
      repo: 'https://github.com/curtisjaelee/archive-us',
    }
  },
  /*
    {
    id: 'name',
    name: 'name',
    year: 2026,
    description: ' ',
    tags: [' ', ' ', ' '],
    tagColor: 'color',
    links: {
      repo: 'https://github.com/curtisjaelee/',
      demo: '',
    }
  }
  */
]