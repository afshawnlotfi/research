# [NSContactsUsageDescription](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSContactsUsageDescription)
## Privacy - Contacts Usage Description
### A message that tells the user why the app is requesting access to the user&#8217;s contacts.
### [Default]: ""
### [JSON](../json/NSContactsUsageDescription.json)
```json 
{
    "id": 3041014,
    "title": {
        "content": "NSContactsUsageDescription"
    },
    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#8217;s contacts.</p></div>",
    "discussion": "<div><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>This key is required if your app uses APIs that access the user&#8217;s contacts.</p></aside><p></p></div>",
    "containingGroup": [
        {
            "id": 3174069,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3531071,
                    "role": "article",
                    "paths": [
                        "documentation/contacts/requesting_authorization_to_access_contacts",
                        "documentation/bundleresources/information_property_list/protected_resources/requesting_authorization_to_access_contacts"
                    ],
                    "abstract": "<div><p>Request permission from the user to read, create, and modify their Contacts entries.</p></div>",
                    "title": {
                        "content": "Requesting Authorization to Access Contacts"
                    }
                },
                {
                    "id": 1402934,
                    "role": "symbol",
                    "usr": "c:objc(cs)CNContactStore",
                    "name": "CNContactStore",
                    "domain": "swift",
                    "kind": "cl",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "9.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.11"
                        },
                        {
                            "platform": "Mac Catalyst",
                            "introduced": "13.0"
                        },
                        {
                            "platform": "watchOS",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"decorator\">class </span><span class=\"identifier\">CNContact<wbr/>Store</span></code>",
                    "paths": [
                        "documentation/contacts/cncontactstore"
                    ],
                    "title": {
                        "content": "CNContactStore"
                    },
                    "abstract": "<div><p>The object that fetches and saves contacts, groups, and containers from the user&#x27;s contacts database.</p></div>",
                    "hasChildren": true
                },
                {
                    "id": 3041014,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSContactsUsageDescription",
                    "name": "NSContactsUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "6.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.8"
                        }
                    ],
                    "xcodeTitle": "Privacy - Contacts Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSContacts<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nscontactsusagedescription"
                    ],
                    "title": {
                        "content": "NSContactsUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#8217;s contacts.</p></div>"
                },
                {
                    "id": 3368182,
                    "role": "symbol",
                    "usr": "entitlements:Entitlements.com.apple.developer.contacts.notes",
                    "name": "com.apple.developer.contacts.notes",
                    "domain": "entitlements",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "13.0"
                        }
                    ],
                    "titleStyle": "title",
                    "paths": [
                        "documentation/bundleresources/entitlements/com_apple_developer_contacts_notes"
                    ],
                    "title": {
                        "content": "com.apple.developer.contacts.notes"
                    },
                    "abstract": "<div><p>A Boolean value that indicates whether the app may access the notes stored in contacts.</p></div>"
                }
            ],
            "title": {
                "content": "Essentials"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSContactsUsageDescription",
    "name": "NSContactsUsageDescription",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "6.0"
        },
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.8"
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
                "content": "Contacts"
            },
            "paths": [
                "documentation/contacts"
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
                        "baseType": "string",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">string</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "iOS",
                    "macOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Privacy - Contacts Usage Description",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSContacts<wbr/>Usage<wbr/>Description</span></code>",
    "declaration": [
        {
            "content": "<span>string NSContactsUsageDescription\n</span>",
            "platforms": [
                "iOS",
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
                "documentation/bundleresources/information_property_list/nscontactsusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSContactsUsageDescription"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nscontactsusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSContactsUsageDescription"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nscontactsusagedescription"
    ],
    "hierarchy": [
        [
            {
                "id": 1613497,
                "role": "collection",
                "title": {
                    "content": "Contacts"
                },
                "paths": [
                    "documentation/contacts"
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