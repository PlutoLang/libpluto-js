// Generated via ChatGPT. May need some automation to generate it from the cwraps in the future. Or the other way around?

export const LUA_OK: 0;
export const LUA_YIELD: 1;
export const LUA_ERRRUN: 2;
export const LUA_ERRSYNTAX: 3;
export const LUA_ERRMEM: 4;
export const LUA_ERRERR: 5;

export interface LibPlutoModule {
  cwrap: <T extends (...args: any[]) => any>(
    ident: string,
    returnType: string,
    argTypes: string[]
  ) => T;

  FS: {
    open: (path: string, flags: string) => number | { fd: number };
    write: (
      stream: number | { fd: number },
      buffer: Uint8Array,
      offset: number,
      length: number,
      position: number
    ) => number;
    close: (stream: number | { fd: number }) => void;

    writeFile: (path: string, data: Uint8Array | string, opts?: { encoding?: string; flags?: string }) => void;
    readFile?: (path: string, opts?: { encoding?: 'utf8' | 'binary' }) => string | Uint8Array;
    unlink?: (path: string) => void;
  };
}
export const mod: LibPlutoModule;

export const malloc: (size: number) => number;
export const luaL_newstate: () => number;
export const luaL_openselectedlibs: (L: number, load: number, preload: number) => void;
export const luaL_openlibs: (L: number) => void;
export const luaL_loadstring: (L: number, str: string) => number;
export const luaL_loadbufferx: (
  L: number,
  buf: Uint8Array,
  size: number,
  name: number,
  mode: number
) => number;
export const lua_callk: (
  L: number,
  nargs: number,
  nresults: number,
  ctx: number,
  k: number
) => void;
export const lua_getglobal: (L: number, name: string) => void;
export const lua_type: (L: number, idx: number) => number;
export const lua_pushnil: (L: number) => void;
export const lua_pushstring: (L: number, str: string) => void;
export const lua_pushlstring: (L: number, str: Uint8Array, len: number) => void;
export const lua_pushinteger: (L: number, n: number) => void;
export const lua_pushnumber: (L: number, n: number) => void;
export const lua_pushboolean: (L: number, b: number) => void;
export const lua_istrue: (L: number, idx: number) => number;
export const lua_isinteger: (L: number, idx: number) => number;
export const lua_tolstring: (L: number, idx: number, lenPtr: number) => string;
export const lua_tointegerx: (L: number, idx: number, isnum: number) => number;
export const lua_tonumberx: (L: number, idx: number, isnum: number) => number;
export const lua_settop: (L: number, idx: number) => void;
export const lua_setglobal: (L: number, name: string) => void;
export const lua_newthread: (L: number) => number;
export const lua_xmove: (from: number, to: number, n: number) => void;
export const lua_closethread: (L: number, thread: number) => void;
export const lua_status: (L: number) => number;
export const lua_resume: (
  L: number,
  from: number,
  nargs: number,
  ctx: number
) => number;
export const lua_gettop: (L: number) => number;
export const lua_pushvalue: (L: number, idx: number) => number;
export const luaL_ref: (L: number, t: number) => number;
export const lua_rawgeti: (L: number, t: number, ref: number) => void;
export const luaL_unref: (L: number, t: number, ref: number) => number;
export const lua_next: (L: number) => number;
export const lua_createtable: (L: number, narr: number, nrec: number) => void;
export const lua_settable: (L: number, idx: number) => void;
export const luaL_loadfilex: (
  L: number,
  filename: string,
  mode: number
) => number;
export const lua_close: (L: number) => void;

export const lua_pop: (L: number, n: number) => void;
