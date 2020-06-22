# [UIBackgroundModes](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/UIBackgroundModes)
## Required background modes
### Services provided by an app that require it to run in the background.
### [Default]: [""]
### [JSON](/json/UIBackgroundModes.json)
```json 
{
    "id": 3040973,
    "title": {
        "content": "UIBackgroundModes"
    },
    "discussion": "<div><p>To add this key to the Information Property List, enable the Background Modes capability in Xcode.</p></div>",
    "abstract": "<div><p>Services provided by an app that require it to run in the background.</p></div>",
    "allowedLiterals": [
        {
            "name": "audio"
        },
        {
            "name": "location"
        },
        {
            "name": "voip"
        },
        {
            "name": "external-accessory"
        },
        {
            "name": "bluetooth-central"
        },
        {
            "name": "bluetooth-peripheral"
        },
        {
            "name": "fetch"
        },
        {
            "name": "remote-notification"
        },
        {
            "name": "processing"
        }
    ],
    "seeAlso": [
        {
            "id": 3040989,
            "role": "symbol",
            "paths": [
                "documentation/bundleresources/information_property_list/wkbackgroundmodes"
            ],
            "usr": "plist:Information_Property_List.WKBackgroundModes",
            "kind": "tdef",
            "language": "plist",
            "domain": "plist",
            "name": "WKBackgroundModes",
            "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKBackground<wbr/>Modes</span></code>",
            "languages": [
                "occ",
                "swift"
            ],
            "duplicate": true,
            "title": {
                "content": "WKBackgroundModes"
            },
            "abstract": "<div><p>The services a watchOS app provides that require it to continue running in the background.</p></div>"
        }
    ],
    "containingGroup": [
        {
            "id": 3167160,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040989,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.WKBackgroundModes",
                    "name": "WKBackgroundModes",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "3.0"
                        }
                    ],
                    "allowedValues": [
                        "workout-processing",
                        "self-care",
                        "mindfulness",
                        "physical-therapy",
                        "alarm"
                    ],
                    "xcodeTitle": "Required background modes (Watch)",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKBackground<wbr/>Modes</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/wkbackgroundmodes"
                    ],
                    "title": {
                        "content": "WKBackgroundModes"
                    },
                    "abstract": "<div><p>The services a watchOS app provides that require it to continue running in the background.</p></div>"
                },
                {
                    "id": 3040973,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIBackgroundModes",
                    "name": "UIBackgroundModes",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "4.0"
                        },
                        {
                            "platform": "watchOS",
                            "introduced": "4.0"
                        }
                    ],
                    "allowedValues": [
                        "audio",
                        "location",
                        "voip",
                        "external-accessory",
                        "bluetooth-central",
                        "bluetooth-peripheral",
                        "fetch",
                        "processing",
                        "remote-notification"
                    ],
                    "xcodeTitle": "Required background modes",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIBackground<wbr/>Modes</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uibackgroundmodes"
                    ],
                    "title": {
                        "content": "UIBackgroundModes"
                    },
                    "abstract": "<div><p>Services provided by an app that require it to run in the background.</p></div>"
                }
            ],
            "title": {
                "content": "Information Property List Keys"
            }
        }
    ],
    "usr": "plist:Information_Property_List.UIBackgroundModes",
    "name": "UIBackgroundModes",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "4.0"
        },
        {
            "platform": "watchOS",
            "current": "6.2",
            "introduced": "4.0"
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
                "content": "UIKit"
            },
            "paths": [
                "documentation/uikit"
            ],
            "platforms": [
                "iOS",
                "watchOS"
            ]
        }
    ],
    "attributes": {
        "allowedTypesDetails": [
            {
                "value": [
                    {
                        "baseType": "string",
                        "arrayMode": "required",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">[string]</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "iOS",
                    "watchOS"
                ]
            }
        ]
    },
    "allowedValues": [
        "audio",
        "location",
        "voip",
        "external-accessory",
        "bluetooth-central",
        "bluetooth-peripheral",
        "fetch",
        "processing",
        "remote-notification"
    ],
    "xcodeTitle": "Required background modes",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIBackground<wbr/>Modes</span></code>",
    "declaration": [
        {
            "content": "<span>[string] UIBackgroundModes\n</span>",
            "platforms": [
                "iOS",
                "watchOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "string",
                    "arrayMode": "required",
                    "declaration": "<span>[string]\n</span>"
                }
            ]
        }
    ],
    "role": "symbol",
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
                "documentation/bundleresources/information_property_list/uibackgroundmodes"
            ],
            "usr": "plist:Information_Property_List.UIBackgroundModes"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/uibackgroundmodes"
            ],
            "usr": "plist:Information_Property_List.UIBackgroundModes"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/uibackgroundmodes"
    ],
    "hierarchy": [
        [
            {
                "id": 1627081,
                "role": "collection",
                "title": {
                    "content": "WatchKit"
                },
                "paths": [
                    "documentation/watchkit"
                ]
            },
            {
                "id": 3167158,
                "role": "collectionGroup",
                "title": {
                    "content": "Background Session Keys"
                },
                "paths": [
                    "documentation/watchkit/background_session_keys"
                ]
            }
        ],
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
    }
}
```