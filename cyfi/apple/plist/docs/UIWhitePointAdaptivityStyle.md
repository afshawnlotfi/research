# [UIWhitePointAdaptivityStyle](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/UIWhitePointAdaptivityStyle)
## White Point Adaptivity Style
### The app&#8217;s white point adaptivity style, enabled on devices with True Tone displays.
### [Default]: "UIWhitePointAdaptivityStyleStandard"
### [JSON](/json/UIWhitePointAdaptivityStyle.json)
```json 
{
    "id": 3041120,
    "title": {
        "content": "UIWhitePointAdaptivityStyle"
    },
    "allowedLiterals": [
        {
            "name": "UIWhitePointAdaptivityStyleStandard"
        },
        {
            "name": "UIWhitePointAdaptivityStyleReading"
        },
        {
            "name": "UIWhitePointAdaptivityStylePhoto"
        },
        {
            "name": "UIWhitePointAdaptivityStyleVideo"
        },
        {
            "name": "UIWhitePointAdaptivityStyleGame"
        }
    ],
    "abstract": "<div><p>The app&#8217;s white point adaptivity style, enabled on devices with True Tone displays.</p></div>",
    "containingGroup": [
        {
            "id": 3375104,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041011,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIUserInterfaceStyle",
                    "name": "UIUserInterfaceStyle",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "tvOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "User Interface Style",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIUser<wbr/>Interface<wbr/>Style</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uiuserinterfacestyle"
                    ],
                    "title": {
                        "content": "UIUserInterfaceStyle"
                    },
                    "abstract": "<div><p>The user interface style for the app.</p></div>"
                },
                {
                    "id": 3040983,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIViewEdgeAntialiasing",
                    "name": "UIViewEdgeAntialiasing",
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
                    "xcodeTitle": "Renders with edge antialiasing",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIView<wbr/>Edge<wbr/>Antialiasing</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uiviewedgeantialiasing"
                    ],
                    "title": {
                        "content": "UIViewEdgeAntialiasing"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether Core Animation layers use antialiasing when drawing a layer that&#x27;s not aligned to pixel boundaries.</p></div>"
                },
                {
                    "id": 3041120,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIWhitePointAdaptivityStyle",
                    "name": "UIWhitePointAdaptivityStyle",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "9.3"
                        }
                    ],
                    "allowedValues": [
                        "UIWhitePointAdaptivityStyleStandard",
                        "UIWhitePointAdaptivityStyleReading",
                        "UIWhitePointAdaptivityStylePhoto",
                        "UIWhitePointAdaptivityStyleVideo",
                        "UIWhitePointAdaptivityStyleGame"
                    ],
                    "defaultValue": "UIWhitePointAdaptivityStyleStandard",
                    "xcodeTitle": "White Point Adaptivity Style",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIWhite<wbr/>Point<wbr/>Adaptivity<wbr/>Style</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uiwhitepointadaptivitystyle"
                    ],
                    "title": {
                        "content": "UIWhitePointAdaptivityStyle"
                    },
                    "abstract": "<div><p>The app&#8217;s white point adaptivity style, enabled on devices with True Tone displays.</p></div>"
                },
                {
                    "id": 3040984,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIViewGroupOpacity",
                    "name": "UIViewGroupOpacity",
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
                    "xcodeTitle": "Renders with group opacity",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIView<wbr/>Group<wbr/>Opacity</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uiviewgroupopacity"
                    ],
                    "title": {
                        "content": "UIViewGroupOpacity"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether Core Animation sublayers inherit the opacity of their superlayer.</p></div>"
                }
            ],
            "title": {
                "content": "Styling"
            }
        }
    ],
    "usr": "plist:Information_Property_List.UIWhitePointAdaptivityStyle",
    "name": "UIWhitePointAdaptivityStyle",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.5",
            "introduced": "9.3"
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
                "iOS"
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
                    "iOS"
                ]
            }
        ]
    },
    "allowedValues": [
        "UIWhitePointAdaptivityStyleStandard",
        "UIWhitePointAdaptivityStyleReading",
        "UIWhitePointAdaptivityStylePhoto",
        "UIWhitePointAdaptivityStyleVideo",
        "UIWhitePointAdaptivityStyleGame"
    ],
    "defaultValue": "UIWhitePointAdaptivityStyleStandard",
    "xcodeTitle": "White Point Adaptivity Style",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIWhite<wbr/>Point<wbr/>Adaptivity<wbr/>Style</span></code>",
    "declaration": [
        {
            "content": "<span>string UIWhitePointAdaptivityStyle\n</span>",
            "platforms": [
                "iOS"
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
                "documentation/bundleresources/information_property_list/uiwhitepointadaptivitystyle"
            ],
            "usr": "plist:Information_Property_List.UIWhitePointAdaptivityStyle"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/uiwhitepointadaptivitystyle"
            ],
            "usr": "plist:Information_Property_List.UIWhitePointAdaptivityStyle"
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/uiwhitepointadaptivitystyle"
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