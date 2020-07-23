# PhotoKit
# [fetchAssetsInAssetCollection:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624757-fetchassetsinassetcollection.json?language=objc)
 Retrieves assets from the specified asset collection.
### Parameters
#### assetCollection - The asset collection from which to fetch assets.
#### options - Options that specify a filter predicate and sort order for the fetched assets, or 

# [fetchAssetsWithMediaType:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624725-fetchassetswithmediatype.json?language=objc)
 Retrieves assets with the specified media type.
### Parameters
#### mediaType - A media type, such as image or video. See 
#### options - Options that specify a filter predicate and sort order for the fetched assets, or 

# [fetchAssetsWithLocalIdentifiers:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624732-fetchassetswithlocalidentifiers.json?language=objc)
 Retrieves assets with the specified local-device-specific unique identifiers.
### Parameters
#### identifiers - An array of 
#### options - Options that specify a filter predicate and sort order for the fetched assets, or 

# [fetchKeyAssetsInAssetCollection:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624778-fetchkeyassetsinassetcollection.json?language=objc)
 Retrieves assets marked as key assets in the specified asset collection.
### Parameters
#### assetCollection - The asset collection from which to fetch assets.
#### options - Options that specify a filter predicate and sort order for the fetched assets, or 

# [fetchAssetsWithOptions:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624783-fetchassetswithoptions.json?language=objc)
 Retrieves all assets matching the specified options.
### Parameters
#### options - Options that specify a filter predicate and sort order for the fetched assets, or 

# [fetchAssetsWithBurstIdentifier:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624723-fetchassetswithburstidentifier.json?language=objc)
 Retrieves assets with the specified burst photo sequence identifier.
### Parameters
#### burstIdentifier - A burst identifier string, as provided by the 
#### options - Options that specify a filter predicate and sort order for the fetched assets, or 

# [fetchAssetsWithALAssetURLs:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624782-fetchassetswithalasseturls.json?language=objc)
 Retrieves assets using URLs provided by the Assets Library framework.
### Parameters
#### assetURLs - An array of 
#### options - Options that specify a filter predicate and sort order for the fetched assets, or 

# [canPerformEditOperation:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624779-canperformeditoperation.json?language=objc)
 Returns whether the asset supports the specified editing operation.
### Parameters
#### editOperation - The operation to be tested.

# [requestContentEditingInputWithOptions:completionHandler:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624061-requestcontenteditinginputwithop.json?language=objc)
 Requests asset information for beginning a content editing session.
### Parameters
#### options - Options affecting how Photos handles an edit session request.
#### completionHandler - A block that Photos calls when the requested asset editing information is ready.

# [cancelContentEditingInputRequest:](https://developer.apple.com/tutorials/data/documentation/photokit/phasset/1624067-cancelcontenteditinginputrequest.json?language=objc)
 Cancels a request for editing the asset’s content.
### Parameters
#### requestID - The numeric identifier of the request to be canceled.

# [fetchAssetCollectionsWithLocalIdentifiers:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phassetcollection/1618510-fetchassetcollectionswithlocalid.json?language=objc)
 Retrieves asset collections with the specified unique identifiers.
### Parameters
#### identifiers - An array of 
#### options - Options that specify a filter predicate and sort order for the fetched asset collections, or 

# [fetchAssetCollectionsWithType:subtype:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phassetcollection/1618544-fetchassetcollectionswithtype.json?language=objc)
 Retrieves asset collections of the specified type and subtype.
### Parameters
#### type - A type of asset collection, such as an album or a moment. See 
#### subtype - A subtype of asset collection. See 
#### options - Options that specify a filter predicate and sort order for the fetched asset collections, or 

# [fetchAssetCollectionsContainingAsset:withType:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phassetcollection/1618530-fetchassetcollectionscontaininga.json?language=objc)
 Retrieves asset collections of the specified type containing the specified asset.
### Parameters
#### asset - A Photos asset.
#### type - An asset collection type, such as an album or a moment. See 
#### options - Options that specify a filter predicate and sort order for the fetched asset collections, or 

# [fetchAssetCollectionsWithALAssetGroupURLs:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phassetcollection/1618533-fetchassetcollectionswithalasset.json?language=objc)
 Retrieves asset collections using URLs provided by the Assets Library framework.
