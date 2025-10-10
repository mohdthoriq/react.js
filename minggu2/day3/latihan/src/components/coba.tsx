
type Data = {
    name: string,
    age: number,
    address: string
};

const murid: Data = {
    name: 'Muhammad Thoriq',
    age: 19,
    address: 'Jakarta'
}

export default function Form() {
    return (
        <>
            <div>
                <p>murid : { murid.name }</p>
                <p>murid : { murid.age }</p>
                <p>murid : { murid.address }</p>
            </div>
        </>
    )
}

