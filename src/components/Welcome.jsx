
function Hi({name})
{
    return (
        <h2>Hello {name} ! </h2>
    )
}

export default function Welcome({name,job}) {

    return (

        <p>Welcome 
            <Hi name={name} />, working as a {job} ! </p>
    );

}
