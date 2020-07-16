
  var chosenCategoryShortName = chooseRandomCategory(categories);


      // TODO: STEP 3: Substitute {{randomCategoryShortName}} in the home html snippet with the
      // chosen category from STEP 2. Use existing insertProperty function for that purpose.
      // Look through this code for an example of how to do use the insertProperty function.
      // WARNING! You are inserting something that will have to result in a valid Javascript
      // syntax because the substitution of {{randomCategoryShortName}} becomes an argument
      // being passed into the $dc.loadMenuItems function. Think about what that argument needs
      // to look like. For example, a valid call would look something like this:
      // $dc.loadMenuItems('L')
      // Hint: you need to surround the chosen category short name with something before inserting
      // it into the home html snippet.
      //
      // var homeHtmlToInsertIntoMainPage = ....

var homeHtmlToInsertIntoMainPage = 
insertProperty(homeHtml, "randomCategoryShortName", "'" + chosenCategoryShortName.short_name + "'");
