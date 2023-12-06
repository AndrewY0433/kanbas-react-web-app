import * as client from "./client";
import { useState, useEffect, Link } from "react";
import { useNavigate } from "react-router-dom";
function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    useEffect(() => {
        fetchAccount();
    }, []);

    console.log(account);
    return (
        <div className="w-100">
            <h1>Account</h1>
            {account && (
                <div className="container mt-4">
                    <input
                        className="form-control mb-2"
                        placeholder="Username"
                        value={account.username}
                        onChange={(e) => setAccount({ ...account, username: e.target.value })}
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="Password"
                        type="password"
                        value={account.password}
                        onChange={(e) => setAccount({ ...account, password: e.target.value })}
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="First Name"
                        value={account.firstName}
                        onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="Last Name"
                        value={account.lastName}
                        onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="Date of Birth"
                        type="date"
                        value={account.dob}
                        onChange={(e) => setAccount({ ...account, dob: e.target.value })}
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="Email"
                        type="email"
                        value={account.email}
                        onChange={(e) => setAccount({ ...account, email: e.target.value })}
                    />
                    <select
                        className="form-control mb-2"
                        onChange={(e) => setAccount({ ...account, role: e.target.value })}
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary mr-2" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-secondary" onClick={signout}>
                        Signout
                    </button>
                </div>

            )}
        </div>
    );
}
export default Account;