# Contacts
# initWithKeysToFetch:
 Creates a fetch request for the specified keys.
### Parameters
#### keysToFetch - An array of contact property keys and/or key descriptors from contacts objects to be fetched in the returned contacts. For a list of possible keys, see 

# addContact:toContainerWithIdentifier:
 Adds the specified contact to the contact store.
### Parameters
#### contact - The new contact to add.
#### identifier - The identifier of the container to add the new contact. To add the new contact to the default container set 

# updateContact:
 Updates an existing contact in the contact store.
### Parameters
#### contact - The contact to update.

# deleteContact:
 Deletes a contact from the contact store.
### Parameters
#### contact - Contact to be delete.

# addGroup:toContainerWithIdentifier:
 Adds a group to the contact store.
### Parameters
#### group - The group to add.
#### identifier - The identifier of the container to add the new group. To add the new group to the default container, set 

# updateGroup:
 Updates an existing group in the contact store.
### Parameters
#### group - The group to update.

# deleteGroup:
 Deletes a group from the contact store.
### Parameters
#### group - The group to delete.

# addMember:toGroup:
 Adds a contact as a member of a group.
### Parameters
#### contact - The contact to add to the group membership.
#### group - The group to add the contact to its membership.

# removeMember:fromGroup:
 Removes a contact as a member of a group.
### Parameters
#### contact - The contact to remove from the group membership.
#### group - The group to remove the contact from its membership.

# addSubgroup:toGroup:
 Add the specified group to a parent group.
### Parameters
#### subgroup - The subgroup to add.
#### group - The parent group in which to add 

# removeSubgroup:fromGroup:
 Remove a subgroup from the specified parent group.
### Parameters
#### subgroup - The subgroup to remove.
#### group - The parent group containing 


