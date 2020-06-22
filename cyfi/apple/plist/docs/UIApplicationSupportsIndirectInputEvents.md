# [UIApplicationSupportsIndirectInputEvents](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/UIApplicationSupportsIndirectInputEvents)
## undefined
### A Boolean value indicating that the app generally supports indirect input mechanisms.
### [Default]: false
### [JSON](../json/UIApplicationSupportsIndirectInputEvents.json)
```json 
{
    "id": 3561701,
    "title": {
        "content": "UIApplicationSupportsIndirectInputEvents"
    },
    "abstract": "<div><p>A Boolean value indicating that the app generally supports indirect input mechanisms.</p></div>",
    "discussion": "<div><p>If this key is <em>not</em> present <em>or</em> returns <code class=\"code-voice\"><span>NO</span></code>:</p><ul><li><p>When the user clicks an indirect pointing device, UIKit generates a <a class=\"symbol-name\" href=\"/documentation/uikit/uitouch\"><code><span>UITouch</span></code></a> of type <a class=\"symbol-name\" href=\"/documentation/uikit/uitouch/touchtype/direct\"><code><span>UITouch<wbr/>.Touch<wbr/>Type<wbr/>.direct</span></code></a>.</p></li><li><p>When pinching or rotating using an indirect touch surface, UIKit creates touches a fixed distance apart that simulate the gesture on the indirect touch surface.</p></li><li><p>Because these are normal <code class=\"code-voice\"><span>UITouch</span></code> events, they may incidentally activate other gesture recognizers</p></li></ul><p>If the key <em>is</em> present <em>and</em> returns <code class=\"code-voice\"><span>YES</span></code>:</p><ul><li><p>When the user clicks an indirect pointing device, UIKit generates a <code class=\"code-voice\"><span>UITouch</span></code> of type <a class=\"symbol-name\" href=\"/documentation/uikit/uitouch/touchtype/indirectpointer\"><code><span>UITouch<wbr/>.Touch<wbr/>Type<wbr/>.indirect<wbr/>Pointer</span></code></a>.</p></li><li><p>When pinching or rotating using an indirect touch surface, UIKit drives <a class=\"symbol-name\" href=\"/documentation/uikit/uipinchgesturerecognizer\"><code><span>UIPinch<wbr/>Gesture<wbr/>Recognizer</span></code></a> and <a class=\"symbol-name\" href=\"/documentation/uikit/uirotationgesturerecognizer\"><code><span>UIRotation<wbr/>Gesture<wbr/>Recognizer</span></code></a> with an event of type <a class=\"symbol-name\" href=\"/documentation/uikit/uievent/eventtype/transform\"><code><span>UIEvent<wbr/>.Event<wbr/>Type<wbr/>.transform</span></code></a>.</p></li><li><p>Currently, only certain prepackaged gestures in UIKit, like <code class=\"code-voice\"><span>UIPinch<wbr/>Gesture<wbr/>Recognizer</span></code> and <code class=\"code-voice\"><span>UIRotation<wbr/>Gesture<wbr/>Recognizer</span></code>, are capable of handling this event. Other gestures may be added to this list in future releases.</p></li><li><p>Gestures that may have worked previously with the simulated touches no longer work.</p></li><li><p>Be careful with certain <a class=\"symbol-name\" href=\"/documentation/uikit/uigesturerecognizer\"><code><span>UIGesture<wbr/>Recognizer</span></code></a> APIs when gestures are driven by events of type <a class=\"symbol-name\" href=\"/documentation/uikit/uievent/eventtype/scroll\"><code><span>UIEvent<wbr/>.Event<wbr/>Type<wbr/>.scroll</span></code></a> or <a class=\"symbol-name\" href=\"/documentation/uikit/uievent/eventtype/transform\"><code><span>UIEvent<wbr/>.Event<wbr/>Type<wbr/>.transform</span></code></a>.<code class=\"code-voice\"><span> </span></code><a class=\"symbol-name\" href=\"/documentation/uikit/uigesturerecognizer/1624200-numberoftouches\"><code><span>number<wbr/>Of<wbr/>Touches</span></code></a> returns <code class=\"code-voice\"><span>0</span></code>, and<code class=\"code-voice\"><span> </span></code><a class=\"symbol-name\" href=\"/documentation/uikit/uigesturerecognizer/1624201-location\"><code><span>location(of<wbr/>Touch:<wbr/>in:)</span></code></a> raises an exception because there are no touches driving these gestures with those events.</p></li></ul><p>For the case when exceptions might be raised, use either <a class=\"symbol-name\" href=\"/documentation/uikit/uigesturerecognizer/3538977-shouldreceive\"><code><span>should<wbr/>Receive(_:)</span></code></a> or the delegate call of <a class=\"symbol-name\" href=\"/documentation/uikit/uigesturerecognizerdelegate/3538976-gesturerecognizer\"><code><span>gesture<wbr/>Recognizer(_:<wbr/>should<wbr/>Receive:)</span></code></a> to determine that gesture recognizers are acting on a non-touch-based event. </p><aside class=\"aside aside-important\" aria-label=\"important\"><p class=\"aside-name\">Important</p><p><code class=\"code-voice\"><span>UIApplication<wbr/>Supports<wbr/>Indirect<wbr/>Input<wbr/>Events</span></code> is a compatibility affordance to ease the adoption of indirect input for a UIKit application. In a future release, this new behavior will become the default and this key will no longer be consulted.</p></aside><p></p></div>",
    "containingGroup": [
        {
            "id": 3562659,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3561701,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.UIApplicationSupportsIndirectInputEvents",
                    "name": "UIApplicationSupportsIndirectInputEvents",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "iOS",
                            "introduced": "13.4"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIApplication<wbr/>Supports<wbr/>Indirect<wbr/>Input<wbr/>Events</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/uiapplicationsupportsindirectinputevents"
                    ],
                    "title": {
                        "content": "UIApplicationSupportsIndirectInputEvents"
                    },
                    "abstract": "<div><p>A Boolean value indicating that the app generally supports indirect input mechanisms.</p></div>"
                }
            ],
            "title": {
                "content": "Pointer Interactions"
            }
        }
    ],
    "usr": "plist:Information_Property_List.UIApplicationSupportsIndirectInputEvents",
    "name": "UIApplicationSupportsIndirectInputEvents",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "iOS",
            "current": "13.6",
            "introduced": "13.4"
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
                "iOS"
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
                    "iOS"
                ]
            }
        ]
    },
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">UIApplication<wbr/>Supports<wbr/>Indirect<wbr/>Input<wbr/>Events</span></code>",
    "declaration": [
        {
            "content": "<span>boolean UIApplicationSupportsIndirectInputEvents\n</span>",
            "platforms": [
                "iOS"
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
                "documentation/bundleresources/information_property_list/uiapplicationsupportsindirectinputevents"
            ],
            "usr": "plist:Information_Property_List.UIApplicationSupportsIndirectInputEvents"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/uiapplicationsupportsindirectinputevents"
            ],
            "usr": "plist:Information_Property_List.UIApplicationSupportsIndirectInputEvents"
        }
    },
    "diffAvailability": {
        "major": {
            "change": "added",
            "platform": "Xcode",
            "versions": [
                "11.0",
                "11.6 beta 1"
            ]
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/uiapplicationsupportsindirectinputevents"
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
                "id": 3375066,
                "role": "collectionGroup",
                "title": {
                    "content": "App Services"
                },
                "paths": [
                    "documentation/bundleresources/information_property_list/app_services"
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