Meteor.subscribe('theModeration');
Template.dashboard.helpers ({
    'moderation': function() {
        return Moderation.find();
    },
    'selectedModeration': function() {
        //get the id of the moderation item being iterated through
        var modId = this._id;
    }
});

Template.dashboard.events({
   'click .modd': function() {
       var moddId = this._id;
       Session.set('selectModd', moddId);
   }
});
