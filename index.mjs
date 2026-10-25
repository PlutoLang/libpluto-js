const libpluto = new Promise(function(resolve, reject)
{
	if (typeof window != "undefined")
	{
		const og_define = window.define;
		window.define = function(_, f)
		{
			window.define = og_define;
			resolve(f());
		};
		window.define.amd = true;
	}
	import("./libpluto.js").then(function(lib)
	{
		if ("default" in lib)
		{
			resolve(lib.default);
		}
		else if (typeof window == "undefined")
		{
			reject(new Error("Could not load Emscripten module"));
		}
	});
});

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
export const mod = await (await libpluto)(opts);

import wrapper from "./libpluto-wrapper.mjs";
export const { LUA_OK, LUA_YIELD, LUA_ERRRUN, LUA_ERRSYNTAX, LUA_ERRMEM, LUA_ERRERR, LUA_TNONE, LUA_TNIL, LUA_TBOOLEAN, LUA_TLIGHTUSERDATA, LUA_TNUMBER, LUA_TSTRING, LUA_TTABLE, LUA_TFUNCTION, LUA_TUSERDATA, LUA_TTHREAD, LUA_NUMTYPES, LUA_MULTRET, LUA_MINSTACK, LUA_REGISTRYINDEX, LUA_RIDX_GLOBALS, LUA_RIDX_MAINTHREAD, LUA_REFNIL, LUA_NOREF, LUA_OPADD, LUA_OPSUB, LUA_OPMUL, LUA_OPMOD, LUA_OPPOW, LUA_OPDIV, LUA_OPIDIV, LUA_OPBAND, LUA_OPBOR, LUA_OPBXOR, LUA_OPSHL, LUA_OPSHR, LUA_OPUNM, LUA_OPBNOT, LUA_OPEQ, LUA_OPLT, LUA_OPLE, LUA_GCSTOP, LUA_GCRESTART, LUA_GCCOLLECT, LUA_GCCOUNT, LUA_GCCOUNTB, LUA_GCSTEP, LUA_GCISRUNNING, LUA_GCGEN, LUA_GCINC, LUA_GCPARAM, malloc, luaL_newstate, luaL_openselectedlibs, luaL_openlibs, luaL_loadstring, luaL_loadbufferx, lua_callk, lua_pcallk, lua_getglobal, lua_type, lua_typename, lua_pushnil, lua_pushstring, lua_pushlstring, lua_pushinteger, lua_pushnumber, lua_pushboolean, lua_pushthread, lua_istrue, lua_isinteger, lua_isnumber, lua_isstring, lua_isuserdata, lua_iscfunction, lua_isyieldable, lua_toboolean, lua_tolstring, lua_tointegerx, lua_tonumberx, lua_version, lua_settop, lua_absindex, lua_checkstack, lua_rotate, lua_copy, lua_arith, lua_rawequal, lua_compare, lua_setglobal, lua_newthread, lua_xmove, lua_closethread, lua_status, lua_resume, lua_gettop, lua_pushvalue, lua_concat, lua_len, lua_stringtonumber, luaL_ref, lua_rawgeti, lua_rawseti, lua_rawget, lua_rawset, luaL_unref, lua_next, lua_createtable, lua_gettable, lua_settable, lua_getfield, lua_setfield, lua_geti, lua_seti, lua_getmetatable, lua_setmetatable, lua_toclose, lua_closeslot, luaL_loadfilex, lua_close, lua_call, lua_pcall, lua_pop, lua_newtable, lua_pushglobaltable, lua_upvalueindex, lua_tonumber, lua_tointeger, lua_tostring, lua_isnil, lua_isboolean, lua_istable, lua_isfunction, lua_isnone, lua_isnoneornil } = wrapper(mod);
