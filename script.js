const body = document.body

// Works
body.append("Hello World")
// Won't work; needs a node
body.appendChild("Hello World")

// Create an element
const myNewDiv = document.createElement('div')

// Append to the DOM
body.append(myNewDiv)

// Add text
// innerText just grabs the text without formatting
myNewDiv.innerText = "Some new text for our div!"
/// textContent maintains 'formatting'
myNewDiv.textContent = "Some other new text"

// Add html
// But there are security concerns with this!
myNewDiv.innerHTML = "<strong>It's not showing the tags but using them!</strong>"
// One way to avoid using `innerHTML`
const strong = document.createElement('strong')
strong.innerText = "No security issue here!"
myNewDiv.append(strong)

// Remove elements
const test1 = document.querySelector('#test1')
const test2 = document.querySelector('#test2')
// directly
test1.remove()
// remove child element
myNewDiv.removeChild(test1)

// Get values from elements
test1.getAttribute("id") // test1
test1.getAttribute("title") // hello
test1.id // test1
test1.title // hello

// Set values for elements
test1.setAttribute("id", "new-value-in-here")
test1.id = "blah-blah"

// Remove values from elements
test1.removeAttribute('title')
test1.removeAttribute('id')

// Data attributes (these start with `data-` data-hyphen)
// All the `data-` attributes go into a set into the element object
console.log(test1.dataset) // gives all the `data-` items
// We have to notice here that in the console what was 
// 'data-my-data-item-one' in the html becomes myDataItemOne
// in camelCase. So, if we wan't to alter it in the JS we need to 
// use that formet. We also don't include 'data' at the start.

// Get only one data- attribute
test1.dataset.myDataItemOne // NOT test1.dataset.dataMyDataItemOne

// Set a data- attribute
test1.dataset.myDataItemOne = "new value for this!"

// Add classes
test1.classList.add("new-class") 
test1.classList.remove("new-class")
test1.classList.toggle("new-class")
// Can take a boolean
test1.classList.toggle("new-class", true)
test1.classList.toggle("new-class", false)

// Add styles
test1.style.color = "blue"
test1.style.backgroundColor = "red"
test1.style.margin = "50px"



// These were covered in a nice, quick overview
// by Kyle from WebDevSimplified: 
// https://youtu.be/y17RuWkWdn8?si=x5Do4mj4gXw8nW8m

