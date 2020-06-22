# [LSFileQuarantineEnabled](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/LSFileQuarantineEnabled)
## File quarantine enabled
### A Boolean value indicating whether the files this app creates are quarantined by default.
### [Default]: false
### [JSON](../json/LSFileQuarantineEnabled.json)
```json 
{
    "id": 3041361,
    "title": {
        "content": "LSFileQuarantineEnabled"
    },
    "abstract": "<div><p>A Boolean value indicating whether the files this app creates are quarantined by default.</p></div>",
    "containingGroup": [
        {
            "id": 3375061,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041326,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.APFiles",
                    "name": "APFiles",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Installation files",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">APFiles</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/apfiles"
                    ],
                    "title": {
                        "content": "APFiles"
                    },
                    "abstract": "<div><p>Describes the files or directories the app installs on the system.</p></div>",
                    "hasChildren": true
                },
                {
                    "id": 3041333,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.APInstallerURL",
                    "name": "APInstallerURL",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Installation directory base file URL",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">APInstaller<wbr/>URL</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/apinstallerurl"
                    ],
                    "title": {
                        "content": "APInstallerURL"
                    },
                    "abstract": "<div><p>The base path to the files or directories the app installs.</p></div>"
                },
                {
                    "id": 3041089,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSSupportsPurgeableLocalStorage",
                    "name": "NSSupportsPurgeableLocalStorage",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "9.3"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSSupports<wbr/>Purgeable<wbr/>Local<wbr/>Storage</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nssupportspurgeablelocalstorage"
                    ],
                    "title": {
                        "content": "NSSupportsPurgeableLocalStorage"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app continues working if the system purges the local storage.</p></div>"
                },
                {
                    "id": 3041361,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSFileQuarantineEnabled",
                    "name": "LSFileQuarantineEnabled",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "File quarantine enabled",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSFile<wbr/>Quarantine<wbr/>Enabled</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsfilequarantineenabled"
                    ],
                    "title": {
                        "content": "LSFileQuarantineEnabled"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the files this app creates are quarantined by default.</p></div>"
                },
                {
                    "id": 3040974,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIFileSharingEnabled",
                    "name": "UIFileSharingEnabled",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
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
                    "xcodeTitle": "Application supports iTunes file sharing",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIFile<wbr/>Sharing<wbr/>Enabled</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uifilesharingenabled"
                    ],
                    "title": {
                        "content": "UIFileSharingEnabled"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app shares files through iTunes.</p></div>"
                },
                {
                    "id": 3041356,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CSResourcesFileMapped",
                    "name": "CSResourcesFileMapped",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Resources should be file-mapped",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CSResources<wbr/>File<wbr/>Mapped</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/csresourcesfilemapped"
                    ],
                    "title": {
                        "content": "CSResourcesFileMapped"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app&#x27;s resources files should be mapped into memory.</p></div>"
                }
            ],
            "title": {
                "content": "Storage"
            }
        }
    ],
    "usr": "plist:Information_Property_List.LSFileQuarantineEnabled",
    "name": "LSFileQuarantineEnabled",
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
                        "baseType": "boolean",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">boolean</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "macOS"
                ]
            }
        ]
    },
    "xcodeTitle": "File quarantine enabled",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSFile<wbr/>Quarantine<wbr/>Enabled</span></code>",
    "declaration": [
        {
            "content": "<span>boolean LSFileQuarantineEnabled\n</span>",
            "platforms": [
                "macOS"
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
                "documentation/bundleresources/information_property_list/lsfilequarantineenabled"
            ],
            "usr": "plist:Information_Property_List.LSFileQuarantineEnabled"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/lsfilequarantineenabled"
            ],
            "usr": "plist:Information_Property_List.LSFileQuarantineEnabled"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/lsfilequarantineenabled"
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
                "id": 3376041,
                "role": "collectionGroup",
                "title": {
                    "content": "Data and Storage"
                },
                "paths": [
                    "documentation/bundleresources/information_property_list/data_and_storage"
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