# Git Setup and Deploy Guide

## Step 1: Copy Your Resume (If not done yet)
Run this command in Command Prompt or PowerShell:
```bash
copy "c:\Users\panch\Downloads\resume\Kshitijpanchal_DS.pdf" "c:\Users\panch\Downloads\portfolio\public\Kshitijpanchal_DS.pdf"
```

## Step 2: Initialize Git and Push to GitHub

Open Command Prompt or PowerShell in the portfolio folder and run these commands:

```bash
# Navigate to portfolio folder
cd c:\Users\panch\Downloads\portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio with resume"

# Create main branch
git branch -M main

# Add your GitHub repository (replace with your actual repo URL)
# First, create a new repository on GitHub named "portfolio" or similar
# Then use the URL GitHub provides
git remote add origin https://github.com/Kshitij-p14/portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy on Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your "portfolio" repository
5. Click "Deploy" (Vercel auto-detects Next.js settings)

Done! Your portfolio will be live in ~2 minutes.

## Alternative: Push to Existing Repo

If you already have a portfolio repo:
```bash
git remote add origin https://github.com/Kshitij-p14/YOUR_REPO_NAME.git
git push -u origin main
```
