# next.js v13 survey ð

## /app ãã£ã¬ã¯ããª
- mext.config.jsåã«experimental appDir: trueãæå®
- ãã­ãã¯ã·ã§ã³ã¯ã¾ã ãããã»ãããããã¨æ¸ãã¦ãã
- ããããã®appãã£ã¬ã¯ããªã®ã¢ãããã¼ãã®[ã­ã¼ãããã](https://beta.nextjs.org/docs/app-directory-roadmap)
- åãã£ã¬ã¯ããªåã«å«ãããã¡ã¤ã«ï¼ååã¯å¤ããããªãï¼
  -  page.tsx
  -  template.tsx
  -  erorr.tsx
  -  loading.tsx
  -  layout.tsx
  -  head.tsx 
  -  ... etc

### layoutã¨templateã®éã
template: https://beta.nextjs.org/docs/routing/pages-and-layouts#templates

> ãã³ãã¬ã¼ãã¯ãåå­ã¬ã¤ã¢ã¦ãã¾ãã¯ãã¼ã¸ãã©ããããã¨ããç¹ã§ã¬ã¤ã¢ã¦ãã«ä¼¼ã¦ãã¾ããã«ã¼ãéã§æç¶ããç¶æãç¶­æããã¬ã¤ã¢ã¦ãã¨ã¯ç°ãªãããã³ãã¬ã¼ãã¯ãããã²ã¼ã·ã§ã³æã«ããããã®å­ã®æ°ããã¤ã³ã¹ã¿ã³ã¹ãä½æãã¾ããããã¯ãã¦ã¼ã¶ã¼ããã³ãã¬ã¼ããå±æããã«ã¼ãéãç§»åããã¨ãã³ã³ãã¼ãã³ãã®æ°ããã¤ã³ã¹ã¿ã³ã¹ããã¦ã³ããããDOM è¦ç´ ãåä½æãããç¶æãä¿æããããå¹æãååæããããã¨ãæå³ãã¾ãã

ã¾ããlayoutã¨templateãä¸¡æ¹ä½¿ãã¨ä»¥ä¸ã®ãããªæ§é ã«ãªã

```tsx
<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>
```


### (hogehoge) ãã£ã¬ã¯ããªã®å½¹å²
ãã®éä¸ã ãã«ä½ç¨ããlayoutãéç½®ãããã§ããã

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

âããã¾ãä¸æãåãããªãã£ãã®ã§å¾ã§ç¢ºèªãã

## server componentså¨ã
server componentsä»¥éã§ã¯`'use client'`ã®è¨è¼ãããªãéãèªåã§ServerComponentã®å¤å®ãè¡ããã
## Routingå¨ã
### useRouter ã¨ server components
https://beta.nextjs.org/docs/routing/linking-and-navigating#userouter-hook

server componentsä»¥éã§ã¯useRouterã®ãããªhooksã¯client componentã§ã®ã¿ä½¿ç¨å¯è½ã«ãªãã
ã¾ããå©ç¨ããå ´åã«ã¯ä»¥ä¸ã®ãããªè¨è¿°ãå¿è¦ã¨ãªãã

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  );
}
```

### ãã¼ãããã²ã¼ã·ã§ã³ã¨ã½ããããã²ã¼ã·ã§ã³

#### herd
ã­ã£ãã·ã¥ãç¡å¹ã«ãªãããµã¼ãã¼ã¯ãã¼ã¿ãåãã§ãããã¦ãå¤æ´ãããã»ã°ã¡ã³ããåã¬ã³ããªã³ã°ãã¾ãã


#### soft
å¤æ´ãããã»ã°ã¡ã³ãã®ã­ã£ãã·ã¥ãåå©ç¨ãã (å­å¨ããå ´å)ããµã¼ãã¼ã«å¯¾ãã¦ãã¼ã¿ã®æ°ããè¦æ±ã¯è¡ããã¾ããã

## componentåä½ã§ã®ã¬ã³ããªã³ã°(server components)
fetch API ã®ç¬¬2å¼æ°ã«cacheãã­ããã£ãæ¸¡ããããã«ãªã
- default
- force-cache
- no-cache
- no-store
- only-if-cached
- reload
ãããã©ã¹ãrevalidateã®æå®ãããããããè¾ºã®æå®ã§SSG,ISRã¿ãããªãã³ããªã³ã°ãã§ããðââï¸

### server componentsã¯asyncãã¤ãã

### betaæ®µéã§ã¯ã¾ã åå®ç¾©ãææ§

### ã§ããã©ã¤ãã©ãªãserver componentã§ä½¿ã
ã¨ãã¯ã©ã¤ã¢ã³ããµã¤ãã®jsã®ãã³ãã«ãµã¤ãºã«å«ã¾ããªããªã£ã¦ããããã

### ã¤ã³ã¿ã©ã¯ãã£ããªã³ã³ãã¼ãã³ã
ã¯ãserver componentã¨ãã¦æ±ããã¨ã¯ã§ããªããï¼useStateãuseEffectãªã©ãä½¿ããªãï¼
ã¦ã¼ã¶ã¼ã®ã¢ã¯ã·ã§ã³ãå¿è¦ãªãã®ãªã©ã¯client componentã¨ãã¦æ±ã

---
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
