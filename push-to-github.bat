@echo off
echo ========================================
echo Git Push to GitHub Script
echo ========================================
echo.

echo Initializing Git repository...
git init

echo.
echo Adding all files...
git add .

echo.
echo Creating commit...
git commit -m "Initial portfolio commit with Next.js app"

echo.
echo Setting main branch...
git branch -M main

echo.
echo Adding remote repository...
git remote add origin https://github.com/Kshitij-p14/portfolio.git

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo [SUCCESS] Portfolio pushed to GitHub!
echo Now you can deploy it on Vercel:
echo 1. Go to https://vercel.com
echo 2. Sign in with GitHub
echo 3. Click "New Project"
echo 4. Import "Kshitij-p14/portfolio"
echo 5. Click "Deploy"
echo.
pause
