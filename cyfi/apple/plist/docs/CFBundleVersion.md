# [CFBundleVersion](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/CFBundleVersion)
## Bundle version
### The version of the build that identifies an iteration of the bundle.
### [Default]: ""
### [JSON](../json/CFBundleVersion.json)
```json 
{
    "id": 3040956,
    "title": {
        "content": "CFBundleVersion"
    },
    "discussion": "<div><p>This key is a machine-readable string composed of one to three period-separated integers, such as 10.14.1. The string can only contain numeric characters (0-9) and periods. </p><p>Each integer provides information about the build version in the format [<em>Major</em>].[<em>Minor</em>].[<em>Patch</em>]:</p><ul><li><p>Major: A major revision number. </p></li><li><p>Minor: A minor revision number. </p></li><li><p>Patch: A maintenance release number.</p></li></ul><p>You can include more integers but the system ignores them.</p><p>You can also abbreviate the build version by using only one or two integers, where missing integers in the format are interpreted as zeros. For example, 0 specifies 0.0.0, 10 specifies 10.0.0, and 10.5 specifies 10.5.0. </p><p>This key is required by the App Store and is used throughout the system to identify the version of the build. For macOS apps, increment the build version before you distribute a build.</p></div>",
    "abstract": "<div><p>The version of the build that identifies an iteration of the bundle.</p></div>",
    "seeAlso": [
        {
            "id": 3040949,
            "role": "symbol",
            "paths": [
                "documentation/bundleresources/information_property_list/cfbundleshortversionstring"
            ],
            "usr": "plist:Information_Property_List.CFBundleShortVersionString",
            "kind": "tdef",
            "language": "plist",
            "domain": "plist",
            "name": "CFBundleShortVersionString",
            "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Short<wbr/>Version<wbr/>String</span></code>",
            "languages": [
                "occ",
                "swift"
            ],
            "duplicate": true,
            "title": {
                "content": "CFBundleShortVersionString"
            },
            "abstract": "<div><p>The release or version number of the bundle.</p></div>"
        }
    ],
    "containingGroup": [
        {
            "id": 3374912,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040956,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleVersion",
                    "name": "CFBundleVersion",
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
                    "xcodeTitle": "Bundle version",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Version</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundleversion"
                    ],
                    "title": {
                        "content": "CFBundleVersion"
                    },
                    "abstract": "<div><p>The version of the build that identifies an iteration of the bundle.</p></div>"
                },
                {
                    "id": 3040949,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleShortVersionString",
                    "name": "CFBundleShortVersionString",
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
                    "xcodeTitle": "Bundle versions string, short",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Short<wbr/>Version<wbr/>String</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundleshortversionstring"
                    ],
                    "title": {
                        "content": "CFBundleShortVersionString"
                    },
                    "abstract": "<div><p>The release or version number of the bundle.</p></div>"
                },
                {
                    "id": 3040943,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleInfoDictionaryVersion",
                    "name": "CFBundleInfoDictionaryVersion",
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
                    "defaultValue": "6.0",
                    "xcodeTitle": "InfoDictionary version",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Info<wbr/>Dictionary<wbr/>Version</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundleinfodictionaryversion"
                    ],
                    "title": {
                        "content": "CFBundleInfoDictionaryVersion"
                    },
                    "abstract": "<div><p>The current version of the Information Property List structure.</p></div>"
                },
                {
                    "id": 3041390,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSHumanReadableCopyright",
                    "name": "NSHumanReadableCopyright",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Copyright (human-readable)",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSHuman<wbr/>Readable<wbr/>Copyright</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nshumanreadablecopyright"
                    ],
                    "title": {
                        "content": "NSHumanReadableCopyright"
                    },
                    "abstract": "<div><p>A human-readable copyright notice for the bundle.</p></div>"
                }
            ],
            "title": {
                "content": "Bundle Version"
            }
        }
    ],
    "usr": "plist:Information_Property_List.CFBundleVersion",
    "name": "CFBundleVersion",
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
    "xcodeTitle": "Bundle version",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Version</span></code>",
    "declaration": [
        {
            "content": "<span>string CFBundleVersion\n</span>",
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
                "documentation/bundleresources/information_property_list/cfbundleversion"
            ],
            "usr": "plist:Information_Property_List.CFBundleVersion"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/cfbundleversion"
            ],
            "usr": "plist:Information_Property_List.CFBundleVersion"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/cfbundleversion"
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