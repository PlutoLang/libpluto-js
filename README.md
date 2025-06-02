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

This library should work as-is with webpack, but your webpack config needs to specify that the Emscripten code doesn't need shims for Node APIs:
```js
    resolve: {
        fallback: {
            child_process: false,
            crypto: false,
            fs: false,
            path: false
        }
    },
```
And you might also want to suppress the asset size warning:
```js
    performance: {
        maxAssetSize: 2_000_000
    },
````
