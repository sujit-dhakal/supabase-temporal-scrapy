import * as workflow from 'npm:@temporalio/workflow';
const { proxyActivities } = workflow;
import type * as activities from './activities';

export async function example(): Promise<string> {

  const { activity } = proxyActivities<typeof activities>({
    startToCloseTimeout: '10 minute',
  });

  return await activity();
}