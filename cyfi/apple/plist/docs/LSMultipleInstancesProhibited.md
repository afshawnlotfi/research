# [LSMultipleInstancesProhibited](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/LSMultipleInstancesProhibited)
## Application prohibits multiple instances
### A Boolean value indicating whether more than one user can launch the app simultaneously.
### [Default]: false
### [JSON](../json/LSMultipleInstancesProhibited.json)
```json 
{
    "id": 3041364,
    "title": {
        "content": "LSMultipleInstancesProhibited"
    },
    "abstract": "<div><p>A Boolean value indicating whether more than one user can launch the app simultaneously.</p></div>",
    "containingGroup": [
        {
            "id": 3375124,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3040980,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIRequiredDeviceCapabilities",
                    "name": "UIRequiredDeviceCapabilities",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "3.0"
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
                        "accelerometer",
                        "arkit",
                        "armv7",
                        "arm64",
                        "auto-focus-camera",
                        "bluetooth-le",
                        "camera-flash",
                        "front-facing-camera",
                        "gamekit",
                        "gps",
                        "gyroscope",
                        "healthkit",
                        "location-services",
                        "magnetometer",
                        "metal",
                        "microphone",
                        "nfc",
                        "opengles-1",
                        "opengles-2",
                        "opengles-3",
                        "peer-peer",
                        "sms",
                        "still-camera",
                        "telephony",
                        "video-camera",
                        "wifi"
                    ],
                    "xcodeTitle": "Required device capabilities",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIRequired<wbr/>Device<wbr/>Capabilities</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uirequireddevicecapabilities"
                    ],
                    "title": {
                        "content": "UIRequiredDeviceCapabilities"
                    },
                    "abstract": "<div><p>The device-related features that the app requires to run.</p></div>"
                },
                {
                    "id": 3041364,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSMultipleInstancesProhibited",
                    "name": "LSMultipleInstancesProhibited",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Application prohibits multiple instances",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSMultiple<wbr/>Instances<wbr/>Prohibited</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsmultipleinstancesprohibited"
                    ],
                    "title": {
                        "content": "LSMultipleInstancesProhibited"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether more than one user can launch the app simultaneously.</p></div>"
                },
                {
                    "id": 3040961,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSExecutableArchitectures",
                    "name": "LSExecutableArchitectures",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "12.0"
                        },
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        },
                        {
                            "platform": "tvOS",
                            "introduced": "12.0"
                        },
                        {
                            "platform": "watchOS",
                            "introduced": "5.0"
                        }
                    ],
                    "allowedValues": [
                        "i386",
                        "x86_64",
                        "ppc",
                        "ppc64"
                    ],
                    "defaultValue": "i386",
                    "xcodeTitle": "Executable architectures",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSExecutable<wbr/>Architectures</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsexecutablearchitectures"
                    ],
                    "title": {
                        "content": "LSExecutableArchitectures"
                    },
                    "abstract": "<div><p>The architectures that the app supports.</p></div>"
                },
                {
                    "id": 3041369,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.LSRequiresNativeExecution",
                    "name": "LSRequiresNativeExecution",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.0"
                        }
                    ],
                    "xcodeTitle": "Application requires native environment",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSRequires<wbr/>Native<wbr/>Execution</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/lsrequiresnativeexecution"
                    ],
                    "title": {
                        "content": "LSRequiresNativeExecution"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether to launch the app using the sub-binary for the current architecture.</p></div>"
                },
                {
                    "id": 3242663,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.WKRunsIndependentlyOfCompanionApp",
                    "name": "WKRunsIndependentlyOfCompanionApp",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "6.0"
                        }
                    ],
                    "xcodeTitle": "App can run independently of companion iPhone app",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKRuns<wbr/>Independently<wbr/>Of<wbr/>Companion<wbr/>App</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/wkrunsindependentlyofcompanionapp"
                    ],
                    "title": {
                        "content": "WKRunsIndependentlyOfCompanionApp"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the user can install and run the watchOS app independently of its iOS companion app.</p></div>"
                },
                {
                    "id": 3242664,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.WKWatchOnly",
                    "name": "WKWatchOnly",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "6.0"
                        }
                    ],
                    "xcodeTitle": "App is only available as a standalone watchOS app",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">WKWatch<wbr/>Only</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/wkwatchonly"
                    ],
                    "title": {
                        "content": "WKWatchOnly"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether the app is a watch-only app.</p></div>"
                },
                {
                    "id": 3040987,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.PUICAutoLaunchAudioOptOut",
                    "name": "PUICAutoLaunchAudioOptOut",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "5.0"
                        }
                    ],
                    "xcodeTitle": "Opt out of Auto-launch Audio App (Watch)",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">PUICAuto<wbr/>Launch<wbr/>Audio<wbr/>Opt<wbr/>Out</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/puicautolaunchaudiooptout"
                    ],
                    "title": {
                        "content": "PUICAutoLaunchAudioOptOut"
                    },
                    "abstract": "<div><p>A Boolean value indicating whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.</p></div>"
                },
                {
                    "id": 3040986,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.CLKComplicationSupportedFamilies",
                    "name": "CLKComplicationSupportedFamilies",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "2.0"
                        }
                    ],
                    "allowedValues": [
                        "CLKComplicationFamilyModularSmall",
                        "CLKComplicationFamilyModularLarge",
                        "CLKComplicationFamilyUtilitarianSmall",
                        "CLKComplicationFamilyUtilitarianSmallFlat",
                        "CLKComplicationFamilyUtilitarianLarge",
                        "CLKComplicationFamilyCircularSmall",
                        "CLKComplicationFamilyExtraLarge",
                        "CLKComplicationFamilyGraphicCorner",
                        "CLKComplicationFamilyGraphicBezel",
                        "CLKComplicationFamilyGraphicCircular",
                        "CLKComplicationFamilyGraphicRectangular"
                    ],
                    "xcodeTitle": "ClockKit Complication - Supported Families",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">CLKComplication<wbr/>Supported<wbr/>Families</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/clkcomplicationsupportedfamilies"
                    ],
                    "title": {
                        "content": "CLKComplicationSupportedFamilies"
                    },
                    "abstract": "<div><p>The complication families for which the app can provide data.</p></div>"
                }
            ],
            "title": {
                "content": "Launch Conditions"
            }
        }
    ],
    "usr": "plist:Information_Property_List.LSMultipleInstancesProhibited",
    "name": "LSMultipleInstancesProhibited",
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
    "xcodeTitle": "Application prohibits multiple instances",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">LSMultiple<wbr/>Instances<wbr/>Prohibited</span></code>",
    "declaration": [
        {
            "content": "<span>boolean LSMultipleInstancesProhibited\n</span>",
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
                "documentation/bundleresources/information_property_list/lsmultipleinstancesprohibited"
            ],
            "usr": "plist:Information_Property_List.LSMultipleInstancesProhibited"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/lsmultipleinstancesprohibited"
            ],
            "usr": "plist:Information_Property_List.LSMultipleInstancesProhibited"
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/lsmultipleinstancesprohibited"
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
                "id": 3375101,
                "role": "collectionGroup",
                "title": {
                    "content": "App Execution"
                },
                "paths": [
                    "documentation/bundleresources/information_property_list/app_execution"
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