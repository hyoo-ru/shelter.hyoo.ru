"use strict";
function require( path ){ return $node[ path ] };
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline(uri = 'web.js') {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                self['skipWaiting']();
            });
            self.addEventListener('activate', (event) => {
                self['clients'].claim();
                console.info('$mol_offline activated');
            });
            self.addEventListener('fetch', (event) => {
                if (blacklist.has(event.request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                event.respondWith(fetch(event.request)
                    .then(response => {
                    if (event.request.method !== 'GET')
                        return response;
                    event.waitUntil(caches.open('v1')
                        .then(cache => cache.put(event.request, response)));
                    return response.clone();
                })
                    .catch(error => {
                    return caches.match(event.request)
                        .catch(error2 => $mol_fail_hidden(error));
                }));
            });
            self.addEventListener('beforeinstallprompt', (event) => {
                console.log(event);
                event.prompt();
            });
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            navigator.serviceWorker.register(uri);
        }
    }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//mol/offline/offline.web.ts
;
"use strict";
var $;
(function ($) {
    $mol_offline();
})($ || ($ = {}));
//mol/offline/install/install.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50% , calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0% , calc( 50% - 30% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 0%, 50%, .05 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 5% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if (this.cache instanceof Promise)
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if (result instanceof Promise) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof Promise) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if (result instanceof Promise && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!(result instanceof Promise)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if (this.cache instanceof Promise) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!(this.cache instanceof Promise))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right['source'] && left.flags === right['flags'];
        if (left instanceof Error)
            return left.message === right['message'] && left.stack === right['stack'];
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (left_proto && !Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (left_keys.length !== right_keys.length)
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], Reflect.get(right, key)))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            if (this.cache instanceof Promise)
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if (next instanceof Promise) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watch() {
            new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            if (next !== prev) {
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                this.cache = next;
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (this.sub_from < this.data.length) {
                    if (!$mol_compare_deep(prev, next)) {
                        this.emit();
                    }
                }
            }
            this.cursor = $mol_wire_cursor.fresh;
            if (next instanceof Promise)
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
    $mol_wire_atom.watch();
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (error instanceof Promise)
            $mol_fail_hidden(error);
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if (error instanceof Promise)
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is equired for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise)
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (owner?.host instanceof $mol_view) {
                const suffix = owner.task.name.trim();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.host.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.host.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ inline: 'start' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
//mol/type/result/result.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
//mol/data/value/value.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//mol/data/setup/setup.ts
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//mol/diff/path/path.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mol/error/mix/mix.ts
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//mol/data/error/error.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//mol/data/array/array.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/partial/undefined/undefined.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//mol/data/record/record.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//mol/data/string/string.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_nullable(sub) {
        return $mol_data_setup((val) => {
            if (val === null)
                return null;
            return sub(val);
        }, sub);
    }
    $.$mol_data_nullable = $mol_data_nullable;
})($ || ($ = {}));
//mol/data/nullable/nullable.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//mol/data/number/number.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_integer(val) {
        const val2 = $mol_data_number(val);
        if (Math.floor(val2) === val2)
            return val2;
        return $mol_fail(new $mol_data_error(`${val} is not an integer`));
    }
    $.$mol_data_integer = $mol_data_integer;
})($ || ($ = {}));
//mol/data/integer/integer.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_boolean = (val) => {
        if (typeof val === 'boolean')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a boolean`));
    };
})($ || ($ = {}));
//mol/data/boolean/boolean.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_variant(...sub) {
        return $mol_data_setup((val) => {
            const errors = [];
            for (const type of sub) {
                let hidden = $.$mol_fail_hidden;
                try {
                    $.$mol_fail = $.$mol_fail_hidden;
                    return type(val);
                }
                catch (error) {
                    $.$mol_fail = hidden;
                    if (error instanceof $mol_data_error) {
                        errors.push(error);
                    }
                    else {
                        return $mol_fail_hidden(error);
                    }
                }
            }
            return $mol_fail(new $mol_data_error(`${val} is not any of variants`, ...errors));
        }, sub);
    }
    $.$mol_data_variant = $mol_data_variant;
})($ || ($ = {}));
//mol/data/variant/variant.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_const(ref) {
        return $mol_data_setup((val) => {
            if (Object.is(val, ref))
                return ref;
            return $mol_fail(new $mol_data_error(`${val} is not ${ref}`));
        }, ref);
    }
    $.$mol_data_const = $mol_data_const;
})($ || ($ = {}));
//mol/data/const/const.ts
;
"use strict";
var $;
(function ($) {
    class $mol_store extends $mol_object2 {
        data_default;
        constructor(data_default) {
            super();
            this.data_default = data_default;
        }
        data(next) {
            return next === undefined ? this.data_default : next;
        }
        snapshot(next) {
            return JSON.stringify(this.data(next === undefined ? next : JSON.parse(next)));
        }
        value(key, next) {
            const data = this.data();
            if (next === undefined)
                return data && data[key];
            const Constr = Reflect.getPrototypeOf(data).constructor;
            this.data(Object.assign(new Constr, data, { [key]: next }));
            return next;
        }
        selection(key, next = [0, 0]) {
            return next;
        }
        sub(key, lens) {
            if (!lens)
                lens = new $mol_store();
            const data = lens.data;
            lens.data = next => {
                if (next == undefined) {
                    return this.value(key) ?? lens.data_default;
                }
                return this.value(key, next);
            };
            return lens;
        }
        reset() {
            this.data(this.data_default);
        }
        active() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_store.prototype, "data", null);
    __decorate([
        $mol_mem_key
    ], $mol_store.prototype, "selection", null);
    $.$mol_store = $mol_store;
})($ || ($ = {}));
//mol/store/store.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//mol/time/base/base.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//mol/time/duration/duration.ts
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//mol/time/moment/moment.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_shelter_animal extends $mol_store {
        photos(next) {
            return this.value('photos', next) ?? [];
        }
        id() {
            return String(this.value('id') ?? '');
        }
        name(next) {
            return this.value('name', next) ?? '';
        }
        card(next) {
            return this.value('card', next) ?? '';
        }
        chip(next) {
            return this.value('chip', next) ?? '';
        }
        cage(next) {
            return this.value('cage', next) ?? '';
        }
        size(next) {
            return this.value('size', next) ?? '';
        }
        ear(next) {
            return this.value('ears', next) ?? '';
        }
        tail(next) {
            return this.value('tail', next) ?? '';
        }
        color(next) {
            return this.value('color', next) ?? '';
        }
        fur(next) {
            return this.value('fur', next) ?? '';
        }
        description(next) {
            return this.value('description', next) ?? '';
        }
        weight(next) {
            return this.value('weight', next) ?? 0;
        }
        kind(next) {
            return this.value('kind', next) ?? '';
        }
        gender(next) {
            return this.value('gender', next) ?? '';
        }
        shelter_id() {
            return String(this.value('shelterId') ?? '');
        }
        arrived_date(next) {
            let str = next?.toString();
            str = this.value('arrivedAt', str);
            return str && new $mol_time_moment(str).mask('1111-11-11') || null;
        }
        departed_date(next) {
            let str = next?.toString();
            str = this.value('departedAt', str);
            return str && new $mol_time_moment(str).mask('1111-11-11') || null;
        }
        born_date(next) {
            let str = next?.toString();
            str = this.value('birthDate', str);
            return str && new $mol_time_moment(str).mask('1111-11-11') || null;
        }
    }
    $.$hyoo_shelter_animal = $hyoo_shelter_animal;
})($ || ($ = {}));
//hyoo/shelter/animal/animal.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            const response = $mol_wire_sync(this).request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            return this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_shelter_transport extends $mol_object2 {
        static api_base() {
            return 'hyoo/shelter/data/';
        }
        static token(next) {
            return this.$.$mol_state_local.value('token', next);
        }
        static headers() {
            const headers = {
                'Content-Type': 'application/json',
            };
            const token = this.token();
            if (!token)
                return headers;
            return {
                ...headers,
                'Authorization': `Bearer ${token}`,
            };
        }
        static load(path) {
            return this.$.$mol_fetch.json(this.api_base() + path + '.json', {
                headers: this.headers()
            });
        }
        static link(path) {
            return this.api_base() + path;
        }
        static save(path, method, body) {
            const uri = this.api_base() + path;
            const res = this.$.$mol_fetch.json(uri, {
                method,
                headers: this.headers(),
                body: JSON.stringify(body),
            });
            return res;
        }
        static send(path, file) {
            const uri = this.api_base() + path;
            const body = new FormData;
            body.append('photos[0]', file);
            const res = this.$.$mol_fetch.json(uri, {
                method: 'post',
                headers: { ...this.headers(), 'Content-Type': 'multipart/form-data' },
                body,
            });
            return res;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_transport, "token", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_transport, "headers", null);
    __decorate([
        $mol_action
    ], $hyoo_shelter_transport, "load", null);
    __decorate([
        $mol_action
    ], $hyoo_shelter_transport, "save", null);
    __decorate([
        $mol_action
    ], $hyoo_shelter_transport, "send", null);
    $.$hyoo_shelter_transport = $hyoo_shelter_transport;
})($ || ($ = {}));
//hyoo/shelter/transport/transport.ts
;
"use strict";
var $;
(function ($) {
    const Animals = $mol_data_array($mol_data_record({
        arrivedAt: $mol_data_string,
        departedAt: $mol_data_nullable($mol_data_string),
        birthDate: $mol_data_string,
        card: $mol_data_string,
        chip: $mol_data_string,
        color: $mol_data_string,
        description: $mol_data_string,
        ears: $mol_data_string,
        name: $mol_data_string,
        photos: $mol_data_array($mol_data_string),
        id: $mol_data_integer,
        weight: $mol_data_number,
        readyForDepart: $mol_data_boolean,
        gender: $mol_data_variant($mol_data_const('Male'), $mol_data_const('Female')),
        kind: $mol_data_variant($mol_data_const('Cat'), $mol_data_const('Dog')),
        size: $mol_data_string,
        tail: $mol_data_string,
        shelterId: $mol_data_number,
        fur: $mol_data_string,
    }));
    class $hyoo_shelter_shelter_animals extends $mol_store {
        data(next) {
            if (next !== undefined)
                return next;
            const list = Animals(this.$.$hyoo_shelter_transport.load('animals'));
            const dict = {};
            for (const item of list) {
                dict[item.id] = item;
            }
            return dict;
        }
        value(key, next) {
            if (next) {
                try {
                    this.$.$hyoo_shelter_transport.save(`animals/${key}`, 'put', next);
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    console.error(error);
                }
            }
            return super.value(key, next);
        }
        list() {
            return Object.keys(this.data()).map(key => this.Animal(key));
        }
        Animal(index) {
            return this.sub(index, new $hyoo_shelter_animal(this.data()[index] ?? {}));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_animals.prototype, "data", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_animals.prototype, "list", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_shelter_shelter_animals.prototype, "Animal", null);
    $.$hyoo_shelter_shelter_animals = $hyoo_shelter_shelter_animals;
    class $hyoo_shelter_shelter extends $mol_store {
        id() {
            return String(this.value('id') ?? '');
        }
        name(next) {
            return this.value('name', next) ?? '';
        }
    }
    $.$hyoo_shelter_shelter = $hyoo_shelter_shelter;
})($ || ($ = {}));
//hyoo/shelter/shelter/shelter.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n[mol_book2] > * + *:not([mol_book2_placeholder]):before {\n\tdisplay: block;\n\tcontent: '=';\n\topacity: .5;\n\tposition: absolute;\n\ttop: -.5rem;\n\tleft: -.35rem;\n}\n\n[mol_book2] > * {\n\tbackground-color: var(--mol_theme_card);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    const Response = $mol_data_record({
        token: $mol_data_string,
    });
    class $hyoo_shelter_auth extends $mol_object2 {
        static auth(creds) {
            this.$.$hyoo_shelter_transport.token($mol_guid());
            return true;
        }
        static signed() {
            return Boolean(this.$.$hyoo_shelter_transport.token());
        }
        static drop() {
            this.$.$hyoo_shelter_transport.token('');
        }
    }
    __decorate([
        $mol_action
    ], $hyoo_shelter_auth, "auth", null);
    $.$hyoo_shelter_auth = $hyoo_shelter_auth;
})($ || ($ = {}));
//hyoo/shelter/auth/auth.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay;\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                return `${this.align_vert()}_${this.align_hor()}`;
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (val) => this.showed(val);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        length_max() {
            return +Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1rem;\n\theight: 1rem;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25rem 0;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(val) {
            if (val !== undefined)
                return val;
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Menu()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        Content() {
            return this.control();
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .375rem;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .375rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_allowed() {
            return true;
        }
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        rows() {
            return [
                this.Body(),
                this.Foot()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_shelter_auth_form extends $mol_page {
        title() {
            return "Вход в систему управления приютов";
        }
        plugins() {
            return [
                this.Enter()
            ];
        }
        body() {
            return [
                this.Form()
            ];
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Enter() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
        Login_name() {
            return "Логин";
        }
        login(val) {
            if (val !== undefined)
                return val;
            return "user";
        }
        Login() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.login(val);
            obj.dictionary = () => ({
                user: "ЖКХ",
                gbu1: "ГБУ_1",
                gbu2: "ГБУ_2",
                gbu3: "ГБУ_3",
                gbu4: "ГБУ_4",
                gbu5: "ГБУ_5",
                gbu6: "ГБУ_6",
                gbu7: "ГБУ_7",
                gbu8: "ГБУ_8",
                gbu9: "ГБУ_9",
                gbu10: "ГБУ_10",
                gbu11: "ГБУ_11",
                gbu12: "ГБУ_12",
                gbu13: "ГБУ_13",
                admin1: "Префектура_1",
                admin2: "Префектура_2",
                admin3: "Префектура_3",
                admin4: "Префектура_4",
                admin5: "Префектура_5",
                admin6: "Префектура_6",
                admin7: "Префектура_7",
                admin8: "Префектура_8",
                trustee1: "Приют_1",
                trustee2: "Приют_2",
                trustee3: "Приют_3",
                trustee4: "Приют_4",
                trustee5: "Приют_5",
                trustee6: "Приют_6",
                trustee7: "Приют_7",
                trustee8: "Приют_8",
                trustee9: "Приют_9",
                trustee10: "Приют_10",
                trustee11: "Приют_11",
                trustee12: "Приют_12",
                trustee13: "Приют_13"
            });
            return obj;
        }
        Login_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.Login_name();
            obj.control = () => this.Login();
            return obj;
        }
        Pass_name() {
            return "Пароль";
        }
        pass(val) {
            if (val !== undefined)
                return val;
            return "password";
        }
        Pass() {
            const obj = new this.$.$mol_string();
            obj.type = () => "password";
            obj.value = (val) => this.pass(val);
            obj.enabled = () => false;
            return obj;
        }
        Pass_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.Pass_name();
            obj.control = () => this.Pass();
            return obj;
        }
        Auth_label() {
            return "Войти";
        }
        auth(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.Auth_label();
            obj.click = (val) => this.auth(val);
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Login_field(),
                this.Pass_field()
            ];
            obj.buttons = () => [
                this.Submit()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "Enter", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "login", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "Login", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "Login_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "pass", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "Pass", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "Pass_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "auth", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_auth_form.prototype, "Form", null);
    $.$hyoo_shelter_auth_form = $hyoo_shelter_auth_form;
})($ || ($ = {}));
//hyoo/shelter/auth/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_shelter_auth_form, {
            Title: {
                justifyContent: 'center',
            },
            Form: {
                margin: 'auto',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/shelter/auth/form/form.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_shelter_auth_form extends $.$hyoo_shelter_auth_form {
            auth() {
                const person = this.$.$hyoo_shelter_auth.auth({
                    username: this.login(),
                    password: this.pass(),
                });
            }
            submit(event) {
                this.Submit().event_activate(event);
            }
        }
        $$.$hyoo_shelter_auth_form = $hyoo_shelter_auth_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/shelter/auth/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    const Shelters = $mol_data_array($mol_data_record({
        id: $mol_data_integer,
        name: $mol_data_string,
    }));
    class $hyoo_shelter_shelter_list extends $mol_store {
        data() {
            const list = Shelters(this.$.$hyoo_shelter_transport.load('shelters'));
            const dict = {};
            for (const item of list) {
                dict[item.id] = item;
            }
            return dict;
        }
        list() {
            return Object.keys(this.data()).map(key => this.Shelter(key));
        }
        Shelter(index) {
            return this.sub(index, new $hyoo_shelter_shelter(this.data()[index] ?? {}));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_list.prototype, "data", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_list.prototype, "list", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_shelter_shelter_list.prototype, "Shelter", null);
    $.$hyoo_shelter_shelter_list = $hyoo_shelter_shelter_list;
})($ || ($ = {}));
//hyoo/shelter/shelter/list/list.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    continue;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_download extends $mol_icon {
        path() {
            return "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";
        }
    }
    $.$mol_icon_download = $mol_icon_download;
})($ || ($ = {}));
//mol/icon/download/-view.tree/download.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_upload extends $mol_icon {
        path() {
            return "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";
        }
    }
    $.$mol_icon_upload = $mol_icon_upload;
})($ || ($ = {}));
//mol/icon/upload/-view.tree/upload.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_open extends $mol_button_minor {
        sub() {
            return [
                this.Icon(),
                this.Native()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_upload();
            return obj;
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        Native() {
            const obj = new this.$.$mol_button_open_native();
            obj.files = (next) => this.files(next);
            obj.accept = () => this.accept();
            obj.multiple = () => this.multiple();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Native", null);
    $.$mol_button_open = $mol_button_open;
    class $mol_button_open_native extends $mol_view {
        dom_name() {
            return "input";
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        attr() {
            return {
                type: "file",
                accept: this.accept(),
                multiple: this.multiple()
            };
        }
        event() {
            return {
                change: (next) => this.picked(next)
            };
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        picked(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "picked", null);
    $.$mol_button_open_native = $mol_button_open_native;
})($ || ($ = {}));
//mol/button/open/-view.tree/open.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/open/open.view.css", "[mol_button_open_native] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: -100%;\n\twidth: 100%;\n\theight: 200%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));
//mol/button/open/-css/open.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_open_native extends $.$mol_button_open_native {
            dom_node() {
                return super.dom_node();
            }
            picked() {
                const files = this.dom_node().files;
                if (!files || !files.length)
                    return;
                this.files([...files]);
            }
        }
        $$.$mol_button_open_native = $mol_button_open_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/open/open.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading(),
                decoding: this.decoding(),
                crossOrigin: this.cors()
            };
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
        decoding() {
            return "async";
        }
        cors() {
            return null;
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_attach extends $mol_view {
        items(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        sub() {
            return [
                this.Content()
            ];
        }
        Add() {
            const obj = new this.$.$mol_button_open();
            obj.title = () => this.attach_title();
            obj.files = (val) => this.attach_new(val);
            return obj;
        }
        Item(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.item_drop(id, event);
            obj.sub = () => [
                this.Image(id)
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.content();
            return obj;
        }
        attach_title() {
            return "";
        }
        attach_new(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        item_drop(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        item_uri(id) {
            return "";
        }
        Image(id) {
            const obj = new this.$.$mol_image();
            obj.title = () => "";
            obj.uri = () => this.item_uri(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "items", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "Add", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "Item", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "attach_new", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "item_drop", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "Image", null);
    $.$mol_attach = $mol_attach;
})($ || ($ = {}));
//mol/attach/-view.tree/attach.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/attach/attach.view.css", "[mol_attach_item] {\n\twidth: 6rem;\n\theight: 6rem;\n\tborder-radius: var(--mol_gap_round);\n\tpadding: 0;\n}\n\n[mol_attach_image] {\n\tbackground: var(--mol_theme_card);\n\twidth: 100%;\n\theight: 100%;\n}\n\n[mol_attach_add] {\n\tmargin: .375rem;\n\tbackground: var(--mol_theme_card);\n\twidth: 6rem;\n\theight: 6rem;\n\talign-items: center;\n\tjustify-content: center;\n\toverflow: hidden;\n}\n\n[mol_attach_add_icon] {\n\twidth: 50%;\n\theight: 50%;\n}\n");
})($ || ($ = {}));
//mol/attach/-css/attach.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_attach extends $.$mol_attach {
            attach_new(files) {
                this.items([
                    ...this.items(),
                    ...files.map(file => URL.createObjectURL(file)),
                ]);
            }
            content() {
                return [...this.items().map((_, i) => this.Item(i)), this.Add()];
            }
            item_uri(index) {
                return this.items()[index];
            }
            item_drop(index, event) {
                const items = this.items();
                this.items([
                    ...items.slice(0, index),
                    ...items.slice(index + 1),
                ]);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_attach.prototype, "content", null);
        $$.$mol_attach = $mol_attach;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/attach/attach.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_list extends $mol_view {
        Option(id) {
            const obj = new this.$.$mol_check();
            obj.checked = (val) => this.option_checked(id, val);
            obj.label = () => this.option_label(id);
            obj.enabled = () => this.option_enabled(id);
            obj.hint = () => this.option_hint(id);
            obj.minimal_height = () => 24;
            return obj;
        }
        options() {
            return {};
        }
        keys() {
            return [];
        }
        sub() {
            return this.items();
        }
        option_checked(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        option_title(id) {
            return "";
        }
        option_label(id) {
            return [
                this.option_title(id)
            ];
        }
        enabled() {
            return true;
        }
        option_enabled(id) {
            return this.enabled();
        }
        option_hint(id) {
            return "";
        }
        items() {
            return [];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "Option", null);
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "option_checked", null);
    $.$mol_check_list = $mol_check_list;
})($ || ($ = {}));
//mol/check/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 0 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"] {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"][disabled] {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_switch extends $mol_check_list {
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//mol/switch/-view.tree/switch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/switch/switch.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_minus extends $mol_icon {
        path() {
            return "M19,13H5V11H19V13Z";
        }
    }
    $.$mol_icon_minus = $mol_icon_minus;
})($ || ($ = {}));
//mol/icon/minus/-view.tree/minus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_number extends $mol_view {
        precision_view() {
            return this.precision();
        }
        precision_change() {
            return this.precision();
        }
        value(val) {
            if (val !== undefined)
                return val;
            return +NaN;
        }
        sub() {
            return [
                this.String(),
                this.Dec(),
                this.Inc()
            ];
        }
        precision() {
            return 1;
        }
        value_string(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        string_enabled() {
            return this.enabled();
        }
        String() {
            const obj = new this.$.$mol_string();
            obj.type = () => "tel";
            obj.value = (val) => this.value_string(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.string_enabled();
            return obj;
        }
        event_dec(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        dec_enabled() {
            return this.enabled();
        }
        dec_icon() {
            const obj = new this.$.$mol_icon_minus();
            return obj;
        }
        Dec() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_dec(val);
            obj.enabled = () => this.dec_enabled();
            obj.sub = () => [
                this.dec_icon()
            ];
            return obj;
        }
        event_inc(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        inc_enabled() {
            return this.enabled();
        }
        inc_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Inc() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_inc(val);
            obj.enabled = () => this.inc_enabled();
            obj.sub = () => [
                this.inc_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value_string", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "dec_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_inc", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "inc_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Inc", null);
    $.$mol_number = $mol_number;
})($ || ($ = {}));
//mol/number/-view.tree/number.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n\n[mol_number_inc][disabled],\n[mol_number_dec][disabled] {\n\tvisibility: hidden;\n}\n");
})($ || ($ = {}));
//mol/number/-css/number.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            event_dec(next) {
                this.value((Number(this.value()) || 0) - this.precision_change());
            }
            event_inc(next) {
                this.value((Number(this.value()) || 0) + this.precision_change());
            }
            value_string(next) {
                if (next !== void 0) {
                    this.value(next === '' ? null : Number(next));
                }
                const precisionView = this.precision_view();
                const value = next ? Number(next) : this.value();
                if (value === 0)
                    return '0';
                if (!value)
                    return '';
                if (precisionView >= 1) {
                    return (value / precisionView).toFixed();
                }
                else {
                    const fixedNumber = Math.log10(1 / precisionView);
                    return value.toFixed(fixedNumber);
                }
            }
        }
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/number/number.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//mol/icon/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $mol_pop {
        query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.suggests_showed(val);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (val) => this.clear(val)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        bring() {
            return this.Query().bring();
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.query(val);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//mol/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const host = {};
        const fiber = new $mol_wire_task(calculate.name, calculate, host, []);
        fiber.plan();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_wire_task(this + '.' + calculate.name, calculate, this, args);
            return fiber.async();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_sync(request) {
        throw new Error('Use $mol_wire_sync instead');
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        $mol_wire_fiber.sync();
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    class $mol_fiber_solid extends $mol_wrapper {
        static func(task) {
            return task;
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber {
        static method = $mol_action;
    }
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//mol/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/search/-css/search.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                $mol_fiber_defer(() => {
                    this.Query().focused(true);
                });
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_stack extends $mol_view {
    }
    $.$mol_stack = $mol_stack;
})($ || ($ = {}));
//mol/stack/-view.tree/stack.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));
//mol/stack/-css/stack.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                target: "_blank"
            };
        }
        uri() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//mol/text/code/token/-view.tree/token.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(60, 70, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/token/token.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            obj.uri = () => this.token_uri(id);
            return obj;
        }
        find_pos(id) {
            return null;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        token_uri(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//mol/text/code/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//mol/syntax2/syntax2.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?[*+-]|\d+\.) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[dygimsu]*(?!\p{Letter})|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void|int|float|ref)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));
//mol/syntax2/md/md.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_row, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_token_pos", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_content_copy extends $mol_icon {
        path() {
            return "M19,21H8V7H19M19,5H8C6.9,5 6,5.9 6,7V21C6,22.1 6.9,23 8,23H19C20.1,23 21,22.1 21,21V7C21,5.9 20.1,5 19,5M16,1H4C2.9,1 2,1.9 2,3V17H4V3H16V1Z";
        }
    }
    $.$mol_icon_content_copy = $mol_icon_content_copy;
})($ || ($ = {}));
//mol/icon/content/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_copy extends $mol_button_minor {
        text() {
            return "";
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_content_copy();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "Icon", null);
    $.$mol_button_copy = $mol_button_copy;
})($ || ($ = {}));
//mol/button/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            click(event) {
                this.$.$mol_dom_context.navigator.clipboard.writeText(this.text());
            }
        }
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/copy/copy.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        find_pos(id) {
            return null;
        }
        uri_base() {
            return "";
        }
        sub() {
            return [
                this.Rows(),
                this.Copy()
            ];
        }
        sidebar_showed() {
            return false;
        }
        render_visible_only() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        highlight() {
            return "";
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.syntax = () => this.syntax();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        Rows() {
            const obj = new this.$.$mol_list();
            obj.render_visible_only = () => this.render_visible_only();
            obj.rows = () => this.rows();
            return obj;
        }
        Copy() {
            const obj = new this.$.$mol_button_copy();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_code_Copy_hint');
            obj.text = () => this.text();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Rows", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Copy", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//mol/text/code/-view.tree/code.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            Rows: {
                padding: $mol_gap.text,
            },
            Copy: {
                position: 'sticky',
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
                top: 0,
                left: 0,
                Icon: {
                    background: {
                        color: $mol_theme.card,
                    },
                },
                transform: 'translate(-6px,-1px)',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_row: {
                            margin: {
                                left: rem(1.5),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        spellcheck() {
            return true;
        }
        length_max() {
            return +Infinity;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        bring() {
            return this.Edit().bring();
        }
        Edit() {
            const obj = new this.$.$mol_textarea_edit();
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.spellcheck = () => this.spellcheck();
            obj.length_max = () => this.length_max();
            obj.selection = (val) => this.selection(val);
            return obj;
        }
        row_numb(id) {
            return 0;
        }
        highlight() {
            return "";
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (id) => this.row_numb(id);
            obj.sidebar_showed = () => this.sidebar_showed();
            obj.highlight = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
    class $mol_textarea_edit extends $mol_string {
        dom_name() {
            return "textarea";
        }
        field() {
            return {
                ...super.field(),
                scrollTop: 0
            };
        }
    }
    $.$mol_textarea_edit = $mol_textarea_edit;
})($ || ($ = {}));
//mol/textarea/-view.tree/textarea.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n\ttab-size: 4;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n\ttab-size: inherit;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttab-size: inherit;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.5rem;\n\twidth: calc( 100% - 1.5rem );\n}\n\n[mol_textarea_edit]:hover + [mol_textarea_view] {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_textarea_edit]:focus + [mol_textarea_view] {\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/textarea/-css/textarea.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                document.execCommand('insertText', false, '\t');
            }
            indent_dec() {
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                switch (event.keyCode) {
                    case $mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/textarea/textarea.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_calendar extends $mol_icon {
        path() {
            return "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z";
        }
    }
    $.$mol_icon_calendar = $mol_icon_calendar;
})($ || ($ = {}));
//mol/icon/calendar/-view.tree/calendar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_format extends $mol_string {
        allow() {
            return "0123456789";
        }
        hint() {
            return this.mask("0");
        }
        keyboard() {
            return "numeric";
        }
        mask(id) {
            return "";
        }
    }
    $.$mol_format = $mol_format;
})($ || ($ = {}));
//mol/format/-view.tree/format.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/format/format.view.css", "[mol_format] {\n\tfont-family: monospace;\n}\n");
})($ || ($ = {}));
//mol/format/-css/format.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_format extends $.$mol_format {
            selection([from, to] = [0, 0]) {
                const prev = $mol_wire_probe(() => this.selection());
                if (!prev)
                    return [0, 100];
                if (from !== to)
                    return [from, to];
                const allow = this.allow();
                const value = this.value_changed();
                const filtered = [...value].filter(letter => allow.includes(letter)).join('');
                const mask = this.mask(filtered);
                if ((prev?.[0] ?? 0) >= from)
                    return [from, to];
                const lastAllow = (value.length - [...value].reverse().findIndex(letter => allow.includes(letter))) % (value.length + 1);
                if (lastAllow < from) {
                    from = to = lastAllow;
                }
                while (mask[from] && mask[from] !== '_') {
                    ++from;
                    ++to;
                }
                return [from, to];
            }
            value_changed(next) {
                const allow = this.allow();
                const normalize = (val) => {
                    val = [...val].filter(letter => allow.includes(letter)).join('');
                    const letters = [...val].reverse();
                    return this.mask(val).replace(/_/gu, () => letters.pop() ?? '_') + letters.reverse().join('');
                };
                if (next !== undefined) {
                    next = normalize(next);
                    if ([...next].filter(letter => allow.includes(letter)).join('')) {
                        if (next.includes('_'))
                            return next;
                    }
                    else {
                        next = '';
                    }
                }
                return normalize(this.value(next));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "selection", null);
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "value_changed", null);
        $$.$mol_format = $mol_format;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/format/format.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left extends $mol_icon {
        path() {
            return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
        }
    }
    $.$mol_icon_chevron_left = $mol_icon_chevron_left;
})($ || ($ = {}));
//mol/icon/chevron/left/-view.tree/left.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//mol/icon/chevron/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hor extends $mol_view {
    }
    $.$mol_hor = $mol_hor;
})($ || ($ = {}));
//mol/hor/-view.tree/hor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_hor, {
        display: 'flex',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flex: {
            grow: 1,
            shrink: 0,
            basis: 'auto',
        },
    });
})($ || ($ = {}));
//mol/hor/hor.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hor extends $.$mol_hor {
            minimal_width() {
                let min = 0;
                for (const view of this.sub()) {
                    if (!(view instanceof $mol_view))
                        continue;
                    min += view.minimal_width();
                }
                return min;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_hor.prototype, "minimal_width", null);
        $$.$mol_hor = $mol_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hor/hor.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_calendar extends $mol_list {
        sub() {
            return [
                this.Head(),
                this.Weekdays()
            ];
        }
        weeks() {
            return [];
        }
        weeks_count() {
            return 6;
        }
        Weekday(id) {
            const obj = new this.$.$mol_calendar_day();
            obj.holiday = () => this.weekend(id);
            obj.sub = () => [
                this.weekday(id)
            ];
            return obj;
        }
        Week(id) {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.week_days(id);
            return obj;
        }
        Day(id) {
            const obj = new this.$.$mol_calendar_day();
            obj.ghost = () => this.day_ghost(id);
            obj.holiday = () => this.day_holiday(id);
            obj.selected = () => this.day_selected(id);
            obj.theme = () => this.day_theme(id);
            obj.sub = () => this.day_content(id);
            return obj;
        }
        month_string() {
            return "";
        }
        month_moment() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        head() {
            return [
                this.Title()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        weekdays() {
            return [];
        }
        Weekdays() {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.weekdays();
            return obj;
        }
        weekend(id) {
            return false;
        }
        weekday(id) {
            return "";
        }
        week_days(id) {
            return [];
        }
        day_ghost(id) {
            return false;
        }
        day_holiday(id) {
            return false;
        }
        day_selected(id) {
            return false;
        }
        day_theme(id) {
            return "";
        }
        day_text(id) {
            return "";
        }
        day_content(id) {
            return [
                this.day_text(id)
            ];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Weekday", null);
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Week", null);
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Day", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "month_moment", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Weekdays", null);
    $.$mol_calendar = $mol_calendar;
    class $mol_calendar_day extends $mol_view {
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 36;
        }
        attr() {
            return {
                mol_calendar_holiday: this.holiday(),
                mol_calendar_ghost: this.ghost(),
                mol_calendar_selected: this.selected(),
                mol_theme: this.theme()
            };
        }
        holiday() {
            return false;
        }
        ghost() {
            return false;
        }
        selected() {
            return false;
        }
        theme() {
            return "";
        }
    }
    $.$mol_calendar_day = $mol_calendar_day;
})($ || ($ = {}));
//mol/calendar/-view.tree/calendar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/calendar/calendar.view.css", "[mol_calendar] {\n\tdisplay: table;\n\tfont-family: monospace;\n}\n\n[mol_calendar_head] {\n\tdisplay: table-caption;\n}\n\n[mol_calendar_title] {\n\tjustify-content: center;\n}\n\n[mol_calendar_weekdays] ,\n[mol_calendar_week] {\n\tdisplay: table-row;\n\tpadding: 0;\n}\n\n[mol_calendar_day] {\n\tdisplay: table-cell;\n\tpadding: .25rem .5rem;\n\ttext-align: center;\n\tword-break: normal;\n\tbox-shadow: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_calendar_weekday] {\n\tcolor: var(--mol_theme_shade);\n\tborder-bottom: 1px solid var(--mol_theme_line);\n}\n\n[mol_calendar_holiday] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_calendar_ghost] {\n\topacity: .2;\n}\n");
})($ || ($ = {}));
//mol/calendar/-css/calendar.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar extends $.$mol_calendar {
            month_moment() {
                const moment = new $mol_time_moment(this.month_string() || undefined);
                return new $mol_time_moment({ year: moment.year, month: moment.month });
            }
            title() {
                return this.month_moment().toString('Month YYYY');
            }
            day_first() {
                return this.month_moment().merge({ day: 0 });
            }
            day_last() {
                return this.day_first().shift('P1M');
            }
            day_draw_from() {
                let weekday = this.day_first().weekday;
                return this.day_first().shift({ day: -weekday });
            }
            weekdays() {
                const next = [];
                for (let index = 0; index < 7; ++index) {
                    next.push(this.Weekday(index));
                }
                return next;
            }
            weekday(index) {
                return this.day_draw_from().shift({ day: index }).toString('WD');
            }
            weekend(index) {
                return [5, 6].indexOf(index) >= 0;
            }
            sub() {
                return [
                    ...super.sub(),
                    ...this.weeks(),
                ];
            }
            weeks() {
                const weeks = [];
                let count = this.weeks_count();
                for (let i = 0; i < count; ++i) {
                    weeks.push(this.Week(i));
                }
                return weeks;
            }
            week_days(index) {
                const days = [];
                let start = this.day_draw_from().shift({ day: index * 7 });
                for (let i = 0; i < 7; ++i) {
                    days.push(this.Day(start.shift({ day: i }).toString('YYYY-MM-DD')));
                }
                return days;
            }
            day_text(day) {
                return new $mol_time_moment(day).toString("D");
            }
            day_holiday(day) {
                return this.weekend(new $mol_time_moment(day).weekday);
            }
            day_ghost(day) {
                return new $mol_time_moment(day).toString('YYYY-MM') !== this.day_first().toString('YYYY-MM');
            }
            day_selected(day) {
                return new $mol_time_moment().toString('YYYY-MM-DD') === day;
            }
            day_theme(day) {
                return this.day_selected(day) ? '$mol_theme_current' : super.day_theme(day);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "month_moment", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_first", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_last", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_draw_from", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weekdays", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "weekday", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weeks", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "week_days", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_holiday", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_ghost", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_selected", null);
        $$.$mol_calendar = $mol_calendar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/calendar/calendar.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_date extends $mol_pick {
        Icon() {
            const obj = new this.$.$mol_icon_calendar();
            return obj;
        }
        bubble_content() {
            return [
                this.Input(),
                this.Calendar()
            ];
        }
        value_number(val) {
            if (val !== undefined)
                return val;
            return +NaN;
        }
        value_moment(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        input_mask(id) {
            return "";
        }
        enabled() {
            return true;
        }
        Input() {
            const obj = new this.$.$mol_format();
            obj.value = (val) => this.value(val);
            obj.mask = (id) => this.input_mask(id);
            obj.enabled = () => this.enabled();
            return obj;
        }
        month_moment() {
            return this.value_moment();
        }
        day_selected(id) {
            return false;
        }
        day_click(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        prev_hint() {
            return this.$.$mol_locale.text('$mol_date_prev_hint');
        }
        prev(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Prev_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Prev() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.prev_hint();
            obj.click = (event) => this.prev(event);
            obj.sub = () => [
                this.Prev_icon()
            ];
            return obj;
        }
        next_hint() {
            return this.$.$mol_locale.text('$mol_date_next_hint');
        }
        next(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Next_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Next() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.next_hint();
            obj.click = (event) => this.next(event);
            obj.sub = () => [
                this.Next_icon()
            ];
            return obj;
        }
        Calendar_tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Prev(),
                this.Calendar_title(),
                this.Next()
            ];
            return obj;
        }
        Calendar_title() {
            return this.Calendar().Title();
        }
        Calendar() {
            const obj = new this.$.$mol_date_calendar();
            obj.month_moment = () => this.month_moment();
            obj.day_selected = (id) => this.day_selected(id);
            obj.day_click = (id, event) => this.day_click(id, event);
            obj.head = () => [
                this.Calendar_tools()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value_number", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value_moment", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Input", null);
    __decorate([
        $mol_mem_key
    ], $mol_date.prototype, "day_click", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "prev", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Prev_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Prev", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "next", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Next_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Next", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Calendar_tools", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Calendar", null);
    $.$mol_date = $mol_date;
    class $mol_date_calendar extends $mol_calendar {
        day_content(id) {
            return [
                this.Day_button(id)
            ];
        }
        day_click(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Day_button(id) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.day_text(id);
            obj.event_click = (event) => this.day_click(id, event);
            obj.minimal_height = () => 24;
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_date_calendar.prototype, "day_click", null);
    __decorate([
        $mol_mem_key
    ], $mol_date_calendar.prototype, "Day_button", null);
    $.$mol_date_calendar = $mol_date_calendar;
})($ || ($ = {}));
//mol/date/-view.tree/date.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    function $mol_try(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        window.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try = $mol_try;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));
//mol/try/try.web.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/date/date.view.css", "[mol_date_bubble] {\n\tpadding: .5rem;\n}\n\n[mol_date_input] {\n\tflex-shrink: 0;\n}\n\n[mol_date_prev] ,\n[mol_date_next] {\n\tflex-grow: 1;\n}\n[mol_date_prev] {\n\tjustify-content: flex-end;\n}\n\n[mol_date_calendar_title] {\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_date_calendar_day] {\n\tpadding: 0;\n}\n\n[mol_date_calendar_day_button] {\n\twidth: 100%;\n\tpadding: .25rem .5rem;\n\tjustify-content: center;\n\tcursor: pointer;\n\tcolor: inherit;\n}\n");
})($ || ($ = {}));
//mol/date/-css/date.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date extends $.$mol_date {
            trigger_content() {
                return [this.value_moment()?.toString('YYYY-MM-DD hh:mm') ?? this.Icon()];
            }
            input_mask(val) {
                return val.length > 8 ? '____-__-__ __:__' : '____-__-__ ';
            }
            value(val) {
                const moment = this.value_moment();
                if (val === undefined)
                    return moment?.toString('YYYY-MM-DD hh:mm') ?? '';
                const moment2 = $mol_try(() => val && new $mol_time_moment(val)) || null;
                if (moment2 instanceof Error)
                    return val;
                this.value_moment(moment2);
                return val;
            }
            value_moment(val) {
                const stamp = this.value_number(val && val.valueOf());
                return isNaN(stamp) ? null : new $mol_time_moment(stamp);
            }
            month_moment(next) {
                if (next)
                    return next;
                let moment = $mol_try(() => new $mol_time_moment(this.value()));
                if (moment instanceof Error || !moment.year)
                    return new $mol_time_moment;
                if (moment.month === undefined) {
                    moment = moment.merge({ month: 0 });
                }
                return moment;
            }
            day_selected(day) {
                return this.value_moment()?.toString('YYYY-MM-DD') === day;
            }
            day_click(day) {
                const moment = new $mol_time_moment(day);
                this.value_moment(this.value_moment()?.merge(moment) ?? moment);
                this.showed(false);
            }
            prev() {
                this.month_moment(this.month_moment().shift({ month: -1 }));
            }
            next() {
                this.month_moment(this.month_moment().shift({ month: +1 }));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_moment", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "month_moment", null);
        $$.$mol_date = $mol_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/date/date.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//mol/icon/tick/-view.tree/tick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//mol/check/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_check_box_title] {\n\tmargin-left: .5rem;\n}\n");
})($ || ($ = {}));
//mol/check/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_group extends $mol_view {
    }
    $.$mol_form_group = $mol_form_group;
})($ || ($ = {}));
//mol/form/group/-view.tree/group.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/group/group.view.css", "[mol_form_group] {\n\tflex-wrap: wrap;\n}\n\n[mol_form_group] > * {\n\tflex: 1 1 18rem;\n}\n");
})($ || ($ = {}));
//mol/form/group/-css/group.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_shelter_animal_edit extends $mol_page {
        animal() {
            const obj = new this.$.$hyoo_shelter_animal({});
            return obj;
        }
        title() {
            return "Данные животного";
        }
        enabled() {
            return true;
        }
        tools() {
            return [
                this.Download()
            ];
        }
        body() {
            return [
                this.Form()
            ];
        }
        download_name() {
            return "";
        }
        download_link() {
            return "";
        }
        Download_icon() {
            const obj = new this.$.$mol_icon_download();
            return obj;
        }
        Download() {
            const obj = new this.$.$mol_link();
            obj.hint = () => "Скачать карточку в виде документа";
            obj.file_name = () => this.download_name();
            obj.uri = () => this.download_link();
            obj.sub = () => [
                this.Download_icon()
            ];
            return obj;
        }
        photos(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        Photos() {
            const obj = new this.$.$mol_attach();
            obj.items = (val) => this.photos(val);
            obj.minimal_height = () => 160;
            return obj;
        }
        Photos_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Фотографии";
            obj.Content = () => this.Photos();
            return obj;
        }
        name(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Name() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.name(val);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Кличка";
            obj.Content = () => this.Name();
            return obj;
        }
        card(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Сard() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.card(val);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Card_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Номер карточки";
            obj.Content = () => this.Сard();
            return obj;
        }
        chip(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Сhip() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.chip(val);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Chip_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Номер чипа";
            obj.Content = () => this.Сhip();
            return obj;
        }
        cage(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Cage() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.cage(val);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Cage_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Номер вольера";
            obj.Content = () => this.Cage();
            return obj;
        }
        kind(val) {
            if (val !== undefined)
                return val;
            return "Cat";
        }
        Kind() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.kind(val);
            obj.enabled = () => this.enabled();
            obj.options = () => ({
                Cat: "🐱 Кошка",
                Dog: "🐶 Собака"
            });
            return obj;
        }
        Kind_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Биологический вид";
            obj.Content = () => this.Kind();
            return obj;
        }
        gender(val) {
            if (val !== undefined)
                return val;
            return "Male";
        }
        Gender() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.gender(val);
            obj.enabled = () => this.enabled();
            obj.options = () => ({
                Male: "🔵 Самец",
                Female: "🟠 Самка"
            });
            return obj;
        }
        Gender_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Пол";
            obj.Content = () => this.Gender();
            return obj;
        }
        departed_reason(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Departed_reason() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.departed_reason(val);
            obj.enabled = () => this.enabled();
            obj.options = () => ({
                Dead: "Смерть",
                Owned: "Нашёл хозяина"
            });
            return obj;
        }
        Departed_reason_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Причина ухода";
            obj.Content = () => this.Departed_reason();
            return obj;
        }
        weight(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Weight() {
            const obj = new this.$.$mol_number();
            obj.enabled = () => this.enabled();
            obj.value = (val) => this.weight(val);
            return obj;
        }
        Weight_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Вес в килограммах";
            obj.Content = () => this.Weight();
            return obj;
        }
        size(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Size() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.size(val);
            obj.enabled = () => this.enabled();
            obj.options = () => ({
                small: "Маленький",
                middle: "Средний",
                large: "Большой"
            });
            return obj;
        }
        Size_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Размер";
            obj.Content = () => this.Size();
            return obj;
        }
        tail_suggest() {
            return [];
        }
        Tail() {
            const obj = new this.$.$mol_search();
            obj.hint = () => "";
            obj.query = (val) => this.size(val);
            obj.enabled = () => this.enabled();
            obj.suggests = () => this.tail_suggest();
            return obj;
        }
        Tail_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Динна хвоста";
            obj.Content = () => this.Tail();
            return obj;
        }
        ear(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        ear_suggest() {
            return [];
        }
        Ear() {
            const obj = new this.$.$mol_search();
            obj.hint = () => "";
            obj.query = (val) => this.ear(val);
            obj.enabled = () => this.enabled();
            obj.suggests = () => this.ear_suggest();
            return obj;
        }
        Ear_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Тип ушей";
            obj.Content = () => this.Ear();
            return obj;
        }
        color(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        color_suggest() {
            return [];
        }
        Color() {
            const obj = new this.$.$mol_search();
            obj.hint = () => "";
            obj.query = (val) => this.color(val);
            obj.enabled = () => this.enabled();
            obj.suggests = () => this.color_suggest();
            return obj;
        }
        Color_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Окрас";
            obj.Content = () => this.Color();
            return obj;
        }
        fur(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        fur_suggest() {
            return [];
        }
        Fur() {
            const obj = new this.$.$mol_search();
            obj.hint = () => "";
            obj.query = (val) => this.fur(val);
            obj.enabled = () => this.enabled();
            obj.suggests = () => this.fur_suggest();
            return obj;
        }
        Fur_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Тип шерсти";
            obj.Content = () => this.Fur();
            return obj;
        }
        Trait() {
            const obj = new this.$.$mol_textarea();
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trait_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Отличительные особенности";
            obj.Content = () => this.Trait();
            return obj;
        }
        arrived_date(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        Arrived_date() {
            const obj = new this.$.$mol_date();
            obj.value_moment = (val) => this.arrived_date(val);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Arrived_date_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Дата приёма в приют";
            obj.content = () => [
                this.Arrived_date()
            ];
            return obj;
        }
        born_date(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        Born_date() {
            const obj = new this.$.$mol_date();
            obj.value_moment = (val) => this.born_date(val);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Born_date_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "День рождения";
            obj.content = () => [
                this.Born_date()
            ];
            return obj;
        }
        departed_date(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        Departed_date() {
            const obj = new this.$.$mol_date();
            obj.value_moment = (val) => this.departed_date(val);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Departed_date_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Дата ухода";
            obj.content = () => [
                this.Departed_date()
            ];
            return obj;
        }
        Depart_ready() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => "Ищет хозяина";
            obj.enabled = () => this.enabled();
            return obj;
        }
        Depart_ready_field() {
            const obj = new this.$.$mol_form_field();
            obj.Content = () => this.Depart_ready();
            return obj;
        }
        description(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Description() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => "История жизни, характер, повадки и тп.";
            obj.enabled = () => this.enabled();
            obj.value = (val) => this.description(val);
            return obj;
        }
        Description_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Описание для сайта";
            obj.Content = () => this.Description();
            return obj;
        }
        Attaches() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Photos_field()
            ];
            return obj;
        }
        Main() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Name_field(),
                this.Cage_field()
            ];
            return obj;
        }
        Codes() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Card_field(),
                this.Chip_field()
            ];
            return obj;
        }
        General() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Main(),
                this.Codes()
            ];
            return obj;
        }
        Transitions() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Arrived_date_field(),
                this.Born_date_field()
            ];
            return obj;
        }
        Lifetime() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Departed_date_field(),
                this.Departed_reason_field()
            ];
            return obj;
        }
        Dates() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Transitions(),
                this.Lifetime()
            ];
            return obj;
        }
        Types() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Kind_field(),
                this.Gender_field()
            ];
            return obj;
        }
        Gabarites() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Size_field(),
                this.Weight_field()
            ];
            return obj;
        }
        Classification() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Types(),
                this.Gabarites()
            ];
            return obj;
        }
        Ends() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Tail_field(),
                this.Ear_field()
            ];
            return obj;
        }
        Visual() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Color_field(),
                this.Trait_field()
            ];
            return obj;
        }
        Appearance() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Ends(),
                this.Visual()
            ];
            return obj;
        }
        Visual2() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Fur_field()
            ];
            return obj;
        }
        Appearance2() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Visual2()
            ];
            return obj;
        }
        Exports() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Description_field(),
                this.Depart_ready_field()
            ];
            return obj;
        }
        Catch() {
            const obj = new this.$.$hyoo_shelter_animal_edit_links();
            return obj;
        }
        Catch_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Акты отлова";
            obj.Content = () => this.Catch();
            return obj;
        }
        Procedure() {
            const obj = new this.$.$hyoo_shelter_animal_edit_links();
            return obj;
        }
        Procedure_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Процедуры";
            obj.Content = () => this.Procedure();
            return obj;
        }
        Contract() {
            const obj = new this.$.$hyoo_shelter_animal_edit_links();
            return obj;
        }
        Contract_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Договора";
            obj.Content = () => this.Contract();
            return obj;
        }
        Documents() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Catch_field(),
                this.Procedure_field(),
                this.Contract_field()
            ];
            return obj;
        }
        groups() {
            return [
                this.Attaches(),
                this.General(),
                this.Dates(),
                this.Classification(),
                this.Appearance(),
                this.Appearance2(),
                this.Exports(),
                this.Documents()
            ];
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Photos_field(),
                this.Name_field(),
                this.Card_field(),
                this.Chip_field(),
                this.Cage_field(),
                this.Kind_field(),
                this.Gender_field(),
                this.Departed_reason_field(),
                this.Weight_field(),
                this.Size_field(),
                this.Tail_field(),
                this.Ear_field(),
                this.Color_field(),
                this.Fur_field(),
                this.Trait_field(),
                this.Arrived_date_field(),
                this.Born_date_field(),
                this.Departed_date_field(),
                this.Depart_ready_field(),
                this.Description_field()
            ];
            obj.body = () => this.groups();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "animal", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Download_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Download", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "photos", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Photos", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Photos_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "card", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "\u0421ard", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Card_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "chip", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "\u0421hip", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Chip_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "cage", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Cage", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Cage_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "kind", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Kind", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Kind_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "gender", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Gender", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Gender_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "departed_reason", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Departed_reason", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Departed_reason_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "weight", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Weight", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Weight_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "size", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Size", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Size_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Tail", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Tail_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "ear", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Ear", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Ear_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "color", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Color", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Color_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "fur", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Fur", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Fur_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Trait", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Trait_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "arrived_date", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Arrived_date", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Arrived_date_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "born_date", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Born_date", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Born_date_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "departed_date", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Departed_date", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Departed_date_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Depart_ready", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Depart_ready_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "description", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Description", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Description_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Attaches", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Main", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Codes", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "General", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Transitions", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Lifetime", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Dates", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Types", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Gabarites", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Classification", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Ends", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Visual", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Appearance", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Visual2", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Appearance2", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Exports", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Catch", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Catch_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Procedure", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Procedure_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Contract", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Contract_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Documents", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit.prototype, "Form", null);
    $.$hyoo_shelter_animal_edit = $hyoo_shelter_animal_edit;
    class $hyoo_shelter_animal_edit_links extends $mol_view {
        sub() {
            return [
                this.Add()
            ];
        }
        Add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Add() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Add_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit_links.prototype, "Add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_edit_links.prototype, "Add", null);
    $.$hyoo_shelter_animal_edit_links = $hyoo_shelter_animal_edit_links;
})($ || ($ = {}));
//hyoo/shelter/animal/edit/-view.tree/edit.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_dict(sub) {
        return $mol_data_setup((val) => {
            if (Object.getPrototypeOf(val) !== Object.prototype) {
                return $mol_fail(new $mol_data_error(`${val} is not an Object`));
            }
            const res = {};
            for (const field in val) {
                try {
                    res[field] = sub(val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_dict = $mol_data_dict;
})($ || ($ = {}));
//mol/data/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    const Response = $mol_data_record({
        tail_types: $mol_data_array($mol_data_string),
        ears_types: $mol_data_array($mol_data_string),
        death_reasons: $mol_data_array($mol_data_string),
        departure_reasons: $mol_data_array($mol_data_string),
        fur_types: $mol_data_dict($mol_data_array($mol_data_string)),
        colors: $mol_data_dict($mol_data_array($mol_data_string)),
        breeds: $mol_data_dict($mol_data_array($mol_data_string)),
    });
    class $hyoo_shelter_dict extends $mol_object2 {
        static data() {
            $mol_wire_solid();
            return Response(this.$.$hyoo_shelter_transport.load(`dictionaries`));
        }
        static tail_suggest() {
            return this.data().tail_types;
        }
        static ear_suggest() {
            return this.data().ears_types;
        }
        static dead_reason_suggest() {
            return this.data().death_reasons;
        }
        static departed_reason_suggest() {
            return this.data().departure_reasons;
        }
        static fur_suggest(kind) {
            return this.data().fur_types[kind];
        }
        static color_suggest(kind) {
            return this.data().colors[kind];
        }
        static breed_suggest(kind) {
            return this.data().breeds[kind];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_dict, "data", null);
    $.$hyoo_shelter_dict = $hyoo_shelter_dict;
})($ || ($ = {}));
//hyoo/shelter/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_shelter_animal_edit, {
        Body: {
            padding: 0,
        },
        Weight: {
            String: {
                textAlign: 'left',
            },
        },
        Ear: {
            alignSelf: 'stretch',
        },
        Tail: {
            alignSelf: 'stretch',
        },
        Color: {
            alignSelf: 'stretch',
        },
        Photos: {
            Item: {
                flex: {
                    basis: rem(10),
                },
                width: rem(10),
                height: rem(10),
            },
            Add: {
                width: rem(10),
                height: rem(10),
                flex: {
                    basis: rem(10),
                    grow: 0,
                },
            },
        },
    });
})($ || ($ = {}));
//hyoo/shelter/animal/edit/edit.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_shelter_animal_edit extends $.$hyoo_shelter_animal_edit {
            photos(next) {
                return next ?? this.animal().photos(next);
            }
            photo(index) {
                return this.$.$hyoo_shelter_transport.link('..' + this.animal().photos()[index]);
            }
            photo_new(file) {
                this.$.$hyoo_shelter_transport.send(`shelters/${this.animal().shelter_id()}/photos`, file);
            }
            description(next) {
                return this.animal().description(next);
            }
            name(next) {
                return this.animal().name(next);
            }
            card(next) {
                return this.animal().card(next);
            }
            chip(next) {
                return this.animal().chip(next);
            }
            cage(next) {
                return this.animal().cage(next);
            }
            weight(next) {
                return this.animal().weight(next);
            }
            size(next) {
                return this.animal().size(next);
            }
            ear(next) {
                this.ear_suggest();
                return this.animal().ear(next);
            }
            tail(next) {
                this.tail_suggest();
                return this.animal().tail(next);
            }
            color(next) {
                return this.animal().color(next);
            }
            fur(next) {
                return this.animal().fur(next);
            }
            kind(next) {
                return this.animal().kind(next);
            }
            gender(next) {
                return this.animal().gender(next);
            }
            arrived_date(next) {
                return this.animal().arrived_date(next);
            }
            departed_date(next) {
                return this.animal().departed_date(next);
            }
            born_date(next) {
                return this.animal().born_date(next);
            }
            ear_suggest() {
                return this.$.$hyoo_shelter_dict.ear_suggest();
            }
            tail_suggest() {
                return this.$.$hyoo_shelter_dict.tail_suggest();
            }
            color_suggest() {
                return this.$.$hyoo_shelter_dict.color_suggest(this.kind());
            }
            fur_suggest() {
                return this.$.$hyoo_shelter_dict.fur_suggest(this.kind());
            }
            download_name() {
                return `${this.card()} ${this.name()}.docx`;
            }
            download_link() {
                return this.$.$hyoo_shelter_transport.link(`../reports/animals/${this.animal().id()}/animal-card.docx`);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_shelter_animal_edit.prototype, "photos", null);
        $$.$hyoo_shelter_animal_edit = $hyoo_shelter_animal_edit;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/shelter/animal/edit/edit.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_shelter_animal_card extends $mol_link {
        animal() {
            const obj = new this.$.$hyoo_shelter_animal({});
            return obj;
        }
        shelters() {
            const obj = new this.$.$hyoo_shelter_shelter_list({});
            return obj;
        }
        arg() {
            return {
                animal: this.id()
            };
        }
        attr() {
            return {
                ...super.attr(),
                gravity_animal_card_gender: this.gender()
            };
        }
        sub() {
            return [
                this.Shelter(),
                this.Card(),
                this.Kind(),
                this.Name(),
                this.Age(),
                this.Size()
            ];
        }
        id() {
            return "";
        }
        gender() {
            return "";
        }
        shelter_name() {
            return "";
        }
        Shelter() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.shelter_name()
            ];
            return obj;
        }
        card() {
            return "";
        }
        highlight() {
            return "";
        }
        Card() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.card();
            obj.needle = () => this.highlight();
            return obj;
        }
        kind() {
            return "";
        }
        Kind() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.kind()
            ];
            return obj;
        }
        name() {
            return "";
        }
        Name() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.name();
            obj.needle = () => this.highlight();
            return obj;
        }
        age() {
            return "";
        }
        Age() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.age()
            ];
            return obj;
        }
        size() {
            return "";
        }
        Size() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.size()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_card.prototype, "animal", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_card.prototype, "shelters", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_card.prototype, "Shelter", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_card.prototype, "Card", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_card.prototype, "Kind", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_card.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_card.prototype, "Age", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_animal_card.prototype, "Size", null);
    $.$hyoo_shelter_animal_card = $hyoo_shelter_animal_card;
})($ || ($ = {}));
//hyoo/shelter/animal/card/-view.tree/card.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
        [Symbol.toPrimitive](mode) {
            return this.toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));
//mol/time/interval/interval.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_shelter_animal_card, {
        padding: $mol_gap.text,
        flex: {
            wrap: 'wrap',
        },
        Shelter: {
            flex: {
                basis: rem(6),
                grow: 1,
                shrink: 1,
            },
        },
        Card: {
            flex: {
                basis: rem(6),
                grow: 0,
                shrink: 0,
            },
        },
        Age: {
            flex: {
                basis: rem(2),
                grow: 0,
                shrink: 0,
            },
            alignContent: 'flex-end',
        },
        Size: {
            flex: {
                basis: rem(8),
                grow: 0,
                shrink: 0,
            },
        },
        '@': {
            mol_link_current: {
                'true': {
                    Name: {
                        color: 'currentColor',
                    },
                },
            },
            gravity_animal_card_gender: {
                'Male': {
                    Name: {
                        color: '#0078d7',
                    },
                },
                'Female': {
                    Name: {
                        color: '#f7630c',
                    },
                },
            },
        },
        Name: {
            textShadow: '0 0',
            flex: {
                basis: rem(6),
                grow: 1,
                shrink: 1,
            },
        },
    });
})($ || ($ = {}));
//hyoo/shelter/animal/card/card.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_shelter_animal_card extends $.$hyoo_shelter_animal_card {
            id() {
                return this.animal().id();
            }
            sub() {
                return [
                    ...this.shelters() ? [this.Shelter()] : [],
                    this.Card(),
                    this.Kind(),
                    this.Name(),
                    this.Age(),
                    this.Size(),
                ];
            }
            shelter_name() {
                return this.shelters().Shelter(this.animal().shelter_id()).name();
            }
            name() {
                return this.animal().name();
            }
            card() {
                return this.animal().card();
            }
            gender() {
                return this.animal().gender();
            }
            size() {
                return this.animal().size();
            }
            age() {
                const start = this.animal().born_date();
                if (!start)
                    return '';
                const interval = new $mol_time_interval({ start, end: new $mol_time_moment });
                return interval.duration.count('P1Y').toFixed(1);
            }
            kind() {
                const mapping = {
                    'Cat': '🐱',
                    'Dog': '🐶',
                };
                return mapping[this.animal().kind()] ?? '🐾';
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_shelter_animal_card.prototype, "age", null);
        $$.$hyoo_shelter_animal_card = $hyoo_shelter_animal_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/shelter/animal/card/card.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//mol/icon/github/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//mol/link/source/-view.tree/source.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));
//mol/media/media.ts
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//mol/lights/lights.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//mol/icon/brightness/6/-view.tree/6.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//mol/lights/toggle/-view.tree/toggle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/lights/toggle/toggle.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_logout extends $mol_icon {
        path() {
            return "M16,17V14H9V10H16V7L21,12L16,17M14,2C15.1,2 16,2.9 16,4V6H14V4H5V20H14V18H16V20C16,21.1 15.1,22 14,22H5C3.9,22 3,21.1 3,20V4C3,2.9 3.9,2 5,2H14Z";
        }
    }
    $.$mol_icon_logout = $mol_icon_logout;
})($ || ($ = {}));
//mol/icon/logout/-view.tree/logout.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_shelter_shelter_manage extends $mol_book2 {
        shelters() {
            const obj = new this.$.$hyoo_shelter_shelter_list({});
            return obj;
        }
        animals() {
            const obj = new this.$.$hyoo_shelter_shelter_animals({});
            return obj;
        }
        pages() {
            return [
                this.Filter_page(),
                this.Animals_page()
            ];
        }
        Shelter_link_all() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                shelter: null
            });
            obj.sub = () => [
                "Все"
            ];
            return obj;
        }
        Shelter_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                shelter: this.shelter_id(id)
            });
            obj.sub = () => [
                this.shelter_name(id)
            ];
            return obj;
        }
        Animal_download(id) {
            return this.Animal_edit(id).Download();
        }
        Animal_edit(id) {
            const obj = new this.$.$hyoo_shelter_animal_edit();
            obj.enabled = () => this.can_edit();
            obj.tools = () => [
                this.Animal_download(id),
                this.Close(id)
            ];
            obj.animal = () => this.animal(id);
            return obj;
        }
        Animal_card(id) {
            const obj = new this.$.$hyoo_shelter_animal_card();
            obj.animal = () => this.animal(id);
            obj.highlight = () => this.search();
            obj.shelters = () => this.card_shelters();
            return obj;
        }
        Download() {
            const obj = new this.$.$mol_link();
            obj.hint = () => "Скачать список животных в виде документа";
            obj.file_name = () => this.download_name();
            obj.uri = () => this.download_link();
            obj.sub = () => [
                this.Download_icon()
            ];
            return obj;
        }
        Source_link() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/shelter.hyoo.ru";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        logout(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Logout_icon() {
            const obj = new this.$.$mol_icon_logout();
            return obj;
        }
        Logout() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.logout(event);
            obj.sub = () => [
                this.Logout_icon()
            ];
            return obj;
        }
        filter_title() {
            return "Фильтры";
        }
        filter_shelter_list() {
            return [];
        }
        Filter_shelter_list() {
            const obj = new this.$.$hyoo_shelter_shelter_manage_filter_group();
            obj.title = () => "Приюты";
            obj.items = () => this.filter_shelter_list();
            return obj;
        }
        filter_list() {
            return [
                this.Filter_shelter_list()
            ];
        }
        Filter_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.filter_list();
            return obj;
        }
        Summary_title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "Отчёты"
            ];
            return obj;
        }
        summary_1w() {
            return "";
        }
        Summary_1W() {
            const obj = new this.$.$mol_link();
            obj.hint = () => "Скачать сводный отчёт";
            obj.file_name = () => "1W.pdf";
            obj.target = () => "_blank";
            obj.uri = () => this.summary_1w();
            obj.sub = () => [
                "Неделя"
            ];
            return obj;
        }
        summary_1m() {
            return "";
        }
        Summary_1M() {
            const obj = new this.$.$mol_link();
            obj.hint = () => "Скачать сводный отчёт";
            obj.file_name = () => "1M.pdf";
            obj.target = () => "_blank";
            obj.uri = () => this.summary_1m();
            obj.sub = () => [
                "Месяц"
            ];
            return obj;
        }
        summary_3m() {
            return "";
        }
        Summary_3M() {
            const obj = new this.$.$mol_link();
            obj.hint = () => "Скачать сводный отчёт";
            obj.file_name = () => "3M.pdf";
            obj.target = () => "_blank";
            obj.uri = () => this.summary_3m();
            obj.sub = () => [
                "Квартал"
            ];
            return obj;
        }
        summary_1y() {
            return "";
        }
        Summary_1Y() {
            const obj = new this.$.$mol_link();
            obj.hint = () => "Скачать сводный отчёт";
            obj.file_name = () => "1Y.pdf";
            obj.target = () => "_blank";
            obj.uri = () => this.summary_1y();
            obj.sub = () => [
                "Год"
            ];
            return obj;
        }
        Summary_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Summary_1W(),
                this.Summary_1M(),
                this.Summary_3M(),
                this.Summary_1Y()
            ];
            return obj;
        }
        Summaries() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Summary_title(),
                this.Summary_options()
            ];
            return obj;
        }
        Filter_page() {
            const obj = new this.$.$mol_page();
            obj.tools = () => [
                this.Source_link(),
                this.Lights(),
                this.Logout()
            ];
            obj.title = () => this.filter_title();
            obj.body = () => [
                this.Filter_list()
            ];
            obj.foot = () => [
                this.Summaries()
            ];
            return obj;
        }
        search(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Search() {
            const obj = new this.$.$mol_search();
            obj.query = (val) => this.search(val);
            return obj;
        }
        add(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Add() {
            const obj = new this.$.$mol_button_major();
            obj.click = (event) => this.add(event);
            obj.hint = () => "Добавить животное";
            obj.sub = () => [
                this.Add_icon()
            ];
            return obj;
        }
        animals_page_tools() {
            return [
                this.Search(),
                this.Add()
            ];
        }
        animals_title() {
            return "Управление приютом";
        }
        animal_list() {
            return [];
        }
        Animal_list_empty() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                "Нет животных"
            ];
            return obj;
        }
        Animal_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.animal_list();
            obj.Empty = () => this.Animal_list_empty();
            return obj;
        }
        Animals_page() {
            const obj = new this.$.$mol_page();
            obj.tools = () => this.animals_page_tools();
            obj.title = () => this.animals_title();
            obj.body = () => [
                this.Animal_list()
            ];
            return obj;
        }
        shelter_id(id) {
            return "";
        }
        shelter_name(id) {
            return "";
        }
        can_edit() {
            return true;
        }
        Close_icon(id) {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                animal: null
            });
            obj.sub = () => [
                this.Close_icon(id)
            ];
            return obj;
        }
        animal(id) {
            const obj = new this.$.$hyoo_shelter_animal({});
            return obj;
        }
        card_shelters() {
            const obj = new this.$.$hyoo_shelter_shelter_list({});
            return obj;
        }
        download_name() {
            return "";
        }
        download_link() {
            return "";
        }
        Download_icon() {
            const obj = new this.$.$mol_icon_download();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "shelters", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "animals", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Shelter_link_all", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_shelter_shelter_manage.prototype, "Shelter_link", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_shelter_shelter_manage.prototype, "Animal_edit", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_shelter_shelter_manage.prototype, "Animal_card", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Download", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Source_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "logout", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Logout_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Logout", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Filter_shelter_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Filter_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Summary_title", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Summary_1W", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Summary_1M", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Summary_3M", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Summary_1Y", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Summary_options", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Summaries", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Filter_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "search", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Search", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "add", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Add", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Animal_list_empty", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Animal_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Animals_page", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_shelter_shelter_manage.prototype, "Close_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_shelter_shelter_manage.prototype, "Close", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_shelter_shelter_manage.prototype, "animal", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "card_shelters", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage.prototype, "Download_icon", null);
    $.$hyoo_shelter_shelter_manage = $hyoo_shelter_shelter_manage;
    class $hyoo_shelter_shelter_manage_filter_group extends $mol_list {
        rows() {
            return [
                this.Title(),
                this.Items()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        items() {
            return [];
        }
        Items() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.items();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage_filter_group.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter_shelter_manage_filter_group.prototype, "Items", null);
    $.$hyoo_shelter_shelter_manage_filter_group = $hyoo_shelter_shelter_manage_filter_group;
})($ || ($ = {}));
//hyoo/shelter/shelter/manage/-view.tree/manage.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_array_lottery(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    $.$mol_array_lottery = $mol_array_lottery;
})($ || ($ = {}));
//mol/array/lottery/lottery.ts
;
"use strict";
var $;
(function ($) {
    class $mol_unit extends $mol_object {
        'valueOf()';
        constructor(value) {
            super();
            if (value !== undefined)
                this['valueOf()'] = value;
        }
        prefix() {
            return '';
        }
        postfix() {
            return '';
        }
        [Symbol.toPrimitive](hint) {
            switch (hint) {
                case 'number': return this.valueOf();
                case 'string': return this.toString();
                default: return this.toString();
            }
        }
        valueOf() {
            return this['valueOf()'];
        }
        delimiter() {
            return ' ';
        }
        value_view() {
            return this.valueOf().toLocaleString();
        }
        toString() {
            return this.prefix() + this.value_view() + this.postfix();
        }
        static summ(a, b) {
            var Class = a.constructor;
            if (Class !== b.constructor)
                throw new Error(`Not same measure: ${Class} , ${b.constructor}`);
            return new Class(a.valueOf() + b.valueOf());
        }
        mult(m) {
            var Class = this.constructor;
            return new Class(this.valueOf() * m);
        }
    }
    $.$mol_unit = $mol_unit;
})($ || ($ = {}));
//mol/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    class $mol_unit_money extends $mol_unit {
    }
    $.$mol_unit_money = $mol_unit_money;
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix() {
            return '$';
        }
    }
    $.$mol_unit_money_usd = $mol_unit_money_usd;
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix() {
            return ' ₽';
        }
    }
    $.$mol_unit_money_rur = $mol_unit_money_rur;
})($ || ($ = {}));
//mol/unit/money/money.ts
;
"use strict";
var $;
(function ($) {
    function $mol_stub_strings(prefix = '', count = 10, length = 10) {
        if (prefix.length >= length)
            return [];
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
        let strings = [];
        for (let i = 0; i < count; i++) {
            let text = prefix;
            for (let j = prefix.length; j < length; j++) {
                text += $mol_array_lottery(possible);
            }
            strings.push(text);
        }
        return strings;
    }
    $.$mol_stub_strings = $mol_stub_strings;
    function $mol_stub_code(length = 8) {
        var max = Math.pow(16, length);
        var min = Math.pow(16, length - 1);
        var value = min + Math.floor(Math.random() * (max - min));
        return value.toString(16).toUpperCase();
    }
    $.$mol_stub_code = $mol_stub_code;
    function $mol_stub_price(max = 1000) {
        var min = Math.floor(max / 16 / 16);
        var value = min + Math.floor(Math.random() * (max - min));
        return new $mol_unit_money_usd(value);
    }
    $.$mol_stub_price = $mol_stub_price;
    function $mol_stub_product_name() {
        var name = $mol_array_lottery([
            'Monitor 15"',
            'Monitor 17"',
            'Monitor 19"',
            'Graphics card',
            'Frame grabber card'
        ]);
        var port = $mol_array_lottery(['D-SUB', 'DVI', 'HDMI']);
        var resolution = $mol_array_lottery(['VGA', 'Full HD', '4K']);
        return [name, port, resolution].join(', ');
    }
    $.$mol_stub_product_name = $mol_stub_product_name;
    function $mol_stub_company_name_big() {
        var product = $mol_array_lottery(['Everything', 'Something', 'Anything', 'Nothing']);
        var type = $mol_array_lottery(['Company', 'Corporation', 'Holding']);
        return `A ${type} that makes ${product}`;
    }
    $.$mol_stub_company_name_big = $mol_stub_company_name_big;
    function $mol_stub_company_name_small() {
        return $mol_array_lottery(['ACME inc.', 'Dream Company', 'Just Company']);
    }
    $.$mol_stub_company_name_small = $mol_stub_company_name_small;
    function $mol_stub_company_name() {
        return $mol_array_lottery([$mol_stub_company_name_small, $mol_stub_company_name_big])();
    }
    $.$mol_stub_company_name = $mol_stub_company_name;
    function $mol_stub_person_name() {
        var first = $mol_array_lottery(['Ivan', 'Petr', 'Sidor', 'John', 'Sam']);
        var last = $mol_array_lottery(['Ivanov', 'Petrov', 'Sidorov', 'Johnson', 'Smith']);
        return `${first} ${last}`;
    }
    $.$mol_stub_person_name = $mol_stub_person_name;
    function $mol_stub_person_avatar(size = 80) {
        const id = Math.random().toString(16).slice(2);
        return `https://gravatar.com/avatar/${id}?d=robohash&s=${size}`;
    }
    $.$mol_stub_person_avatar = $mol_stub_person_avatar;
    function $mol_stub_city() {
        return $mol_array_lottery(['Moscow', 'London', 'Washington', 'Buenos Aires']);
    }
    $.$mol_stub_city = $mol_stub_city;
    function $mol_stub_time(maxShift = 60 * 24 * 365) {
        return new $mol_time_moment().shift({ minute: Math.round(Math.random() * maxShift) });
    }
    $.$mol_stub_time = $mol_stub_time;
    function $mol_stub_message(max_length) {
        const text = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.';
        return text.substring(0, Math.ceil(Math.random() * max_length - 5) + 5);
    }
    $.$mol_stub_message = $mol_stub_message;
})($ || ($ = {}));
//mol/stub/stub.ts
;
"use strict";
var $;
(function ($) {
    const { rem, per } = $mol_style_unit;
    $mol_style_define($hyoo_shelter_shelter_manage_filter_group, {
        Title: {
            padding: $mol_gap.block,
            textShadow: '0 0 ',
        },
    });
    $mol_style_define($hyoo_shelter_shelter_manage, {
        Filter_list: {
            padding: $mol_gap.block,
        },
        Summaries: {
            padding: $mol_gap.block,
            flex: {
                wrap: 'wrap',
            },
            maxWidth: per(100),
        },
        Summary_options: {
            flex: {
                wrap: 'wrap',
            },
        },
        Summary_title: {
            textShadow: '0 0 ',
            padding: $mol_gap.text,
        },
        Filter_page: {
            flex: {
                basis: rem(15),
                shrink: 0,
            },
        },
        Animals_page: {
            flex: {
                basis: rem(40),
                shrink: 0,
            },
        },
        Animal_list: {
            padding: $mol_gap.block,
        },
        Animal_edit: {
            flex: {
                basis: rem(80),
                grow: 1000,
                shrink: 0,
            },
        },
    });
})($ || ($ = {}));
//hyoo/shelter/shelter/manage/manage.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_shelter_shelter_manage extends $.$hyoo_shelter_shelter_manage {
            animal(key) {
                return this.animals().Animal(key);
            }
            animal_list_filtered() {
                let list = this.animals().list();
                const shelter = this.shelter_current();
                if (shelter) {
                    list = list.filter(animal => animal.shelter_id() === shelter);
                }
                list = list.filter($mol_match_text(this.search(), animal => [
                    animal.name(),
                    animal.card(),
                    animal.chip(),
                ]));
                return list;
            }
            animal_list() {
                let list = this.animal_list_filtered().slice();
                list.sort((a, b) => b.arrived_date().valueOf() - a.arrived_date().valueOf());
                return list.map(animal => this.Animal_card(animal.id()));
            }
            animal_current(next) {
                return this.$.$mol_state_arg.value('animal', next);
            }
            only() {
                return this.$.$mol_state_arg.value('only');
            }
            pages() {
                if (this.animal_current()) {
                    return [
                        ...(this.only() === null) ? [
                            this.Filter_page(),
                            this.Animals_page(),
                        ] : [],
                        this.Animal_edit(this.animal_current()),
                    ];
                }
                return [
                    this.Filter_page(),
                    this.Animals_page(),
                    ...this.animal_current() ? [this.Animal_edit(this.animal_current())] : [],
                ];
            }
            shelter_current() {
                return this.$.$mol_state_arg.value('shelter') ?? this.shelter_single()?.id() ?? null;
            }
            shelter_single() {
                const all = this.shelters().list();
                if (all.length === 1)
                    return all[0];
                return null;
            }
            can_edit() {
                return true;
            }
            can_add() {
                return Boolean(this.can_edit() && this.shelter_current());
            }
            card_shelters() {
                return this.shelter_current() ? null : this.shelters();
            }
            animals_page_tools() {
                return [
                    this.Search(),
                    this.Download(),
                    ...this.can_add() ? [this.Add()] : [],
                ];
            }
            download_link() {
                return this.$.$hyoo_shelter_transport.link(`../reports/shelters/${this.shelter_current()}/animal-register.docx`);
            }
            download_name() {
                return `animal-register.docx`;
            }
            summary_1w() {
                return this.$.$hyoo_shelter_transport.link(`../reports/summary/1W.pdf`);
            }
            summary_1m() {
                return this.$.$hyoo_shelter_transport.link(`../reports/summary/1M.pdf`);
            }
            summary_3m() {
                return this.$.$hyoo_shelter_transport.link(`../reports/summary/3M.pdf`);
            }
            summary_1y() {
                return this.$.$hyoo_shelter_transport.link(`../reports/summary/1Y.pdf`);
            }
            add() {
                const Response = $mol_data_record({ id: $mol_data_integer });
                const response = this.$.$hyoo_shelter_transport.save(`shelters/${this.shelter_current()}/animals`, 'post', {
                    name: '',
                    readyForDepart: false,
                    card: $mol_stub_code(),
                    kind: 'Dog',
                    chip: $mol_stub_code(),
                    gender: 'Male',
                    cage: '',
                    arrivedAt: new $mol_time_moment().mask('1111-11-11').toString(),
                    departedAt: null,
                    birthDate: new $mol_time_moment().mask('1111-11-11').toString(),
                    weight: 0,
                    ears: '',
                    tail: '',
                    size: '',
                    color: '',
                    description: '',
                    photos: [],
                    fur: '',
                });
                const id = Response(response).id;
                this.$.$mol_state_arg.value('animal', String(id));
            }
            filter_shelter_list() {
                return [
                    this.Shelter_link_all(),
                    ...this.shelters().list().map(shelter => this.Shelter_link(shelter.id()))
                ];
            }
            shelter_id(id) {
                return id;
            }
            shelter_name(id) {
                return this.shelters().Shelter(id).name();
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_shelter_shelter_manage.prototype, "animal_list_filtered", null);
        __decorate([
            $mol_mem
        ], $hyoo_shelter_shelter_manage.prototype, "animal_list", null);
        __decorate([
            $mol_mem
        ], $hyoo_shelter_shelter_manage.prototype, "shelter_current", null);
        __decorate([
            $mol_mem
        ], $hyoo_shelter_shelter_manage.prototype, "shelter_single", null);
        $$.$hyoo_shelter_shelter_manage = $hyoo_shelter_shelter_manage;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/shelter/shelter/manage/manage.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//mol/theme/auto/-view.tree/auto.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/theme/auto/auto.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_shelter extends $mol_book2 {
        plugins() {
            return [
                this.Theme()
            ];
        }
        Auth() {
            const obj = new this.$.$hyoo_shelter_auth_form();
            return obj;
        }
        Manage() {
            const obj = new this.$.$hyoo_shelter_shelter_manage();
            obj.logout = (event) => this.logout(event);
            return obj;
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        logout(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_shelter.prototype, "Auth", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter.prototype, "Manage", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_shelter.prototype, "logout", null);
    $.$hyoo_shelter = $hyoo_shelter;
})($ || ($ = {}));
//hyoo/shelter/-view.tree/shelter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_shelter, {
            Auth: {
                flex: {
                    grow: 1000,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/shelter/shelter.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_shelter extends $.$hyoo_shelter {
            pages() {
                if (!this.$.$hyoo_shelter_auth.signed()) {
                    return [this.Auth()];
                }
                return this.Manage().pages();
            }
            logout() {
                this.$.$hyoo_shelter_auth.drop();
            }
            render() {
                const login = this.$.$mol_state_arg.value('login');
                if (login) {
                    $mol_fiber_defer(() => {
                        this.Auth().login(login);
                        this.Auth().submit(new KeyboardEvent('keypress'));
                        this.$.$mol_state_arg.value('login', null);
                    });
                }
                return super.render();
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_shelter.prototype, "pages", null);
        $$.$hyoo_shelter = $hyoo_shelter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/shelter/shelter.view.ts

//# sourceMappingURL=web.js.map
