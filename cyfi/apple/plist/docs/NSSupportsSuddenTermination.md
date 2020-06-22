# [NSSupportsSuddenTermination](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSSupportsSuddenTermination)
## Application can be killed immediately after launch
### A Boolean value indicating whether the system may terminate the app to log out or shut down more quickly.
### [Default]: false
### [JSON](../json/NSSupportsSuddenTermination.json)
```json 
{
    "id": 3041345,
    "title": {
        "content": "NSSupportsSuddenTermination"
    },
    "abstract": "<div><p>A Boolean value indicating whether the system may terminate the app to log out or shut down more quickly.</p></div>",
    "containingGroup": [
        {
            "id": 3375069,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041362,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSGetAppDiedEvents",
                    "name": "LSGetAppDiedEvents",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Application should get App Died events",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSGet<wbr/>App<wbr/>Died<wbr/>Events</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsgetappdiedevents"
                    ],
                    "title": {
                        "content": "LSGetAppDiedEvents"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app is notified when a child process dies.</p></div>"
                },
                {
                    "id": 3041345,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSSupportsSuddenTermination",
                    "name": "NSSupportsSuddenTermination",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Application can be killed immediately after launch",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSSupports<wbr/>Sudden<wbr/>Termination</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nssupportssuddentermination"
                    ],
                    "title": {
                        "content": "NSSupportsSuddenTermination"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the system may terminate the app to log out or shut down more quickly.</p></div>"
                },
                {
                    "id": 3040971,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIApplicationExitsOnSuspend",
                    "name": "UIApplicationExitsOnSuspend",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "deprecated": "13.0",
                            "introduced": "4.0"
                        },
                        {
                            "platform": "tvOS",
                            "deprecated": "13.0",
                            "introduced": "9.0"
                        },
                        {
                            "platform": "watchOS",
                            "deprecated": "6.0",
                            "introduced": "2.0"
                        }
                    ],
                    "xcodeTitle": "Application does not run in background",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIApplication<wbr/>Exits<wbr/>On<wbr/>Suspend</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uiapplicationexitsonsuspend"
                    ],
                    "title": {
                        "content": "UIApplicationExitsOnSuspend"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app terminates, rather than moves to the background, when the app quits.</p></div>"
                }
            ],
            "title": {
                "content": "Termination"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSSupportsSuddenTermination",
    "name": "NSSupportsSuddenTermination",
    "domain": "plist",
    "kind": "tdef",
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
                        "baseType": "boolean",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">boolean</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "macOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Application can be killed immediately after launch",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSSupports<wbr/>Sudden<wbr/>Termination</span></code>",
    "declaration": [
        {
            "content": "<span>boolean NSSupportsSuddenTermination\n</span>",
            "platforms": [
                "macOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "boolean",
                    "declaration": "<span>boolean\n</span>"
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
                "documentation/bundleresources/information_property_list/nssupportssuddentermination"
            ],
            "usr": "plist:Information_Property_List.NSSupportsSuddenTermination"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nssupportssuddentermination"
            ],
            "usr": "plist:Information_Property_List.NSSupportsSuddenTermination"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nssupportssuddentermination"
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