var ul =  document.getElementById("list-container")

var one = document.getElementById("one")        

function add()
    {
     var listitem = document.createElement("li") 
     
     listitem.innerHTML = one.value + "<button onclick='deleteitem(event)'>Delete</button>"
     
     ul.append(listitem)
    }

         
function deleteitem(event)
{
   event.target.parentElement.remove()
}