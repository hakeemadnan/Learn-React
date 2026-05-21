function handleClick(event){
    console.log("hello");
    console.log(event);
}
function handleMouseOver(){
    console.log("bye")
}
function handleDblclick(){
    console.log("double clicked")
}
export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p onMouseOver={handleMouseOver} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et esse similique, sunt placeat consequatur laudantium doloribus saepe quis nostrum deleniti corrupti aspernatur nesciunt quaerat cumque consequuntur dicta facere rem?
            Officiis, odit laudantium sapiente dolorem magnam consequatur delectus iste distinctio dignissimos? Ratione, facilis cumque. Ex recusandae suscipit explicabo vitae ipsum, eaque repellendus rem quos dolore expedita inventore tenetur sequi voluptatum.
            Explicabo ipsam accusamus vel dolor nobis impedit ea repellendus perspiciatis? Aut illum quia repudiandae quae corrupti doloremque explicabo porro labore. Praesentium animi et expedita non dicta velit illo fugit sed?
            Pariatur, eligendi ea placeat soluta aperiam rerum? Provident natus autem voluptas dicta ipsa assumenda ea reprehenderit exercitationem alias. Consectetur, quas! Corporis architecto excepturi perferendis neque ad necessitatibus qui, adipisci eaque.
            </p>
            <button onDoubleClick={handleDblclick}>dbl Click </button>
        </div>
    )
}