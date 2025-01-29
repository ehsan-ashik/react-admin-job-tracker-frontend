# Job Application Tracker - Frontend

A modern React-Admin based frontend application for managing job applications. This client application provides an intuitive interface for tracking job applications, managing resumes, and organizing company interactions.

The backend REST API details can be found in the following repo: https://github.com/ehsan-ashik/go-job-tracker-api

## Features

### User Interface
- Grid view for all resources with sorting and filtering
- Detailed overview pages for each resource type
- Visual status indicators for job applications
- PDF viewer for resume preview
- Responsive design

### Resource Management
- Complete CRUD operations for:
  - Jobs
  - Companies
  - Resumes
  - Job Categories
- Related resource display:
  - View all jobs for a company
  - See applications associated with each resume
- PDF file upload and management for resumes

### Integration Features
- Azure Blob Storage integration for resume viewing
- Azure SAS token management with local storage caching
- Automatic token refresh mechanism

## Technical Stack

- **Framework**: React
- **Admin Framework**: React-Admin
- **PDF Handling**: React PDF Viewer
- **State Management**: React-Admin providers
- **Storage**: Browser LocalStorage
- **Cloud Integration**: Azure Blob Storage

## Getting Started

### Prerequisites
- Docker and Docker compose
- Node.js
- npm or yarn
- Access to the backend API service
- Azure Permission Service

### Configuration

Create a `.env` file in the root directory:

```env
VITE_API_URL=
VITE_AZURE_SERVICE_API_URL=
```

Create a `.env` file in the root/api directory:

```env
AZURE_ACCESS_KEY=
AZURE_ACCOUNT_NAME=
AZURE_CONTAINER_NAME=
```

### Running the Application

#### Using Docker Compose

1. Build and start the services:
   ```bash
   docker-compose up --build
   ```
This will start:
- The Azure Peromission Service at Port 5000
- The React-Admin Frontend at Port 5173

The application will be available at `http://localhost:5173`.


## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run serve` - Serves from the built distribution

## Features in Detail

### Job Management
- View all job applications in a sortable grid
- Filter jobs by status, company, or category
- Color-coded status indicators:
  - Applied: Default styling
  - Rejected: Muted with dark background
  - Interview: Highlighted styling
- Detailed job view with related information

### Company Management
- Company listing with associated jobs
- Detailed company view showing:
  - Company information
  - All jobs applied to the company
  - Application statistics

### Resume Management
- Upload and manage PDF resumes
- Preview resumes directly in the application
- Track which jobs used each resume
- Secure access to resume files via Azure Blob Storage

### Job Categories
- Organize jobs by categories
- Filter and sort jobs by category
- Category statistics and usage information

## Azure Integration Details

### Resume Storage
- Resumes are stored in Azure Blob Storage
- Secure access via SAS tokens
- Token caching in LocalStorage
- Automatic token refresh when expired

### Permission Service Integration
- Manages SAS token generation
- Handles token expiration
- Provides secure access to stored files


## License
This project is licensed under the MIT License - see the LICENSE file for details.
