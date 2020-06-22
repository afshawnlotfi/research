# [CFBundleDocumentTypes](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/CFBundleDocumentTypes)
## Document types
### The document types supported by the bundle.
### [Default]: [{"CFBundleTypeName":"","LSHandlerRank":"Default"}]
### [JSON](/json/CFBundleDocumentTypes.json)
```json 
{
    "id": 3040927,
    "title": {
        "content": "CFBundleDocumentTypes"
    },
    "abstract": "<div><p>The document types supported by the bundle.</p></div>",
    "containingGroup": [
        {
            "id": 3375103,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040927,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes",
                    "name": "CFBundleDocumentTypes",
                    "domain": "plist",
                    "kind": "dict",
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
                    "xcodeTitle": "Document types",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Document<wbr/>Types</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes"
                    ],
                    "title": {
                        "content": "CFBundleDocumentTypes"
                    },
                    "abstract": "<div><p>The document types supported by the bundle.</p></div>",
                    "hasChildren": true
                },
                {
                    "id": 3041118,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UISupportsDocumentBrowser",
                    "name": "UISupportsDocumentBrowser",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "11.0"
                        }
                    ],
                    "xcodeTitle": "Supports Document Browser",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UISupports<wbr/>Document<wbr/>Browser</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uisupportsdocumentbrowser"
                    ],
                    "title": {
                        "content": "UISupportsDocumentBrowser"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app is a document-based app.</p></div>"
                },
                {
                    "id": 3041024,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSSupportsOpeningDocumentsInPlace",
                    "name": "LSSupportsOpeningDocumentsInPlace",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "12.0"
                        }
                    ],
                    "xcodeTitle": "Supports opening documents in place",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSSupports<wbr/>Opening<wbr/>Documents<wbr/>In<wbr/>Place</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lssupportsopeningdocumentsinplace"
                    ],
                    "title": {
                        "content": "LSSupportsOpeningDocumentsInPlace"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app may open the original document from a file provider, rather than a copy of the document.</p></div>"
                },
                {
                    "id": 3041346,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSPersistentStoreTypeKey",
                    "name": "NSPersistentStoreTypeKey",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.4"
                        }
                    ],
                    "allowedValues": [
                        "SQLite",
                        "XML",
                        "Binary",
                        "InMemory"
                    ],
                    "xcodeTitle": "Core Data persistent store type",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSPersistent<wbr/>Store<wbr/>Type<wbr/>Key</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nspersistentstoretypekey"
                    ],
                    "title": {
                        "content": "NSPersistentStoreTypeKey"
                    },
                    "abstract": "<div><p>The Core Data persistent store type associated with a document type.</p></div>"
                }
            ],
            "title": {
                "content": "Documents"
            }
        }
    ],
    "usr": "plist:Information_Property_List.CFBundleDocumentTypes",
    "name": "CFBundleDocumentTypes",
    "domain": "plist",
    "kind": "dict",
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
                        "baseType": "dictionary",
                        "arrayMode": "required",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">[dictionary]</codeLine></declaration>"
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
    "xcodeTitle": "Document types",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Document<wbr/>Types</span></code>",
    "declaration": [
        {
            "content": "<span>[dictionary] CFBundleDocumentTypes\n</span>",
            "platforms": [
                "iOS",
                "macOS",
                "tvOS",
                "watchOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "dictionary",
                    "arrayMode": "required",
                    "declaration": "<span>[dictionary]\n</span>"
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
                "documentation/bundleresources/information_property_list/cfbundledocumenttypes"
            ],
            "usr": "plist:Information_Property_List.CFBundleDocumentTypes"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/cfbundledocumenttypes"
            ],
            "usr": "plist:Information_Property_List.CFBundleDocumentTypes"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/cfbundledocumenttypes"
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
    },
    "tasks": [
        {
            "id": 3044544,
            "role": "task",
            "symbols": [
                {
                    "id": 3040928,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes.CFBundleTypeIconFile",
                    "name": "CFBundleTypeIconFile",
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
                    "xcodeTitle": "Icon File Name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Type<wbr/>Icon<wbr/>File</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes/cfbundletypeiconfile"
                    ],
                    "title": {
                        "content": "CFBundleTypeIconFile"
                    },
                    "abstract": "<div><p>The icon to associate with the document type.</p></div>"
                },
                {
                    "id": 3040929,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes.CFBundleTypeName",
                    "name": "CFBundleTypeName",
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
                    "required": true,
                    "xcodeTitle": "Document Type Name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Type<wbr/>Name</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes/cfbundletypename"
                    ],
                    "title": {
                        "content": "CFBundleTypeName"
                    },
                    "abstract": "<div><p>The abstract name for the document type.</p></div>"
                },
                {
                    "id": 3040930,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes.CFBundleTypeRole",
                    "name": "CFBundleTypeRole",
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
                        "Editor",
                        "Viewer",
                        "Shell",
                        "QLGenerator",
                        "None"
                    ],
                    "defaultValue": "None",
                    "xcodeTitle": "Role",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CFBundle<wbr/>Type<wbr/>Role</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes/cfbundletyperole"
                    ],
                    "title": {
                        "content": "CFBundleTypeRole"
                    },
                    "abstract": "<div><p>The app&#x27;s role with respect to the document type.</p></div>"
                },
                {
                    "id": 3040931,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes.LSHandlerRank",
                    "name": "LSHandlerRank",
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
                        "Owner",
                        "Default",
                        "Alternate",
                        "None"
                    ],
                    "defaultValue": "Default",
                    "xcodeTitle": "Handler rank",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSHandler<wbr/>Rank</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes/lshandlerrank"
                    ],
                    "title": {
                        "content": "LSHandlerRank"
                    },
                    "abstract": "<div><p>The ranking of this app among apps that declare themselves as editors or viewers of the given file type.</p></div>"
                },
                {
                    "id": 3040932,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes.LSItemContentTypes",
                    "name": "LSItemContentTypes",
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
                    "xcodeTitle": "Document Content Type UTIs",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSItem<wbr/>Content<wbr/>Types</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes/lsitemcontenttypes"
                    ],
                    "title": {
                        "content": "LSItemContentTypes"
                    },
                    "abstract": "<div><p>The document file types the app supports.</p></div>"
                },
                {
                    "id": 3040933,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes.LSTypeIsPackage",
                    "name": "LSTypeIsPackage",
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
                    "xcodeTitle": "Document is a package or bundle",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSType<wbr/>Is<wbr/>Package</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes/lstypeispackage"
                    ],
                    "title": {
                        "content": "LSTypeIsPackage"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the document is distributed as a bundle.</p></div>"
                },
                {
                    "id": 3040934,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes.NSDocumentClass",
                    "name": "NSDocumentClass",
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
                    "xcodeTitle": "Cocoa NSDocument Class",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSDocument<wbr/>Class</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes/nsdocumentclass"
                    ],
                    "title": {
                        "content": "NSDocumentClass"
                    },
                    "abstract": "<div><p>The subclass used to create instances of this document.</p></div>"
                },
                {
                    "id": 3040935,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CFBundleDocumentTypes.NSExportableTypes",
                    "name": "NSExportableTypes",
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
                    "xcodeTitle": "Exportable Type UTIs",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSExportable<wbr/>Types</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/cfbundledocumenttypes/nsexportabletypes"
                    ],
                    "title": {
                        "content": "NSExportableTypes"
                    },
                    "abstract": "<div><p>The file types that this document can be exported to.</p></div>"
                }
            ],
            "title": {
                "content": "Property List Keys"
            }
        }
    ]
}
```