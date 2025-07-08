import AppBar from "../components/AppBar";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background text-white">
            <AppBar />
            <main className="mt-8 p-4">
                <h1 className="text-3xl font-bold">Welcome to MediVault</h1>
                <p className="mt-4 text-lg">Your trusted Hospital Management System</p>
            </main>
        </div>
    );
}
