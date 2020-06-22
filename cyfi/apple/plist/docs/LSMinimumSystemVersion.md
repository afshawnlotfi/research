# [LSMinimumSystemVersion](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/LSMinimumSystemVersion)
## Minimum system version
### The minimum operating system version required for the app to run.
### [Default]: "10.0.0"
### [JSON](/json/LSMinimumSystemVersion.json)
```json 
{
    "id": 3041022,
    "title": {
        "content": "LSMinimumSystemVersion"
    },
    "abstract": "<div><p>The minimum operating system version required for the app to run.</p></div>",
    "discussion": "<div><p>The Mac App Store uses this key to indicate the OS releases on which your app can run and show compatibility with the user&#8217;s Mac.</p><p>For iOS, see <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/minimumosversion\"><code><span>Minimum<wbr/>OSVersion</span></code></a>.</p></div>",
    "containingGroup": [
        {
            "id": 3374988,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041022,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSMinimumSystemVersion",
                    "name": "LSMinimumSystemVersion",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "defaultValue": "10.0.0",
                    "xcodeTitle": "Minimum system version",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSMinimum<wbr/>System<wbr/>Version</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsminimumsystemversion"
                    ],
                    "title": {
                        "content": "LSMinimumSystemVersion"
                    },
                    "abstract": "<div><p>The minimum operating system version required for the app to run.</p></div>"
                },
                {
                    "id": 3041363,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.LSMinimumSystemVersionByArchitecture",
                    "name": "LSMinimumSystemVersionByArchitecture",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Minimum system versions, per-architecture",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSMinimum<wbr/>System<wbr/>Version<wbr/>By<wbr/>Architecture</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsminimumsystemversionbyarchitecture"
                    ],
                    "title": {
                        "content": "LSMinimumSystemVersionByArchitecture"
                    },
                    "abstract": "<div><p>The minimum version of macOS required for the app to run on a set of architectures.</p></div>"
                },
                {
                    "id": 3163404,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.MinimumOSVersion",
                    "name": "MinimumOSVersion",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.0"
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
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">Minimum<wbr/>OSVersion</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/minimumosversion"
                    ],
                    "title": {
                        "content": "MinimumOSVersion"
                    },
                    "abstract": "<div><p>The minimum operating system version required for the app to run on iOS, tvOS, and watchOS.</p></div>"
                },
                {
                    "id": 3041023,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSRequiresIPhoneOS",
                    "name": "LSRequiresIPhoneOS",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "12.0"
                        }
                    ],
                    "xcodeTitle": "Application requires iPhone environment",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSRequires<wbr/>IPhone<wbr/>OS</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsrequiresiphoneos"
                    ],
                    "title": {
                        "content": "LSRequiresIPhoneOS"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app must run in iOS.</p></div>"
                },
                {
                    "id": 3040992,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.WKWatchKitApp",
                    "name": "WKWatchKitApp",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKWatch<wbr/>Kit<wbr/>App</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/wkwatchkitapp"
                    ],
                    "title": {
                        "content": "WKWatchKitApp"
                    },
                    "abstract": "<div><p>A Boolean value that indicates whether the bundle is a watchOS app.</p></div>"
                }
            ],
            "title": {
                "content": "Operating System Version"
            }
        }
    ],
    "usr": "plist:Information_Property_List.LSMinimumSystemVersion",
    "name": "LSMinimumSystemVersion",
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
                "content": "Core Services"
            },
            "paths": [
                "documentation/coreservices"
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
                        "baseType": "string",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">string</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "macOS"
                ]
            }
        ]
    },
    "defaultValue": "10.0.0",
    "xcodeTitle": "Minimum system version",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSMinimum<wbr/>System<wbr/>Version</span></code>",
    "declaration": [
        {
            "content": "<span>string LSMinimumSystemVersion\n</span>",
            "platforms": [
                "macOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "string",
                    "declaration": "<span>string\n</span>"
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
                "documentation/bundleresources/information_property_list/lsminimumsystemversion"
            ],
            "usr": "plist:Information_Property_List.LSMinimumSystemVersion"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/lsminimumsystemversion"
            ],
            "usr": "plist:Information_Property_List.LSMinimumSystemVersion"
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/lsminimumsystemversion"
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
                "id": 3374879,
                "role": "collectionGroup",
                "title": {
                    "content": "Bundle Configuration"
                },
                "paths": [
                    "documentation/bundleresources/information_property_list/bundle_configuration"
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