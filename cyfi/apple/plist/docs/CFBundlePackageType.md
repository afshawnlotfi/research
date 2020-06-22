# [CFBundlePackageType](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/CFBundlePackageType)
## Bundle OS Type code
### The type of bundle.
### [Default]: ""
### [JSON](/json/CFBundlePackageType.json)
```json 
{
    "id": 3040946,
    "title": {
        "content": "CFBundlePackageType"
    },
    "abstract": "<div><p>The type of bundle.</p></div>",
    "discussion": "<div><p>This key consists of a four-letter code for the bundle type. For apps, the code is <code class=\"code-voice\"><span>APPL</span></code>, for frameworks, it&#x27;s <code class=\"code-voice\"><span>FMWK</span></code>, and for bundles, it&#x27;s <code class=\"code-voice\"><span>BNDL</span></code>. The default value is derived from the bundle extension or, if it can&#x27;t be derived, the default value is <code class=\"code-voice\"><span>BNDL</span></code>. </p></div>",
    "containingGroup": [
        {
            "id": 3375236,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040946,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundlePackageType",
                    "name": "CFBundlePackageType",
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
                    "xcodeTitle": "Bundle OS Type code",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Package<wbr/>Type</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundlepackagetype"
                    ],
                    "title": {
                        "content": "CFBundlePackageType"
                    },
                    "abstract": "<div><p>The type of bundle.</p></div>"
                },
                {
                    "id": 3041357,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSApplicationCategoryType",
                    "name": "LSApplicationCategoryType",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "allowedValues": [
                        "public.app-category.business",
                        "public.app-category.developer-tools",
                        "public.app-category.education",
                        "public.app-category.entertainment",
                        "public.app-category.finance",
                        "public.app-category.games",
                        "public.app-category.action-games",
                        "public.app-category.adventure-games",
                        "public.app-category.arcade-games",
                        "public.app-category.board-games",
                        "public.app-category.card-games",
                        "public.app-category.casino-games",
                        "public.app-category.dice-games",
                        "public.app-category.educational-games",
                        "public.app-category.family-games",
                        "public.app-category.kids-games",
                        "public.app-category.music-games",
                        "public.app-category.puzzle-games",
                        "public.app-category.racing-games",
                        "public.app-category.role-playing-games",
                        "public.app-category.simulation-games",
                        "public.app-category.sports-games",
                        "public.app-category.strategy-games",
                        "public.app-category.trivia-games",
                        "public.app-category.word-games",
                        "public.app-category.graphics-design",
                        "public.app-category.healthcare-fitness",
                        "public.app-category.lifestyle",
                        "public.app-category.medical",
                        "public.app-category.music",
                        "public.app-category.news",
                        "public.app-category.photography",
                        "public.app-category.productivity",
                        "public.app-category.reference",
                        "public.app-category.social-networking",
                        "public.app-category.sports",
                        "public.app-category.travel",
                        "public.app-category.utilities",
                        "public.app-category.video",
                        "public.app-category.weather"
                    ],
                    "xcodeTitle": "Application Category",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSApplication<wbr/>Category<wbr/>Type</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsapplicationcategorytype"
                    ],
                    "title": {
                        "content": "LSApplicationCategoryType"
                    },
                    "abstract": "<div><p>The category that best describes your app for the App Store.</p></div>"
                }
            ],
            "title": {
                "content": "Categorization"
            }
        }
    ],
    "usr": "plist:Information_Property_List.CFBundlePackageType",
    "name": "CFBundlePackageType",
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
    "xcodeTitle": "Bundle OS Type code",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Package<wbr/>Type</span></code>",
    "declaration": [
        {
            "content": "<span>string CFBundlePackageType\n</span>",
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
                "documentation/bundleresources/information_property_list/cfbundlepackagetype"
            ],
            "usr": "plist:Information_Property_List.CFBundlePackageType"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/cfbundlepackagetype"
            ],
            "usr": "plist:Information_Property_List.CFBundlePackageType"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/cfbundlepackagetype"
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