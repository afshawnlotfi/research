# CoreLocation
# [isMonitoringAvailableForClass:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/1423654-ismonitoringavailableforclass.json?language=objc)
 Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
### Parameters
#### regionClass - A region monitoring class from the MapKit framework. This class must descend from the 

# [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:completion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/3600217-requesttemporaryfullaccuracyauth.json?language=objc)
  Requests the user’s permission to temporarily use location services with full accuracy.
### Parameters
#### purposeKey - A key in the 
#### completion - A closure to execute after authorization status changes. This closure takes a single 

# [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/3600216-requesttemporaryfullaccuracyauth.json?language=objc)
 Requests the user’s permission to temporarily use location services with full accuracy.
### Parameters
#### purposeKey - A key in the 

# [startMonitoringForRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/1423656-startmonitoringforregion.json?language=objc)
 Starts monitoring the specified region.
### Parameters
#### region - The region object that defines the boundary to monitor. This parameter must not be 

# [stopMonitoringForRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/1423840-stopmonitoringforregion.json?language=objc)
 Stops monitoring the specified region.
### Parameters
#### region - The region object currently being monitored. This parameter must not be 

# [startMonitoringForRegion:desiredAccuracy:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/1620560-startmonitoringforregion.json?language=objc)
 Starts monitoring the specified region for boundary crossings.
### Parameters
#### region - The region object that defines the boundary to monitor. This parameter must not be 
#### accuracy - The distance past the border (measured in meters) at which to generate notifications. You can use this value to prevent the delivery of multiple notifications when the user is close to the border’s edge. 

# [requestStateForRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/1423804-requeststateforregion.json?language=objc)
 Retrieves the state of a region asynchronously. 
### Parameters
#### region - The region whose state you want to know. This object must be an instance of one of the standard region subclasses provided by 

# [startRangingBeaconsSatisfyingConstraint:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/3240607-startrangingbeaconssatisfyingcon.json?language=objc)
 Starts the delivery of notifications for the specified beacon constraints.

# [stopRangingBeaconsSatisfyingConstraint:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/3240608-stoprangingbeaconssatisfyingcons.json?language=objc)
 Stops the delivery of notifications for the specified beacon constraints. 

# [startRangingBeaconsInRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/1620554-startrangingbeaconsinregion.json?language=objc)
 Starts the delivery of notifications for the specified beacon region.
### Parameters
#### region - The region object that defines the identifying information for the targeted beacons. The number of beacons represented by this region object depends on which identifier values you use to initialize it. Beacons must match all of the identifiers you specify. This method copies the region information it needs from the object you provide.  

# [stopRangingBeaconsInRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/1620559-stoprangingbeaconsinregion.json?language=objc)
 Stops the delivery of notifications for the specified beacon region. 
### Parameters
#### region - The region that identifies the beacons. The object you specify need not be the exact same object that you registered but the beacon attributes should be the same. 

# [allowDeferredLocationUpdatesUntilTraveled:timeout:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanager/1620547-allowdeferredlocationupdatesunti.json?language=objc)
 Asks the location manager to defer the delivery of location updates until the specified criteria are met.
### Parameters
#### distance - The distance (in meters) from the current location that must be travelled before event delivery resumes. To specify an unlimited distance, pass the 
#### timeout - The amount of time (in seconds) from the current time that must pass before event delivery resumes. To specify an unlimited amount of time, pass the 

# [locationManagerDidChangeAuthorization:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/3563956-locationmanagerdidchangeauthoriz.json?language=objc)
 Tells the delegate when the app creates the location manager and when the authorization status changes.
### Parameters
#### manager - The location manager object reporting the event.

# [locationManager:didChangeAuthorizationStatus:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423701-locationmanager.json?language=objc)
 Tells the delegate its authorization status when the app creates the location manager and when the authorization status changes.
### Parameters
#### manager - The location manager object reporting the event.
#### status - The authorization status for the app.

# [locationManager:didFailWithError:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423786-locationmanager.json?language=objc)
 Tells the delegate that the location manager was unable to retrieve a location value.
### Parameters
#### manager - The location manager object that was unable to retrieve the location.
#### error - The error object containing the reason the location or heading could not be retrieved. 

# [locationManager:didUpdateLocations:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423615-locationmanager.json?language=objc)
 Tells the delegate that new location data is available. 
