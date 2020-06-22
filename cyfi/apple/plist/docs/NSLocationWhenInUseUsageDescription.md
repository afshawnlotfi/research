# [NSLocationWhenInUseUsageDescription](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSLocationWhenInUseUsageDescription)
## Privacy - Location When In Use Usage Description
### A message that tells the user why the app is requesting access to the user&#8217;s location information while the app is running in the foreground.
### [Default]: ""
### [JSON](/json/NSLocationWhenInUseUsageDescription.json)
```json 
{
    "id": 3041019,
    "title": {
        "content": "NSLocationWhenInUseUsageDescription"
    },
    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#8217;s location information while the app is running in the foreground.</p></div>",
    "discussion": "<div><p>Use this key if your iOS app accesses location information only when running in the foreground. If your app needs location information when in the background, use <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/nslocationalwaysandwheninuseusagedescription\"><code><span>NSLocation<wbr/>Always<wbr/>And<wbr/>When<wbr/>In<wbr/>Use<wbr/>Usage<wbr/>Description</span></code></a> instead. For more information, see <a href=\"/documentation/corelocation/choosing_the_location_services_authorization_to_request\">Choosing the  Location Services Authorization to Request</a>.</p><p>If you need location information in a macOS app, use <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/nslocationusagedescription\"><code><span>NSLocation<wbr/>Usage<wbr/>Description</span></code></a> instead.</p><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>This key is required if your iOS app uses APIs that access the user&#8217;s location information while the app is in use.</p></aside><p></p></div>",
    "containingGroup": [
        {
            "id": 3376462,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 2916338,
                    "role": "article",
                    "paths": [
                        "documentation/corelocation/choosing_the_location_services_authorization_to_request",
                        "documentation/bundleresources/information_property_list/protected_resources/choosing_the_location_services_authorization_to_request"
                    ],
                    "abstract": "<div><p>Determine the authorization your app needs to access location data.</p></div>",
                    "title": {
                        "content": "Choosing the  Location Services Authorization to Request"
                    }
                },
                {
                    "id": 3382331,
                    "role": "article",
                    "paths": [
                        "documentation/corelocation/requesting_authorization_for_location_services"
                    ],
                    "abstract": "<div><p>Ask the user for permission to access their location.</p></div>",
                    "title": {
                        "content": "Requesting Authorization for Location Services"
                    }
                },
                {
                    "id": 3376463,
                    "role": "article",
                    "paths": [
                        "documentation/corelocation/responding_to_changes_in_authorization_status"
                    ],
                    "abstract": "<div><p>Receive and respond to changes in your app&#x27;s authorization status in your delegate&#x27;s method.</p></div>",
                    "title": {
                        "content": "Responding to Changes in Authorization Status"
                    }
                },
                {
                    "id": 1423636,
                    "role": "symbol",
                    "usr": "c:@E@CLAuthorizationStatus",
                    "name": "CLAuthorizationStatus",
                    "domain": "swift",
                    "kind": "enum",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "4.2"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.7"
                        },
                        {
                            "platform": "Mac Catalyst",
                            "introduced": "13.0"
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
                    "displayName": "<code class=\"display-name\"><span class=\"decorator\">enum </span><span class=\"identifier\">CLAuthorization<wbr/>Status</span></code>",
                    "paths": [
                        "documentation/corelocation/clauthorizationstatus"
                    ],
                    "title": {
                        "content": "CLAuthorizationStatus"
                    },
                    "abstract": "<div><p>Constants indicating the app&#x27;s authorization to use location services.</p></div>",
                    "hasChildren": true
                },
                {
                    "id": 3041016,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSLocationAlwaysAndWhenInUseUsageDescription",
                    "name": "NSLocationAlwaysAndWhenInUseUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "11.0"
                        }
                    ],
                    "xcodeTitle": "Privacy - Location Always and When In Use Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSLocation<wbr/>Always<wbr/>And<wbr/>When<wbr/>In<wbr/>Use<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nslocationalwaysandwheninuseusagedescription"
                    ],
                    "title": {
                        "content": "NSLocationAlwaysAndWhenInUseUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#8217;s location information at all times.</p></div>"
                },
                {
                    "id": 3041019,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSLocationWhenInUseUsageDescription",
                    "name": "NSLocationWhenInUseUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "11.0"
                        }
                    ],
                    "xcodeTitle": "Privacy - Location When In Use Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSLocation<wbr/>When<wbr/>In<wbr/>Use<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription"
                    ],
                    "title": {
                        "content": "NSLocationWhenInUseUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#8217;s location information while the app is running in the foreground.</p></div>"
                },
                {
                    "id": 3041018,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSLocationUsageDescription",
                    "name": "NSLocationUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "deprecated": "8.0",
                            "introduced": "6.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.14"
                        }
                    ],
                    "xcodeTitle": "Privacy - Location Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSLocation<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nslocationusagedescription"
                    ],
                    "title": {
                        "content": "NSLocationUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#8217;s location information.</p></div>"
                },
                {
                    "id": 3041017,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSLocationAlwaysUsageDescription",
                    "name": "NSLocationAlwaysUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "deprecated": "10.0",
                            "introduced": "8.0"
                        }
                    ],
                    "xcodeTitle": "Privacy - Location Always Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSLocation<wbr/>Always<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nslocationalwaysusagedescription"
                    ],
                    "title": {
                        "content": "NSLocationAlwaysUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting access to the user&#x27;s location at all times.</p></div>"
                }
            ],
            "title": {
                "content": "Authorization"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSLocationWhenInUseUsageDescription",
    "name": "NSLocationWhenInUseUsageDescription",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "11.0"
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
                "content": "Core Location"
            },
            "paths": [
                "documentation/corelocation"
            ],
            "platforms": [
                "iOS"
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
                    "iOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Privacy - Location When In Use Usage Description",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSLocation<wbr/>When<wbr/>In<wbr/>Use<wbr/>Usage<wbr/>Description</span></code>",
    "declaration": [
        {
            "content": "<span>string NSLocationWhenInUseUsageDescription\n</span>",
            "platforms": [
                "iOS"
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
                "documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSLocationWhenInUseUsageDescription"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSLocationWhenInUseUsageDescription"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription"
    ],
    "hierarchy": [
        [
            {
                "id": 1612498,
                "role": "collection",
                "title": {
                    "content": "Core Location"
                },
                "paths": [
                    "documentation/corelocation"
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