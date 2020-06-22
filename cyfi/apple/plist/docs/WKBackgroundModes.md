# [WKBackgroundModes](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/WKBackgroundModes)
## Required background modes (Watch)
### The services a watchOS app provides that require it to continue running in the background.
### [Default]: [""]
### [JSON](/json/WKBackgroundModes.json)
```json 
{
    "id": 3040989,
    "title": {
        "content": "WKBackgroundModes"
    },
    "allowedLiterals": [
        {
            "name": "workout-processing",
            "discussion": "<div><p>Allows an active workout session to run in the background.</p></div>"
        },
        {
            "name": "self-care",
            "discussion": "<div><p>Enables extended runtime sessions for brief activities focusing on health or emotional well-being. </p></div>"
        },
        {
            "name": "mindfulness",
            "discussion": "<div><p>Enables extended runtime sessions for silent meditation.</p></div>"
        },
        {
            "name": "physical-therapy",
            "discussion": "<div><p>Enables extended runtime sessions for stretching, strengthening, or range-of-motion exercises.</p></div>"
        },
        {
            "name": "alarm",
            "discussion": "<div><p>Enables extended runtime sessions for smart alarms.</p></div>"
        }
    ],
    "discussion": "<div><p>To add this key to the Information Property List, enable your WatchKit extension&#8217;s Background Modes capability in Xcode.</p><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>You can only enable one of the extended runtime session modes (<code class=\"code-voice\"><span>self-care</span></code>, <code class=\"code-voice\"><span>mindfulness</span></code>, <code class=\"code-voice\"><span>physical-therapy</span></code>, or <code class=\"code-voice\"><span>alarm</span></code>). However, you can enable both an extended runtime session mode and the <code class=\"code-voice\"><span>workout-processing</span></code> mode. If you set the background modes using Xcode&#8217;s Signing &amp; Capabilities tab, Xcode insures that these values are set properly.</p></aside></div>",
    "abstract": "<div><p>The services a watchOS app provides that require it to continue running in the background.</p></div>",
    "seeAlso": [
        {
            "id": 3377593,
            "role": "article",
            "paths": [
                "documentation/watchkit/using_extended_runtime_sessions"
            ],
            "languages": [
                "occ",
                "swift"
            ],
            "title": {
                "content": "Using Extended Runtime Sessions"
            },
            "abstract": "<div><p>Create an extended runtime session that continues running your app after the user stops interacting with it.</p></div>"
        },
        {
            "id": 3384920,
            "role": "article",
            "paths": [
                "documentation/healthkit/workouts_and_activity_rings/running_workout_sessions"
            ],
            "languages": [
                "occ",
                "swift"
            ],
            "title": {
                "content": "Running Workout Sessions"
            },
            "abstract": "<div><p>Track a workout on Apple Watch.</p></div>"
        },
        {
            "id": 3040973,
            "role": "symbol",
            "paths": [
                "documentation/bundleresources/information_property_list/uibackgroundmodes"
            ],
            "usr": "plist:Information_Property_List.UIBackgroundModes",
            "kind": "tdef",
            "language": "plist",
            "domain": "plist",
            "name": "UIBackgroundModes",
            "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIBackground<wbr/>Modes</span></code>",
            "languages": [
                "occ",
                "swift"
            ],
            "duplicate": true,
            "title": {
                "content": "UIBackgroundModes"
            },
            "abstract": "<div><p>Services provided by an app that require it to run in the background.</p></div>"
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
    "usr": "plist:Information_Property_List.WKBackgroundModes",
    "name": "WKBackgroundModes",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "watchOS",
            "current": "6.2",
            "introduced": "3.0"
        }
    ],
    "parent": {
        "id": 3112092,
        "usr": "plist:Information_Property_List",
        "name": "Information Property List",
        "domain": "plist",
        "kind": "schema",
        "role": "dictionarySymbol",
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
                "content": "WatchKit"
            },
            "paths": [
                "documentation/watchkit"
            ],
            "platforms": [
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
                    "watchOS"
                ]
            }
        ]
    },
    "allowedValues": [
        "workout-processing",
        "self-care",
        "mindfulness",
        "physical-therapy",
        "alarm"
    ],
    "xcodeTitle": "Required background modes (Watch)",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKBackground<wbr/>Modes</span></code>",
    "declaration": [
        {
            "content": "<span>[string] WKBackgroundModes\n</span>",
            "platforms": [
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
                "documentation/bundleresources/information_property_list/wkbackgroundmodes"
            ],
            "usr": "plist:Information_Property_List.WKBackgroundModes"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/wkbackgroundmodes"
            ],
            "usr": "plist:Information_Property_List.WKBackgroundModes"
        }
    },
    "diffAvailability": {
        "major": {
            "change": "modified",
            "platform": "Xcode",
            "versions": [
                "11.0",
                "11.5"
            ]
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/wkbackgroundmodes"
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