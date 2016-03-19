---
layout: post
title: "arrays and hashes"
date: 2016-02-13 00:57:16 +0000
comments: true
categories: 
---
### ...or finding your Tupperware® lids

![Containers](../imgs/array/containers.jpg)

No one can deny the usefulness of plastic containers--they're light, they're cheap, and they can hold anything from your loose cereal to your boardgame small bits and pieces. These _container objects_ have made themselves indispensible, and it's no wonder that they have transferred over into the world of programming language. In Ruby, specifically, container objects come in the form of arrays and hashes.

### Arrays

    computer_container = ["laptop", "mouse", "charger"]
    => ["computer", "mouse", "charger"]

That up there is an example of a very basic array. In Ruby, an array is a list of things, each item separated by a comma and contained between two square brackets. The great thing about this type of container is that all the items remain ordered in their original position and so by default each item is automatically indexed into their position. You'll see what I mean when I break this down:

![Arrays](../imgs/array/Arrays.jpg)

As the image above shows, once I place these items into the container, they remain in that indexed positioned, so the laptop is now at index "0", the mouse is at index "1", and so on and so forth. This is useful when you need to iterate (or go over the list item by item) by index, or if you want to recall the item by its index as follows:

    computer_container[1]
    => "mouse"

Finally, because of the nature of the array, it's very easy to manipulate their content to be sorted and rearranged. And again, this nature lends itself well for mathematical uses. An array can be created with numbers and then mathemactical operations can be applied internally.

    mathary = (1..5).to_a
    => [1, 2, 3, 4, 5]

    mathary.map { |x| x * 2 }
    => [2, 4, 6, 8, 10]

In the example above, an array containing the numbers one through five was created, then using the map method, it applied the code within the curly braces. In this case, taking each number and multiplying it by two, producing the new array.

So as you can see, arrays are greatly useful for containing an ordered list of things, to-do list item, a list of your favorite numbers, anything! Now, when it comes to providing your own labels to your items, well, we need Array's bigger, more nosy cousin, the Hash.

### Hash

    shiny_hash = { "Edgar"  => 25, 
                   "Oscar"  => 29, 
                   "Booper" => 24 }

A hash is very similar to an array, except for its ability to contain labeled items. Or in other words, a value that is attached to a unique key. In the example above, "Edgar", "Oscar", and "Booper" are all keys pointing to a value of 25, 29, and 24, respectively. In other languages, hashes are also called dictionaries, and it's not hard to see why. Once created and filled with the information you like, values inside the hash can be recalled using its key. Almost like looking up a definition by the word.

> <pre   `
    fancy_dictionary = { "totes"  => "Colloquial term 
                                      for totally", 
                         "LOL"    => "Short for laugh out
                                      loud", 
                         "fleek"  => "Above acceptable in
                                      quality" }`
    </pre>

If we were to create a dictionary hash like the one above, then searching for a definition would be a matter of addressing its key pair, like this:

    fancy_dictionary['fleek']
    => "Above acceptable in quality"

Now, hashes can be just as useful as arrays for containing lots of information, but their unique use comes from methods that allow you to verify or compare keys and values against let's say a variable or even user input. One such example is the creation of email and password hashes that can be used as a way to log in to a website.

Keep in mind this is just a taste of what arrays and hashes can do, if you're interested in finding out more, the Ruby docs contains very detailed information on what you can do with arrays and hashes. [Ruby Array](http://http://ruby-doc.org/core-2.2.0/Array.html) and [Ruby Hash](http://ruby-doc.org/core-2.2.0/Hash.html).