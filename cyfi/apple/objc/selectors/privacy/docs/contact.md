# Contact
# [initWithKeysToFetch:](https://developer.apple.com/tutorials/data/documentation/contacts/cncontactfetchrequest/1403020-initwithkeystofetch.json?language=objc)
 Creates a fetch request for the specified keys.
### Parameters
#### keysToFetch - An array of contact property keys and/or key descriptors from contacts objects to be fetched in the returned contacts. For a list of possible keys, see 

# [addContact:toContainerWithIdentifier:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1403036-addcontact.json?language=objc)
 Adds the specified contact to the contact store.
### Parameters
#### contact - The new contact to add.
#### identifier - The identifier of the container to add the new contact. To add the new contact to the default container set 

# [updateContact:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1403074-updatecontact.json?language=objc)
 Updates an existing contact in the contact store.
### Parameters
#### contact - The contact to update.

# [deleteContact:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1402970-deletecontact.json?language=objc)
 Deletes a contact from the contact store.
### Parameters
#### contact - Contact to be delete.

# [addGroup:toContainerWithIdentifier:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1402821-addgroup.json?language=objc)
 Adds a group to the contact store.
### Parameters
#### group - The group to add.
#### identifier - The identifier of the container to add the new group. To add the new group to the default container, set 

# [updateGroup:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1403387-updategroup.json?language=objc)
 Updates an existing group in the contact store.
### Parameters
#### group - The group to update.

# [deleteGroup:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1402859-deletegroup.json?language=objc)
 Deletes a group from the contact store.
### Parameters
#### group - The group to delete.

# [addMember:toGroup:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1403180-addmember.json?language=objc)
 Adds a contact as a member of a group.
### Parameters
#### contact - The contact to add to the group membership.
#### group - The group to add the contact to its membership.

# [removeMember:fromGroup:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1403373-removemember.json?language=objc)
 Removes a contact as a member of a group.
### Parameters
#### contact - The contact to remove from the group membership.
#### group - The group to remove the contact from its membership.

# [addSubgroup:toGroup:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1403342-addsubgroup.json?language=objc)
 Add the specified group to a parent group.
### Parameters
#### subgroup - The subgroup to add.
#### group - The parent group in which to add 

# [removeSubgroup:fromGroup:](https://developer.apple.com/tutorials/data/documentation/contacts/cnsaverequest/1403018-removesubgroup.json?language=objc)
 Remove a subgroup from the specified parent group.
### Parameters
#### subgroup - The subgroup to remove.
#### group - The parent group containing 

