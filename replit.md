# Medical Website Project

## Overview

A modern, responsive medical website for Dr. Mário Espósito (CRM-MT 2338), a specialist in Otorhinolaryngology and Facial Plastic Surgery. The site features a clean, professional design with comprehensive information about medical specialties, procedures, and contact details. Built with React, TypeScript, and Tailwind CSS, the application prioritizes user experience, accessibility, and mobile responsiveness.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom medical-themed color palette
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: React Query (TanStack Query) for server state
- **Icons**: Lucide React for consistent iconography

**Design System**:
- Custom color palette optimized for medical professionals (dark teal, turquoise, soft blues)
- Inter font family for modern typography
- Responsive design with mobile-first approach
- Component-based architecture with reusable UI elements

**Key Pages**:
- Home: Hero section with key specialties and featured procedures
- About: Detailed doctor credentials and professional background
- Specialties: Medical specializations with detailed descriptions
- Procedures: Comprehensive procedure catalog with modal details
- Contact: Contact form and practice information

### Backend Architecture

**Server**: Express.js with TypeScript
- **API Structure**: RESTful endpoints with `/api` prefix
- **Development**: Hot module replacement with Vite integration
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging for API endpoints

**Storage Layer**:
- In-memory storage implementation with interface abstraction
- Database-ready architecture with Drizzle ORM configuration
- User entity schema with PostgreSQL dialect support

### Data Storage Solutions

**Database**: PostgreSQL (configured but not yet implemented)
- **ORM**: Drizzle ORM with Zod validation schemas
- **Migration**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless configuration

**Current Implementation**: 
- Memory-based storage for development
- Interface-driven design for easy database integration
- User management schema ready for production deployment

### Authentication and Authorization

**Current State**: Basic user schema implemented
- User entity with username/password fields
- UUID-based primary keys
- Storage interface ready for authentication implementation

**Planned Features**:
- Session-based authentication
- Role-based access control
- Secure password handling

## External Dependencies

### Third-Party Services

**Database**: 
- Neon Database (PostgreSQL serverless)
- Environment variable configuration for connection strings

**Communication**:
- WhatsApp Business integration for appointment scheduling
- Contact form submission handling

**Development Tools**:
- Replit integration with development banner and cartographer
- Vite plugins for enhanced development experience

### Key Libraries

**Frontend**:
- React Router alternative: Wouter (lightweight routing)
- UI Framework: Radix UI primitives with Shadcn/ui components
- Validation: Zod for schema validation
- Date Handling: date-fns for date manipulation
- Carousel: Embla Carousel for image/content sliders

**Backend**:
- Express.js for server framework
- Drizzle ORM for database operations
- Connect-pg-simple for session storage
- TSX for TypeScript execution

**Styling**:
- Tailwind CSS for utility-first styling
- Class Variance Authority for component variants
- Clsx and Tailwind Merge for conditional class handling

**Development**:
- TypeScript for type safety
- ESBuild for production bundling
- PostCSS with Autoprefixer for CSS processing