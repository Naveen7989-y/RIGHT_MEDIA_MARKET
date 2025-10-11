# 🚀 Installation Instructions - Right Media Marketing Website

## Quick Start Guide

Follow these steps to get your website up and running.

---

## Step 1: Install Node.js ⚙️

### Windows Installation:

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Click on the **LTS (Long Term Support)** version button
   - Download the Windows Installer (.msi file)

2. **Run the Installer:**
   - Double-click the downloaded file
   - Click "Next" through the installation wizard
   - **Important:** Make sure "Add to PATH" is checked
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

3. **Restart Your Computer:**
   - This ensures PATH variables are updated

4. **Verify Installation:**
   - Open PowerShell (search for "PowerShell" in Start menu)
   - Type: `node --version`
   - You should see something like: `v18.17.0` or `v20.x.x`
   - Type: `npm --version`
   - You should see something like: `9.6.7` or higher

✅ **If you see version numbers, Node.js is installed correctly!**

❌ **If you see "command not found" errors:**
   - Restart your computer
   - Try opening a new PowerShell window
   - Reinstall Node.js and ensure "Add to PATH" is checked

---

## Step 2: Install Project Dependencies 📦

1. **Open PowerShell:**
   - Press `Windows Key + X`
   - Select "Windows PowerShell" or "Terminal"

2. **Navigate to Project Directory:**
   ```powershell
   cd e:\Right_Media_Market
   ```

3. **Install Dependencies:**
   ```powershell
   npm install
   ```

   This will:
   - Download all required packages
   - Create a `node_modules` folder
   - Take 2-5 minutes depending on your internet speed

4. **Wait for Completion:**
   - You'll see a progress bar
   - When complete, you'll see a summary of installed packages

✅ **Success indicators:**
   - No red error messages
   - "added XXX packages" message
   - `node_modules` folder created

---

## Step 3: Start Development Server 🎯

1. **Start the Server:**
   ```powershell
   npm run dev
   ```

2. **What Happens:**
   - Vite development server starts
   - Your default browser opens automatically
   - Website loads at `http://localhost:3000`

3. **You Should See:**
   - The Right Media Marketing homepage
   - Professional design with blue gradient header
   - Navigation menu at top
   - All content sections

✅ **Success! Your website is running!**

---

## Step 4: Make Changes (Optional) ✏️

### The server is now running and watching for changes:

1. **Open Project in VS Code:**
   - File → Open Folder
   - Select `e:\Right_Media_Market`

2. **Edit Files:**
   - Changes save automatically
   - Browser refreshes automatically
   - See changes instantly!

3. **Try This:**
   - Open `src/pages/Home.jsx`
   - Find the headline (around line 35)
   - Change the text
   - Save the file
   - Watch the browser update!

---

## Step 5: Stop the Server 🛑

When you're done:

1. **In PowerShell:**
   - Press `Ctrl + C`
   - Type `Y` if asked to confirm
   - Server stops

2. **To Start Again:**
   ```powershell
   npm run dev
   ```

---

## Common Commands 💻

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for code issues
npm run lint
```

---

## Troubleshooting 🔧

### Problem: "npm is not recognized"
**Solution:**
- Node.js is not installed or not in PATH
- Reinstall Node.js
- Restart computer
- Open new PowerShell window

### Problem: "Cannot find module"
**Solution:**
```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Problem: Port 3000 already in use
**Solution:**
- Vite will automatically try port 3001, 3002, etc.
- Or stop other applications using port 3000

### Problem: Changes not showing
**Solution:**
- Hard refresh browser: `Ctrl + Shift + R`
- Clear browser cache
- Restart dev server

### Problem: Build errors
**Solution:**
- Make sure Node.js version is 16 or higher
- Delete `node_modules` and reinstall
- Check for syntax errors in your code

---

## File Structure 📁

```
Right_Media_Market/
├── node_modules/          # Dependencies (auto-generated)
├── public/                # Static files
│   └── vite.svg          # Favicon
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Main app
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies list
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md             # Documentation
```

---

## What to Customize 🎨

### Priority 1 - Contact Information:
1. **Email Address:**
   - `src/components/Footer.jsx` (line ~80)
   - `src/pages/Contact.jsx` (line ~65)

2. **Phone Number:**
   - `src/components/Footer.jsx` (line ~85)
   - `src/pages/Contact.jsx` (line ~70)

3. **Location:**
   - `src/components/Footer.jsx` (line ~90)
   - `src/pages/Contact.jsx` (line ~75)

### Priority 2 - Branding:
1. **Company Logo:**
   - `src/components/Navbar.jsx` (line ~30)
   - Replace the "R" placeholder

2. **Colors:**
   - `tailwind.config.js` (lines 8-30)
   - Change primary and secondary colors

3. **Favicon:**
   - Replace `public/vite.svg` with your logo

### Priority 3 - Content:
1. **Testimonials:**
   - `src/pages/Home.jsx` (lines ~270-310)
   - Add real client testimonials

2. **Office Hours:**
   - `src/pages/Contact.jsx` (lines ~280-300)
   - Update to your actual hours

3. **Social Media:**
   - `src/components/Footer.jsx` (lines ~50-70)
   - Update with your social media URLs

---

## Building for Production 🏗️

When ready to deploy:

1. **Build the Project:**
   ```powershell
   npm run build
   ```

2. **What Happens:**
   - Creates optimized production files
   - Output goes to `dist` folder
   - Files are minified and optimized

3. **Test Production Build:**
   ```powershell
   npm run preview
   ```

4. **Deploy:**
   - Upload `dist` folder contents to your web server
   - Or use Vercel/Netlify for automatic deployment

---

## Deployment Options 🌐

### Option 1: Vercel (Recommended)
```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Netlify
1. Build: `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `dist` folder

### Option 3: Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder contents via FTP
3. Configure server for single-page app

---

## Next Steps 📝

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ View website in browser
5. ⬜ Customize contact information
6. ⬜ Update branding
7. ⬜ Add real content
8. ⬜ Test on mobile devices
9. ⬜ Build for production
10. ⬜ Deploy to hosting

---

## Getting Help 🆘

### Documentation Files:
- `README.md` - Technical overview
- `SETUP_GUIDE.md` - Detailed setup
- `CONTENT_GUIDE.md` - Content customization
- `PROJECT_SUMMARY.md` - Project overview
- This file - Installation steps

### Online Resources:
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com

### Common Issues:
- Check Node.js version: `node --version` (should be 16+)
- Check npm version: `npm --version` (should be 8+)
- Restart computer after installing Node.js
- Delete `node_modules` and reinstall if issues persist

---

## Success Checklist ✅

- [ ] Node.js installed and verified
- [ ] Project dependencies installed
- [ ] Development server running
- [ ] Website visible in browser
- [ ] Can make changes and see updates
- [ ] Contact information updated
- [ ] Ready to customize further

---

## 🎉 Congratulations!

You now have a professional React website running locally!

**What you have:**
- ✅ Modern React application
- ✅ Professional design
- ✅ Responsive layout
- ✅ SEO optimized
- ✅ Ready to customize
- ✅ Ready to deploy

**Next:** Start customizing the content to match your brand!

---

**Need Help?**
- Review the documentation files
- Check the troubleshooting section
- Verify all steps were completed

**Happy Building! 🚀**