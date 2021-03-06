# [ITSAppUsesNonExemptEncryption](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/ITSAppUsesNonExemptEncryption)
## App Uses Non-Exempt Encryption
### A Boolean value indicating whether the app uses encryption.
### [Default]: false
### [JSON](../json/ITSAppUsesNonExemptEncryption.json)
```json 
{
    "id": 3040993,
    "title": {
        "content": "ITSAppUsesNonExemptEncryption"
    },
    "abstract": "<div><p>A Boolean value indicating whether the app uses encryption.</p></div>",
    "discussion": "<div><p>Set the value for this key to <code class=\"code-voice\"><span>NO</span></code> in your app&#8217;s <a href=\"/documentation/bundleresources/information_property_list\">Information Property List</a> file to indicate that your app&#8212;including any third-party libraries you link against&#8212;either uses no encryption, or only uses encryption that&#8217;s exempt from export compliance requirements, as described in <a href=\"https://help.apple.com/app-store-connect/#/dev63c95e436\">Determine your export compliance requirements</a>. Set the value to <code class=\"code-voice\"><span>YES</span></code> to indicate that your app uses non-exempt encryption.</p><p>If you set the value to <code class=\"code-voice\"><span>YES</span></code>, you typically also provide a value for the <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/itsencryptionexportcompliancecode\"><code><span>ITSEncryption<wbr/>Export<wbr/>Compliance<wbr/>Code</span></code></a> key. You set that key&#8217;s value using a code Apple provides after successfully reviewing your export compliance documentation.</p><p>If you don&#8217;t have the <code class=\"code-voice\"><span>ITSApp<wbr/>Uses<wbr/>Non<wbr/>Exempt<wbr/>Encryption</span></code> key in your app&#8217;s <code class=\"code-voice\"><span>Info<wbr/>.plist</span></code> file, App Store Connect walks you through an export compliance questionnaire every time you upload a new version of your app. Including the key streamlines the app submission process.</p><p>For additional information, see <a href=\"/documentation/security/complying_with_encryption_export_regulations\">Complying with Encryption Export Regulations</a>.</p></div>",
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
    "usr": "plist:Information_Property_List.ITSAppUsesNonExemptEncryption",
    "name": "ITSAppUsesNonExemptEncryption",
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
    "xcodeTitle": "App Uses Non-Exempt Encryption",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">ITSApp<wbr/>Uses<wbr/>Non<wbr/>Exempt<wbr/>Encryption</span></code>",
    "declaration": [
        {
            "content": "<span>boolean ITSAppUsesNonExemptEncryption\n</span>",
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
                "documentation/bundleresources/information_property_list/itsappusesnonexemptencryption"
            ],
            "usr": "plist:Information_Property_List.ITSAppUsesNonExemptEncryption"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/itsappusesnonexemptencryption"
            ],
            "usr": "plist:Information_Property_List.ITSAppUsesNonExemptEncryption"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/itsappusesnonexemptencryption"
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