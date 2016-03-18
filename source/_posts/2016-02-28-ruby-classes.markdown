---
layout: post
title: "Ruby Classes"
date: 2016-02-28 19:42:13 +0000
comments: true
categories: [Ruby, coding, classes, object-oriented programming]
---

## ruby classes

### ...or how the west was won

#### February 28, 2016

Everything in Ruby is an object. A common mantra among Rubyists, this is meant to remind you that, just like real-world objects, objects in Ruby respond to different methods and are classified by different attributes. Every object, in turn, can also be categorized by their class, which also happens to be an object in the sense that a person can be categorized by race or gender and race and gender itself, although are conceptual, are also things. Apart from the built-in classes offered in Ruby, you are allowed to create new ones to better run your code in groupings of associated attributes and behaviors. Here's how...

`class MinionCard attr_reader :faction, :name, :power def initialize(faction, name, power) @faction = faction @name = name @power = power end def play(base) check_other_cards(base) @other_cards.each do |card| if card.power <= 2 @other_cards.delete(card) end end base.cards << self end def check_other_cards(base) @other_cards = base.cards end def display puts "#{name} is part of the #{faction} faction, with a power of #{power.to_s}" end end`

But once again, I've gotten ahead of myself. The code above is a representation of a type of card found in the shufflebuilding game called, Smash Up™. The premise of the game is very simple, you take two decks of 20 cards of different factions (such as zombies, ninjas, etc.), and you smash them together to create one 40-card deck. These decks contain minion and action cards that are meant to be placed on other cards that represent bases. An example of the base below for example...

![Smash Up Base](../imgs/ruby-classes/smashupbase.jpg) All right reserved to AEG © 2016

...indicates that after the collective power of all minions there reaches 24, the base breaks and people are awarded the bigger numbers, or in this case everyone is awarded one victory point for every minion on there.

And the possible minion cards in question look something like this:

![Saucy Wench](../imgs/ruby-classes/saucywench.jpg) All right reserved to AEG © 2016

Some things to note, is that not every card has the same play ability, but for the sake of our example let's say they do, and each card can be created with a different faction, name, and power. Once a class has been created, it is said that instances of that class can be created containing the attributes supplied and with the ability to respond to the methods inside it (in our case the play method). Following this example then our Saucy Wench would be initialized as follows:

`saucy_wench = MinionCard.new("Pirates", "Saucy Wench", 3) => [the code produced simply tells you the object has been created]`

So how is this class doing its job, and how is the card being created? Let's break it down a bit. The first line of the code tells us that we're going to define a new class called MinionCard and contained in it will be unique attributes that can be defined at the object's creation time (these are called instance variables), as well the class will define some methods that the card will be able to respond to whenever we decide (these are called instance methods).

The second line contains any instance variables that we would like to be able to read outside of the class, I'll explain what this means a little later. For now, moving to the next piece of code, we have one method that is very common with classes, and that is the initialize method. This method is unique because it can be included with every class in order to dictate what exactly will happen when the object is initialized or first created. It will accept arguments, if you require them for object creation, (in our example we require a faction name, name of the card, and a power number) and then it turns them into instance variables.

### A little more on Instance Variables...

The use of instance variables, these are easily recognizable by their starting "@" symbol, is very important when it comes to classes. They are very similar to local variables with a bit of a larger scope. While local variables can only be used in the area they're defined in--outside of methods, inside a particular method, etc., instance variable can be used anywhere inside the classes, including inside and outside the methods defined in that class.

`class SimpleClass @instance_variable = "now you see me" def instance_method @instance_variable = "now you don't" end @instance_variable = "fin" end`

In the example above the `@instance_variable` is easily accessible throughout the class, including the instance_method in there that later redefines the variable.

### ...but back to the class

After the initialize method we have other methods that can be called on our Saucy Wench once created. There are some advanced concepts in those methods, but nonetheless contain some very key concepts. First, a few assumptions--let's assume that we have another class called `BaseCard` that we then use to create a base called "Rhodes Plaza Mall". The purpose of this class, and the instance of it created thereafter, is to contain the information for the base card shown at the beginning of this post. Let's also assume that this class has an instance variable that allows it to store any cards "played" on it by adding it into an array (remember those?). The play method then can be called with an argument being the base card...

`saucy_wench.play(rhodes_plaza_mall) => #`

...it will then proceed to check if there are any other cards on that base by first running the `check_other_cards` method. The `check_other_cards` method will pass along the same argument variable (the base card name) and run it through what appears to be a `cards` method, but can actually also be an instance variable inside the BaseCard class that happens to be readable or writeable, or both (`attr_reader`, `attr_writer`, or `attr_accessor` respectively). We know that this will be the array that contains all the cards already "played" on that base, and it is placed inside another instance variable for the purpose of being passed around the class. Going back to the `play` method then, it gets a hold of the `base.cards` array as the newly acquired `@other_cards` instance variable, and then proceeds to iterate through those, deleting any cards of power 2 or less (I know, I know, the card says destroy just one, but for the sake of brevity...). Finally, the card then adds itself (`self`) to the roster of cards in the base.

The final method created in the MinionCard class, is the `display`, when called on the `saucy_wench` card it will print out a nicely formatted message with the details of the card.

With that I wrap up my explanation of classes, and I urge you to do some more research on them if they interest you.