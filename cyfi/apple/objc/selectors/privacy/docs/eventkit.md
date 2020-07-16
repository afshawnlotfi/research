# EventKit
# initWithAccessToEntityTypes:
 Initializes access to the event store with support for the given entity type.
### Parameters
#### entityTypes - The event or reminder entity mask.

# requestAccessToEntityType:completion:
 Prompts the user to grant or deny access to event or reminder data.
### Parameters
#### entityType - The event or reminder entity type.
#### completion - The block to call when the request completes.

# authorizationStatusForEntityType:
 Returns the authorization status for the given entity type.
### Parameters
#### entityType - The event or reminder entity type.

# commit:
 Commits all unsaved changes to the event store.
### Parameters
#### error - A pointer to an 

# calendarItemWithIdentifier:
 Returns either the event’s first occurrence or the reminder with the specified identifier.
### Parameters
#### identifier - The calendar item’s unique identifier.

# calendarItemsWithExternalIdentifier:
 Returns either the event’s first occurrences or the reminders with the specified external identifier.
### Parameters
#### externalIdentifier - The calendar item’s external identifier.

# calendarWithIdentifier:
 Returns the calendar with the specified identifier.
### Parameters
#### identifier - The calendar’s unique identifier.

# calendarsForEntityType:
 Returns an array of calendars that support a given entity type, such as reminders or events.
### Parameters
#### entityType - The calendar’s entity type.

# cancelFetchRequest:
 Cancels the request to fetch reminders.
### Parameters
#### fetchIdentifier - The identifier of the request as returned by 

# enumerateEventsMatchingPredicate:usingBlock:
 Finds all events that match a given predicate and calls a given callback for each event found.
### Parameters
#### predicate - The search predicate. Must be created with the 
#### block - The block callback to call for each event. The callback must match the signature defined by 

# eventWithIdentifier:
 Returns the first occurrence of an event with a given identifier.
### Parameters
#### identifier - The identifier of the event.

# eventsMatchingPredicate:
 Returns all events that match a given predicate.
### Parameters
#### predicate - The search predicate. Must be created with the 

# fetchRemindersMatchingPredicate:completion:
 Fetches reminders matching a given predicate.
### Parameters
#### predicate - The search predicate.
#### completion - An array of the matched reminders passed by reference.

# predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:
 Fetches completed reminders in a set of calendars within an optional range.
### Parameters
#### startDate - The starting bound of the range to search.
#### endDate - The ending bound of the range to search.
#### calendars - An array of calendars to search.

# predicateForEventsWithStartDate:endDate:calendars:
 Creates and returns a predicate for finding events in the event store that fall within a given date range.
### Parameters
#### startDate - The start date of the range of events fetched.
#### endDate - The end date of the range of events fetched.
#### calendars - The calendars to search, as an array of 

# predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:
 Fetches incomplete reminders in a set of calendars within an optional range.
### Parameters
#### startDate - The starting bound of the range to search.
#### endDate - The ending bound of the range to search.
#### calendars - An array of calendars to search.

# predicateForRemindersInCalendars:
 Fetches all reminders in a set of calendars.
### Parameters
#### calendars - An array of calendars to search.

# removeCalendar:commit:error:
 Removes a calendar from the event store by either batching or committing the changes.
### Parameters
#### calendar - The calendar to be removed.
#### commit - undefined
#### error - The error that occurred, if any; otherwise, 

# removeEvent:span:error:
 Removes an event from the event store. 
### Parameters
#### event - The event to be removed.
#### span - The span to use. Indicates whether to remove future instances of the event in the case of a recurring event.
#### error - The error if one occurred; otherwise, 

# removeEvent:span:commit:error:
 Removes an event or recurring events from the event store by either batching or committing the changes.
### Parameters
#### event - The event to remove.
#### span - The span to use. Indicates whether the remove affects future instances of the event in the case of a recurring event.
#### commit - undefined
#### error - The error that occurred, if any did. Otherwise, 

# removeReminder:commit:error:
 Removes a reminder from the event store by either committing or batching the changes.
### Parameters
#### reminder - The reminder to be removed.
#### commit - A Boolean value indicating whether to remove the reminder immediately or to batch the removals; passing 
#### error - The error that occurred, if any; otherwise, 

# saveCalendar:commit:error:
 Saves a calendar to the event store by either committing or batching the changes.
### Parameters
#### calendar - The calendar to be saved.
#### commit - undefined
#### error - The error that occurred, if any; otherwise, 

# saveEvent:span:error:
 Saves changes to an event permanently. 
### Parameters
#### event - The event to be saved.
#### span - The span to use. Indicates whether the save affects future instances of the event in the case of a recurring event.
#### error - The error that occurred, if any; otherwise, 

# saveEvent:span:commit:error:
 Saves an event or recurring events to the event store by either batching or committing the changes.
### Parameters
#### event - The event to be saved.
#### span - The span to use. Indicates whether the save affects future instances of the event in the case of a recurring event.
#### commit - To save the event immediately, pass 
#### error - The error that occurred, if any; otherwise, 

# saveReminder:commit:error:
 Saves changes to a reminder by either committing or batching the changes.
### Parameters
#### reminder - The reminder to be saved.
#### commit - A Boolean value indicating whether to save the reminder immediately or to batch the changes; passing 
#### error - The error that occurred, if any; otherwise, 

# sourceWithIdentifier:
 Returns a source with the specified identifier.
### Parameters
#### identifier - The source’s unique identifier.

# initWithSources:
 null

