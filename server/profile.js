Meteor.methods({
    'postProfile': function(name, url, location, description, profile_link_color) {
        var currentProfile = Meteor.users.findOne(Meteor.userId());
        var currentAccessToken = currentProfile.services.twitter.accessToken;
        var currentAccessTokenSecret = currentProfile.services.twitter.accessTokenSecret;
        var Twit = new TwitMaker({
            consumer_key:         'ZLPnBThwox71jWBkJxDOnlmU0'
            , consumer_secret:      'LT9XfVbfjF7trA54VgVt06MbrWiN56SvH2Ul8g8DhTdGFH399B'
            , access_token:         currentAccessToken
            , access_token_secret:  currentAccessTokenSecret
        });
        console.log(currentAccessToken);
        console.log(currentAccessTokenSecret);
        console.log(name);
        Moderation.insert({
            'type': "twitter_profile"
            , 'name': name
            , 'url': url
            , 'location': location
            , 'description': description
            , 'profile_link_color': profile_link_color
        });

    },
    'approveModeratedProfile': function(modId) {
        var currentProfile = Meteor.users.findOne(Meteor.userId());
        var currentAccessToken = currentProfile.services.twitter.accessToken;
        var currentAccessTokenSecret = currentProfile.services.twitter.accessTokenSecret;
        var Twit = new TwitMaker({
            consumer_key:         'ZLPnBThwox71jWBkJxDOnlmU0'
            , consumer_secret:      'LT9XfVbfjF7trA54VgVt06MbrWiN56SvH2Ul8g8DhTdGFH399B'
            , access_token:         currentAccessToken
            , access_token_secret:  currentAccessTokenSecret
        });
        console.log(modId);
        var profile = Moderation.findOne({'_id': modId});
        console.log(profile);
        Twit.post('account/update_profile'
            , { 'name': profile.name
                , 'url': profile.url
                , 'location': profile.location
                , 'description': profile.description
                , 'profile_link_color': profile.profile_link_color}
            , function(err, data, response) {
                console.log(data)
            });
        Moderation.remove({_id: modId});
    }

});
