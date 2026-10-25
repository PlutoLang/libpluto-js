# libpluto-js

JavaScript bindings for Pluto, a Lua dialect.

## Usage

To use this via NodeJS and webpack, you only need to `npm i libpluto` and then you can import it like so:

```js
import { luaL_newstate, luaL_openlibs, luaL_loadstring, lua_callk, lua_tolstring } from "libpluto";

const L = luaL_newstate();
luaL_openlibs(L);
luaL_loadstring(L, `return $"Hello from {_PVERSION}!"`);
lua_callk(L, 0, 1, 0, 0);
console.log(lua_tolstring(L, -1, 0));
```

This can also be imported on plain old websites:

```html
<script type="module">
    import { /* ... */ } from "https://cdn.jsdelivr.net/gh/PlutoLang/libpluto-js@senpai/index.mjs";

    // ...
</script>
```

## A note on webpack

This library can be used with webpack, it just needs some help:
```js
import webpack from "webpack";

export default {
    // ...
    resolve: {
        // The Emscripten code doesn't need shims for Node APIs
        fallback: {
            child_process: false,
            crypto: false,
            fs: false,
            path: false
        }
    },
    plugins: [
        // Fix for webpack treating "node:xyz" as a URI scheme and failing with UnhandledSchemeError
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
            resource.request = resource.request.replace(/^node:/, "");
        }),
    ],
    performance: {
        // Suppress the asset size warning
        maxAssetSize: 4_000_000
    },
};
````
