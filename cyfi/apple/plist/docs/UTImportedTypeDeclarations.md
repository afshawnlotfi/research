# [UTImportedTypeDeclarations](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/UTImportedTypeDeclarations)
## Imported Type UTIs
### The uniform type identifiers inherently supported, but not owned, by the app.
### [Default]: [{"UTTypeConformsTo":[""],"UTTypeIdentifier":"","UTTypeTagSpecification":{}}]
### [JSON](/json/UTImportedTypeDeclarations.json)
```json 
{
    "id": 3041033,
    "title": {
        "content": "UTImportedTypeDeclarations"
    },
    "abstract": "<div><p>The uniform type identifiers inherently supported, but not owned, by the app.</p></div>",
    "containingGroup": [
        {
            "id": 3374914,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041025,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.UTExportedTypeDeclarations",
                    "name": "UTExportedTypeDeclarations",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "5.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.7"
                        }
                    ],
                    "xcodeTitle": "Exported Type UTIs",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTExported<wbr/>Type<wbr/>Declarations</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utexportedtypedeclarations"
                    ],
                    "title": {
                        "content": "UTExportedTypeDeclarations"
                    },
                    "abstract": "<div><p>The uniform type identifiers owned and exported by the app.</p></div>",
                    "hasChildren": true
                },
                {
                    "id": 3041033,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations",
                    "name": "UTImportedTypeDeclarations",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.5"
                        }
                    ],
                    "xcodeTitle": "Imported Type UTIs",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTImported<wbr/>Type<wbr/>Declarations</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utimportedtypedeclarations"
                    ],
                    "title": {
                        "content": "UTImportedTypeDeclarations"
                    },
                    "abstract": "<div><p>The uniform type identifiers inherently supported, but not owned, by the app.</p></div>",
                    "hasChildren": true
                }
            ],
            "title": {
                "content": "Universal Type Identifiers"
            }
        }
    ],
    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations",
    "name": "UTImportedTypeDeclarations",
    "domain": "plist",
    "kind": "dict",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.5",
            "introduced": "3.2"
        },
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.5"
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
                "iOS",
                "macOS"
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
                    "macOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Imported Type UTIs",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTImported<wbr/>Type<wbr/>Declarations</span></code>",
    "declaration": [
        {
            "content": "<span>[dictionary] UTImportedTypeDeclarations\n</span>",
            "platforms": [
                "iOS",
                "macOS"
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
                "documentation/bundleresources/information_property_list/utimportedtypedeclarations"
            ],
            "usr": "plist:Information_Property_List.UTImportedTypeDeclarations"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/utimportedtypedeclarations"
            ],
            "usr": "plist:Information_Property_List.UTImportedTypeDeclarations"
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/utimportedtypedeclarations"
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
            "id": 3044554,
            "role": "task",
            "symbols": [
                {
                    "id": 3041034,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations.UTTypeConformsTo",
                    "name": "UTTypeConformsTo",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.5"
                        }
                    ],
                    "required": true,
                    "xcodeTitle": "Conforms to UTIs",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTType<wbr/>Conforms<wbr/>To</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utimportedtypedeclarations/uttypeconformsto"
                    ],
                    "title": {
                        "content": "UTTypeConformsTo"
                    },
                    "abstract": "<div><p>The Uniform Type Identifier types that this type conforms to.</p></div>"
                },
                {
                    "id": 3041035,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations.UTTypeDescription",
                    "name": "UTTypeDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.5"
                        }
                    ],
                    "xcodeTitle": "Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTType<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utimportedtypedeclarations/uttypedescription"
                    ],
                    "title": {
                        "content": "UTTypeDescription"
                    },
                    "abstract": "<div><p>A description for this type.</p></div>"
                },
                {
                    "id": 3041036,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations.UTTypeIconFile",
                    "name": "UTTypeIconFile",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.5"
                        }
                    ],
                    "xcodeTitle": "Icon file name",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTType<wbr/>Icon<wbr/>File</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utimportedtypedeclarations/uttypeiconfile"
                    ],
                    "title": {
                        "content": "UTTypeIconFile"
                    },
                    "abstract": "<div><p>The bundle icon resource to associate with this type.</p></div>"
                },
                {
                    "id": 3041037,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations.UTTypeIconFiles",
                    "name": "UTTypeIconFiles",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.5"
                        }
                    ],
                    "xcodeTitle": "Icon file names",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTType<wbr/>Icon<wbr/>Files</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utimportedtypedeclarations/uttypeiconfiles"
                    ],
                    "title": {
                        "content": "UTTypeIconFiles"
                    },
                    "abstract": "<div><p>One or more bundle icon resources to associate with this type.</p></div>"
                },
                {
                    "id": 3041038,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations.UTTypeIdentifier",
                    "name": "UTTypeIdentifier",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.5"
                        }
                    ],
                    "required": true,
                    "xcodeTitle": "Identifier",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTType<wbr/>Identifier</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utimportedtypedeclarations/uttypeidentifier"
                    ],
                    "title": {
                        "content": "UTTypeIdentifier"
                    },
                    "abstract": "<div><p>The Uniform Type Identifier to assign to this type.</p></div>"
                },
                {
                    "id": 3041039,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations.UTTypeReferenceURL",
                    "name": "UTTypeReferenceURL",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.5"
                        }
                    ],
                    "xcodeTitle": "Reference URL",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTType<wbr/>Reference<wbr/>URL</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utimportedtypedeclarations/uttypereferenceurl"
                    ],
                    "title": {
                        "content": "UTTypeReferenceURL"
                    },
                    "abstract": "<div><p>The webpage for a reference document that describes this type.</p></div>"
                },
                {
                    "id": 3041040,
                    "role": "dictionarySymbol",
                    "usr": "plist:Information_Property_List.UTImportedTypeDeclarations.UTTypeTagSpecification",
                    "name": "UTTypeTagSpecification",
                    "domain": "plist",
                    "kind": "dict",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.5"
                        }
                    ],
                    "required": true,
                    "xcodeTitle": "Equivalent Types",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UTType<wbr/>Tag<wbr/>Specification</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/utimportedtypedeclarations/uttypetagspecification"
                    ],
                    "title": {
                        "content": "UTTypeTagSpecification"
                    },
                    "abstract": "<div><p>A dictionary defining one or more equivalent type identifiers.</p></div>"
                }
            ],
            "title": {
                "content": "Property List Keys"
            }
        }
    ]
}
```