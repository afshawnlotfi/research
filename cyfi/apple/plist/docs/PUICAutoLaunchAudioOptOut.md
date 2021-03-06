# [PUICAutoLaunchAudioOptOut](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/PUICAutoLaunchAudioOptOut)
## Opt out of Auto-launch Audio App (Watch)
### A Boolean value indicating whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.
### [Default]: false
### [JSON](../json/PUICAutoLaunchAudioOptOut.json)
```json 
{
    "id": 3040987,
    "title": {
        "content": "PUICAutoLaunchAudioOptOut"
    },
    "discussion": "<div><p>If your watchOS app does not act as a remote control for the iOS app, set this key to <code class=\"code-voice\"><span>YES </span></code>in your WatchKit extension&#8217;s information property list.</p></div>",
    "abstract": "<div><p>A Boolean value indicating whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.</p></div>",
    "containingGroup": [
        {
            "id": 2872688,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3007955,
                    "role": "article",
                    "paths": [
                        "documentation/watchkit/playing_background_audio",
                        "documentation/watchkit/storyboard_elements/playing_background_audio"
                    ],
                    "abstract": "<div><p>Enable background audio in your app to provide a seamless playback experience.</p></div>",
                    "title": {
                        "content": "Playing Background Audio"
                    }
                },
                {
                    "id": 3028418,
                    "role": "article",
                    "paths": [
                        "documentation/watchkit/storyboard_elements/adding_a_now_playing_view"
                    ],
                    "abstract": "<div><p>Provide a view that controls the currently playing audio from your app.</p></div>",
                    "title": {
                        "content": "Adding a Now Playing View"
                    }
                },
                {
                    "id": 3017325,
                    "role": "symbol",
                    "usr": "c:objc(cs)WKInterfaceVolumeControl",
                    "name": "WKInterfaceVolumeControl",
                    "domain": "swift",
                    "kind": "cl",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "introduced": "5.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"decorator\">class </span><span class=\"identifier\">WKInterface<wbr/>Volume<wbr/>Control</span></code>",
                    "paths": [
                        "documentation/watchkit/wkinterfacevolumecontrol"
                    ],
                    "title": {
                        "content": "WKInterfaceVolumeControl"
                    },
                    "abstract": "<div><p>An interface element that lets users control the audio volume from the watch or a paired iPhone.</p></div>",
                    "hasChildren": true
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
                    "id": 1628233,
                    "role": "symbol",
                    "usr": "c:objc(cs)WKAudioFilePlayer",
                    "name": "WKAudioFilePlayer",
                    "domain": "swift",
                    "kind": "cl",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "deprecated": "6.0",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"decorator\">class </span><span class=\"identifier\">WKAudio<wbr/>File<wbr/>Player</span></code>",
                    "paths": [
                        "documentation/watchkit/wkaudiofileplayer"
                    ],
                    "title": {
                        "content": "WKAudioFilePlayer"
                    },
                    "abstract": "<div><p>An object that controls playback of a single audio item.  </p></div>",
                    "hasChildren": true
                },
                {
                    "id": 1628197,
                    "role": "symbol",
                    "usr": "c:objc(cs)WKAudioFileQueuePlayer",
                    "name": "WKAudioFileQueuePlayer",
                    "domain": "swift",
                    "kind": "cl",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "deprecated": "6.0",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"decorator\">class </span><span class=\"identifier\">WKAudio<wbr/>File<wbr/>Queue<wbr/>Player</span></code>",
                    "paths": [
                        "documentation/watchkit/wkaudiofilequeueplayer"
                    ],
                    "title": {
                        "content": "WKAudioFileQueuePlayer"
                    },
                    "abstract": "<div><p>An object that controls playback of one or more audio items. </p></div>",
                    "hasChildren": true
                },
                {
                    "id": 1628151,
                    "role": "symbol",
                    "usr": "c:objc(cs)WKAudioFilePlayerItem",
                    "name": "WKAudioFilePlayerItem",
                    "domain": "swift",
                    "kind": "cl",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "deprecated": "6.0",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"decorator\">class </span><span class=\"identifier\">WKAudio<wbr/>File<wbr/>Player<wbr/>Item</span></code>",
                    "paths": [
                        "documentation/watchkit/wkaudiofileplayeritem"
                    ],
                    "title": {
                        "content": "WKAudioFilePlayerItem"
                    },
                    "abstract": "<div><p>An object that manages the presentation state of an audio file while it is being played.  </p></div>",
                    "hasChildren": true
                },
                {
                    "id": 1628133,
                    "role": "symbol",
                    "usr": "c:objc(cs)WKAudioFileAsset",
                    "name": "WKAudioFileAsset",
                    "domain": "swift",
                    "kind": "cl",
                    "availability": [
                        {
                            "platform": "watchOS",
                            "deprecated": "6.0",
                            "introduced": "2.0"
                        }
                    ],
                    "displayName": "<code class=\"display-name\"><span class=\"decorator\">class </span><span class=\"identifier\">WKAudio<wbr/>File<wbr/>Asset</span></code>",
                    "paths": [
                        "documentation/watchkit/wkaudiofileasset"
                    ],
                    "title": {
                        "content": "WKAudioFileAsset"
                    },
                    "abstract": "<div><p>An object that stores a reference to an audio file and provides metadata information about that file.  </p></div>",
                    "hasChildren": true
                }
            ],
            "title": {
                "content": "Audio"
            }
        }
    ],
    "usr": "plist:Information_Property_List.PUICAutoLaunchAudioOptOut",
    "name": "PUICAutoLaunchAudioOptOut",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "watchOS",
            "current": "6.2",
            "introduced": "5.0"
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
                "content": "WatchKit"
            },
            "paths": [
                "documentation/watchkit"
            ],
            "platforms": [
                "watchOS"
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
                    "watchOS"
                ]
            }
        ]
    },
    "xcodeTitle": "Opt out of Auto-launch Audio App (Watch)",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">PUICAuto<wbr/>Launch<wbr/>Audio<wbr/>Opt<wbr/>Out</span></code>",
    "declaration": [
        {
            "content": "<span>boolean PUICAutoLaunchAudioOptOut\n</span>",
            "platforms": [
                "watchOS"
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
                "documentation/bundleresources/information_property_list/puicautolaunchaudiooptout"
            ],
            "usr": "plist:Information_Property_List.PUICAutoLaunchAudioOptOut"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/puicautolaunchaudiooptout"
            ],
            "usr": "plist:Information_Property_List.PUICAutoLaunchAudioOptOut"
        }
    },
    "pid": 492525,
    "paths": [
        "documentation/bundleresources/information_property_list/puicautolaunchaudiooptout"
    ],
    "hierarchy": [
        [
            {
                "id": 1627081,
                "role": "collection",
                "title": {
                    "content": "WatchKit"
                },
                "paths": [
                    "documentation/watchkit"
                ]
            },
            {
                "id": 3263423,
                "role": "collectionGroup",
                "title": {
                    "content": "Storyboard Elements"
                },
                "paths": [
                    "documentation/watchkit/storyboard_elements"
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