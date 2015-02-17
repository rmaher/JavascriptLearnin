


      function convt(low,hgh) {

        document.write("<link href='week4stylesheet.css' rel='stylesheet'>")

        document.write("<table border='1'><tr><th>Miles</th><th>Kilometers</th>")

          for (i=low;i<=hgh;i++) {

            f=(i/0.62137).toFixed(1)
              if(i % 2 ==0) {
              document.write("<tr><td class='td1'>"+i + "</td><td class='td1'>" + f +"</td></tr>")
            } else {
              document.write("<tr><td class='td2'>"+i + "</td><td class='td2'>" + f +"</td></tr>")
            }

          }

        document.write("</table>")  

      }
