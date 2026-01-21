//  destructing props
let First = ({ address, fullName, age }) => {
    console.log("first component props: ", fullName);
    console.log("first age props: ", age);
    console.log("first address props: ", address);

    return (
        <div>
            <h1>First Component</h1>
            <p>Full Name : {fullName}</p>
            <p>Age : {age}</p>
            <p>Address : {address}</p>
        </div>
    )
}
export default First