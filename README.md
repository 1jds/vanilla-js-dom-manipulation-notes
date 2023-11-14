# Vanilla JavaScript DOM Manipulation Notes

Basic notes are as comments in the source files. Some further notes are below.

## Using Attributes as Selectors

One can use `querySelectorAll` on attributes/partial attributes to find all elements having those attributes. 
For example, imagine we have a html file that contains several divs with numered ids such as the following:

  ```html
    <section>
      <div id="box1"></div>
      <div id="box2"></div>
      <div id="box3"></div>
    </section>
  ```
In the following way, we could select every element that has an id starting with 'box-'.

  ```js
    let boxes = document.querySelectorAll("[id^='box']");
    let boxMessages = ["I'm box 1, and I like being first", "I'm box 2, and I like pizza", "I'm box 3, and I like coconut"];
    boxes.forEach((item, index) => {
      item.innerText = boxMessages[index];
    });
  ```
