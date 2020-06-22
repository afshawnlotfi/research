# [NSServices](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSServices)
## Services
### The services provided by an app.
### [Default]: [{"NSMessage":"","NSMenuItem":{"default":""}}]
### [JSON](/json/NSServices.json)
```json 
{
    "id": 3041336,
    "title": {
        "content": "NSServices"
    },
    "abstract": "<div><p>The services provided by an app.</p></div>",
    "containingGroup": [
        {
            "id": 3374889,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041047,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.NSExtension",
                    "name": "NSExtension",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "8.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.10"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSExtension</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsextension"
                    ],
                    "title": {
                        "content": "NSExtension"
                    },
                    "abstract": "<div><p>The properties of an app extension.</p></div>",
                    "hasChildren": true
                },
                {
                    "id": 3041336,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.NSServices",
                    "name": "NSServices",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Services",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSServices</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices"
                    ],
                    "title": {
                        "content": "NSServices"
                    },
                    "abstract": "<div><p>The services provided by an app.</p></div>",
                    "hasChildren": true
                },
                {
                    "id": 3040991,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.WKExtensionDelegateClassName",
                    "name": "WKExtensionDelegateClassName",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKExtension<wbr/>Delegate<wbr/>Class<wbr/>Name</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/wkextensiondelegateclassname"
                    ],
                    "title": {
                        "content": "WKExtensionDelegateClassName"
                    },
                    "abstract": "<div><p>The name of your watchOS app&#8217;s extension delegate.</p></div>"
                },
                {
                    "id": 3040972,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIApplicationShortcutWidget",
                    "name": "UIApplicationShortcutWidget",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "10.0"
                        },
                        {
                            "platform": "tvOS",
                            "introduced": "9.0"
                        },
                        {
                            "platform": "watchOS",
                            "introduced": "2.0"
                        }
                    ],
                    "xcodeTitle": "Home Screen Widget",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIApplication<wbr/>Shortcut<wbr/>Widget</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uiapplicationshortcutwidget"
                    ],
                    "title": {
                        "content": "UIApplicationShortcutWidget"
                    },
                    "abstract": "<div><p>The bundle ID of the widget that&#x27;s available as a Home screen quick action in apps that have more than one widget.</p></div>"
                }
            ],
            "title": {
                "content": "Extensions and Services"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSServices",
    "name": "NSServices",
    "domain": "plist",
    "kind": "dict",
    "availability": [
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.0"
        }
    ],
    "parent": {
        "id": 3112092,
        "usr": "plist:Information_Property_List",
        "name": "Information Property List",
        "domain": "plist",
        "kind": "schema",
        "role": "dictionarySymbol",
        "paths": [
            "documentation/bundleresources/information_property_list"
        ],
        "title": {
            "content": "Information Property List"
        },
        "abstract": {
            "content": "<abstract><paragraph xml:space=\"preserve\">A resource containing key-value pairs that identify and configure a bundle.</paragraph></abstract>"
        }
    },
    "module": [
        {
            "title": {
                "content": "AppKit"
            },
            "paths": [
                "documentation/appkit"
            ],
            "platforms": [
                "macOS"
            ]
        }
    ],
    "attributes": {
        "allowedTypesDetails": [
            {
                "value": [
                    {
                        "baseType": "dictionary",
                        "arrayMode": "required",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">[dictionary]</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "macOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Services",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSServices</span></code>",
    "declaration": [
        {
            "content": "<span>[dictionary] NSServices\n</span>",
            "platforms": [
                "macOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "dictionary",
                    "arrayMode": "required",
                    "declaration": "<span>[dictionary]\n</span>"
                }
            ]
        }
    ],
    "role": "dictionarySymbol",
    "language": "swift",
    "roleHeading": "Property List Key",
    "titleStyle": "symbol",
    "languages": [
        "occ",
        "swift"
    ],
    "variants": {
        "occ": {
            "paths": [
                "documentation/bundleresources/information_property_list/nsservices"
            ],
            "usr": "plist:Information_Property_List.NSServices"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nsservices"
            ],
            "usr": "plist:Information_Property_List.NSServices"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nsservices"
    ],
    "hierarchy": [
        [
            {
                "id": 3112365,
                "role": "collection",
                "title": {
                    "content": "Bundle Resources"
                },
                "paths": [
                    "documentation/bundleresources"
                ]
            },
            {
                "id": 3112092,
                "role": "dictionarySymbol",
                "title": {
                    "content": "Information Property List"
                },
                "usr": "plist:Information_Property_List",
                "kind": "schema",
                "paths": [
                    "documentation/bundleresources/information_property_list"
                ]
            },
            {
                "id": 3375101,
                "role": "collectionGroup",
                "title": {
                    "content": "App Execution"
                },
                "paths": [
                    "documentation/bundleresources/information_property_list/app_execution"
                ]
            }
        ]
    ],
    "legalNotices": {
        "copyright": "Copyright &copy; 2020 Apple Inc. All rights reserved.",
        "termsOfUse": "https://www.apple.com/legal/internet-services/terms/site.html",
        "privacyPolicy": "https://www.apple.com/privacy/privacy-policy"
    },
    "tasks": [
        {
            "id": 3044552,
            "role": "task",
            "symbols": [
                {
                    "id": 3041337,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.NSServices.NSKeyEquivalent",
                    "name": "NSKeyEquivalent",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Menu key equivalent",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSKey<wbr/>Equivalent</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices/nskeyequivalent"
                    ],
                    "title": {
                        "content": "NSKeyEquivalent"
                    },
                    "abstract": "<div><p>A keyboard shortcut that invokes the service menu command.</p></div>"
                },
                {
                    "id": 3041338,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.NSServices.NSMenuItem",
                    "name": "NSMenuItem",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "required": true,
                    "xcodeTitle": "Menu",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSMenu<wbr/>Item</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices/nsmenuitem"
                    ],
                    "title": {
                        "content": "NSMenuItem"
                    },
                    "abstract": "<div><p>Text for a Services menu item.</p></div>"
                },
                {
                    "id": 3041339,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSServices.NSMessage",
                    "name": "NSMessage",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "required": true,
                    "xcodeTitle": "Instance method name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSMessage</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices/nsmessage"
                    ],
                    "title": {
                        "content": "NSMessage"
                    },
                    "abstract": "<div><p>An instance method that invokes the service.</p></div>"
                },
                {
                    "id": 3041340,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSServices.NSPortName",
                    "name": "NSPortName",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Incoming service port name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSPort<wbr/>Name</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices/nsportname"
                    ],
                    "title": {
                        "content": "NSPortName"
                    },
                    "abstract": "<div><p>The port that the service monitors for incoming requests.</p></div>"
                },
                {
                    "id": 3041341,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSServices.NSReturnTypes",
                    "name": "NSReturnTypes",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Return Types",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSReturn<wbr/>Types</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices/nsreturntypes"
                    ],
                    "title": {
                        "content": "NSReturnTypes"
                    },
                    "abstract": "<div><p>The data types that the service returns.</p></div>"
                },
                {
                    "id": 3041342,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSServices.NSSendTypes",
                    "name": "NSSendTypes",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Send Types",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSSend<wbr/>Types</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices/nssendtypes"
                    ],
                    "title": {
                        "content": "NSSendTypes"
                    },
                    "abstract": "<div><p>The data types that the service can read.</p></div>"
                },
                {
                    "id": 3041343,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSServices.NSTimeout",
                    "name": "NSTimeout",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Timeout value (in milliseconds)",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSTimeout</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices/nstimeout"
                    ],
                    "title": {
                        "content": "NSTimeout"
                    },
                    "abstract": "<div><p>The amount of time, in milliseconds, that the system waits for a response from the service.</p></div>"
                },
                {
                    "id": 3041344,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.NSServices.NSUserData",
                    "name": "NSUserData",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "User Data",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSUser<wbr/>Data</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsservices/nsuserdata"
                    ],
                    "title": {
                        "content": "NSUserData"
                    },
                    "abstract": "<div><p>A service-specific string value.</p></div>"
                }
            ],
            "title": {
                "content": "Property List Keys"
            }
        }
    ]
}
```