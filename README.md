# LIFF React Template for Bolt

A modern, production-ready template for building LINE Front-end Framework (LIFF) applications with React, TypeScript, and Tailwind CSS. Optimized for Bolt AI coding platform.

![LIFF React Template](https://img.shields.io/badge/LIFF-React%20Template-00C851?style=flat-square)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **LIFF Integration**: Full LINE Front-end Framework support with mock development mode
- **Responsive Design**: Mobile-first design with fixed navigation
- **Routing**: React Router for multi-page navigation
- **Component Library**: Heroicons for consistent iconography
- **Development Tools**: Hot reload, TypeScript checking, and ESLint
- **Production Ready**: Optimized build and deployment configuration

## 📱 Template Structure

- **Main Screen**: Application features and information display
- **User Screen**: User profile and account information
- **Fixed Footer Navigation**: Always accessible tab navigation
- **Responsive Header**: Clean app title display

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+ (recommended for LINE Bot SDK compatibility)
- LINE Developers account
- LIFF app registration

### 1. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_LIFF_ID=your-liff-id-here
VITE_USE_LIFF_MOCK=true
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Mode

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Production Build

```bash
npm run build
npm run preview
```

## 🔧 Configuration

### LIFF Settings

1. **Get LIFF ID**: Register your app at [LINE Developers Console](https://developers.line.biz/console/)
2. **Update Environment**: Set `VITE_LIFF_ID` in your `.env` file
3. **Mock Mode**: Set `VITE_USE_LIFF_MOCK=true` for local development

### Mock Development

- Automatically uses LIFF Mock Plugin in development mode
- Default profile image from `/public/vite.svg`
- Mock profile data for testing

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # App header with title
│   ├── Footer.tsx      # Fixed navigation footer
│   ├── MainScreen.tsx  # Main application screen
│   └── UserScreen.tsx  # User profile screen
├── contexts/           # React contexts
│   └── LiffProvider.tsx # LIFF state management
├── hooks/              # Custom React hooks
├── App.tsx            # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind
```

## 🎨 Customization

### Adding New Screens

1. Create a new component in `src/components/`
2. Add route in `App.tsx`:
   ```tsx
   <Route path="/new-screen" element={<NewScreen />} />
   ```
3. Update footer navigation in `Footer.tsx`

### Styling

- Uses Tailwind CSS for styling
- Custom styles in `src/App.css` and `src/index.css`
- Heroicons for consistent iconography

### LIFF Features

The template includes LIFF context provider with:
- Authentication state management
- Profile information access
- Mock profile customization (development)
- Error handling

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables

### LINE Platform

1. Set your deployment URL as the LIFF endpoint URL
2. Test in LINE app or LIFF browser

## 🔍 Development Tips for Bolt

This template is optimized for AI-assisted development on Bolt:

- **Clear component structure** for easy modification
- **TypeScript** for better code understanding
- **Consistent naming conventions**
- **Modular architecture** for feature additions
- **Comprehensive comments** in complex logic

### Common Bolt Commands

Ask Bolt to:
- "Add a new settings screen with toggle switches"
- "Implement LINE message sharing functionality" 
- "Add a modal dialog component"
- "Create a data storage system with localStorage"
- "Add loading states and error handling"

## 📚 Resources

- [LIFF Documentation](https://developers.line.biz/en/docs/liff/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your projects.

---

Made with ❤️ for the LINE development community