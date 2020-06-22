# [NSBluetoothPeripheralUsageDescription](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSBluetoothPeripheralUsageDescription)
## Privacy - Bluetooth Peripheral Usage Description
### A message that tells the user why the app is requesting the ability to connect to Bluetooth peripherals.
### [Default]: ""
### [JSON](/json/NSBluetoothPeripheralUsageDescription.json)
```json 
{
    "id": 3041015,
    "title": {
        "content": "NSBluetoothPeripheralUsageDescription"
    },
    "abstract": "<div><p>A message that tells the user why the app is requesting the ability to connect to Bluetooth peripherals.</p></div>",
    "discussion": "<div><p>For apps with a deployment target of iOS 13 and later, use <a class=\"symbol-name\" href=\"/documentation/bundleresources/information_property_list/nsbluetoothalwaysusagedescription\"><code><span>NSBluetooth<wbr/>Always<wbr/>Usage<wbr/>Description</span></code></a> instead.</p><p>For deployment targets earlier than iOS 13, add both <code class=\"code-voice\"><span>NSBluetooth<wbr/>Always<wbr/>Usage<wbr/>Description</span></code> and <code class=\"code-voice\"><span>NSBluetooth<wbr/>Peripheral<wbr/>Usage<wbr/>Description</span></code> to your app&#8217;s <a href=\"/documentation/bundleresources/information_property_list\">Information Property List</a> file. Devices running earlier versions of iOS rely on <code class=\"code-voice\"><span>NSBluetooth<wbr/>Peripheral<wbr/>Usage<wbr/>Description</span></code>, while devices running later versions rely on <code class=\"code-voice\"><span>NSBluetooth<wbr/>Always<wbr/>Usage<wbr/>Description</span></code>.</p><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p>This key is required if your app uses APIs that access Bluetooth peripherals and has a deployment target earlier than iOS 13.</p></aside><p></p></div>",
    "containingGroup": [
        {
            "id": 3385758,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3335703,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSBluetoothAlwaysUsageDescription",
                    "name": "NSBluetoothAlwaysUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "13.0"
                        },
                        {
                            "platform": "tvOS",
                            "introduced": "13.0"
                        },
                        {
                            "platform": "watchOS",
                            "introduced": "6.0"
                        }
                    ],
                    "xcodeTitle": "Privacy - Bluetooth Always Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSBluetooth<wbr/>Always<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsbluetoothalwaysusagedescription"
                    ],
                    "title": {
                        "content": "NSBluetoothAlwaysUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app needs access to Bluetooth.</p></div>"
                },
                {
                    "id": 3041015,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSBluetoothPeripheralUsageDescription",
                    "name": "NSBluetoothPeripheralUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "deprecated": "13.0",
                            "introduced": "6.0"
                        }
                    ],
                    "xcodeTitle": "Privacy - Bluetooth Peripheral Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSBluetooth<wbr/>Peripheral<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription"
                    ],
                    "title": {
                        "content": "NSBluetoothPeripheralUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app is requesting the ability to connect to Bluetooth peripherals.</p></div>"
                }
            ],
            "title": {
                "content": "Bluetooth"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSBluetoothPeripheralUsageDescription",
    "name": "NSBluetoothPeripheralUsageDescription",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "deprecated": "13.0",
            "introduced": "6.0"
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
                "content": "Core Bluetooth"
            },
            "paths": [
                "documentation/corebluetooth"
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
    "xcodeTitle": "Privacy - Bluetooth Peripheral Usage Description",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSBluetooth<wbr/>Peripheral<wbr/>Usage<wbr/>Description</span></code>",
    "declaration": [
        {
            "content": "<span>string NSBluetoothPeripheralUsageDescription\n</span>",
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
                "documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSBluetoothPeripheralUsageDescription"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSBluetoothPeripheralUsageDescription"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription"
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