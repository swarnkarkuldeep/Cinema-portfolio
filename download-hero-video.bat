@echo off
echo Creating directories...
mkdir -p public
cd public

echo Downloading hero.mp4...
echo You need to download a cinematic background video and place it at:
echo %cd%\hero.mp4
echo.
echo Suggested sources:
echo - Use a royalty-free stock video from Pexels: https://www.pexels.com/videos/
echo - Download a cinematic video from Pixabay: https://pixabay.com/videos/
echo - Create your own video footage
echo.
echo Remember to name the file "hero.mp4" and place it in the public folder.
echo.
echo Once downloaded, your site will automatically use the video as background.
pause 