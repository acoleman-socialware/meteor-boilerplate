Template.home.rendered = function() {

};
Template.home.events({
    'submit form': function(event) {

        event.preventDefault();
        var tweet = event.target.tweet.value;
        console.log(tweet);
        // Call a Meteor method and pass through selected player's ID and a value to increment by
        Meteor.call('postTweet', tweet);
    }
})

