# 🎓 Invest in Kids - Language Learning Platform

A modern, responsive web application for a language learning center in Astana, Kazakhstan. Built with cutting-edge technologies to provide an exceptional user experience for students and teachers.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)

## ✨ Features

- 🌐 **Multi-language Support** - Kazakh and Russian language support
- 🤖 **AI Chat Assistant** - Integrated AI chatbot for student inquiries
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Beautiful design with smooth animations
- 🌓 **Dark Mode** - Theme toggle for comfortable viewing
- 📚 **Course Management** - Display courses, teachers, and pricing
- 📸 **Photo Gallery** - Showcase center activities and events
- ⭐ **Reviews Section** - Student testimonials
- 📞 **WhatsApp Integration** - Direct contact via WhatsApp
- 🎯 **IELTS Test Landing** - Dedicated test information page

## 🛠️ Tech Stack

### Frontend Framework & Core
- **[React 18.3.1](https://react.dev/)** - Modern UI library
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4.19](https://vitejs.dev/)** - Next-generation build tool

### UI Components & Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12.23.26](https://www.framer.com/motion/)** - Production-ready motion library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Routing & State Management
- **[React Router DOM 6.30.1](https://reactrouter.com/)** - Declarative routing
- **[React Context API](https://react.dev/reference/react/createContext)** - Global state management

### Forms & Validation
- **[React Hook Form 7.61.1](https://react-hook-form.com/)** - Performant forms
- **[Zod 3.25.76](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers

### Data Fetching & State
- **[TanStack Query 5.83.0](https://tanstack.com/query)** - Powerful data synchronization

### Theming
- **[next-themes 0.3.0](https://github.com/pacocoursey/next-themes)** - Theme management

### Additional Libraries
- **[date-fns 3.6.0](https://date-fns.org/)** - Date utility library
- **[Recharts 2.15.4](https://recharts.org/)** - Composable charting library
- **[Sonner 1.7.4](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Embla Carousel 8.6.0](https://www.embla-carousel.com/)** - Carousel component

### Development Tools
- **[ESLint 9.32.0](https://eslint.org/)** - Code linting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kawemv1/iik-site.git
   cd iik-site
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
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   The app will be available at `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
invested-platform/
├── public/                 # Static assets
│   ├── photos/           # Photo gallery images
│   ├── courses/          # Course images
│   └── teachers/         # Teacher photos
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Feature components
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── types/           # TypeScript types
│   └── utils/           # Helper utilities
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Key Components

- **Hero** - Landing section with call-to-action
- **Navbar** - Navigation with language and theme toggle
- **Courses** - Course listings and details
- **Teachers** - Teacher profiles and information
- **Reviews** - Student testimonials
- **Pricing** - Course pricing information
- **Contact** - Contact form and information
- **AIChatWidget** - AI-powered chat assistant
- **PhotoGallery** - Image gallery showcase

## 🌍 Internationalization

The platform supports multiple languages:
- **Kazakh (kk)** - Қазақша
- **Russian (ru)** - Русский

Language switching is handled through the `LanguageContext` provider.

## 🤖 AI Chat Integration

The AI chat widget integrates with n8n workflows. Configure your webhook URL in the `.env` file:

```env
VITE_N8N_WEBHOOK_URL=your-webhook-url
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import the repository in [Netlify](https://netlify.com)
3. Add environment variables in Netlify dashboard
4. Deploy!

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_N8N_WEBHOOK_URL` | N8N webhook URL for AI chat | Yes |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Development** - Invest in Kids Team
- **Design** - Invest in Kids Team

## 📞 Contact

For inquiries, please contact us through:
- **WhatsApp** - Available on the website
- **Website** - [Visit our site](https://investinkids.kz)

## 🙏 Acknowledgments

- [shadcn](https://ui.shadcn.com/) for the amazing component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

Made with ❤️ by Invest in Kids Team
