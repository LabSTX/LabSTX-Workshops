/***
 * You can access the simulation demo at https://stxer.xyz/simulations,
 * along with a link to a pre-run simulation result: https://stxer.xyz/simulations/mainnet/00000000000000000000000000000101.
 *
 * This demo showcases the full capabilities of the simulation API.
 * Feel free to fork and modify it to create your own custom version.
 *
 * The STXER SDK source code is available here: https://github.com/stxer/stxer-sdk
 */

import fs from 'node:fs';
import { boolCV, ClarityVersion } from '@stacks/transactions';
import { SimulationBuilder } from 'stxer';

SimulationBuilder.new()
  // or omit this to use tip height
  .useBlockHeight(130818)
  .addEvalCode(
    'SP000000000000000000002Q6VF78.pox',
    '(list block-height burn-block-height)'
  )
  // use this as the sender of the following steps
  .withSender('SP1K1A1PMGW2ZJCNF46NWZWHG8TS1D23EGH1KNK60')
  .addSTXTransfer({
    recipient: 'SP212Y5JKN59YP3GYG07K3S8W5SSGE4KH6B5STXER',
    amount: 10000,
  })
  .withSender('SP212Y5JKN59YP3GYG07K3S8W5SSGE4KH6B5STXER')
  .addContractDeploy({
    contract_name: 'test',
    source_code: fs.readFileSync('demo.clar', 'utf8'),
    // or omit this to use 0 fee, it's possible for simulation
    fee: 100,
    clarity_version: ClarityVersion.Clarity3,
  })
  .addContractCall({
    contract_id: 'SP212Y5JKN59YP3GYG07K3S8W5SSGE4KH6B5STXER.test',
    function_name: 'set-enabled',
    function_args: [boolCV(true)],
  })
  .addVarRead('SP212Y5JKN59YP3GYG07K3S8W5SSGE4KH6B5STXER.test', 'enabled')
  .addContractCall({
    contract_id: 'SP212Y5JKN59YP3GYG07K3S8W5SSGE4KH6B5STXER.test',
    function_name: 'set-enabled',
    function_args: [boolCV(false)],
  })
  // call readonly function
  .addEvalCode(
    'SP212Y5JKN59YP3GYG07K3S8W5SSGE4KH6B5STXER.test',
    '(get-enabled)'
  )
  // run arbitrary code
  .addEvalCode(
    'SP212Y5JKN59YP3GYG07K3S8W5SSGE4KH6B5STXER.test',
    `(stx-get-balance 'SP212Y5JKN59YP3GYG07K3S8W5SSGE4KH6B5STXER)`
  )
  .run()
  .catch(console.error);
