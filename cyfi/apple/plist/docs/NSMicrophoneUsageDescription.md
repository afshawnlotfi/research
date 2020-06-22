# [NSMicrophoneUsageDescription](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSMicrophoneUsageDescription)
## Privacy - Microphone Usage Description
### A message that tells the user why the app is requesting access to the device&#8217;s microphone.
### [Default]: ""
### [JSON](../json/NSMicrophoneUsageDescription.json)
```json 
{
    "id": 3041013,
    "title": {
        "content": "NSMicrophoneUsageDescription"
    },
    "abstract": "<div><p>A message that tells the user why the app is requesting access to the device&#8217;s microphone.</p></div>",
    "discussion": "<div><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>This key is required if your app uses APIs that access the device&#8217;s microphone.</p></aside><p></p></div>",
    "containingGroup": [
        {
            "id": 3112331,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 2958845,
                    "role": "article",
                    "paths": [
                        "documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios",
                        "documentation/bundleresources/information_property_list/protected_resources/requesting_authorization_for_media_capture_on_ios"
                    ],
                    "abstract": "<div><p>Respect user privacy by seeking permission to capture and store photos, audio, and video.</p></div>",
                    "title": {
                        "content": "Requesting Authorization for Media Capture on iOS"
                    }
                },
                {
                    "id": 3036311,
                    "role": "article",
                    "paths": [
                        "documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_macos",
                        "documentation/bundleresources/information_property_list/protected_resources/requesting_authorization_for_media_capture_on_macos"
                    ],
                    "abstract": "<div><p>Prompt the user to authorize access to the camera and microphone.</p></div>",
                    "title": {
                        "content": "Requesting Authorization for Media Capture on macOS"
                    }
                },
                {
                    "id": 3041012,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSCameraUsageDescription",
                    "name": "NSCameraUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "7.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.14"
                        }
                    ],
                    "xcodeTitle": "Privacy - Camera Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSCamera<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nscamerausagedescription"
                    ],
                    "title": {
                        "content": "NSCameraUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting access to the device&#8217;s camera.</p></div>"
                },
                {
                    "id": 3041013,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSMicrophoneUsageDescription",
                    "name": "NSMicrophoneUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "7.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.14"
                        },
                        {
                            "platform": "watchOS",
                            "introduced": "4.0"
                        }
                    ],
                    "xcodeTitle": "Privacy - Microphone Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSMicrophone<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsmicrophoneusagedescription"
                    ],
                    "title": {
                        "content": "NSMicrophoneUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting access to the device&#8217;s microphone.</p></div>"
                }
            ],
            "title": {
                "content": "Camera and Microphone"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSMicrophoneUsageDescription",
    "name": "NSMicrophoneUsageDescription",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "7.0"
        },
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.14"
        },
        {
            "platform": "watchOS",
            "current": "6.2",
            "introduced": "4.0"
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
                "content": "AVFoundation"
            },
            "paths": [
                "documentation/avfoundation"
            ],
            "platforms": [
                "iOS",
                "macOS",
                "watchOS"
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
                    "macOS",
                    "watchOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Privacy - Microphone Usage Description",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSMicrophone<wbr/>Usage<wbr/>Description</span></code>",
    "declaration": [
        {
            "content": "<span>string NSMicrophoneUsageDescription\n</span>",
            "platforms": [
                "iOS",
                "macOS",
                "watchOS"
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
                "documentation/bundleresources/information_property_list/nsmicrophoneusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSMicrophoneUsageDescription"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nsmicrophoneusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSMicrophoneUsageDescription"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nsmicrophoneusagedescription"
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