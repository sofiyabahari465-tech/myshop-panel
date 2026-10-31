# ============================================================
# اسکریپت نصب خودکار هلدینگ مهر روی سرور ویندوز
# ============================================================
# نحوه استفاده:
# ۱. با Remote Desktop به سرور وصل شو
# ۲. برنامه PowerShell رو به‌صورت Administrator باز کن
#    (کلیک راست روی Start → Windows PowerShell (Admin))
# ۳. این دستور رو کپی کن و پیست کن:
#    Set-ExecutionPolicy Bypass -Scope Process -Force
# ۴. سپس این اسکریپت رو اجرا کن
# ============================================================

$ErrorActionPreference = "Continue"
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  نصب خودکار هلدینگ مهر - بخش ۱" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# ============================================================
# مرحله ۱: نصب Chocolatey (مدیریت بسته‌های ویندوز)
# ============================================================
Write-Host "[۱/۸] نصب Chocolatey..." -ForegroundColor Yellow

if (!(Test-Path "C:\ProgramData\chocolatey\bin\choco.exe")) {
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    Write-Host "✅ Chocolatey نصب شد" -ForegroundColor Green
} else {
    Write-Host "✅ Chocolatey از قبل نصب شده" -ForegroundColor Green
}

# Refresh environment
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# ============================================================
# مرحله ۲: نصب Node.js
# ============================================================
Write-Host ""
Write-Host "[۲/۸] نصب Node.js..." -ForegroundColor Yellow

if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    choco install nodejs-lts -y --force
    Write-Host "✅ Node.js نصب شد" -ForegroundColor Green
} else {
    Write-Host "✅ Node.js از قبل نصب شده" -ForegroundColor Green
}

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# ============================================================
# مرحله ۳: نصب Git
# ============================================================
Write-Host ""
Write-Host "[۳/۸] نصب Git..." -ForegroundColor Yellow

if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    choco install git -y --force
    Write-Host "✅ Git نصب شد" -ForegroundColor Green
} else {
    Write-Host "✅ Git از قبل نصب شده" -ForegroundColor Green
}

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# ============================================================
# مرحله ۴: نصب MongoDB
# ============================================================
Write-Host ""
Write-Host "[۴/۸] نصب MongoDB..." -ForegroundColor Yellow

if (!(Test-Path "C:\Program Files\MongoDB\Server")) {
    choco install mongodb -y --force
    Write-Host "✅ MongoDB نصب شد" -ForegroundColor Green
} else {
    Write-Host "✅ MongoDB از قبل نصب شده" -ForegroundColor Green
}

# Create data directory
if (!(Test-Path "C:\data\db")) {
    New-Item -ItemType Directory -Force -Path "C:\data\db"
}

# Start MongoDB service
Write-Host "  در حال راه‌اندازی MongoDB..." -ForegroundColor Yellow
try {
    $mongoService = Get-Service -Name "MongoDB" -ErrorAction SilentlyContinue
    if ($mongoService) {
        if ($mongoService.Status -ne "Running") {
            Start-Service -Name "MongoDB"
        }
        Write-Host "✅ MongoDB در حال اجراست" -ForegroundColor Green
    } else {
        # Try to start mongod manually
        $mongoPath = Get-ChildItem "C:\Program Files\MongoDB\Server" -Directory | Select-Object -First 1
        if ($mongoPath) {
            $mongodExe = Join-Path $mongoPath.FullName "bin\mongod.exe"
            if (Test-Path $mongodExe) {
                Start-Process -FilePath $mongodExe -ArgumentList "--dbpath", "C:\data\db", "--port", "27017" -WindowStyle Hidden
                Start-Sleep -Seconds 5
                Write-Host "✅ MongoDB در حال اجراست" -ForegroundColor Green
            }
        }
    }
} catch {
    Write-Host "⚠️ MongoDB service یافت نشد - ممکن است نیاز به راه‌اندازی دستی باشد" -ForegroundColor Yellow
}

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# ============================================================
# مرحله ۵: نصب PM2
# ============================================================
Write-Host ""
Write-Host "[۵/۸] نصب PM2..." -ForegroundColor Yellow

npm install -g pm2 pm2-windows-startup
Write-Host "✅ PM2 نصب شد" -ForegroundColor Green

# Setup PM2 startup
pm2-startup install

# ============================================================
# مرحله ۶: دانلود پروژه از گیت‌هاب
# ============================================================
Write-Host ""
Write-Host "[۶/۸] دانلود پروژه..." -ForegroundColor Yellow

$projectsDir = "C:\myshop"
if (!(Test-Path $projectsDir)) {
    New-Item -ItemType Directory -Force -Path $projectsDir
}

