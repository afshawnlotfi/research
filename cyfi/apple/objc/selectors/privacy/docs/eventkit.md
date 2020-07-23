# EventKit
# [initWithAccessToEntityTypes:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1536382-initwithaccesstoentitytypes.json?language=objc)
 Initializes access to the event store with support for the given entity type.
### Parameters
#### entityTypes - The event or reminder entity mask.

# [requestAccessToEntityType:completion:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507547-requestaccesstoentitytype.json?language=objc)
 Prompts the user to grant or deny access to event or reminder data.
### Parameters
#### entityType - The event or reminder entity type.
#### completion - The block to call when the request completes.

# [authorizationStatusForEntityType:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507239-authorizationstatusforentitytype.json?language=objc)
 Returns the authorization status for the given entity type.
### Parameters
#### entityType - The event or reminder entity type.

# [commit:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507424-commit.json?language=objc)
 Commits all unsaved changes to the event store.
### Parameters
#### error - A pointer to an 

# [calendarItemWithIdentifier:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507433-calendaritemwithidentifier.json?language=objc)
 Returns either the event’s first occurrence or the reminder with the specified identifier.
### Parameters
#### identifier - The calendar item’s unique identifier.

# [calendarItemsWithExternalIdentifier:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507281-calendaritemswithexternalidentif.json?language=objc)
 Returns either the event’s first occurrences or the reminders with the specified external identifier.
### Parameters
#### externalIdentifier - The calendar item’s external identifier.

# [calendarWithIdentifier:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507484-calendarwithidentifier.json?language=objc)
 Returns the calendar with the specified identifier.
### Parameters
#### identifier - The calendar’s unique identifier.

# [calendarsForEntityType:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507128-calendarsforentitytype.json?language=objc)
 Returns an array of calendars that support a given entity type, such as reminders or events.
### Parameters
#### entityType - The calendar’s entity type.

# [cancelFetchRequest:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507342-cancelfetchrequest.json?language=objc)
 Cancels the request to fetch reminders.
### Parameters
#### fetchIdentifier - The identifier of the request as returned by 

# [enumerateEventsMatchingPredicate:usingBlock:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507518-enumerateeventsmatchingpredicate.json?language=objc)
 Finds all events that match a given predicate and calls a given callback for each event found.
### Parameters
#### predicate - The search predicate. Must be created with the 
#### block - The block callback to call for each event. The callback must match the signature defined by 

# [eventWithIdentifier:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507490-eventwithidentifier.json?language=objc)
 Returns the first occurrence of an event with a given identifier.
### Parameters
#### identifier - The identifier of the event.

# [eventsMatchingPredicate:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507183-eventsmatchingpredicate.json?language=objc)
 Returns all events that match a given predicate.
### Parameters
#### predicate - The search predicate. Must be created with the 

# [fetchRemindersMatchingPredicate:completion:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507500-fetchremindersmatchingpredicate.json?language=objc)
 Fetches reminders matching a given predicate.
### Parameters
#### predicate - The search predicate.
#### completion - An array of the matched reminders passed by reference.

# [predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507447-predicateforcompletedreminderswi.json?language=objc)
 Fetches completed reminders in a set of calendars within an optional range.
### Parameters
#### startDate - The starting bound of the range to search.
#### endDate - The ending bound of the range to search.
#### calendars - An array of calendars to search.

# [predicateForEventsWithStartDate:endDate:calendars:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507479-predicateforeventswithstartdate.json?language=objc)
 Creates and returns a predicate for finding events in the event store that fall within a given date range.
### Parameters
#### startDate - The start date of the range of events fetched.
#### endDate - The end date of the range of events fetched.
#### calendars - The calendars to search, as an array of 

# [predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507143-predicateforincompleteremindersw.json?language=objc)
 Fetches incomplete reminders in a set of calendars within an optional range.
### Parameters
#### startDate - The starting bound of the range to search.
#### endDate - The ending bound of the range to search.
#### calendars - An array of calendars to search.

# [predicateForRemindersInCalendars:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507086-predicateforremindersincalendars.json?language=objc)
 Fetches all reminders in a set of calendars.
### Parameters
#### calendars - An array of calendars to search.

# [removeCalendar:commit:error:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507523-removecalendar.json?language=objc)
 Removes a calendar from the event store by either batching or committing the changes.
### Parameters
#### calendar - The calendar to be removed.
#### commit - undefined
#### error - The error that occurred, if any; otherwise, 

# [removeEvent:span:error:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1615882-removeevent.json?language=objc)
 Removes an event from the event store. 
### Parameters
#### event - The event to be removed.
#### span - The span to use. Indicates whether to remove future instances of the event in the case of a recurring event.
#### error - The error if one occurred; otherwise, 

# [removeEvent:span:commit:error:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507469-removeevent.json?language=objc)
 Removes an event or recurring events from the event store by either batching or committing the changes.
### Parameters
#### event - The event to remove.
#### span - The span to use. Indicates whether the remove affects future instances of the event in the case of a recurring event.
#### commit - undefined
#### error - The error that occurred, if any did. Otherwise, 

# [removeReminder:commit:error:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507108-removereminder.json?language=objc)
 Removes a reminder from the event store by either committing or batching the changes.
### Parameters
#### reminder - The reminder to be removed.
#### commit - A Boolean value indicating whether to remove the reminder immediately or to batch the removals; passing 
#### error - The error that occurred, if any; otherwise, 

# [saveCalendar:commit:error:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507080-savecalendar.json?language=objc)
 Saves a calendar to the event store by either committing or batching the changes.
### Parameters
#### calendar - The calendar to be saved.
#### commit - undefined
#### error - The error that occurred, if any; otherwise, 

# [saveEvent:span:error:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1615881-saveevent.json?language=objc)
 Saves changes to an event permanently. 
### Parameters
#### event - The event to be saved.
#### span - The span to use. Indicates whether the save affects future instances of the event in the case of a recurring event.
#### error - The error that occurred, if any; otherwise, 

# [saveEvent:span:commit:error:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507295-saveevent.json?language=objc)
 Saves an event or recurring events to the event store by either batching or committing the changes.
### Parameters
#### event - The event to be saved.
#### span - The span to use. Indicates whether the save affects future instances of the event in the case of a recurring event.
#### commit - To save the event immediately, pass 
#### error - The error that occurred, if any; otherwise, 

# [saveReminder:commit:error:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507181-savereminder.json?language=objc)
 Saves changes to a reminder by either committing or batching the changes.
### Parameters
#### reminder - The reminder to be saved.
#### commit - A Boolean value indicating whether to save the reminder immediately or to batch the changes; passing 
#### error - The error that occurred, if any; otherwise, 

# [sourceWithIdentifier:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507521-sourcewithidentifier.json?language=objc)
 Returns a source with the specified identifier.
### Parameters
#### identifier - The source’s unique identifier.

# [initWithSources:](https://developer.apple.com/tutorials/data/documentation/eventkit/ekeventstore/1507179-initwithsources.json?language=objc)
 null

