import { defineConfig } from '@playwright/test';
const port = process.env.TEST_PORT || '3222';
const baseURL = `http://localhost:${port}`;
export default defineConfig({testDir:'./tests',fullyParallel:true,workers:2,use:{baseURL},webServer:{command:`next start --hostname localhost --port ${port}`,url:baseURL,reuseExistingServer:!process.env.CI,timeout:120000}});
