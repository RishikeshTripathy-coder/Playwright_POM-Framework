import { PlaywrightTestConfig, devices } from '@playwright/test';

export const config: PlaywrightTestConfig = {
    testMatch:["tests/LoginTest/*.ts"
    ],
    use: {
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        actionTimeout: 5000,
        headless: process.env.ci ? true : true,
        screenshot: process.env.ci ? 'off' : 'only-on-failure',
        video: process.env.ci ? 'off' : 'retry-with-video',
    },
    reporter: process.env.ci ? [["junit", {
        outputFile: 'results.xml', open: 'on-failure'
    }]] : [["dot"], 
        ["json", {
        outputFile: "test-results/jsonTestReports.json", open: 'never'
    }], ["html", {
        outputFile: "test-results/htmlTestReports.html", open: 'never'
    }], ['allure-playwright']],
    retries: process.env.ci ? 1 : 0,
    fullyParallel: false,
    testDir: './tests',
    workers: process.env.ci ? 2 : 3,
    outputDir: './test-results',
    projects: [
        {
            name: 'chromium',
            use: {
              ...devices['Desktop Chrome'],
          },
        },
        // {
        //   name: 'firefox',
        //   use: {
        //     ...devices['Desktop Firefox'],
        //   },
        // },
    //     {
    //       name: 'webkit',
    //       use: {
    //         ...devices['Desktop Safari'],
    //       },
    //     }
    ]
};

export default config;