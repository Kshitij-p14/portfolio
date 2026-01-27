# Portfolio Setup - Complete Guide

## 🎯 What You Need to Install

### 1. Node.js (Required)
**Download:** https://nodejs.org/en/download/
- Choose: **Windows Installer (.msi)** - LTS version
- Version: 20.x or higher
- Installation is automatic - just click "Next" through the installer
- **Important:** Restart your computer after installation

### 2. Git (Required for GitHub)
**Download:** https://git-scm.com/download/win
- Choose: **64-bit Git for Windows Setup**
- Installation is automatic - use default settings
- **Important:** Restart your computer after installation

---

## 🚀 Automated Setup (After Installing Node.js & Git)

### Option 1: Double-Click Setup
1. **Double-click:** `setup-and-run.bat`
2. Wait for installation (2-3 minutes)
3. Your portfolio will open automatically at http://localhost:3000

### Option 2: Push to GitHub
1. **Double-click:** `push-to-github.bat`
2. Your code will be pushed to GitHub
3. Then deploy on Vercel

---

## 📋 Manual Steps (If scripts don't work)

### Step 1: Install Node.js
```bash
# After installing from nodejs.org, verify:
node --version
npm --version
```

### Step 2: Setup Portfolio
```bash
cd c:\Users\panch\Downloads\portfolio
npm install
npm run dev
```

### Step 3: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Kshitij-p14/portfolio.git
git push -u origin main
```

---

## 🌐 Deploy to Vercel

After pushing to GitHub:
1. Go to: https://vercel.com
2. Click: "Sign up" or "Login" with GitHub
3. Click: "New Project"
4. Select: "Kshitij-p14/portfolio"
5. Click: "Deploy"

Your portfolio will be live in 2 minutes!

---

## ✅ Checklist

- [ ] Install Node.js from nodejs.org
- [ ] Install Git from git-scm.com
- [ ] Restart computer
- [ ] Double-click `setup-and-run.bat`
- [ ] Portfolio opens at http://localhost:3000
- [ ] Double-click `push-to-github.bat`
- [ ] Deploy on Vercel

---

## 🆘 Need Help?

If you see any errors, copy the error message and I'll help you fix it!
