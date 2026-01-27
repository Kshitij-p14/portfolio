@echo off
echo ========================================
echo Portfolio Setup Script
echo ========================================
echo.

echo Step 1: Checking Node.js installation...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo 1. Open this link: https://nodejs.org/
    echo 2. Download the LTS version for Windows
    echo 3. Install it
    echo 4. Restart this script
    echo.
    pause
    exit /b
) else (
    echo [OK] Node.js is installed
    node --version
    npm --version
)

echo.
echo Step 2: Copying resume to public folder...
if exist "c:\Users\panch\Downloads\resume\Kshitijpanchal_DS.pdf" (
    if not exist "public" mkdir public
    copy "c:\Users\panch\Downloads\resume\Kshitijpanchal_DS.pdf" "public\Kshitijpanchal_DS.pdf"
    echo [OK] Resume copied successfully
) else (
    echo [WARNING] Resume not found at c:\Users\panch\Downloads\resume\Kshitijpanchal_DS.pdf
    echo You can copy it manually later to: public\Kshitijpanchal_DS.pdf
)

echo.
echo Step 3: Installing dependencies...
echo This will take 2-3 minutes...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm install failed
    pause
    exit /b
)
echo [OK] Dependencies installed

echo.
echo Step 4: Starting development server...
echo Your portfolio will open at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
call npm run dev

pause
