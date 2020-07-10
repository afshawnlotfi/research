# Contacts
# Saving Captured Photos
 Add the image and other data from a photo capture to the Photos library.

# Tracking Photo Capture Progress
 Monitor key events during capture to provide feedback in your camera UI.

# Capturing and Saving Live Photos
 Capture Live Photos like those created in the system Camera app and save them to the Photos library.

# Capturing Photos with Depth
 Get a depth map with a photo to create effects like the system camera’s Portrait mode (on compatible devices).

# Capturing a Bracketed Photo Sequence
 Capture several photos at once, varying parameters like exposure duration or light sensitivity.

# Capturing Photos in RAW Format
 Get minimally processed data from the camera's image sensor for custom processing.

# Capturing Uncompressed Image Data
 Get processed image data without compression to use for filtering or lossless output.

# Capturing Thumbnail and Preview Images
 Enable delivery of reduced-size images with the main image in a photo capture.

# resolvedSettings
 The settings object that was used to request this photo capture. 

# photoCount
 The 1-based index of this photo capture relative to other results from the same capture request. 

# timestamp
 The time at which the image was captured.

# rawPhoto
 A Boolean value indicating whether this photo object contains RAW format data.

# pixelBuffer
 The uncompressed or RAW image sample buffer for the photo, if requested.

# embeddedThumbnailPhotoFormat
 A dictionary describing the data format for a preview-sized image accompanying the captured photo.

# previewPixelBuffer
 The pixel data for a preview-sized version of the photo, if requested.

# depthData
 Depth or disparity map data captured with the photo.

# AVDepthData
 A container for per-pixel distance or disparity information captured by compatible camera devices.

# cameraCalibrationData
 Calibration information for the camera device that captured the photo.

# AVCameraCalibrationData
 Information about the camera characteristics used to capture images and depth data.

# sourceDeviceType
 The type of device that captured the photo.

# metadata
 A dictionary of metadata describing the captured image.

# portraitEffectsMatte
 The portrait effects matte captured with the photo.

# fileDataRepresentationWithCustomizer:
 null

# AVCapturePhotoFileDataRepresentationCustomizer
 A set of delegate callbacks to be implemented by callers of 

# fileDataRepresentation
 Generates and returns a flat data representation of the photo and its attachments. 

# CGImageRepresentation
 Extracts and returns the captured photo's primary image as a Core Graphics image object.

# previewCGImageRepresentation
 Extracts and returns the captured photo's preview image as a CoreGraphics image object.

# fileDataRepresentationWithReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:
 Generates and returns a flat data representation of the photo, using the specified replacements for some or all of its attachments.
### Parameters
 #### replacementMetadata - A dictionary (see 
#### replacementEmbeddedThumbnailPhotoFormat - A dictionary (see Video Settings Dictionaries for possible keys and values) specifying the data format for a thumbnail preview image to embed in the output file data.
#### replacementEmbeddedThumbnailPixelBuffer - A pixel buffer containing a source image to be encoded to the file as the replacement thumbnail image. 
#### replacementDepthData - Replacement depth data to embed in the output file data.

# bracketSettings
 The variations available for bracketed capture settings for this photo. 

# sequenceCount
 The 1-based index of this photo in a bracketed capture sequence.

# lensStabilizationStatus
 Information about the use of lens stabilization during bracketed photo capture.

# AVCaptureLensStabilizationStatus
 Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

# semanticSegmentationMatteForType:
 Retrieves the semantic segmentation matte associated with this photo.
### Parameters
 #### semanticSegmentationMatteType - The type of semantic segmentation matte to retrieve from the photo.

# init
 Initializes a new photo capture output object.

# new
 Creates a new photo capture output object. 

# capturePhotoWithSettings:delegate:
 Initiates a photo capture using the specified settings.
### Parameters
 #### settings - The settings for the photo capture, such as the output pixel format and flash mode. This method copies the provided 
#### delegate - A delegate object to receive messages about capture progress and results. The photo output calls your delegate methods as the photo advances from capture to processing to delivery of finished images.

# AVCapturePhotoSettings
 A specification of the features and settings to use for a single photo capture request.

