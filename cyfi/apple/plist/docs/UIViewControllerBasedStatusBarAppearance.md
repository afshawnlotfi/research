# [UIViewControllerBasedStatusBarAppearance](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/UIViewControllerBasedStatusBarAppearance)
## View controller-based status bar appearance
### A Boolean value indicating whether the status bar appearance is based on the style preferred for the current view controller.
### [Default]: false
### [JSON](../json/UIViewControllerBasedStatusBarAppearance.json)
```json 
{
    "id": 3041119,
    "title": {
        "content": "UIViewControllerBasedStatusBarAppearance"
    },
    "abstract": "<div><p>A Boolean value indicating whether the status bar appearance is based on the style preferred for the current view controller.</p></div>",
    "containingGroup": [
        {
            "id": 3375062,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041112,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIStatusBarHidden",
                    "name": "UIStatusBarHidden",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "2.0"
                        }
                    ],
                    "xcodeTitle": "Status bar is initially hidden",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIStatus<wbr/>Bar<wbr/>Hidden</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uistatusbarhidden"
                    ],
                    "title": {
                        "content": "UIStatusBarHidden"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the status bar is initially hidden when the app launches.</p></div>"
                },
                {
                    "id": 3041113,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIStatusBarStyle",
                    "name": "UIStatusBarStyle",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "2.0"
                        }
                    ],
                    "allowedValues": [
                        "UIStatusBarStyleDefault",
                        "UIStatusBarStyleBlackTranslucent",
                        "UIStatusBarStyleBlackOpaque"
                    ],
                    "defaultValue": "UIStatusBarStyleDefault",
                    "xcodeTitle": "Status bar style",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIStatus<wbr/>Bar<wbr/>Style</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uistatusbarstyle"
                    ],
                    "title": {
                        "content": "UIStatusBarStyle"
                    },
                    "abstract": "<div><p>The style of the status bar as the app launches.</p></div>"
                },
                {
                    "id": 3040981,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.UIStatusBarTintParameters",
                    "name": "UIStatusBarTintParameters",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "2.0"
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
                    "xcodeTitle": "Status bar tinting parameters",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIStatus<wbr/>Bar<wbr/>Tint<wbr/>Parameters</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uistatusbartintparameters"
                    ],
                    "title": {
                        "content": "UIStatusBarTintParameters"
                    },
                    "abstract": "<div><p>The status bar tint.</p></div>",
                    "hasChildren": true
                },
                {
                    "id": 3041119,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIViewControllerBasedStatusBarAppearance",
                    "name": "UIViewControllerBasedStatusBarAppearance",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "7.0"
                        }
                    ],
                    "xcodeTitle": "View controller-based status bar appearance",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIView<wbr/>Controller<wbr/>Based<wbr/>Status<wbr/>Bar<wbr/>Appearance</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uiviewcontrollerbasedstatusbarappearance"
                    ],
                    "title": {
                        "content": "UIViewControllerBasedStatusBarAppearance"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the status bar appearance is based on the style preferred for the current view controller.</p></div>"
                }
            ],
            "title": {
                "content": "Status Bar"
            }
        }
    ],
    "usr": "plist:Information_Property_List.UIViewControllerBasedStatusBarAppearance",
    "name": "UIViewControllerBasedStatusBarAppearance",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "7.0"
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
                        "baseType": "boolean",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">boolean</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "iOS"
                ]
            }
        ]
    },
    "xcodeTitle": "View controller-based status bar appearance",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIView<wbr/>Controller<wbr/>Based<wbr/>Status<wbr/>Bar<wbr/>Appearance</span></code>",
    "declaration": [
        {
            "content": "<span>boolean UIViewControllerBasedStatusBarAppearance\n</span>",
            "platforms": [
                "iOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "boolean",
                    "declaration": "<span>boolean\n</span>"
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
                "documentation/bundleresources/information_property_list/uiviewcontrollerbasedstatusbarappearance"
            ],
            "usr": "plist:Information_Property_List.UIViewControllerBasedStatusBarAppearance"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/uiviewcontrollerbasedstatusbarappearance"
            ],
            "usr": "plist:Information_Property_List.UIViewControllerBasedStatusBarAppearance"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/uiviewcontrollerbasedstatusbarappearance"
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