import {Connection, Client} from "npm:@temporalio/client@^1.10.3"
import { serve } from "https://deno.land/std@0.177.1/http/server.ts"

serve(async () => {

  try {
    const connection = await Connection.connect({
      address: 'temporal:7233',
      tls: {
        insecure: false
      }
    });

    const client = new Client({
      connection
    });

    // const handle = await client.workflow.start(example, {
    //   taskQueue: 'scrapy-crawl',
    //   workflowId: 'workflow-scrapy-' + Date.now()
    // })

    // const result = handle.result();

    return new Response(
      `"connection successful"`,
      { headers : {"Content-Type": "application/json"}}
    )

  } catch (error) {
    if (error instanceof Error) {
      return new Response(
        `${error}`,
        { headers : {"Content-Type": "application/json"}}
      )
  }
}
})

