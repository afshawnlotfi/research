# [CFBundleIdentifier](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/CFBundleIdentifier)
## Bundle identifier
### A unique identifier for a bundle.
### [Default]: ""
### [JSON](../json/CFBundleIdentifier.json)
```json 
{
    "id": 3040942,
    "title": {
        "content": "CFBundleIdentifier"
    },
    "abstract": "<div><p>A unique identifier for a bundle.</p></div>",
    "discussion": "<div><p>A <em>bundle ID</em> uniquely identifies a single app throughout the system. The bundle ID string must contain only alphanumeric characters (A-Z, a-z, and 0-9), hyphens (-), and periods (.). The string should be in reverse-DNS format. Bundle IDs are case sensitive.</p><p>The operating system uses the bundle ID to identify the app for which a given preference applies. Similarly, <a href=\"/documentation/coreservices/launch_services\">Launch Services</a> uses the bundle ID to locate an app capable of opening a particular file. The bundle ID also validates an app&#8217;s signature.</p><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>The bundle ID in the Information Property List must match the bundle ID you enter in App Store Connect. After you upload a build to App Store Connect, you can&#8217;t change the bundle ID or delete the associated explicit App ID in your developer account.</p></aside><p></p></div><h3 id=\"3130292\">watchOS Apps with Companion iOS App Considerations</h3><div><p>For watchOS apps that have a companion iOS app in the same project, the embedded WatchKit app and WatchKit extension targets must have the same bundle ID prefix as the iOS app. The WatchKit app must have the format <code class=\"code-voice\"><span>[Bundle ID].watchkitapp</span></code>, and the WatchKit extension must have the format <code class=\"code-voice\"><span>[Bundle ID].watchkitextension</span></code>. </p><p>If you change the iOS app&#x27;s bundle ID, also change the WatchKit app&#x27;s  <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/wkcompanionappbundleidentifier\"><code><span>WKCompanion<wbr/>App<wbr/>Bundle<wbr/>Identifier</span></code></a> key and the WatchKit extension&#x27;s <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/wkappbundleidentifier\"><code><span>WKApp<wbr/>Bundle<wbr/>Identifier</span></code></a> key to match.</p></div>",
    "containingGroup": [
        {
            "id": 3112333,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040942,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleIdentifier",
                    "name": "CFBundleIdentifier",
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
                    "required": true,
                    "xcodeTitle": "Bundle identifier",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Identifier</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundleidentifier"
                    ],
                    "title": {
                        "content": "CFBundleIdentifier"
                    },
                    "abstract": "<div><p>A unique identifier for a bundle.</p></div>"
                },
                {
                    "id": 3040988,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.WKAppBundleIdentifier",
                    "name": "WKAppBundleIdentifier",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKApp<wbr/>Bundle<wbr/>Identifier</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/wkappbundleidentifier"
                    ],
                    "title": {
                        "content": "WKAppBundleIdentifier"
                    },
                    "abstract": "<div><p>The bundle ID of the watchOS app.</p></div>"
                },
                {
                    "id": 3040990,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.WKCompanionAppBundleIdentifier",
                    "name": "WKCompanionAppBundleIdentifier",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKCompanion<wbr/>App<wbr/>Bundle<wbr/>Identifier</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/wkcompanionappbundleidentifier"
                    ],
                    "title": {
                        "content": "WKCompanionAppBundleIdentifier"
                    },
                    "abstract": "<div><p>The bundle ID of the watchOS app&#8217;s companion iOS app.</p></div>"
                }
            ],
            "title": {
                "content": "Identification"
            }
        }
    ],
    "usr": "plist:Information_Property_List.CFBundleIdentifier",
    "name": "CFBundleIdentifier",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "2.0"
        },
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.0"
        },
        {
            "platform": "tvOS",
            "current": "13.4",
            "introduced": "9.0"
        },
        {
            "platform": "watchOS",
            "current": "6.2",
            "introduced": "2.0"
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
                "content": "Core Foundation"
            },
            "paths": [
                "documentation/corefoundation"
            ],
            "platforms": [
                "iOS",
                "macOS",
                "tvOS",
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
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">string</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "iOS",
                    "macOS",
                    "tvOS",
                    "watchOS"
                ]
            }
        ]
    },
    "required": true,
    "xcodeTitle": "Bundle identifier",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Identifier</span></code>",
    "declaration": [
        {
            "content": "<span>string CFBundleIdentifier\n</span>",
            "platforms": [
                "iOS",
                "macOS",
                "tvOS",
                "watchOS"
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
                "documentation/bundleresources/information_property_list/cfbundleidentifier"
            ],
            "usr": "plist:Information_Property_List.CFBundleIdentifier"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/cfbundleidentifier"
            ],
            "usr": "plist:Information_Property_List.CFBundleIdentifier"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/cfbundleidentifier"
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