function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}
export default function Form(){
    return (
        <form onSubmit={handleFormSubmit} action="">
            <input placeholder="write something" type="text" />
            <button >Submit</button>
        </form>
    )
}