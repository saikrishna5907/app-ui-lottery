This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Playwright for automation testing

Run this script to laund automation tests

```bash
pnpm test:e2e
```

## Setup

This project uses wallet connect to connect to web3 wallets

Step 1: Get projectId from below by creating a project.

```link
https://cloud.walletconnect.com
```

Step 2:
Create .env.local root of this repository and add the project id that you create in wallet collect as below

```
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=<your_project_id>
```

Above setup should be able to get you to start the project by running `pnpm dev`

## Tech Stack & libraries used

1. [NextJS](https://nextjs.org)
2. [Tanstack Query](https://tanstack.com)
3. [wagmi](https://wagmi.sh/) for interacting with blockchain from frontend
4. [web3modal for wagmi](https://www.npmjs.com/package/@web3modal/wagmi)
5. [ethers](https://docs.ethers.org/v5)
6. [Tailwind](https://tailwindcss.com/) with [daisyui](react-toastify)
7. [next-intl for Internationalization](https://next-intl-docs.vercel.app)
8. [vitest](https://vitest.dev) for unit testing
9. [Playwright](https://playwright.dev) for automation tests
