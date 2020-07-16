# AVFoundation
# deviceWithUniqueID:
 Returns the device with a given ID.
### Parameters
#### deviceUniqueID - The ID of a capture device.

# defaultDeviceWithMediaType:
 Returns the default device used to capture data of a given media type.
### Parameters
#### mediaType - A media type identifier.

# defaultDeviceWithDeviceType:mediaType:position:
 Returns the default device for the specified device type, media type, and position.
### Parameters
#### deviceType - The type of capture device to request, such as 
#### mediaType - The type of media to request capture of, such as 
#### position - The position of capture device to request relative to system hardware (front- or back-facing). Pass 

# devicesWithMediaType:
 Returns an array of the devices able to capture data of a given media type.
### Parameters
#### mediaType - A media type identifier.

# requestAccessForMediaType:completionHandler:
 Requests the user’s permission, if needed, for recording a specified media type.
### Parameters
#### mediaType - A media type constant, either 
#### handler - A block to be called once permission is granted or denied.

# authorizationStatusForMediaType:
 Returns a constant indicating whether the app has permission for recording a specified media type.
### Parameters
#### mediaType - A media type constant, either 

# lockForConfiguration:
 Requests exclusive access to the device’s hardware properties.
### Parameters
#### outError - On input, specify a pointer to an error object. If a lock cannot be acquired, this pointer contains an 

# hasMediaType:
 Returns a Boolean value that indicates whether the device provides media with a given type.
### Parameters
#### mediaType - A media type, such as 

# supportsAVCaptureSessionPreset:
 Returns a Boolean value that indicates whether the receiver can be used in a capture session configured with the given preset.
### Parameters
#### preset - A capture session preset.

# setExposureModeCustomWithDuration:ISO:completionHandler:
 Locks the exposure duration and ISO at the specified values.
### Parameters
#### duration - The exposure duration. 
#### ISO - The exposure ISO value. 
#### handler - A block to be called when both exposureDuration and ISO have been set to the values specified and exposureMode is 

# setExposureTargetBias:completionHandler:
 Sets the bias to be applied to the target exposure value.
### Parameters
#### bias - The bias to be applied to the exposure target value.
#### handler - A block to be called when the 

# isExposureModeSupported:
 Returns a Boolean value that indicates whether the given exposure mode is supported.
### Parameters
#### exposureMode - The exposure mode for which to check support.

# rampToVideoZoomFactor:withRate:
 Begins a smooth transition from the current zoom factor to another.
### Parameters
#### factor - The new magnification factor.
#### rate - The rate at which to transition to the new magnification factor, specified in powers of two per second.

# isFocusModeSupported:
 Returns a Boolean value that indicates whether the device supports the given focus mode.
### Parameters
#### focusMode - A focus mode. See 

# isFlashModeSupported:
 Returns a Boolean value that indicates whether the device supports the given flash mode.
### Parameters
#### flashMode - A flash mode. See 

# isTorchModeSupported:
 Returns a Boolean value that indicates whether the device supports the specified torch mode.
### Parameters
#### torchMode - The desired torch mode. For a list of possible values, see 

# setTorchModeOnWithLevel:error:
 Sets the illumination level when in torch mode.
### Parameters
#### torchLevel - The new torch mode level. This value must be a floating-point number between 0.0 and 1.0. To set the torch mode level to the currently available maximum, specify the constant 
#### outError - On input, a pointer to an error object. If an error occurs, this method assigns an error object to the pointer with information about what happened. 

# setTransportControlsPlaybackMode:speed:
 Sets the transport control’s playback mode and speed.
### Parameters
#### mode - An 
#### speed - An 

# setFocusModeLockedWithLensPosition:completionHandler:
 Locks the lens position at the specified value.
### Parameters
#### lensPosition - The lens position. A value of 
#### handler - A block that is called when 

# isWhiteBalanceModeSupported:
 Returns a Boolean value that indicates whether the given white balance mode is supported.
### Parameters
#### whiteBalanceMode - A focus mode. See 

# chromaticityValuesForDeviceWhiteBalanceGains:
 Converts device-specific white balance RGB gain values to device-independent chromaticity values.
### Parameters
#### whiteBalanceGains - The white balance gain values. A value of 

# deviceWhiteBalanceGainsForChromaticityValues:
 Converts device-independent chromaticity values to device-specific white balance RGB gain values.
### Parameters
#### chromaticityValues - The chromaticity values for which to get white balance RGB gain values.

# deviceWhiteBalanceGainsForTemperatureAndTintValues:
 Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
### Parameters
#### tempAndTintValues - An 

# setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:completionHandler:
 Sets white balance to locked mode with the specified deviceWhiteBalanceGains values.
### Parameters
#### whiteBalanceGains - The white balance gains to set.
#### handler - A block to be called when white balance gains have been set to the values specified and 

# temperatureAndTintValuesForDeviceWhiteBalanceGains:
 Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
### Parameters
#### whiteBalanceGains - The white balance gain values.

# extrinsicMatrixFromDevice:toDevice:
 The relative extrinsic matrix from one capture device to another.
### Parameters
#### fromDevice - The capture device that represents the source camera. If you pass a 
#### toDevice - The capture device that represents the destination camera. If you pass a 

# initWithDevice:error:
 Initializes an input to use a specified device.
### Parameters
#### device - The device from which to capture input.
#### outError - If an error occurs during initialization, upon return contains an 

# deviceInputWithDevice:error:
 Returns an input initialized to use a specified device.
### Parameters
#### device - The device from which to capture input.
#### outError - If an error occurs during initialization, upon return contains an 

# portsWithMediaType:sourceDeviceType:sourceDevicePosition:
 Retrieves a virtual device’s constituent device ports for use in a multi-camera session.
### Parameters
#### mediaType - The media type of the port you’re searching for, or 
#### sourceDeviceType - The device type of the port you’re searching for, or 
#### sourceDevicePosition - The device position of the port you're searching for. 

