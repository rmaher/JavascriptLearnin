

      function shw(cde) {


      	  sl =cde
        
      	switch (sl) {
        
      	case "r1":
      		wt= new Array("1/2 cup vegetable oil", "teaspoon vanilla", "2 large eggs")
      		dr= new Array("1/3 cup cocoa powder", "1 cup sugar", "1/4 teaspoon baking powder", "1/4 teaspoon salt", "1/2 cup flour")
      		mx= new Array("1. Preheat oven to 350°.", "2. Mix oil and sugar until well blended. Add eggs and vanilla; stir just until blended.", "2. Mix all dry ingredients in a separate bowl. Stir dry ingredients into the oil/sugar mixture.", "4. Pour into greased 9 x 9 square pan. Bake for 20 minutes or until sides just start to pull away from the pan.")

            bk = "#800";
            fg = "black"
            mb = "<img src='brownies.jpg'/>";
            tt = "Delicious Brownies"

        break;

        case "r2":
            wt= new Array("1/2 cup butter", "1 egg", "1 teaspoon vanilla extract")
            dr= new Array("1 cup sugar", "1 teaspoon baking powder", "1 1/4 cups flour")
            mx= new Array("1. Preheat oven to 350 degrees Fahrenheit.", "2. Cream butter and sugar in bowl until fluffy. Add egg and mix until well blended.", "3. Mix in baking powder and extract. Add flour by 1/4 cup at a time.", "4. Bake for 14-17 minutes or until lightly golden around the edges.")

            bk = "#008";
            fg = "black"
            mb = "<img src='cookie.jpg'/>";
            tt = "Sugar Cookies"  

      	}
      
      	document.getElementById("title").innerHTML=tt;

      	document.getElementById("dry").style.color=fg;
        document.getElementById('dry').style.font = "15px alternate-gothic-no-2-d,arial";
      	document.getElementById("dry").style.padding="20px";
      	document.getElementById("dry").innerHTML = dr.join(" <br> ");

      	document.getElementById("wet").style.color=fg;
        document.getElementById('wet').style.font = "15px alternate-gothic-no-2-d,arial";
      	document.getElementById("wet").style.padding="20px";
      	document.getElementById("wet").innerHTML = wt.join(" <br> ");

        document.getElementById("mix").style.color=fg;
        document.getElementById('mix').style.font = "15px alternate-gothic-no-2-d,arial";
        document.getElementById("mix").style.padding="20px";
        document.getElementById("mix").innerHTML = mx.join(" <br> ");

        document.getElementById("img").innerHTML=mb
        document.getElementById("img").style.margin = "100px 30px 50px 30px";

      }