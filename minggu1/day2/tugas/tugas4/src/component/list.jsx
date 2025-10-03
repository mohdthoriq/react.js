function fruitList() {
    const fruit = ['apel', 'jeruk', 'mangga', 'pisang', 'anggur']

    return (
        <div>
            <h2>Daftar Buah</h2>
            <ul>
                {fruit.map((fruit, index) => (
                    <li key={index} style={{textAlign: 'left'}}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default fruitList;