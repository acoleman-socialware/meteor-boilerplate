Meteor.startup(function() {
  var newRelic = Meteor.npmRequire('newrelic');
  console.log(newRelic);

  Factory.define('item', Items, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

});
