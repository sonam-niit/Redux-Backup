function UseCase2() {
    const array=[
        {id:1,name:'Laptop',price:99999,rating:4.6},
        {id:2,name:'Pen',price:99,rating:4.6},
        {id:3,name:'Pencil',price:9,rating:4.7},
        {id:4,name:'IPhone',price:134567,rating:5.0},
    ]
    return ( 
        <div>
            <h1 className="text-center text-bg-info p-2">Product List</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Price</th><th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        array.map(item=>(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.rating}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default UseCase2;