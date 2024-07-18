import { defineConfig } from '@wagmi/cli';
import { foundry, hardhat, react } from '@wagmi/cli/plugins';

export default defineConfig(() => {
  const generatedPath = 'src/generated';

  if (process.env.CONTRACT_FRAMEWORK === 'HARDHAT') {
    return {
      out: `${generatedPath}/generated-hardhat.ts`,

      plugins: [
        hardhat({
          project: '../hardhat-smartcontract-lottery-fcc',
          artifacts: 'artifacts/',
        }),
        react(),
      ],
    };
  }

  if (process.env.CONTRACT_FRAMEWORK === 'FOUNDRY') {
    return {
      out: `${generatedPath}/generated-foundry.ts`,
      plugins: [
        foundry({
          forge: {
            build: true,
            rebuild: true,
          },
          project: '../lottery-contract',
          artifacts: 'out/Lottery.sol',
          exclude: ['devOpsTools.sol/**'],
        }),
        react(),
      ],
    };
  }

  throw new Error('Network not configured.');
});
