var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumData;
(function (EnumData) {
    ;
    /// <summary>鱼类型（子类型）</summary>
    var FishSubtype;
    (function (FishSubtype) {
        FishSubtype[FishSubtype["Fish_1"] = 1] = "Fish_1";
        FishSubtype[FishSubtype["Fish_2"] = 2] = "Fish_2";
        FishSubtype[FishSubtype["Fish_3"] = 3] = "Fish_3";
        FishSubtype[FishSubtype["Fish_4"] = 4] = "Fish_4";
        FishSubtype[FishSubtype["Fish_5"] = 5] = "Fish_5";
        FishSubtype[FishSubtype["Fish_6"] = 6] = "Fish_6";
        FishSubtype[FishSubtype["Fish_7"] = 7] = "Fish_7";
        FishSubtype[FishSubtype["Fish_8"] = 8] = "Fish_8";
        FishSubtype[FishSubtype["Fish_9"] = 9] = "Fish_9";
        FishSubtype[FishSubtype["Fish_10"] = 10] = "Fish_10";
        FishSubtype[FishSubtype["Fish_11"] = 11] = "Fish_11";
        FishSubtype[FishSubtype["Fish_12"] = 12] = "Fish_12";
        FishSubtype[FishSubtype["Fish_13"] = 13] = "Fish_13";
        FishSubtype[FishSubtype["Fish_14"] = 14] = "Fish_14";
        FishSubtype[FishSubtype["Fish_15"] = 15] = "Fish_15";
        FishSubtype[FishSubtype["Fish_16"] = 16] = "Fish_16";
        FishSubtype[FishSubtype["Fish_17"] = 17] = "Fish_17";
        FishSubtype[FishSubtype["Fish_18"] = 18] = "Fish_18";
        FishSubtype[FishSubtype["Fish_19"] = 19] = "Fish_19";
        FishSubtype[FishSubtype["Fish_20"] = 20] = "Fish_20";
        FishSubtype[FishSubtype["Frozen_fish"] = 21] = "Frozen_fish";
        FishSubtype[FishSubtype["Fish_22"] = 22] = "Fish_22";
        FishSubtype[FishSubtype["Golden_Shark"] = 23] = "Golden_Shark";
        FishSubtype[FishSubtype["Golden_Dragon"] = 24] = "Golden_Dragon";
        /// <summary>美人鱼类型</summary>
        FishSubtype[FishSubtype["Mermaid"] = 25] = "Mermaid";
        /// <summary>海盗船类型</summary>
        FishSubtype[FishSubtype["Ship"] = 26] = "Ship";
        FishSubtype[FishSubtype["King_fishf1"] = 27] = "King_fishf1";
        FishSubtype[FishSubtype["King_fishf2"] = 28] = "King_fishf2";
        FishSubtype[FishSubtype["King_fishf3"] = 29] = "King_fishf3";
        FishSubtype[FishSubtype["King_fishf4"] = 30] = "King_fishf4";
        FishSubtype[FishSubtype["King_fishf5"] = 31] = "King_fishf5";
        FishSubtype[FishSubtype["Bomb_fish"] = 32] = "Bomb_fish";
        FishSubtype[FishSubtype["TanabataFestival_fish"] = 33] = "TanabataFestival_fish";
    })(FishSubtype = EnumData.FishSubtype || (EnumData.FishSubtype = {}));
    /// <summary>鱼所属大类型</summary>
    var FishCategory;
    (function (FishCategory) {
        FishCategory[FishCategory["Normal_Fish"] = 1] = "Normal_Fish";
        FishCategory[FishCategory["World_Boss"] = 2] = "World_Boss";
        FishCategory[FishCategory["King_fish"] = 5] = "King_fish";
        FishCategory[FishCategory["Bomb_fish"] = 6] = "Bomb_fish";
        FishCategory[FishCategory["Frozen_fish"] = 7] = "Frozen_fish";
    })(FishCategory = EnumData.FishCategory || (EnumData.FishCategory = {}));
    /// <summary>鱼的状态枚举</summary>
    var ENUM_FISH_STATE;
    (function (ENUM_FISH_STATE) {
        ENUM_FISH_STATE[ENUM_FISH_STATE["SWIMMING"] = 0] = "SWIMMING";
        ENUM_FISH_STATE[ENUM_FISH_STATE["SHOW"] = 1] = "SHOW";
        ENUM_FISH_STATE[ENUM_FISH_STATE["PAUSE"] = 2] = "PAUSE";
        ENUM_FISH_STATE[ENUM_FISH_STATE["HITTED"] = 3] = "HITTED";
        ENUM_FISH_STATE[ENUM_FISH_STATE["DEATH"] = 4] = "DEATH";
    })(ENUM_FISH_STATE = EnumData.ENUM_FISH_STATE || (EnumData.ENUM_FISH_STATE = {}));
    var SCREEN_ZODER;
    (function (SCREEN_ZODER) {
        SCREEN_ZODER[SCREEN_ZODER["BounsFont"] = 10] = "BounsFont";
        SCREEN_ZODER[SCREEN_ZODER["HuntPanelUI"] = 11] = "HuntPanelUI";
        SCREEN_ZODER[SCREEN_ZODER["AwardPanel"] = 50] = "AwardPanel";
    })(SCREEN_ZODER = EnumData.SCREEN_ZODER || (EnumData.SCREEN_ZODER = {}));
    //子弹的三种状态
    var ENUM_BULLET_STATE;
    (function (ENUM_BULLET_STATE) {
        ENUM_BULLET_STATE[ENUM_BULLET_STATE["UNLOCK"] = 0] = "UNLOCK";
        ENUM_BULLET_STATE[ENUM_BULLET_STATE["LOCKING"] = 1] = "LOCKING";
        ENUM_BULLET_STATE[ENUM_BULLET_STATE["LOCKED"] = 2] = "LOCKED"; //锁定的鱼已死亡
    })(ENUM_BULLET_STATE = EnumData.ENUM_BULLET_STATE || (EnumData.ENUM_BULLET_STATE = {}));
    var ACTSTATUS;
    (function (ACTSTATUS) {
        ACTSTATUS[ACTSTATUS["ACTSHOWSTARTBEFORE"] = 0] = "ACTSHOWSTARTBEFORE";
        ACTSTATUS[ACTSTATUS["ACTSHOWSTART_START"] = 1] = "ACTSHOWSTART_START";
        ACTSTATUS[ACTSTATUS["ACTSTART_END"] = 2] = "ACTSTART_END";
        ACTSTATUS[ACTSTATUS["ACTEND_SHOWEND"] = 3] = "ACTEND_SHOWEND";
        ACTSTATUS[ACTSTATUS["ACTSHOWENDAFTER"] = 4] = "ACTSHOWENDAFTER";
    })(ACTSTATUS = EnumData.ACTSTATUS || (EnumData.ACTSTATUS = {}));
})(EnumData || (EnumData = {}));
exports.default = EnumData;
},{}],2:[function(require,module,exports){
"use strict";
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
Object.defineProperty(exports, "__esModule", { value: true });
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
    };
    GameConfig.width = 1280;
    GameConfig.height = 720;
    GameConfig.scaleMode = "exactfit";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "top";
    GameConfig.alignH = "center";
    GameConfig.startScene = "";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();
},{}],3:[function(require,module,exports){
"use strict";
//游戏总管理类
Object.defineProperty(exports, "__esModule", { value: true });
var GameManger_1 = require("./manager/GameManger");
var EventManager_1 = require("./manager/EventManager");
var WalletManager_1 = require("./manager/WalletManager");
var SocketManager_1 = require("./manager/SocketManager");
var ResourceManger_1 = require("./manager/ResourceManger");
var HuntSceneManager_1 = require("./manager/HuntSceneManager");
var ConfigManager_1 = require("./manager/ConfigManager");
var SceneManager_1 = require("./manager/SceneManager");
var SoundsManager_1 = require("./manager/SoundsManager");
var TipManager_1 = require("./manager/TipManager");
var ActManager_1 = require("./manager/ActManager");
var GameFacade = /** @class */ (function () {
    function GameFacade() {
    }
    Object.defineProperty(GameFacade.prototype, "GameMng", {
        get: function () {
            if (null == this._gameMng)
                this._gameMng = new GameManger_1.default();
            return this._gameMng;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "ResourceMng", {
        get: function () {
            if (null == this._resourceMng)
                this._resourceMng = new ResourceManger_1.default();
            return this._resourceMng;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "SocketMng", {
        get: function () {
            if (null == this._socketMng)
                this._socketMng = new SocketManager_1.default();
            return this._socketMng;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "EventMng", {
        get: function () {
            if (null == this._eventMng)
                this._eventMng = new EventManager_1.default();
            return this._eventMng;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "HuntSceneMng", {
        get: function () {
            if (null == this._huntSceneManager)
                this._huntSceneManager = new HuntSceneManager_1.default();
            return this._huntSceneManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "ConfigMng", {
        get: function () {
            if (null == this._configManager)
                this._configManager = new ConfigManager_1.default();
            return this._configManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "SceneMng", {
        get: function () {
            if (null == this._sceneManager)
                this._sceneManager = new SceneManager_1.default();
            return this._sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "SoundMng", {
        get: function () {
            if (null == this._soundManager)
                this._soundManager = new SoundsManager_1.SoundsManager();
            return this._soundManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "WalletMng", {
        get: function () {
            if (null == this._walletManager)
                this._walletManager = new WalletManager_1.default();
            return this._walletManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "TipMng", {
        get: function () {
            if (null == this._tipManager)
                this._tipManager = new TipManager_1.default();
            return this._tipManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameFacade.prototype, "ActMng", {
        get: function () {
            if (null == this._actManager)
                this._actManager = new ActManager_1.default();
            return this._actManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化所有的管理器类
     */
    GameFacade.prototype.Init = function () {
        this.GameMng.Init();
        this.ResourceMng.Init();
        this.SocketMng.Init();
        this.EventMng.Init();
        this.HuntSceneMng.Init();
        this.ConfigMng.Init();
        this.SceneMng.init();
        this.TipMng.Init();
        this.WalletMng.Init();
    };
    Object.defineProperty(GameFacade, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new GameFacade();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameFacade._instance = null;
    return GameFacade;
}());
exports.default = GameFacade;
},{"./manager/ActManager":57,"./manager/ConfigManager":59,"./manager/EventManager":60,"./manager/GameManger":61,"./manager/HuntSceneManager":62,"./manager/ResourceManger":63,"./manager/SceneManager":64,"./manager/SocketManager":65,"./manager/SoundsManager":66,"./manager/TipManager":67,"./manager/WalletManager":68}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var GameStart_1 = require("./game/GameStart");
var Main = /** @class */ (function () {
    function Main() {
        if (window["Laya3D"])
            Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height);
        else
            Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        //Laya.stage.bgColor = "#FF0000";
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        //发布dev  斗鱼需要屏蔽的
        Laya.URL.basePath = Laya.URL.rootPath = "";
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("gameVersion.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        //Laya.Stat.show(0, 0);
        // 修改初始化内存
        window['Config3D'] && (window['Config3D']['_defaultConfig']['_defaultPhysicsMemory'] = 100);
        //调用DebugPanel调试面板
        //Laya.PhysicsDebugDraw.init();
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        // //加载IDE指定的场景
        // GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        new GameStart_1.default();
    };
    return Main;
}());
new Main();
},{"./GameConfig":2,"./game/GameStart":22}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CannonConfig = /** @class */ (function () {
    function CannonConfig() {
    }
    CannonConfig._IdleAni = "Idle";
    CannonConfig._AttackAni = "Attack";
    return CannonConfig;
}());
exports.default = CannonConfig;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FishBaseConfig = /** @class */ (function () {
    function FishBaseConfig(obj) {
        this._FishTypeID = obj['FishTypeID'];
        this._FishDeadIndex = obj['FishDeadIndex'];
        this._LastWord = obj['LastWord'];
        this._IceBlockScale = obj['IceBlockScale'];
        this._IceBlockAngel = obj['IceBlockAngel'];
        this._StatyBehavior = obj['StatyBehavior'];
        this._SpeedBehavior = obj['SpeedBehavior'];
        this._SwimAni = obj['SwimAni'];
        this._DeadAni = obj['DeadAni'];
        this._HitAni = obj['HitAni'];
        this._StayAni1 = obj['StayAni1'];
        this._StayAni2 = obj['StayAni2'];
    }
    return FishBaseConfig;
}());
exports.FishBaseConfig = FishBaseConfig;
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonConstant = /** @class */ (function () {
    function CommonConstant() {
    }
    //#region u3d资源路径
    /** 捕猎场景路劲*/
    CommonConstant._huntScenePath = "unityRes/HuntScene/Conventional/HuntScene.ls";
    CommonConstant._gunScenePath = "unityRes/LayaScene_GunScene/Conventional/GunScene.ls";
    /** 捕猎场景特效名称集合*/
    CommonConstant._huntSceneEffectArray = {
        // FishNetPrefab1:"FishNetPrefab1",
        // FishNetPrefab2:"FishNetPrefab2",
        // FishNetPrefab3:"FishNetPrefab3",
        FishNetPrefab: "FishNetPrefab",
        GoldCoin: "GoldCoin",
        Gold_Effect: "Gold_Effect",
        Half_screenBomb_2: "Half-screenBomb_2",
        Full_screenBomb_2: "Full_screenBomb_2",
        HalfScreenDrawReward: "HalfScreenDrawReward02",
        ChangeCannonEffect: "ChangeCannon_effect",
        LockButtonEffect: "LockButtonEffect",
        BombFishExpEffect: "FishExp_Effect_2",
    };
    /**大厅岛的资源 */
    CommonConstant._hallPath_ls = "unityRes/LayaScene_hall/Conventional/hall.ls";
    /**预警模型 */
    CommonConstant._warnPath_lh = "unityRes/LayaScene_WarnEffect/Conventional/WarnEffect.lh";
    /**
     * 获取鱼模型
     */
    // static getFishMeshPath(fishId: Number): string {
    // 	return `unityRes/Sprite3D/Conventional/Assets/ArtResources/Models/Fish/Fish${fishId}/Fish${fishId}-body.lm`;
    // }
    //#endregion
    //#region UI面板资源路径
    CommonConstant._mainPanelPath = "panel/MainPanel.scene";
    /** loading过场界面*/
    CommonConstant._loadingPanelPath = "panel/LoadingPanel.scene";
    /** hall背景图*/
    CommonConstant._hallBgPath = "LayaRes/game/rateBgTexture.png";
    CommonConstant._loadingBgPath = "LayaRes/load/lading_bg 1.png";
    /**活动的关闭按钮 */
    CommonConstant.actCloseBtnPath = "LayaRes/game/button_gb.png";
    /** fui资源*/
    CommonConstant._fuiHallUIPath = { fui: "fairyguiRes/fui/HallUI.fui", image: "fairyguiRes/fui/HallUI_atlas0.png", Package: "fairyguiRes/fui/HallUI" };
    CommonConstant._fuiHallPath = { fui: "fairyguiRes/fui/Hall.fui", image: "fairyguiRes/fui/Hall_atlas0.png", Package: "fairyguiRes/fui/Hall" };
    CommonConstant._fuiFreeTranWalletPath = { fui: "fairyguiRes/fui/FreeTranWallet.fui", image: "fairyguiRes/fui/FreeTranWallet_atlas0.png", Package: "fairyguiRes/fui/FreeTranWallet" };
    CommonConstant._fuiCommonUIPath = { fui: "fairyguiRes/fui/CommonUI.fui", image: "fairyguiRes/fui/CommonUI_atlas0.png", Package: "fairyguiRes/fui/CommonUI" };
    CommonConstant._fuiHelpPath = { fui: "fairyguiRes/fui/Help.fui", image: "fairyguiRes/fui/Help_atlas0.png", Package: "fairyguiRes/fui/Help" };
    CommonConstant._fuiHunterUIPath = { fui: "fairyguiRes/fui/HunterUI.fui", image: "fairyguiRes/fui/HunterUI_atlas0.png", Package: "fairyguiRes/fui/HunterUI" };
    CommonConstant._fuiJpPath = { fui: "fairyguiRes/fui/Jp.fui", image: "fairyguiRes/fui/Jp_atlas0.png", Package: "fairyguiRes/fui/Jp" };
    CommonConstant._fuiLoadingPath = { fui: "fairyguiRes/fui/loading.fui", image: "fairyguiRes/fui/loading_atlas0.png", Package: "fairyguiRes/fui/loading" };
    CommonConstant._fuiRankingPath = { fui: "fairyguiRes/fui/Ranking.fui", image: "fairyguiRes/fui/Ranking_atlas0.png", Package: "fairyguiRes/fui/Ranking" };
    CommonConstant._fuiSettingPath = { fui: "fairyguiRes/fui/Setting.fui", image: "fairyguiRes/fui/Setting_atlas0.png", Package: "fairyguiRes/fui/Setting" };
    CommonConstant._fuiWinningPath = { fui: "fairyguiRes/fui/Winning.fui", image: "fairyguiRes/fui/Winning_atlas0.png", Package: "fairyguiRes/fui/Winning" };
    CommonConstant._fuiGuidePath = { fui: "fairyguiRes/fui/Guide.fui", image: "fairyguiRes/fui/Guide_atlas0.png", Package: "fairyguiRes/fui/Guide" };
    CommonConstant._fuiWarnPath = { fui: "fairyguiRes/fui/Warning.fui", image: "fairyguiRes/fui/Warning_atlas0.png", Package: "fairyguiRes/fui/Warning" };
    CommonConstant._fuiMarqueePath = { fui: "fairyguiRes/fui/Marquee.fui", image: "fairyguiRes/fui/Marquee_atlas0.png", Package: "fairyguiRes/fui/Marquee" };
    CommonConstant._fuiTipPath = { fui: "fairyguiRes/fui/Public.fui", image: "fairyguiRes/fui/Public_atlas0.png", Package: "fairyguiRes/fui/Public" };
    CommonConstant._fuiPersonalInfoPath = { fui: "fairyguiRes/fui/PersonalInfo.fui", image: "fairyguiRes/fui/PersonalInfo_atlas0.png", Package: "fairyguiRes/fui/PersonalInfo" };
    CommonConstant._fuiFundTipPath = { fui: "fairyguiRes/fui/FundTip.fui", image: "fairyguiRes/fui/FundTip_atlas0.png", Package: "fairyguiRes/fui/FundTip" };
    CommonConstant._fuiGrowthFundPath = { fui: "fairyguiRes/fui/GrowthFund.fui", image: "fairyguiRes/fui/GrowthFund_atlas0.png", Package: "fairyguiRes/fui/GrowthFund" };
    CommonConstant._fuiLevelBonusPath = { fui: "fairyguiRes/fui/LevelBonus.fui", image: "fairyguiRes/fui/LevelBonus_atlas0.png", Package: "fairyguiRes/fui/LevelBonus" };
    CommonConstant._fuiLvDetailsPath = { fui: "fairyguiRes/fui/LvDetails.fui", image: "fairyguiRes/fui/LvDetails_atlas0.png", Package: "fairyguiRes/fui/LvDetails" };
    CommonConstant._fuiLvRecordsPath = { fui: "fairyguiRes/fui/LvRecords.fui", image: "fairyguiRes/fui/LvRecords_atlas0.png", Package: "fairyguiRes/fui/LvRecords" };
    CommonConstant._fuiUpgradePath1 = { fui: "fairyguiRes/fui/upgradePanel.fui", image: "fairyguiRes/fui/upgradePanel_atlas0.png", Package: "fairyguiRes/fui/upgradePanel" };
    CommonConstant._fuiUpgradePath2 = { fui: "fairyguiRes/fui/upgradePanel.fui", image: "fairyguiRes/fui/upgradePanel_atlas0_1.png", Package: "fairyguiRes/fui/upgradePanel" };
    /** 大厅小岛面板上的资源*/
    CommonConstant._prelandInfoPath = "ui://HallUI/";
    CommonConstant._islandInfoArr = [{ title: "name1", limit: "bullet1", rate: "rate1" },
        { title: "name2", limit: "bullet2", rate: "rate2" },
        { title: "name3", limit: "bullet3", rate: "rate3" }];
    /** 捕猎场景的laya资源*/
    CommonConstant._hunterBgPath = "LayaRes/game/BG.png";
    CommonConstant._baseBgPath = "LayaRes/game/paotai.png";
    CommonConstant._lockImgPath = "LayaRes/game/lock.png"; //锁定按钮
    CommonConstant._autoImgPath = "LayaRes/game/auto.png"; //自动攻击按钮
    CommonConstant._lockImgMaskPath = "LayaRes/game/lock_down.png"; //锁定按钮mask
    CommonConstant._autoImgMaskPath = "LayaRes/game/auto_down.png"; //自动攻击按钮mask
    CommonConstant._autoTextImgPath = "LayaRes/game/zidonggongji.png"; //自动攻击文字
    CommonConstant._lockTextImgPath = "LayaRes/game/suodinggongji.png"; //锁定攻击文字
    CommonConstant._cancleAutoTextImgPath = "LayaRes/game/quxiaozidong.png"; //取消自动攻击文字
    CommonConstant._cancleLockTextImgPath = "LayaRes/game/quxiaosuoding.png"; //取消锁定攻击文字
    CommonConstant._linePointPath = "LayaRes/game/point.png"; //锁定连线的点
    CommonConstant._aimImgPath = "LayaRes/game/aim.png"; //鱼身上的锁定图标
    CommonConstant._zhuanpanPath = "LayaRes/game/zhuanpan.png"; //转盘
    CommonConstant._zhuanpanLightPath = "LayaRes/game/zhuanpan_guanquan.png"; //转盘光
    CommonConstant._fish20Path = "LayaRes/game/20.png"; //蓝色鲨鱼
    CommonConstant._fish23Path = "LayaRes/game/23.png"; //金色鲨鱼
    CommonConstant._fish25Path = "LayaRes/game/25.png"; //美人鱼
    CommonConstant._BombFlagPath = "LayaRes/game/BombFlag.png"; //炸弹鱼标志
    /** 炮台信息框*/
    CommonConstant._infoFrame = "LayaRes/game/ing_4.png";
    CommonConstant._infoLabelBg = "LayaRes/game/ing_5.png";
    CommonConstant._infoLevelBg = "LayaRes/game/djbs.png";
    CommonConstant._infoCoin = "LayaRes/game/jp_jb.png";
    CommonConstant._infoWallent = "LayaRes/game/wallent.png"; //免转按钮
    /** 公共资源*/
    CommonConstant._preCommonPath = "ui://CommonUI/";
    /** font字体*/
    CommonConstant._awardFont = "LayaRes/Font/jl_0-9.png"; //大转盘金币字体
    CommonConstant._bounsFontSelf = "LayaRes/Font/jl_0-9.png"; //自己打死鱼时的金币字体
    CommonConstant._bounsFontOther = "LayaRes/Font/yl_0-9.png"; //别人打死鱼时的金币字体
    CommonConstant._levelFont = "LayaRes/Font/djbs_0-9.png"; //炮台信息 等级数字
    CommonConstant._coinFont = "LayaRes/Font/3djnh_jb.png"; //炮台信息 金币数字
    //#endregion
    //#region 游戏常量
    CommonConstant.C_IslandAmount = 3;
    CommonConstant.C_IslandMoveX = 20;
    CommonConstant.C_IslandMoveTime = 1500;
    /** layer层列表*/
    CommonConstant.Layer = {
        Fish: 8,
        Wall: 9
    };
    /** 方向单位向量*/
    CommonConstant.DirectionVector = {
        Up: new Laya.Vector3(0, 1, 0),
        Down: new Laya.Vector3(0, -1, 0),
        Left: new Laya.Vector3(-1, 0, 0),
        Right: new Laya.Vector3(1, 0, 0),
    };
    /** 鱼的倍率*/
    CommonConstant.fishRate = {
        Fifty: 50,
        Sixty: 60,
        Eighty: 80
    };
    /** 半屏转盘的显示位置*/
    CommonConstant.HalfAwardPos = [
        new Laya.Vector3(370, 468, 0),
        new Laya.Vector3(898, 468, 0),
        new Laya.Vector3(370, 278, 0),
        new Laya.Vector3(898, 278, 0),
    ];
    // // /**子弹的初始位置--暂时定死*/
    // // static PosVector = [
    // // 	new Laya.Vector3(4.3,  -4.7, 0), 
    // // 	new Laya.Vector3(-4.3, -4.7, 0), 
    // // 	new Laya.Vector3(4.3,  4.7, 0), 
    // // 	new Laya.Vector3(-4.3, 4.7, 0), ];
    CommonConstant.ShootRate = 0.25 * 1000; //炮台射击速度 间隔0.25s
    CommonConstant.ShootMaxNum = 20; //锁定状态下 最多20个子弹
    /** 海盗船模型横向屏幕大小*/
    CommonConstant.OutWallOffset_ship = 300; //
    /** 美人鱼模型横向屏幕大小*/
    CommonConstant.OutWallOffset_mermaid = 160; //
    /** 鲨鱼模型横向屏幕大小*/
    CommonConstant.OutWallOffset_shark = 160; //
    CommonConstant.LinePointWith = 32;
    CommonConstant.BounsFontOffY = 80; //收集金币，提示字体漂浮高度
    //#endregion
    //#region 贴图资源路劲
    /** 贴图路劲集合*/
    CommonConstant._TextureArray = {
        Gold: "jinbi.png",
        Silver: "yinbi.png",
    };
    CommonConstant._PromptContent = {
        StopAutoAttack: "您正在自动捕鱼是否停止?",
        Reconnect: "网络断开连接，是否重新连接游戏？",
        LowPay: "金币不足,请充值或到低倍场玩哦",
        HeightPay: "您的金钱超过本场限制,请到高倍场游戏",
        NeedRecharge: "金币不足,请充值后重试",
        Invalid: "下注筹码非法,请刷新游戏后重试",
        LoginOther: "异地登陆,请刷新游戏后重试",
        AccountError: "您的账号出现异常,请重新登录",
        LoginMuch: "登陆过于频繁,请稍后重试",
        SessionLong: "会话已经过期,请重新登录",
        SessionWrong: "会话校验失败,请重新登录",
        LoginFail: "账号登录失败,请联系管理员",
        LoginError: "账号错误,请联系管理员",
        BackHall: "您确定要返回大厅么？",
        BulletMax: "您当前子弹数量已达上限",
        CannotS: "需要消耗%s金币，无法召唤",
        JpReward: "该记录是JP奖金",
        EnterRoomFail: "进入房间失败，请重试",
    };
    return CommonConstant;
}());
exports.default = CommonConstant;
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventConstantResponse = /** @class */ (function () {
    function EventConstantResponse() {
    }
    /**免转小键盘返回键监控 */
    EventConstantResponse.WALLETKEYNUM = "wallKeyNum";
    /**排行榜监控 */
    EventConstantResponse.RANKRESP = "rankResp";
    /**中奖名单监控 */
    EventConstantResponse.WINNERRESP = "winnerResp";
    /**jp数值 */
    EventConstantResponse.JPNUMBER = "jpNumber";
    /**jp广播 */
    EventConstantResponse.JPBCAST = "jpBcast";
    /**登录角色信息 */
    EventConstantResponse.LOGINRESrOLEINFO = "loginRoleInfo";
    /**开关 */
    EventConstantResponse.SWITCHRESP = "switchResp";
    /**全局广播 */
    EventConstantResponse.BCASTWORLDRESP = "bcastWorldResp";
    /**房间广播 */
    EventConstantResponse.BCASTROOMRESP = "bcastRoomResp";
    /**广播消息 */
    EventConstantResponse.BCASTMSGRESP = "bcastMsgResp";
    /**活动详情列表 */
    EventConstantResponse.ACTLISTRESP = "actListResp";
    /**等级信息 */
    EventConstantResponse.LVINFORESP = "lvInfoResp";
    /**等级配置 */
    EventConstantResponse.LVCONFIGRESP = "lvConfigResp";
    /**等级通知 */
    EventConstantResponse.LVNOTICERESP = "lvNoticeResp";
    /**成长基金当前档次 */
    EventConstantResponse.GROWTHFUNDINFORESP = "growthFundInfoResp";
    /**成长基金配置 */
    EventConstantResponse.GROWTHFUNDCONFIGRESP = "growthFundConfigResp";
    /**成长基金购买反馈 */
    EventConstantResponse.GROWTHFUNDBUYRESP = "growthFundBuyResp";
    /**等级奖金领取奖励 */
    EventConstantResponse.LVAWARDRESP = "lvAwardResp";
    /**等级奖励通知 */
    EventConstantResponse.LVAWARDNOTICERESP = "lvAwardNoticeResp";
    /**成长基金状态（活动结束时间） */
    EventConstantResponse.GROWTHFUNDSTATERESP = "growthFundStateResp";
    /**等级奖励状态反馈 */
    EventConstantResponse.LVAWARDSTATERESP = "lvAwardStateResp";
    return EventConstantResponse;
}());
exports.default = EventConstantResponse;
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 游戏相关事件
 */
var GameEvent = /** @class */ (function () {
    function GameEvent() {
    }
    GameEvent.CONNECT = "SOCKET_CONNECT"; //socket连接
    GameEvent.SOCKET_CLOSE = "SOCKET_CLOSE"; //socket断开
    GameEvent.SOCKET_ERROR = "SOCKET_ERROR"; //socket出错
    GameEvent.LOADCOMPLETE = "LOADCOMPLETE"; //游戏资源加载完成
    GameEvent.GAME_START = "GAME_START"; //游戏开始
    GameEvent.GAME_CONTINUE = "GAME_CONTINUE"; //游戏继续
    GameEvent.GAME_RECONNECT = "GAME_RECONNECT"; //断线重连
    GameEvent.HUNT_AUTOATTACK = "HUNT_AUTOATTACK"; //自动攻击开始、取消
    GameEvent.HUNT_LOCKATTACK = "HUNT_LOCKATTACK"; //锁定攻击开始、取消
    GameEvent.HUNT_HUNTEDFISH = "HUNT_HUNTEDFISH"; //自动攻击捕到鱼
    return GameEvent;
}());
exports.default = GameEvent;
},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LangType;
(function (LangType) {
    LangType[LangType["CHINESE"] = 0] = "CHINESE";
    LangType[LangType["ENGLISH"] = 1] = "ENGLISH";
    LangType[LangType["CHANGESEHK"] = 2] = "CHANGESEHK";
})(LangType = exports.LangType || (exports.LangType = {}));
var Lang = /** @class */ (function () {
    function Lang() {
    }
    /**
     * 语言类型转换
     * @param lang
     */
    Lang.langToType = function (lang) {
        var type = LangType.CHINESE;
        switch (lang) {
            case "zh-cn":
                type = LangType.CHINESE;
                break;
            case "en-us":
                type = LangType.ENGLISH;
                break;
            case "zh-hk":
                type = LangType.CHANGESEHK;
                break;
            default:
                type = LangType.CHINESE;
                break;
        }
        return type;
    };
    Lang.freeTranWalletCh = {
        conServer: "连接服务器超时，请重新操作",
        operationInvalid: "操作无效",
        autoAddWallet: "系统向FG游戏存入{0}元",
        reqFail: "请求中心钱包失败",
        clipNoMoney: "余额不足，请前往充值",
        setMoney: "请设置带入游戏的金额",
        jpBonus: "该记录是JP奖金",
        reqTooFast: "请求中心钱包太快",
    };
    Lang.freeTranWalletEn = {
        conServer: "The connection server is out of time, please reoperate",
        operationInvalid: "This operation is invalid",
        autoAddWallet: "The system saves {0} to the FunGame",
        reqFail: "Request center purse failed",
        clipNoMoney: "The balance of the central purse is insufficient. Please go to recharge",
        setMoney: "Please set up the amount of money to bring into the game.",
        jpBonus: "This record is JP Bonus.",
        reqTooFast: "The request center wallet is too fast",
    };
    Lang.lvFundCh = {
        tipFundBuy: "已消耗{0}成功购买{1}",
        tipLevelReceived: "已成功领取等级奖金{0}元",
        tipsLevelBuy: "消耗金币{0},是否确定！",
        tipsGoldLess: "金币不足，请充值后再购买",
        tipLog: "试玩帐号无等级体系，请登录游戏体验最新功能",
        tipPurchaseFailed: "购买失败，请稍候重试。",
        tipReceiveFailed: "领取失败，请稍候重试。",
        tipActEnd: "活动已结束。",
    };
    Lang.lvFundEn = {
        tipFundBuy: "You have spent {0}to buy {1} successfully",
        tipLevelReceived: "You have received the level bonus {0} yuan successfully",
        tipsLevelBuy: "Consumption of gold coins {0}s, is it OK?",
        tipsGoldLess: "Gold is not enough, please recharge before purchase",
        tipLog: "The demo account has no rating system，please log in game to experience the latest functions",
        tipPurchaseFailed: "Purchase failed, please try again later",
        tipReceiveFailed: "Failed to receive, please try again later",
    };
    return Lang;
}());
exports.default = Lang;
},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sound = /** @class */ (function () {
    function Sound() {
    }
    /**
     * 三个声音类别
     */
    Sound.soundHeadArr = {
        bgSoundHead: "sounds/SceneSound/",
        fishSoundHead: "sounds/FishSound/",
        keySoundHead: "sounds/KeySound/" //按键音效文件夹
    };
    /**
     * 背景音乐
     */
    Sound.soundBgArr = {
        loginBgMusic: "LoginScene",
        hallBgMusic: "HallScene",
        playBgMusic1: "Rate0.1",
        playBgMusic2: "Rate1",
        playBgMusic3: "Rate10",
        fishMatrix: "FishMatrix",
    };
    /**
     * 鱼的声音
     */
    Sound.soundFishArr = {
        fishDying: "FishDying",
        frozonFish: "FrozonFish",
        fullSceneBomb: "FullSceneBomb",
    };
    /**
     * 按键声音
     */
    Sound.soundKeyArr = {
        bigFishCoin: "BigFishCoin",
        bossFishCoin: "BossFishCoin",
        bossWarning: "BossWarning",
        changeGun: "ChangeGun",
        onClick: "Click",
        onClose: "Close",
        coin: "Coin",
        getCoin: "GetCoin",
        luckAward: "LuckAward",
        onOpen: "Open",
        rateSelect: "RateSelect",
        shoot1: "Shoot1",
        shoot2: "Shoot2",
        shoot3: "Shoot3",
        turntable: "Turntable",
        windowChange: "WindowChange",
        rateWindow: "RateWindow",
        warn: "Warn",
        wave: "Wave",
    };
    return Sound;
}());
exports.default = Sound;
},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../GameFacade");
var EventNetResponse_1 = require("../net/ProtoHander/EventNetResponse");
var NetLogin_1 = require("../net/ProtoHander/NetLogin");
var FishController_1 = require("./FishController");
var CommonConstant_1 = require("../constant/CommonConstant");
var CommonUtil_1 = require("../utils/CommonUtil");
var NetRoom_1 = require("../net/ProtoHander/NetRoom");
var CannonConfig_1 = require("../config/CannonConfig");
var GameConfig_1 = require("../GameConfig");
var TipManager_1 = require("../manager/TipManager");
var GameEvent_1 = require("../constant/GameEvent");
var LanguageConstant_1 = require("../constant/LanguageConstant");
//import CannonConfig from "../config/CannonConfig";
var BatteryController = /** @class */ (function () {
    function BatteryController() {
        this.m_cannon = null;
        /** 存放四个炮台*/
        this.m_batteryArr = [];
        this.ShootedBulletAmount = 0; //已发射的子弹数量
        this.m_bshoot = false; //是否在射击状态
        this.m_shootIndex = 0; //自己发射子弹的索引
        this.m_shootInterval = 0; //控制射击时间间隔
        /** 死亡或者移动出边界时，都会重置为0*/
        this.LockedFishID = 0;
        /** 攻击类型*/
        this.m_shootModel = 0 /* SHOOT_NORMAL */;
    }
    Object.defineProperty(BatteryController, "Instance", {
        get: function () {
            if (null == this._instance)
                this._instance = new BatteryController();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatteryController.prototype, "selfCannon", {
        get: function () {
            if (this.m_cannon == null) {
                this.m_cannon = this.GetBatteryByUid(NetLogin_1.default.Instance.RoleInfo.roleId);
            }
            return this.m_cannon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatteryController.prototype, "BatteryArr", {
        get: function () {
            return this.m_batteryArr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatteryController.prototype, "gAutoAttackArr", {
        get: function () {
            return this.m_autoAttackArr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatteryController.prototype, "sAutoAttackArr", {
        set: function (v) {
            this.m_autoAttackArr = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatteryController.prototype, "ShootMode", {
        set: function (v) {
            this.m_shootModel = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatteryController.prototype, "gShootModel", {
        get: function () {
            return this.m_shootModel;
        },
        enumerable: true,
        configurable: true
    });
    BatteryController.prototype.Init = function () {
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.ReadyRoomResp, this, this.ReadyRoomResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.SynRoleResp, this, this.SynRoleResp); //再次同步座位信息
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.ChangeBatteryResp, this, this.ChangeBatteryResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.ShootBulletResp, this, this.ShootBulletResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.LeaveRoomResp, this, this.LeaveRoomResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.UpdateChipResp, this, this.UpdateChipResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.SyncChipsResp, this, this.SyncChipsResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.MqSyncChipsResp, this, this.MqSyncChipsResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.BulletUselessResp, this, this.BulletUselessResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.BulletPassResp, this, this.BulletPassResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.SyncJpJettonResp, this, this.SyncJpJettonResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.FishDeadResp, this, this.FishDeadResp);
        this.m_autoAttackArr = [];
        this.m_batteryArr = [];
        this.Shoot(false);
        this.m_shootIndex = 0;
        this.ShootedBulletAmount = 0;
        this.LockedFishID = 0;
        this.m_shootInterval = CommonConstant_1.default.ShootRate;
        this.m_shootModel = 0 /* SHOOT_NORMAL */;
        this.MouseDownPoint = new Laya.Point(-1, -1);
        this.InitLockLine();
        Laya.timer.loop(Laya.timer.delta, this, this.ShootBehaviour);
    };
    BatteryController.prototype.Uninit = function () {
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.ReadyRoomResp, this, this.ReadyRoomResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.SynRoleResp, this, this.SynRoleResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.ChangeBatteryResp, this, this.ChangeBatteryResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.ShootBulletResp, this, this.ShootBulletResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.LeaveRoomResp, this, this.LeaveRoomResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.UpdateChipResp, this, this.UpdateChipResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.SyncChipsResp, this, this.SyncChipsResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.MqSyncChipsResp, this, this.MqSyncChipsResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.BulletUselessResp, this, this.BulletUselessResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.BulletPassResp, this, this.BulletPassResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.SyncJpJettonResp, this, this.SyncJpJettonResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.FishDeadResp, this, this.FishDeadResp);
        this.Shoot(false);
        this.LockedFishID = 0;
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        for (var i = 0; i < this.m_batteryArr.length; i++) {
            //if(this.m_batteryArr[i].Gun3D.active)
            {
                this.m_batteryArr[i].Exit();
            }
        }
    };
    BatteryController.prototype.Reconnect = function () {
        this.m_autoAttackArr = [];
        this.Shoot(false);
        this.LockedFishID = 0;
        this.m_shootInterval = CommonConstant_1.default.ShootRate;
        this.m_shootModel = 0 /* SHOOT_NORMAL */;
        this.MouseDownPoint = new Laya.Point(-1, -1);
    };
    BatteryController.prototype.StopLockAttack = function () {
        this.Shoot(false);
        this.HideLockLineEffect();
        GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_LOCKATTACK, false);
        this.LockedFishID = 0;
    };
    BatteryController.prototype.StopAutoAttack = function () {
        this.Shoot(false);
        this.HideLockLineEffect();
        GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_AUTOATTACK, false);
        this.LockedFishID = 0;
    };
    /**
     * 初始化玩家信息
     * @param data 房间内所有的玩家信息
     */
    BatteryController.prototype.ReadyRoomResp = function (data) {
        //GameFacade.Instance.HuntSceneMng.InitFui();
        this.SynRoleResp(data);
        this.TransformView(data);
    };
    /**
     * 再次同步座位信息
     * @param data 房间内所有的玩家信息
     */
    BatteryController.prototype.SynRoleResp = function (data) {
        CommonUtil_1.utils.CommonUtils.log("------------------------SynRoleResp data:", data);
        var bUpdateArr = [false, false, false, false];
        //如果玩家自身的位置在上方，则需要调整到下方
        var tempData = this.TransformView(data);
        for (var i = 0; i < tempData.length; i++) {
            var index = tempData[i].position - 1; //服务端位置从1开始
            this.m_batteryArr[index].UpdateInfo(tempData[i]);
            bUpdateArr[index] = true;
            // //获取玩家的炮台
            // if (!this.selfCannon && NetLogin.Instance.RoleInfo.roleId == this.m_batteryArr[index].Data.uid) {
            //     this.m_cannon = this.m_batteryArr[index];
            // }
        }
        for (var i = 0; i < bUpdateArr.length; i++) {
            if (!bUpdateArr[i]) {
                this.m_batteryArr[i].UpdateInfo(null);
            }
        }
    };
    /**
     * 如果玩家自身的位置在上方，则需要变换上下炮台的位置以及场景中鱼的位置
    */
    BatteryController.prototype.TransformView = function (data) {
        var tempData = data.slice();
        var bTransform = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].uid == NetLogin_1.default.Instance.RoleInfo.roleId && data[i].position > 2) {
                GameFacade_1.default.Instance.HuntSceneMng._bTransform = true;
                break;
            }
        }
        if (GameFacade_1.default.Instance.HuntSceneMng._bTransform) {
            for (var i = 0; i < data.length; i++) {
                // if (data[i].position == 1 || data[i].position == 3) {
                //     tempData[i].position = 4 - data[i].position;
                // }
                // if (data[i].position == 2 || data[i].position == 4) {
                //     tempData[i].position = 6 - data[i].position;
                // }
                tempData[i].position = 5 - data[i].position;
            }
            //GameFacade.Instance.ConfigMng.TransformFishPath();
            //GameFacade.Instance.HuntSceneMng.TransformFishView();
            return tempData;
        }
        return data;
    };
    /**
     * 玩家切换炮台倍率
     * @param data 玩家uid
     */
    BatteryController.prototype.ChangeBatteryResp = function (data) {
        CommonUtil_1.utils.CommonUtils.log("------------------ChangeBatteryResp data:", data);
        var cannon = this.GetBatteryByUid(data.uid);
        cannon.UpdateBulletMulti(data.multi);
    };
    /**
     * 子弹发射消息返回
     * @param data
     */
    BatteryController.prototype.ShootBulletResp = function (data) {
        this.GetBatteryByUid(data.uid).CreateBullet(data);
        this.SyncBatteryAngle(data.uid, data.angel);
    };
    /**
     * 离开房间
     * @param data 玩家uid
     */
    BatteryController.prototype.LeaveRoomResp = function (data) {
        this.UpdateBattery(data.uid);
    };
    /**
    * 刷新金币
    * @param data 玩家uid
    */
    BatteryController.prototype.UpdateChipResp = function (data) {
        this.UpdateBattery(data.uid);
    };
    /**
    * 同步玩家自己金币
    * @param data 玩家uid
    */
    BatteryController.prototype.SyncChipsResp = function (data) {
        this.UpdateBattery(NetLogin_1.default.Instance._playerLoginInfo.role.roleId);
    };
    /**
  * 同步玩家自己金币(用于免转)
  * @param data 玩家uid
  */
    BatteryController.prototype.MqSyncChipsResp = function (data) {
        this.UpdateBattery(NetLogin_1.default.Instance._playerLoginInfo.role.roleId);
    };
    /**
     * 无效子弹信息
     * @param data
     */
    BatteryController.prototype.BulletUselessResp = function (data) {
        this.UpdateBattery(data.uid);
    };
    /**
     * 有效子弹信息
     * @param data
     */
    BatteryController.prototype.BulletPassResp = function (data) {
        this.UpdateBattery(data.uid);
    };
    /**
     * Jp奖励同步
     * @param data
     */
    BatteryController.prototype.SyncJpJettonResp = function (data) {
        this.UpdateBattery(data.uid);
    };
    /**
     * 鱼死亡同步
     * @param data
     */
    BatteryController.prototype.FishDeadResp = function (data) {
        //有金币特效，所以延迟更新数据
        //this.UpdateBattery(data.uid as number);
    };
    /**
     * 玩家UI进行更新并返回玩家炮台UI对象
     * @param userId 玩家uid
     */
    BatteryController.prototype.UpdateBattery = function (userId) {
        var cannon = this.GetBatteryByUid(userId);
        if (cannon) {
            var angle = cannon.UpdatePlayerInfoShow();
        }
        return;
    };
    BatteryController.prototype.UpdateCoin = function (userId, data) {
        var cannon = this.GetBatteryByUid(userId);
        if (cannon) {
            cannon.UpdateCoins(userId, data);
        }
    };
    BatteryController.prototype.GetBatteryByUid = function (userId) {
        for (var i = 0; i < this.m_batteryArr.length; i++) {
            if (this.m_batteryArr[i].Data != null) {
                //utils.CommonUtils.log("----------this.m_batteryArr[i].Data.uid = ", this.m_batteryArr[i].Data.uid);
                if (userId == this.m_batteryArr[i].Data.uid) {
                    return this.m_batteryArr[i];
                }
            }
        }
        CommonUtil_1.utils.CommonUtils.warn("------------不存在userid：", userId);
        return null;
    };
    /**
     * 根据炮台倍数获取炮台资源ID
     * @param index 炮台倍数
     */
    BatteryController.prototype.GetBatteryResIdByMulti = function (multi) {
        var index = this.GetBatteryIndexByMulti(multi);
        var resId = this.GetBatteryResId(index);
        return resId;
    };
    /**
     * 获取炮台倍数对应的数组下标
     * @param multi 炮台倍数
     */
    BatteryController.prototype.GetBatteryIndexByMulti = function (multi) {
        for (var index = 0; index < NetRoom_1.default.Instance._curRoomInfo.battery.length; index++) {
            var element = NetRoom_1.default.Instance._curRoomInfo.battery[index];
            if (element == multi)
                return index;
        }
        return 0;
    };
    /**
     * 根据下标获取炮台资源ID
     * @param index 炮台下标
     */
    BatteryController.prototype.GetBatteryResId = function (index) {
        if (index < 4) {
            return 1;
        }
        else if (index < 8) {
            return 2;
        }
        else {
            return 3;
        }
    };
    BatteryController.prototype.Shoot = function (bshoot) {
        this.m_bshoot = bshoot;
    };
    /// <summary>射击行为  canShoot只有在间隔时间后才能射击，其余的调用只是作为转角度</summary>
    /// <param name="isTouch">是否执行射击操作</param>
    BatteryController.prototype.ShootBehaviour = function () {
        this.m_shootInterval += Laya.timer.delta;
        if (this.m_bshoot) {
            switch (this.m_shootModel) {
                case 0 /* SHOOT_NORMAL */:
                    {
                        this.NormalShootModel();
                    }
                    break;
                case 1 /* SHOOT_AUTO */:
                    this.AutoShootModel();
                    break;
                case 2 /* SHOOT_LOCK */:
                    this.LockShootModel();
                    break;
                //case ShootType.SHOOT_STOP:
                //    break;
            }
        }
    };
    /// <summary>普通攻击模式</summary>
    BatteryController.prototype.NormalShootModel = function () {
        CommonUtil_1.utils.CommonUtils.log("NormalShootModel");
        this.AimAndFireByPoint(Laya.stage.mouseX, Laya.stage.mouseY);
    };
    /**自动攻击*/
    BatteryController.prototype.AutoShootModel = function () {
        var len = BatteryController.Instance.gAutoAttackArr.length;
        //没有选择要自动攻击的鱼    
        if (!GameFacade_1.default.Instance.HuntSceneMng._bSelectedFish) {
            this.LockedFishID = 0;
            if (this.bAutoAttackMouseDown) {
                this.AimAndFireByPoint(Laya.stage.mouseX, Laya.stage.mouseY);
            }
            else {
                this.AimAndFireByPoint(this.MouseDownPoint.x, this.MouseDownPoint.y);
            }
            return;
        }
        else {
            if (this.LockedFishID == 0) {
                for (var i = len - 1; i >= 0; i--) {
                    if (this.m_autoAttackArr[i]) {
                        var fishType = i;
                        for (var key in FishController_1.default.Instance.FishObjDict) {
                            var obj = FishController_1.default.Instance.FishObjDict[key];
                            if (obj._MFishInfo._mFishType == fishType && obj.CheckIsFishInWall()) {
                                this.LockedFishID = obj._MFishInfo._mFishId;
                                this.LockShootModel();
                                return;
                            }
                        }
                        // 屏幕中暂无要捕的鱼,取消锁定特效
                        this.HideLockLineEffect();
                    }
                }
            }
            else {
                this.LockShootModel(); //持续攻击当前锁定的鱼，直到此鱼死亡或者移动出边界
            }
        }
    };
    /**锁定攻击*/
    BatteryController.prototype.LockShootModel = function () {
        if (this.LockedFishID == 0) {
            this.HideLockLineEffect();
            this.selfCannon.PlayAnimation(CannonConfig_1.default._IdleAni);
            return;
        }
        var fishPos = GameFacade_1.default.Instance.HuntSceneMng.GetFishPointById(this.LockedFishID);
        if (fishPos == null) {
            this.selfCannon.PlayAnimation(CannonConfig_1.default._IdleAni);
            return;
        }
        this.AimAndFireByPoint(fishPos.x, fishPos.y);
    };
    BatteryController.prototype.AimAndFireByPoint = function (posX, posY) {
        //发射的子弹超出上限
        if (BatteryController.Instance.ShootedBulletAmount == CommonConstant_1.default.ShootMaxNum) {
            this.HideLockLineEffect();
            return;
        }
        var angle = this.selfCannon.Gun3D.transform.rotationEuler.z;
        //var angle = cannon.Gun.rotation;
        if (posX != -1 && posY != -1) {
            angle = this.selfCannon.UpdateAngleByPos(posX, posY);
        }
        if (angle == -1) {
            this.HideLockLineEffect();
            return; //-1表示点击无效
        }
        this.LockLineEffect(angle);
        //this.m_shootInterval += Laya.timer.delta;
        //utils.CommonUtils.log("this.m_shootInterval = ", this.m_shootInterval);
        if (this.m_shootInterval >= CommonConstant_1.default.ShootRate) {
            this.m_shootInterval = 0;
            this.Fire(angle);
        }
    };
    /**
     * 是否有足够的筹码
     * @param cannon
     */
    BatteryController.prototype.isEnoughChip = function (cannon) {
        var jettonShow = CommonUtil_1.utils.CommonUtils.numberFixed(cannon.Data.jetton_show);
        var bulletMulti = CommonUtil_1.utils.CommonUtils.numberFixed(cannon.Data.bullet_multi * NetRoom_1.default.Instance._curRoomInfo.ante);
        if (jettonShow < bulletMulti) {
            //GameFacade.Instance.WalletMng.setNoEnoughChip(jettonShow);
            return false;
        }
        else {
            return true;
        }
    };
    BatteryController.prototype.Fire = function (angle) {
        if (!this.isEnoughChip(this.selfCannon)) {
            if (GameFacade_1.default.Instance.WalletMng.getAutoState()) { //自动加钱
                GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.clipNoMoney, TipManager_1.TipType.FLOATTIP);
            }
            else {
                GameFacade_1.default.Instance.WalletMng.mainWalletReq();
            }
            this.StopAutoAttack();
            this.StopLockAttack();
            this.Shoot(false);
            return;
        }
        var uid = NetLogin_1.default.Instance.RoleInfo.roleId;
        var bullet_multi = this.GetBatteryByUid(uid).Data.bullet_multi;
        var time = 1;
        var bulletid = NetRoom_1.default.Instance._RoomRoleInfoDict[uid].position * 100000 + this.m_shootIndex++;
        NetRoom_1.default.Instance.ShootBulletReq(uid, bullet_multi, angle, time, this.LockedFishID, bulletid);
    };
    // 暂不知laya的图片平铺如何使用。。。
    // 1.先在m_lineSp上贴足够长距离的点
    // 2.根据距离长度，显示距离内的点
    // 3.然后旋转m_lineSp角度即可
    BatteryController.prototype.InitLockLine = function () {
        //锁定攻击的线
        this.m_lineSp = new Laya.Sprite();
        this.m_lineSp.pos(100, 720);
        var huntPanel = GameFacade_1.default.Instance.SceneMng.GetPanelById(1 /* HuntPanel */);
        huntPanel.m_layaUINode.addChild(this.m_lineSp);
        var len = Math.floor(GameConfig_1.default.width / CommonConstant_1.default.LinePointWith);
        for (var i = 0; i < len; i++) {
            var point = new Laya.Image(CommonConstant_1.default._linePointPath);
            point.pos(0, -i * CommonConstant_1.default.LinePointWith);
            point.anchorX = 0.5;
            point.anchorY = 0.5;
            this.m_lineSp.addChild(point);
        }
        this.m_aimImg = new Laya.Image(CommonConstant_1.default._aimImgPath);
        this.m_aimImg.anchorX = 0.5;
        this.m_aimImg.anchorY = 0.5;
        this.m_aimImg.scale(0.5, 0.5);
        huntPanel.m_layaUINode.addChild(this.m_aimImg);
        this.HideLockLineEffect();
    };
    /** 锁定特效 */
    BatteryController.prototype.LockLineEffect = function (rotate) {
        var startPos = new Laya.Vector3(0, 0, 0);
        var outFishPos = new Laya.Vector3(0, 0, 0);
        var lockedFish = FishController_1.default.Instance.FishObjDict[this.LockedFishID];
        if (lockedFish == null || lockedFish == undefined) {
            this.HideLockLineEffect();
            return;
        }
        var cameraHunt = GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera;
        var cameraGun = GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera;
        cameraHunt.viewport.project(lockedFish._OwnerPos, cameraHunt.projectionViewMatrix, outFishPos);
        var worldPos = this.selfCannon.Gun3D.getChildByName("BulletPos").transform.position;
        cameraGun.worldToViewportPoint(worldPos, startPos);
        var distance = Laya.Vector3.distance(startPos, outFishPos);
        var len = Math.floor(distance / CommonConstant_1.default.LinePointWith);
        for (var i = 0; i < this.m_lineSp.numChildren; i++) {
            var point = this.m_lineSp.getChildAt(i);
            if (i < len) {
                point.visible = true;
            }
            else {
                point.visible = false;
            }
        }
        this.m_aimImg.pos(outFishPos.x, outFishPos.y);
        this.m_aimImg.visible = true;
        this.m_lineSp.rotation = rotate;
        this.m_lineSp.pos(startPos.x, startPos.y);
        this.m_lineSp.visible = true;
    };
    BatteryController.prototype.HideLockLineEffect = function () {
        if (this.m_lineSp && this.m_aimImg) {
            this.m_lineSp.visible = false;
            this.m_aimImg.visible = false;
        }
    };
    //同步炮台角度
    BatteryController.prototype.SyncBatteryAngle = function (uid, angle) {
        var cannon = this.GetBatteryByUid(uid);
        //cannon.Gun.rotation = angle;
        if (cannon.m_bInversion) {
            cannon.Gun3D.transform.rotationEuler = new Laya.Vector3(0, 0, angle + 180);
        }
        else {
            cannon.Gun3D.transform.rotationEuler = new Laya.Vector3(0, 0, angle);
        }
    };
    return BatteryController;
}());
exports.default = BatteryController;
},{"../GameConfig":2,"../GameFacade":3,"../config/CannonConfig":5,"../constant/CommonConstant":7,"../constant/GameEvent":9,"../constant/LanguageConstant":10,"../manager/TipManager":67,"../net/ProtoHander/EventNetResponse":73,"../net/ProtoHander/NetLogin":78,"../net/ProtoHander/NetRoom":81,"../utils/CommonUtil":86,"./FishController":13}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../GameFacade");
var EventNetResponse_1 = require("../net/ProtoHander/EventNetResponse");
var NetLogin_1 = require("../net/ProtoHander/NetLogin");
var FishInfo_1 = require("../game/Fish/FishInfo");
var FishBase_1 = require("../game/Fish/FishBase");
var NetRoom_1 = require("../net/ProtoHander/NetRoom");
var BatteryController_1 = require("./BatteryController");
var CommonUtil_1 = require("../utils/CommonUtil");
var EnumData_1 = require("../Enum/EnumData");
var CommonConstant_1 = require("../constant/CommonConstant");
var CoinFlying_1 = require("../game/CoinEffect/CoinFlying");
var SoundNameConstant_1 = require("../constant/SoundNameConstant");
var AutoDestroy_1 = require("../utils/AutoDestroy");
var GameConfig_1 = require("../GameConfig");
var GameEvent_1 = require("../constant/GameEvent");
var FishController = /** @class */ (function () {
    function FishController() {
        /** 当前被攻击的鱼类型*/
        this._FishHitedType = null;
        this._PoolSign = null;
    }
    Object.defineProperty(FishController, "Instance", {
        get: function () {
            if (null == this._instance)
                this._instance = new FishController();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FishController.prototype, "FishObjDict", {
        get: function () {
            return this._FishObjDict;
        },
        enumerable: true,
        configurable: true
    });
    FishController.prototype.Init = function () {
        this._PoolSign = "bounsFont";
        this._FishObjDict = {};
        this._FishHitedType = null;
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.SynFishResp, this, this.CreateFish);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.FishDeadResp, this, this.FishDeadResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.OnePieceResp, this, this.OnePieceResp);
    };
    FishController.prototype.Uninit = function () {
        this._FishObjDict = null;
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.SynFishResp, this, this.CreateFish);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.FishDeadResp, this, this.FishDeadResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.OnePieceResp, this, this.OnePieceResp);
        Laya.Pool.clearBySign(this._PoolSign);
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    };
    FishController.prototype.CreateFish = function (data) {
        var fishCount = data.fish_list.length;
        for (var index = 0; index < fishCount; index++) {
            var fishResp = data.fish_list[index];
            //   if(fishResp.type > 4)continue;//todo
            if (this._FishObjDict[fishResp.id]) {
                CommonUtil_1.utils.CommonUtils.warn("已经存在鱼ID: " + fishResp.id);
                continue;
            }
            /// this.FishWarn(fishResp.type);
            var fishSpeed = NetLogin_1.default.Instance.FishInfoList(fishResp.type).fish_speed;
            var fishInfo = new FishInfo_1.default();
            fishInfo._mFishId = fishResp.id;
            fishInfo._mFishType = fishResp.type;
            fishInfo._mFishModelType = GameFacade_1.default.Instance.HuntSceneMng.GetFishModelType(fishResp.type);
            fishInfo._mPathId = fishResp.path_id;
            fishInfo._mSpeed = fishSpeed;
            fishInfo._mFishCreateTime = (fishResp.create_time_ms - NetLogin_1.default.Instance._timeOffset);
            fishInfo._mForzenTime = fishResp.frozen_time_ms;
            fishInfo._mModel = fishResp.model;
            var fwp = GameFacade_1.default.Instance.ConfigMng.FishPathConfig[fishInfo._mPathId]; // as FishWayPoint;
            fishInfo._mPathLenght = fwp._wayLength;
            fishInfo._mWayPoints = fwp._points;
            if (fishResp.pos > 0) {
                if (fishResp.model == 1) {
                    var fishModelType = fishInfo._mFishModelType;
                    if (fishInfo._mWayPoints[0].x >= 0) {
                        var fwpr = GameFacade_1.default.Instance.ConfigMng.FishOffsetConfig.get("L" + fishModelType); // as FishWayPoint;
                        Laya.Vector3.scale(fwpr._points[fishResp.pos], -1, fishInfo._offsetPoints);
                        //Debug.Log("右边出鱼");
                    }
                    else {
                        var fwpr = GameFacade_1.default.Instance.ConfigMng.FishOffsetConfig.get("R" + fishModelType); // as FishWayPoint;
                        fishInfo._offsetPoints = fwpr._points[fishResp.pos];
                        //Debug.Log("左边出鱼");
                    }
                }
            }
            // let node = GameFacade.Instance.HuntSceneMng._HuntScene.addChild(new Laya.Sprite()) as Laya.Sprite;
            // node.zOrder = fishResp.type;
            var fishScript = GameFacade_1.default.Instance.HuntSceneMng.InstantiateFish(fishResp.type).getComponent(FishBase_1.FishBase);
            this._FishObjDict[fishResp.id] = fishScript;
            fishScript.Init(fishInfo);
            fishScript.StartMove();
        }
    };
    /**
    * 鱼死亡同步
    * @param data
    */
    FishController.prototype.FishDeadResp = function (data) {
        var len = data.fish_killed.length;
        var deadFishType = -1;
        for (var i = 0; i < len; i++) {
            var fishInfo = data.fish_killed[i];
            var tFishBase = this._FishObjDict[fishInfo.fish_id];
            if (tFishBase._MFishInfo._mFishType == EnumData_1.default.FishSubtype.Bomb_fish) {
                deadFishType = EnumData_1.default.FishSubtype.Bomb_fish; //如果炮弹打死的鱼是炸弹鱼、鱼王
                break;
            }
        }
        for (var i = 0; i < len; i++) {
            var fishInfo = data.fish_killed[i];
            this.GetCoinEffect(data.uid, fishInfo, data.jettonshow, i);
            this.OnDeadFishOrMoveEnd(fishInfo.fish_id, true, fishInfo.bonus, data.uid, deadFishType);
        }
    };
    /** 从世界Boss身上掉下金币*/
    FishController.prototype.OnePieceResp = function (data) {
        for (var i = 0; i < data.fish_killed.length; i++) {
            var tinfo = data.fish_killed[i];
            this.NormalCoinEffect(data.uid, tinfo, data.jettonshow, i);
            if (BatteryController_1.default.Instance.gShootModel == 1 /* SHOOT_AUTO */) {
                GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_HUNTEDFISH, [tinfo.bonus, this._FishObjDict[tinfo.fish_id]._MFishInfo._mFishType]);
            }
        }
    };
    //#region  爆金币逻辑
    /**
     * 普通爆金币特效
     * @param ownerUid 玩家uid
     * @param data 打死的鱼的奖励信息
     */
    FishController.prototype.NormalCoinEffect = function (ownerUid, data, jettonshow, i) {
        var _this = this;
        var fish_id = data.fish_id;
        if (this._FishObjDict[fish_id]) {
            var tFishBase = this._FishObjDict[fish_id];
            var tfish_config = NetLogin_1.default.Instance.FishInfoList(tFishBase._MFishInfo._mFishType);
            var tbasic_reward = CommonUtil_1.utils.CommonUtils.numberFixed(tfish_config.fish_rate);
            var coinNumToShow = this.GetCoinNumsToShow(tbasic_reward);
            var tPos = new Laya.Vector3(tFishBase._OwnerPos.x, tFishBase._OwnerPos.y, tFishBase._OwnerPos.z);
            var tempPos = new Laya.Vector3(0, 0, 0);
            GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera.worldToViewportPoint(tPos, tempPos);
            tPos = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera, tempPos);
            this.CoinResCreate(ownerUid, data, jettonshow, coinNumToShow, tPos, true, i);
            //金币数字
            var bounsFont_1 = this.CreatBounsFont(data.bonus, tempPos, 0.5, ownerUid);
            Laya.Tween.to(bounsFont_1, {}, 800, null, Laya.Handler.create(this, function () {
                bounsFont_1.visible = false;
                Laya.Pool.recover(_this._PoolSign, bounsFont_1);
            }));
        }
    };
    /**
     * 爆金币字体
     * @param bonus 要显示的数值大小
     * @param screenPos 字体要显示的坐标
     * @param scale 缩放比例
     */
    FishController.prototype.CreatBounsFont = function (bonus, screenPos, sacle, uid) {
        if (uid === void 0) { uid = null; }
        var huntPanel = GameFacade_1.default.Instance.SceneMng.GetPanelById(1 /* HuntPanel */);
        var fontSkin = CommonConstant_1.default._bounsFontSelf;
        //如果是其他炮打死鱼，使用其他字体
        if (uid != null && !NetLogin_1.default.Instance.IsSelfUid(uid)) {
            fontSkin = CommonConstant_1.default._bounsFontOther;
        }
        var bounsFont = Laya.Pool.getItem(this._PoolSign);
        if (bounsFont == null) {
            bounsFont = CommonUtil_1.utils.CommonUtils.CreatFontClip(new Laya.Point(screenPos.x, screenPos.y), fontSkin, ".+0123456789", huntPanel.m_layaUINode, 100); //new Laya.FontClip(fontSkin, ".+0123456789");
            bounsFont.scale(sacle, sacle);
            bounsFont.value = "+" + CommonUtil_1.utils.CommonUtils.numberFixed(bonus).toFixed(2);
        }
        else {
            bounsFont.pos(screenPos.x, screenPos.y);
            bounsFont.visible = true;
            bounsFont.skin = fontSkin;
            bounsFont.scale(sacle, sacle);
            bounsFont.value = "+" + CommonUtil_1.utils.CommonUtils.numberFixed(bonus).toFixed(2);
        }
        return bounsFont;
    };
    /**
     * 鱼死亡获得金币银币的特效播放
     * @param data
     * @param fishScript
     */
    FishController.prototype.GetCoinEffect = function (ownerUid, data, jettonshow, i) {
        if (this._FishObjDict[data.fish_id]) {
            this.NormalCoinEffect(ownerUid, data, jettonshow, i);
            var tFishBase = this._FishObjDict[data.fish_id];
            var tfish_config = NetLogin_1.default.Instance.FishInfoList(tFishBase._MFishInfo._mFishType);
            var tbasic_reward = CommonUtil_1.utils.CommonUtils.numberFixed(tfish_config.fish_rate);
            var tPos = new Laya.Vector3(tFishBase._OwnerPos.x, tFishBase._OwnerPos.y, tFishBase._OwnerPos.z);
            var tempPos = new Laya.Vector3(0, 0, 0);
            GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera.worldToViewportPoint(tPos, tempPos);
            tPos = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera, tempPos);
            if ((tbasic_reward > CommonConstant_1.default.fishRate.Fifty) && (tbasic_reward <= CommonConstant_1.default.fishRate.Sixty)) //触发半屏转盘
             {
                //todo 20号-25号鱼金币相关逻辑
                this.AwardEffect(ownerUid, tFishBase._MFishInfo._mFishType, data.bonus, SoundNameConstant_1.default.soundKeyArr.bigFishCoin, tPos, true);
            }
            else if (tbasic_reward >= CommonConstant_1.default.fishRate.Eighty) { //触发全屏转盘
                if (tfish_config.fish_class != EnumData_1.default.FishCategory.Frozen_fish) {
                    //todo boss鱼金币相关逻辑 
                    tPos = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera, new Laya.Vector3(GameConfig_1.default.width / 2, GameConfig_1.default.height / 2, 0));
                    this.AwardEffect(ownerUid, tFishBase._MFishInfo._mFishType, data.bonus, SoundNameConstant_1.default.soundKeyArr.bossFishCoin, tPos, false);
                }
            }
            //todo 特殊鱼种处理
            switch (tFishBase._MFishInfo._mFishType) {
                case EnumData_1.default.FishSubtype.Bomb_fish: {
                    var bombEffect = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.BombFishExpEffect);
                    var tPos_1 = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera, new Laya.Vector3(GameConfig_1.default.width / 2, GameConfig_1.default.height / 2, 0));
                    bombEffect.transform.localPosition = tPos_1;
                    bombEffect.active = true;
                    break;
                }
            }
        }
    };
    FishController.prototype.AwardEffect = function (ownerUid, type, reward, soundName, tPos, bHalf) {
        var panel = GameFacade_1.default.Instance.SceneMng.GetPanelById(1 /* HuntPanel */);
        //转盘
        panel.AwardEffect(ownerUid, type, reward, bHalf);
        //爆金币
        var cloneIns = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.Half_screenBomb_2);
        cloneIns.transform.position = tPos; //utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._GunSceneCamera, tPos);
        cloneIns.active = true;
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, soundName);
    };
    FishController.prototype.ScreenBombCoinEffect = function (effectName, soundName, tPos, ownerUid) {
        var cloneIns = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(effectName);
        var textureName = (NetLogin_1.default.Instance.IsSelfUid(ownerUid) ? CommonConstant_1.default._TextureArray.Gold : CommonConstant_1.default._TextureArray.Silver);
        GameFacade_1.default.Instance.ResourceMng.LoadTexture2D(textureName, function (t) {
            cloneIns.getChildAt(0).particleRenderer.material.texture = t;
            cloneIns.transform.position = tPos;
            cloneIns.active = true;
            var ad = CommonUtil_1.utils.CommonUtils.CustomAddComponent(cloneIns, AutoDestroy_1.default);
            ad.InitData(5000, false); //该特效最长时间为5秒
            GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, soundName);
        });
    };
    /**
     *
     * @param uid 玩家uid
     * @param data 打死鱼的奖金信息
     * @param coinNum 要显示的金币个数
     * @param startPos 金币开始位置
     * @param isScreenPos 是否为屏幕坐标
     */
    FishController.prototype.CoinResCreate = function (uid, data, jettonshow, coinNum, startPos, isScreenPos, index) {
        if (!isScreenPos) {
            var tempPos = new Laya.Vector3(0, 0, 0);
            GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera.worldToViewportPoint(startPos, tempPos);
            startPos = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera, tempPos);
        }
        var tcannon = BatteryController_1.default.Instance.GetBatteryByUid(uid);
        if (null == tcannon)
            return;
        var tendPos = tcannon.CoinEndPos;
        tendPos = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera, tendPos);
        var self = this;
        var _loop_1 = function (i) {
            var cloneIns = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.GoldCoin);
            var textureName = (NetLogin_1.default.Instance.IsSelfUid(uid) ? CommonConstant_1.default._TextureArray.Gold : CommonConstant_1.default._TextureArray.Silver);
            GameFacade_1.default.Instance.ResourceMng.LoadTexture2D(textureName, function (t) {
                cloneIns.getChildAt(0).particleRenderer.material.texture = t;
                var toffsetX = CommonUtil_1.utils.CommonUtils.randomFloat(-1, 1);
                var toffsetY = CommonUtil_1.utils.CommonUtils.randomFloat(0.1, 1);
                cloneIns.transform.position = new Laya.Vector3(startPos.x + toffsetX, startPos.y + toffsetY, startPos.z);
                cloneIns.active = true;
                Laya.timer.once(300, self, function () {
                    Laya.Tween.to(cloneIns.transform, {
                        localPositionX: cloneIns.transform.localPositionX + 0,
                        localPositionY: cloneIns.transform.localPositionY + 1,
                    }, 300, Laya.Ease.quintOut, Laya.Handler.create(self, function () {
                        var ad = CommonUtil_1.utils.CommonUtils.CustomAddComponent(cloneIns, CoinFlying_1.default);
                        ad.InitData(index * 50, tendPos, false, uid, data, jettonshow);
                    }));
                });
            });
        };
        for (var i = 0; i < coinNum; i++) {
            _loop_1(i);
        }
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.coin);
    };
    /**
     * 获得的金币个数用于效果展示
     * @param money 获得金币价值
     */
    FishController.prototype.GetCoinNumsToShow = function (money) {
        if (money < 20)
            return 2;
        if (money < 40)
            return 4;
        if (money < 60)
            return 6;
        if (money < 80)
            return 8;
        return 10;
    };
    //#endregion
    /**
     * 鱼路劲周期走完或者鱼死亡，自动被删除
     * @param fishId 鱼ID
     * @param isDead 是否死亡
     */
    FishController.prototype.OnDeadFishOrMoveEnd = function (fishId, isDead, bouns, uid, deadFishType) {
        if (bouns === void 0) { bouns = 0; }
        if (uid === void 0) { uid = 0; }
        if (deadFishType === void 0) { deadFishType = -1; }
        if (this._FishObjDict[fishId]) {
            var tFishBase = this._FishObjDict[fishId];
            tFishBase.Remove(isDead, bouns, uid, deadFishType);
            delete this._FishObjDict[fishId];
            if (fishId == BatteryController_1.default.Instance.LockedFishID) {
                BatteryController_1.default.Instance.LockedFishID = 0;
            }
        }
    };
    /**
    * 击中鱼请求服务器认证
    * @param fishId 被击中的鱼ID
    * @param bulletData 子弹信息
    * @param related_fishs_id 关联鱼的ID列表
    */
    FishController.prototype.HitFish = function (fishId, bulletData, related_fishs_id) {
        if (bulletData._playId == NetLogin_1.default.Instance.RoleInfo.roleId) {
            if (this._FishObjDict[fishId])
                NetRoom_1.default.Instance.HitFishReq(bulletData._bulletMutil, fishId, related_fishs_id, bulletData._bulletId);
        }
    };
    FishController.prototype.Reconnect = function () {
        for (var key in this._FishObjDict) {
            this._FishObjDict[key].Remove(false);
            delete this.FishObjDict[key];
        }
    };
    FishController.prototype.IsFishKing = function (type) {
        if (type >= EnumData_1.default.FishSubtype.King_fishf1 && type < EnumData_1.default.FishSubtype.Bomb_fish) {
            return true;
        }
        return false;
    };
    return FishController;
}());
exports.default = FishController;
},{"../Enum/EnumData":1,"../GameConfig":2,"../GameFacade":3,"../constant/CommonConstant":7,"../constant/GameEvent":9,"../constant/SoundNameConstant":11,"../game/CoinEffect/CoinFlying":17,"../game/Fish/FishBase":18,"../game/Fish/FishInfo":20,"../net/ProtoHander/EventNetResponse":73,"../net/ProtoHander/NetLogin":78,"../net/ProtoHander/NetRoom":81,"../utils/AutoDestroy":85,"../utils/CommonUtil":86,"./BatteryController":12}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BulletInfo_1 = require("./BulletInfo");
var GameFacade_1 = require("../../GameFacade");
var FishController_1 = require("../../controller/FishController");
var CommonConstant_1 = require("../../constant/CommonConstant");
var AutoDestroy_1 = require("../../utils/AutoDestroy");
var BatteryController_1 = require("../../controller/BatteryController");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var NetRoom_1 = require("../../net/ProtoHander/NetRoom");
var EnumData_1 = require("../../Enum/EnumData");
var CommonUtil_1 = require("../../utils/CommonUtil");
var BulletBase = /** @class */ (function (_super) {
    __extends(BulletBase, _super);
    function BulletBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // private _isMoving: boolean = false;
        _this._direction = new Laya.Vector3(0, 0, 0);
        _this._movingSpeed = 0.3;
        _this._offset = new Laya.Vector3(1, 0, 0);
        _this._outPos = new Laya.Vector3(0, 0, 0);
        return _this;
    }
    BulletBase.prototype.onAwake = function () {
        this.mowner = this.owner;
        this._camera = GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera;
        this._scene = GameFacade_1.default.Instance.HuntSceneMng._HuntScene;
        this._point = new Laya.Vector2();
        this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
        this._outHitInfo = new Laya.HitResult();
        if (null == this._bulletMoveEffect) {
            this._bulletMoveEffect = this.mowner.getChildAt(0).getChildAt(0);
            this._bulletMoveEffect.transform.localPosition = new Laya.Vector3(0, 0, 0);
        }
    };
    BulletBase.prototype.onCollisionEnter = function () {
    };
    BulletBase.prototype.InitData = function (bulletId, multi, bulletShowTypeId, lockedId, playerID, lockedFishID) {
        this.mowner = this.owner;
        this._bulletInfo = new BulletInfo_1.default(bulletId, multi, bulletShowTypeId, lockedId, playerID);
        this._direction = this.mowner.transform.up;
        this.mowner.active = true;
        this._lockedFishID = lockedId;
        this._uid = playerID;
        if (lockedFishID == 0) {
            this._state = EnumData_1.default.ENUM_BULLET_STATE.UNLOCK;
        }
        else {
            this._state = EnumData_1.default.ENUM_BULLET_STATE.LOCKING;
        }
        this.ShowBulletEffect(); //Laya.timer.frameOnce(3, this, this.ShowBulletEffect);
    };
    BulletBase.prototype.ShowBulletEffect = function () {
        this._bulletMoveEffect.active = true;
        this.StartMoving();
    };
    BulletBase.prototype.StartMoving = function () {
        Laya.timer.frameLoop(1, this, this.Moving);
    };
    BulletBase.prototype.StopMoving = function () {
        Laya.timer.clear(this, this.Moving);
    };
    BulletBase.prototype.Moving = function () {
        Laya.Vector3.scale(this.GetDynamicDir(), this._movingSpeed, this._offset);
        //Laya.Vector3.scale(this._direction, this._movingSpeed, this._offset);
        this.mowner.transform.translate(this._offset, false);
        // if (this.mowner.transform.position.x > 10)
        //     this.mowner.transform.position.x = -10;
        //如果飞墙外 那么需要销毁
        if (this.CheckBulletOutWall()) {
            //打出去边界的子弹 需要发送给服务器告诉是无效的
            this.ShootUselessBulletReq();
            this.RemoveBullet();
        }
        else {
            //this._camera.worldToViewportPoint(this.mowner.transform.position,this._outPos);
            this._camera.viewport.project(this.mowner.transform.position, this._camera.projectionViewMatrix, this._outPos);
            this.RayCastCheck(this._outPos);
            //console.log("outPos = " + this._outPos.elements)
        }
    };
    BulletBase.prototype.RayCastCheck = function (screenPos) {
        //从屏幕空间生成射线
        this._point.elements[0] = screenPos.x; // Laya.MouseManager.instance.mouseX;//Laya.stage.mouseX;// 
        this._point.elements[1] = screenPos.y; //Laya.MouseManager.instance.mouseY;//Laya.stage.mouseY;//
        this._camera.viewportPointToRay(this._point, this._ray);
        //拿到射线碰撞的物体
        this._scene.physicsSimulation.rayCast(this._ray, this._outHitInfo);
        //如果碰撞到物体
        if (this._outHitInfo.succeeded) {
            var colLayer = this._outHitInfo.collider.owner;
            var fish = null;
            // // if (colLayer.layer == CommonConstant.Layer.Fish) {
            // //     fish = GameFacade.Instance.HuntSceneMng.GetFishBase(this._outHitInfo.collider.owner);// this._outHitInfo.collider.owner.parent.getComponent(FishBase) as FishBase;
            // // }
            switch (this._state) {
                case EnumData_1.default.ENUM_BULLET_STATE.UNLOCK: {
                    if (colLayer.layer == CommonConstant_1.default.Layer.Fish) {
                        fish = GameFacade_1.default.Instance.HuntSceneMng.GetFishBase(this._outHitInfo.collider.owner); // this._outHitInfo.collider.owner.parent.getComponent(FishBase) as FishBase;
                    }
                    this.NormalAttack(fish, colLayer);
                    break;
                }
                case EnumData_1.default.ENUM_BULLET_STATE.LOCKING: {
                    fish = FishController_1.default.Instance.FishObjDict[this._lockedFishID];
                    if (fish) {
                        var fishPosVec2 = new Laya.Vector3(0, 0, 0);
                        this._camera.worldToViewportPoint(fish._OwnerPos, fishPosVec2);
                        if (Laya.Vector3.distance(screenPos, fishPosVec2) < 15) //15为屏幕坐标距离
                            this.RayCastCheckFish(colLayer, fish);
                    }
                    break;
                }
                case EnumData_1.default.ENUM_BULLET_STATE.LOCKED: {
                    break;
                }
            }
        }
    };
    BulletBase.prototype.NormalAttack = function (fish, colLayer) {
        if (fish) {
            this.RayCastCheckFish(colLayer, fish);
        }
        else if (colLayer.layer == CommonConstant_1.default.Layer.Wall) {
            this.RayCastCheckWall();
        }
    };
    BulletBase.prototype.RayCastCheckFish = function (colLayer, fish) {
        if (!fish._mIsExist)
            return;
        // 子弹打中鱼了
        var cloneIns = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.FishNetPrefab + this._bulletInfo._bulletShowTypeId);
        cloneIns.transform.position = this.mowner.transform.position;
        var ad = CommonUtil_1.utils.CommonUtils.CustomAddComponent(cloneIns, AutoDestroy_1.default);
        ad.InitData(5000, false); //渔网特效最长时间为5秒
        ad.owner.active = true;
        //todo
        if (fish) {
            fish.Hitted();
            var related_fishs_id = null;
            switch (fish._MFishInfo._mFishType) {
                case EnumData_1.default.FishSubtype.Bomb_fish:
                    {
                        related_fishs_id = fish.GetRelatedFishsId();
                        break;
                    }
            }
            FishController_1.default.Instance._FishHitedType = fish._MFishInfo._mFishType;
            FishController_1.default.Instance.HitFish(fish._MFishInfo._mFishId, this._bulletInfo, related_fishs_id);
        }
        this.RemoveBullet();
    };
    BulletBase.prototype.RayCastCheckWall = function () {
        var colNamePrefix = this._outHitInfo.collider.owner.name.substring(0, 6); //长度6可保证取到下列字符串的完整值
        switch (colNamePrefix) {
            case "top":
                this.BulletReflect(CommonConstant_1.default.DirectionVector.Down);
                break;
            case "bottom":
                this.BulletReflect(CommonConstant_1.default.DirectionVector.Up);
                break;
            case "left":
                this.BulletReflect(CommonConstant_1.default.DirectionVector.Right);
                break;
            case "right":
                this.BulletReflect(CommonConstant_1.default.DirectionVector.Left);
                break;
            default:
                break;
        }
    };
    /**获取动态跟踪鱼的方向*/
    BulletBase.prototype.GetDynamicDir = function () {
        //return this._direction;
        if (this._lockedFishID == 0) {
            return this._direction;
        }
        else {
            this._camera.viewport.project(this.mowner.transform.position, this._camera.projectionViewMatrix, this._outPos);
            var outFishPos = new Laya.Vector3(0, 0, 0);
            var lockedFish = FishController_1.default.Instance.FishObjDict[this._lockedFishID];
            if (lockedFish == null || lockedFish == undefined) {
                this._lockedFishID = 0;
                this._state = EnumData_1.default.ENUM_BULLET_STATE.LOCKED;
                return this._direction; //子弹飞行中指定的鱼已挂掉
            }
            this._camera.viewport.project(lockedFish._OwnerPos, this._camera.projectionViewMatrix, outFishPos);
            var dir = new Laya.Vector3(this._outPos.x - outFishPos.x, this._outPos.y - outFishPos.y, 0);
            new Laya.Vector3.normalize(dir, dir);
            return dir;
        }
    };
    BulletBase.prototype.CheckBulletOutWall = function () {
        if (this.mowner.transform.position.x > 12 || this.mowner.transform.position.x < -12) {
            return true;
        }
        if (this.mowner.transform.position.y > 7 || this.mowner.transform.position.y < -7) {
            return true;
        }
        return false;
    };
    /// <summary>
    /// 发送打出屏幕外的无效子弹请求
    /// </summary>
    BulletBase.prototype.ShootUselessBulletReq = function () {
        //Debug.Log("发送无效子弹： " + buttetData.BulletId + " 倍数：" + buttetData.BulletMutil);
        if (this._bulletInfo._playId == NetLogin_1.default.Instance.RoleInfo.roleId) {
            NetRoom_1.default.Instance.BulletUseLessReq(this._bulletInfo._playId, this._bulletInfo._bulletMutil, this._bulletInfo._bulletId);
        }
    };
    /**
     * 根据入射向量I和法向量N求反射向量R：R = I-2(I·N)N
     * @param normal 法向量
     */
    BulletBase.prototype.BulletReflect = function (normal) {
        var arrivalAngle = this._direction;
        var dotValue = Laya.Vector3.dot(arrivalAngle, normal);
        var reflexAngle = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(normal, dotValue * 2, reflexAngle);
        Laya.Vector3.subtract(arrivalAngle, reflexAngle, reflexAngle);
        Laya.Vector3.normalize(reflexAngle, this._direction);
    };
    BulletBase.prototype.RemoveBullet = function () {
        if (this._bulletInfo._playId == NetLogin_1.default.Instance.RoleInfo.roleId) {
            BatteryController_1.default.Instance.ShootedBulletAmount -= 1;
        }
        this.StopMoving();
        this.mowner.destroy();
    };
    return BulletBase;
}(Laya.Script3D));
exports.default = BulletBase;
},{"../../Enum/EnumData":1,"../../GameFacade":3,"../../constant/CommonConstant":7,"../../controller/BatteryController":12,"../../controller/FishController":13,"../../net/ProtoHander/NetLogin":78,"../../net/ProtoHander/NetRoom":81,"../../utils/AutoDestroy":85,"../../utils/CommonUtil":86,"./BulletInfo":15}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BulletInfo = /** @class */ (function () {
    function BulletInfo(bulletId, multi, bulletShowTypeId, lockedId, playerID) {
        this._bulletId = bulletId;
        this._bulletMutil = multi;
        this._bulletShowTypeId = bulletShowTypeId;
        this._lockFishId = lockedId;
        this._playId = playerID;
    }
    return BulletInfo;
}());
exports.default = BulletInfo;
},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BulletBase_1 = require("./BulletBase");
var HF3DBulletClasses;
(function (HF3DBulletClasses) {
    var Bullet01 = /** @class */ (function (_super) {
        __extends(Bullet01, _super);
        function Bullet01() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bullet01;
    }(BulletBase_1.default));
    HF3DBulletClasses.Bullet01 = Bullet01;
    var Bullet02 = /** @class */ (function (_super) {
        __extends(Bullet02, _super);
        function Bullet02() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bullet02;
    }(BulletBase_1.default));
    HF3DBulletClasses.Bullet02 = Bullet02;
    var Bullet03 = /** @class */ (function (_super) {
        __extends(Bullet03, _super);
        function Bullet03() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bullet03;
    }(BulletBase_1.default));
    HF3DBulletClasses.Bullet03 = Bullet03;
})(HF3DBulletClasses || (HF3DBulletClasses = {}));
exports.default = HF3DBulletClasses;
},{"./BulletBase":14}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var CommonConstant_1 = require("../../constant/CommonConstant");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var BatteryController_1 = require("../../controller/BatteryController");
/**
 * 金币飞行的逻辑类
 */
var CoinFlying = /** @class */ (function (_super) {
    __extends(CoinFlying, _super);
    function CoinFlying() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._moveTotalTime = 0.5;
        _this._originPos = new Laya.Vector3(0, 0, 0);
        _this._endPos = new Laya.Vector3(0, 0, 0);
        _this._delPos = new Laya.Vector3(0, 0, 0);
        _this._averageSpeed = new Laya.Vector3(0, 0, 0);
        return _this;
    }
    //private _jettonshow:number;
    /**
     *
     * @param dt 延时销毁时间
     * @param endPos 运动的结束位置
     * @param bDel 是否删除该节点
     */
    CoinFlying.prototype.InitData = function (dt, endPos, bDel, uid, data, jettonshow) {
        if (null == this.owner)
            return;
        this._uid = uid;
        this._date = data;
        //this._jettonshow = jettonshow;
        if (null == this.owner)
            return;
        this._mowner = this.owner;
        if (this._mowner.transform == null)
            return; // todo
        this._delayTime = dt;
        this._bDelete = bDel;
        this._originPos = new Laya.Vector3(this._mowner.transform.position.x, this._mowner.transform.position.y, this._mowner.transform.position.z);
        this._endPos = endPos;
        Laya.Vector3.subtract(this._endPos, this._originPos, this._delPos);
        this._moveTime = 0;
        //Laya.timer.once(dt, this, this.StartMove);
        this.StartMove();
    };
    CoinFlying.prototype.StartMove = function () {
        //this._moveTotalTime = Laya.Vector3.distance(this._endPos, this._originPos) / 15;
        Laya.Vector3.scale(this._delPos, 1 / this._moveTotalTime, this._averageSpeed);
        Laya.timer.loop(10, this, this.CurvyMove);
    };
    CoinFlying.prototype.CurvyMove = function () {
        var _this = this;
        if (this._moveTime < this._moveTotalTime) {
            this._moveTime += 0.02;
            var speedvy = this._averageSpeed.y * (-2);
            var acceleratedy = (this._delPos.y - speedvy * this._moveTotalTime) / (this._moveTotalTime * this._moveTotalTime) * 2; // s = 1/2*g*t2 + vt;
            var POS = new Laya.Vector3(this._averageSpeed.x * this._moveTime, speedvy * this._moveTime + acceleratedy * (this._moveTime * this._moveTime) / 2, this._averageSpeed.z * this._moveTime);
            var tendPos = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.add(this._originPos, POS, tendPos);
            this._mowner.transform.position = tendPos;
        }
        else {
            Laya.timer.clear(this, this.CurvyMove);
            Laya.timer.once(this._delayTime, this, function () {
                BatteryController_1.default.Instance.UpdateCoin(_this._uid, _this._date);
            });
            this.LoadEndEffect();
            this.DestroySelf();
        }
    };
    CoinFlying.prototype.LoadEndEffect = function () {
        if (null == this._goldEffect)
            this._goldEffect = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.Gold_Effect);
        this._goldEffect.transform.position = this._mowner.transform.position;
        this._goldEffect.active = true;
        Laya.timer.once(2000, this, function () {
            this._goldEffect.active = false;
        });
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.getCoin);
    };
    CoinFlying.prototype.DestroySelf = function () {
        if (this._bDelete)
            this.owner.destroy();
        else
            this.owner.active = false;
    };
    return CoinFlying;
}(Laya.Script3D));
exports.default = CoinFlying;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/SoundNameConstant":11,"../../controller/BatteryController":12}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FishBaseConfigData_1 = require("./FishBaseConfigData");
var EnumData_1 = require("../../Enum/EnumData");
var FishController_1 = require("../../controller/FishController");
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonUtil_1 = require("../../utils/CommonUtil");
var BatteryController_1 = require("../../controller/BatteryController");
var GameEvent_1 = require("../../constant/GameEvent");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var GameConfig_1 = require("../../GameConfig");
var CommonConstant_1 = require("../../constant/CommonConstant");
var FishBase = /** @class */ (function (_super) {
    __extends(FishBase, _super);
    function FishBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 是否播过预警特效*/
        _this._mIsWarned = false;
        return _this;
    }
    Object.defineProperty(FishBase.prototype, "_MFishInfo", {
        get: function () {
            return this._fishInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FishBase.prototype, "_OwnerPos", {
        get: function () {
            return this.mowner.transform.position;
        },
        enumerable: true,
        configurable: true
    });
    FishBase.prototype.onDisable = function () {
        this.mowner.transform.localPosition = this._initialFirstChildPosition;
        this.mowner.transform.localScale = this._initialFirstChildScale;
    };
    FishBase.prototype.Init = function (fishInfo) {
        this.mowner = this.owner;
        this._firstChild = this.mowner.getChildAt(0);
        if (null == this._initialFirstChildScale)
            this._initialFirstChildScale = new Laya.Vector3(this._firstChild.transform.localScale.x, this._firstChild.transform.localScale.y, this._firstChild.transform.localScale.z);
        if (null == this._initialFirstChildPosition)
            this._initialFirstChildPosition = new Laya.Vector3(this._firstChild.transform.localPosition.x, this._firstChild.transform.localPosition.y, this._firstChild.transform.localPosition.z);
        this._cameraTrans = GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera.transform;
        this._fishInfo = fishInfo;
        this._fishInfo._mPathLenght *= 100000;
        this._mCurrentSpeed = fishInfo._mSpeed;
        this._mIsStay = false;
        this._mSpeedRate = 1;
        this._mAlreadyStay = false;
        this._mIsWarned = false;
        var type = fishInfo._mFishType;
        //总共编号只有1-26号鱼  32号炸弹  其余是鱼群
        if (fishInfo._mModel == 8) {
            type = type + 100; //在表格的编号是 101 102 106(对应的鱼是1，2，6)
        }
        this._FishBehavior = FishBaseConfigData_1.default.FishSwimConfig._FishBehaviorDict.get(type);
        this._FishAniClass = FishBaseConfigData_1.default.FishSwimConfig._FishAnimateDict.get(type.toString());
        this._Animator = this.mowner.getChildAt(0).getChildAt(0).getComponent(Laya.Animator);
        this.mowner.transform.position = new Laya.Vector3(-10000, 10000, 10000);
        this._mIsExist = true;
        this.mowner.active = true;
    };
    /**
     * 鱼受击
     */
    FishBase.prototype.Hitted = function () {
        if (this.PlayAction(EnumData_1.default.ENUM_FISH_STATE.HITTED)) {
            Laya.timer.once(this._FishAniClass._HitTime * 1000, this, function () {
                this.PlayAction(EnumData_1.default.ENUM_FISH_STATE.SWIMMING);
            });
        }
    };
    /**
     * 移除鱼对象
     * @param isDead 鱼是否死亡
     */
    FishBase.prototype.Remove = function (isDead, bouns, uid, deadFishType) {
        if (bouns === void 0) { bouns = 0; }
        if (uid === void 0) { uid = 0; }
        if (deadFishType === void 0) { deadFishType = -1; }
        this.StopMove();
        if (isDead) {
            this.Dead(bouns, uid, deadFishType);
            GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.fishSoundHead, GameFacade_1.default.Instance.SoundMng.fishTypeToSoundNum(this._fishInfo._mFishType));
        }
        else
            this.mowner.active = false;
        this._mIsExist = false;
    };
    FishBase.prototype.StartMove = function () {
        Laya.timer.loop(30, this, this.Moving);
    };
    FishBase.prototype.StopMove = function () {
        Laya.timer.clear(this, this.Moving);
    };
    //#region  鱼的游动逻辑
    FishBase.prototype.Moving = function () {
        if (this._mIsStay)
            return;
        var currttime = new Date().getTime();
        //在这条路线上的生存时间
        var survivalTime = 0;
        if (currttime >= this._fishInfo._mFishCreateTime) {
            survivalTime = currttime - this._fishInfo._mFishCreateTime;
        }
        else {
            //这类鱼可能是超前 推过来,只有等到时间到才出来
            return;
        }
        //计算在贝塞尔曲线的位置点
        var t = (this._mCurrentSpeed * survivalTime) / this._fishInfo._mPathLenght;
        //检测速度变化
        this.OnChangeSpeed(t);
        //检测停留
        this.OnStayBehavior(t, currttime);
        //监测是否移动到墙外
        this.CheckFishOutWall();
        ////Debug.Log(string.Format("速度 : {0} 生存时间 : {1}  长度 : {2}   T : {3} ", mWayMoveInfo.mSpeed, survivalTime, mWayMoveInfo.mPathLenght, t));
        if (t >= 1) {
            FishController_1.default.Instance.OnDeadFishOrMoveEnd(this._fishInfo._mFishId, false);
        }
        else {
            this.SwimmingStyle(t);
            if (this._fishInfo._mFishModelType > 20) //todo 这里写死的数字待整理 28是最大的模型类型id值
                this.SetTransform(100 * (28 - this._fishInfo._mFishModelType), this._firstChild.transform, this._cameraTrans);
            else
                this.SetTransform(200 * (28 - this._fishInfo._mFishModelType), this._firstChild.transform, this._cameraTrans);
        }
    };
    /**
     * 根据贝塞尔公式求曲线上的点
     * @param gizmoPoints 点集
     * @param t 百分比
     */
    FishBase.prototype.GetPoint = function (gizmoPoints, t) {
        var numSections = gizmoPoints.length - 3;
        var tSec = Math.floor(t * numSections);
        var currPt = numSections - 1;
        if (currPt > tSec) {
            currPt = tSec;
        }
        var u = t * numSections - currPt;
        var a = gizmoPoints[currPt];
        var b = gizmoPoints[currPt + 1];
        var c = gizmoPoints[currPt + 2];
        var d = gizmoPoints[currPt + 3];
        var newPoint = new Laya.Vector3(0, 0, 0);
        var au = new Laya.Vector3(0, 0, 0);
        var bu = new Laya.Vector3(0, 0, 0);
        var cu = new Laya.Vector3(0, 0, 0);
        var du = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(a, -1 * u * u * u, au);
        Laya.Vector3.scale(b, 3 * u * u * u, bu);
        Laya.Vector3.scale(c, -3 * u * u * u, cu);
        Laya.Vector3.scale(d, 1 * u * u * u, du);
        Laya.Vector3.add(au, bu, newPoint);
        Laya.Vector3.add(newPoint, cu, newPoint);
        Laya.Vector3.add(newPoint, du, newPoint);
        Laya.Vector3.scale(a, 2 * u * u, au);
        Laya.Vector3.scale(b, -5 * u * u, bu);
        Laya.Vector3.scale(c, 4 * u * u, cu);
        Laya.Vector3.scale(d, -1 * u * u, du);
        Laya.Vector3.add(newPoint, au, newPoint);
        Laya.Vector3.add(newPoint, bu, newPoint);
        Laya.Vector3.add(newPoint, cu, newPoint);
        Laya.Vector3.add(newPoint, du, newPoint);
        Laya.Vector3.scale(a, -1 * u, au);
        Laya.Vector3.scale(c, 1 * u, cu);
        Laya.Vector3.add(newPoint, au, newPoint);
        Laya.Vector3.add(newPoint, cu, newPoint);
        Laya.Vector3.scale(b, 2, bu);
        Laya.Vector3.add(newPoint, bu, newPoint);
        Laya.Vector3.scale(newPoint, 0.5, newPoint);
        return newPoint;
    };
    /**
     * 鱼的游动方式
     * @param t 时间百分比
     */
    FishBase.prototype.SwimmingStyle = function (t) {
        Laya.Vector3.add(this.GetPoint(this._fishInfo._mWayPoints, t), this._fishInfo._offsetPoints, this.mowner.transform.position);
        var lookDir = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.add(this.GetPoint(this._fishInfo._mWayPoints, t + 0.01), this._fishInfo._offsetPoints, lookDir);
        if (this._mIsStay)
            this.mowner.transform.lookAt(this._cameraTrans.up, Laya.Vector3.Up, false);
        else {
            //this.mowner.transform.lookAt(lookDir, Laya.Vector3.Up, false);
            if (lookDir.z > this._cameraTrans.position.z)
                this.mowner.transform.lookAt(lookDir, Laya.Vector3.Up, false);
            else
                this.mowner.transform.lookAt(lookDir, CommonConstant_1.default.DirectionVector.Down, false);
        }
        var offset = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.subtract(lookDir, this.mowner.transform.position, offset);
        this.mowner.transform.translate(offset, false);
        if (t < 0.2 && !this._mIsWarned && !this.CheckFishCenterPosInWall()) {
            this._mIsWarned = true;
            this.FishWarn();
        }
    };
    /**
     * 通过屏幕坐标检测鱼是否在屏幕内
     */
    FishBase.prototype.CheckFishCenterPosInWall = function () {
        var outPos = new Laya.Vector3(0, 0, 0);
        this._cameraTrans.owner.viewport.project(this.mowner.transform.position, this._cameraTrans.owner.projectionViewMatrix, outPos);
        return outPos.x > 0 && outPos.x < GameConfig_1.default.width && outPos.y > 0 && outPos.y < GameConfig_1.default.height;
    };
    /**
     * 检测速度变化
     * @param time
     */
    FishBase.prototype.OnChangeSpeed = function (time) {
        if (null == this._FishBehavior._PathNodeSpeed)
            return;
        var rate = 1;
        for (var index = 0; index < this._FishBehavior._PathNodeSpeed.length - 1;) {
            if (time > this._FishBehavior._PathNodeSpeed[index]) {
                rate = this._FishBehavior._PathNodeSpeed[index + 1];
                index += 2;
            }
            else {
                //当速度 倍率不同时 采取速度改变
                if (this._mSpeedRate != rate) {
                    this._mSpeedRate = rate;
                    this.ChangeSpeed(this._mSpeedRate);
                }
                break;
            }
        }
    };
    /**改变速度 rate 倍速 */
    FishBase.prototype.ChangeSpeed = function (rate) {
        if (this._fishInfo._mFishType == EnumData_1.default.FishSubtype.TanabataFestival_fish) {
            return;
        }
        var currttime = new Date().getTime();
        var survivalTime = currttime - this._fishInfo._mFishCreateTime;
        var t = (this._mCurrentSpeed * survivalTime) / this._fishInfo._mPathLenght;
        this._mCurrentSpeed = this._fishInfo._mSpeed * rate;
        this._fishInfo._mFishCreateTime = currttime - (((this._fishInfo._mPathLenght * t) / this._mCurrentSpeed));
    };
    FishBase.prototype.OnStayBehavior = function (time, curTime) {
        if (!this._mIsStay && !this._mAlreadyStay) {
            if (this._FishBehavior._StayTime != 0 && time >= this._FishBehavior._StayPath) {
                //计算停留触发的时间
                var happenTime = this.CountSurTimeByBezierRate(this._FishBehavior._StayPath);
                //这里可能中途进来的鱼 可能已经停留了一段时间，或者已经停留结束开始走了。
                if (curTime <= happenTime + this._FishBehavior._StayTime) {
                    this._mIsStay = true;
                    this._mAlreadyStay = true;
                    //  mLastStayTime = time;
                    this.PlayAction(EnumData_1.default.ENUM_FISH_STATE.SHOW);
                    //计算停留流失时间
                    var lastTime = curTime - happenTime;
                    var timeArr = [time];
                    Laya.timer.once((this._FishBehavior._StayTime - lastTime), this, this.CancelStayBehavior, timeArr);
                    CommonUtil_1.utils.CommonUtils.log("getTime = " + new Date().getTime());
                }
            }
        }
    };
    /**
     * 取消停留行为
     */
    FishBase.prototype.CancelStayBehavior = function (time) {
        CommonUtil_1.utils.CommonUtils.log("getTime2 = " + new Date().getTime());
        this._mIsStay = false;
        this.PlayAction(EnumData_1.default.ENUM_FISH_STATE.SWIMMING);
        //这里的出生时间需要处理，因为被拖延了（停留了N久），出生时间需要推后
        this._fishInfo._mFishCreateTime = this.CountBirthTimeByBezierRate(time);
    };
    /**
     * 通过贝塞尔曲线的长度占比计算 当时时间
     * @param rate
     */
    FishBase.prototype.CountSurTimeByBezierRate = function (rate) {
        var time = (this._fishInfo._mPathLenght * rate) / this._mCurrentSpeed + this._fishInfo._mFishCreateTime;
        return time;
    };
    /**
     * 通过贝塞尔曲线长度占比 计算出 出生时间。
     * @param rate
     */
    FishBase.prototype.CountBirthTimeByBezierRate = function (rate) {
        var currttime = new Date().getTime();
        var birTime = currttime - (this._fishInfo._mPathLenght * rate) / this._mCurrentSpeed;
        return birTime;
    };
    //#endregion
    //#region  动画逻辑控制
    /// <summary>鱼的动作逻辑</summary>
    /// <param name="enum_fish_state"></param>
    FishBase.prototype.PlayAction = function (enum_fish_state) {
        if (null == this._Animator || null == this._FishAniClass)
            return;
        var self = this;
        switch (enum_fish_state) {
            case EnumData_1.default.ENUM_FISH_STATE.SWIMMING:
                return this.PlayAnimation(this._FishAniClass._SwimName);
            case EnumData_1.default.ENUM_FISH_STATE.SHOW: //停留动画（嬉戏）
                self.mowner.transform.lookAt(self._cameraTrans.up, Laya.Vector3.Up, false);
                return this.PlayAnimation(this._FishAniClass._StayName);
            case EnumData_1.default.ENUM_FISH_STATE.PAUSE:
                return false;
            case EnumData_1.default.ENUM_FISH_STATE.HITTED:
                return this.PlayAnimation(this._FishAniClass._HitName);
            case EnumData_1.default.ENUM_FISH_STATE.DEATH:
                return this.PlayAnimation(this._FishAniClass._DeadName);
            default:
                return false;
        }
    };
    FishBase.prototype.PlayAnimation = function (aniName) {
        if (aniName && aniName != "") {
            var aniStatesMap = this._Animator.getControllerLayer(0)._statesMap;
            var animatorState = aniStatesMap[aniName];
            if (animatorState)
                this._Animator.play(aniName);
            return true;
        }
        return false;
    };
    /// <summary>鱼受玩家攻击死亡</summary>
    FishBase.prototype.Dead = function (bouns, uid, deadFishType) {
        if (uid === void 0) { uid = 0; }
        if (deadFishType === void 0) { deadFishType = -1; }
        //被炮弹打死的是鱼王/炸弹鱼
        if (deadFishType != -1) //
         {
            if (this._fishInfo._mFishType == deadFishType) //本鱼是炸弹鱼/鱼王
             {
                if (BatteryController_1.default.Instance.gShootModel == 1 /* SHOOT_AUTO */ && NetLogin_1.default.Instance.IsSelfUid(uid)) {
                    GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_HUNTEDFISH, [bouns, this._fishInfo._mFishType]);
                }
            }
        }
        else {
            if (BatteryController_1.default.Instance.gShootModel == 1 /* SHOOT_AUTO */ && NetLogin_1.default.Instance.IsSelfUid(uid)) {
                GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_HUNTEDFISH, [bouns, this._fishInfo._mFishType]);
            }
        }
        this.PlayAction(EnumData_1.default.ENUM_FISH_STATE.DEATH);
        //todo 不能直接删除，待写死亡表现
        Laya.timer.once(this._FishAniClass._DeadTime * 1000, this, function () {
            this.mowner.active = false;
        });
    };
    //#endregion
    //#region 鱼的z轴计算，防止鱼重叠穿插
    FishBase.prototype.SetTransform = function (newZPos, trans, camTrans) {
        //求出与摄像机的方向单位向量
        var dirNormal = new Laya.Vector3(1, 0, 0);
        Laya.Vector3.subtract(this.mowner.transform.position, camTrans.position, dirNormal);
        Laya.Vector3.normalize(dirNormal, dirNormal);
        //求出新位置z轴到摄像机距离与现有位置z轴到摄像机距离的比率
        var trate = (newZPos - camTrans.position.z) / (this.mowner.transform.position.z - camTrans.position.z);
        var angel = Laya.Vector3.dot(dirNormal, Laya.Vector3.ForwardRH);
        //let tangle = Math.acos(angel);//*180;
        var dis = (newZPos - this.mowner.transform.position.z) / angel; //Math.cos(tangle);// (Math.cos((tangle/180) * Math.PI));
        var tscale = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(this._initialFirstChildScale, trate, tscale);
        trans.localScale = tscale;
        var dirVec3 = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(dirNormal, Math.abs(dis), dirVec3);
        Laya.Vector3.add(this.mowner.transform.position, dirVec3, trans.position);
        trans.position = trans.position;
    };
    //#endregion
    FishBase.prototype.CheckFishOutWall = function () {
        if (this._MFishInfo._mFishId == BatteryController_1.default.Instance.LockedFishID) {
            var outPos = new Laya.Vector3(0, 0, 0);
            this._cameraTrans.owner.viewport.project(this.mowner.transform.position, this._cameraTrans.owner.projectionViewMatrix, outPos);
            var offset = this.GetFishSize() / 2;
            if (outPos.x > GameConfig_1.default.width + offset || outPos.x < -offset ||
                outPos.y > GameConfig_1.default.height + offset || outPos.y < -offset) {
                BatteryController_1.default.Instance.LockedFishID = 0;
                return true;
            }
        }
        return false;
    };
    /**
     * 通过屏幕坐标检测鱼是否在屏幕内
     */
    FishBase.prototype.CheckIsFishInWall = function () {
        var outPos = new Laya.Vector3(0, 0, 0);
        this._cameraTrans.owner.viewport.project(this.mowner.transform.position, this._cameraTrans.owner.projectionViewMatrix, outPos);
        var offset = this.GetFishSize() / 2;
        if (outPos.x > GameConfig_1.default.width + offset || outPos.x < -offset ||
            outPos.y > GameConfig_1.default.height + offset || outPos.y < -offset) {
            return false;
        }
        return true;
    };
    /**
     * 模型x轴长度大小（模型比较小的鱼忽略不计）
     */
    FishBase.prototype.GetFishSize = function () {
        return 0;
    };
    FishBase.prototype.GetRelatedFishsId = function () {
        return [];
    };
    /**
     * 鱼预警
     */
    FishBase.prototype.FishWarn = function () {
    };
    return FishBase;
}(Laya.Script3D));
exports.FishBase = FishBase;
},{"../../Enum/EnumData":1,"../../GameConfig":2,"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/GameEvent":9,"../../constant/SoundNameConstant":11,"../../controller/BatteryController":12,"../../controller/FishController":13,"../../net/ProtoHander/NetLogin":78,"../../utils/CommonUtil":86,"./FishBaseConfigData":19}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var FishBaseConfig_1 = require("../../config/FishBaseConfig");
/**
 * 重新定义表结构类FishBaseConfig，方便程序调用处理
 */
var FishBaseConfigData;
(function (FishBaseConfigData) {
    /** 鱼的行为数据类*/
    var FishBehavior = /** @class */ (function () {
        function FishBehavior() {
            this._StayPath = 0;
            this._StayTime = 0;
            /** 存放路径节点速率（下标为偶数的是key值时间占比，下标为奇数的是value为速率，顺序相邻的两个为一组）*/
            this._PathNodeSpeed = new Array();
        }
        return FishBehavior;
    }());
    FishBaseConfigData.FishBehavior = FishBehavior;
    /** 鱼的动作数据类*/
    var FishAniClass = /** @class */ (function () {
        function FishAniClass() {
        }
        return FishAniClass;
    }());
    FishBaseConfigData.FishAniClass = FishAniClass;
    var FishSwimConfig = /** @class */ (function () {
        function FishSwimConfig() {
        }
        /** 配置数据预处理，方便调用*/
        FishSwimConfig.ParseFishBehaviorData = function () {
            this._FishBehaviorDict = new Laya.WeakObject();
            this._FishAnimateDict = new Laya.WeakObject();
            var dict = GameFacade_1.default.Instance.ConfigMng.FishBaseConfig;
            for (var iterator in dict) {
                var element = dict[iterator];
                var fbc = new FishBaseConfig_1.FishBaseConfig(element);
                var stay = fbc._StatyBehavior;
                var stayData = stay.split(',');
                var speed = fbc._SpeedBehavior;
                //游动行为 停留  和 速度变化
                var fishBehavior = new FishBehavior();
                if (stayData.length > 1) {
                    fishBehavior._StayPath = Number(stayData[0]);
                    fishBehavior._StayTime = Number(stayData[1]);
                }
                if ("" != speed) {
                    var speedData = speed.split('|');
                    for (var i = 0; i < speedData.length; i++) {
                        var speedTemp = speedData[i].split(',');
                        fishBehavior._PathNodeSpeed.push(Number(speedTemp[0]), Number(speedTemp[1]));
                    }
                }
                this._FishBehaviorDict.set(fbc._FishTypeID, fishBehavior);
                //动画
                var aniClass = new FishAniClass();
                var swimAni = fbc._SwimAni;
                var deadAni = fbc._DeadAni.split(',');
                var hitAni = fbc._HitAni.split(',');
                var stayAni = fbc._StayAni1.split(',');
                aniClass._SwimName = swimAni;
                if (deadAni.length > 1) {
                    aniClass._DeadName = deadAni[0];
                    aniClass._DeadTime = Number(deadAni[1]);
                }
                if (hitAni.length > 1) {
                    aniClass._HitName = hitAni[0];
                    aniClass._HitTime = Number(hitAni[1]);
                }
                if (stayAni.length > 1) {
                    aniClass._StayName = stayAni[0];
                    aniClass._StayTime = Number(stayAni[1]);
                }
                this._FishAnimateDict.set(fbc._FishTypeID, aniClass);
            }
        };
        /** 鱼的行为数据列表（key为鱼类型ID;value为鱼行为类）*/
        FishSwimConfig._FishBehaviorDict = new Laya.WeakObject();
        /** 鱼的动作数据列表（key为鱼类型ID;value为鱼动作类）*/
        FishSwimConfig._FishAnimateDict = new Laya.WeakObject();
        return FishSwimConfig;
    }());
    FishBaseConfigData.FishSwimConfig = FishSwimConfig;
})(FishBaseConfigData = exports.FishBaseConfigData || (exports.FishBaseConfigData = {}));
exports.default = FishBaseConfigData;
},{"../../GameFacade":3,"../../config/FishBaseConfig":6}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WayMoveInfo = /** @class */ (function () {
    function WayMoveInfo() {
        /** 路径偏移*/
        this._offsetPoints = new Laya.Vector3(0, 0, 0);
    }
    return WayMoveInfo;
}());
exports.default = WayMoveInfo;
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FishBase_1 = require("./FishBase");
var FishController_1 = require("../../controller/FishController");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var CommonUtil_1 = require("../../utils/CommonUtil");
var GameFacade_1 = require("../../GameFacade");
var CommonConstant_1 = require("../../constant/CommonConstant");
var EnumData_1 = require("../../Enum/EnumData");
var HF3DFishClasses;
(function (HF3DFishClasses) {
    var Fish01 = /** @class */ (function (_super) {
        __extends(Fish01, _super);
        function Fish01() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish01.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish01;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish01 = Fish01;
    var Fish02 = /** @class */ (function (_super) {
        __extends(Fish02, _super);
        function Fish02() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish02.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish02;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish02 = Fish02;
    var Fish03 = /** @class */ (function (_super) {
        __extends(Fish03, _super);
        function Fish03() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish03.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish03;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish03 = Fish03;
    var Fish04 = /** @class */ (function (_super) {
        __extends(Fish04, _super);
        function Fish04() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish04.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish04;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish04 = Fish04;
    var Fish05 = /** @class */ (function (_super) {
        __extends(Fish05, _super);
        function Fish05() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish05.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish05;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish05 = Fish05;
    var Fish06 = /** @class */ (function (_super) {
        __extends(Fish06, _super);
        function Fish06() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish06.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish06;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish06 = Fish06;
    var Fish07 = /** @class */ (function (_super) {
        __extends(Fish07, _super);
        function Fish07() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish07.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish07;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish07 = Fish07;
    var Fish08 = /** @class */ (function (_super) {
        __extends(Fish08, _super);
        function Fish08() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish08.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish08;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish08 = Fish08;
    var Fish09 = /** @class */ (function (_super) {
        __extends(Fish09, _super);
        function Fish09() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish09.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish09;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish09 = Fish09;
    var Fish10 = /** @class */ (function (_super) {
        __extends(Fish10, _super);
        function Fish10() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish10.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish10;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish10 = Fish10;
    var Fish11 = /** @class */ (function (_super) {
        __extends(Fish11, _super);
        function Fish11() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish11.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish11;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish11 = Fish11;
    var Fish12 = /** @class */ (function (_super) {
        __extends(Fish12, _super);
        function Fish12() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish12.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish12;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish12 = Fish12;
    var Fish13 = /** @class */ (function (_super) {
        __extends(Fish13, _super);
        function Fish13() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish13.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish13;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish13 = Fish13;
    var Fish14 = /** @class */ (function (_super) {
        __extends(Fish14, _super);
        function Fish14() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish14.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish14;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish14 = Fish14;
    var Fish15 = /** @class */ (function (_super) {
        __extends(Fish15, _super);
        function Fish15() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish15.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish15;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish15 = Fish15;
    var Fish16 = /** @class */ (function (_super) {
        __extends(Fish16, _super);
        function Fish16() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish16.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        Fish16.prototype.GetFishSize = function () {
            return CommonConstant_1.default.OutWallOffset_shark;
        };
        return Fish16;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish16 = Fish16;
    var Fish17 = /** @class */ (function (_super) {
        __extends(Fish17, _super);
        function Fish17() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish17.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish17;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish17 = Fish17;
    var Fish18 = /** @class */ (function (_super) {
        __extends(Fish18, _super);
        function Fish18() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish18.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish18;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish18 = Fish18;
    var Fish19 = /** @class */ (function (_super) {
        __extends(Fish19, _super);
        function Fish19() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish19.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish19;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish19 = Fish19;
    var Fish20 = /** @class */ (function (_super) {
        __extends(Fish20, _super);
        function Fish20() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish20.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
            // this._firstChild.transform.localPosition = new Laya.Vector3(0, 0, 500);
            //this._firstChild.transform.localScale = new Laya.Vector3(51, 51, 51);
        };
        Fish20.prototype.GetFishSize = function () {
            return CommonConstant_1.default.OutWallOffset_shark;
        };
        return Fish20;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish20 = Fish20;
    var Fish21 = /** @class */ (function (_super) {
        __extends(Fish21, _super);
        function Fish21() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish21.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish21;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish21 = Fish21;
    var Fish22 = /** @class */ (function (_super) {
        __extends(Fish22, _super);
        function Fish22() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish22.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish22;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish22 = Fish22;
    var Fish23 = /** @class */ (function (_super) {
        __extends(Fish23, _super);
        function Fish23() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish23.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        /**
      * 鱼预警
      */
        Fish23.prototype.FishWarn = function () {
            _super.prototype.FishWarn.call(this);
            GameFacade_1.default.Instance.HuntSceneMng.warnShow(this._fishInfo._mFishType);
        };
        Fish23.prototype.GetFishSize = function () {
            return CommonConstant_1.default.OutWallOffset_shark;
        };
        return Fish23;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish23 = Fish23;
    var Fish24 = /** @class */ (function (_super) {
        __extends(Fish24, _super);
        function Fish24() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish24.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return Fish24;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish24 = Fish24;
    var Fish25 = /** @class */ (function (_super) {
        __extends(Fish25, _super);
        function Fish25() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish25.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
            //Laya.timer.loop(6000,this,this.PlaySwimmingAction2);
        };
        /**
             * 鱼预警
             */
        Fish25.prototype.FishWarn = function () {
            _super.prototype.FishWarn.call(this);
            GameFacade_1.default.Instance.HuntSceneMng.warnShow(this._fishInfo._mFishType);
        };
        Fish25.prototype.GetFishSize = function () {
            return CommonConstant_1.default.OutWallOffset_mermaid;
        };
        Fish25.prototype.PlaySwimmingAction2 = function () {
            var self = this;
            if (self.PlayAnimation("Swim2")) {
                Laya.timer.once(3000, self, function () {
                    self.PlayAction(EnumData_1.default.ENUM_FISH_STATE.SWIMMING);
                });
            }
        };
        return Fish25;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish25 = Fish25;
    var Fish26 = /** @class */ (function (_super) {
        __extends(Fish26, _super);
        function Fish26() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish26.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        /**
       * 鱼预警
       */
        Fish26.prototype.FishWarn = function () {
            _super.prototype.FishWarn.call(this);
            GameFacade_1.default.Instance.HuntSceneMng.warnShow(this._fishInfo._mFishType);
        };
        Fish26.prototype.GetFishSize = function () {
            return CommonConstant_1.default.OutWallOffset_ship;
        };
        return Fish26;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish26 = Fish26;
    /** 炸弹鱼*/
    var Fish27 = /** @class */ (function (_super) {
        __extends(Fish27, _super);
        function Fish27() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish27.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        /**获取屏幕中，能被炸弹鱼炸到的鱼*/
        Fish27.prototype.GetRelatedFishsId = function () {
            var getFishRate = function (type) {
                for (var i = 0; i < fishInfo.length; i++) {
                    if (fishInfo[i].fish_type == type) {
                        return fishInfo[i].fish_rate;
                    }
                }
            };
            var relatedFishsIdArr = [];
            var fishObjDic = FishController_1.default.Instance.FishObjDict;
            var fishInfo = NetLogin_1.default.Instance._playerLoginInfo.fish_info;
            for (var key in fishObjDic) {
                var isInWall = fishObjDic[key].CheckIsFishInWall();
                var type = fishObjDic[key]._MFishInfo._mFishType;
                var rate = CommonUtil_1.utils.CommonUtils.numberFixed(getFishRate(type));
                if (rate <= 30 && isInWall) {
                    relatedFishsIdArr.push(fishObjDic[key]._MFishInfo._mFishId);
                }
            }
            return relatedFishsIdArr;
        };
        return Fish27;
    }(FishBase_1.FishBase));
    HF3DFishClasses.Fish27 = Fish27;
    var FishKing1 = /** @class */ (function (_super) {
        __extends(FishKing1, _super);
        function FishKing1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FishKing1.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return FishKing1;
    }(FishBase_1.FishBase));
    HF3DFishClasses.FishKing1 = FishKing1;
    var FishKing2 = /** @class */ (function (_super) {
        __extends(FishKing2, _super);
        function FishKing2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FishKing2.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return FishKing2;
    }(FishBase_1.FishBase));
    HF3DFishClasses.FishKing2 = FishKing2;
    var FishKing3 = /** @class */ (function (_super) {
        __extends(FishKing3, _super);
        function FishKing3() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FishKing3.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return FishKing3;
    }(FishBase_1.FishBase));
    HF3DFishClasses.FishKing3 = FishKing3;
    var FishKing4 = /** @class */ (function (_super) {
        __extends(FishKing4, _super);
        function FishKing4() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FishKing4.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return FishKing4;
    }(FishBase_1.FishBase));
    HF3DFishClasses.FishKing4 = FishKing4;
    var FishKing5 = /** @class */ (function (_super) {
        __extends(FishKing5, _super);
        function FishKing5() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FishKing5.prototype.Init = function (fishInfo) {
            _super.prototype.Init.call(this, fishInfo);
        };
        return FishKing5;
    }(FishBase_1.FishBase));
    HF3DFishClasses.FishKing5 = FishKing5;
})(HF3DFishClasses || (HF3DFishClasses = {}));
exports.default = HF3DFishClasses;
},{"../../Enum/EnumData":1,"../../GameFacade":3,"../../constant/CommonConstant":7,"../../controller/FishController":13,"../../net/ProtoHander/NetLogin":78,"../../utils/CommonUtil":86,"./FishBase":18}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../GameFacade");
var CommonUtil_1 = require("../utils/CommonUtil");
var CommonConstant_1 = require("../constant/CommonConstant");
var GameStart = /** @class */ (function () {
    function GameStart() {
        GameFacade_1.default.Instance.Init();
        this.LoadLoadingRes();
    }
    /**
     * 预先加载 loading 界面资源
     */
    GameStart.prototype.LoadLoadingRes = function () {
        var self = this;
        Laya.loader.load([{ url: CommonConstant_1.default._fuiLoadingPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant_1.default._fuiLoadingPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant_1.default._loadingBgPath, type: Laya.Loader.IMAGE }], Laya.Handler.create(this, function () {
            GameFacade_1.default.Instance.SceneMng.EnterHallScene(self.GameEnter.bind(self));
        }));
    };
    /**
     * 连接服务器
     */
    GameStart.prototype.GameEnter = function () {
        window["g_RemoveSplash"]();
        this.registEvent();
        this.startConnect();
    };
    GameStart.prototype.registEvent = function () {
        GameFacade_1.default.Instance.SocketMng.AddEvent();
    };
    GameStart.prototype.startConnect = function () {
        CommonUtil_1.utils.CommonUtils.log("startConnect");
        var GameMng = GameFacade_1.default.Instance.GameMng;
        //GameMng.serverIp = "ws://192.168.10.93"; GameMng.serverPort = 27070; GameFacade.Instance.GameMng.isLoacalDev = true; //国强
        //GameMng.serverIp = "ws://192.168.10.43"; GameMng.serverPort = 27070; GameFacade.Instance.GameMng.isLoacalDev = true; //家乐
        //GameMng.serverIp = "ws://dev-by-1.blizzmi.local"; GameMng.serverPort = 50062; GameFacade.Instance.GameMng.isLoacalDev = true; //dev
        GameFacade_1.default.Instance.SocketMng.connenct(GameMng.serverIp, GameMng.serverPort, 0 /* GAME */, GameMng.token);
    };
    return GameStart;
}());
exports.default = GameStart;
},{"../GameFacade":3,"../constant/CommonConstant":7,"../utils/CommonUtil":86}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonConstant_1 = require("../../constant/CommonConstant");
var FishController_1 = require("../../controller/FishController");
var GameFacade_1 = require("../../GameFacade");
var BatteryController_1 = require("../../controller/BatteryController");
var BulletBase_1 = require("../Bullet/BulletBase");
var NetRoom_1 = require("../../net/ProtoHander/NetRoom");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonUtil_1 = require("../../utils/CommonUtil");
var CannonConfig_1 = require("../../config/CannonConfig");
/**
 * 炮台
 */
var Cannon = /** @class */ (function () {
    function Cannon(cannon, info, waitImg, index) {
        this.m_gun3dDic = null;
        this.m_data = null;
        this.m_gunMultiIndex = 0;
        this.m_curGun3DIndex = 0;
        this.m_data = null;
        this.m_waitImg = waitImg;
        this.m_cannon = cannon;
        var controller = cannon.getController("c1");
        this.m_bInversion = false;
        if (index >= 2) { //0~3
            this.m_bInversion = true;
            controller.selectedIndex = 1;
        }
        this.m_position = index;
        // controller = this.m_info.getController("c1");
        // if (index % 2 == 0) {
        //     controller.selectedIndex = 1;
        // }
        //炮台底座为laya的UI，炮使用3d资源
        var fuiBaseBg = cannon.getChild("BaseBg");
        fuiBaseBg.visible = false;
        this.m_gun = cannon.getChild("Gun").asLoader;
        this.m_gun.visible = false;
        var fuiBaseBgPos = this.m_cannon.localToGlobal(fuiBaseBg.x, fuiBaseBg.y);
        this.m_baseBg = new Laya.Image(CommonConstant_1.default._baseBgPath); //炮的底座
        this.m_baseBg.anchorX = 0.5;
        this.m_baseBg.anchorY = 0.5;
        this.m_baseBg.pos(fuiBaseBgPos.x, fuiBaseBgPos.y);
        var huntPanel = GameFacade_1.default.Instance.SceneMng.GetPanelById(1 /* HuntPanel */);
        huntPanel.m_layaUINode.addChild(this.m_baseBg);
        this.m_gun3DNode = huntPanel.m_gunScene3D;
        //this.m_gun3DNode = huntPanel.m_awardScene3D;
        //炮台加减按钮
        this.m_loseBtn = cannon.getChild("LoseBtn");
        this.m_loseBtn.onClick(this, this.OnLossBtnClick);
        this.m_loseBtn.onClick(this, this.playSoundChangeGun);
        this.m_addBtn = cannon.getChild("AddBtn");
        this.m_addBtn.onClick(this, this.OnAddBtnClick);
        this.m_addBtn.onClick(this, this.playSoundChangeGun);
        this.m_gunMultiLabel = cannon.getChild("GunPowerLabel").asLabel;
        //炮台旁的信息框 用laya创建
        info.visible = false;
        var namePos = new Laya.Point(27, 25);
        //let namePos = new Laya.Point(44, 25);
        var coinFontPos = new Laya.Point(27, 66);
        var levelFont = new Laya.Point(2, 23);
        var coinImgPos = new Laya.Point(18, 74);
        var levelFontBgPos = new Laya.Point(22, 35);
        var walletBtnPos = new Laya.Point(196, 76);
        if (index % 2 == 1) {
            //namePos = new Laya.Point(11, 25);
            coinFontPos = new Laya.Point(14, 66);
            levelFont = new Laya.Point(176, 23);
            coinImgPos = new Laya.Point(191, 75);
            levelFontBgPos = new Laya.Point(196, 35);
            walletBtnPos = new Laya.Point(22, 76);
        }
        this.m_info = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._infoFrame, new Laya.Point(info.x, info.y), huntPanel.m_layaUINode, 0, 0); //炮台信息底框
        var labelBg = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._infoLabelBg, new Laya.Point(4, 21), this.m_info, 0, 0); //玩家昵称底框
        this.m_userNameLabel = CommonUtil_1.utils.CommonUtils.CreatLayaLabel(namePos, 161, this.m_info, 22); //玩家昵称
        this.m_userNameLabel.color = "#FFFFFF";
        var levelFontBg = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._infoLevelBg, levelFontBgPos, this.m_info); //玩家等级底框
        this.m_userLevelFont = CommonUtil_1.utils.CommonUtils.CreatFontClip(levelFont, CommonConstant_1.default._levelFont, "*+,-./0123456789", this.m_info, 51); //等级
        this.m_userLevelFont.scale(0.8, 0.8);
        levelFontBg.visible = false;
        this.m_userLevelFont.visible = false;
        var coinFontBg = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._infoLabelBg, new Laya.Point(4, 60), this.m_info, 0, 0); //金币数字底框
        var coinImg = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._infoCoin, coinImgPos, this.m_info); //金币icon
        this.m_coinNumFont = CommonUtil_1.utils.CommonUtils.CreatFontClip(coinFontPos, CommonConstant_1.default._coinFont, ".,0123456789", this.m_info, 173); //金币数字
        this.m_walletBnt = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._infoWallent, walletBtnPos, this.m_info); //金币icon
        var wallentBtnMonitor = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._infoWallent, new Laya.Point(walletBtnPos.x + this.m_info.x, walletBtnPos.y + this.m_info.y), Laya.stage); //金币icon
        wallentBtnMonitor.alpha = 0;
        wallentBtnMonitor.on(Laya.Event.MOUSE_DOWN, this, this.OnWalletBtnClick);
        this.m_gunGpos = this.m_cannon.localToGlobal(this.m_gun.x, this.m_gun.y);
        var endPos = this.m_info.localToGlobal(new Laya.Point(coinImg.x, coinImg.y));
        this.m_coinEndPos = new Laya.Vector3(endPos.x, endPos.y, 0);
        this.m_changeEffect = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.ChangeCannonEffect);
    }
    Object.defineProperty(Cannon.prototype, "CoinEndPos", {
        get: function () {
            return this.m_coinEndPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cannon.prototype, "Gun3D", {
        get: function () {
            return this.m_gun3D;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cannon.prototype, "Gun", {
        get: function () {
            return this.m_gun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cannon.prototype, "GunGpos", {
        get: function () {
            return new Laya.Vector3(this.m_gunGpos.x, this.m_gunGpos.y, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cannon.prototype, "Data", {
        get: function () {
            return this.m_data;
        },
        enumerable: true,
        configurable: true
    });
    Cannon.prototype.InitGun3D = function () {
        var self = this;
        if (this.m_gun3dDic == null) {
            this.m_gun3dDic = new Laya.WeakObject;
        }
        for (var i = 0; i < 3; i++) {
            var prefab = GameFacade_1.default.Instance.HuntSceneMng.GetCannonPrefab(i + 1);
            if (null == prefab)
                return;
            var cloneIns = Laya.Sprite3D.instantiate(prefab, prefab.parent);
            //cloneIns.active = true;
            cloneIns.transform.position = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera, this.GunGpos);
            cloneIns.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
            this.m_gun3dDic.set(i, cloneIns);
        }
        this.m_gun3D = this.m_gun3dDic.get(0);
        // // //延时才能设置炮台为待机状态  i dont know tm why...
        // // Laya.timer.once(100, this, () => {
        // //     self.PlayAnimation(CannonConfig._IdleAni);
        // // })
        if (this.m_bInversion) {
            this.m_baseBg.scaleY = -1;
            this.m_gun3D.transform.rotationEuler = new Laya.Vector3(0, 0, 180);
        }
    };
    Cannon.prototype.OnLossBtnClick = function () {
        this.m_gunMultiIndex = (this.m_gunMultiIndex <= 0) ? NetRoom_1.default.Instance._curRoomInfo.battery.length - 1 : this.m_gunMultiIndex - 1;
        NetRoom_1.default.Instance.ChangeBatteryReq(this.m_gunMultiIndex, NetLogin_1.default.Instance.RoleInfo.roleId);
        this.ChangeGunBySelf(this.m_gunMultiIndex);
    };
    Cannon.prototype.OnAddBtnClick = function () {
        this.m_gunMultiIndex = (this.m_gunMultiIndex >= NetRoom_1.default.Instance._curRoomInfo.battery.length - 1) ? 0 : this.m_gunMultiIndex + 1;
        NetRoom_1.default.Instance.ChangeBatteryReq(this.m_gunMultiIndex, NetLogin_1.default.Instance.RoleInfo.roleId);
        this.ChangeGunBySelf(this.m_gunMultiIndex);
    };
    /**
     * 免转按钮点击
     * 最高层的fui不能点击穿透，所以炮台信息框上的免转按钮不能触发响应，只能起到一个显示功能，因此在stage上添加laya对象wallentBtnMonitor来监测响应
     */
    Cannon.prototype.OnWalletBtnClick = function (e) {
        switch (e.type) {
            case Laya.Event.MOUSE_DOWN:
                {
                    if (!GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn && this.m_walletBnt.visible) {
                        GameFacade_1.default.Instance.WalletMng.mainWalletReq();
                    }
                }
        }
    };
    /**
     * 播放改变炮台声音
     */
    Cannon.prototype.playSoundChangeGun = function () {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.changeGun);
    };
    Cannon.prototype.ChangeGunByServe = function () {
        this.m_gunMultiLabel.text = CommonUtil_1.utils.CommonUtils.numberFixed(this.m_data.bullet_multi * NetRoom_1.default.Instance._curRoomInfo.ante).toString(); //子弹倍率
        var bulletResID = BatteryController_1.default.Instance.GetBatteryResIdByMulti(this.m_data.bullet_multi) - 1;
        //this.m_gun.url = CommonConstant._preHunterPath + CommonConstant._gunPicArr[bulletResID];
        this.ChangeGun(bulletResID);
    };
    Cannon.prototype.ChangeGunBySelf = function (index) {
        var multi = NetRoom_1.default.Instance._curRoomInfo.battery[this.m_gunMultiIndex];
        this.m_data.bullet_multi = multi; //客户端更新自身炮台倍率
        this.m_gunMultiLabel.text = CommonUtil_1.utils.CommonUtils.numberFixed(multi * NetRoom_1.default.Instance._curRoomInfo.ante).toString(); //子弹倍率
        var bulletResID = BatteryController_1.default.Instance.GetBatteryResIdByMulti(multi) - 1;
        //this.m_gun.url = CommonConstant._preHunterPath + CommonConstant._gunPicArr[bulletResID];
        this.ChangeGun(bulletResID);
    };
    Cannon.prototype.ChangeGun = function (index) {
        var rotateZ = this.m_gun3D.transform.rotationEuler.z;
        if (index != this.m_curGun3DIndex) {
            this.m_gun3D.active = false;
            this.m_gun3D = this.m_gun3dDic.get(index);
            this.m_gun3D.active = true;
            this.m_gun3D.transform.rotationEuler = new Laya.Vector3(0, 0, rotateZ);
            this.m_curGun3DIndex = index;
            this.m_changeEffect.transform.position = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera, new Laya.Vector3(this.m_gunGpos.x, this.m_gunGpos.y, 0));
            this.m_changeEffect.active = false;
            this.m_changeEffect.active = true;
            this.m_changeEffect.transform.localPositionZ = -2;
            this.PlayAnimation(CannonConfig_1.default._IdleAni);
        }
        // if(!BatteryController.Instance.m_bshoot)
        // {
        //     this.PlayAnimation(CannonConfig._IdleAni);
        // }
    };
    Cannon.prototype.GetBulletPos = function () {
        var outPos = new Laya.Vector3(0, 0, 0);
        //Laya.Vector3.add((this.m_gun3D.getChildByName("BulletPos") as Laya.Sprite3D).transform.position, this.m_gun3D.transform.position, outPos);
        //this.m_gunBulletPos = outPos;
        var worldPos = this.m_gun3D.getChildByName("BulletPos").transform.position;
        GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera.worldToViewportPoint(worldPos, outPos);
        return CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._HuntSceneCamera, outPos);
    };
    //#region 子弹逻辑
    /**
     * 创建子弹
     * @param data 子弹数据
     */
    Cannon.prototype.CreateBullet = function (data) {
        CommonUtil_1.utils.CommonUtils.log("CreateBullet data = ", data);
        var self = this;
        this.PlayAnimation(CannonConfig_1.default._AttackAni);
        this.PlayAttackFire();
        Laya.timer.once(0.3 * 1000, this, function () {
            self.PlayAnimation(CannonConfig_1.default._IdleAni);
        });
        // if (!(data.fishid > 0 && FishController.Instance.FishObjDict.has(data.fishid)))
        //     return;//子弹锁定了一个不存在的鱼
        if (data.uid == NetLogin_1.default.Instance.RoleInfo.roleId) {
            BatteryController_1.default.Instance.ShootedBulletAmount += 1;
        }
        this.m_coinNumFont.value = (data.jettonshow * 0.01).toFixed(2); //金币数
        GameFacade_1.default.Instance.WalletMng.setFgWalletValue(data.jettonshow);
        var bulletResID = BatteryController_1.default.Instance.GetBatteryResIdByMulti(data.multi);
        var bullet = GameFacade_1.default.Instance.HuntSceneMng.InstantiateBullet(bulletResID);
        bullet.transform.rotationEuler = this.GetBulletRotate(data.angel);
        this.playSoundShoot(bulletResID);
        //bullet.transform.position = CommonConstant.PosVector[this.m_data.position - 1];
        //bullet.transform.position = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._HuntSceneCamera, this.m_gunBulletPos);
        bullet.transform.position = this.GetBulletPos();
        bullet.getChildAt(0).transform.localPosition = new Laya.Vector3(0, 0, 0);
        var bulletScript = bullet.getComponent(BulletBase_1.default);
        bulletScript.InitData(data.bulletid, data.multi, bulletResID, data.fishid, data.uid, data.fishid);
        //bulletScript.StartMoving();
    };
    /**
     * 根于子弹类型播放声音
     * @param num 子弹类型
     */
    Cannon.prototype.playSoundShoot = function (num) {
        switch (num) {
            case 1:
                GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.shoot1);
                break;
            case 2:
                GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.shoot2);
                break;
            case 3:
                GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.shoot3);
                break;
            default:
                break;
        }
    };
    /** 子弹的角度*/
    Cannon.prototype.GetBulletRotate = function (angel) {
        var rotate = new Laya.Vector3(0, 0, angel);
        if (this.m_data.position > 2) {
            var rotate = new Laya.Vector3(0, 0, 180 + angel);
        }
        return rotate;
    };
    Cannon.prototype.GetButtlePos = function (angel) {
        // if (this.m_data.position > 2) {
        //     angel = 180 + angel;
        // }
        // let x = Math.sin(angel)*1.048; //半径为60
        // let y = Math.cos(angel)*1.048;
        // utils.CommonUtils.log("------------------angel = " + angel);
        // utils.CommonUtils.log("------------------x = " + x);
        // utils.CommonUtils.log("------------------y = " + y);
        // let posCenter = CommonConstant.PosVector[this.m_data.position - 1];
        // let pos = new Laya.Vector3(posCenter.x+x, posCenter.y+y, 0);
        //return pos;
    };
    //#endregion
    /**
     * 更新玩家炮台UI信息展示
     */
    Cannon.prototype.UpdatePlayerInfoShow = function () {
        var info = null;
        if (this.m_data)
            info = NetRoom_1.default.Instance._RoomRoleInfoDict[this.m_data.uid];
        this.UpdateInfo(info);
        //// BatteryUpgrade();
    };
    Cannon.prototype.UpdateInfo = function (data) {
        this.m_data = data;
        var dataIsNotNull = (data != null);
        this.m_cannon.visible = dataIsNotNull;
        this.m_info.visible = dataIsNotNull;
        this.m_waitImg.visible = !dataIsNotNull;
        this.m_gun3D.active = dataIsNotNull;
        this.m_baseBg.visible = dataIsNotNull;
        if (dataIsNotNull) {
            if (data.uid != NetLogin_1.default.Instance.RoleInfo.roleId) {
                this.m_loseBtn.visible = false;
                this.m_addBtn.visible = false;
                this.m_walletBnt.visible = false;
            }
            else {
                if (!NetLogin_1.default.Instance.isOfficial) {
                    this.m_walletBnt.visible = false;
                }
            }
            this.m_position = data.position;
            this.PlayAnimation(CannonConfig_1.default._IdleAni);
            this.m_gunMultiIndex = BatteryController_1.default.Instance.GetBatteryIndexByMulti(this.m_data.bullet_multi);
            this.m_userNameLabel.text = CommonUtil_1.utils.CommonUtils.nickNameToFormat(this.m_data.nickname); //用户名
            this.m_coinNumFont.value = CommonUtil_1.utils.CommonUtils.numberFixed(this.m_data.jetton_show).toFixed(2); //金币数
            this.m_userLevelFont.value = this.m_data.level.toString(); //等级数
            this.ChangeGunByServe();
        }
    };
    /** 更新金币*/
    Cannon.prototype.UpdateCoins = function (uid, data) {
        var info = null;
        if (this.m_data) {
            this.m_coinNumFont.value = CommonUtil_1.utils.CommonUtils.numberFixed(this.m_data.jetton_show).toFixed(2); //金币数
            // 金币数字
            var bounsFont_1 = FishController_1.default.Instance.CreatBounsFont(data.bonus, this.CoinEndPos, 0.3, uid);
            var bInversion = BatteryController_1.default.Instance.GetBatteryByUid(uid).m_bInversion;
            var offY = -CommonConstant_1.default.BounsFontOffY;
            if (bInversion) {
                offY = CommonConstant_1.default.BounsFontOffY;
            }
            Laya.Tween.to(bounsFont_1, { y: this.CoinEndPos.y + offY }, 500, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                bounsFont_1.visible = false;
                Laya.Pool.recover(FishController_1.default.Instance._PoolSign, bounsFont_1);
            }));
        }
    };
    /**
     * 更新子弹倍数
     * @param multi
     */
    Cannon.prototype.UpdateBulletMulti = function (multi) {
        this.m_data.bullet_multi = multi;
        this.ChangeGunByServe();
    };
    Cannon.prototype.UpdateAngleByAngle = function (angel) {
        this.m_cannon.rotation = angel;
    };
    /** 更新炮台角度，并返回*/
    Cannon.prototype.UpdateAngleByPos = function (posX, posY) {
        var diry = this.m_data.position <= 2 ? -1 : 1;
        var dir = new Laya.Vector2(posX - this.m_gunGpos.x, posY - this.m_gunGpos.y);
        var dirnor = new Laya.Vector2(0, 0);
        Laya.Vector2.normalize(dir, dirnor);
        var dot = Laya.Vector2.dot(new Laya.Vector2(0, diry), dirnor);
        var rAngle = Math.acos(dot) * 57.29578;
        //dot点乘为负数，则两向量夹角大于90度，点击无效
        if (dot < 0) {
            return -1;
        }
        else {
            if (dirnor.x <= 0) {
                rAngle = -rAngle;
            }
        }
        rAngle = this.m_data.position <= 2 ? rAngle : -rAngle;
        //this.m_gun.rotation = rAngle;
        this.m_gun3D.transform.rotationEuler = new Laya.Vector3(0, 0, rAngle);
        return rAngle;
    };
    //
    Cannon.prototype.PlayAnimation = function (aniName) {
        if (this.Gun3D == null) {
            CommonUtil_1.utils.CommonUtils.log("---3d炮资源为空");
            return;
        }
        var animator = this.Gun3D.getChildAt(0).getComponent(Laya.Animator);
        if (aniName != "") {
            var aniStatesMap = animator.getControllerLayer(0)._statesMap;
            var animatorState = aniStatesMap[aniName];
            if (animatorState)
                animator.play(aniName);
            CommonUtil_1.utils.CommonUtils.log("PlayAnimation aniName = ", aniName);
        }
    };
    Cannon.prototype.PlayAttackFire = function () {
        //3号炮台的喷火粒子效果
        var particle = this.Gun3D.getChildAt(0).getChildAt(0).getChildByName("huo");
        if (particle) {
            var particleSys = particle.particleSystem;
            particleSys.stop();
            particleSys.play();
        }
        //三个炮台的meshrenderer 喷火效果
        var fireSp3D = this.Gun3D.getChildAt(0).getChildAt(0).getChildByName("cannon01_1");
        if (fireSp3D == null) {
            fireSp3D = this.Gun3D.getChildAt(0).getChildByName("cannon01_1");
        }
        var fireMeshRenderer = fireSp3D.meshRenderer;
        var effectMaterial = fireMeshRenderer.material;
        Laya.Tween.to(effectMaterial, { colorA: 255 }, 45, null, Laya.Handler.create(this, function () {
            Laya.Tween.to(effectMaterial, { colorA: 0 }, 45);
        }));
    };
    Cannon.prototype.Exit = function () {
        this.m_gun3D = null;
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    };
    return Cannon;
}());
exports.default = Cannon;
},{"../../GameFacade":3,"../../config/CannonConfig":5,"../../constant/CommonConstant":7,"../../constant/SoundNameConstant":11,"../../controller/BatteryController":12,"../../controller/FishController":13,"../../net/ProtoHander/NetLogin":78,"../../net/ProtoHander/NetRoom":81,"../../utils/CommonUtil":86,"../Bullet/BulletBase":14}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonConstant_1 = require("../../constant/CommonConstant");
var HuntedItem = /** @class */ (function () {
    function HuntedItem(owner, panel) {
        this.m_fishImg = owner.getChild("FishImg").asLoader;
        this.m_amount = owner.getChild("Amount").asLabel;
        this.m_amount.ensureSizeCorrect();
        this.m_value = owner.getChild("Value").asLabel;
        this.m_value.ensureSizeCorrect();
        this.m_huntedPanel = panel;
        this.GameObject = owner;
    }
    //id从1开始
    HuntedItem.prototype.InitUI = function (value, fishType) {
        this.m_amountNum = 1;
        this.m_valueNum = value;
        this.m_amount.text = this.m_amountNum.toString();
        this.m_value.text = this.m_valueNum.toFixed(2);
        this.m_fishImg.url = CommonConstant_1.default._preCommonPath + fishType;
    };
    HuntedItem.prototype.AddAmount = function (value) {
        this.m_amountNum++;
        this.m_valueNum += value;
        this.m_amount.text = this.m_amountNum.toString();
        this.m_value.text = this.m_valueNum.toFixed(2);
    };
    return HuntedItem;
}());
exports.default = HuntedItem;
},{"../../constant/CommonConstant":7}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 捕鱼场景菜单栏
 */
var SettingPanel_1 = require("../Panel/SettingPanel");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var GameFacade_1 = require("../../GameFacade");
var HelpPanel_1 = require("../Panel/HelpPanel");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var TipManager_1 = require("../../manager/TipManager");
var BatteryController_1 = require("../../controller/BatteryController");
var Menu = /** @class */ (function () {
    function Menu(menu, controller, parent) {
        this.m_menu = menu;
        this.m_controller = controller;
        this.m_parent = parent;
        this.init();
    }
    Menu.prototype.init = function () {
        var _this = this;
        this.m_controller.selectedIndex = 0;
        this.m_menu.getChild("MenuBtn").onClick(this, this.OnMenuBtnClick);
        this.m_menu.getChild("SetBtn").onClick(this, this.OnSetBtnClick);
        this.m_menu.getChild("ExcelBtn").onClick(this, this.OnExcelBtnClick);
        this.m_menu.getChild("HelpBtn").onClick(this, this.OnHelpBtnClick);
        this.m_menu.getChild("ExitBtn").onClick(this, this.OnExitBtnClick);
        this.m_menu.getChild("MenuBtn").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onClick); });
        this.m_menu.getChild("SetBtn").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.m_menu.getChild("ExcelBtn").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.m_menu.getChild("HelpBtn").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.m_menu.getChild("ExitBtn").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
    };
    /**
  *
  * 播放按钮点击声音
  */
    Menu.prototype.onPlaySound = function (str) {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, str);
    };
    /**
     * 设置按钮
     */
    Menu.prototype.OnSetBtnClick = function () {
        new SettingPanel_1.default();
    };
    Menu.prototype.OnHelpBtnClick = function () {
        new HelpPanel_1.default();
    };
    /**
     * 报表
     */
    Menu.prototype.OnExcelBtnClick = function () {
        if (NetLogin_1.default.Instance.isOfficial) {
            window.open(GameFacade_1.default.Instance.GameMng.reportUrl);
        }
        else {
            GameFacade_1.default.Instance.TipMng.createTip("需要登录才能开启", TipManager_1.TipType.ONECLOSE);
        }
    };
    Menu.prototype.OnExitBtnClick = function () {
        GameFacade_1.default.Instance.SoundMng.stopMusic();
        GameFacade_1.default.Instance.SceneMng.EnterHallScene(function () { });
        BatteryController_1.default.Instance.StopAutoAttack();
        BatteryController_1.default.Instance.StopLockAttack();
    };
    Menu.prototype.OnMenuBtnClick = function () {
        this.m_controller.selectedIndex = this.m_controller.selectedIndex == 0 ? 1 : 0;
    };
    return Menu;
}());
exports.default = Menu;
},{"../../GameFacade":3,"../../constant/SoundNameConstant":11,"../../controller/BatteryController":12,"../../manager/TipManager":67,"../../net/ProtoHander/NetLogin":78,"../Panel/HelpPanel":39,"../Panel/SettingPanel":53}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonConstant_1 = require("../../constant/CommonConstant");
var CommonUtil_1 = require("../../utils/CommonUtil");
var SelectItem = /** @class */ (function () {
    function SelectItem(owner, panel) {
        this.m_fishImg = owner.getChild("FishImg").asLoader;
        this.m_value = owner.getChild("Value").asLabel;
        this.m_controller = owner.getController("c1");
        this.m_selectPanel = panel;
    }
    Object.defineProperty(SelectItem.prototype, "FishType", {
        get: function () {
            return this.m_type;
        },
        enumerable: true,
        configurable: true
    });
    SelectItem.prototype.ChangeUI = function (value, fishType) {
        if (value != 0) {
            this.m_value.text = (CommonUtil_1.utils.CommonUtils.numberFixed(value)).toFixed(2);
        }
        else {
            this.m_value.visible = false;
        }
        this.m_fishImg.url = CommonConstant_1.default._preCommonPath + fishType;
        this.m_type = fishType;
    };
    SelectItem.prototype.Onclicked = function () {
        var bclicked = this.m_controller.selectedIndex == 1 ? false : true;
        this.SetClicked(bclicked);
    };
    SelectItem.prototype.SetClicked = function (bClicked) {
        this.m_controller.selectedIndex = bClicked ? 1 : 0;
        //选中状态
        if (bClicked) {
            this.m_selectPanel.m_autoAttackArr[this.m_type] = true;
        }
        else {
            this.m_selectPanel.m_autoAttackArr[this.m_type] = false;
        }
    };
    return SelectItem;
}());
exports.default = SelectItem;
},{"../../constant/CommonConstant":7,"../../utils/CommonUtil":86}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../../GameFacade");
var EventConstantResponse_1 = require("../../../constant/EventConstantResponse");
var NetAct_1 = require("../../../net/ProtoHander/NetAct");
var EnumData_1 = require("../../../Enum/EnumData");
var STATUS = EnumData_1.default.ACTSTATUS;
var CommonUtil_1 = require("../../../utils/CommonUtil");
var RebateAct = /** @class */ (function (_super) {
    __extends(RebateAct, _super);
    function RebateAct() {
        var _this = _super.call(this) || this;
        /**活动状态 */
        _this.actS = STATUS.ACTSHOWSTARTBEFORE;
        return _this;
    }
    ;
    RebateAct.prototype.onAwake = function () {
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.ACTLISTRESP, this, this.actInfo);
        NetAct_1.default.Instance.actListReq();
    };
    RebateAct.prototype.setTimeLabel = function (com) {
        this.timeTex = com.getChild("time").asLabel;
        this.con = com.getController("c1");
        this.com = com;
        this.com.visible = false;
        this.timeTex.text = "00:00:00";
    };
    /**
     * 活动详情
     */
    RebateAct.prototype.actInfo = function (data) {
        this.showStartTime = data.show_start_time;
        this.showEndTime = data.show_end_time;
        this.actStartTime = data.start_time;
        this.actEndTime = data.end_time;
        if (CommonUtil_1.utils.CommonUtils.getNowActualTimeStamp() >= this.showStartTime * 1000) {
            this.actS = STATUS.ACTSHOWSTART_START;
            this.actshowStart();
        }
        if (CommonUtil_1.utils.CommonUtils.getNowActualTimeStamp() >= this.actStartTime * 1000) {
            this.actS = STATUS.ACTSTART_END;
            this.actStart();
        }
        if (CommonUtil_1.utils.CommonUtils.getNowActualTimeStamp() >= this.actEndTime * 1000) {
            this.actS = STATUS.ACTEND_SHOWEND;
            this.actClose();
        }
        if (CommonUtil_1.utils.CommonUtils.getNowActualTimeStamp() >= this.showEndTime * 1000) {
            this.actS = STATUS.ACTSHOWENDAFTER;
            this.actClose();
        }
        console.log(this.actS);
        console.log("showStartTime:" + this.showStartTime);
        console.log("showEndTime:" + this.showEndTime);
        console.log("actStartTime:" + this.actStartTime);
        console.log("actEndTime:" + this.actEndTime);
        console.log("nowTime:" + CommonUtil_1.utils.CommonUtils.getNowActualTimeStamp());
    };
    /**
 * 打开活动前的提示图标
 */
    RebateAct.prototype.actshowStart = function () {
        this.com.visible = true;
        this.con.setSelectedIndex(1);
    };
    /**
     * 打开活动时的提示图标
     */
    RebateAct.prototype.actStart = function () {
        this.com.visible = true;
        this.con.setSelectedIndex(0);
    };
    /**
     * 关闭图标
     */
    RebateAct.prototype.actClose = function () {
        this.com.visible = false;
    };
    RebateAct.prototype.onUpdate = function () {
        if (this.actS == STATUS.ACTSHOWSTARTBEFORE || this.actS == STATUS.ACTSHOWENDAFTER || this.actS == STATUS.ACTEND_SHOWEND) {
            return;
        }
        else if (this.actS == STATUS.ACTSHOWSTART_START) {
            var str = CommonUtil_1.utils.CommonUtils.getTimeDifference(this.actStartTime);
            if (str != null) {
                this.timeTex.text = str;
            }
            else {
                this.actS = STATUS.ACTSTART_END;
                this.actStart();
            }
        }
        else if (this.actS == STATUS.ACTSTART_END) {
            var str = CommonUtil_1.utils.CommonUtils.getTimeDifference(this.actEndTime);
            if (str != null) {
                this.timeTex.text = str;
            }
            else {
                this.actS = STATUS.ACTSHOWENDAFTER;
                this.actClose();
            }
        }
    };
    RebateAct.prototype.onDisable = function () {
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.ACTLISTRESP, this, this.actInfo);
    };
    return RebateAct;
}(Laya.Script));
exports.default = RebateAct;
},{"../../../Enum/EnumData":1,"../../../GameFacade":3,"../../../constant/EventConstantResponse":8,"../../../net/ProtoHander/NetAct":74,"../../../utils/CommonUtil":86}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../../GameFacade");
var AddWebpage = /** @class */ (function () {
    function AddWebpage() {
    }
    /**
     * 返利活动创建内嵌弹框
     */
    AddWebpage.createIframe = function () {
        //点按钮的时候 游戏加上转菊花效果，然后执行以下代码
        var iframeDiv = document.createElement("div");
        document.body.appendChild(iframeDiv);
        iframeDiv.id = "iframeDiv";
        iframeDiv.style.position = "fixed";
        iframeDiv.style.width = "100%";
        iframeDiv.style.height = "100%";
        iframeDiv.style.overflow = "hidden";
        //iframeDiv.style.display = "none";
        var iframe = document.createElement("iframe");
        iframeDiv.appendChild(iframe);
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        if (GameFacade_1.default.Instance.GameMng.actUrl.indexOf("?") > 0) {
            iframe.src = GameFacade_1.default.Instance.GameMng.actUrl + "&game_id=" + GameFacade_1.default.Instance.GameMng.game_id; //换成活动页面
        }
        iframe.src = GameFacade_1.default.Instance.GameMng.actUrl + "?game_id=" + GameFacade_1.default.Instance.GameMng.game_id; //换成活动页面
        iframe.style.zIndex = "9999999999";
        iframe.onload = function () {
            //iframeDiv.style.display = "inline";
        };
        var closeBtn = document.createElement("img");
        // //兼容老版本
        // var obj = document.getElementById("comontVer");
        // if (obj) {
        //   var comVersion = obj.getAttribute("value");
        //   closeBtn.src = "../fish_common/fullScreen/button_gb.png?v=" + comVersion; //把叉叉按钮图片放到项目下
        // }
        //closeBtn.src = CommonConstant.actCloseBtnPath;
        closeBtn.src = "ui://HallUI/" + "button_gb";
        closeBtn.style.position = "absolute";
        closeBtn.style.right = "0";
        closeBtn.style.top = "0";
        iframeDiv.appendChild(closeBtn);
        closeBtn.onclick = function () {
            var div = document.getElementById("iframeDiv");
            div.parentElement.removeChild(div);
        };
        var onResize = function () {
            var isLandscape = document.body.clientWidth > document.body.clientHeight;
            var scaleX = document.body.clientWidth / (isLandscape ? 1920 : 1080);
            var scaleY = document.body.clientHeight / (isLandscape ? 1080 : 1920);
            var scale = scaleX > scaleY ? scaleY : scaleX;
            closeBtn.style.width = 94 * scale * 1.2 + "px"; //缩放
            closeBtn.style.height = 96 * scale * 1.2 + "px";
            closeBtn.style.right = 94 * scale * 0.5 + "px";
            closeBtn.style.top = 96 * scale * 0.5 + "px"; //留一点是防止点到Safari那些浏览器缩小
        };
        onResize();
        window.addEventListener("resize", onResize);
    };
    /**
     *返回主页面
     */
    AddWebpage.addBackMainPage = function () {
        var iframeDiv = document.createElement("div");
        document.body.appendChild(iframeDiv);
        iframeDiv.id = "iframeDiv";
        iframeDiv.style.position = "fixed";
        iframeDiv.style.width = "100%";
        iframeDiv.style.height = "100%";
        iframeDiv.style.overflow = "hidden";
        //iframeDiv.style.display = "none";
        var iframe = document.createElement("iframe");
        iframeDiv.appendChild(iframe);
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.src = GameFacade_1.default.Instance.GameMng.lobbyUrl; //换成活动页面
        iframe.style.zIndex = "9999999999";
        iframe.onload = function () {
            //iframeDiv.style.display = "inline";
        };
    };
    /**
     * 关闭页面
     */
    AddWebpage.closePage = function () {
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Presto") != -1) {
            window.history.back();
            window.close();
        }
        else if (userAgent.indexOf('Android') != -1 || userAgent.indexOf('iPhone') != -1) {
            window.location.replace("about:blank");
            //window.history.back();
            //window.close();
        }
        else {
            window.opener = null;
            window.open("", "_self");
            window.close();
        }
    };
    return AddWebpage;
}());
exports.AddWebpage = AddWebpage;
},{"../../../GameFacade":3}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cameraMove = /** @class */ (function (_super) {
    __extends(cameraMove, _super);
    function cameraMove() {
        return _super.call(this) || this;
    }
    ;
    cameraMove.prototype.onAwake = function () {
        this.camera = this.owner;
        this.camera.transform.rotationEuler = new Laya.Vector3(0, 180, -0);
        this.num = 0;
        Laya.timer.frameLoop(1, this, this.cameraMove);
    };
    /**
     * 摄像机移动
     */
    cameraMove.prototype.cameraMove = function () {
        var x = this.num++;
        var y = Math.sin(x * 0.01);
        this.camera.transform.rotationEuler = new Laya.Vector3(0, 180 + y, -0);
    };
    return cameraMove;
}(Laya.Script));
exports.cameraMove = cameraMove;
},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http = /** @class */ (function () {
    function Http() {
    }
    //用户发送请求的方法
    Http.httpSend = function (method, url, data, callback, failback) {
        var xmlhttprequest;
        xmlhttprequest = new XMLHttpRequest();
        if (xmlhttprequest.overrideMimeType) {
            xmlhttprequest.overrideMimeType("text/xml");
        }
        // if () {
        // } else if (window.ActiveXObject) {
        //     var activeName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        //     for (var i = 0; i < activeName.length; i++) {
        //         try {
        //             xmlhttprequest = new ActiveXObject(activeName[i]);
        //             break;
        //         } catch (e) {
        //         }
        //     }
        // }
        if (xmlhttprequest == undefined || xmlhttprequest == null) {
            console.log("XMLHttpRequest对象创建失败！！");
        }
        else {
            this.xmlhttp = xmlhttprequest;
        }
        try {
            if (this.xmlhttp != undefined && this.xmlhttp != null) {
                method = method.toUpperCase();
                if (method != "GET" && method != "POST") {
                    console.log("HTTP的请求方法必须为GET或POST!!!");
                    return;
                }
                if (url == null || url == undefined) {
                    console.log("HTTP的请求地址必须设置！");
                    return;
                }
                var tempxmlhttp = this.xmlhttp;
                this.xmlhttp.onreadystatechange = function () {
                    if (tempxmlhttp.readyState == 4) {
                        if (tempxmlhttp.status == 200) {
                            var responseText = tempxmlhttp.responseText;
                            var responseXML = tempxmlhttp.reponseXML;
                            if (callback == undefined || callback == null) {
                                console.log("没有设置处理数据正确返回的方法");
                                console.log("返回的数据：" + responseText);
                            }
                            else {
                                callback(responseText, responseXML);
                            }
                        }
                        else {
                            if (failback == undefined || failback == null) {
                                console.log("没有设置处理数据返回失败的处理方法！");
                                console.log("HTTP的响应码：" + tempxmlhttp.status + ",响应码的文本信息：" + tempxmlhttp.statusText);
                            }
                            else {
                                failback(tempxmlhttp.status, tempxmlhttp.statusText);
                            }
                        }
                    }
                };
                //解决跨域的问题
                // if (url.indexOf("http://") >= 0) {
                //     url.replace("?", "&");
                //     url = "Proxy?url=" + url;
                // }
                this.xmlhttp.open(method, url, false);
                //如果是POST方式，需要设置请求头
                // if (method == "POST") {
                //     this.xmlhttp.processReqChange("Content-type", "application/x-www-four-urlencoded");
                // }
                //this.xmlhttp.withCredentials = true;
                this.xmlhttp.send(data);
                //this.xmlhttp.send();
                this.xmlhttp.onerror = function (err) {
                    console.log("connect error " + err);
                    failback(tempxmlhttp.status, tempxmlhttp.statusText);
                };
            }
            else {
                console.log("XMLHttpRequest对象创建失败，无法发送数据！");
            }
        }
        catch (error) {
            console.warn(error);
        }
    };
    /**
     * 关闭接口
     */
    Http.httpAbort = function () {
        if (this.xmlhttp != null || this.xmlhttp != undefined) {
            this.xmlhttp.abort();
        }
    };
    return Http;
}());
exports.Http = Http;
},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NetJpPool_1 = require("../../../net/ProtoHander/NetJpPool");
var GameFacade_1 = require("../../../GameFacade");
var EventConstantResponse_1 = require("../../../constant/EventConstantResponse");
var jpBeat = /** @class */ (function (_super) {
    __extends(jpBeat, _super);
    function jpBeat() {
        return _super.call(this) || this;
    }
    ;
    jpBeat.prototype.onAwake = function () {
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.JPNUMBER, this, this.jp);
    };
    /**
     * 设置jptext
     * @param jpText
     */
    jpBeat.prototype.setJpText = function (jpText) {
        this.jpTex = jpText;
    };
    /**
     * 监控获得jp
     * @param data
     */
    jpBeat.prototype.jp = function (data) {
        this.jpShowNum(data);
    };
    /**
     * 同步jp跳动
     */
    jpBeat.prototype.synJpData = function () {
        if (NetJpPool_1.default.Instance._JpAmount != null) {
            this.jpShowNum(NetJpPool_1.default.Instance._JpAmount);
        }
    };
    /**
     * 初始化jp 金额
     * @param data
     */
    jpBeat.prototype.jpShowNum = function (num) {
        this.jpTex.text = (Number(num) * 0.01).toFixed(2);
        Laya.timer.loop(2000, this, this.jpNum);
    };
    /**
     * jp跳动
     */
    jpBeat.prototype.jpNum = function () {
        this.jpTex.text = (Number(this.jpTex.text) + 0.02).toFixed(2);
    };
    return jpBeat;
}(Laya.Script));
exports.default = jpBeat;
},{"../../../GameFacade":3,"../../../constant/EventConstantResponse":8,"../../../net/ProtoHander/NetJpPool":77}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../../GameFacade");
var CommonConstant_1 = require("../../../constant/CommonConstant");
var MarqueeMove_1 = require("./MarqueeMove");
var Marquee = /** @class */ (function () {
    function Marquee() {
    }
    Object.defineProperty(Marquee, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new Marquee();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 创建公告
     * @param isRoom 是否是房间的公告
     */
    Marquee.prototype.createMarquee = function (isRoom) {
        this.isRoom = isRoom;
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiMarqueePath.image, CommonConstant_1.default._fuiMarqueePath.fui, this, this.onLoadMarquee);
    };
    /**
     * 加载设置
     */
    Marquee.prototype.onLoadMarquee = function () {
        this.marqueeCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiMarqueePath.Package, "Marquee", "MarqueeCom");
        var mar = this.marqueeCom.displayObject.addComponent(MarqueeMove_1.MarqueeMove);
        mar.setMarqueeCom(this.marqueeCom, this.isRoom);
        this.marqueeCom.visible = false;
    };
    /**
     * 关闭公告
     */
    Marquee.prototype.disposeMarquee = function () {
        this.marqueeCom.dispose();
    };
    return Marquee;
}());
exports.default = Marquee;
},{"../../../GameFacade":3,"../../../constant/CommonConstant":7,"./MarqueeMove":33}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../../GameFacade");
var EventConstantResponse_1 = require("../../../constant/EventConstantResponse");
var CommonUtil_1 = require("../../../utils/CommonUtil");
var MarqueeMove = /** @class */ (function (_super) {
    __extends(MarqueeMove, _super);
    function MarqueeMove() {
        var _this = _super.call(this) || this;
        _this.startX = 940; //公告开始移动的位置
        return _this;
    }
    ;
    MarqueeMove.prototype.onAwake = function () {
        this.arrMessageWorld = new Array();
        this.arrMessageRoom = new Array();
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.JPBCAST, this, this.jpBcast); //jp广播
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.BCASTMSGRESP, this, this.bcastMsg); //信息广播
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.BCASTWORLDRESP, this, this.bcastWorld); //全局广播
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.BCASTROOMRESP, this, this.bcastRoom); //房间广播
    };
    /**
     * 设置主面板
     * @param mainCom
     */
    MarqueeMove.prototype.setMarqueeCom = function (mainCom, isRoom) {
        this.marqueeCom = mainCom;
        this.isRoom = isRoom;
        this.marqueeList = this.marqueeCom.getChild("contentList").asList;
    };
    MarqueeMove.prototype.bcastMsg = function (data) {
        this.arrMessageWorld.push(this.getMsgString(data));
    };
    MarqueeMove.prototype.bcastWorld = function (data) {
        this.arrMessageWorld.push(data.content);
    };
    MarqueeMove.prototype.bcastRoom = function (data) {
        this.arrMessageRoom.push(data.content);
    };
    MarqueeMove.prototype.jpBcast = function (data) {
        this.arrMessageWorld.push(this.getJpString(data));
    };
    /**
     * 获得msg
     * @param data
     */
    MarqueeMove.prototype.getMsgString = function (data) {
        var msg = data.msg.content;
        var char;
        var fishId;
        var num;
        for (var i = 0; i < msg.length; i++) {
            switch (msg[i].msg_type) {
                case "chars":
                    char = msg[i].chars;
                    break;
                case "fish_name":
                    fishId = msg[i].id;
                    break;
                case "number":
                    num = msg[i].number.toString();
                    break;
                default:
                    break;
            }
        }
        var msgStr = "恭喜[color=#ffff00]{0}[/color]击杀 [color=#ffff00]{1}[/color]获得[color=#FFFF00]{2}[/color]倍金币奖励";
        return msgStr.replace("{0}", char).replace("{1}", GameFacade_1.default.Instance.SoundMng.getSoundCofig()[fishId - 1]["fishname"].toString()).replace("{2}", num);
    };
    /**
     * 获得jp
     * @param data
     */
    MarqueeMove.prototype.getJpString = function (data) {
        var msg = data.content.content;
        var char1 = null;
        var num;
        var char2 = null;
        for (var i = 0; i < msg.length; i++) {
            switch (msg[i].msg_type) {
                case "chars":
                    if (char1 == null) {
                        char1 = msg[i].chars;
                    }
                    else {
                        char2 = msg[i].chars;
                    }
                    break;
                case "number":
                    num = Number(msg[i].number);
                    break;
                default:
                    break;
            }
        }
        var msgStr = "恭喜[color=#FFFF00]{0}[/color]获得JP大奖[color=#FFFF00]{1}[/color],奖励[color=#FFFF00]{2}[/color]金币";
        return msgStr.replace("{0}", char1).replace("{1}", CommonUtil_1.utils.CommonUtils.jpWinnerToType(data.score_level)).replace("{2}", char2);
    };
    MarqueeMove.prototype.onUpdate = function () {
        while (this.arrMessageRoom.length > 0 && !this.marqueeCom.visible && this.isRoom) {
            this.onShow(this.arrMessageRoom);
        }
        while (this.arrMessageWorld.length > 0 && !this.marqueeCom.visible) {
            this.onShow(this.arrMessageWorld);
        }
    };
    /**
    * 展示公告
    */
    MarqueeMove.prototype.onShow = function (arr) {
        this.marqueeCom.visible = true;
        this.marqueeList.removeChildrenToPool();
        var itemCom = this.marqueeList.addItemFromPool().asCom;
        var tex = itemCom.getChild("text").asLabel;
        tex.text = arr.shift();
        var l = tex.text.length;
        tex.width = 7 * l;
        this.marqueeList.ensureBoundsCorrect();
        tex.x = this.startX;
        Laya.Tween.to(tex, { x: -(7 * l) }, l * 80, null, Laya.Handler.create(this, this.onHide));
        // itemCom.getTransition("t0").play(Laya.Handler.create(this, this.onHide));
    };
    /**
     * 隐藏公告
     */
    MarqueeMove.prototype.onHide = function () {
        this.marqueeCom.visible = false;
    };
    /**
     * 关闭公告
     */
    MarqueeMove.prototype.onClose = function () {
        this.onHide();
        this.marqueeList.removeChildrenToPool();
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.JPBCAST, this, this.bcastWorld);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.BCASTMSGRESP, this, this.bcastMsg); //信息广播
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.BCASTWORLDRESP, this, this.bcastWorld); //全局广播
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.BCASTROOMRESP, this, this.bcastRoom); //房间广播
    };
    return MarqueeMove;
}(Laya.Script));
exports.MarqueeMove = MarqueeMove;
},{"../../../GameFacade":3,"../../../constant/EventConstantResponse":8,"../../../utils/CommonUtil":86}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePanel_1 = require("./BasePanel");
var SelectPanel_1 = require("./SelectPanel");
var GameFacade_1 = require("../../GameFacade");
var HuntedPanel_1 = require("./HuntedPanel");
var GameEvent_1 = require("../../constant/GameEvent");
var AutoAttackPanel = /** @class */ (function (_super) {
    __extends(AutoAttackPanel, _super);
    function AutoAttackPanel(id) {
        var _this = _super.call(this) || this;
        _this.m_fui = fairygui.UIPackage.createObject("HunterUI", "AutoAttackPanel").asCom;
        GameFacade_1.default.Instance.SceneMng.AddFUI(_this.m_fui);
        _this.m_selectPanel = new SelectPanel_1.default(_this.m_fui.getChild("SelectPanel").asCom, _this);
        _this.m_huntedPanel = new HuntedPanel_1.default(_this.m_fui.getChild("HuntedPanel").asCom, _this);
        _this.m_nameID = id;
        _this.m_fui.getChild("CloseBtn").asButton.onClick(_this, _this.OncloseBtnClick);
        GameFacade_1.default.Instance.EventMng.add(GameEvent_1.default.HUNT_HUNTEDFISH, _this.m_huntedPanel, _this.m_huntedPanel.OnHuntedFish);
        return _this;
    }
    AutoAttackPanel.prototype.init = function () {
        this.m_fui.visible = true;
        if (GameFacade_1.default.Instance.HuntSceneMng._bAutoAttack) {
            this.ShowHuntedPanel();
        }
        else {
            this.ShowSelectPanel();
        }
        GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn = true;
    };
    AutoAttackPanel.prototype.ShowHuntedPanel = function () {
        this.m_huntedPanel.ShowSelf(true);
        this.m_selectPanel.ShowSelf(false);
    };
    /**
     * ShowSelectPanel
     */
    AutoAttackPanel.prototype.ShowSelectPanel = function () {
        this.m_huntedPanel.ShowSelf(false);
        this.m_selectPanel.ShowSelf(true);
    };
    AutoAttackPanel.prototype.OncloseBtnClick = function () {
        this.m_fui.visible = false;
        this.m_selectPanel.RemoveUnuseSelectedItem();
        GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn = false;
    };
    AutoAttackPanel.prototype.ClearHuntedPanel = function () {
        this.m_huntedPanel.ClearPanel();
    };
    AutoAttackPanel.prototype.RemoveAllEvents = function () {
        GameFacade_1.default.Instance.EventMng.remove(GameEvent_1.default.HUNT_HUNTEDFISH, this.m_huntedPanel, this.m_huntedPanel.OnHuntedFish);
    };
    return AutoAttackPanel;
}(BasePanel_1.default));
exports.default = AutoAttackPanel;
},{"../../GameFacade":3,"../../constant/GameEvent":9,"./BasePanel":35,"./HuntedPanel":42,"./SelectPanel":52}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var BasePanel = /** @class */ (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super.call(this) || this;
        _this.m_fui = null;
        return _this;
    }
    BasePanel.prototype.RemoveAllEvents = function () {
    };
    BasePanel.prototype.Hide = function () {
        this.m_fui.visible = false;
    };
    BasePanel.prototype.Show = function () {
        if (!this.m_fui)
            return;
        this.m_fui.visible = true;
    };
    BasePanel.prototype.Close = function (bRemove) {
        if (bRemove === void 0) { bRemove = true; }
        GameFacade_1.default.Instance.SceneMng.RemoveFUI(this.m_fui);
        GameFacade_1.default.Instance.SceneMng.Remove(this.m_nameID);
        this.RemoveAllEvents();
    };
    return BasePanel;
}(Laya.Sprite));
exports.default = BasePanel;
},{"../../GameFacade":3}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetAward_1 = require("../../net/ProtoHander/NetAward");
var LanguageConstant_1 = require("../../constant/LanguageConstant");
var TipManager_1 = require("../../manager/TipManager");
var LvDetailPanel_1 = require("./LvDetailPanel");
var LevelBonusPanel_1 = require("./LevelBonusPanel");
var CommonUtil_1 = require("../../utils/CommonUtil");
var GrowthFundPanel = /** @class */ (function () {
    function GrowthFundPanel() {
        this.buyId = 0;
        /**当前等级 */
        this.currFundId = 0;
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiGrowthFundPath.image, CommonConstant_1.default._fuiGrowthFundPath.fui, this, this.onLoad);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.GROWTHFUNDCONFIGRESP, this, this.initInfoList);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.GROWTHFUNDINFORESP, this, this.fundId);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.GROWTHFUNDBUYRESP, this, this.growthFundBuyResp);
    }
    /**
     * 加载设置
     */
    GrowthFundPanel.prototype.onLoad = function () {
        this.mainCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiGrowthFundPath.Package, "GrowthFund", "GrowthFundCom");
        this.infoList = this.mainCom.getChild("infoList").asList;
        this.timeTex = this.mainCom.getChild("timeTex").asLabel;
        var actDetailsBtn = this.mainCom.getChild("helpBtn").asButton;
        actDetailsBtn.onClick(this, this.onActDetailsClick);
        var lvBonusBtn = this.mainCom.getChild("lvBonus").asButton;
        lvBonusBtn.onClick(this, this.onLvBonusClick);
        var closeBtn = this.mainCom.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        NetAward_1.default.Instance.growthFundInfoReq();
        NetAward_1.default.Instance.growthFundStateReq();
        this.refrehFundConfig();
        NetAward_1.default.Instance.growthFundStateReq();
    };
    /**
     * 刷新配置
     */
    GrowthFundPanel.prototype.refrehFundConfig = function () {
        NetAward_1.default.Instance.growthFundConfigReq();
    };
    /**
     * 活动结束时间
     * @param data
     */
    GrowthFundPanel.prototype.actEndTime = function (data) {
        Laya.timer.loop(200, this, this.timeShow);
    };
    /**
     * 活动时间显示
     */
    GrowthFundPanel.prototype.timeShow = function () {
        this.timeTex.text = CommonUtil_1.utils.CommonUtils.getTimeDifference(NetAward_1.default.Instance.endTime);
    };
    /**
     * 成长基金购买反馈
     * @param data
     */
    GrowthFundPanel.prototype.growthFundBuyResp = function (data) {
        this.currFundId = data.fund_id;
        this.refrehFundConfig();
        this.awardCode(data.code);
    };
    /**
     * 当前基金档次
     * @param data
     */
    GrowthFundPanel.prototype.fundId = function (data) {
        this.currFundId = data.fund_id;
    };
    /**
     * 初始化配置信息
     * @param data
     */
    GrowthFundPanel.prototype.initInfoList = function (data) {
        this.infoList.removeChildrenToPool();
        var info = data.configs;
        for (var i = 0; i < info.length; i++) {
            var infoCom = this.infoList.addItemFromPool().asCom;
            var bgLoader = infoCom.getChild("bgLoader").asLoader;
            bgLoader.icon = "ui://GrowthFund/" + i;
            var bgLoader = infoCom.getChild("tipLoader").asLoader;
            bgLoader.icon = "ui://GrowthFund/" + "tip" + i;
            infoCom.getChild("timesTex").text = (info[i].rebate_per).toString();
            infoCom.getChild("priceTex").text = (Number(info[i].price) * 0.01).toString();
            infoCom.getChild("rebateTex").text = (Number(info[i].rebate) * 0.01).toString();
            var byStatusCom = infoCom.getChild("byStatusCom").asCom;
            var buy = byStatusCom.getChild("buyBtn").asButton;
            var c = byStatusCom.getController("c1");
            c.selectedIndex = 0;
            if (this.currFundId < 2) {
                c.selectedIndex = 0;
                var id = info[i].fund_id;
                var price = Number(info[i].price);
                this.byBtn(buy, id, price);
                //buy.onClick(this, () => { this.onBuyClick(id, price) });
            }
            else {
                var id = info[i].fund_id;
                if (id == this.currFundId) {
                    c.selectedIndex = 1;
                }
                else if (id > this.currFundId) {
                    c.selectedIndex = 3;
                    var price = Number(info[i].price);
                    var currPrice = Number(info[this.currFundId].price);
                    this.byBtn(buy, id, price - currPrice);
                    // buy.onClick(this, () => this.onBuyClick(id, price - currPrice));
                }
                else {
                    c.selectedIndex = 2;
                }
            }
            this.infoList.ensureBoundsCorrect();
        }
    };
    /**
     * 购买按钮
     * @param byBtn
     * @param id
     * @param price
     */
    GrowthFundPanel.prototype.byBtn = function (byBtn, id, price) {
        var _this = this;
        switch (id) {
            case 1:
                var p = price;
                byBtn.onClick(this, function () { _this.onBuyClick(1, p); });
                break;
            case 2:
                var p = price;
                byBtn.onClick(this, function () { _this.onBuyClick(2, p); });
                break;
            case 3:
                var p = price;
                byBtn.onClick(this, function () { _this.onBuyClick(3, p); });
                break;
            case 4:
                var p = price;
                byBtn.onClick(this, function () { _this.onBuyClick(4, p); });
                break;
            case 5:
                var p = price;
                byBtn.onClick(this, function () { _this.onBuyClick(4, p); });
                break;
            default:
                break;
        }
    };
    /**
     * 购买基金弹框
     * @param id
     * @param price
     */
    GrowthFundPanel.prototype.onBuyClick = function (id, price) {
        console.log("基金");
        console.log(id);
        console.log(price);
        this.buyId = id;
        this.buyPrice = price;
        GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.lvFundCh.tipsLevelBuy.replace("{0}", (price * 0.01).toString()), TipManager_1.TipType.YESNOCHOICE, function (isTrue) {
            if (isTrue) {
                console.log(id);
                NetAward_1.default.Instance.growtFundBuyReq(id);
            }
        });
    };
    /**
     * 是否确定购买
     * @param isTrue
     */
    GrowthFundPanel.prototype.isTrue = function (isTrue) {
        if (isTrue) {
            console.log(this.buyId);
            NetAward_1.default.Instance.growtFundBuyReq(this.buyId);
        }
    };
    /**
     * 活动说明
     */
    GrowthFundPanel.prototype.onActDetailsClick = function () {
        new LvDetailPanel_1.default();
    };
    /**
     * 等级奖金
     */
    GrowthFundPanel.prototype.onLvBonusClick = function () {
        new LevelBonusPanel_1.default();
        this.onClose();
    };
    /**
     *
     * @param targentCom 关闭目标
     */
    GrowthFundPanel.prototype.onClose = function () {
        Laya.timer.clear(this, this.timeShow);
        this.mainCom.dispose();
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClose);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.GROWTHFUNDCONFIGRESP, this, this.initInfoList);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.GROWTHFUNDINFORESP, this, this.fundId);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.GROWTHFUNDBUYRESP, this, this.growthFundBuyResp);
    };
    /**
     * 基金名字转化
     * @param id
     */
    GrowthFundPanel.prototype.numToFundName = function (id) {
        var str = null;
        switch (id) {
            case 1:
                str = "全民基金";
                break;
            case 2:
                str = "荣耀基金";
                break;
            case 3:
                str = "尊享基金";
                break;
            case 4:
                str = "豪华基金";
                break;
            case 5:
                str = "至臻基金";
                break;
            default:
                break;
        }
        return str;
    };
    GrowthFundPanel.prototype.awardCode = function (fundBuy) {
        var code = AwardMsg.award_code;
        switch (fundBuy) {
            case code.success:
                console.log("购买：金币成功");
                GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.lvFundCh.tipFundBuy.replace("{0}", (this.buyPrice * 0.01).toString()).replace("{1}", this.numToFundName(this.buyId)), TipManager_1.TipType.FLOATTIP);
                break;
            case code.fail:
                console.log("购买：金币失败");
                GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.lvFundCh.tipPurchaseFailed, TipManager_1.TipType.ONECLOSE);
                break;
            case code.out_of_cash:
                console.log("购买：金币不足");
                GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.lvFundCh.tipsGoldLess, TipManager_1.TipType.ONECLOSE);
                break;
            case code.top_fun_id:
                console.log("购买：当前已经是最高档次基金");
                break;
            case code.lv_had_reward:
                console.log("购买：当前奖励已经领取");
                break;
            case code.levelnot:
                console.log("购买：当前奖励未满足领取条件");
                break;
            case code.prev_reward:
                console.log("购买：前置奖励未领取");
                break;
            case code.had_bought:
                console.log("购买：活动已经买了");
                break;
            case code.act_end:
                GameFacade_1.default.Instance.ActMng.isActEnd = true;
                break;
            default:
                break;
        }
    };
    return GrowthFundPanel;
}());
exports.default = GrowthFundPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/EventConstantResponse":8,"../../constant/LanguageConstant":10,"../../constant/SoundNameConstant":11,"../../manager/TipManager":67,"../../net/ProtoHander/NetAward":75,"../../utils/CommonUtil":86,"./LevelBonusPanel":44,"./LvDetailPanel":46}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var NetRoom_1 = require("../../net/ProtoHander/NetRoom");
var BasePanel_1 = require("./BasePanel");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var GuidePanel = /** @class */ (function (_super) {
    __extends(GuidePanel, _super);
    function GuidePanel() {
        var _this = _super.call(this) || this;
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiGuidePath.image, CommonConstant_1.default._fuiGuidePath.fui, _this, _this.onLoadSetting);
        return _this;
    }
    /**
     * 加载设置
     */
    GuidePanel.prototype.onLoadSetting = function () {
        var _this = this;
        this.guideCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiGuidePath.Package, "Guide", "GuideCom");
        fairygui.GRoot.inst.setChildIndex(this.guideCom, +2);
        this.cl = this.guideCom.getController("GuideCl");
        var closeBtn = this.guideCom.getChild("close").asButton;
        closeBtn.onClick(this, function () { _this.onclose(); });
    };
    /**
     * 点击确认
     */
    GuidePanel.prototype.onclose = function () {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClick);
        this.cl.selectedIndex = 1;
        this.sentNovice();
        Laya.timer.once(300, this, this.onGearStop);
    };
    /**
     * 动画结束删除引导界面
     */
    GuidePanel.prototype.onGearStop = function () {
        this.guideCom.dispose();
        GameFacade_1.default.Instance.ResourceMng.removeUIPackage(CommonConstant_1.default._fuiGuidePath.Package);
    };
    /**
     * 发送已经引导了给服务端
     */
    GuidePanel.prototype.sentNovice = function () {
        NetRoom_1.default.Instance.NovicePromptReq();
    };
    return GuidePanel;
}(BasePanel_1.default));
exports.default = GuidePanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/SoundNameConstant":11,"../../net/ProtoHander/NetRoom":81,"./BasePanel":35}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePanel_1 = require("./BasePanel");
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var SettingPanel_1 = require("./SettingPanel");
var EventNetResponse_1 = require("../../net/ProtoHander/EventNetResponse");
var NetRoom_1 = require("../../net/ProtoHander/NetRoom");
var GameEvent_1 = require("../../constant/GameEvent");
var HelpPanel_1 = require("./HelpPanel");
var RankingPanel_1 = require("./RankingPanel");
var CameraMove_1 = require("../Login/Camera/CameraMove");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var CommonUtil_1 = require("../../utils/CommonUtil");
var JpBeat_1 = require("../Login/Jp/JpBeat");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var JpPanel_1 = require("./JpPanel");
var NetRoleInfo_1 = require("../../net/ProtoHander/NetRoleInfo");
var Marquee_1 = require("../Login/Marquee/Marquee");
var TipManager_1 = require("../../manager/TipManager");
var RebateAct_1 = require("../Login/Act/RebateAct");
var AddWebpage_1 = require("../Login/AddWebpages/AddWebpage");
var PersonalInfoPanel_1 = require("./PersonalInfoPanel");
var LevelBonusPanel_1 = require("./LevelBonusPanel");
var GrowthFundPanel_1 = require("./GrowthFundPanel");
var NetAward_1 = require("../../net/ProtoHander/NetAward");
var HallPanel = /** @class */ (function (_super) {
    __extends(HallPanel, _super);
    function HallPanel(id) {
        var _this = _super.call(this) || this;
        _this.m_islandArr = [];
        _this.m_sceneMng = GameFacade_1.default.Instance.SceneMng;
        _this.m_bMoving = false;
        _this.m_curIslandIndex = 0;
        _this.m_nameID = id;
        return _this;
    }
    /**
     * 进入大厅
     * @param scene3D
     */
    HallPanel.prototype.EnterAfter = function (scene3D) {
        this.InitScene(scene3D);
        this.InitFui();
        this.ChangePanelInfo(this.m_curIslandIndex);
        //this.ShowEffect();
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.LOGINRESrOLEINFO, this, this.roleInfo);
        GameFacade_1.default.Instance.EventMng.add(GameEvent_1.default.GAME_RECONNECT, this, this.Reconnect);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.EnterRoomResp, this, this.EnterRoomResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.SyncChipsResp, this, this.syncChip);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.MqSyncChipsResp, this, this.mqSyncChip);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.LVINFORESP, this, this.lvInfo);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.SWITCHRESP, this, this.onSwitch);
    };
    /**
     * 初始化3D
     * @param scene3D
     */
    HallPanel.prototype.InitScene = function (scene3D) {
        this.m_scene3D = scene3D;
        this.m_scene3D.ambientColor = new Laya.Vector3(1, 1, 1);
        this.addChild(new Laya.Image(CommonConstant_1.default._hallBgPath));
        this.addChild(this.m_scene3D);
        //添加岛
        var Node = this.m_scene3D.getChildByName("Island");
        var camera = this.m_scene3D.getChildByName("Main Camera");
        camera.addComponent(CameraMove_1.cameraMove);
        var num = Node.numChildren;
        for (var i = 0; i < num; i++) {
            var sp3D = Node.getChildAt(i);
            this.m_islandArr.push(sp3D);
            if (i != 0) {
                sp3D.active = false;
            }
            else {
                sp3D.active = true;
            }
        }
    };
    /**
     * 初始化2D
     */
    HallPanel.prototype.InitFui = function () {
        fairygui.UIPackage.addPackage(CommonConstant_1.default._fuiHallUIPath.Package);
        fairygui.UIPackage.addPackage(CommonConstant_1.default._fuiHallPath.Package);
        this.m_fui = fairygui.UIPackage.createObject("HallUI", "HallPanel").asCom;
        GameFacade_1.default.Instance.SceneMng.AddFUI(this.m_fui);
        this.nameText = this.m_fui.getChild("nameTex").asLabel;
        this.coinText = this.m_fui.getChild("coinTex").asLabel;
        this.lvText = this.m_fui.getChild("lvTex").asLabel;
        this.expProgress = this.m_fui.getChild("lvProgressBar").asProgress;
        this.expPer = this.m_fui.getChild("lvPer").asLabel;
        var jp = this.m_fui.getChild("jp").asCom;
        this.jpBtn = jp.getChild("jpBtn").asButton;
        this.jpBtn.onClick(this, this.onJpBtnClick);
        var jpb = jp.displayObject.addComponent(JpBeat_1.default);
        jpb.setJpText(jp.getChild("jpNumTex").asLabel);
        this.backMainPageBtn = this.m_fui.getChild("backMainPageBtn").asButton;
        this.backMainPageBtn.onClick(this, this.onBackMainPage);
        if (!CommonUtil_1.utils.CommonUtils.isApp()) {
            if (GameFacade_1.default.Instance.GameMng.return == "0") {
                this.backMainPageBtn.visible = false;
            }
            else if ((GameFacade_1.default.Instance.GameMng.lobbyUrl == null || GameFacade_1.default.Instance.GameMng.lobbyUrl == "") && Laya.Browser.onPC) {
                this.backMainPageBtn.visible = false;
            }
        }
        this.walletBtn = this.m_fui.getChild("walletBtn").asButton;
        this.walletBtn.onClick(this, this.OnWalletBtnClick);
        this.settingBtn = this.m_fui.getChild("settingBtn").asButton;
        this.settingBtn.onClick(this, this.OnSetBtnClick);
        this.reportBtn = this.m_fui.getChild("reportBtn").asButton;
        this.reportBtn.onClick(this, this.OnExcelBtnClick);
        this.helpBtn = this.m_fui.getChild("helpBtn").asButton;
        this.helpBtn.onClick(this, this.OnHelpBtnClick);
        this.rankingBtn = this.m_fui.getChild("rankBtn").asButton;
        this.rankingBtn.onClick(this, this.OnRankBtnClick);
        this.preBtn = this.m_fui.getChild("preBtn").asButton;
        this.preBtn.onClick(this, this.OnLeftBtnClick);
        this.nextBtn = this.m_fui.getChild("nextBtn").asButton;
        this.nextBtn.onClick(this, this.OnRightBtnClick);
        this.fastBtn = this.m_fui.getChild("fastBtn").asButton;
        this.fastBtn.onClick(this, this.OnGameBtnClick);
        this.m_islandInfoPanel = this.m_fui.getChild("IslandInfoEffect").asCom;
        this.m_islandInfoPanel.getChild("RateBtn").onClick(this, this.OnGameBtnClick);
        this.m_fui.getChild("bgBtn").onClick(this, this.OnGameBtnClick);
        jpb.synJpData();
        this.initActFui();
        this.sound();
        Marquee_1.default.Instance.createMarquee(false);
    };
    /**
     * 由于fui太多 分开act的单独处理
     */
    HallPanel.prototype.initActFui = function () {
        this.rebateCom = this.m_fui.getChild("rebateAct").asCom;
        this.rebateActBtn = this.rebateCom.getChild("rebateActBtn").asButton;
        this.rebateActBtn.onClick(this, this.onRebateActBtnClick);
        this.showRebatwAct();
        this.personnalInfoBtn = this.m_fui.getChild("personalInfoBtn").asButton;
        this.personnalInfoBtn.onClick(this, this.onPersonalInfoBtnClick);
        this.lvCom = this.m_fui.getChild("lvCom").asCom;
        this.lvBonusBtn = this.lvCom.getChild("lvBtn").asButton;
        this.lvNew = this.lvCom.getChild("lvNew").asImage;
        this.lvNew.visible = false;
        this.lvBonusBtn.onClick(this, this.onLvBonusBtnClick);
        this.fundCom = this.m_fui.getChild("fundCom").asCom;
        this.endTimeTex = this.fundCom.getChild("timeTex").asLabel;
        this.growthFundBtn = this.fundCom.getChild("fundBtn").asButton;
        this.growthFundBtn.onClick(this, this.onGrowthFundBtnClick);
        this.synData();
    };
    /**
     * 同步返利活动显示
     */
    HallPanel.prototype.showRebatwAct = function () {
        if (CommonUtil_1.utils.CommonUtils.isApp()) {
            this.rebateCom.visible = false;
        }
        else {
            var rbAct = this.rebateCom.displayObject.addComponent(RebateAct_1.default);
            rbAct.setTimeLabel(this.rebateCom);
        }
    };
    /**
     * 等级里面的new 展示login
     */
    HallPanel.prototype.lvNewShow = function () {
        this.lvNew.visible = true;
    };
    /**
   * 活动结束时间
   * @param data
   */
    HallPanel.prototype.actEndTime = function () {
        Laya.timer.loop(200, this, this.timeShow);
    };
    /**
     * 活动时间显示
     */
    HallPanel.prototype.timeShow = function () {
        if (CommonUtil_1.utils.CommonUtils.getTimeDifference(NetAward_1.default.Instance.endTime) == null) {
            this.fundCom.visible = false;
            GameFacade_1.default.Instance.ActMng.isActEnd = true;
            Laya.timer.clear(this, this.timeShow);
            return;
        }
        this.endTimeTex.text = CommonUtil_1.utils.CommonUtils.getTimeDifference(NetAward_1.default.Instance.endTime);
    };
    /**
     * 开关
     */
    HallPanel.prototype.onSwitch = function () {
        console.log("开关");
        console.log(NetLogin_1.default.Instance.isOnLvSw);
        if (!NetLogin_1.default.Instance.isOnLvSw) {
            this.fundCom.visible = false;
            this.lvCom.visible = false;
        }
        else {
            this.fundCom.visible = true;
            this.lvCom.visible = true;
        }
    };
    /**
     * 同步数据
     * @param jpb
     */
    HallPanel.prototype.synData = function () {
        if (NetLogin_1.default.Instance.RoleInfo != null) {
            if (!NetLogin_1.default.Instance.isOfficial) {
                this.walletBtn.visible = false;
            }
            this.onSwitch();
            this.refreshChip();
            this.refreshLv();
            this.refreshEndTime();
        }
    };
    /**
     * 刷新时间
     */
    HallPanel.prototype.refreshEndTime = function () {
        NetAward_1.default.Instance.growthFundStateReq();
    };
    /**
     * 刷新金币
     */
    HallPanel.prototype.refreshChip = function () {
        NetRoom_1.default.Instance.SyncChipsReq();
    };
    /**
     * 刷新等级
     */
    HallPanel.prototype.refreshLv = function () {
        NetRoleInfo_1.default.Instance.lvInfoReq();
    };
    /**
     * 获得同步金币
     * @param data
     */
    HallPanel.prototype.syncChip = function (data) {
        this.role(NetLogin_1.default.Instance.RoleInfo.nickname, data.chips);
    };
    /**
     * 获得同步金币(用于免转)
     * @param data
     */
    HallPanel.prototype.mqSyncChip = function (data) {
        this.role(NetLogin_1.default.Instance.RoleInfo.nickname, data.chips);
    };
    /**
     * 获得同步等级
     * @param data
     */
    HallPanel.prototype.lvInfo = function (data) {
        this.exp(data.need_exp, data.exp, data.lv); //与活动相关
    };
    /**
 * 角色信息
 * @param data
 */
    HallPanel.prototype.roleInfo = function (data) {
        this.refreshEndTime();
        if (!data.is_wallet) {
            this.walletBtn.visible = false;
        }
        else {
            if (data.jetton_show == 0) {
                this.OnWalletBtnClick();
            }
        }
        this.onSwitch();
        this.role(data.nickname, data.jetton);
        this.refreshLv();
        GameFacade_1.default.Instance.WalletMng.setFgWalletValue(data.jetton);
    };
    /**
     * 角色
     * @param name 名字
     * @param coin 金币
     * @param lv 等级
     */
    HallPanel.prototype.role = function (name, coin) {
        this.nameText.text = CommonUtil_1.utils.CommonUtils.nickNameToFormat(name);
        this.coinText.text = CommonUtil_1.utils.CommonUtils.numberFormat(Number(coin));
    };
    /**
     * 经验值
     * @param needExp 需要的经验值
     * @param exp 当前经验值
     */
    HallPanel.prototype.exp = function (needExp, exp, lv) {
        this.lvText.text = lv.toString();
        if (needExp == 0) {
            this.expProgress.value = 0;
            this.expPer.text = "0.00%";
        }
        else {
            var e = Number(exp) / Number(needExp);
            this.expProgress.value = Number(exp);
            this.expProgress.max = Number(needExp);
            this.expPer.text = (e * 100).toFixed(0) + "%";
        }
    };
    /**
     * 声音
     */
    HallPanel.prototype.sound = function () {
        var _this = this;
        GameFacade_1.default.Instance.SoundMng.playMusic(SoundNameConstant_1.default.soundBgArr.hallBgMusic);
        this.settingBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.reportBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.rebateActBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.helpBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.rankingBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.jpBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.walletBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onOpen); });
        this.preBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.rateSelect); });
        this.nextBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.rateSelect); });
        this.fastBtn.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onClick); });
        this.m_fui.getChild("bgBtn").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onClick); });
        this.m_islandInfoPanel.getChild("RateBtn").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onClick); });
    };
    HallPanel.prototype.Reconnect = function () {
    };
    HallPanel.prototype.EnterRoomResp = function (data) {
        GameFacade_1.default.Instance.SceneMng.EnterHuntScene();
    };
    /**
     *
     * 播放按钮点击声音
     */
    HallPanel.prototype.onPlaySound = function (str) {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, str);
    };
    /**
     * 设置
     */
    HallPanel.prototype.OnSetBtnClick = function () {
        new SettingPanel_1.default();
    };
    /**
     * 帮助
     */
    HallPanel.prototype.OnHelpBtnClick = function () {
        new HelpPanel_1.default();
    };
    /**
     * 报表
     */
    HallPanel.prototype.OnExcelBtnClick = function () {
        if (NetLogin_1.default.Instance.isOfficial) {
            window.open(GameFacade_1.default.Instance.GameMng.reportUrl);
        }
        else {
            GameFacade_1.default.Instance.TipMng.createTip("需要登录才能开启", TipManager_1.TipType.ONECLOSE);
        }
    };
    /**
     * 排行榜
     */
    HallPanel.prototype.OnRankBtnClick = function () {
        new RankingPanel_1.default();
    };
    /**
     * jp
     */
    HallPanel.prototype.onJpBtnClick = function () {
        new JpPanel_1.default();
    };
    /**
     * 免转
     */
    HallPanel.prototype.OnWalletBtnClick = function () {
        GameFacade_1.default.Instance.WalletMng.mainWalletReq();
    };
    /**
     * 返利活动
     */
    HallPanel.prototype.onRebateActBtnClick = function () {
        AddWebpage_1.AddWebpage.createIframe();
    };
    /**
     * 个人信息
     */
    HallPanel.prototype.onPersonalInfoBtnClick = function () {
        new PersonalInfoPanel_1.default();
    };
    /**
     * 等级奖金
     */
    HallPanel.prototype.onLvBonusBtnClick = function () {
        new LevelBonusPanel_1.default();
    };
    /**
     * 成长基金
     */
    HallPanel.prototype.onGrowthFundBtnClick = function () {
        new GrowthFundPanel_1.default();
    };
    /**
     * 返回主页面
     * 返回逻辑参考  http://wiki.blizzmi.local/pages/viewpage.action?pageId=28213648
     */
    HallPanel.prototype.onBackMainPage = function () {
        if (CommonUtil_1.utils.CommonUtils.isApp()) {
            window.close();
        }
        else {
            if (GameFacade_1.default.Instance.GameMng.lobbyUrl != null && GameFacade_1.default.Instance.GameMng.lobbyUrl != "") {
                window.open(GameFacade_1.default.Instance.GameMng.lobbyUrl);
            }
            else {
                window.close();
            }
        }
        // if(Laya.Browser.onPC){
        //   AddWebpage.addBackMainPage();
        //   }
        //   else{
        //    AddWebpage.closePage();
        //   }
    };
    /**
     * 点击右按钮
     */
    HallPanel.prototype.OnRightBtnClick = function () {
        if (this.m_bMoving)
            return;
        this.m_bMoving = true;
        var index = this.m_curIslandIndex;
        if (++this.m_curIslandIndex >= CommonConstant_1.default.C_IslandAmount) {
            this.m_curIslandIndex = 0;
        }
        this.m_islandArr[this.m_curIslandIndex].transform.position = new Laya.Vector3(-CommonConstant_1.default.C_IslandMoveX, 0, 0);
        Laya.Tween.to(this.m_islandArr[this.m_curIslandIndex].transform, { localPositionX: 0 }, CommonConstant_1.default.C_IslandMoveTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.ShowEffect));
        this.m_islandArr[this.m_curIslandIndex].active = true;
        Laya.Tween.to(this.m_islandArr[index].transform, { localPositionX: CommonConstant_1.default.C_IslandMoveX }, CommonConstant_1.default.C_IslandMoveTime, Laya.Ease.sineOut, null);
        this.m_islandInfoPanel.visible = false;
        this.ChangePanelInfo(this.m_curIslandIndex);
    };
    /**
     * 点击左按钮
     */
    HallPanel.prototype.OnLeftBtnClick = function () {
        if (this.m_bMoving)
            return;
        this.m_bMoving = true;
        var index = this.m_curIslandIndex;
        if (--this.m_curIslandIndex <= -1) {
            this.m_curIslandIndex = CommonConstant_1.default.C_IslandAmount - 1;
        }
        this.m_islandArr[this.m_curIslandIndex].transform.position = new Laya.Vector3(CommonConstant_1.default.C_IslandMoveX, 0, 0);
        Laya.Tween.to(this.m_islandArr[this.m_curIslandIndex].transform, { localPositionX: 0 }, CommonConstant_1.default.C_IslandMoveTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.ShowEffect));
        this.m_islandArr[this.m_curIslandIndex].active = true;
        Laya.Tween.to(this.m_islandArr[index].transform, { localPositionX: -CommonConstant_1.default.C_IslandMoveX }, CommonConstant_1.default.C_IslandMoveTime, Laya.Ease.sineOut, null);
        this.m_islandInfoPanel.visible = false;
        this.ChangePanelInfo(this.m_curIslandIndex);
    };
    /**
     * 进入游戏
     */
    HallPanel.prototype.OnGameBtnClick = function () {
        if (GameFacade_1.default.Instance.GameMng.bGameStart) {
            NetRoom_1.default.Instance.EnterRoomReq(this.m_curIslandIndex + 1, RoleMsg.msg_relogin_code.RELOGIN_NORMAL);
        }
        else { //todo
        }
    };
    HallPanel.prototype.ExitHallScene = function () {
        //卸载3d资源缓存
        GameFacade_1.default.Instance.SoundMng.stopMusic();
        this.m_scene3D.destroy(true);
        //GameFacade.Instance.ResourceMng.ReleaseAll3D(CommonConstant._hallScenePath_json);
        Laya.loader.clearRes(CommonConstant_1.default._hallPath_ls);
        console.log("ExitHallScene clearRes = ", Laya.loader.getRes(CommonConstant_1.default._hallPath_ls));
        this.m_islandArr = [];
        Laya.timer.clear(this, this.timeShow);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.LOGINRESrOLEINFO, this, this.roleInfo);
        GameFacade_1.default.Instance.EventMng.remove(GameEvent_1.default.GAME_RECONNECT, this, this.Reconnect);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.EnterRoomResp, this, this.EnterRoomResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.SyncChipsResp, this, this.syncChip);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.MqSyncChipsResp, this, this.mqSyncChip);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.LVINFORESP, this, this.lvInfo);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.SWITCHRESP, this, this.onSwitch);
    };
    //岛屿面板信息展示
    HallPanel.prototype.ChangePanelInfo = function (index) {
        var titleImg = this.m_islandInfoPanel.getChild("nameLoader").asLoader;
        var limitImg = this.m_islandInfoPanel.getChild("bulletLoader").asLoader;
        var rateLoader = this.m_islandInfoPanel.getChild("rateLoader").asLoader;
        var rateBtn = this.m_islandInfoPanel.getChild("RateBtn").asButton;
        titleImg.url = CommonConstant_1.default._prelandInfoPath + CommonConstant_1.default._islandInfoArr[index].title;
        limitImg.url = CommonConstant_1.default._prelandInfoPath + CommonConstant_1.default._islandInfoArr[index].limit;
        rateLoader.url = CommonConstant_1.default._prelandInfoPath + CommonConstant_1.default._islandInfoArr[index].rate;
    };
    //面板动效
    HallPanel.prototype.ShowEffect = function () {
        this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.rateWindow);
        this.m_bMoving = false;
        this.m_islandInfoPanel.visible = false;
        this.m_islandInfoPanel.visible = true;
    };
    return HallPanel;
}(BasePanel_1.default));
exports.default = HallPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/EventConstantResponse":8,"../../constant/GameEvent":9,"../../constant/SoundNameConstant":11,"../../manager/TipManager":67,"../../net/ProtoHander/EventNetResponse":73,"../../net/ProtoHander/NetAward":75,"../../net/ProtoHander/NetLogin":78,"../../net/ProtoHander/NetRoleInfo":80,"../../net/ProtoHander/NetRoom":81,"../../utils/CommonUtil":86,"../Login/Act/RebateAct":27,"../Login/AddWebpages/AddWebpage":28,"../Login/Camera/CameraMove":29,"../Login/Jp/JpBeat":31,"../Login/Marquee/Marquee":32,"./BasePanel":35,"./GrowthFundPanel":36,"./HelpPanel":39,"./JpPanel":43,"./LevelBonusPanel":44,"./PersonalInfoPanel":48,"./RankingPanel":50,"./SettingPanel":53}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var GameFacade_1 = require("../../GameFacade");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var CommonUtil_1 = require("../../utils/CommonUtil");
var EnumData_1 = require("../../Enum/EnumData");
var HelpPanel = /** @class */ (function () {
    function HelpPanel() {
        Laya.loader.load([
            { url: CommonConstant_1.default._fuiHelpPath.image, type: Loader.IMAGE },
            { url: CommonConstant_1.default._fuiHelpPath.fui, type: Loader.BUFFER },
            { url: CommonConstant_1.default._fuiCommonUIPath.image, type: Loader.IMAGE },
            { url: CommonConstant_1.default._fuiCommonUIPath.fui, type: Loader.BUFFER },
        ], Handler.create(this, this.onLoadHelp));
        GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn = true;
    }
    /**
     * 加载设置
     */
    HelpPanel.prototype.onLoadHelp = function () {
        var _this = this;
        this.helpCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiHelpPath.Package, "Help", "HelpPanel");
        fairygui.UIPackage.addPackage(CommonConstant_1.default._fuiCommonUIPath.Package);
        this.helpCom.getChild("close").onClick(this, this.onClose);
        this.helpCom.getChild("n5").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.windowChange); });
        this.helpCom.getChild("n6").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.windowChange); });
        this.helpCom.getChild("n7").onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.windowChange); });
        this.fishIconList = this.helpCom.getChild("n53").asList;
        this.fishIconList.removeChildrenToPool();
        for (var i = 0; i < NetLogin_1.default.Instance._playerLoginInfo.fish_info.length; i++) {
            var num = NetLogin_1.default.Instance._playerLoginInfo.fish_info[i].fish_type;
            if (num >= EnumData_1.default.FishSubtype.King_fishf1 && num < 32) {
                return;
            }
            if (num > 32) {
                return;
            }
            var fishIconCom = this.fishIconList.addItemFromPool().asCom;
            var fishIcon = fishIconCom.getChild("fishIcon").asImage;
            var fishValue = fishIconCom.getChild("fishValue").asLabel;
            fishIcon.icon = "ui://CommonUI/" + (num);
            if (num == 26) {
                fishValue.text = "5-200";
            }
            else if (num == 32) {
                fishValue.text = "全屏炸弹";
            }
            else if (num == 27) {
                fishValue.text = "鱼王";
                fishIcon.icon = "ui://CommonUI/" + (num);
            }
            // else if (num == 21) {
            //     fishValue.text = "全屏冰冻";
            // }
            else {
                fishValue.text = (CommonUtil_1.utils.CommonUtils.numberFixed(NetLogin_1.default.Instance._playerLoginInfo.fish_info[i].fish_rate)).toFixed(2);
            }
            this.fishIconList.ensureBoundsCorrect();
        }
    };
    /**
       *
       * 播放按钮点击声音
       */
    HelpPanel.prototype.onPlaySound = function (str) {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, str);
    };
    HelpPanel.prototype.onClose = function () {
        this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onClose);
        this.fishIconList.removeChildrenToPool();
        this.helpCom.dispose();
        GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn = false;
    };
    return HelpPanel;
}());
exports.default = HelpPanel;
},{"../../Enum/EnumData":1,"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/SoundNameConstant":11,"../../net/ProtoHander/NetLogin":78,"../../utils/CommonUtil":86}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EnumData_1 = require("../../Enum/EnumData");
var BatteryController_1 = require("../../controller/BatteryController");
var CommonUtil_1 = require("../../utils/CommonUtil");
var CommonConstant_1 = require("../../constant/CommonConstant");
/** 爆金币转盘特效*/
var HuntAwardPanel = /** @class */ (function (_super) {
    __extends(HuntAwardPanel, _super);
    function HuntAwardPanel(ownerUid, fishType, reward, bHalf) {
        var _this = _super.call(this) || this;
        _this.m_bPanelEffectFinished = false;
        _this.m_bAwardTextEffectFinished = false;
        _this.m_num = 0;
        _this.m_totalNum = CommonUtil_1.utils.CommonUtils.numberFixed(reward);
        _this.m_uid = ownerUid;
        var fishPath = CommonConstant_1.default._fish20Path;
        var fishPos = new Laya.Point(30, 6);
        switch (fishType) {
            case EnumData_1.default.FishSubtype.Fish_20: {
                fishPath = CommonConstant_1.default._fish20Path;
                fishPos = new Laya.Point(57, 16);
                break;
            }
            case EnumData_1.default.FishSubtype.Golden_Shark: {
                fishPath = CommonConstant_1.default._fish23Path;
                fishPos = new Laya.Point(30, 6);
                break;
            }
            case EnumData_1.default.FishSubtype.Mermaid: {
                fishPath = CommonConstant_1.default._fish25Path;
                fishPos = new Laya.Point(49, 79);
                break;
            }
        }
        _this.m_effectPos = new Laya.Vector3(640, 320, 0);
        _this.m_effectScale = 1;
        //半屏转盘
        if (bHalf) {
            _this.m_effectScale = 0.5;
            var playerPos = BatteryController_1.default.Instance.GetBatteryByUid(ownerUid).m_position;
            _this.m_effectPos = CommonConstant_1.default.HalfAwardPos[playerPos - 1];
        }
        //转盘后的红光
        _this.m_readLight = new Laya.Image(CommonConstant_1.default._zhuanpanLightPath);
        _this.m_readLight.anchorX = 0.5;
        _this.m_readLight.anchorY = 0.5;
        _this.m_readLight.scale(_this.m_effectScale, _this.m_effectScale);
        _this.m_readLight.pos(_this.m_effectPos.x, _this.m_effectPos.y);
        Laya.timer.loop(50, _this, function () {
            Laya.Tween.to(_this.m_readLight, { rotation: _this.m_readLight.rotation + 10 }, 50);
        });
        //转盘
        _this.m_award = new Laya.Image(CommonConstant_1.default._zhuanpanPath);
        _this.m_award.anchorX = 0.5;
        _this.m_award.anchorY = 0.5;
        _this.m_award.scale(_this.m_effectScale, _this.m_effectScale);
        _this.m_award.pos(_this.m_effectPos.x, _this.m_effectPos.y);
        _this.m_fishImg = new Laya.Image(fishPath);
        _this.m_fishImg.pos(fishPos.x, fishPos.y);
        _this.addChild(_this.m_readLight);
        _this.addChild(_this.m_award);
        _this.m_award.addChild(_this.m_fishImg);
        // 大转盘上的字体
        _this.m_awardFont = new Laya.FontClip(CommonConstant_1.default._awardFont, ".+0123456789");
        _this.m_awardFont.align = "center";
        _this.m_awardFont.pos(215, 260);
        _this.m_awardFont.anchorX = 0.5;
        _this.m_awardFont.anchorY = 0.5;
        _this.m_award.addChild(_this.m_awardFont);
        _this.ShowEffect();
        return _this;
    }
    HuntAwardPanel.prototype.PanelEffect = function () {
        var _this = this;
        this.m_award.scaleX = 0.1;
        this.m_award.scaleY = 0.1;
        var maxScale = this.m_effectScale + 0.4;
        var minScale = this.m_effectScale - 0.2;
        Laya.Tween.to(this.m_award, { scaleX: 1.1, scaleY: 1.1 }, 100, null, Laya.Handler.create(this, function () {
            Laya.Tween.to(_this.m_award, { scaleX: 0.8, scaleY: 0.8 }, 100, null, Laya.Handler.create(_this, function () {
                Laya.Tween.to(_this.m_award, { scaleX: _this.m_effectScale, scaleY: _this.m_effectScale }, 100, null, Laya.Handler.create(_this, function () {
                    _this.m_bPanelEffectFinished = true;
                }));
            }));
        }));
    };
    HuntAwardPanel.prototype.AwardTextEffect = function () {
        Laya.timer.loop(30, this, this.ChangeNum);
    };
    HuntAwardPanel.prototype.ChangeNum = function () {
        this.m_num += this.m_totalNum / 20;
        if (this.m_num >= this.m_totalNum) {
            this.m_num = this.m_totalNum;
            CommonUtil_1.utils.CommonUtils.log("---------m_totalNum = ", this.m_totalNum);
            this.m_bAwardTextEffectFinished = true;
            Laya.timer.clear(this, this.ChangeNum);
        }
        this.m_awardFont.value = this.m_num.toFixed(2);
    };
    HuntAwardPanel.prototype.ShowEffect = function () {
        var awardLight = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.HalfScreenDrawReward);
        awardLight.transform.position = new Laya.Vector3(0, 0, 0);
        awardLight.active = true;
        this.PanelEffect();
        this.AwardTextEffect();
        this.RemoveAfterEffectFinished();
    };
    HuntAwardPanel.prototype.RemoveAfterEffectFinished = function () {
        var self = this;
        var Check = function () {
            var _this = this;
            if (this.m_bAwardTextEffectFinished && this.m_bPanelEffectFinished) {
                Laya.timer.clearAll(this);
                this.m_readLight.destroy(true);
                Laya.Tween.to(this.m_award, { scaleX: 0.5, scaleY: 0.5 }, 100, null, Laya.Handler.create(this, function () {
                    var endPos = BatteryController_1.default.Instance.GetBatteryByUid(_this.m_uid).GunGpos;
                    Laya.Tween.to(_this.m_award, { x: endPos.x, y: endPos.y }, 150, null, Laya.Handler.create(_this, function () {
                        //this.visible = false;
                        self.destroy(true);
                        _this.m_bPanelEffectFinished = false;
                        _this.m_bAwardTextEffectFinished = false;
                    }));
                }));
            }
        };
        Laya.timer.loop(500, this, Check);
    };
    return HuntAwardPanel;
}(Laya.Sprite));
exports.default = HuntAwardPanel;
},{"../../Enum/EnumData":1,"../../GameFacade":3,"../../constant/CommonConstant":7,"../../controller/BatteryController":12,"../../utils/CommonUtil":86}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cannon_1 = require("../Item/Cannon");
var GuidePanel_1 = require("./GuidePanel");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var GameFacade_1 = require("../../GameFacade");
var CommonConstant_1 = require("../../constant/CommonConstant");
var Menu_1 = require("../Item/Menu");
var BasePanel_1 = require("./BasePanel");
var EnumData_1 = require("../../Enum/EnumData");
var NetRoom_1 = require("../../net/ProtoHander/NetRoom");
var BatteryController_1 = require("../../controller/BatteryController");
var EventNetResponse_1 = require("../../net/ProtoHander/EventNetResponse");
var GameEvent_1 = require("../../constant/GameEvent");
var CommonUtil_1 = require("../../utils/CommonUtil");
var FishController_1 = require("../../controller/FishController");
var HuntAwardPanel_1 = require("./HuntAwardPanel");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var Marquee_1 = require("../Login/Marquee/Marquee");
var JpBeat_1 = require("../Login/Jp/JpBeat");
var HuntPanel = /** @class */ (function (_super) {
    __extends(HuntPanel, _super);
    function HuntPanel(id) {
        var _this = _super.call(this) || this;
        _this.m_scene3D = null;
        _this.m_gunScene3D = null; //炮的展示场景
        _this.m_awardScene3D = null; //爆金币的展示场景
        //  public m_huntSceneCamera: Laya.Camera;
        _this.m_isShoot = false;
        _this.m_isMoving = false;
        _this.m_nameID = id;
        Laya.stage.on(Laya.Event.RESIZE, _this, _this.OnResize);
        return _this;
    }
    /**
     * 添加引导界面
     */
    HuntPanel.prototype.Guide = function () {
        if (NetLogin_1.default.Instance.RoleInfo.is_new && CommonUtil_1.utils.CommonUtils.isFirstEnterRoom) {
            new GuidePanel_1.default();
        }
        CommonUtil_1.utils.CommonUtils.isFirstEnterRoom = false;
    };
    /**
     * 初始化ui信息
     */
    HuntPanel.prototype.InitFui = function () {
        this.Guide();
        Marquee_1.default.Instance.createMarquee(true);
        GameFacade_1.default.Instance.SoundMng.playMusicRoom(NetLogin_1.default.Instance._curRoomIndex);
        fairygui.UIPackage.addPackage(CommonConstant_1.default._fuiHunterUIPath.Package);
        fairygui.UIPackage.addPackage(CommonConstant_1.default._fuiCommonUIPath.Package);
        this.m_fui = fairygui.UIPackage.createObject("HunterUI", "HunterPanel").asCom;
        GameFacade_1.default.Instance.SceneMng.AddFUI(this.m_fui);
        var jp = this.m_fui.getChild("jp").asCom;
        var jpb = jp.displayObject.addComponent(JpBeat_1.default);
        jpb.setJpText(jp.getChild("jpNumTex").asLabel);
        jpb.synJpData();
        //左侧菜单
        this.m_menu = this.m_fui.getChild("Menu").asCom;
        var controller = this.m_fui.getController("c1");
        new Menu_1.default(this.m_menu, controller, this);
        //炮台
        for (var i = 0; i < 4; i++) {
            var waitImg = this.m_fui.getChild("WaitImg" + i).asImage;
            waitImg.visible = false;
            var cannonSeat = this.m_fui.getChild("Cannon" + i).asCom;
            var cannonInfo = this.m_fui.getChild("CannonInfo" + i).asCom;
            var cannon = new Cannon_1.default(cannonSeat, cannonInfo, waitImg, i);
            cannon.InitGun3D();
            cannon.UpdatePlayerInfoShow();
            BatteryController_1.default.Instance.BatteryArr.push(cannon);
        }
        //自动攻击、锁定攻击
        this.m_fui.getChild("AutoBtn").asButton.onClick(this, this.OnAutoBtnClick);
        this.m_autoBtnMask = this.m_fui.getChild("AutoDownImg").asImage;
        this.m_autoBtnMask.visible = false;
        this.m_fui.getChild("LockBtn").asButton.onClick(this, this.OnLockBtnClick);
        this.m_lockBtnMask = this.m_fui.getChild("LockDownImg").asImage;
        this.m_lockBtnMask.visible = false;
        var lockText = this.m_fui.getChild("LockImg").asLoader;
        var autoText = this.m_fui.getChild("AutoImg").asLoader;
        //fui的锁定攻击和自动捕鱼攻击按钮与特效的层级没法调整，使用laya的ui来显示
        var lockBtn = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._lockImgPath, new Laya.Point(this.m_lockBtnMask.x, this.m_lockBtnMask.y), this.m_layaUINode);
        lockBtn.zOrder = EnumData_1.default.SCREEN_ZODER.HuntPanelUI;
        var autoBtn = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._autoImgPath, new Laya.Point(this.m_autoBtnMask.x, this.m_autoBtnMask.y), this.m_layaUINode);
        autoBtn.zOrder = EnumData_1.default.SCREEN_ZODER.HuntPanelUI;
        this.m_lockMaskImg = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._lockImgMaskPath, new Laya.Point(this.m_lockBtnMask.x, this.m_lockBtnMask.y), this.m_layaUINode);
        this.m_lockMaskImg.zOrder = EnumData_1.default.SCREEN_ZODER.HuntPanelUI;
        this.m_autoMaskImg = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._autoImgMaskPath, new Laya.Point(this.m_autoBtnMask.x, this.m_autoBtnMask.y), this.m_layaUINode);
        this.m_autoMaskImg.zOrder = EnumData_1.default.SCREEN_ZODER.HuntPanelUI;
        this.m_lockMaskImg.visible = false;
        this.m_autoMaskImg.visible = false;
        this.m_autoTextImg = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._autoTextImgPath, new Laya.Point(autoText.x, autoText.y), this.m_layaUINode);
        this.m_autoTextImg.zOrder = EnumData_1.default.SCREEN_ZODER.HuntPanelUI;
        this.m_lockTextImg = CommonUtil_1.utils.CommonUtils.CreatLayaImg(CommonConstant_1.default._lockTextImgPath, new Laya.Point(lockText.x, lockText.y), this.m_layaUINode);
        this.m_lockTextImg.zOrder = EnumData_1.default.SCREEN_ZODER.HuntPanelUI;
        //特效
        this.m_lockBtnEffect = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.LockButtonEffect);
        this.m_autoBtnEffect = GameFacade_1.default.Instance.HuntSceneMng.InstantiateEffect(CommonConstant_1.default._huntSceneEffectArray.LockButtonEffect);
    };
    HuntPanel.prototype.InitMouseEvent = function () {
        var monitor = this.m_fui.getChild("Monitor").asImage;
        monitor.on(Laya.Event.MOUSE_DOWN, this, this.MouseHandler);
        monitor.on(Laya.Event.MOUSE_UP, this, this.MouseHandler);
        monitor.on(Laya.Event.MOUSE_MOVE, this, this.MouseHandler);
    };
    HuntPanel.prototype.EnterAfter = function (scene3D) {
        this.m_awardEffectArr = [];
        this.m_scene3D = scene3D;
        // this.m_huntSceneCamera = this.m_scene3D.getChildByName("Main Camera") as Laya.Camera;
        var bg = new Laya.Image(CommonConstant_1.default._hunterBgPath); //背景图
        var blurFilter = new Laya.BlurFilter(); //背景模糊滤镜
        //blurFilter.strength = 4;
        //bg.filters = [blurFilter];
        this.addChild(bg);
        this.addChild(this.m_scene3D); //鱼的3d资源
        //this.m_awardNode = new Laya.Sprite(); //爆金币节点
        //this.addChild(this.m_awardNode);
        this.m_layaUINode = new Laya.Sprite(); //炮台的底座node
        this.addChild(this.m_layaUINode);
        this.m_gunScene3D = Laya.loader.getRes(CommonConstant_1.default._gunScenePath); //炮台3d资源
        this.addChild(this.m_gunScene3D);
        GameFacade_1.default.Instance.HuntSceneMng.EnterRoomInit(this.m_scene3D, this.m_gunScene3D);
        this.InitFui(); //最上层的fui
        this.InitMouseEvent();
        GameFacade_1.default.Instance.EventMng.add(GameEvent_1.default.GAME_RECONNECT, this, this.Reconnect);
        GameFacade_1.default.Instance.EventMng.add(GameEvent_1.default.HUNT_AUTOATTACK, this, this.OnAutoAttackEvent);
        GameFacade_1.default.Instance.EventMng.add(GameEvent_1.default.HUNT_LOCKATTACK, this, this.OnLockAttackEvent);
        NetRoom_1.default.Instance.ReadyRoomReq();
        //Laya.loader.create(CommonConstant._topScenePath, Laya.Handler.create(this, (scene:Laya.Scene3D)=>{
        //this.addChild(scene);
        //}), null);
    };
    /** 屏幕宽高变化检测*/
    HuntPanel.prototype.OnResize = function () {
        // if(utils.CommonUtils.isIphonXAdapte()){
        //     this.m_menu.x = -55;
        // }
        // else{
        //     this.m_menu.x = -99;
        // }
    };
    HuntPanel.prototype.MouseHandler = function (e) {
        switch (e.type) {
            case Laya.Event.MOUSE_DOWN:
                {
                    if (GameFacade_1.default.Instance.HuntSceneMng._bAutoAttack) {
                        BatteryController_1.default.Instance.MouseDownPoint = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY);
                        BatteryController_1.default.Instance.bAutoAttackMouseDown = true;
                        //正在捕猎选中的鱼
                        if (GameFacade_1.default.Instance.HuntSceneMng._bSelectedFish) {
                            var promptPanel = GameFacade_1.default.Instance.SceneMng.Create(3 /* PromptPanel */);
                            promptPanel.InitData(1 /* StopAutoAttack */, CommonConstant_1.default._PromptContent.StopAutoAttack);
                        }
                    }
                    else if (GameFacade_1.default.Instance.HuntSceneMng._bLockAttack) {
                        var fishid = GameFacade_1.default.Instance.HuntSceneMng.GetFishId(Laya.stage.mouseX, Laya.stage.mouseY);
                        if (fishid != 0) {
                            BatteryController_1.default.Instance.LockedFishID = fishid;
                        }
                    }
                    else {
                        BatteryController_1.default.Instance.Shoot(true);
                    }
                    break;
                }
            case Laya.Event.MOUSE_MOVE:
                {
                    break;
                }
            case Laya.Event.MOUSE_UP:
                {
                    if (!GameFacade_1.default.Instance.HuntSceneMng._bAutoAttack && !GameFacade_1.default.Instance.HuntSceneMng._bLockAttack) {
                        BatteryController_1.default.Instance.Shoot(false);
                    }
                    // 自动攻击
                    if (GameFacade_1.default.Instance.HuntSceneMng._bAutoAttack) {
                        BatteryController_1.default.Instance.bAutoAttackMouseDown = false;
                        BatteryController_1.default.Instance.MouseDownPoint = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY);
                    }
                    break;
                }
        }
    };
    HuntPanel.prototype.AwardEffect = function (ownerUid, fishType, reward, bHalf) {
        var len = this.m_awardEffectArr.length;
        var award = null;
        award = new HuntAwardPanel_1.default(ownerUid, fishType, reward, bHalf);
        award.zOrder = EnumData_1.default.SCREEN_ZODER.AwardPanel;
        this.m_layaUINode.addChild(award);
    };
    //#endregion 锁定攻击、自动攻击
    HuntPanel.prototype.OnAutoBtnClick = function () {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onOpen);
        if (!BatteryController_1.default.Instance.isEnoughChip(BatteryController_1.default.Instance.selfCannon)) {
            GameFacade_1.default.Instance.WalletMng.mainWalletReq();
            return;
        }
        var autoAttackPanel = GameFacade_1.default.Instance.SceneMng.Create(10 /* AutoAttackPanel */);
        autoAttackPanel.init();
    };
    HuntPanel.prototype.OnLockBtnClick = function () {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClick);
        if (!BatteryController_1.default.Instance.isEnoughChip(BatteryController_1.default.Instance.selfCannon)) {
            GameFacade_1.default.Instance.WalletMng.mainWalletReq();
            return;
        }
        if (GameFacade_1.default.Instance.HuntSceneMng._bAutoAttack) {
            var promptPanel = GameFacade_1.default.Instance.SceneMng.Create(3 /* PromptPanel */);
            promptPanel.InitData(1 /* StopAutoAttack */, CommonConstant_1.default._PromptContent.StopAutoAttack);
        }
        else {
            this.OnLockAttackEvent(GameFacade_1.default.Instance.HuntSceneMng._bLockAttack ? false : true);
        }
    };
    HuntPanel.prototype.OnAutoAttackEvent = function (bAuto) {
        GameFacade_1.default.Instance.HuntSceneMng._bAutoAttack = bAuto;
        this.m_autoMaskImg.visible = bAuto;
        if (!bAuto) {
            BatteryController_1.default.Instance.LockedFishID = 0;
            BatteryController_1.default.Instance.HideLockLineEffect();
        }
        var res = bAuto ? CommonConstant_1.default._cancleAutoTextImgPath : CommonConstant_1.default._autoTextImgPath;
        this.m_autoTextImg.skin = res;
        BatteryController_1.default.Instance.ShootMode = bAuto ? 1 /* SHOOT_AUTO */ : 0 /* SHOOT_NORMAL */;
        BatteryController_1.default.Instance.Shoot(bAuto);
        this.m_autoBtnEffect.active = bAuto;
        if (bAuto) {
            this.m_autoBtnEffect.transform.position = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera, new Laya.Vector3(this.m_autoBtnMask.x, this.m_autoBtnMask.y, 0));
        }
    };
    HuntPanel.prototype.OnLockAttackEvent = function (bLock) {
        GameFacade_1.default.Instance.HuntSceneMng._bLockAttack = bLock;
        this.m_lockMaskImg.visible = bLock;
        if (!bLock) {
            BatteryController_1.default.Instance.LockedFishID = 0;
            BatteryController_1.default.Instance.HideLockLineEffect();
        }
        // let lockImg = this.m_fui.getChild("LockImg").asLoader;
        // let res: string = bLock ? "quxiaosuoding" : "suodinggongji";
        // lockImg.url = CommonConstant._preHunterPath + res;
        // 更换纹理
        var res = bLock ? CommonConstant_1.default._cancleLockTextImgPath : CommonConstant_1.default._lockTextImgPath;
        this.m_lockTextImg.skin = res;
        BatteryController_1.default.Instance.ShootMode = bLock ? 2 /* SHOOT_LOCK */ : 0 /* SHOOT_NORMAL */;
        BatteryController_1.default.Instance.Shoot(bLock);
        this.m_lockBtnEffect.active = bLock;
        if (bLock) {
            this.m_lockBtnEffect.transform.position = CommonUtil_1.utils.CommonUtils.ScreenToWorldPoint(GameFacade_1.default.Instance.HuntSceneMng._GunSceneCamera, new Laya.Vector3(this.m_lockBtnMask.x, this.m_lockBtnMask.y, 0));
        }
    };
    //#endregion
    //#endregion 断线重连
    HuntPanel.prototype.Reconnect = function () {
        FishController_1.default.Instance.Reconnect();
        BatteryController_1.default.Instance.Reconnect();
        NetRoom_1.default.Instance.EnterRoomReq(NetLogin_1.default.Instance._curRoomIndex, RoleMsg.msg_relogin_code.RELOGIN_RECONNECT);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.EnterRoomResp, this, this.EnterRoomResp);
        //  NetRoom.Instance.ReadyRoomReq();
    };
    HuntPanel.prototype.EnterRoomResp = function () {
        this.OnAutoAttackEvent(false);
        this.OnLockAttackEvent(false);
        NetRoom_1.default.Instance.ReadyRoomReq();
    };
    //#endregion
    HuntPanel.prototype.ExitHuntScene = function () {
        NetRoom_1.default.Instance.LeaveRoomReq();
        GameFacade_1.default.Instance.EventMng.remove(GameEvent_1.default.GAME_RECONNECT, this, this.Reconnect);
        GameFacade_1.default.Instance.EventMng.remove(GameEvent_1.default.HUNT_LOCKATTACK, this, this.OnLockAttackEvent);
        GameFacade_1.default.Instance.EventMng.remove(GameEvent_1.default.HUNT_AUTOATTACK, this, this.OnAutoAttackEvent);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.EnterRoomResp, this, this.EnterRoomResp);
        GameFacade_1.default.Instance.SceneMng.CloseAndRemove(10 /* AutoAttackPanel */);
        GameFacade_1.default.Instance.SoundMng.stopMusic();
        GameFacade_1.default.Instance.HuntSceneMng.ExitHuntScene();
        //卸载3d资源缓存
        this.m_scene3D.destroy(true);
        this.m_gunScene3D.destroy(true);
        Laya.loader.clearRes(CommonConstant_1.default._gunScenePath);
        Laya.loader.clearRes(CommonConstant_1.default._huntScenePath);
        Laya.loader.clearRes(CommonConstant_1.default._hunterBgPath);
    };
    return HuntPanel;
}(BasePanel_1.default));
exports.default = HuntPanel;
},{"../../Enum/EnumData":1,"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/GameEvent":9,"../../constant/SoundNameConstant":11,"../../controller/BatteryController":12,"../../controller/FishController":13,"../../net/ProtoHander/EventNetResponse":73,"../../net/ProtoHander/NetLogin":78,"../../net/ProtoHander/NetRoom":81,"../../utils/CommonUtil":86,"../Item/Cannon":23,"../Item/Menu":25,"../Login/Jp/JpBeat":31,"../Login/Marquee/Marquee":32,"./BasePanel":35,"./GuidePanel":37,"./HuntAwardPanel":40}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePanel_1 = require("./BasePanel");
var GameFacade_1 = require("../../GameFacade");
var GameEvent_1 = require("../../constant/GameEvent");
var HuntedItem_1 = require("../Item/HuntedItem");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var CommonUtil_1 = require("../../utils/CommonUtil");
var BatteryController_1 = require("../../controller/BatteryController");
var FishController_1 = require("../../controller/FishController");
/**
 * 捕猎界面自动攻击面板--显示已自动捕到的鱼的面板
*/
var HuntedPanel = /** @class */ (function (_super) {
    __extends(HuntedPanel, _super);
    function HuntedPanel(owner, control) {
        var _this = _super.call(this) || this;
        owner.getChild("CancelBtn").asButton.onClick(_this, _this.OnCancelBtnClick);
        owner.getChild("ChangeBtn").asButton.onClick(_this, _this.OnChangeBtnClick);
        _this.m_list = owner.getChild("List").asList;
        _this.m_control = control;
        _this.m_fui = owner;
        _this.m_huntedItemDic = {};
        return _this;
    }
    HuntedPanel.prototype.ShowSelf = function (visible) {
        this.m_fui.visible = visible;
    };
    HuntedPanel.prototype.OnChangeBtnClick = function () {
        this.m_control.ShowSelectPanel();
    };
    HuntedPanel.prototype.OnCancelBtnClick = function () {
        this.m_list.removeChildrenToPool();
        GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_AUTOATTACK, false);
        this.m_control.OncloseBtnClick();
        this.ClearPanel();
    };
    /**
     *
     * @param args
     */
    HuntedPanel.prototype.OnHuntedFish = function (args) {
        if (this.m_list == null || this.m_list == undefined)
            return;
        var bouns = args[0];
        var type = args[1];
        if (GameFacade_1.default.Instance.HuntSceneMng._bSelectedFish) {
            //存在一种特殊情况，刚重新选择了要自动攻击的鱼的同时，之前自动攻击状态的鱼被打死，所以在此处要多一层判断
            if (BatteryController_1.default.Instance.gAutoAttackArr[type] != true) {
                return;
            }
        }
        else {
            //鱼王不处理
            if (FishController_1.default.Instance.IsFishKing(type))
                return;
        }
        var huntedItem = null;
        if (this.m_huntedItemDic[type]) {
            huntedItem = this.m_huntedItemDic[type];
            huntedItem.AddAmount(CommonUtil_1.utils.CommonUtils.numberFixed(bouns));
        }
        else {
            CommonUtil_1.utils.CommonUtils.log("this.m_list = ", this.m_list);
            var item = this.m_list.addItemFromPool().asCom;
            huntedItem = new HuntedItem_1.default(item, this);
            var fishInfo = NetLogin_1.default.Instance._playerLoginInfo.fish_info;
            for (var i = 0; i < fishInfo.length; i++) {
                if (type == fishInfo[i].fish_type) {
                    //var rate = fishInfo[i].fish_rate;
                    huntedItem.InitUI(CommonUtil_1.utils.CommonUtils.numberFixed(bouns), type);
                    this.m_huntedItemDic[type] = huntedItem;
                    return;
                }
            }
        }
    };
    HuntedPanel.prototype.ClearPanel = function () {
        this.m_list.removeChildrenToPool();
        this.m_huntedItemDic = {};
    };
    return HuntedPanel;
}(BasePanel_1.default));
exports.default = HuntedPanel;
},{"../../GameFacade":3,"../../constant/GameEvent":9,"../../controller/BatteryController":12,"../../controller/FishController":13,"../../net/ProtoHander/NetLogin":78,"../../utils/CommonUtil":86,"../Item/HuntedItem":24,"./BasePanel":35}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var NetWanners_1 = require("../../net/ProtoHander/NetWanners");
var CommonUtil_1 = require("../../utils/CommonUtil");
var CommonConstant_1 = require("../../constant/CommonConstant");
var JpPanel = /** @class */ (function () {
    function JpPanel() {
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiJpPath.image, CommonConstant_1.default._fuiJpPath.fui, this, this.onLoadJp);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.WINNERRESP, this, this.jpListInfo);
    }
    /**
     * 加载设置
     */
    JpPanel.prototype.onLoadJp = function () {
        this.jpCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiJpPath.Package, "Jp", "jpPanel");
        this.jpCom.getChild("close").onClick(this, this.onClose);
        this.jpList = this.jpCom.getChild("jpList").asList;
        NetWanners_1.default.Instance.winnersReq();
    };
    JpPanel.prototype.jpListInfo = function (data) {
        this.jpList.removeChildrenToPool();
        for (var i = 0; i < data.role.length; i++) {
            var itemCom = this.jpList.addItemFromPool().asCom;
            itemCom.getChild("data").text = CommonUtil_1.utils.CommonUtils.numberToDataTime(data.role[i].date);
            itemCom.getChild("name").text = data.role[i].nickname;
            itemCom.getChild("grade").text = CommonUtil_1.utils.CommonUtils.jpWinnerToType(data.role[i].awardLevel);
            itemCom.getChild("amount").text = (Number(data.role[i].award) / 100).toString();
            ;
            this.jpList.ensureBoundsCorrect();
        }
    };
    /**
     *
     * 播放按钮点击声音
     */
    JpPanel.prototype.onPlaySound = function (str) {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, str);
    };
    /**
     * 关闭
     */
    JpPanel.prototype.onClose = function () {
        this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onClose);
        this.jpList.removeChildrenToPool();
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.WINNERRESP, this, this.jpListInfo);
        this.jpCom.dispose();
    };
    return JpPanel;
}());
exports.default = JpPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/EventConstantResponse":8,"../../constant/SoundNameConstant":11,"../../net/ProtoHander/NetWanners":83,"../../utils/CommonUtil":86}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetRoleInfo_1 = require("../../net/ProtoHander/NetRoleInfo");
var GrowthFundPanel_1 = require("./GrowthFundPanel");
var LanguageConstant_1 = require("../../constant/LanguageConstant");
var TipManager_1 = require("../../manager/TipManager");
var NetAward_1 = require("../../net/ProtoHander/NetAward");
var LvRecordsPanel_1 = require("./LvRecordsPanel");
var LvDetailPanel_1 = require("./LvDetailPanel");
var LevelBonusPanel = /** @class */ (function () {
    function LevelBonusPanel() {
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiLevelBonusPath.image, CommonConstant_1.default._fuiLevelBonusPath.fui, this, this.onLoad);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.LVCONFIGRESP, this, this.initInfoList);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.LVAWARDRESP, this, this.reLvAwardData);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.LVINFORESP, this, this.initLvAwardData);
    }
    /**
     * 加载设置
     */
    LevelBonusPanel.prototype.onLoad = function () {
        var _this = this;
        this.mainCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiLevelBonusPath.Package, "LevelBonus", "LevelBonus");
        var tipCom = this.mainCom.getChild("tipCom").asCom;
        this.tipContr = tipCom.getController("c1");
        this.buyMoneyTex = tipCom.getChild("buyMoneyTex").asLabel;
        var upgradeCom = this.mainCom.getChild("upgradeCom").asCom;
        this.upgradeContr = upgradeCom.getController("c1");
        upgradeCom.getChild("upgradeBtn").onClick(this, this.onUpgradeClick);
        var receiveCom = this.mainCom.getChild("receiveCom").asCom;
        this.lvReContr = receiveCom.getController("c1");
        this.reBtn = receiveCom.getChild("reBtn").asButton;
        this.expList = this.mainCom.getChild("ExpList").asList;
        this.preBtn = this.mainCom.getChild("preBtn").asButton;
        this.nextBtn = this.mainCom.getChild("nextBtn").asButton;
        this.preBtn.onClick(this, function () { _this.onlvConfigReqClick(_this.currFundId - 1); });
        this.nextBtn.onClick(this, function () { _this.onlvConfigReqClick(_this.currFundId + 1); });
        this.currTotalReTex = this.mainCom.getChild("allBounsTex").asLabel;
        this.currReLvTex = this.mainCom.getChild("lvTex").asLabel;
        this.currReRewardTex = this.mainCom.getChild("bounsTex").asLabel;
        this.mainCom.getChild("recordBtn").onClick(this, this.onRecordClick);
        this.mainCom.getChild("detailsBtn").onClick(this, this.onHelpClick);
        var closeBtn = this.mainCom.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        this.refresh();
    };
    /**
     *初始、失败之后重新刷新
     */
    LevelBonusPanel.prototype.refresh = function () {
        NetRoleInfo_1.default.Instance.lvInfoReq();
    };
    /**
     * 初始化奖金数据
     */
    LevelBonusPanel.prototype.initLvAwardData = function () {
        var info = NetRoleInfo_1.default.Instance.lvInfo;
        this.currFundId = NetRoleInfo_1.default.Instance.lvInfo.fund_id;
        NetRoleInfo_1.default.Instance.lvConfigReq(this.currFundId);
        this.currLv = info.lv;
        this.mainCom.getChild("expLvTex").text = info.lv + "级";
        var expPre = this.mainCom.getChild("expPreTex").asLabel;
        var expSli = this.mainCom.getChild("expSli").asSlider;
        var needExp = info.need_exp;
        var exp = info.exp;
        if (needExp == 0) {
            expPre.text = "0.00%";
            expSli.value = 0;
        }
        else {
            expSli.max = needExp;
            expSli.value = exp;
            expPre.text = (exp / needExp * 100).toFixed(0) + "%";
        }
        this.mainCom.getChild("disNextExpTex").text = (needExp - exp).toString();
        this.mainCom.getChild("nextBounsTex").text = (Number(info.next_reward) * 0.01).toString();
        this.currTotalReTex.text = (Number(info.total_reward) * 0.01).toString();
        this.currTotalRe = info.total_reward;
        this.awardRe(info.lv, info.next_reward_lv, Number(info.reward));
    };
    /**
     * 领取等级反馈结果
     * @param data
     */
    LevelBonusPanel.prototype.reLvAwardData = function (data) {
        if (this.awardCode(data.code)) {
            GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.lvFundCh.tipLevelReceived.replace("{0}", (this.currReReward * 0.01).toString()), TipManager_1.TipType.FLOATTIP);
            this.currTotalRe += this.currReReward;
            this.currTotalReTex.text = (this.currTotalRe * 0.01).toString();
            this.awardRe(data.lv, data.next_lv, Number(data.reward));
        }
        else {
            GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.lvFundCh.tipReceiveFailed, TipManager_1.TipType.FLOATTIP);
            this.refresh();
        }
    };
    /**
     * 领取等奖奖金
     * @param lv
     * @param nextLv
     * @param reward
     */
    LevelBonusPanel.prototype.awardRe = function (lv, nextLv, reward) {
        this.currReLv = lv;
        this.nextLv = nextLv;
        this.currReReward = reward;
        this.currReLvTex.text = nextLv.toString();
        this.currReRewardTex.text = Number(reward * 0.01).toString();
        if (nextLv == 0) { //已经领取最高等级
            this.lvReContr.setSelectedIndex(3);
            return;
        }
        else {
            if (this.currLv >= nextLv) //可领取
             {
                this.lvReContr.setSelectedIndex(2);
                this.reBtn.onClick(this, this.onReLvAwardClick);
            }
            else { //不可领取
                this.lvReContr.setSelectedIndex(0);
            }
        }
    };
    /**
     * 领取等级
     */
    LevelBonusPanel.prototype.onReLvAwardClick = function () {
        this.lvReContr.selectedIndex = 1;
        Laya.timer.once(1000, this, this.onPlayAwardAni);
    };
    /**
     * 播放领取动画
     */
    LevelBonusPanel.prototype.onPlayAwardAni = function () {
        NetAward_1.default.Instance.lvAwardReq(this.nextLv + 1);
    };
    /**
     *基金奖金数据列表
     * @param data
     */
    LevelBonusPanel.prototype.initInfoList = function (data) {
        var tip = this.mainCom.getChild("tipLoader").asLoader;
        this.currFundId = data.fund_id;
        this.isShowMoney(data.fund_id);
        this.isBuy(data.buy_mark);
        this.buyMoneyTex.text = (Number(data.price) * 0.01).toString();
        this.expList.removeChildrenToPool();
        var configs = data.configs;
        console.log("configs");
        console.log(data);
        tip.icon = "ui://LevelBonus/" + "tip" + (Number(data.fund_id) - 1);
        for (var i = 0; i < configs.length; i++) {
            var infoCom = this.expList.addItemFromPool().asCom;
            infoCom.getChild("lvTex").text = configs[i].lv.toString();
            infoCom.getChild("expTex").text = configs[i].exp.toString();
            infoCom.getChild("awardTex").text = (Number(configs[i].award) * 0.01).toString();
            this.expList.ensureBoundsCorrect();
        }
        if (this.currFundId == 5) {
            this.nextBtn.visible = false;
        }
        else if (this.currFundId == 1) {
            this.preBtn.visible = false;
        }
        else {
            this.nextBtn.visible = true;
            this.preBtn.visible = true;
        }
    };
    /**
     * 点击请求基金显示
     */
    LevelBonusPanel.prototype.onlvConfigReqClick = function (id) {
        if (id > 5) {
            return;
        }
        NetRoleInfo_1.default.Instance.lvConfigReq(id);
    };
    /**
     * 是不是全民等级
     * @param id
     */
    LevelBonusPanel.prototype.isShowMoney = function (id) {
        if (id == 1) {
            this.tipContr.setSelectedIndex(1);
        }
        else {
            this.tipContr.setSelectedIndex(0);
        }
    };
    /**
     * 是否已经购买
     * @param buyMark
     */
    LevelBonusPanel.prototype.isBuy = function (buyMark) {
        if (buyMark == 0) {
            this.upgradeContr.setSelectedIndex(0);
        }
        else if (buyMark == 1) {
            this.upgradeContr.setSelectedIndex(1);
        }
        else {
            this.upgradeContr.setSelectedIndex(1);
        }
    };
    /**
     * 帮助按钮
     */
    LevelBonusPanel.prototype.onHelpClick = function () {
        new LvDetailPanel_1.default();
    };
    /**
     * 前往升级
     */
    LevelBonusPanel.prototype.onUpgradeClick = function () {
        if (GameFacade_1.default.Instance.ActMng.isActEnd) {
            GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.lvFundCh.tipActEnd, TipManager_1.TipType.FLOATTIP);
        }
        else {
            new GrowthFundPanel_1.default();
            this.onClose();
        }
    };
    /**
     * 领取记录
     */
    LevelBonusPanel.prototype.onRecordClick = function () {
        new LvRecordsPanel_1.default();
    };
    /**
     *
     * @param targentCom 关闭目标
     */
    LevelBonusPanel.prototype.onClose = function () {
        this.mainCom.dispose();
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClose);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.LVCONFIGRESP, this, this.initInfoList);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.LVAWARDRESP, this, this.reLvAwardData);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.LVINFORESP, this, this.initLvAwardData);
    };
    /**
     * 奖金领取状态
     * @param receLvBonus
     */
    LevelBonusPanel.prototype.awardCode = function (receLvBonus) {
        var award_code = AwardMsg.award_code;
        var isTrue = false;
        switch (receLvBonus) {
            case award_code.success:
                console.log("领取：金币成功");
                isTrue = true;
                break;
            case award_code.fail:
                console.log("领取：金币失败"); //更新整个面板         
                break;
            case award_code.out_of_cash:
                console.log("领取：金币不足");
                break;
            case award_code.top_fun_id:
                console.log("领取：当前已经是最高档次基金");
                break;
            case award_code.lv_had_reward:
                console.log("领取：当前奖励已经领取");
                break;
            case award_code.levelnot:
                console.log("领取：当前奖励未满足领取条件");
                break;
            case award_code.prev_reward:
                console.log("领取：前置奖励未领取");
                break;
            case award_code.had_bought:
                console.log("领取：活动已经结束");
                break;
            case award_code.act_end:
                console.log("活动已经结束");
                break;
            default:
                break;
        }
        return isTrue;
    };
    return LevelBonusPanel;
}());
exports.default = LevelBonusPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/EventConstantResponse":8,"../../constant/LanguageConstant":10,"../../constant/SoundNameConstant":11,"../../manager/TipManager":67,"../../net/ProtoHander/NetAward":75,"../../net/ProtoHander/NetRoleInfo":80,"./GrowthFundPanel":36,"./LvDetailPanel":46,"./LvRecordsPanel":47}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var CommonConstant_1 = require("../../constant/CommonConstant");
var BasePanel_1 = require("./BasePanel");
var LoadingPanel = /** @class */ (function (_super) {
    __extends(LoadingPanel, _super);
    function LoadingPanel(id) {
        var _this = _super.call(this) || this;
        fairygui.UIPackage.addPackage(CommonConstant_1.default._fuiLoadingPath.Package);
        _this.m_content = "";
        _this.m_fui = fairygui.UIPackage.createObject("Loading", "LoadingPanel").asCom;
        _this.m_LoadingProgress = _this.m_fui.getChild("LoadingBar").asProgress;
        _this.m_progressTitle = _this.m_fui.getChild("value").asLabel;
        _this.m_progressLoader = _this.m_fui.getChild("loader").asLoader;
        _this.m_nameID = id;
        _this.InitUI();
        return _this;
    }
    LoadingPanel.prototype.InitUI = function () {
        this.addChild(new Laya.Image(CommonConstant_1.default._loadingBgPath));
        GameFacade_1.default.Instance.SceneMng.AddFUI(this.m_fui);
        this.SetProgress(0);
        var r = Math.round(Math.random() * 10 + 1);
        this.m_progressLoader.icon = "ui://Loading/" + "tishi_" + ((r > 5) ? 4 : r);
    };
    LoadingPanel.prototype.SetProgress = function (value) {
        this.m_LoadingProgress.value = Math.round(value * 100);
        this.m_progressTitle.text = Math.round(value * 100) + "%";
        if (this.m_LoadingProgress.value > this.m_LoadingProgress.max) {
            this.m_LoadingProgress.value = this.m_LoadingProgress.max;
        }
    };
    LoadingPanel.prototype.SetContent = function (content) {
        this.m_content = content;
    };
    return LoadingPanel;
}(BasePanel_1.default));
exports.default = LoadingPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"./BasePanel":35}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var GameFacade_1 = require("../../GameFacade");
var CommonConstant_1 = require("../../constant/CommonConstant");
var LvDetailPanel = /** @class */ (function () {
    function LvDetailPanel() {
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiLvDetailsPath.image, CommonConstant_1.default._fuiLvDetailsPath.fui, this, this.onLoad);
    }
    /**
     * 加载设置
     */
    LvDetailPanel.prototype.onLoad = function () {
        this.mainCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiLvDetailsPath.Package, "LvDetails", "lvDetailsCom");
        var closeBtn = this.mainCom.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
    };
    /**
    *
    * @param targentCom 关闭目标
    */
    LvDetailPanel.prototype.onClose = function () {
        this.mainCom.dispose();
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClose);
    };
    return LvDetailPanel;
}());
exports.default = LvDetailPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/SoundNameConstant":11}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var CommonUtil_1 = require("../../utils/CommonUtil");
var Http_1 = require("../Login/Http/Http");
var LvRecordsPanel = /** @class */ (function () {
    function LvRecordsPanel() {
        this.currPage = 1;
        this.maxPage = 12;
        this.totalPage = 0;
        this.numPage = 1;
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiLvRecordsPath.image, CommonConstant_1.default._fuiLvRecordsPath.fui, this, this.onLoad);
    }
    /**
     * 加载设置
     */
    LvRecordsPanel.prototype.onLoad = function () {
        this.mainCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiLvRecordsPath.Package, "LvRecords", "lvRecordsCom");
        this.list = this.mainCom.getChild("infoList").asList;
        this.list.removeChildrenToPool();
        this.list.on(fairygui.Events.PULL_DOWN_RELEASE, this, this.onPullDownRelease);
        this.list.on(fairygui.Events.PULL_UP_RELEASE, this, this.onPullUpRelease);
        var closeBtn = this.mainCom.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        console.log("加载");
        this.HttpRecord(this.currPage, this.maxPage);
    };
    LvRecordsPanel.prototype.onPullDownRelease = function () {
        console.log("上拉");
        if (this.currPage <= 1) {
            return;
        }
        else {
            this.currPage -= 1;
            this.HttpRecord(this.currPage, this.maxPage);
        }
    };
    LvRecordsPanel.prototype.onPullUpRelease = function () {
        console.log("下拉");
        if (this.currPage >= this.numPage) {
            return;
        }
        else {
            this.currPage += 1;
            this.HttpRecord(this.currPage, this.maxPage);
        }
    };
    /**
     * 请求数据
     */
    LvRecordsPanel.prototype.HttpRecord = function (page, maX) {
        console.log(GameFacade_1.default.Instance.GameMng.historyUrl);
        var dataUrl = "?api_type=fund_got_awards&page=" + page + "&size=" + maX;
        if (GameFacade_1.default.Instance.GameMng.historyUrl.indexOf('?') > 0) {
            dataUrl = "$api_type=fund_got_awards&page=" + page + "&size=" + maX;
        }
        console.log("dataUrl: " + dataUrl);
        console.log("requestUrl: " + GameFacade_1.default.Instance.GameMng.historyUrl + dataUrl);
        Http_1.Http.httpSend("GET", GameFacade_1.default.Instance.GameMng.historyUrl + dataUrl, null, this.successCallBack.bind(this), this.failCallBack.bind(this));
    };
    /**
     * 成功返回数据
     * @param data
     */
    LvRecordsPanel.prototype.successCallBack = function (data) {
        console.log("历史记录数据");
        var j = { "info": { "status": 0, "data": [{ "id": "0", "user_id": 0, "action": 0, "game_id": 0, "current_awards": "", "current_got_lev_id": 0, "create_time": 0 }],
                "page_info": { "total": 0, "page_num": 0 } }, "page": 0, "game_list_info": [], "timezone": -4 };
        console.log(data);
        if (data != null) {
            j = null;
            j = JSON.parse(data);
        }
        var info = j.info;
        var page = info.page_info;
        var datas = info.data;
        this.numPage = page.page_num;
        this.list.removeChildrenToPool();
        for (var i = 0; i < datas.length; i++) {
            var infoCom = this.list.addItemFromPool().asCom;
            infoCom.getChild("lvTex").text = datas[i].current_got_lev_id.toString();
            infoCom.getChild("amountTex").text = datas[i].current_awards.toString();
            infoCom.getChild("accountNumTex").text = datas[i].id.toString();
            infoCom.getChild("timeTex").text = CommonUtil_1.utils.CommonUtils.numberToDataTime(Number(datas[i].create_time)).toString();
            this.list.ensureBoundsCorrect();
        }
    };
    /**
     * 失败返回数据
     */
    LvRecordsPanel.prototype.failCallBack = function () {
        this.list.removeChildrenToPool();
        console.log("抱歉，你已经失去信息");
    };
    /**
     *
     * @param targentCom 关闭目标
     */
    LvRecordsPanel.prototype.onClose = function () {
        Http_1.Http.httpAbort();
        this.mainCom.dispose();
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClose);
    };
    return LvRecordsPanel;
}());
exports.default = LvRecordsPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/SoundNameConstant":11,"../../utils/CommonUtil":86,"../Login/Http/Http":30}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var NetRoleInfo_1 = require("../../net/ProtoHander/NetRoleInfo");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetRoom_1 = require("../../net/ProtoHander/NetRoom");
var EventNetResponse_1 = require("../../net/ProtoHander/EventNetResponse");
var PersonalInfoPanel = /** @class */ (function () {
    function PersonalInfoPanel() {
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiPersonalInfoPath.image, CommonConstant_1.default._fuiPersonalInfoPath.fui, this, this.onLoad);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.LVINFORESP, this, this.lvInfo);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.SyncChipsResp, this, this.syncChip);
    }
    /**
     * 加载设置
     */
    PersonalInfoPanel.prototype.onLoad = function () {
        this.mainCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiPersonalInfoPath.Package, "PersonalInfo", "PersonalInfo");
        var playNameTex = this.mainCom.getChild("nameTex").asLabel;
        playNameTex.text = NetLogin_1.default.Instance.RoleInfo.nickname;
        var idTex = this.mainCom.getChild("idTex").asLabel;
        idTex.text = NetLogin_1.default.Instance.RoleInfo.account;
        this.introGroup = this.mainCom.getChild("introGr").asGroup;
        this.introGroup.visible = false;
        this.introTs = this.mainCom.getTransition("t0");
        var helpBtn = this.mainCom.getChild("intrBtn").asButton;
        helpBtn.onClick(this, this.onHelp);
        var closeBtn = this.mainCom.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        NetRoom_1.default.Instance.SyncChipsReq();
        NetRoleInfo_1.default.Instance.lvInfoReq();
    };
    /**
    * 获得同步金币
    * @param data
    */
    PersonalInfoPanel.prototype.syncChip = function (data) {
        var coinTex = this.mainCom.getChild("coinTex").asLabel;
        coinTex.text = (Number(data.chips) / 100).toFixed(2);
    };
    /**
     * 等级信息
     */
    PersonalInfoPanel.prototype.lvInfo = function () {
        var lvTex = this.mainCom.getChild("lvTex").asLabel;
        lvTex.text = NetRoleInfo_1.default.Instance.lvInfo.lv + "级";
        this.expFormat();
    };
    /**
     * 经验值
     */
    PersonalInfoPanel.prototype.expFormat = function () {
        var v1 = NetRoleInfo_1.default.Instance.lvInfo.exp;
        var v2 = NetRoleInfo_1.default.Instance.lvInfo.need_exp;
        var currExpTex = this.mainCom.getChild("currExpTex").asLabel;
        currExpTex.text = v1 + "/" + v2;
        var currExpSli = this.mainCom.getChild("expSli").asSlider;
        var currExpPreTex = this.mainCom.getChild("expPreTex").asLabel;
        if (NetLogin_1.default.Instance.RoleInfo.need_exp == 0) {
            currExpSli.value = 0;
            currExpPreTex.text = "0.00%";
        }
        else {
            currExpSli.value = v1;
            currExpSli.max = v2;
            currExpPreTex.text = (v1 / v2 * 100).toFixed(0) + "%";
        }
    };
    /**
     * 帮助按钮
     */
    PersonalInfoPanel.prototype.onHelp = function () {
        this.introGroup.visible = true;
        this.introTs.play();
    };
    /**
     *
     * @param targentCom 关闭目标
     */
    PersonalInfoPanel.prototype.onClose = function () {
        this.mainCom.dispose();
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClose);
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.LVINFORESP, this, this.lvInfo);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.SyncChipsResp, this, this.syncChip);
    };
    return PersonalInfoPanel;
}());
exports.default = PersonalInfoPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/EventConstantResponse":8,"../../constant/SoundNameConstant":11,"../../net/ProtoHander/EventNetResponse":73,"../../net/ProtoHander/NetLogin":78,"../../net/ProtoHander/NetRoleInfo":80,"../../net/ProtoHander/NetRoom":81}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var BasePanel_1 = require("../Panel/BasePanel");
var GameEvent_1 = require("../../constant/GameEvent");
/**
 * 提示弹框
*/
var PromptPanel = /** @class */ (function (_super) {
    __extends(PromptPanel, _super);
    function PromptPanel(id) {
        var _this = _super.call(this) || this;
        _this.m_nameID = id;
        _this.m_fui = fairygui.UIPackage.createObject("Hall", "ReconnectTip").asCom;
        _this.m_confirmBtn = _this.m_fui.getChild("ConfirmBtn").asButton;
        _this.m_confirmBtn.onClick(_this, _this.OnConfirmBtnClick);
        _this.m_cancelBtn = _this.m_fui.getChild("CancelBtn").asButton;
        _this.m_cancelBtn.onClick(_this, _this.OnCancelBtnClick);
        _this.m_content = _this.m_fui.getChild("ContentLabel").asLabel;
        GameFacade_1.default.Instance.SceneMng.AddFUI(_this.m_fui);
        return _this;
    }
    PromptPanel.prototype.InitData = function (type, text) {
        this.m_type = type;
        switch (type) {
            case 1 /* StopAutoAttack */: //停止自动捕鱼
                {
                    this.m_cancelBtn.visible = true;
                    this.m_confirmBtn.x = 680;
                    break;
                }
            case 0 /* Reconnect */: { //断线重连提示框
                this.m_cancelBtn.visible = false;
                this.m_confirmBtn.x = 563;
                break;
            }
            case 2 /* LoginOther */: //异地登录提示框
            case 3 /* AccountError */: { //账号异常提示框
                this.m_cancelBtn.visible = false;
                this.m_confirmBtn.x = 563;
                break;
            }
        }
        this.m_content.text = text;
    };
    PromptPanel.prototype.OnConfirmBtnClick = function () {
        if (this.m_type == 1 /* StopAutoAttack */) { //停止自动捕鱼
            GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_AUTOATTACK, false);
        }
        else {
            GameFacade_1.default.Instance.SocketMng.refreshGame();
        }
        this.Close();
    };
    PromptPanel.prototype.OnCancelBtnClick = function () {
        // if (manager.TouchMoveFullScreen.instance.isAndroidApp) {
        //     window.close();
        // } else {
        //     window.location.href = GameFacade.Instance.GameMng.lobbyUrl;
        // }
        this.Close();
    };
    return PromptPanel;
}(BasePanel_1.default));
exports.default = PromptPanel;
},{"../../GameFacade":3,"../../constant/GameEvent":9,"../Panel/BasePanel":35}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var NetRanking_1 = require("../../net/ProtoHander/NetRanking");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var CommonUtil_1 = require("../../utils/CommonUtil");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var RankingPanel = /** @class */ (function () {
    function RankingPanel() {
        this.currPage = 1;
        this.isEndPage = false;
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiRankingPath.image, CommonConstant_1.default._fuiRankingPath.fui, this, this.onLoadRanking);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.RANKRESP, this, this.rankResp);
    }
    /**
     * 加载设置
     */
    RankingPanel.prototype.onLoadRanking = function () {
        var _this = this;
        this.rankCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiRankingPath.Package, "Ranking", "RankingPanel");
        this.tabC = this.rankCom.getController("tab");
        this.rankCom.getChild("close").onClick(this, this.onClose);
        this.thisRankBut = this.rankCom.getChild("thisWeekBut").asButton;
        this.lastRankBut = this.rankCom.getChild("lastWeekBut").asButton;
        this.thisRankBut.onClick(this, this.onClickThisRank);
        this.lastRankBut.onClick(this, this.onClickLastRank);
        this.thisRankBut.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.windowChange); });
        this.lastRankBut.onClick(this, function () { _this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.windowChange); });
        this.thisRankList = this.rankCom.getChild("thisWeekList").asList;
        this.thisRankList.removeChildrenToPool();
        this.lastRankList = this.rankCom.getChild("lastWeekList").asList;
        this.lastRankList.removeChildrenToPool();
        this.selfRankTex = this.rankCom.getChild("selfHaveRankng").asLabel;
        this.selfRankImag = this.rankCom.getChild("selfNoRanking").asImage;
        this.selfCoin = this.rankCom.getChild("selfCoin").asCom.getChild("coinTex").asLabel;
        this.rankCom.getChild("selfName").asCom.getChild("playNameTex").text = CommonUtil_1.utils.CommonUtils.nickNameToFormat(NetLogin_1.default.Instance.RoleInfo.nickname);
        NetRanking_1.default.Instance.rankReq(this.currPage, RankMsg.rank_type.rank_this_week);
        //this.tabC.selectedIndex = 0;
    };
    /**
     * 点击本周
     */
    RankingPanel.prototype.onClickThisRank = function () {
        this.currPage = 1;
        NetRanking_1.default.Instance.rankReq(this.currPage, RankMsg.rank_type.rank_this_week);
    };
    /**
     * 点击上周
     */
    RankingPanel.prototype.onClickLastRank = function () {
        this.currPage = 1;
        NetRanking_1.default.Instance.rankReq(this.currPage, RankMsg.rank_type.rank_last_week);
    };
    /**
     * 排行榜数据
     * @param data
     */
    RankingPanel.prototype.rankResp = function (data) {
        if (this.tabC.selectedIndex == 0) {
            this.listInfo(data, this.thisRankList, true);
        }
        else if (this.tabC.selectedIndex == 1) {
            this.listInfo(data, this.lastRankList, false);
        }
    };
    /**
     * 下拉
     */
    RankingPanel.prototype.onPullUpRelease = function () {
        if (this.isEndPage) {
            return;
        }
        console.log("下拉");
        this.currPage += 1;
        this.refreshData();
    };
    /**
     * 上拉
     */
    RankingPanel.prototype.onPullDownRelease = function () {
        console.log("上拉");
        // this.currPage -= 1;
        // if (this.currPage == 0) {
        //     this.currPage = 1;
        // }
        // this.refreshData();
    };
    /**
     * 拖拽刷新数据
     */
    RankingPanel.prototype.refreshData = function () {
        if (this.tabC.selectedIndex == 0) {
            NetRanking_1.default.Instance.rankReq(this.currPage, RankMsg.rank_type.rank_this_week);
        }
        else if (this.tabC.selectedIndex == 1) {
            NetRanking_1.default.Instance.rankReq(this.currPage, RankMsg.rank_type.rank_last_week);
        }
    };
    /**
     * 排行榜列表
     * @param data 排行榜数据
     * @param list 排行榜列表
     * @param isThisWeek 是否是本周数据
     */
    RankingPanel.prototype.listInfo = function (data, list, isThisWeek) {
        list.on(fairygui.Events.PULL_DOWN_RELEASE, this, this.onPullDownRelease);
        list.on(fairygui.Events.PULL_UP_RELEASE, this, this.onPullUpRelease);
        if (data.role.length == 0) {
            return;
        }
        else {
            if (data.role.length < 10) {
                this.isEndPage = true;
            }
            else {
                this.isEndPage = false;
            }
            if (data.self_rank == 0) {
                this.selfRankImag.visible = true;
                this.selfRankTex.visible = false;
            }
            else {
                this.selfRankImag.visible = false;
                this.selfRankTex.visible = true;
                this.rankCom.getChild("selfRanking").text = data.self_rank.toString();
            }
            if (isThisWeek) {
                this.selfCoin.text = CommonUtil_1.utils.CommonUtils.numberFormat(Number(data.score));
            }
            else {
                this.selfCoin.text = CommonUtil_1.utils.CommonUtils.numberFormat(Number(data.last_score));
            }
            //list.removeChildrenToPool();
            for (var i = 0; i < data.role.length; i++) {
                var rankingItemCom = list.addItemFromPool().asCom;
                var rankingTex = rankingItemCom.getChild("rankingTex").asGroup;
                var rankingImag = rankingItemCom.getChild("rankingImg").asImage;
                var playNameCom = rankingItemCom.getChild("playName").asCom;
                var coinNumCom = rankingItemCom.getChild("coinNum").asCom;
                var playName = playNameCom.getChild("playNameTex").asLabel;
                var coinNum = coinNumCom.getChild("coinTex").asLabel;
                var num = i + ((this.currPage - 1) * 10);
                if (num < 3) {
                    rankingImag.visible = true;
                    rankingTex.visible = false;
                    rankingImag.icon = "ui://Ranking/" + "ranking" + (num + 1);
                }
                else {
                    rankingImag.visible = false;
                    rankingTex.visible = true;
                    rankingItemCom.getChild("ranking").text = (num + 1).toString();
                }
                playName.text = data.role[i].nickname;
                coinNum.text = CommonUtil_1.utils.CommonUtils.numberFormat(Number(data.role[i].score));
                list.ensureBoundsCorrect();
            }
        }
    };
    /**
     *
     * 播放按钮点击声音
     */
    RankingPanel.prototype.onPlaySound = function (str) {
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, str);
    };
    /**
     * 关闭
     */
    RankingPanel.prototype.onClose = function () {
        this.onPlaySound(SoundNameConstant_1.default.soundKeyArr.onClose);
        this.thisRankList.removeChildrenToPool();
        this.lastRankList.removeChildrenToPool();
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.RANKRESP, this, this.rankResp);
        this.rankCom.dispose();
    };
    return RankingPanel;
}());
exports.default = RankingPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/EventConstantResponse":8,"../../constant/SoundNameConstant":11,"../../net/ProtoHander/NetLogin":78,"../../net/ProtoHander/NetRanking":79,"../../utils/CommonUtil":86}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var BasePanel_1 = require("../Panel/BasePanel");
/**
 * 断线自动重连的ui
 */
var ReconnecttingTip = /** @class */ (function (_super) {
    __extends(ReconnecttingTip, _super);
    function ReconnecttingTip(id) {
        var _this = _super.call(this) || this;
        _this.m_fui = fairygui.UIPackage.createObject("Hall", "ReconnectUI").asCom;
        var trans = _this.m_fui.getTransition("t0");
        trans.play();
        _this.m_fui.name = "ReconnecttingTip";
        _this.m_nameID = id;
        GameFacade_1.default.Instance.SceneMng.AddFUI(_this.m_fui);
        return _this;
    }
    return ReconnecttingTip;
}(BasePanel_1.default));
exports.default = ReconnecttingTip;
},{"../../GameFacade":3,"../Panel/BasePanel":35}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePanel_1 = require("./BasePanel");
var SelectItem_1 = require("../Item/SelectItem");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var GameFacade_1 = require("../../GameFacade");
var EnumData_1 = require("../../Enum/EnumData");
var GameEvent_1 = require("../../constant/GameEvent");
var BatteryController_1 = require("../../controller/BatteryController");
var FishController_1 = require("../../controller/FishController");
/**
 * 捕猎界面自动攻击面板--选择面板
*/
var SelectPanel = /** @class */ (function (_super) {
    __extends(SelectPanel, _super);
    function SelectPanel(owner, control) {
        var _this = _super.call(this) || this;
        _this.m_selectItemDic = new Laya.WeakObject();
        owner.getChild("ReSelectBtn").asButton.onClick(_this, _this.OnReSelectBtnClick);
        owner.getChild("SelectAllBtn").asButton.onClick(_this, _this.OnSelectAllBtnClick);
        owner.getChild("StartHuntBtn").asButton.onClick(_this, _this.OnStartHuntBtnClick);
        owner.getChild("LoadLastSetBtn").asButton.onClick(_this, _this.OnLoadLastSetBtnClick);
        _this.m_fui = owner;
        _this.m_list = owner.getChild("List").asList;
        _this.m_list.on(fairygui.Events.CLICK_ITEM, _this, _this.onClickItem);
        _this.m_list.foldInvisibleItems = true; //item不可见时，list不显示
        _this.m_control = control;
        _this.m_autoAttackArr = new Array(28);
        _this.LoadSelectFishConfig();
        return _this;
    }
    SelectPanel.prototype.ChangeItemUI = function (item, type, rate) {
        var selectItem = this.GetSelectItem(item);
        selectItem.ChangeUI(rate, type);
    };
    SelectPanel.prototype.GetSelectItem = function (item) {
        var key = this.m_list.getChildIndex(item);
        var selectItem = null;
        if (this.m_selectItemDic.has(key)) {
            selectItem = this.m_selectItemDic.get(key);
        }
        else {
            selectItem = new SelectItem_1.default(item, this);
            this.m_selectItemDic.set(key, selectItem);
        }
        return selectItem;
    };
    /**
     * 加载鱼的配置信息
    */
    SelectPanel.prototype.LoadSelectFishConfig = function () {
        var fishInfo = NetLogin_1.default.Instance._playerLoginInfo.fish_info;
        for (var i = 0; i < fishInfo.length; i++) {
            var type = fishInfo[i].fish_type;
            // //if(type > EnumData.FishSubtype.King_fishf1 && type <= EnumData.FishSubtype.King_fishf5) //27~31 为5个鱼王，只显示一个即可
            // if (type >= EnumData.FishSubtype.King_fishf1 && type <= EnumData.FishSubtype.King_fishf5) //27~31 为5个鱼王，都不显示
            // {
            //     continue;
            // }
            if (FishController_1.default.Instance.IsFishKing(type))
                continue;
            else if (type > EnumData_1.default.FishSubtype.Bomb_fish) {
                return;
            }
            var rate = fishInfo[i].fish_rate;
            var item = this.m_list.addItemFromPool().asCom;
            this.ChangeItemUI(item, type, rate);
        }
    };
    //#region  按钮响应事件
    SelectPanel.prototype.OnReSelectBtnClick = function () {
        for (var i = 0; i < this.m_list._children.length; i++) {
            var selectItem = this.m_selectItemDic.get(i);
            selectItem.SetClicked(false);
        }
    };
    SelectPanel.prototype.OnSelectAllBtnClick = function () {
        for (var i = 0; i < this.m_list._children.length; i++) {
            var selectItem = this.m_selectItemDic.get(i);
            selectItem.SetClicked(true);
        }
    };
    SelectPanel.prototype.OnStartHuntBtnClick = function () {
        GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_LOCKATTACK, false);
        GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.HUNT_AUTOATTACK, true);
        BatteryController_1.default.Instance.sAutoAttackArr = [];
        GameFacade_1.default.Instance.HuntSceneMng._bSelectedFish = false;
        for (var i = 0; i < this.m_autoAttackArr.length; i++) {
            BatteryController_1.default.Instance.gAutoAttackArr.push(this.m_autoAttackArr[i]);
            if (this.m_autoAttackArr[i]) {
                GameFacade_1.default.Instance.HuntSceneMng._bSelectedFish = true;
            }
        }
        this.m_control.OncloseBtnClick();
        this.m_control.ClearHuntedPanel();
    };
    SelectPanel.prototype.OnLoadLastSetBtnClick = function () {
        for (var i = 0; i < this.m_list._children.length; i++) {
            var selectItem = this.m_selectItemDic.get(i);
            selectItem.SetClicked(BatteryController_1.default.Instance.gAutoAttackArr[selectItem.FishType]);
        }
    };
    /** 点关闭按钮时，不保存选择信息*/
    SelectPanel.prototype.RemoveUnuseSelectedItem = function () {
        this.OnLoadLastSetBtnClick();
    };
    //#endregion
    SelectPanel.prototype.onClickItem = function (item) {
        var selectItem = this.GetSelectItem(item);
        selectItem.Onclicked();
    };
    SelectPanel.prototype.ShowSelf = function (visible) {
        this.m_fui.visible = visible;
    };
    return SelectPanel;
}(BasePanel_1.default));
exports.default = SelectPanel;
},{"../../Enum/EnumData":1,"../../GameFacade":3,"../../constant/GameEvent":9,"../../controller/BatteryController":12,"../../controller/FishController":13,"../../net/ProtoHander/NetLogin":78,"../Item/SelectItem":26,"./BasePanel":35}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonConstant_1 = require("../../constant/CommonConstant");
var Setting = /** @class */ (function () {
    function Setting() {
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiSettingPath.image, CommonConstant_1.default._fuiSettingPath.fui, this, this.onLoadSetting);
        GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn = true;
    }
    /**
     * 加载设置
     */
    Setting.prototype.onLoadSetting = function () {
        this.setCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiSettingPath.Package, "Setting", "SettingPanel");
        var closeBtn = this.setCom.getChild("close").asButton;
        closeBtn.onClick(this, this.onClose);
        this.musicSli = this.setCom.getChild("musicSli").asSlider;
        this.soundSli = this.setCom.getChild("soundSli").asSlider;
        this.musicSli.value = GameFacade_1.default.Instance.SoundMng.getMusicVolume();
        this.soundSli.value = GameFacade_1.default.Instance.SoundMng.getSoundVolume();
        this.musicSli.on(fairygui.Events.STATE_CHANGED, this, this.onMusicChange);
        this.soundSli.on(fairygui.Events.STATE_CHANGED, this, this.onSoundChange);
    };
    /**
     *
     * @param targentCom 关闭目标
     */
    Setting.prototype.onClose = function () {
        GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn = false;
        this.setCom.dispose();
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClose);
    };
    /**
     * 改变音乐滑动条
     */
    Setting.prototype.onMusicChange = function () {
        GameFacade_1.default.Instance.SoundMng.setMusicVolume(this.musicSli.value);
    };
    /**
     * 改变音效滑动条
     */
    Setting.prototype.onSoundChange = function () {
        GameFacade_1.default.Instance.SoundMng.setSoundVolume(this.soundSli.value);
    };
    return Setting;
}());
exports.default = Setting;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/SoundNameConstant":11}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var WalletKey = /** @class */ (function () {
    function WalletKey(num) {
        this.maxMoney = num * 0.01;
        this.walletKeyCom = fairygui.UIPackage.createObject("FreeTranWallet", "KeyNumberPanel").asCom;
        this.walletKeyCom.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade_1.default.Instance.SceneMng.AddFUI(this.walletKeyCom);
        this.inputShow = this.walletKeyCom.getChild("inputShow").asLabel;
        this.walletKeyCom.getChild("no").onClick(this, this.onClickNo);
        this.walletKeyCom.getChild("yes").onClick(this, this.onClickYes);
        this.listNum = this.walletKeyCom.getChild("listNum").asList;
        //this.listNum.setVirtual();
        this.listNum.itemRenderer = new Laya.Handler(this, this.RenderListItem, null, false);
        this.listNum.numItems = 12;
        this.listNum.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
    }
    WalletKey.prototype.RenderListItem = function (index, obj) {
        var button = obj.asButton;
        if (index < 9) {
            button.icon = fairygui.UIPackage.getItemURL("FreeTranWallet", (index + 1).toString());
        }
        if (index == 9) {
            button.icon = fairygui.UIPackage.getItemURL("FreeTranWallet", "dot");
        }
        if (index == 10) {
            button.icon = fairygui.UIPackage.getItemURL("FreeTranWallet", "0");
        }
        if (index == 11) {
            button.icon = fairygui.UIPackage.getItemURL("FreeTranWallet", "back");
        }
    };
    /**
     * 点击数值
     * @param obj
     */
    WalletKey.prototype.onClickItem = function (obj) {
        var str = this.inputShow.text;
        if (Number(str) >= this.maxMoney) {
            this.inputShow.text = this.maxMoney.toString();
        }
        else {
            this.inputShow.text = this.GetTextString(str, this.listNum.getChildIndex(obj));
        }
    };
    /**
     * 通过点击获取转变的字符
     * @param str
     * @param i
     */
    WalletKey.prototype.GetTextString = function (str, i) {
        if (i == 11) { //删除键
            if (str != null) {
                if (str.length > 1) {
                    str = str.substring(0, str.length - 1);
                }
                else if (str.length == 1) {
                    str = null;
                }
            }
        }
        else {
            if (str.length == 1) {
                if (i == 10 || i == 9) {
                    return null;
                }
            }
            else {
                if (i < 9) {
                    str = str + (i + 1);
                }
                if (i == 9) {
                    if (str.indexOf(".") != -1) {
                        return str;
                    }
                    str = str + ".";
                }
                if (i == 10) {
                    str = str + "0";
                }
            }
        }
        return str;
    };
    /**
     * no 点击
     */
    WalletKey.prototype.onClickNo = function () {
        this.walletKeyCom.dispose();
    };
    /**
     * yes 点击 要带回数据 call
     */
    WalletKey.prototype.onClickYes = function () {
        this.onClickNo();
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.WALLETKEYNUM, this.inputShow.text);
    };
    return WalletKey;
}());
exports.default = WalletKey;
},{"../../GameFacade":3,"../../constant/EventConstantResponse":8}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var NetWallet_1 = require("../../net/ProtoHander/NetWallet");
var CommonUtil_1 = require("../../utils/CommonUtil");
var WallerKeyPanel_1 = require("./WallerKeyPanel");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var CommonConstant_1 = require("../../constant/CommonConstant");
var EventNetResponse_1 = require("../../net/ProtoHander/EventNetResponse");
var NetRoom_1 = require("../../net/ProtoHander/NetRoom");
var LanguageConstant_1 = require("../../constant/LanguageConstant");
var TipManager_1 = require("../../manager/TipManager");
var NetLogin_1 = require("../../net/ProtoHander/NetLogin");
var WalletPanel = /** @class */ (function () {
    function WalletPanel(data) {
        this.ratio = 0.05;
        /** 中心钱包*/
        this.certerWalletValue = 0;
        /** fg钱包*/
        this.fgWalletValue = 0;
        /** 您要追加到..*/
        this.addToValue = 0;
        /** 实际充值额度*/
        this.addValue = 0;
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiFreeTranWalletPath.image, CommonConstant_1.default._fuiFreeTranWalletPath.fui, this, this.onLoadWallet);
        GameFacade_1.default.Instance.EventMng.add(EventConstantResponse_1.default.WALLETKEYNUM, this, this.walletKeyNum);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.SyncChipsResp, this, this.syncChip); //
        this.m_walletData = data;
    }
    /**
     * 加载设置
     */
    WalletPanel.prototype.onLoadWallet = function () {
        //GameFacade.Instance.WalletMng.onLoadedWalletPanel();
        fairygui.UIConfig.defaultFont = "幼圆";
        this.walletCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiFreeTranWalletPath.Package, "FreeTranWallet", "FreeTranWalletPanel");
        this.addListerOnClick();
        GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn = true;
        this.certerWalletValue = Number(this.m_walletData.chips);
        this.isAutoServer = this.m_walletData.auto_wallet == 0 ? false : true;
        this.isAutoLocal = GameFacade_1.default.Instance.WalletMng.getAutoState();
        this.initUI();
        NetRoom_1.default.Instance.SyncChipsReq();
    };
    /**
     * 初始化数据
     */
    WalletPanel.prototype.initUI = function () {
        this.walletCom.getChild("playAccText").text = NetLogin_1.default.Instance.RoleInfo.nickname;
        this.walletCom.getChild("certerWalletText").text = CommonUtil_1.utils.CommonUtils.numberFormat(this.certerWalletValue);
        this.walletCom.getChild("fgWalletText").text = CommonUtil_1.utils.CommonUtils.numberFormat(this.fgWalletValue);
        this.walletCom.getChild("autoAddBut").asButton.selected = this.isAutoServer;
        this.isAutoLocal = this.isAutoServer;
        this.walletInput = this.walletCom.getChild("input").asTextInput;
        this.walletKeyText = this.walletCom.getChild("keyText").asLabel;
        this.walletKeyBtn = this.walletCom.getChild("keyBtn").asButton;
        // if(Laya.Browser.onPC){
        //     if(this.fgWalletValue==0){
        //         this.walletInput.text ="0";     
        //     }
        //     else{
        //         this.walletInput.text = utils.CommonUtils.numberFormat(this.fgWalletValue);     
        //     }
        //     this.walletInput.on(Laya.Event.INPUT, this, this.onInput);
        //     this.walletKeyText.visible=false;
        //     this.walletKeyBtn.visible=false;
        // }
        // else{
        this.walletInput.visible = false;
        this.walletKeyText.text = CommonUtil_1.utils.CommonUtils.numberFormat(this.fgWalletValue);
        this.walletKeyBtn.on(Laya.Event.MOUSE_DOWN, this, this.createWalletKey);
        // }
        this.walletSli = this.walletCom.getChild("walletSli").asSlider;
        if ((this.certerWalletValue + this.fgWalletValue) == 0) {
            this.walletSli.max = 100;
        }
        else {
            this.walletSli.max = this.certerWalletValue + this.fgWalletValue;
        }
        this.walletSli.value = this.fgWalletValue;
        this.walletSli.on(fairygui.Events.STATE_CHANGED, this, this.onWalletSliderDragEnd);
    };
    /**
     * 获得同步金币
     * @param data
     */
    WalletPanel.prototype.syncChip = function (data) {
        this.fgWalletValue = Number(data.chips);
        this.addToValue = this.fgWalletValue;
        this.initUI();
    };
    /**
     *
     * @param str 小键盘输入的值
     */
    WalletPanel.prototype.walletKeyNum = function (str) {
        console.log(str);
        this.walletKeyText.text = str;
        var v = Number(str);
        if (v <= this.fgWalletValue)
            return;
        if (v > this.certerWalletValue + this.fgWalletValue) {
            v = this.certerWalletValue + this.fgWalletValue;
        }
        this.onClickMeanwhileChange(v * 100);
    };
    /**
     * 对按钮进行监控
     */
    WalletPanel.prototype.addListerOnClick = function () {
        this.walletCom.getChild("addBut").onClick(this, this.onClickAdd);
        this.walletCom.getChild("subBut").onClick(this, this.onClickSub);
        this.walletCom.getChild("autoAddBut").onClick(this, this.onClickIsAuto);
        this.walletCom.getChild("startBut").onClick(this, this.onClickStart);
        this.walletCom.getChild("close").onClick(this, this.OnClose);
    };
    /**
     * 创建小键盘
     */
    WalletPanel.prototype.createWalletKey = function () {
        new WallerKeyPanel_1.default(this.fgWalletValue + this.certerWalletValue);
    };
    /**
     * 输入值
     */
    WalletPanel.prototype.onInput = function () {
        console.log("this.walletInput.text" + this.walletInput.text);
        var te = this.walletInput.text;
        var part = /^[^0-9.]$/g;
        if (part.test(te)) {
            console.log(te);
            te = te.substring(0, te.length - 1);
        }
        if (te.length <= 0 || parseFloat(te) == null) {
            this.walletInput.text = "";
        }
        else if (te.indexOf(".") != -1) {
            var sp0 = te.split(".")[0];
            var sp1 = te.split(".")[1];
            if (sp1.length == 0) {
                this.walletInput.text = sp0 + ".";
            }
            else if (sp1.length > 0) {
                var pat1 = /[0-9]*/g;
                te = sp0 + "." + sp1.match(pat1)[0].substring(0, 2);
                this.walletInput.text = te;
            }
        }
        else {
            if (te.indexOf(",") != -1) {
                te = te.split(",")[0] + te.split(",")[1];
            }
            this.walletInput.text = parseFloat(te).toString();
        }
        if (this.walletInput.text.indexOf(",") != -1) { //“，”识别有点麻烦
            this.walletInput.text = this.walletInput.text.split(",")[0] + te.split(",")[1];
        }
        var v = Number(this.walletInput.text) * 100;
        if (v <= this.fgWalletValue) {
            this.walletSli.value = this.fgWalletValue;
            this.addToValue = this.fgWalletValue;
            return;
        }
        else if (v >= this.certerWalletValue + this.fgWalletValue) {
            v = this.certerWalletValue + this.fgWalletValue;
            this.walletInput.text = (v / 100).toFixed(2);
        }
        this.walletSli.value = v;
        this.addToValue = v;
    };
    /**
     * 点击加号
     */
    WalletPanel.prototype.onClickAdd = function () {
        var add = this.addToValue + this.certerWalletValue * this.ratio;
        var all = this.certerWalletValue + this.fgWalletValue;
        if (this.certerWalletValue > 0 && this.addToValue < all) {
            if (add >= all) {
                this.onClickMeanwhileChange(all);
            }
            else {
                this.onClickMeanwhileChange(add);
            }
        }
    };
    /**
     *点击减号
     */
    WalletPanel.prototype.onClickSub = function () {
        if (this.addToValue < this.certerWalletValue && this.addToValue > this.fgWalletValue) {
            this.onClickMeanwhileChange(this.addToValue - this.certerWalletValue * this.ratio);
        }
    };
    /**
     * 点击是否自动加钱
     */
    WalletPanel.prototype.onClickIsAuto = function () {
        if (this.isAutoLocal) {
            this.isAutoLocal = false;
        }
        else {
            this.isAutoLocal = true;
        }
    };
    /**
     * 拖拽滑动条
     */
    WalletPanel.prototype.onWalletSliderDragEnd = function () {
        this.walletCom.on(Laya.Event.MOUSE_UP, this, function () {
            var v = this.walletSli.value;
            if (this.walletSli.value <= this.fgWalletValue) {
                this.walletSli.value = this.fgWalletValue;
            }
            this.addToValue = this.walletSli.value;
            CommonUtil_1.utils.CommonUtils.log("this.addToValue = ", this.addToValue);
            this.walletInput.text = CommonUtil_1.utils.CommonUtils.numberFormat(this.walletSli.value);
        });
    };
    /**
     * 点击加钱减钱是同时改变滑动条及加的钱数
     */
    WalletPanel.prototype.onClickMeanwhileChange = function (num) {
        if (num <= this.fgWalletValue) {
            num = this.fgWalletValue;
        }
        this.addToValue = num;
        this.walletInput.text = CommonUtil_1.utils.CommonUtils.numberFormat(num).toString();
        this.walletSli.value = num;
    };
    /**
     * 点击start游戏
     */
    WalletPanel.prototype.onClickStart = function () {
        GameFacade_1.default.Instance.WalletMng.AddToValue(this.addToValue);
        GameFacade_1.default.Instance.WalletMng.setFgWalletValue(this.fgWalletValue);
        if (this.addToValue == 0) {
            GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.setMoney, TipManager_1.TipType.FLOATTIP);
            return;
        }
        else if (this.addToValue == this.fgWalletValue && this.isAutoLocal == this.isAutoServer || this.addToValue < this.fgWalletValue) {
            this.OnClose();
            GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.operationInvalid, TipManager_1.TipType.FLOATTIP);
            return;
        }
        GameFacade_1.default.Instance.WalletMng.setAutoState(this.isAutoLocal);
        NetWallet_1.default.Instance.walletReq(this.addToValue, this.isAutoLocal);
        this.OnClose();
    };
    WalletPanel.prototype.OnClose = function () {
        GameFacade_1.default.Instance.EventMng.remove(EventConstantResponse_1.default.WALLETKEYNUM, this, this.walletKeyNum);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.SyncChipsResp, this, this.syncChip);
        this.walletCom.dispose();
        GameFacade_1.default.Instance.SceneMng.bProhibitWalletBtn = false;
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.onClose);
    };
    return WalletPanel;
}());
exports.default = WalletPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/EventConstantResponse":8,"../../constant/LanguageConstant":10,"../../constant/SoundNameConstant":11,"../../manager/TipManager":67,"../../net/ProtoHander/EventNetResponse":73,"../../net/ProtoHander/NetLogin":78,"../../net/ProtoHander/NetRoom":81,"../../net/ProtoHander/NetWallet":82,"../../utils/CommonUtil":86,"./WallerKeyPanel":54}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var GameFacade_1 = require("../../GameFacade");
var SoundNameConstant_1 = require("../../constant/SoundNameConstant");
var CommonUtil_1 = require("../../utils/CommonUtil");
var CommonConstant_1 = require("../../constant/CommonConstant");
var WinnerPanel = /** @class */ (function () {
    function WinnerPanel() {
        Laya.loader.load([
            { url: CommonConstant_1.default._fuiWinningPath.image, type: Loader.IMAGE },
            { url: CommonConstant_1.default._fuiWinningPath.fui, type: Loader.BUFFER },
        ], Handler.create(this, this.onLoadWinner));
        GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.luckAward);
    }
    /**
     * 加载设置
     */
    WinnerPanel.prototype.onLoadWinner = function () {
        fairygui.UIPackage.addPackage(CommonConstant_1.default._fuiWinningPath.Package);
        this.winnerCom = fairygui.UIPackage.createObject("Winning", "winningPanel").asCom;
        this.winnerCom.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade_1.default.Instance.SceneMng.AddFUI(this.winnerCom);
        this.winnerCom.getChild("GradeLoader").icon = "ui://Winning/" + this.bcastJpInfo.score_level;
        this.winnerCom.getChild("clipText").text = "+" + (CommonUtil_1.utils.CommonUtils.numberFixed(Number(this.bcastJpInfo.score))).toFixed(2);
        Laya.timer.once(2000, this, this.onClose);
    };
    /**
     * 关闭
     */
    WinnerPanel.prototype.onClose = function () {
        this.winnerCom.dispose();
    };
    return WinnerPanel;
}());
exports.default = WinnerPanel;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/SoundNameConstant":11,"../../utils/CommonUtil":86}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseManager_1 = require("./BaseManager");
var ActManager = /** @class */ (function (_super) {
    __extends(ActManager, _super);
    function ActManager() {
        var _this = _super.call(this) || this;
        /**活动是否结束 */
        _this.isActEnd = false;
        return _this;
    }
    ;
    ActManager.prototype.Init = function () {
    };
    return ActManager;
}(BaseManager_1.default));
exports.default = ActManager;
},{"./BaseManager":58}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseManager = /** @class */ (function () {
    function BaseManager() {
    }
    BaseManager.prototype.Init = function () {
    };
    /** 清空还原数据*/
    BaseManager.prototype.ClearData = function () {
    };
    return BaseManager;
}());
exports.default = BaseManager;
},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../GameFacade");
var BaseManager_1 = require("./BaseManager");
var FishBaseConfigData_1 = require("../game/Fish/FishBaseConfigData");
var CommonUtil_1 = require("../utils/CommonUtil");
var ConfigManager = /** @class */ (function (_super) {
    __extends(ConfigManager, _super);
    function ConfigManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fishPathConfig = {}; //正常鱼路径
        _this._fishPathConfigTranform = {}; // 转换x y后的鱼路径
        _this._fishOffsetConfig = new Laya.WeakObject();
        /** 是否执行了init*/
        _this._bCompleteInit = false;
        return _this;
    }
    Object.defineProperty(ConfigManager.prototype, "FishBaseConfig", {
        /** 鱼基础数据配置*/
        get: function () {
            return this._fishBaseConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManager.prototype, "FishPathConfig", {
        /** 鱼路劲数据配置(key:fishPathID   value:FishWayPoint)*/
        get: function () {
            return GameFacade_1.default.Instance.HuntSceneMng._bTransform ? this._fishPathConfigTranform : this._fishPathConfig;
            // if (!GameFacade.Instance.HuntSceneMng._bTransform) {
            //     return this._fishPathConfig;
            // }
            // else {
            //     utils.CommonUtils.log("------------------- _fishPathConfigTranform --------------------");
            //     return this._fishPathConfigTranform;
            // }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManager.prototype, "FishOffsetConfig", {
        /** 鱼位置偏移数据配置(key:fishTypeID   value:FishWayPoint)*/
        get: function () {
            return this._fishOffsetConfig;
        },
        enumerable: true,
        configurable: true
    });
    ConfigManager.prototype.Init = function () {
        if (false == this._bCompleteInit) {
            this._bCompleteInit = true;
            var self_1 = this;
            GameFacade_1.default.Instance.ResourceMng.PreloadingRes("configfile/fishBaseConfig.json", Laya.Loader.JSON, function (loadedRes) {
                self_1._fishBaseConfig = loadedRes;
                FishBaseConfigData_1.default.FishSwimConfig.ParseFishBehaviorData();
            });
            GameFacade_1.default.Instance.ResourceMng.PreloadingRes("configfile/fishPathConfig.json", Laya.Loader.JSON, function (loadedRes) {
                for (var iterator in loadedRes) {
                    var fwp = new FishWayPoint(iterator, self_1.GetPathLength(loadedRes[iterator]));
                    var fwp2 = new FishWayPoint(iterator, self_1.GetPathLength(loadedRes[iterator]));
                    self_1._fishPathConfig[iterator] = fwp;
                    self_1._fishPathConfigTranform[iterator] = fwp2;
                }
                TransformFishConfig();
            });
            GameFacade_1.default.Instance.ResourceMng.PreloadingRes("configfile/fishOffsetConfig.json", Laya.Loader.JSON, function (loadedRes) {
                for (var iterator in loadedRes) {
                    var fwp = new FishWayPoint(iterator, self_1.GetPathLength(loadedRes[iterator]));
                    self_1._fishOffsetConfig.set(iterator, fwp);
                }
            });
            var TransformFishConfig = function () {
                var fishConfig = self_1._fishPathConfigTranform;
                for (var key in fishConfig) {
                    var points = fishConfig[key]._points;
                    for (var i = 0; i < points.length; i++) {
                        points[i].x = -points[i].x;
                        points[i].y = -points[i].y;
                    }
                }
                CommonUtil_1.utils.CommonUtils.log("-----------  self._fishPathConfig = ", self_1._fishPathConfig);
                CommonUtil_1.utils.CommonUtils.log("-----------  self._fishPathConfigTranform = ", self_1._fishPathConfigTranform);
            };
        }
    };
    /**
     * 计算并返回路径长度
     * @param waypoints 路径上所有的点
     */
    ConfigManager.prototype.GetPathLength = function (waypoints) {
        var totalLength = 0;
        var vector3Arr = new Array();
        for (var index = 0; index < waypoints.length - 1; index++) {
            var arr = waypoints[index].replace('(', '').replace(')', '').split(',');
            /** x轴乘以-1是因为json数据从unity引擎导出来的，其坐标系与laya坐标系x值正好相反*/
            var vec = new Laya.Vector3(-1 * Number(arr[0]), Number(arr[1]), Number(arr[2]));
            var arr1 = waypoints[index + 1].replace('(', '').replace(')', '').split(',');
            var vec1 = new Laya.Vector3(-1 * Number(arr1[0]), Number(arr1[1]), Number(arr1[2]));
            vector3Arr.push(vec);
            if (1 + index == waypoints.length - 1)
                vector3Arr.push(vec1);
            totalLength += Laya.Vector3.distance(vec, vec1);
        }
        return new Array(vector3Arr, totalLength);
    };
    return ConfigManager;
}(BaseManager_1.default));
exports.default = ConfigManager;
var FishWayPoint = /** @class */ (function () {
    function FishWayPoint(key, objs) {
        this._key = key;
        this._points = objs[0];
        this._wayLength = objs[1];
    }
    return FishWayPoint;
}());
exports.FishWayPoint = FishWayPoint;
},{"../GameFacade":3,"../game/Fish/FishBaseConfigData":19,"../utils/CommonUtil":86,"./BaseManager":58}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseManager_1 = require("./BaseManager");
/**
 * 事件管理
 */
var EventManager = /** @class */ (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventManager.prototype.Init = function () {
        this._event = new laya.events.EventDispatcher();
    };
    /**
     * 添加一般游戏逻辑事件（不包含协议回调事件） 要防止重复添加，否则会重复调用
     */
    EventManager.prototype.add = function (type, thisObject, listener, once) {
        if (once === void 0) { once = false; }
        if (!once)
            this._event.on(type, thisObject, listener);
        else
            this._event.once(type, thisObject, listener);
    };
    /**
     * 派发一般游戏逻辑事件（不包含协议回调事件）
     */
    EventManager.prototype.dispatch = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._event.event(type, args);
    };
    /**
     * 移除一般游戏逻辑事件（不包含协议回调事件）
     */
    EventManager.prototype.remove = function (type, thisObject, listener, onceOnly) {
        if (onceOnly === void 0) { onceOnly = false; }
        this._event.off(type, thisObject, listener, onceOnly);
    };
    return EventManager;
}(BaseManager_1.default));
exports.default = EventManager;
},{"./BaseManager":58}],61:[function(require,module,exports){
"use strict";
/**
* 玩家数据
*/
Object.defineProperty(exports, "__esModule", { value: true });
var BaseManager_1 = require("./BaseManager");
var CommonUtil_1 = require("../utils/CommonUtil");
var GameManger = /** @class */ (function (_super) {
    __extends(GameManger, _super);
    function GameManger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lang = "zh-cn"; //多语言 	(暂时定义 无用)	
        _this.game_id = 5006;
        _this.isShowTip = true;
        _this.bReconnect = false;
        _this.serverPort = 50062;
        _this.sip = null;
        /** 账号登录的token*/
        _this.token = "123";
        _this.historyUrl = "";
        _this.myVersion = "";
        _this.client = ""; //客户端设备
        _this.isLoacalDev = false; //是否本地调试
        _this.reportUrl = null;
        _this.actUrl = null;
        _this.bGameStart = false;
        return _this;
    }
    GameManger.prototype.Init = function () {
        this.sip = JSON.parse(CommonUtil_1.utils.CommonUtils.decode("sip", "value"));
        this.serverIp = CommonUtil_1.utils.CommonUtils.decode("serverIp", "value");
        //this.lobbyUrl = utils.CommonUtils.decode("lobbyUrl", "value");
        this.serverPort = CommonUtil_1.utils.CommonUtils.decode("serverPort", "value");
        this.token = CommonUtil_1.utils.CommonUtils.decode("token", "value");
        //this.historyUrl = utils.CommonUtils.decode("historyUrl", "value");
        this.myVersion = CommonUtil_1.utils.CommonUtils.decode("myVersion", "value");
        this.client = CommonUtil_1.utils.CommonUtils.decode("client", "value");
        this.return = CommonUtil_1.utils.CommonUtils.decode("return", "value");
        this.reportUrl = CommonUtil_1.utils.CommonUtils.getValue("gameWebLog");
        this.actUrl = CommonUtil_1.utils.CommonUtils.getValue("actUrl");
        this.lobbyUrl = CommonUtil_1.utils.CommonUtils.getValue("lobbyUrl");
        this.historyUrl = CommonUtil_1.utils.CommonUtils.getValue("historyUrl");
    };
    /**
     * 获取运行设备
     * 1:PC，2:IOS横，3:IOS竖，4:安卓横，5:安卓竖，6:其它横，7:其它
     */
    GameManger.prototype.getDeviceType = function () {
        var isHorizontal = Laya.Browser.clientWidth > Laya.Browser.clientHeight;
        var media = 1;
        if (Laya.Browser.onPC) {
            media = 1;
        }
        else if (Laya.Browser.onIOS) {
            media = isHorizontal ? 2 : 3;
        }
        else if (Laya.Browser.onAndroid) //onAndriod 
         {
            media = isHorizontal ? 4 : 5;
        }
        else {
            media = isHorizontal ? 6 : 7;
        }
        return media;
    };
    return GameManger;
}(BaseManager_1.default));
exports.default = GameManger;
},{"../utils/CommonUtil":86,"./BaseManager":58}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonConstant_1 = require("../constant/CommonConstant");
var GameFacade_1 = require("../GameFacade");
var FishController_1 = require("../controller/FishController");
var EnumData_1 = require("../Enum/EnumData");
var FishBase_1 = require("../game/Fish/FishBase");
var BaseManager_1 = require("./BaseManager");
var BulletBase_1 = require("../game/Bullet/BulletBase");
var HF3DBulletClasses_1 = require("../game/Bullet/HF3DBulletClasses");
var HF3DFishClasses_1 = require("../game/Fish/HF3DFishClasses");
var BatteryController_1 = require("../controller/BatteryController");
var CommonUtil_1 = require("../utils/CommonUtil");
var SoundNameConstant_1 = require("../constant/SoundNameConstant");
var HuntSceneManager = /** @class */ (function (_super) {
    __extends(HuntSceneManager, _super);
    function HuntSceneManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bSelectedFish = false;
        _this._bAutoAttack = false;
        _this._bLockAttack = false;
        _this._bTransform = false;
        /** 存放实例化的鱼对象*/
        //private _FishInstanceDict: Laya.WeakObject;
        _this._FishInstanceDict = {};
        /** 存放实例化的子弹对象*/
        _this._BulletInstanceDict = {};
        /**预警面板 */
        _this.warnCom = null;
        return _this;
    }
    HuntSceneManager.prototype.Init = function () {
        //this._HuntScene = new Laya.Scene3D();
    };
    /** 清空还原数据*/
    HuntSceneManager.prototype.ClearData = function () {
        this._HuntScene = null;
        this._HuntSceneCamera = null;
        this._FishPrefabDict = null;
        this._bulletPrefabDict = null;
        this._effectPrefabDict = null;
        this._awardffectPrefabDict = null;
        this._cannonPrefabDict = null;
        //this._FishInstanceDict = null;
        this.DeleteAllFishsIns();
        //this._BulletInstanceDict = null;
        this.DeleteAllBulletsIns();
        this._effectInstanceDict = null;
        this._bSelectedFish = false;
        this._bAutoAttack = false;
        this._bLockAttack = false;
        this._bTransform = false;
        this.onCloseWarn();
    };
    /**
     * 进入捕猎房间
     */
    HuntSceneManager.prototype.EnterRoomInit = function (scene, gunScene) {
        this._GunScene = gunScene;
        this._GunSceneCamera = gunScene.getChildByName("Main Camera");
        this._HuntScene = scene;
        this._HuntSceneCamera = scene.getChildByName("Main Camera");
        //this._HuntSceneCamera.fieldOfView = 100;
        this._HuntSceneCamera.clearFlag = 3;
        // camera.cullingMask = (1 << 8);
        this._HuntSceneCamera.transform.position = new Laya.Vector3(0, 0, -10);
        this.SetFishModels();
        this.SetBulletModels();
        this.SetEffectModels();
        this.SetAwardEffectModels();
        this.SetCannonModels();
        FishController_1.default.Instance.Init();
        BatteryController_1.default.Instance.Init();
    };
    /** 退出捕猎场景并回收相关资源*/
    HuntSceneManager.prototype.ExitHuntScene = function () {
        FishController_1.default.Instance.Uninit();
        BatteryController_1.default.Instance.Uninit();
        this.ClearData();
        Laya.SoundManager.stopAllSound();
    };
    /**
     * 获取碰撞鱼的脚本信息
     */
    HuntSceneManager.prototype.GetFishBase = function (node) {
        var parent = node.parent.parent; //其他鱼
        if (parent == null) {
            parent = node.parent; //美人鱼
        }
        var fish = parent.getComponent(FishBase_1.FishBase);
        return fish;
    };
    //#region 鱼对象的实例化、回收与移除鱼
    HuntSceneManager.prototype.SetFishModels = function () {
        if (null == this._FishPrefabDict) {
            this._FishPrefabDict = new Laya.WeakObject();
            var fishNode = this._HuntScene.getChildByName("FishModels");
            fishNode.active = true;
            var numChildren = fishNode.numChildren;
            for (var index = 0; index < numChildren; index++) {
                var nd = fishNode.getChildAt(index);
                nd.active = false;
                this._FishPrefabDict.set(nd.name, nd);
            }
        }
    };
    /**
       * 获取鱼模型资源
       * @param fishModelType 鱼的模型类型ID
       */
    HuntSceneManager.prototype.GetFishModel = function (fishModelType) {
        var key;
        if (fishModelType >= 10)
            key = "Fish" + fishModelType;
        else
            key = "Fish0" + fishModelType;
        if (this._FishPrefabDict.has(key)) {
            return this._FishPrefabDict.get(key);
        }
        else
            CommonUtil_1.utils.CommonUtils.warn("not find fish model of fishId" + fishModelType);
        return null;
    };
    HuntSceneManager.prototype.InstantiateFish = function (fishSubType, parent) {
        var fishModelType = GameFacade_1.default.Instance.HuntSceneMng.GetFishModelType(fishSubType);
        if (null == this._FishInstanceDict)
            this._FishInstanceDict = {}; //new Laya.WeakObject();
        var fishIns;
        var fishArray;
        if (this._FishInstanceDict[fishModelType]) {
            fishArray = this._FishInstanceDict[fishModelType]; // as Array<Laya.Sprite3D>;
            var tarray = fishArray.filter(function (value, index, array) { return value.active == false; });
            if (null != tarray && tarray.length > 0)
                return tarray[0];
        }
        else
            fishArray = new Array();
        var prefab = this.GetFishModel(fishModelType);
        fishIns = Laya.Sprite3D.instantiate(prefab, parent == null ? prefab.parent : parent);
        fishArray.push(fishIns);
        this._FishInstanceDict[fishModelType] = fishArray;
        switch (fishSubType) {
            case EnumData_1.default.FishSubtype.Fish_1:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish01);
                break;
            case EnumData_1.default.FishSubtype.Fish_2:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish02);
                break;
            case EnumData_1.default.FishSubtype.Fish_3:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish03);
                break;
            case EnumData_1.default.FishSubtype.Fish_4:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish04);
                break;
            case EnumData_1.default.FishSubtype.Fish_5:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish05);
                break;
            case EnumData_1.default.FishSubtype.Fish_6:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish06);
                break;
            case EnumData_1.default.FishSubtype.Fish_7:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish07);
                break;
            case EnumData_1.default.FishSubtype.Fish_8:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish08);
                break;
            case EnumData_1.default.FishSubtype.Fish_9:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish09);
                break;
            case EnumData_1.default.FishSubtype.Fish_10:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish10);
                break;
            case EnumData_1.default.FishSubtype.Fish_11:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish11);
                break;
            case EnumData_1.default.FishSubtype.Fish_12:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish12);
                break;
            case EnumData_1.default.FishSubtype.Fish_13:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish13);
                break;
            case EnumData_1.default.FishSubtype.Fish_14:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish14);
                break;
            case EnumData_1.default.FishSubtype.Fish_15:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish15);
                break;
            case EnumData_1.default.FishSubtype.Fish_16:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish16);
                break;
            case EnumData_1.default.FishSubtype.Fish_17:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish17);
                break;
            case EnumData_1.default.FishSubtype.Fish_18:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish18);
                break;
            case EnumData_1.default.FishSubtype.Fish_19:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish19);
                break;
            case EnumData_1.default.FishSubtype.Fish_20:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish20);
                break;
            case EnumData_1.default.FishSubtype.Frozen_fish:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish21);
                break;
            case EnumData_1.default.FishSubtype.Fish_22:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish22);
                break;
            case EnumData_1.default.FishSubtype.Golden_Shark:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish23);
                break;
            case EnumData_1.default.FishSubtype.Golden_Dragon:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish24);
                break;
            case EnumData_1.default.FishSubtype.Mermaid:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish25);
                break;
            case EnumData_1.default.FishSubtype.Ship:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish26);
                break;
            case EnumData_1.default.FishSubtype.King_fishf1:
                fishIns.addComponent(HF3DFishClasses_1.default.FishKing1);
                break;
            case EnumData_1.default.FishSubtype.King_fishf2:
                fishIns.addComponent(HF3DFishClasses_1.default.FishKing2);
                break;
            case EnumData_1.default.FishSubtype.King_fishf3:
                fishIns.addComponent(HF3DFishClasses_1.default.FishKing3);
                break;
            case EnumData_1.default.FishSubtype.King_fishf4:
                fishIns.addComponent(HF3DFishClasses_1.default.FishKing4);
                break;
            case EnumData_1.default.FishSubtype.King_fishf5:
                fishIns.addComponent(HF3DFishClasses_1.default.FishKing5);
                break;
            case EnumData_1.default.FishSubtype.Bomb_fish:
                fishIns.addComponent(HF3DFishClasses_1.default.Fish27);
                break;
            default:
                fishIns.addComponent(FishBase_1.FishBase);
                break;
        }
        return fishIns;
    };
    /**
     * 根据鱼数据类型获取对应的模型ID( 修改type 从27(炸弹鱼) 以后 开始 对应的是 1 2 3 4 5类型鱼模型的鱼王)
     * @param fishType 鱼的子类型
     */
    HuntSceneManager.prototype.GetFishModelType = function (fishType) {
        switch (fishType) {
            case EnumData_1.default.FishSubtype.Bomb_fish:
                fishType = 27;
                break;
            case EnumData_1.default.FishSubtype.King_fishf1:
                fishType = 1;
                break;
            case EnumData_1.default.FishSubtype.King_fishf2:
                fishType = 2;
                break;
            case EnumData_1.default.FishSubtype.King_fishf3:
                fishType = 3;
                break;
            case EnumData_1.default.FishSubtype.King_fishf4:
                fishType = 4;
                break;
            case EnumData_1.default.FishSubtype.King_fishf5:
                fishType = 5;
                break;
            default:
                break;
        }
        return fishType;
    };
    /**
     * 销毁所有缓存的鱼资源
     */
    HuntSceneManager.prototype.DeleteAllFishsIns = function () {
        if (null == this._FishInstanceDict)
            return;
        for (var key in this._FishInstanceDict) {
            if (this._FishInstanceDict.hasOwnProperty(key)) {
                var element = this._FishInstanceDict[key];
                for (var index = 0; index < element.length; index++) {
                    var tins = element[index];
                    tins.destroy();
                }
            }
        }
        this._FishInstanceDict = null;
    };
    //#endregion
    //#region  子弹对象的实例化  缓存与回收
    /** 缓存炮台预制件列表*/
    HuntSceneManager.prototype.SetCannonModels = function () {
        if (null == this._cannonPrefabDict) {
            this._cannonPrefabDict = new Laya.WeakObject();
            var node = this._GunScene.getChildByName("Cannons");
            var numChildren = null != node ? node.numChildren : 0;
            for (var index = 0; index < numChildren; index++) {
                var nd = node.getChildAt(index);
                nd.active = false;
                this._cannonPrefabDict.set(nd.name, nd);
            }
        }
    };
    /**
     * 获取炮台预制件资源
     * @param cannonResType 炮台资源类型ID(1\2\3)
     */
    HuntSceneManager.prototype.GetCannonPrefab = function (cannonResType) {
        var key;
        key = "Cannon" + cannonResType;
        if (this._cannonPrefabDict.has(key)) {
            return this._cannonPrefabDict.get(key);
        }
        else
            CommonUtil_1.utils.CommonUtils.warn("not find prefab model of cannonResType " + cannonResType);
        return null;
    };
    /** 缓存子弹预制件列表*/
    HuntSceneManager.prototype.SetBulletModels = function () {
        if (null == this._bulletPrefabDict) {
            this._bulletPrefabDict = new Laya.WeakObject();
            var bulletNode = this._HuntScene.getChildByName("Bullets");
            var numChildren = bulletNode.numChildren;
            for (var index = 0; index < numChildren; index++) {
                var nd = bulletNode.getChildAt(index);
                // nd.getChildAt(0).getChildAt(0).active = false;
                nd.active = false;
                this._bulletPrefabDict.set(nd.name, nd);
            }
        }
    };
    /**
       * 获取子弹预制件资源
       * @param bulletResType 子弹资源类型ID
       */
    HuntSceneManager.prototype.GetBulletPrefab = function (bulletResType) {
        var key;
        key = "BulletPrefab" + bulletResType;
        if (this._bulletPrefabDict.has(key)) {
            return this._bulletPrefabDict.get(key);
        }
        else
            CommonUtil_1.utils.CommonUtils.warn("not find BulletPrefab model of bulletResType " + bulletResType);
        return null;
    };
    /**
     *
     * @param bulletType 子弹资源类型
     */
    HuntSceneManager.prototype.InstantiateBullet = function (bulletType) {
        if (null == this._BulletInstanceDict)
            this._BulletInstanceDict = {}; //new Laya.WeakObject();
        var cloneIns;
        var cloneArray;
        if (this._BulletInstanceDict[bulletType]) {
            cloneArray = this._BulletInstanceDict[bulletType]; // as Array<Laya.Sprite3D>;
            var tarray = cloneArray.filter(function (value, index, array) { return value.active == false; });
            if (null != tarray && tarray.length > 0)
                return tarray[0];
        }
        else
            cloneArray = new Array();
        var prefab = this.GetBulletPrefab(bulletType);
        if (null == prefab)
            return;
        cloneIns = Laya.Sprite3D.instantiate(prefab, prefab.parent);
        cloneArray.push(cloneIns);
        this._BulletInstanceDict[bulletType] = cloneArray;
        switch (bulletType) {
            case 1:
                cloneIns.addComponent(HF3DBulletClasses_1.default.Bullet01);
                break;
            case 2:
                cloneIns.addComponent(HF3DBulletClasses_1.default.Bullet02);
                break;
            case 3:
                cloneIns.addComponent(HF3DBulletClasses_1.default.Bullet03);
                break;
            default:
                cloneIns.addComponent(BulletBase_1.default);
                break;
        }
        return cloneIns;
    };
    /**
     * 销毁所有缓存的子弹资源
     */
    HuntSceneManager.prototype.DeleteAllBulletsIns = function () {
        if (null == this._BulletInstanceDict)
            return;
        for (var key in this._BulletInstanceDict) {
            if (this._BulletInstanceDict.hasOwnProperty(key)) {
                var element = this._BulletInstanceDict[key];
                for (var index = 0; index < element.length; index++) {
                    var tins = element[index];
                    tins.destroy();
                }
            }
        }
        this._BulletInstanceDict = null;
    };
    //#endregion
    //#region  特效对象的实例化  缓存与回收
    /** 缓存特效预制件列表*/
    HuntSceneManager.prototype.SetEffectModels = function () {
        if (null == this._effectPrefabDict) {
            this._effectPrefabDict = new Laya.WeakObject();
            var node = this._HuntScene.getChildByName("Effects");
            var numChildren = node.numChildren;
            for (var index = 0; index < numChildren; index++) {
                var nd = node.getChildAt(index);
                nd.active = false;
                this._effectPrefabDict.set(nd.name, nd);
            }
        }
    };
    /**
       * 获取捕猎场景特效资源预制件
       * @param effectResPath 捕猎场景特效资源
       */
    HuntSceneManager.prototype.GetEffectPrefab = function (effectResPath) {
        var key = effectResPath;
        if (this._effectPrefabDict.has(key)) {
            return this._effectPrefabDict.get(key);
        }
        else
            CommonUtil_1.utils.CommonUtils.warn("not find effectRes model of path " + effectResPath);
        return null;
    };
    /** 缓存爆金币特效预制件列表*/
    HuntSceneManager.prototype.SetAwardEffectModels = function () {
        if (null == this._awardffectPrefabDict) {
            this._awardffectPrefabDict = new Laya.WeakObject();
            var node = this._GunScene.getChildByName("Effects");
            var numChildren = node.numChildren;
            for (var index = 0; index < numChildren; index++) {
                var nd = node.getChildAt(index);
                nd.active = false;
                this._awardffectPrefabDict.set(nd.name, nd);
            }
        }
    };
    /**
       * 获取捕猎场景爆金币特效资源预制件
       * @param effectResPath 捕猎场景特效资源
       */
    HuntSceneManager.prototype.GetAwardEffectPrefab = function (effectResPath) {
        var key = effectResPath;
        if (this._awardffectPrefabDict.has(key)) {
            return this._awardffectPrefabDict.get(key);
        }
        else
            CommonUtil_1.utils.CommonUtils.warn("not find effectRes model of path " + effectResPath);
        return null;
    };
    /**
     * 实例化捕猎场景中的特效对象
     * @param effectResPath 特效资源名称
     */
    HuntSceneManager.prototype.InstantiateEffect = function (effectResPath) {
        if (null == this._effectInstanceDict)
            this._effectInstanceDict = new Laya.WeakObject();
        var cloneIns;
        var cloneArray;
        if (this._effectInstanceDict.has(effectResPath)) {
            cloneArray = this._effectInstanceDict.get(effectResPath);
            var tarray = cloneArray.filter(function (value, index, array) { return value.active == false; });
            if (null != tarray && tarray.length > 0)
                return tarray[0];
        }
        else {
            cloneArray = new Array();
        }
        cloneIns = this.CreateEffect(effectResPath, cloneArray);
        return cloneIns;
    };
    HuntSceneManager.prototype.CreateEffect = function (effectResPath, cloneArray) {
        var cloneIns;
        var prefab = this.GetEffectPrefab(effectResPath);
        if (prefab == null) {
            prefab = this.GetAwardEffectPrefab(effectResPath);
        }
        if (null == prefab)
            return;
        cloneIns = Laya.Sprite3D.instantiate(prefab, prefab.parent);
        cloneArray.push(cloneIns);
        this._effectInstanceDict.set(effectResPath, cloneArray);
        return cloneIns;
    };
    //#endregion
    //#region 锁定捕鱼
    HuntSceneManager.prototype.GetFishId = function (posX, posY) {
        //从屏幕空间生成射线
        var ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
        this._HuntSceneCamera.viewportPointToRay(new Laya.Vector2(posX, posY), ray);
        //拿到射线碰撞的物体
        var outHitInfo = new Laya.HitResult();
        this._HuntScene.physicsSimulation.rayCast(ray, outHitInfo);
        //如果碰撞到物体
        if (outHitInfo.succeeded) {
            var colLayer = outHitInfo.collider.owner;
            if (colLayer.layer == CommonConstant_1.default.Layer.Fish) {
                var fish = this.GetFishBase(outHitInfo.collider.owner);
                return fish ? fish._MFishInfo._mFishId : 0;
            }
        }
        return 0;
    };
    HuntSceneManager.prototype.GetFishPointById = function (id) {
        var script = FishController_1.default.Instance.FishObjDict[id];
        if (script != null) {
            var outPos = new Laya.Vector3();
            this._HuntSceneCamera.viewport.project(script._OwnerPos, this._HuntSceneCamera.projectionViewMatrix, outPos);
            return new Laya.Point(outPos.x, outPos.y);
        }
        return null;
    };
    /**
* 预警显示
* @param type
*/
    HuntSceneManager.prototype.warnShow = function (type) {
        this.type = type;
        if (type == 0) {
            GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.wave);
        }
        else {
            GameFacade_1.default.Instance.SoundMng.playSound(SoundNameConstant_1.default.soundHeadArr.keySoundHead, SoundNameConstant_1.default.soundKeyArr.warn);
        }
        if (this.warnCom == null) {
            GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiWarnPath.image, CommonConstant_1.default._fuiWarnPath.fui, this, this.onLoadWarning);
            Laya.Sprite3D.load(CommonConstant_1.default._warnPath_lh, Laya.Handler.create(this, function (s) {
                this.warnEffect = s;
                this._GunScene.addChild(s);
            }));
        }
        else {
            if (this.warnEffect != null) {
                if (this._GunScene.getChildByName(this.warnEffect.name) != null) {
                    this.onCloseWarn();
                }
            }
            this._GunScene.addChild(this.warnEffect);
            fairygui.GRoot.inst.addChild(this.warnCom);
            this.IconUrl();
        }
    };
    /**
     * 加载预警资源
     */
    HuntSceneManager.prototype.onLoadWarning = function () {
        this.warnCom = GameFacade_1.default.Instance.ResourceMng.getMainCom(CommonConstant_1.default._fuiWarnPath.Package, "Warning", "warningPanel");
        this.warnTran = this.warnCom.getTransition("t0");
        this.fishIconGLoader = this.warnCom.getChild("fishIconLoader").asLoader;
        this.warnGLoader = this.warnCom.getChild("warnLoader").asLoader;
        this.IconUrl();
    };
    /**
     * 预警图标
     */
    HuntSceneManager.prototype.IconUrl = function () {
        fairygui.GRoot.inst.setChildIndex(this.warnCom, -1);
        this.fishIconGLoader.icon = fairygui.UIPackage.getItemURL("Warning", "fish" + this.type);
        this.warnGLoader.icon = fairygui.UIPackage.getItemURL("Warning", "warn" + this.type);
        this.warnTran.play(Laya.Handler.create(this, this.onCloseWarn));
    };
    /**
     * 关闭预警
     */
    HuntSceneManager.prototype.onCloseWarn = function () {
        fairygui.GRoot.inst.removeChild(this.warnCom);
        this._GunScene.removeChild(this.warnEffect);
    };
    return HuntSceneManager;
}(BaseManager_1.default));
exports.default = HuntSceneManager;
},{"../Enum/EnumData":1,"../GameFacade":3,"../constant/CommonConstant":7,"../constant/SoundNameConstant":11,"../controller/BatteryController":12,"../controller/FishController":13,"../game/Bullet/BulletBase":14,"../game/Bullet/HF3DBulletClasses":16,"../game/Fish/FishBase":18,"../game/Fish/HF3DFishClasses":21,"../utils/CommonUtil":86,"./BaseManager":58}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseManager_1 = require("./BaseManager");
var GameFacade_1 = require("../GameFacade");
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var CommonConstant_1 = require("../constant/CommonConstant");
/**
* name
*/
var ResourceManger = /** @class */ (function (_super) {
    __extends(ResourceManger, _super);
    function ResourceManger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceManger.prototype.LoadAssets2D = function (resUrl, callBack) {
        Laya.loader.load(resUrl, Laya.Handler.create(this, callBack));
    };
    //释放2d资源     assetsUrl：图集资源路径
    ResourceManger.prototype.ReleaseAll2D = function (assetsUrl) {
        Laya.loader.clearRes(assetsUrl);
    };
    /**
     * 加载UI资源
     * @param image
     * @param fui
     * @param load
     */
    ResourceManger.prototype.loadUI = function (image, fui, call, load) {
        Laya.loader.load([
            { url: image, type: Loader.IMAGE },
            { url: fui, type: Loader.BUFFER },
        ], Handler.create(call, load));
    };
    /**
     * 加载主面板
     * @param pack
     * @param panel
     */
    ResourceManger.prototype.getMainCom = function (pack, packName, panel) {
        fairygui.UIPackage.addPackage(pack);
        var mainCom = null;
        console.log("packName");
        console.log(packName);
        console.log(panel);
        mainCom = fairygui.UIPackage.createObject(packName, panel).asCom;
        mainCom.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade_1.default.Instance.SceneMng.AddFUI(mainCom);
        return mainCom;
    };
    /**
     * 移除UI包
     */
    ResourceManger.prototype.removeUIPackage = function (pack) {
        fairygui.UIPackage.removePackage(pack);
    };
    /**
     * 从对象池中获得对象 没有该对象 自动创建对象池
     * @param s
     * @param cla
     */
    ResourceManger.prototype.getPoolObject = function (s, cla) {
        Laya.Pool.getItemByClass(s, cla);
    };
    /**
     * 回收到对象池中
     * @param obj
     * @param s
     */
    ResourceManger.prototype.removePoolObject = function (obj, s) {
        Laya.stage.removeChild(obj);
        Laya.Pool.recover(s, obj);
    };
    /**
     * 预加载资源
     * @param resUrl 资源路劲
     * @param loadResCallback 加载完成的回调
     */
    ResourceManger.prototype.PreloadingRes = function (resUrl, resType, loadResCallback) {
        Laya.loader.load([{ url: resUrl, type: resType }], Laya.Handler.create(this, function (url) {
            var loadedRes = Laya.loader.getRes(url);
            loadResCallback(loadedRes);
        }, [resUrl]));
    };
    ResourceManger.prototype.LoadAssets3D = function (resUrl, loadResCallback, param) {
        if (param === void 0) { param = null; }
        Laya.Scene3D.load(resUrl, Laya.Handler.create(this, function (res) {
            loadResCallback(res, param);
        }));
    };
    //加载模型接口（预加载）
    ResourceManger.prototype.LoadSprite3D = function (resUrl, loadResCallback, param) {
        if (param === void 0) { param = null; }
        Laya.Sprite3D.load(resUrl, Laya.Handler.create(this, function (res) {
            loadResCallback(res, param);
        }));
    };
    //实例化缓存对象
    ResourceManger.prototype.CloneSprite3D = function (Sp3D, parent) {
        var s3D = Laya.Sprite3D.instantiate(Sp3D, parent);
        s3D.transform.localPosition = new Laya.Vector3(0, 0, 0);
        s3D.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
        s3D.transform.localScale = Laya.Vector3.ONE;
        return s3D;
    };
    /**
     * 释放场景所有资源     assetsUrl：场景的json文件路径
     * @param assetsUrl
     */
    ResourceManger.prototype.ReleaseAll3D = function (assetsUrl) {
        //加载盘释放的资源配置表
        Laya.loader.load([{ url: assetsUrl, type: Laya.Loader.JSON }], Laya.Handler.create(this, this.OnAssetsOK, [assetsUrl]));
    };
    ResourceManger.prototype.OnAssetsOK = function (assetsUrl) {
        //获取加载的数据（Json数组转化成数组）
        var arr = Laya.loader.getRes(assetsUrl);
        for (var i = arr.length - 1; i > -1; i--) {
            //根据资源路径获取资源（Resource为材质、贴图、网格等的基类）
            var resource = Laya.loader.getRes(arr[i].url);
            //资源释放
            if (resource) {
                resource.destroy();
            }
        }
    };
    /**
     * 加载新场景
     * @param newfuiArr
     * @param newLs
     * @param callBack
     */
    ResourceManger.prototype.LoadNewScene = function (newfuiArr, newLs, callBack) {
        var self = this;
        //GameFacade.Instance.SceneMng.ClearBeforUI(); //清理上个scene的ui
        //加载2d资源  Laya.loader.load
        //let loading:LoadingPanel = new LoadingPanel();
        var loading = GameFacade_1.default.Instance.SceneMng.Create(2 /* LoadingPanel */);
        loading.SetContent("加载2d资源 ");
        Laya.loader.load(newfuiArr, Laya.Handler.create(this, function () {
            Load3DRes();
        }), Laya.Handler.create(this, function (value) {
            if (null != loading) {
                loading.SetProgress(value);
            }
        }));
        //预加载3d资源  Laya.loader.create
        function Load3DRes() {
            loading.SetContent("加载3d资源 ");
            Laya.loader.create(newLs, Laya.Handler.create(this, function (sc) {
                Laya.loader.create(CommonConstant_1.default._gunScenePath, Laya.Handler.create(this, function () {
                    GameFacade_1.default.Instance.SceneMng.CloseAndRemove(2 /* LoadingPanel */);
                    callBack(sc);
                }), null);
            }), Laya.Handler.create(this, function (value) {
                if (null != loading) {
                    loading.SetProgress(value);
                }
            }), null);
        }
    };
    /**
     * 加载贴图资源
     */
    ResourceManger.prototype.LoadTexture2D = function (path, callBack) {
        Laya.Texture2D.load("unityRes/Texture/" + path, Laya.Handler.create(this, function (t) {
            callBack(t);
        }));
    };
    return ResourceManger;
}(BaseManager_1.default));
exports.default = ResourceManger;
},{"../GameFacade":3,"../constant/CommonConstant":7,"./BaseManager":58}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingPanel_1 = require("../game/Panel/LoadingPanel");
var CommonConstant_1 = require("../constant/CommonConstant");
var GameFacade_1 = require("../GameFacade");
var ReconnecttingTip_1 = require("../game/Panel/ReconnecttingTip");
var HuntPanel_1 = require("../game/Panel/HuntPanel");
var HallPanel_1 = require("../game/Panel/HallPanel");
var AutoAttackPanel_1 = require("../game/Panel/AutoAttackPanel");
var Marquee_1 = require("../game/Login/Marquee/Marquee");
var PromptPanel_1 = require("../game/Panel/PromptPanel");
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        /** 是否禁止免转按钮*/
        this.bProhibitWalletBtn = false; //有弹窗时禁止免转按钮
    }
    SceneManager.prototype.init = function () {
        this.PanelDic = new Laya.WeakObject();
        this.FUILayer = new Laya.Sprite();
        this.PanelLayer = new Laya.Sprite();
        Laya.stage.addChild(this.PanelLayer);
        Laya.stage.addChild(this.FUILayer);
        this.FUILayer.addChild(fairygui.GRoot.inst.displayObject);
    };
    SceneManager.prototype.AddFUI = function (fui) {
        fairygui.GRoot.inst.addChild(fui);
    };
    SceneManager.prototype.RemoveFUI = function (fui) {
        fui.removeFromParent();
        fui.dispose();
    };
    SceneManager.prototype.GetPanel = function (id) {
        var panel = null;
        if (this.PanelDic.has(id)) {
            panel = this.PanelDic.get(id);
        }
        else {
            switch (id) {
                case 0 /* HallPanel */:
                    panel = new HallPanel_1.default(id);
                    break;
                case 1 /* HuntPanel */:
                    panel = new HuntPanel_1.default(id);
                    break;
                case 2 /* LoadingPanel */:
                    panel = new LoadingPanel_1.default(id);
                    break;
                case 3 /* PromptPanel */:
                    panel = new PromptPanel_1.default(id);
                    break;
                case 4 /* Reconnectting */:
                    panel = new ReconnecttingTip_1.default(id);
                    break;
                case 10 /* AutoAttackPanel */:
                    panel = new AutoAttackPanel_1.default(id);
                    break;
                default:
                    break;
            }
            this.PanelDic.set(id, panel);
        }
        return panel;
    };
    /**
     * 1.这里panel的添加到PanelLayer层暂时是没有显示的，显示的ui是panel内部的fui
     * 2.new一个panel的同时，在panel内部new fui并添加在fui层
     * */
    SceneManager.prototype.Create = function (id) {
        var panel = this.GetPanel(id);
        this.PanelLayer.addChild(panel);
        return panel;
    };
    SceneManager.prototype.CloseAndRemove = function (id, bRemove) {
        if (bRemove === void 0) { bRemove = true; }
        if (!this.PanelDic.has(id))
            return null;
        var panel = this.GetPanel(id);
        panel.Close(bRemove);
    };
    SceneManager.prototype.Remove = function (id) {
        if (!this.PanelDic.has(id))
            return null;
        this.bProhibitWalletBtn = false;
        var panel = this.GetPanel(id);
        this.PanelDic.del(id);
        panel.removeSelf();
        panel.destroy(true);
    };
    SceneManager.prototype.GetPanelById = function (id) {
        if (this.PanelDic.has(id)) {
            var panel = this.PanelDic.get(id);
            return panel;
        }
        return null;
    };
    SceneManager.prototype.EnterHuntScene = function () {
        var hallFuiArr = [{ url: CommonConstant_1.default._fuiHunterUIPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant_1.default._fuiHunterUIPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant_1.default._hunterBgPath, type: Laya.Loader.IMAGE },
            { url: CommonConstant_1.default._fuiCommonUIPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant_1.default._fuiCommonUIPath.fui, type: Laya.Loader.BUFFER }];
        //清理上一个场景的ui、缓存
        var id = 0 /* HallPanel */;
        if (this.PanelDic.has(id)) {
            var panel = this.PanelDic.get(id);
            panel.ExitHallScene();
            Marquee_1.default.Instance.disposeMarquee();
            this.CloseAndRemove(id);
        }
        GameFacade_1.default.Instance.ResourceMng.LoadNewScene(hallFuiArr, CommonConstant_1.default._huntScenePath, Loaded);
        function Loaded(scene) {
            var panel = GameFacade_1.default.Instance.SceneMng.Create(1 /* HuntPanel */);
            panel.EnterAfter(scene);
            // 加载完有黑屏
            // Laya.loader.create(CommonConstant._gunScenePath,
            //     Laya.Handler.create(this, function (sc: Laya.Scene3D): void {
            //         var panel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.HuntPanel) as HuntPanel;
            //          panel.EnterAfter(scene);
            //     }),
            // null,);
        }
    };
    SceneManager.prototype.EnterHallScene = function (callBack) {
        var hallFuiArr = [{ url: CommonConstant_1.default._fuiHallPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant_1.default._fuiHallPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant_1.default._fuiHallUIPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant_1.default._fuiHallUIPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant_1.default._fuiCommonUIPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant_1.default._fuiCommonUIPath.fui, type: Laya.Loader.BUFFER }];
        var id = 1 /* HuntPanel */;
        if (this.PanelDic.has(id)) {
            var panel = this.PanelDic.get(id);
            panel.ExitHuntScene();
            Marquee_1.default.Instance.disposeMarquee();
            this.CloseAndRemove(id);
        }
        GameFacade_1.default.Instance.ResourceMng.LoadNewScene(hallFuiArr, CommonConstant_1.default._hallPath_ls, Loaded);
        function Loaded(scene) {
            var panel = GameFacade_1.default.Instance.SceneMng.Create(0 /* HallPanel */);
            panel.EnterAfter(scene);
            callBack();
        }
    };
    return SceneManager;
}());
exports.default = SceneManager;
},{"../GameFacade":3,"../constant/CommonConstant":7,"../game/Login/Marquee/Marquee":32,"../game/Panel/AutoAttackPanel":34,"../game/Panel/HallPanel":38,"../game/Panel/HuntPanel":41,"../game/Panel/LoadingPanel":45,"../game/Panel/PromptPanel":49,"../game/Panel/ReconnecttingTip":51}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("./../GameFacade");
var SocketServer_1 = require("./../net/SocketServer");
var GameEvent_1 = require("./../constant/GameEvent");
var ProtoBuf_1 = require("../net/ProtoBuf");
var NetLogin_1 = require("../net/ProtoHander/NetLogin");
var NetJpPool_1 = require("../net/ProtoHander/NetJpPool");
var BaseManager_1 = require("./BaseManager");
var NetWallet_1 = require("../net/ProtoHander/NetWallet");
var NetRanking_1 = require("../net/ProtoHander/NetRanking");
var NetRoom_1 = require("../net/ProtoHander/NetRoom");
var CommonUtil_1 = require("../utils/CommonUtil");
var NetWanners_1 = require("../net/ProtoHander/NetWanners");
var NetRoleInfo_1 = require("../net/ProtoHander/NetRoleInfo");
var NetBroadcast_1 = require("../net/ProtoHander/NetBroadcast");
var NetAct_1 = require("../net/ProtoHander/NetAct");
var NetAward_1 = require("../net/ProtoHander/NetAward");
var CommonConstant_1 = require("../constant/CommonConstant");
var BatteryController_1 = require("../controller/BatteryController");
var SocketManager = /** @class */ (function (_super) {
    __extends(SocketManager, _super);
    function SocketManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clientHeartBeatCount = 0;
        _this.serverHeartBeatCount = 0;
        return _this;
    }
    SocketManager.prototype.Init = function () {
        this.socketDict = new Laya.WeakObject();
        this.cmdDict = new Laya.WeakObject();
        this.addHandleByCMD(NetCodeMsg.cmd.msg_base, BaseMsg.c_cmd.heartbeat_resp, BaseMsg.heartbeat_resp, Laya.Handler.create(this, this.receivesHeartBeatResp, null, false));
        //所有协议业务逻辑处理类的初始化在这里添加
        NetLogin_1.default.Instance.Init();
        NetRoom_1.default.Instance.Init();
        NetJpPool_1.default.Instance.Init();
        NetWallet_1.default.Instance.Init();
        NetRanking_1.default.Instance.Init();
        NetWanners_1.default.Instance.Init();
        NetRoleInfo_1.default.Instance.Init();
        NetBroadcast_1.default.Instance.Init();
        NetAct_1.default.Instance.Init();
        NetAward_1.default.Instance.Init();
    };
    /** 注册监听socket状态的事件（连接、断开）*/
    SocketManager.prototype.AddEvent = function () {
        GameFacade_1.default.Instance.EventMng.add(GameEvent_1.default.CONNECT, this, this.connectGame);
        GameFacade_1.default.Instance.EventMng.add(GameEvent_1.default.SOCKET_CLOSE, this, this.reConnect);
    };
    SocketManager.prototype.addHandleByCMD = function (cmd, ccmd, data, callBack) {
        this.addHandle(ProtoBuf_1.default.build(cmd, ccmd), data, callBack);
    };
    /**添加网络事件回调**/
    SocketManager.prototype.addHandle = function (cmd, data, callBack) {
        this.cmdDict.set(cmd, callBack);
        ProtoBuf_1.default.registerCMD(cmd, data);
    };
    /**网络事件分发**/
    SocketManager.prototype.dispatchMessage = function (cmd, data) {
        var handle = this.cmdDict.get(cmd);
        if (handle) {
            handle.runWith([cmd, data]);
            if (cmd != 0 && cmd != 1) {
                var msgCode = ProtoBuf_1.default.Resolve(cmd);
                CommonUtil_1.utils.CommonUtils.log("\u534F\u8BAE cmd=" + msgCode[0] + ",ccmd=" + msgCode[1] + "," + " data=", data);
            }
        }
        else {
            {
                var msgCode = ProtoBuf_1.default.Resolve(cmd);
                CommonUtil_1.utils.CommonUtils.log("\u534F\u8BAE cmd=" + msgCode[0] + ",ccmd=" + msgCode[1] + " \u672A\u5904\u7406");
            }
        }
    };
    /**连接socket**/
    SocketManager.prototype.connenct = function (ip, port, type, token) {
        var socket = this.socketDict.get(type);
        if (socket == null) {
            socket = new SocketServer_1.default(type);
            this.socketDict.set(type, socket);
        }
        socket.connect(ip, port, token);
    };
    /**
     * 发送消息
     * @param cmd 消息协议大头（取二进制数据的前7位）
     * @param ccmd 消息协议小头（取二进制数据的前8到16位）
     * @param data 协议数据类
     * @param param 数据参数（暂未使用）
     * @param type socket类型
     */
    SocketManager.prototype.sendGameData = function (cmd, ccmd, data, param, type) {
        if (param === void 0) { param = null; }
        if (type === void 0) { type = 0 /* GAME */; }
        var socket = this.socketDict.get(type);
        if (socket) {
            var headCmd = ProtoBuf_1.default.build(cmd, ccmd);
            socket.send(headCmd, data);
        }
    };
    /**
     * 发送请求登陆
     */
    SocketManager.prototype.sendLoginReq = function (code, token) {
        var loginReq = new LoginMsg.login_req();
        NetLogin_1.default.Instance._LoginModeCode = code;
        loginReq.code = code;
        loginReq.token = token;
        loginReq.lang = GameFacade_1.default.Instance.GameMng.lang;
        this.sendGameData(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.login_req, loginReq);
    };
    /**
     * 发送心跳包
     * **/
    SocketManager.prototype.sendBeatHeartRes = function () {
        //    utils.CommonUtils.log(`clientHeartBeatCount = ${this.clientHeartBeatCount} , serverHeartBeatCount = ${this.serverHeartBeatCount}`);
        if (this.clientHeartBeatCount - this.serverHeartBeatCount > 20) //断线了
         {
            CommonUtil_1.utils.CommonUtils.log("---心跳超时---");
            this.closeSocket();
        }
        else {
            var msg = new BaseMsg.heartbeat_req();
            msg.id = this.clientHeartBeatCount;
            this.clientHeartBeatCount++;
            this.sendGameData(NetCodeMsg.cmd.msg_base, BaseMsg.c_cmd.heartbeat_req, msg);
        }
    };
    /**
     * 处理心跳包
     * @param clientData
     * @param msgID
     * @param pbData
     */
    SocketManager.prototype.receivesHeartBeatResp = function (cmd, pbData) {
        this.serverHeartBeatCount = pbData.id;
    };
    /**
     * 连接成功
     */
    SocketManager.prototype.connectGame = function () {
        CommonUtil_1.utils.CommonUtils.log("连接成功开始登陆 connectGame");
        /**开始执行心跳包 */
        Laya.timer.loop(1000, this, this.sendBeatHeartRes);
        switch (NetLogin_1.default.Instance._LoginModeCode) {
            //正常登录
            case LoginMsg.login_mode_code.normal: {
                if (GameFacade_1.default.Instance.GameMng.isLoacalDev) {
                    NetLogin_1.default.Instance.LoginAccountReq(GameFacade_1.default.Instance.GameMng.token, "zhanghao", GameFacade_1.default.Instance.GameMng.lang);
                }
                else {
                    this.sendLoginReq(LoginMsg.login_mode_code.normal, GameFacade_1.default.Instance.GameMng.token);
                }
                break;
            }
            //重连登录
            case LoginMsg.login_mode_code.reconnect: {
                GameFacade_1.default.Instance.SceneMng.CloseAndRemove(4 /* Reconnectting */);
                if (GameFacade_1.default.Instance.GameMng.isLoacalDev) {
                    NetLogin_1.default.Instance.LoginAccountReq(GameFacade_1.default.Instance.GameMng.token, "zhanghao", GameFacade_1.default.Instance.GameMng.lang);
                }
                else {
                    this.sendLoginReq(LoginMsg.login_mode_code.reconnect, GameFacade_1.default.Instance.GameMng.token);
                }
                break;
            }
        }
    };
    /**
     * 重连
     */
    SocketManager.prototype.reConnect = function () {
        NetLogin_1.default.Instance._LoginModeCode = LoginMsg.login_mode_code.reconnect;
        if (!this.connectCountOut(0 /* GAME */)) {
            //重连动画
            CommonUtil_1.utils.CommonUtils.log("自动重连 ReconnecttingTip");
            GameFacade_1.default.Instance.SceneMng.Create(4 /* Reconnectting */);
            var gameManager = GameFacade_1.default.Instance.GameMng;
            this.connenct(gameManager.serverIp, gameManager.serverPort, 0 /* GAME */, gameManager.token);
        }
        else {
            CommonUtil_1.utils.CommonUtils.log("重连超时 reConnect time out!!!");
            this.closeSocket();
            //重连弹框
            GameFacade_1.default.Instance.SceneMng.CloseAndRemove(4 /* Reconnectting */);
            var promptPanel = GameFacade_1.default.Instance.SceneMng.Create(3 /* PromptPanel */);
            promptPanel.InitData(0 /* Reconnect */, CommonConstant_1.default._PromptContent.Reconnect);
            BatteryController_1.default.Instance.StopLockAttack();
            BatteryController_1.default.Instance.StopAutoAttack();
        }
    };
    /**重连接超时**/
    SocketManager.prototype.connectCountOut = function (type) {
        var socket = this.socketDict.get(type);
        return socket.connectCountOut();
    };
    /**关闭socketl连接**/
    SocketManager.prototype.closeSocket = function (type) {
        if (type === void 0) { type = 0 /* GAME */; }
        var socket = this.socketDict.get(type);
        if (socket) {
            socket.close();
        }
        Laya.timer.clear(this, this.sendBeatHeartRes); //停止心跳
    };
    /**
     * 刷新游戏
     */
    SocketManager.prototype.refreshGame = function () {
        if (CommonUtil_1.utils.CommonUtils.isApp()) {
            window.close(); //关闭游戏
        }
        else {
            history.go(0); //刷新网页
        }
    };
    return SocketManager;
}(BaseManager_1.default));
exports.default = SocketManager;
},{"../constant/CommonConstant":7,"../controller/BatteryController":12,"../net/ProtoBuf":72,"../net/ProtoHander/NetAct":74,"../net/ProtoHander/NetAward":75,"../net/ProtoHander/NetBroadcast":76,"../net/ProtoHander/NetJpPool":77,"../net/ProtoHander/NetLogin":78,"../net/ProtoHander/NetRanking":79,"../net/ProtoHander/NetRoleInfo":80,"../net/ProtoHander/NetRoom":81,"../net/ProtoHander/NetWallet":82,"../net/ProtoHander/NetWanners":83,"../utils/CommonUtil":86,"./../GameFacade":3,"./../constant/GameEvent":9,"./../net/SocketServer":84,"./BaseManager":58}],66:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundManager = Laya.SoundManager;
var Handler = Laya.Handler;
var SoundNameConstant_1 = require("../constant/SoundNameConstant");
var GameConfig_1 = require("../GameConfig");
var SoundsManager = /** @class */ (function () {
    function SoundsManager() {
        var _this = this;
        var url = "configfile/soundConfig.json";
        Laya.loader.load(url, Handler.create(this, function () {
            this._soundConfig = Laya.loader.getRes(url);
        }));
        SoundManager.autoStopMusic = true;
        //Laya.Browser.onIPhone||
        if (Laya.Browser.onIOS || Laya.Browser.onIPhone || Laya.Browser.onIPad) {
            var musicButton = new Laya.Sprite();
            musicButton.x = 0;
            musicButton.y = 0;
            musicButton.size(GameConfig_1.default.width, GameConfig_1.default.height);
            musicButton.alpha = 0;
            Laya.stage.addChild(musicButton);
            musicButton.on(Laya.Event.CLICK, this, function () { _this.onClickIOS(musicButton); });
        }
    }
    /**
     * 在3D场景中 ios 适配声音
     * @param obj
     */
    SoundsManager.prototype.onClickIOS = function (obj) {
        console.log("ios");
        Laya.stage.removeChild(obj);
        obj.onDisable();
        SoundManager.playMusic("sounds/SceneSound/HallScene.mp3", 0);
    };
    /**
     * 声音配置
     */
    SoundsManager.prototype.getSoundCofig = function () {
        return this._soundConfig;
    };
    /**
     *
     * @param v 设置背景音乐
     */
    SoundsManager.prototype.setMusicVolume = function (v) {
        // if(v==0){
        //     SoundManager.musicMuted=true;
        // }
        // else{
        //     SoundManager.musicMuted=false;
        // }
        SoundManager.setMusicVolume(v / 100);
    };
    /**
     *
     * @param v 设置音效
     */
    SoundsManager.prototype.setSoundVolume = function (v) {
        if (v == 0) {
            SoundManager.soundMuted = true;
        }
        else {
            SoundManager.soundMuted = false;
        }
        SoundManager.setSoundVolume(v / 100);
    };
    /**
     * 获得背景音乐的声音大小
     */
    SoundsManager.prototype.getMusicVolume = function () {
        return SoundManager.musicVolume * 100;
    };
    /**
     * 获得音效的声音大小
     */
    SoundsManager.prototype.getSoundVolume = function () {
        return SoundManager.soundVolume * 100;
    };
    /**
     *
     * @param str 背景音乐名称
     */
    SoundsManager.prototype.playMusic = function (str) {
        SoundManager.playMusic("sounds/SceneSound/" + str + ".mp3", 0);
    };
    /**
     *
     * @param roomType 房间类型
     */
    SoundsManager.prototype.playMusicRoom = function (roomType) {
        switch (roomType) {
            case 1:
                SoundManager.playMusic("sounds/SceneSound/" + SoundNameConstant_1.default.soundBgArr.playBgMusic1 + ".mp3", 0);
                break;
            case 2:
                SoundManager.playMusic("sounds/SceneSound/" + SoundNameConstant_1.default.soundBgArr.playBgMusic2 + ".mp3", 0);
                break;
            case 3:
                SoundManager.playMusic("sounds/SceneSound/" + SoundNameConstant_1.default.soundBgArr.playBgMusic3 + ".mp3", 0);
                break;
            default:
                break;
        }
    };
    /**
     *
     * @param head 是按钮还是鱼
     * @param str 对应的音效
     */
    SoundsManager.prototype.playSound = function (head, str) {
        var _this = this;
        SoundManager.playSound(head + str + ".wav", 1, new Handler(this, function () { _this.onComplete(head + str); }));
    };
    /**
     *
     * @param type 鱼对应的声音列表
     */
    SoundsManager.prototype.fishTypeToSoundNum = function (type) {
        //if (type == 32) { type = 27 };
        //if (type > 26 && type < 32) { type = type % 26 };
        return this._soundConfig[type - 1]["soundid"];
    };
    /**
     *
     * @param str 播放完成的那个音效
     */
    SoundsManager.prototype.onComplete = function (str) {
        SoundManager.destroySound(str);
    };
    /**
     * 停止音乐
     */
    SoundsManager.prototype.stopMusic = function () {
        SoundManager.stopMusic();
    };
    /**
     * 停止音效
     */
    SoundsManager.prototype.stopSound = function () {
        SoundManager.stopAllSound();
    };
    SoundsManager.prototype.stopAll = function () {
        SoundManager.stopAll();
    };
    return SoundsManager;
}());
exports.SoundsManager = SoundsManager;
},{"../GameConfig":2,"../constant/SoundNameConstant":11}],67:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseManager_1 = require("./BaseManager");
var GameFacade_1 = require("../GameFacade");
var CommonConstant_1 = require("../constant/CommonConstant");
var CommonUtil_1 = require("../utils/CommonUtil");
var TipType;
(function (TipType) {
    TipType[TipType["QUITGAME"] = 0] = "QUITGAME";
    TipType[TipType["REFRESHGAME"] = 1] = "REFRESHGAME";
    TipType[TipType["YESNOCHOICE"] = 2] = "YESNOCHOICE";
    TipType[TipType["ONECLOSE"] = 3] = "ONECLOSE";
    TipType[TipType["STOPAUTOHUNTFISH"] = 4] = "STOPAUTOHUNTFISH";
    TipType[TipType["FLOATTIP"] = 5] = "FLOATTIP";
    TipType[TipType["FLOATTIPDELAY"] = 6] = "FLOATTIPDELAY";
})(TipType = exports.TipType || (exports.TipType = {}));
var TipManager = /** @class */ (function (_super) {
    __extends(TipManager, _super);
    function TipManager() {
        var _this = _super.call(this) || this;
        _this.isHaveText = false;
        _this.texArray = new Array();
        return _this;
    }
    ;
    TipManager.prototype.Init = function () {
        GameFacade_1.default.Instance.ResourceMng.loadUI(CommonConstant_1.default._fuiTipPath.image, CommonConstant_1.default._fuiTipPath.fui, this, this.onLoadPublic);
    };
    TipManager.prototype.onLoadPublic = function () {
        fairygui.UIPackage.addPackage(CommonConstant_1.default._fuiTipPath.Package);
    };
    /**
     * 创建提示框
     * @param str 提示内容
     * @param type 提示类型
     */
    TipManager.prototype.createTip = function (str, type, call) {
        if (call === void 0) { call = null; }
        switch (type) {
            case TipType.YESNOCHOICE:
                this.currTip = this.yesAndNoCreateTip(str, call);
                break;
            case TipType.QUITGAME:
                this.currTip = this.onlyYesCreateTip(str);
                this.currTip.getChild("yes").onClick(this, this.quitGame);
                break;
            case TipType.REFRESHGAME:
                this.currTip = this.onlyYesCreateTip(str);
                this.currTip.getChild("yes").onClick(this, this.onClose);
                break;
            case TipType.ONECLOSE:
                this.currTip = this.onlyYesCreateTip(str);
                this.currTip.getChild("yes").onClick(this, this.onClose);
                break;
            case TipType.STOPAUTOHUNTFISH:
                this.currTip = this.onlyYesCreateTip(str);
                this.currTip.getChild("yes").onClick(this, this.onClose);
                break;
            case TipType.FLOATTIP:
                this.floatTip(str);
                break;
            case TipType.FLOATTIPDELAY:
                this.floatTipDelay(str);
                break;
            default:
                break;
        }
    };
    /**
     * 只有一个yes
     */
    TipManager.prototype.onlyYesCreateTip = function (str) {
        var tip1 = fairygui.UIPackage.createObject("Public", "tip1").asCom;
        tip1.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade_1.default.Instance.SceneMng.AddFUI(tip1);
        var c = tip1.getController("c1");
        c.setSelectedIndex(1);
        tip1.getChild("text").text = str;
        tip1.getChild("yes").onClick(this, this.onClose);
        return tip1;
    };
    /**
     * 有yes和no
     */
    TipManager.prototype.yesAndNoCreateTip = function (str, call) {
        var _this = this;
        var tip1 = fairygui.UIPackage.createObject("Public", "tip1").asCom;
        tip1.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade_1.default.Instance.SceneMng.AddFUI(tip1);
        tip1.getChild("text").text = str;
        tip1.getChild("yes").onClick(this, function () { _this.callBack(call); });
        tip1.getChild("no").onClick(this, this.onClose);
        return tip1;
    };
    /**
     * 反馈
     */
    TipManager.prototype.callBack = function (call) {
        this.onClose();
        return call(true);
    };
    /**
     * 飘字延迟型
     */
    TipManager.prototype.floatTipDelay = function (str) {
        var _this = this;
        if (this.isHaveText) {
            this.texArray.push(str);
        }
        else {
            this.isHaveText = true;
            var tipFloat = fairygui.UIPackage.createObject("Public", "tipFloat").asCom;
            tipFloat.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            GameFacade_1.default.Instance.SceneMng.AddFUI(tipFloat);
            tipFloat.getChild("text").text = str;
            var t = tipFloat.getTransition("t0");
            t.play(new Laya.Handler(this, function () {
                _this.isHaveText = false;
                if (_this.texArray.length > 0) {
                    _this.floatTip(_this.texArray.shift());
                }
                else {
                    GameFacade_1.default.Instance.SceneMng.RemoveFUI(tipFloat);
                }
            }));
        }
    };
    /**
     * 飘字不延迟
     */
    TipManager.prototype.floatTip = function (str) {
        var tipFloat = fairygui.UIPackage.createObject("Public", "tipFloat").asCom;
        tipFloat.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade_1.default.Instance.SceneMng.AddFUI(tipFloat);
        tipFloat.getChild("text").text = str;
        var t = tipFloat.getTransition("t0");
        t.play(new Laya.Handler(this, function () {
            GameFacade_1.default.Instance.SceneMng.RemoveFUI(tipFloat);
        }));
    };
    /**
     * 退出游戏 返回大厅
     */
    TipManager.prototype.quitGame = function () {
        this.onClose();
        window.close();
    };
    /**
     * 刷新游戏
     */
    TipManager.prototype.refeshGame = function () {
        window.open(CommonUtil_1.utils.CommonUtils.getLocalHref());
        this.onClose();
    };
    /**
     * 关闭弹框
     */
    TipManager.prototype.onClose = function () {
        GameFacade_1.default.Instance.SceneMng.RemoveFUI(this.currTip);
    };
    return TipManager;
}(BaseManager_1.default));
exports.default = TipManager;
},{"../GameFacade":3,"../constant/CommonConstant":7,"../utils/CommonUtil":86,"./BaseManager":58}],68:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//免转钱包管理类
var GameFacade_1 = require("./../GameFacade");
var CommonUtil_1 = require("./../utils/CommonUtil");
var BaseManager_1 = require("./BaseManager");
var NetLogin_1 = require("../net/ProtoHander/NetLogin");
var NetWallet_1 = require("../net/ProtoHander/NetWallet");
var LanguageConstant_1 = require("../constant/LanguageConstant");
var TipManager_1 = require("./TipManager");
var WalletPanel_1 = require("../game/Panel/WalletPanel");
var EventNetResponse_1 = require("../net/ProtoHander/EventNetResponse");
var WalletManager = /** @class */ (function (_super) {
    __extends(WalletManager, _super);
    function WalletManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isHavePanel = false;
        /**加了多少钱 */
        _this.addValue = null;
        /**fg钱包余额 */
        _this.fgWalletValue = null;
        _this.addToValue = null;
        _this.walletPanel = null;
        return _this;
        // /**
        //  * 等待看是否能加上钱
        //  */
        // private waitChipIsAdd(t: number) {
        //     //var cannon = this.GetBatteryByUid(NetLogin.Instance.RoleInfo.roleId as number);
        //     let jettonShow = utils.CommonUtils.numberFixed(BatteryController.Instance.selfCannon.Data.jetton_show as number);
        //     GameFacade.Instance.WalletMng.AutoChip(jettonShow);
        //     this.isWaitAddMoney = true;
        //    /// BatteryController.Instance.m_bshoot = true;
        // }
    }
    WalletManager.prototype.Init = function () {
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.MainWalletResp, this, this.mainWalletResp);
        GameFacade_1.default.Instance.EventMng.add(EventNetResponse_1.default.WalletResp, this, this.walletResp);
    };
    WalletManager.prototype.UnInit = function () {
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.WalletResp, this, this.walletResp);
        GameFacade_1.default.Instance.EventMng.remove(EventNetResponse_1.default.MainWalletResp, this, this.mainWalletResp);
    };
    /**
     * 加钱请求返回
     * @param data
     */
    WalletManager.prototype.walletResp = function (data) {
        CommonUtil_1.utils.CommonUtils.log("加钱  walletResp pbData = ", data);
        var code = WalletMsg.msg_wallet_code;
        switch (data.code) {
            case code.SUCCESS:
                this.addValue = this.addToValue - this.fgWalletValue;
                if (this.addValue == 0)
                    return;
                GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.autoAddWallet.replace("{0}", (CommonUtil_1.utils.CommonUtils.numberFixed(this.addValue)).toFixed(2)), TipManager_1.TipType.FLOATTIP);
                break;
            case code.FAIL:
                GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.reqFail, TipManager_1.TipType.FLOATTIP);
                break;
            case code.FREQUENT:
                GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.reqTooFast, TipManager_1.TipType.FLOATTIP);
                break;
            case code.FREQUENTY:
                GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.conServer, TipManager_1.TipType.FLOATTIP);
                break;
            default:
                break;
        }
    };
    WalletManager.prototype.mainWalletResp = function (data) {
        // this.walletPanel.certerWalletValue = Number(data.chips);
        // this.walletPanel.isAutoServer = GameFacade.Instance.WalletMng.changeNumToBool(data.auto_wallet);
        // this.walletPanel.initData();
        CommonUtil_1.utils.CommonUtils.log("钱包弹框请求返回 mainWalletResp pbData = ", data);
        var enumCode = WalletMsg.msg_wallet_code;
        switch (data.code) {
            case enumCode.SUCCESS:
                {
                    //manager.SceneManager.instance.DialogLayer.addChild(new game.MoneySupplyDialog(data.chips));
                    GameFacade_1.default.Instance.WalletMng.ShowWallet(data);
                    break;
                }
            case enumCode.FAIL:
                {
                    GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.reqFail, TipManager_1.TipType.FLOATTIP);
                    break;
                }
            case enumCode.FREQUENTY:
                {
                    GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.conServer, TipManager_1.TipType.FLOATTIP);
                    break;
                }
            case enumCode.FREQUENT:
                {
                    GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.reqTooFast, TipManager_1.TipType.FLOATTIP);
                    break;
                }
            // case enumCode.NOT_ENOUGH:{
            // 	manager.SceneManager.instance.DialogLayer.addChild(new game.TipDialog(proxys.LanguageProxy.instance.getTextById(20007)/*中心钱包余额不足*/, 300));
            // 	break;
            // }
        }
    };
    /**
     * 请求显示免转的面板(即创建免转面板)
     */
    WalletManager.prototype.mainWalletReq = function () {
        NetWallet_1.default.Instance.mainWalletReq();
    };
    WalletManager.prototype.setAutoState = function (isAuto) {
        if (isAuto) {
            Laya.LocalStorage.setItem("isAutoLock", "on");
        }
        else {
            Laya.LocalStorage.setItem("isAutoLock", "off");
        }
    };
    WalletManager.prototype.getAutoState = function () {
        return Laya.LocalStorage.getItem("isAutoLock") == "on";
    };
    WalletManager.prototype.setFgWalletValue = function (value) {
        this.fgWalletValue = value;
    };
    // public setAddValue(value:number){
    //     this.addValue = value;
    // }
    WalletManager.prototype.AddToValue = function (addToValue) {
        this.addToValue = addToValue;
    };
    /**
     * 关闭面板
     */
    WalletManager.prototype.onCloseWalltPanel = function () {
        this.walletPanel = null;
    };
    // /**
    //  * 获取玩家账号
    //  */
    // public getPlayAccount(): string {
    //     return NetLogin.Instance.RoleInfo.nickname;
    // }
    // /**
    //  * 设置没加钱之前的筹码
    //  * @param chip 
    //  */
    // public setNoEnoughChip(chip: number) {
    //     this.noEnoughchip = chip;
    // }
    // /**
    //  * 自动加钱
    //  * @param currChip 加钱之后的筹码
    //  */
    // public AutoChip(currChip: number) {
    //     //BatteryController.Instance.Shoot(false);
    //     var addChip: number = currChip - this.noEnoughchip;
    //     if (addChip > 0) {
    //         //GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.autoAddWallet.replace("{0}", (addChip * 0.01).toFixed(2)), TipType.FLOATTIP);
    //     }
    //     else {
    //         this.onCreateWalletPanel();
    //         GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.clipNoMoney, TipType.FLOATTIP);
    //     }
    // }
    WalletManager.prototype.ShowWallet = function (data) {
        if (NetLogin_1.default.Instance.isOfficial) {
            // if (this.walletPanel.isAutoLocal) {
            //     // if (this.isWaitAddMoney) {
            //     //     this.isWaitAddMoney = false;
            //     //     Laya.timer.once(500, this, this.waitChipIsAdd);
            //     // }
            // }
            // else {
            //     GameFacade.Instance.WalletMng.onCreateWalletPanel();
            // }
            this.walletPanel = new WalletPanel_1.default(data);
        }
        else {
            GameFacade_1.default.Instance.TipMng.createTip(LanguageConstant_1.default.freeTranWalletCh.clipNoMoney, TipManager_1.TipType.FLOATTIP);
        }
    };
    return WalletManager;
}(BaseManager_1.default));
exports.default = WalletManager;
},{"../constant/LanguageConstant":10,"../game/Panel/WalletPanel":55,"../net/ProtoHander/EventNetResponse":73,"../net/ProtoHander/NetLogin":78,"../net/ProtoHander/NetWallet":82,"./../GameFacade":3,"./../utils/CommonUtil":86,"./BaseManager":58,"./TipManager":67}],69:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("./../GameFacade");
/**
 * NetReader
 */
var NetReader = /** @class */ (function () {
    function NetReader() {
        this._packages = new Array();
    }
    NetReader.prototype.setPassword = function () {
    };
    NetReader.prototype.decode = function () {
    };
    NetReader.prototype.addPackage = function (pkg) {
        this._packages.unshift(pkg);
    };
    NetReader.prototype.hasNext = function () {
        return this._packages.length > 0;
    };
    NetReader.prototype.handleNext = function () {
        var pkg = this._packages.pop();
        // 由NetWorkManager处理
    };
    NetReader.prototype.notify = function () {
        var pkgIn;
        while (this._packages.length > 0) {
            pkgIn = this._packages.pop();
            GameFacade_1.default.Instance.SocketMng.dispatchMessage(pkgIn.code, pkgIn.data);
        }
    };
    return NetReader;
}());
exports.default = NetReader;
},{"./../GameFacade":3}],70:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProtoBuf_1 = require("./ProtoBuf");
/**
 * PackageIn
 */
var PackageIn = /** @class */ (function (_super) {
    __extends(PackageIn, _super);
    function PackageIn(source, start) {
        if (start === void 0) { start = 0; }
        var _this = _super.call(this) || this;
        _this._validLength = 0;
        _this._code = -1;
        _this.endian = Laya.Socket.BIG_ENDIAN;
        // 提取协议号
        _this.writeArrayBuffer(source, start, 2);
        _this.pos = 0;
        _this._ReadHeader();
        _this.clear();
        _this.writeArrayBuffer(source, 2);
        return _this;
    }
    Object.defineProperty(PackageIn.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (v) {
            this._data = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PackageIn.prototype, "start", {
        get: function () {
            return this._start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PackageIn.prototype, "validLength", {
        // 实际有效长度
        get: function () {
            return this._validLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PackageIn.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    PackageIn.prototype._ReadHeader = function () {
        this._code = this.getUint16();
    };
    PackageIn.prototype.unpack = function () {
        var buffer = this.buffer;
        this.data = this.decode(ProtoBuf_1.default.decode(this.code), new Uint8Array(buffer));
    };
    /**
    * 解码
    */
    PackageIn.prototype.decode = function (cls, data) {
        // console.log(` cls:${cls}`);
        if (!cls)
            return null;
        return cls.decode(data);
    };
    return PackageIn;
}(Laya.Byte));
exports.default = PackageIn;
},{"./ProtoBuf":72}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* PackageOut
*/
var PackageOut = /** @class */ (function (_super) {
    __extends(PackageOut, _super);
    function PackageOut() {
        var _this = _super.call(this) || this;
        _this.endian = Laya.Socket.BIG_ENDIAN;
        return _this;
    }
    Object.defineProperty(PackageOut.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    /** 数据包初始化 */
    PackageOut.prototype.init = function (code) {
        // 清除数据
        this.clear();
        this.writeUint16(code);
        this._code = code;
    };
    PackageOut.prototype.pack = function (data) {
        this.writeArrayBuffer(data["__proto__"].constructor.encode(data).finish());
    };
    PackageOut._packageIndex = 0;
    return PackageOut;
}(laya.utils.Byte));
exports.default = PackageOut;
},{}],72:[function(require,module,exports){
"use strict";
//protobuf数据包的前16字节，大头占前7个字节 小头占后9个字节
Object.defineProperty(exports, "__esModule", { value: true });
var ProtoBuf = /** @class */ (function () {
    function ProtoBuf() {
    }
    /** 根据大头和小头组合成文件的头*/
    ProtoBuf.build = function (cmd, ccmd) {
        var headCmd = cmd << 9;
        headCmd += ccmd;
        return headCmd;
    };
    /** 根据数据头（16位字节数据），拆解出大头（前7位字节）与小头（后9位字节）*/
    ProtoBuf.Resolve = function (headCmd) {
        var cmd = headCmd >> 9;
        var ccmd = headCmd << 23;
        var ccmd = ccmd >> 23;
        return [cmd, ccmd];
    };
    /**
     * 根据数据头，得到数据体对应的类
     * @param headCmd 数据头
     */
    ProtoBuf.decode = function (headCmd) {
        // var value = this.ProtoDic.get(headCmd);
        // var cmd = headCmd >> 9;
        // var ccmd = headCmd << 23;
        // var ccmd = ccmd >> 23;
        return this.ProtoDic.get(headCmd);
    };
    ProtoBuf.registerCMD = function (cmd, data) {
        if (null == this.ProtoDic)
            this.ProtoDic = new Laya.WeakObject();
        this.ProtoDic.set(cmd, data);
    };
    return ProtoBuf;
}());
exports.default = ProtoBuf;
},{}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 服务器数据处理之后的事件分发
 */
var EventNetResponse = /** @class */ (function () {
    function EventNetResponse() {
    }
    /** 进入房间*/
    EventNetResponse.EnterRoomResp = "EnterRoomResp";
    /** 获得捕猎人的信息，房间准备好了*/
    EventNetResponse.ReadyRoomResp = "ReadyRoomResp";
    /** 同步房间内所有的玩家信息*/
    EventNetResponse.SynRoleResp = "SynRoleResp";
    /** 同步出鱼信息*/
    EventNetResponse.SynFishResp = "SynFishResp";
    /** 改变炮台倍率 消息返回*/
    EventNetResponse.ChangeBatteryResp = "ChangeBatteryResp";
    /** 子弹的射击 消息返回*/
    EventNetResponse.ShootBulletResp = "ShootBulletResp";
    /** 有玩家离开房间 消息返回*/
    EventNetResponse.LeaveRoomResp = "LeaveRoomResp";
    /** 刷新金币 消息返回*/
    EventNetResponse.UpdateChipResp = "UpdateChipResp";
    /** 同步玩家自己金币 消息返回*/
    EventNetResponse.SyncChipsResp = "SyncChipsResp";
    /**用于免转同步金币 */
    EventNetResponse.MqSyncChipsResp = "MqSyncChipsResp";
    /** 子弹无效 消息返回*/
    EventNetResponse.BulletUselessResp = "BulletUselessResp";
    /** 子弹无效 消息返回*/
    EventNetResponse.BulletPassResp = "BulletPassResp";
    /** 子弹无效 消息返回*/
    EventNetResponse.SyncJpJettonResp = "SyncJpJettonResp";
    /** 鱼死亡 消息返回*/
    EventNetResponse.FishDeadResp = "FishDeadResp";
    /** 从世界Boss身上掉下金币 消息返回*/
    EventNetResponse.OnePieceResp = "OnePieceResp";
    /**加钱信息反馈 */
    EventNetResponse.WalletResp = "WalletResp";
    /**钱包弹框信息反馈 */
    EventNetResponse.MainWalletResp = "MainWalletResp";
    return EventNetResponse;
}());
exports.default = EventNetResponse;
},{}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var TipManager_1 = require("../../manager/TipManager");
var NetAct = /** @class */ (function () {
    function NetAct() {
    }
    Object.defineProperty(NetAct, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetAct();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetAct.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.act_list_resp, ActMsg.act_list_resp, Laya.Handler.create(this, this.actListResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.act_detail_info_resp, ActMsg.act_detail_info_resp, Laya.Handler.create(this, this.actDetailResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.top_12_notice_resp, ActMsg.top_12_notice_resp, Laya.Handler.create(this, this.topNoticeResp, null, false));
    };
    /**
     * 活动列表请求
     */
    NetAct.prototype.actListReq = function () {
        var req = new ActMsg.act_list_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.act_list_req, req);
    };
    /**
     * 活动详情请求
     * @param fundId
     */
    NetAct.prototype.actDetailReq = function (id) {
        var req = new ActMsg.act_detail_info_req();
        req.uid = id;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.act_detail_info_req, req);
    };
    /**
     * 获得活动列表
     * @param cmd
     * @param pbData
     */
    NetAct.prototype.actListResp = function (cmd, pbData) {
        console.log(pbData);
        var actInfo = pbData.info;
        for (var i = 0; i < actInfo.length; i++) {
            this.uid = actInfo[0].uid;
            GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.ACTLISTRESP, actInfo[0]);
        }
        //this.actDetailReq(this.uid);//暂时没有用到活动详情
    };
    /**
    * 获得活动详情
    * @param cmd
    * @param pbData
    */
    NetAct.prototype.actDetailResp = function (cmd, pbData) {
    };
    /**
     * 返利活动飘字
     * @param cmd
     * @param pbData
     */
    NetAct.prototype.topNoticeResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.TipMng.createTip(pbData.content, TipManager_1.TipType.FLOATTIPDELAY);
    };
    return NetAct;
}());
exports.default = NetAct;
},{"../../GameFacade":3,"../../constant/EventConstantResponse":8,"../../manager/TipManager":67}],75:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetAward = /** @class */ (function () {
    function NetAward() {
        this.isHaveFundTip = false; //是否有等级提示
    }
    Object.defineProperty(NetAward, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetAward();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetAward.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_info_resp, AwardMsg.growth_fund_info_resp, Laya.Handler.create(this, this.growthFundInfoResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_config_resp, AwardMsg.growth_fund_config_resp, Laya.Handler.create(this, this.growthFundConfigResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_buy_resp, AwardMsg.growth_fund_buy_resp, Laya.Handler.create(this, this.growthFundBuyResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_resp, AwardMsg.lv_award_resp, Laya.Handler.create(this, this.lvAwardResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_notice_resp, AwardMsg.lv_award_notice_resp, Laya.Handler.create(this, this.lvAwardNoticeResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_state_resp, AwardMsg.growth_fund_state_resp, Laya.Handler.create(this, this.growthFundStateResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_state_resp, AwardMsg.lv_award_state_resp, Laya.Handler.create(this, this.lvAwardStateResp, null, false));
    };
    /**
     * 请求基金档次
     */
    NetAward.prototype.growthFundInfoReq = function () {
        var req = new AwardMsg.growth_fund_info_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_info_req, req);
    };
    /**
      * 请求基金配置
      */
    NetAward.prototype.growthFundConfigReq = function () {
        var req = new AwardMsg.growth_fund_config_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_config_req, req);
    };
    /**
      * 请求购买基金档次
      */
    NetAward.prototype.growtFundBuyReq = function (id) {
        var req = new AwardMsg.growth_fund_buy_req();
        req.fund_id = id;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_buy_req, req);
    };
    /**
      * 请求领取等级奖励
      */
    NetAward.prototype.lvAwardReq = function (lv) {
        var req = new AwardMsg.lv_award_req();
        req.lv = lv;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_req, req);
    };
    /**
     * 请求通知设置
     * @param isNotice 是否今天通知
     */
    NetAward.prototype.lvAwardNoticeSetReq = function (isNotice) {
        var req = new AwardMsg.lv_award_notice_set_req();
        req.not_today = isNotice;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_notice_set_req, req);
    };
    /**
      * 请求成长基金的状态
      */
    NetAward.prototype.growthFundStateReq = function () {
        console.log("请求");
        var req = new AwardMsg.growth_fund_state_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_state_req, req);
    };
    /**
     * 请求等级奖金领取状态
     */
    NetAward.prototype.lvAwardStateReq = function () {
        var req = new AwardMsg.lv_award_state_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_state_req, req);
    };
    /**
     * 购买的成长基金档次
     * @param cmd
     * @param pbData
     */
    NetAward.prototype.growthFundInfoResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.GROWTHFUNDINFORESP, pbData);
    };
    /**
  * 成长基金config
  * @param cmd
  * @param pbData
  */
    NetAward.prototype.growthFundConfigResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.GROWTHFUNDCONFIGRESP, pbData);
    };
    /**
     * 购买基金返回状态
     * @param cmd
     * @param pbData
     */
    NetAward.prototype.growthFundBuyResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.GROWTHFUNDBUYRESP, pbData);
    };
    /**
  * 等级基金领取返回
  * @param cmd
  * @param pbData
  */
    NetAward.prototype.lvAwardResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.LVAWARDRESP, pbData);
    };
    /**
  * 等级提示框
  * @param cmd
  * @param pbData
  */
    NetAward.prototype.lvAwardNoticeResp = function (cmd, pbData) {
        if (!this.isHaveFundTip) {
            this.isHaveFundTip = true;
            //new FundTipPanel(pbData);
        }
        // GameFacade.Instance.EventMng.dispatch(EventConstantResponse.LVAWARDNOTICERESP, pbData);
    };
    /**
    * 成长基金状态
    * @param cmd
    * @param pbData
    */
    NetAward.prototype.growthFundStateResp = function (cmd, pbData) {
        this.endTime = pbData.end_time;
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.GROWTHFUNDSTATERESP, pbData);
    };
    /**
  * 等级奖励状态
  * @param cmd
  * @param pbData
  */
    NetAward.prototype.lvAwardStateResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.LVAWARDSTATERESP, pbData);
    };
    return NetAward;
}());
exports.default = NetAward;
},{"../../GameFacade":3,"../../constant/EventConstantResponse":8}],76:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetBroadcast = /** @class */ (function () {
    function NetBroadcast() {
    }
    Object.defineProperty(NetBroadcast, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetBroadcast();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetBroadcast.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_broadcast, BroadCastMsg.c_cmd.bcast_world_resp, BroadCastMsg.bcast_world_resp, Laya.Handler.create(this, this.bcastWorldResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_broadcast, BroadCastMsg.c_cmd.bcast_room_resp, BroadCastMsg.bcast_room_resp, Laya.Handler.create(this, this.bcastRoomResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_broadcast, BroadCastMsg.c_cmd.bcast_msg_resp, BroadCastMsg.bcast_msg_resp, Laya.Handler.create(this, this.bcastMsgResp, null, false));
    };
    /**
     * 全局广播
     * @param cmd
     * @param pbData
     */
    NetBroadcast.prototype.bcastWorldResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.BCASTWORLDRESP, pbData);
    };
    /**
     * 房间广播
     * @param cmd
     * @param pbData
     */
    NetBroadcast.prototype.bcastRoomResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.BCASTROOMRESP, pbData);
    };
    /**
   * 广播消息
   * @param cmd
   * @param pbData
   */
    NetBroadcast.prototype.bcastMsgResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.BCASTMSGRESP, pbData);
    };
    return NetBroadcast;
}());
exports.default = NetBroadcast;
},{"../../GameFacade":3,"../../constant/EventConstantResponse":8}],77:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var WinnerPanel_1 = require("../../game/Panel/WinnerPanel");
var NetLogin_1 = require("./NetLogin");
var NetJpPool = /** @class */ (function () {
    function NetJpPool() {
        this._JpAmount = 0;
    }
    Object.defineProperty(NetJpPool, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetJpPool();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetJpPool.prototype.Init = function () {
        this._JpAmount = 0;
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_pool, PoolMsg.c_cmd.bcast_jp_resp, PoolMsg.bcast_jp_resp, Laya.Handler.create(this, this.receiveBcastJPResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_pool, PoolMsg.c_cmd.amount_jp_resp, PoolMsg.amount_jp_resp, Laya.Handler.create(this, this.receiveAmountJPResp, null, false));
    };
    /**
     * 广播中奖
     * @param cmd
     * @param pbData
     */
    NetJpPool.prototype.receiveBcastJPResp = function (cmd, pbData) {
        if (pbData.uid == NetLogin_1.default.Instance.RoleInfo.roleId) {
            var win = new WinnerPanel_1.default();
            win.bcastJpInfo = pbData;
        }
        if (pbData.content != null) {
            GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.JPBCAST, pbData);
        }
        this._JpAmount = pbData.amount;
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.JPNUMBER, pbData.amount);
    };
    /**
     * jp金额
     * @param cmd
     * @param pbData
     */
    NetJpPool.prototype.receiveAmountJPResp = function (cmd, pbData) {
        this._JpAmount = pbData.amount;
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.JPNUMBER, pbData.amount);
    };
    return NetJpPool;
}());
exports.default = NetJpPool;
},{"../../GameFacade":3,"../../constant/EventConstantResponse":8,"../../game/Panel/WinnerPanel":56,"./NetLogin":78}],78:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var GameEvent_1 = require("../../constant/GameEvent");
var CommonUtil_1 = require("../../utils/CommonUtil");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var TipManager_1 = require("../../manager/TipManager");
var CommonConstant_1 = require("../../constant/CommonConstant");
var BatteryController_1 = require("../../controller/BatteryController");
var NetLogin = /** @class */ (function () {
    function NetLogin() {
        /**等级开关 */
        this.isOnLvSw = false;
        /**
         * 游戏token 用于重连
         */
        this._JwtToken = "";
        /**
         * 登录模式，正常1 重连2
         */
        this._LoginModeCode = LoginMsg.login_mode_code.normal;
        this.bLoginFaile = false;
        this.bAutoTransfer = false;
        /**和服务器的时间偏移量 */
        this._timeOffset = 0;
        this.nRaceId = 0;
        //#endregion  socket request
    }
    NetLogin.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.login_resp, LoginMsg.login_resp, Laya.Handler.create(this, this.LoginResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.time_resp, LoginMsg.time_resp, Laya.Handler.create(this, this.TimeResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.kictout_resp, LoginMsg.kictout_resp, Laya.Handler.create(this, this.KictoutResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.switch_resp, LoginMsg.switch_resp, Laya.Handler.create(this, this.switchResp, null, false));
    };
    Object.defineProperty(NetLogin, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetLogin();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetLogin.prototype, "RoleInfo", {
        /**
        * 玩家角色信息
        */
        get: function () {
            if (null == this._playerLoginInfo)
                return null;
            return this._playerLoginInfo.role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetLogin.prototype, "RoomInfoList", {
        /**
         * 房间基本信息列表
         */
        get: function () {
            if (null == this._playerLoginInfo || null == this._playerLoginInfo.room_info)
                return null;
            return this._playerLoginInfo.room_info;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 鱼配置列表
     */
    NetLogin.prototype.FishInfoList = function (fishType) {
        if (null == this._fishConfigDict || !this._fishConfigDict.has(fishType))
            return null;
        return this._fishConfigDict.get(fishType);
    };
    /**
     * 是否是自己的uid
     * @param uid 玩家uid
     */
    NetLogin.prototype.IsSelfUid = function (uid) {
        return this.RoleInfo.roleId == uid;
    };
    //#region socket response
    /**
        * 处理登陆请求回复
        */
    NetLogin.prototype.LoginResp = function (cmd, data) {
        var _this = this;
        switch (data.code) {
            case LoginMsg.login_code.SUCCESS:
                {
                    //登录成功
                    var reconnect = "";
                    if (NetLogin.Instance._LoginModeCode == LoginMsg.login_mode_code.reconnect) {
                        GameFacade_1.default.Instance.EventMng.dispatch(GameEvent_1.default.GAME_RECONNECT);
                        reconnect = "断线重连";
                    }
                    CommonUtil_1.utils.CommonUtils.log("------------------" + reconnect + "登录成功 LoginRespHandle data = ", data);
                    GameFacade_1.default.Instance.GameMng.bGameStart = true;
                    this._playerLoginInfo = data;
                    this.isOfficial = data.role.is_wallet;
                    this._JwtToken = data.jwt_token;
                    this._fishConfigDict = new Laya.WeakObject();
                    data.fish_info.forEach(function (element) {
                        _this._fishConfigDict.set(element.fish_type, element);
                    });
                    this.LoginTimeReq();
                    GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.LOGINRESrOLEINFO, data.role);
                    break;
                }
            case LoginMsg.login_code.FAIL: {
                GameFacade_1.default.Instance.TipMng.createTip(CommonConstant_1.default._PromptContent.LoginFail, TipManager_1.TipType.FLOATTIP);
                break;
            }
        }
    };
    /**
     * 服务端时间同步处理
     * @param data 返回结果
     */
    NetLogin.prototype.TimeResp = function (cmd, data) {
        var curDate = new Date().getTime();
        this._timeOffset = Number(data.time) - curDate;
    };
    /**
     * 踢人同步处理
     * 这里不是服务端直接推送，是在onclose时接收服务端传递的参数reason进行解析，自己调用onmessage派发过来
     * @param data 返回结果
     */
    NetLogin.prototype.KictoutResp = function (cmd, data) {
        CommonUtil_1.utils.CommonUtils.log("--------KictoutResp-----");
        var promptPanel = GameFacade_1.default.Instance.SceneMng.Create(3 /* PromptPanel */);
        switch (data.code) {
            case LoginMsg.login_code.FAIL:
            case LoginMsg.login_code.ERR_ACCOUNT: { //错误账号
                promptPanel.InitData(3 /* AccountError */, CommonConstant_1.default._PromptContent.AccountError);
                break;
            }
            case LoginMsg.login_code.TOKEN_TIMEOUT: { //token超时
                promptPanel.InitData(3 /* AccountError */, CommonConstant_1.default._PromptContent.AccountError);
                break;
            }
            case LoginMsg.login_code.TOKEN_ERROR: { //token错误
                promptPanel.InitData(3 /* AccountError */, CommonConstant_1.default._PromptContent.AccountError);
                break;
            }
            case LoginMsg.login_code.OTHER_LOGIN: { //异地登录
                promptPanel.InitData(2 /* LoginOther */, CommonConstant_1.default._PromptContent.LoginOther);
                break;
            }
            case LoginMsg.login_code.FORCE_KICTOUT: { //强制踢下线
                promptPanel.InitData(3 /* AccountError */, CommonConstant_1.default._PromptContent.AccountError);
                break;
            }
            case LoginMsg.login_code.MAINTAIN_KICTOUT: { //维护踢下线
                promptPanel.InitData(3 /* AccountError */, CommonConstant_1.default._PromptContent.AccountError);
                break;
            }
            default:
                break;
        }
        GameFacade_1.default.Instance.SocketMng.closeSocket();
        BatteryController_1.default.Instance.StopLockAttack();
        BatteryController_1.default.Instance.StopAutoAttack();
    };
    /**
     * 开关
     * @param cmd
     * @param data
     */
    NetLogin.prototype.switchResp = function (cmd, data) {
        var info = data.switch;
        for (var i = 0; i < info.length; i++) {
            if (info[i].type == 2) { //等级开关
                this.isOnLvSw = info[i].is_on;
                console.log("开关");
                console.log(info[i].is_on);
                GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.SWITCHRESP);
            }
            if (info[i].type == 3) { //幸运宝箱开关
            }
        }
    };
    // // /**
    // //  * 更新游戏token处理
    // //  * @param data 返回结果
    // //  */
    // // UpdateToeknpHandle(data: any): void {
    // //     let msg = MsgProtoBuff.update_token_resp.decode(data);
    // //     this.sRoomToken = msg.jwtToken;
    // //     Emitter.emit(MessageConst.login_UpdateTokenMess);
    // // }
    //#endregion socket response
    //#region  socket request
    /**
     * 申请登录
     * @param token
     * @param account 账号
     * @param lang 语言
     */
    NetLogin.prototype.LoginAccountReq = function (token, account, lang) {
        var req = new LoginMsg.login_account_req();
        req.token = "123"; //token;//用账号方式登录的时候，token固定死，保持与服务器一致
        //req.account = "abc3398";//account;
        req.account = "acc_abc5419" + CommonUtil_1.utils.CommonUtils.random(1, 10000); //account;
        req.lang = lang;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.login_account_req, req);
    };
    /**
     * 发送时间校准请求
    */
    NetLogin.prototype.LoginTimeReq = function () {
        var req = new LoginMsg.time_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.time_req, req);
    };
    return NetLogin;
}());
exports.default = NetLogin;
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../constant/EventConstantResponse":8,"../../constant/GameEvent":9,"../../controller/BatteryController":12,"../../manager/TipManager":67,"../../utils/CommonUtil":86}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetRanking = /** @class */ (function () {
    function NetRanking() {
    }
    Object.defineProperty(NetRanking, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetRanking();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetRanking.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_rank, RankMsg.c_cmd.rank_resp, RankMsg.rank_resp, Laya.Handler.create(this, this.rankResp, null, false));
    };
    /**
     * 排行榜请求
     * @param type 是本周还是上周
     */
    NetRanking.prototype.rankReq = function (index, type) {
        var req = new RankMsg.rank_req();
        req.index = index;
        req.type = type;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_rank, RankMsg.c_cmd.rank_req, req);
    };
    /**
     * 排行榜返回数据
     * @param cmd
     * @param pbData
     */
    NetRanking.prototype.rankResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.RANKRESP, pbData);
    };
    return NetRanking;
}());
exports.default = NetRanking;
},{"../../GameFacade":3,"../../constant/EventConstantResponse":8}],80:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetLogin_1 = require("./NetLogin");
var NetRoleInfo = /** @class */ (function () {
    function NetRoleInfo() {
        this.lvInfo = null;
        this.isHaveNotion = false;
    }
    Object.defineProperty(NetRoleInfo, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetRoleInfo();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetRoleInfo.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_info_resp, RoleInfoMsg.lv_info_resp, Laya.Handler.create(this, this.lvInfoResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_config_resp, RoleInfoMsg.lv_config_resp, Laya.Handler.create(this, this.lvConfigResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_notice_resp, RoleInfoMsg.lv_notice_resp, Laya.Handler.create(this, this.lvNoticeResp, null, false));
    };
    /**
     * 请求等级信息
     */
    NetRoleInfo.prototype.lvInfoReq = function () {
        var req = new RoleInfoMsg.lv_info_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_info_req, req);
    };
    /**
     * 请求等级配置
     * @param fundId
     */
    NetRoleInfo.prototype.lvConfigReq = function (fundId) {
        var req = new RoleInfoMsg.lv_config_req();
        req.fund_id = fundId;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_config_req, req);
    };
    /**
     * 等级信息返回
     * @param cmd
     * @param pbData
     */
    NetRoleInfo.prototype.lvInfoResp = function (cmd, pbData) {
        this.lvInfo = pbData;
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.LVINFORESP, pbData);
    };
    /**
    * 等级配置返回
    * @param cmd
    * @param pbData
    */
    NetRoleInfo.prototype.lvConfigResp = function (cmd, pbData) {
        console.log("等级配置");
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.LVCONFIGRESP, pbData);
    };
    /**
  * 等级通知
  * @param cmd
  * @param pbData
  */
    NetRoleInfo.prototype.lvNoticeResp = function (cmd, pbData) {
        console.log("等级通知");
        if (NetLogin_1.default.Instance.RoleInfo.roleId == pbData.uid) {
            if (!this.isHaveNotion) {
                this.isHaveNotion = true;
                // new UpgradePanel(pbData);
            }
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.LVNOTICERESP, pbData);
    };
    return NetRoleInfo;
}());
exports.default = NetRoleInfo;
},{"../../GameFacade":3,"../../constant/EventConstantResponse":8,"./NetLogin":78}],81:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var CommonUtil_1 = require("../../utils/CommonUtil");
var NetLogin_1 = require("./NetLogin");
var EventNetResponse_1 = require("./EventNetResponse");
var CommonConstant_1 = require("../../constant/CommonConstant");
var TipManager_1 = require("../../manager/TipManager");
var NetRoom = /** @class */ (function () {
    function NetRoom() {
        /**房间内的人物信息列表 */
        this._RoomRoleInfoDict = {};
        /**房间内鱼的信息列表 */
        this._FishDict = {};
        //#endregion
    }
    Object.defineProperty(NetRoom, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetRoom();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    ;
    NetRoom.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.enter_room_resp, RoomMsg.enter_room_resp, Laya.Handler.create(this, this.EnterRoomResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.ready_room_resp, RoomMsg.ready_room_resp, Laya.Handler.create(this, this.ReadyRoomResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.syn_fish_resp, RoomMsg.syn_fish_resp, Laya.Handler.create(this, this.SynFishResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.hit_fish_resp, RoomMsg.hit_fish_resp, Laya.Handler.create(this, this.HitFishResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.shoot_bullet_resp, RoomMsg.shoot_bullet_resp, Laya.Handler.create(this, this.ShootBulletResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.shoot_err_resp, RoomMsg.shoot_err_resp, Laya.Handler.create(this, this.ShootErrResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.change_battery_resp, RoomMsg.change_battery_resp, Laya.Handler.create(this, this.ChangeBatteryResp, null, false));
        //  GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.update_fish_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.fish_dead_resp, RoomMsg.fish_dead_resp, Laya.Handler.create(this, this.FishDeadResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.leave_room_resp, RoomMsg.leave_room_resp, Laya.Handler.create(this, this.LeaveRoomResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.update_chips_resp, RoomMsg.update_chips_resp, Laya.Handler.create(this, this.UpdateChipResp, null, false));
        //   GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.shoot_err_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.battery_err_resp, RoomMsg.battery_err_resp, Laya.Handler.create(this, this.BatteryErrResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.sync_chips_resp, RoomMsg.sync_chips_resp, Laya.Handler.create(this, this.SyncChipsResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.room_status_resp, RoomMsg.room_status_resp, Laya.Handler.create(this, this.RoomStatusResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.syn_role_resp, RoomMsg.syn_role_resp, Laya.Handler.create(this, this.SynRoleResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.bullet_useless_resp, RoomMsg.bullet_useless_resp, Laya.Handler.create(this, this.BulletUselessResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.bullet_pass_resp, RoomMsg.bullet_pass_resp, Laya.Handler.create(this, this.BulletPassResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.sync_jp_jetton_resp, RoomMsg.sync_jp_jetton_resp, Laya.Handler.create(this, this.SyncJpJettonResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.fish_matrix_resp, RoomMsg.fish_matrix_resp, Laya.Handler.create(this, this.FishMatrixResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.clean_wave_resp, RoomMsg.clean_wave_resp, Laya.Handler.create(this, this.CleanWaveResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.one_piece_resp, RoomMsg.one_piece_resp, Laya.Handler.create(this, this.OnePieceResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.hit_result_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.extra_reward_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.wave_matrix_resp, RoomMsg.wave_matrix_resp, Laya.Handler.create(this, this.WaveMatrixResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.mq_sync_chips_resp, RoomMsg.mq_sync_chips_resp, Laya.Handler.create(this, this.MqSyncChipsResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.fish_select_save_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.fish_select_resp, RoomMsg.fish_select_resp, Laya.Handler.create(this, this.FishSelectResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.update_valentine_score, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.rotate_canvas_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.weapon_chip_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
    };
    //#region socket response
    /**
     * 进入房间回复
     * @param data 协议数据类
     */
    NetRoom.prototype.EnterRoomResp = function (cmd, data) {
        CommonUtil_1.utils.CommonUtils.log("\u8FDB\u5165\u623F\u95F4msg_room_code = " + data.code);
        switch (data.code) {
            case RoomMsg.msg_room_code.SUCCESS_ENTER:
                {
                    //this.ReadyRoomReq();
                    CommonUtil_1.utils.CommonUtils.warn("------------进入房间成功------------");
                    GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.EnterRoomResp, data);
                    break;
                }
            case RoomMsg.msg_room_code.FALSE_ENTER:
                {
                    CommonUtil_1.utils.CommonUtils.warn("------------进入房间失败------------");
                    GameFacade_1.default.Instance.TipMng.createTip(CommonConstant_1.default._PromptContent.EnterRoomFail, TipManager_1.TipType.FLOATTIP);
                    break;
                }
        }
    };
    /**房间内角色信息 */
    NetRoom.prototype.ReadyRoomResp = function (cmd, data) {
        CommonUtil_1.utils.CommonUtils.log("ReadyRoomResp data = ", data);
        var roleInfo = data.role;
        for (var _i = 0, roleInfo_1 = roleInfo; _i < roleInfo_1.length; _i++) {
            var value = roleInfo_1[_i];
            this._RoomRoleInfoDict[value.uid.toString()] = value;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.ReadyRoomResp, data.role);
        this.SynSeatReq();
    };
    /**同步鱼池中鱼的信息 */
    NetRoom.prototype.SynFishResp = function (cmd, data) {
        CommonUtil_1.utils.CommonUtils.log("同步鱼信息 SynFishResp data = ", data);
        var fishList = data.fish_list;
        for (var _i = 0, fishList_1 = fishList; _i < fishList_1.length; _i++) {
            var value = fishList_1[_i];
            this._FishDict[value.id.toString()] = value;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.SynFishResp, data);
    };
    /**击中鱼 消息返回 */
    NetRoom.prototype.HitFishResp = function (cmd, data) {
        if (RoomMsg.msg_room_code.ERR_CHIPS == data.code) {
            CommonUtil_1.utils.CommonUtils.log("todo error tips!!!");
        }
    };
    /**子弹的射击 消息返回 */
    NetRoom.prototype.ShootBulletResp = function (cmd, data) {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            this._RoomRoleInfoDict[data.uid.toString()].jetton_show = data.jettonshow;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.ShootBulletResp, data);
    };
    /**发射子弹报错返回 */
    NetRoom.prototype.ShootErrResp = function (cmd, data) {
        CommonUtil_1.utils.CommonUtils.log("发射子弹报错 data:", data);
    };
    /**改变炮台倍率 消息返回 */
    NetRoom.prototype.ChangeBatteryResp = function (cmd, data) {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            this._RoomRoleInfoDict[data.uid.toString()].bullet_multi = data.multi;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.ChangeBatteryResp, data);
    };
    /**鱼死亡 消息返回 */
    NetRoom.prototype.FishDeadResp = function (cmd, data) {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            this._RoomRoleInfoDict[data.uid.toString()].jetton_show = data.jettonshow;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.FishDeadResp, data);
    };
    /**离开房间 消息返回 */
    NetRoom.prototype.LeaveRoomResp = function (cmd, data) {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            delete this._RoomRoleInfoDict[data.uid.toString()];
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.LeaveRoomResp, data);
    };
    /**刷新金币 消息返回 */
    NetRoom.prototype.UpdateChipResp = function (cmd, data) {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            this._RoomRoleInfoDict[data.uid.toString()].jetton_show = data.jettonshow;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.UpdateChipResp, data);
    };
    /**切换炮台错误 消息返回 */
    NetRoom.prototype.BatteryErrResp = function (cmd, msg) {
        CommonUtil_1.utils.CommonUtils.log("切换炮台错误 " + msg.code);
    };
    ;
    /**同步玩家自己金币 消息返回 */
    NetRoom.prototype.SyncChipsResp = function (cmd, data) {
        CommonUtil_1.utils.CommonUtils.log("sync_chips_resp 跟新金币");
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.SyncChipsResp, data);
    };
    /**中心钱包 消息返回 */
    NetRoom.prototype.MqSyncChipsResp = function (cmd, msg) {
        var selfID = NetLogin_1.default.Instance.RoleInfo.roleId;
        var role = this._RoomRoleInfoDict[selfID.toString()];
        if (role) {
            role.jetton_show = msg.chips;
        }
        console.log("mq_sync_chips_resp 跟新金币");
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.MqSyncChipsResp, msg);
    };
    /**冰冻效果等 消息返回 */
    NetRoom.prototype.RoomStatusResp = function (cmd, msg) {
        CommonUtil_1.utils.CommonUtils.log("冰冻效果等 " + msg.status);
    };
    /**同步角色信息 消息返回 */
    NetRoom.prototype.SynRoleResp = function (cmd, data) {
        for (var key in this._RoomRoleInfoDict) {
            delete this._RoomRoleInfoDict[key];
        }
        var roleInfo = data.role;
        for (var _i = 0, roleInfo_2 = roleInfo; _i < roleInfo_2.length; _i++) {
            var value = roleInfo_2[_i];
            this._RoomRoleInfoDict[value.uid.toString()] = value;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.SynRoleResp, data.role);
    };
    /**子弹无效 消息返回 */
    NetRoom.prototype.BulletUselessResp = function (cmd, data) {
        var role = this._RoomRoleInfoDict[data.uid.toString()];
        if (role) {
            role.jetton_show = data.jettonshow;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.BulletUselessResp, data);
    };
    /**子弹无效 消息返回 */
    NetRoom.prototype.BulletPassResp = function (cmd, data) {
        var role = this._RoomRoleInfoDict[data.uid.toString()];
        if (role) {
            role.jetton_show = data.jettonshow;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.BulletPassResp, data);
    };
    /**服务器主动推送，同步玩家(可能是自己也可能是别人)jp中奖金币（筹码）额度 消息返回 */
    NetRoom.prototype.SyncJpJettonResp = function (cmd, data) {
        var role = this._RoomRoleInfoDict[data.uid.toString()];
        if (role) {
            role.jetton_show = data.jettonshow;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.SyncJpJettonResp, data);
    };
    /**鱼矩阵信息 消息返回 */
    NetRoom.prototype.FishMatrixResp = function (cmd, msg) {
        CommonUtil_1.utils.CommonUtils.log("鱼阵来临 ");
    };
    /**波浪来袭 消息返回 */
    NetRoom.prototype.CleanWaveResp = function (cmd, msg) {
        CommonUtil_1.utils.CommonUtils.log("波浪来袭 ");
        GameFacade_1.default.Instance.HuntSceneMng.warnShow(0);
    };
    /**从世界Boss身上掉下金币 消息返回 */
    NetRoom.prototype.OnePieceResp = function (cmd, data) {
        var role = this._RoomRoleInfoDict[data.uid.toString()];
        if (role) {
            role.jetton_show = data.jettonshow;
        }
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.OnePieceResp, data);
    };
    /**波浪矩阵来临 消息返回 */
    NetRoom.prototype.WaveMatrixResp = function (cmd, msg) {
        CommonUtil_1.utils.CommonUtils.log("波浪矩阵来临 ");
    };
    /**自动捕鱼加载上次设置 消息返回 */
    NetRoom.prototype.FishSelectResp = function (cmd, data) {
        CommonUtil_1.utils.CommonUtils.log("自动捕鱼加载上次设置 ");
    };
    //#endregion
    //#region  socket request
    /**
     * 请求进入房间
     * @param roomType 房间类型
     * @param reLoginCode 连接类型
     */
    NetRoom.prototype.EnterRoomReq = function (roomType, reLoginCode) {
        var req = new RoomMsg.enter_room_req();
        req.type = roomType;
        req.code = reLoginCode;
        NetLogin_1.default.Instance._curRoomIndex = roomType;
        this._curRoomInfo = NetLogin_1.default.Instance.RoomInfoList[req.type - 1]; //服务端是 1 2 3。客户端数组下标0开始
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.enter_room_req, req);
    };
    /** 请求同步房间内正在打鱼的玩家信息*/
    NetRoom.prototype.ReadyRoomReq = function () {
        var req = new RoomMsg.ready_room_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.ready_room_req, req);
    };
    /** 同步座位消息信号，开始出鱼*/
    NetRoom.prototype.SynSeatReq = function () {
        var req = new RoomMsg.syn_seat_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.syn_seat_req, req);
    };
    /**
     * 通知服务器击中了鱼
     * @param multi 子弹倍率
     * @param fishid 击中的鱼ID列表
     * @param relateFish 关联的鱼ID列表
     * @param bulletId 子弹ID
     */
    NetRoom.prototype.HitFishReq = function (multi, fishid, relateFish, bulletId) {
        var req = new RoomMsg.hit_fish_req();
        req.bullet_multi = multi;
        req.fish_id = [fishid];
        req.related_fish = relateFish;
        req.bulletid = bulletId;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.hit_fish_req, req);
    };
    /**
     * 发射子弹请求
     * @param uid
     * @param multi
     * @param angle
     * @param time
     * @param fishid
     * @param bulletid
     */
    NetRoom.prototype.ShootBulletReq = function (uid, multi, angle, time, fishid, bulletid) {
        var req = new RoomMsg.shoot_bullet_req();
        req.uid = uid;
        req.multi = multi;
        req.angel = angle;
        req.time = time;
        req.fishid = fishid; //鱼ID（锁定状态使用）有鱼传ID 没有传0; 
        req.bulletid = bulletid;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.shoot_bullet_req, req);
    };
    /**
     * 切换炮台倍率
     * @param batteryMulti 炮台倍率
     * @param roleId 玩家ID
     */
    NetRoom.prototype.ChangeBatteryReq = function (batteryMultiIndex, roleId) {
        var req = new RoomMsg.change_battery_req();
        req.multi = NetRoom.Instance._curRoomInfo.battery[batteryMultiIndex];
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.change_battery_req, req);
        this._RoomRoleInfoDict[roleId.toString()].bullet_multi = NetRoom.Instance._curRoomInfo.battery[batteryMultiIndex];
        for (var iterator in this._RoomRoleInfoDict) {
        }
    };
    /** 离开房间*/
    NetRoom.prototype.LeaveRoomReq = function () {
        var req = new RoomMsg.leave_room_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.leave_room_req, req);
    };
    /** 同步金币请求*/
    NetRoom.prototype.SyncChipsReq = function () {
        var req = new RoomMsg.sync_chips_rep();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.sync_chips_rep, req);
    };
    /** 同步新用户进入过打鱼场景*/
    NetRoom.prototype.NovicePromptReq = function () {
        var req = new RoomMsg.novice_prompt_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.novice_prompt_req, req);
    };
    NetRoom.prototype.BulletUseLessReq = function (userid, bulletMulti, bulletId) {
        var req = new RoomMsg.bullet_useless_req();
        req.uid = userid;
        req.multi = bulletMulti;
        req.bulletid = bulletId;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.bullet_useless_req, req);
    };
    return NetRoom;
}());
exports.default = NetRoom;
// export class LockInfo {
//     public LockFishId: string = null;               //锁定鱼的ID
//     public IsLockState: boolean = false;            //是否开启锁定状态
//     public LockFishPos: cc.Vec2 = null;             //锁定鱼的坐标
//     public LockNodeSize: cc.Vec2 = null;            //锁定鱼尺寸
//     public PreLockPos: cc.Vec2 = null;              //锁定鱼尺寸
// }
},{"../../GameFacade":3,"../../constant/CommonConstant":7,"../../manager/TipManager":67,"../../utils/CommonUtil":86,"./EventNetResponse":73,"./NetLogin":78}],82:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventNetResponse_1 = require("./EventNetResponse");
var NetWallet = /** @class */ (function () {
    function NetWallet() {
    }
    Object.defineProperty(NetWallet, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetWallet();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetWallet.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_wallet, WalletMsg.c_cmd.main_wallet_resp, WalletMsg.main_wallet_resp, Laya.Handler.create(this, this.mianWalletResp, null, false));
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_wallet, WalletMsg.c_cmd.wallet_resp, WalletMsg.wallet_resp, Laya.Handler.create(this, this.walletResp, null, false));
    };
    /**
     * 钱包弹框返回
     * @param cmd
     * @param pbData
     */
    NetWallet.prototype.mianWalletResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.MainWalletResp, pbData);
        //this.walletCode(pbData.code);
    };
    /**
     * 加钱返回
     * @param cmd
     * @param pbData
     */
    NetWallet.prototype.walletResp = function (cmd, pbData) {
        //GameFacade.Instance.WalletMng.walletCode(pbData.code);
        GameFacade_1.default.Instance.EventMng.dispatch(EventNetResponse_1.default.WalletResp, pbData);
    };
    /**
    * 请求钱包弹框
    */
    NetWallet.prototype.mainWalletReq = function () {
        var req = new WalletMsg.main_wallet_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_wallet, WalletMsg.c_cmd.main_wallet_req, req);
    };
    /**
     * 发送设置的钱
     * @param chip
     * @param auto
     */
    NetWallet.prototype.walletReq = function (chip, auto) {
        var req = new WalletMsg.wallet_req();
        req.chips = chip;
        req.auto = auto;
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_wallet, WalletMsg.c_cmd.wallet_req, req);
    };
    return NetWallet;
}());
exports.default = NetWallet;
},{"../../GameFacade":3,"./EventNetResponse":73}],83:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameFacade_1 = require("../../GameFacade");
var EventConstantResponse_1 = require("../../constant/EventConstantResponse");
var NetWanners = /** @class */ (function () {
    function NetWanners() {
    }
    Object.defineProperty(NetWanners, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new NetWanners();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetWanners.prototype.Init = function () {
        GameFacade_1.default.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_winners, WinnerMsg.c_cmd.winners_resp, WinnerMsg.winners_resp, Laya.Handler.create(this, this.winnersResp, null, false));
    };
    /**
     * 请求获得中奖名单
     * @param type
     */
    NetWanners.prototype.winnersReq = function () {
        var req = new WinnerMsg.winners_req();
        GameFacade_1.default.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_winners, WinnerMsg.c_cmd.winners_req, req);
    };
    /**
     * 中奖名单返回
     * @param cmd
     * @param pbData
     */
    NetWanners.prototype.winnersResp = function (cmd, pbData) {
        GameFacade_1.default.Instance.EventMng.dispatch(EventConstantResponse_1.default.WINNERRESP, pbData);
    };
    return NetWanners;
}());
exports.default = NetWanners;
},{"../../GameFacade":3,"../../constant/EventConstantResponse":8}],84:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var NetReader_1 = require("./NetReader");
var GameFacade_1 = require("./../GameFacade");
var GameEvent_1 = require("./../constant/GameEvent");
var PackageOut_1 = require("./PackageOut");
var PackageIn_1 = require("./PackageIn");
var CommonUtil_1 = require("../utils/CommonUtil");
var BatteryController_1 = require("../controller/BatteryController");
var SocketServe = /** @class */ (function () {
    function SocketServe(_type) {
        this._PACKAGE_OUT_NAME = "_PACKAGE_OUT_NAME_";
        this.curReconnetCount = 0;
        this.netReader = new NetReader_1.default();
        this.EventManager = GameFacade_1.default.Instance.EventMng;
        this.socket = new laya.net.Socket();
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
        this.socket.on(laya.events.Event.OPEN, this, this.onConnect);
        this.socket.on(laya.events.Event.CLOSE, this, this.onClose, []);
        this.socket.on(laya.events.Event.ERROR, this, this.onError);
        this.socket.on(laya.events.Event.MESSAGE, this, this.onMessage);
        this.type = _type;
        this.Init();
    }
    SocketServe.prototype.Init = function () {
        var gameMng = GameFacade_1.default.Instance.GameMng;
        if (gameMng.sip != null) {
            SocketServe.MAX_RECONNET_COUT = gameMng.sip.length;
        }
        else {
            gameMng.sip = new Array();
            for (var i = 0; i < SocketServe.MAX_RECONNET_COUT; i++) {
                gameMng.sip.push(gameMng.serverIp);
            }
        }
    };
    SocketServe.prototype.connect = function (host, port, token) {
        CommonUtil_1.utils.CommonUtils.log(host, port, token);
        if (this.socket.connected) {
            console.debug("socket已连接" + "_" + this.type);
            return;
        }
        if (token != undefined) {
            this.socket.connectByUrl(host + ":" + port);
        }
        else {
            this.socket.connect(host, port);
        }
        Laya.timer.once(5000, this, this.checkErroHandle);
    };
    /** 连接超时*/
    SocketServe.prototype.checkErroHandle = function () {
        CommonUtil_1.utils.CommonUtils.log("checkErroHandle");
        this.curReconnetCount = SocketServe.MAX_RECONNET_COUT;
        this.EventManager.dispatch(GameEvent_1.default.SOCKET_CLOSE + this.getSocketTypeStr());
    };
    SocketServe.prototype.close = function () {
        this.socket.close();
    };
    SocketServe.prototype.onConnect = function () {
        this.EventManager.dispatch(GameEvent_1.default.CONNECT + this.getSocketTypeStr());
        this.curReconnetCount = -1;
        CommonUtil_1.utils.CommonUtils.log("onConnect 正常建立连接:curReconnetCount = ", this.curReconnetCount);
        Laya.timer.clear(this, this.checkErroHandle);
    };
    SocketServe.prototype.onClose = function (ev) {
        CommonUtil_1.utils.CommonUtils.log("onClose 关闭连接:curReconnetCount = ", this.curReconnetCount + "  ev = ", ev);
        //网络问题，正常掉线
        if (ev.reason == "") {
            this.curReconnetCount++;
            this.EventManager.dispatch(GameEvent_1.default.SOCKET_CLOSE + this.getSocketTypeStr());
            //断线关闭自动射击、清除子弹
            BatteryController_1.default.Instance.Shoot(false);
            GameFacade_1.default.Instance.HuntSceneMng.DeleteAllBulletsIns();
            //GameFacade.Instance.HuntSceneMng.DeleteAllFishsIns();
        }
        //被踢下线
        else {
            var arrbuf = this.NetCloseReasonHandle(ev.reason);
            this.onMessage(arrbuf);
        }
    };
    SocketServe.prototype.onError = function () {
        this.curReconnetCount++;
        CommonUtil_1.utils.CommonUtils.log("onError 连接出错:curReconnetCount = ", this.curReconnetCount);
        this.EventManager.dispatch(GameEvent_1.default.SOCKET_CLOSE + this.getSocketTypeStr());
    };
    /**
     * 网络关闭原因处理
     * @param reason 网络关闭 断开原因
     */
    SocketServe.prototype.NetCloseReasonHandle = function (reason) {
        //踢人消息
        var uint8ar = new TextEncoder().encode(reason); //①此处爆红不用处理 ②laya自带的解析有问题
        //var byte:Laya.Byte = new Laya.Byte();
        //byte.writeUTFString(reason);
        // byte.writeArrayBuffer();
        //var uint8ar = byte.getUint8Array(0, byte.length);
        //utils.CommonUtils.log("------------byte = ", byte);
        //utils.CommonUtils.log("------------uint8ar = ", uint8ar);
        var len = uint8ar.length;
        if (len <= 5) {
            len = 6;
        }
        var arrayBuff = new ArrayBuffer(len);
        var u8a = new Uint8Array(arrayBuff);
        for (var i = 0; i < len; i++) {
            u8a[i] = uint8ar[i] ? uint8ar[i] : 0;
        }
        return arrayBuff;
    };
    /**
     * 发送请求
     */
    SocketServe.prototype.send = function (code, data) {
        if (!this.socket.connected)
            return;
        if (0 != code)
            CommonUtil_1.utils.CommonUtils.log("send", code, data);
        if (this.socket != null) {
            var pkg = Laya.Pool.getItemByClass(this._PACKAGE_OUT_NAME, PackageOut_1.default);
            pkg.init(code);
            pkg.pack(data);
            pkg.pos = 0;
            // pkg.writeInt32(pkg.buffer.byteLength);
            this.socket.send(pkg.buffer);
            this.socket.flush();
            Laya.Pool.recover(this._PACKAGE_OUT_NAME, pkg);
            // utils.CommonUtils.log("发送数据code=",code,JSON.stringify(data) );  
        }
        else {
        }
    };
    SocketServe.prototype.connectCountOut = function () {
        var gameManager = GameFacade_1.default.Instance.GameMng;
        if (this.curReconnetCount >= SocketServe.MAX_RECONNET_COUT) {
            return true;
        }
        // 轮询
        else {
            gameManager.serverIp = gameManager.sip[this.curReconnetCount];
            CommonUtil_1.utils.CommonUtils.log("connectCountOut gameManager.serverIp = ", gameManager.serverIp);
            return false;
        }
    };
    /**
     * 收到服务器数据
     */
    SocketServe.prototype.onMessage = function (message) {
        if (message.byteLength <= 0)
            return;
        var packageIn = new PackageIn_1.default(message);
        packageIn.unpack();
        //  utils.CommonUtils.log("onMessage", packageIn.code, packageIn.data);
        this.netReader.addPackage(packageIn);
        this.netReader.notify();
    };
    SocketServe.prototype.getSocketTypeStr = function () {
        return this.type == 0 /* GAME */ ? "" : String(1 /* USER_BEHAVIOR */);
    };
    SocketServe.MAX_RECONNET_COUT = 5;
    return SocketServe;
}());
exports.default = SocketServe;
},{"../controller/BatteryController":12,"../utils/CommonUtil":86,"./../GameFacade":3,"./../constant/GameEvent":9,"./NetReader":69,"./PackageIn":70,"./PackageOut":71}],85:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoDestroy = /** @class */ (function (_super) {
    __extends(AutoDestroy, _super);
    function AutoDestroy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param dt 延时销毁时间
     * @param bDel 是否删除该节点
     */
    AutoDestroy.prototype.InitData = function (dt, bDel) {
        this._delayTime = dt;
        this._bDelete = bDel;
    };
    AutoDestroy.prototype.onEnable = function () {
        Laya.timer.once(this._delayTime, this, this.DestroySelf);
    };
    AutoDestroy.prototype.DestroySelf = function () {
        if (this._bDelete)
            this.owner.destroy();
        else
            this.owner.active = false;
    };
    return AutoDestroy;
}(Laya.Script3D));
exports.default = AutoDestroy;
},{}],86:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumData_1 = require("../Enum/EnumData");
var NetLogin_1 = require("../net/ProtoHander/NetLogin");
/**
* name
*/
var utils;
(function (utils) {
    var CommonUtils = /** @class */ (function () {
        function CommonUtils() {
        }
        /**
         * 获得平台需要的value 数据
         * @param id id名字
         */
        CommonUtils.getValue = function (id) {
            if (document.getElementById(id) == null)
                return;
            var v = document.getElementById(id).getAttribute("value");
            var v2 = this.utf8to16(this.decodeByBase64(v));
            return v2;
        };
        /**
         * 获得当前网页的地址
         */
        CommonUtils.getLocalHref = function () {
            return window.location.href;
        };
        CommonUtils.decodeByBase64 = function (input) {
            var output = [], chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = CommonUtils.KEYSTR64.indexOf(input.charAt(i++));
                enc2 = CommonUtils.KEYSTR64.indexOf(input.charAt(i++));
                enc3 = CommonUtils.KEYSTR64.indexOf(input.charAt(i++));
                enc4 = CommonUtils.KEYSTR64.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output.push(String.fromCharCode(chr1));
                if (enc3 !== 64) {
                    output.push(String.fromCharCode(chr2));
                }
                if (enc4 !== 64) {
                    output.push(String.fromCharCode(chr3));
                }
            }
            return output.join('');
        };
        /**
         * utf8转utf16
         * @param {Object} str
         */
        CommonUtils.utf8to16 = function (str) {
            var out, i, len, c;
            var char2, char3;
            out = "";
            len = str.length;
            i = 0;
            while (i < len) {
                c = str.charCodeAt(i++);
                switch (c >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        out += str.charAt(i - 1);
                        break;
                    case 12:
                    case 13:
                        char2 = str.charCodeAt(i++);
                        out += String.fromCharCode(((c & 0xF) << 6) | (char2 & 0x3F));
                        break;
                    case 14:
                        char2 = str.charCodeAt(i++);
                        char3 = str.charCodeAt(i++);
                        out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                        break;
                }
            }
            return out;
        };
        ;
        CommonUtils.decode = function (id, value) {
            var element = document.getElementById(id);
            if (element) {
                var attribute = element.getAttribute(value);
                if (id === "myVersion") {
                    return attribute;
                }
                return this.decodeByBase64(attribute);
            }
            switch (id) {
                case "sip":
                    return utils.CommonUtils.decodeByBase64("WyJ3c3M6XC9cL2Zpc2gteHh4LmRldi5ibGl6em1pLmNuMTIzIiwid3NzOlwvXC9maXNoLWFiYy5kZXYuYmxpenptaS5jbjEyMyIsIndzczpcL1wvZmlzaC0xMjMuZGV2LmJsaXp6bWkuY24xMjMiLCJ3c3M6XC9cL2Zpc2gtYWJjLmRldi5ibGl6em1pLmNuIiwid3NzOlwvXC9maXNoLWJsaXp6bWkuY25zIiwid3NzOlwvXC9maXNoLWJsaXp6bWkuY25zIiwid3NzOlwvXC9maXNoLWFiYi5ibGl6em1pLmNuIl0=");
                case "serverIp":
                    return utils.CommonUtils.decodeByBase64("d3NzOi8vMS53YW50Z2FtZS5vcmc=");
                case "lobbyUrl":
                    return utils.CommonUtils.decodeByBase64("aHR0cHM6Ly9sb2JieS53YW50Z2FtZS5vcmcvP3R5cGU9aDU=");
                case "serverPort":
                    return utils.CommonUtils.decodeByBase64("ODA5Mw==");
                case "token":
                    return utils.CommonUtils.decodeByBase64("ODAxQjY5NEQ0QTYxNUYyNA==");
                case "historyUrl":
                    return utils.CommonUtils.decodeByBase64("aHR0cHM6Ly9jZG4ubHZ5ZXRvd24uY29tL2hpc3Rvcnk/c2VydmVyX2lkPTI1JmNsaWVudD1oNQ==");
                case "return":
                    return utils.CommonUtils.decodeByBase64("MQ==");
            }
            return "";
        };
        CommonUtils.dateformat = function (time, fmt) {
            var date = new Date(time);
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };
        ;
        /**
         * 数据转换 数据转化成千元符（用于金币格式）
         * @param num 钱
         */
        CommonUtils.numberFormat = function (num) {
            return (num / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        };
        /** 服务器的数值面额转换*/
        CommonUtils.numberFixed = function (num) {
            return num / 100;
        };
        /**
         * 时间戳的转化
         * @param timeStamp
         */
        CommonUtils.numberToDataTime = function (timeStamp) {
            var d = new Date(timeStamp);
            if (timeStamp.toString().length == 10) {
                d = new Date(timeStamp * 1000);
            }
            var str = d.getFullYear() + '-';
            str += (d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1);
            str += '-';
            str += d.getDate() >= 10 ? d.getDate() : "0" + d.getDate();
            str += " ";
            str += d.getHours() >= 10 ? d.getHours() : "0" + d.getHours();
            str += ':';
            str += d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
            str += ':';
            str += d.getSeconds() >= 10 ? d.getSeconds() : "0" + d.getSeconds();
            console.log(d.toLocaleString());
            console.log(d.getTimezoneOffset());
            console.log("ddd:" + d.getFullYear());
            console.log("ddd:" + str);
            return str;
        };
        /**
         * 获得时间戳差（一般用于活动）
         * @param t
         */
        CommonUtils.getTimeDifference = function (t) {
            var budgetTime = new Date(t * 1000);
            var nowTime = new Date(this.getNowActualTimeStamp());
            var dataDiff = budgetTime.getTime() - nowTime.getTime();
            var str = null;
            if (t * 1000 >= this.getNowActualTimeStamp()) {
                var day = dataDiff / (1000 * 60 * 60 * 24);
                day = Math.floor(day);
                str = day > 0 ? day + "d " : "";
                var hours = (dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
                hours = Math.floor(hours);
                str += hours >= 10 ? hours : "0" + hours;
                str += ":";
                var minutes = (dataDiff % (1000 * 60 * 60)) / (1000 * 60);
                minutes = Math.floor(minutes);
                str += minutes >= 10 ? minutes : "0" + minutes;
                str += ":";
                var seconds = (dataDiff % (1000 * 60)) / 1000;
                seconds = Math.round(seconds);
                str += seconds >= 10 ? seconds : "0" + seconds;
            }
            else {
                str = null;
            }
            return str;
        };
        /**
         * 实际同步服务端的时间（现在时间同步服务端的时间）
         */
        CommonUtils.getNowActualTimeStamp = function () {
            return this.getNowTimeStamp() + this.getOffsetTime();
        };
        /**
         * 现在时间戳
         */
        CommonUtils.getNowTimeStamp = function () {
            return Date.now();
        };
        /**
         * 获得偏移时间
         */
        CommonUtils.getOffsetTime = function () {
            return NetLogin_1.default.Instance._timeOffset;
        };
        /**
         * 昵称格式的转化
         * @param name
         */
        CommonUtils.nickNameToFormat = function (name) {
            var n = name;
            if (n.length > 10) {
                n = n.substr(0, 10) + "***";
            }
            return n;
        };
        /**
        * jp转类型
        * @param num 中奖等级
        */
        CommonUtils.jpWinnerToType = function (num) {
            var str;
            switch (num) {
                case 1:
                    str = "一等奖";
                    break;
                case 2:
                    str = "二等奖";
                    break;
                case 3:
                    str = "三等奖";
                    break;
                case 4:
                    str = "四等奖";
                    break;
            }
            return str;
        };
        // public static check_MoneyText(exInput: Laya.TextInput, max: number, min: number, slider: Laya.HSlider = null, MoneySupply: game.MoneySupplyDialog = null): void {
        // 	let str = exInput.text;
        // 	var end: string = "";
        // 	let arr: Array<any> = [];
        // 	// console.log(str + "str");
        // 	if (str.indexOf(".") != -1) {
        // 		end = str.substr(str.indexOf("."), str.length);
        // 		if (end.length > 3)
        // 			end = end.substr(0, 3);
        // 		// console.log(end + "^^^");
        // 		arr = str.substr(0, str.indexOf(".")).split("");
        // 	}
        // 	else
        // 		arr = str.split("");
        // 	var len: number = str.length;
        // 	var a: Array<number> = [];
        // 	for (var i = 0; i < arr.length; i++) {
        // 		if (Number(arr[i]) || arr[i] == "0") {
        // 			var n: number = Number(arr[i]);
        // 			a.push(n)
        // 		}
        // 	}
        // 	var money: number = Number(a.join(""));
        // 	var n: number = 10;
        // 	var x: number = 0;
        // 	if (end != "" && end.length > 1) {
        // 		if (end.length == 3) n = 100;
        // 		x = Number(end.substr(1, end.length)) / n;
        // 	}
        // 	// console.log(money + "money");
        // 	if (money + x > max / 100) {
        // 		money = max / 100;
        // 		exInput.text = String(max / 100);
        // 		this.check_MoneyText(exInput, max, min, slider);
        // 	} else if (money + x < min / 100) {
        // 		money = min / 100;
        // 		exInput.text = String(min / 100);
        // 		this.check_MoneyText(exInput, max, min, slider);
        // 	}
        // 	else
        // 		exInput.text = this.formatNum_00(money) + end;
        // 	if (slider != null) { //进度条有问题。
        // 		var num: number = Number(money + end) / max;
        // 		if (MoneySupply)
        // 			MoneySupply.isSliderEvent = false;
        // 		slider.value = num * 10000;
        // 	}
        // }
        CommonUtils.formatNum_00 = function (num, insertSign) {
            if (insertSign === void 0) { insertSign = ","; }
            var s = num.toString();
            var n;
            var arr;
            if (s.indexOf(".") == -1)
                n = "";
            else {
                arr = s.split("");
                arr.splice(arr.indexOf("."), 1);
                n = "." + arr.splice(arr.length - 2, 2).join("");
                s = arr.join("");
            }
            arr = [];
            var str = Number(num).toString();
            var idx = 0;
            for (var i = str.length - 1; i >= 0; i--) {
                idx++;
                if (idx == 3 && i != 0) {
                    idx = 1;
                    str = str.substring(0, i) + insertSign + str.substr(i);
                    i--;
                }
            }
            return str + n;
        };
        CommonUtils.check_Phone_Text = function (exInput, max, min) {
            var str = exInput.text;
            var end = "";
            var arr = [];
            // console.log(str + "str");
            if (str.indexOf(".") != -1) {
                end = str.substr(str.indexOf("."), str.length);
                if (end.length > 3)
                    end = end.substr(0, 3);
                if (end.indexOf(".") > -1 && end.lastIndexOf(".") > -1 && end.indexOf(".") != end.lastIndexOf(".")) {
                    end = ".0";
                }
                // console.log(end + "^^^");
                arr = str.substr(0, str.indexOf(".")).split("");
            }
            else
                arr = str.split("");
            var len = str.length;
            var a = [];
            for (var i = 0; i < arr.length; i++) {
                if (Number(arr[i]) || arr[i] == "0") {
                    var n = Number(arr[i]);
                    a.push(n);
                }
            }
            var money = Number(a.join(""));
            var n = 10;
            var x = 0;
            if (end != "" && end.length > 1) {
                if (end.length == 3)
                    n = 100;
                x = Number(end.substr(1, end.length)) / n;
            }
            exInput.text = this.formatNum_00(money) + end;
        };
        CommonUtils.getLimitString = function (str, limitLen) {
            var curName = '';
            var curNameSize = 0;
            while (curNameSize < limitLen && str[curName.length] != null) {
                curNameSize += str.charCodeAt(curName.length) <= 126 ? 1 : 2;
                curName += str[curName.length];
            }
            if (curName.length < str.length) {
                curName = curName.substr(0, (curName.charCodeAt(curName.length - 1) <= 126 ? curName.length - 2 : curName.length - 1));
                curName += '...';
            }
            return curName;
        };
        ;
        CommonUtils.stringFormat = function (content, args) {
            for (var i = 0; i < args.length; i++) {
                var regexp = new RegExp('\\{' + i + '\\}', 'gi');
                content = content.replace(regexp, args[i]);
            }
            return content;
        };
        CommonUtils.getDateStr = function (year, month, day, config) {
            config = config || { minDate: "1900-01-01", maxDate: "2099-12-31" };
            utils.CommonUtils.log(utils.CommonUtils.stringFormat("year: {0}, month: {1}, day: {2}", [year, month, day]));
            var arry = [];
            //计算某年某月有多少天,如果是二月，闰年28天否则29天
            var setMonthDays = function (year, month) {
                var er = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
                return [31, er, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
            };
            //得到指定月的上个月最后一天传进来按12月算
            var getPervMonthLastDay = function (year, month) {
                return new Date(year, month - 1, 0).getDate();
            };
            //补齐数位
            var digit = function (num) {
                return num < 10 ? "0" + num : num.toString();
            };
            //当前月第一天是星期几
            var date = setMonthDays(year, month);
            var weekday = new Date(year, month - 1, 1).getDay();
            //根据这个星期算前面几天的上个月最后几天
            var prevLastDay = weekday !== 0 ? weekday : weekday + 7;
            //得到上个月最后一天
            var pervMonthlastDay = getPervMonthLastDay(year, month);
            var currentMonthDays = getPervMonthLastDay(year, month + 1);
            //上月最后几天循环
            var lastdays = pervMonthlastDay - prevLastDay;
            //判断是否超出允许的日期范围
            var startDay = 1;
            var minArr = config.minDate.split("-");
            var maxArr = config.maxDate.split("-");
            var endDay = currentMonthDays;
            var thisDate = new Date(year, month, day);
            var firstDate = new Date(year, month, 1);
            var lastDate = new Date(year, month, currentMonthDays);
            var minTime = new Date(minArr[0], minArr[1], minArr[2]);
            var maxTime = new Date(maxArr[0], maxArr[1], maxArr[2]);
            var minDateDay = minTime.getDate();
            if (minTime > lastDate) {
                startDay = currentMonthDays + 1;
            }
            else if (minTime >= firstDate && minTime <= lastDate) {
                startDay = minDateDay;
            }
            else if (minTime >= firstDate) {
            }
            if (maxTime) {
                var maxDateDay = maxTime.getDate();
                if (maxTime < firstDate) {
                    endDay = startDay;
                }
                else if (maxTime >= firstDate && maxTime <= lastDate) {
                    endDay = maxDateDay;
                }
            }
            //循环上月剩余的天数
            for (var p = prevLastDay - 1; p >= 0; p--) {
                var py = 0;
                var pm = 0;
                var preCls = 0;
                var preDays = digit(pervMonthlastDay - p);
                month === 1 ? (py = year - 1, pm = 13) : (py = year, pm = month);
                var thatpretm = parseInt(py.toString() + digit(pm - 1).toString() + preDays.toString());
                var minpretm = parseInt(minArr[0].toString() + digit(minArr[1]).toString() + digit(minArr[2]).toString());
                var maxnexttm = parseInt(maxArr[0].toString() + digit(maxArr[1]).toString() + digit(maxArr[2]).toString());
                var inTime = thatpretm >= minpretm && thatpretm <= maxnexttm ? "prevdate" : "disabled";
                arry.push({
                    inTime: inTime,
                    py: py,
                    pm: pm - 1,
                    pd: preDays
                });
            }
            //循环本月的天数,将日期按允许的范围分三段拼接
            for (var i = 1; i < startDay; i++) {
                i = digit(i);
                arry.push({
                    inTime: "disabled",
                    py: year,
                    pm: month,
                    pd: i
                });
            }
            for (var j = startDay; j <= endDay; j++) {
                j = digit(j);
                arry.push({
                    inTime: day == j ? "action" : "normal",
                    py: year,
                    pm: month,
                    pd: j
                });
            }
            for (var k = endDay + 1; k <= currentMonthDays; k++) {
                k = digit(k);
                arry.push({
                    inTime: "disabled",
                    py: year,
                    pm: month,
                    pd: k
                });
            }
            //循环补上下个月的开始几天
            var nextDayArr = [], nextMonthStartDays = 42 - prevLastDay - setMonthDays(year, month);
            for (var n = 1; n <= nextMonthStartDays; n++) {
                var ny, nm, nextCls;
                n = digit(n);
                month >= 12 ? (ny = year + 1, nm = 0) : (ny = year, nm = month);
                var thatnexttm = parseInt(ny.toString() + digit(parseInt(nm) + 1).toString() + digit(n).toString()), minnexttm = parseInt(minArr[0].toString() + digit(minArr[1]).toString() + digit(minArr[2]).toString()), maxnexttm = parseInt(maxArr[0].toString() + digit(maxArr[1]).toString() + digit(maxArr[2]).toString());
                nextCls = thatnexttm <= maxnexttm && thatnexttm >= minnexttm ? "nextdate" : nextCls = "disabled";
                arry.push({
                    inTime: nextCls,
                    py: ny,
                    pm: nm + 1,
                    pd: n
                });
            }
            // utils.CommonUtils.log(JSON.stringify(arry));
            return arry;
        };
        CommonUtils.formatNumber = function (num) {
            num = num / 100;
            var sign = num >= 0;
            num = Math.abs(num);
            var str = num.toString();
            if (str.indexOf(".") > -1 && str.split(".")[1].length > 2) {
                var index = str.indexOf(".");
                var len = str.length;
                str = str.substring(0, index + 3);
            }
            var value = str.replace(/(^|\s)\d+/g, function (m) {
                return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
            });
            return sign ? value : "-" + value;
        };
        ;
        CommonUtils.formatNumberWith00 = function (num) {
            var value = this.formatNumber(num);
            utils.CommonUtils.log("value = ", value);
            var i = value.indexOf(".");
            if (i == -1) //没有.
             {
                value += "." + "00";
            }
            else if (i == value.length - 2) {
                value += "0";
            }
            return value;
        };
        CommonUtils.just_num = function (exInput) {
            var str = exInput;
            var end = "";
            var arr = [];
            // console.log(str + "str");
            if (str.indexOf(".") != -1) {
                end = str.substr(str.indexOf("."), str.length);
                if (end.length > 3)
                    end = end.substr(0, 3);
                // console.log(end + "^^^");
                arr = str.substr(0, str.indexOf(".")).split("");
            }
            else
                arr = str.split("");
            var len = str.length;
            var a = [];
            for (var i = 0; i < arr.length; i++) {
                if (Number(arr[i]) || arr[i] == "0") {
                    var n = Number(arr[i]);
                    a.push(n);
                }
            }
            var money = Number(a.join(""));
            var n = 10;
            var x = 0;
            if (end != "" && end.length > 1) {
                if (end.length == 3)
                    n = 100;
                x = Number(end.substr(1, end.length)) / n;
            }
            return money + end;
        };
        CommonUtils.log = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            if (CommonUtils.isDebug) {
                console.log.apply(console, [message].concat(optionalParams));
            }
        };
        CommonUtils.warn = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            if (CommonUtils.isDebug) {
                console.warn.apply(console, [message].concat(optionalParams));
            }
        };
        CommonUtils.random = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        CommonUtils.randomFloat = function (min, max) {
            return Math.random() * (max - min) + min;
        };
        CommonUtils.distance = function (x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        };
        CommonUtils.setItem = function (key, value) {
            Laya.LocalStorage.setItem(key, value);
        };
        CommonUtils.getItem = function (key) {
            return Laya.LocalStorage.getItem(key);
        };
        CommonUtils.getTimeByTimeZone = function (time, index) {
            if (typeof index !== 'number')
                return;
            var d = new Date();
            //本地时间与GMT时间的时间偏移差
            var offset = d.getTimezoneOffset() * 60000;
            //得到现在的格林尼治时间
            var utcTime = time + offset;
            return utcTime + 3600000 * index;
        };
        CommonUtils.httpRequest = function (url, context, onCompleteHandler, onErrorHandler, onProcessHandler, data, method, responseType, headers) {
            if (context === void 0) { context = null; }
            if (onCompleteHandler === void 0) { onCompleteHandler = null; }
            if (onErrorHandler === void 0) { onErrorHandler = null; }
            if (onProcessHandler === void 0) { onProcessHandler = null; }
            if (data === void 0) { data = null; }
            if (method === void 0) { method = "post"; }
            if (responseType === void 0) { responseType = "json"; }
            if (headers === void 0) { headers = null; }
            var xhr = new Laya.HttpRequest();
            xhr.once(Laya.Event.COMPLETE, context, (function (request) {
                return function (e) {
                    onCompleteHandler.apply(context, [e, request.data]);
                };
            })(xhr));
            xhr.once(Laya.Event.ERROR, context, onErrorHandler);
            xhr.once(Laya.Event.PROGRESS, context, onProcessHandler);
            xhr.send(url, data, "get", responseType, []);
            return xhr;
        };
        /***
         *  是否为app版本
         */
        CommonUtils.isApp = function () {
            var userAgent = navigator.userAgent.toLowerCase();
            return userAgent.indexOf("browser_type/android_app") != -1;
        };
        /** 是否需要适配*/
        CommonUtils.isIphonXAdapte = function () {
            var angle = 0;
            //如果是APP大厅,设备是iphoneX 刘海的高度44pt
            //横屏 左旋：90  右旋：-90
            if (window.orientation) {
                angle = window.orientation;
            }
            // else if (screen.msOrientation) {
            // 	angle = screen.msOrientation.;
            // }
            utils.CommonUtils.log("----------screen.msOrientation = ", screen.msOrientation);
            utils.CommonUtils.log("----------angle = ", angle);
            //if (navigator.userAgent.indexOf("Devcice_Type/iPhoneX") > -1) {
            if (angle >= 0) {
                return true;
            }
            //}
            return false;
        };
        /**
         * 将屏幕坐标转换到世界坐标
         * @param cam 相机
         * @param sourcePos 视口坐标
         */
        CommonUtils.ScreenToWorldPoint = function (cam, sourcePos) {
            var bOrthographic = cam.orthographic;
            cam.orthographic = true;
            cam.orthographicVerticalSize = 11.5;
            var outPos = new Laya.Vector3(0, 0, 0);
            cam.convertScreenCoordToOrthographicCoord(sourcePos, outPos);
            outPos.z = 0;
            cam.orthographic = bOrthographic;
            return outPos;
        };
        /**
         * 给对象添加组件并返回添加的组件
         * @param trans 待添加组件的对象
         * @param type 组件类型
         */
        CommonUtils.CustomAddComponent = function (trans, type) {
            var component = trans.getComponent(type);
            if (null == component)
                component = trans.addComponent(type);
            return component;
        };
        CommonUtils.CreatLayaImg = function (path, pos, parent, anchorX, anchorY) {
            if (anchorX === void 0) { anchorX = 0.5; }
            if (anchorY === void 0) { anchorY = 0.5; }
            var img = new Laya.Image(path);
            img.anchorX = anchorX;
            img.anchorY = anchorY;
            img.pos(pos.x, pos.y);
            //img.mouseThrough = false;
            //img.mouseEnabled = true;
            parent.addChild(img);
            return img;
        };
        CommonUtils.CreatLayaLabel = function (pos, width, parent, fontSize) {
            var label = new Laya.Label(""); //info.getChild("UserNameLabel").asLabel;
            label.pos(pos.x, pos.y);
            label.align = "center";
            label.width = width;
            label.fontSize = fontSize;
            parent.addChild(label);
            return label;
        };
        CommonUtils.CreatFontClip = function (pos, skin, sheet, parent, width) {
            var fontclip = new Laya.FontClip(skin, sheet);
            fontclip.align = "center";
            fontclip.width = width;
            fontclip.pos(pos.x, pos.y);
            fontclip.zOrder = EnumData_1.default.SCREEN_ZODER.BounsFont;
            parent.addChild(fontclip);
            return fontclip;
        };
        CommonUtils.isDebug = true;
        CommonUtils.KEYSTR64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        /**
         * 是否是首次进房
         */
        CommonUtils.isFirstEnterRoom = true;
        return CommonUtils;
    }());
    utils.CommonUtils = CommonUtils;
})(utils = exports.utils || (exports.utils = {}));
},{"../Enum/EnumData":1,"../net/ProtoHander/NetLogin":78}]},{},[4])