### Parameters
#### assetGroupURLs - An array of 
#### options - Options that specify a filter predicate and sort order for the fetched asset collections, or 

# [fetchMomentsInMomentList:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phassetcollection/1618522-fetchmomentsinmomentlist.json?language=objc)
 Retrieves asset collections in the specified moment list collection.
### Parameters
#### momentList - A collection list whose type is 
#### options - Options that specify a filter predicate and sort order for the fetched asset collections, or 

# [fetchMomentsWithOptions:](https://developer.apple.com/tutorials/data/documentation/photokit/phassetcollection/1618531-fetchmomentswithoptions.json?language=objc)
 Retrieves asset collections corresponding to moments seen in the Photos app.
### Parameters
#### options - Options that specify a filter predicate and sort order for the fetched asset collections, or 

# [transientAssetCollectionWithAssets:title:](https://developer.apple.com/tutorials/data/documentation/photokit/phassetcollection/1618529-transientassetcollectionwithasse.json?language=objc)
 Creates a temporary asset collection containing the specified assets.
### Parameters
#### assets - An array of 
#### title - A name for the new temporary asset collection.

# [transientAssetCollectionWithAssetFetchResult:title:](https://developer.apple.com/tutorials/data/documentation/photokit/phassetcollection/1618511-transientassetcollectionwithasse.json?language=objc)
 Creates a temporary asset collection containing the assets from the specified fetch result.
### Parameters
#### fetchResult - A fetch result containing one or more 
#### title - A name for the new temporary asset collection.

# [fetchCollectionsInCollectionList:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollection/1618515-fetchcollectionsincollectionlist.json?language=objc)
 Retrieves collections from the specified collection list.
### Parameters
#### collectionList - The collection list from which to fetch collections.
#### options - Options that specify a filter predicate and sort order for the fetched collections, or 

# [fetchTopLevelUserCollectionsWithOptions:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollection/1618513-fetchtoplevelusercollectionswith.json?language=objc)
 Retrieves collections from the root of the photo library’s hierarchy of user-created albums and folders.
### Parameters
#### options - Options that specify a filter predicate and sort order for the fetched collections, or 

# [canPerformEditOperation:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollection/1618518-canperformeditoperation.json?language=objc)
 Returns whether the collection supports the specified editing operation.
### Parameters
#### anOperation - A bit mask of editing operations to be tested.

# [fetchCollectionListsContainingCollection:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollectionlist/1618523-fetchcollectionlistscontainingco.json?language=objc)
 Retrieves collection lists that contain the specified collection.
### Parameters
#### collection - An asset collection or another collection list.
#### options - Options that specify a filter predicate and sort order for the fetched collection lists, or 

# [fetchCollectionListsWithLocalIdentifiers:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollectionlist/1618525-fetchcollectionlistswithlocalide.json?language=objc)
 Retrieves collection lists with the specified local-device-specific unique identifiers.
### Parameters
#### identifiers - An array of 
#### options - Options that specify a filter predicate and sort order for the fetched collection lists, or 

# [fetchCollectionListsWithType:subtype:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollectionlist/1618520-fetchcollectionlistswithtype.json?language=objc)
 Retrieves collection lists of the specified type.
### Parameters
#### collectionListType - A type of collection list. See 
#### subtype - A subtype of collection list. See 
#### options - Options that specify a filter predicate and sort order for the fetched collection lists, or 

# [fetchMomentListsWithSubtype:containingMoment:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollectionlist/1618536-fetchmomentlistswithsubtype.json?language=objc)
 Retrieves collection lists of the specified moment list type containing the specified moment.
### Parameters
#### momentListSubtype - The type of moment list, either 
#### moment - An asset collection whose type is 
#### options - Options that specify a filter predicate and sort order for the fetched collection lists, or 

# [fetchMomentListsWithSubtype:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollectionlist/1618540-fetchmomentlistswithsubtype.json?language=objc)
 Retrieves collection lists of the specified moment list type.
### Parameters
#### momentListSubtype - The type of moment list, either 
#### options - Options that specify a filter predicate and sort order for the fetched collection lists, or 

