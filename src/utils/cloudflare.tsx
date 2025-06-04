import {
  createMiddleware,
  createServerFn,
  registerGlobalMiddleware,
} from '@tanstack/react-start';

// export async function getBindings() {
//   if (import.meta.env.DEV) {
//     const wrangler = await import('wrangler');
//     const { env } = await wrangler.getPlatformProxy<Env>();
//     return env;
//   }

//   return process.env as unknown as Env;
// }

const cloudflareContext = createMiddleware({ type: 'function' }).server(
  async (ctx) => {
    return ctx.next({
      context: {
        cloudflare: { ctx },
      },
    });
  }
);

registerGlobalMiddleware({
  middleware: [cloudflareContext],
});

const fn = createServerFn()
  .middleware([cloudflareContext])
  .handler(async ({ context }) => {
    console.log(context.cloudflare);
    // ...
  });
