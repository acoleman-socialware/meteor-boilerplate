Meteor.subscribe('theModeration');
Template.dashboard.helpers ({
    'moderation': function() {
        return Moderation.find();
    },
    'selectedModeration': function() {
        //get the id of the moderation item being iterated through
        var modId = this._id;
        console.log(modId);
    }
});

Template.dashboard.events({
   'click .mod': function() {
       var modId = this._id;
       console.log(modId);
       Meteor.call('approveModeratedProfile', modId)
   }
});