# [transientCollectionListWithCollections:title:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollectionlist/1618537-transientcollectionlistwithcolle.json?language=objc)
 Creates a temporary collection list that contains the specified asset collections.
### Parameters
#### collections - An array of 
#### title - A name for the new temporary collection list.

# [transientCollectionListWithCollectionsFetchResult:title:](https://developer.apple.com/tutorials/data/documentation/photokit/phcollectionlist/1618526-transientcollectionlistwithcolle.json?language=objc)
 Creates a temporary collection list containing the asset collections in the specified fetch result.
### Parameters
#### fetchResult - A fetch result that contains one or more 
#### title - A name for the new temporary collection list.

# [containsObject:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1621005-containsobject.json?language=objc)
 Returns whether the specified object is present in the fetch result.
### Parameters
#### anObject - An object.

# [countOfAssetsWithMediaType:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1620997-countofassetswithmediatype.json?language=objc)
 Returns the number of assets in the fetch result of a specified type.
### Parameters
#### mediaType - The type of assets to count, such as image or video. See 

# [objectAtIndex:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1621002-objectatindex.json?language=objc)
 Returns the object located at the specified index.
### Parameters
#### index - An index within the bounds of the fetch result.

# [objectAtIndexedSubscript:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1621000-objectatindexedsubscript.json?language=objc)
 Returns the object located at the specified index.
### Parameters
#### idx - An index within the bounds of the fetch result.

# [objectsAtIndexes:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1621008-objectsatindexes.json?language=objc)
 Returns an array containing the objects in the fetch result at the indexes in the specified index set.
### Parameters
#### indexes - An index set containing indexes within the bounds of the fetch result.

# [indexOfObject:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1621007-indexofobject.json?language=objc)
 Returns the lowest index whose corresponding object in the fetch result is equal to the specified object.
### Parameters
#### anObject - An object.

# [indexOfObject:inRange:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1621009-indexofobject.json?language=objc)
 Returns the lowest index within the specified range whose corresponding object in the fetch result is equal to the specified object.
### Parameters
#### anObject - An object.
#### range - The range of indexes in the fetch result within which to search for 

# [enumerateObjectsAtIndexes:options:usingBlock:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1620998-enumerateobjectsatindexes.json?language=objc)
 Executes the specified block using the objects in the fetch result at the specified indexes.
### Parameters
#### s - The indexes of the objects over which to enumerate.
#### opts - A bit mask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order).
#### block - The block to apply to elements in the fetch result.

# [enumerateObjectsUsingBlock:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1620999-enumerateobjectsusingblock.json?language=objc)
 Executes the specified block using each object in the fetch result, starting with the first object and continuing in order to the last object.
### Parameters
#### block - The block to apply to elements in the fetch result.

# [enumerateObjectsWithOptions:usingBlock:](https://developer.apple.com/tutorials/data/documentation/photokit/phfetchresult/1621006-enumerateobjectswithoptions.json?language=objc)
 Executes the specified block using each object in the fetch result.
### Parameters
#### opts - A bit mask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order).
#### block - The block to apply to elements in the fetch result.

# [requestImageForAsset:targetSize:contentMode:options:resultHandler:](https://developer.apple.com/tutorials/data/documentation/photokit/phimagemanager/1616964-requestimageforasset.json?language=objc)
 Requests an image representation for the specified asset.
### Parameters
#### asset - The asset whose image data is to be loaded.
#### targetSize - The target size of image to be returned.
#### contentMode - An option for how to fit the image to the aspect ratio of the requested size. For details, see 
#### options - Options specifying how Photos should handle the request, format the requested image, and notify your app of progress or errors. For details, see 
#### resultHandler - A block to be called when image loading is complete, providing the requested image or information about the status of the request.

# [requestImageDataAndOrientationForAsset:options:resultHandler:](https://developer.apple.com/tutorials/data/documentation/photokit/phimagemanager/3237282-requestimagedataandorientationfo.json?language=objc)
 Requests the largest represented image as data bytes and EXIF orientation for the specified asset.