### Parameters
#### manager - The location manager object that generated the update event.
#### locations - An array of 

# [locationManager:didUpdateToLocation:fromLocation:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423716-locationmanager.json?language=objc)
 Tells the delegate that a new location value is available.
### Parameters
#### manager - The location manager object that generated the update event.
#### newLocation - The new location data.
#### oldLocation - The location data from the previous update. If this is the first update event delivered by this location manager, this parameter is 

# [locationManager:didFinishDeferredUpdatesWithError:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423537-locationmanager.json?language=objc)
 Tells the delegate that updates will no longer be deferred.
### Parameters
#### manager - The location manager object that generated the update event.
#### error - The error object containing the reason deferred location updates could not be delivered. 

# [locationManagerDidPauseLocationUpdates:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1621553-locationmanagerdidpauselocationu.json?language=objc)
 Tells the delegate that location updates were paused. 
### Parameters
#### manager - The location manager object that paused the delivery of events.

# [locationManagerDidResumeLocationUpdates:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1621512-locationmanagerdidresumelocation.json?language=objc)
 Tells the delegate that the delivery of location updates has resumed.
### Parameters
#### manager - The location manager that resumed the delivery of events.

# [locationManager:didUpdateHeading:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1621555-locationmanager.json?language=objc)
 Tells the delegate that the location manager received updated heading information.
### Parameters
#### manager - The location manager object that generated the update event.
#### newHeading - The new heading data.

# [locationManagerShouldDisplayHeadingCalibration:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1621457-locationmanagershoulddisplayhead.json?language=objc)
 Asks the delegate whether the heading calibration alert should be displayed.
### Parameters
#### manager - The location manager object coordinating the display of the heading calibration alert.

# [locationManager:didEnterRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423560-locationmanager.json?language=objc)
 Tells the delegate that the user entered the specified region.
### Parameters
#### manager - The location manager object reporting the event.
#### region - An object containing information about the region that was entered.

# [locationManager:didExitRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423630-locationmanager.json?language=objc)
 Tells the delegate that the user left the specified region.
### Parameters
#### manager - The location manager object reporting the event.
#### region - An object containing information about the region that was exited.

# [locationManager:didDetermineState:forRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423570-locationmanager.json?language=objc)
 Tells the delegate about the state of the specified region.
### Parameters
#### manager - The location manager object reporting the event.
#### state - The state of the specified region. For a list of possible values, see the 
#### region - The region whose state was determined.

# [locationManager:monitoringDidFailForRegion:withError:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423720-locationmanager.json?language=objc)
 Tells the delegate that a region monitoring error occurred.
### Parameters
#### manager - The location manager object reporting the event.
#### region - The region for which the error occurred.
#### error - An error object containing the error code that indicates why region monitoring failed.

# [locationManager:didStartMonitoringForRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1423842-locationmanager.json?language=objc)
 Tells the delegate that a new region is being monitored.
### Parameters
#### manager - The location manager object reporting the event.
#### region - The region that is being monitored.

# [locationManager:didRangeBeacons:satisfyingConstraint:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/3240610-locationmanager.json?language=objc)
 Tells the delegate that a beacon satisfying the constraint was detected.

# [locationManager:didFailRangingBeaconsForConstraint:error:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/3240609-locationmanager.json?language=objc)
 Tells the delegate that no beacons were detected that satisfy the constraint.

# [locationManager:didRangeBeacons:inRegion:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1621501-locationmanager.json?language=objc)
 Tells the delegate that one or more beacons are in range.
### Parameters
#### manager - The location manager object reporting the event.
#### beacons - An array of 
#### region - The region object containing the parameters that were used to locate the beacons. 

# [locationManager:rangingBeaconsDidFailForRegion:withError:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1621483-locationmanager.json?language=objc)
 Tells the delegate that an error occurred while gathering ranging information for a set of beacons.
### Parameters
#### manager - The location manager object reporting the event.
#### region - The region object that encountered the error.
#### error - An error object containing the error code that indicates why ranging failed.

# [locationManager:didVisit:](https://developer.apple.com/tutorials/data/documentation/corelocation/cllocationmanagerdelegate/1621529-locationmanager.json?language=objc)
 Tells the delegate that a new visit-related event was received.
### Parameters
#### manager - The location manager object reporting the event.
#### visit - The visit object that contains the information about the event. 

