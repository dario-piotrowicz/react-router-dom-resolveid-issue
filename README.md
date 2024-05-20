# `react-router-dom` `resolveId` issue

## Reproduction steps
```sh
$ pnpm i
$ pnpm start
```

In the terminal output you will see:
```
'react-router-dom' resolves to /<...>/react-router-dom/dist/index.js?v=<...>
```

would it be possible to get the following instead?
```
'react-router-dom' resolves to /<...>/react-router-dom/dist/main.js?v=<...>
```

(basically `react-router-dom` gets resolved to this entrypoint: [index.js](https://github.com/remix-run/react-router/blob/7759e8e2912eb69f6dd63b2906490831a2154cfd/packages/react-router-dom/package.json#L23) whilst I'd like it to instead resolve to: [main.js](https://github.com/remix-run/react-router/blob/7759e8e2912eb69f6dd63b2906490831a2154cfd/packages/react-router-dom/package.json#L21))