# AVCapturePhotoBracketSettings
 A specification of the features and settings to use for a photo capture request that captures multiple images with varied settings.

# AVCaptureResolvedPhotoSettings
 A description of the features and settings in use for an in-progress or complete photo capture request.

# availablePhotoFileTypes
 The list of file types currently supported for photo capture and output.

# availableRawPhotoFileTypes
 The list of file types currently supported for RAW format capture and output. 

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

# availablePhotoPixelFormatTypes
 The pixel formats this capture output currently supports for photo capture.

# availablePhotoCodecTypes
 The compression codecs this capture output currently supports for photo capture.

# availableRawPhotoPixelFormatTypes
 The pixel formats this capture output currently supports for RAW photo capture.

# stillImageStabilizationSupported
 A Boolean value indicating whether the capture output currently supports automatic stabilization for still image capture.

# dualCameraFusionSupported
 A Boolean value indicating whether the capture output currently supports automatically combining image data on a dual camera device.

# maxBracketedCapturePhotoCount
 The maximum number of images that the photo capture output can support in a single bracketed capture.

# lensStabilizationDuringBracketedCaptureSupported
 A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.

# supportedFlashModes
 The flash settings this capture output currently supports.

# autoRedEyeReductionSupported
 A Boolean value indicating whether the capture output supports automatic red-eye reduction.

# isFlashScene
 A Boolean value indicating whether the scene currently being previewed by the camera warrants use of the flash.

# isStillImageStabilizationScene
 A Boolean value indicating whether the scene currently being previewed by the camera warrants image stabilization.

# photoSettingsForSceneMonitoring
 A photo settings object that controls how the photo output detects and handles automatic flash and stabilization modes.

# highResolutionCaptureEnabled
 A Boolean value that specifies whether to configure the capture pipeline for high resolution still image capture.

# livePhotoCaptureSupported
 A Boolean value indicating whether the capture output currently supports Live Photo capture.

# livePhotoCaptureEnabled
 A Boolean value that specifies whether to configure the capture pipeline for Live Photo capture.

# livePhotoCaptureSuspended
 A Boolean value that specifies whether to suspend, but not disable, Live Photo capture.

# livePhotoAutoTrimmingEnabled
 A Boolean value that specifies whether to automatically trim Live Photo movie captures to avoid excessive movement.

# availableLivePhotoVideoCodecTypes
 The list of video codecs currently available for capturing Live Photos with the photo output.

# depthDataDeliverySupported
 A Boolean value indicating whether the capture output currently supports depth data capture.

# depthDataDeliveryEnabled
 A Boolean value that specifies whether to configure the capture pipeline for depth data capture.

# portraitEffectsMatteDeliveryEnabled
 A Boolean value indicating whether the capture output will generate a portrait effects matte.

# portraitEffectsMatteDeliverySupported
 A Boolean value indicating whether the capture output currently supports delivery of a portrait effects matte.

# portraitEffectsMatte
 The portrait effects matte captured with the photo.

# dualCameraDualPhotoDeliverySupported
 A Boolean value indicating whether the capture output currently supports simultaneous photo capture with both cameras on a dual-camera device.

# cameraCalibrationDataDeliverySupported
 A Boolean value indicating whether the capture output currently supports delivery of camera calibration data.

# dualCameraDualPhotoDeliveryEnabled
 A Boolean value that specifies whether to configure the capture pipeline for simultaneous photo capture with both cameras on a dual-camera device.

# virtualDeviceConstituentPhotoDeliveryEnabled
 null

# virtualDeviceConstituentPhotoDeliverySupported
 null

# virtualDeviceFusionSupported
 null

# preparedPhotoSettingsArray
 An array of photo settings for which the photo output has prepared capture resources.

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

# availableSemanticSegmentationMatteTypes
 An array of semantic segmentation matte types that may be captured and delivered along with the primary photo.

# enabledSemanticSegmentationMatteTypes
 The semantic segmentation matte types that the photo render pipeline delivers.

# maxPhotoQualityPrioritization
 The highest quality the photo output should prepare to deliver on a capture-by-capture basis.

# AVCapturePhotoQualityPrioritization
 Constants that indicate how to prioritize photo quality relative to capture speed.

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


