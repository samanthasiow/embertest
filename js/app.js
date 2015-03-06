App = Ember.Application.create({});

var dogs = [ "http://www.shibas.org/images/sesameShiba.jpg",
"http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg",
"http://mobilite.mobi/wp-content/uploads/husky-puppy-wallpapers-8.jpg"];

var cats = ["http://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg",
"http://jasonlefkowitz.net/wp-content/uploads/2013/07/Cute-Cats-cats-33440930-1280-800.jpg",
"http://consciouscat.net/wp-content/uploads/2011/03/tabby-cat.jpg"];

var num = 0;

App.Router.map(function() {
  this.route('dogs', { path: '/dogs' });
  this.route('cats', { path: '/cats' });
  this.route('loading', { path: '/loading' });
});

App.DogsRoute = Ember.Route.extend({
  model: function() {
    return dogs;
  }
});

App.CatsRoute = Ember.Route.extend({
  model: function() {
    return cats;
  }
});

App.DogsController = Ember.ObjectController.extend({
  
  actions: {
    moreDog: function(params) {
      dogs.push(params);
      this.transitionToRoute('loading');
    }
  }
});

App.CatsController = Ember.ObjectController.extend({
  actions: {
    moreCat: function(params) {
      cats.push(params);
      this.transitionToRoute('loading');
    }
  }
});

App.DogImage = Ember.View.extend({
  //var dogNum = Math.floor((Math.random() * 3));
  attributeBindings: ['src', 'alt'],
  src: 'http://www.shibas.org/images/sesameShiba.jpg', // note that this path will not work at all if you serve your ember app from an webserver
  alt: 'avatar',
  tagName: 'img'
});

App.CatImage = Ember.View.extend({
  attributeBindings: ['src', 'alt'],
  src: 'http://www.us.onsior.com/images/3_1/cat-3_1-01.png', // note that this path will not work at all if you serve your ember app from an webserver
  alt: 'avatar',
  tagName: 'img'
});

