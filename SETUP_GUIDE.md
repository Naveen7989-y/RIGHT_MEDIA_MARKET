# Setup Guide - Right Media Marketing Website

## Prerequisites Installation

### Step 1: Install Node.js and npm

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version for Windows
   - Recommended: Node.js 18.x or 20.x

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" option
   - Restart your computer after installation

3. **Verify Installation:**
   Open PowerShell and run:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers for both commands.

## Project Setup

### Step 2: Install Project Dependencies

1. **Navigate to Project Directory:**
   ```powershell
   cd e:\Right_Media_Market
   ```

2. **Install Dependencies:**
   ```powershell
   npm install
   ```
   This will install all required packages (React, Vite, Tailwind CSS, etc.)

### Step 3: Start Development Server

```powershell
npm run dev
```

The website will automatically open in your browser at `http://localhost:3000`

## Quick Start Commands

```powershell
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Troubleshooting

### Issue: "npm is not recognized"
**Solution:** Node.js is not installed or not in PATH. Follow Step 1 above.

### Issue: Port 3000 is already in use
**Solution:** The dev server will automatically try port 3001, 3002, etc.

### Issue: Module not found errors
**Solution:** Delete `node_modules` folder and `package-lock.json`, then run `npm install` again.

### Issue: Build errors
**Solution:** Make sure you're using Node.js version 16 or higher.

## Development Workflow

1. **Start the dev server:** `npm run dev`
2. **Make changes** to files in the `src` folder
3. **See changes instantly** - Vite provides hot module replacement
4. **Build for production** when ready: `npm run build`

## Customization Checklist

- [ ] Update contact email in Footer.jsx and Contact.jsx
- [ ] Update phone number in Footer.jsx and Contact.jsx
- [ ] Update location/address in Footer.jsx and Contact.jsx
- [ ] Add your logo to Navbar.jsx
- [ ] Update social media links in Footer.jsx and Contact.jsx
- [ ] Customize colors in tailwind.config.js
- [ ] Add real testimonials in Home.jsx
- [ ] Update office hours in Contact.jsx
- [ ] Add Google Maps embed in Contact.jsx
- [ ] Update meta tags in index.html for SEO

## File Structure Overview

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Top navigation
│   ├── Footer.jsx      # Footer with links
│   └── ScrollToTop.jsx # Utility component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Services.jsx    # Services page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Create account at https://vercel.com
2. Install Vercel CLI: `npm install -g vercel`
3. Run: `vercel`
4. Follow prompts

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to https://netlify.com
3. Configure domain

### Option 3: Traditional Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure server to serve index.html for all routes

## Environment Variables (Optional)

Create a `.env` file in the root directory for environment-specific settings:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=contact@rightmediamarketing.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Optimization

The project is already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting with React Router
- ✅ Lazy loading ready
- ✅ Tailwind CSS purging unused styles
- ✅ Optimized images (add your own)
- ✅ Minification in production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

1. **Install Node.js** if not already installed
2. **Run `npm install`** to install dependencies
3. **Run `npm run dev`** to start development
4. **Customize content** to match your brand
5. **Test on different devices** and browsers
6. **Build and deploy** when ready

## Support

For questions or issues:
- Email: contact@rightmediamarketing.com
- Check the main README.md for more details

---

**Happy Coding! 🚀**