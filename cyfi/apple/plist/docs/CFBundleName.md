# [CFBundleName](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/CFBundleName)
## Bundle name
### A user-visible short name for the bundle.
### [Default]: ""
### [JSON](/json/CFBundleName.json)
```json 
{
    "id": 3040945,
    "title": {
        "content": "CFBundleName"
    },
    "abstract": "<div><p>A user-visible short name for the bundle.</p></div>",
    "discussion": "<div><p>This name can contain up to 15 characters. The system may display it to users if <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/cfbundledisplayname\"><code><span>CFBundle<wbr/>Display<wbr/>Name</span></code></a> isn&#x27;t set.</p></div>",
    "containingGroup": [
        {
            "id": 3374910,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040945,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleName",
                    "name": "CFBundleName",
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
                    "xcodeTitle": "Bundle name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Name</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundlename"
                    ],
                    "title": {
                        "content": "CFBundleName"
                    },
                    "abstract": "<div><p>A user-visible short name for the bundle.</p></div>"
                },
                {
                    "id": 3040926,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDisplayName",
                    "name": "CFBundleDisplayName",
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
                    "xcodeTitle": "Bundle display name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Display<wbr/>Name</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledisplayname"
                    ],
                    "title": {
                        "content": "CFBundleDisplayName"
                    },
                    "abstract": "<div><p>The user-visible name for the bundle, used by Siri and visible on the iOS Home screen.</p></div>"
                },
                {
                    "id": 3040950,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleSpokenName",
                    "name": "CFBundleSpokenName",
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
                    "xcodeTitle": "Accessibility Bundle Name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Spoken<wbr/>Name</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundlespokenname"
                    ],
                    "title": {
                        "content": "CFBundleSpokenName"
                    },
                    "abstract": "<div><p>A replacement for the app name in text-to-speech operations.</p></div>"
                }
            ],
            "title": {
                "content": "Naming"
            }
        }
    ],
    "usr": "plist:Information_Property_List.CFBundleName",
    "name": "CFBundleName",
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
    "xcodeTitle": "Bundle name",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Name</span></code>",
    "declaration": [
        {
            "content": "<span>string CFBundleName\n</span>",
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
                "documentation/bundleresources/information_property_list/cfbundlename"
            ],
            "usr": "plist:Information_Property_List.CFBundleName"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/cfbundlename"
            ],
            "usr": "plist:Information_Property_List.CFBundleName"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/cfbundlename"
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