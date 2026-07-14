//focusing on add button
var add=document.getElementById("plus")
var popup=document.getElementById("popup")
var popback=document.getElementById("popblack")
add.addEventListener("click",function()
                    {
                                  popback.style.display="block"
                                  popup.style.display="block"

                                 })

//focusing on calcel button
var cbutton=document.getElementById("cancel")
cbutton.addEventListener("click",function()
                        {
                            popback.style.display="none"
                            popup.style.display="none"

                        }


)
//focusing on storing values on the part div
var title=document.getElementById("title")
var part=document.getElementById("part")
var author=document.getElementById("author")
var description=document.getElementById("description")
var container=document.getElementById("container")
function addition(){
        var box=document.createElement("div")
        box.setAttribute("class","part")
        box.innerHTML=`<h3>${title.value}</h3><h4>${author.value}</h4><p>${description.value}</P><button onclick='deletion(event)'>Delete</button>`
        container.append(box)
        popback.style.display="none"
        popup.style.display="none"
        title.value=""
        author.value=""
        description.value=""

}
function deletion(event)
{
    event.target.parentElement.remove()
}