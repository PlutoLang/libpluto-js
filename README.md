## Installation

```
npm i libpluto
```

## Usage

```js
import { luaL_newstate, luaL_openlibs, luaL_loadstring, lua_callk, lua_tolstring } from "libpluto";

const L = luaL_newstate();
luaL_openlibs(L);
luaL_loadstring(L, `return $"Hello from {_PVERSION}!"`);
lua_callk(L, 0, 1, 0, 0);
console.log(lua_tolstring(L, -1, 0));
```

## A note on webpack

This library should work as-is with webpack (although it will raise a warning about the file size), but your webpack config needs to specify that the Emscripten code doesn't need shims for Node APIs:
```js
export default {
    resolve: {
        fallback: {
            child_process: false,
            crypto: false,
            fs: false,
            path: false
        }
    },
};
```
