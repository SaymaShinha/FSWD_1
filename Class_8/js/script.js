const product = {
    id: 1,
    name: "Wireless Mouse",
    brand: "LogiTech",
    price: 25.99,
    currency: "USD",
    inStock: true,
    category: "Electronics"
};

// object to json
const products_json = JSON.stringify(product);
console.log(products_json);

// json to object
const new_products = JSON.parse(products_json);
console.log(new_products);

// Async function
function blockingTask() {
    console.log("Start");
    setTimeout(() => {
        console.log("Async end");
    }, 3000);
    console.log("End");
}

blockingTask();
console.log("After function");

// promise
// Await
const users = []
const user = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(function a(json){
        setInterval((json) => {
            return json;
        });
      })

console.log(json);