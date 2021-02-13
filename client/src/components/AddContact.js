import {useRef} from 'react';

function  AddContact (){

    const firstName = useRef("");
    const lastName = useRef("");
    const email = useRef("")

    const submitContact = (e) => {
        e.preventDefault();

        //console.log(this.firstName.current.value)
        let contact = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value
        }
        fetch("http://localhost:8080/api/contacts", {
            method : "POST",
            headers : {
                "content-type": "application/json"
            },
            body: JSON.stringify(contact)
        }).then(response => response.json())

        window.location.reload();
    }
        return (
        <div className="row">
            <form className="col s12" onSubmit={submitContact}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="First Name" ref={firstName} type="text" className="validate"/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Last Name" ref={lastName} type="text" className="validate"/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input ref={email} type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                 </div>
                 <div className="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                 </div>
            </form>
        </div>
        )
}

export default AddContact;