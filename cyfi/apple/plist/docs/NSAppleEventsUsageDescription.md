# [NSAppleEventsUsageDescription](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSAppleEventsUsageDescription)
## Privacy - AppleEvents Sending Usage Description
### A message that tells the user why the app is requesting the ability to send Apple events.
### [Default]: ""
### [JSON](/json/NSAppleEventsUsageDescription.json)
```json 
{
    "id": 3041411,
    "title": {
        "content": "NSAppleEventsUsageDescription"
    },
    "discussion": "<div><p>An app using Apple events to control another app might be able to gain access to sensitive user data. For example, the Mail app stores a lot of personal information in its local database that other apps can&#8217;t access directly. But because Mail can be automated with Apple events, other apps can use Mail to gain access to the data indirectly.</p><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>This key is required if your app uses APIs that send Apple events.</p></aside><p></p></div>",
    "abstract": "<div><p>A message that tells the user why the app is requesting the ability to send Apple events.</p></div>",
    "containingGroup": [
        {
            "id": 3375098,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3041411,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSAppleEventsUsageDescription",
                    "name": "NSAppleEventsUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.14"
                        }
                    ],
                    "xcodeTitle": "Privacy - AppleEvents Sending Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSApple<wbr/>Events<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsappleeventsusagedescription"
                    ],
                    "title": {
                        "content": "NSAppleEventsUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting the ability to send Apple events.</p></div>"
                },
                {
                    "id": 3041412,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSSystemAdministrationUsageDescription",
                    "name": "NSSystemAdministrationUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.14"
                        }
                    ],
                    "xcodeTitle": "Privacy - System Administration Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSSystem<wbr/>Administration<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nssystemadministrationusagedescription"
                    ],
                    "title": {
                        "content": "NSSystemAdministrationUsageDescription"
                    },
                    "abstract": "<div><p>A message in macOS that tells the user why the app is requesting to manipulate the system configuration.</p></div>"
                },
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
                "content": "Security"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSAppleEventsUsageDescription",
    "name": "NSAppleEventsUsageDescription",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.14"
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
    "xcodeTitle": "Privacy - AppleEvents Sending Usage Description",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSApple<wbr/>Events<wbr/>Usage<wbr/>Description</span></code>",
    "declaration": [
        {
            "content": "<span>string NSAppleEventsUsageDescription\n</span>",
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
                "documentation/bundleresources/information_property_list/nsappleeventsusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSAppleEventsUsageDescription"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nsappleeventsusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSAppleEventsUsageDescription"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nsappleeventsusagedescription"
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