# Clone backend
if (!(Test-Path "$projectsDir\backend")) {
    Write-Host "  دانلود بک‌اند..." -ForegroundColor Yellow
    git clone https://github.com/amiraliSite/myshop-backend.git "$projectsDir\backend"
} else {
    Write-Host "  آپدیت بک‌اند..." -ForegroundColor Yellow
    Set-Location "$projectsDir\backend"
    git pull
}

# Clone frontend
if (!(Test-Path "$projectsDir\frontend")) {
    Write-Host "  دانلود فرانت..." -ForegroundColor Yellow
    git clone https://github.com/sofiyabahari465-tech/myshop-panel.git "$projectsDir\frontend"
} else {
    Write-Host "  آپدیت فرانت..." -ForegroundColor Yellow
    Set-Location "$projectsDir\frontend"
    git pull
}

# ============================================================
# مرحله ۷: نصب وابستگی‌ها
# ============================================================
Write-Host ""
Write-Host "[۷/۸] نصب وابستگی‌ها..." -ForegroundColor Yellow

# Backend
Write-Host "  نصب وابستگی‌های بک‌اند..." -ForegroundColor Yellow
Set-Location "$projectsDir\backend"
npm install

# Frontend
Write-Host "  نصب وابستگی‌های فرانت..." -ForegroundColor Yellow
Set-Location "$projectsDir\frontend"
npm install

# Build frontend
Write-Host "  بیلد فرانت..." -ForegroundColor Yellow
npm run build

# ============================================================
# مرحله ۸: کانفیگ و راه‌اندازی
# ============================================================
Write-Host ""
Write-Host "[۸/۸] کانفیگ و راه‌اندازی..." -ForegroundColor Yellow

# Create .env for backend
$envContent = @"
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myshop
JWT_SECRET=mehr-holding-secret-key-2026-change-this
PAYAMITO_USERNAME=0079412009
PAYAMITO_PASSWORD=1417c30b-9799-4993-bc6a-e602feca13c5
PAYAMITO_BODY_ID=547695
PAYAMITO_FROM_NUMBER=10002648774084
ANNOUNCEMENT_SMS_PATTERN=568596
FRONTEND_URL=http://yadakpanel.com
"@

$envPath = "$projectsDir\backend\.env"
$envContent | Out-File -FilePath $envPath -Encoding UTF8 -Force
Write-Host "✅ فایل .env ساخته شد" -ForegroundColor Green

# Create frontend .env.production
$feEnvContent = "VITE_API_URL=http://api.yadakpanel.com/api"
$feEnvPath = "$projectsDir\frontend\.env.production"
$feEnvContent | Out-File -FilePath $feEnvPath -Encoding UTF8 -Force

# Rebuild frontend with new API URL
Write-Host "  بیلد مجدد فرانت با آدرس API جدید..." -ForegroundColor Yellow
Set-Location "$projectsDir\frontend"
npm run build

# Start backend with PM2
Write-Host "  راه‌اندازی بک‌اند..." -ForegroundColor Yellow
Set-Location "$projectsDir\backend"
pm2 delete myshop-backend 2>$null
pm2 start index.js --name myshop-backend
pm2 save

# ============================================================
# ایجاد سرویس فرانت (Static file server)
# ============================================================
Write-Host ""
Write-Host "  راه‌اندازی سرور فرانت..." -ForegroundColor Yellow

$staticServer = @"
const http = require('http');
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const port = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.wasm': 'application/wasm',
    '.map': 'application/json',
};

const server = http.createServer((req, res) => {
    let filePath = path.join(distPath, req.url);
    
    if (req.url === '/' || req.url === '') {
        filePath = path.join(distPath, 'index.html');
    }
    
    // SPA routing - serve index.html for non-file routes
    if (!path.extname(filePath) && !req.url.includes('/assets/')) {
        filePath = path.join(distPath, 'index.html');
    }
    
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Fallback to index.html for SPA
            fs.readFile(path.join(distPath, 'index.html'), (err2, data2) => {
                if (err2) {
                    res.writeHead(404);
                    res.end('Not found');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data2);
                }
            });
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log('Frontend server running on port ' + port);
});
"@

$staticServerPath = "$projectsDir\frontend\server.js"
$staticServer | Out-File -FilePath $staticServerPath -Encoding UTF8 -Force

pm2 delete myshop-frontend 2>$null
Set-Location "$projectsDir\frontend"
pm2 start server.js --name myshop-frontend
pm2 save

