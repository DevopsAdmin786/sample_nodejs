#!/bin/sh
cd /var/www/html/
npm install
pm2 start index.js
