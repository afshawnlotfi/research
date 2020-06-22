# [BGTaskSchedulerPermittedIdentifiers](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/BGTaskSchedulerPermittedIdentifiers)
## Permitted background task scheduler identifiers
### An array of strings containing developer-specified task identifiers in reverse URL notation.
### [Default]: []
### [JSON](/json/BGTaskSchedulerPermittedIdentifiers.json)
```json 
{
    "id": 3194553,
    "title": {
        "content": "BGTaskSchedulerPermittedIdentifiers"
    },
    "abstract": "<div><p>An array of strings containing developer-specified task identifiers in reverse URL notation.</p></div>",
    "seeAlso": [
        {
            "id": 3142246,
            "role": "symbol",
            "paths": [
                "documentation/backgroundtasks/bgtaskscheduler"
            ],
            "usr": "c:objc(cs)BGTaskScheduler",
            "kind": "cl",
            "language": "swift",
            "domain": "swift",
            "name": "BGTaskScheduler",
            "displayName": "<code class=\"display-name\"><span class=\"decorator\">class </span><span class=\"identifier\">BGTask<wbr/>Scheduler</span></code>",
            "languages": [
                "occ",
                "swift"
            ],
            "title": {
                "content": "BGTaskScheduler"
            },
            "abstract": "<div><p>A class for scheduling tasks run by submitting task requests that launch your app in the background.</p></div>"
        }
    ],
    "containingGroup": [
        {
            "id": 3374987,
            "role": "task",
            "paths": [],
            "symbols": [
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
                },
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
                    "id": 3194553,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.BGTaskSchedulerPermittedIdentifiers",
                    "name": "BGTaskSchedulerPermittedIdentifiers",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "13.0"
                        },
                        {
                            "platform": "tvOS",
                            "introduced": "13.0"
                        }
                    ],
                    "xcodeTitle": "Permitted background task scheduler identifiers",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">BGTask<wbr/>Scheduler<wbr/>Permitted<wbr/>Identifiers</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/bgtaskschedulerpermittedidentifiers"
                    ],
                    "title": {
                        "content": "BGTaskSchedulerPermittedIdentifiers"
                    },
                    "abstract": "<div><p>An array of strings containing developer-specified task identifiers in reverse URL notation.</p></div>"
                },
                {
                    "id": 3041359,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSBackgroundOnly",
                    "name": "LSBackgroundOnly",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Application is background only",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSBackground<wbr/>Only</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsbackgroundonly"
                    ],
                    "title": {
                        "content": "LSBackgroundOnly"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app runs only in the background.</p></div>"
                }
            ],
            "title": {
                "content": "Background Execution"
            }
        }
    ],
    "usr": "plist:Information_Property_List.BGTaskSchedulerPermittedIdentifiers",
    "name": "BGTaskSchedulerPermittedIdentifiers",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "13.0"
        },
        {
            "platform": "tvOS",
            "current": "13.4",
            "introduced": "13.0"
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
                "content": "BackgroundTasks"
            },
            "paths": [
                "documentation/backgroundtasks"
            ],
            "platforms": [
                "iOS",
                "tvOS"
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
                    "tvOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Permitted background task scheduler identifiers",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">BGTask<wbr/>Scheduler<wbr/>Permitted<wbr/>Identifiers</span></code>",
    "declaration": [
        {
            "content": "<span>[string] BGTaskSchedulerPermittedIdentifiers\n</span>",
            "platforms": [
                "iOS",
                "tvOS"
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
                "documentation/bundleresources/information_property_list/bgtaskschedulerpermittedidentifiers"
            ],
            "usr": "plist:Information_Property_List.BGTaskSchedulerPermittedIdentifiers"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/bgtaskschedulerpermittedidentifiers"
            ],
            "usr": "plist:Information_Property_List.BGTaskSchedulerPermittedIdentifiers"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/bgtaskschedulerpermittedidentifiers"
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
    }
}
```