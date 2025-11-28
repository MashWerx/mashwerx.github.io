# Mashwerx Website

The official website for Mashwerx - built with Next.js and React.

## Overview

This is a **Next.js-based website** for Mashwerx, showcasing our AI and automation solutions, services, team, and thought leadership through blog content.

## Technology Stack

### Core Framework
- **Next.js** 13.4.3 - React framework for production-grade web applications
- **React** 18.2.0 - UI library
- **Sass** ^1.49.7 - CSS preprocessor for advanced styling

### Content Management
- **gray-matter** ^4.0.3 - Front-matter parser for markdown files
- **remark-html** ^15.0.2 - Markdown to HTML converter
- **remark** ^14.0.3 - Markdown processor

### UI Components
- **Swiper** ^9.0.0 - Modern touch slider for carousels and slideshows

### Development Tools
- **raw-loader** ^4.0.2 - Webpack loader for file imports

## Project Structure

```
mashwerx.github.io/
├── src/
│   └── pages/
│       ├── index.jsx          # Homepage with hero slideshow
│       ├── about/             # About pages
│       ├── services/          # Services pages
│       ├── projects/          # Project showcases
│       ├── blog/              # Blog posts
│       ├── team/              # Team pages
│       ├── contact/           # Contact information
│       └── ...
├── public/                    # Static assets
├── styles/                    # Sass stylesheets
├── ROADMAP.md                # Feature tracking and progress
└── package.json              # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (>= 10)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Create optimized production build
- **`npm run start`** - Start production server
- **`npm run lint`** - Run code linting

## Features

### Current Features
- **Dynamic Content**: Markdown-based blog posts and project pages
- **Interactive UI**: Hero slideshow with Swiper
- **Responsive Design**: Mobile-friendly layouts
- **Services Showcase**: Detailed service offerings
- **Team Profiles**: Meet our team members
- **Project Portfolio**: Showcase of completed projects including:
  - AutoSupply AI Core
  - FinSense Mobile Suite
- **Blog**: Thought leadership articles on:
  - AI Strategy for Mobile Apps
  - Business Process Automation ROI
- **Partner Integrations**: AWS, Google Cloud, OpenAI API, Flutter

### Content Pages
- Homepage with hero slideshow
- Events, FAQ, and Pricing
- Publications and blog posts
- Team directory and individual profiles
- Testimonials from clients
- Partner showcase

## Development

### Content Management
Blog posts and projects are stored as Markdown files with front-matter metadata. Use gray-matter to parse and remark-html to render content.

### Styling
The project uses Sass for styling. Stylesheets are organized by component and page.

## Feature Roadmap

For planned features, in-progress work, and completed tasks, see [ROADMAP.md](ROADMAP.md).

## Recent Updates

- ✅ Rebranded from ITSulu to Mashwerx across all pages
- ✅ Updated partner section with correct branding
- ✅ Added new blog posts on automation ROI and mobile AI strategies
- ✅ Revamped project descriptions
- ✅ Enhanced services section
- ✅ Revised testimonials and team information

## Contributing

1. Create a feature branch from `master`
2. Make your changes
3. Test thoroughly
4. Submit a pull request to `master`

## License

Private - All rights reserved by Mashwerx

## Support

For issues or questions, please contact the development team.