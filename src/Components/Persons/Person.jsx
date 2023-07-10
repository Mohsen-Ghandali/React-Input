const Person = ({ changeFirstName,changeLastName }) => {
    return (
        <div>
            <input type="text" className="form-control mb-2" placeholder="firsName" onChange={(e) => changeFirstName(e)} />

            <input type="text" className="form-control" placeholder="lastName" onChange={(e) => changeLastName(e)} />
        </div>
    );
};

export default Person;




