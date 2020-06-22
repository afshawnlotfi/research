# [NSPersistentStoreTypeKey](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSPersistentStoreTypeKey)
## Core Data persistent store type
### The Core Data persistent store type associated with a document type.
### [Default]: ""
### [JSON](/json/NSPersistentStoreTypeKey.json)
```json 
{
    "id": 3041346,
    "title": {
        "content": "NSPersistentStoreTypeKey"
    },
    "allowedLiterals": [
        {
            "name": "SQLite"
        },
        {
            "name": "XML"
        },
        {
            "name": "Binary"
        },
        {
            "name": "InMemory"
        }
    ],
    "abstract": "<div><p>The Core Data persistent store type associated with a document type.</p></div>",
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
    "usr": "plist:Information_Property_List.NSPersistentStoreTypeKey",
    "name": "NSPersistentStoreTypeKey",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.4"
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
                "content": "Core Data"
            },
            "paths": [
                "documentation/coredata"
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
                        "baseType": "string",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">string</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "macOS"
                ]
            }
        ]
    },
    "allowedValues": [
        "SQLite",
        "XML",
        "Binary",
        "InMemory"
    ],
    "xcodeTitle": "Core Data persistent store type",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSPersistent<wbr/>Store<wbr/>Type<wbr/>Key</span></code>",
    "declaration": [
        {
            "content": "<span>string NSPersistentStoreTypeKey\n</span>",
            "platforms": [
                "macOS"
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
                "documentation/bundleresources/information_property_list/nspersistentstoretypekey"
            ],
            "usr": "plist:Information_Property_List.NSPersistentStoreTypeKey"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nspersistentstoretypekey"
            ],
            "usr": "plist:Information_Property_List.NSPersistentStoreTypeKey"
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/nspersistentstoretypekey"
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