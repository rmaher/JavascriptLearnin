      function convt(low,hgh,currencyName,conversionRate) {

        document.write("<link href='conversion.css' rel='stylesheet'>")

        document.write("<table><tr><th>USD</th><th>" + currencyName + "</th>")

          for (i=low;i<=hgh;i++) {

            f=(i*conversionRate).toFixed(2)
              if(i % 2 ==0) {
              document.write("<tr><td class='td1'>"+i + "</td><td class='td1'>" + f +"</td></tr>")
            } else {
              document.write("<tr><td class='td2'>"+i + "</td><td class='td2'>" + f +"</td></tr>")
            }

          }

        document.write("</table>")  

      }