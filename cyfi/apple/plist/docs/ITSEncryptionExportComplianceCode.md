# [ITSEncryptionExportComplianceCode](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/ITSEncryptionExportComplianceCode)
## App Encryption Export Compliance Code
### The export compliance code provided by App Store Connect for apps that require it.
### [Default]: ""
### [JSON](/json/ITSEncryptionExportComplianceCode.json)
```json 
{
    "id": 3040994,
    "title": {
        "content": "ITSEncryptionExportComplianceCode"
    },
    "abstract": "<div><p>The export compliance code provided by App Store Connect for apps that require it.</p></div>",
    "discussion": "<div><p>Include this key in your app&#8217;s <a href=\"/documentation/bundleresources/information_property_list\">Information Property List</a> file if you set the <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/itsappusesnonexemptencryption\"><code><span>ITSApp<wbr/>Uses<wbr/>Non<wbr/>Exempt<wbr/>Encryption</span></code></a> key&#8217;s value to <code class=\"code-voice\"><span>YES</span></code>. Set the value for this key to the code that Apple sends you after successfully reviewing export compliance documentation that you provide through App Store Connect.</p><p>For additional information, see <a href=\"/documentation/security/complying_with_encryption_export_regulations\">Complying with Encryption Export Regulations</a>.</p></div>",
    "containingGroup": [
        {
            "id": 3145046,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040993,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.ITSAppUsesNonExemptEncryption",
                    "name": "ITSAppUsesNonExemptEncryption",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "App Uses Non-Exempt Encryption",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">ITSApp<wbr/>Uses<wbr/>Non<wbr/>Exempt<wbr/>Encryption</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/itsappusesnonexemptencryption"
                    ],
                    "title": {
                        "content": "ITSAppUsesNonExemptEncryption"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app uses encryption.</p></div>"
                },
                {
                    "id": 3040994,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.ITSEncryptionExportComplianceCode",
                    "name": "ITSEncryptionExportComplianceCode",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "App Encryption Export Compliance Code",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">ITSEncryption<wbr/>Export<wbr/>Compliance<wbr/>Code</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/itsencryptionexportcompliancecode"
                    ],
                    "title": {
                        "content": "ITSEncryptionExportComplianceCode"
                    },
                    "abstract": "<div><p>The export compliance code provided by App Store Connect for apps that require it.</p></div>"
                }
            ],
            "title": {
                "content": "Encryption Export Compliance Keys"
            }
        }
    ],
    "usr": "plist:Information_Property_List.ITSEncryptionExportComplianceCode",
    "name": "ITSEncryptionExportComplianceCode",
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
                "content": "Security"
            },
            "paths": [
                "documentation/security"
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
    "xcodeTitle": "App Encryption Export Compliance Code",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">ITSEncryption<wbr/>Export<wbr/>Compliance<wbr/>Code</span></code>",
    "declaration": [
        {
            "content": "<span>string ITSEncryptionExportComplianceCode\n</span>",
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
                "documentation/bundleresources/information_property_list/itsencryptionexportcompliancecode"
            ],
            "usr": "plist:Information_Property_List.ITSEncryptionExportComplianceCode"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/itsencryptionexportcompliancecode"
            ],
            "usr": "plist:Information_Property_List.ITSEncryptionExportComplianceCode"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/itsencryptionexportcompliancecode"
    ],
    "hierarchy": [
        [
            {
                "id": 1613484,
                "role": "collection",
                "title": {
                    "content": "Security"
                },
                "paths": [
                    "documentation/security"
                ]
            },
            {
                "id": 3145066,
                "role": "article",
                "title": {
                    "content": "Complying with Encryption Export Regulations"
                },
                "paths": [
                    "documentation/security/complying_with_encryption_export_regulations",
                    "documentation/cryptokit/complying_with_encryption_export_regulations"
                ]
            }
        ],
        [
            {
                "id": 3230513,
                "role": "collection",
                "title": {
                    "content": "Apple CryptoKit"
                },
                "paths": [
                    "documentation/cryptokit"
                ]
            },
            {
                "id": 3145066,
                "role": "article",
                "title": {
                    "content": "Complying with Encryption Export Regulations"
                },
                "paths": [
                    "documentation/security/complying_with_encryption_export_regulations",
                    "documentation/cryptokit/complying_with_encryption_export_regulations"
                ]
            }
        ],
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
                "id": 3375067,
                "role": "collectionGroup",
                "title": {
                    "content": "Protected Resources"
                },
                "paths": [
                    "documentation/bundleresources/information_property_list/protected_resources"
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