# ============================================================
# نصب و کانفیگ Nginx (Reverse Proxy)
# ============================================================
Write-Host ""
Write-Host "  نصب Nginx..." -ForegroundColor Yellow
choco install nginx -y --force

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Nginx config
$nginxConf = @"
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    client_max_body_size 100M;
    
    # gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    
    # Frontend (yadakpanel.com)
    server {
        listen 80;
        server_name yadakpanel.com www.yadakpanel.com;
        
        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_cache_bypass \$http_upgrade;
        }
    }
    
    # Backend API (api.yadakpanel.com)
    server {
        listen 80;
        server_name api.yadakpanel.com;
        
        location / {
            proxy_pass http://127.0.0.1:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_cache_bypass \$http_upgrade;
        }
    }
}
"@

$nginxPath = "C:\tools\nginx\conf\nginx.conf"
if (Test-Path $nginxPath) {
    $nginxConf | Out-File -FilePath $nginxPath -Encoding UTF8 -Force
    Write-Host "✅ Nginx کانفیگ شد" -ForegroundColor Green
    
    # Stop and start nginx
    taskkill /f /im nginx.exe 2>$null
    Start-Sleep -Seconds 2
    Set-Location "C:\tools\nginx"
    Start-Process -FilePath ".\nginx.exe" -WindowStyle Hidden
    Write-Host "✅ Nginx اجرا شد" -ForegroundColor Green
} else {
    # Try alternative path
    $altNginxPath = "C:\Program Files\nginx\conf\nginx.conf"
    if (Test-Path $altNginxPath) {
        $nginxConf | Out-File -FilePath $altNginxPath -Encoding UTF8 -Force
        Write-Host "✅ Nginx کانفیگ شد" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Nginx نصب نشد - از IIS یا سرور داخلی استفاده می‌شود" -ForegroundColor Yellow
    }
}

# ============================================================
# فایروال - باز کردن پورت‌ها
# ============================================================
Write-Host ""
Write-Host "  تنظیم فایروال..." -ForegroundColor Yellow

# Open port 80 (HTTP)
New-NetFirewallRule -DisplayName "HTTP-80" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow -ErrorAction SilentlyContinue
# Open port 443 (HTTPS)
New-NetFirewallRule -DisplayName "HTTPS-443" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow -ErrorAction SilentlyContinue
# Open port 5000 (Backend API)
New-NetFirewallRule -DisplayName "Backend-5000" -Direction Inbound -Protocol TCP -LocalPort 5000 -Action Allow -ErrorAction SilentlyContinue
# Open port 3389 (RDP)
New-NetFirewallRule -DisplayName "RDP-3389" -Direction Inbound -Protocol TCP -LocalPort 3389 -Action Allow -ErrorAction SilentlyContinue
# Open port 27017 (MongoDB - only for local access)
# New-NetFirewallRule -DisplayName "MongoDB-27017" -Direction Inbound -Protocol TCP -LocalPort 27017 -Action Allow -ErrorAction SilentlyContinue

Write-Host "✅ فایروال تنظیم شد" -ForegroundColor Green

# ============================================================
# خلاصه نهایی
# ============================================================
Write-Host ""
Write-Host "================================================" -ForegroundColor Green
Write-Host "  ✅ نصب کامل شد!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""
Write-Host "اطلاعات سیستم:" -ForegroundColor Cyan
Write-Host "  بک‌اند: http://localhost:5000"
Write-Host "  فرانت: http://localhost:3000"
Write-Host "  MongoDB: localhost:27017"
Write-Host ""
Write-Host "آدرس‌های سایت (بعد از تنظیم DNS):" -ForegroundColor Cyan
Write-Host "  سایت: http://yadakpanel.com"
Write-Host "  API: http://api.yadakpanel.com"
Write-Host ""
Write-Host "مدیریت PM2:" -ForegroundColor Cyan
Write-Host "  pm2 status     - مشاهده وضعیت"
Write-Host "  pm2 logs        - مشاهده لاگ‌ها"
Write-Host "  pm2 restart all - ری‌استارت همه"
Write-Host ""
Write-Host "⚠️ نکات مهم:" -ForegroundColor Yellow
Write-Host "  ۱. DNS دامنه رو ست کن (A record به IP سرور)"
Write-Host "  ۲. برای SSL، بعداً Certbot رو نصب کن"
Write-Host "  ۳. رمز admin پیش‌فرض: admin/admin123"
Write-Host "  ۴. فایل .env در: C:\myshop\backend\.env"
Write-Host ""
Write-Host "برای تست، این آدرس رو در مرورگر باز کن:" -ForegroundColor Green
Write-Host "  http://localhost:3000"
Write-Host ""
