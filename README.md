# Thesiora Writer - Next.js Frontend

This is the Next.js frontend for the Thesiora Writer academic research paper generator.

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later
- Backend FastAPI server running on `http://localhost:8002`

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` to configure your backend API URL:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/web/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Dashboard page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── lib/                   # Utility functions
│   └── api.ts            # API client for backend
├── public/                # Static assets
└── package.json          # Dependencies
```

## Features

- **Landing Page**: Overview of Thesiora Writer features and capabilities
- **Dashboard**: Project management interface
- **API Integration**: Connection to FastAPI backend
- **TypeScript**: Full type safety
- **Tailwind CSS**: Modern, responsive styling
- **Dark Mode**: Built-in dark mode support

## API Endpoints

The frontend connects to the following backend endpoints:

- `GET /api/system/health` - Check backend health
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create a new project
- `GET /api/projects/{id}` - Get project details
- `DELETE /api/projects/{id}` - Delete a project

## Development

### Adding New Pages

Create a new folder in `app/` with a `page.tsx` file:

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

### API Integration

Use the API client from `lib/api.ts`:

```typescript
import { getProjects } from "@/lib/api";

const projects = await getProjects();
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

See the main project README for license information.

