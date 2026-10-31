$ErrorActionPreference = "Continue"
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Mehr Holding Installer" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install Chocolatey
Write-Host "[1/8] Installing Chocolatey..." -ForegroundColor Yellow
if (!(Test-Path "C:\ProgramData\chocolatey\bin\choco.exe")) {
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    Write-Host "OK Chocolatey installed" -ForegroundColor Green
} else {
    Write-Host "OK Chocolatey already installed" -ForegroundColor Green
}
$env:Path = $env:Path + ";C:\ProgramData\chocolatey\bin"

# Step 2: Install Node.js
Write-Host "[2/8] Installing Node.js..." -ForegroundColor Yellow
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    choco install nodejs-lts -y --force
    Write-Host "OK Node.js installed" -ForegroundColor Green
} else {
    Write-Host "OK Node.js already installed" -ForegroundColor Green
}
$env:Path = $env:Path + ";C:\Program Files\nodejs"

# Step 3: Install Git
Write-Host "[3/8] Installing Git..." -ForegroundColor Yellow
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    choco install git -y --force
    Write-Host "OK Git installed" -ForegroundColor Green
} else {
    Write-Host "OK Git already installed" -ForegroundColor Green
}
$env:Path = $env:Path + ";C:\Program Files\Git\cmd"

# Step 4: Install MongoDB
Write-Host "[4/8] Installing MongoDB..." -ForegroundColor Yellow
if (!(Test-Path "C:\Program Files\MongoDB\Server")) {
    choco install mongodb -y --force
    Write-Host "OK MongoDB installed" -ForegroundColor Green
} else {
    Write-Host "OK MongoDB already installed" -ForegroundColor Green
}
if (!(Test-Path "C:\data\db")) {
    New-Item -ItemType Directory -Force -Path "C:\data\db"
}
Write-Host "  Starting MongoDB..." -ForegroundColor Yellow
try {
    $svc = Get-Service -Name "MongoDB" -ErrorAction SilentlyContinue
    if ($svc) {
        if ($svc.Status -ne "Running") { Start-Service -Name "MongoDB" }
        Write-Host "OK MongoDB running" -ForegroundColor Green
    }
} catch {
    $mongoDir = Get-ChildItem "C:\Program Files\MongoDB\Server" -Directory -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($mongoDir) {
        $exe = Join-Path $mongoDir.FullName "bin\mongod.exe"
        if (Test-Path $exe) {
            Start-Process -FilePath $exe -ArgumentList "--dbpath","C:\data\db","--port","27017" -WindowStyle Hidden
            Start-Sleep -Seconds 5
            Write-Host "OK MongoDB running" -ForegroundColor Green
        }
    }
}

# Step 5: Install PM2
Write-Host "[5/8] Installing PM2..." -ForegroundColor Yellow
$env:Path = $env:Path + ";C:\Program Files\nodejs"
$env:Path = $env:Path + ";C:\Users\Administrator\AppData\Roaming\npm"
npm install -g pm2 pm2-windows-startup
Write-Host "OK PM2 installed" -ForegroundColor Green

# Step 6: Download projects
Write-Host "[6/8] Downloading projects..." -ForegroundColor Yellow
$projDir = "C:\myshop"
if (!(Test-Path $projDir)) { New-Item -ItemType Directory -Force -Path $projDir }

if (!(Test-Path "$projDir\backend")) {
    Write-Host "  Cloning backend..." -ForegroundColor Yellow
    git clone https://github.com/amiraliSite/myshop-backend.git "$projDir\backend"
} else {
    Set-Location "$projDir\backend"
    git pull
}

if (!(Test-Path "$projDir\frontend")) {
    Write-Host "  Cloning frontend..." -ForegroundColor Yellow
    git clone https://github.com/sofiyabahari465-tech/myshop-panel.git "$projDir\frontend"
} else {
    Set-Location "$projDir\frontend"
    git pull
}

# Step 7: Install dependencies
Write-Host "[7/8] Installing dependencies..." -ForegroundColor Yellow
Write-Host "  Backend npm install..." -ForegroundColor Yellow
Set-Location "$projDir\backend"
npm install

Write-Host "  Frontend npm install..." -ForegroundColor Yellow
Set-Location "$projDir\frontend"
npm install

# Step 8: Config and start
Write-Host "[8/8] Configuring and starting..." -ForegroundColor Yellow

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
$envContent | Out-File -FilePath "$projDir\backend\.env" -Encoding ASCII -Force
Write-Host "OK .env created" -ForegroundColor Green

