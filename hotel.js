function dinnerMenu() {
  document.write("<h3>Dinner Menu</h3>")
  document.write("<h4>Appetizers</h4><h5>FRIED CALAMARI</h5><p>spicy tomato sauce, roasted jalapeno tartar $10</p> <h5>AHI SASHIMI</h5><p>seared rare, blackened, soy vinaigrette, wasabi, pickled ginger $12</p><h5>QUESO DIP</h5><p>roasted poblano, chipotle, warm flour tortillas & chips $7</p><h5>CLASSIC SLIDERS</h5><p>cheese, special sauce $10</p>");
  document.write("<h4>Soups & Salads</h4><h5>SUMMER SALAD</h5><p>romaine, strawberries, avocado, oranges, candied walnuts, leeks $7</p><h5>MIXED FIELD GREENS</h5><p>tomatoes, cucumbers, carrots, leeks, croutons, balsamic vinaigrette $6</p><h5>TOMATO BISQUE</h5><p>fried basil leaf $5</p><h5>CHICKEN TORTILLA</h5><p>creamy white cheddar soup, roasted pasilla, tortilla strips, pico de gallo, avocado, cilantro $6</p>");
  document.write("<h4>Entrees</h4><h5>BLACKENED SWORDFISH</h5><p>cabbage, cilantro, cumin crema, pico de gallo, guacamole, mango & papaya $20</p><h5>HONGOS Y RAJAS</h5><p>shiitake, roasted pasilla, grilled onions, sriracha aïoli, jack, feta, avocado, chili threads $11</p><h5>PENNE WITH CHICKEN</h5><p>mushrooms, asparagus, sun-dried tomatoes, marsala cream sauce, parmesan $15</p><h5>SPICY JAMBALAYA</h5><p>blackened shrimp, chicken-andouille sausage, peppers, crawfish, cajun cream sauce $18</p>");
  document.write("<h4>Dessert</h4><h5>PEACH APPLE COBBLER</h5><p>caramel ice cream $7</p><h5>ICE CREAM</h5><p>vanilla, caramel, mango sorbet, java chip, mint chocolate chip $5</p><h5>BAKED BROWNIE</h5><p>vanilla ice cream $6</p>")

}

function lunchMenu() {
  document.write("<h3>Lunch Menu</h3>")
  document.write("<h4>Soups & Salads</h4><h5>SUMMER SALAD</h5><p>romaine, strawberries, avocado, oranges, candied walnuts, leeks $7</p><h5>MIXED FIELD GREENS</h5><p>tomatoes, cucumbers, carrots, leeks, croutons, balsamic vinaigrette $6</p><h5>TOMATO BISQUE</h5><p>fried basil leaf $5</p><h5>CHICKEN TORTILLA</h5><p>creamy white cheddar soup, roasted pasilla, tortilla strips, pico de gallo, avocado, cilantro $6</p>");
  document.write("<h4>Sandwiches</h4><h5>PEAR & BRIE SANDWICH</h5><p>Watercress, balsamic aioli, caramelized onion on rus c walnut bread. Served with tabbouleh salad $10</p><h5>SOUTHWESTERN BURGER</h5><p>Southwestern spice rubbed 8oz. buffalo burger with chipotle mayo $13</p><h5>CHICKEN & AVACADO SANDWICH</h5><p>Shaved chicken breast, avocado and spinach on nine-grain bread with honey mustard, spiced apple chutney $12</p><h5>CLUB SANDWICH</h5><p>Shaved turkey, smoked bacon, fried egg and Dijon spread $11</p>");
  document.write("<h4>Entrees</h4><h5>BLACKENED SWORDFISH</h5><p>cabbage, cilantro, cumin crema, pico de gallo, guacamole, mango & papaya $20</p><h5>HONGOS Y RAJAS</h5><p>shiitake, roasted pasilla, grilled onions, sriracha aïoli, jack, feta, avocado, chili threads $11</p><h5>PENNE WITH CHICKEN</h5><p>mushrooms, asparagus, sun-dried tomatoes, marsala cream sauce, parmesan $15</p><h5>SPICY JAMBALAYA</h5><p>blackened shrimp, chicken-andouille sausage, peppers, crawfish, cajun cream sauce $18</p>"); 
}

function breakfastMenu() {
  document.write("<h3>Breakfast Menu</h3>")
  document.write("<h4>Basics</h4><h5>EGGS BENEDICT</h5><p>canadian bacon, toasted muffins and hollandaise $11</p><h5>TWO EGGS ANY STYLE</h5><p>breakfast potatoes, choice of meat $8</p><h5>HUEVOS RANCHEROS</h5><p>two eggs, sausage, pinto beans, corn tortillas and ranchero sauce $12</p><h5>BLUEBERRY PANCAKES</h5><p>fresh berries & maple syrup $11</p><h5>STEEL CUT OATMEAL</h5><p>brown sugar, raisins and milk $8</p>");
  document.write("<h4>Sides</h4><h5>BAGEL</h5><p>cream cheese or butter $3</p><h5>YOGURT</h5><p>strawberry or blueberry $2</p><h5>FRESH FRUIT</h5><p>strawberries, bananas & blueberries $4</p>");
}

var now = new Date()
time = now.getHours()


  if (time > 17) {
    dinnerMenu()
  } else if (time > 11) {
    lunchMenu()
  } else {
    breakfastMenu()
  }        
         
