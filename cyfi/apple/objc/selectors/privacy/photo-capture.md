# Photo Capture
# fileDataRepresentationWithCustomizer:
 null

# fileDataRepresentationWithReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:
 Generates and returns a flat data representation of the photo, using the specified replacements for some or all of its attachments.
### Parameters
 #### replacementMetadata - A dictionary (see 
#### replacementEmbeddedThumbnailPhotoFormat - A dictionary (see Video Settings Dictionaries for possible keys and values) specifying the data format for a thumbnail preview image to embed in the output file data.
#### replacementEmbeddedThumbnailPixelBuffer - A pixel buffer containing a source image to be encoded to the file as the replacement thumbnail image. 
#### replacementDepthData - Replacement depth data to embed in the output file data.

# semanticSegmentationMatteForType:
 Retrieves the semantic segmentation matte associated with this photo.
### Parameters
 #### semanticSegmentationMatteType - The type of semantic segmentation matte to retrieve from the photo.

# capturePhotoWithSettings:delegate:
 Initiates a photo capture using the specified settings.
### Parameters
 #### settings - The settings for the photo capture, such as the output pixel format and flash mode. This method copies the provided 
#### delegate - A delegate object to receive messages about capture progress and results. The photo output calls your delegate methods as the photo advances from capture to processing to delivery of finished images.

# supportedPhotoCodecTypesForFileType:
 Returns the list of photo codecs (such as JPEG or HEVC) supported for photo data in the specified file type.
### Parameters
 #### fileType - The file type (such as JFIF or HEIF) for which to obtain codec information.

# supportedPhotoPixelFormatTypesForFileType:
 Returns the list of uncompressed pixel formats supported for photo data in the specified file type. 
### Parameters
 #### fileType - The file type for which to obtain format information.

# supportedRawPhotoPixelFormatTypesForFileType:
 Returns the list of Bayer RAW pixel formats supported for photo data in the specified file type.  
### Parameters
 #### fileType - The file type for which to obtain format information.

# setPreparedPhotoSettingsArray:completionHandler:
 Tells the photo capture output to prepare resources for future capture requests with the specified settings. 
### Parameters
 #### preparedPhotoSettingsArray - An array of photo capture settings objects indicating the types of capture for which the photo output should prepare resources.
#### completionHandler - A completion block to be called on a serial dispatch queue after the photo output has finished preparing resources. Pass 

# JPEGPhotoDataRepresentationForJPEGSampleBuffer:previewPhotoSampleBuffer:
 Returns data in JPEG format corresponding to the captured photo in the specified sample buffer.
### Parameters
 #### JPEGSampleBuffer - A sample buffer containing the JPEG photo capture result to be formatted for output.
#### previewPhotoSampleBuffer - An optional additional sample buffer containing a preview-resolution version of the photo capture result, to be added to the JPEG output as a thumbnail image. Pass 

# DNGPhotoDataRepresentationForRawSampleBuffer:previewPhotoSampleBuffer:
 Returns data in digital negative (DNG) format corresponding to the captured RAW photo in the specified sample buffer.
### Parameters
 #### rawSampleBuffer - A sample buffer containing the RAW photo capture result to be formatted for output.
#### previewPhotoSampleBuffer - An optional additional sample buffer containing a preview-resolution version of the photo capture result, to be added to the DNG output as a thumbnail image. Pass 

# captureOutput:willBeginCaptureForResolvedSettings:
 Notifies the delegate that the capture output has resolved settings and will soon begin its capture process.
### Parameters
 #### captureOutput - The photo output performing the capture.
#### resolvedSettings - An object describing the settings used for this capture. Match this object’s 

# captureOutput:willCapturePhotoForResolvedSettings:
 Notifies the delegate that photo capture is about to occur.
### Parameters
 #### captureOutput - The photo output performing the capture.
#### resolvedSettings - An object describing the settings used for this capture. Match this object’s 

# captureOutput:didCapturePhotoForResolvedSettings:
 Notifies the delegate that the photo has been taken.
### Parameters
 #### captureOutput - The photo output performing the capture.
#### resolvedSettings - An object describing the settings used for this capture. Match this object’s 

# captureOutput:didFinishCaptureForResolvedSettings:error:
 Notifies the delegate that the capture process is complete.
### Parameters
 #### captureOutput - The photo output performing the capture.
#### resolvedSettings - An object describing the settings used for this capture. Match this object’s 
#### error - If the capture process did not complete successfully, an error object describing the failure; otherwise, 

# captureOutput:didFinishProcessingPhoto:error:
 Provides the delegate with the captured image and associated metadata resulting from a photo capture.
### Parameters
 #### captureOutput - The photo output performing the capture.
#### photo - An object containing the captured image pixel buffer, along with any metadata and attachments captured along with the photo (such as a preview image or depth map).
#### error - If the capture process could not proceed successfully, an error object describing the failure; otherwise, 

# captureOutput:didFinishRecordingLivePhotoMovieForEventualFileAtURL:resolvedSettings:
 Notifies the delegate that the movie content of a Live Photo has finished recording.
### Parameters
 #### captureOutput - The photo output performing the capture.
#### outputFileURL - The file URL at which the Live Photo movie will be written.
#### resolvedSettings - An object describing the settings used for this capture. Match this object’s 

# captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error:
 Provides the delegate the movie file URL resulting from a Live Photo capture.
### Parameters
 #### captureOutput - The photo output performing the capture.
#### outputFileURL - The file URL at which the movie content of the Live Photo was written.
#### movieDuration - The duration of the Live Photo movie.
#### photoDisplayTime - The timestamp within the movie to which the still image part of the Live Photo corresponds.
#### resolvedSettings - An object describing the settings used for this capture. Match this object’s 
#### error - If the capture process could not proceed successfully, an error object describing the failure; otherwise, 

# captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:
 Provides the delegate a captured image in a processed format (such as JPEG).
### Parameters
 #### captureOutput - The photo output performing the capture.
#### photoSampleBuffer - A sample buffer containing the captured photo, either as uncompressed pixel buffer or compressed image data (see the 
#### previewSampleBuffer - If you requested a thumbnail-sized version of the photo (with the 
#### resolvedSettings - An object describing the settings used for this capture. Match this object’s 
#### bracketSettings - If you requested a bracketed capture of multiple images with a 
#### error - If an the capture process could not proceed successfully, an error object describing the failure; otherwise, 

# captureOutput:didFinishProcessingRawPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:
 Provides the delegate a captured image in RAW format.
### Parameters
 #### captureOutput - The photo output performing the capture.
#### rawSampleBuffer - A sample buffer containing the captured RAW image. The format of this buffer matches the format you requested for the RAW image (see the 
#### previewSampleBuffer - If you requested a thumbnail-sized version of the photo (with the 
#### resolvedSettings - An object describing the settings used for this capture. Match this object’s 
#### bracketSettings - If you requested a bracketed capture of multiple images with a 
#### error - If an the capture process could not proceed successfully, an error object describing the failure; otherwise, 


