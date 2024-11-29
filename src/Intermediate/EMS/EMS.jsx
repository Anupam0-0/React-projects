import ReactDOM from 'react-dom/client';
import AuthProvider, { AuthContext } from './context/AuthProvider.jsx';
import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';

function EMS() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    );
}

const App = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const [userData, setUserData] = useContext(AuthContext);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const parsedData = JSON.parse(loggedInUser);
            setUser(parsedData.role);
            setLoggedInUserData(parsedData.data);
        }
    }, []);

    const handleLogin = (email, password) => {
        if (userData) {
            const admin = userData.admin?.find(
                (e) => e.email === email && e.password === password
            );

            if (admin) {
                setUser('admin');
                localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
                return;
            }

            const employee = userData.employees?.find(
                (e) => e.email === email && e.password === password
            );

            if (employee) {
                setUser('employee');
                setLoggedInUserData(employee);
                localStorage.setItem(
                    'loggedInUser',
                    JSON.stringify({ role: 'employee', data: employee })
                );
                return;
            }
        }

        alert('Invalid Credentials');
    };

    const handleLogout = () => {
        setUser(null);
        setLoggedInUserData(null);
        localStorage.removeItem('loggedInUser');
    };

    return (
        <>
            {!user && <Login handleLogin={handleLogin} />}
            {user === 'admin' && <AdminDashboard changeUser={handleLogout} />}
            {user === 'employee' && (
                <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
            )}
        </>
    );
};

export default EMS;
