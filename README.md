# V0 Clone - AI-Powered App Builder

A Next.js application that allows users to build web applications by chatting with AI. This project enables users to create full-featured web apps through natural language conversations, with real-time code generation and preview capabilities.

## Features

- 🤖 **AI-Powered Development**: Build applications by describing what you want in natural language
- 🎨 **Live Preview**: Real-time preview of generated applications
- 💻 **Code Explorer**: Browse and copy generated code with syntax highlighting
- 📁 **Project Management**: Create and manage multiple projects
- 🔐 **Authentication**: Secure user authentication with Clerk
- 🎯 **Pre-built Templates**: Quick start templates for common applications (Netflix clone, Spotify clone, Admin dashboard, etc.)
- 🌙 **Dark Mode**: Built-in dark mode support
- 📱 **Responsive Design**: Mobile-friendly interface
- ⚡ **Rate Limiting**: Built-in rate limiting for API protection

## Tech Stack

### Frontend

- **Next.js 15.5.4** - React framework for production
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Re-usable component library built on Radix UI
- **Lucide React** - Icon library
- **React Hook Form** - Form validation and management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching

### Backend

- **Prisma** - ORM for database management
- **Clerk** - Authentication and user management
- **Inngest** - Background job processing and AI agent orchestration
- **E2B Code Interpreter** - Sandboxed code execution environment

### AI & Code Generation

- **OpenAI GPT-4** - AI model for code generation
- **@inngest/agent-kit** - AI agent framework
- **Prism.js** - Syntax highlighting

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+
- npm/yarn/pnpm
- PostgreSQL database (or compatible database)

## Environment Variables

Create a `.env` file in the root directory based on `.env.sample`:

```env
# Database
DATABASE_URL="your_database_url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Inngest
INNGEST_EVENT_KEY="your_inngest_event_key"
INNGEST_SIGNING_KEY="your_inngest_signing_key"

# E2B
E2B_API_KEY="your_e2b_api_key"

# OpenAI
OPENAI_API_KEY="your_openai_api_key"
```

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd v0-clone-next
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

```bash
cp .env.sample .env
# Edit .env and add your API keys and database URL
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
.
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── (root)/              # Main application routes
│   │   │   ├── page.jsx         # Home page
│   │   │   ├── pricing/         # Pricing page
│   │   │   ├── sign-in/         # Sign in page
│   │   │   └── sign-up/         # Sign up page
│   │   ├── api/                 # API routes
│   │   │   └── inngest/         # Inngest webhook
│   │   ├── projects/            # Project detail pages
│   │   │   └── [projectId]/     # Dynamic project routes
│   │   └── globals.css          # Global styles
│   ├── components/              # Reusable UI components
│   │   ├── query-provider.jsx  # React Query provider
│   │   ├── theme-provider.jsx  # Theme provider
│   │   └── ui/                  # Shadcn UI components
│   ├── hooks/                   # Custom React hooks
│   ├── inngest/                 # Inngest functions and AI agents
│   │   ├── client.js           # Inngest client
│   │   ├── functions.js        # Agent functions
│   │   └── utils.js            # Helper utilities
│   ├── lib/                     # Utility functions and configs
│   │   ├── db.js               # Prisma client
│   │   └── utils.js            # Utility functions
│   └── modules/                 # Feature modules
│       ├── auth/                # Authentication
│       ├── home/                # Home page components
│       ├── messages/            # Message management
│       ├── projects/            # Project management
│       └── usage/               # Usage tracking
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Database migrations
├── public/                      # Static assets
├── sandbox-templates/           # E2B sandbox configurations
│   └── next-js/                # Next.js sandbox template
├── docker-compose.yml           # Docker configuration
├── components.json              # Shadcn UI config
├── next.config.mjs              # Next.js configuration
└── prompt.js                    # AI agent system prompts
```

## Key Features Explained

### AI Code Generation

The application uses a multi-agent system built with Inngest and OpenAI to generate code:

1. **User Input**: User describes what they want to build
2. **AI Processing**: The AI agent analyzes the request and generates appropriate code
3. **Sandbox Execution**: Code runs in an isolated E2B sandbox environment
4. **Live Preview**: Users can see the result in real-time

### Project Templates

Pre-configured templates for common applications:

- Netflix Clone
- Spotify Clone
- YouTube Clone
- Admin Dashboard
- Kanban Board
- File Manager
- E-commerce Store
- Airbnb Clone

### Code Explorer

Browse generated files with:

- Tree view navigation
- Syntax highlighting
- File breadcrumbs
- Copy to clipboard functionality

## Database Schema

The application uses Prisma with the following main models:

- **User**: User accounts and profiles with rate limiting
- **Project**: User projects with metadata
- **Message**: Chat messages between user and AI
- **Fragment**: Generated code fragments with preview URLs

## API Routes

- `/api/inngest` - Inngest webhook endpoint for AI agent execution

## Middleware

The application includes middleware for:

- Authentication protection with Clerk
- Route-based access control

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

For detailed deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Docker

A docker-compose.yml file is included for containerized deployment.

```bash
docker-compose up -d
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Management

### Migrations

```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Apply migrations
npx prisma migrate deploy

# Reset database (development only)
npx prisma migrate reset
```

### Prisma Studio

```bash
# Open Prisma Studio to view/edit data
npx prisma studio
```

## Rate Limiting

The application includes built-in rate limiting to prevent abuse:

- User-based request limits
- Configurable through the database schema
- Tracked per user in the User model

## Configuration Files

- `components.json` - Shadcn UI component configuration
- `eslint.config.mjs` - ESLint configuration
- `jsconfig.json` - JavaScript path mapping
- `next.config.mjs` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration
- `tailwind.config.js` - Tailwind CSS configuration

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify DATABASE_URL in .env file
   - Ensure database is running
   - Run `npx prisma generate`

2. **Authentication Not Working**
   - Check Clerk API keys in .env
   - Verify Clerk dashboard settings

3. **AI Not Responding**
   - Verify OpenAI API key
   - Check Inngest configuration
   - Ensure E2B API key is valid

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Powered by [OpenAI](https://openai.com/)
- Code execution by [E2B](https://e2b.dev/)
- Job orchestration by [Inngest](https://www.inngest.com/)
- Authentication by [Clerk](https://clerk.com/)

## Support

For issues and questions, please open an issue on the GitHub repository.

## Security

- Always keep your API keys secure and never commit them to version control
- Use environment variables for sensitive data
- Review generated code before deploying to production
- Enable rate limiting in production environments

---

**Note**: This is an AI-powered code generation tool. Always review and test generated code before deploying to production.
