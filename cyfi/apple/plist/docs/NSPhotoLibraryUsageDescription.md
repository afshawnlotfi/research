# [NSPhotoLibraryUsageDescription](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSPhotoLibraryUsageDescription)
## Privacy - Photo Library Usage Description
### A message that tells the user why the app is requesting access to the user&#8217;s photo library.
### [Default]: ""
### [JSON](/json/NSPhotoLibraryUsageDescription.json)
```json 
{
    "id": 3041122,
    "title": {
        "content": "NSPhotoLibraryUsageDescription"
    },
    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#8217;s photo library.</p></div>",
    "discussion": "<div><p>If your app only adds assets to the photo library and does not read assets, use the  <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/nsphotolibraryaddusagedescription\"><code><span>NSPhoto<wbr/>Library<wbr/>Add<wbr/>Usage<wbr/>Description</span></code></a> key instead.</p><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>This key is required if your app uses APIs that have read or write access to the user&#8217;s photo library.</p></aside><p></p><p></p></div>",
    "containingGroup": [
        {
            "id": 3112350,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3028445,
                    "role": "article",
                    "paths": [
                        "documentation/photokit/requesting_authorization_to_access_photos",
                        "documentation/bundleresources/information_property_list/protected_resources/requesting_authorization_to_access_photos"
                    ],
                    "abstract": "<div><p>Prepare your app to ask for permission when accessing the user&#x27;s photo library.</p></div>",
                    "title": {
                        "content": "Requesting Authorization to Access Photos"
                    }
                },
                {
                    "id": 3041121,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSPhotoLibraryAddUsageDescription",
                    "name": "NSPhotoLibraryAddUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "11.0"
                        }
                    ],
                    "xcodeTitle": "Privacy - Photo Library Additions Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSPhoto<wbr/>Library<wbr/>Add<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsphotolibraryaddusagedescription"
                    ],
                    "title": {
                        "content": "NSPhotoLibraryAddUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting write-only access to the user&#8217;s photo library.</p></div>"
                },
                {
                    "id": 3041122,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSPhotoLibraryUsageDescription",
                    "name": "NSPhotoLibraryUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "6.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.14"
                        }
                    ],
                    "xcodeTitle": "Privacy - Photo Library Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSPhoto<wbr/>Library<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsphotolibraryusagedescription"
                    ],
                    "title": {
                        "content": "NSPhotoLibraryUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#8217;s photo library.</p></div>"
                }
            ],
            "title": {
                "content": "Photos"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSPhotoLibraryUsageDescription",
    "name": "NSPhotoLibraryUsageDescription",
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
                "content": "Photos"
            },
            "paths": [
                "documentation/photokit"
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
    "xcodeTitle": "Privacy - Photo Library Usage Description",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSPhoto<wbr/>Library<wbr/>Usage<wbr/>Description</span></code>",
    "declaration": [
        {
            "content": "<span>string NSPhotoLibraryUsageDescription\n</span>",
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
                "documentation/bundleresources/information_property_list/nsphotolibraryusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSPhotoLibraryUsageDescription"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nsphotolibraryusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSPhotoLibraryUsageDescription"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nsphotolibraryusagedescription"
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