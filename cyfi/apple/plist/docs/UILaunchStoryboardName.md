# [UILaunchStoryboardName](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/UILaunchStoryboardName)
## Launch screen interface file base name
### The filename of the storyboard from which to generate the app&#8217;s launch image.
### [Default]: ""
### [JSON](/json/UILaunchStoryboardName.json)
```json 
{
    "id": 3040976,
    "title": {
        "content": "UILaunchStoryboardName"
    },
    "abstract": "<div><p>The filename of the storyboard from which to generate the app&#8217;s launch image.</p></div>",
    "discussion": "<div><p>Specify the name of the storyboard file without the filename extension. For example, if the filename of your storyboard is <code class=\"code-voice\"><span>Launch<wbr/>Screen<wbr/>.storyboard</span></code>, specify &quot;LaunchScreen&quot; as the value for this key. </p></div>",
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
    "usr": "plist:Information_Property_List.UILaunchStoryboardName",
    "name": "UILaunchStoryboardName",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.5",
            "introduced": "9.0"
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
                "content": "UIKit"
            },
            "paths": [
                "documentation/uikit"
            ],
            "platforms": [
                "iOS",
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
                    "tvOS",
                    "watchOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Launch screen interface file base name",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UILaunch<wbr/>Storyboard<wbr/>Name</span></code>",
    "declaration": [
        {
            "content": "<span>string UILaunchStoryboardName\n</span>",
            "platforms": [
                "iOS",
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
                "documentation/bundleresources/information_property_list/uilaunchstoryboardname"
            ],
            "usr": "plist:Information_Property_List.UILaunchStoryboardName"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/uilaunchstoryboardname"
            ],
            "usr": "plist:Information_Property_List.UILaunchStoryboardName"
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/uilaunchstoryboardname"
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