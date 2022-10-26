# next.js v13 survey 👀

## /app ディレクトリ
- mext.config.js内にexperimental appDir: trueを指定
- プロダクションはまだやめたほうがいいよと書いてある
- これからのappディレクトリのアップデートの[ロードマップ](https://beta.nextjs.org/docs/app-directory-roadmap)
- 各ディレクトリ内に含めるファイル（名前は変えられない）
  -  page.tsx
  -  template.tsx
  -  erorr.tsx
  -  loading.tsx
  -  layout.tsx
  -  head.tsx 
  -  ... etc

### layoutとtemplateの違い
template: https://beta.nextjs.org/docs/routing/pages-and-layouts#templates

> テンプレートは、各子レイアウトまたはページをラップするという点でレイアウトに似ています。ルート間で持続し、状態を維持するレイアウトとは異なり、テンプレートは、ナビゲーション時にそれぞれの子の新しいインスタンスを作成します。これは、ユーザーがテンプレートを共有するルート間を移動すると、コンポーネントの新しいインスタンスがマウントされ、DOM 要素が再作成され、状態が保持されず、効果が再同期されることを意味します。

また、layoutとtemplateを両方使うと以下のような構造になる

```tsx
<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>
```


### (hogehoge) ディレクトリの役割
その配下だけに作用するlayoutを配置したりできる。

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

→あんまり上手く動かせなかったので後で確認する

## server components周り
server components以降では`'use client'`の記載をしない限り自動でServerComponentの判定が行われる
## Routing周り
### useRouter と server components
https://beta.nextjs.org/docs/routing/linking-and-navigating#userouter-hook

server components以降ではuseRouterのようなhooksはclient componentでのみ使用可能になる。
また、利用する場合には以下のような記述が必要となる。

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

### ハードナビゲーションとソフトナビゲーション

#### herd
キャッシュが無効になり、サーバーはデータを再フェッチして、変更されたセグメントを再レンダリングします。


#### soft
変更されたセグメントのキャッシュが再利用され (存在する場合)、サーバーに対してデータの新しい要求は行われません。

## component単位でのレンダリング(server components)
fetch API の第2引数にcacheプロパティを渡せるようになる
- default
- force-cache
- no-cache
- no-store
- only-if-cached
- reload
これプラス、revalidateの指定もあり、ここら辺の指定でSSG,ISRみたいなハンドリングができる🙆‍♂️

### server componentsはasyncをつける

### beta段階ではまだ型定義が曖昧

### でかいライブラリをserver componentで使う
と、クライアントサイドのjsのバンドルサイズに含まれなくなってよさそう。

### インタラクティブなコンポーネント
は、server componentとして扱うことはできない。（useStateやuseEffectなどが使えない）
ユーザーのアクションが必要なものなどはclient componentとして扱う

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
