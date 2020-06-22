# [NSNetworkVolumesUsageDescription](http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/NSNetworkVolumesUsageDescription)
## Privacy - Network Volumes Usage Description
### A message that tells the user why the app needs access to files on a network volume.
### [Default]: ""
### [JSON](/json/NSNetworkVolumesUsageDescription.json)
```json 
{
    "id": 3338903,
    "title": {
        "content": "NSNetworkVolumesUsageDescription"
    },
    "abstract": "<div><p>A message that tells the user why the app needs access to files on a network volume.</p></div>",
    "discussion": "<div><p>The user implicitly grants your app access to a file on a network volume when selecting the file in an Open or Save panel, dragging it onto your app, or opening it in Finder. Your app can access that file right away and any time in the future. In addition, if your app creates a new file on a network volume, the app can access that file without user consent.</p><p>The first time your app tries to access a file on a network volume without implied user consent, the system prompts the user for permission to access network volumes. Add the <code class=\"code-voice\"><span>NSNetwork<wbr/>Volumes<wbr/>Usage<wbr/>Description</span></code> key to your app&#8217;s <a href=\"/documentation/bundleresources/information_property_list\">Information Property List</a> file to provide a string for the prompt that explains why your app needs access. The usage description is optional, but highly recommended.</p><p>After the user chooses whether to grant access, the system remembers the user&#8217;s choice. To reset permissions, use the <code class=\"code-voice\"><span>tccutil</span></code> command line utility with your app&#8217;s bundle ID:</p><figure id=\"3341332\"><div class=\"formatted-content\"><div class=\"code-listing\"><pre class=\"code-source\" data-language=\"other\"><code>$ tccutil reset SystemPolicyNetworkVolumes &lt;bundleID&gt;\n</code></pre></div></div></figure></div>",
    "containingGroup": [
        {
            "id": 3374887,
            "role": "task",
            "paths": [],
            "symbols": [
                {
                    "id": 3338899,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSDesktopFolderUsageDescription",
                    "name": "NSDesktopFolderUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.15"
                        }
                    ],
                    "xcodeTitle": "Privacy - Desktop Folder Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSDesktop<wbr/>Folder<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsdesktopfolderusagedescription"
                    ],
                    "title": {
                        "content": "NSDesktopFolderUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app needs access to the user&#8217;s Desktop folder.</p></div>"
                },
                {
                    "id": 3338900,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSDocumentsFolderUsageDescription",
                    "name": "NSDocumentsFolderUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.15"
                        }
                    ],
                    "xcodeTitle": "Privacy - Documents Folder Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSDocuments<wbr/>Folder<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsdocumentsfolderusagedescription"
                    ],
                    "title": {
                        "content": "NSDocumentsFolderUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app needs access to the user&#8217;s Documents folder.</p></div>"
                },
                {
                    "id": 3366445,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSDownloadsFolderUsageDescription",
                    "name": "NSDownloadsFolderUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.15"
                        }
                    ],
                    "xcodeTitle": "Privacy - Downloads Folder Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSDownloads<wbr/>Folder<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsdownloadsfolderusagedescription"
                    ],
                    "title": {
                        "content": "NSDownloadsFolderUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app needs access to the user&#8217;s Downloads folder.</p></div>"
                },
                {
                    "id": 3338903,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSNetworkVolumesUsageDescription",
                    "name": "NSNetworkVolumesUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.15"
                        }
                    ],
                    "xcodeTitle": "Privacy - Network Volumes Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSNetwork<wbr/>Volumes<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsnetworkvolumesusagedescription"
                    ],
                    "title": {
                        "content": "NSNetworkVolumesUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app needs access to files on a network volume.</p></div>"
                },
                {
                    "id": 3338904,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSRemovableVolumesUsageDescription",
                    "name": "NSRemovableVolumesUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.15"
                        }
                    ],
                    "xcodeTitle": "Privacy - Removable Volumes Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSRemovable<wbr/>Volumes<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsremovablevolumesusagedescription"
                    ],
                    "title": {
                        "content": "NSRemovableVolumesUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app needs access to files on a removable volume.</p></div>"
                },
                {
                    "id": 3338902,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSFileProviderPresenceUsageDescription",
                    "name": "NSFileProviderPresenceUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.15"
                        }
                    ],
                    "xcodeTitle": "Privacy - File Provider Presence Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSFile<wbr/>Provider<wbr/>Presence<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsfileproviderpresenceusagedescription"
                    ],
                    "title": {
                        "content": "NSFileProviderPresenceUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app needs to be informed when other apps access files that it manages.</p></div>"
                },
                {
                    "id": 3338901,
                    "role": "symbol",
                    "usr": "plist:Information_Property_List.NSFileProviderDomainUsageDescription",
                    "name": "NSFileProviderDomainUsageDescription",
                    "domain": "plist",
                    "kind": "tdef",
                    "availability": [
                        {
                            "platform": "macOS",
                            "introduced": "10.15"
                        }
                    ],
                    "xcodeTitle": "Privacy - Access to a File Provider Domain Usage Description",
                    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSFile<wbr/>Provider<wbr/>Domain<wbr/>Usage<wbr/>Description</span></code>",
                    "titleStyle": "symbol",
                    "paths": [
                        "documentation/bundleresources/information_property_list/nsfileproviderdomainusagedescription"
                    ],
                    "title": {
                        "content": "NSFileProviderDomainUsageDescription"
                    },
                    "abstract": "<div><p>A message that tells the user why the app needs access to files managed by a file provider.</p></div>"
                }
            ],
            "title": {
                "content": "Files and Folders"
            }
        }
    ],
    "usr": "plist:Information_Property_List.NSNetworkVolumesUsageDescription",
    "name": "NSNetworkVolumesUsageDescription",
    "domain": "plist",
    "kind": "tdef",
    "availability": [
        {
            "platform": "macOS",
            "current": "10.15.4",
            "introduced": "10.15"
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
                "content": "Foundation"
            },
            "paths": [
                "documentation/foundation"
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
    "xcodeTitle": "Privacy - Network Volumes Usage Description",
    "displayName": "<code class=\"display-name\"><span class=\"label\">property list key </span><span class=\"identifier\">NSNetwork<wbr/>Volumes<wbr/>Usage<wbr/>Description</span></code>",
    "declaration": [
        {
            "content": "<span>string NSNetworkVolumesUsageDescription\n</span>",
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
                "documentation/bundleresources/information_property_list/nsnetworkvolumesusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSNetworkVolumesUsageDescription"
        },
        "swift": {
            "paths": [
                "documentation/bundleresources/information_property_list/nsnetworkvolumesusagedescription"
            ],
            "usr": "plist:Information_Property_List.NSNetworkVolumesUsageDescription"
        }
    },
    "pid": 505027,
    "paths": [
        "documentation/bundleresources/information_property_list/nsnetworkvolumesusagedescription"
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