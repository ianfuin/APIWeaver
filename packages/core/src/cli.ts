import { cac } from 'cac';
// import { input } from '@inquirer/prompts';

import { VERSION } from './constants';
import { loadConfigFromFile } from './config';
import { Manager } from './manager';

interface GlobalCLIOptions {
  '--'?: string[];
  config?: string;
  name?: string;
}

interface GenerateCLIOptions {
  generateAll?: boolean;
}

async function createManager(options: GlobalCLIOptions, root?: string) {
  const res = await loadConfigFromFile(options?.config, root);
  if (!res) return;

  const manager = new Manager(res.config, res.path);

  if (options?.name) {
    manager.setCurrentOriginName(options.name);
  }

  return manager;
}

const cli = cac('aw');

// interface ServerOptions {
//   host?: string;
//   port?: number;
//   open?: boolean | string;
// }

// const convertHost = (v: unknown) => {
//   if (typeof v === 'number') {
//     return String(v);
//   }
//   return v;
// };

cli
  .option('-c, --config <file>', `[string] use specified config file`)
  .option('-n, --name <originName>', `[string] config origin name`);

// cli
//   .command('[root]', 'start aw server') // default command
//   .alias('serve')
//   .alias('dev')
//   .option('--host [host]', `[string] specify hostname`, { type: [convertHost] })
//   .option('--port <port>', `[number] specify port`)
//   .option('--open [path]', `[boolean | string] open browser on startup`)
//   .action(
//     async (root: string, options: ServerOptions & GlobalCLIOptions) => {},
//   );

cli
  .command('gen [root]', 'start aw generate')
  .option('-a, --all <generateAll>', `[boolean] generate all origin`)
  .action(
    async (root: string, options: GlobalCLIOptions & GenerateCLIOptions) => {
      const manager = await createManager(options, root);
      if (!manager) return;

      manager.setCurrentOriginName(
        options?.name || manager.getOriginNames()[0],
      );

      options.generateAll ? manager.generate() : manager.generateAll();
    },
  );

cli
  .command('standardModel [root]', 'get aw standardModel')
  .action(async (root: string, options: GlobalCLIOptions) => {
    const manager = await createManager(options, root);
    if (!manager) return;

    const originManager = manager.getCurrentOriginManager();
    return await originManager?.getStandardModel();
  });

cli.help();
cli.version(VERSION);

cli.parse();

async function run() {
  // const answer = await input({ message: 'Enter your name' });
  // console.log(answer);
}

run();
