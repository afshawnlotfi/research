# [CFBundleDevelopmentRegion](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/CFBundleDevelopmentRegion)
## Localization native development region
### The default language and region for the bundle, as a language ID.
### [Default]: "en-US"
### [JSON](../json/CFBundleDevelopmentRegion.json)
```json 
{
    "id": 3040925,
    "title": {
        "content": "CFBundleDevelopmentRegion"
    },
    "abstract": "<div><p>The default language and region for the bundle, as a language ID.</p></div>",
    "discussion": "<div><p>The system uses this key as the language if it can&#x27;t locate a resource for the user&#8217;s preferred language. The value should be a <em>language ID</em> that identifies a language, dialect, or script. </p></div><h3 id=\"3130294\">Languages</h3><div><p>For a language used in many regions, use a code that represents a language designator. To specify English, use the en language designator. Use the two-letter ISO 639-1 standard (preferred) or the three-letter ISO 639-2 standard. If an ISO 639-1 code isn&#x27;t available for a particular language, use the ISO 639-2 code instead. There&#x27;s no ISO 639-1 code for the Hawaiian language, so use the ISO 639-2 code.</p></div><h3 id=\"3130295\">Dialects</h3><div><p>To distinguish between different languages and regional dialects, use a language designator with a region designator and a script designator separated by hyphens. To specify the English language as it&#x27;s used in the United Kingdom, use en-GB, where GB is the region designator. To represent Mandarin Chinese, spoken in Taiwan, and written in Traditional Chinese script, use zh-Hant-TW.</p><p>To specify a script, combine a language designator with a script designator separated by a hyphen, as in az-Arab for Azerbaijani in the Arabic script.</p><p></p></div>",
    "containingGroup": [
        {
            "id": 3374908,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040925,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDevelopmentRegion",
                    "name": "CFBundleDevelopmentRegion",
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
                    "defaultValue": "en-US",
                    "xcodeTitle": "Localization native development region",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Development<wbr/>Region</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledevelopmentregion"
                    ],
                    "title": {
                        "content": "CFBundleDevelopmentRegion"
                    },
                    "abstract": "<div><p>The default language and region for the bundle, as a language ID.</p></div>"
                },
                {
                    "id": 3040944,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleLocalizations",
                    "name": "CFBundleLocalizations",
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
                    "allowedValues": [
                        "zh",
                        "zh_CN",
                        "zh_TW",
                        "en",
                        "fr",
                        "de",
                        "it",
                        "ja",
                        "ko"
                    ],
                    "defaultValue": "en",
                    "xcodeTitle": "Localizations",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Localizations</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundlelocalizations"
                    ],
                    "title": {
                        "content": "CFBundleLocalizations"
                    },
                    "abstract": "<div><p>The localizations handled manually by your app.</p></div>"
                },
                {
                    "id": 3040924,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleAllowMixedLocalizations",
                    "name": "CFBundleAllowMixedLocalizations",
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
                    "xcodeTitle": "Localized resources can be mixed",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Allow<wbr/>Mixed<wbr/>Localizations</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundleallowmixedlocalizations"
                    ],
                    "title": {
                        "content": "CFBundleAllowMixedLocalizations"
                    },
                    "abstract": "<div><p>A Boolean value that indicates whether the bundle supports the retrieval of localized strings from frameworks.</p></div>"
                },
                {
                    "id": 3338805,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.TICapsLockLanguageSwitchCapable",
                    "name": "TICapsLockLanguageSwitchCapable",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.15"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">TICaps<wbr/>Lock<wbr/>Language<wbr/>Switch<wbr/>Capable</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/ticapslocklanguageswitchcapable"
                    ],
                    "title": {
                        "content": "TICapsLockLanguageSwitchCapable"
                    },
                    "abstract": "<div><p>A Boolean value that enables the Caps Lock key to switch between Latin and non-Latin input sources.</p></div>"
                }
            ],
            "title": {
                "content": "Localization"
            }
        }
    ],
    "usr": "plist:Information_Property_List.CFBundleDevelopmentRegion",
    "name": "CFBundleDevelopmentRegion",
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
    "defaultValue": "en-US",
    "xcodeTitle": "Localization native development region",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Development<wbr/>Region</span></code>",
    "declaration": [
        {
            "content": "<span>string CFBundleDevelopmentRegion\n</span>",
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
                "documentation/bundleresources/information_property_list/cfbundledevelopmentregion"
            ],
            "usr": "plist:Information_Property_List.CFBundleDevelopmentRegion"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/cfbundledevelopmentregion"
            ],
            "usr": "plist:Information_Property_List.CFBundleDevelopmentRegion"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/cfbundledevelopmentregion"
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