### Parameters
#### asset - The asset for which to load image data.
#### options - Options specifying how Photos should handle the request, format the requested image, and notify your app of progress or errors. 
#### resultHandler - A block called, exactly once, when image loading is complete, providing the requested image or information about the status of the request. 

# [requestImageDataForAsset:options:resultHandler:](https://developer.apple.com/tutorials/data/documentation/photokit/phimagemanager/1616957-requestimagedataforasset.json?language=objc)
 Requests full-sized image data for the specified asset.
### Parameters
#### asset - The asset for which to load image data.
#### options - Options specifying how Photos should handle the request, format the requested image, and notify your app of progress or errors. For details, see 
#### resultHandler - A block to be called when image loading is complete, providing the requested image or information about the status of the request.

# [requestPlayerItemForVideo:options:resultHandler:](https://developer.apple.com/tutorials/data/documentation/photokit/phimagemanager/1616958-requestplayeritemforvideo.json?language=objc)
 Requests a representation of the video asset for playback, to be loaded asynchronously.
### Parameters
#### asset - The video asset to be played back.
#### options - Options specifying how Photos should handle the request and notify your app of progress or errors. For details, see 
#### resultHandler - A block Photos calls after loading the asset’s data and preparing the player item.

# [requestExportSessionForVideo:options:exportPreset:resultHandler:](https://developer.apple.com/tutorials/data/documentation/photokit/phimagemanager/1616981-requestexportsessionforvideo.json?language=objc)
 Requests an export session for writing the video asset’s data to a file, to be loaded asynchronously.
### Parameters
#### asset - The video asset for which an export session is to be created.
#### options - Options specifying how Photos should handle the request and notify your app of progress or errors. For details, see 
#### exportPreset - The export preset name for exporting the asset. For available presets, see 
#### resultHandler - A block that Photos calls after loading the asset’s data and preparing the export session.

# [requestAVAssetForVideo:options:resultHandler:](https://developer.apple.com/tutorials/data/documentation/photokit/phimagemanager/1616935-requestavassetforvideo.json?language=objc)
 Requests AVFoundation objects representing the video asset’s content and state, to be loaded asynchronously.
### Parameters
#### asset - The video asset for which video objects are to be loaded.
#### options - Options specifying how Photos should handle the request and notify your app of progress or errors. For details, see 
#### resultHandler - A block that Photos calls after loading the asset’s data.

# [requestLivePhotoForAsset:targetSize:contentMode:options:resultHandler:](https://developer.apple.com/tutorials/data/documentation/photokit/phimagemanager/1616984-requestlivephotoforasset.json?language=objc)
 Requests a Live Photo representation for the specified asset.
### Parameters
#### asset - The asset whose Live Photo data is to be loaded.
#### targetSize - The target size of Live Photo to be returned.
#### contentMode - An option for how to fit the image to the aspect ratio of the requested size. For details, see 
#### options - Options specifying how Photos should handle the request, format the requested image, and notify your app of progress or errors. For details, see 
#### resultHandler - A block to be called when image loading is complete, providing the requested image or information about the status of the request.

# [cancelImageRequest:](https://developer.apple.com/tutorials/data/documentation/photokit/phimagemanager/1616929-cancelimagerequest.json?language=objc)
 Cancels an asynchronous request
### Parameters
#### requestID - The numeric identifier of the request to be canceled.

# [startCachingImagesForAssets:targetSize:contentMode:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phcachingimagemanager/1616986-startcachingimagesforassets.json?language=objc)
 Prepares image representations of the specified assets for later use.
### Parameters
#### assets - An array of 
#### targetSize - The size of the images to be prepared.
#### contentMode - An option for how to fit the images to the aspect ratio of the requested size. For details, see 
#### options - Options specifying how Photos should handle the request, format the requested images, and notify your app of progress or errors. For details, see 

# [stopCachingImagesForAssets:targetSize:contentMode:options:](https://developer.apple.com/tutorials/data/documentation/photokit/phcachingimagemanager/1616968-stopcachingimagesforassets.json?language=objc)
 Cancels image preparation for the specified assets and options.
### Parameters
#### assets - The array of specific 
#### targetSize - The target size with which you requested image preparation.
#### contentMode - The content mode with which you requested image preparation.
#### options - The options with which you requested image preparation.

