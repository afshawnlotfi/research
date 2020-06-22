# [LSUIPresentationMode](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/LSUIPresentationMode)
## Application UI Presentation Mode
### The initial user-interface mode for the app.
### [Default]: 0
### [JSON](/json/LSUIPresentationMode.json)
```json 
{
    "id": 3041371,
    "title": {
        "content": "LSUIPresentationMode"
    },
    "allowedLiterals": [
        {
            "name": "0"
        },
        {
            "name": "1"
        },
        {
            "name": "2"
        },
        {
            "name": "3"
        },
        {
            "name": "4"
        }
    ],
    "abstract": "<div><p>The initial user-interface mode for the app.</p></div>",
    "containingGroup": [
        {
            "id": 3375063,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040976,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UILaunchStoryboardName",
                    "name": "UILaunchStoryboardName",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "9.0"
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
                    "xcodeTitle": "Launch screen interface file base name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UILaunch<wbr/>Storyboard<wbr/>Name</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uilaunchstoryboardname"
                    ],
                    "title": {
                        "content": "UILaunchStoryboardName"
                    },
                    "abstract": "<div><p>The filename of the storyboard from which to generate the app&#8217;s launch image.</p></div>"
                },
                {
                    "id": 3163412,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.UILaunchStoryboards",
                    "name": "UILaunchStoryboards",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "9.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UILaunch<wbr/>Storyboards</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uilaunchstoryboards"
                    ],
                    "title": {
                        "content": "UILaunchStoryboards"
                    },
                    "hasChildren": true
                },
                {
                    "id": 3041371,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSUIPresentationMode",
                    "name": "LSUIPresentationMode",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "allowedValues": [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "defaultValue": "0",
                    "xcodeTitle": "Application UI Presentation Mode",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSUIPresentation<wbr/>Mode</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsuipresentationmode"
                    ],
                    "title": {
                        "content": "LSUIPresentationMode"
                    },
                    "abstract": "<div><p>The initial user-interface mode for the app.</p></div>"
                }
            ],
            "title": {
                "content": "Launch Interface"
            }
        }
    ],
    "usr": "plist:Information_Property_List.LSUIPresentationMode",
    "name": "LSUIPresentationMode",
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
                        "baseType": "number",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">number</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "macOS"
                ]
            }
        ]
    },
    "allowedValues": [
        "0",
        "1",
        "2",
        "3",
        "4"
    ],
    "defaultValue": "0",
    "xcodeTitle": "Application UI Presentation Mode",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSUIPresentation<wbr/>Mode</span></code>",
    "declaration": [
        {
            "content": "<span>number LSUIPresentationMode\n</span>",
            "platforms": [
                "macOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "number",
                    "declaration": "<span>number\n</span>"
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
                "documentation/bundleresources/information_property_list/lsuipresentationmode"
            ],
            "usr": "plist:Information_Property_List.LSUIPresentationMode"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/lsuipresentationmode"
            ],
            "usr": "plist:Information_Property_List.LSUIPresentationMode"
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/lsuipresentationmode"
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
                "id": 3375099,
                "role": "collectionGroup",
                "title": {
                    "content": "User Interface"
                },
                "paths": [
                    "documentation/bundleresources/information_property_list/user_interface"
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