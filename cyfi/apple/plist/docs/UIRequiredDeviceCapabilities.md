# [UIRequiredDeviceCapabilities](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/UIRequiredDeviceCapabilities)
## Required device capabilities
### The device-related features that the app requires to run.
### [Default]: [""]
### [JSON](../json/UIRequiredDeviceCapabilities.json)
```json 
{
    "id": 3040980,
    "title": {
        "content": "UIRequiredDeviceCapabilities"
    },
    "abstract": "<div><p>The device-related features that the app requires to run.</p></div>",
    "discussion": "<div><p>The App Store prevents customers from installing an app on a device that doesn&#8217;t support the required capabilities for that app. Use this key to declare the capabilities your app requires. For a list of the features supported by different devices, see <a href=\"https://developer.apple.com/support/required-device-capabilities/\">Required Device Capabilities</a>.</p><p>You typically use an array for the key&#8217;s associated value. The presence in that array of any of the possible values listed above indicates that the app requires the corresponding feature. Omit a value to indicate that the feature isn&#8217;t required, but can be present.</p><p>Alternatively, you can use a dictionary as the associated value for the <code class=\"code-voice\"><span>UIRequired<wbr/>Device<wbr/>Capabilities</span></code> key. In that case, use the values above as the dictionary&#8217;s keys, each with an associated Boolean value. Set the value to <code class=\"code-voice\"><span>true</span></code> to require the corresponding feature. Set the value to <code class=\"code-voice\"><span>false</span></code> to indicate that the feature must not be present on the device. Omit the feature from the dictionary to indicate that it is neither required nor disallowed.</p><p>Specify only the features that your app absolutely requires. If your app can accommodate missing features by avoiding the code paths that use those features, don&#8217;t include the corresponding key.</p><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>Your app must include the <code class=\"code-voice\"><span>UIRequired<wbr/>Device<wbr/>Capabilities</span></code> key in the <a href=\"/documentation/bundleresources/information_property_list\">Information Property List</a> file submitted with your binary. For app updates, you&#8217;re allowed only to maintain or relax capability requirements. Submitting an update with added requirements would prevent some customers who previously downloaded your app from running the update.</p></aside></div>",
    "allowedLiterals": [
        {
            "name": "accelerometer",
            "discussion": "<div><p>The presence of accelerometers. Use the <a href=\"/documentation/coremotion\">Core Motion</a> framework to receive accelerometer events. You don&#8217;t need to include this value if your app detects only device orientation changes.</p></div>"
        },
        {
            "name": "arkit",
            "discussion": "<div><p>Support for <a href=\"/documentation/arkit\">ARKit</a>.</p></div>"
        },
        {
            "name": "armv7",
            "discussion": "<div><p>Compilation for the armv7 instruction set, or as a 32/64-bit universal app.</p></div>"
        },
        {
            "name": "arm64",
            "discussion": "<div><p>Compilation for the arm64 instruction set. Include this key for all 64-bit apps and embedded bundles, like extensions and frameworks.</p></div>"
        },
        {
            "name": "auto-focus-camera",
            "discussion": "<div><p>Autofocus capabilities in the device&#8217;s still camera. You might need to include this value if your app supports macro photography or requires sharper images to perform certain image-processing tasks.</p></div>"
        },
        {
            "name": "bluetooth-le",
            "discussion": "<div><p>Bluetooth low-energy hardware.</p></div>"
        },
        {
            "name": "camera-flash",
            "discussion": "<div><p>A camera flash, controlled by the <a class=\"symbol-name\" href=\"/documentation/uikit/uiimagepickercontroller/1619124-cameraflashmode\"><code><span>camera<wbr/>Flash<wbr/>Mode</span></code></a> property of a <a class=\"symbol-name\" href=\"/documentation/uikit/uiimagepickercontroller\"><code><span>UIImage<wbr/>Picker<wbr/>Controller</span></code></a> instance.</p></div>"
        },
        {
            "name": "front-facing-camera",
            "discussion": "<div><p>A forward-facing camera, selected with the <a class=\"symbol-name\" href=\"/documentation/uikit/uiimagepickercontroller/1619117-cameradevice\"><code><span>camera<wbr/>Device</span></code></a> property of a <a class=\"symbol-name\" href=\"/documentation/uikit/uiimagepickercontroller\"><code><span>UIImage<wbr/>Picker<wbr/>Controller</span></code></a> instance.</p></div>"
        },
        {
            "name": "gamekit",
            "discussion": "<div><p>Access to the Game Center service. Enable the Game Center capability in Xcode to add this value to your app.</p></div>"
        },
        {
            "name": "gps",
            "discussion": "<div><p>GPS (or AGPS) hardware used to track locations. If you include this value, you should also include the <code class=\"code-voice\"><span>location-services</span></code> value. Require GPS only if your app needs location data more accurate than the cellular or Wi-Fi radios provide.</p></div>"
        },
        {
            "name": "gyroscope",
            "discussion": "<div><p>A gyroscope. Use the <a href=\"/documentation/coremotion\">Core Motion</a> framework to retrieve information from gyroscope hardware.</p></div>"
        },
        {
            "name": "healthkit",
            "discussion": "<div><p>Support for <a href=\"/documentation/healthkit\">HealthKit</a>.</p></div>"
        },
        {
            "name": "location-services",
            "discussion": "<div><p>Access to the device&#8217;s current location using the <a href=\"/documentation/corelocation\">Core Location</a> framework. This value refers to the general location services feature. If you specifically need GPS-level accuracy, also include the <code class=\"code-voice\"><span>gps</span></code> feature.</p></div>"
        },
        {
            "name": "magnetometer",
            "discussion": "<div><p>Magnetometer hardware. Apps use this hardware to receive heading-related events through the <a href=\"/documentation/corelocation\">Core Location</a> framework.</p></div>"
        },
        {
            "name": "metal",
            "discussion": "<div><p>Support for graphics processing with <a href=\"/documentation/metal\">Metal</a>.</p></div>"
        },
        {
            "name": "microphone",
            "discussion": "<div><p>The built-in microphone or accessories that provide a microphone.</p></div>"
        },
        {
            "name": "nfc",
            "discussion": "<div><p>Near Field Communication (NFC) tag detection and access to messages that contain NFC Data Exchange Format data. Use the <a href=\"/documentation/corenfc\">Core NFC</a> framework to detect and read NFC tags.</p></div>"
        },
        {
            "name": "opengles-1",
            "discussion": "<div><p>The OpenGL ES 1.1 interface.</p></div>"
        },
        {
            "name": "opengles-2",
            "discussion": "<div><p>The OpenGL ES 2.0 interface.</p></div>"
        },
        {
            "name": "opengles-3",
            "discussion": "<div><p>The OpenGL ES 3.0 interface.</p></div>"
        },
        {
            "name": "peer-peer",
            "discussion": "<div><p>Peer-to-peer connectivity over a Bluetooth network.</p></div>"
        },
        {
            "name": "sms",
            "discussion": "<div><p>The Messages app. You might require this feature if your app opens URLs with the <code class=\"code-voice\"><span>sms</span></code> scheme.</p></div>"
        },
        {
            "name": "still-camera",
            "discussion": "<div><p>A camera on the device. Use the <a class=\"symbol-name\" href=\"/documentation/uikit/uiimagepickercontroller\"><code><span>UIImage<wbr/>Picker<wbr/>Controller</span></code></a> interface to capture images from the device&#8217;s still camera.</p></div>"
        },
        {
            "name": "telephony",
            "discussion": "<div><p>The Phone app. You might require this feature if your app opens URLs with the <code class=\"code-voice\"><span>tel</span></code> scheme.</p></div>"
        },
        {
            "name": "video-camera",
            "discussion": "<div><p>A camera with video capabilities on the device. Use the <a class=\"symbol-name\" href=\"/documentation/uikit/uiimagepickercontroller\"><code><span>UIImage<wbr/>Picker<wbr/>Controller</span></code></a> interface to capture video from the device&#8217;s camera.</p></div>"
        },
        {
            "name": "wifi",
            "discussion": "<div><p>Networking features related to Wi-Fi access.</p></div>"
        }
    ],
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
    "usr": "plist:Information_Property_List.UIRequiredDeviceCapabilities",
    "name": "UIRequiredDeviceCapabilities",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "3.0"
        },
        {
            "platform": "tvOS",
            "current": "13.4",
            "introduced": "9.0"
        },
        {
            "platform": "watchOS",
            "current": "6.2",
            "introduced": "2.0"
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
                "content": "UIKit"
            },
            "paths": [
                "documentation/uikit"
            ],
            "platforms": [
                "iOS",
                "tvOS",
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
                        "arrayMode": "required",
                        "declaration": "<declaration><codeLine xml:space=\"preserve\">[string]</codeLine></declaration>"
                    }
                ],
                "platforms": [
                    "iOS",
                    "tvOS",
                    "watchOS"
                ]
            }
        ]
    },
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
    "declaration": [
        {
            "content": "<span>[string] UIRequiredDeviceCapabilities\n</span>",
            "platforms": [
                "iOS",
                "tvOS",
                "watchOS"
            ],
            "allowedTypesDetails": [
                {
                    "baseType": "string",
                    "arrayMode": "required",
                    "declaration": "<span>[string]\n</span>"
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
                "documentation/bundleresources/information_property_list/uirequireddevicecapabilities"
            ],
            "usr": "plist:Information_Property_List.UIRequiredDeviceCapabilities"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/uirequireddevicecapabilities"
            ],
            "usr": "plist:Information_Property_List.UIRequiredDeviceCapabilities"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/uirequireddevicecapabilities"
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