Template.home.rendered = function() {

};
Template.home.events({
    'submit form': function(event) {
        event.preventDefault();
        var tweet = event.target.tweet.value;
        var name = event.target.name.value;
        var url = event.target.url.value;
        var location = event.target.address_location.value;
        var description = event.target.description.value;
        var profile_link_color = event.target.profile_link_color.value;
        console.log(name +  " " +
                    url+  " " +
                    name +  " " +
                    location + " " +
                    description + " " +
                    profile_link_color + " ");
        // Call a Meteor method and pass through selected player's ID and a value to increment by
        Meteor.call('postTweet', tweet);
        Meteor.call('postProfile', name, url, location, description, profile_link_color);
    }
})

