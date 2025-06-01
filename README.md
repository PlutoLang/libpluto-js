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
