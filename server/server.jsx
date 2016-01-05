if (MyData.find().count() === 0) {
  _.each(_.range(25), function(){
    MyData.insert({
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar()
    });
  });
}

Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({
    service: "facebook"
  });
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: Meteor.settings.public.facebook.AppID,
    loginStyle: "popup",
    secret: Meteor.settings.facebook.AppSecret
  });
})
