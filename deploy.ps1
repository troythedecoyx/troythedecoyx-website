# Quick Deploy Script for troythedecoyx.com
# This script will commit changes and push to GitHub
# Netlify will automatically deploy when you push

Write-Host "🚀 Starting deployment..." -ForegroundColor Cyan

# Check if there are changes
git status --short
$hasChanges = git diff --quiet; $exitCode = $LASTEXITCODE

if ($exitCode -ne 0) {
    Write-Host "📝 Changes detected. Committing..." -ForegroundColor Yellow
    
    # Add all changes
    git add .
    
    # Commit with timestamp
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    git commit -m "Update: $timestamp"
    
    Write-Host "✅ Changes committed!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No changes to commit." -ForegroundColor Gray
}

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Cyan
git push origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "⏳ Netlify will auto-deploy in 1-2 minutes..." -ForegroundColor Yellow
    Write-Host "🌐 Check your site at: https://troythedecoyx.com" -ForegroundColor Cyan
} else {
    Write-Host "❌ Push failed. Check your GitHub connection." -ForegroundColor Red
}

