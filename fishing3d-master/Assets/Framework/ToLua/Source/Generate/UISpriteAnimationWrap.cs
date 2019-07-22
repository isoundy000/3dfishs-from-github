﻿//this source code was auto-generated by tolua#, do not modify it
using System;
using LuaInterface;

public class UISpriteAnimationWrap
{
	public static void Register(LuaState L)
	{
		L.BeginClass(typeof(UISpriteAnimation), typeof(UnityEngine.MonoBehaviour));
		L.RegFunction("RebuildSpriteList", RebuildSpriteList);
		L.RegFunction("Play", Play);
		L.RegFunction("Pause", Pause);
		L.RegFunction("ResetToBeginning", ResetToBeginning);
		L.RegFunction("__eq", op_Equality);
		L.RegFunction("__tostring", Lua_ToString);
		L.RegVar("animationCallback", get_animationCallback, set_animationCallback);
		L.RegVar("frames", get_frames, null);
		L.RegVar("framesPerSecond", get_framesPerSecond, set_framesPerSecond);
		L.RegVar("namePrefix", get_namePrefix, set_namePrefix);
		L.RegVar("loop", get_loop, set_loop);
		L.RegVar("isPlaying", get_isPlaying, null);
		L.RegFunction("AnimationCallback", UISpriteAnimation_AnimationCallback);
		L.EndClass();
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int RebuildSpriteList(IntPtr L)
	{
		try
		{
			ToLua.CheckArgsCount(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)ToLua.CheckObject(L, 1, typeof(UISpriteAnimation));
			obj.RebuildSpriteList();
			return 0;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int Play(IntPtr L)
	{
		try
		{
			ToLua.CheckArgsCount(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)ToLua.CheckObject(L, 1, typeof(UISpriteAnimation));
			obj.Play();
			return 0;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int Pause(IntPtr L)
	{
		try
		{
			ToLua.CheckArgsCount(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)ToLua.CheckObject(L, 1, typeof(UISpriteAnimation));
			obj.Pause();
			return 0;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int ResetToBeginning(IntPtr L)
	{
		try
		{
			ToLua.CheckArgsCount(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)ToLua.CheckObject(L, 1, typeof(UISpriteAnimation));
			obj.ResetToBeginning();
			return 0;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int op_Equality(IntPtr L)
	{
		try
		{
			ToLua.CheckArgsCount(L, 2);
			UnityEngine.Object arg0 = (UnityEngine.Object)ToLua.ToObject(L, 1);
			UnityEngine.Object arg1 = (UnityEngine.Object)ToLua.ToObject(L, 2);
			bool o = arg0 == arg1;
			LuaDLL.lua_pushboolean(L, o);
			return 1;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int Lua_ToString(IntPtr L)
	{
		object obj = ToLua.ToObject(L, 1);

		if (obj != null)
		{
			LuaDLL.lua_pushstring(L, obj.ToString());
		}
		else
		{
			LuaDLL.lua_pushnil(L);
		}

		return 1;
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int get_animationCallback(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			UISpriteAnimation.AnimationCallback ret = obj.animationCallback;
			ToLua.Push(L, ret);
			return 1;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index animationCallback on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int get_frames(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			int ret = obj.frames;
			LuaDLL.lua_pushinteger(L, ret);
			return 1;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index frames on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int get_framesPerSecond(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			int ret = obj.framesPerSecond;
			LuaDLL.lua_pushinteger(L, ret);
			return 1;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index framesPerSecond on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int get_namePrefix(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			string ret = obj.namePrefix;
			LuaDLL.lua_pushstring(L, ret);
			return 1;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index namePrefix on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int get_loop(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			bool ret = obj.loop;
			LuaDLL.lua_pushboolean(L, ret);
			return 1;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index loop on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int get_isPlaying(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			bool ret = obj.isPlaying;
			LuaDLL.lua_pushboolean(L, ret);
			return 1;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index isPlaying on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int set_animationCallback(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			UISpriteAnimation.AnimationCallback arg0 = null;
			LuaTypes funcType2 = LuaDLL.lua_type(L, 2);

			if (funcType2 != LuaTypes.LUA_TFUNCTION)
			{
				 arg0 = (UISpriteAnimation.AnimationCallback)ToLua.CheckObject(L, 2, typeof(UISpriteAnimation.AnimationCallback));
			}
			else
			{
				LuaFunction func = ToLua.ToLuaFunction(L, 2);
				arg0 = DelegateFactory.CreateDelegate(typeof(UISpriteAnimation.AnimationCallback), func) as UISpriteAnimation.AnimationCallback;
			}

			obj.animationCallback = arg0;
			return 0;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index animationCallback on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int set_framesPerSecond(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			int arg0 = (int)LuaDLL.luaL_checknumber(L, 2);
			obj.framesPerSecond = arg0;
			return 0;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index framesPerSecond on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int set_namePrefix(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			string arg0 = ToLua.CheckString(L, 2);
			obj.namePrefix = arg0;
			return 0;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index namePrefix on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int set_loop(IntPtr L)
	{
		object o = null;

		try
		{
			o = ToLua.ToObject(L, 1);
			UISpriteAnimation obj = (UISpriteAnimation)o;
			bool arg0 = LuaDLL.luaL_checkboolean(L, 2);
			obj.loop = arg0;
			return 0;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e, o == null ? "attempt to index loop on a nil value" : e.Message);
		}
	}

	[MonoPInvokeCallbackAttribute(typeof(LuaCSFunction))]
	static int UISpriteAnimation_AnimationCallback(IntPtr L)
	{
		try
		{
			LuaFunction func = ToLua.CheckLuaFunction(L, 1);
			Delegate arg1 = DelegateFactory.CreateDelegate(typeof(UISpriteAnimation.AnimationCallback), func);
			ToLua.Push(L, arg1);
			return 1;
		}
		catch(Exception e)
		{
			return LuaDLL.toluaL_exception(L, e);
		}
	}
}

