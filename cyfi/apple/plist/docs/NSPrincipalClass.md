# [NSPrincipalClass](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSPrincipalClass)
## Principal class
### The name of the bundle&#8217;s main executable class.
### [Default]: ""
### [JSON](/json/NSPrincipalClass.json)
```json 
{
    "id": 3041393,
    "title": {
        "content": "NSPrincipalClass"
    },
    "abstract": "<div><p>The name of the bundle&#8217;s main executable class.</p></div>",
    "discussion": "<div><p>The system uses the class identified by this key to set the <a class=\"symbol-name\" href=\"/documentation/foundation/bundle/1409048-principalclass\"><code><span>principal<wbr/>Class</span></code></a> property of a bundle when it&#8217;s loaded.</p><p>Xcode sets the default value of this key to <a class=\"symbol-name\" href=\"/documentation/appkit/nsapplication\"><code><span>NSApplication</span></code></a> for macOS apps, and to <a class=\"symbol-name\" href=\"/documentation/uikit/uiapplication\"><code><span>UIApplication</span></code></a> for iOS and tvOS apps. For other types of bundles, you must set this key in <a href=\"https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/ProvidingUserAssitAppleHelp/authoring_help/authoring_help_book.html#//apple_ref/doc/uid/TP30000903-CH206-SW22\">The Info.plist File</a>.</p></div>",
    "containingGroup": [
        {
            "id": 3374888,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041393,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSPrincipalClass",
                    "name": "NSPrincipalClass",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Principal class",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSPrincipal<wbr/>Class</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsprincipalclass"
                    ],
                    "title": {
                        "content": "NSPrincipalClass"
                    },
                    "abstract": "<div><p>The name of the bundle&#8217;s main executable class.</p></div>"
                },
                {
                    "id": 3040985,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CLKComplicationPrincipalClass",
                    "name": "CLKComplicationPrincipalClass",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "2.0"
                        }
                    ],
                    "xcodeTitle": "ClockKit Complication - Principal Class",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CLKComplication<wbr/>Principal<wbr/>Class</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/clkcomplicationprincipalclass"
                    ],
                    "title": {
                        "content": "CLKComplicationPrincipalClass"
                    },
                    "abstract": "<div><p>The name of the class that implements the complication data source protocol.</p></div>"
                },
                {
                    "id": 3040936,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleExecutable",
                    "name": "CFBundleExecutable",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "2.0"
                        },
                        {
                            "platform": "macOS",
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
                    "xcodeTitle": "Executable file",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Executable</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundleexecutable"
                    ],
                    "title": {
                        "content": "CFBundleExecutable"
                    },
                    "abstract": "<div><p>The name of the bundle&#8217;s executable file.</p></div>"
                },
                {
                    "id": 3041360,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.LSEnvironment",
                    "name": "LSEnvironment",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Environment variables",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSEnvironment</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsenvironment"
                    ],
                    "title": {
                        "content": "LSEnvironment"
                    },
                    "abstract": "<div><p>Environment variables to set before launching the app.</p></div>"
                }
            ],
            "title": {
                "content": "Launch"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSPrincipalClass",
    "name": "NSPrincipalClass",
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
                "content": "Foundation"
            },
            "paths": [
                "documentation/foundation"
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
    "xcodeTitle": "Principal class",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSPrincipal<wbr/>Class</span></code>",
    "declaration": [
        {
            "content": "<span>string NSPrincipalClass\n</span>",
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
                "documentation/bundleresources/information_property_list/nsprincipalclass"
            ],
            "usr": "plist:Information_Property_List.NSPrincipalClass"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nsprincipalclass"
            ],
            "usr": "plist:Information_Property_List.NSPrincipalClass"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nsprincipalclass"
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