# Create frontend .env.production
$feEnv = "VITE_API_URL=http://api.yadakpanel.com/api"
$feEnv | Out-File -FilePath "$projDir\frontend\.env.production" -Encoding ASCII -Force

# Build frontend
Write-Host "  Building frontend..." -ForegroundColor Yellow
Set-Location "$projDir\frontend"
npm run build

# Start backend with PM2
Write-Host "  Starting backend..." -ForegroundColor Yellow
Set-Location "$projDir\backend"
pm2 delete myshop-backend 2>$null
pm2 start index.js --name myshop-backend
pm2 save

# Create static file server for frontend
$serverCode = @"
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
    '.map': 'application/json',
};
const server = http.createServer((req, res) => {
    let filePath = path.join(distPath, req.url);
    if (req.url === '/' || req.url === '') {
        filePath = path.join(distPath, 'index.html');
    }
    if (!path.extname(filePath) && !req.url.includes('/assets/')) {
        filePath = path.join(distPath, 'index.html');
    }
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    fs.readFile(filePath, (err, data) => {
        if (err) {
            fs.readFile(path.join(distPath, 'index.html'), (err2, data2) => {
                if (err2) { res.writeHead(404); res.end('Not found'); }
                else { res.writeHead(200, {'Content-Type': 'text/html'}); res.end(data2); }
            });
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        }
    });
});
server.listen(port, () => { console.log('Frontend server running on port ' + port); });
"@
$serverCode | Out-File -FilePath "$projDir\frontend\server.js" -Encoding ASCII -Force

pm2 delete myshop-frontend 2>$null
Set-Location "$projDir\frontend"
pm2 start server.js --name myshop-frontend
pm2 save

# Install Nginx
Write-Host "  Installing Nginx..." -ForegroundColor Yellow
choco install nginx -y --force

# Nginx config
$nginxConf = @"
worker_processes 1;
events { worker_connections 1024; }
http {
    include mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    client_max_body_size 100M;
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    server {
        listen 80;
        server_name yadakpanel.com www.yadakpanel.com localhost;
        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade `$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host `$host;
            proxy_set_header X-Real-IP `$remote_addr;
            proxy_set_header X-Forwarded-For `$proxy_add_x_forwarded_for;
            proxy_cache_bypass `$http_upgrade;
        }
    }
    server {
        listen 80;
        server_name api.yadakpanel.com;
        location / {
            proxy_pass http://127.0.0.1:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade `$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host `$host;
            proxy_set_header X-Real-IP `$remote_addr;
            proxy_set_header X-Forwarded-For `$proxy_add_x_forwarded_for;
            proxy_cache_bypass `$http_upgrade;
        }
    }
}
"@

$nginxPaths = @("C:\tools\nginx\conf\nginx.conf","C:\Program Files\nginx\conf\nginx.conf")
foreach ($np in $nginxPaths) {
    if (Test-Path $np) {
        $nginxConf | Out-File -FilePath $np -Encoding ASCII -Force
        Write-Host "OK Nginx configured" -ForegroundColor Green
        taskkill /f /im nginx.exe 2>$null
        Start-Sleep -Seconds 2
        $ngDir = Split-Path $np -Parent
        $ngParent = Split-Path $ngDir -Parent
        $ngExe = Join-Path $ngParent "nginx.exe"
        if (Test-Path $ngExe) {
            Start-Process -FilePath $ngExe -WindowStyle Hidden
            Write-Host "OK Nginx started" -ForegroundColor Green
        }
        break
    }
}

# Firewall
Write-Host "  Setting firewall..." -ForegroundColor Yellow
New-NetFirewallRule -DisplayName "HTTP-80" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow -ErrorAction SilentlyContinue
New-NetFirewallRule -DisplayName "HTTPS-443" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow -ErrorAction SilentlyContinue
New-NetFirewallRule -DisplayName "Backend-5000" -Direction Inbound -Protocol TCP -LocalPort 5000 -Action Allow -ErrorAction SilentlyContinue
New-NetFirewallRule -DisplayName "Frontend-3000" -Direction Inbound -Protocol TCP -LocalPort 3000 -Action Allow -ErrorAction SilentlyContinue
Write-Host "OK Firewall set" -ForegroundColor Green

# Done
Write-Host ""
Write-Host "================================================" -ForegroundColor Green
Write-Host "  INSTALLATION COMPLETE!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "MongoDB: localhost:27017" -ForegroundColor Cyan
Write-Host ""
Write-Host "Open browser and go to: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Admin login: admin / admin123" -ForegroundColor Yellow
Write-Host ""
