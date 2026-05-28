@echo off
title Canyon War - Deploy to GitHub Pages
echo ============================================
echo   Deploy Canyon War MOBA to GitHub Pages
echo ============================================
echo.
echo This will push the game to your GitHub repo.
echo Make sure you have a repo named: moba-game
echo.
set /p GITHUB_USER="Your GitHub username: "
echo.
git remote remove origin 2>nul
git remote add origin https://github.com/%GITHUB_USER%/moba-game.git
git branch -M main
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo Done! Now go to GitHub repo Settings - Pages
echo Select branch "main" and save.
echo Your game will be at: https://%GITHUB_USER%.github.io/moba-game/
pause
