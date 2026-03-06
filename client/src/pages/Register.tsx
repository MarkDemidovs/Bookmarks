import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.SubmitEvent) => {
        e.preventDefault();

        const res = await fetch("http://localhost:4000/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, name, password }),
        });

        if (res.ok) {
            navigate("/dashboard");
        } else {
            const data = await res.json();
            setError(data.error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
            />
            {error && <p>{error}</p>}
            <button type="submit">Register!</button>
        </form>
    )
}