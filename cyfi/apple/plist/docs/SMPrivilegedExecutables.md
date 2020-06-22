# [SMPrivilegedExecutables](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/SMPrivilegedExecutables)
## Tools owned after installation
### The Service Management tools owned by the app.
### [Default]: {}
### [JSON](/json/SMPrivilegedExecutables.json)
```json 
{
    "id": 3041002,
    "title": {
        "content": "SMPrivilegedExecutables"
    },
    "abstract": "<div><p>The Service Management tools owned by the app.</p></div>",
    "containingGroup": [
        {
            "id": 3112355,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041001,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.SMAuthorizedClients",
                    "name": "SMAuthorizedClients",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "12.1"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.6"
                        },
                        {
                            "platform": "tvOS",
                            "introduced": "12.1"
                        },
                        {
                            "platform": "watchOS",
                            "introduced": "5.1"
                        }
                    ],
                    "xcodeTitle": "Clients allowed to add and remove tool",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">SMAuthorized<wbr/>Clients</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/smauthorizedclients"
                    ],
                    "title": {
                        "content": "SMAuthorizedClients"
                    },
                    "abstract": "<div><p>The Service Management clients authorized to add and remove tools.</p></div>"
                },
                {
                    "id": 3041002,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.SMPrivilegedExecutables",
                    "name": "SMPrivilegedExecutables",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "12.1"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.6"
                        },
                        {
                            "platform": "tvOS",
                            "introduced": "12.1"
                        },
                        {
                            "platform": "watchOS",
                            "introduced": "5.1"
                        }
                    ],
                    "xcodeTitle": "Tools owned after installation",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">SMPrivileged<wbr/>Executables</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/smprivilegedexecutables"
                    ],
                    "title": {
                        "content": "SMPrivilegedExecutables"
                    },
                    "abstract": "<div><p>The Service Management tools owned by the app.</p></div>"
                }
            ],
            "title": {
                "content": "Service Management"
            }
        }
    ],
    "usr": "plist:Information_Property_List.SMPrivilegedExecutables",
    "name": "SMPrivilegedExecutables",
    "domain": "plist",
    "kind": "dict",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "12.1"
        },
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.6"
        },
        {
            "platform": "tvOS",
            "current": "13.4",
            "introduced": "12.1"
        },
        {
            "platform": "watchOS",
            "current": "6.2",
            "introduced": "5.1"
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
                "content": "ServiceManagement"
            },
            "paths": [
                "documentation/servicemanagement"
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
                        "baseType": "dictionary",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">dictionary</codeLine></declaration>"
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
    "xcodeTitle": "Tools owned after installation",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">SMPrivileged<wbr/>Executables</span></code>",
    "declaration": [
        {
            "content": "<span>dictionary SMPrivilegedExecutables\n</span>",
            "platforms": [
                "iOS",
                "macOS",
                "tvOS",
                "watchOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "dictionary",
                    "declaration": "<span>dictionary\n</span>"
                }
            ]
        }
    ],
    "role": "dictionarySymbol",
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
                "documentation/bundleresources/information_property_list/smprivilegedexecutables"
            ],
            "usr": "plist:Information_Property_List.SMPrivilegedExecutables"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/smprivilegedexecutables"
            ],
            "usr": "plist:Information_Property_List.SMPrivilegedExecutables"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/smprivilegedexecutables"
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
                "id": 3375066,
                "role": "collectionGroup",
                "title": {
                    "content": "App Services"
                },
                "paths": [
                    "documentation/bundleresources/information_property_list/app_services"
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