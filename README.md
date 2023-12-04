### Nest Install in apps/server directory

```bash
nest new server --strict --skip-git --package-manager=pnpm
```

### Nextjs app in app/nextjs

```bash
pnpx create-next-app@latest
```
### Install packages into a specific apps
```bash
pnpm add @trpc/server zod --filter=server
```


### client
```bash
 pnpm add @trpc/server @trpc/client --filter=wen
```