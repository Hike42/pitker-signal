import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests',fullyParallel:true,workers:2,use:{baseURL:'http://localhost:3222'},webServer:{command:'npm run start',url:'http://localhost:3222',reuseExistingServer:!process.env.CI,timeout:120000}});
