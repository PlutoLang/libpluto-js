import libpluto from "./libpluto.js";

const opts = {};
if (typeof __webpack_require__ == "function")
{
	// Doing this instantiateWasm stuff takes ~100ms, so I'm not doing it by default, but it's needed for webpack.
	const wasmBinaryPromise = import("./libpluto-wasm-inlined.js");
	opts.instantiateWasm = (imports, onSuccess) => {
		return wasmBinaryPromise.then(wasmBinary => {
			WebAssembly.instantiate(wasmBinary.data, imports).then(arg => onSuccess(arg.instance, arg.module));
		});
	};
}
export const mod = await libpluto(opts);

export const malloc = mod.cwrap("malloc", "int", ["int"]);
export const luaL_newstate = mod.cwrap("luaL_newstate", "int", []);
export const luaL_openlibs = mod.cwrap("luaL_openlibs", "void", ["int"]);
export const luaL_loadstring = mod.cwrap("luaL_loadstring", "int", ["int", "string"]);
export const luaL_loadbufferx = mod.cwrap("luaL_loadbufferx", "int", ["int", "array", "int", "int", "int"]);
export const lua_callk = mod.cwrap("lua_callk", "void", ["int", "int", "int", "int", "int"]);
export const lua_getglobal = mod.cwrap("lua_getglobal", "void", ["int", "string"]);
export const lua_type = mod.cwrap("lua_type", "int", ["int", "int"]);
export const lua_pushnil = mod.cwrap("lua_pushnil", "void", ["int"]);
export const lua_pushstring = mod.cwrap("lua_pushstring", "void", ["int", "string"]);
export const lua_pushlstring = mod.cwrap("lua_pushlstring", "void", ["int", "array", "int"]);
export const lua_pushinteger = mod.cwrap("lua_pushinteger", "void", ["int", "int"]);
export const lua_pushnumber = mod.cwrap("lua_pushnumber", "void", ["int", "number"]);
export const lua_pushboolean = mod.cwrap("lua_pushboolean", "void", ["int", "int"]);
export const lua_istrue = mod.cwrap("lua_istrue", "int", ["int", "int"]);
export const lua_isinteger = mod.cwrap("lua_isinteger", "int", ["int", "int"]);
export const lua_tolstring = mod.cwrap("lua_tolstring", "string", ["int", "int", "int"]);
export const lua_tointegerx = mod.cwrap("lua_tointegerx", "int", ["int", "int", "int"]);
export const lua_tonumberx = mod.cwrap("lua_tonumberx", "number", ["int", "int", "int"]);
export const lua_settop = mod.cwrap("lua_settop", "void", ["int", "int"]);
export const lua_setglobal = mod.cwrap("lua_setglobal", "void", ["int", "string"]);
export const lua_newthread = mod.cwrap("lua_newthread", "int", ["int"]);
export const lua_xmove = mod.cwrap("lua_xmove", "void", ["int", "int", "int"]);
export const lua_closethread = mod.cwrap("lua_closethread", "void", ["int", "int"]);
export const lua_status = mod.cwrap("lua_status", "int", ["int"]);
export const lua_resume = mod.cwrap("lua_resume", "int", ["int", "int", "int", "int"]);
export const lua_gettop = mod.cwrap("lua_gettop", "int", ["int"]);
export const lua_pushvalue = mod.cwrap("lua_pushvalue", "int", ["int", "int"]);
export const luaL_ref = mod.cwrap("luaL_ref", "int", ["int", "int"]);
export const lua_rawgeti = mod.cwrap("lua_rawgeti", "void", ["int", "int", "int"]);
export const luaL_unref = mod.cwrap("luaL_unref", "int", ["int", "int", "int"]);
export const lua_next = mod.cwrap("lua_next", "int", ["int"]);
export const lua_createtable = mod.cwrap("lua_createtable", "void", ["int", "int", "int"]);
export const lua_settable = mod.cwrap("lua_settable", "void", ["int", "int"]);
export const luaL_loadfilex = mod.cwrap("luaL_loadfilex", "int", ["int", "string", "int"]);
export const lua_close = mod.cwrap("lua_close", "void", ["int"]);

export const lua_pop = (L, n) => lua_settop(L, -(n)-1);
