# CoreMotion
# [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](https://developer.apple.com/tutorials/data/documentation/coremotion/cmmotionmanager/1616176-startdevicemotionupdatesusingref.json?language=objc)
 Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
### Parameters
#### referenceFrame - A constant identifying the reference frame to use for device-motion updates.  
#### queue - An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
#### handler - A block that is invoked with each update to handle new device-motion data. The block must conform to the 

# [startDeviceMotionUpdatesToQueue:withHandler:](https://developer.apple.com/tutorials/data/documentation/coremotion/cmmotionmanager/1616048-startdevicemotionupdatestoqueue.json?language=objc)
 Starts device-motion updates on an operation queue and using a specified block handler. 
### Parameters
#### queue - An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
#### handler - A block that is invoked with each update to handle new device-motion data. The block must conform to the 

# [startDeviceMotionUpdatesUsingReferenceFrame:](https://developer.apple.com/tutorials/data/documentation/coremotion/cmmotionmanager/1616107-startdevicemotionupdatesusingref.json?language=objc)
 Starts device-motion updates using a reference frame but without a block handler.
### Parameters
#### referenceFrame - A constant identifying the reference frame to use for device-motion updates.  

# [startAccelerometerUpdatesToQueue:withHandler:](https://developer.apple.com/tutorials/data/documentation/coremotion/cmmotionmanager/1616148-startaccelerometerupdatestoqueue.json?language=objc)
 Starts accelerometer updates on an operation queue and with a specified handler.
### Parameters
#### queue - An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
#### handler - A block that is invoked with each update to handle new accelerometer data. The block must conform to the 

# [startGyroUpdatesToQueue:withHandler:](https://developer.apple.com/tutorials/data/documentation/coremotion/cmmotionmanager/1616104-startgyroupdatestoqueue.json?language=objc)
 Starts gyroscope updates on an operation queue and with a specified handler. 
### Parameters
#### queue - An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
#### handler - A block that is invoked with each update to handle new gyroscope data. The block must conform to the 

# [startMagnetometerUpdatesToQueue:withHandler:](https://developer.apple.com/tutorials/data/documentation/coremotion/cmmotionmanager/1615968-startmagnetometerupdatestoqueue.json?language=objc)
 Starts magnetometer updates on an operation queue and with a specified handler. 
### Parameters
#### queue - An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
#### handler - A block that is invoked with each update to handle new magnetometer data. The block must conform to the 

